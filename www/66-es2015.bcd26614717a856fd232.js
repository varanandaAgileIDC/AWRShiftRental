(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return h}));var s=i("ePDZ");const n=(t,e)=>{const i=l(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},l=(t,e)=>{switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},r=(t,e,i,s,n,l,r,h,o,a,c,d)=>{const g=[],u=d+c;for(let p=c;p<u;p++){const c=t[p];if(n){const e=n(c,p,t);null!=e&&g.push({i:a++,type:"header",value:e,index:p,height:i?i(e,p):r,reads:i?0:2,visible:!!i})}if(g.push({i:a++,type:"item",value:c,index:p,height:e?e(c,p):o,reads:e?0:2,visible:!!e}),l){const e=l(c,p,t);null!=e&&g.push({i:a++,type:"footer",value:e,index:p,height:s?s(e,p):h,reads:s?0:2,visible:!!s})}}return g},h=class{constructor(t){Object(s.q)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.contentEl=t,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,e,i)=>{const s=e.find(e=>"item"===e.type&&e.index===t);return s?i[s.i]:-1})(t,this.cells,this.getHeightIndex()))}async checkRange(t,e=-1){if(!this.items)return;const i=-1===e?this.items.length-t:e,s=((t,e)=>0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===e))(this.cells,t),n=r(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,t,i);this.cells=((t,e,i)=>{if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t})(this.cells,n,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(s.j)(this.readVS.bind(this)),Object(s.g)(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,n=i;for(;n&&n!==t;)s+=n.offsetTop,n=n.offsetParent;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=(r=this.currentScrollTop-this.viewportOffset,h=this.viewportHeight,{top:Math.max(r-100,0),bottom:r+h+100}),i=this.getHeightIndex(),l=((t,e,i)=>{const s=e.top,n=e.bottom;let l=0;for(;l<t.length&&!(t[l]>s);l++);const r=Math.max(l-2-1,0);for(;l<t.length&&!(t[l]>=n);l++);return{offset:r,length:Math.min(l+2,t.length)-r}})(i,e);var r,h;((t,e,i)=>t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length)(t,this.range,l)&&(this.range=l,((t,e,i,s)=>{for(const h of t)h.change=0,h.d=!0;const n=[],l=s.offset+s.length;for(let h=s.offset;h<l;h++){const s=i[h],l=t.find(t=>t.d&&t.cell===s);if(l){const t=e[h];t!==l.top&&(l.top=t,l.change=1),l.d=!1}else n.push(s)}const r=t.filter(t=>t.d);for(const h of n){const i=r.find(t=>t.d&&t.cell.type===h.type),s=h.i;i?(i.d=!1,i.change=2,i.cell=h,i.top=e[s]):t.push({d:!1,cell:h,visible:!0,change:2,top:e[s]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})})(this.virtualDom,i,this.cells,l),this.nodeRender?((t,e,i,s)=>{const l=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),r=l.length;let h;for(let o=0;o<i.length;o++){const a=i[o],c=a.cell;if(2===a.change){if(o<r)h=l[o],e(h,c,o);else{const i=n(t,c.type);h=e(i,c,o)||i,h.classList.add("virtual-item"),t.appendChild(h)}h.$ionCell=c}else h=l[o];0!==a.change&&(h.style.transform=`translate3d(0,${a.top}px,0)`);const d=c.visible;a.visible!==d&&(d?h.classList.remove("virtual-loading"):h.classList.add("virtual-loading"),a.visible=d),c.reads>0&&(s(c,h),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(s.n)(this))}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e&&e.componentOnReady?e.componentOnReady().then(i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=r(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,e)=>{if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)})(this.heightIndex,this.cells.length),this.totalHeight=((t,e,i)=>{let s=t[i];for(let n=i;n<t.length;n++)t[n]=s,s+=e[n].height;return s})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const e=this.scrollEl;e&&(this.isEnabled=t,e.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{e.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case"item":return this.renderItem(i,s);case"header":return this.renderHeader(i,s);case"footer":return this.renderFooter(i,s)}}render(){return Object(s.l)(s.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(s.l)(o,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t))))}get el(){return Object(s.m)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},o=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],n=e.vattrs||{};let l=n.class||"";return l+="virtual-item ",s.visible||(l+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},n),{class:l,style:Object.assign(Object.assign({},n.style),{transform:`translate3d(0,${s.top}px,0)`})})})});h.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);