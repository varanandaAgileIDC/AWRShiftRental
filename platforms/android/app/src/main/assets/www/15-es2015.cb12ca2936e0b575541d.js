(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"H+bZ":function(e,i,t){"use strict";t.d(i,"a",(function(){return f}));var o=t("mrSG"),n=t("tk/3"),r=t("HDdC"),s=t("7o/Q");function c(e=-1){return i=>i.lift(new b(e,i))}class b{constructor(e,i){this.count=e,this.source=i}call(e,i){return i.subscribe(new a(e,this.count,this.source))}}class a extends s.a{constructor(e,i,t){super(e),this.count=i,this.source=t}error(e){if(!this.isStopped){const{source:i,count:t}=this;if(0===t)return super.error(e);t>-1&&(this.count=t-1),i.subscribe(this._unsubscribeAndRecycle())}}}var d=t("JIr8"),l=t("fXoL"),m=t("SmVF"),u=t("TEn/");let f=(()=>{class e{constructor(e,i,t){this.http=e,this.toastCtrl=i,this.loadingCtrl=t,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.addressPopUp="pickUp",this.httpOptions={headers:new n.c({"Content-Type":"application/json"})}}handleError(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error(`Backend returned code ${e.status}, body was: `+e.error),new r.a(e=>e.error("Something bad happened; please try again later."))}getRequest(e){return this.http.get(this.base_path+JSON.stringify(e),this.httpOptions).pipe(c(2),Object(d.a)(this.handleError))}postRequest(e,i){return this.http.post(this.base_path+e,i,this.httpOptions).pipe(c(),Object(d.a)(this.handleError))}postMethod(e,i){return new Promise((t,o)=>{this.showLoader(),this.http.post(this.base_path+e,i).subscribe(e=>{this.hideLoader(),t(e)},e=>{this.hideLoader(),o(e)})})}nativeToast(e){this.toastCtrl.show(e,"4000","bottom").subscribe(e=>{console.log(e)})}showLoader(){return Object(o.a)(this,void 0,void 0,(function*(){return this.isLoading=!0,yield this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then(e=>{e.present().then(()=>{console.log("loading presented"),this.isLoading||e.dismiss().then(()=>console.log("abort loading"))})})}))}hideLoader(){return Object(o.a)(this,void 0,void 0,(function*(){return this.isLoading=!1,yield this.loadingCtrl.dismiss().then(()=>console.log("loading dismissed"))}))}}return e.\u0275fac=function(i){return new(i||e)(l.Qb(n.a),l.Qb(m.a),l.Qb(u.K))},e.\u0275prov=l.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},fhSy:function(e,i,t){"use strict";t.r(i),t.d(i,"RegisterPageModule",(function(){return be}));var o=t("ofXK"),n=t("3Pt+"),r=t("TEn/"),s=t("tyNb"),c=t("mrSG");function b(e,i){return t=>{const o=t.controls[i];o.errors&&!o.errors.mustMatch||o.setErrors(t.controls[e].value!==o.value?{mustMatch:!0}:null)}}var a=t("fXoL"),d=t("H+bZ");function l(e,i){if(1&e&&(a.Mb(0,"ion-select-option",35),a.Mb(1,"div"),a.kc(2),a.Lb(),a.Lb()),2&e){const e=i.$implicit;a.cc("value",e.name),a.zb(2),a.mc(" ",e.name," ")}}function m(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"First Name is required"),a.Lb())}function u(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,m,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.firstName.errors.required)}}function f(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Last Name is required"),a.Lb())}function g(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,f,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.lastName.errors.required)}}function p(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Company Name is required"),a.Lb())}function h(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,p,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.companyName.errors.required)}}function M(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Position is required"),a.Lb())}function L(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,M,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.position.errors.required)}}function v(e,i){if(1&e&&(a.Mb(0,"ion-select-option",35),a.Mb(1,"div"),a.kc(2),a.Lb(),a.Lb()),2&e){const e=i.$implicit;a.cc("value",e.name),a.zb(2),a.mc(" ",e.name," ")}}function w(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Mobile is required"),a.Lb())}function k(e,i){if(1&e&&(a.Mb(0,"div",38),a.jc(1,w,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.mobile.errors.required)}}function C(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Email is required"),a.Lb())}function y(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,C,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.email.errors.required)}}function z(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Address is required"),a.Lb())}function x(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,z,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.address.errors.required)}}function I(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",39),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowA()})),a.Lb()}}function j(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",40),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowA()})),a.Lb()}}function N(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Password is required"),a.Lb())}function S(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,N,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.password.errors.required)}}function q(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",39),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowB()})),a.Lb()}}function P(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",40),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowB()})),a.Lb()}}function W(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Confirm password is required"),a.Lb())}function T(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,W,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f1.confirmPassword.errors.required)}}function O(e,i){1&e&&(a.Mb(0,"div",38),a.Mb(1,"div"),a.kc(2,"Please accept the terms and conditions"),a.Lb(),a.Lb())}const _=function(){return{standalone:!0}};function B(e,i){if(1&e){const e=a.Nb();a.Mb(0,"form",5),a.Ub("ngSubmit",(function(){return a.gc(e),a.Wb().onSubmit1()})),a.Mb(1,"div",6),a.Mb(2,"div",7),a.Mb(3,"ion-row"),a.Mb(4,"ion-col",8),a.Mb(5,"ion-select",9),a.Ub("ngModelChange",(function(i){return a.gc(e),a.Wb().prefix=i}))("ionChange",(function(i){return a.gc(e),a.Wb().selectPrefix(i.target.value)})),a.jc(6,l,3,2,"ion-select-option",10),a.Lb(),a.Lb(),a.Mb(7,"ion-col",11),a.Mb(8,"ion-item"),a.Mb(9,"ion-label",12),a.kc(10,"First Name"),a.Lb(),a.Kb(11,"ion-input",13),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.jc(12,u,2,1,"div",14),a.Mb(13,"div",7),a.Mb(14,"ion-item"),a.Mb(15,"ion-label",12),a.kc(16,"Last Name"),a.Lb(),a.Kb(17,"ion-input",15),a.Lb(),a.Lb(),a.jc(18,g,2,1,"div",14),a.Mb(19,"div",7),a.Mb(20,"ion-item"),a.Mb(21,"ion-label",12),a.kc(22,"Company Name"),a.Lb(),a.Kb(23,"ion-input",16),a.Lb(),a.Lb(),a.jc(24,h,2,1,"div",14),a.Mb(25,"div",7),a.Mb(26,"ion-item"),a.Mb(27,"ion-label",12),a.kc(28,"Position"),a.Lb(),a.Kb(29,"ion-input",17),a.Lb(),a.Lb(),a.jc(30,L,2,1,"div",14),a.Mb(31,"div",7),a.Mb(32,"ion-row"),a.Mb(33,"ion-col",8),a.Mb(34,"ion-select",9),a.Ub("ngModelChange",(function(i){return a.gc(e),a.Wb().mobileCode=i}))("ionChange",(function(i){return a.gc(e),a.Wb().selectMobilecode(i.target.value)})),a.jc(35,v,3,2,"ion-select-option",10),a.Lb(),a.Lb(),a.Mb(36,"ion-col",11),a.Mb(37,"ion-item"),a.Mb(38,"ion-label",12),a.kc(39,"Mobile"),a.Lb(),a.Kb(40,"ion-input",18),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.jc(41,k,2,1,"div",19),a.Mb(42,"div",7),a.Mb(43,"ion-item"),a.Mb(44,"ion-label",12),a.kc(45,"Email"),a.Lb(),a.Kb(46,"ion-input",20),a.Lb(),a.Lb(),a.jc(47,y,2,1,"div",14),a.Mb(48,"div",7),a.Mb(49,"ion-item"),a.Mb(50,"ion-label",12),a.kc(51,"Address"),a.Lb(),a.Kb(52,"ion-input",21),a.Lb(),a.Lb(),a.jc(53,x,2,1,"div",14),a.Mb(54,"div",7),a.Mb(55,"ion-item"),a.Mb(56,"ion-label",12),a.kc(57,"Password"),a.Lb(),a.Kb(58,"ion-input",22),a.jc(59,I,1,0,"ion-icon",23),a.jc(60,j,1,0,"ion-icon",24),a.Lb(),a.Lb(),a.jc(61,S,2,1,"div",14),a.Mb(62,"div",7),a.Mb(63,"ion-item"),a.Mb(64,"ion-label",12),a.kc(65,"Confirm Password"),a.Lb(),a.Kb(66,"ion-input",25),a.jc(67,q,1,0,"ion-icon",23),a.jc(68,P,1,0,"ion-icon",24),a.Lb(),a.Lb(),a.jc(69,T,2,1,"div",14),a.Mb(70,"div"),a.Kb(71,"p",26),a.Lb(),a.Mb(72,"ion-row"),a.Mb(73,"ion-col",27),a.Mb(74,"ion-checkbox",28),a.Ub("ionChange",(function(){return a.gc(e),a.Wb().newsCheck()})),a.Lb(),a.Lb(),a.Mb(75,"ion-col",29),a.kc(76," To send newsletter regarding marketing offers and promotions "),a.Lb(),a.Lb(),a.Mb(77,"ion-row"),a.Mb(78,"ion-col",27),a.Mb(79,"ion-checkbox",28),a.Ub("ionChange",(function(){return a.gc(e),a.Wb().emailCheck()})),a.Lb(),a.Lb(),a.Mb(80,"ion-col",29),a.kc(81," Consent to contact via email/call/or sms about booking and transactions "),a.Lb(),a.Lb(),a.Mb(82,"ion-row"),a.Mb(83,"ion-col",27),a.Mb(84,"ion-checkbox",28),a.Ub("ionChange",(function(){return a.gc(e),a.Wb().termsCheck()})),a.Lb(),a.Lb(),a.Mb(85,"ion-col",29),a.kc(86," I have read and understood the "),a.Mb(87,"u",30),a.kc(88," Terms and conditions"),a.Lb(),a.Lb(),a.Lb(),a.jc(89,O,3,0,"div",19),a.Mb(90,"div",31),a.Mb(91,"ion-button",32),a.kc(92,"Register"),a.Lb(),a.Mb(93,"p",33),a.kc(94,"I have a ShiftCar Rental Account. "),a.Mb(95,"span",34),a.Ub("click",(function(){return a.gc(e),a.Wb().login()})),a.kc(96,"Back to Login"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&e){const e=a.Wb();a.cc("formGroup",e.registerForm1),a.zb(5),a.dc("placeholder",e.prefix),a.cc("ngModel",e.prefix)("ngModelOptions",a.ec(28,_)),a.zb(1),a.cc("ngForOf",e.prefixes),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.firstName.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.lastName.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.companyName.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.position.errors),a.zb(4),a.dc("placeholder",e.mobileCode),a.cc("ngModel",e.mobileCode)("ngModelOptions",a.ec(29,_)),a.zb(1),a.cc("ngForOf",e.mobileCodes),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.mobile.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.email.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f1.address.errors),a.zb(5),a.cc("type",e.passwordTypeA),a.zb(1),a.cc("ngIf","password"==e.passwordTypeA),a.zb(1),a.cc("ngIf","text"==e.passwordTypeA),a.zb(1),a.cc("ngIf",e.submitted&&e.f1.password.errors),a.zb(5),a.cc("type",e.passwordTypeB),a.zb(1),a.cc("ngIf","password"==e.passwordTypeB),a.zb(1),a.cc("ngIf","text"==e.passwordTypeB),a.zb(1),a.cc("ngIf",e.submitted&&e.f1.confirmPassword.errors),a.zb(5),a.dc("checked",e.newsStatus),a.zb(5),a.dc("checked",e.emailStatus),a.zb(5),a.dc("checked",e.termStatus),a.zb(5),a.cc("ngIf",!e.termToggle)}}function A(e,i){if(1&e&&(a.Mb(0,"ion-select-option",35),a.Mb(1,"div"),a.kc(2),a.Lb(),a.Lb()),2&e){const e=i.$implicit;a.cc("value",e.name),a.zb(2),a.mc(" ",e.name," ")}}function U(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"First Name is required"),a.Lb())}function F(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,U,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.firstName.errors.required)}}function K(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Last Name is required"),a.Lb())}function E(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,K,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.lastName.errors.required)}}function J(e,i){if(1&e&&(a.Mb(0,"ion-select-option",35),a.Mb(1,"div"),a.kc(2),a.Lb(),a.Lb()),2&e){const e=i.$implicit;a.cc("value",e.name),a.zb(2),a.mc(" ",e.name," ")}}function G(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Mobile is required"),a.Lb())}function $(e,i){if(1&e&&(a.Mb(0,"div",38),a.jc(1,G,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.mobile.errors.required)}}function R(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Email is required"),a.Lb())}function D(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,R,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.email.errors.required)}}function H(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Address is required"),a.Lb())}function Q(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,H,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.address.errors.required)}}function X(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",39),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowA()})),a.Lb()}}function V(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",40),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowA()})),a.Lb()}}function Y(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Password is required"),a.Lb())}function Z(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,Y,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.password.errors.required)}}function ee(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",39),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowB()})),a.Lb()}}function ie(e,i){if(1&e){const e=a.Nb();a.Mb(0,"ion-icon",40),a.Ub("click",(function(){return a.gc(e),a.Wb(2).hideShowB()})),a.Lb()}}function te(e,i){1&e&&(a.Mb(0,"div"),a.kc(1,"Confirm password is required"),a.Lb())}function oe(e,i){if(1&e&&(a.Mb(0,"div",36),a.jc(1,te,2,0,"div",37),a.Lb()),2&e){const e=a.Wb(2);a.zb(1),a.cc("ngIf",e.f2.confirmPassword.errors.required)}}function ne(e,i){1&e&&(a.Mb(0,"div",38),a.Mb(1,"div"),a.kc(2,"Please accept the terms and conditions"),a.Lb(),a.Lb())}function re(e,i){if(1&e){const e=a.Nb();a.Mb(0,"form",5),a.Ub("ngSubmit",(function(){return a.gc(e),a.Wb().onSubmit2()})),a.Mb(1,"div",6),a.Mb(2,"div",7),a.Mb(3,"ion-row"),a.Mb(4,"ion-col",8),a.Mb(5,"ion-select",9),a.Ub("ngModelChange",(function(i){return a.gc(e),a.Wb().prefix=i}))("ionChange",(function(i){return a.gc(e),a.Wb().selectPrefix(i.target.value)})),a.jc(6,A,3,2,"ion-select-option",10),a.Lb(),a.Lb(),a.Mb(7,"ion-col",11),a.Mb(8,"ion-item"),a.Mb(9,"ion-label",12),a.kc(10,"First Name"),a.Lb(),a.Kb(11,"ion-input",13),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.jc(12,F,2,1,"div",14),a.Mb(13,"div",7),a.Mb(14,"ion-item"),a.Mb(15,"ion-label",12),a.kc(16,"Last Name"),a.Lb(),a.Kb(17,"ion-input",15),a.Lb(),a.Lb(),a.jc(18,E,2,1,"div",14),a.Mb(19,"div",7),a.Mb(20,"ion-row"),a.Mb(21,"ion-col",8),a.Mb(22,"ion-select",9),a.Ub("ngModelChange",(function(i){return a.gc(e),a.Wb().mobileCode=i}))("ionChange",(function(i){return a.gc(e),a.Wb().selectMobilecode(i.target.value)})),a.jc(23,J,3,2,"ion-select-option",10),a.Lb(),a.Lb(),a.Mb(24,"ion-col",11),a.Mb(25,"ion-item"),a.Mb(26,"ion-label",12),a.kc(27,"Mobile"),a.Lb(),a.Kb(28,"ion-input",18),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.jc(29,$,2,1,"div",19),a.Mb(30,"div",7),a.Mb(31,"ion-item"),a.Mb(32,"ion-label",12),a.kc(33,"Email"),a.Lb(),a.Kb(34,"ion-input",20),a.Lb(),a.Lb(),a.jc(35,D,2,1,"div",14),a.Mb(36,"div",7),a.Mb(37,"ion-item"),a.Mb(38,"ion-label",12),a.kc(39,"Address"),a.Lb(),a.Kb(40,"ion-input",21),a.Lb(),a.Lb(),a.jc(41,Q,2,1,"div",14),a.Mb(42,"div",7),a.Mb(43,"ion-item"),a.Mb(44,"ion-label",12),a.kc(45,"Password"),a.Lb(),a.Kb(46,"ion-input",22),a.jc(47,X,1,0,"ion-icon",23),a.jc(48,V,1,0,"ion-icon",24),a.Lb(),a.Lb(),a.jc(49,Z,2,1,"div",14),a.Mb(50,"div",7),a.Mb(51,"ion-item"),a.Mb(52,"ion-label",12),a.kc(53,"Confirm Password"),a.Lb(),a.Kb(54,"ion-input",25),a.jc(55,ee,1,0,"ion-icon",23),a.jc(56,ie,1,0,"ion-icon",24),a.Lb(),a.Lb(),a.jc(57,oe,2,1,"div",14),a.Mb(58,"div"),a.Kb(59,"p",26),a.Lb(),a.Mb(60,"ion-row"),a.Mb(61,"ion-col",27),a.Mb(62,"ion-checkbox",28),a.Ub("ionChange",(function(){return a.gc(e),a.Wb().newsCheck()})),a.Lb(),a.Lb(),a.Mb(63,"ion-col",29),a.kc(64," To send newsletter regarding marketing offers and promotions "),a.Lb(),a.Lb(),a.Mb(65,"ion-row"),a.Mb(66,"ion-col",27),a.Mb(67,"ion-checkbox",28),a.Ub("ionChange",(function(){return a.gc(e),a.Wb().emailCheck()})),a.Lb(),a.Lb(),a.Mb(68,"ion-col",29),a.kc(69," Consent to contact via email/call/or sms about booking and transactions "),a.Lb(),a.Lb(),a.Mb(70,"ion-row"),a.Mb(71,"ion-col",27),a.Mb(72,"ion-checkbox",28),a.Ub("ionChange",(function(){return a.gc(e),a.Wb().termsCheck()})),a.Lb(),a.Lb(),a.Mb(73,"ion-col",29),a.kc(74," I have read and understood the "),a.Mb(75,"u",30),a.kc(76," Terms and conditions"),a.Lb(),a.Lb(),a.Lb(),a.jc(77,ne,3,0,"div",19),a.Mb(78,"div",31),a.Mb(79,"ion-button",32),a.kc(80,"Register"),a.Lb(),a.Mb(81,"p",33),a.kc(82,"I have a ShiftCar Rental Account. "),a.Mb(83,"span",34),a.Ub("click",(function(){return a.gc(e),a.Wb().login()})),a.kc(84,"Back to Login"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&e){const e=a.Wb();a.cc("formGroup",e.registerForm2),a.zb(5),a.dc("placeholder",e.prefix),a.cc("ngModel",e.prefix)("ngModelOptions",a.ec(26,_)),a.zb(1),a.cc("ngForOf",e.prefixes),a.zb(6),a.cc("ngIf",e.submitted&&e.f2.firstName.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f2.lastName.errors),a.zb(4),a.dc("placeholder",e.mobileCode),a.cc("ngModel",e.mobileCode)("ngModelOptions",a.ec(27,_)),a.zb(1),a.cc("ngForOf",e.mobileCodes),a.zb(6),a.cc("ngIf",e.submitted&&e.f2.mobile.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f2.email.errors),a.zb(6),a.cc("ngIf",e.submitted&&e.f2.address.errors),a.zb(5),a.cc("type",e.passwordTypeA),a.zb(1),a.cc("ngIf","password"==e.passwordTypeA),a.zb(1),a.cc("ngIf","text"==e.passwordTypeA),a.zb(1),a.cc("ngIf",e.submitted&&e.f2.password.errors),a.zb(5),a.cc("type",e.passwordTypeB),a.zb(1),a.cc("ngIf","password"==e.passwordTypeB),a.zb(1),a.cc("ngIf","text"==e.passwordTypeB),a.zb(1),a.cc("ngIf",e.submitted&&e.f2.confirmPassword.errors),a.zb(5),a.dc("checked",e.newsStatus),a.zb(5),a.dc("checked",e.emailStatus),a.zb(5),a.dc("checked",e.termStatus),a.zb(5),a.cc("ngIf",!e.termToggle)}}const se=[{path:"",component:(()=>{class e{constructor(e,i,t,o,n){this.router=e,this.apiService=i,this.platform=t,this.alertCtrl=o,this.formBuilder=n,this.prefix="Mr",this.prefixes=[],this.nationalities=[],this.nationality="Choose Nationality",this.mobileCodes=[],this.mobileCode="+971",this.newsletter=1,this.smsemail=1,this.terms=0,this.passwordTypeA="password",this.passwordTypeB="password",this.submitted=!1,this.termStatus=!1,this.newsStatus=!0,this.emailStatus=!0,this.termToggle=!0,this.layoutChange="corporate"}ngOnInit(){this.prefixes=[{name:"Mr"},{name:"Mrs"}],this.nationalities=[{name:"United Arab Emirates"},{name:"United Kingdom"}],this.mobileCodes=[{name:"+971"},{name:"+44"}],this.registerForm1=this.formBuilder.group({firstName:["",n.m.required],lastName:["",n.m.required],position:["",n.m.required],email:["",[n.m.required,n.m.email,n.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[n.m.required]],confirmPassword:["",n.m.required],companyName:["",n.m.required],address:["",n.m.required],mobile:["",[n.m.required,n.m.pattern("^[0-9]*$"),n.m.minLength(10),n.m.maxLength(10)]]},{validator:b("password","confirmPassword")}),this.registerForm2=this.formBuilder.group({firstName:["",n.m.required],lastName:["",n.m.required],email:["",[n.m.required,n.m.email,n.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[n.m.required]],confirmPassword:["",n.m.required],address:["",n.m.required],mobile:["",[n.m.required,n.m.pattern("^[0-9]*$"),n.m.minLength(10),n.m.maxLength(10)]]},{validator:b("password","confirmPassword")})}ionViewDidEnter(){this.platform.backButton.subscribeWithPriority(10,e=>{console.log("Back press handler!"),this.router.navigateByUrl("/login")})}get f1(){return this.registerForm1.controls}get f2(){return this.registerForm2.controls}hideShowA(){this.passwordTypeA="text"===this.passwordTypeA?"password":"text"}hideShowB(){this.passwordTypeB="text"===this.passwordTypeB?"password":"text"}onSubmit1(){this.submitted=!0,this.registerForm1.invalid?this.termStatus||(this.termToggle=!1):(console.log(this.registerForm1.value),this.termStatus?(this.termToggle=!0,this.register(this.registerForm1.value)):this.termToggle=!1)}onSubmit2(){this.submitted=!0,this.registerForm2.invalid?this.termStatus||(this.termToggle=!1):(console.log(this.registerForm2.value),this.termStatus?(this.termToggle=!0,this.register(this.registerForm2.value)):this.termToggle=!1)}segmentChanged(e){console.log(e.target.value),this.layoutChange=e.target.value}selectPrefix(e){this.prefix=e}selectNationality(e){this.nationality=e}selectMobilecode(e){this.mobileCode=e}termsCheck(){this.termStatus?(this.termStatus=!1,this.terms=0,this.termToggle=!1):(this.termStatus=!0,this.terms=1,this.termToggle=!0)}newsCheck(){this.newsStatus?(this.newsStatus=!1,this.newsletter=0):(this.newsStatus=!0,this.newsletter=1)}emailCheck(){this.emailStatus?(this.emailStatus=!1,this.smsemail=0):(this.emailStatus=!0,this.smsemail=1)}register(e){let i;i="corporate"==this.layoutChange?{customer_type:this.layoutChange,salutation:this.prefix,first_name:e.firstName,last_name:e.lastName,debitor_code:e.debitorCode,mobile_code:this.mobileCode,mobile:e.mobile,email:e.email,nationality:this.nationality,address:e.address,password:e.password,confirm_password:e.confirmPassword,smsemail:this.smsemail,termsandconditions:this.terms,newsletter:this.newsletter,company_name:e.companyName,position:e.position}:{customer_type:this.layoutChange,salutation:this.prefix,first_name:e.firstName,last_name:e.lastName,debitor_code:e.debitorCode,mobile_code:this.mobileCode,mobile:e.mobile,email:e.email,nationality:this.nationality,address:e.address,password:e.password,confirm_password:e.confirmPassword,smsemail:this.smsemail,termsandconditions:this.terms,newsletter:this.newsletter},this.apiService.postMethod("api/register?",i).then(i=>{console.log(i),"S"==i.status?(this.apiService.nativeToast(i.message),this.router.navigate(["otp",JSON.stringify(e.email)])):this.apiService.nativeToast(i.message)},e=>{console.log(e),this.apiService.nativeToast(e.error.message)})}login(){this.router.navigateByUrl("/login")}presentConfirm(){return Object(c.a)(this,void 0,void 0,(function*(){let e=yield this.alertCtrl.create({header:"Confirmation Alert",message:"Do you want to exit App?",buttons:[{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}},{text:"Yes",handler:()=>{console.log("Yes clicked"),navigator.app.exitApp()}}]});yield e.present()}))}}return e.\u0275fac=function(i){return new(i||e)(a.Jb(s.g),a.Jb(d.a),a.Jb(r.N),a.Jb(r.b),a.Jb(n.a))},e.\u0275cmp=a.Db({type:e,selectors:[["app-register"]],decls:14,vars:2,consts:[["src","../../../assets/login-banner.png",2,"margin-top","-2px"],["value","corporate",3,"ionChange"],["value","personal",1,"segmentBtn"],["value","corporate",1,"segmentBtn"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["size","4"],["interface","popover",1,"selection",3,"ngModel","placeholder","ngModelOptions","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["size","8"],["position","floating"],["formControlName","firstName"],["class","invalid-feedback",4,"ngIf"],["formControlName","lastName"],["formControlName","companyName"],["formControlName","position"],["type","tel","formControlName","mobile"],["class","invalid-feedback","style","margin-top: 10px;",4,"ngIf"],["type","email","formControlName","email"],["formControlName","address"],["type","password","formControlName","password",3,"type"],["class","eyeIcon","slot","end","name","eye-off-outline",3,"click",4,"ngIf"],["class","eyeIcon","slot","end","name","eye-outline",3,"click",4,"ngIf"],["type","password","formControlName","confirmPassword",3,"type"],[1,"divider"],["size","2",1,"termsCheck"],[3,"checked","ionChange"],["size","10",1,"termsText"],[1,"termsLink"],[2,"text-align","center"],["type","submit",1,"registerBtn"],[2,"font-size","14px"],[2,"color","#1D97DB",3,"click"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"],[1,"invalid-feedback",2,"margin-top","10px"],["slot","end","name","eye-off-outline",1,"eyeIcon",3,"click"],["slot","end","name","eye-outline",1,"eyeIcon",3,"click"]],template:function(e,i){1&e&&(a.Mb(0,"div"),a.Kb(1,"img",0),a.Lb(),a.Mb(2,"ion-content"),a.Mb(3,"h5"),a.kc(4,"Let's Go Anywhere, Anytime"),a.Lb(),a.Mb(5,"ion-segment",1),a.Ub("ionChange",(function(e){return i.segmentChanged(e)})),a.Mb(6,"ion-segment-button",2),a.Mb(7,"ion-label"),a.kc(8,"Personal"),a.Lb(),a.Lb(),a.Mb(9,"ion-segment-button",3),a.Mb(10,"ion-label"),a.kc(11,"Corporate"),a.Lb(),a.Lb(),a.Lb(),a.jc(12,B,97,30,"form",4),a.jc(13,re,85,28,"form",4),a.Lb()),2&e&&(a.zb(12),a.cc("ngIf","corporate"==i.layoutChange),a.zb(1),a.cc("ngIf","personal"==i.layoutChange))},directives:[r.k,r.y,r.O,r.z,r.r,o.j,n.n,n.i,n.c,r.x,r.j,r.A,n.h,n.k,o.i,r.q,r.p,r.P,n.b,r.i,r.c,r.g,r.B,r.o],styles:["h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center}h5[_ngcontent-%COMP%]{color:#1d97db;margin-bottom:30px}.segmentBtn[_ngcontent-%COMP%]{--background:#1d97db;--background-checked:#204d74;margin:20px;--border-radius:10px;color:#fff;--indicator-color:none;text-transform:none}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.input-group[_ngcontent-%COMP%]{padding:20px}.divider[_ngcontent-%COMP%]{height:1px;background-color:grey;width:100%;margin-top:15px}.termsCheck[_ngcontent-%COMP%]{text-align:right}.termsText[_ngcontent-%COMP%]{text-align:left;font-size:14px}.termsLink[_ngcontent-%COMP%]{color:#1d97db}.registerBtn[_ngcontent-%COMP%]{margin-top:20px;--background:#1d97db;--box-shadow:none;--border-radius:14px;width:150px;text-transform:capitalize}.selection[_ngcontent-%COMP%]{margin-top:10px;--placeholder-color:#000;--placeholder-opacity:1!important}.eyeIcon[_ngcontent-%COMP%]{margin-top:20px}"]}),e})()}];let ce=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(i){return new(i||e)},imports:[[s.i.forChild(se)],s.i]}),e})(),be=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(i){return new(i||e)},imports:[[o.b,n.d,r.I,ce,n.l]]}),e})()}}]);