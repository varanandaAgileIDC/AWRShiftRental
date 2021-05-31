import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  email:any;
  one:any;
  two:any;
  three:any;
  four:any;
  five:any;
  six:any;

  constructor(private activateRoute:ActivatedRoute,
    private apiService:ApiService,
    private router:Router,
    private platform:Platform) 
  {

    let details = this.activateRoute.snapshot.params["data"];
    this.email = JSON.parse(details);

  }

  ngOnInit() {

  }
  ionViewDidEnter(){
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      
      console.log("Back press handler!");
     this.router.navigate(["/register"]);
    });
  }

  resendOtp()
  {

    let PostData = {
      email:this.email,
    }

    this.apiService.postMethod("api/resendotp?",PostData).then((response) => {
   
      console.log(response);

      if(response['status']=='S')
    
        this.apiService.nativeToast(response["message"]);

      },
      (error) => {
    
      console.log(error);
      this.apiService.nativeToast(error.error.message);
      });


  }


  otpValidate() {

    let otpConcat = this.one+this.two+this.three+this.four+this.five+this.six;

    if(otpConcat)
    {

    let PostData = {
      email:this.email,
      otp:otpConcat
    }

    this.apiService.postMethod("api/validateotp?",PostData).then((response) => {
   
      console.log(response);

      if(response['status']=='S')
      {
        if(response["user"].status==0)
        {
          this.apiService.nativeToast(response["message"]);
          this.router.navigateByUrl('/login');
        }
        else
        {
          this.apiService.nativeToast(response["message"]);
          localStorage.setItem("AWRLogin", JSON.stringify(response["user"]));
          this.router.navigate(['/tabs']);
        }
       
      }
      else
      {
        this.apiService.nativeToast(response["message"]);
      }

      },
      (error) => {
  
      console.log(error);
      this.apiService.nativeToast(error.error.message);
      });

  }
  else
  {
    this.apiService.nativeToast("Please enter OTP");
  }

}

}
