import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Platform } from '@ionic/angular';
import * as moment from "moment";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.page.html',
  styleUrls: ['./service-request.page.scss'],
})
export class ServiceRequestPage implements OnInit {

  vehicleNumbers = [];
  serviceDate:any;
  startDate:any;

  constructor(private platform:Platform,
    private router:Router,
    private datePicker:DatePicker,
    private apiService:ApiService) { }

  ngOnInit() {
    this.vehicleNumbers = [{
      vehicleNumber:"A 92868",
      name:"Lamborghini Diablo"
    },
    {
      vehicleNumber:"A 93868",
      name:"Ford Raptor"
    },
    {
      vehicleNumber:"A 94868",
      name:"Ferrari Testarossa",
    },
    {
      vehicleNumber:"A 95868",
      name:"Porsche 911 Carrera"
    },
    {
      vehicleNumber:"A 92868",
      name:"Jensen Interceptor"
    },
    {
      vehicleNumber:"A 93868",
      name:"Lamborghini Huracán"
    },
    {
      vehicleNumber:"A 94868",
      name:"Ferrari 812 Superfast",
    },
    {
      vehicleNumber:"A 95868",
      name:"Jeep Gladiator"
    }]
  }

  ionViewDidEnter(){
   
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      
      console.log("Back press handler!");
     this.router.navigate(["/tabs"]);
    });
  }

  pickDate()
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
              this.startDate = response;
  
          //  var d = (this.startDate.getDate() < 10 ? '0' : '') + this.startDate.getDate();
          //  var m = this.getMonth( this.startDate);
          //  var y = this.startDate.getFullYear();
          //  this.startSelectedDate = d + "-" + m + "-" + y;

           let newDate = moment(response, "MM:DD:YYYY");
           let momentDate = newDate.format("MMM DD YYYY")

           let time = moment(response, "HH-MM A");
           let momentTime = time.format("hh:mm a");

           this.serviceDate = momentDate + ", " + momentTime; 
           

            }
  
          },
          (error) => {
            console.log("error response", error);
          }
        );
  }


}
