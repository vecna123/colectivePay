"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{1182:(O,_,s)=>{s.d(_,{c:()=>o});var g=s(6953),r=s(2966),c=s(8077);const o=(i,n)=>{let t,e;const d=(l,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(l,p);E&&n(E)?E!==t&&(v(),a(E,w)):v()},a=(l,p)=>{t=l,e||(e=t);const w=t;(0,g.w)(()=>w.classList.add("ion-activated")),p()},v=(l=!1)=>{if(!t)return;const p=t;(0,g.w)(()=>p.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>d(l.currentX,l.currentY,r.a),onMove:l=>d(l.currentX,l.currentY,r.b),onEnd:()=>{v(!0),(0,r.h)(),e=void 0}})}},278:(O,_,s)=>{s.d(_,{g:()=>g});const g=(n,t,e,d,a)=>c(n[1],t[1],e[1],d[1],a).map(v=>r(n[0],t[0],e[0],d[0],v)),r=(n,t,e,d,a)=>a*(3*t*Math.pow(a-1,2)+a*(-3*e*a+3*e+d*a))-n*Math.pow(a-1,3),c=(n,t,e,d,a)=>i((d-=a)-3*(e-=a)+3*(t-=a)-(n-=a),3*e-6*t+3*n,3*t-3*n,n).filter(l=>l>=0&&l<=1),i=(n,t,e,d)=>{if(0===n)return((n,t,e)=>{const d=t*t-4*n*e;return d<0?[]:[(-t+Math.sqrt(d))/(2*n),(-t-Math.sqrt(d))/(2*n)]})(t,e,d);const a=(3*(e/=n)-(t/=n)*t)/3,v=(2*t*t*t-9*t*e+27*(d/=n))/27;if(0===a)return[Math.pow(-v,1/3)];if(0===v)return[Math.sqrt(-a),-Math.sqrt(-a)];const l=Math.pow(v/2,2)+Math.pow(a/3,3);if(0===l)return[Math.pow(v/2,.5)-t/3];if(l>0)return[Math.pow(-v/2+Math.sqrt(l),1/3)-Math.pow(v/2+Math.sqrt(l),1/3)-t/3];const p=Math.sqrt(Math.pow(-a/3,3)),w=Math.acos(-v/(2*Math.sqrt(Math.pow(-a/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-t/3,E*Math.cos((w+2*Math.PI)/3)-t/3,E*Math.cos((w+4*Math.PI)/3)-t/3]}},1776:(O,_,s)=>{s.d(_,{i:()=>g});const g=r=>r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8092:(O,_,s)=>{s.r(_),s.d(_,{startFocusVisible:()=>o});const g="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],o=i=>{let n=[],t=!0;const e=i?i.shadowRoot:document,d=i||document.body,a=y=>{n.forEach(h=>h.classList.remove(g)),y.forEach(h=>h.classList.add(g)),n=y},v=()=>{t=!1,a([])},l=y=>{t=c.includes(y.key),t||a([])},p=y=>{if(t&&void 0!==y.composedPath){const h=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));a(h)}},w=()=>{e.activeElement===d&&a([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",p),e.addEventListener("focusout",w),e.addEventListener("touchstart",v,{passive:!0}),e.addEventListener("mousedown",v),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",p),e.removeEventListener("focusout",w),e.removeEventListener("touchstart",v),e.removeEventListener("mousedown",v)},setFocus:a}}},2587:(O,_,s)=>{s.d(_,{c:()=>r});var g=s(544);const r=n=>{const t=n;let e;return{hasLegacyControl:()=>{if(void 0===e){const a=void 0!==t.label||c(t),v=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,l=(0,g.h)(t);e=!0===t.legacy||!a&&!v&&null!==l}return e}}},c=n=>null!==n.shadowRoot&&!!(o.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||i.includes(n.tagName)&&""!==n.textContent),o=["ION-RANGE"],i=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2966:(O,_,s)=>{s.d(_,{a:()=>o,b:()=>i,c:()=>c,d:()=>t,h:()=>n});const g={getEngine(){var e;const d=window;return d.TapticEngine||(null===(e=d.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&d.Capacitor.Plugins.Haptics},available(){var e;const d=window;return!!this.getEngine()&&("web"!==(null===(e=d.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const d=this.getEngine();if(!d)return;const a=this.isCapacitor()?e.style.toUpperCase():e.style;d.impact({style:a})},notification(e){const d=this.getEngine();if(!d)return;const a=this.isCapacitor()?e.style.toUpperCase():e.style;d.notification({style:a})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>g.available(),c=()=>{r()&&g.selection()},o=()=>{r()&&g.selectionStart()},i=()=>{r()&&g.selectionChanged()},n=()=>{r()&&g.selectionEnd()},t=e=>{r()&&g.impact(e)}},9993:(O,_,s)=>{s.d(_,{a:()=>g,b:()=>p,c:()=>t,d:()=>w,e:()=>D,f:()=>n,g:()=>E,h:()=>c,i:()=>r,j:()=>M,k:()=>u,l:()=>e,m:()=>v,n:()=>y,o:()=>a,p:()=>i,q:()=>o,r:()=>f,s:()=>C,t:()=>l,u:()=>h,v:()=>m,w:()=>d});const g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4435:(O,_,s)=>{s.d(_,{I:()=>n,a:()=>a,b:()=>i,c:()=>p,d:()=>E,f:()=>v,g:()=>d,i:()=>e,p:()=>w,r:()=>y,s:()=>l});var g=s(5861),r=s(544),c=s(7690);const i="ion-content",n=".ion-content-scroll-host",t=`${i}, ${n}`,e=h=>"ION-CONTENT"===h.tagName,d=function(){var h=(0,g.Z)(function*(m){return e(m)?(yield new Promise(f=>(0,r.c)(m,f)),m.getScrollElement()):m});return function(f){return h.apply(this,arguments)}}(),a=h=>h.querySelector(n)||h.querySelector(t),v=h=>h.closest(t),l=(h,m)=>e(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),p=(h,m,f,M)=>e(h)?h.scrollByPoint(m,f,M):Promise.resolve(h.scrollBy({top:f,left:m,behavior:M>0?"smooth":"auto"})),w=h=>(0,c.b)(h,i),E=h=>{if(e(h)){const f=h.scrollY;return h.scrollY=!1,f}return h.style.setProperty("overflow","hidden"),!0},y=(h,m)=>{e(h)?h.scrollY=m:h.style.removeProperty("overflow")}},1685:(O,_,s)=>{s.d(_,{c:()=>o,g:()=>i});var g=s(7643),r=s(544),c=s(7690);const o=(t,e,d)=>{let a,v;void 0!==g.w&&"MutationObserver"in g.w&&(a=new MutationObserver(E=>{for(const y of E)for(const h of y.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===e)return d(),void(0,r.r)(()=>l(h))}),a.observe(t,{childList:!0}));const l=E=>{var y;v&&(v.disconnect(),v=void 0),v=new MutationObserver(h=>{d();for(const m of h)for(const f of m.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===e&&w()}),v.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},w=()=>{v&&(v.disconnect(),v=void 0)};return{destroy:()=>{a&&(a.disconnect(),a=void 0),w()}}},i=(t,e,d)=>{const a=null==t?0:t.toString().length,v=n(a,e);if(void 0===d)return v;try{return d(a,e)}catch(l){return(0,c.a)("Exception in provided `counterFormatter`.",l),v}},n=(t,e)=>`${t} / ${e}`},6884:(O,_,s)=>{s.d(_,{K:()=>c,a:()=>r});var g=s(7643),r=(()=>((r=r||{}).Body="body",r.Ionic="ionic",r.Native="native",r.None="none",r))();const c={getEngine(){var o;return(null===(o=null==g.w?void 0:g.w.Capacitor)||void 0===o?void 0:o.isPluginAvailable("Keyboard"))&&(null==g.w?void 0:g.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(i=>{if("UNIMPLEMENTED"!==i.code)throw i}):Promise.resolve(void 0)}}},2624:(O,_,s)=>{s.r(_),s.d(_,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>M,keyboardDidClose:()=>y,keyboardDidOpen:()=>w,keyboardDidResize:()=>E,resetKeyboardAssist:()=>d,setKeyboardClose:()=>p,setKeyboardOpen:()=>l,startKeyboardAssist:()=>a,trackViewportChanges:()=>f});var g=s(6884);s(7643);const c="ionKeyboardDidShow",o="ionKeyboardDidHide";let n={},t={},e=!1;const d=()=>{n={},t={},e=!1},a=u=>{if(g.K.getEngine())v(u);else{if(!u.visualViewport)return;t=M(u.visualViewport),u.visualViewport.onresize=()=>{f(u),w()||E(u)?l(u):y(u)&&p(u)}}},v=u=>{u.addEventListener("keyboardDidShow",C=>l(u,C)),u.addEventListener("keyboardDidHide",()=>p(u))},l=(u,C)=>{h(u,C),e=!0},p=u=>{m(u),e=!1},w=()=>!e&&n.width===t.width&&(n.height-t.height)*t.scale>150,E=u=>e&&!y(u),y=u=>e&&t.height===u.innerHeight,h=(u,C)=>{const b=new CustomEvent(c,{detail:{keyboardHeight:C?C.keyboardHeight:u.innerHeight-t.height}});u.dispatchEvent(b)},m=u=>{const C=new CustomEvent(o);u.dispatchEvent(C)},f=u=>{n=Object.assign({},t),t=M(u.visualViewport)},M=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},218:(O,_,s)=>{s.d(_,{c:()=>n});var g=s(5861),r=s(7643),c=s(6884);const o=t=>{if(void 0===r.d||t===c.a.None||void 0===t)return null;const e=r.d.querySelector("ion-app");return null!=e?e:r.d.body},i=t=>{const e=o(t);return null===e?0:e.clientHeight},n=function(){var t=(0,g.Z)(function*(e){let d,a,v,l;const p=function(){var m=(0,g.Z)(function*(){const f=yield c.K.getResizeMode(),M=void 0===f?void 0:f.mode;d=()=>{void 0===l&&(l=i(M)),v=!0,w(v,M)},a=()=>{v=!1,w(v,M)},null==r.w||r.w.addEventListener("keyboardWillShow",d),null==r.w||r.w.addEventListener("keyboardWillHide",a)});return function(){return m.apply(this,arguments)}}(),w=(m,f)=>{e&&e(m,E(f))},E=m=>{if(0===l||l===i(m))return;const f=o(m);return null!==f?new Promise(M=>{const C=new ResizeObserver(()=>{f.clientHeight===l&&(C.disconnect(),M())});C.observe(f)}):void 0};return yield p(),{init:p,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",d),null==r.w||r.w.removeEventListener("keyboardWillHide",a),d=a=void 0},isKeyboardVisible:()=>v}});return function(d){return t.apply(this,arguments)}}()},9718:(O,_,s)=>{s.d(_,{c:()=>c});var g=s(7643),r=s(544);const c=(o,i,n)=>{let t;const e=()=>!(void 0===i()||void 0!==o.label||null===n()),a=()=>{const l=i();if(void 0===l)return;if(!e())return void l.style.removeProperty("width");const p=n().scrollWidth;if(0===p&&null===l.offsetParent&&void 0!==g.w&&"IntersectionObserver"in g.w){if(void 0!==t)return;const w=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(a(),w.disconnect(),t=void 0)},{threshold:.01,root:o});w.observe(l)}else l.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{e()&&(0,r.r)(()=>{a()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},1173:(O,_,s)=>{s.d(_,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(c,o,i)=>{const n=c*o/i-c+"ms",t=2*Math.PI*o/i;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,o,i)=>{const n=o/i,t=c*n-c+"ms",e=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,o)=>({r:6,style:{left:32-32*o+"%","animation-delay":-110*o+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,o,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*o+(o<i/2?180:-180)}deg)`,"animation-delay":c*o/i-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,o,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*o+(o<i/2?180:-180)}deg)`,"animation-delay":c*o/i-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,o,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":c*o/i-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,o,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*o+(o<6?180:-180)}deg)`,"animation-delay":c*o/i-c+"ms"}})}}},4666:(O,_,s)=>{s.r(_),s.d(_,{createSwipeBackGesture:()=>i});var g=s(544),r=s(1776),c=s(8077);s(4587);const i=(n,t,e,d,a)=>{const v=n.ownerDocument.defaultView;let l=(0,r.i)(n);const w=f=>l?-f.deltaX:f.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:f=>(l=(0,r.i)(n),(f=>{const{startX:u}=f;return l?u>=v.innerWidth-50:u<=50})(f)&&t()),onStart:e,onMove:f=>{const u=w(f)/v.innerWidth;d(u)},onEnd:f=>{const M=w(f),u=v.innerWidth,C=M/u,D=(f=>l?-f.velocityX:f.velocityX)(f),P=D>=0&&(D>.2||M>u/2),L=(P?1-C:C)*u;let x=0;if(L>5){const T=L/Math.abs(D);x=Math.min(T,540)}a(P,C<=0?.01:(0,g.l)(0,C,.9999),x)}})}},8639:(O,_,s)=>{s.d(_,{w:()=>g});const g=(o,i,n)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{n(r(e,i))});return t.observe(o,{childList:!0,subtree:!0}),t},r=(o,i)=>{let n;return o.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)n=c(t.addedNodes[e],i)||n}),n},c=(o,i)=>1!==o.nodeType?void 0:(o.tagName===i.toUpperCase()?[o]:Array.from(o.querySelectorAll(i))).find(t=>t.value===o.value)},4281:(O,_,s)=>{s.d(_,{Z:()=>r});var g=s(6689);let r=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=g.Xpm({type:c,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:1,vars:0,consts:[["id","container"]],template:function(i,n){1&i&&g._UZ(0,"div",0)},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),c})()},3554:(O,_,s)=>{s.d(_,{e:()=>i});var g=s(6814),r=s(95),c=s(7852),o=s(6689);let i=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[g.ez,r.u5,c.Pc]}),n})()}}]);