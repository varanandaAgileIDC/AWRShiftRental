function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{LtKz:function(n,e,t){"use strict";t.r(e),t.d(e,"BreakDownPageModule",(function(){return k}));var o=t("ofXK"),i=t("3Pt+"),a=t("TEn/"),r=t("tyNb"),c=t("mrSG"),s=t("fXoL"),l=t("tAfe"),b=t("U3FU"),u=t("a/9d");function p(n,e){if(1&n){var t=s.Nb();s.Mb(0,"ion-col",18),s.Ub("click",(function(){s.fc(t);var n=e.$implicit;return s.Wb().zoom(n)})),s.Kb(1,"img",19),s.Lb()}if(2&n){var o=e.$implicit;s.zb(1),s.cc("src",o,s.gc)}}var f,d,g,h=[{path:"",component:(f=function(){function n(e,t,o,i,a,r){_classCallCheck(this,n),this.platform=e,this.router=t,this.imagePicker=o,this.actionSheetController=i,this.photoViewer=a,this.camera=r,this.images=[]}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ionViewDidEnter",value:function(){var n=this;this.platform.backButton.subscribeWithPriority(10,(function(e){console.log("Back press handler!"),n.router.navigate(["/tabs"])}))}},{key:"getImage",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.actionSheetController.create({header:"Upload images from",buttons:[{text:"Gallery",icon:"images",handler:function(){t.selectImage()}},{text:"camera",icon:"camera",handler:function(){t.takePicture()}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"selectImage",value:function(){var n=this;this.imagePicker.getPictures({maximumImagesCount:15,outputType:1}).then((function(e){for(var t=0;t<e.length;t++)n.images.push("data:image/jpeg;base64,"+e[t]),console.log("Image URI: "+e[t])}),(function(n){}))}},{key:"takePicture",value:function(){var n=this;this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then((function(e){console.log(e),null==e||""==e||n.images.push("data:image/jpeg;base64,"+e)}),(function(n){}))}},{key:"zoom",value:function(n){this.photoViewer.show(n,"",{share:!1})}}]),n}(),f.\u0275fac=function(n){return new(n||f)(s.Jb(a.J),s.Jb(r.g),s.Jb(l.a),s.Jb(a.a),s.Jb(b.a),s.Jb(u.a))},f.\u0275cmp=s.Db({type:f,selectors:[["app-break-down"]],decls:38,vars:1,consts:[["slot","start"],[1,"notifications-btn"],["name","notifications-outline"],["lines","none",2,"background","transparent"],[2,"--background","transparent","border-radius","20px","margin-left","5px","margin-right","5px"],["interface","popover","placeholder","Breakdown Type",1,"selection",2,"width","100%"],["value","brown"],["value","blonde"],["value","black"],["value","red"],[2,"--background","#e7edf5","border-radius","20px","margin","20px"],["position","floating",2,"color","black"],[2,"text-align","end"],[2,"--background","#1D97DB",3,"click"],["slot","end","name","cloud-upload-outline"],[2,"--background","#1D97DB"],["slot","end","name","chevron-forward-outline"],["size","4",3,"click",4,"ngFor","ngForOf"],["size","4",3,"click"],[2,"width","150px","height","150px",3,"src"]],template:function(n,e){1&n&&(s.Mb(0,"ion-content"),s.Mb(1,"ion-header"),s.Mb(2,"ion-toolbar"),s.Mb(3,"ion-buttons",0),s.Kb(4,"ion-menu-button"),s.Lb(),s.Mb(5,"ion-title"),s.jc(6," Break Down "),s.Lb(),s.Mb(7,"ion-button",1),s.Kb(8,"ion-icon",2),s.Lb(),s.Lb(),s.Lb(),s.Mb(9,"ion-content"),s.Mb(10,"ion-list",3),s.Mb(11,"ion-item",4),s.Mb(12,"ion-select",5),s.Mb(13,"ion-select-option",6),s.jc(14,"Rear-End Collisions"),s.Lb(),s.Mb(15,"ion-select-option",7),s.jc(16,"T-Bone Accidents"),s.Lb(),s.Mb(17,"ion-select-option",8),s.jc(18,"Sideswipe Collisions"),s.Lb(),s.Mb(19,"ion-select-option",9),s.jc(20,"Head-on collisions"),s.Lb(),s.Lb(),s.Lb(),s.Mb(21,"ion-item",10),s.Mb(22,"ion-label",11),s.jc(23,"Description"),s.Lb(),s.Kb(24,"ion-textarea"),s.Lb(),s.Mb(25,"ion-grid"),s.Mb(26,"ion-row"),s.Mb(27,"ion-col",12),s.Mb(28,"ion-button",13),s.Ub("click",(function(){return e.getImage()})),s.Kb(29,"ion-icon",14),s.jc(30," Upload "),s.Lb(),s.Lb(),s.Mb(31,"ion-col"),s.Mb(32,"ion-button",15),s.Kb(33,"ion-icon",16),s.jc(34," Submit "),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(35,"ion-grid"),s.Mb(36,"ion-row"),s.ic(37,p,2,1,"ion-col",17),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&n&&(s.zb(37),s.bc("ngForOf",e.images))},directives:[a.j,a.l,a.F,a.g,a.s,a.E,a.f,a.m,a.q,a.o,a.y,a.K,a.z,a.p,a.D,a.L,a.k,a.v,a.i,o.i],styles:["ion-title[_ngcontent-%COMP%]{float:left;top:11px;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{float:left}.menu-btn[_ngcontent-%COMP%], .notifications-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff}.notifications-btn[_ngcontent-%COMP%]{float:right}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.selection[_ngcontent-%COMP%]{margin-top:10px;--placeholder-color:#fff;--placeholder-opacity:1!important;max-width:100%;color:#fff}"]}),f)}],m=((g=function n(){_classCallCheck(this,n)}).\u0275mod=s.Hb({type:g}),g.\u0275inj=s.Gb({factory:function(n){return new(n||g)},imports:[[r.i.forChild(h)],r.i]}),g),k=((d=function n(){_classCallCheck(this,n)}).\u0275mod=s.Hb({type:d}),d.\u0275inj=s.Gb({factory:function(n){return new(n||d)},imports:[[o.b,i.d,a.G,m]]}),d)}}]);