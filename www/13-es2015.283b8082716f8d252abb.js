(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{F4UR:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginPageModule",(function(){return f}));var n=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),s=o("tyNb"),a=o("mrSG"),c=o("fXoL"),l=o("H+bZ"),d=o("tk/3");function b(t,e){1&t&&(c.Mb(0,"div"),c.kc(1,"Email is required"),c.Lb())}function p(t,e){if(1&t&&(c.Mb(0,"div",14),c.jc(1,b,2,0,"div",15),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.cc("ngIf",t.f.email.errors.required)}}function u(t,e){1&t&&(c.Mb(0,"div"),c.kc(1,"Password is required"),c.Lb())}function h(t,e){if(1&t&&(c.Mb(0,"div",14),c.jc(1,u,2,0,"div",15),c.Lb()),2&t){const t=c.Wb();c.zb(1),c.cc("ngIf",t.f.password.errors.required)}}const g=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i,r,s){this.router=t,this.apiService=e,this.http=o,this.platform=n,this.alertCtrl=i,this.formBuilder=r,this.menuCtrl=s,this.submitted=!1}ngOnInit(){this.loginForm=this.formBuilder.group({email:["",[i.m.required,i.m.email,i.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",i.m.required]})}ionViewWillEnter(){this.menuCtrl.enable(!1)}xyz(){this.apiService.nativeToast("xyz")}ionViewDidEnter(){this.platform.backButton.subscribeWithPriority(10,t=>{console.log("Back press handler!"),("/login"==this.router.routerState.snapshot.url||"/tabs/tab1"==this.router.routerState.snapshot.url)&&this.presentConfirm()})}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0,this.loginForm.invalid||(console.log(this.loginForm.value),this.login(this.loginForm.value))}login(t){this.apiService.postMethod("api/login?",{email:t.email,password:t.password,usertype:"customer"}).then(t=>{console.log(t),0==t.userdata.status?this.apiService.nativeToast("These credentials do not match our records"):(this.loginForm.reset(),localStorage.setItem("AWRLogin",JSON.stringify(t)),this.router.navigate(["/tabs"]))},t=>{console.log(t),this.apiService.nativeToast(t.error.message)})}register(){this.router.navigateByUrl("/register")}presentConfirm(){return Object(a.a)(this,void 0,void 0,(function*(){let t=yield this.alertCtrl.create({message:"Are you sure you want to exit?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}},{text:"Yes",handler:()=>{console.log("Yes clicked"),navigator.app.exitApp()}}]});yield t.present()}))}forgotPassword(){this.alertCtrl.create({subHeader:"Forgot Password",inputs:[{name:"email",placeholder:"Please enter registered email"}],buttons:[{text:"Cancel",handler:t=>{console.log("Canceled",t)}},{text:"Done",handler:t=>{console.log("sending Information",t);let e=this.validateEmail(t.email);""==t.email?this.apiService.nativeToast("Please enter your registered email"):e?this.forgotApi(t.email):e||this.apiService.nativeToast("You have entered an invalid email")}}]}).then(t=>{t.present()})}validateEmail(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}forgotApi(t){this.apiService.postMethod("api/forgot-password?",{email:t}).then(t=>{console.log(t),this.apiService.nativeToast(t.message)},t=>{console.log(t),this.apiService.nativeToast(t.error.message)})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(s.g),c.Jb(l.a),c.Jb(d.a),c.Jb(r.N),c.Jb(r.b),c.Jb(i.a),c.Jb(r.L))},t.\u0275cmp=c.Db({type:t,selectors:[["app-login"]],decls:31,vars:3,consts:[["src","../../../assets/login-banner.png",2,"margin-top","-2px"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["position","floating"],["type","email","formControlName","email"],["class","invalid-feedback",4,"ngIf"],[1,"password"],["type","password","formControlName","password"],["type","submit","expand","block",1,"ion-color-primary"],[2,"text-align","center","color","#1D97DB","margin-top","-10px"],[3,"click"],[2,"font-size","14px","text-align","center"],["expand","block",1,"ion-color-primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(c.Mb(0,"div"),c.Kb(1,"img",0),c.Lb(),c.Mb(2,"ion-content"),c.Mb(3,"h5"),c.kc(4,"Let's Go Anywhere, Anytime"),c.Lb(),c.Mb(5,"form",1),c.Ub("ngSubmit",(function(){return e.onSubmit()})),c.Mb(6,"div",2),c.Mb(7,"div",3),c.Mb(8,"ion-item"),c.Mb(9,"ion-label",4),c.kc(10,"Email address"),c.Lb(),c.Kb(11,"ion-input",5),c.Lb(),c.Lb(),c.jc(12,p,2,1,"div",6),c.Mb(13,"div",3),c.Mb(14,"ion-item",7),c.Mb(15,"ion-label",4),c.kc(16,"Password"),c.Lb(),c.Kb(17,"ion-input",8),c.Lb(),c.Lb(),c.jc(18,h,2,1,"div",6),c.Lb(),c.Mb(19,"ion-button",9),c.kc(20,"Login"),c.Lb(),c.Mb(21,"div",10),c.Mb(22,"b"),c.Mb(23,"p",11),c.Ub("click",(function(){return e.forgotPassword()})),c.kc(24,"Forgot Password"),c.Lb(),c.Lb(),c.Lb(),c.Mb(25,"h6"),c.kc(26,"Or"),c.Lb(),c.Mb(27,"p",12),c.kc(28,"if you don't have an account please"),c.Lb(),c.Mb(29,"ion-button",13),c.Ub("click",(function(){return e.register()})),c.kc(30,"Register"),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(5),c.cc("formGroup",e.loginForm),c.zb(7),c.cc("ngIf",e.submitted&&e.f.email.errors),c.zb(6),c.cc("ngIf",e.submitted&&e.f.password.errors))},directives:[r.k,i.n,i.i,i.c,r.q,r.r,r.p,r.P,i.h,i.b,n.j,r.g],styles:["ion-content[_ngcontent-%COMP%]{--padding-start:10%;--padding-end:10%;--background:#fff;--color:#484d52}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.uae-flag[_ngcontent-%COMP%]{width:73px;height:18px;position:absolute;margin-top:19px;border-right:1px solid #999}.uae-flag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;float:left}.mobile-number[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .mobile-number[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:80px}ion-button.ion-color-primary[_ngcontent-%COMP%]{--background:#1d97db}ion-button.ion-color-primary[_ngcontent-%COMP%], ion-button.ion-color-secondary[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:14px;height:55px;text-transform:capitalize}ion-button.ion-color-secondary[_ngcontent-%COMP%]{--background:#eef4fa;--color:#484d52}ion-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:10px}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center}h5[_ngcontent-%COMP%]{color:#1d97db;margin-bottom:30px}"]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(g)],s.i]}),t})(),f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[n.b,i.d,r.I,m,i.l]]}),t})()},"H+bZ":function(t,e,o){"use strict";o.d(e,"a",(function(){return h}));var n=o("mrSG"),i=o("tk/3"),r=o("HDdC"),s=o("7o/Q");function a(t=-1){return e=>e.lift(new c(t,e))}class c{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new l(t,this.count,this.source))}}class l extends s.a{constructor(t,e,o){super(t),this.count=e,this.source=o}error(t){if(!this.isStopped){const{source:e,count:o}=this;if(0===o)return super.error(t);o>-1&&(this.count=o-1),e.subscribe(this._unsubscribeAndRecycle())}}}var d=o("JIr8"),b=o("fXoL"),p=o("SmVF"),u=o("TEn/");let h=(()=>{class t{constructor(t,e,o){this.http=t,this.toastCtrl=e,this.loadingCtrl=o,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.addressPopUp="pickUp",this.httpOptions={headers:new i.c({"Content-Type":"application/json"})}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: `+t.error),new r.a(t=>t.error("Something bad happened; please try again later."))}getRequest(t){return this.http.get(this.base_path+JSON.stringify(t),this.httpOptions).pipe(a(2),Object(d.a)(this.handleError))}postRequest(t,e){return this.http.post(this.base_path+t,e,this.httpOptions).pipe(a(),Object(d.a)(this.handleError))}postMethod(t,e){return new Promise((o,n)=>{this.showLoader(),this.http.post(this.base_path+t,e).subscribe(t=>{this.hideLoader(),o(t)},t=>{this.hideLoader(),n(t)})})}nativeToast(t){this.toastCtrl.show(t,"4000","bottom").subscribe(t=>{console.log(t)})}showLoader(){return Object(n.a)(this,void 0,void 0,(function*(){return this.isLoading=!0,yield this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then(t=>{t.present().then(()=>{console.log("loading presented"),this.isLoading||t.dismiss().then(()=>console.log("abort loading"))})})}))}hideLoader(){return Object(n.a)(this,void 0,void 0,(function*(){return this.isLoading=!1,yield this.loadingCtrl.dismiss().then(()=>console.log("loading dismissed"))}))}}return t.\u0275fac=function(e){return new(e||t)(b.Qb(i.a),b.Qb(p.a),b.Qb(u.K))},t.\u0275prov=b.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);