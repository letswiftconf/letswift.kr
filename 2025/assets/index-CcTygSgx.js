(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},rr=[],An=()=>{},id=()=>!1,oo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),bl=n=>n.startsWith("onUpdate:"),Nt=Object.assign,Tl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},rd=Object.prototype.hasOwnProperty,rt=(n,e)=>rd.call(n,e),Ve=Array.isArray,sr=n=>ao(n)==="[object Map]",Xu=n=>ao(n)==="[object Set]",qe=n=>typeof n=="function",bt=n=>typeof n=="string",gi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",qu=n=>(vt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Yu=Object.prototype.toString,ao=n=>Yu.call(n),sd=n=>ao(n).slice(8,-1),$u=n=>ao(n)==="[object Object]",Al=n=>bt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},od=/-(\w)/g,on=lo(n=>n.replace(od,(e,t)=>t?t.toUpperCase():"")),ad=/\B([A-Z])/g,Bi=lo(n=>n.replace(ad,"-$1").toLowerCase()),co=lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Co=lo(n=>n?`on${co(n)}`:""),ui=(n,e)=>!Object.is(n,e),Po=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ju=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ld=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let rc;const uo=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=bt(i)?hd(i):es(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(n)||vt(n))return n}const cd=/;(?![^(]*\))/g,ud=/:([^]+)/,fd=/\/\*[^]*?\*\//g;function hd(n){const e={};return n.replace(fd,"").split(cd).forEach(t=>{if(t){const i=t.split(ud);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fo(n){let e="";if(bt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=fo(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const dd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pd=yl(dd);function Ku(n){return!!n||n===""}const Zu=n=>!!(n&&n.__v_isRef===!0),Jt=n=>bt(n)?n:n==null?"":Ve(n)||vt(n)&&(n.toString===Yu||!qe(n.toString))?Zu(n)?Jt(n.value):JSON.stringify(n,Ju,2):String(n),Ju=(n,e)=>Zu(e)?Ju(n,e.value):sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Do(i,s)+" =>"]=r,t),{})}:Xu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Do(t))}:gi(e)?Do(e):vt(e)&&!Ve(e)&&!$u(e)?String(e):e,Do=(n,e="")=>{var t;return gi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class md{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Gt;try{return Gt=this,e()}finally{Gt=t}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function gd(){return Gt}let ft;const Lo=new WeakSet;class Qu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lo.has(this)&&(Lo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sc(this),nf(this);const e=ft,t=_n;ft=this,_n=!0;try{return this.fn()}finally{rf(this),ft=e,_n=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cl(e);this.deps=this.depsTail=void 0,sc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xa(this)&&this.run()}get dirty(){return xa(this)}}let ef=0,Fr,Or;function tf(n,e=!1){if(n.flags|=8,e){n.next=Or,Or=n;return}n.next=Fr,Fr=n}function wl(){ef++}function Rl(){if(--ef>0)return;if(Or){let e=Or;for(Or=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Fr;){let e=Fr;for(Fr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function nf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Cl(i),_d(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function xa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xa(n))))return;n.flags|=2;const e=n.dep,t=ft,i=_n;ft=n,_n=!0;try{nf(n);const r=n.fn(n._value);(e.version===0||ui(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,_n=i,rf(n),n.flags&=-3}}function Cl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Cl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function _d(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let _n=!0;const of=[];function Xn(){of.push(_n),_n=!1}function qn(){const n=of.pop();_n=n===void 0?!0:n}function sc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Gr=0;class vd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!_n||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new vd(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,af(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Gr++,this.notify(e)}notify(e){wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Rl()}}}function af(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)af(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Sa=new WeakMap,Ui=Symbol(""),Ma=Symbol(""),Wr=Symbol("");function Lt(n,e,t){if(_n&&ft){let i=Sa.get(n);i||Sa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Pl),r.map=i,r.key=t),r.track()}}function Bn(n,e,t,i,r,s){const o=Sa.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(wl(),e==="clear")o.forEach(a);else{const l=Ve(n),c=l&&Al(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Wr||!gi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ui)),sr(n)&&a(o.get(Ma)));break;case"delete":l||(a(o.get(Ui)),sr(n)&&a(o.get(Ma)));break;case"set":sr(n)&&a(o.get(Ui));break}}Rl()}function Hi(n){const e=it(n);return e===n?e:(Lt(e,"iterate",Wr),sn(n)?e:e.map(Ct))}function ho(n){return Lt(n=it(n),"iterate",Wr),n}const xd={__proto__:null,[Symbol.iterator](){return Io(this,Symbol.iterator,Ct)},concat(...n){return Hi(this).concat(...n.map(e=>Ve(e)?Hi(e):e))},entries(){return Io(this,"entries",n=>(n[1]=Ct(n[1]),n))},every(n,e){return Cn(this,"every",n,e,void 0,arguments)},filter(n,e){return Cn(this,"filter",n,e,t=>t.map(Ct),arguments)},find(n,e){return Cn(this,"find",n,e,Ct,arguments)},findIndex(n,e){return Cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cn(this,"findLast",n,e,Ct,arguments)},findLastIndex(n,e){return Cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Uo(this,"includes",n)},indexOf(...n){return Uo(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Uo(this,"lastIndexOf",n)},map(n,e){return Cn(this,"map",n,e,void 0,arguments)},pop(){return br(this,"pop")},push(...n){return br(this,"push",n)},reduce(n,...e){return oc(this,"reduce",n,e)},reduceRight(n,...e){return oc(this,"reduceRight",n,e)},shift(){return br(this,"shift")},some(n,e){return Cn(this,"some",n,e,void 0,arguments)},splice(...n){return br(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return br(this,"unshift",n)},values(){return Io(this,"values",Ct)}};function Io(n,e,t){const i=ho(n),r=i[e]();return i!==n&&!sn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Sd=Array.prototype;function Cn(n,e,t,i,r,s){const o=ho(n),a=o!==n&&!sn(n),l=o[e];if(l!==Sd[e]){const f=l.apply(n,s);return a?Ct(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Ct(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function oc(n,e,t,i){const r=ho(n);let s=t;return r!==n&&(sn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Ct(a),l,n)}),r[e](s,...i)}function Uo(n,e,t){const i=it(n);Lt(i,"iterate",Wr);const r=i[e](...t);return(r===-1||r===!1)&&Il(t[0])?(t[0]=it(t[0]),i[e](...t)):r}function br(n,e,t=[]){Xn(),wl();const i=it(n)[e].apply(n,t);return Rl(),qn(),i}const Md=yl("__proto__,__v_isRef,__isVue"),lf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(gi));function Ed(n){gi(n)||(n=String(n));const e=it(this);return Lt(e,"has",n),e.hasOwnProperty(n)}class cf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Ld:df:s?hf:ff).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=xd[t]))return l;if(t==="hasOwnProperty")return Ed}const a=Reflect.get(e,t,Ut(e)?e:i);return(gi(t)?lf.has(t):Md(t))||(r||Lt(e,"get",t),s)?a:Ut(a)?o&&Al(t)?a:a.value:vt(a)?r?mf(a):po(a):a}}class uf extends cf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=di(s);if(!sn(i)&&!di(i)&&(s=it(s),i=it(i)),!Ve(e)&&Ut(s)&&!Ut(i))return l?!1:(s.value=i,!0)}const o=Ve(e)&&Al(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,Ut(e)?e:r);return e===it(r)&&(o?ui(i,s)&&Bn(e,"set",t,i):Bn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Bn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!gi(t)||!lf.has(t))&&Lt(e,"has",t),i}ownKeys(e){return Lt(e,"iterate",Ve(e)?"length":Ui),Reflect.ownKeys(e)}}class yd extends cf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bd=new uf,Td=new yd,Ad=new uf(!0);const Ea=n=>n,fs=n=>Reflect.getPrototypeOf(n);function wd(n,e,t){return function(...i){const r=this.__v_raw,s=it(r),o=sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ea:e?js:Ct;return!e&&Lt(s,"iterate",l?Ma:Ui),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function hs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Rd(n,e){const t={get(r){const s=this.__v_raw,o=it(s),a=it(r);n||(ui(r,a)&&Lt(o,"get",r),Lt(o,"get",a));const{has:l}=fs(o),c=e?Ea:n?js:Ct;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Lt(it(r),"iterate",Ui),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=it(s),a=it(r);return n||(ui(r,a)&&Lt(o,"has",r),Lt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Ea:n?js:Ct;return!n&&Lt(l,"iterate",Ui),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Nt(t,n?{add:hs("add"),set:hs("set"),delete:hs("delete"),clear:hs("clear")}:{add(r){!e&&!sn(r)&&!di(r)&&(r=it(r));const s=it(this);return fs(s).has.call(s,r)||(s.add(r),Bn(s,"add",r,r)),this},set(r,s){!e&&!sn(s)&&!di(s)&&(s=it(s));const o=it(this),{has:a,get:l}=fs(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?ui(s,u)&&Bn(o,"set",r,s):Bn(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=fs(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Bn(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&Bn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wd(r,n,e)}),t}function Dl(n,e){const t=Rd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(rt(t,r)&&r in i?t:i,r,s)}const Cd={get:Dl(!1,!1)},Pd={get:Dl(!1,!0)},Dd={get:Dl(!0,!1)};const ff=new WeakMap,hf=new WeakMap,df=new WeakMap,Ld=new WeakMap;function Id(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ud(n){return n.__v_skip||!Object.isExtensible(n)?0:Id(sd(n))}function po(n){return di(n)?n:Ll(n,!1,bd,Cd,ff)}function pf(n){return Ll(n,!1,Ad,Pd,hf)}function mf(n){return Ll(n,!0,Td,Dd,df)}function Ll(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Ud(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function or(n){return di(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function di(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function Il(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function Nd(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&ju(n,"__v_skip",!0),n}const Ct=n=>vt(n)?po(n):n,js=n=>vt(n)?mf(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function hr(n){return gf(n,!1)}function Fd(n){return gf(n,!0)}function gf(n,e){return Ut(n)?n:new Od(n,e)}class Od{constructor(e,t){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Ct(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||sn(e)||di(e);e=i?e:it(e),ui(e,t)&&(this._rawValue=e,this._value=i?e:Ct(e),this.dep.trigger())}}function ht(n){return Ut(n)?n.value:n}const Bd={get:(n,e,t)=>e==="__v_raw"?n:ht(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _f(n){return or(n)?n:new Proxy(n,Bd)}class zd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return tf(this,!0),!0}get value(){const e=this.dep.track();return sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hd(n,e,t=!1){let i,r;return qe(n)?i=n:(i=n.get,r=n.set),new zd(i,r,t)}const ds={},Ks=new WeakMap;let wi;function kd(n,e=!1,t=wi){if(t){let i=Ks.get(t);i||Ks.set(t,i=[]),i.push(n)}}function Vd(n,e,t=dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=E=>r?E:sn(E)||r===!1||r===0?li(E,1):li(E);let u,f,h,d,_=!1,x=!1;if(Ut(n)?(f=()=>n.value,_=sn(n)):or(n)?(f=()=>c(n),_=!0):Ve(n)?(x=!0,_=n.some(E=>or(E)||sn(E)),f=()=>n.map(E=>{if(Ut(E))return E.value;if(or(E))return c(E);if(qe(E))return l?l(E,2):E()})):qe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Xn();try{h()}finally{qn()}}const E=wi;wi=u;try{return l?l(n,3,[d]):n(d)}finally{wi=E}}:f=An,e&&r){const E=f,N=r===!0?1/0:r;f=()=>li(E(),N)}const m=gd(),p=()=>{u.stop(),m&&m.active&&Tl(m.effects,u)};if(s&&e){const E=e;e=(...N)=>{E(...N),p()}}let w=x?new Array(n.length).fill(ds):ds;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const N=u.run();if(r||_||(x?N.some((D,C)=>ui(D,w[C])):ui(N,w))){h&&h();const D=wi;wi=u;try{const C=[N,w===ds?void 0:x&&w[0]===ds?[]:w,d];w=N,l?l(e,3,C):e(...C)}finally{wi=D}}}else u.run()};return a&&a(T),u=new Qu(f),u.scheduler=o?()=>o(T,!1):T,d=E=>kd(E,!1,u),h=u.onStop=()=>{const E=Ks.get(u);if(E){if(l)l(E,4);else for(const N of E)N();Ks.delete(u)}},e?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function li(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Ut(n))li(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)li(n[i],e,t);else if(Xu(n)||sr(n))n.forEach(i=>{li(i,e,t)});else if($u(n)){for(const i in n)li(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&li(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ts(n,e,t,i){try{return i?n(...i):n()}catch(r){mo(r,e,t)}}function wn(n,e,t,i){if(qe(n)){const r=ts(n,e,t,i);return r&&qu(r)&&r.catch(s=>{mo(s,e,t)}),r}if(Ve(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wn(n[s],e,t,i));return r}}function mo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Xn(),ts(s,null,10,[n,l,c]),qn();return}}Gd(n,t,r,i,o)}function Gd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const zt=[];let En=-1;const ar=[];let si=null,tr=0;const vf=Promise.resolve();let Zs=null;function xf(n){const e=Zs||vf;return n?e.then(this?n.bind(this):n):e}function Wd(n){let e=En+1,t=zt.length;for(;e<t;){const i=e+t>>>1,r=zt[i],s=Xr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ul(n){if(!(n.flags&1)){const e=Xr(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=Xr(t)?zt.push(n):zt.splice(Wd(e),0,n),n.flags|=1,Sf()}}function Sf(){Zs||(Zs=vf.then(Ef))}function Xd(n){Ve(n)?ar.push(...n):si&&n.id===-1?si.splice(tr+1,0,n):n.flags&1||(ar.push(n),n.flags|=1),Sf()}function ac(n,e,t=En+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Mf(n){if(ar.length){const e=[...new Set(ar)].sort((t,i)=>Xr(t)-Xr(i));if(ar.length=0,si){si.push(...e);return}for(si=e,tr=0;tr<si.length;tr++){const t=si[tr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}si=null,tr=0}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ef(n){try{for(En=0;En<zt.length;En++){const e=zt[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ts(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<zt.length;En++){const e=zt[En];e&&(e.flags&=-2)}En=-1,zt.length=0,Mf(),Zs=null,(zt.length||ar.length)&&Ef()}}let mn=null,yf=null;function Js(n){const e=mn;return mn=n,yf=n&&n.type.__scopeId||null,e}function bf(n,e=mn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&_c(-1);const s=Js(e);let o;try{o=n(...r)}finally{Js(s),i._d&&_c(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function xi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Xn(),wn(l,t,8,[n.el,a,n,e]),qn())}}const qd=Symbol("_vte"),Yd=n=>n.__isTeleport;function Nl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Nl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function an(n,e){return qe(n)?Nt({name:n.name},e,{setup:n}):n}function Tf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Qs(n,e,t,i,r=!1){if(Ve(n)){n.forEach((_,x)=>Qs(_,e&&(Ve(e)?e[x]:e),t,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Qs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===dt?a.refs={}:a.refs,f=a.setupState,h=it(f),d=f===dt?()=>!1:_=>rt(h,_);if(c!=null&&c!==l&&(bt(c)?(u[c]=null,d(c)&&(f[c]=null)):Ut(c)&&(c.value=null)),qe(l))ts(l,a,12,[o,u]);else{const _=bt(l),x=Ut(l);if(_||x){const m=()=>{if(n.f){const p=_?d(l)?f[l]:u[l]:l.value;r?Ve(p)&&Tl(p,s):Ve(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Zt(m,t)):m()}}}uo().requestIdleCallback;uo().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,Af=n=>n.type.__isKeepAlive;function $d(n,e){wf(n,"a",e)}function jd(n,e){wf(n,"da",e)}function wf(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(go(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Af(r.parent.vnode)&&Kd(i,e,t,r),r=r.parent}}function Kd(n,e,t,i){const r=go(e,n,i,!0);vo(()=>{Tl(i[e],r)},t)}function go(n,e,t=It,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Xn();const a=ns(t),l=wn(e,t,n,o);return a(),qn(),l});return i?r.unshift(s):r.push(s),s}}const Kn=n=>(e,t=It)=>{(!Yr||n==="sp")&&go(n,(...i)=>e(...i),t)},Zd=Kn("bm"),_o=Kn("m"),Jd=Kn("bu"),Qd=Kn("u"),ep=Kn("bum"),vo=Kn("um"),tp=Kn("sp"),np=Kn("rtg"),ip=Kn("rtc");function rp(n,e=It){go("ec",n,e)}const Rf="components";function Cf(n,e){return Df(Rf,n,!0,e)||n}const Pf=Symbol.for("v-ndc");function sp(n){return bt(n)?Df(Rf,n,!1)||n:n||Pf}function Df(n,e,t=!0,i=!1){const r=mn||It;if(r){const s=r.type;{const a=Xp(s,!1);if(a&&(a===e||a===on(e)||a===co(on(e))))return s}const o=lc(r[n]||s[n],e)||lc(r.appContext[n],e);return!o&&i?s:o}}function lc(n,e){return n&&(n[e]||n[on(e)]||n[co(on(e))])}function Lr(n,e,t,i){let r;const s=t,o=Ve(n);if(o||bt(n)){const a=o&&or(n);let l=!1,c=!1;a&&(l=!sn(n),c=di(n),n=ho(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?js(Ct(n[u])):Ct(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(vt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const ya=n=>n?Zf(n)?zl(n):ya(n.parent):null,zr=Nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ya(n.parent),$root:n=>ya(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>If(n),$forceUpdate:n=>n.f||(n.f=()=>{Ul(n.update)}),$nextTick:n=>n.n||(n.n=xf.bind(n.proxy)),$watch:n=>Ap.bind(n)}),No=(n,e)=>n!==dt&&!n.__isScriptSetup&&rt(n,e),op={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(No(i,e))return o[e]=1,i[e];if(r!==dt&&rt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==dt&&rt(t,e))return o[e]=4,t[e];ba&&(o[e]=0)}}const u=zr[e];let f,h;if(u)return e==="$attrs"&&Lt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==dt&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return No(r,e)?(r[e]=t,!0):i!==dt&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==dt&&rt(n,o)||No(e,o)||(a=s[0])&&rt(a,o)||rt(i,o)||rt(zr,o)||rt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cc(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ba=!0;function ap(n){const e=If(n),t=n.proxy,i=n.ctx;ba=!1,e.beforeCreate&&uc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:T,unmounted:E,render:N,renderTracked:D,renderTriggered:C,errorCaptured:z,serverPrefetch:b,expose:y,inheritAttrs:I,components:se,directives:q,filters:oe}=e;if(c&&lp(c,i,null),o)for(const ae in o){const B=o[ae];qe(B)&&(i[ae]=B.bind(t))}if(r){const ae=r.call(t,t);vt(ae)&&(n.data=po(ae))}if(ba=!0,s)for(const ae in s){const B=s[ae],ge=qe(B)?B.bind(t,t):qe(B.get)?B.get.bind(t,t):An,_e=!qe(B)&&qe(B.set)?B.set.bind(t):An,Ae=Mt({get:ge,set:_e});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Oe=>Ae.value=Oe})}if(a)for(const ae in a)Lf(a[ae],i,t,ae);if(l){const ae=qe(l)?l.call(t):l;Reflect.ownKeys(ae).forEach(B=>{Bs(B,ae[B])})}u&&uc(u,n,"c");function G(ae,B){Ve(B)?B.forEach(ge=>ae(ge.bind(t))):B&&ae(B.bind(t))}if(G(Zd,f),G(_o,h),G(Jd,d),G(Qd,_),G($d,x),G(jd,m),G(rp,z),G(ip,D),G(np,C),G(ep,w),G(vo,E),G(tp,b),Ve(y))if(y.length){const ae=n.exposed||(n.exposed={});y.forEach(B=>{Object.defineProperty(ae,B,{get:()=>t[B],set:ge=>t[B]=ge})})}else n.exposed||(n.exposed={});N&&n.render===An&&(n.render=N),I!=null&&(n.inheritAttrs=I),se&&(n.components=se),q&&(n.directives=q),b&&Tf(n)}function lp(n,e,t=An){Ve(n)&&(n=Ta(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function uc(n,e,t){wn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Lf(n,e,t,i){let r=i.includes(".")?qf(t,i):()=>t[i];if(bt(n)){const s=e[n];qe(s)&&zs(r,s)}else if(qe(n))zs(r,n.bind(t));else if(vt(n))if(Ve(n))n.forEach(s=>Lf(s,e,t,i));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&zs(r,s,n)}}function If(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>eo(l,c,o,!0)),eo(l,e,o)),vt(e)&&s.set(e,l),l}function eo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&eo(n,s,t,!0),r&&r.forEach(o=>eo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=cp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const cp={data:fc,props:hc,emits:hc,methods:Ir,computed:Ir,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Ir,directives:Ir,watch:fp,provide:fc,inject:up};function fc(n,e){return e?n?function(){return Nt(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function up(n,e){return Ir(Ta(n),Ta(e))}function Ta(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Ir(n,e){return n?Nt(Object.create(null),n,e):e}function hc(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Nt(Object.create(null),cc(n),cc(e??{})):e}function fp(n,e){if(!n)return e;if(!e)return n;const t=Nt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Uf(){return{app:null,config:{isNativeTag:id,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hp=0;function dp(n,e){return function(i,r=null){qe(i)||(i=Nt({},i)),r!=null&&!vt(r)&&(r=null);const s=Uf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:hp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Yp,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||tt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,zl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(wn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=lr;lr=c;try{return u()}finally{lr=f}}};return c}}let lr=null;function Bs(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=It||mn;if(i||lr){let r=lr?lr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Nf={},Ff=()=>Object.create(Nf),Of=n=>Object.getPrototypeOf(n)===Nf;function pp(n,e,t,i=!1){const r={},s=Ff();n.propsDefaults=Object.create(null),Bf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:pf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function mp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=it(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(xo(n.emitsOptions,h))continue;const d=e[h];if(l)if(rt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=on(h);r[_]=Aa(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Bf(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=Bi(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Aa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!rt(e,f))&&(delete s[f],c=!0)}c&&Bn(n.attrs,"set","")}function Bf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Nr(l))continue;const c=e[l];let u;r&&rt(r,u=on(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:xo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(t),c=a||dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Aa(r,l,f,c[f],n,!rt(c,f))}}return o}function Aa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ns(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Bi(t))&&(i=!0))}return i}const gp=new WeakMap;function zf(n,e,t=!1){const i=t?gp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=f=>{l=!0;const[h,d]=zf(f,e,!0);Nt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,rr),rr;if(Ve(s))for(let u=0;u<s.length;u++){const f=on(s[u]);dc(f)&&(o[f]=dt)}else if(s)for(const u in s){const f=on(u);if(dc(f)){const h=s[u],d=o[f]=Ve(h)||qe(h)?{type:h}:Nt({},h),_=d.type;let x=!1,m=!0;if(Ve(_))for(let p=0;p<_.length;++p){const w=_[p],T=qe(w)&&w.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=qe(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||rt(d,"default"))&&a.push(f)}}const c=[o,a];return vt(n)&&i.set(n,c),c}function dc(n){return n[0]!=="$"&&!Nr(n)}const Fl=n=>n[0]==="_"||n==="$stable",Ol=n=>Ve(n)?n.map(yn):[yn(n)],_p=(n,e,t)=>{if(e._n)return e;const i=bf((...r)=>Ol(e(...r)),t);return i._c=!1,i},Hf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Fl(r))continue;const s=n[r];if(qe(s))e[r]=_p(r,s,i);else if(s!=null){const o=Ol(s);e[r]=()=>o}}},kf=(n,e)=>{const t=Ol(e);n.slots.default=()=>t},Vf=(n,e,t)=>{for(const i in e)(t||!Fl(i))&&(n[i]=e[i])},vp=(n,e,t)=>{const i=n.slots=Ff();if(n.vnode.shapeFlag&32){const r=e._;r?(Vf(i,e,t),t&&ju(i,"_",r,!0)):Hf(e,i)}else e&&kf(n,e)},xp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Vf(r,e,t):(s=!e.$stable,Hf(e,r)),o=e}else e&&(kf(n,e),o={default:1});if(s)for(const a in r)!Fl(a)&&o[a]==null&&delete r[a]},Zt=Ip;function Sp(n){return Mp(n)}function Mp(n,e){const t=uo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=An,insertStaticContent:_}=n,x=(A,R,v,ne=null,Y=null,Z=null,H=void 0,X=null,J=!!R.dynamicChildren)=>{if(A===R)return;A&&!Tr(A,R)&&(ne=P(A),Oe(A,Y,Z,!0),A=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:Q,ref:xe,shapeFlag:S}=R;switch(Q){case So:m(A,R,v,ne);break;case pi:p(A,R,v,ne);break;case Hs:A==null&&w(R,v,ne,H);break;case Ht:se(A,R,v,ne,Y,Z,H,X,J);break;default:S&1?N(A,R,v,ne,Y,Z,H,X,J):S&6?q(A,R,v,ne,Y,Z,H,X,J):(S&64||S&128)&&Q.process(A,R,v,ne,Y,Z,H,X,J,le)}xe!=null&&Y&&Qs(xe,A&&A.ref,Z,R||A,!R)},m=(A,R,v,ne)=>{if(A==null)i(R.el=a(R.children),v,ne);else{const Y=R.el=A.el;R.children!==A.children&&c(Y,R.children)}},p=(A,R,v,ne)=>{A==null?i(R.el=l(R.children||""),v,ne):R.el=A.el},w=(A,R,v,ne)=>{[A.el,A.anchor]=_(A.children,R,v,ne,A.el,A.anchor)},T=({el:A,anchor:R},v,ne)=>{let Y;for(;A&&A!==R;)Y=h(A),i(A,v,ne),A=Y;i(R,v,ne)},E=({el:A,anchor:R})=>{let v;for(;A&&A!==R;)v=h(A),r(A),A=v;r(R)},N=(A,R,v,ne,Y,Z,H,X,J)=>{R.type==="svg"?H="svg":R.type==="math"&&(H="mathml"),A==null?D(R,v,ne,Y,Z,H,X,J):b(A,R,Y,Z,H,X,J)},D=(A,R,v,ne,Y,Z,H,X)=>{let J,Q;const{props:xe,shapeFlag:S,transition:g,dirs:L}=A;if(J=A.el=o(A.type,Z,xe&&xe.is,xe),S&8?u(J,A.children):S&16&&z(A.children,J,null,ne,Y,Fo(A,Z),H,X),L&&xi(A,null,ne,"created"),C(J,A,A.scopeId,H,ne),xe){for(const te in xe)te!=="value"&&!Nr(te)&&s(J,te,null,xe[te],Z,ne);"value"in xe&&s(J,"value",null,xe.value,Z),(Q=xe.onVnodeBeforeMount)&&Mn(Q,ne,A)}L&&xi(A,null,ne,"beforeMount");const V=Ep(Y,g);V&&g.beforeEnter(J),i(J,R,v),((Q=xe&&xe.onVnodeMounted)||V||L)&&Zt(()=>{Q&&Mn(Q,ne,A),V&&g.enter(J),L&&xi(A,null,ne,"mounted")},Y)},C=(A,R,v,ne,Y)=>{if(v&&d(A,v),ne)for(let Z=0;Z<ne.length;Z++)d(A,ne[Z]);if(Y){let Z=Y.subTree;if(R===Z||$f(Z.type)&&(Z.ssContent===R||Z.ssFallback===R)){const H=Y.vnode;C(A,H,H.scopeId,H.slotScopeIds,Y.parent)}}},z=(A,R,v,ne,Y,Z,H,X,J=0)=>{for(let Q=J;Q<A.length;Q++){const xe=A[Q]=X?oi(A[Q]):yn(A[Q]);x(null,xe,R,v,ne,Y,Z,H,X)}},b=(A,R,v,ne,Y,Z,H)=>{const X=R.el=A.el;let{patchFlag:J,dynamicChildren:Q,dirs:xe}=R;J|=A.patchFlag&16;const S=A.props||dt,g=R.props||dt;let L;if(v&&Si(v,!1),(L=g.onVnodeBeforeUpdate)&&Mn(L,v,R,A),xe&&xi(R,A,v,"beforeUpdate"),v&&Si(v,!0),(S.innerHTML&&g.innerHTML==null||S.textContent&&g.textContent==null)&&u(X,""),Q?y(A.dynamicChildren,Q,X,v,ne,Fo(R,Y),Z):H||B(A,R,X,null,v,ne,Fo(R,Y),Z,!1),J>0){if(J&16)I(X,S,g,v,Y);else if(J&2&&S.class!==g.class&&s(X,"class",null,g.class,Y),J&4&&s(X,"style",S.style,g.style,Y),J&8){const V=R.dynamicProps;for(let te=0;te<V.length;te++){const k=V[te],be=S[k],de=g[k];(de!==be||k==="value")&&s(X,k,be,de,Y,v)}}J&1&&A.children!==R.children&&u(X,R.children)}else!H&&Q==null&&I(X,S,g,v,Y);((L=g.onVnodeUpdated)||xe)&&Zt(()=>{L&&Mn(L,v,R,A),xe&&xi(R,A,v,"updated")},ne)},y=(A,R,v,ne,Y,Z,H)=>{for(let X=0;X<R.length;X++){const J=A[X],Q=R[X],xe=J.el&&(J.type===Ht||!Tr(J,Q)||J.shapeFlag&198)?f(J.el):v;x(J,Q,xe,null,ne,Y,Z,H,!0)}},I=(A,R,v,ne,Y)=>{if(R!==v){if(R!==dt)for(const Z in R)!Nr(Z)&&!(Z in v)&&s(A,Z,R[Z],null,Y,ne);for(const Z in v){if(Nr(Z))continue;const H=v[Z],X=R[Z];H!==X&&Z!=="value"&&s(A,Z,X,H,Y,ne)}"value"in v&&s(A,"value",R.value,v.value,Y)}},se=(A,R,v,ne,Y,Z,H,X,J)=>{const Q=R.el=A?A.el:a(""),xe=R.anchor=A?A.anchor:a("");let{patchFlag:S,dynamicChildren:g,slotScopeIds:L}=R;L&&(X=X?X.concat(L):L),A==null?(i(Q,v,ne),i(xe,v,ne),z(R.children||[],v,xe,Y,Z,H,X,J)):S>0&&S&64&&g&&A.dynamicChildren?(y(A.dynamicChildren,g,v,Y,Z,H,X),(R.key!=null||Y&&R===Y.subTree)&&Gf(A,R,!0)):B(A,R,v,xe,Y,Z,H,X,J)},q=(A,R,v,ne,Y,Z,H,X,J)=>{R.slotScopeIds=X,A==null?R.shapeFlag&512?Y.ctx.activate(R,v,ne,H,J):oe(R,v,ne,Y,Z,H,J):re(A,R,J)},oe=(A,R,v,ne,Y,Z,H)=>{const X=A.component=Hp(A,ne,Y);if(Af(A)&&(X.ctx.renderer=le),kp(X,!1,H),X.asyncDep){if(Y&&Y.registerDep(X,G,H),!A.el){const J=X.subTree=tt(pi);p(null,J,R,v)}}else G(X,A,R,v,Y,Z,H)},re=(A,R,v)=>{const ne=R.component=A.component;if(Dp(A,R,v))if(ne.asyncDep&&!ne.asyncResolved){ae(ne,R,v);return}else ne.next=R,ne.update();else R.el=A.el,ne.vnode=R},G=(A,R,v,ne,Y,Z,H)=>{const X=()=>{if(A.isMounted){let{next:S,bu:g,u:L,parent:V,vnode:te}=A;{const Ce=Wf(A);if(Ce){S&&(S.el=te.el,ae(A,S,H)),Ce.asyncDep.then(()=>{A.isUnmounted||X()});return}}let k=S,be;Si(A,!1),S?(S.el=te.el,ae(A,S,H)):S=te,g&&Po(g),(be=S.props&&S.props.onVnodeBeforeUpdate)&&Mn(be,V,S,te),Si(A,!0);const de=mc(A),Te=A.subTree;A.subTree=de,x(Te,de,f(Te.el),P(Te),A,Y,Z),S.el=de.el,k===null&&Lp(A,de.el),L&&Zt(L,Y),(be=S.props&&S.props.onVnodeUpdated)&&Zt(()=>Mn(be,V,S,te),Y)}else{let S;const{el:g,props:L}=R,{bm:V,m:te,parent:k,root:be,type:de}=A,Te=Br(R);Si(A,!1),V&&Po(V),!Te&&(S=L&&L.onVnodeBeforeMount)&&Mn(S,k,R),Si(A,!0);{be.ce&&be.ce._injectChildStyle(de);const Ce=A.subTree=mc(A);x(null,Ce,v,ne,A,Y,Z),R.el=Ce.el}if(te&&Zt(te,Y),!Te&&(S=L&&L.onVnodeMounted)){const Ce=R;Zt(()=>Mn(S,k,Ce),Y)}(R.shapeFlag&256||k&&Br(k.vnode)&&k.vnode.shapeFlag&256)&&A.a&&Zt(A.a,Y),A.isMounted=!0,R=v=ne=null}};A.scope.on();const J=A.effect=new Qu(X);A.scope.off();const Q=A.update=J.run.bind(J),xe=A.job=J.runIfDirty.bind(J);xe.i=A,xe.id=A.uid,J.scheduler=()=>Ul(xe),Si(A,!0),Q()},ae=(A,R,v)=>{R.component=A;const ne=A.vnode.props;A.vnode=R,A.next=null,mp(A,R.props,ne,v),xp(A,R.children,v),Xn(),ac(A),qn()},B=(A,R,v,ne,Y,Z,H,X,J=!1)=>{const Q=A&&A.children,xe=A?A.shapeFlag:0,S=R.children,{patchFlag:g,shapeFlag:L}=R;if(g>0){if(g&128){_e(Q,S,v,ne,Y,Z,H,X,J);return}else if(g&256){ge(Q,S,v,ne,Y,Z,H,X,J);return}}L&8?(xe&16&&Se(Q,Y,Z),S!==Q&&u(v,S)):xe&16?L&16?_e(Q,S,v,ne,Y,Z,H,X,J):Se(Q,Y,Z,!0):(xe&8&&u(v,""),L&16&&z(S,v,ne,Y,Z,H,X,J))},ge=(A,R,v,ne,Y,Z,H,X,J)=>{A=A||rr,R=R||rr;const Q=A.length,xe=R.length,S=Math.min(Q,xe);let g;for(g=0;g<S;g++){const L=R[g]=J?oi(R[g]):yn(R[g]);x(A[g],L,v,null,Y,Z,H,X,J)}Q>xe?Se(A,Y,Z,!0,!1,S):z(R,v,ne,Y,Z,H,X,J,S)},_e=(A,R,v,ne,Y,Z,H,X,J)=>{let Q=0;const xe=R.length;let S=A.length-1,g=xe-1;for(;Q<=S&&Q<=g;){const L=A[Q],V=R[Q]=J?oi(R[Q]):yn(R[Q]);if(Tr(L,V))x(L,V,v,null,Y,Z,H,X,J);else break;Q++}for(;Q<=S&&Q<=g;){const L=A[S],V=R[g]=J?oi(R[g]):yn(R[g]);if(Tr(L,V))x(L,V,v,null,Y,Z,H,X,J);else break;S--,g--}if(Q>S){if(Q<=g){const L=g+1,V=L<xe?R[L].el:ne;for(;Q<=g;)x(null,R[Q]=J?oi(R[Q]):yn(R[Q]),v,V,Y,Z,H,X,J),Q++}}else if(Q>g)for(;Q<=S;)Oe(A[Q],Y,Z,!0),Q++;else{const L=Q,V=Q,te=new Map;for(Q=V;Q<=g;Q++){const Le=R[Q]=J?oi(R[Q]):yn(R[Q]);Le.key!=null&&te.set(Le.key,Q)}let k,be=0;const de=g-V+1;let Te=!1,Ce=0;const ue=new Array(de);for(Q=0;Q<de;Q++)ue[Q]=0;for(Q=L;Q<=S;Q++){const Le=A[Q];if(be>=de){Oe(Le,Y,Z,!0);continue}let Ie;if(Le.key!=null)Ie=te.get(Le.key);else for(k=V;k<=g;k++)if(ue[k-V]===0&&Tr(Le,R[k])){Ie=k;break}Ie===void 0?Oe(Le,Y,Z,!0):(ue[Ie-V]=Q+1,Ie>=Ce?Ce=Ie:Te=!0,x(Le,R[Ie],v,null,Y,Z,H,X,J),be++)}const Re=Te?yp(ue):rr;for(k=Re.length-1,Q=de-1;Q>=0;Q--){const Le=V+Q,Ie=R[Le],ve=Le+1<xe?R[Le+1].el:ne;ue[Q]===0?x(null,Ie,v,ve,Y,Z,H,X,J):Te&&(k<0||Q!==Re[k]?Ae(Ie,v,ve,2):k--)}}},Ae=(A,R,v,ne,Y=null)=>{const{el:Z,type:H,transition:X,children:J,shapeFlag:Q}=A;if(Q&6){Ae(A.component.subTree,R,v,ne);return}if(Q&128){A.suspense.move(R,v,ne);return}if(Q&64){H.move(A,R,v,le);return}if(H===Ht){i(Z,R,v);for(let S=0;S<J.length;S++)Ae(J[S],R,v,ne);i(A.anchor,R,v);return}if(H===Hs){T(A,R,v);return}if(ne!==2&&Q&1&&X)if(ne===0)X.beforeEnter(Z),i(Z,R,v),Zt(()=>X.enter(Z),Y);else{const{leave:S,delayLeave:g,afterLeave:L}=X,V=()=>{A.ctx.isUnmounted?r(Z):i(Z,R,v)},te=()=>{S(Z,()=>{V(),L&&L()})};g?g(Z,V,te):te()}else i(Z,R,v)},Oe=(A,R,v,ne=!1,Y=!1)=>{const{type:Z,props:H,ref:X,children:J,dynamicChildren:Q,shapeFlag:xe,patchFlag:S,dirs:g,cacheIndex:L}=A;if(S===-2&&(Y=!1),X!=null&&(Xn(),Qs(X,null,v,A,!0),qn()),L!=null&&(R.renderCache[L]=void 0),xe&256){R.ctx.deactivate(A);return}const V=xe&1&&g,te=!Br(A);let k;if(te&&(k=H&&H.onVnodeBeforeUnmount)&&Mn(k,R,A),xe&6)he(A.component,v,ne);else{if(xe&128){A.suspense.unmount(v,ne);return}V&&xi(A,null,R,"beforeUnmount"),xe&64?A.type.remove(A,R,v,le,ne):Q&&!Q.hasOnce&&(Z!==Ht||S>0&&S&64)?Se(Q,R,v,!1,!0):(Z===Ht&&S&384||!Y&&xe&16)&&Se(J,R,v),ne&&Ke(A)}(te&&(k=H&&H.onVnodeUnmounted)||V)&&Zt(()=>{k&&Mn(k,R,A),V&&xi(A,null,R,"unmounted")},v)},Ke=A=>{const{type:R,el:v,anchor:ne,transition:Y}=A;if(R===Ht){ie(v,ne);return}if(R===Hs){E(A);return}const Z=()=>{r(v),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(A.shapeFlag&1&&Y&&!Y.persisted){const{leave:H,delayLeave:X}=Y,J=()=>H(v,Z);X?X(A.el,Z,J):J()}else Z()},ie=(A,R)=>{let v;for(;A!==R;)v=h(A),r(A),A=v;r(R)},he=(A,R,v)=>{const{bum:ne,scope:Y,job:Z,subTree:H,um:X,m:J,a:Q,parent:xe,slots:{__:S}}=A;pc(J),pc(Q),ne&&Po(ne),xe&&Ve(S)&&S.forEach(g=>{xe.renderCache[g]=void 0}),Y.stop(),Z&&(Z.flags|=8,Oe(H,A,R,v)),X&&Zt(X,R),Zt(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Se=(A,R,v,ne=!1,Y=!1,Z=0)=>{for(let H=Z;H<A.length;H++)Oe(A[H],R,v,ne,Y)},P=A=>{if(A.shapeFlag&6)return P(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=h(A.anchor||A.el),v=R&&R[qd];return v?h(v):R};let W=!1;const ee=(A,R,v)=>{A==null?R._vnode&&Oe(R._vnode,null,null,!0):x(R._vnode||null,A,R,null,null,null,v),R._vnode=A,W||(W=!0,ac(),Mf(),W=!1)},le={p:x,um:Oe,m:Ae,r:Ke,mt:oe,mc:z,pc:B,pbc:y,n:P,o:n};return{render:ee,hydrate:void 0,createApp:dp(ee)}}function Fo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Si({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ep(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Gf(n,e,t=!1){const i=n.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=oi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Gf(o,a)),a.type===So&&(a.el=o.el),a.type===pi&&!a.el&&(a.el=o.el)}}function yp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Wf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wf(e)}function pc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const bp=Symbol.for("v-scx"),Tp=()=>Gn(bp);function zs(n,e,t){return Xf(n,e,t)}function Xf(n,e,t=dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=Nt({},t),l=e&&i||!e&&s!=="post";let c;if(Yr){if(s==="sync"){const d=Tp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=An,d.resume=An,d.pause=An,d}}const u=It;a.call=(d,_,x)=>wn(d,u,_,x);let f=!1;s==="post"?a.scheduler=d=>{Zt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():Ul(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Vd(n,e,a);return Yr&&(c?c.push(h):l&&h()),h}function Ap(n,e,t){const i=this.proxy,r=bt(n)?n.includes(".")?qf(i,n):()=>i[n]:n.bind(i,i);let s;qe(e)?s=e:(s=e.handler,t=e);const o=ns(this),a=Xf(r,s.bind(i),t);return o(),a}function qf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const wp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${on(e)}Modifiers`]||n[`${Bi(e)}Modifiers`];function Rp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let r=t;const s=e.startsWith("update:"),o=s&&wp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>bt(u)?u.trim():u)),o.number&&(r=t.map(ld)));let a,l=i[a=Co(e)]||i[a=Co(on(e))];!l&&s&&(l=i[a=Co(Bi(e))]),l&&wn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,wn(c,n,6,r)}}function Yf(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Yf(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(vt(n)&&i.set(n,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Nt(o,s),vt(n)&&i.set(n,o),o)}function xo(n,e){return!n||!oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,Bi(e))||rt(n,e))}function mc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:x}=n,m=Js(n);let p,w;try{if(t.shapeFlag&4){const E=r||i,N=E;p=yn(c.call(N,E,u,f,d,h,_)),w=a}else{const E=e;p=yn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),w=e.props?a:Cp(a)}}catch(E){Hr.length=0,mo(E,n,1),p=tt(pi)}let T=p;if(w&&x!==!1){const E=Object.keys(w),{shapeFlag:N}=T;E.length&&N&7&&(s&&E.some(bl)&&(w=Pp(w,s)),T=dr(T,w,!1,!0))}return t.dirs&&(T=dr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Nl(T,t.transition),p=T,Js(m),p}const Cp=n=>{let e;for(const t in n)(t==="class"||t==="style"||oo(t))&&((e||(e={}))[t]=n[t]);return e},Pp=(n,e)=>{const t={};for(const i in n)(!bl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Dp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?gc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!xo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gc(i,o,c):!0:!!o;return!1}function gc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!xo(t,s))return!0}return!1}function Lp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const $f=n=>n.__isSuspense;function Ip(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):Xd(n)}const Ht=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),pi=Symbol.for("v-cmt"),Hs=Symbol.for("v-stc"),Hr=[];let Qt=null;function We(n=!1){Hr.push(Qt=n?null:[])}function Up(){Hr.pop(),Qt=Hr[Hr.length-1]||null}let qr=1;function _c(n,e=!1){qr+=n,n<0&&Qt&&e&&(Qt.hasOnce=!0)}function jf(n){return n.dynamicChildren=qr>0?Qt||rr:null,Up(),qr>0&&Qt&&Qt.push(n),n}function $e(n,e,t,i,r,s){return jf(we(n,e,t,i,r,s,!0))}function wa(n,e,t,i,r){return jf(tt(n,e,t,i,r,!0))}function to(n){return n?n.__v_isVNode===!0:!1}function Tr(n,e){return n.type===e.type&&n.key===e.key}const Kf=({key:n})=>n??null,ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?bt(n)||Ut(n)||qe(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function we(n,e=null,t=null,i=0,r=null,s=n===Ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Kf(e),ref:e&&ks(e),scopeId:yf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mn};return a?(Bl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=bt(t)?8:16),qr>0&&!o&&Qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Qt.push(l),l}const tt=Np;function Np(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Pf)&&(n=pi),to(n)){const a=dr(n,e,!0);return t&&Bl(a,t),qr>0&&!s&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(n)]=a:Qt.push(a)),a.patchFlag=-2,a}if(qp(n)&&(n=n.__vccOpts),e){e=Fp(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=fo(a)),vt(l)&&(Il(l)&&!Ve(l)&&(l=Nt({},l)),e.style=es(l))}const o=bt(n)?1:$f(n)?128:Yd(n)?64:vt(n)?4:qe(n)?2:0;return we(n,e,t,i,r,o,s,!0)}function Fp(n){return n?Il(n)||Of(n)?Nt({},n):n:null}function dr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Sn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Kf(c),ref:e&&e.ref?t&&s?Ve(s)?s.concat(ks(e)):[s,ks(e)]:ks(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ht?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&dr(n.ssContent),ssFallback:n.ssFallback&&dr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Nl(u,l.clone(u)),u}function Op(n=" ",e=0){return tt(So,null,n,e)}function Ra(n,e){const t=tt(Hs,null,n);return t.staticCount=e,t}function hn(n="",e=!1){return e?(We(),wa(pi,null,n)):tt(pi,null,n)}function yn(n){return n==null||typeof n=="boolean"?tt(pi):Ve(n)?tt(Ht,null,n.slice()):to(n)?oi(n):tt(So,null,String(n))}function oi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:dr(n)}function Bl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Bl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Of(e)?e._ctx=mn:r===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:mn},t=32):(e=String(e),i&64?(t=16,e=[Op(e)]):t=8);n.children=e,n.shapeFlag|=t}function Sn(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=fo([e.class,i.class]));else if(r==="style")e.style=es([e.style,i.style]);else if(oo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){wn(n,e,7,[t,i])}const Bp=Uf();let zp=0;function Hp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Bp,s={uid:zp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(i,r),emitsOptions:Yf(i,r),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Rp.bind(null,s),n.ce&&n.ce(s),s}let It=null,no,Ca;{const n=uo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};no=e("__VUE_INSTANCE_SETTERS__",t=>It=t),Ca=e("__VUE_SSR_SETTERS__",t=>Yr=t)}const ns=n=>{const e=It;return no(n),n.scope.on(),()=>{n.scope.off(),no(e)}},vc=()=>{It&&It.scope.off(),no(null)};function Zf(n){return n.vnode.shapeFlag&4}let Yr=!1;function kp(n,e=!1,t=!1){e&&Ca(e);const{props:i,children:r}=n.vnode,s=Zf(n);pp(n,i,s,e),vp(n,r,t||e);const o=s?Vp(n,e):void 0;return e&&Ca(!1),o}function Vp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,op);const{setup:i}=t;if(i){Xn();const r=n.setupContext=i.length>1?Wp(n):null,s=ns(n),o=ts(i,n,0,[n.props,r]),a=qu(o);if(qn(),s(),(a||n.sp)&&!Br(n)&&Tf(n),a){if(o.then(vc,vc),e)return o.then(l=>{xc(n,l)}).catch(l=>{mo(l,n,0)});n.asyncDep=o}else xc(n,o)}else Jf(n)}function xc(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=_f(e)),Jf(n)}function Jf(n,e,t){const i=n.type;n.render||(n.render=i.render||An);{const r=ns(n);Xn();try{ap(n)}finally{qn(),r()}}}const Gp={get(n,e){return Lt(n,"get",""),n[e]}};function Wp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gp),slots:n.slots,emit:n.emit,expose:e}}function zl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_f(Nd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zr)return zr[t](n)},has(e,t){return t in e||t in zr}})):n.proxy}function Xp(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function qp(n){return qe(n)&&"__vccOpts"in n}const Mt=(n,e)=>Hd(n,e,Yr);function Qf(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Ve(e)?to(e)?tt(n,null,[e]):tt(n,e):tt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&to(t)&&(t=[t]),tt(n,e,t))}const Yp="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pa;const Sc=typeof window<"u"&&window.trustedTypes;if(Sc)try{Pa=Sc.createPolicy("vue",{createHTML:n=>n})}catch{}const eh=Pa?n=>Pa.createHTML(n):n=>n,$p="http://www.w3.org/2000/svg",jp="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Mc=On&&On.createElement("template"),Kp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?On.createElementNS($p,n):e==="mathml"?On.createElementNS(jp,n):t?On.createElement(n,{is:t}):On.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>On.createTextNode(n),createComment:n=>On.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>On.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Mc.innerHTML=eh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Mc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Zp=Symbol("_vtc");function Jp(n,e,t){const i=n[Zp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ec=Symbol("_vod"),Qp=Symbol("_vsh"),em=Symbol(""),tm=/(^|;)\s*display\s*:/;function nm(n,e,t){const i=n.style,r=bt(t);let s=!1;if(t&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vs(i,a,"")}else for(const o in e)t[o]==null&&Vs(i,o,"");for(const o in t)o==="display"&&(s=!0),Vs(i,o,t[o])}else if(r){if(e!==t){const o=i[em];o&&(t+=";"+o),i.cssText=t,s=tm.test(t)}}else e&&n.removeAttribute("style");Ec in n&&(n[Ec]=s?i.display:"",n[Qp]&&(i.display="none"))}const yc=/\s*!important$/;function Vs(n,e,t){if(Ve(t))t.forEach(i=>Vs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=im(n,e);yc.test(t)?n.setProperty(Bi(i),t.replace(yc,""),"important"):n[i]=t}}const bc=["Webkit","Moz","ms"],Oo={};function im(n,e){const t=Oo[e];if(t)return t;let i=on(e);if(i!=="filter"&&i in n)return Oo[e]=i;i=co(i);for(let r=0;r<bc.length;r++){const s=bc[r]+i;if(s in n)return Oo[e]=s}return e}const Tc="http://www.w3.org/1999/xlink";function Ac(n,e,t,i,r,s=pd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tc,e.slice(6,e.length)):n.setAttributeNS(Tc,e,t):t==null||s&&!Ku(t)?n.removeAttribute(e):n.setAttribute(e,s?"":gi(t)?String(t):t)}function wc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?eh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Ku(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function rm(n,e,t,i){n.addEventListener(e,t,i)}function sm(n,e,t,i){n.removeEventListener(e,t,i)}const Rc=Symbol("_vei");function om(n,e,t,i,r=null){const s=n[Rc]||(n[Rc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=am(e);if(i){const c=s[e]=um(i,r);rm(n,a,c,l)}else o&&(sm(n,a,o,l),s[e]=void 0)}}const Cc=/(?:Once|Passive|Capture)$/;function am(n){let e;if(Cc.test(n)){e={};let i;for(;i=n.match(Cc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bi(n.slice(2)),e]}let Bo=0;const lm=Promise.resolve(),cm=()=>Bo||(lm.then(()=>Bo=0),Bo=Date.now());function um(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wn(fm(i,t.value),e,5,[i])};return t.value=n,t.attached=cm(),t}function fm(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,hm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Jp(n,i,o):e==="style"?nm(n,t,i):oo(e)?bl(e)||om(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dm(n,e,i,o))?(wc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ac(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?wc(n,on(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ac(n,e,i,o))};function dm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Pc(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pc(e)&&bt(t)?!1:e in n}const pm=Nt({patchProp:hm},Kp);let Dc;function mm(){return Dc||(Dc=Sp(pm))}const gm=(...n)=>{const e=mm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vm(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,_m(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function _m(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vm(n){return bt(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const nr=typeof document<"u";function xm(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ot=Object.assign;function zo(n,e){const t={};for(const i in e){const r=e[i];t[i]=xn(r)?r.map(n):n(r)}return t}const kr=()=>{},xn=Array.isArray,th=/#/g,Sm=/&/g,Mm=/\//g,Em=/=/g,ym=/\?/g,nh=/\+/g,bm=/%5B/g,Tm=/%5D/g,ih=/%5E/g,Am=/%60/g,rh=/%7B/g,wm=/%7C/g,sh=/%7D/g,Rm=/%20/g;function Hl(n){return encodeURI(""+n).replace(wm,"|").replace(bm,"[").replace(Tm,"]")}function Cm(n){return Hl(n).replace(rh,"{").replace(sh,"}").replace(ih,"^")}function Da(n){return Hl(n).replace(nh,"%2B").replace(Rm,"+").replace(th,"%23").replace(Sm,"%26").replace(Am,"`").replace(rh,"{").replace(sh,"}").replace(ih,"^")}function Pm(n){return Da(n).replace(Em,"%3D")}function Dm(n){return Hl(n).replace(th,"%23").replace(ym,"%3F")}function Lm(n){return n==null?"":Dm(n).replace(Mm,"%2F")}function $r(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Im=/\/$/,Um=n=>n.replace(Im,"");function Ho(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Bm(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:$r(o)}}function Nm(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Lc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Fm(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&pr(e.matched[i],t.matched[r])&&oh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function pr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function oh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Om(n[t],e[t]))return!1;return!0}function Om(n,e){return xn(n)?Ic(n,e):xn(e)?Ic(e,n):n===e}function Ic(n,e){return xn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Bm(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var jr;(function(n){n.pop="pop",n.push="push"})(jr||(jr={}));var Vr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vr||(Vr={}));function zm(n){if(!n)if(nr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Um(n)}const Hm=/^[^#]+#/;function km(n,e){return n.replace(Hm,"#")+e}function Vm(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Mo=()=>({left:window.scrollX,top:window.scrollY});function Gm(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Vm(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Uc(n,e){return(history.state?history.state.position-e:-1)+n}const La=new Map;function Wm(n,e){La.set(n,e)}function Xm(n){const e=La.get(n);return La.delete(n),e}let qm=()=>location.protocol+"//"+location.host;function ah(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Lc(l,"")}return Lc(t,n)+i+r}function Ym(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=ah(n,location),_=t.value,x=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=x?h.position-x.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:jr.pop,direction:m?m>0?Vr.forward:Vr.back:Vr.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:Mo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Nc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Mo():null}}function $m(n){const{history:e,location:t}=window,i={value:ah(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:qm()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,Nc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:Mo()});s(u.current,u,!0);const f=ot({},Nc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function jm(n){n=zm(n);const e=$m(n),t=Ym(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:n,go:i,createHref:km.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Km(n){return typeof n=="string"||n&&typeof n=="object"}function lh(n){return typeof n=="string"||typeof n=="symbol"}const ch=Symbol("");var Fc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Fc||(Fc={}));function mr(n,e){return ot(new Error,{type:n,[ch]:!0},e)}function Pn(n,e){return n instanceof Error&&ch in n&&(e==null||!!(n.type&e))}const Oc="[^/]+?",Zm={sensitive:!1,strict:!1,start:!0,end:!0},Jm=/[.+*?^${}()[\]/\\]/g;function Qm(n,e){const t=ot({},Zm,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(Jm,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=h;s.push({name:_,repeatable:x,optional:m});const w=p||Oc;if(w!==Oc){d+=10;try{new RegExp(`(${w})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+E.message)}}let T=x?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,d+=20,m&&(d+=-8),x&&(d+=-20),w===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:x,optional:m}=d,p=_ in c?c[_]:"";if(xn(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=xn(p)?p.join("/"):p;if(!w)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function eg(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uh(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=eg(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Bc(i))return 1;if(Bc(r))return-1}return r.length-i.length}function Bc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const tg={type:0,value:""},ng=/[a-zA-Z0-9_]/;function ig(n){if(!n)return[[]];if(n==="/")return[[tg]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:ng.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function rg(n,e,t){const i=Qm(ig(n.path),t),r=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sg(n,e){const t=[],i=new Map;e=kc({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,x=og(f);x.aliasOf=d&&d.record;const m=kc(e,f),p=[x];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const N of E)p.push(ot({},x,{components:d?d.record.components:x.components,path:N,aliasOf:d?d.record:x}))}let w,T;for(const E of p){const{path:N}=E;if(h&&N[0]!=="/"){const D=h.record.path,C=D[D.length-1]==="/"?"":"/";E.path=h.record.path+(N&&C+N)}if(w=rg(E,h,m),d?d.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),_&&f.name&&!Hc(w)&&o(f.name)),fh(w)&&l(w),x.children){const D=x.children;for(let C=0;C<D.length;C++)s(D[C],w,d&&d.children[C])}d=d||w}return T?()=>{o(T)}:kr}function o(f){if(lh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=cg(f,t);t.splice(h,0,f),f.record.name&&!Hc(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},x,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw mr(1,{location:f});m=d.record.name,_=ot(zc(h.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&zc(f.params,d.keys.map(T=>T.name))),x=d.stringify(_)}else if(f.path!=null)x=f.path,d=t.find(T=>T.re.test(x)),d&&(_=d.parse(x),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!d)throw mr(1,{location:f,currentLocation:h});m=d.record.name,_=ot({},h.params,f.params),x=d.stringify(_)}const p=[];let w=d;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:x,params:_,matched:p,meta:lg(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function zc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function og(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:ag(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function ag(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Hc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lg(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function kc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function cg(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;uh(n,e[s])<0?i=s:t=s+1}const r=ug(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function ug(n){let e=n;for(;e=e.parent;)if(fh(e)&&uh(n,e)===0)return e}function fh({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function fg(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(nh," "),o=s.indexOf("="),a=$r(o<0?s:s.slice(0,o)),l=o<0?null:$r(s.slice(o+1));if(a in e){let c=e[a];xn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Vc(n){let e="";for(let t in n){const i=n[t];if(t=Pm(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(xn(i)?i.map(s=>s&&Da(s)):[i&&Da(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function hg(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=xn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const dg=Symbol(""),Gc=Symbol(""),kl=Symbol(""),hh=Symbol(""),Ia=Symbol("");function Ar(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ai(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(mr(4,{from:t,to:e})):h instanceof Error?l(h):Km(h)?l(mr(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function ko(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(pg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ai(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=xm(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ai(d,t,i,o,a,r)()}))}}return s}function pg(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Wc(n){const e=Gn(kl),t=Gn(hh),i=Mt(()=>{const l=ht(n.to);return e.resolve(l)}),r=Mt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(pr.bind(null,u));if(h>-1)return h;const d=Xc(l[c-2]);return c>1&&Xc(u)===d&&f[f.length-1].path!==d?f.findIndex(pr.bind(null,l[c-2])):h}),s=Mt(()=>r.value>-1&&vg(t.params,i.value.params)),o=Mt(()=>r.value>-1&&r.value===t.matched.length-1&&oh(t.params,i.value.params));function a(l={}){return _g(l)?e[ht(n.replace)?"replace":"push"](ht(n.to)).catch(kr):Promise.resolve()}return{route:i,href:Mt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const mg=an({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Wc,setup(n,{slots:e}){const t=po(Wc(n)),{options:i}=Gn(kl),r=Mt(()=>({[qc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[qc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Qf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),gg=mg;function _g(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function vg(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!xn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Xc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const qc=(n,e,t)=>n??e??t,xg=an({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(Ia),r=Mt(()=>n.route||i.value),s=Gn(Gc,0),o=Mt(()=>{let c=ht(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Mt(()=>r.value.matched[o.value]);Bs(Gc,Mt(()=>o.value+1)),Bs(dg,a),Bs(Ia,r);const l=hr();return zs(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!pr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Yc(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Qf(h,ot({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Yc(t.default,{Component:m,route:c})||m}}});function Yc(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Sg=xg;function Mg(n){const e=sg(n.routes,n),t=n.parseQuery||fg,i=n.stringifyQuery||Vc,r=n.history,s=Ar(),o=Ar(),a=Ar(),l=Fd(Jn);let c=Jn;nr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zo.bind(null,P=>""+P),f=zo.bind(null,Lm),h=zo.bind(null,$r);function d(P,W){let ee,le;return lh(P)?(ee=e.getRecordMatcher(P),le=W):le=P,e.addRoute(le,ee)}function _(P){const W=e.getRecordMatcher(P);W&&e.removeRoute(W)}function x(){return e.getRoutes().map(P=>P.record)}function m(P){return!!e.getRecordMatcher(P)}function p(P,W){if(W=ot({},W||l.value),typeof P=="string"){const v=Ho(t,P,W.path),ne=e.resolve({path:v.path},W),Y=r.createHref(v.fullPath);return ot(v,ne,{params:h(ne.params),hash:$r(v.hash),redirectedFrom:void 0,href:Y})}let ee;if(P.path!=null)ee=ot({},P,{path:Ho(t,P.path,W.path).path});else{const v=ot({},P.params);for(const ne in v)v[ne]==null&&delete v[ne];ee=ot({},P,{params:f(v)}),W.params=f(W.params)}const le=e.resolve(ee,W),Fe=P.hash||"";le.params=u(h(le.params));const A=Nm(i,ot({},P,{hash:Cm(Fe),path:le.path})),R=r.createHref(A);return ot({fullPath:A,hash:Fe,query:i===Vc?hg(P.query):P.query||{}},le,{redirectedFrom:void 0,href:R})}function w(P){return typeof P=="string"?Ho(t,P,l.value.path):ot({},P)}function T(P,W){if(c!==P)return mr(8,{from:W,to:P})}function E(P){return C(P)}function N(P){return E(ot(w(P),{replace:!0}))}function D(P){const W=P.matched[P.matched.length-1];if(W&&W.redirect){const{redirect:ee}=W;let le=typeof ee=="function"?ee(P):ee;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=w(le):{path:le},le.params={}),ot({query:P.query,hash:P.hash,params:le.path!=null?{}:P.params},le)}}function C(P,W){const ee=c=p(P),le=l.value,Fe=P.state,A=P.force,R=P.replace===!0,v=D(ee);if(v)return C(ot(w(v),{state:typeof v=="object"?ot({},Fe,v.state):Fe,force:A,replace:R}),W||ee);const ne=ee;ne.redirectedFrom=W;let Y;return!A&&Fm(i,le,ee)&&(Y=mr(16,{to:ne,from:le}),Ae(le,le,!0,!1)),(Y?Promise.resolve(Y):y(ne,le)).catch(Z=>Pn(Z)?Pn(Z,2)?Z:_e(Z):B(Z,ne,le)).then(Z=>{if(Z){if(Pn(Z,2))return C(ot({replace:R},w(Z.to),{state:typeof Z.to=="object"?ot({},Fe,Z.to.state):Fe,force:A}),W||ne)}else Z=se(ne,le,!0,R,Fe);return I(ne,le,Z),Z})}function z(P,W){const ee=T(P,W);return ee?Promise.reject(ee):Promise.resolve()}function b(P){const W=ie.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(P):P()}function y(P,W){let ee;const[le,Fe,A]=Eg(P,W);ee=ko(le.reverse(),"beforeRouteLeave",P,W);for(const v of le)v.leaveGuards.forEach(ne=>{ee.push(ai(ne,P,W))});const R=z.bind(null,P,W);return ee.push(R),Se(ee).then(()=>{ee=[];for(const v of s.list())ee.push(ai(v,P,W));return ee.push(R),Se(ee)}).then(()=>{ee=ko(Fe,"beforeRouteUpdate",P,W);for(const v of Fe)v.updateGuards.forEach(ne=>{ee.push(ai(ne,P,W))});return ee.push(R),Se(ee)}).then(()=>{ee=[];for(const v of A)if(v.beforeEnter)if(xn(v.beforeEnter))for(const ne of v.beforeEnter)ee.push(ai(ne,P,W));else ee.push(ai(v.beforeEnter,P,W));return ee.push(R),Se(ee)}).then(()=>(P.matched.forEach(v=>v.enterCallbacks={}),ee=ko(A,"beforeRouteEnter",P,W,b),ee.push(R),Se(ee))).then(()=>{ee=[];for(const v of o.list())ee.push(ai(v,P,W));return ee.push(R),Se(ee)}).catch(v=>Pn(v,8)?v:Promise.reject(v))}function I(P,W,ee){a.list().forEach(le=>b(()=>le(P,W,ee)))}function se(P,W,ee,le,Fe){const A=T(P,W);if(A)return A;const R=W===Jn,v=nr?history.state:{};ee&&(le||R?r.replace(P.fullPath,ot({scroll:R&&v&&v.scroll},Fe)):r.push(P.fullPath,Fe)),l.value=P,Ae(P,W,ee,R),_e()}let q;function oe(){q||(q=r.listen((P,W,ee)=>{if(!he.listening)return;const le=p(P),Fe=D(le);if(Fe){C(ot(Fe,{replace:!0}),le).catch(kr);return}c=le;const A=l.value;nr&&Wm(Uc(A.fullPath,ee.delta),Mo()),y(le,A).catch(R=>Pn(R,12)?R:Pn(R,2)?(C(R.to,le).then(v=>{Pn(v,20)&&!ee.delta&&ee.type===jr.pop&&r.go(-1,!1)}).catch(kr),Promise.reject()):(ee.delta&&r.go(-ee.delta,!1),B(R,le,A))).then(R=>{R=R||se(le,A,!1),R&&(ee.delta&&!Pn(R,8)?r.go(-ee.delta,!1):ee.type===jr.pop&&Pn(R,20)&&r.go(-1,!1)),I(le,A,R)}).catch(kr)}))}let re=Ar(),G=Ar(),ae;function B(P,W,ee){_e(P);const le=G.list();return le.length?le.forEach(Fe=>Fe(P,W,ee)):console.error(P),Promise.reject(P)}function ge(){return ae&&l.value!==Jn?Promise.resolve():new Promise((P,W)=>{re.add([P,W])})}function _e(P){return ae||(ae=!P,oe(),re.list().forEach(([W,ee])=>P?ee(P):W()),re.reset()),P}function Ae(P,W,ee,le){const{scrollBehavior:Fe}=n;if(!nr||!Fe)return Promise.resolve();const A=!ee&&Xm(Uc(P.fullPath,0))||(le||!ee)&&history.state&&history.state.scroll||null;return xf().then(()=>Fe(P,W,A)).then(R=>R&&Gm(R)).catch(R=>B(R,P,W))}const Oe=P=>r.go(P);let Ke;const ie=new Set,he={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:E,replace:N,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:ge,install(P){const W=this;P.component("RouterLink",gg),P.component("RouterView",Sg),P.config.globalProperties.$router=W,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),nr&&!Ke&&l.value===Jn&&(Ke=!0,E(r.location).catch(Fe=>{}));const ee={};for(const Fe in Jn)Object.defineProperty(ee,Fe,{get:()=>l.value[Fe],enumerable:!0});P.provide(kl,W),P.provide(hh,pf(ee)),P.provide(Ia,l);const le=P.unmount;ie.add(P),P.unmount=function(){ie.delete(P),ie.size<1&&(c=Jn,q&&q(),q=null,l.value=Jn,Ke=!1,ae=!1),le()}}};function Se(P){return P.reduce((W,ee)=>W.then(()=>b(ee)),Promise.resolve())}return he}function Eg(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>pr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>pr(c,l))||r.push(l))}return[t,i,r]}const Eo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},yg=["width","height"],bg=we("title",null,"Facebook",-1),Tg=we("path",{d:"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"},null,-1),Ag=[bg,Tg],wg=an({__name:"FacebookIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Ag,16,yg))}}),Rg=["width","height"],Cg=we("title",null,"GitHub",-1),Pg=we("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),Dg=[Cg,Pg],dh=an({__name:"GitHubIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Dg,16,Rg))}}),Lg=["width","height"],Ig=we("title",null,"Gmail",-1),Ug=we("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},null,-1),Ng=[Ig,Ug],Fg=an({__name:"GmailIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Ng,16,Lg))}}),Og=["width","height"],Bg=we("title",null,"Instagram",-1),zg=we("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},null,-1),Hg=[Bg,zg],ph=an({__name:"InstagramIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Hg,16,Og))}}),kg=["width","height"],Vg=we("title",null,"LinkedIn",-1),Gg=we("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},null,-1),Wg=[Vg,Gg],mh=an({__name:"LinkedInIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Wg,16,kg))}}),Xg=["width","height"],qg=we("title",null,"Mail.Ru",-1),Yg=we("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"},null,-1),$g=[qg,Yg],gh=an({__name:"MailDotRuIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),$g,16,Xg))}}),jg=["width","height"],Kg=we("title",null,"Mastodon",-1),Zg=we("path",{d:"M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"},null,-1),Jg=[Kg,Zg],Qg=an({__name:"MastodonIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Jg,16,jg))}}),e_=["width","height"],t_=we("title",null,"Medium",-1),n_=we("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"},null,-1),i_=[t_,n_],r_=an({__name:"MediumIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),i_,16,e_))}}),s_=["width","height"],o_=we("title",null,"X",-1),a_=we("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},null,-1),l_=[o_,a_],_h=an({__name:"XIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),l_,16,s_))}}),c_=["width","height"],u_=we("title",null,"YouTube",-1),f_=we("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),h_=[u_,f_],vh=an({__name:"YouTubeIcon",props:{size:{default:24}},setup(n){const e=n,t=Mt(()=>{const i=ht(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(We(),$e("svg",Sn({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),h_,16,c_))}}),d_={class:"relative flex justify-center"},p_={class:"z-20 mb-8 relative flex flex-col backdrop-blur-2xl bg-black/50 border border-white/10 rounded-4xl p-4 w-full max-w-[1280px] mx-4"},m_={class:"flex justify-center"},g_={class:"px-8 xl:px-8 py-4 w-full max-w-[1280px] flex flex-col items-center text-white"},__={class:"px-2 pt-4 pb-12 grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-x-8 gap-y-12 text-xs font-semibold"},v_={class:"flex flex-col space-y-3 items-start"},x_=["href","target"],S_={class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50 cursor-pointer"},M_={class:"flex flex-col space-y-3 items-start"},E_=["href"],y_=["href"],b_={class:"flex flex-col space-y-3 items-start"},T_=["href"],A_={__name:"Footer",setup(n){const e=[{text:"Let'Swift 뉴스레터 구독하기",url:"https://page.stibee.com/subscriptions/58654",target:"_blank"},{text:"Let'Swift 앱 다운로드",url:"https://apps.apple.com/app/id1282995254",target:"_blank"},{text:"행동지침",url:null,link:"/CodeOfConduct",target:""}],t=[{text:"행사 후원 문의",url:"mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"}],i={MailDotRuIcon:gh,GitHubIcon:dh,XIcon:_h,InstagramIcon:ph,YouTubeIcon:vh,LinkedInIcon:mh},r=[{name:"Email",image:"MailDotRuIcon",url:"mailto:letswift.official@gmail.com"},{name:"YouTube",image:"YouTubeIcon",url:"https://youtube.com/playlist?list=PLAHa1zfLtLiPY9gDxRwhNDbYZvjFKiurH&si=-Zft8ebxkt-65x4J"},{name:"LinkedIn",image:"LinkedInIcon",url:"https://www.linkedin.com/company/letswift"},{name:"Instagram",image:"InstagramIcon",url:"https://www.instagram.com/letswiftkr"},{name:"𝕏",image:"XIcon",url:"https://x.com/letswiftkr"},{name:"GitHub",image:"GitHubIcon",url:"https://github.com/letswiftconf"}],s=[{year:2024,url:"https://letswift.kr/2024",overlay_class:"bg-black/30",class:"",text_class:""},{year:2023,url:"https://letswift.kr/2023",overlay_class:"bg-black/30",class:"",text_class:""},{year:2022,url:"https://letswift.kr/2022",overlay_class:"bg-black/30",class:"",text_class:""},{year:2020,url:"https://letswift.kr/2020",overlay_class:"bg-black/30",class:"",text_class:""},{year:2019,url:"https://letswift.kr/2019",overlay_class:"bg-black/30",class:"",text_class:""},{year:2018,url:"https://letswift.kr/2018",overlay_class:"bg-black/30",class:"",text_class:""},{year:2017,url:"https://letswift.kr/2017",overlay_class:"bg-black/50",class:"bg-white",text_class:""},{year:2016,url:"https://letswift.kr/2016",overlay_class:"bg-black/50",class:"bg-white",text_class:""}];return(o,a)=>{const l=Cf("router-link");return We(),$e("div",d_,[we("footer",p_,[we("div",m_,[we("div",g_,[a[3]||(a[3]=Ra('<div class="px-2 flex grow w-full"><div class="text-lg font-bold text-zinc-200 select-none">Let&#39;Swift <span class="text-rainbow">2025</span></div><div class="grow"></div></div><div class="my-4 h-px w-full bg-white/10"></div>',2)),we("div",__,[we("div",v_,[(We(),$e(Ht,null,Lr(e,c=>we("div",{key:c.text},[c.url!==null?(We(),$e("a",{key:0,href:c.url,target:c.target,class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},Jt(c.text),9,x_)):(We(),wa(l,{key:1,to:c.link},{default:bf(()=>[we("span",S_,Jt(c.text),1)]),_:2},1032,["to"]))])),64))]),we("div",M_,[a[0]||(a[0]=we("div",{class:"font-bold text-zinc-200"},"후원",-1)),(We(),$e(Ht,null,Lr(t,c=>we("div",{key:c.text},[we("a",{href:c.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},Jt(c.text),9,E_)])),64)),a[1]||(a[1]=we("div",{class:"pt-4 font-bold text-zinc-200"},"소식",-1)),(We(),$e(Ht,null,Lr(r,c=>we("div",{key:c.name},[we("a",{href:c.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(We(),wa(sp(i[c.image]),{fill:"gray",width:"10",height:"10"})),we("span",null,Jt(c.name),1)],8,y_)])),64))]),we("div",b_,[a[2]||(a[2]=we("div",null,"이전 행사",-1)),(We(),$e(Ht,null,Lr(s,c=>we("div",{key:c.text},[we("a",{href:c.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},Jt(c.year),9,T_)])),64))])]),a[4]||(a[4]=Ra('<div class="my-4 h-px w-full bg-white/10"></div><div class="px-2 w-full text-xs lg:flex lg:space-x-2 space-y-2 lg:space-y-0"><div><span class="text-zinc-400/80">Copyright © 2025 </span><span class="font-semibold text-zinc-200">Let&#39;Swift.</span><span class="text-zinc-400/80"> All rights reserved.</span></div></div>',2))])])])])}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="178",w_=0,$c=1,R_=2,xh=1,C_=2,Fn=3,mi=0,Wt=1,zn=2,fi=0,cr=1,Ua=2,jc=3,Kc=4,P_=5,Pi=100,D_=101,L_=102,I_=103,U_=104,N_=200,F_=201,O_=202,B_=203,Na=204,Fa=205,z_=206,H_=207,k_=208,V_=209,G_=210,W_=211,X_=212,q_=213,Y_=214,Oa=0,Ba=1,za=2,gr=3,Ha=4,ka=5,Va=6,Ga=7,Sh=0,$_=1,j_=2,hi=0,K_=1,Z_=2,J_=3,Q_=4,e0=5,t0=6,n0=7,Mh=300,_r=301,vr=302,Wa=303,Xa=304,yo=306,qa=1e3,Li=1001,Ya=1002,vn=1003,i0=1004,ps=1005,Tn=1006,Vo=1007,Ii=1008,Yn=1009,Eh=1010,yh=1011,Kr=1012,Gl=1013,Fi=1014,Hn=1015,is=1016,Wl=1017,Xl=1018,Zr=1020,bh=35902,Th=1021,Ah=1022,gn=1023,Jr=1026,Qr=1027,wh=1028,ql=1029,Rh=1030,Yl=1031,$l=1033,Gs=33776,Ws=33777,Xs=33778,qs=33779,$a=35840,ja=35841,Ka=35842,Za=35843,Ja=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,fl=37818,hl=37819,dl=37820,pl=37821,Ys=36492,ml=36494,gl=36495,Ch=36283,_l=36284,vl=36285,xl=36286,r0=3200,s0=3201,o0=0,a0=1,ci="",rn="srgb",xr="srgb-linear",io="linear",ct="srgb",ki=7680,Zc=519,l0=512,c0=513,u0=514,Ph=515,f0=516,h0=517,d0=518,p0=519,Jc=35044,Qc="300 es",kn=2e3,ro=2001;class Mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=Math.PI/180,Sl=180/Math.PI;function rs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function m0(n,e){return(n%e+e)%e}function Wo(n,e,t){return(1-t)*n+t*e}function wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*x,w=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const N=Math.sqrt(T),D=Math.atan2(N,p*w);m=Math.sin(m*D)/N,a=Math.sin(a*D)/N}const E=a*w;if(l=l*m+h*E,c=c*m+d*E,u=u*m+_*E,f=f*m+x*E,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=N,c*=N,u*=N,f*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new j,eu=new ss;class Ye{constructor(e,t,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],w=r[1],T=r[4],E=r[7],N=r[2],D=r[5],C=r[8];return s[0]=o*x+a*w+l*N,s[3]=o*m+a*T+l*D,s[6]=o*p+a*E+l*C,s[1]=c*x+u*w+f*N,s[4]=c*m+u*T+f*D,s[7]=c*p+u*E+f*C,s[2]=h*x+d*w+_*N,s[5]=h*m+d*T+_*D,s[8]=h*p+d*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Ye;function Dh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function so(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function g0(){const n=so("canvas");return n.style.display="block",n}const tu={};function ur(n){n in tu||(tu[n]=!0,console.warn(n))}function _0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function v0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S0(){const n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ci?io:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:e,whitePoint:i,transfer:io,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const et=S0();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class M0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vi===void 0&&(Vi=so("canvas")),Vi.width=e.width,Vi.height=e.height;const r=Vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=so("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yo(r[o].image)):s.push(Yo(r[o]))}else s=Yo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?M0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y0=0;const $o=new j;class Xt extends Mr{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Li,r=Li,s=Tn,o=Ii,a=gn,l=Yn,c=Xt.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=rs(),this.name="",this.source=new jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Mh;Xt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,E=(d+1)/2,N=(p+1)/2,D=(u+h)/4,C=(f+x)/4,z=(_+m)/4;return T>E&&T>N?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=D/i,s=C/i):E>N?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=z/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=C/s,r=z/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-x)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Xt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends b0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lh extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ms.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ms.copy(i.boundingBox)),ms.applyMatrix4(e.matrixWorld),this.union(ms)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),gs.subVectors(this.max,Rr),Gi.subVectors(e.a,Rr),Wi.subVectors(e.b,Rr),Xi.subVectors(e.c,Rr),Qn.subVectors(Wi,Gi),ei.subVectors(Xi,Wi),Mi.subVectors(Gi,Xi);let t=[0,-Qn.z,Qn.y,0,-ei.z,ei.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ei.z,0,-ei.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ei.y,ei.x,0,-Mi.y,Mi.x,0];return!jo(t,Gi,Wi,Xi,gs)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Gi,Wi,Xi,gs))?!1:(_s.crossVectors(Qn,ei),t=[_s.x,_s.y,_s.z],jo(t,Gi,Wi,Xi,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new j,new j,new j,new j,new j,new j,new j,new j],cn=new j,ms=new os,Gi=new j,Wi=new j,Xi=new j,Qn=new j,ei=new j,Mi=new j,Rr=new j,gs=new j,_s=new j,Ei=new j;function jo(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ei.fromArray(n,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),u=i.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const A0=new os,Cr=new j,Ko=new j;class bo{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):A0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(Ko)),this.expandByPoint(Cr.copy(e.center).sub(Ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ln=new j,Zo=new j,vs=new j,ti=new j,Jo=new j,xs=new j,Qo=new j;class Ih{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zo.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(vs),a=ti.dot(this.direction),l=-ti.dot(vs),c=ti.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zo).addScaledVector(vs,h),d}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){Jo.subVectors(t,e),xs.subVectors(i,e),Qo.crossVectors(Jo,xs);let o=this.direction.dot(Qo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(xs.crossVectors(ti,xs));if(l<0)return null;const c=a*this.direction.dot(Jo.cross(ti));if(c<0||l+c>o)return null;const u=-a*ti.dot(Qo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,R0)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ni.crossVectors(i,jt),ni.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ni.crossVectors(i,jt)),ni.normalize(),Ss.crossVectors(jt,ni),r[0]=ni.x,r[4]=Ss.x,r[8]=jt.x,r[1]=ni.y,r[5]=Ss.y,r[9]=jt.y,r[2]=ni.z,r[6]=Ss.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],w=i[3],T=i[7],E=i[11],N=i[15],D=r[0],C=r[4],z=r[8],b=r[12],y=r[1],I=r[5],se=r[9],q=r[13],oe=r[2],re=r[6],G=r[10],ae=r[14],B=r[3],ge=r[7],_e=r[11],Ae=r[15];return s[0]=o*D+a*y+l*oe+c*B,s[4]=o*C+a*I+l*re+c*ge,s[8]=o*z+a*se+l*G+c*_e,s[12]=o*b+a*q+l*ae+c*Ae,s[1]=u*D+f*y+h*oe+d*B,s[5]=u*C+f*I+h*re+d*ge,s[9]=u*z+f*se+h*G+d*_e,s[13]=u*b+f*q+h*ae+d*Ae,s[2]=_*D+x*y+m*oe+p*B,s[6]=_*C+x*I+m*re+p*ge,s[10]=_*z+x*se+m*G+p*_e,s[14]=_*b+x*q+m*ae+p*Ae,s[3]=w*D+T*y+E*oe+N*B,s[7]=w*C+T*I+E*re+N*ge,s[11]=w*z+T*se+E*G+N*_e,s[15]=w*b+T*q+E*ae+N*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],w=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,T=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,E=u*x*c-_*f*c+_*a*d-o*x*d-u*a*p+o*f*p,N=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,D=t*w+i*T+r*E+s*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=T*C,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=E*C,e[9]=(_*f*s-u*x*s-_*i*d+t*x*d+u*i*p-t*f*p)*C,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=N*C,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*C,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,x=o*u,m=o*f,p=a*f,w=l*c,T=l*u,E=l*f,N=i.x,D=i.y,C=i.z;return r[0]=(1-(x+p))*N,r[1]=(d+E)*N,r[2]=(_-T)*N,r[3]=0,r[4]=(d-E)*D,r[5]=(1-(h+p))*D,r[6]=(m+w)*D,r[7]=0,r[8]=(_+T)*C,r[9]=(m-w)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const c=1/s,u=1/o,f=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(a===kn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ro)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let _,x;if(a===kn)_=(o+s)*f,x=-2*f;else if(a===ro)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new j,un=new yt,w0=new j(0,0,0),R0=new j(1,1,1),ni=new j,Ss=new j,jt=new j,ru=new yt,su=new ss;class $n{constructor(e=0,t=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return su.setFromEuler(this),this.setFromQuaternion(su,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let C0=0;const ou=new j,Yi=new ss,In=new yt,Ms=new j,Pr=new j,P0=new j,D0=new ss,au=new j(1,0,0),lu=new j(0,1,0),cu=new j(0,0,1),uu={type:"added"},L0={type:"removed"},$i={type:"childadded",child:null},ea={type:"childremoved",child:null};class qt extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new j,t=new $n,i=new ss,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ye}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Pr,Ms,this.up):In.lookAt(Ms,Pr,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Yi.setFromRotationMatrix(In),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L0),ea.child=e,this.dispatchEvent(ea),ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,P0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,D0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new j(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new j,Un=new j,ta=new j,Nn=new j,ji=new j,Ki=new j,fu=new j,na=new j,ia=new j,ra=new j,sa=new Et,oa=new Et,aa=new Et;class pn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Un.subVectors(i,t),ta.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(Un),l=fn.dot(ta),c=Un.dot(Un),u=Un.dot(ta),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return sa.setScalar(0),oa.setScalar(0),aa.setScalar(0),sa.fromBufferAttribute(e,t),oa.fromBufferAttribute(e,i),aa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sa,s.x),o.addScaledVector(oa,s.y),o.addScaledVector(aa,s.z),o}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Un.subVectors(e,t),fn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),fn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ji.subVectors(r,i),Ki.subVectors(s,i),na.subVectors(e,i);const l=ji.dot(na),c=Ki.dot(na);if(l<=0&&c<=0)return t.copy(i);ia.subVectors(e,r);const u=ji.dot(ia),f=Ki.dot(ia);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ji,o);ra.subVectors(e,s);const d=ji.dot(ra),_=Ki.dot(ra);if(_>=0&&d<=_)return t.copy(s);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ki,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return fu.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(fu,a);const p=1/(m+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector(ji,o).addScaledVector(Ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Es={h:0,s:0,l:0};function la(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=m0(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=la(o,s,e+1/3),this.g=la(o,s,e),this.b=la(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return et.workingToColorSpace(Dt.copy(this),e),Math.round(Je(Dt.r*255,0,255))*65536+Math.round(Je(Dt.g*255,0,255))*256+Math.round(Je(Dt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=rn){et.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(Es);const i=Wo(ii.h,Es.h,t),r=Wo(ii.s,Es.s,t),s=Wo(ii.l,Es.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new at;at.NAMES=Nh;let I0=0;class as extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=cr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Fa,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Na&&(i.blendSrc=this.blendSrc),this.blendDst!==Fa&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fh extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new j,ys=new nt;let U0=0;class gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}}class Oh extends gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bh extends gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ni extends gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let N0=0;const nn=new yt,ca=new qt,Zi=new j,Kt=new os,Dr=new os,Rt=new j;class Zn extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Bh:Oh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return ca.lookAt(e),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ni(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Kt.min,Dr.min),Kt.expandByPoint(Rt),Rt.addVectors(Kt.max,Dr.max),Kt.expandByPoint(Rt)):(Kt.expandByPoint(Dr.min),Kt.expandByPoint(Dr.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Zi.fromBufferAttribute(e,c),Rt.add(Zi)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new j,l[z]=new j;const c=new j,u=new j,f=new j,h=new nt,d=new nt,_=new nt,x=new j,m=new j;function p(z,b,y){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,z),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const I=1/(d.x*_.y-_.x*d.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(I),a[z].add(x),a[b].add(x),a[y].add(x),l[z].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,b=w.length;z<b;++z){const y=w[z],I=y.start,se=y.count;for(let q=I,oe=I+se;q<oe;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new j,E=new j,N=new j,D=new j;function C(z){N.fromBufferAttribute(r,z),D.copy(N);const b=a[z];T.copy(b),T.sub(N.multiplyScalar(N.dot(b))).normalize(),E.crossVectors(D,b);const I=E.dot(l[z])<0?-1:1;o.setXYZW(z,T.x,T.y,T.z,I)}for(let z=0,b=w.length;z<b;++z){const y=w[z],I=y.start,se=y.count;for(let q=I,oe=I+se;q<oe;q+=3)C(e.getX(q+0)),C(e.getX(q+1)),C(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new gt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new yt,yi=new Ih,bs=new bo,du=new j,Ts=new j,As=new j,ws=new j,ua=new j,Rs=new j,pu=new j,Cs=new j;class Vn extends qt{constructor(e=new Zn,t=new Fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ua.fromBufferAttribute(f,e),o?Rs.addScaledVector(ua,u):Rs.addScaledVector(ua.sub(t),u))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere),bs.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(bs.containsPoint(yi.origin)===!1&&(yi.intersectSphere(bs,du)===null||yi.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(s).invert(),yi.copy(e.ray).applyMatrix4(hu),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,N=T;E<N;E+=3){const D=a.getX(E),C=a.getX(E+1),z=a.getX(E+2);r=Ps(this,p,e,i,c,u,f,D,C,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const w=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=Ps(this,o,e,i,c,u,f,w,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],w=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=w,N=T;E<N;E+=3){const D=E,C=E+1,z=E+2;r=Ps(this,p,e,i,c,u,f,D,C,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const w=m,T=m+1,E=m+2;r=Ps(this,o,e,i,c,u,f,w,T,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function F0(n,e,t,i,r,s,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===mi,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:n}}function Ps(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ts),n.getVertexPosition(l,As),n.getVertexPosition(c,ws);const u=F0(n,e,t,i,Ts,As,ws,pu);if(u){const f=new j;pn.getBarycoord(pu,Ts,As,ws,f),r&&(u.uv=pn.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=pn.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};pn.getNormal(Ts,As,ws,h.normal),u.face=h,u.barycoord=f}return u}class ls extends Zn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ni(c,3)),this.setAttribute("normal",new Ni(u,3)),this.setAttribute("uv",new Ni(f,2));function _(x,m,p,w,T,E,N,D,C,z,b){const y=E/C,I=N/z,se=E/2,q=N/2,oe=D/2,re=C+1,G=z+1;let ae=0,B=0;const ge=new j;for(let _e=0;_e<G;_e++){const Ae=_e*I-q;for(let Oe=0;Oe<re;Oe++){const Ke=Oe*y-se;ge[x]=Ke*w,ge[m]=Ae*T,ge[p]=oe,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[p]=D>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Oe/C),f.push(1-_e/z),ae+=1}}for(let _e=0;_e<z;_e++)for(let Ae=0;Ae<C;Ae++){const Oe=h+Ae+re*_e,Ke=h+Ae+re*(_e+1),ie=h+(Ae+1)+re*(_e+1),he=h+(Ae+1)+re*_e;l.push(Oe,Ke,he),l.push(Ke,ie,he),B+=6}a.addGroup(d,B,b),d+=B,h+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Sr(n[t]);for(const r in i)e[r]=i[r]}return e}function O0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const B0={clone:Sr,merge:Bt};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new j,mu=new nt,gu=new nt;class dn extends Hh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,mu,gu),t.subVectors(gu,mu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ji=-90,Qi=1;class k0 extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const s=new dn(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const o=new dn(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const a=new dn(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const l=new dn(Ji,Qi,e,t);l.layers=this.layers,this.add(l);const c=new dn(Ji,Qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ro)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kh extends Xt{constructor(e=[],t=_r,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V0 extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ls(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:fi});s.uniforms.tEquirect.value=t;const o=new Vn(r,s),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Tn),new k0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ds extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class W0 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ha=new j,X0=new j,q0=new Ye;class Ri{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ha.subVectors(i,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||q0.getNormalMatrix(e),r=this.coplanarPoint(ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new bo,Y0=new nt(.5,.5),Ls=new j;class Vh{constructor(e=new Ri,t=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],x=r[10],m=r[11],p=r[12],w=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-d,E-p).normalize(),i[1].setComponents(l+s,h+c,m+d,E+p).normalize(),i[2].setComponents(l+o,h+u,m+_,E+w).normalize(),i[3].setComponents(l-o,h-u,m-_,E-w).normalize(),i[4].setComponents(l-a,h-f,m-x,E-T).normalize(),t===kn)i[5].setComponents(l+a,h+f,m+x,E+T).normalize();else if(t===ro)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=Y0.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $0 extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _u=new yt,Ml=new Ih,Is=new bo,Us=new j;class j0 extends qt{constructor(e=new Zn,t=new $0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;_u.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(_u);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=h,x=d;_<x;_++){const m=c.getX(_);Us.fromBufferAttribute(f,m),vu(Us,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let _=h,x=d;_<x;_++)Us.fromBufferAttribute(f,_),vu(Us,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vu(n,e,t,i,r,s,o){const a=Ml.distanceSqToPoint(n);if(a<t){const l=new j;Ml.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gh extends Xt{constructor(e,t,i=Fi,r,s,o,a=vn,l=vn,c,u=Jr,f=1){if(u!==Jr&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class To extends Zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const w=p*h-o;for(let T=0;T<c;T++){const E=T*f-s;_.push(E,-w,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const T=w+c*p,E=w+c*(p+1),N=w+1+c*(p+1),D=w+1+c*p;d.push(T,E,D),d.push(E,N,D)}this.setIndex(d),this.setAttribute("position",new Ni(_,3)),this.setAttribute("normal",new Ni(x,3)),this.setAttribute("uv",new Ni(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.widthSegments,e.heightSegments)}}class K0 extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z0 extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wh extends Hh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class J0 extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function xu(n,e,t,i){const r=Q0(i);switch(t){case Th:return n*e;case wh:return n*e/r.components*r.byteLength;case ql:return n*e/r.components*r.byteLength;case Rh:return n*e*2/r.components*r.byteLength;case Yl:return n*e*2/r.components*r.byteLength;case Ah:return n*e*3/r.components*r.byteLength;case gn:return n*e*4/r.components*r.byteLength;case $l:return n*e*4/r.components*r.byteLength;case Gs:case Ws:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xs:case qs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:case Za:return Math.max(n,16)*Math.max(e,8)/4;case $a:case Ka:return Math.max(n,8)*Math.max(e,8)/2;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ys:case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ch:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q0(n){switch(n){case Yn:case Eh:return{byteLength:1,components:1};case Kr:case yh:case is:return{byteLength:2,components:1};case Wl:case Xl:return{byteLength:2,components:4};case Fi:case Gl:case Hn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ev(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,av=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Av=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$v=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ES=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:sv,alphatest_pars_fragment:ov,aomap_fragment:av,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:fv,beginnormal_vertex:hv,bsdfs:dv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:vv,clipping_planes_vertex:xv,color_fragment:Sv,color_pars_fragment:Mv,color_pars_vertex:Ev,color_vertex:yv,common:bv,cube_uv_reflection_fragment:Tv,defaultnormal_vertex:Av,displacementmap_pars_vertex:wv,displacementmap_vertex:Rv,emissivemap_fragment:Cv,emissivemap_pars_fragment:Pv,colorspace_fragment:Dv,colorspace_pars_fragment:Lv,envmap_fragment:Iv,envmap_common_pars_fragment:Uv,envmap_pars_fragment:Nv,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:Yv,envmap_vertex:Ov,fog_vertex:Bv,fog_pars_vertex:zv,fog_fragment:Hv,fog_pars_fragment:kv,gradientmap_pars_fragment:Vv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Wv,lights_lambert_pars_fragment:Xv,lights_pars_begin:qv,lights_toon_fragment:$v,lights_toon_pars_fragment:jv,lights_phong_fragment:Kv,lights_phong_pars_fragment:Zv,lights_physical_fragment:Jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:ex,lights_fragment_maps:tx,lights_fragment_end:nx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:ox,map_fragment:ax,map_pars_fragment:lx,map_particle_fragment:cx,map_particle_pars_fragment:ux,metalnessmap_fragment:fx,metalnessmap_pars_fragment:hx,morphinstance_vertex:dx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:Sx,normal_pars_vertex:Mx,normal_vertex:Ex,normalmap_pars_fragment:yx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:wx,opaque_fragment:Rx,packing:Cx,premultiplied_alpha_fragment:Px,project_vertex:Dx,dithering_fragment:Lx,dithering_pars_fragment:Ix,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Ox,shadowmap_vertex:Bx,shadowmask_pars_fragment:zx,skinbase_vertex:Hx,skinning_pars_vertex:kx,skinning_vertex:Vx,skinnormal_vertex:Gx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:qx,tonemapping_pars_fragment:Yx,transmission_fragment:$x,transmission_pars_fragment:jx,uv_pars_fragment:Kx,uv_pars_vertex:Zx,uv_vertex:Jx,worldpos_vertex:Qx,background_vert:eS,background_frag:tS,backgroundCube_vert:nS,backgroundCube_frag:iS,cube_vert:rS,cube_frag:sS,depth_vert:oS,depth_frag:aS,distanceRGBA_vert:lS,distanceRGBA_frag:cS,equirect_vert:uS,equirect_frag:fS,linedashed_vert:hS,linedashed_frag:dS,meshbasic_vert:pS,meshbasic_frag:mS,meshlambert_vert:gS,meshlambert_frag:_S,meshmatcap_vert:vS,meshmatcap_frag:xS,meshnormal_vert:SS,meshnormal_frag:MS,meshphong_vert:ES,meshphong_frag:yS,meshphysical_vert:bS,meshphysical_frag:TS,meshtoon_vert:AS,meshtoon_frag:wS,points_vert:RS,points_frag:CS,shadow_vert:PS,shadow_frag:DS,sprite_vert:LS,sprite_frag:IS},Me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},bn={basic:{uniforms:Bt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Bt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new at(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Bt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Bt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Bt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new at(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Bt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Bt([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Bt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Bt([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Bt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Bt([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Bt([Me.common,Me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Bt([Me.lights,Me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};bn.physical={uniforms:Bt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ns={r:0,b:0,g:0},Ti=new $n,US=new yt;function NS(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function x(T){let E=!1;const N=_(T);N===null?p(a,l):N&&N.isColor&&(p(N,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,E){const N=_(E);N&&(N.isCubeTexture||N.mapping===yo)?(u===void 0&&(u=new Vn(new ls(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Sr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ti.copy(E.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(US.makeRotationFromEuler(Ti)),u.material.toneMapped=et.getTransfer(N.colorSpace)!==ct,(f!==N||h!==N.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=N,h=N.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new Vn(new To(2,2),new jn({name:"BackgroundMaterial",uniforms:Sr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=et.getTransfer(N.colorSpace)!==ct,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(f!==N||h!==N.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=N,h=N.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,E){T.getRGB(Ns,zh(n)),i.buffers.color.setClear(Ns.r,Ns.g,Ns.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m,dispose:w}}function FS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,I,se,q,oe){let re=!1;const G=f(q,se,I);s!==G&&(s=G,c(s.object)),re=d(y,q,se,oe),re&&_(y,q,se,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,E(y,I,se,q),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,I,se){const q=se.wireframe===!0;let oe=i[y.id];oe===void 0&&(oe={},i[y.id]=oe);let re=oe[I.id];re===void 0&&(re={},oe[I.id]=re);let G=re[q];return G===void 0&&(G=h(l()),re[q]=G),G}function h(y){const I=[],se=[],q=[];for(let oe=0;oe<t;oe++)I[oe]=0,se[oe]=0,q[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:se,attributeDivisors:q,object:y,attributes:{},index:null}}function d(y,I,se,q){const oe=s.attributes,re=I.attributes;let G=0;const ae=se.getAttributes();for(const B in ae)if(ae[B].location>=0){const _e=oe[B];let Ae=re[B];if(Ae===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),_e===void 0||_e.attribute!==Ae||Ae&&_e.data!==Ae.data)return!0;G++}return s.attributesNum!==G||s.index!==q}function _(y,I,se,q){const oe={},re=I.attributes;let G=0;const ae=se.getAttributes();for(const B in ae)if(ae[B].location>=0){let _e=re[B];_e===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor));const Ae={};Ae.attribute=_e,_e&&_e.data&&(Ae.data=_e.data),oe[B]=Ae,G++}s.attributes=oe,s.attributesNum=G,s.index=q}function x(){const y=s.newAttributes;for(let I=0,se=y.length;I<se;I++)y[I]=0}function m(y){p(y,0)}function p(y,I){const se=s.newAttributes,q=s.enabledAttributes,oe=s.attributeDivisors;se[y]=1,q[y]===0&&(n.enableVertexAttribArray(y),q[y]=1),oe[y]!==I&&(n.vertexAttribDivisor(y,I),oe[y]=I)}function w(){const y=s.newAttributes,I=s.enabledAttributes;for(let se=0,q=I.length;se<q;se++)I[se]!==y[se]&&(n.disableVertexAttribArray(se),I[se]=0)}function T(y,I,se,q,oe,re,G){G===!0?n.vertexAttribIPointer(y,I,se,oe,re):n.vertexAttribPointer(y,I,se,q,oe,re)}function E(y,I,se,q){x();const oe=q.attributes,re=se.getAttributes(),G=I.defaultAttributeValues;for(const ae in re){const B=re[ae];if(B.location>=0){let ge=oe[ae];if(ge===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const _e=ge.normalized,Ae=ge.itemSize,Oe=e.get(ge);if(Oe===void 0)continue;const Ke=Oe.buffer,ie=Oe.type,he=Oe.bytesPerElement,Se=ie===n.INT||ie===n.UNSIGNED_INT||ge.gpuType===Gl;if(ge.isInterleavedBufferAttribute){const P=ge.data,W=P.stride,ee=ge.offset;if(P.isInstancedInterleavedBuffer){for(let le=0;le<B.locationSize;le++)p(B.location+le,P.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let le=0;le<B.locationSize;le++)m(B.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let le=0;le<B.locationSize;le++)T(B.location+le,Ae/B.locationSize,ie,_e,W*he,(ee+Ae/B.locationSize*le)*he,Se)}else{if(ge.isInstancedBufferAttribute){for(let P=0;P<B.locationSize;P++)p(B.location+P,ge.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let P=0;P<B.locationSize;P++)m(B.location+P);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let P=0;P<B.locationSize;P++)T(B.location+P,Ae/B.locationSize,ie,_e,Ae*he,Ae/B.locationSize*P*he,Se)}}else if(G!==void 0){const _e=G[ae];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(B.location,_e);break;case 3:n.vertexAttrib3fv(B.location,_e);break;case 4:n.vertexAttrib4fv(B.location,_e);break;default:n.vertexAttrib1fv(B.location,_e)}}}}w()}function N(){z();for(const y in i){const I=i[y];for(const se in I){const q=I[se];for(const oe in q)u(q[oe].object),delete q[oe];delete I[se]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const se in I){const q=I[se];for(const oe in q)u(q[oe].object),delete q[oe];delete I[se]}delete i[y.id]}function C(y){for(const I in i){const se=i[I];if(se[y.id]===void 0)continue;const q=se[y.id];for(const oe in q)u(q[oe].object),delete q[oe];delete se[y.id]}}function z(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function OS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function BS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const z=C===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hn&&!z)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:N,maxSamples:D}}function zS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ri,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,T=w*4;let E=p.clippingState||null;l.value=E,E=u(_,h,T,d);for(let N=0;N!==T;++N)E[N]=t[N];p.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=d;T!==x;++T,E+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function HS(n){let e=new WeakMap;function t(o,a){return a===Wa?o.mapping=_r:a===Xa&&(o.mapping=vr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new V0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ir=4,Su=[.125,.215,.35,.446,.526,.582],Di=20,da=new Wh,Mu=new at;let pa=null,ma=0,ga=0,_a=!1;const Ci=(1+Math.sqrt(5))/2,er=1/Ci,Eu=[new j(-Ci,er,0),new j(Ci,er,0),new j(-er,0,Ci),new j(er,0,Ci),new j(0,Ci,-er),new j(0,Ci,er),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],kS=new j;class yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=kS}=s;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:is,format:gn,colorSpace:xr,depthBuffer:!1},r=bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VS(s)),this._blurMaterial=GS(s,e,t)}return r}_compileMaterial(e){const t=new Vn(this._lodPlanes[0],e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,i,r,s){const l=new dn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Mu),f.toneMapping=hi,f.autoClear=!1;const _=new Fh({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),x=new Vn(new ls,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Mu),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;Fs(r,T*E,w>2?E:0,E,E),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_r||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,da)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eu[(r-s-1)%Eu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Vn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Di;m>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let w=0;for(let C=0;C<Di;++C){const z=C/x,b=Math.exp(-z*z/2);p.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const E=this._sizeLods[r],N=3*E*(r>T-ir?r-T+ir:0),D=4*(this._cubeSize-E);Fs(t,N,D,3*E,2*E),l.setRenderTarget(t),l.render(f,da)}}function VS(n){const e=[],t=[],i=[];let r=n;const s=n-ir+1+Su.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ir?l=Su[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,m=2,p=1,w=new Float32Array(x*_*d),T=new Float32Array(m*_*d),E=new Float32Array(p*_*d);for(let D=0;D<d;D++){const C=D%3*2/3-1,z=D>2?0:-1,b=[C,z,0,C+2/3,z,0,C+2/3,z+1,0,C,z,0,C+2/3,z+1,0,C,z+1,0];w.set(b,x*_*D),T.set(h,m*_*D);const y=[D,D,D,D,D,D];E.set(y,p*_*D)}const N=new Zn;N.setAttribute("position",new gt(w,x)),N.setAttribute("uv",new gt(T,m)),N.setAttribute("faceIndex",new gt(E,p)),e.push(N),r>ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bu(n,e,t){const i=new Oi(n,e,t);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function GS(n,e,t){const i=new Float32Array(Di),r=new j(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Tu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Au(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===Xa,u=l===_r||l===vr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new yu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new yu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function XS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function qS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const w=d.array;x=d.version;for(let T=0,E=w.length;T<E;T+=3){const N=w[T+0],D=w[T+1],C=w[T+2];h.push(N,D,D,C,C,N)}}else if(_!==void 0){const w=_.array;x=_.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const N=T+0,D=T+1,C=T+2;h.push(N,D,D,C,C,N)}}else return;const m=new(Dh(h)?Bh:Oh)(h,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function YS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,_);let p=0;for(let w=0;w<_;w++)p+=d[w]*x[w];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function $S(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jS(n,e,t){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let E=a.attributes.position.count*T,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*N*4*f),C=new Lh(D,E,N,f);C.type=Hn,C.needsUpdate=!0;const z=T*4;for(let y=0;y<f;y++){const I=m[y],se=p[y],q=w[y],oe=E*N*4*y;for(let re=0;re<I.count;re++){const G=re*z;d===!0&&(r.fromBufferAttribute(I,re),D[oe+G+0]=r.x,D[oe+G+1]=r.y,D[oe+G+2]=r.z,D[oe+G+3]=0),_===!0&&(r.fromBufferAttribute(se,re),D[oe+G+4]=r.x,D[oe+G+5]=r.y,D[oe+G+6]=r.z,D[oe+G+7]=0),x===!0&&(r.fromBufferAttribute(q,re),D[oe+G+8]=r.x,D[oe+G+9]=r.y,D[oe+G+10]=r.z,D[oe+G+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new nt(E,N)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function KS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const qh=new Xt,wu=new Gh(1,1),Yh=new Lh,$h=new T0,jh=new kh,Ru=[],Cu=[],Pu=new Float32Array(16),Du=new Float32Array(9),Lu=new Float32Array(4);function Er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ru[r];if(s===void 0&&(s=new Float32Array(r),Ru[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ao(n,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ZS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function tM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Lu.set(i),n.uniformMatrix2fv(this.addr,!1,Lu),wt(t,i)}}function nM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Du.set(i),n.uniformMatrix3fv(this.addr,!1,Du),wt(t,i)}}function iM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Pu.set(i),n.uniformMatrix4fv(this.addr,!1,Pu),wt(t,i)}}function rM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function oM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function aM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function lM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function hM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wu.compareFunction=Ph,s=wu):s=qh,t.setTexture2D(e||s,r)}function dM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$h,r)}function pM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||jh,r)}function mM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yh,r)}function gM(n){switch(n){case 5126:return ZS;case 35664:return JS;case 35665:return QS;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return hM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function _M(n,e){n.uniform1fv(this.addr,e)}function vM(n,e){const t=Er(e,this.size,2);n.uniform2fv(this.addr,t)}function xM(n,e){const t=Er(e,this.size,3);n.uniform3fv(this.addr,t)}function SM(n,e){const t=Er(e,this.size,4);n.uniform4fv(this.addr,t)}function MM(n,e){const t=Er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function EM(n,e){const t=Er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function yM(n,e){const t=Er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bM(n,e){n.uniform1iv(this.addr,e)}function TM(n,e){n.uniform2iv(this.addr,e)}function AM(n,e){n.uniform3iv(this.addr,e)}function wM(n,e){n.uniform4iv(this.addr,e)}function RM(n,e){n.uniform1uiv(this.addr,e)}function CM(n,e){n.uniform2uiv(this.addr,e)}function PM(n,e){n.uniform3uiv(this.addr,e)}function DM(n,e){n.uniform4uiv(this.addr,e)}function LM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||qh,s[o])}function IM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||$h,s[o])}function UM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||jh,s[o])}function NM(n,e,t){const i=this.cache,r=e.length,s=Ao(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Yh,s[o])}function FM(n){switch(n){case 5126:return _M;case 35664:return vM;case 35665:return xM;case 35666:return SM;case 35674:return MM;case 35675:return EM;case 35676:return yM;case 5124:case 35670:return bM;case 35667:case 35671:return TM;case 35668:case 35672:return AM;case 35669:case 35673:return wM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return NM}}class OM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gM(t.type)}}class BM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}}class zM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Iu(n,e){n.seq.push(e),n.map[e.id]=e}function HM(n,e,t){const i=n.name,r=i.length;for(va.lastIndex=0;;){const s=va.exec(i),o=va.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Iu(t,c===void 0?new OM(a,n,e):new BM(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zM(a),Iu(t,f)),t=f}}}class $s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);HM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Uu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kM=37297;let VM=0;function GM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Nu=new Ye;function WM(n){et._getMatrix(Nu,et.workingColorSpace,n);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case io:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+GM(n.getShaderSource(e),o)}else return r}function XM(n,e){const t=WM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qM(n,e){let t;switch(e){case K_:t="Linear";break;case Z_:t="Reinhard";break;case J_:t="Cineon";break;case Q_:t="ACESFilmic";break;case t0:t="AgX";break;case n0:t="Neutral";break;case e0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new j;function YM(){et.getLuminanceCoefficients(Os);const n=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function jM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function KM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function Ou(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(n){return n.replace(ZM,QM)}const JM=new Map;function QM(n,e){let t=je[e];if(t===void 0){const i=JM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(eE,tE)}function tE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===C_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(e="SHADOWMAP_TYPE_VSM"),e}function iE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case vr:e="ENVMAP_TYPE_CUBE";break;case yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function sE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sh:e="ENVMAP_BLENDING_MULTIPLY";break;case $_:e="ENVMAP_BLENDING_MIX";break;case j_:e="ENVMAP_BLENDING_ADD";break}return e}function oE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function aE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nE(t),c=iE(t),u=rE(t),f=sE(t),h=oE(t),d=$M(t),_=jM(s),x=r.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?je.tonemapping_pars_fragment:"",t.toneMapping!==hi?qM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),YM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=El(o),o=Ou(o,t),o=Bu(o,t),a=El(a),a=Ou(a,t),a=Bu(a,t),o=zu(o),a=zu(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=w+m+o,E=w+p+a,N=Uu(r,r.VERTEX_SHADER,T),D=Uu(r,r.FRAGMENT_SHADER,E);r.attachShader(x,N),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(n.debug.checkShaderErrors){const se=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(N).trim(),oe=r.getShaderInfoLog(D).trim();let re=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,N,D);else{const ae=Fu(r,N,"vertex"),B=Fu(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+se+`
`+ae+`
`+B)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(q===""||oe==="")&&(G=!1);G&&(I.diagnostics={runnable:re,programLog:se,vertexShader:{log:q,prefix:m},fragmentShader:{log:oe,prefix:p}})}r.deleteShader(N),r.deleteShader(D),z=new $s(r,x),b=KM(r,x)}let z;this.getUniforms=function(){return z===void 0&&C(this),z};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,kM)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=D,this}let lE=0;class cE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new uE(e),t.set(e,i)),i}}class uE{constructor(e){this.id=lE++,this.code=e,this.usedTimes=0}}function fE(n,e,t,i,r,s,o){const a=new Uh,l=new cE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,I,se,q){const oe=se.fog,re=q.geometry,G=b.isMeshStandardMaterial?se.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),B=ae&&ae.mapping===yo?ae.image.height:null,ge=_[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const _e=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ae=_e!==void 0?_e.length:0;let Oe=0;re.morphAttributes.position!==void 0&&(Oe=1),re.morphAttributes.normal!==void 0&&(Oe=2),re.morphAttributes.color!==void 0&&(Oe=3);let Ke,ie,he,Se;if(ge){const st=bn[ge];Ke=st.vertexShader,ie=st.fragmentShader}else Ke=b.vertexShader,ie=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const P=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),ee=q.isInstancedMesh===!0,le=q.isBatchedMesh===!0,Fe=!!b.map,A=!!b.matcap,R=!!ae,v=!!b.aoMap,ne=!!b.lightMap,Y=!!b.bumpMap,Z=!!b.normalMap,H=!!b.displacementMap,X=!!b.emissiveMap,J=!!b.metalnessMap,Q=!!b.roughnessMap,xe=b.anisotropy>0,S=b.clearcoat>0,g=b.dispersion>0,L=b.iridescence>0,V=b.sheen>0,te=b.transmission>0,k=xe&&!!b.anisotropyMap,be=S&&!!b.clearcoatMap,de=S&&!!b.clearcoatNormalMap,Te=S&&!!b.clearcoatRoughnessMap,Ce=L&&!!b.iridescenceMap,ue=L&&!!b.iridescenceThicknessMap,Re=V&&!!b.sheenColorMap,Le=V&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,ve=!!b.specularColorMap,Ge=!!b.specularIntensityMap,U=te&&!!b.transmissionMap,Ee=te&&!!b.thicknessMap,fe=!!b.gradientMap,De=!!b.alphaMap,pe=b.alphaTest>0,ce=!!b.alphaHash,Ue=!!b.extensions;let Xe=hi;b.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const pt={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:ie,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:le,batchingColor:le&&q._colorsTexture!==null,instancing:ee,instancingColor:ee&&q.instanceColor!==null,instancingMorph:ee&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:P===null?n.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xr,alphaToCoverage:!!b.alphaToCoverage,map:Fe,matcap:A,envMap:R,envMapMode:R&&ae.mapping,envMapCubeUVHeight:B,aoMap:v,lightMap:ne,bumpMap:Y,normalMap:Z,displacementMap:h&&H,emissiveMap:X,normalMapObjectSpace:Z&&b.normalMapType===a0,normalMapTangentSpace:Z&&b.normalMapType===o0,metalnessMap:J,roughnessMap:Q,anisotropy:xe,anisotropyMap:k,clearcoat:S,clearcoatMap:be,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:g,iridescence:L,iridescenceMap:Ce,iridescenceThicknessMap:ue,sheen:V,sheenColorMap:Re,sheenRoughnessMap:Le,specularMap:Ie,specularColorMap:ve,specularIntensityMap:Ge,transmission:te,transmissionMap:U,thicknessMap:Ee,gradientMap:fe,opaque:b.transparent===!1&&b.blending===cr&&b.alphaToCoverage===!1,alphaMap:De,alphaTest:pe,alphaHash:ce,combine:b.combine,mapUv:Fe&&x(b.map.channel),aoMapUv:v&&x(b.aoMap.channel),lightMapUv:ne&&x(b.lightMap.channel),bumpMapUv:Y&&x(b.bumpMap.channel),normalMapUv:Z&&x(b.normalMap.channel),displacementMapUv:H&&x(b.displacementMap.channel),emissiveMapUv:X&&x(b.emissiveMap.channel),metalnessMapUv:J&&x(b.metalnessMap.channel),roughnessMapUv:Q&&x(b.roughnessMap.channel),anisotropyMapUv:k&&x(b.anisotropyMap.channel),clearcoatMapUv:be&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(b.sheenRoughnessMap.channel),specularMapUv:Ie&&x(b.specularMap.channel),specularColorMapUv:ve&&x(b.specularColorMap.channel),specularIntensityMapUv:Ge&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:Ee&&x(b.thicknessMap.channel),alphaMapUv:De&&x(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Z||xe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!re.attributes.uv&&(Fe||De),fog:!!oe,useFog:b.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:W,skinning:q.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Fe&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:X&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===Wt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)y.push(I),y.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(w(y,b),T(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const y=_[b.type];let I;if(y){const se=bn[y];I=B0.clone(se.uniforms)}else I=b.uniforms;return I}function N(b,y){let I;for(let se=0,q=u.length;se<q;se++){const oe=u[se];if(oe.cacheKey===y){I=oe,++I.usedTimes;break}}return I===void 0&&(I=new aE(n,y,b,s),u.push(I)),I}function D(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:N,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:z}}function hE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function dE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ku(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,_,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||dE),i.length>1&&i.sort(h||ku),r.length>1&&r.sort(h||ku)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function pE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vu,n.set(i,[o])):r>=s.length?(o=new Vu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new at};break;case"SpotLight":t={position:new j,direction:new j,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function gE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let _E=0;function vE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xE(n){const e=new mE,t=gE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new yt,o=new yt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,w=0,T=0,E=0,N=0,D=0,C=0;c.sort(vE);for(let b=0,y=c.length;b<y;b++){const I=c[b],se=I.color,q=I.intensity,oe=I.distance,re=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=se.r*q,f+=se.g*q,h+=se.b*q;else if(I.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(I.sh.coefficients[G],q);C++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ae=I.shadow,B=t.get(I);B.shadowIntensity=ae.intensity,B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,i.directionalShadow[d]=B,i.directionalShadowMap[d]=re,i.directionalShadowMatrix[d]=I.shadow.matrix,w++}i.directional[d]=G,d++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(se).multiplyScalar(q),G.distance=oe,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,i.spot[x]=G;const ae=I.shadow;if(I.map&&(i.spotLightMap[N]=I.map,N++,ae.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[x]=ae.matrix,I.castShadow){const B=t.get(I);B.shadowIntensity=ae.intensity,B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,i.spotShadow[x]=B,i.spotShadowMap[x]=re,E++}x++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(se).multiplyScalar(q),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=G,m++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){const ae=I.shadow,B=t.get(I);B.shadowIntensity=ae.intensity,B.shadowBias=ae.bias,B.shadowNormalBias=ae.normalBias,B.shadowRadius=ae.radius,B.shadowMapSize=ae.mapSize,B.shadowCameraNear=ae.camera.near,B.shadowCameraFar=ae.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=I.shadow.matrix,T++}i.point[_]=G,_++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(q),G.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const z=i.hash;(z.directionalLength!==d||z.pointLength!==_||z.spotLength!==x||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==w||z.numPointShadows!==T||z.numSpotShadows!==E||z.numSpotMaps!==N||z.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+N-D,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,z.directionalLength=d,z.pointLength=_,z.spotLength=x,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=w,z.numPointShadows=T,z.numSpotShadows=E,z.numSpotMaps=N,z.numLightProbes=C,i.version=_E++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Gu(n){const e=new xE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Gu(n),e.set(r,[a])):s>=o.length?(a=new Gu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ME=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yE(n,e,t){let i=new Vh;const r=new nt,s=new nt,o=new Et,a=new K0({depthPacking:s0}),l=new Z0,c={},u=t.maxTextureSize,f={[mi]:Wt,[Wt]:mi,[zn]:zn},h=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:ME,fragmentShader:EE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Vn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(D,C,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),se=n.state;se.setBlending(fi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const q=p!==Fn&&this.type===Fn,oe=p===Fn&&this.type!==Fn;for(let re=0,G=D.length;re<G;re++){const ae=D[re],B=ae.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ge=B.getFrameExtents();if(r.multiply(ge),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,B.mapSize.y=s.y)),B.map===null||q===!0||oe===!0){const Ae=this.type!==Fn?{minFilter:vn,magFilter:vn}:{};B.map!==null&&B.map.dispose(),B.map=new Oi(r.x,r.y,Ae),B.map.texture.name=ae.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const _e=B.getViewportCount();for(let Ae=0;Ae<_e;Ae++){const Oe=B.getViewport(Ae);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),se.viewport(o),B.updateMatrices(ae,Ae),i=B.getFrustum(),E(C,z,B.camera,ae,this.type)}B.isPointLightShadow!==!0&&this.type===Fn&&w(B,z),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,I)};function w(D,C){const z=e.update(x);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Oi(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,z,h,x,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,z,d,x,null)}function T(D,C,z,b){let y=null;const I=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)y=I;else if(y=z.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const se=y.uuid,q=C.uuid;let oe=c[se];oe===void 0&&(oe={},c[se]=oe);let re=oe[q];re===void 0&&(re=y.clone(),oe[q]=re,C.addEventListener("dispose",N)),y=re}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Fn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,z.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const se=n.properties.get(y);se.light=z}return y}function E(D,C,z,b,y){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Fn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const q=e.update(D),oe=D.material;if(Array.isArray(oe)){const re=q.groups;for(let G=0,ae=re.length;G<ae;G++){const B=re[G],ge=oe[B.materialIndex];if(ge&&ge.visible){const _e=T(D,ge,b,y);D.onBeforeShadow(n,D,C,z,q,_e,B),n.renderBufferDirect(z,null,q,_e,D,B),D.onAfterShadow(n,D,C,z,q,_e,B)}}}else if(oe.visible){const re=T(D,oe,b,y);D.onBeforeShadow(n,D,C,z,q,re,null),n.renderBufferDirect(z,null,q,re,D,null),D.onAfterShadow(n,D,C,z,q,re,null)}}const se=D.children;for(let q=0,oe=se.length;q<oe;q++)E(se[q],C,z,b,y)}function N(D){D.target.removeEventListener("dispose",N);for(const z in c){const b=c[z],y=D.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const bE={[Oa]:Ba,[za]:Va,[Ha]:Ga,[gr]:ka,[Ba]:Oa,[Va]:za,[Ga]:Ha,[ka]:gr};function TE(n,e){function t(){let U=!1;const Ee=new Et;let fe=null;const De=new Et(0,0,0,0);return{setMask:function(pe){fe!==pe&&!U&&(n.colorMask(pe,pe,pe,pe),fe=pe)},setLocked:function(pe){U=pe},setClear:function(pe,ce,Ue,Xe,pt){pt===!0&&(pe*=Xe,ce*=Xe,Ue*=Xe),Ee.set(pe,ce,Ue,Xe),De.equals(Ee)===!1&&(n.clearColor(pe,ce,Ue,Xe),De.copy(Ee))},reset:function(){U=!1,fe=null,De.set(-1,0,0,0)}}}function i(){let U=!1,Ee=!1,fe=null,De=null,pe=null;return{setReversed:function(ce){if(Ee!==ce){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ee=ce;const Xe=pe;pe=null,this.setClear(Xe)}},getReversed:function(){return Ee},setTest:function(ce){ce?P(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(ce){fe!==ce&&!U&&(n.depthMask(ce),fe=ce)},setFunc:function(ce){if(Ee&&(ce=bE[ce]),De!==ce){switch(ce){case Oa:n.depthFunc(n.NEVER);break;case Ba:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case Ha:n.depthFunc(n.EQUAL);break;case ka:n.depthFunc(n.GEQUAL);break;case Va:n.depthFunc(n.GREATER);break;case Ga:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ce}},setLocked:function(ce){U=ce},setClear:function(ce){pe!==ce&&(Ee&&(ce=1-ce),n.clearDepth(ce),pe=ce)},reset:function(){U=!1,fe=null,De=null,pe=null,Ee=!1}}}function r(){let U=!1,Ee=null,fe=null,De=null,pe=null,ce=null,Ue=null,Xe=null,pt=null;return{setTest:function(st){U||(st?P(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(st){Ee!==st&&!U&&(n.stencilMask(st),Ee=st)},setFunc:function(st,ln,Rn){(fe!==st||De!==ln||pe!==Rn)&&(n.stencilFunc(st,ln,Rn),fe=st,De=ln,pe=Rn)},setOp:function(st,ln,Rn){(ce!==st||Ue!==ln||Xe!==Rn)&&(n.stencilOp(st,ln,Rn),ce=st,Ue=ln,Xe=Rn)},setLocked:function(st){U=st},setClear:function(st){pt!==st&&(n.clearStencil(st),pt=st)},reset:function(){U=!1,Ee=null,fe=null,De=null,pe=null,ce=null,Ue=null,Xe=null,pt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,w=null,T=null,E=null,N=null,D=null,C=new at(0,0,0),z=0,b=!1,y=null,I=null,se=null,q=null,oe=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ae=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(B)[1]),G=ae>=1):B.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),G=ae>=2);let ge=null,_e={};const Ae=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ke=new Et().fromArray(Ae),ie=new Et().fromArray(Oe);function he(U,Ee,fe,De){const pe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(U,ce),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<fe;Ue++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(Ee+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return ce}const Se={};Se[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(n.DEPTH_TEST),o.setFunc(gr),Y(!1),Z($c),P(n.CULL_FACE),v(fi);function P(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function W(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function ee(U,Ee){return f[U]!==Ee?(n.bindFramebuffer(U,Ee),f[U]=Ee,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function le(U,Ee){let fe=d,De=!1;if(U){fe=h.get(Ee),fe===void 0&&(fe=[],h.set(Ee,fe));const pe=U.textures;if(fe.length!==pe.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Ue=pe.length;ce<Ue;ce++)fe[ce]=n.COLOR_ATTACHMENT0+ce;fe.length=pe.length,De=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,De=!0);De&&n.drawBuffers(fe)}function Fe(U){return _!==U?(n.useProgram(U),_=U,!0):!1}const A={[Pi]:n.FUNC_ADD,[D_]:n.FUNC_SUBTRACT,[L_]:n.FUNC_REVERSE_SUBTRACT};A[I_]=n.MIN,A[U_]=n.MAX;const R={[N_]:n.ZERO,[F_]:n.ONE,[O_]:n.SRC_COLOR,[Na]:n.SRC_ALPHA,[G_]:n.SRC_ALPHA_SATURATE,[k_]:n.DST_COLOR,[z_]:n.DST_ALPHA,[B_]:n.ONE_MINUS_SRC_COLOR,[Fa]:n.ONE_MINUS_SRC_ALPHA,[V_]:n.ONE_MINUS_DST_COLOR,[H_]:n.ONE_MINUS_DST_ALPHA,[W_]:n.CONSTANT_COLOR,[X_]:n.ONE_MINUS_CONSTANT_COLOR,[q_]:n.CONSTANT_ALPHA,[Y_]:n.ONE_MINUS_CONSTANT_ALPHA};function v(U,Ee,fe,De,pe,ce,Ue,Xe,pt,st){if(U===fi){x===!0&&(W(n.BLEND),x=!1);return}if(x===!1&&(P(n.BLEND),x=!0),U!==P_){if(U!==m||st!==b){if((p!==Pi||E!==Pi)&&(n.blendEquation(n.FUNC_ADD),p=Pi,E=Pi),st)switch(U){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFunc(n.ONE,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,T=null,N=null,D=null,C.set(0,0,0),z=0,m=U,b=st}return}pe=pe||Ee,ce=ce||fe,Ue=Ue||De,(Ee!==p||pe!==E)&&(n.blendEquationSeparate(A[Ee],A[pe]),p=Ee,E=pe),(fe!==w||De!==T||ce!==N||Ue!==D)&&(n.blendFuncSeparate(R[fe],R[De],R[ce],R[Ue]),w=fe,T=De,N=ce,D=Ue),(Xe.equals(C)===!1||pt!==z)&&(n.blendColor(Xe.r,Xe.g,Xe.b,pt),C.copy(Xe),z=pt),m=U,b=!1}function ne(U,Ee){U.side===zn?W(n.CULL_FACE):P(n.CULL_FACE);let fe=U.side===Wt;Ee&&(fe=!fe),Y(fe),U.blending===cr&&U.transparent===!1?v(fi):v(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const De=U.stencilWrite;a.setTest(De),De&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),X(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?P(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(U){y!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),y=U)}function Z(U){U!==w_?(P(n.CULL_FACE),U!==I&&(U===$c?n.cullFace(n.BACK):U===R_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),I=U}function H(U){U!==se&&(G&&n.lineWidth(U),se=U)}function X(U,Ee,fe){U?(P(n.POLYGON_OFFSET_FILL),(q!==Ee||oe!==fe)&&(n.polygonOffset(Ee,fe),q=Ee,oe=fe)):W(n.POLYGON_OFFSET_FILL)}function J(U){U?P(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function Q(U){U===void 0&&(U=n.TEXTURE0+re-1),ge!==U&&(n.activeTexture(U),ge=U)}function xe(U,Ee,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+re-1:fe=ge);let De=_e[fe];De===void 0&&(De={type:void 0,texture:void 0},_e[fe]=De),(De.type!==U||De.texture!==Ee)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(U,Ee||Se[U]),De.type=U,De.texture=Ee)}function S(){const U=_e[ge];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(U){Ke.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function Le(U){ie.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function Ie(U,Ee){let fe=c.get(Ee);fe===void 0&&(fe=new WeakMap,c.set(Ee,fe));let De=fe.get(U);De===void 0&&(De=n.getUniformBlockIndex(Ee,U.name),fe.set(U,De))}function ve(U,Ee){const De=c.get(Ee).get(U);l.get(Ee)!==De&&(n.uniformBlockBinding(Ee,De,U.__bindingPointIndex),l.set(Ee,De))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,_e={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,w=null,T=null,E=null,N=null,D=null,C=new at(0,0,0),z=0,b=!1,y=null,I=null,se=null,q=null,oe=null,Ke.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:P,disable:W,bindFramebuffer:ee,drawBuffers:le,useProgram:Fe,setBlending:v,setMaterial:ne,setFlipSided:Y,setCullFace:Z,setLineWidth:H,setPolygonOffset:X,setScissorTest:J,activeTexture:Q,bindTexture:xe,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ce,texImage3D:ue,updateUBOMapping:Ie,uniformBlockBinding:ve,texStorage2D:de,texStorage3D:Te,texSubImage2D:V,texSubImage3D:te,compressedTexSubImage2D:k,compressedTexSubImage3D:be,scissor:Re,viewport:Le,reset:Ge}}function AE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return d?new OffscreenCanvas(S,g):so("canvas")}function x(S,g,L){let V=1;const te=xe(S);if((te.width>L||te.height>L)&&(V=L/Math.max(te.width,te.height)),V<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const k=Math.floor(V*te.width),be=Math.floor(V*te.height);f===void 0&&(f=_(k,be));const de=g?_(k,be):f;return de.width=k,de.height=be,de.getContext("2d").drawImage(S,0,0,k,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+k+"x"+be+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),S;return S}function m(S){return S.generateMipmaps}function p(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(S,g,L,V,te=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let k=g;if(g===n.RED&&(L===n.FLOAT&&(k=n.R32F),L===n.HALF_FLOAT&&(k=n.R16F),L===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.R8UI),L===n.UNSIGNED_SHORT&&(k=n.R16UI),L===n.UNSIGNED_INT&&(k=n.R32UI),L===n.BYTE&&(k=n.R8I),L===n.SHORT&&(k=n.R16I),L===n.INT&&(k=n.R32I)),g===n.RG&&(L===n.FLOAT&&(k=n.RG32F),L===n.HALF_FLOAT&&(k=n.RG16F),L===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RG8UI),L===n.UNSIGNED_SHORT&&(k=n.RG16UI),L===n.UNSIGNED_INT&&(k=n.RG32UI),L===n.BYTE&&(k=n.RG8I),L===n.SHORT&&(k=n.RG16I),L===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RGB8UI),L===n.UNSIGNED_SHORT&&(k=n.RGB16UI),L===n.UNSIGNED_INT&&(k=n.RGB32UI),L===n.BYTE&&(k=n.RGB8I),L===n.SHORT&&(k=n.RGB16I),L===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),L===n.UNSIGNED_INT&&(k=n.RGBA32UI),L===n.BYTE&&(k=n.RGBA8I),L===n.SHORT&&(k=n.RGBA16I),L===n.INT&&(k=n.RGBA32I)),g===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),g===n.RGBA){const be=te?io:et.getTransfer(V);L===n.FLOAT&&(k=n.RGBA32F),L===n.HALF_FLOAT&&(k=n.RGBA16F),L===n.UNSIGNED_BYTE&&(k=be===ct?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function E(S,g){let L;return S?g===null||g===Fi||g===Zr?L=n.DEPTH24_STENCIL8:g===Hn?L=n.DEPTH32F_STENCIL8:g===Kr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Fi||g===Zr?L=n.DEPTH_COMPONENT24:g===Hn?L=n.DEPTH_COMPONENT32F:g===Kr&&(L=n.DEPTH_COMPONENT16),L}function N(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==vn&&S.minFilter!==Tn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function D(S){const g=S.target;g.removeEventListener("dispose",D),z(g),g.isVideoTexture&&u.delete(g)}function C(S){const g=S.target;g.removeEventListener("dispose",C),y(g)}function z(S){const g=i.get(S);if(g.__webglInit===void 0)return;const L=S.source,V=h.get(L);if(V){const te=V[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(S),Object.keys(V).length===0&&h.delete(L)}i.remove(S)}function b(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const L=S.source,V=h.get(L);delete V[g.__cacheKey],o.memory.textures--}function y(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let te=0;te<g.__webglFramebuffer[V].length;te++)n.deleteFramebuffer(g.__webglFramebuffer[V][te]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=S.textures;for(let V=0,te=L.length;V<te;V++){const k=i.get(L[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(L[V])}i.remove(S)}let I=0;function se(){I=0}function q(){const S=I;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),I+=1,S}function oe(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function re(S,g){const L=i.get(S);if(S.isVideoTexture&&J(S),S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){const V=S.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(L,S,g);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+g)}function G(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){Se(L,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+g)}function ae(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){Se(L,S,g);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+g)}function B(S,g){const L=i.get(S);if(S.version>0&&L.__version!==S.version){P(L,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+g)}const ge={[qa]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[Ya]:n.MIRRORED_REPEAT},_e={[vn]:n.NEAREST,[i0]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ae={[l0]:n.NEVER,[p0]:n.ALWAYS,[c0]:n.LESS,[Ph]:n.LEQUAL,[u0]:n.EQUAL,[d0]:n.GEQUAL,[f0]:n.GREATER,[h0]:n.NOTEQUAL};function Oe(S,g){if(g.type===Hn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Tn||g.magFilter===Vo||g.magFilter===ps||g.magFilter===Ii||g.minFilter===Tn||g.minFilter===Vo||g.minFilter===ps||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ge[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,_e[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,_e[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===vn||g.minFilter!==ps&&g.minFilter!==Ii||g.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(S,g){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",D));const V=g.source;let te=h.get(V);te===void 0&&(te={},h.set(V,te));const k=oe(g);if(k!==S.__cacheKey){te[k]===void 0&&(te[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[k].usedTimes++;const be=te[S.__cacheKey];be!==void 0&&(te[S.__cacheKey].usedTimes--,be.usedTimes===0&&b(g)),S.__cacheKey=k,S.__webglTexture=te[k].texture}return L}function ie(S,g,L){return Math.floor(Math.floor(S/L)/g)}function he(S,g,L,V){const k=S.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,L,V,g.data);else{k.sort((ue,Re)=>ue.start-Re.start);let be=0;for(let ue=1;ue<k.length;ue++){const Re=k[be],Le=k[ue],Ie=Re.start+Re.count,ve=ie(Le.start,g.width,4),Ge=ie(Re.start,g.width,4);Le.start<=Ie+1&&ve===Ge&&ie(Le.start+Le.count-1,g.width,4)===ve?Re.count=Math.max(Re.count,Le.start+Le.count-Re.start):(++be,k[be]=Le)}k.length=be+1;const de=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ue=0,Re=k.length;ue<Re;ue++){const Le=k[ue],Ie=Math.floor(Le.start/4),ve=Math.ceil(Le.count/4),Ge=Ie%g.width,U=Math.floor(Ie/g.width),Ee=ve,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,Ee,fe,L,V,g.data)}S.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,de),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Se(S,g,L){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const te=Ke(S,g),k=g.source;t.bindTexture(V,S.__webglTexture,n.TEXTURE0+L);const be=i.get(k);if(k.version!==be.__version||te===!0){t.activeTexture(n.TEXTURE0+L);const de=et.getPrimaries(et.workingColorSpace),Te=g.colorSpace===ci?null:et.getPrimaries(g.colorSpace),Ce=g.colorSpace===ci||de===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ue=x(g.image,!1,r.maxTextureSize);ue=Q(g,ue);const Re=s.convert(g.format,g.colorSpace),Le=s.convert(g.type);let Ie=T(g.internalFormat,Re,Le,g.colorSpace,g.isVideoTexture);Oe(V,g);let ve;const Ge=g.mipmaps,U=g.isVideoTexture!==!0,Ee=be.__version===void 0||te===!0,fe=k.dataReady,De=N(g,ue);if(g.isDepthTexture)Ie=E(g.format===Qr,g.type),Ee&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ie,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Re,Le,null));else if(g.isDataTexture)if(Ge.length>0){U&&Ee&&t.texStorage2D(n.TEXTURE_2D,De,Ie,Ge[0].width,Ge[0].height);for(let pe=0,ce=Ge.length;pe<ce;pe++)ve=Ge[pe],U?fe&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Re,Le,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Ie,ve.width,ve.height,0,Re,Le,ve.data);g.generateMipmaps=!1}else U?(Ee&&t.texStorage2D(n.TEXTURE_2D,De,Ie,ue.width,ue.height),fe&&he(g,ue,Re,Le)):t.texImage2D(n.TEXTURE_2D,0,Ie,ue.width,ue.height,0,Re,Le,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){U&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ie,Ge[0].width,Ge[0].height,ue.depth);for(let pe=0,ce=Ge.length;pe<ce;pe++)if(ve=Ge[pe],g.format!==gn)if(Re!==null)if(U){if(fe)if(g.layerUpdates.size>0){const Ue=xu(ve.width,ve.height,g.format,g.type);for(const Xe of g.layerUpdates){const pt=ve.data.subarray(Xe*Ue/ve.data.BYTES_PER_ELEMENT,(Xe+1)*Ue/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,Xe,ve.width,ve.height,1,Re,pt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,ue.depth,Re,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,Ie,ve.width,ve.height,ue.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,ve.width,ve.height,ue.depth,Re,Le,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,Ie,ve.width,ve.height,ue.depth,0,Re,Le,ve.data)}else{U&&Ee&&t.texStorage2D(n.TEXTURE_2D,De,Ie,Ge[0].width,Ge[0].height);for(let pe=0,ce=Ge.length;pe<ce;pe++)ve=Ge[pe],g.format!==gn?Re!==null?U?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?fe&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,ve.width,ve.height,Re,Le,ve.data):t.texImage2D(n.TEXTURE_2D,pe,Ie,ve.width,ve.height,0,Re,Le,ve.data)}else if(g.isDataArrayTexture)if(U){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Ie,ue.width,ue.height,ue.depth),fe)if(g.layerUpdates.size>0){const pe=xu(ue.width,ue.height,g.format,g.type);for(const ce of g.layerUpdates){const Ue=ue.data.subarray(ce*pe/ue.data.BYTES_PER_ELEMENT,(ce+1)*pe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Re,Le,Ue)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Le,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ue.width,ue.height,ue.depth,0,Re,Le,ue.data);else if(g.isData3DTexture)U?(Ee&&t.texStorage3D(n.TEXTURE_3D,De,Ie,ue.width,ue.height,ue.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Le,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ue.width,ue.height,ue.depth,0,Re,Le,ue.data);else if(g.isFramebufferTexture){if(Ee)if(U)t.texStorage2D(n.TEXTURE_2D,De,Ie,ue.width,ue.height);else{let pe=ue.width,ce=ue.height;for(let Ue=0;Ue<De;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Ie,pe,ce,0,Re,Le,null),pe>>=1,ce>>=1}}else if(Ge.length>0){if(U&&Ee){const pe=xe(Ge[0]);t.texStorage2D(n.TEXTURE_2D,De,Ie,pe.width,pe.height)}for(let pe=0,ce=Ge.length;pe<ce;pe++)ve=Ge[pe],U?fe&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,Re,Le,ve):t.texImage2D(n.TEXTURE_2D,pe,Ie,Re,Le,ve);g.generateMipmaps=!1}else if(U){if(Ee){const pe=xe(ue);t.texStorage2D(n.TEXTURE_2D,De,Ie,pe.width,pe.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Le,ue)}else t.texImage2D(n.TEXTURE_2D,0,Ie,Re,Le,ue);m(g)&&p(V),be.__version=k.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function P(S,g,L){if(g.image.length!==6)return;const V=Ke(S,g),te=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+L);const k=i.get(te);if(te.version!==k.__version||V===!0){t.activeTexture(n.TEXTURE0+L);const be=et.getPrimaries(et.workingColorSpace),de=g.colorSpace===ci?null:et.getPrimaries(g.colorSpace),Te=g.colorSpace===ci||be===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!Ce&&!ue?Re[ce]=x(g.image[ce],!0,r.maxCubemapSize):Re[ce]=ue?g.image[ce].image:g.image[ce],Re[ce]=Q(g,Re[ce]);const Le=Re[0],Ie=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),Ge=T(g.internalFormat,Ie,ve,g.colorSpace),U=g.isVideoTexture!==!0,Ee=k.__version===void 0||V===!0,fe=te.dataReady;let De=N(g,Le);Oe(n.TEXTURE_CUBE_MAP,g);let pe;if(Ce){U&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ge,Le.width,Le.height);for(let ce=0;ce<6;ce++){pe=Re[ce].mipmaps;for(let Ue=0;Ue<pe.length;Ue++){const Xe=pe[Ue];g.format!==gn?Ie!==null?U?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Xe.width,Xe.height,Ie,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,Ge,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Xe.width,Xe.height,Ie,ve,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,Ge,Xe.width,Xe.height,0,Ie,ve,Xe.data)}}}else{if(pe=g.mipmaps,U&&Ee){pe.length>0&&De++;const ce=xe(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ge,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,Ie,ve,Re[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ge,Re[ce].width,Re[ce].height,0,Ie,ve,Re[ce].data);for(let Ue=0;Ue<pe.length;Ue++){const pt=pe[Ue].image[ce].image;U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,pt.width,pt.height,Ie,ve,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,Ge,pt.width,pt.height,0,Ie,ve,pt.data)}}else{U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ie,ve,Re[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ge,Ie,ve,Re[ce]);for(let Ue=0;Ue<pe.length;Ue++){const Xe=pe[Ue];U?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,Ie,ve,Xe.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,Ge,Ie,ve,Xe.image[ce])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),k.__version=te.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function W(S,g,L,V,te,k){const be=s.convert(L.format,L.colorSpace),de=s.convert(L.type),Te=T(L.internalFormat,be,de,L.colorSpace),Ce=i.get(g),ue=i.get(L);if(ue.__renderTarget=g,!Ce.__hasExternalTextures){const Re=Math.max(1,g.width>>k),Le=Math.max(1,g.height>>k);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,k,Te,Re,Le,g.depth,0,be,de,null):t.texImage2D(te,k,Te,Re,Le,0,be,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),X(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,te,ue.__webglTexture,0,H(g)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,te,ue.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(S,g,L){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const V=g.depthTexture,te=V&&V.isDepthTexture?V.type:null,k=E(g.stencilBuffer,te),be=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=H(g);X(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,k,g.width,g.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,S)}else{const V=g.textures;for(let te=0;te<V.length;te++){const k=V[te],be=s.convert(k.format,k.colorSpace),de=s.convert(k.type),Te=T(k.internalFormat,be,de,k.colorSpace),Ce=H(g);L&&X(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Te,g.width,g.height):X(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),re(g.depthTexture,0);const te=V.__webglTexture,k=H(g);if(g.depthTexture.format===Jr)X(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(g.depthTexture.format===Qr)X(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Fe(S){const g=i.get(S),L=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const V=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",te)};V.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=V}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const V=S.texture.mipmaps;V&&V.length>0?le(g.__webglFramebuffer[0],S):le(g.__webglFramebuffer,S)}else if(L){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),ee(g.__webglDepthbuffer[V],S,!1);else{const te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,k)}}else{const V=S.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ee(g.__webglDepthbuffer,S,!1);else{const te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(S,g,L){const V=i.get(S);g!==void 0&&W(V.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Fe(S)}function R(S){const g=S.texture,L=i.get(S),V=i.get(g);S.addEventListener("dispose",C);const te=S.textures,k=S.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,o.memory.textures++),k){L.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[de]=[];for(let Te=0;Te<g.mipmaps.length;Te++)L.__webglFramebuffer[de][Te]=n.createFramebuffer()}else L.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)L.__webglFramebuffer[de]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(be)for(let de=0,Te=te.length;de<Te;de++){const Ce=i.get(te[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&X(S)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const Te=te[de];L.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[de]);const Ce=s.convert(Te.format,Te.colorSpace),ue=s.convert(Te.type),Re=T(Te.internalFormat,Ce,ue,Te.colorSpace,S.isXRRenderTarget===!0),Le=H(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Re,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,L.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(L.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)W(L.__webglFramebuffer[de][Te],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else W(L.__webglFramebuffer[de],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,Te=te.length;de<Te;de++){const Ce=te[de],ue=i.get(Ce);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),Oe(n.TEXTURE_2D,Ce),W(L.__webglFramebuffer,S,Ce,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ce)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,V.__webglTexture),Oe(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)W(L.__webglFramebuffer[Te],S,g,n.COLOR_ATTACHMENT0,de,Te);else W(L.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,de,0);m(g)&&p(de),t.unbindTexture()}S.depthBuffer&&Fe(S)}function v(S){const g=S.textures;for(let L=0,V=g.length;L<V;L++){const te=g[L];if(m(te)){const k=w(S),be=i.get(te).__webglTexture;t.bindTexture(k,be),p(k),t.unbindTexture()}}}const ne=[],Y=[];function Z(S){if(S.samples>0){if(X(S)===!1){const g=S.textures,L=S.width,V=S.height;let te=n.COLOR_BUFFER_BIT;const k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(S),de=g.length>1;if(de)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Te=S.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const ue=i.get(g[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ue,0)}n.blitFramebuffer(0,0,L,V,0,0,L,V,te,n.NEAREST),l===!0&&(ne.length=0,Y.length=0,ne.push(n.COLOR_ATTACHMENT0+Ce),S.depthBuffer&&S.resolveDepthBuffer===!1&&(ne.push(k),Y.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const ue=i.get(g[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function H(S){return Math.min(r.maxSamples,S.samples)}function X(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function J(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function Q(S,g){const L=S.colorSpace,V=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==xr&&L!==ci&&(et.getTransfer(L)===ct?(V!==gn||te!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function xe(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=se,this.setTexture2D=re,this.setTexture2DArray=G,this.setTexture3D=ae,this.setTextureCube=B,this.rebindTextures=A,this.setupRenderTarget=R,this.updateRenderTargetMipmap=v,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=W,this.useMultisampledRTT=X}function wE(n,e){function t(i,r=ci){let s;const o=et.getTransfer(r);if(i===Yn)return n.UNSIGNED_BYTE;if(i===Wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return n.BYTE;if(i===yh)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===Gl)return n.INT;if(i===Fi)return n.UNSIGNED_INT;if(i===Hn)return n.FLOAT;if(i===is)return n.HALF_FLOAT;if(i===Th)return n.ALPHA;if(i===Ah)return n.RGB;if(i===gn)return n.RGBA;if(i===Jr)return n.DEPTH_COMPONENT;if(i===Qr)return n.DEPTH_STENCIL;if(i===wh)return n.RED;if(i===ql)return n.RED_INTEGER;if(i===Rh)return n.RG;if(i===Yl)return n.RG_INTEGER;if(i===$l)return n.RGBA_INTEGER;if(i===Gs||i===Ws||i===Xs||i===qs)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===ja||i===Ka||i===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ja||i===Qa||i===el)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ja||i===Qa)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===el)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tl||i===nl||i===il||i===rl||i===sl||i===ol||i===al||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ol)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===al)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ul)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ys||i===ml||i===gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ys)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ch||i===_l||i===vl||i===xl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ys)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const RE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Xt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:RE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vn(new To(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DE extends Mr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const x=new PE,m=t.getContextAttributes();let p=null,w=null;const T=[],E=[],N=new nt;let D=null;const C=new dn;C.viewport=new Et;const z=new dn;z.viewport=new Et;const b=[C,z],y=new J0;let I=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=T[ie];return he===void 0&&(he=new fa,T[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=T[ie];return he===void 0&&(he=new fa,T[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=T[ie];return he===void 0&&(he=new fa,T[ie]=he),he.getHandSpace()};function q(ie){const he=E.indexOf(ie.inputSource);if(he===-1)return;const Se=T[he];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function oe(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",re);for(let ie=0;ie<T.length;ie++){const he=E[ie];he!==null&&(E[ie]=null,T[ie].disconnect(he))}I=null,se=null,x.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,w=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,P=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?Qr:Jr,P=m.stencil?Zr:Fi);const ee={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Oi(h.textureWidth,h.textureHeight,{format:gn,type:Yn,depthTexture:new Gh(h.textureWidth,h.textureHeight,P,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new Oi(d.framebufferWidth,d.framebufferHeight,{format:gn,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(ie){for(let he=0;he<ie.removed.length;he++){const Se=ie.removed[he],P=E.indexOf(Se);P>=0&&(E[P]=null,T[P].disconnect(Se))}for(let he=0;he<ie.added.length;he++){const Se=ie.added[he];let P=E.indexOf(Se);if(P===-1){for(let ee=0;ee<T.length;ee++)if(ee>=E.length){E.push(Se),P=ee;break}else if(E[ee]===null){E[ee]=Se,P=ee;break}if(P===-1)break}const W=T[P];W&&W.connect(Se)}}const G=new j,ae=new j;function B(ie,he,Se){G.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(Se.matrixWorld);const P=G.distanceTo(ae),W=he.projectionMatrix.elements,ee=Se.projectionMatrix.elements,le=W[14]/(W[10]-1),Fe=W[14]/(W[10]+1),A=(W[9]+1)/W[5],R=(W[9]-1)/W[5],v=(W[8]-1)/W[0],ne=(ee[8]+1)/ee[0],Y=le*v,Z=le*ne,H=P/(-v+ne),X=H*-v;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(X),ie.translateZ(H),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),W[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const J=le+H,Q=Fe+H,xe=Y-X,S=Z+(P-X),g=A*Fe/Q*J,L=R*Fe/Q*J;ie.projectionMatrix.makePerspective(xe,S,g,L,J,Q),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let he=ie.near,Se=ie.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),y.near=z.near=C.near=he,y.far=z.far=C.far=Se,(I!==y.near||se!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,se=y.far),C.layers.mask=ie.layers.mask|2,z.layers.mask=ie.layers.mask|4,y.layers.mask=C.layers.mask|z.layers.mask;const P=ie.parent,W=y.cameras;ge(y,P);for(let ee=0;ee<W.length;ee++)ge(W[ee],P);W.length===2?B(y,C,z):y.projectionMatrix.copy(C.projectionMatrix),_e(ie,y,P)};function _e(ie,he,Se){Se===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Sl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ae=null;function Oe(ie,he){if(u=he.getViewerPose(c||o),_=he,u!==null){const Se=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let P=!1;Se.length!==y.cameras.length&&(y.cameras.length=0,P=!0);for(let le=0;le<Se.length;le++){const Fe=Se[le];let A=null;if(d!==null)A=d.getViewport(Fe);else{const v=f.getViewSubImage(h,Fe);A=v.viewport,le===0&&(e.setRenderTargetTextures(w,v.colorTexture,v.depthStencilTexture),e.setRenderTarget(w))}let R=b[le];R===void 0&&(R=new dn,R.layers.enable(le),R.viewport=new Et,b[le]=R),R.matrix.fromArray(Fe.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Fe.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(A.x,A.y,A.width,A.height),le===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),P===!0&&y.cameras.push(R)}const W=r.enabledFeatures;if(W&&W.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(Se[0]);le&&le.isValid&&le.texture&&x.init(e,le,r.renderState)}}for(let Se=0;Se<T.length;Se++){const P=E[Se],W=T[Se];P!==null&&W!==void 0&&W.update(P,he,c||o)}Ae&&Ae(ie,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const Ke=new Xh;Ke.setAnimationLoop(Oe),this.setAnimationLoop=function(ie){Ae=ie},this.dispose=function(){}}}const Ai=new $n,LE=new yt;function IE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,T,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Wt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Wt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),T=w.envMap,E=w.envMapRotation;T&&(m.envMap.value=T,Ai.copy(E),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(Ai)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Wt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const E=T.program;i.uniformBlockBinding(w,E)}function c(w,T){let E=r[w.id];E===void 0&&(_(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));const N=T.program;i.updateUBOMapping(w,N);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function u(w){const T=f();w.__bindingPointIndex=T;const E=n.createBuffer(),N=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,N,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const T=r[w.id],E=w.uniforms,N=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let D=0,C=E.length;D<C;D++){const z=Array.isArray(E[D])?E[D]:[E[D]];for(let b=0,y=z.length;b<y;b++){const I=z[b];if(d(I,D,b,N)===!0){const se=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let oe=0;for(let re=0;re<q.length;re++){const G=q[re],ae=x(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,se+oe,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,oe),oe+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,se,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,T,E,N){const D=w.value,C=T+"_"+E;if(N[C]===void 0)return typeof D=="number"||typeof D=="boolean"?N[C]=D:N[C]=D.clone(),!0;{const z=N[C];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return N[C]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function _(w){const T=w.uniforms;let E=0;const N=16;for(let C=0,z=T.length;C<z;C++){const b=Array.isArray(T[C])?T[C]:[T[C]];for(let y=0,I=b.length;y<I;y++){const se=b[y],q=Array.isArray(se.value)?se.value:[se.value];for(let oe=0,re=q.length;oe<re;oe++){const G=q[oe],ae=x(G),B=E%N,ge=B%ae.boundary,_e=B+ge;E+=ge,_e!==0&&N-_e<ae.storage&&(E+=N-_e),se.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=E,E+=ae.storage}}}const D=E%N;return D>0&&(E+=N-D),w.__size=E,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class NE{constructor(e={}){const{canvas:t=g0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let N=!1;this._outputColorSpace=rn;let D=0,C=0,z=null,b=-1,y=null;const I=new Et,se=new Et;let q=null;const oe=new at(0);let re=0,G=t.width,ae=t.height,B=1,ge=null,_e=null;const Ae=new Et(0,0,G,ae),Oe=new Et(0,0,G,ae);let Ke=!1;const ie=new Vh;let he=!1,Se=!1;const P=new yt,W=new yt,ee=new j,le=new Et,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function R(){return z===null?B:1}let v=i;function ne(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vl}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),v===null){const F="webgl2";if(v=ne(F,M),v===null)throw ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Y,Z,H,X,J,Q,xe,S,g,L,V,te,k,be,de,Te,Ce,ue,Re,Le,Ie,ve,Ge,U;function Ee(){Y=new XS(v),Y.init(),ve=new wE(v,Y),Z=new BS(v,Y,e,ve),H=new TE(v,Y),Z.reverseDepthBuffer&&h&&H.buffers.depth.setReversed(!0),X=new $S(v),J=new hE,Q=new AE(v,Y,H,J,Z,ve,X),xe=new HS(E),S=new WS(E),g=new ev(v),Ge=new FS(v,g),L=new qS(v,g,X,Ge),V=new KS(v,L,g,X),Re=new jS(v,Z,Q),Te=new zS(J),te=new fE(E,xe,S,Y,Z,Ge,Te),k=new IE(E,J),be=new pE,de=new SE(Y),ue=new NS(E,xe,S,H,V,d,l),Ce=new yE(E,V,Z),U=new UE(v,X,Z,H),Le=new OS(v,Y,X),Ie=new YS(v,Y,X),X.programs=te.programs,E.capabilities=Z,E.extensions=Y,E.properties=J,E.renderLists=be,E.shadowMap=Ce,E.state=H,E.info=X}Ee();const fe=new DE(E,v);this.xr=fe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const M=Y.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Y.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(M){M!==void 0&&(B=M,this.setSize(G,ae,!1))},this.getSize=function(M){return M.set(G,ae)},this.setSize=function(M,F,$=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,ae=F,t.width=Math.floor(M*B),t.height=Math.floor(F*B),$===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(G*B,ae*B).floor()},this.setDrawingBufferSize=function(M,F,$){G=M,ae=F,B=$,t.width=Math.floor(M*$),t.height=Math.floor(F*$),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,F,$,K){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,F,$,K),H.viewport(I.copy(Ae).multiplyScalar(B).round())},this.getScissor=function(M){return M.copy(Oe)},this.setScissor=function(M,F,$,K){M.isVector4?Oe.set(M.x,M.y,M.z,M.w):Oe.set(M,F,$,K),H.scissor(se.copy(Oe).multiplyScalar(B).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){H.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){_e=M},this.getClearColor=function(M){return M.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,$=!0){let K=0;if(M){let O=!1;if(z!==null){const me=z.texture.format;O=me===$l||me===Yl||me===ql}if(O){const me=z.texture.type,ye=me===Yn||me===Fi||me===Kr||me===Zr||me===Wl||me===Xl,Ne=ue.getClearColor(),Pe=ue.getClearAlpha(),He=Ne.r,ke=Ne.g,Be=Ne.b;ye?(_[0]=He,_[1]=ke,_[2]=Be,_[3]=Pe,v.clearBufferuiv(v.COLOR,0,_)):(x[0]=He,x[1]=ke,x[2]=Be,x[3]=Pe,v.clearBufferiv(v.COLOR,0,x))}else K|=v.COLOR_BUFFER_BIT}F&&(K|=v.DEPTH_BUFFER_BIT),$&&(K|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),be.dispose(),de.dispose(),J.dispose(),xe.dispose(),S.dispose(),V.dispose(),Ge.dispose(),U.dispose(),te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Zl),fe.removeEventListener("sessionend",Jl),_i.stop()};function De(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=X.autoReset,F=Ce.enabled,$=Ce.autoUpdate,K=Ce.needsUpdate,O=Ce.type;Ee(),X.autoReset=M,Ce.enabled=F,Ce.autoUpdate=$,Ce.needsUpdate=K,Ce.type=O}function ce(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const F=M.target;F.removeEventListener("dispose",Ue),Xe(F)}function Xe(M){pt(M),J.remove(M)}function pt(M){const F=J.get(M).programs;F!==void 0&&(F.forEach(function($){te.releaseProgram($)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,$,K,O,me){F===null&&(F=Fe);const ye=O.isMesh&&O.matrixWorld.determinant()<0,Ne=Zh(M,F,$,K,O);H.setMaterial(K,ye);let Pe=$.index,He=1;if(K.wireframe===!0){if(Pe=L.getWireframeAttribute($),Pe===void 0)return;He=2}const ke=$.drawRange,Be=$.attributes.position;let Ze=ke.start*He,lt=(ke.start+ke.count)*He;me!==null&&(Ze=Math.max(Ze,me.start*He),lt=Math.min(lt,(me.start+me.count)*He)),Pe!==null?(Ze=Math.max(Ze,0),lt=Math.min(lt,Pe.count)):Be!=null&&(Ze=Math.max(Ze,0),lt=Math.min(lt,Be.count));const St=lt-Ze;if(St<0||St===1/0)return;Ge.setup(O,K,Ne,$,Pe);let mt,ut=Le;if(Pe!==null&&(mt=g.get(Pe),ut=Ie,ut.setIndex(mt)),O.isMesh)K.wireframe===!0?(H.setLineWidth(K.wireframeLinewidth*R()),ut.setMode(v.LINES)):ut.setMode(v.TRIANGLES);else if(O.isLine){let ze=K.linewidth;ze===void 0&&(ze=1),H.setLineWidth(ze*R()),O.isLineSegments?ut.setMode(v.LINES):O.isLineLoop?ut.setMode(v.LINE_LOOP):ut.setMode(v.LINE_STRIP)}else O.isPoints?ut.setMode(v.POINTS):O.isSprite&&ut.setMode(v.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,xt=O._multiDrawCounts,Qe=O._multiDrawCount,Yt=Pe?g.get(Pe).bytesPerElement:1,zi=J.get(K).currentProgram.getUniforms();for(let $t=0;$t<Qe;$t++)zi.setValue(v,"_gl_DrawID",$t),ut.render(ze[$t]/Yt,xt[$t])}else if(O.isInstancedMesh)ut.renderInstances(Ze,St,O.count);else if($.isInstancedBufferGeometry){const ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,xt=Math.min($.instanceCount,ze);ut.renderInstances(Ze,St,xt)}else ut.render(Ze,St)};function st(M,F,$){M.transparent===!0&&M.side===zn&&M.forceSinglePass===!1?(M.side=Wt,M.needsUpdate=!0,us(M,F,$),M.side=mi,M.needsUpdate=!0,us(M,F,$),M.side=zn):us(M,F,$)}this.compile=function(M,F,$=null){$===null&&($=M),p=de.get($),p.init(F),T.push(p),$.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),M!==$&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const K=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const me=O.material;if(me)if(Array.isArray(me))for(let ye=0;ye<me.length;ye++){const Ne=me[ye];st(Ne,$,O),K.add(Ne)}else st(me,$,O),K.add(me)}),p=T.pop(),K},this.compileAsync=function(M,F,$=null){const K=this.compile(M,F,$);return new Promise(O=>{function me(){if(K.forEach(function(ye){J.get(ye).currentProgram.isReady()&&K.delete(ye)}),K.size===0){O(M);return}setTimeout(me,10)}Y.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ln=null;function Rn(M){ln&&ln(M)}function Zl(){_i.stop()}function Jl(){_i.start()}const _i=new Xh;_i.setAnimationLoop(Rn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(M){ln=M,fe.setAnimationLoop(M),M===null?_i.stop():_i.start()},fe.addEventListener("sessionstart",Zl),fe.addEventListener("sessionend",Jl),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(F),F=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,F,z),p=de.get(M,T.length),p.init(F),T.push(p),W.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ie.setFromProjectionMatrix(W),Se=this.localClippingEnabled,he=Te.init(this.clippingPlanes,Se),m=be.get(M,w.length),m.init(),w.push(m),fe.enabled===!0&&fe.isPresenting===!0){const me=E.xr.getDepthSensingMesh();me!==null&&wo(me,F,-1/0,E.sortObjects)}wo(M,F,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ge,_e),A=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,A&&ue.addToRenderList(m,M),this.info.render.frame++,he===!0&&Te.beginShadows();const $=p.state.shadowsArray;Ce.render($,M,F),he===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const me=F.cameras;if(O.length>0)for(let ye=0,Ne=me.length;ye<Ne;ye++){const Pe=me[ye];ec(K,O,M,Pe)}A&&ue.render(M);for(let ye=0,Ne=me.length;ye<Ne;ye++){const Pe=me[ye];Ql(m,M,Pe,Pe.viewport)}}else O.length>0&&ec(K,O,M,F),A&&ue.render(M),Ql(m,M,F);z!==null&&C===0&&(Q.updateMultisampleRenderTarget(z),Q.updateRenderTargetMipmap(z)),M.isScene===!0&&M.onAfterRender(E,M,F),Ge.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],he===!0&&Te.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function wo(M,F,$,K){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)$=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ie.intersectsSprite(M)){K&&le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(W);const ye=V.update(M),Ne=M.material;Ne.visible&&m.push(M,ye,Ne,$,le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ie.intersectsObject(M))){const ye=V.update(M),Ne=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),le.copy(M.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),le.copy(ye.boundingSphere.center)),le.applyMatrix4(M.matrixWorld).applyMatrix4(W)),Array.isArray(Ne)){const Pe=ye.groups;for(let He=0,ke=Pe.length;He<ke;He++){const Be=Pe[He],Ze=Ne[Be.materialIndex];Ze&&Ze.visible&&m.push(M,ye,Ze,$,le.z,Be)}}else Ne.visible&&m.push(M,ye,Ne,$,le.z,null)}}const me=M.children;for(let ye=0,Ne=me.length;ye<Ne;ye++)wo(me[ye],F,$,K)}function Ql(M,F,$,K){const O=M.opaque,me=M.transmissive,ye=M.transparent;p.setupLightsView($),he===!0&&Te.setGlobalState(E.clippingPlanes,$),K&&H.viewport(I.copy(K)),O.length>0&&cs(O,F,$),me.length>0&&cs(me,F,$),ye.length>0&&cs(ye,F,$),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function ec(M,F,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new Oi(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?is:Yn,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const me=p.state.transmissionRenderTarget[K.id],ye=K.viewport||I;me.setSize(ye.z*E.transmissionResolutionScale,ye.w*E.transmissionResolutionScale);const Ne=E.getRenderTarget(),Pe=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(me),E.getClearColor(oe),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),A&&ue.render($);const ke=E.toneMapping;E.toneMapping=hi;const Be=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),he===!0&&Te.setGlobalState(E.clippingPlanes,K),cs(M,$,K),Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let lt=0,St=F.length;lt<St;lt++){const mt=F[lt],ut=mt.object,ze=mt.geometry,xt=mt.material,Qe=mt.group;if(xt.side===zn&&ut.layers.test(K.layers)){const Yt=xt.side;xt.side=Wt,xt.needsUpdate=!0,tc(ut,$,K,ze,xt,Qe),xt.side=Yt,xt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Q.updateMultisampleRenderTarget(me),Q.updateRenderTargetMipmap(me))}E.setRenderTarget(Ne,Pe,He),E.setClearColor(oe,re),Be!==void 0&&(K.viewport=Be),E.toneMapping=ke}function cs(M,F,$){const K=F.isScene===!0?F.overrideMaterial:null;for(let O=0,me=M.length;O<me;O++){const ye=M[O],Ne=ye.object,Pe=ye.geometry,He=ye.group;let ke=ye.material;ke.allowOverride===!0&&K!==null&&(ke=K),Ne.layers.test($.layers)&&tc(Ne,F,$,Pe,ke,He)}}function tc(M,F,$,K,O,me){M.onBeforeRender(E,F,$,K,O,me),M.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(E,F,$,K,M,me),O.transparent===!0&&O.side===zn&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,E.renderBufferDirect($,F,K,O,M,me),O.side=mi,O.needsUpdate=!0,E.renderBufferDirect($,F,K,O,M,me),O.side=zn):E.renderBufferDirect($,F,K,O,M,me),M.onAfterRender(E,F,$,K,O,me)}function us(M,F,$){F.isScene!==!0&&(F=Fe);const K=J.get(M),O=p.state.lights,me=p.state.shadowsArray,ye=O.state.version,Ne=te.getParameters(M,O.state,me,F,$),Pe=te.getProgramCacheKey(Ne);let He=K.programs;K.environment=M.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(M.isMeshStandardMaterial?S:xe).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,He===void 0&&(M.addEventListener("dispose",Ue),He=new Map,K.programs=He);let ke=He.get(Pe);if(ke!==void 0){if(K.currentProgram===ke&&K.lightsStateVersion===ye)return ic(M,Ne),ke}else Ne.uniforms=te.getUniforms(M),M.onBeforeCompile(Ne,E),ke=te.acquireProgram(Ne,Pe),He.set(Pe,ke),K.uniforms=Ne.uniforms;const Be=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=Te.uniform),ic(M,Ne),K.needsLights=Qh(M),K.lightsStateVersion=ye,K.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=ke,K.uniformsList=null,ke}function nc(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=$s.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function ic(M,F){const $=J.get(M);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Zh(M,F,$,K,O){F.isScene!==!0&&(F=Fe),Q.resetTextureUnits();const me=F.fog,ye=K.isMeshStandardMaterial?F.environment:null,Ne=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:xr,Pe=(K.isMeshStandardMaterial?S:xe).get(K.envMap||ye),He=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ke=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Be=!!$.morphAttributes.position,Ze=!!$.morphAttributes.normal,lt=!!$.morphAttributes.color;let St=hi;K.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(St=E.toneMapping);const mt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ut=mt!==void 0?mt.length:0,ze=J.get(K),xt=p.state.lights;if(he===!0&&(Se===!0||M!==y)){const Ft=M===y&&K.id===b;Te.setState(K,M,Ft)}let Qe=!1;K.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==xt.state.version||ze.outputColorSpace!==Ne||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Pe||K.fog===!0&&ze.fog!==me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Te.numPlanes||ze.numIntersection!==Te.numIntersection)||ze.vertexAlphas!==He||ze.vertexTangents!==ke||ze.morphTargets!==Be||ze.morphNormals!==Ze||ze.morphColors!==lt||ze.toneMapping!==St||ze.morphTargetsCount!==ut)&&(Qe=!0):(Qe=!0,ze.__version=K.version);let Yt=ze.currentProgram;Qe===!0&&(Yt=us(K,F,O));let zi=!1,$t=!1,yr=!1;const _t=Yt.getUniforms(),en=ze.uniforms;if(H.useProgram(Yt.program)&&(zi=!0,$t=!0,yr=!0),K.id!==b&&(b=K.id,$t=!0),zi||y!==M){H.buffers.depth.getReversed()?(P.copy(M.projectionMatrix),v0(P),x0(P),_t.setValue(v,"projectionMatrix",P)):_t.setValue(v,"projectionMatrix",M.projectionMatrix),_t.setValue(v,"viewMatrix",M.matrixWorldInverse);const kt=_t.map.cameraPosition;kt!==void 0&&kt.setValue(v,ee.setFromMatrixPosition(M.matrixWorld)),Z.logarithmicDepthBuffer&&_t.setValue(v,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&_t.setValue(v,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,$t=!0,yr=!0)}if(O.isSkinnedMesh){_t.setOptional(v,O,"bindMatrix"),_t.setOptional(v,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),_t.setValue(v,"boneTexture",Ft.boneTexture,Q))}O.isBatchedMesh&&(_t.setOptional(v,O,"batchingTexture"),_t.setValue(v,"batchingTexture",O._matricesTexture,Q),_t.setOptional(v,O,"batchingIdTexture"),_t.setValue(v,"batchingIdTexture",O._indirectTexture,Q),_t.setOptional(v,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(v,"batchingColorTexture",O._colorsTexture,Q));const tn=$.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Re.update(O,$,Yt),($t||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,_t.setValue(v,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(en.envMap.value=Pe,en.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),$t&&(_t.setValue(v,"toneMappingExposure",E.toneMappingExposure),ze.needsLights&&Jh(en,yr),me&&K.fog===!0&&k.refreshFogUniforms(en,me),k.refreshMaterialUniforms(en,K,B,ae,p.state.transmissionRenderTarget[M.id]),$s.upload(v,nc(ze),en,Q)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&($s.upload(v,nc(ze),en,Q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&_t.setValue(v,"center",O.center),_t.setValue(v,"modelViewMatrix",O.modelViewMatrix),_t.setValue(v,"normalMatrix",O.normalMatrix),_t.setValue(v,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ft=K.uniformsGroups;for(let kt=0,Ro=Ft.length;kt<Ro;kt++){const vi=Ft[kt];U.update(vi,Yt),U.bind(vi,Yt)}}return Yt}function Jh(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Qh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(M,F,$){const K=J.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=F,J.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:$,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const $=J.get(M);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};const ed=v.createFramebuffer();this.setRenderTarget=function(M,F=0,$=0){z=M,D=F,C=$;let K=!0,O=null,me=!1,ye=!1;if(M){const Pe=J.get(M);if(Pe.__useDefaultFramebuffer!==void 0)H.bindFramebuffer(v.FRAMEBUFFER,null),K=!1;else if(Pe.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(Pe.__hasExternalTextures)Q.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Be=M.depthTexture;if(Pe.__boundDepthTexture!==Be){if(Be!==null&&J.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const ke=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?O=ke[F][$]:O=ke[F],me=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?O=J.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?O=ke[$]:O=ke,I.copy(M.viewport),se.copy(M.scissor),q=M.scissorTest}else I.copy(Ae).multiplyScalar(B).floor(),se.copy(Oe).multiplyScalar(B).floor(),q=Ke;if($!==0&&(O=ed),H.bindFramebuffer(v.FRAMEBUFFER,O)&&K&&H.drawBuffers(M,O),H.viewport(I),H.scissor(se),H.setScissorTest(q),me){const Pe=J.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pe.__webglTexture,$)}else if(ye){const Pe=J.get(M.texture),He=F;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Pe.__webglTexture,$,He)}else if(M!==null&&$!==0){const Pe=J.get(M.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Pe.__webglTexture,$)}b=-1},this.readRenderTargetPixels=function(M,F,$,K,O,me,ye,Ne=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Pe=Pe[ye]),Pe){H.bindFramebuffer(v.FRAMEBUFFER,Pe);try{const He=M.textures[Ne],ke=He.format,Be=He.type;if(!Z.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-K&&$>=0&&$<=M.height-O&&(M.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ne),v.readPixels(F,$,K,O,ve.convert(ke),ve.convert(Be),me))}finally{const He=z!==null?J.get(z).__webglFramebuffer:null;H.bindFramebuffer(v.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(M,F,$,K,O,me,ye,Ne=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ye!==void 0&&(Pe=Pe[ye]),Pe)if(F>=0&&F<=M.width-K&&$>=0&&$<=M.height-O){H.bindFramebuffer(v.FRAMEBUFFER,Pe);const He=M.textures[Ne],ke=He.format,Be=He.type;if(!Z.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ze),v.bufferData(v.PIXEL_PACK_BUFFER,me.byteLength,v.STREAM_READ),M.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ne),v.readPixels(F,$,K,O,ve.convert(ke),ve.convert(Be),0);const lt=z!==null?J.get(z).__webglFramebuffer:null;H.bindFramebuffer(v.FRAMEBUFFER,lt);const St=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await _0(v,St,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ze),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,me),v.deleteBuffer(Ze),v.deleteSync(St),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,$=0){const K=Math.pow(2,-$),O=Math.floor(M.image.width*K),me=Math.floor(M.image.height*K),ye=F!==null?F.x:0,Ne=F!==null?F.y:0;Q.setTexture2D(M,0),v.copyTexSubImage2D(v.TEXTURE_2D,$,0,0,ye,Ne,O,me),H.unbindTexture()};const td=v.createFramebuffer(),nd=v.createFramebuffer();this.copyTextureToTexture=function(M,F,$=null,K=null,O=0,me=null){me===null&&(O!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=O,O=0):me=0);let ye,Ne,Pe,He,ke,Be,Ze,lt,St;const mt=M.isCompressedTexture?M.mipmaps[me]:M.image;if($!==null)ye=$.max.x-$.min.x,Ne=$.max.y-$.min.y,Pe=$.isBox3?$.max.z-$.min.z:1,He=$.min.x,ke=$.min.y,Be=$.isBox3?$.min.z:0;else{const tn=Math.pow(2,-O);ye=Math.floor(mt.width*tn),Ne=Math.floor(mt.height*tn),M.isDataArrayTexture?Pe=mt.depth:M.isData3DTexture?Pe=Math.floor(mt.depth*tn):Pe=1,He=0,ke=0,Be=0}K!==null?(Ze=K.x,lt=K.y,St=K.z):(Ze=0,lt=0,St=0);const ut=ve.convert(F.format),ze=ve.convert(F.type);let xt;F.isData3DTexture?(Q.setTexture3D(F,0),xt=v.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),xt=v.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),xt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=v.getParameter(v.UNPACK_ROW_LENGTH),Yt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),zi=v.getParameter(v.UNPACK_SKIP_PIXELS),$t=v.getParameter(v.UNPACK_SKIP_ROWS),yr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,mt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,mt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,He),v.pixelStorei(v.UNPACK_SKIP_ROWS,ke),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Be);const _t=M.isDataArrayTexture||M.isData3DTexture,en=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const tn=J.get(M),Ft=J.get(F),kt=J.get(tn.__renderTarget),Ro=J.get(Ft.__renderTarget);H.bindFramebuffer(v.READ_FRAMEBUFFER,kt.__webglFramebuffer),H.bindFramebuffer(v.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let vi=0;vi<Pe;vi++)_t&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,J.get(M).__webglTexture,O,Be+vi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,J.get(F).__webglTexture,me,St+vi)),v.blitFramebuffer(He,ke,ye,Ne,Ze,lt,ye,Ne,v.DEPTH_BUFFER_BIT,v.NEAREST);H.bindFramebuffer(v.READ_FRAMEBUFFER,null),H.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||J.has(M)){const tn=J.get(M),Ft=J.get(F);H.bindFramebuffer(v.READ_FRAMEBUFFER,td),H.bindFramebuffer(v.DRAW_FRAMEBUFFER,nd);for(let kt=0;kt<Pe;kt++)_t?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,tn.__webglTexture,O,Be+kt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,tn.__webglTexture,O),en?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ft.__webglTexture,me,St+kt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ft.__webglTexture,me),O!==0?v.blitFramebuffer(He,ke,ye,Ne,Ze,lt,ye,Ne,v.COLOR_BUFFER_BIT,v.NEAREST):en?v.copyTexSubImage3D(xt,me,Ze,lt,St+kt,He,ke,ye,Ne):v.copyTexSubImage2D(xt,me,Ze,lt,He,ke,ye,Ne);H.bindFramebuffer(v.READ_FRAMEBUFFER,null),H.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else en?M.isDataTexture||M.isData3DTexture?v.texSubImage3D(xt,me,Ze,lt,St,ye,Ne,Pe,ut,ze,mt.data):F.isCompressedArrayTexture?v.compressedTexSubImage3D(xt,me,Ze,lt,St,ye,Ne,Pe,ut,mt.data):v.texSubImage3D(xt,me,Ze,lt,St,ye,Ne,Pe,ut,ze,mt):M.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,me,Ze,lt,ye,Ne,ut,ze,mt.data):M.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,me,Ze,lt,mt.width,mt.height,ut,mt.data):v.texSubImage2D(v.TEXTURE_2D,me,Ze,lt,ye,Ne,ut,ze,mt);v.pixelStorei(v.UNPACK_ROW_LENGTH,Qe),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Yt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,zi),v.pixelStorei(v.UNPACK_SKIP_ROWS,$t),v.pixelStorei(v.UNPACK_SKIP_IMAGES,yr),me===0&&F.generateMipmaps&&v.generateMipmap(xt),H.unbindTexture()},this.copyTextureToTexture3D=function(M,F,$=null,K=null,O=0){return ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,$,K,O)},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),H.unbindTexture()},this.resetState=function(){D=0,C=0,z=null,H.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const FE={key:0,class:"fallback-background"},OE={__name:"FireAshBackground",setup(n){const e={PARTICLE_COUNT:300,WIND_RADIUS:80,WIND_RADIUS_SQUARED:6400,WIND_STRENGTH:1200,HORIZONTAL_DRIFT:.3,MIN_UPWARD_SPEED:.5,MIN_SIZE:4,VELOCITY_DAMPING:.98,VELOCITY_RESTORATION:.02,MOUSE_VELOCITY_DAMPING:.95,MOUSE_DRAG_FACTOR:.05,WIND_FORCE_FACTOR:.1,MAX_VELOCITY_X:2,MIN_VELOCITY_X:-2,MAX_VELOCITY_Y:3,MIN_VELOCITY_Y:-1,LIFETIME_INCREMENT:8e-4,LIFETIME_INCREMENT_FAST:.004,MAX_PIXEL_RATIO:1.5,UPWARD_SPEED_RANGE:.8,SIZE_RANGE:6,AVERAGE_UPWARD_SPEED:.9},t=hr(null),i=hr(!0);let r,s,o,a,l,c=e.PARTICLE_COUNT,u=e.PARTICLE_COUNT,f=new nt(-1e4,-1e4),h=new nt(0,0),d=new nt(-1e4,-1e4),_,x,m,p,w,T,E=!0,N=0;const D=()=>{try{const re=document.createElement("canvas");return!!(re.getContext("webgl")||re.getContext("experimental-webgl"))}catch{return!1}},C=()=>{E=!document.hidden},z=re=>{re.preventDefault(),l&&(cancelAnimationFrame(l),l=null)},b=()=>{I()},y=()=>{const re=Math.random();return{x:(re-.5)*e.HORIZONTAL_DRIFT,y:e.MIN_UPWARD_SPEED+re*e.UPWARD_SPEED_RANGE}},I=()=>{if(!t.value)return;if(!D()){i.value=!1,console.warn("WebGL not supported, using fallback background");return}const re=t.value.clientWidth,G=t.value.clientHeight;r=new W0,s=new Wh(re/-2,re/2,G/2,G/-2,.1,1e3),s.position.z=1;try{o=new NE({alpha:!0,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch(P){console.error("Failed to create WebGL renderer:",P),i.value=!1;return}o.setSize(re,G),o.setPixelRatio(Math.min(window.devicePixelRatio,e.MAX_PIXEL_RATIO)),t.value.appendChild(o.domElement),o.domElement.addEventListener("webglcontextlost",z,!1),o.domElement.addEventListener("webglcontextrestored",b,!1);const ae=new Zn,B=new Float32Array(e.PARTICLE_COUNT*3),ge=new Float32Array(e.PARTICLE_COUNT*3),_e=new Float32Array(e.PARTICLE_COUNT),Ae=new Float32Array(e.PARTICLE_COUNT),Oe=new Float32Array(e.PARTICLE_COUNT);for(let P=0;P<e.PARTICLE_COUNT;P++){const W=P*3;B[W]=(Math.random()-.5)*re,B[W+1]=(Math.random()-.5)*G,B[W+2]=0;const ee=y();ge[W]=ee.x,ge[W+1]=ee.y,ge[W+2]=0,_e[P]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,Ae[P]=Math.random()*Math.PI*2,Oe[P]=Math.random()}ae.setAttribute("position",new gt(B,3)),ae.setAttribute("velocity",new gt(ge,3)),ae.setAttribute("size",new gt(_e,1)),ae.setAttribute("phase",new gt(Ae,1)),ae.setAttribute("lifetime",new gt(Oe,1));const Ke=new jn({uniforms:{time:{value:0}},vertexShader:`
      attribute float size;
      attribute float phase;
      attribute float lifetime;
      uniform float time;
      varying float vOpacity;
      varying vec3 vColor;

      void main() {
        // Flickering effect
        float flicker = sin(time * 3.0 + phase) * 0.3 + 0.7;

        // Fade based on lifetime (fade in at start, fade out near end)
        float fade = smoothstep(0.0, 0.1, lifetime) * smoothstep(1.0, 0.7, lifetime);
        vOpacity = fade * flicker;

        // Color variation - from yellow-white hot to orange-red
        float heat = 1.0 - lifetime;
        vec3 hotColor = vec3(1.0, 0.9, 0.7);    // Yellow-white
        vec3 warmColor = vec3(1.0, 0.5, 0.2);   // Orange
        vec3 coolColor = vec3(0.8, 0.2, 0.1);   // Red

        if(heat > 0.6) {
          vColor = mix(warmColor, hotColor, (heat - 0.6) / 0.4);
        } else {
          vColor = mix(coolColor, warmColor, heat / 0.6);
        }

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * flicker;
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying float vOpacity;
      varying vec3 vColor;

      void main() {
        vec2 center = gl_PointCoord - vec2(0.5);
        float dist = length(center);

        // Early exit for invisible pixels
        if (dist > 0.5) discard;

        // Soft circular particle with glow
        float alpha = smoothstep(0.5, 0.0, dist);
        alpha = pow(alpha, 1.5);

        // Add glow
        float glow = smoothstep(0.5, 0.2, dist);
        vec3 finalColor = vColor * (1.0 + glow * 0.5);

        gl_FragColor = vec4(finalColor, alpha * vOpacity);
      }
    `,transparent:!0,blending:Ua,depthWrite:!1});a=new j0(ae,Ke),r.add(a);const ie=(P,W)=>{if(!t.value)return;const ee=t.value.getBoundingClientRect();f.x=P-ee.left-re/2,f.y=-(W-ee.top-G/2),h.x=f.x-d.x,h.y=f.y-d.y,d.copy(f)};_=P=>{ie(P.clientX,P.clientY)},x=P=>{P.touches.length>0&&ie(P.touches[0].clientX,P.touches[0].clientY)};const he=()=>{f.set(-1e4,-1e4),d.set(-1e4,-1e4),h.set(0,0)};m=he,p=he,w=()=>{se()},T=()=>{q()},window.addEventListener("mousemove",_,{passive:!0}),window.addEventListener("touchmove",x,{passive:!0}),window.addEventListener("touchend",p,{passive:!0}),window.addEventListener("mouseleave",m,{passive:!0}),window.addEventListener("increase-particles",w),window.addEventListener("reset-particles",T);const Se=()=>{if(l=requestAnimationFrame(Se),!E)return;const P=performance.now()*.001;Ke.uniforms.time.value=P;const W=a.geometry.attributes.position.array,ee=a.geometry.attributes.velocity.array,le=a.geometry.attributes.size.array,Fe=a.geometry.attributes.phase.array,A=a.geometry.attributes.lifetime.array,R=t.value.clientHeight,v=t.value.clientWidth,ne=R/2;h.x*=e.MOUSE_VELOCITY_DAMPING,h.y*=e.MOUSE_VELOCITY_DAMPING;let Y=[];N++;const Z=N%2===0;for(let H=0;H<c;H++){const X=H*3,J=H>=u,Q=W[X],xe=W[X+1];if(Z){const S=Q-f.x,g=xe-f.y,L=Math.abs(S),V=Math.abs(g);if(L<=e.WIND_RADIUS&&V<=e.WIND_RADIUS){const te=S*S+g*g;if(te<e.WIND_RADIUS_SQUARED&&te>0){const k=Math.sqrt(te),de=(1-k/e.WIND_RADIUS)*e.WIND_STRENGTH*e.WIND_FORCE_FACTOR/k;ee[X]+=S*de+h.x*e.MOUSE_DRAG_FACTOR,ee[X+1]+=g*de+h.y*e.MOUSE_DRAG_FACTOR,ee[X]=Math.max(e.MIN_VELOCITY_X,Math.min(e.MAX_VELOCITY_X,ee[X])),ee[X+1]=Math.max(e.MIN_VELOCITY_Y,Math.min(e.MAX_VELOCITY_Y,ee[X+1]))}}}if(ee[X]*=e.VELOCITY_DAMPING,ee[X+1]=ee[X+1]*e.VELOCITY_DAMPING+e.AVERAGE_UPWARD_SPEED*e.VELOCITY_RESTORATION,W[X]+=ee[X],W[X+1]+=ee[X+1],A[H]+=J?e.LIFETIME_INCREMENT_FAST:e.LIFETIME_INCREMENT,W[X+1]>ne+50||A[H]>1)if(J)Y.push(H);else{W[X]=(Math.random()-.5)*v,W[X+1]=(Math.random()-.5)*R,A[H]=0;const S=y();ee[X]=S.x,ee[X+1]=S.y}}if(Y.length>0&&c>u){Y.sort((H,X)=>X-H);for(const H of Y){if(H<c-1){const X=c-1;for(let S=0;S<3;S++){const g=W[H*3+S];W[H*3+S]=W[X*3+S],W[X*3+S]=g;const L=ee[H*3+S];ee[H*3+S]=ee[X*3+S],ee[X*3+S]=L}const J=le[H];le[H]=le[X],le[X]=J;const Q=Fe[H];Fe[H]=Fe[X],Fe[X]=Q;const xe=A[H];A[H]=A[X],A[X]=xe}c--}c<=u&&(c=u,a.geometry.setAttribute("position",new gt(W.subarray(0,u*3),3)),a.geometry.setAttribute("velocity",new gt(ee.subarray(0,u*3),3)),a.geometry.setAttribute("size",new gt(le.subarray(0,u),1)),a.geometry.setAttribute("phase",new gt(Fe.subarray(0,u),1)),a.geometry.setAttribute("lifetime",new gt(A.subarray(0,u),1)))}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.velocity.needsUpdate=!0,a.geometry.attributes.lifetime.needsUpdate=!0,o.render(r,s)};Se()},se=()=>{if(!a||!t.value)return;const re=t.value.clientWidth,G=t.value.clientHeight,B=c+300,ge=a.geometry.attributes.position.array,_e=a.geometry.attributes.velocity.array,Ae=a.geometry.attributes.size.array,Oe=a.geometry.attributes.phase.array,Ke=a.geometry.attributes.lifetime.array,ie=new Float32Array(B*3),he=new Float32Array(B*3),Se=new Float32Array(B),P=new Float32Array(B),W=new Float32Array(B);ie.set(ge),he.set(_e),Se.set(Ae),P.set(Oe),W.set(Ke);for(let ee=c;ee<B;ee++){const le=ee*3;ie[le]=(Math.random()-.5)*re,ie[le+1]=(Math.random()-.5)*G,ie[le+2]=0;const Fe=y();he[le]=Fe.x,he[le+1]=Fe.y,he[le+2]=0,Se[ee]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,P[ee]=Math.random()*Math.PI*2,W[ee]=Math.random()}a.geometry.setAttribute("position",new gt(ie,3)),a.geometry.setAttribute("velocity",new gt(he,3)),a.geometry.setAttribute("size",new gt(Se,1)),a.geometry.setAttribute("phase",new gt(P,1)),a.geometry.setAttribute("lifetime",new gt(W,1)),c=B,u=B},q=()=>{!a||!t.value||u===e.PARTICLE_COUNT||(u=e.PARTICLE_COUNT)},oe=()=>{if(!t.value||!o||!s)return;const re=t.value.clientWidth,G=t.value.clientHeight;s.left=re/-2,s.right=re/2,s.top=G/2,s.bottom=G/-2,s.updateProjectionMatrix(),o.setSize(re,G)};return _o(()=>{I(),window.addEventListener("resize",oe,{passive:!0}),document.addEventListener("visibilitychange",C)}),vo(()=>{l&&cancelAnimationFrame(l),window.removeEventListener("resize",oe),document.removeEventListener("visibilitychange",C),_&&window.removeEventListener("mousemove",_),x&&window.removeEventListener("touchmove",x),p&&window.removeEventListener("touchend",p),m&&window.removeEventListener("mouseleave",m),w&&window.removeEventListener("increase-particles",w),T&&window.removeEventListener("reset-particles",T),o&&(o.domElement&&(o.domElement.removeEventListener("webglcontextlost",z),o.domElement.removeEventListener("webglcontextrestored",b)),o.dispose(),t.value&&o.domElement&&t.value.contains(o.domElement)&&t.value.removeChild(o.domElement)),a&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())}),(re,G)=>(We(),$e("div",{ref_key:"container",ref:t,class:"ash-container"},[i.value?hn("",!0):(We(),$e("div",FE))],512))}},BE=Eo(OE,[["__scopeId","data-v-15f5237e"]]),zE={class:"font-sans flex flex-col min-h-screen bg-black relative app-container"},HE={class:"pt-0 flex flex-col space-y-16 md:space-y-64 relative z-10"},kE={__name:"App",setup(n){return(e,t)=>{const i=Cf("router-view");return We(),$e("div",zE,[t[0]||(t[0]=we("div",{class:"gradient-bg"},null,-1)),tt(BE),we("div",HE,[tt(i),tt(A_)])])}}},VE=Eo(kE,[["__scopeId","data-v-01328050"]]),GE="modulepreload",WE=function(n){return"/2025/"+n},Wu={},XE=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(c=>{if(c=WE(c),c in Wu)return;Wu[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":GE,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((d,_)=>{h.addEventListener("load",d),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},qE="/2025/assets/2025-Dbj42giJ.png",YE={__name:"FlameText",props:{text:{type:String,default:"Ember to Stars"},fontSize:{type:Number,default:60}},setup(n){return(e,t)=>(We(),$e("div",{class:"fire-text",style:es({fontSize:n.fontSize+"px"})},Jt(n.text),5))}},$E=Eo(YE,[["__scopeId","data-v-06a08e99"]]),jE={class:"min-h-screen flex items-center justify-center text-white relative"},KE={class:"flex flex-col items-center gap-y-4 relative z-10"},ZE={class:"text-center"},JE={class:"text-center px-4 py-8"},QE={class:"flow flow-col space-y-8 select-none"},ey={__name:"Teaser2025",setup(n){const e=hr(typeof window<"u"?window.innerWidth:1024),t=hr(!1),i=Mt(()=>e.value<640?"50vw":"320px"),r=()=>{window.dispatchEvent(new CustomEvent("increase-particles")),t.value=!0,setTimeout(()=>{t.value=!1},600)},s=()=>{e.value=window.innerWidth};_o(()=>{window.addEventListener("resize",s)}),vo(()=>{window.removeEventListener("resize",s)});const o=()=>{const f={title:"Let'Swift 2025",description:"Let'Swift 2025 Conference - iOS Swift Developer Conference",location:"세종대학교 컨벤션센터, 서울특별시 광진구",startDate:"20251124T100000",endDate:"20251124T180000",timestamp:new Date().toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"};return`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Let'Swift//Let'Swift 2025//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:Asia/Seoul
BEGIN:STANDARD
DTSTART:19700101T000000
TZOFFSETFROM:+0900
TZOFFSETTO:+0900
TZNAME:KST
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:letswift2025@letswift.kr
DTSTART;TZID=Asia/Seoul:${f.startDate}
DTEND;TZID=Asia/Seoul:${f.endDate}
DTSTAMP:${f.timestamp}
SUMMARY:${f.title}
DESCRIPTION:${f.description}
LOCATION:${f.location}
URL:https://letswift.kr/2025
CATEGORIES:CONFERENCE,TECHNOLOGY
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`},a=(f,h)=>{const d=new Blob([f],{type:"text/calendar;charset=utf-8"}),_=document.createElement("a");_.href=window.URL.createObjectURL(d),_.download=h,document.body.appendChild(_),_.click(),document.body.removeChild(_),window.URL.revokeObjectURL(_.href)},l=()=>{window.open("https://www.ticketa.co/events/35","_blank")},c=()=>{try{const f=o();a(f,"letswift-2025.ics")}catch(f){console.error("Failed to generate calendar file:",f),window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Let%27Swift%202025&dates=20251124T010000Z/20251124T090000Z&details=Let%27Swift%202025%20Conference&location=%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B4%91%EA%B0%9C%ED%86%A0%EA%B4%80","_blank")}},u=()=>{window.location.href="mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"};return(f,h)=>(We(),$e("div",jE,[we("div",KE,[we("div",ZE,[we("img",{src:qE,alt:"Let'Swift 2025",style:es({width:i.value,height:"auto"}),class:fo(["select-none cursor-pointer",{flash:t.value}]),onClick:r},null,6)]),we("div",JE,[we("div",QE,[h[0]||(h[0]=we("h1",{class:"text-5xl md:text-7xl leading-none font-black tracking-normal"}," Let'Swift 2025 ",-1)),tt($E,{text:"Ember to Stars",fontSize:e.value<768?38:52},null,8,["fontSize"])]),h[1]||(h[1]=we("div",{class:"mt-8 text-3xl font-medium space-y-2"},[we("p",{class:"text-2xl md:text-2xl font-bold text-zinc-200"},"2025.11.24 월요일"),we("p",{class:"text-xl md:text-2xl font-bold text-zinc-300"},"세종대학교 컨벤션센터")],-1)),we("div",{class:"mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center py-6"},[we("button",{onClick:l,class:"px-6 py-3 rounded-full bg-yellow-500/40 border border-yellow-400/60 text-white text-lg font-bold hover:bg-yellow-500/50 hover:border-yellow-400/80 transition-all duration-200 active:bg-yellow-500/60 select-none","aria-label":"Let'Swift 2025 티켓 구매하기"}," 티켓 구매 "),we("button",{onClick:c,class:"px-6 py-3 rounded-full bg-red-500/40 border border-red-400/60 text-white text-lg font-bold hover:bg-red-500/50 hover:border-red-400/80 transition-all duration-200 active:bg-red-500/60 select-none","aria-label":"Let'Swift 2025 행사를 캘린더에 추가"}," 캘린더에 추가 "),we("button",{onClick:u,class:"px-6 py-3 rounded-full bg-themeMain/40 border border-themeMain/60 text-white text-lg font-bold hover:bg-themeMain/50 hover:border-themeMain/80 transition-all duration-200 active:bg-themeMain/60 select-none","aria-label":"Let'Swift 2025 후원 문의하기"}," 후원 문의 ")])])])]))}},ty=Eo(ey,[["__scopeId","data-v-7bafe2bd"]]),ny={class:"flex justify-center"},iy={class:"w-full px-8 xl:px-0 max-w-[1280px] flex justify-center"},ry={class:"inline-flex flex-col items-start"},sy={class:"relative z-10 font-black text-4xl md:text-5xl text-white"},oy={__name:"SectionHeader",props:{title:{type:String,required:!0}},setup(n){return(e,t)=>(We(),$e("div",ny,[we("div",iy,[we("div",ry,[we("h3",sy,Jt(n.title),1),t[0]||(t[0]=Ra('<div class="flex items-center gap-2 -mt-3"><div class="relative h-4 w-32 md:w-40 bg-orange-600"><div class="absolute right-0 top-0 bottom-0 w-4 bg-orange-600" style="transform:skewX(-20deg);transform-origin:bottom right;"></div></div><div class="flex gap-1"><div class="w-1 h-4 bg-orange-600" style="transform:skewX(-20deg);"></div><div class="w-1 h-4 bg-orange-600" style="transform:skewX(-20deg);"></div><div class="w-1 h-4 bg-orange-600" style="transform:skewX(-20deg);"></div></div></div>',1))])])]))}},ay=[{id:"1",name:"박건우",name_en:"",nickname:"",image_name:"geonwoo_park.jpeg",image_url:"",affiliation:"스포카",affiliation_en:"",description:`좋은 제품을 위한 단순한 도구를
탐구하는 메이커입니다.`,description_en:"",social:{web:"",email:"rjsdnqkr0@gmail.com",github:"https://github.com/gunoooo",linkedin:"",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"2",name:"유현식",name_en:"",nickname:"",image_name:"hyunsik_yoo.jpeg",image_url:"",affiliation:"카카오스타일",affiliation_en:"",description:"붕어빵 굽는 가슴속 3천원 개발자입니다",description_en:"",social:{web:"",email:"",github:"https://github.com/Raymond-Sik",linkedin:"https://www.linkedin.com/in/hyun-sik-yoo",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"3",name:"이승준",name_en:"",nickname:"첼란",image_name:"seungjun_lee.jpeg",image_url:"",affiliation:"",affiliation_en:"",description:`어제보다 덜 부끄러운 코드를 쓰고 싶은
주니어 iOS 개발자 입니다!`,description_en:"",social:{web:"",email:"",github:"https://github.com/ValseLee",linkedin:"https://www.linkedin.com/in/celanlee",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"4",name:"한가온",name_en:"",nickname:"가온",image_name:"gaon_han.jpg",image_url:"",affiliation:"모스픽",affiliation_en:"",description:`안녕하세요, 가온입니다.
섬세함과 정성으로 루게릭병 환우분들을 위한
모스픽을 만들어가고 있습니다.`,description_en:"",social:{web:"",email:"xnoag@icloud.com",github:"",linkedin:"https://www.linkedin.com/in/xnoag/",x:"",mastodon:"",facebook:"",instagram:"https://www.instagram.com/xnoag/",thread:"",youtube:"",medium:""}},{id:"5",name:"고드름",name_en:"",nickname:"",image_name:"godreum.jpg",image_url:"",affiliation:"코드스쿼드",affiliation_en:"",description:`뜨거워진 스위프트로
임베디드와 맥 개발을 즐기는 아웃사이더`,description_en:"",social:{web:"",email:"",github:"https://github.com/godrm",linkedin:"",x:"https://x.com/godrm",mastodon:"",facebook:"",instagram:"https://instagram.com/godrm",thread:"",youtube:"",medium:""}},{id:"6",name:"송영모",name_en:"",nickname:"",image_name:"youngmo_song.jpeg",image_url:"",affiliation:"강남언니",affiliation_en:"",description:`개발자이자, software 제품를 만드는 사람로서
유저에게 좋은 가치를 제공하려 노력합니다.`,description_en:"",social:{web:"",email:"",github:"https://github.com/annapo99",linkedin:"https://www.linkedin.com/in/annapo923",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"7",name:"윤태중",name_en:"",nickname:"",image_name:"taejoong_yoon.jpg",image_url:"",affiliation:"카카오",affiliation_en:"",description:"불규칙 속의 규칙을 찾습니다",description_en:"",social:{web:"",email:"",github:"",linkedin:"https://www.linkedin.com/in/taejoongyoon/",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"8",name:"고상범",name_en:"",nickname:"",image_name:"sangbeom_go.jpeg",image_url:"",affiliation:"",affiliation_en:"",description:"미디어와 그래픽스에 관심이 많은 개발자 입니다",description_en:"",social:{web:"",email:"",github:"",linkedin:"https://www.linkedin.com/in/sangbum-goh-540aa6159/",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"9",name:"손원영",name_en:"",nickname:"",image_name:"wonyoung_son.jpg",image_url:"",affiliation:"",affiliation_en:"",description:"Swift로 풀스택을 꿈꾸는 개발자",description_en:"",social:{web:"",email:"",github:"",linkedin:"https://www.linkedin.com/in/wyson",x:"https://x.com/garoad",mastodon:"",facebook:"",instagram:"https://www.instagram.com/garoad",thread:"",youtube:"",medium:""}},{id:"10",name:"김부성",name_en:"",nickname:"",image_name:"buseong_kim.jpeg",image_url:"",affiliation:"",affiliation_en:"",description:`개발과 애플을 사랑하며
더 나은 내일을 기대하는 iOS 개발자입니다.`,description_en:"",social:{web:"",email:"flight@skyline23.com",github:"https://github.com/Skyline-23",linkedin:"",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"11",name:"장진혁",name_en:"",nickname:"",image_name:"jinhyuk_jang.png",image_url:"",affiliation:"카카오스타일",affiliation_en:"",description:`카카오스타일에서
지그재그를 더 좋게 만들고 있어요 ✨`,description_en:"",social:{web:"",email:"jjhyuk15@gmail.com",github:"",linkedin:"https://kr.linkedin.com/in/%EC%A7%84%ED%98%81-%EC%9E%A5-08832a1ab",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"12",name:"이재웅",name_en:"",nickname:"Curry",image_name:"jaewoong_lee.jpeg",image_url:"",affiliation:"KiTbetter (전 MUZLIVE)",affiliation_en:"",description:"항상 시도하는 개발자 이재웅입니다.",description_en:"",social:{web:"https://www.threads.com/@jaewoonglee_?igshid=NTc4MTIwNjQ2YQ==",email:"jaewoong0624@gmail.com",github:"",linkedin:"https://www.linkedin.com/in/iosjaewoong/",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"13",name:"유경모",name_en:"",nickname:"Demian",image_name:"gyeongmo_yoo.jpeg",image_url:"",affiliation:"Apple Developer Academy 4th Learner",affiliation_en:"",description:"Home, Home, Sweet Home",description_en:"",social:{web:"",email:"",github:"https://github.com/YooGyeongMo",linkedin:"https://www.linkedin.com/in/gyeongmo-yoo-b4098b316/",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}},{id:"14",name:"최재훈",name_en:"",nickname:"",image_name:"jaehun_choi.jpg",image_url:"",affiliation:"",affiliation_en:"",description:`On-Device AI SW 엔지니어입니다.
Vision Pro 애플 XR 앱 개발도 즐겨 합니다.
모두의연구소, 카카오임팩트 등 개발 커뮤니티에서도 활발히 활동 중입니다.`,description_en:"",social:{web:"",email:"",github:"",linkedin:"https://linkedin.com/in/jaydenchoe",x:"",mastodon:"",facebook:"",instagram:"",thread:"",youtube:"",medium:""}}],ly={class:"flex flex-col space-y-8 items-center text-white"},cy={class:"flex flex-col gap-y-8 items-end"},uy=["src"],fy={class:"flex flex-col gap-y-4 items-end"},hy={key:0},dy={class:"font-bold text-lg md:text-xl"},py={class:"font-bold text-sm md:text-base opacity-60"},my={key:1},gy={key:0,class:"font-bold text-lg md:text-xl"},_y={key:1,class:"font-bold text-lg md:text-xl"},vy={class:"text-xs md:text-sm text-right text-pretty font-semibold text-slate-300 opacity-90 line-clamp-4 whitespace-pre-line"},xy={class:"flex pt-2 gap-x-4 gap-y-4 justify-end pointer-cursor"},Sy=["href"],My=["href"],Ey=["href"],yy=["href"],by=["href"],Ty=["href"],Ay=["href"],wy=["href"],Ry=["href"],Cy=["href"],Py={__name:"Speaker",props:["person"],setup(n){const e=t=>`/2025/assets/speakers/${t}`;return(t,i)=>(We(),$e("div",ly,[we("div",cy,[we("img",{src:e(n.person.image_name),loading:"lazy",class:"w-36 md:w-44 h-36 md:h-44 bg-white rounded-tl-full object-cover z-10 border-black border-4"},null,8,uy),we("div",fy,[n.person.nickname!==""&&n.person.name!==""?(We(),$e("div",hy,[we("div",dy,Jt(n.person.nickname),1),we("div",py,Jt(n.person.name),1)])):(We(),$e("div",my,[n.person.nickname!==""?(We(),$e("div",gy,Jt(n.person.nickname),1)):(We(),$e("div",_y,Jt(n.person.name),1))])),we("div",vy,Jt(n.person.description),1),we("div",xy,[n.person.social.email?(We(),$e("a",{key:0,href:`mailto:${n.person.social.email}`,target:"_blank"},[tt(ht(Fg),{fill:"gray",width:"16",height:"16"})],8,Sy)):hn("",!0),n.person.social.web?(We(),$e("a",{key:1,href:n.person.social.web,target:"_blank"},[tt(ht(gh),{fill:"gray",width:"16",height:"16"})],8,My)):hn("",!0),n.person.social.linkedin?(We(),$e("a",{key:2,href:n.person.social.linkedin,target:"_blank"},[tt(ht(mh),{fill:"gray",width:"16",height:"16"})],8,Ey)):hn("",!0),n.person.social.instagram?(We(),$e("a",{key:3,href:n.person.social.instagram,target:"_blank"},[tt(ht(ph),{fill:"gray",width:"16",height:"16"})],8,yy)):hn("",!0),n.person.social.facebook?(We(),$e("a",{key:4,href:n.person.social.facebook,target:"_blank"},[tt(ht(wg),{fill:"gray",width:"16",height:"16"})],8,by)):hn("",!0),n.person.social.github?(We(),$e("a",{key:5,href:n.person.social.github,target:"_blank"},[tt(ht(dh),{fill:"gray",width:"16",height:"16"})],8,Ty)):hn("",!0),n.person.social.youtube?(We(),$e("a",{key:6,href:n.person.social.youtube,target:"_blank"},[tt(ht(vh),{fill:"gray",width:"16",height:"16"})],8,Ay)):hn("",!0),n.person.social.x?(We(),$e("a",{key:7,href:n.person.social.x,target:"_blank"},[tt(ht(_h),{fill:"gray",width:"16",height:"16"})],8,wy)):hn("",!0),n.person.social.mastodon?(We(),$e("a",{key:8,href:n.person.social.mastodon,target:"_blank"},[tt(ht(Qg),{fill:"gray",width:"16",height:"16"})],8,Ry)):hn("",!0),n.person.social.medium?(We(),$e("a",{key:9,href:n.person.social.medium,target:"_blank"},[tt(ht(r_),{fill:"gray",width:"16",height:"16"})],8,Cy)):hn("",!0)])])])]))}},Dy={class:"flex flex-col space-y-12 md:space-y-36 md:scroll-mt-28"},Ly={class:"flex justify-center"},Iy={class:"px-8 xl:px-0 max-w-[1280px]"},Uy={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-28"},Ny={__name:"Speakers",setup(n){const e=hr([]);_o(()=>{t()});const t=async()=>{try{e.value=ay}catch(i){console.error(i)}};return(i,r)=>(We(),$e("div",Dy,[tt(oy,{title:"연사 소개"}),we("div",Ly,[we("div",Iy,[we("div",Uy,[(We(!0),$e(Ht,null,Lr(e.value,s=>(We(),$e("div",{key:s.id},[tt(Py,{person:s},null,8,["person"])]))),128))])])])]))}},Fy={__name:"Home",setup(n){return(e,t)=>(We(),$e(Ht,null,[tt(ty,{id:"hero"}),tt(Ny,{id:"speakers"})],64))}},Oy=[{path:"/",component:Fy},{path:"/CodeOfConduct",component:()=>XE(()=>import("./CodeOfConduct-BejX1TVk.js"),[])}],By=Mg({history:jm("/2025/"),routes:Oy}),Kh=gm(VE);Kh.use(By);Kh.mount("#app");export{Ht as F,oy as _,tt as a,we as b,$e as c,We as o,Lr as r,Jt as t};
