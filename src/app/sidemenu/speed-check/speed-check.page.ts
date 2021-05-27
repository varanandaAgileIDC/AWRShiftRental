import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-speed-check',
  templateUrl: './speed-check.page.html',
  styleUrls: ['./speed-check.page.scss'],
})
export class SpeedCheckPage implements OnInit {

  constructor(private platform:Platform,
    private router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      debugger
      console.log("Back press handler!");
     this.router.navigate(["/tabs"]);
    });
  }

}
