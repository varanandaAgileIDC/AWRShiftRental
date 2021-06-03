function _get(e,t,i){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=_superPropBase(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}})(e,t,i||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var i,n=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return _possibleConstructorReturn(this,i)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"H+bZ":function(e,t,i){"use strict";i.d(t,"a",(function(){return p}));var n=i("mrSG"),o=i("tk/3"),r=i("HDdC"),c=i("7o/Q");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return function(t){return t.lift(new b(e,t))}}var a,b=function(){function e(t,i){_classCallCheck(this,e),this.count=t,this.source=i}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new u(e,this.count,this.source))}}]),e}(),u=function(e){_inherits(i,e);var t=_createSuper(i);function i(e,n,o){var r;return _classCallCheck(this,i),(r=t.call(this,e)).count=n,r.source=o,r}return _createClass(i,[{key:"error",value:function(e){if(!this.isStopped){var t=this.source,n=this.count;if(0===n)return _get(_getPrototypeOf(i.prototype),"error",this).call(this,e);n>-1&&(this.count=n-1),t.subscribe(this._unsubscribeAndRecycle())}}}]),i}(c.a),l=i("JIr8"),d=i("fXoL"),f=i("SmVF"),m=i("TEn/"),p=((a=function(){function e(t,i,n){_classCallCheck(this,e),this.http=t,this.toastCtrl=i,this.loadingCtrl=n,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.addressPopUp="pickUp",this.httpOptions={headers:new o.c({"Content-Type":"application/json"})}}return _createClass(e,[{key:"handleError",value:function(e){return e.error instanceof ErrorEvent?console.error("An error occurred:",e.error.message):console.error("Backend returned code ".concat(e.status,", body was: ")+e.error),new r.a((function(e){return e.error("Something bad happened; please try again later.")}))}},{key:"getRequest",value:function(e){return this.http.get(this.base_path+JSON.stringify(e),this.httpOptions).pipe(s(2),Object(l.a)(this.handleError))}},{key:"postRequest",value:function(e,t){return this.http.post(this.base_path+e,t,this.httpOptions).pipe(s(),Object(l.a)(this.handleError))}},{key:"postMethod",value:function(e,t){var i=this;return new Promise((function(n,o){i.showLoader(),i.http.post(i.base_path+e,t).subscribe((function(e){i.hideLoader(),n(e)}),(function(e){i.hideLoader(),o(e)}))}))}},{key:"nativeToast",value:function(e){this.toastCtrl.show(e,"4000","bottom").subscribe((function(e){console.log(e)}))}},{key:"showLoader",value:function(){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.next=3,this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then((function(e){e.present().then((function(){console.log("loading presented"),t.isLoading||e.dismiss().then((function(){return console.log("abort loading")}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"hideLoader",value:function(){return Object(n.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.isLoading=!1,e.next=3,this.loadingCtrl.dismiss().then((function(){return console.log("loading dismissed")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||a)(d.Qb(o.a),d.Qb(f.a),d.Qb(m.K))},a.\u0275prov=d.Fb({token:a,factory:a.\u0275fac,providedIn:"root"}),a)},fhSy:function(e,t,i){"use strict";i.r(t),i.d(t,"RegisterPageModule",(function(){return le}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),s=i("mrSG");function a(e,t){return function(i){var n=i.controls[t];n.errors&&!n.errors.mustMatch||n.setErrors(i.controls[e].value!==n.value?{mustMatch:!0}:null)}}var b=i("fXoL"),u=i("H+bZ");function l(e,t){if(1&e&&(b.Mb(0,"ion-select-option",35),b.Mb(1,"div"),b.kc(2),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.cc("value",i.name),b.zb(2),b.mc(" ",i.name," ")}}function d(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"First Name is required"),b.Lb())}function f(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,d,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.firstName.errors.required)}}function m(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Last Name is required"),b.Lb())}function p(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,m,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.lastName.errors.required)}}function g(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Company Name is required"),b.Lb())}function h(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,g,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.companyName.errors.required)}}function v(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Position is required"),b.Lb())}function M(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,v,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.position.errors.required)}}function L(e,t){if(1&e&&(b.Mb(0,"ion-select-option",35),b.Mb(1,"div"),b.kc(2),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.cc("value",i.name),b.zb(2),b.mc(" ",i.name," ")}}function k(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Mobile is required"),b.Lb())}function y(e,t){if(1&e&&(b.Mb(0,"div",38),b.jc(1,k,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.mobile.errors.required)}}function w(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Email is required"),b.Lb())}function C(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,w,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.email.errors.required)}}function z(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Address is required"),b.Lb())}function _(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,z,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.address.errors.required)}}function x(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",39),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowA()})),b.Lb()}}function P(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",40),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowA()})),b.Lb()}}function j(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Password is required"),b.Lb())}function I(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,j,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.password.errors.required)}}function N(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",39),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowB()})),b.Lb()}}function S(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",40),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowB()})),b.Lb()}}function O(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Confirm password is required"),b.Lb())}function q(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,O,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f1.confirmPassword.errors.required)}}function T(e,t){1&e&&(b.Mb(0,"div",38),b.Mb(1,"div"),b.kc(2,"Please accept the terms and conditions"),b.Lb(),b.Lb())}var W=function(){return{standalone:!0}};function B(e,t){if(1&e){var i=b.Nb();b.Mb(0,"form",5),b.Ub("ngSubmit",(function(){return b.gc(i),b.Wb().onSubmit1()})),b.Mb(1,"div",6),b.Mb(2,"div",7),b.Mb(3,"ion-row"),b.Mb(4,"ion-col",8),b.Mb(5,"ion-select",9),b.Ub("ngModelChange",(function(e){return b.gc(i),b.Wb().prefix=e}))("ionChange",(function(e){return b.gc(i),b.Wb().selectPrefix(e.target.value)})),b.jc(6,l,3,2,"ion-select-option",10),b.Lb(),b.Lb(),b.Mb(7,"ion-col",11),b.Mb(8,"ion-item"),b.Mb(9,"ion-label",12),b.kc(10,"First Name"),b.Lb(),b.Kb(11,"ion-input",13),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.jc(12,f,2,1,"div",14),b.Mb(13,"div",7),b.Mb(14,"ion-item"),b.Mb(15,"ion-label",12),b.kc(16,"Last Name"),b.Lb(),b.Kb(17,"ion-input",15),b.Lb(),b.Lb(),b.jc(18,p,2,1,"div",14),b.Mb(19,"div",7),b.Mb(20,"ion-item"),b.Mb(21,"ion-label",12),b.kc(22,"Company Name"),b.Lb(),b.Kb(23,"ion-input",16),b.Lb(),b.Lb(),b.jc(24,h,2,1,"div",14),b.Mb(25,"div",7),b.Mb(26,"ion-item"),b.Mb(27,"ion-label",12),b.kc(28,"Position"),b.Lb(),b.Kb(29,"ion-input",17),b.Lb(),b.Lb(),b.jc(30,M,2,1,"div",14),b.Mb(31,"div",7),b.Mb(32,"ion-row"),b.Mb(33,"ion-col",8),b.Mb(34,"ion-select",9),b.Ub("ngModelChange",(function(e){return b.gc(i),b.Wb().mobileCode=e}))("ionChange",(function(e){return b.gc(i),b.Wb().selectMobilecode(e.target.value)})),b.jc(35,L,3,2,"ion-select-option",10),b.Lb(),b.Lb(),b.Mb(36,"ion-col",11),b.Mb(37,"ion-item"),b.Mb(38,"ion-label",12),b.kc(39,"Mobile"),b.Lb(),b.Kb(40,"ion-input",18),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.jc(41,y,2,1,"div",19),b.Mb(42,"div",7),b.Mb(43,"ion-item"),b.Mb(44,"ion-label",12),b.kc(45,"Email"),b.Lb(),b.Kb(46,"ion-input",20),b.Lb(),b.Lb(),b.jc(47,C,2,1,"div",14),b.Mb(48,"div",7),b.Mb(49,"ion-item"),b.Mb(50,"ion-label",12),b.kc(51,"Address"),b.Lb(),b.Kb(52,"ion-input",21),b.Lb(),b.Lb(),b.jc(53,_,2,1,"div",14),b.Mb(54,"div",7),b.Mb(55,"ion-item"),b.Mb(56,"ion-label",12),b.kc(57,"Password"),b.Lb(),b.Kb(58,"ion-input",22),b.jc(59,x,1,0,"ion-icon",23),b.jc(60,P,1,0,"ion-icon",24),b.Lb(),b.Lb(),b.jc(61,I,2,1,"div",14),b.Mb(62,"div",7),b.Mb(63,"ion-item"),b.Mb(64,"ion-label",12),b.kc(65,"Confirm Password"),b.Lb(),b.Kb(66,"ion-input",25),b.jc(67,N,1,0,"ion-icon",23),b.jc(68,S,1,0,"ion-icon",24),b.Lb(),b.Lb(),b.jc(69,q,2,1,"div",14),b.Mb(70,"div"),b.Kb(71,"p",26),b.Lb(),b.Mb(72,"ion-row"),b.Mb(73,"ion-col",27),b.Mb(74,"ion-checkbox",28),b.Ub("ionChange",(function(){return b.gc(i),b.Wb().newsCheck()})),b.Lb(),b.Lb(),b.Mb(75,"ion-col",29),b.kc(76," To send newsletter regarding marketing offers and promotions "),b.Lb(),b.Lb(),b.Mb(77,"ion-row"),b.Mb(78,"ion-col",27),b.Mb(79,"ion-checkbox",28),b.Ub("ionChange",(function(){return b.gc(i),b.Wb().emailCheck()})),b.Lb(),b.Lb(),b.Mb(80,"ion-col",29),b.kc(81," Consent to contact via email/call/or sms about booking and transactions "),b.Lb(),b.Lb(),b.Mb(82,"ion-row"),b.Mb(83,"ion-col",27),b.Mb(84,"ion-checkbox",28),b.Ub("ionChange",(function(){return b.gc(i),b.Wb().termsCheck()})),b.Lb(),b.Lb(),b.Mb(85,"ion-col",29),b.kc(86," I have read and understood the "),b.Mb(87,"u",30),b.kc(88," Terms and conditions"),b.Lb(),b.Lb(),b.Lb(),b.jc(89,T,3,0,"div",19),b.Mb(90,"div",31),b.Mb(91,"ion-button",32),b.kc(92,"Register"),b.Lb(),b.Mb(93,"p",33),b.kc(94,"I have a ShiftCar Rental Account. "),b.Mb(95,"span",34),b.Ub("click",(function(){return b.gc(i),b.Wb().login()})),b.kc(96,"Back to Login"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&e){var n=b.Wb();b.cc("formGroup",n.registerForm1),b.zb(5),b.dc("placeholder",n.prefix),b.cc("ngModel",n.prefix)("ngModelOptions",b.ec(28,W)),b.zb(1),b.cc("ngForOf",n.prefixes),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.firstName.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.lastName.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.companyName.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.position.errors),b.zb(4),b.dc("placeholder",n.mobileCode),b.cc("ngModel",n.mobileCode)("ngModelOptions",b.ec(29,W)),b.zb(1),b.cc("ngForOf",n.mobileCodes),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.mobile.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.email.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f1.address.errors),b.zb(5),b.cc("type",n.passwordTypeA),b.zb(1),b.cc("ngIf","password"==n.passwordTypeA),b.zb(1),b.cc("ngIf","text"==n.passwordTypeA),b.zb(1),b.cc("ngIf",n.submitted&&n.f1.password.errors),b.zb(5),b.cc("type",n.passwordTypeB),b.zb(1),b.cc("ngIf","password"==n.passwordTypeB),b.zb(1),b.cc("ngIf","text"==n.passwordTypeB),b.zb(1),b.cc("ngIf",n.submitted&&n.f1.confirmPassword.errors),b.zb(5),b.dc("checked",n.newsStatus),b.zb(5),b.dc("checked",n.emailStatus),b.zb(5),b.dc("checked",n.termStatus),b.zb(5),b.cc("ngIf",!n.termToggle)}}function A(e,t){if(1&e&&(b.Mb(0,"ion-select-option",35),b.Mb(1,"div"),b.kc(2),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.cc("value",i.name),b.zb(2),b.mc(" ",i.name," ")}}function U(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"First Name is required"),b.Lb())}function R(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,U,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.firstName.errors.required)}}function F(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Last Name is required"),b.Lb())}function K(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,F,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.lastName.errors.required)}}function E(e,t){if(1&e&&(b.Mb(0,"ion-select-option",35),b.Mb(1,"div"),b.kc(2),b.Lb(),b.Lb()),2&e){var i=t.$implicit;b.cc("value",i.name),b.zb(2),b.mc(" ",i.name," ")}}function J(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Mobile is required"),b.Lb())}function D(e,t){if(1&e&&(b.Mb(0,"div",38),b.jc(1,J,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.mobile.errors.required)}}function G(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Email is required"),b.Lb())}function $(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,G,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.email.errors.required)}}function H(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Address is required"),b.Lb())}function Q(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,H,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.address.errors.required)}}function X(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",39),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowA()})),b.Lb()}}function V(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",40),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowA()})),b.Lb()}}function Y(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Password is required"),b.Lb())}function Z(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,Y,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.password.errors.required)}}function ee(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",39),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowB()})),b.Lb()}}function te(e,t){if(1&e){var i=b.Nb();b.Mb(0,"ion-icon",40),b.Ub("click",(function(){return b.gc(i),b.Wb(2).hideShowB()})),b.Lb()}}function ie(e,t){1&e&&(b.Mb(0,"div"),b.kc(1,"Confirm password is required"),b.Lb())}function ne(e,t){if(1&e&&(b.Mb(0,"div",36),b.jc(1,ie,2,0,"div",37),b.Lb()),2&e){var i=b.Wb(2);b.zb(1),b.cc("ngIf",i.f2.confirmPassword.errors.required)}}function oe(e,t){1&e&&(b.Mb(0,"div",38),b.Mb(1,"div"),b.kc(2,"Please accept the terms and conditions"),b.Lb(),b.Lb())}function re(e,t){if(1&e){var i=b.Nb();b.Mb(0,"form",5),b.Ub("ngSubmit",(function(){return b.gc(i),b.Wb().onSubmit2()})),b.Mb(1,"div",6),b.Mb(2,"div",7),b.Mb(3,"ion-row"),b.Mb(4,"ion-col",8),b.Mb(5,"ion-select",9),b.Ub("ngModelChange",(function(e){return b.gc(i),b.Wb().prefix=e}))("ionChange",(function(e){return b.gc(i),b.Wb().selectPrefix(e.target.value)})),b.jc(6,A,3,2,"ion-select-option",10),b.Lb(),b.Lb(),b.Mb(7,"ion-col",11),b.Mb(8,"ion-item"),b.Mb(9,"ion-label",12),b.kc(10,"First Name"),b.Lb(),b.Kb(11,"ion-input",13),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.jc(12,R,2,1,"div",14),b.Mb(13,"div",7),b.Mb(14,"ion-item"),b.Mb(15,"ion-label",12),b.kc(16,"Last Name"),b.Lb(),b.Kb(17,"ion-input",15),b.Lb(),b.Lb(),b.jc(18,K,2,1,"div",14),b.Mb(19,"div",7),b.Mb(20,"ion-row"),b.Mb(21,"ion-col",8),b.Mb(22,"ion-select",9),b.Ub("ngModelChange",(function(e){return b.gc(i),b.Wb().mobileCode=e}))("ionChange",(function(e){return b.gc(i),b.Wb().selectMobilecode(e.target.value)})),b.jc(23,E,3,2,"ion-select-option",10),b.Lb(),b.Lb(),b.Mb(24,"ion-col",11),b.Mb(25,"ion-item"),b.Mb(26,"ion-label",12),b.kc(27,"Mobile"),b.Lb(),b.Kb(28,"ion-input",18),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.jc(29,D,2,1,"div",19),b.Mb(30,"div",7),b.Mb(31,"ion-item"),b.Mb(32,"ion-label",12),b.kc(33,"Email"),b.Lb(),b.Kb(34,"ion-input",20),b.Lb(),b.Lb(),b.jc(35,$,2,1,"div",14),b.Mb(36,"div",7),b.Mb(37,"ion-item"),b.Mb(38,"ion-label",12),b.kc(39,"Address"),b.Lb(),b.Kb(40,"ion-input",21),b.Lb(),b.Lb(),b.jc(41,Q,2,1,"div",14),b.Mb(42,"div",7),b.Mb(43,"ion-item"),b.Mb(44,"ion-label",12),b.kc(45,"Password"),b.Lb(),b.Kb(46,"ion-input",22),b.jc(47,X,1,0,"ion-icon",23),b.jc(48,V,1,0,"ion-icon",24),b.Lb(),b.Lb(),b.jc(49,Z,2,1,"div",14),b.Mb(50,"div",7),b.Mb(51,"ion-item"),b.Mb(52,"ion-label",12),b.kc(53,"Confirm Password"),b.Lb(),b.Kb(54,"ion-input",25),b.jc(55,ee,1,0,"ion-icon",23),b.jc(56,te,1,0,"ion-icon",24),b.Lb(),b.Lb(),b.jc(57,ne,2,1,"div",14),b.Mb(58,"div"),b.Kb(59,"p",26),b.Lb(),b.Mb(60,"ion-row"),b.Mb(61,"ion-col",27),b.Mb(62,"ion-checkbox",28),b.Ub("ionChange",(function(){return b.gc(i),b.Wb().newsCheck()})),b.Lb(),b.Lb(),b.Mb(63,"ion-col",29),b.kc(64," To send newsletter regarding marketing offers and promotions "),b.Lb(),b.Lb(),b.Mb(65,"ion-row"),b.Mb(66,"ion-col",27),b.Mb(67,"ion-checkbox",28),b.Ub("ionChange",(function(){return b.gc(i),b.Wb().emailCheck()})),b.Lb(),b.Lb(),b.Mb(68,"ion-col",29),b.kc(69," Consent to contact via email/call/or sms about booking and transactions "),b.Lb(),b.Lb(),b.Mb(70,"ion-row"),b.Mb(71,"ion-col",27),b.Mb(72,"ion-checkbox",28),b.Ub("ionChange",(function(){return b.gc(i),b.Wb().termsCheck()})),b.Lb(),b.Lb(),b.Mb(73,"ion-col",29),b.kc(74," I have read and understood the "),b.Mb(75,"u",30),b.kc(76," Terms and conditions"),b.Lb(),b.Lb(),b.Lb(),b.jc(77,oe,3,0,"div",19),b.Mb(78,"div",31),b.Mb(79,"ion-button",32),b.kc(80,"Register"),b.Lb(),b.Mb(81,"p",33),b.kc(82,"I have a ShiftCar Rental Account. "),b.Mb(83,"span",34),b.Ub("click",(function(){return b.gc(i),b.Wb().login()})),b.kc(84,"Back to Login"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&e){var n=b.Wb();b.cc("formGroup",n.registerForm2),b.zb(5),b.dc("placeholder",n.prefix),b.cc("ngModel",n.prefix)("ngModelOptions",b.ec(26,W)),b.zb(1),b.cc("ngForOf",n.prefixes),b.zb(6),b.cc("ngIf",n.submitted&&n.f2.firstName.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f2.lastName.errors),b.zb(4),b.dc("placeholder",n.mobileCode),b.cc("ngModel",n.mobileCode)("ngModelOptions",b.ec(27,W)),b.zb(1),b.cc("ngForOf",n.mobileCodes),b.zb(6),b.cc("ngIf",n.submitted&&n.f2.mobile.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f2.email.errors),b.zb(6),b.cc("ngIf",n.submitted&&n.f2.address.errors),b.zb(5),b.cc("type",n.passwordTypeA),b.zb(1),b.cc("ngIf","password"==n.passwordTypeA),b.zb(1),b.cc("ngIf","text"==n.passwordTypeA),b.zb(1),b.cc("ngIf",n.submitted&&n.f2.password.errors),b.zb(5),b.cc("type",n.passwordTypeB),b.zb(1),b.cc("ngIf","password"==n.passwordTypeB),b.zb(1),b.cc("ngIf","text"==n.passwordTypeB),b.zb(1),b.cc("ngIf",n.submitted&&n.f2.confirmPassword.errors),b.zb(5),b.dc("checked",n.newsStatus),b.zb(5),b.dc("checked",n.emailStatus),b.zb(5),b.dc("checked",n.termStatus),b.zb(5),b.cc("ngIf",!n.termToggle)}}var ce,se,ae,be=[{path:"",component:(ce=function(){function e(t,i,n,o,r){_classCallCheck(this,e),this.router=t,this.apiService=i,this.platform=n,this.alertCtrl=o,this.formBuilder=r,this.prefix="Mr",this.prefixes=[],this.nationalities=[],this.nationality="Choose Nationality",this.mobileCodes=[],this.mobileCode="+971",this.newsletter=1,this.smsemail=1,this.terms=0,this.passwordTypeA="password",this.passwordTypeB="password",this.submitted=!1,this.termStatus=!1,this.newsStatus=!0,this.emailStatus=!0,this.termToggle=!0,this.layoutChange="corporate"}return _createClass(e,[{key:"ngOnInit",value:function(){this.prefixes=[{name:"Mr"},{name:"Mrs"}],this.nationalities=[{name:"United Arab Emirates"},{name:"United Kingdom"}],this.mobileCodes=[{name:"+971"},{name:"+44"}],this.registerForm1=this.formBuilder.group({firstName:["",o.m.required],lastName:["",o.m.required],position:["",o.m.required],email:["",[o.m.required,o.m.email,o.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[o.m.required]],confirmPassword:["",o.m.required],companyName:["",o.m.required],address:["",o.m.required],mobile:["",[o.m.required,o.m.pattern("^[0-9]*$"),o.m.minLength(10),o.m.maxLength(10)]]},{validator:a("password","confirmPassword")}),this.registerForm2=this.formBuilder.group({firstName:["",o.m.required],lastName:["",o.m.required],email:["",[o.m.required,o.m.email,o.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",[o.m.required]],confirmPassword:["",o.m.required],address:["",o.m.required],mobile:["",[o.m.required,o.m.pattern("^[0-9]*$"),o.m.minLength(10),o.m.maxLength(10)]]},{validator:a("password","confirmPassword")})}},{key:"ionViewDidEnter",value:function(){var e=this;this.platform.backButton.subscribeWithPriority(10,(function(t){console.log("Back press handler!"),e.router.navigateByUrl("/login")}))}},{key:"hideShowA",value:function(){this.passwordTypeA="text"===this.passwordTypeA?"password":"text"}},{key:"hideShowB",value:function(){this.passwordTypeB="text"===this.passwordTypeB?"password":"text"}},{key:"onSubmit1",value:function(){this.submitted=!0,this.registerForm1.invalid?this.termStatus||(this.termToggle=!1):(console.log(this.registerForm1.value),this.termStatus?(this.termToggle=!0,this.register(this.registerForm1.value)):this.termToggle=!1)}},{key:"onSubmit2",value:function(){this.submitted=!0,this.registerForm2.invalid?this.termStatus||(this.termToggle=!1):(console.log(this.registerForm2.value),this.termStatus?(this.termToggle=!0,this.register(this.registerForm2.value)):this.termToggle=!1)}},{key:"segmentChanged",value:function(e){console.log(e.target.value),this.layoutChange=e.target.value}},{key:"selectPrefix",value:function(e){this.prefix=e}},{key:"selectNationality",value:function(e){this.nationality=e}},{key:"selectMobilecode",value:function(e){this.mobileCode=e}},{key:"termsCheck",value:function(){this.termStatus?(this.termStatus=!1,this.terms=0,this.termToggle=!1):(this.termStatus=!0,this.terms=1,this.termToggle=!0)}},{key:"newsCheck",value:function(){this.newsStatus?(this.newsStatus=!1,this.newsletter=0):(this.newsStatus=!0,this.newsletter=1)}},{key:"emailCheck",value:function(){this.emailStatus?(this.emailStatus=!1,this.smsemail=0):(this.emailStatus=!0,this.smsemail=1)}},{key:"register",value:function(e){var t,i=this;t="corporate"==this.layoutChange?{customer_type:this.layoutChange,salutation:this.prefix,first_name:e.firstName,last_name:e.lastName,debitor_code:e.debitorCode,mobile_code:this.mobileCode,mobile:e.mobile,email:e.email,nationality:this.nationality,address:e.address,password:e.password,confirm_password:e.confirmPassword,smsemail:this.smsemail,termsandconditions:this.terms,newsletter:this.newsletter,company_name:e.companyName,position:e.position}:{customer_type:this.layoutChange,salutation:this.prefix,first_name:e.firstName,last_name:e.lastName,debitor_code:e.debitorCode,mobile_code:this.mobileCode,mobile:e.mobile,email:e.email,nationality:this.nationality,address:e.address,password:e.password,confirm_password:e.confirmPassword,smsemail:this.smsemail,termsandconditions:this.terms,newsletter:this.newsletter},this.apiService.postMethod("api/register?",t).then((function(t){console.log(t),"S"==t.status?(i.apiService.nativeToast(t.message),i.router.navigate(["otp",JSON.stringify(e.email)])):i.apiService.nativeToast(t.message)}),(function(e){console.log(e),i.apiService.nativeToast(e.error.message)}))}},{key:"login",value:function(){this.router.navigateByUrl("/login")}},{key:"presentConfirm",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertCtrl.create({header:"Confirmation Alert",message:"Do you want to exit App?",buttons:[{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel clicked")}},{text:"Yes",handler:function(){console.log("Yes clicked"),navigator.app.exitApp()}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"f1",get:function(){return this.registerForm1.controls}},{key:"f2",get:function(){return this.registerForm2.controls}}]),e}(),ce.\u0275fac=function(e){return new(e||ce)(b.Jb(c.g),b.Jb(u.a),b.Jb(r.N),b.Jb(r.b),b.Jb(o.a))},ce.\u0275cmp=b.Db({type:ce,selectors:[["app-register"]],decls:14,vars:2,consts:[["src","../../../assets/login-banner.png",2,"margin-top","-2px"],["value","corporate",3,"ionChange"],["value","personal",1,"segmentBtn"],["value","corporate",1,"segmentBtn"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["size","4"],["interface","popover",1,"selection",3,"ngModel","placeholder","ngModelOptions","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["size","8"],["position","floating"],["formControlName","firstName"],["class","invalid-feedback",4,"ngIf"],["formControlName","lastName"],["formControlName","companyName"],["formControlName","position"],["type","tel","formControlName","mobile"],["class","invalid-feedback","style","margin-top: 10px;",4,"ngIf"],["type","email","formControlName","email"],["formControlName","address"],["type","password","formControlName","password",3,"type"],["class","eyeIcon","slot","end","name","eye-off-outline",3,"click",4,"ngIf"],["class","eyeIcon","slot","end","name","eye-outline",3,"click",4,"ngIf"],["type","password","formControlName","confirmPassword",3,"type"],[1,"divider"],["size","2",1,"termsCheck"],[3,"checked","ionChange"],["size","10",1,"termsText"],[1,"termsLink"],[2,"text-align","center"],["type","submit",1,"registerBtn"],[2,"font-size","14px"],[2,"color","#1D97DB",3,"click"],[3,"value"],[1,"invalid-feedback"],[4,"ngIf"],[1,"invalid-feedback",2,"margin-top","10px"],["slot","end","name","eye-off-outline",1,"eyeIcon",3,"click"],["slot","end","name","eye-outline",1,"eyeIcon",3,"click"]],template:function(e,t){1&e&&(b.Mb(0,"div"),b.Kb(1,"img",0),b.Lb(),b.Mb(2,"ion-content"),b.Mb(3,"h5"),b.kc(4,"Let's Go Anywhere, Anytime"),b.Lb(),b.Mb(5,"ion-segment",1),b.Ub("ionChange",(function(e){return t.segmentChanged(e)})),b.Mb(6,"ion-segment-button",2),b.Mb(7,"ion-label"),b.kc(8,"Personal"),b.Lb(),b.Lb(),b.Mb(9,"ion-segment-button",3),b.Mb(10,"ion-label"),b.kc(11,"Corporate"),b.Lb(),b.Lb(),b.Lb(),b.jc(12,B,97,30,"form",4),b.jc(13,re,85,28,"form",4),b.Lb()),2&e&&(b.zb(12),b.cc("ngIf","corporate"==t.layoutChange),b.zb(1),b.cc("ngIf","personal"==t.layoutChange))},directives:[r.k,r.y,r.O,r.z,r.r,n.j,o.n,o.i,o.c,r.x,r.j,r.A,o.h,o.k,n.i,r.q,r.p,r.P,o.b,r.i,r.c,r.g,r.B,r.o],styles:["h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center}h5[_ngcontent-%COMP%]{color:#1d97db;margin-bottom:30px}.segmentBtn[_ngcontent-%COMP%]{--background:#1d97db;--background-checked:#204d74;margin:20px;--border-radius:10px;color:#fff;--indicator-color:none;text-transform:none}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.input-group[_ngcontent-%COMP%]{padding:20px}.divider[_ngcontent-%COMP%]{height:1px;background-color:grey;width:100%;margin-top:15px}.termsCheck[_ngcontent-%COMP%]{text-align:right}.termsText[_ngcontent-%COMP%]{text-align:left;font-size:14px}.termsLink[_ngcontent-%COMP%]{color:#1d97db}.registerBtn[_ngcontent-%COMP%]{margin-top:20px;--background:#1d97db;--box-shadow:none;--border-radius:14px;width:150px;text-transform:capitalize}.selection[_ngcontent-%COMP%]{margin-top:10px;--placeholder-color:#000;--placeholder-opacity:1!important}.eyeIcon[_ngcontent-%COMP%]{margin-top:20px}"]}),ce)}],ue=((ae=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:ae}),ae.\u0275inj=b.Gb({factory:function(e){return new(e||ae)},imports:[[c.i.forChild(be)],c.i]}),ae),le=((se=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:se}),se.\u0275inj=b.Gb({factory:function(e){return new(e||se)},imports:[[n.b,o.d,r.I,ue,o.l]]}),se)}}]);