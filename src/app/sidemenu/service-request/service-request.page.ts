import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.page.html',
  styleUrls: ['./service-request.page.scss'],
})
export class ServiceRequestPage implements OnInit {

  constructor(private platform:Platform,
    private router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
   
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      
      console.log("Back press handler!");
     this.router.navigate(["/tabs"]);
    });
  }

}
