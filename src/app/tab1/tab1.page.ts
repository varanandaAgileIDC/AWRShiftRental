import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { MapPage } from '../modals/map/map.page';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fromField:any;
  fromDate:any;
  fromSelectedDate:any;

  constructor(private platform:Platform,
    private router:Router,
    private alertCtrl:AlertController,
    public appComponent:AppComponent,
    private modalCtrl:ModalController,
    private datePicker:DatePicker,
    private apiService:ApiService) {}

  ionViewDidEnter(){

    let loginDB = JSON.parse(localStorage.getItem("AWRLogin"));
        if(loginDB)
        {

          this.appComponent.name = loginDB["userdata"].first_name + " " + loginDB["userdata"].last_name;

        }
   
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      
      console.log("Back press handler!");
      if (this.router["routerState"].snapshot.url == "/tabs/tab1")
      {
        this.presentConfirm();
      }
    });

  }

  async presentConfirm() {

    let alert = await this.alertCtrl.create({
      //header: "Confirmation Alert",
      message: "Are you sure you want to exit?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Yes clicked");
            navigator["app"].exitApp();
          },
        },
      ],
    });
    await alert.present();
  }

  async pickUpLocation()
  { 
      
    const modal = await this.modalCtrl.create({
        component: MapPage,
        cssClass: "map-modal",
        showBackdrop: true,
      });
      modal.onWillDismiss().then((data) => {
        console.log(data);
      });
      modal.present();
    

  }
  async dropOffLocation()
  {

    const modal = await this.modalCtrl.create({
      component: MapPage,
      cssClass: "map-modal",
      showBackdrop: true,
    });
    modal.onWillDismiss().then((data) => {
      console.log(data);
    });
    modal.present();
  

  }
  startTrip()
  {
   
      this.datePicker
        .show({
          date: new Date(),
          mode: "date",
          minDate: this.platform.is("android")
            ? new Date()
            : new Date().valueOf(),
          allowOldDates: false,
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
        })
        .then(
          (response) => {
            let date = new Date();
  
            let month = response.getMonth()+1;
            let month1 = date.getMonth()+1;
  
            if (response.getDate() == date.getDate() && month==month1)
            {
              response = date;
            }
  
            if (response < date) {
              this.apiService.nativeToast(
                "Please select today or future date"
              );
            } else {
              this.fromDate = response;
  
           var d = (this.fromDate.getDate() < 10 ? '0' : '') + this.fromDate.getDate();
           var m = this.getMonth( this.fromDate);
           var y = this.fromDate.getFullYear();
  
           this.fromSelectedDate = y + "-" + m + "-" + d;
         
           this.fromField = this.fromSelectedDate;
  
            }
  
          },
          (error) => {
            console.log("error response", error);
          }
        );
    
  
  }

  getMonth(date) {
    var month = date.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month; // ('' + month) for string result
  }
 
}
