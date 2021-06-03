function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,o){return n&&_defineProperties(e.prototype,n),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{LtKz:function(e,n,o){"use strict";o.r(n),o.d(n,"BreakDownPageModule",(function(){return v}));var t=o("ofXK"),i=o("3Pt+"),r=o("TEn/"),a=o("tyNb"),c=o("mrSG"),l=o("fXoL"),s=o("tAfe"),b=o("U3FU"),u=o("a/9d");function p(e,n){if(1&e&&(l.Mb(0,"ion-select-option",20),l.kc(1),l.Lb()),2&e){var o=n.$implicit;l.cc("value",o),l.zb(1),l.lc(o.name)}}function d(e,n){if(1&e){var o=l.Nb();l.Mb(0,"ion-col",21),l.Ub("click",(function(){l.gc(o);var e=n.$implicit;return l.Wb().zoom(e)})),l.Kb(1,"img",22),l.Lb()}if(2&e){var t=n.$implicit;l.zb(1),l.dc("src",t,l.hc)}}var f,m,g,h=[{path:"",component:(f=function(){function e(n,o,t,i,r,a){_classCallCheck(this,e),this.platform=n,this.router=o,this.imagePicker=t,this.actionSheetController=i,this.photoViewer=r,this.camera=a,this.images=[],this.vehicleNumbers=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.vehicleNumbers=[{vehicleNumber:"A 92868",name:"Lamborghini Diablo"},{vehicleNumber:"A 93868",name:"Ford Raptor"},{vehicleNumber:"A 94868",name:"Ferrari Testarossa"},{vehicleNumber:"A 95868",name:"Porsche 911 Carrera"},{vehicleNumber:"A 92868",name:"Jensen Interceptor"},{vehicleNumber:"A 93868",name:"Lamborghini Hurac\xe1n"},{vehicleNumber:"A 94868",name:"Ferrari 812 Superfast"},{vehicleNumber:"A 95868",name:"Jeep Gladiator"}]}},{key:"ionViewDidEnter",value:function(){var e=this;this.platform.backButton.subscribeWithPriority(10,(function(n){console.log("Back press handler!"),e.router.navigate(["/tabs"])}))}},{key:"getImage",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.actionSheetController.create({header:"Upload images from",buttons:[{text:"Gallery",icon:"images",handler:function(){o.selectImage()}},{text:"camera",icon:"camera",handler:function(){o.takePicture()}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"selectImage",value:function(){var e=this;this.imagePicker.getPictures({maximumImagesCount:15,outputType:1}).then((function(n){if("OK"==n);else for(var o=0;o<n.length;o++)e.images.push("data:image/jpeg;base64,"+n[o]),console.log("Image URI: "+n[o]);console.log("Images: "+e.images)}),(function(e){}))}},{key:"takePicture",value:function(){var e=this;this.camera.getPicture({quality:100,destinationType:this.camera.DestinationType.DATA_URL,encodingType:this.camera.EncodingType.JPEG,mediaType:this.camera.MediaType.PICTURE}).then((function(n){console.log(n),null==n||""==n||e.images.push("data:image/jpeg;base64,"+n)}),(function(e){}))}},{key:"zoom",value:function(e){this.photoViewer.show(e,"",{share:!1})}}]),e}(),f.\u0275fac=function(e){return new(e||f)(l.Jb(r.N),l.Jb(a.g),l.Jb(s.a),l.Jb(r.a),l.Jb(b.a),l.Jb(u.a))},f.\u0275cmp=l.Db({type:f,selectors:[["app-break-down"]],decls:41,vars:2,consts:[["slot","start"],[1,"notifications-btn"],["name","notifications-outline"],["lines","none",2,"background","transparent"],[2,"--background","transparent","border-radius","20px","margin-left","5px","margin-right","5px","border","1px solid #1D97DB","margin","20px"],["interface","popover","placeholder","Select Vehicle",1,"selection",2,"width","100%"],[3,"value",4,"ngFor","ngForOf"],["interface","popover","placeholder","Breakdown Type",1,"selection",2,"width","100%"],["value","brown"],["value","blonde"],["value","black"],["value","red"],[2,"--background","#e7edf5","border-radius","20px","margin","20px"],["position","floating",2,"color","black"],[2,"text-align","end"],[2,"--background","#1D97DB",3,"click"],["slot","end","name","cloud-upload-outline"],[2,"--background","#1D97DB"],["slot","end","name","chevron-forward-outline"],["size","4",3,"click",4,"ngFor","ngForOf"],[3,"value"],["size","4",3,"click"],[2,"width","150px","height","150px",3,"src"]],template:function(e,n){1&e&&(l.Mb(0,"ion-content"),l.Mb(1,"ion-header"),l.Mb(2,"ion-toolbar"),l.Mb(3,"ion-buttons",0),l.Kb(4,"ion-menu-button"),l.Lb(),l.Mb(5,"ion-title"),l.kc(6," Break Down "),l.Lb(),l.Mb(7,"ion-button",1),l.Kb(8,"ion-icon",2),l.Lb(),l.Lb(),l.Lb(),l.Mb(9,"ion-content"),l.Mb(10,"ion-list",3),l.Mb(11,"ion-item",4),l.Mb(12,"ion-select",5),l.jc(13,p,2,2,"ion-select-option",6),l.Lb(),l.Lb(),l.Mb(14,"ion-item",4),l.Mb(15,"ion-select",7),l.Mb(16,"ion-select-option",8),l.kc(17,"Rear-End Collisions"),l.Lb(),l.Mb(18,"ion-select-option",9),l.kc(19,"T-Bone Accidents"),l.Lb(),l.Mb(20,"ion-select-option",10),l.kc(21,"Sideswipe Collisions"),l.Lb(),l.Mb(22,"ion-select-option",11),l.kc(23,"Head-on collisions"),l.Lb(),l.Lb(),l.Lb(),l.Mb(24,"ion-item",12),l.Mb(25,"ion-label",13),l.kc(26,"Description"),l.Lb(),l.Kb(27,"ion-textarea"),l.Lb(),l.Mb(28,"ion-grid"),l.Mb(29,"ion-row"),l.Mb(30,"ion-col",14),l.Mb(31,"ion-button",15),l.Ub("click",(function(){return n.getImage()})),l.Kb(32,"ion-icon",16),l.kc(33," Upload "),l.Lb(),l.Lb(),l.Mb(34,"ion-col"),l.Mb(35,"ion-button",17),l.Kb(36,"ion-icon",18),l.kc(37," Submit "),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(38,"ion-grid"),l.Mb(39,"ion-row"),l.jc(40,d,2,1,"ion-col",19),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()),2&e&&(l.zb(13),l.cc("ngForOf",n.vehicleNumbers),l.zb(27),l.cc("ngForOf",n.images))},directives:[r.k,r.n,r.H,r.h,r.u,r.G,r.g,r.o,r.s,r.q,r.A,r.O,t.i,r.B,r.r,r.F,r.P,r.m,r.x,r.j],styles:["ion-title[_ngcontent-%COMP%]{float:left;top:11px;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{float:left}.menu-btn[_ngcontent-%COMP%], .notifications-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff}.notifications-btn[_ngcontent-%COMP%]{float:right}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}.input-field[_ngcontent-%COMP%]{background:#eef4fa;border-radius:14px;overflow:hidden;margin-bottom:15px}ion-item[_ngcontent-%COMP%]{--ion-background-color:transparent;--border-color:transparent;--color:#484d52;--highlight-color-focused:transparent}.selection[_ngcontent-%COMP%]{margin-top:10px;--placeholder-color:#fff;--placeholder-opacity:1!important;max-width:100%;color:#fff}"]}),f)}],k=((g=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:g}),g.\u0275inj=l.Gb({factory:function(e){return new(e||g)},imports:[[a.i.forChild(h)],a.i]}),g),v=((m=function e(){_classCallCheck(this,e)}).\u0275mod=l.Hb({type:m}),m.\u0275inj=l.Gb({factory:function(e){return new(e||m)},imports:[[t.b,i.d,r.I,k]]}),m)}}]);