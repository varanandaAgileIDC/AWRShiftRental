function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"HE1+":function(e,n,t){"use strict";t.r(n),t.d(n,"ServiceRequestPageModule",(function(){return m}));var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),c=t("wd/R"),l=t("fXoL"),b=t("ya1t"),s=t("H+bZ");function u(e,n){if(1&e&&(l.Mb(0,"ion-select-option",18),l.kc(1),l.Lb()),2&e){var t=n.$implicit;l.cc("value",t),l.zb(1),l.lc(t.name)}}var d,p,f,g=[{path:"",component:(d=function(){function e(n,t,o,i){_classCallCheck(this,e),this.platform=n,this.router=t,this.datePicker=o,this.apiService=i,this.vehicleNumbers=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.vehicleNumbers=[{vehicleNumber:"A 92868",name:"Lamborghini Diablo"},{vehicleNumber:"A 93868",name:"Ford Raptor"},{vehicleNumber:"A 94868",name:"Ferrari Testarossa"},{vehicleNumber:"A 95868",name:"Porsche 911 Carrera"},{vehicleNumber:"A 92868",name:"Jensen Interceptor"},{vehicleNumber:"A 93868",name:"Lamborghini Hurac\xe1n"},{vehicleNumber:"A 94868",name:"Ferrari 812 Superfast"},{vehicleNumber:"A 95868",name:"Jeep Gladiator"}]}},{key:"ionViewDidEnter",value:function(){var e=this;this.platform.backButton.subscribeWithPriority(10,(function(n){console.log("Back press handler!"),e.router.navigate(["/tabs"])}))}},{key:"pickDate",value:function(){var e=this;this.datePicker.show({date:new Date,mode:"date",minDate:this.platform.is("android")?new Date:(new Date).valueOf(),allowOldDates:!1,androidTheme:this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT}).then((function(n){var t=new Date,o=n.getMonth()+1,i=t.getMonth()+1;if(n.getDate()==t.getDate()&&o==i&&(n=t),n<t)e.apiService.nativeToast("Please select today or future date");else{e.startDate=n;var r=c(n,"MM:DD:YYYY").format("MMM DD YYYY"),a=c(n,"HH-MM A").format("hh:mm a");e.serviceDate=r+", "+a}}),(function(e){console.log("error response",e)}))}}]),e}(),d.\u0275fac=function(e){return new(e||d)(l.Jb(r.N),l.Jb(a.g),l.Jb(b.a),l.Jb(s.a))},d.\u0275cmp=l.Db({type:d,selectors:[["app-service-request"]],decls:29,vars:2,consts:[["slot","start"],[1,"notifications-btn"],["name","notifications-outline"],["lines","none",2,"background","transparent"],[2,"--background","transparent","border-radius","20px","margin-left","5px","margin-right","5px","border","1px solid #1D97DB","margin","20px"],["interface","popover","placeholder","Select Vehicle",1,"selection",2,"width","100%"],[3,"value",4,"ngFor","ngForOf"],[1,"input-field","location-field"],[1,"blue-bg-input"],["name","calendar-outline"],[3,"click"],["position","floating"],["type","text","readonly","",3,"ngModel","ngModelChange"],[2,"--background","#e7edf5","border-radius","20px","margin","20px"],["position","floating",2,"color","black"],[2,"text-align","center"],[1,"submitBtn"],["slot","end","name","chevron-forward-outline"],[3,"value"]],template:function(e,n){1&e&&(l.Mb(0,"ion-content"),l.Mb(1,"ion-header"),l.Mb(2,"ion-toolbar"),l.Mb(3,"ion-buttons",0),l.Kb(4,"ion-menu-button"),l.Lb(),l.Mb(5,"ion-title"),l.kc(6," Service Request "),l.Lb(),l.Mb(7,"ion-button",1),l.Kb(8,"ion-icon",2),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"ion-content"),l.Mb(10,"ion-list",3),l.Mb(11,"ion-item",4),l.Mb(12,"ion-select",5),l.jc(13,u,2,2,"ion-select-option",6),l.Lb(),l.Lb(),l.Mb(14,"div",7),l.Mb(15,"div",8),l.Kb(16,"ion-icon",9),l.Lb(),l.Mb(17,"ion-item",10),l.Ub("click",(function(){return n.pickDate()})),l.Mb(18,"ion-label",11),l.kc(19,"Select Date"),l.Lb(),l.Mb(20,"ion-input",12),l.Ub("ngModelChange",(function(e){return n.serviceDate=e})),l.Lb(),l.Lb(),l.Lb(),l.Mb(21,"ion-item",13),l.Mb(22,"ion-label",14),l.kc(23,"Description"),l.Lb(),l.Kb(24,"ion-textarea"),l.Lb(),l.Mb(25,"div",15),l.Mb(26,"ion-button",16),l.Kb(27,"ion-icon",17),l.kc(28," Submit "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(13),l.cc("ngForOf",n.vehicleNumbers),l.zb(7),l.cc("ngModel",n.serviceDate))},directives:[r.k,r.n,r.H,r.h,r.u,r.G,r.g,r.o,r.s,r.q,r.A,r.O,o.i,r.r,r.p,r.P,i.h,i.k,r.F,r.B],styles:["ion-title[_ngcontent-%COMP%]{float:left;top:11px;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{float:left}.menu-btn[_ngcontent-%COMP%], .notifications-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff}.notifications-btn[_ngcontent-%COMP%]{float:right}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.selection[_ngcontent-%COMP%]{margin-top:10px;--placeholder-color:#fff;--placeholder-opacity:1!important;max-width:100%;color:#fff}.location-field[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .location-field[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:60px;--color:#fff}.input-field.location-field[_ngcontent-%COMP%]{background:transparent;border-radius:14px;overflow:hidden;border:1px solid #1d97db;margin:20px}.blue-bg-input[_ngcontent-%COMP%]{position:absolute;color:#fff;padding:14px 12px 4px;background:#1d97db;border-radius:12px 0 0 12px;margin-left:0;font-size:30px}.submitBtn[_ngcontent-%COMP%]{margin-top:10px;--background:#1d97db;--box-shadow:none;--border-radius:14px;width:80%;height:55px;text-transform:none}"]}),d)}],h=((f=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:f}),f.\u0275inj=l.Gb({factory:function(e){return new(e||f)},imports:[[a.i.forChild(g)],a.i]}),f),m=((p=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:p}),p.\u0275inj=l.Gb({factory:function(e){return new(e||p)},imports:[[o.b,i.d,r.I,h]]}),p)}}]);