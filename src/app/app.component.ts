import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic/ngx";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {

  profileImage:any;
  name:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fcm:FCM,
    private router:Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.fcm.getToken().then((token) => {
        console.log("ios fcm key check", token);
        this.fcm.getInitialPushPayload().then((data) => {
          debugger;
          console.log("ios fcm key check", data);
        });
      });
      this.fcm.onTokenRefresh().subscribe((token) => {
        debugger;
        console.log("fcm token", token);
      });

      this.fcm.onNotification().subscribe((data) => {
        debugger
        console.log("data",data);
      });
  
      //this.router.navigateByUrl('/intro');
      let loginDB = JSON.parse(localStorage.getItem("AWRLogin"));
      if(loginDB)
      {
        this.router.navigateByUrl('/tabs', { replaceUrl: true });
      }
      else
      {
        this.router.navigateByUrl('/login', { replaceUrl: true });
        // this.router.navigate([
        //   "otp",
        //   JSON.stringify("xyz")
        // ]);
      }
  
    });
  }

  home()
  {
    this.router.navigate(["/tabs"]);
  }

  tracking()
  {
    this.router.navigate(["/tracking"]);
  }

  breakDown()
  {
    this.router.navigate(["/break-down"]);
  }

  speedCheck()
  {
    this.router.navigate(["/speed-check"]);
  }

  logOut()
  {
    localStorage.removeItem("AWRLogin");
    this.router.navigate(["/login"]);

  }

  editProfile()
  {
    this.router.navigate(["/edit-profile"]);
  }

}
