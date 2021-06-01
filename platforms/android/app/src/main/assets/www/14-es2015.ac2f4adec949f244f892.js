(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{F4UR:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginPageModule",(function(){return f}));var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),s=o("mrSG"),l=o("fXoL"),c=o("H+bZ"),b=o("tk/3");function d(t,e){1&t&&(l.Mb(0,"div"),l.jc(1,"Email is required"),l.Lb())}function g(t,e){if(1&t&&(l.Mb(0,"div",14),l.ic(1,d,2,0,"div",15),l.Lb()),2&t){const t=l.Wb();l.zb(1),l.bc("ngIf",t.f.email.errors.required)}}function p(t,e){1&t&&(l.Mb(0,"div"),l.jc(1,"Password is required"),l.Lb())}function u(t,e){if(1&t&&(l.Mb(0,"div",14),l.ic(1,p,2,0,"div",15),l.Lb()),2&t){const t=l.Wb();l.zb(1),l.bc("ngIf",t.f.password.errors.required)}}const m=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i,r,a){this.router=t,this.apiService=e,this.http=o,this.platform=n,this.alertCtrl=i,this.formBuilder=r,this.menuCtrl=a,this.submitted=!1}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[i.m.required,i.m.email,i.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",i.m.required]})}ionViewWillEnter(){this.menuCtrl.enable(!1)}xyz(){this.apiService.nativeToast("xyz")}ionViewDidEnter(){this.platform.backButton.subscribeWithPriority(10,t=>{console.log("Back press handler!"),("/login"==this.router.routerState.snapshot.url||"/tabs/tab1"==this.router.routerState.snapshot.url)&&this.presentConfirm()})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||(console.log(this.loginForm.value),this.login(this.loginForm.value))}login(t){this.apiService.postMethod("api/login?",{email:t.email,password:t.password,usertype:"customer"}).then(t=>{console.log(t),0==t.userdata.status?this.apiService.nativeToast("These credentials do not match our records"):(this.loginForm.reset(),localStorage.setItem("AWRLogin",JSON.stringify(t)),this.router.navigate(["/tabs"]))},t=>{console.log(t),this.apiService.nativeToast(t.error.message)})}register(){this.router.navigateByUrl("/register")}presentConfirm(){return Object(s.a)(this,void 0,void 0,(function*(){let t=yield this.alertCtrl.create({message:"Are you sure you want to exit?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}},{text:"Yes",handler:()=>{console.log("Yes clicked"),navigator.app.exitApp()}}]});yield t.present()}))}forgotPassword(){this.alertCtrl.create({subHeader:"Forgot Password",inputs:[{name:"email",placeholder:"Please enter registered email"}],buttons:[{text:"Cancel",handler:t=>{console.log("Canceled",t)}},{text:"Done",handler:t=>{console.log("sending Information",t);let e=this.validateEmail(t.email);""==t.email?this.apiService.nativeToast("Please enter your registered email"):e?this.forgotApi(t.email):e||this.apiService.nativeToast("You have entered an invalid email")}}]}).then(t=>{t.present()})}validateEmail(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}forgotApi(t){this.apiService.postMethod("api/forgot-password?",{email:t}).then(t=>{console.log(t),this.apiService.nativeToast(t.message)},t=>{console.log(t),this.apiService.nativeToast(t.error.message)})}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(a.g),l.Jb(c.a),l.Jb(b.a),l.Jb(r.M),l.Jb(r.b),l.Jb(i.a),l.Jb(r.K))},t.\u0275cmp=l.Db({type:t,selectors:[["app-login"]],decls:31,vars:3,consts:[["src","../../../assets/login-banner.png",2,"margin-top","-2px"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["position","floating"],["type","email","formControlName","email"],["class","invalid-feedback",4,"ngIf"],[1,"password"],["type","password","formControlName","password"],["type","submit","expand","block",1,"ion-color-primary"],[2,"text-align","center","color","#1D97DB","margin-top","-10px"],[3,"click"],[2,"font-size","14px","text-align","center"],["expand","block",1,"ion-color-primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(l.Mb(0,"div"),l.Kb(1,"img",0),l.Lb(),l.Mb(2,"ion-content"),l.Mb(3,"h5"),l.jc(4,"Let's Go Anywhere, Anytime"),l.Lb(),l.Mb(5,"form",1),l.Ub("ngSubmit",(function(){return e.onSubmit()})),l.Mb(6,"div",2),l.Mb(7,"div",3),l.Mb(8,"ion-item"),l.Mb(9,"ion-label",4),l.jc(10,"Email address"),l.Lb(),l.Kb(11,"ion-input",5),l.Lb(),l.Lb(),l.ic(12,g,2,1,"div",6),l.Mb(13,"div",3),l.Mb(14,"ion-item",7),l.Mb(15,"ion-label",4),l.jc(16,"Password"),l.Lb(),l.Kb(17,"ion-input",8),l.Lb(),l.Lb(),l.ic(18,u,2,1,"div",6),l.Lb(),l.Mb(19,"ion-button",9),l.jc(20,"Login"),l.Lb(),l.Mb(21,"div",10),l.Mb(22,"b"),l.Mb(23,"p",11),l.Ub("click",(function(){return e.forgotPassword()})),l.jc(24,"Forgot Password"),l.Lb(),l.Lb(),l.Lb(),l.Mb(25,"h6"),l.jc(26,"Or"),l.Lb(),l.Mb(27,"p",12),l.jc(28,"if you don't have an account please"),l.Lb(),l.Mb(29,"ion-button",13),l.Ub("click",(function(){return e.register()})),l.jc(30,"Register"),l.Lb(),l.Lb(),l.Lb()),2&t&&(l.zb(5),l.bc("formGroup",e.loginForm),l.zb(7),l.bc("ngIf",e.submitted&&e.f.email.errors),l.zb(6),l.bc("ngIf",e.submitted&&e.f.password.errors))},directives:[r.j,i.n,i.i,i.c,r.p,r.q,r.o,r.O,i.h,i.b,n.j,r.f],styles:["ion-content[_ngcontent-%COMP%]{--padding-start:10%;--padding-end:10%;--background:#fff;--color:#484d52}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.uae-flag[_ngcontent-%COMP%]{width:73px;height:18px;position:absolute;margin-top:19px;border-right:1px solid #999}.uae-flag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;float:left}.mobile-number[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .mobile-number[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:80px}ion-button.ion-color-primary[_ngcontent-%COMP%]{--background:#1d97db}ion-button.ion-color-primary[_ngcontent-%COMP%], ion-button.ion-color-secondary[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:14px;height:55px;text-transform:capitalize}ion-button.ion-color-secondary[_ngcontent-%COMP%]{--background:#eef4fa;--color:#484d52}ion-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:10px}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center}h5[_ngcontent-%COMP%]{color:#1d97db;margin-bottom:30px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(m)],a.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.d,r.H,h,i.l]]}),t})()}}]);