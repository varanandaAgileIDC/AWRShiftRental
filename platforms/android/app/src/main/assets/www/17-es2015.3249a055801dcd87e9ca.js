(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"H+bZ":function(t,o,e){"use strict";e.d(o,"a",(function(){return h}));var n=e("mrSG"),r=e("tk/3"),s=e("HDdC"),i=e("7o/Q");function c(t=-1){return o=>o.lift(new a(t,o))}class a{constructor(t,o){this.count=t,this.source=o}call(t,o){return o.subscribe(new d(t,this.count,this.source))}}class d extends i.a{constructor(t,o,e){super(t),this.count=o,this.source=e}error(t){if(!this.isStopped){const{source:o,count:e}=this;if(0===e)return super.error(t);e>-1&&(this.count=e-1),o.subscribe(this._unsubscribeAndRecycle())}}}var b=e("JIr8"),u=e("fXoL"),p=e("SmVF"),l=e("TEn/");let h=(()=>{class t{constructor(t,o,e){this.http=t,this.toastCtrl=o,this.loadingCtrl=e,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.addressPopUp="pickUp",this.httpOptions={headers:new r.c({"Content-Type":"application/json"})}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: `+t.error),new s.a(t=>t.error("Something bad happened; please try again later."))}getRequest(t){return this.http.get(this.base_path+JSON.stringify(t),this.httpOptions).pipe(c(2),Object(b.a)(this.handleError))}postRequest(t,o){return this.http.post(this.base_path+t,o,this.httpOptions).pipe(c(),Object(b.a)(this.handleError))}postMethod(t,o){return new Promise((e,n)=>{this.showLoader(),this.http.post(this.base_path+t,o).subscribe(t=>{this.hideLoader(),e(t)},t=>{this.hideLoader(),n(t)})})}nativeToast(t){this.toastCtrl.show(t,"4000","bottom").subscribe(t=>{console.log(t)})}showLoader(){return Object(n.a)(this,void 0,void 0,(function*(){return this.isLoading=!0,yield this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then(t=>{t.present().then(()=>{console.log("loading presented"),this.isLoading||t.dismiss().then(()=>console.log("abort loading"))})})}))}hideLoader(){return Object(n.a)(this,void 0,void 0,(function*(){return this.isLoading=!1,yield this.loadingCtrl.dismiss().then(()=>console.log("loading dismissed"))}))}}return t.\u0275fac=function(o){return new(o||t)(u.Qb(r.a),u.Qb(p.a),u.Qb(l.K))},t.\u0275prov=u.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},cWba:function(t,o,e){"use strict";e.r(o),e.d(o,"ResetPasswordPageModule",(function(){return L}));var n=e("ofXK"),r=e("3Pt+"),s=e("TEn/"),i=e("tyNb"),c=e("mrSG"),a=e("fXoL"),d=e("H+bZ");function b(t,o){if(1&t){const t=a.Nb();a.Mb(0,"ion-icon",13),a.Ub("click",(function(){return a.gc(t),a.Wb().oldHideShow()})),a.Lb()}}function u(t,o){if(1&t){const t=a.Nb();a.Mb(0,"ion-icon",14),a.Ub("click",(function(){return a.gc(t),a.Wb().oldHideShow()})),a.Lb()}}function p(t,o){1&t&&(a.Mb(0,"div"),a.kc(1,"Current password is required"),a.Lb())}function l(t,o){if(1&t&&(a.Mb(0,"div",15),a.jc(1,p,2,0,"div",16),a.Lb()),2&t){const t=a.Wb();a.zb(1),a.cc("ngIf",t.f.currentPassword.errors.required)}}function h(t,o){if(1&t){const t=a.Nb();a.Mb(0,"ion-icon",13),a.Ub("click",(function(){return a.gc(t),a.Wb().hideShowA()})),a.Lb()}}function f(t,o){if(1&t){const t=a.Nb();a.Mb(0,"ion-icon",14),a.Ub("click",(function(){return a.gc(t),a.Wb().hideShowA()})),a.Lb()}}function g(t,o){1&t&&(a.Mb(0,"div"),a.kc(1,"New Password is required"),a.Lb())}function w(t,o){if(1&t&&(a.Mb(0,"div",15),a.jc(1,g,2,0,"div",16),a.Lb()),2&t){const t=a.Wb();a.zb(1),a.cc("ngIf",t.f.newPassword.errors.required)}}function m(t,o){if(1&t){const t=a.Nb();a.Mb(0,"ion-icon",13),a.Ub("click",(function(){return a.gc(t),a.Wb().hideShowB()})),a.Lb()}}function y(t,o){if(1&t){const t=a.Nb();a.Mb(0,"ion-icon",14),a.Ub("click",(function(){return a.gc(t),a.Wb().hideShowB()})),a.Lb()}}function P(t,o){1&t&&(a.Mb(0,"div"),a.kc(1,"Confirm Password is required"),a.Lb())}function v(t,o){if(1&t&&(a.Mb(0,"div",15),a.jc(1,P,2,0,"div",16),a.Lb()),2&t){const t=a.Wb();a.zb(1),a.cc("ngIf",t.f.confirmPassword.errors.required)}}const M=[{path:"",component:(()=>{class t{constructor(t,o,e,n,r){this.formBuilder=t,this.platform=o,this.router=e,this.apiService=n,this.alertCtrl=r,this.submitted=!1,this.oldPassword="password",this.passwordTypeA="password",this.passwordTypeB="password"}ngOnInit(){this.resetForm=this.formBuilder.group({currentPassword:["",[r.m.required]],newPassword:["",r.m.required],confirmPassword:["",r.m.required]})}ionViewDidEnter(){let t=JSON.parse(localStorage.getItem("AWRLogin"));t&&(this.users=t.userdata),this.platform.backButton.subscribeWithPriority(10,t=>{console.log("Back press handler!"),"/tabs/tab1"==this.router.routerState.snapshot.url?this.presentConfirm():this.router.navigate(["/tabs"])})}hideShowA(){this.passwordTypeA="text"===this.passwordTypeA?"password":"text"}oldHideShow(){this.oldPassword="text"===this.oldPassword?"password":"text"}hideShowB(){this.passwordTypeB="text"===this.passwordTypeB?"password":"text"}get f(){return this.resetForm.controls}presentConfirm(){return Object(c.a)(this,void 0,void 0,(function*(){let t=yield this.alertCtrl.create({message:"Are you sure you want to exit?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}},{text:"Yes",handler:()=>{console.log("Yes clicked"),navigator.app.exitApp()}}]});yield t.present()}))}onSubmit(){this.submitted=!0,console.log(this.resetForm.controls.errors),this.resetForm.invalid||(console.log(this.resetForm.value),this.reset(this.resetForm.value))}reset(t){this.apiService.postMethod("api/change-password?",{id:this.users.id,current_password:t.currentPassword,new_password:t.newPassword,confirm_password:t.confirmPassword}).then(t=>{console.log(t),"S"==t.status?(this.apiService.nativeToast(t.message),this.resetForm.reset(),this.router.navigate(["/login"])):this.apiService.nativeToast(t.errors?t.errors:t.message)},t=>{console.log(t),this.apiService.nativeToast(t.error.message)})}}return t.\u0275fac=function(o){return new(o||t)(a.Jb(r.a),a.Jb(s.N),a.Jb(i.g),a.Jb(d.a),a.Jb(s.b))},t.\u0275cmp=a.Db({type:t,selectors:[["app-reset-password"]],decls:36,vars:13,consts:[["slot","start"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["position","floating"],["type","email","formControlName","currentPassword",3,"type"],["class","eyeIcon","slot","end","name","eye-off-outline",3,"click",4,"ngIf"],["class","eyeIcon","slot","end","name","eye-outline",3,"click",4,"ngIf"],["class","invalid-feedback feedBack",4,"ngIf"],["type","password","formControlName","newPassword",3,"type"],[1,"password"],["type","password","formControlName","confirmPassword",3,"type"],["type","submit","expand","block",1,"ion-color-primary"],["slot","end","name","eye-off-outline",1,"eyeIcon",3,"click"],["slot","end","name","eye-outline",1,"eyeIcon",3,"click"],[1,"invalid-feedback","feedBack"],[4,"ngIf"]],template:function(t,o){1&t&&(a.Mb(0,"ion-content"),a.Mb(1,"ion-header"),a.Mb(2,"ion-toolbar"),a.Mb(3,"ion-buttons",0),a.Kb(4,"ion-menu-button"),a.Lb(),a.Mb(5,"ion-title"),a.kc(6," Reset Password "),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"ion-content"),a.Mb(8,"form",1),a.Ub("ngSubmit",(function(){return o.onSubmit()})),a.Mb(9,"div",2),a.Mb(10,"div",3),a.Mb(11,"ion-item"),a.Mb(12,"ion-label",4),a.kc(13,"Current Password"),a.Lb(),a.Kb(14,"ion-input",5),a.jc(15,b,1,0,"ion-icon",6),a.jc(16,u,1,0,"ion-icon",7),a.Lb(),a.Lb(),a.jc(17,l,2,1,"div",8),a.Mb(18,"div",3),a.Mb(19,"ion-item"),a.Mb(20,"ion-label",4),a.kc(21,"New Password"),a.Lb(),a.Kb(22,"ion-input",9),a.jc(23,h,1,0,"ion-icon",6),a.jc(24,f,1,0,"ion-icon",7),a.Lb(),a.Lb(),a.jc(25,w,2,1,"div",8),a.Mb(26,"div",3),a.Mb(27,"ion-item",10),a.Mb(28,"ion-label",4),a.kc(29,"Confirm Password"),a.Lb(),a.Kb(30,"ion-input",11),a.jc(31,m,1,0,"ion-icon",6),a.jc(32,y,1,0,"ion-icon",7),a.Lb(),a.Lb(),a.jc(33,v,2,1,"div",8),a.Lb(),a.Mb(34,"ion-button",12),a.kc(35,"Reset"),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(8),a.cc("formGroup",o.resetForm),a.zb(6),a.cc("type",o.oldPassword),a.zb(1),a.cc("ngIf","password"==o.oldPassword),a.zb(1),a.cc("ngIf","text"==o.oldPassword),a.zb(1),a.cc("ngIf",o.submitted&&o.f.currentPassword.errors),a.zb(5),a.cc("type",o.passwordTypeA),a.zb(1),a.cc("ngIf","password"==o.passwordTypeA),a.zb(1),a.cc("ngIf","text"==o.passwordTypeA),a.zb(1),a.cc("ngIf",o.submitted&&o.f.newPassword.errors),a.zb(5),a.cc("type",o.passwordTypeB),a.zb(1),a.cc("ngIf","password"==o.passwordTypeB),a.zb(1),a.cc("ngIf","text"==o.passwordTypeB),a.zb(1),a.cc("ngIf",o.submitted&&o.f.confirmPassword.errors))},directives:[s.k,s.n,s.H,s.h,s.u,s.G,r.n,r.i,r.c,s.q,s.r,s.p,s.P,r.h,r.b,n.j,s.g,s.o],styles:["ion-title[_ngcontent-%COMP%]{float:left;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff;float:left}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px;margin-left:20px;margin-right:20px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;color:#484d52;--highlight-color-focused:transparent}ion-button[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}ion-button.ion-color-primary[_ngcontent-%COMP%]{--background:#1d97db}ion-button.ion-color-primary[_ngcontent-%COMP%], ion-button.ion-color-secondary[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:14px;height:55px;text-transform:capitalize}ion-button.ion-color-secondary[_ngcontent-%COMP%]{--background:#eef4fa;--color:#484d52}ion-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:10px}.feedBack[_ngcontent-%COMP%]{margin-left:30px}.eyeIcon[_ngcontent-%COMP%]{margin-top:20px}"]}),t})()}];let k=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(o){return new(o||t)},imports:[[i.i.forChild(M)],i.i]}),t})(),L=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(o){return new(o||t)},imports:[[n.b,r.d,s.I,k,r.l]]}),t})()}}]);