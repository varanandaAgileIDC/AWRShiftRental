(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{r.selection()},i=()=>{r.selectionStart()},o=()=>{r.selectionChanged()},c=()=>{r.selectionEnd()},a=t=>{r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",s=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,s=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":s}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("mrSG"),s=n("tk/3"),i=n("HDdC"),o=n("7o/Q");function c(t=-1){return e=>e.lift(new a(t,e))}class a{constructor(t,e){this.count=t,this.source=e}call(t,e){return e.subscribe(new l(t,this.count,this.source))}}class l extends o.a{constructor(t,e,n){super(t),this.count=e,this.source=n}error(t){if(!this.isStopped){const{source:e,count:n}=this;if(0===n)return super.error(t);n>-1&&(this.count=n-1),e.subscribe(this._unsubscribeAndRecycle())}}}var u=n("JIr8"),d=n("fXoL"),h=n("SmVF"),p=n("TEn/");let f=(()=>{class t{constructor(t,e,n){this.http=t,this.toastCtrl=e,this.loadingCtrl=n,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.httpOptions={headers:new s.c({"Content-Type":"application/json"})}}handleError(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: `+t.error),new i.a(t=>t.error("Something bad happened; please try again later."))}getRequest(t){return this.http.get(this.base_path+JSON.stringify(t),this.httpOptions).pipe(c(2),Object(u.a)(this.handleError))}postRequest(t,e){return this.http.post(this.base_path+t,e,this.httpOptions).pipe(c(),Object(u.a)(this.handleError))}postMethod(t,e){return new Promise((n,r)=>{this.showLoader(),this.http.post(this.base_path+t,e).subscribe(t=>{this.hideLoader(),n(t)},t=>{this.hideLoader(),r(t)})})}nativeToast(t){this.toastCtrl.show(t,"3000","bottom").subscribe(t=>{console.log(t)})}showLoader(){return Object(r.a)(this,void 0,void 0,(function*(){return this.isLoading=!0,yield this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then(t=>{t.present().then(()=>{console.log("loading presented"),this.isLoading||t.dismiss().then(()=>console.log("abort loading"))})})}))}hideLoader(){return Object(r.a)(this,void 0,void 0,(function*(){return this.isLoading=!1,yield this.loadingCtrl.dismiss().then(()=>console.log("loading dismissed"))}))}}return t.\u0275fac=function(e){return new(e||t)(d.Qb(s.a),d.Qb(h.a),d.Qb(p.I))},t.\u0275prov=d.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));const r=async(t,e,n,r,s)=>{if(t)return t.attachViewToDom(e,n,s,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>i.classList.add(t)),s&&Object.assign(i,s),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},s=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("ePDZ"),s=n("ItpF"),i=n("2c9M");const o=(t,e)=>{let n,o;const c=(t,r,s)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(l(),a(i,s)):l()},a=(t,e)=>{n=t,o||(o=n);const s=n;Object(r.g)(()=>s.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(r.g)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return Object(s.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>c(t.currentX,t.currentY,i.a),onMove:t=>c(t.currentX,t.currentY,i.b),onEnd:()=>{l(!0),Object(i.e)(),o=void 0}})}},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c}));const r=(t,e)=>null!==e.closest(t),s=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,["ion-color-"+t]:!0}:void 0,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,c=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const s=document.querySelector("ion-router");if(s)return null!=e&&e.preventDefault(),s.push(t,n,r)}return!1}}}]);