(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{l09p:function(t,e,n){"use strict";n.r(e),n.d(e,"SpeedCheckPageModule",(function(){return u}));var o=n("ofXK"),i=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("mrSG"),a=n("fXoL"),b=n("7cmQ"),l=n("sxZc"),d=n("Bfh1");const p=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,s,r){this.pedometer=t,this.deviceMotion=e,this.geolocation=n,this.ngZoneCtrl=o,this.platform=i,this.toastCtrl=s,this.router=r,this.stepCount=0}ngOnInit(){var t;window.addEventListener("devicemotion",(function(e){var n=(new Date).getTime();t=void 0!==t?n:(new Date).getTime()}),!1),this.pedometer.isDistanceAvailable().then(t=>{console.log(t)}).catch(t=>{console.log(t)}),this.pedometer.startPedometerUpdates().subscribe(t=>{console.log(t),this.stepCount="Stepcount is : "+t.numberOfSteps,this.distance="Distance is : "+762e-6*t.numberOfSteps}),this.deviceMotion.getCurrentAcceleration().then(t=>console.log(t),t=>{console.log(t)});var e=(new Date).getTime();this.deviceMotion.watchAcceleration().subscribe(n=>{console.log(n),this.distance=n.x/1e3*((e-t)/1e3)/3600}),this.geolocation.getCurrentPosition().then(t=>{this.speedValue=t.coords.speed}).catch(t=>{console.log("Error getting location",t)}),this.geolocation.watchPosition().subscribe(t=>{this.speedValue=t.coords.speed,console.log("Error getting location",t)})}ionViewDidEnter(){this.platform.backButton.subscribeWithPriority(10,t=>{console.log("Back press handler!"),this.router.navigate(["/tabs"])})}fnGetPedoUpdate(){this.pedometer.startPedometerUpdates().subscribe(t=>{this.PedometerData=t,this.ngZoneCtrl.run(()=>{this.stepCount="Stepcount is : "+this.PedometerData.numberOfSteps,this.distance="Distance is : "+762e-6*t.numberOfSteps,console.log(t)})}),this.start=!0,this.fnTost("Please Walk\u{1f6b6}\u200dto Get Pedometer Update.")}fnStopPedoUpdate(){this.pedometer.stopPedometerUpdates(),this.start=!1}fnTost(t){return Object(c.a)(this,void 0,void 0,(function*(){let e=this.toastCtrl.create({message:t,position:"bottom",duration:3e3});(yield e).present()}))}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(b.a),a.Jb(l.a),a.Jb(d.a),a.Jb(a.z),a.Jb(s.J),a.Jb(s.M),a.Jb(r.g))},t.\u0275cmp=a.Db({type:t,selectors:[["app-speed-check"]],decls:17,vars:3,consts:[["slot","start"],[1,"notifications-btn"],["name","notifications-outline"],[2,"text-align","center"],["id","container"]],template:function(t,e){1&t&&(a.Mb(0,"ion-content"),a.Mb(1,"ion-header"),a.Mb(2,"ion-toolbar"),a.Mb(3,"ion-buttons",0),a.Kb(4,"ion-menu-button"),a.Lb(),a.Mb(5,"ion-title"),a.jc(6," Speed Check "),a.Lb(),a.Mb(7,"ion-button",1),a.Kb(8,"ion-icon",2),a.Lb(),a.Lb(),a.Lb(),a.Mb(9,"ion-content",3),a.Mb(10,"div",4),a.Mb(11,"strong"),a.jc(12),a.Lb(),a.Mb(13,"p"),a.jc(14),a.Lb(),a.Mb(15,"p"),a.jc(16),a.Lb(),a.Lb(),a.Lb(),a.Lb()),2&t&&(a.zb(12),a.kc(e.speedValue),a.zb(2),a.kc(e.distance),a.zb(2),a.kc(e.stepCount))},directives:[s.j,s.l,s.F,s.g,s.s,s.E,s.f,s.m],styles:["ion-title[_ngcontent-%COMP%]{float:left;top:11px;position:relative;font-weight:400;padding-left:0}.menu-btn[_ngcontent-%COMP%]{float:left}.menu-btn[_ngcontent-%COMP%], .notifications-btn[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;color:#fff}.notifications-btn[_ngcontent-%COMP%]{float:right}ion-content[_ngcontent-%COMP%]{--background:none;background-image:url(/assets/body-bg.png);background-position:top;background-repeat:no-repeat;background-size:cover}.header-md[_ngcontent-%COMP%]:after{display:none}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;--box-shadow:none;color:#fff}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px;color:#fff}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#fff;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(p)],r.i]}),t})(),u=(()=>{class t{}return t.\u0275mod=a.Hb({type:t}),t.\u0275inj=a.Gb({factory:function(e){return new(e||t)},imports:[[o.b,i.d,s.G,g]]}),t})()}}]);