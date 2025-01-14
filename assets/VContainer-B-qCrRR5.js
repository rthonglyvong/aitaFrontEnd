import{ae as ce,af as Je,r as z,aa as Ke,p as k,K as X,d as v,h as f,F as Ze,W as Q,m as D,b as Y,g as T,c as j,ag as pe,t as P,f as O,V as se,O as Qe,ah as ke,U as et,Y as le,P as oe,ai as ee,L as Se,Z as tt,aj as nt,ak as _e,S as at,al as st,E as we,am as lt,s as ot,a0 as it,u as rt,i as x,w as ut,N as ie,an as de,ao as ct,B as dt,ap as vt,aq as ve,_ as ft,ar as mt,as as fe,M as me,G as gt}from"./index-yuM9it67.js";import{k as ht,m as xe,a as Pe,b as re,c as G,d as Ve,e as Be,f as ue,l as Le,n as Ee,h as te,u as J,i as Ie,j as Te,V as K}from"./VMain-BYeD-vgx.js";const bt=["top","bottom"],yt=["start","end","left","right"];function Ct(e,t){let[n,a]=e.split(" ");return a||(a=ce(bt,n)?"start":ce(yt,n)?"top":"center"),{side:ge(n,t),align:ge(a,t)}}function ge(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const tn=Je("websocket",()=>{const e=z(null),t=z(null),n=Ke(),a=o=>{e.value||(e.value=new WebSocket(o),e.value.onopen=()=>{console.log("WebSocket connected")},e.value.onmessage=c=>{try{const u=JSON.parse(c.data);console.log("Received message:",u),u&&(t.value=u,s(u))}catch(u){console.error("Error parsing WebSocket message:",u)}},e.value.onclose=()=>{console.log("WebSocket connection closed"),e.value=null},e.value.onerror=c=>{console.error("WebSocket error:",c)})},s=o=>{console.log("handleNavigataion"),o.roomCode!==""&&o.waitingRoom?(console.log("pushLobby"),n.push("/lobby")):o.roomCode!==""&&!o.waitingRoom?(console.log("pushGame"),n.push("/game")):(console.log("pushIndex"),n.push("/"))};return{ws:e,gameState:t,connect:a,sendMessage:o=>{var c;((c=e.value)==null?void 0:c.readyState)===WebSocket.OPEN?e.value.send(JSON.stringify(o)):console.error("WebSocket is not open")},handleNavigation:s}}),pt=[null,"default","comfortable","compact"],Re=k({density:{type:String,default:"default",validator:e=>pt.includes(e)}},"density");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const kt=["elevated","flat","tonal","outlined","text","plain"];function St(e,t){return f(Ze,null,[f("span",{key:"overlay",class:`${t}__overlay`},null),f("span",{key:"underlay",class:`${t}__underlay`},null)])}const $e=k({color:String,variant:{type:String,default:"elevated",validator:e=>kt.includes(e)}},"variant");function _t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();const n=v(()=>{const{variant:l}=Q(e);return`${t}--variant-${l}`}),{colorClasses:a,colorStyles:s}=ht(v(()=>{const{variant:l,color:o}=Q(e);return{[["elevated","flat"].includes(l)?"background":"text"]:o}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const Oe=k({baseColor:String,divided:Boolean,...xe(),...D(),...Re(),...Pe(),...re(),...G(),...Y(),...$e()},"VBtnGroup"),he=T()({name:"VBtnGroup",props:Oe(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=j(e),{densityClasses:s}=Ne(e),{borderClasses:l}=Ve(e),{elevationClasses:o}=Be(e),{roundedClasses:c}=ue(e);pe({VBtn:{height:"auto",baseColor:P(e,"baseColor"),color:P(e,"color"),density:P(e,"density"),flat:!0,variant:P(e,"variant")}}),O(()=>f(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},a.value,l.value,s.value,o.value,c.value,e.class],style:e.style},n))}}),wt=k({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),xt=k({value:null,disabled:Boolean,selectedClass:String},"group-item");function Pt(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const a=se("useGroupItem");if(!a)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Qe();ke(Symbol.for(`${t.description}:id`),s);const l=et(t,null);if(!l){if(!n)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=P(e,"value"),c=v(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:o,disabled:c},a),le(()=>{l.unregister(s)});const u=v(()=>l.isSelected(s)),h=v(()=>l.items.value[0].id===s),C=v(()=>l.items.value[l.items.value.length-1].id===s),y=v(()=>u.value&&[l.selectedClass.value,e.selectedClass]);return oe(u,i=>{a.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:u,isFirst:h,isLast:C,toggle:()=>l.select(s,!u.value),select:i=>l.select(s,i),selectedClass:y,value:o,disabled:c,group:l}}function Vt(e,t){let n=!1;const a=ee([]),s=Se(e,"modelValue",[],i=>i==null?[]:Ae(a,at(i)),i=>{const d=Lt(a,i);return e.multiple?d:d[0]}),l=se("useGroup");function o(i,d){const g=i,r=Symbol.for(`${t.description}:id`),b=st(r,l==null?void 0:l.vnode).indexOf(d);Q(g.value)==null&&(g.value=b,g.useIndexAsValue=!0),b>-1?a.splice(b,0,g):a.push(g)}function c(i){if(n)return;u();const d=a.findIndex(g=>g.id===i);a.splice(d,1)}function u(){const i=a.find(d=>!d.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}tt(()=>{u()}),le(()=>{n=!0}),nt(()=>{for(let i=0;i<a.length;i++)a[i].useIndexAsValue&&(a[i].value=i)});function h(i,d){const g=a.find(r=>r.id===i);if(!(d&&(g!=null&&g.disabled)))if(e.multiple){const r=s.value.slice(),m=r.findIndex(V=>V===i),b=~m;if(d=d??!b,b&&e.mandatory&&r.length<=1||!b&&e.max!=null&&r.length+1>e.max)return;m<0&&d?r.push(i):m>=0&&!d&&r.splice(m,1),s.value=r}else{const r=s.value.includes(i);if(e.mandatory&&r)return;s.value=d??!r?[i]:[]}}function C(i){if(e.multiple,s.value.length){const d=s.value[0],g=a.findIndex(b=>b.id===d);let r=(g+i)%a.length,m=a[r];for(;m.disabled&&r!==g;)r=(r+i)%a.length,m=a[r];if(m.disabled)return;s.value=[a[r].id]}else{const d=a.find(g=>!g.disabled);d&&(s.value=[d.id])}}const y={register:o,unregister:c,selected:s,select:h,disabled:P(e,"disabled"),prev:()=>C(a.length-1),next:()=>C(1),isSelected:i=>s.value.includes(i),selectedClass:v(()=>e.selectedClass),items:v(()=>a),getItemIndex:i=>Bt(a,i)};return ke(t,y),y}function Bt(e,t){const n=Ae(e,[t]);return n.length?e.findIndex(a=>a.id===n[0]):-1}function Ae(e,t){const n=[];return t.forEach(a=>{const s=e.find(o=>_e(a,o.value)),l=e[a];(s==null?void 0:s.value)!=null?n.push(s.id):l!=null&&n.push(l.id)}),n}function Lt(e,t){const n=[];return t.forEach(a=>{const s=e.findIndex(l=>l.id===a);if(~s){const l=e[s];n.push(l.value!=null?l.value:s)}}),n}const Me=Symbol.for("vuetify:v-btn-toggle"),Et=k({...Oe(),...wt()},"VBtnToggle");T()({name:"VBtnToggle",props:Et(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:a,next:s,prev:l,select:o,selected:c}=Vt(e,Me);return O(()=>{const u=he.filterProps(e);return f(he,we({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var h;return[(h=n.default)==null?void 0:h.call(n,{isSelected:a,next:s,prev:l,select:o,selected:c})]}})}),{next:s,prev:l,select:o}}});const It=k({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Z=T(!1)({name:"VDefaultsProvider",props:It(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:l,root:o,scoped:c}=lt(e);return pe(a,{reset:l,root:o,scoped:c,disabled:s}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}});function De(e,t){const n=z(),a=ot(!1);if(it){const s=new IntersectionObserver(l=>{a.value=!!l.find(o=>o.isIntersecting)},t);le(()=>{s.disconnect()}),oe(n,(l,o)=>{o&&(s.unobserve(o),a.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Tt=k({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...D(),...Le(),...G({tag:"div"}),...Y()},"VProgressCircular"),Rt=T()({name:"VProgressCircular",props:Tt(),setup(e,t){let{slots:n}=t;const a=20,s=2*Math.PI*a,l=z(),{themeClasses:o}=j(e),{sizeClasses:c,sizeStyles:u}=Ee(e),{textColorClasses:h,textColorStyles:C}=te(P(e,"color")),{textColorClasses:y,textColorStyles:i}=te(P(e,"bgColor")),{intersectionRef:d,isIntersecting:g}=De(),{resizeRef:r,contentRect:m}=rt(),b=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),V=v(()=>Number(e.width)),L=v(()=>u.value?Number(e.size):m.value?m.value.width:Math.max(V.value,32)),w=v(()=>a/(1-V.value/L.value)*2),E=v(()=>V.value/L.value*w.value),I=v(()=>x((100-b.value)/100*s));return ut(()=>{d.value=l.value,r.value=l.value}),O(()=>f(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":g.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,c.value,h.value,e.class],style:[u.value,C.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:b.value},{default:()=>[f("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[f("circle",{class:["v-progress-circular__underlay",y.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":E.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),f("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:a,"stroke-width":E.value,"stroke-dasharray":s,"stroke-dashoffset":I.value},null)]),n.default&&f("div",{class:"v-progress-circular__content"},[n.default({value:b.value})])]})),{}}}),be={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ge=k({location:String},"location");function Fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ie();return{locationStyles:v(()=>{if(!e.location)return{};const{side:l,align:o}=Ct(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function c(h){return n?n(h):0}const u={};return l!=="center"&&(t?u[be[l]]=`calc(100% - ${c(l)}px)`:u[l]=0),o!=="center"?t?u[be[o]]=`calc(100% - ${c(o)}px)`:u[o]=0:(l==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),u})}}const Nt=k({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...D(),...Ge({location:"top"}),...re(),...G(),...Y()},"VProgressLinear"),$t=T()({name:"VProgressLinear",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,t){var p;let{slots:n}=t;const a=Se(e,"modelValue"),{isRtl:s,rtlClasses:l}=ie(),{themeClasses:o}=j(e),{locationStyles:c}=Fe(e),{textColorClasses:u,textColorStyles:h}=te(e,"color"),{backgroundColorClasses:C,backgroundColorStyles:y}=J(v(()=>e.bgColor||e.color)),{backgroundColorClasses:i,backgroundColorStyles:d}=J(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:r}=J(e,"color"),{roundedClasses:m}=ue(e),{intersectionRef:b,isIntersecting:V}=De(),L=v(()=>parseFloat(e.max)),w=v(()=>parseFloat(e.height)),E=v(()=>de(parseFloat(e.bufferValue)/L.value*100,0,100)),I=v(()=>de(parseFloat(a.value)/L.value*100,0,100)),B=v(()=>s.value!==e.reverse),q=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),R=ct&&((p=window.matchMedia)==null?void 0:p.call(window,"(forced-colors: active)").matches);function H(S){if(!b.value)return;const{left:N,right:F,width:$}=b.value.getBoundingClientRect(),W=B.value?$-S.clientX+(F-$):S.clientX-N;a.value=Math.round(W/$*L.value)}return O(()=>f(e.tag,{ref:b,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&V.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},m.value,o.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?x(w.value):0,"--v-progress-linear-height":x(w.value),...e.absolute?c.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&H},{default:()=>[e.stream&&f("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...h.value,[B.value?"left":"right"]:x(-w.value),borderTop:`${x(w.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${x(w.value/4)})`,width:x(100-E.value,"%"),"--v-progress-linear-stream-to":x(w.value*(B.value?1:-1))}},null),f("div",{class:["v-progress-linear__background",R?void 0:C.value],style:[y.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),f("div",{class:["v-progress-linear__buffer",R?void 0:i.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:x(E.value,"%")}]},null),f(dt,{name:q.value},{default:()=>[e.indeterminate?f("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(S=>f("div",{key:S,class:["v-progress-linear__indeterminate",S,R?void 0:g.value],style:r.value},null))]):f("div",{class:["v-progress-linear__determinate",R?void 0:g.value],style:[r.value,{width:x(I.value,"%")}]},null)]}),n.default&&f("div",{class:"v-progress-linear__content"},[n.default({value:I.value,buffer:E.value})])]})),{}}}),Ot=k({loading:[Boolean,String]},"loader");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function nn(e,t){var a;let{slots:n}=t;return f("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||f($t,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Mt=["static","relative","fixed","absolute","sticky"],Dt=k({position:{type:String,validator:e=>Mt.includes(e)}},"position");function Gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Ft(){const e=se("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Wt(e,t){var y,i;const n=vt("RouterLink"),a=v(()=>!!(e.href||e.to)),s=v(()=>(a==null?void 0:a.value)||ve(t,"click")||ve(e,"click"));if(typeof n=="string"||!("useLink"in n)){const d=P(e,"href");return{isLink:a,isClickable:s,href:d,linkProps:ee({href:d})}}const l=v(()=>({...e,to:P(()=>e.to||"")})),o=n.useLink(l.value),c=v(()=>e.to?o:void 0),u=Ft(),h=v(()=>{var d,g,r;return c.value?e.exact?u.value?((r=c.value.isExactActive)==null?void 0:r.value)&&_e(c.value.route.value.query,u.value.query):((g=c.value.isExactActive)==null?void 0:g.value)??!1:((d=c.value.isActive)==null?void 0:d.value)??!1:!1}),C=v(()=>{var d;return e.to?(d=c.value)==null?void 0:d.route.value.href:e.href});return{isLink:a,isClickable:s,isActive:h,route:(y=c.value)==null?void 0:y.route,navigate:(i=c.value)==null?void 0:i.navigate,href:C,linkProps:ee({href:C,"aria-current":v(()=>h.value?"page":void 0)})}}const zt=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Ut(e,t){oe(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&ft(()=>{t(!0)})},{immediate:!0})}const ne=Symbol("rippleStop"),Xt=80;function ye(e,t){e.style.transform=t,e.style.webkitTransform=t}function ae(e){return e.constructor.name==="TouchEvent"}function We(e){return e.constructor.name==="KeyboardEvent"}const Yt=function(e,t){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!We(e)){const i=t.getBoundingClientRect(),d=ae(e)?e.touches[e.touches.length-1]:e;a=d.clientX-i.left,s=d.clientY-i.top}let l=0,o=.3;(y=t._ripple)!=null&&y.circle?(o=.15,l=t.clientWidth/2,l=n.center?l:l+Math.sqrt((a-l)**2+(s-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=`${(t.clientWidth-l*2)/2}px`,u=`${(t.clientHeight-l*2)/2}px`,h=n.center?c:`${a-l}px`,C=n.center?u:`${s-l}px`;return{radius:l,scale:o,x:h,y:C,centerX:c,centerY:u}},U={show(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=t==null?void 0:t._ripple)!=null&&d.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:l,scale:o,x:c,y:u,centerX:h,centerY:C}=Yt(e,t,n),y=`${l*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,t.appendChild(a);const i=window.getComputedStyle(t);i&&i.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ye(s,`translate(${c}, ${u}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ye(s,`translate(${h}, ${C}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var c;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((c=n.parentNode)==null?void 0:c.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function ze(e){return typeof e>"u"||!!e}function A(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ne])){if(e[ne]=!0,ae(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||We(e),n._ripple.class&&(t.class=n._ripple.class),ae(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{U.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Xt)}else U.show(e,n,t)}}function Ce(e){e[ne]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),U.hide(t)}}function Ue(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let M=!1;function Xe(e){!M&&(e.keyCode===fe.enter||e.keyCode===fe.space)&&(M=!0,A(e))}function Ye(e){M=!1,_(e)}function je(e){M&&(M=!1,_(e))}function qe(e,t,n){const{value:a,modifiers:s}=t,l=ze(a);if(l||U.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,mt(a)&&a.class&&(e._ripple.class=a.class),l&&!n){if(s.stop){e.addEventListener("touchstart",Ce,{passive:!0}),e.addEventListener("mousedown",Ce);return}e.addEventListener("touchstart",A,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Ue,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",A),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Xe),e.addEventListener("keyup",Ye),e.addEventListener("blur",je),e.addEventListener("dragstart",_,{passive:!0})}else!l&&n&&He(e)}function He(e){e.removeEventListener("mousedown",A),e.removeEventListener("touchstart",A),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Ue),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Xe),e.removeEventListener("keyup",Ye),e.removeEventListener("dragstart",_),e.removeEventListener("blur",je)}function jt(e,t){qe(e,t,!1)}function qt(e){delete e._ripple,He(e)}function Ht(e,t){if(t.value===t.oldValue)return;const n=ze(t.oldValue);qe(e,t,n)}const Jt={mounted:jt,unmounted:qt,updated:Ht},Kt=k({active:{type:Boolean,default:void 0},activeColor:String,baseColor:String,symbol:{type:null,default:Me},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:me,appendIcon:me,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...xe(),...D(),...Re(),...Ie(),...Pe(),...xt(),...Ot(),...Ge(),...Dt(),...re(),...zt(),...Le(),...G({tag:"button"}),...Y(),...$e({variant:"elevated"})},"VBtn"),an=T()({name:"VBtn",props:Kt(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:s}=j(e),{borderClasses:l}=Ve(e),{densityClasses:o}=Ne(e),{dimensionStyles:c}=Te(e),{elevationClasses:u}=Be(e),{loaderClasses:h}=At(e),{locationStyles:C}=Fe(e),{positionClasses:y}=Gt(e),{roundedClasses:i}=ue(e),{sizeClasses:d,sizeStyles:g}=Ee(e),r=Pt(e,e.symbol,!1),m=Wt(e,n),b=v(()=>{var p;return e.active!==void 0?e.active:m.isLink.value?(p=m.isActive)==null?void 0:p.value:r==null?void 0:r.isSelected.value}),V=v(()=>b.value?e.activeColor??e.color:e.color),L=v(()=>{var S,N;return{color:(r==null?void 0:r.isSelected.value)&&(!m.isLink.value||((S=m.isActive)==null?void 0:S.value))||!r||((N=m.isActive)==null?void 0:N.value)?V.value??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:w,colorStyles:E,variantClasses:I}=_t(L),B=v(()=>(r==null?void 0:r.disabled.value)||e.disabled),q=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),R=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function H(p){var S;B.value||m.isLink.value&&(p.metaKey||p.ctrlKey||p.shiftKey||p.button!==0||n.target==="_blank")||((S=m.navigate)==null||S.call(m,p),r==null||r.toggle())}return Ut(m,r==null?void 0:r.select),O(()=>{const p=m.isLink.value?"a":e.tag,S=!!(e.prependIcon||a.prepend),N=!!(e.appendIcon||a.append),F=!!(e.icon&&e.icon!==!0);return gt(f(p,we({type:p==="a"?void 0:"button",class:["v-btn",r==null?void 0:r.selectedClass.value,{"v-btn--active":b.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":q.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,w.value,o.value,u.value,h.value,y.value,i.value,d.value,I.value,e.class],style:[E.value,c.value,C.value,g.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:B.value||void 0,tabindex:e.loading||e.readonly?-1:void 0,onClick:H,value:R.value},m.linkProps),{default:()=>{var $;return[St(!0,"v-btn"),!e.icon&&S&&f("span",{key:"prepend",class:"v-btn__prepend"},[a.prepend?f(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},a.prepend):f(K,{key:"prepend-icon",icon:e.prependIcon},null)]),f("span",{class:"v-btn__content","data-no-activator":""},[!a.default&&F?f(K,{key:"content-icon",icon:e.icon},null):f(Z,{key:"content-defaults",disabled:!F,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var W;return[((W=a.default)==null?void 0:W.call(a))??e.text]}})]),!e.icon&&N&&f("span",{key:"append",class:"v-btn__append"},[a.append?f(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},a.append):f(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&f("span",{key:"loader",class:"v-btn__loader"},[(($=a.loader)==null?void 0:$.call(a))??f(Rt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Jt,!B.value&&e.ripple,"",{center:!!e.icon}]])}),{group:r}}}),Zt=k({fluid:{type:Boolean,default:!1},...D(),...Ie(),...G()},"VContainer"),sn=T()({name:"VContainer",props:Zt(),setup(e,t){let{slots:n}=t;const{rtlClasses:a}=ie(),{dimensionStyles:s}=Te(e);return O(()=>f(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:[s.value,e.style]},n)),{}}});export{nn as L,Z as V,Re as a,Ne as b,tn as c,sn as d,an as e,Ot as m,At as u};
