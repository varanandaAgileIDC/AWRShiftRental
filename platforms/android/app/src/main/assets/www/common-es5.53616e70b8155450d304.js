function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function asyncGeneratorStep(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){asyncGeneratorStep(i,r,o,c,a,"next",t)}function a(t){asyncGeneratorStep(i,r,o,c,a,"throw",t)}c(void 0)}))}}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=_superPropBase(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return a}));var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})}},notification:function(t){var e=this.getEngine();if(e){var n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=function(){r.selection()},i=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},u=function(t){r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(t,e,n){var r=t*e/n-t+"ms",o=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,e,n){var r=e/n,o=t*r-t+"ms",i=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,e,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":t*e/n-t+"ms"}}}}}},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("mrSG"),o=n("tk/3"),i=n("HDdC"),c=n("7o/Q");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return function(e){return e.lift(new s(t,e))}}var u,s=function(){function t(e,n){_classCallCheck(this,t),this.count=e,this.source=n}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new f(t,this.count,this.source))}}]),t}(),f=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,r,o){var i;return _classCallCheck(this,n),(i=e.call(this,t)).count=r,i.source=o,i}return _createClass(n,[{key:"error",value:function(t){if(!this.isStopped){var e=this.source,r=this.count;if(0===r)return _get(_getPrototypeOf(n.prototype),"error",this).call(this,t);r>-1&&(this.count=r-1),e.subscribe(this._unsubscribeAndRecycle())}}}]),n}(c.a),l=n("JIr8"),p=n("fXoL"),h=n("SmVF"),d=n("TEn/"),y=((u=function(){function t(e,n,r){_classCallCheck(this,t),this.http=e,this.toastCtrl=n,this.loadingCtrl=r,this.base_path="http://3.7.140.167:8091/",this.isLoading=!1,this.profileImage="/assets/profile.png",this.httpOptions={headers:new o.c({"Content-Type":"application/json"})}}return _createClass(t,[{key:"handleError",value:function(t){return t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error("Backend returned code ".concat(t.status,", body was: ")+t.error),new i.a((function(t){return t.error("Something bad happened; please try again later.")}))}},{key:"getRequest",value:function(t){return this.http.get(this.base_path+JSON.stringify(t),this.httpOptions).pipe(a(2),Object(l.a)(this.handleError))}},{key:"postRequest",value:function(t,e){return this.http.post(this.base_path+t,e,this.httpOptions).pipe(a(),Object(l.a)(this.handleError))}},{key:"postMethod",value:function(t,e){var n=this;return new Promise((function(r,o){n.showLoader(),n.http.post(n.base_path+t,e).subscribe((function(t){n.hideLoader(),r(t)}),(function(t){n.hideLoader(),o(t)}))}))}},{key:"nativeToast",value:function(t){this.toastCtrl.show(t,"3000","bottom").subscribe((function(t){console.log(t)}))}},{key:"showLoader",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,this.loadingCtrl.create({message:"Please wait ...",spinner:"circles",cssClass:"loading-class"}).then((function(t){t.present().then((function(){console.log("loading presented"),e.isLoading||t.dismiss().then((function(){return console.log("abort loading")}))}))}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"hideLoader",value:function(){return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isLoading=!1,t.next=3,this.loadingCtrl.dismiss().then((function(){return console.log("loading dismissed")}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||u)(p.Qb(o.a),p.Qb(h.a),p.Qb(d.I))},u.\u0275prov=p.Fb({token:u,factory:u.\u0275fac,providedIn:"root"}),u)},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,r,o,i){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",e.attachViewToDom(n,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,o&&o.forEach((function(t){return c.classList.add(t)})),i&&Object.assign(c,i),n.appendChild(c),t.t0=c.componentOnReady,!t.t0){t.next=12;break}return t.next=12,c.componentOnReady();case 12:return t.abrupt("return",c);case 13:case"end":return t.stop()}}),t)})));return function(e,n,r,o,i){return t.apply(this,arguments)}}(),o=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PYW1:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ePDZ"),o=n("ItpF"),i=n("2c9M"),c=function(t,e){var n,c,a=function(t,r,o){if("undefined"!=typeof document){var i=document.elementFromPoint(t,r);i&&e(i)?i!==n&&(s(),u(i,o)):s()}},u=function(t,e){n=t,c||(c=n);var o=n;Object(r.g)((function(){return o.classList.add("ion-activated")})),e()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(n){var e=n;Object(r.g)((function(){return e.classList.remove("ion-activated")})),t&&c!==n&&n.click(),n=void 0}};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return a(t.currentX,t.currentY,i.a)},onMove:function(t){return a(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),Object(i.e)(),c=void 0}})}},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));var r=function(t,e){return null!==e.closest(t)},o=function(t){return"string"==typeof t&&t.length>0?_defineProperty({"ion-color":!0},"ion-color-"+t,!0):void 0},i=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e,n,r,o){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||c.test(e)){t.next=4;break}if(!(i=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=n&&n.preventDefault(),i.push(e,r,o)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()}}]);