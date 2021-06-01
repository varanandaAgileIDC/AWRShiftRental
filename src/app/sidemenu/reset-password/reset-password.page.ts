import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { MustMatch } from 'src/app/pages/register/must-match.validator';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  resetForm:FormGroup;
  submitted = false;
  users:any;

  oldPassword = "password";
  passwordTypeA = "password";
  passwordTypeB = "password";

  constructor(private formBuilder:FormBuilder,
    private platform:Platform,
    private router:Router,
    private apiService:ApiService) { }

  ngOnInit() {

    this.resetForm = this.formBuilder.group({
      currentPassword: ["", [Validators.required]],
      newPassword: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });

   }


  ionViewDidEnter(){

    let loginDB = JSON.parse(localStorage.getItem("AWRLogin"));
    if(loginDB)
    {
      this.users = loginDB["userdata"];
    }

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
   
      console.log("Back press handler!");
     this.router.navigate(["/tabs"]);
    });
  }

  hideShowA() {
    this.passwordTypeA = this.passwordTypeA === "text" ? "password" : "text";
  }

  oldHideShow() {
    this.oldPassword = this.oldPassword === "text" ? "password" : "text";
  }

  hideShowB() {
    this.passwordTypeB = this.passwordTypeB === "text" ? "password" : "text";
  }

  get f() {
    return this.resetForm.controls;
  }

  onSubmit() {
  
    this.submitted = true;
    console.log(this.resetForm.controls.errors);
    if (this.resetForm.invalid) {
      return;
    } else {
    
      console.log(this.resetForm.value);
      this.reset(this.resetForm.value);
    }
  }


  reset(formData) {
  
    let PostData = {
      id:this.users["id"],
      current_password:formData.currentPassword,
      new_password:formData.newPassword,
      confirm_password:formData.confirmPassword
    }
      
    this.apiService.postMethod("api/change-password?",PostData).then((response) => {
   
      console.log(response);
      if(response["status"]=="S")
      {
        this.apiService.nativeToast(response["message"]);
        this.resetForm.reset();
        this.router.navigate(['/login']);
      }
      else
      {

        if(response["errors"])
        {
          this.apiService.nativeToast(response["errors"]);
        }
        else
        {
          this.apiService.nativeToast(response["message"]);
        }
       
      }

      },
      (error) => {
      
      console.log(error);
      this.apiService.nativeToast(error.error.message);
      });

  }

}
