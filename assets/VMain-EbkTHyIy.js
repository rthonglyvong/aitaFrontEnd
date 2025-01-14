import{p as r,K as b,d as c,at as d,au as x,av as S,aw as w,ax as I,ay as $,ae as H,i as l,M as W,m as k,b as _,g as z,r as M,c as R,az as T,t as D,f as B,aA as F,aB as A,h,s as E,Z as O,aC as j,aD as q}from"./index-B-JEGXbk.js";const ee=r({border:[Boolean,Number,String]},"border");function te(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return{borderClasses:c(()=>{const n=d(e)?e.value:e.border,s=[];if(n===!0||n==="")s.push(`${a}--border`);else if(typeof n=="string"||n===0)for(const o of String(n).split(" "))s.push(`border-${o}`);return s})}}function N(e){return x(()=>{const a=[],t={};if(e.value.background)if(S(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&w(e.value.background)){const n=I(e.value.background);if(n.a==null||n.a===1){const s=$(n);t.color=s,t.caretColor=s}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(S(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:t}})}function K(e,a){const t=c(()=>({text:d(e)?e.value:a?e[a]:null})),{colorClasses:n,colorStyles:s}=N(t);return{textColorClasses:n,textColorStyles:s}}function ne(e,a){const t=c(()=>({background:d(e)?e.value:a?e[a]:null})),{colorClasses:n,colorStyles:s}=N(t);return{backgroundColorClasses:n,backgroundColorStyles:s}}const ae=r({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function se(e){return{elevationClasses:c(()=>{const t=d(e)?e.value:e.elevation,n=[];return t==null||n.push(`elevation-${t}`),n})}}const oe=r({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return{roundedClasses:c(()=>{const n=d(e)?e.value:e.rounded,s=d(e)?e.value:e.tile,o=[];if(n===!0||n==="")o.push(`${a}--rounded`);else if(typeof n=="string"||n===0)for(const i of String(n).split(" "))o.push(`rounded-${i}`);else(s||n===!1)&&o.push("rounded-0");return o})}}const V=r({tag:{type:String,default:"div"}},"tag"),L=["x-small","small","default","large","x-large"],U=r({size:{type:[String,Number],default:"default"}},"size");function Z(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:b();return x(()=>{let t,n;return H(L,e.size)?t=`${a}--size-${e.size}`:e.size&&(n={width:l(e.size),height:l(e.size)}),{sizeClasses:t,sizeStyles:n}})}const G=r({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:W,...k(),...U(),...V({tag:"i"}),..._()},"VIcon"),ie=z()({name:"VIcon",props:G(),setup(e,a){let{attrs:t,slots:n}=a;const s=M(),{themeClasses:o}=R(e),{iconData:i}=T(c(()=>s.value||e.icon)),{sizeClasses:u}=Z(e),{textColorClasses:m,textColorStyles:P}=K(D(e,"color"));return B(()=>{var C,y;const f=(C=n.default)==null?void 0:C.call(n);f&&(s.value=(y=F(f).filter(v=>v.type===A&&v.children&&typeof v.children=="string")[0])==null?void 0:y.children);const g=!!(t.onClick||t.onClickOnce);return h(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",o.value,u.value,m.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:l(e.size),height:l(e.size),width:l(e.size)},P.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[f]})}),{}}}),ue=(e,a)=>{const t=e.__vccOpts||e;for(const[n,s]of a)t[n]=s;return t},J=r({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Q(e){return{dimensionStyles:c(()=>{const t={},n=l(e.height),s=l(e.maxHeight),o=l(e.maxWidth),i=l(e.minHeight),u=l(e.minWidth),m=l(e.width);return n!=null&&(t.height=n),s!=null&&(t.maxHeight=s),o!=null&&(t.maxWidth=o),i!=null&&(t.minHeight=i),u!=null&&(t.minWidth=u),m!=null&&(t.width=m),t})}}function X(){const e=E(!1);return O(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:j(e)}}const Y=r({scrollable:Boolean,...k(),...J(),...V({tag:"main"})},"VMain"),re=z()({name:"VMain",props:Y(),setup(e,a){let{slots:t}=a;const{dimensionStyles:n}=Q(e),{mainStyles:s}=q(),{ssrBootStyles:o}=X();return B(()=>h(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,o.value,n.value,e.style]},{default:()=>{var i,u;return[e.scrollable?h("div",{class:"v-main__scroller"},[(i=t.default)==null?void 0:i.call(t)]):(u=t.default)==null?void 0:u.call(t)]}})),{}}});export{ie as V,ue as _,ae as a,oe as b,V as c,te as d,se as e,le as f,re as g,K as h,J as i,Q as j,N as k,U as l,ee as m,Z as n,ne as u};
