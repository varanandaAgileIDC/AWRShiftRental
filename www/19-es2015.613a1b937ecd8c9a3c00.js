(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{cWba:function(o,n,t){"use strict";t.r(n),t.d(n,"ResetPasswordPageModule",(function(){return L}));var e=t("ofXK"),r=t("3Pt+"),i=t("TEn/"),s=t("tyNb"),c=t("mrSG"),a=t("fXoL"),b=t("H+bZ");function d(o,n){if(1&o){const o=a.Nb();a.Mb(0,"ion-icon",13),a.Ub("click",(function(){return a.fc(o),a.Wb().oldHideShow()})),a.Lb()}}function l(o,n){if(1&o){const o=a.Nb();a.Mb(0,"ion-icon",14),a.Ub("click",(function(){return a.fc(o),a.Wb().oldHideShow()})),a.Lb()}}function p(o,n){1&o&&(a.Mb(0,"div"),a.jc(1,"Current password is required"),a.Lb())}function u(o,n){if(1&o&&(a.Mb(0,"div",15),a.ic(1,p,2,0,"div",16),a.Lb()),2&o){const o=a.Wb();a.zb(1),a.bc("ngIf",o.f.currentPassword.errors.required)}}function f(o,n){if(1&o){const o=a.Nb();a.Mb(0,"ion-icon",13),a.Ub("click",(function(){return a.fc(o),a.Wb().hideShowA()})),a.Lb()}}function g(o,n){if(1&o){const o=a.Nb();a.Mb(0,"ion-icon",14),a.Ub("click",(function(){return a.fc(o),a.Wb().hideShowA()})),a.Lb()}}function w(o,n){1&o&&(a.Mb(0,"div"),a.jc(1,"New Password is required"),a.Lb())}function m(o,n){if(1&o&&(a.Mb(0,"div",15),a.ic(1,w,2,0,"div",16),a.Lb()),2&o){const o=a.Wb();a.zb(1),a.bc("ngIf",o.f.newPassword.errors.required)}}function h(o,n){if(1&o){const o=a.Nb();a.Mb(0,"ion-icon",13),a.Ub("click",(function(){return a.fc(o),a.Wb().hideShowB()})),a.Lb()}}function y(o,n){if(1&o){const o=a.Nb();a.Mb(0,"ion-icon",14),a.Ub("click",(function(){return a.fc(o),a.Wb().hideShowB()})),a.Lb()}}function M(o,n){1&o&&(a.Mb(0,"div"),a.jc(1,"Confirm Password is required"),a.Lb())}function P(o,n){if(1&o&&(a.Mb(0,"div",15),a.ic(1,M,2,0,"div",16),a.Lb()),2&o){const o=a.Wb();a.zb(1),a.bc("ngIf",o.f.confirmPassword.errors.required)}}const v=[{path:"",component:(()=>{class o{constructor(o,n,t,e,r){this.formBuilder=o,this.platform=n,this.router=t,this.apiService=e,this.alertCtrl=r,this.submitted=!1,this.oldPassword="password",this.passwordTypeA="password",this.passwordTypeB="password"}ngOnInit(){this.resetForm=this.formBuilder.group({currentPassword:["",[r.m.required]],newPassword:["",r.m.required],confirmPassword:["",r.m.required]})}ionViewDidEnter(){let o=JSON.parse(localStorage.getItem("AWRLogin"));o&&(this.users=o.userdata),this.platform.backButton.subscribeWithPriority(10,o=>{console.log("Back press handler!"),"/tabs/tab1"==this.router.routerState.snapshot.url?this.presentConfirm():this.router.navigate(["/tabs"])})}hideShowA(){this.passwordTypeA="text"===this.passwordTypeA?"password":"text"}oldHideShow(){this.oldPassword="text"===this.oldPassword?"password":"text"}hideShowB(){this.passwordTypeB="text"===this.passwordTypeB?"password":"text"}get f(){return this.resetForm.controls}presentConfirm(){return Object(c.a)(this,void 0,void 0,(function*(){let o=yield this.alertCtrl.create({message:"Are you sure you want to exit?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}},{text:"Yes",handler:()=>{console.log("Yes clicked"),navigator.app.exitApp()}}]});yield o.present()}))}onSubmit(){this.submitted=!0,console.log(this.resetForm.controls.errors),this.resetForm.invalid||(console.log(this.resetForm.value),this.reset(this.resetForm.value))}reset(o){this.apiService.postMethod("api/change-password?",{id:this.users.id,current_password:o.currentPassword,new_password:o.newPassword,confirm_password:o.confirmPassword}).then(o=>{console.log(o),"S"==o.status?(this.apiService.nativeToast(o.message),this.resetForm.reset(),this.router.navigate(["/login"])):this.apiService.nativeToast(o.errors?o.errors:o.message)},o=>{console.log(o),this.apiService.nativeToast(o.error.message)})}}return o.\u0275fac=function(n){return new(n||o)(a.Jb(r.a),a.Jb(i.M),a.Jb(s.g),a.Jb(b.a),a.Jb(i.b))},o.\u0275cmp=a.Db({type:o,selectors:[["app-reset-password"]],decls:36,vars:13,consts:[["slot","start"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["position","floating"],["type","email","formControlName","currentPassword",3,"type"],["class","eyeIcon","slot","end","name","eye-off-outline",3,"click",4,"ngIf"],["class","eyeIcon","slot","end","name","eye-outline",3,"click",4,"ngIf"],["class","invalid-feedback feedBack",4,"ngIf"],["type","password","formControlName","newPassword",3,"type"],[1,"password"],["type","password","formControlName","confirmPassword",3,"type"],["type","submit","expand","block",1,"ion-color-primary"],["slot","end","name","eye-off-outline",1,"eyeIcon",3,"click"],["slot","end","name","eye-outline",1,"eyeIcon",3,"click"],[1,"invalid-feedback","feedBack"],[4,"ngIf"]],template:function(o,n){1&o&&(a.Mb(0,"ion-content"),a.Mb(1,"ion-header"),a.Mb(2,"ion-toolbar"),a.Mb(3,"ion-buttons",0),a.Kb(4,"ion-menu-button"),a.Lb(),a.Mb(5,"ion-title"),a.jc(6," Reset Password "),a.Lb(),a.Lb(),a.Lb(),a.Mb(7,"ion-content"),a.Mb(8,"form",1),a.Ub("ngSubmit",(function(){return n.onSubmit()})),a.Mb(9,"div",2),a.Mb(10,"div",3),a.Mb(11,"ion-item"),a.Mb(12,"ion-label",4),a.jc(13,"Current Password"),a.Lb(),a.Kb(14,"ion-input",5),a.ic(15,d,1,0,"ion-icon",6),a.ic(16,l,1,0,"ion-icon",7),a.Lb(),a.Lb(),a.ic(17,u,2,1,"div",8),a.Mb(18,"div",3),a.Mb(19,"ion-item"),a.Mb(20,"ion-label",4),a.jc(21,"New Password"),a.Lb(),a.Kb(22,"ion-input",9),a.ic(23,f,1,0,"ion-icon",6),a.ic(24,g,1,0,"ion-icon",7),a.Lb(),a.Lb(),a.ic(25,m,2,1,"div",8),a.Mb(26,"div",3),a.Mb(27,"ion-item",10),a.Mb(28,"ion-label",4),a.jc(29,"Confirm Password"),a.Lb(),a.Kb(30,"ion-input",11),a.ic(31,h,1,0,"ion-icon",6),a.ic(32,y,1,0,"ion-icon",7),a.Lb(),a.Lb(),a.ic(33,P,2,1,"div",8),a.Lb(),a.Mb(34,"ion-button",12),a.jc(35,"Reset"),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&o&&(a.zb(8),a.bc("formGroup",n.resetForm),a.zb(6),a.bc("type",n.oldPassword),a.zb(1),a.bc("ngIf","password"==n.oldPassword),a.zb(1),a.bc("ngIf","text"==n.oldPassword),a.zb(1),a.bc("ngIf",n.submitted&&n.f.currentPassword.errors),a.zb(5),a.bc("type",n.passwordTypeA),a.zb(1),a.bc("ngIf","password"==n.passwordTypeA),a.zb(1),a.bc("ngIf","text"==n.passwordTypeA),a.zb(1),a.bc("ngIf",n.submitted&&n.f.newPassword.errors),a.zb(5),a.bc("type",n.passwordTypeB),a.zb(1),a.bc("ngIf","password"==n.passwordTypeB),a.zb(1),a.bc("ngIf","text"==n.passwordTypeB),a.zb(1),a.bc("ngIf",n.submitted&&n.f.confirmPassword.errors))},directives:[i.j,i.m,i.G,i.g,i.t,i.F,r.n,r.i,r.c,i.p,i.q,i.o,i.O,r.h,r.b,e.j,i.f,i.n],styles:["ion-title[_ngcontent-%COMP%]{float:left;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff;float:left}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px;margin-left:20px;margin-right:20px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;color:#484d52;--highlight-color-focused:transparent}ion-button[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}ion-button.ion-color-primary[_ngcontent-%COMP%]{--background:#1d97db}ion-button.ion-color-primary[_ngcontent-%COMP%], ion-button.ion-color-secondary[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:14px;height:55px;text-transform:capitalize}ion-button.ion-color-secondary[_ngcontent-%COMP%]{--background:#eef4fa;--color:#484d52}ion-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:10px}.feedBack[_ngcontent-%COMP%]{margin-left:30px}.eyeIcon[_ngcontent-%COMP%]{margin-top:20px}"]}),o})()}];let k=(()=>{class o{}return o.\u0275mod=a.Hb({type:o}),o.\u0275inj=a.Gb({factory:function(n){return new(n||o)},imports:[[s.i.forChild(v)],s.i]}),o})(),L=(()=>{class o{}return o.\u0275mod=a.Hb({type:o}),o.\u0275inj=a.Gb({factory:function(n){return new(n||o)},imports:[[e.b,r.d,i.H,k,r.l]]}),o})()}}]);