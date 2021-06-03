function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=_superPropBase(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{F4UR:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginPageModule",(function(){return _}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),s=n("mrSG"),c=n("fXoL"),u=n("H+bZ"),l=n("tk/3");function p(t,e){1&t&&(c.Mb(0,"div"),c.kc(1,"Email is required"),c.Lb())}function f(t,e){if(1&t&&(c.Mb(0,"div",14),c.jc(1,p,2,0,"div",15),c.Lb()),2&t){var n=c.Wb();c.zb(1),c.cc("ngIf",n.f.email.errors.required)}}function d(t,e){1&t&&(c.Mb(0,"div"),c.kc(1,"Password is required"),c.Lb())}function b(t,e){if(1&t&&(c.Mb(0,"div",14),c.jc(1,d,2,0,"div",15),c.Lb()),2&t){var n=c.Wb();c.zb(1),c.cc("ngIf",n.f.password.errors.required)}}var h,g,m,v=[{path:"",component:(h=function(){function t(e,n,r,o,i,a,s){_classCallCheck(this,t),this.router=e,this.apiService=n,this.http=r,this.platform=o,this.alertCtrl=i,this.formBuilder=a,this.menuCtrl=s,this.submitted=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.loginForm=this.formBuilder.group({email:["",[o.m.required,o.m.email,o.m.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],password:["",o.m.required]})}},{key:"ionViewWillEnter",value:function(){this.menuCtrl.enable(!1)}},{key:"xyz",value:function(){this.apiService.nativeToast("xyz")}},{key:"ionViewDidEnter",value:function(){var t=this;this.platform.backButton.subscribeWithPriority(10,(function(e){console.log("Back press handler!"),("/login"==t.router.routerState.snapshot.url||"/tabs/tab1"==t.router.routerState.snapshot.url)&&t.presentConfirm()}))}},{key:"onSubmit",value:function(){this.submitted=!0,this.loginForm.invalid||(console.log(this.loginForm.value),this.login(this.loginForm.value))}},{key:"login",value:function(t){var e=this;this.apiService.postMethod("api/login?",{email:t.email,password:t.password,usertype:"customer"}).then((function(t){console.log(t),0==t.userdata.status?e.apiService.nativeToast("These credentials do not match our records"):(e.loginForm.reset(),localStorage.setItem("AWRLogin",JSON.stringify(t)),e.router.navigate(["/tabs"]))}),(function(t){console.log(t),e.apiService.nativeToast(t.error.message)}))}},{key:"register",value:function(){this.router.navigateByUrl("/register")}},{key:"presentConfirm",value:function(){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({message:"Are you sure you want to exit?",buttons:[{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel clicked")}},{text:"Yes",handler:function(){console.log("Yes clicked"),navigator.app.exitApp()}}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"forgotPassword",value:function(){var t=this;this.alertCtrl.create({subHeader:"Forgot Password",inputs:[{name:"email",placeholder:"Please enter registered email"}],buttons:[{text:"Cancel",handler:function(t){console.log("Canceled",t)}},{text:"Done",handler:function(e){console.log("sending Information",e);var n=t.validateEmail(e.email);""==e.email?t.apiService.nativeToast("Please enter your registered email"):n?t.forgotApi(e.email):n||t.apiService.nativeToast("You have entered an invalid email")}}]}).then((function(t){t.present()}))}},{key:"validateEmail",value:function(t){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}},{key:"forgotApi",value:function(t){var e=this;this.apiService.postMethod("api/forgot-password?",{email:t}).then((function(t){console.log(t),e.apiService.nativeToast(t.message)}),(function(t){console.log(t),e.apiService.nativeToast(t.error.message)}))}},{key:"f",get:function(){return this.loginForm.controls}}]),t}(),h.\u0275fac=function(t){return new(t||h)(c.Jb(a.g),c.Jb(u.a),c.Jb(l.a),c.Jb(i.N),c.Jb(i.b),c.Jb(o.a),c.Jb(i.L))},h.\u0275cmp=c.Db({type:h,selectors:[["app-login"]],decls:31,vars:3,consts:[["src","../../../assets/login-banner.png",2,"margin-top","-2px"],[3,"formGroup","ngSubmit"],[1,"input-group"],[1,"input-field"],["position","floating"],["type","email","formControlName","email"],["class","invalid-feedback",4,"ngIf"],[1,"password"],["type","password","formControlName","password"],["type","submit","expand","block",1,"ion-color-primary"],[2,"text-align","center","color","#1D97DB","margin-top","-10px"],[3,"click"],[2,"font-size","14px","text-align","center"],["expand","block",1,"ion-color-primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,e){1&t&&(c.Mb(0,"div"),c.Kb(1,"img",0),c.Lb(),c.Mb(2,"ion-content"),c.Mb(3,"h5"),c.kc(4,"Let's Go Anywhere, Anytime"),c.Lb(),c.Mb(5,"form",1),c.Ub("ngSubmit",(function(){return e.onSubmit()})),c.Mb(6,"div",2),c.Mb(7,"div",3),c.Mb(8,"ion-item"),c.Mb(9,"ion-label",4),c.kc(10,"Email address"),c.Lb(),c.Kb(11,"ion-input",5),c.Lb(),c.Lb(),c.jc(12,f,2,1,"div",6),c.Mb(13,"div",3),c.Mb(14,"ion-item",7),c.Mb(15,"ion-label",4),c.kc(16,"Password"),c.Lb(),c.Kb(17,"ion-input",8),c.Lb(),c.Lb(),c.jc(18,b,2,1,"div",6),c.Lb(),c.Mb(19,"ion-button",9),c.kc(20,"Login"),c.Lb(),c.Mb(21,"div",10),c.Mb(22,"b"),c.Mb(23,"p",11),c.Ub("click",(function(){return e.forgotPassword()})),c.kc(24,"Forgot Password"),c.Lb(),c.Lb(),c.Lb(),c.Mb(25,"h6"),c.kc(26,"Or"),c.Lb(),c.Mb(27,"p",12),c.kc(28,"if you don't have an account please"),c.Lb(),c.Mb(29,"ion-button",13),c.Ub("click",(function(){return e.register()})),c.kc(30,"Register"),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(5),c.cc("formGroup",e.loginForm),c.zb(7),c.cc("ngIf",e.submitted&&e.f.email.errors),c.zb(6),c.cc("ngIf",e.submitted&&e.f.password.errors))},directives:[i.k,o.n,o.i,o.c,i.q,i.r,i.p,i.P,o.h,o.b,r.j,i.g],styles:["ion-content[_ngcontent-%COMP%]{--padding-start:10%;--padding-end:10%;--background:#fff;--color:#484d52}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.uae-flag[_ngcontent-%COMP%]{width:73px;height:18px;position:absolute;margin-top:19px;border-right:1px solid #999}.uae-flag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;float:left}.mobile-number[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .mobile-number[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:80px}ion-button.ion-color-primary[_ngcontent-%COMP%]{--background:#1d97db}ion-button.ion-color-primary[_ngcontent-%COMP%], ion-button.ion-color-secondary[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:14px;height:55px;text-transform:capitalize}ion-button.ion-color-secondary[_ngcontent-%COMP%]{--background:#eef4fa;--color:#484d52}ion-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:10px}h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{text-align:center}h5[_ngcontent-%COMP%]{color:#1d97db;margin-bottom:30px}"]}),h)}],y=((m=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:m}),m.\u0275inj=c.Gb({factory:function(t){return new(t||m)},imports:[[a.i.forChild(v)],a.i]}),m),_=((g=function t(){_classCallCheck(this,t)}).\u0275mod=c.Hb({type:g}),g.\u0275inj=c.Gb({factory:function(t){return new(t||g)},imports:[[r.b,o.d,i.I,y,o.l]]}),g)},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("mrSG"),o=n("tk/3"),i=n("HDdC"),a=n("7o/Q");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return function(e){return e.lift(new u(t,e))}}var c,u=function(){function t(e,n){_classCallCheck(this,t),this.count=e,this.source=n}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new l(t,this.count,this.source))}}]),t}(),l=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,r,o){var i;return _classCallCheck(this,n),(i=e.call(this,t)).count=r,i.source=o,i}return _createClass(n,[{key:"error",value:function(t){if(!this.isStopped){var e=this.source,r=this.count;if(0===r)return _get(_getPrototypeOf(n.prototype),"error",this).call(this,t);r>-1&&(this.count=r-1),e.subscribe(this._unsubscribeAndRecycle())}}}]),n}(a.a),p=n("JIr8"),f=n("fXoL"),d=n("SmVF"),b=n("TEn/"),h=((c=function(){function t(e,n,r){_classCallCheck(this,t),this.http=e,this.toastCtrl=n,this.loadingCtrl=r,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.addressPopUp="pickUp",this.httpOptions={headers:new o.c({"Content-Type":"application/json"})}}return _createClass(t,[{key:"handleError",value:function(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error("Backend returned code ".concat(t.status,", body was: ")+t.error),new i.a((function(t){return t.error("Something bad happened; please try again later.")}))}},{key:"getRequest",value:function(t){return this.http.get(this.base_path+JSON.stringify(t),this.httpOptions).pipe(s(2),Object(p.a)(this.handleError))}},{key:"postRequest",value:function(t,e){return this.http.post(this.base_path+t,e,this.httpOptions).pipe(s(),Object(p.a)(this.handleError))}},{key:"postMethod",value:function(t,e){var n=this;return new Promise((function(r,o){n.showLoader(),n.http.post(n.base_path+t,e).subscribe((function(t){n.hideLoader(),r(t)}),(function(t){n.hideLoader(),o(t)}))}))}},{key:"nativeToast",value:function(t){this.toastCtrl.show(t,"4000","bottom").subscribe((function(t){console.log(t)}))}},{key:"showLoader",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then((function(t){t.present().then((function(){console.log("loading presented"),e.isLoading||t.dismiss().then((function(){return console.log("abort loading")}))}))}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"hideLoader",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.next=3,this.loadingCtrl.dismiss().then((function(){return console.log("loading dismissed")}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||c)(f.Qb(o.a),f.Qb(d.a),f.Qb(b.K))},c.\u0275prov=f.Fb({token:c,factory:c.\u0275fac,providedIn:"root"}),c)}}]);