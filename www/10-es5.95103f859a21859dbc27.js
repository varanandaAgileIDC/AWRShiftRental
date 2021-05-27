function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{k578:function(e,n,t){"use strict";t.r(n),t.d(n,"EditProfilePageModule",(function(){return h}));var o,i,a,r=t("ofXK"),c=t("3Pt+"),s=t("TEn/"),l=t("tyNb"),u=t("mrSG"),b=t("fXoL"),g=t("H+bZ"),p=t("a/9d"),d=[{path:"",component:(o=function(){function e(n,t,o,i,a){_classCallCheck(this,e),this.platform=n,this.router=t,this.actionSheetController=o,this.apiService=i,this.camera=a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=JSON.parse(localStorage.getItem("AWRLogin"));e&&(this.users=e.userdata)}},{key:"ionViewDidEnter",value:function(){var e=this;this.platform.backButton.subscribeWithPriority(10,(function(n){console.log("Back press handler!"),e.router.navigate(["/tabs"])}))}},{key:"pickImage",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheetController.create({header:"select image",buttons:[{text:"Photo Library",icon:"images",handler:function(){t.accessGallery()}},{text:"camera",icon:"camera",handler:function(){t.takePicture()}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"accessGallery",value:function(){var e=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.DATA_URL,correctOrientation:!0}).then((function(n){console.log(n),null==n||""==n||(e.users.avatar="data:image/jpeg;base64,"+n,e.apiService.profileImage=e.users.avatar)}),(function(e){console.log(e)}))}},{key:"takePicture",value:function(){var e=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.CAMERA,destinationType:this.camera.DestinationType.DATA_URL,correctOrientation:!0}).then((function(n){console.log(n),null==n||""==n||(e.users.avatar="data:image/jpeg;base64,"+n,e.apiService.profileImage=e.users.avatar)}),(function(e){console.log(e)}))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(b.Jb(s.J),b.Jb(l.g),b.Jb(s.a),b.Jb(g.a),b.Jb(p.a))},o.\u0275cmp=b.Db({type:o,selectors:[["app-edit-profile"]],decls:27,vars:5,consts:[["slot","start"],[1,"notifications-btn"],["name","notifications-outline"],[1,"profileImage",3,"src","click"],[1,"firstname"],["placeholder","First Name",3,"ngModel","ngModelChange"],["name","create-outline","slot","end"],["placeholder","Last Name",3,"ngModel","ngModelChange"],["placeholder","Email",3,"ngModel","ngModelChange"],["name","mail-outline","slot","end"],[1,"mobile"],["type","tel","placeholder","Mobile",3,"ngModel","ngModelChange"],["name","phone-portrait-outline","slot","end"],[2,"text-align","center"],[1,"updateBtn"]],template:function(e,n){1&e&&(b.Mb(0,"ion-content"),b.Mb(1,"ion-header"),b.Mb(2,"ion-toolbar"),b.Mb(3,"ion-buttons",0),b.Kb(4,"ion-menu-button"),b.Lb(),b.Mb(5,"ion-title"),b.jc(6," Edit Profile "),b.Lb(),b.Mb(7,"ion-button",1),b.Kb(8,"ion-icon",2),b.Lb(),b.Lb(),b.Lb(),b.Mb(9,"ion-content"),b.Mb(10,"img",3),b.Ub("click",(function(){return n.pickImage()})),b.Lb(),b.Mb(11,"ion-item",4),b.Mb(12,"ion-input",5),b.Ub("ngModelChange",(function(e){return n.users.first_name=e})),b.Lb(),b.Kb(13,"ion-icon",6),b.Lb(),b.Mb(14,"ion-item"),b.Mb(15,"ion-input",7),b.Ub("ngModelChange",(function(e){return n.users.last_name=e})),b.Lb(),b.Kb(16,"ion-icon",6),b.Lb(),b.Mb(17,"ion-item"),b.Mb(18,"ion-input",8),b.Ub("ngModelChange",(function(e){return n.users.email=e})),b.Lb(),b.Kb(19,"ion-icon",9),b.Lb(),b.Mb(20,"ion-item",10),b.Mb(21,"ion-input",11),b.Ub("ngModelChange",(function(e){return n.users.mobile=e})),b.Lb(),b.Kb(22,"ion-icon",12),b.Lb(),b.Kb(23,"br"),b.Mb(24,"div",13),b.Mb(25,"ion-button",14),b.jc(26,"Update"),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.zb(10),b.bc("src",n.apiService.profileImage,b.gc),b.zb(2),b.bc("ngModel",n.users.first_name),b.zb(3),b.bc("ngModel",n.users.last_name),b.zb(3),b.bc("ngModel",n.users.email),b.zb(3),b.bc("ngModel",n.users.mobile))},directives:[s.j,s.l,s.F,s.g,s.s,s.E,s.f,s.m,s.o,s.n,s.L,c.h,c.k],styles:["ion-title[_ngcontent-%COMP%]{float:left;top:11px;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{float:left}.menu-btn[_ngcontent-%COMP%], .notifications-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff}.notifications-btn[_ngcontent-%COMP%]{float:right}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}.profileImage[_ngcontent-%COMP%]{width:100px;height:100px;display:block;border-radius:50%;margin-top:20px;margin-left:auto;margin-right:auto}ion-item[_ngcontent-%COMP%]{--background:transparent;color:#fff;width:80%;height:44px;margin:20px auto 0;border-bottom:1px solid #fff}.updateBtn[_ngcontent-%COMP%]{margin-top:20px;--background:#1d97db;--box-shadow:none;--border-radius:14px;width:80%;height:55px;text-transform:none}"]}),o)}],f=((a=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:a}),a.\u0275inj=b.Gb({factory:function(e){return new(e||a)},imports:[[l.i.forChild(d)],l.i]}),a),h=((i=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(e){return new(e||i)},imports:[[r.b,c.d,s.G,f]]}),i)}}]);