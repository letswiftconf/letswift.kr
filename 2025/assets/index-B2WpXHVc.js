(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},Rr=[],zn=()=>{},dm=()=>!1,Yo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cc=t=>t.startsWith("onUpdate:"),Ot=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hm=Object.prototype.hasOwnProperty,ut=(t,e)=>hm.call(t,e),We=Array.isArray,Cr=t=>Ko(t)==="[object Map]",Ad=t=>Ko(t)==="[object Set]",je=t=>typeof t=="function",At=t=>typeof t=="string",Ui=t=>typeof t=="symbol",Et=t=>t!==null&&typeof t=="object",Rd=t=>(Et(t)||je(t))&&je(t.then)&&je(t.catch),Cd=Object.prototype.toString,Ko=t=>Cd.call(t),pm=t=>Ko(t).slice(8,-1),Pd=t=>Ko(t)==="[object Object]",Lc=t=>At(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ls=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mm=/-(\w)/g,vn=Zo(t=>t.replace(mm,(e,n)=>n?n.toUpperCase():"")),gm=/\B([A-Z])/g,lr=Zo(t=>t.replace(gm,"-$1").toLowerCase()),Jo=Zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ma=Zo(t=>t?`on${Jo(t)}`:""),Ai=(t,e)=>!Object.is(t,e),ba=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ld=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},_m=t=>{const e=parseFloat(t);return isNaN(e)?t:e},vm=t=>{const e=At(t)?Number(t):NaN;return isNaN(e)?t:e};let _u;const Qo=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ri(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=At(i)?Em(i):Ri(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(t)||Et(t))return t}const xm=/;(?![^(]*\))/g,Sm=/:([^]+)/,ym=/\/\*[^]*?\*\//g;function Em(t){const e={};return t.replace(ym,"").split(xm).forEach(n=>{if(n){const i=n.split(Sm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cn(t){let e="";if(At(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=Cn(t[n]);i&&(e+=i+" ")}else if(Et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bm=Rc(Mm);function Dd(t){return!!t||t===""}const Id=t=>!!(t&&t.__v_isRef===!0),lt=t=>At(t)?t:t==null?"":We(t)||Et(t)&&(t.toString===Cd||!je(t.toString))?Id(t)?lt(t.value):JSON.stringify(t,Ud,2):String(t),Ud=(t,e)=>Id(e)?Ud(t,e.value):Cr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ta(i,s)+" =>"]=r,n),{})}:Ad(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ta(n))}:Ui(e)?Ta(e):Et(e)&&!We(e)&&!Pd(e)?String(e):e,Ta=(t,e="")=>{var n;return Ui(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class Tm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){++this._on===1&&(this.prevScope=Zt,Zt=this)}off(){this._on>0&&--this._on===0&&(Zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wm(){return Zt}let xt;const wa=new WeakSet;class Nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Zt&&Zt.active&&Zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vu(this),Bd(this);const e=xt,n=An;xt=this,An=!0;try{return this.fn()}finally{kd(this),xt=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Uc(e);this.deps=this.depsTail=void 0,vu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Od=0,cs,us;function Fd(t,e=!1){if(t.flags|=8,e){t.next=us,us=t;return}t.next=cs,cs=t}function Dc(){Od++}function Ic(){if(--Od>0)return;if(us){let e=us;for(us=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;cs;){let e=cs;for(cs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Bd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Uc(i),Am(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_s)||(t.globalVersion=_s,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vl(t))))return;t.flags|=2;const e=t.dep,n=xt,i=An;xt=t,An=!0;try{Bd(t);const r=t.fn(t._value);(e.version===0||Ai(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{xt=n,An=i,kd(t),t.flags&=-3}}function Uc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Uc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Am(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const Hd=[];function oi(){Hd.push(An),An=!1}function ai(){const t=Hd.pop();An=t===void 0?!0:t}function vu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xt;xt=void 0;try{e()}finally{xt=n}}}let _s=0;class Rm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xt||!An||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new Rm(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,Vd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=i)}return n}trigger(e){this.version++,_s++,this.notify(e)}notify(e){Dc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ic()}}}function Vd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Vd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xl=new WeakMap,nr=Symbol(""),Sl=Symbol(""),vs=Symbol("");function Ht(t,e,n){if(An&&xt){let i=xl.get(t);i||xl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Nc),r.map=i,r.key=n),r.track()}}function Qn(t,e,n,i,r,s){const o=xl.get(t);if(!o){_s++;return}const a=l=>{l&&l.trigger()};if(Dc(),e==="clear")o.forEach(a);else{const l=We(t),c=l&&Lc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===vs||!Ui(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(vs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(nr)),Cr(t)&&a(o.get(Sl)));break;case"delete":l||(a(o.get(nr)),Cr(t)&&a(o.get(Sl)));break;case"set":Cr(t)&&a(o.get(nr));break}}Ic()}function ur(t){const e=at(t);return e===t?e:(Ht(e,"iterate",vs),_n(t)?e:e.map(Ft))}function ea(t){return Ht(t=at(t),"iterate",vs),t}const Cm={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,Ft)},concat(...t){return ur(this).concat(...t.map(e=>We(e)?ur(e):e))},entries(){return Aa(this,"entries",t=>(t[1]=Ft(t[1]),t))},every(t,e){return Gn(this,"every",t,e,void 0,arguments)},filter(t,e){return Gn(this,"filter",t,e,n=>n.map(Ft),arguments)},find(t,e){return Gn(this,"find",t,e,Ft,arguments)},findIndex(t,e){return Gn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Gn(this,"findLast",t,e,Ft,arguments)},findLastIndex(t,e){return Gn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Gn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ra(this,"includes",t)},indexOf(...t){return Ra(this,"indexOf",t)},join(t){return ur(this).join(t)},lastIndexOf(...t){return Ra(this,"lastIndexOf",t)},map(t,e){return Gn(this,"map",t,e,void 0,arguments)},pop(){return Kr(this,"pop")},push(...t){return Kr(this,"push",t)},reduce(t,...e){return xu(this,"reduce",t,e)},reduceRight(t,...e){return xu(this,"reduceRight",t,e)},shift(){return Kr(this,"shift")},some(t,e){return Gn(this,"some",t,e,void 0,arguments)},splice(...t){return Kr(this,"splice",t)},toReversed(){return ur(this).toReversed()},toSorted(t){return ur(this).toSorted(t)},toSpliced(...t){return ur(this).toSpliced(...t)},unshift(...t){return Kr(this,"unshift",t)},values(){return Aa(this,"values",Ft)}};function Aa(t,e,n){const i=ea(t),r=i[e]();return i!==t&&!_n(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Pm=Array.prototype;function Gn(t,e,n,i,r,s){const o=ea(t),a=o!==t&&!_n(t),l=o[e];if(l!==Pm[e]){const f=l.apply(t,s);return a?Ft(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Ft(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function xu(t,e,n,i){const r=ea(t);let s=n;return r!==t&&(_n(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ft(a),l,t)}),r[e](s,...i)}function Ra(t,e,n){const i=at(t);Ht(i,"iterate",vs);const r=i[e](...n);return(r===-1||r===!1)&&Bc(n[0])?(n[0]=at(n[0]),i[e](...n)):r}function Kr(t,e,n=[]){oi(),Dc();const i=at(t)[e].apply(t,n);return Ic(),ai(),i}const Lm=Rc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ui));function Dm(t){Ui(t)||(t=String(t));const e=at(this);return Ht(e,"has",t),e.hasOwnProperty(t)}class Wd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Vm:jd:s?qd:$d).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=Cm[n]))return l;if(n==="hasOwnProperty")return Dm}const a=Reflect.get(e,n,Gt(e)?e:i);return(Ui(n)?Gd.has(n):Lm(n))||(r||Ht(e,"get",n),s)?a:Gt(a)?o&&Lc(n)?a:a.value:Et(a)?r?Kd(a):ta(a):a}}class Xd extends Wd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Li(s);if(!_n(i)&&!Li(i)&&(s=at(s),i=at(i)),!We(e)&&Gt(s)&&!Gt(i))return l?!1:(s.value=i,!0)}const o=We(e)&&Lc(n)?Number(n)<e.length:ut(e,n),a=Reflect.set(e,n,i,Gt(e)?e:r);return e===at(r)&&(o?Ai(i,s)&&Qn(e,"set",n,i):Qn(e,"add",n,i)),a}deleteProperty(e,n){const i=ut(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Qn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ui(n)||!Gd.has(n))&&Ht(e,"has",n),i}ownKeys(e){return Ht(e,"iterate",We(e)?"length":nr),Reflect.ownKeys(e)}}class Im extends Wd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Um=new Xd,Nm=new Im,Om=new Xd(!0);const yl=t=>t,Ws=t=>Reflect.getPrototypeOf(t);function Fm(t,e,n){return function(...i){const r=this.__v_raw,s=at(r),o=Cr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?yl:e?Uo:Ft;return!e&&Ht(s,"iterate",l?Sl:nr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bm(t,e){const n={get(r){const s=this.__v_raw,o=at(s),a=at(r);t||(Ai(r,a)&&Ht(o,"get",r),Ht(o,"get",a));const{has:l}=Ws(o),c=e?yl:t?Uo:Ft;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ht(at(r),"iterate",nr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=at(s),a=at(r);return t||(Ai(r,a)&&Ht(o,"has",r),Ht(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),c=e?yl:t?Uo:Ft;return!t&&Ht(l,"iterate",nr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ot(n,t?{add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear")}:{add(r){!e&&!_n(r)&&!Li(r)&&(r=at(r));const s=at(this);return Ws(s).has.call(s,r)||(s.add(r),Qn(s,"add",r,r)),this},set(r,s){!e&&!_n(s)&&!Li(s)&&(s=at(s));const o=at(this),{has:a,get:l}=Ws(o);let c=a.call(o,r);c||(r=at(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ai(s,u)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=Ws(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Qn(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Fm(r,t,e)}),n}function Oc(t,e){const n=Bm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ut(n,r)&&r in i?n:i,r,s)}const km={get:Oc(!1,!1)},zm={get:Oc(!1,!0)},Hm={get:Oc(!0,!1)};const $d=new WeakMap,qd=new WeakMap,jd=new WeakMap,Vm=new WeakMap;function Gm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(t){return t.__v_skip||!Object.isExtensible(t)?0:Gm(pm(t))}function ta(t){return Li(t)?t:Fc(t,!1,Um,km,$d)}function Yd(t){return Fc(t,!1,Om,zm,qd)}function Kd(t){return Fc(t,!0,Nm,Hm,jd)}function Fc(t,e,n,i,r){if(!Et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Wm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Pr(t){return Li(t)?Pr(t.__v_raw):!!(t&&t.__v_isReactive)}function Li(t){return!!(t&&t.__v_isReadonly)}function _n(t){return!!(t&&t.__v_isShallow)}function Bc(t){return t?!!t.__v_raw:!1}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function Xm(t){return!ut(t,"__v_skip")&&Object.isExtensible(t)&&Ld(t,"__v_skip",!0),t}const Ft=t=>Et(t)?ta(t):t,Uo=t=>Et(t)?Kd(t):t;function Gt(t){return t?t.__v_isRef===!0:!1}function sn(t){return Zd(t,!1)}function $m(t){return Zd(t,!0)}function Zd(t,e){return Gt(t)?t:new qm(t,e)}class qm{constructor(e,n){this.dep=new Nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:at(e),this._value=n?e:Ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||_n(e)||Li(e);e=i?e:at(e),Ai(e,n)&&(this._rawValue=e,this._value=i?e:Ft(e),this.dep.trigger())}}function Qe(t){return Gt(t)?t.value:t}const jm={get:(t,e,n)=>e==="__v_raw"?t:Qe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Gt(r)&&!Gt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Jd(t){return Pr(t)?t:new Proxy(t,jm)}class Ym{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Km(t,e,n=!1){let i,r;return je(t)?i=t:(i=t.get,r=t.set),new Ym(i,r,n)}const $s={},No=new WeakMap;let qi;function Zm(t,e=!1,n=qi){if(n){let i=No.get(n);i||No.set(n,i=[]),i.push(t)}}function Jm(t,e,n=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=S=>r?S:_n(S)||r===!1||r===0?ei(S,1):ei(S);let u,f,d,h,g=!1,v=!1;if(Gt(t)?(f=()=>t.value,g=_n(t)):Pr(t)?(f=()=>c(t),g=!0):We(t)?(v=!0,g=t.some(S=>Pr(S)||_n(S)),f=()=>t.map(S=>{if(Gt(S))return S.value;if(Pr(S))return c(S);if(je(S))return l?l(S,2):S()})):je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){oi();try{d()}finally{ai()}}const S=qi;qi=u;try{return l?l(t,3,[h]):t(h)}finally{qi=S}}:f=zn,e&&r){const S=f,D=r===!0?1/0:r;f=()=>ei(S(),D)}const m=wm(),p=()=>{u.stop(),m&&m.active&&Pc(m.effects,u)};if(s&&e){const S=e;e=(...D)=>{S(...D),p()}}let w=v?new Array(t.length).fill($s):$s;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const D=u.run();if(r||g||(v?D.some((C,P)=>Ai(C,w[P])):Ai(D,w))){d&&d();const C=qi;qi=u;try{const P=[D,w===$s?void 0:v&&w[0]===$s?[]:w,h];w=D,l?l(e,3,P):e(...P)}finally{qi=C}}}else u.run()};return a&&a(T),u=new Nd(f),u.scheduler=o?()=>o(T,!1):T,h=S=>Zm(S,!1,u),d=u.onStop=()=>{const S=No.get(u);if(S){if(l)l(S,4);else for(const D of S)D();No.delete(u)}},e?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ei(t,e=1/0,n){if(e<=0||!Et(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Gt(t))ei(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)ei(t[i],e,n);else if(Ad(t)||Cr(t))t.forEach(i=>{ei(i,e,n)});else if(Pd(t)){for(const i in t)ei(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ei(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ds(t,e,n,i){try{return i?t(...i):t()}catch(r){na(r,e,n)}}function Pn(t,e,n,i){if(je(t)){const r=Ds(t,e,n,i);return r&&Rd(r)&&r.catch(s=>{na(s,e,n)}),r}if(We(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Pn(t[s],e,n,i));return r}}function na(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){oi(),Ds(s,null,10,[t,l,c]),ai();return}}Qm(t,n,r,i,o)}function Qm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const qt=[];let On=-1;const Lr=[];let Ei=null,Tr=0;const Qd=Promise.resolve();let Oo=null;function eh(t){const e=Oo||Qd;return t?e.then(this?t.bind(this):t):e}function eg(t){let e=On+1,n=qt.length;for(;e<n;){const i=e+n>>>1,r=qt[i],s=xs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function kc(t){if(!(t.flags&1)){const e=xs(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=xs(n)?qt.push(t):qt.splice(eg(e),0,t),t.flags|=1,th()}}function th(){Oo||(Oo=Qd.then(ih))}function tg(t){We(t)?Lr.push(...t):Ei&&t.id===-1?Ei.splice(Tr+1,0,t):t.flags&1||(Lr.push(t),t.flags|=1),th()}function Su(t,e,n=On+1){for(;n<qt.length;n++){const i=qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nh(t){if(Lr.length){const e=[...new Set(Lr)].sort((n,i)=>xs(n)-xs(i));if(Lr.length=0,Ei){Ei.push(...e);return}for(Ei=e,Tr=0;Tr<Ei.length;Tr++){const n=Ei[Tr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ei=null,Tr=0}}const xs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ih(t){try{for(On=0;On<qt.length;On++){const e=qt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ds(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<qt.length;On++){const e=qt[On];e&&(e.flags&=-2)}On=-1,qt.length=0,nh(),Oo=null,(qt.length||Lr.length)&&ih()}}let Jt=null,rh=null;function Fo(t){const e=Jt;return Jt=t,rh=t&&t.type.__scopeId||null,e}function fs(t,e=Jt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Du(-1);const s=Fo(e);let o;try{o=t(...r)}finally{Fo(s),i._d&&Du(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ng(t,e){if(Jt===null)return t;const n=aa(Jt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&ei(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(oi(),Pn(l,n,8,[t.el,a,t,e]),ai())}}const ig=Symbol("_vte"),sh=t=>t.__isTeleport,Mi=Symbol("_leaveCb"),qs=Symbol("_enterCb");function rg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return di(()=>{t.isMounted=!0}),hh(()=>{t.isUnmounting=!0}),t}const pn=[Function,Array],oh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pn,onEnter:pn,onAfterEnter:pn,onEnterCancelled:pn,onBeforeLeave:pn,onLeave:pn,onAfterLeave:pn,onLeaveCancelled:pn,onBeforeAppear:pn,onAppear:pn,onAfterAppear:pn,onAppearCancelled:pn},ah=t=>{const e=t.subTree;return e.component?ah(e.component):e},sg={name:"BaseTransition",props:oh,setup(t,{slots:e}){const n=Zg(),i=rg();return()=>{const r=e.default&&uh(e.default(),!0);if(!r||!r.length)return;const s=lh(r),o=at(t),{mode:a}=o;if(i.isLeaving)return Ca(s);const l=yu(s);if(!l)return Ca(s);let c=El(l,o,i,n,f=>c=f);l.type!==jt&&Ss(l,c);let u=n.subTree&&yu(n.subTree);if(u&&u.type!==jt&&!Ki(l,u)&&ah(n).type!==jt){let f=El(u,o,i,n);if(Ss(u,f),a==="out-in"&&l.type!==jt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ca(s);a==="in-out"&&l.type!==jt?f.delayLeave=(d,h,g)=>{const v=ch(i,u);v[String(u.key)]=u,d[Mi]=()=>{h(),d[Mi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function lh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==jt){e=n;break}}return e}const og=sg;function ch(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function El(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:w,onAppearCancelled:T}=e,S=String(t.key),D=ch(n,t),C=(b,y)=>{b&&Pn(b,i,9,y)},P=(b,y)=>{const L=y[1];C(b,y),We(b)?b.every(F=>F.length<=1)&&L():b.length<=1&&L()},O={mode:o,persisted:a,beforeEnter(b){let y=l;if(!n.isMounted)if(s)y=m||l;else return;b[Mi]&&b[Mi](!0);const L=D[S];L&&Ki(t,L)&&L.el[Mi]&&L.el[Mi](),C(y,[b])},enter(b){let y=c,L=u,F=f;if(!n.isMounted)if(s)y=p||c,L=w||u,F=T||f;else return;let H=!1;const Q=b[qs]=ce=>{H||(H=!0,ce?C(F,[b]):C(L,[b]),O.delayedLeave&&O.delayedLeave(),b[qs]=void 0)};y?P(y,[b,Q]):Q()},leave(b,y){const L=String(t.key);if(b[qs]&&b[qs](!0),n.isUnmounting)return y();C(d,[b]);let F=!1;const H=b[Mi]=Q=>{F||(F=!0,y(),Q?C(v,[b]):C(g,[b]),b[Mi]=void 0,D[L]===t&&delete D[L])};D[L]=t,h?P(h,[b,H]):H()},clone(b){const y=El(b,e,n,i,r);return r&&r(y),y}};return O}function Ca(t){if(ia(t))return t=Di(t),t.children=null,t}function yu(t){if(!ia(t))return sh(t.type)&&t.children?lh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&je(n.default))return n.default()}}function Ss(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ss(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function uh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ht?(o.patchFlag&128&&r++,i=i.concat(uh(o.children,e,a))):(e||o.type!==jt)&&i.push(a!=null?Di(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function xn(t,e){return je(t)?Ot({name:t.name},e,{setup:t}):t}function fh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Bo(t,e,n,i,r=!1){if(We(t)){t.forEach((g,v)=>Bo(g,e&&(We(e)?e[v]:e),n,i,r));return}if(ds(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Bo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?aa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,d=at(f),h=f===vt?()=>!1:g=>ut(d,g);if(c!=null&&c!==l&&(At(c)?(u[c]=null,h(c)&&(f[c]=null)):Gt(c)&&(c.value=null)),je(l))Ds(l,a,12,[o,u]);else{const g=At(l),v=Gt(l);if(g||v){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;r?We(p)&&Pc(p,s):We(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,un(m,n)):m()}}}Qo().requestIdleCallback;Qo().cancelIdleCallback;const ds=t=>!!t.type.__asyncLoader,ia=t=>t.type.__isKeepAlive;function ag(t,e){dh(t,"a",e)}function lg(t,e){dh(t,"da",e)}function dh(t,e,n=Bt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ra(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ia(r.parent.vnode)&&cg(i,e,n,r),r=r.parent}}function cg(t,e,n,i){const r=ra(e,t,i,!0);Gr(()=>{Pc(i[e],r)},n)}function ra(t,e,n=Bt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{oi();const a=Is(n),l=Pn(e,n,t,o);return a(),ai(),l});return i?r.unshift(s):r.push(s),s}}const fi=t=>(e,n=Bt)=>{(!Es||t==="sp")&&ra(t,(...i)=>e(...i),n)},ug=fi("bm"),di=fi("m"),fg=fi("bu"),dg=fi("u"),hh=fi("bum"),Gr=fi("um"),hg=fi("sp"),pg=fi("rtg"),mg=fi("rtc");function gg(t,e=Bt){ra("ec",t,e)}const ph="components";function zc(t,e){return gh(ph,t,!0,e)||t}const mh=Symbol.for("v-ndc");function Eu(t){return At(t)?gh(ph,t,!1)||t:t||mh}function gh(t,e,n=!0,i=!1){const r=Jt||Bt;if(r){const s=r.type;{const a=n_(s,!1);if(a&&(a===e||a===vn(e)||a===Jo(vn(e))))return s}const o=Mu(r[t]||s[t],e)||Mu(r.appContext[t],e);return!o&&i?s:o}}function Mu(t,e){return t&&(t[e]||t[vn(e)]||t[Jo(vn(e))])}function Nt(t,e,n,i){let r;const s=n,o=We(t);if(o||At(t)){const a=o&&Pr(t);let l=!1,c=!1;a&&(l=!_n(t),c=Li(t),t=ea(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Uo(Ft(t[u])):Ft(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Et(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ml=t=>t?Oh(t)?aa(t):Ml(t.parent):null,hs=Ot(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vh(t),$forceUpdate:t=>t.f||(t.f=()=>{kc(t.update)}),$nextTick:t=>t.n||(t.n=eh.bind(t.proxy)),$watch:t=>Fg.bind(t)}),Pa=(t,e)=>t!==vt&&!t.__isScriptSetup&&ut(t,e),_g={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Pa(i,e))return o[e]=1,i[e];if(r!==vt&&ut(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ut(c,e))return o[e]=3,s[e];if(n!==vt&&ut(n,e))return o[e]=4,n[e];bl&&(o[e]=0)}}const u=hs[e];let f,d;if(u)return e==="$attrs"&&Ht(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==vt&&ut(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ut(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Pa(r,e)?(r[e]=n,!0):i!==vt&&ut(i,e)?(i[e]=n,!0):ut(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==vt&&ut(t,o)||Pa(e,o)||(a=s[0])&&ut(a,o)||ut(i,o)||ut(hs,o)||ut(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ut(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bu(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bl=!0;function vg(t){const e=vh(t),n=t.proxy,i=t.ctx;bl=!1,e.beforeCreate&&Tu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:T,unmounted:S,render:D,renderTracked:C,renderTriggered:P,errorCaptured:O,serverPrefetch:b,expose:y,inheritAttrs:L,components:F,directives:H,filters:Q}=e;if(c&&xg(c,i,null),o)for(const ae in o){const V=o[ae];je(V)&&(i[ae]=V.bind(n))}if(r){const ae=r.call(n,n);Et(ae)&&(t.data=ta(ae))}if(bl=!0,s)for(const ae in s){const V=s[ae],Ee=je(V)?V.bind(n,n):je(V.get)?V.get.bind(n,n):zn,Te=!je(V)&&je(V.set)?V.set.bind(n):zn,Ue=st({get:Ee,set:Te});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:ze=>Ue.value=ze})}if(a)for(const ae in a)_h(a[ae],i,n,ae);if(l){const ae=je(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(V=>{xo(V,ae[V])})}u&&Tu(u,t,"c");function ee(ae,V){We(V)?V.forEach(Ee=>ae(Ee.bind(n))):V&&ae(V.bind(n))}if(ee(ug,f),ee(di,d),ee(fg,h),ee(dg,g),ee(ag,v),ee(lg,m),ee(gg,O),ee(mg,C),ee(pg,P),ee(hh,w),ee(Gr,S),ee(hg,b),We(y))if(y.length){const ae=t.exposed||(t.exposed={});y.forEach(V=>{Object.defineProperty(ae,V,{get:()=>n[V],set:Ee=>n[V]=Ee})})}else t.exposed||(t.exposed={});D&&t.render===zn&&(t.render=D),L!=null&&(t.inheritAttrs=L),F&&(t.components=F),H&&(t.directives=H),b&&fh(t)}function xg(t,e,n=zn){We(t)&&(t=Tl(t));for(const i in t){const r=t[i];let s;Et(r)?"default"in r?s=Hn(r.from||i,r.default,!0):s=Hn(r.from||i):s=Hn(r),Gt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Tu(t,e,n){Pn(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _h(t,e,n,i){let r=i.includes(".")?Lh(n,i):()=>n[i];if(At(t)){const s=e[t];je(s)&&So(r,s)}else if(je(t))So(r,t.bind(n));else if(Et(t))if(We(t))t.forEach(s=>_h(s,e,n,i));else{const s=je(t.handler)?t.handler.bind(n):e[t.handler];je(s)&&So(r,s,t)}}function vh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ko(l,c,o,!0)),ko(l,e,o)),Et(e)&&s.set(e,l),l}function ko(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ko(t,s,n,!0),r&&r.forEach(o=>ko(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Sg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Sg={data:wu,props:Au,emits:Au,methods:os,computed:os,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:os,directives:os,watch:Eg,provide:wu,inject:yg};function wu(t,e){return e?t?function(){return Ot(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function yg(t,e){return os(Tl(t),Tl(e))}function Tl(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function os(t,e){return t?Ot(Object.create(null),t,e):e}function Au(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:Ot(Object.create(null),bu(t),bu(e??{})):e}function Eg(t,e){if(!t)return e;if(!e)return t;const n=Ot(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function xh(){return{app:null,config:{isNativeTag:dm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mg=0;function bg(t,e){return function(i,r=null){je(i)||(i=Ot({},i)),r!=null&&!Et(r)&&(r=null);const s=xh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Mg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:r_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...f)):je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||He(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,aa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Dr;Dr=c;try{return u()}finally{Dr=f}}};return c}}let Dr=null;function xo(t,e){if(Bt){let n=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===n&&(n=Bt.provides=Object.create(i)),n[t]=e}}function Hn(t,e,n=!1){const i=Bt||Jt;if(i||Dr){let r=Dr?Dr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}const Sh={},yh=()=>Object.create(Sh),Eh=t=>Object.getPrototypeOf(t)===Sh;function Tg(t,e,n,i=!1){const r={},s=yh();t.propsDefaults=Object.create(null),Mh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Yd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function wg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=at(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(sa(t.emitsOptions,d))continue;const h=e[d];if(l)if(ut(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=vn(d);r[g]=wl(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Mh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ut(e,f)&&((u=lr(f))===f||!ut(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=wl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ut(e,f))&&(delete s[f],c=!0)}c&&Qn(t.attrs,"set","")}function Mh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ls(l))continue;const c=e[l];let u;r&&ut(r,u=vn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:sa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(n),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=wl(r,l,f,c[f],t,!ut(c,f))}}return o}function wl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Is(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===lr(n))&&(i=!0))}return i}const Ag=new WeakMap;function bh(t,e,n=!1){const i=n?Ag:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!je(t)){const u=f=>{l=!0;const[d,h]=bh(f,e,!0);Ot(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Et(t)&&i.set(t,Rr),Rr;if(We(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);Ru(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=vn(u);if(Ru(f)){const d=s[u],h=o[f]=We(d)||je(d)?{type:d}:Ot({},d),g=h.type;let v=!1,m=!0;if(We(g))for(let p=0;p<g.length;++p){const w=g[p],T=je(w)&&w.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=je(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||ut(h,"default"))&&a.push(f)}}const c=[o,a];return Et(t)&&i.set(t,c),c}function Ru(t){return t[0]!=="$"&&!ls(t)}const Hc=t=>t[0]==="_"||t==="$stable",Vc=t=>We(t)?t.map(Fn):[Fn(t)],Rg=(t,e,n)=>{if(e._n)return e;const i=fs((...r)=>Vc(e(...r)),n);return i._c=!1,i},Th=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hc(r))continue;const s=t[r];if(je(s))e[r]=Rg(r,s,i);else if(s!=null){const o=Vc(s);e[r]=()=>o}}},wh=(t,e)=>{const n=Vc(e);t.slots.default=()=>n},Ah=(t,e,n)=>{for(const i in e)(n||!Hc(i))&&(t[i]=e[i])},Cg=(t,e,n)=>{const i=t.slots=yh();if(t.vnode.shapeFlag&32){const r=e._;r?(Ah(i,e,n),n&&Ld(i,"_",r,!0)):Th(e,i)}else e&&wh(t,e)},Pg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ah(r,e,n):(s=!e.$stable,Th(e,r)),o=e}else e&&(wh(t,e),o={default:1});if(s)for(const a in r)!Hc(a)&&o[a]==null&&delete r[a]},un=Wg;function Lg(t){return Dg(t)}function Dg(t,e){const n=Qo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=zn,insertStaticContent:g}=t,v=(A,R,x,ie=null,k=null,W=null,G=void 0,re=null,Y=!!R.dynamicChildren)=>{if(A===R)return;A&&!Ki(A,R)&&(ie=N(A),ze(A,k,W,!0),A=null),R.patchFlag===-2&&(Y=!1,R.dynamicChildren=null);const{type:te,ref:Ae,shapeFlag:E}=R;switch(te){case oa:m(A,R,x,ie);break;case jt:p(A,R,x,ie);break;case yo:A==null&&w(R,x,ie,G);break;case ht:F(A,R,x,ie,k,W,G,re,Y);break;default:E&1?D(A,R,x,ie,k,W,G,re,Y):E&6?H(A,R,x,ie,k,W,G,re,Y):(E&64||E&128)&&te.process(A,R,x,ie,k,W,G,re,Y,ue)}Ae!=null&&k&&Bo(Ae,A&&A.ref,W,R||A,!R)},m=(A,R,x,ie)=>{if(A==null)i(R.el=a(R.children),x,ie);else{const k=R.el=A.el;R.children!==A.children&&c(k,R.children)}},p=(A,R,x,ie)=>{A==null?i(R.el=l(R.children||""),x,ie):R.el=A.el},w=(A,R,x,ie)=>{[A.el,A.anchor]=g(A.children,R,x,ie,A.el,A.anchor)},T=({el:A,anchor:R},x,ie)=>{let k;for(;A&&A!==R;)k=d(A),i(A,x,ie),A=k;i(R,x,ie)},S=({el:A,anchor:R})=>{let x;for(;A&&A!==R;)x=d(A),r(A),A=x;r(R)},D=(A,R,x,ie,k,W,G,re,Y)=>{R.type==="svg"?G="svg":R.type==="math"&&(G="mathml"),A==null?C(R,x,ie,k,W,G,re,Y):b(A,R,k,W,G,re,Y)},C=(A,R,x,ie,k,W,G,re)=>{let Y,te;const{props:Ae,shapeFlag:E,transition:_,dirs:I}=A;if(Y=A.el=o(A.type,W,Ae&&Ae.is,Ae),E&8?u(Y,A.children):E&16&&O(A.children,Y,null,ie,k,La(A,W),G,re),I&&Fi(A,null,ie,"created"),P(Y,A,A.scopeId,G,ie),Ae){for(const se in Ae)se!=="value"&&!ls(se)&&s(Y,se,null,Ae[se],W,ie);"value"in Ae&&s(Y,"value",null,Ae.value,W),(te=Ae.onVnodeBeforeMount)&&Un(te,ie,A)}I&&Fi(A,null,ie,"beforeMount");const q=Ig(k,_);q&&_.beforeEnter(Y),i(Y,R,x),((te=Ae&&Ae.onVnodeMounted)||q||I)&&un(()=>{te&&Un(te,ie,A),q&&_.enter(Y),I&&Fi(A,null,ie,"mounted")},k)},P=(A,R,x,ie,k)=>{if(x&&h(A,x),ie)for(let W=0;W<ie.length;W++)h(A,ie[W]);if(k){let W=k.subTree;if(R===W||Ih(W.type)&&(W.ssContent===R||W.ssFallback===R)){const G=k.vnode;P(A,G,G.scopeId,G.slotScopeIds,k.parent)}}},O=(A,R,x,ie,k,W,G,re,Y=0)=>{for(let te=Y;te<A.length;te++){const Ae=A[te]=re?bi(A[te]):Fn(A[te]);v(null,Ae,R,x,ie,k,W,G,re)}},b=(A,R,x,ie,k,W,G)=>{const re=R.el=A.el;let{patchFlag:Y,dynamicChildren:te,dirs:Ae}=R;Y|=A.patchFlag&16;const E=A.props||vt,_=R.props||vt;let I;if(x&&Bi(x,!1),(I=_.onVnodeBeforeUpdate)&&Un(I,x,R,A),Ae&&Fi(R,A,x,"beforeUpdate"),x&&Bi(x,!0),(E.innerHTML&&_.innerHTML==null||E.textContent&&_.textContent==null)&&u(re,""),te?y(A.dynamicChildren,te,re,x,ie,La(R,k),W):G||V(A,R,re,null,x,ie,La(R,k),W,!1),Y>0){if(Y&16)L(re,E,_,x,k);else if(Y&2&&E.class!==_.class&&s(re,"class",null,_.class,k),Y&4&&s(re,"style",E.style,_.style,k),Y&8){const q=R.dynamicProps;for(let se=0;se<q.length;se++){const X=q[se],Pe=E[X],ve=_[X];(ve!==Pe||X==="value")&&s(re,X,Pe,ve,k,x)}}Y&1&&A.children!==R.children&&u(re,R.children)}else!G&&te==null&&L(re,E,_,x,k);((I=_.onVnodeUpdated)||Ae)&&un(()=>{I&&Un(I,x,R,A),Ae&&Fi(R,A,x,"updated")},ie)},y=(A,R,x,ie,k,W,G)=>{for(let re=0;re<R.length;re++){const Y=A[re],te=R[re],Ae=Y.el&&(Y.type===ht||!Ki(Y,te)||Y.shapeFlag&198)?f(Y.el):x;v(Y,te,Ae,null,ie,k,W,G,!0)}},L=(A,R,x,ie,k)=>{if(R!==x){if(R!==vt)for(const W in R)!ls(W)&&!(W in x)&&s(A,W,R[W],null,k,ie);for(const W in x){if(ls(W))continue;const G=x[W],re=R[W];G!==re&&W!=="value"&&s(A,W,re,G,k,ie)}"value"in x&&s(A,"value",R.value,x.value,k)}},F=(A,R,x,ie,k,W,G,re,Y)=>{const te=R.el=A?A.el:a(""),Ae=R.anchor=A?A.anchor:a("");let{patchFlag:E,dynamicChildren:_,slotScopeIds:I}=R;I&&(re=re?re.concat(I):I),A==null?(i(te,x,ie),i(Ae,x,ie),O(R.children||[],x,Ae,k,W,G,re,Y)):E>0&&E&64&&_&&A.dynamicChildren?(y(A.dynamicChildren,_,x,k,W,G,re),(R.key!=null||k&&R===k.subTree)&&Rh(A,R,!0)):V(A,R,x,Ae,k,W,G,re,Y)},H=(A,R,x,ie,k,W,G,re,Y)=>{R.slotScopeIds=re,A==null?R.shapeFlag&512?k.ctx.activate(R,x,ie,G,Y):Q(R,x,ie,k,W,G,Y):ce(A,R,Y)},Q=(A,R,x,ie,k,W,G)=>{const re=A.component=Kg(A,ie,k);if(ia(A)&&(re.ctx.renderer=ue),Jg(re,!1,G),re.asyncDep){if(k&&k.registerDep(re,ee,G),!A.el){const Y=re.subTree=He(jt);p(null,Y,R,x)}}else ee(re,A,R,x,k,W,G)},ce=(A,R,x)=>{const ie=R.component=A.component;if(Vg(A,R,x))if(ie.asyncDep&&!ie.asyncResolved){ae(ie,R,x);return}else ie.next=R,ie.update();else R.el=A.el,ie.vnode=R},ee=(A,R,x,ie,k,W,G)=>{const re=()=>{if(A.isMounted){let{next:E,bu:_,u:I,parent:q,vnode:se}=A;{const xe=Ch(A);if(xe){E&&(E.el=se.el,ae(A,E,G)),xe.asyncDep.then(()=>{A.isUnmounted||re()});return}}let X=E,Pe;Bi(A,!1),E?(E.el=se.el,ae(A,E,G)):E=se,_&&ba(_),(Pe=E.props&&E.props.onVnodeBeforeUpdate)&&Un(Pe,q,E,se),Bi(A,!0);const ve=Pu(A),ye=A.subTree;A.subTree=ve,v(ye,ve,f(ye.el),N(ye),A,k,W),E.el=ve.el,X===null&&Gg(A,ve.el),I&&un(I,k),(Pe=E.props&&E.props.onVnodeUpdated)&&un(()=>Un(Pe,q,E,se),k)}else{let E;const{el:_,props:I}=R,{bm:q,m:se,parent:X,root:Pe,type:ve}=A,ye=ds(R);Bi(A,!1),q&&ba(q),!ye&&(E=I&&I.onVnodeBeforeMount)&&Un(E,X,R),Bi(A,!0);{Pe.ce&&Pe.ce._injectChildStyle(ve);const xe=A.subTree=Pu(A);v(null,xe,x,ie,A,k,W),R.el=xe.el}if(se&&un(se,k),!ye&&(E=I&&I.onVnodeMounted)){const xe=R;un(()=>Un(E,X,xe),k)}(R.shapeFlag&256||X&&ds(X.vnode)&&X.vnode.shapeFlag&256)&&A.a&&un(A.a,k),A.isMounted=!0,R=x=ie=null}};A.scope.on();const Y=A.effect=new Nd(re);A.scope.off();const te=A.update=Y.run.bind(Y),Ae=A.job=Y.runIfDirty.bind(Y);Ae.i=A,Ae.id=A.uid,Y.scheduler=()=>kc(Ae),Bi(A,!0),te()},ae=(A,R,x)=>{R.component=A;const ie=A.vnode.props;A.vnode=R,A.next=null,wg(A,R.props,ie,x),Pg(A,R.children,x),oi(),Su(A),ai()},V=(A,R,x,ie,k,W,G,re,Y=!1)=>{const te=A&&A.children,Ae=A?A.shapeFlag:0,E=R.children,{patchFlag:_,shapeFlag:I}=R;if(_>0){if(_&128){Te(te,E,x,ie,k,W,G,re,Y);return}else if(_&256){Ee(te,E,x,ie,k,W,G,re,Y);return}}I&8?(Ae&16&&we(te,k,W),E!==te&&u(x,E)):Ae&16?I&16?Te(te,E,x,ie,k,W,G,re,Y):we(te,k,W,!0):(Ae&8&&u(x,""),I&16&&O(E,x,ie,k,W,G,re,Y))},Ee=(A,R,x,ie,k,W,G,re,Y)=>{A=A||Rr,R=R||Rr;const te=A.length,Ae=R.length,E=Math.min(te,Ae);let _;for(_=0;_<E;_++){const I=R[_]=Y?bi(R[_]):Fn(R[_]);v(A[_],I,x,null,k,W,G,re,Y)}te>Ae?we(A,k,W,!0,!1,E):O(R,x,ie,k,W,G,re,Y,E)},Te=(A,R,x,ie,k,W,G,re,Y)=>{let te=0;const Ae=R.length;let E=A.length-1,_=Ae-1;for(;te<=E&&te<=_;){const I=A[te],q=R[te]=Y?bi(R[te]):Fn(R[te]);if(Ki(I,q))v(I,q,x,null,k,W,G,re,Y);else break;te++}for(;te<=E&&te<=_;){const I=A[E],q=R[_]=Y?bi(R[_]):Fn(R[_]);if(Ki(I,q))v(I,q,x,null,k,W,G,re,Y);else break;E--,_--}if(te>E){if(te<=_){const I=_+1,q=I<Ae?R[I].el:ie;for(;te<=_;)v(null,R[te]=Y?bi(R[te]):Fn(R[te]),x,q,k,W,G,re,Y),te++}}else if(te>_)for(;te<=E;)ze(A[te],k,W,!0),te++;else{const I=te,q=te,se=new Map;for(te=q;te<=_;te++){const Ie=R[te]=Y?bi(R[te]):Fn(R[te]);Ie.key!=null&&se.set(Ie.key,te)}let X,Pe=0;const ve=_-q+1;let ye=!1,xe=0;const le=new Array(ve);for(te=0;te<ve;te++)le[te]=0;for(te=I;te<=E;te++){const Ie=A[te];if(Pe>=ve){ze(Ie,k,W,!0);continue}let Le;if(Ie.key!=null)Le=se.get(Ie.key);else for(X=q;X<=_;X++)if(le[X-q]===0&&Ki(Ie,R[X])){Le=X;break}Le===void 0?ze(Ie,k,W,!0):(le[Le-q]=te+1,Le>=xe?xe=Le:ye=!0,v(Ie,R[Le],x,null,k,W,G,re,Y),Pe++)}const be=ye?Ug(le):Rr;for(X=be.length-1,te=ve-1;te>=0;te--){const Ie=q+te,Le=R[Ie],Me=Ie+1<Ae?R[Ie+1].el:ie;le[te]===0?v(null,Le,x,Me,k,W,G,re,Y):ye&&(X<0||te!==be[X]?Ue(Le,x,Me,2):X--)}}},Ue=(A,R,x,ie,k=null)=>{const{el:W,type:G,transition:re,children:Y,shapeFlag:te}=A;if(te&6){Ue(A.component.subTree,R,x,ie);return}if(te&128){A.suspense.move(R,x,ie);return}if(te&64){G.move(A,R,x,ue);return}if(G===ht){i(W,R,x);for(let E=0;E<Y.length;E++)Ue(Y[E],R,x,ie);i(A.anchor,R,x);return}if(G===yo){T(A,R,x);return}if(ie!==2&&te&1&&re)if(ie===0)re.beforeEnter(W),i(W,R,x),un(()=>re.enter(W),k);else{const{leave:E,delayLeave:_,afterLeave:I}=re,q=()=>{A.ctx.isUnmounted?r(W):i(W,R,x)},se=()=>{E(W,()=>{q(),I&&I()})};_?_(W,q,se):se()}else i(W,R,x)},ze=(A,R,x,ie=!1,k=!1)=>{const{type:W,props:G,ref:re,children:Y,dynamicChildren:te,shapeFlag:Ae,patchFlag:E,dirs:_,cacheIndex:I}=A;if(E===-2&&(k=!1),re!=null&&(oi(),Bo(re,null,x,A,!0),ai()),I!=null&&(R.renderCache[I]=void 0),Ae&256){R.ctx.deactivate(A);return}const q=Ae&1&&_,se=!ds(A);let X;if(se&&(X=G&&G.onVnodeBeforeUnmount)&&Un(X,R,A),Ae&6)he(A.component,x,ie);else{if(Ae&128){A.suspense.unmount(x,ie);return}q&&Fi(A,null,R,"beforeUnmount"),Ae&64?A.type.remove(A,R,x,ue,ie):te&&!te.hasOnce&&(W!==ht||E>0&&E&64)?we(te,R,x,!1,!0):(W===ht&&E&384||!k&&Ae&16)&&we(Y,R,x),ie&&et(A)}(se&&(X=G&&G.onVnodeUnmounted)||q)&&un(()=>{X&&Un(X,R,A),q&&Fi(A,null,R,"unmounted")},x)},et=A=>{const{type:R,el:x,anchor:ie,transition:k}=A;if(R===ht){j(x,ie);return}if(R===yo){S(A);return}const W=()=>{r(x),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(A.shapeFlag&1&&k&&!k.persisted){const{leave:G,delayLeave:re}=k,Y=()=>G(x,W);re?re(A.el,W,Y):Y()}else W()},j=(A,R)=>{let x;for(;A!==R;)x=d(A),r(A),A=x;r(R)},he=(A,R,x)=>{const{bum:ie,scope:k,job:W,subTree:G,um:re,m:Y,a:te,parent:Ae,slots:{__:E}}=A;Cu(Y),Cu(te),ie&&ba(ie),Ae&&We(E)&&E.forEach(_=>{Ae.renderCache[_]=void 0}),k.stop(),W&&(W.flags|=8,ze(G,A,R,x)),re&&un(re,R),un(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},we=(A,R,x,ie=!1,k=!1,W=0)=>{for(let G=W;G<A.length;G++)ze(A[G],R,x,ie,k)},N=A=>{if(A.shapeFlag&6)return N(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=d(A.anchor||A.el),x=R&&R[ig];return x?d(x):R};let oe=!1;const fe=(A,R,x)=>{A==null?R._vnode&&ze(R._vnode,null,null,!0):v(R._vnode||null,A,R,null,null,null,x),R._vnode=A,oe||(oe=!0,Su(),nh(),oe=!1)},ue={p:v,um:ze,m:Ue,r:et,mt:Q,mc:O,pc:V,pbc:y,n:N,o:t};return{render:fe,hydrate:void 0,createApp:bg(fe)}}function La({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ig(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Rh(t,e,n=!1){const i=t.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=bi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Rh(o,a)),a.type===oa&&(a.el=o.el),a.type===jt&&!a.el&&(a.el=o.el)}}function Ug(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Ch(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ch(e)}function Cu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ng=Symbol.for("v-scx"),Og=()=>Hn(Ng);function So(t,e,n){return Ph(t,e,n)}function Ph(t,e,n=vt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ot({},n),l=e&&i||!e&&s!=="post";let c;if(Es){if(s==="sync"){const h=Og();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=zn,h.resume=zn,h.pause=zn,h}}const u=Bt;a.call=(h,g,v)=>Pn(h,u,g,v);let f=!1;s==="post"?a.scheduler=h=>{un(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():kc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Jm(t,e,a);return Es&&(c?c.push(d):l&&d()),d}function Fg(t,e,n){const i=this.proxy,r=At(t)?t.includes(".")?Lh(i,t):()=>i[t]:t.bind(i,i);let s;je(e)?s=e:(s=e.handler,n=e);const o=Is(this),a=Ph(r,s.bind(i),n);return o(),a}function Lh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Bg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vn(e)}Modifiers`]||t[`${lr(e)}Modifiers`];function kg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let r=n;const s=e.startsWith("update:"),o=s&&Bg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>At(u)?u.trim():u)),o.number&&(r=n.map(_m)));let a,l=i[a=Ma(e)]||i[a=Ma(vn(e))];!l&&s&&(l=i[a=Ma(lr(e))]),l&&Pn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,r)}}function Dh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=Dh(c,e,!0);u&&(a=!0,Ot(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Et(t)&&i.set(t,null),null):(We(s)?s.forEach(l=>o[l]=null):Ot(o,s),Et(t)&&i.set(t,o),o)}function sa(t,e){return!t||!Yo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(t,e[0].toLowerCase()+e.slice(1))||ut(t,lr(e))||ut(t,e))}function Pu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t,m=Fo(t);let p,w;try{if(n.shapeFlag&4){const S=r||i,D=S;p=Fn(c.call(D,S,u,f,h,d,g)),w=a}else{const S=e;p=Fn(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),w=e.props?a:zg(a)}}catch(S){ps.length=0,na(S,t,1),p=He(jt)}let T=p;if(w&&v!==!1){const S=Object.keys(w),{shapeFlag:D}=T;S.length&&D&7&&(s&&S.some(Cc)&&(w=Hg(w,s)),T=Di(T,w,!1,!0))}return n.dirs&&(T=Di(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Ss(T,n.transition),p=T,Fo(m),p}const zg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Yo(n))&&((e||(e={}))[n]=t[n]);return e},Hg=(t,e)=>{const n={};for(const i in t)(!Cc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Vg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Lu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!sa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lu(i,o,c):!0:!!o;return!1}function Lu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!sa(n,s))return!0}return!1}function Gg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ih=t=>t.__isSuspense;function Wg(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):tg(t)}const ht=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),yo=Symbol.for("v-stc"),ps=[];let fn=null;function me(t=!1){ps.push(fn=t?null:[])}function Xg(){ps.pop(),fn=ps[ps.length-1]||null}let ys=1;function Du(t,e=!1){ys+=t,t<0&&fn&&e&&(fn.hasOnce=!0)}function Uh(t){return t.dynamicChildren=ys>0?fn||Rr:null,Xg(),ys>0&&fn&&fn.push(t),t}function _e(t,e,n,i,r,s){return Uh($(t,e,n,i,r,s,!0))}function Eo(t,e,n,i,r){return Uh(He(t,e,n,i,r,!0))}function zo(t){return t?t.__v_isVNode===!0:!1}function Ki(t,e){return t.type===e.type&&t.key===e.key}const Nh=({key:t})=>t??null,Mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?At(t)||Gt(t)||je(t)?{i:Jt,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,i=0,r=null,s=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nh(e),ref:e&&Mo(e),scopeId:rh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jt};return a?(Gc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=At(n)?8:16),ys>0&&!o&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const He=$g;function $g(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===mh)&&(t=jt),zo(t)){const a=Di(t,e,!0);return n&&Gc(a,n),ys>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag=-2,a}if(i_(t)&&(t=t.__vccOpts),e){e=qg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Cn(a)),Et(l)&&(Bc(l)&&!We(l)&&(l=Ot({},l)),e.style=Ri(l))}const o=At(t)?1:Ih(t)?128:sh(t)?64:Et(t)?4:je(t)?2:0;return $(t,e,n,i,r,o,s,!0)}function qg(t){return t?Bc(t)||Eh(t)?Ot({},t):t:null}function Di(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Dn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Nh(c),ref:e&&e.ref?n&&s?We(s)?s.concat(Mo(e)):[s,Mo(e)]:Mo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Di(t.ssContent),ssFallback:t.ssFallback&&Di(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ss(u,l.clone(u)),u}function Ho(t=" ",e=0){return He(oa,null,t,e)}function Al(t,e){const n=He(yo,null,t);return n.staticCount=e,n}function ot(t="",e=!1){return e?(me(),Eo(jt,null,t)):He(jt,null,t)}function Fn(t){return t==null||typeof t=="boolean"?He(jt):We(t)?He(ht,null,t.slice()):zo(t)?bi(t):He(oa,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Di(t)}function Gc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Eh(e)?e._ctx=Jt:r===3&&Jt&&(Jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Jt},n=32):(e=String(e),i&64?(n=16,e=[Ho(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Cn([e.class,i.class]));else if(r==="style")e.style=Ri([e.style,i.style]);else if(Yo(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){Pn(t,e,7,[n,i])}const jg=xh();let Yg=0;function Kg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||jg,s={uid:Yg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bh(i,r),emitsOptions:Dh(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kg.bind(null,s),t.ce&&t.ce(s),s}let Bt=null;const Zg=()=>Bt||Jt;let Vo,Rl;{const t=Qo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>Bt=n),Rl=e("__VUE_SSR_SETTERS__",n=>Es=n)}const Is=t=>{const e=Bt;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},Iu=()=>{Bt&&Bt.scope.off(),Vo(null)};function Oh(t){return t.vnode.shapeFlag&4}let Es=!1;function Jg(t,e=!1,n=!1){e&&Rl(e);const{props:i,children:r}=t.vnode,s=Oh(t);Tg(t,i,s,e),Cg(t,r,n||e);const o=s?Qg(t,e):void 0;return e&&Rl(!1),o}function Qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_g);const{setup:i}=n;if(i){oi();const r=t.setupContext=i.length>1?t_(t):null,s=Is(t),o=Ds(i,t,0,[t.props,r]),a=Rd(o);if(ai(),s(),(a||t.sp)&&!ds(t)&&fh(t),a){if(o.then(Iu,Iu),e)return o.then(l=>{Uu(t,l)}).catch(l=>{na(l,t,0)});t.asyncDep=o}else Uu(t,o)}else Fh(t)}function Uu(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Et(e)&&(t.setupState=Jd(e)),Fh(t)}function Fh(t,e,n){const i=t.type;t.render||(t.render=i.render||zn);{const r=Is(t);oi();try{vg(t)}finally{ai(),r()}}}const e_={get(t,e){return Ht(t,"get",""),t[e]}};function t_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,e_),slots:t.slots,emit:t.emit,expose:e}}function aa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jd(Xm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hs)return hs[n](t)},has(e,n){return n in e||n in hs}})):t.proxy}function n_(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function i_(t){return je(t)&&"__vccOpts"in t}const st=(t,e)=>Km(t,e,Es);function Wc(t,e,n){const i=arguments.length;return i===2?Et(e)&&!We(e)?zo(e)?He(t,null,[e]):He(t,e):He(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&zo(n)&&(n=[n]),He(t,e,n))}const r_="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Nu=typeof window<"u"&&window.trustedTypes;if(Nu)try{Cl=Nu.createPolicy("vue",{createHTML:t=>t})}catch{}const Bh=Cl?t=>Cl.createHTML(t):t=>t,s_="http://www.w3.org/2000/svg",o_="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,Ou=Jn&&Jn.createElement("template"),a_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Jn.createElementNS(s_,t):e==="mathml"?Jn.createElementNS(o_,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ou.innerHTML=Bh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ou.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pi="transition",Zr="animation",Ms=Symbol("_vtc"),kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},l_=Ot({},oh,kh),c_=t=>(t.displayName="Transition",t.props=l_,t),u_=c_((t,{slots:e})=>Wc(og,f_(t),e)),ki=(t,e=[])=>{We(t)?t.forEach(n=>n(...e)):t&&t(...e)},Fu=t=>t?We(t)?t.some(e=>e.length>1):t.length>1:!1;function f_(t){const e={};for(const F in t)F in kh||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=d_(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:w,onEnterCancelled:T,onLeave:S,onLeaveCancelled:D,onBeforeAppear:C=p,onAppear:P=w,onAppearCancelled:O=T}=e,b=(F,H,Q,ce)=>{F._enterCancelled=ce,zi(F,H?u:a),zi(F,H?c:o),Q&&Q()},y=(F,H)=>{F._isLeaving=!1,zi(F,f),zi(F,h),zi(F,d),H&&H()},L=F=>(H,Q)=>{const ce=F?P:w,ee=()=>b(H,F,Q);ki(ce,[H,ee]),Bu(()=>{zi(H,F?l:s),Wn(H,F?u:a),Fu(ce)||ku(H,i,v,ee)})};return Ot(e,{onBeforeEnter(F){ki(p,[F]),Wn(F,s),Wn(F,o)},onBeforeAppear(F){ki(C,[F]),Wn(F,l),Wn(F,c)},onEnter:L(!1),onAppear:L(!0),onLeave(F,H){F._isLeaving=!0;const Q=()=>y(F,H);Wn(F,f),F._enterCancelled?(Wn(F,d),Vu()):(Vu(),Wn(F,d)),Bu(()=>{F._isLeaving&&(zi(F,f),Wn(F,h),Fu(S)||ku(F,i,m,Q))}),ki(S,[F,Q])},onEnterCancelled(F){b(F,!1,void 0,!0),ki(T,[F])},onAppearCancelled(F){b(F,!0,void 0,!0),ki(O,[F])},onLeaveCancelled(F){y(F),ki(D,[F])}})}function d_(t){if(t==null)return null;if(Et(t))return[Da(t.enter),Da(t.leave)];{const e=Da(t);return[e,e]}}function Da(t){return vm(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ms]||(t[Ms]=new Set)).add(e)}function zi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ms];n&&(n.delete(e),n.size||(t[Ms]=void 0))}function Bu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let h_=0;function ku(t,e,n,i){const r=t._endId=++h_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=p_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function p_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${pi}Delay`),s=i(`${pi}Duration`),o=zu(r,s),a=i(`${Zr}Delay`),l=i(`${Zr}Duration`),c=zu(a,l);let u=null,f=0,d=0;e===pi?o>0&&(u=pi,f=o,d=s.length):e===Zr?c>0&&(u=Zr,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?pi:Zr:null,d=u?u===pi?s.length:l.length:0);const h=u===pi&&/\b(transform|all)(,|$)/.test(i(`${pi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function zu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Hu(n)+Hu(t[i])))}function Hu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vu(){return document.body.offsetHeight}function m_(t,e,n){const i=t[Ms];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Go=Symbol("_vod"),zh=Symbol("_vsh"),g_={beforeMount(t,{value:e},{transition:n}){t[Go]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Jr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Jr(t,!0),i.enter(t)):i.leave(t,()=>{Jr(t,!1)}):Jr(t,e))},beforeUnmount(t,{value:e}){Jr(t,e)}};function Jr(t,e){t.style.display=e?t[Go]:"none",t[zh]=!e}const __=Symbol(""),v_=/(^|;)\s*display\s*:/;function x_(t,e,n){const i=t.style,r=At(n);let s=!1;if(n&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bo(i,a,"")}else for(const o in e)n[o]==null&&bo(i,o,"");for(const o in n)o==="display"&&(s=!0),bo(i,o,n[o])}else if(r){if(e!==n){const o=i[__];o&&(n+=";"+o),i.cssText=n,s=v_.test(n)}}else e&&t.removeAttribute("style");Go in t&&(t[Go]=s?i.display:"",t[zh]&&(i.display="none"))}const Gu=/\s*!important$/;function bo(t,e,n){if(We(n))n.forEach(i=>bo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=S_(t,e);Gu.test(n)?t.setProperty(lr(i),n.replace(Gu,""),"important"):t[i]=n}}const Wu=["Webkit","Moz","ms"],Ia={};function S_(t,e){const n=Ia[e];if(n)return n;let i=vn(e);if(i!=="filter"&&i in t)return Ia[e]=i;i=Jo(i);for(let r=0;r<Wu.length;r++){const s=Wu[r]+i;if(s in t)return Ia[e]=s}return e}const Xu="http://www.w3.org/1999/xlink";function $u(t,e,n,i,r,s=bm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xu,e.slice(6,e.length)):t.setAttributeNS(Xu,e,n):n==null||s&&!Dd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ui(n)?String(n):n)}function qu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Dd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function y_(t,e,n,i){t.addEventListener(e,n,i)}function E_(t,e,n,i){t.removeEventListener(e,n,i)}const ju=Symbol("_vei");function M_(t,e,n,i,r=null){const s=t[ju]||(t[ju]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=b_(e);if(i){const c=s[e]=A_(i,r);y_(t,a,c,l)}else o&&(E_(t,a,o,l),s[e]=void 0)}}const Yu=/(?:Once|Passive|Capture)$/;function b_(t){let e;if(Yu.test(t)){e={};let i;for(;i=t.match(Yu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lr(t.slice(2)),e]}let Ua=0;const T_=Promise.resolve(),w_=()=>Ua||(T_.then(()=>Ua=0),Ua=Date.now());function A_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Pn(R_(i,n.value),e,5,[i])};return n.value=t,n.attached=w_(),n}function R_(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ku=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,C_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?m_(t,i,o):e==="style"?x_(t,n,i):Yo(e)?Cc(e)||M_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):P_(t,e,i,o))?(qu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$u(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!At(i))?qu(t,vn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),$u(t,e,i,o))};function P_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ku(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ku(e)&&At(n)?!1:e in t}const L_=["ctrl","shift","alt","meta"],D_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>L_.some(n=>t[`${n}Key`]&&!e.includes(n))},Zu=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=D_[e[o]];if(a&&a(r,e))return}return t(r,...s)})},I_=Ot({patchProp:C_},a_);let Ju;function U_(){return Ju||(Ju=Lg(I_))}const N_=(...t)=>{const e=U_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=F_(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,O_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function O_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function F_(t){return At(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wr=typeof document<"u";function B_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const dt=Object.assign;function Na(t,e){const n={};for(const i in e){const r=e[i];n[i]=Ln(r)?r.map(t):t(r)}return n}const ms=()=>{},Ln=Array.isArray,Hh=/#/g,k_=/&/g,z_=/\//g,H_=/=/g,V_=/\?/g,Vh=/\+/g,G_=/%5B/g,W_=/%5D/g,Gh=/%5E/g,X_=/%60/g,Wh=/%7B/g,$_=/%7C/g,Xh=/%7D/g,q_=/%20/g;function Xc(t){return encodeURI(""+t).replace($_,"|").replace(G_,"[").replace(W_,"]")}function j_(t){return Xc(t).replace(Wh,"{").replace(Xh,"}").replace(Gh,"^")}function Pl(t){return Xc(t).replace(Vh,"%2B").replace(q_,"+").replace(Hh,"%23").replace(k_,"%26").replace(X_,"`").replace(Wh,"{").replace(Xh,"}").replace(Gh,"^")}function Y_(t){return Pl(t).replace(H_,"%3D")}function K_(t){return Xc(t).replace(Hh,"%23").replace(V_,"%3F")}function Z_(t){return t==null?"":K_(t).replace(z_,"%2F")}function bs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const J_=/\/$/,Q_=t=>t.replace(J_,"");function Oa(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=i0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:bs(o)}}function e0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function t0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Or(e.matched[i],n.matched[r])&&$h(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Or(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $h(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!n0(t[n],e[n]))return!1;return!0}function n0(t,e){return Ln(t)?ef(t,e):Ln(e)?ef(e,t):t===e}function ef(t,e){return Ln(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function i0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ts;(function(t){t.pop="pop",t.push="push"})(Ts||(Ts={}));var gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gs||(gs={}));function r0(t){if(!t)if(wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Q_(t)}const s0=/^[^#]+#/;function o0(t,e){return t.replace(s0,"#")+e}function a0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const la=()=>({left:window.scrollX,top:window.scrollY});function l0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=a0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tf(t,e){return(history.state?history.state.position-e:-1)+t}const Ll=new Map;function c0(t,e){Ll.set(t,e)}function u0(t){const e=Ll.get(t);return Ll.delete(t),e}let f0=()=>location.protocol+"//"+location.host;function qh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Qu(l,"")}return Qu(n,t)+i+r}function d0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=qh(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Ts.pop,direction:m?m>0?gs.forward:gs.back:gs.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(dt({},d.state,{scroll:la()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function nf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?la():null}}function h0(t){const{history:e,location:n}=window,i={value:qh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:f0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=dt({},e.state,nf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=dt({},r.value,e.state,{forward:l,scroll:la()});s(u.current,u,!0);const f=dt({},nf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function p0(t){t=r0(t);const e=h0(t),n=d0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=dt({location:"",base:t,go:i,createHref:o0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function m0(t){return typeof t=="string"||t&&typeof t=="object"}function jh(t){return typeof t=="string"||typeof t=="symbol"}const Yh=Symbol("");var rf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rf||(rf={}));function Fr(t,e){return dt(new Error,{type:t,[Yh]:!0},e)}function Xn(t,e){return t instanceof Error&&Yh in t&&(e==null||!!(t.type&e))}const sf="[^/]+?",g0={sensitive:!1,strict:!1,start:!0,end:!0},_0=/[.+*?^${}()[\]/\\]/g;function v0(t,e){const n=dt({},g0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(_0,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=d;s.push({name:g,repeatable:v,optional:m});const w=p||sf;if(w!==sf){h+=10;try{new RegExp(`(${w})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+S.message)}}let T=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,h+=20,m&&(h+=-8),v&&(h+=-20),w===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(Ln(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Ln(p)?p.join("/"):p;if(!w)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function x0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Kh(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=x0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(of(i))return 1;if(of(r))return-1}return r.length-i.length}function of(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const S0={type:0,value:""},y0=/[a-zA-Z0-9_]/;function E0(t){if(!t)return[[]];if(t==="/")return[[S0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:y0.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function M0(t,e,n){const i=v0(E0(t.path),n),r=dt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function b0(t,e){const n=[],i=new Map;e=cf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,v=T0(f);v.aliasOf=h&&h.record;const m=cf(e,f),p=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of S)p.push(dt({},v,{components:h?h.record.components:v.components,path:D,aliasOf:h?h.record:v}))}let w,T;for(const S of p){const{path:D}=S;if(d&&D[0]!=="/"){const C=d.record.path,P=C[C.length-1]==="/"?"":"/";S.path=d.record.path+(D&&P+D)}if(w=M0(S,d,m),h?h.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),g&&f.name&&!lf(w)&&o(f.name)),Zh(w)&&l(w),v.children){const C=v.children;for(let P=0;P<C.length;P++)s(C[P],w,h&&h.children[P])}h=h||w}return T?()=>{o(T)}:ms}function o(f){if(jh(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=R0(f,n);n.splice(d,0,f),f.record.name&&!lf(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Fr(1,{location:f});m=h.record.name,g=dt(af(d.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&af(f.params,h.keys.map(T=>T.name))),v=h.stringify(g)}else if(f.path!=null)v=f.path,h=n.find(T=>T.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!h)throw Fr(1,{location:f,currentLocation:d});m=h.record.name,g=dt({},d.params,f.params),v=h.stringify(g)}const p=[];let w=h;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:v,params:g,matched:p,meta:A0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function af(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function T0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:w0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function w0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function A0(t){return t.reduce((e,n)=>dt(e,n.meta),{})}function cf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function R0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Kh(t,e[s])<0?i=s:n=s+1}const r=C0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function C0(t){let e=t;for(;e=e.parent;)if(Zh(e)&&Kh(t,e)===0)return e}function Zh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function P0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Vh," "),o=s.indexOf("="),a=bs(o<0?s:s.slice(0,o)),l=o<0?null:bs(s.slice(o+1));if(a in e){let c=e[a];Ln(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function uf(t){let e="";for(let n in t){const i=t[n];if(n=Y_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ln(i)?i.map(s=>s&&Pl(s)):[i&&Pl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function L0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Ln(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const D0=Symbol(""),ff=Symbol(""),ca=Symbol(""),Jh=Symbol(""),Dl=Symbol("");function Qr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ti(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Fr(4,{from:n,to:e})):d instanceof Error?l(d):m0(d)?l(Fr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Fa(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(I0(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ti(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=B_(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Ti(h,n,i,o,a,r)()}))}}return s}function I0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function df(t){const e=Hn(ca),n=Hn(Jh),i=st(()=>{const l=Qe(t.to);return e.resolve(l)}),r=st(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Or.bind(null,u));if(d>-1)return d;const h=hf(l[c-2]);return c>1&&hf(u)===h&&f[f.length-1].path!==h?f.findIndex(Or.bind(null,l[c-2])):d}),s=st(()=>r.value>-1&&F0(n.params,i.value.params)),o=st(()=>r.value>-1&&r.value===n.matched.length-1&&$h(n.params,i.value.params));function a(l={}){return O0(l)?e[Qe(t.replace)?"replace":"push"](Qe(t.to)).catch(ms):Promise.resolve()}return{route:i,href:st(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const U0=xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:df,setup(t,{slots:e}){const n=ta(df(t)),{options:i}=Hn(ca),r=st(()=>({[pf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[pf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),N0=U0;function O0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function F0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Ln(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pf=(t,e,n)=>t??e??n,B0=xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Hn(Dl),r=st(()=>t.route||i.value),s=Hn(ff,0),o=st(()=>{let c=Qe(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=st(()=>r.value.matched[o.value]);xo(ff,st(()=>o.value+1)),xo(D0,a),xo(Dl,r);const l=sn();return So(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Or(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return mf(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Wc(d,dt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return mf(n.default,{Component:m,route:c})||m}}});function mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const k0=B0;function z0(t){const e=b0(t.routes,t),n=t.parseQuery||P0,i=t.stringifyQuery||uf,r=t.history,s=Qr(),o=Qr(),a=Qr(),l=$m(mi);let c=mi;wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,N=>""+N),f=Na.bind(null,Z_),d=Na.bind(null,bs);function h(N,oe){let fe,ue;return jh(N)?(fe=e.getRecordMatcher(N),ue=oe):ue=N,e.addRoute(ue,fe)}function g(N){const oe=e.getRecordMatcher(N);oe&&e.removeRoute(oe)}function v(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,oe){if(oe=dt({},oe||l.value),typeof N=="string"){const x=Oa(n,N,oe.path),ie=e.resolve({path:x.path},oe),k=r.createHref(x.fullPath);return dt(x,ie,{params:d(ie.params),hash:bs(x.hash),redirectedFrom:void 0,href:k})}let fe;if(N.path!=null)fe=dt({},N,{path:Oa(n,N.path,oe.path).path});else{const x=dt({},N.params);for(const ie in x)x[ie]==null&&delete x[ie];fe=dt({},N,{params:f(x)}),oe.params=f(oe.params)}const ue=e.resolve(fe,oe),ke=N.hash||"";ue.params=u(d(ue.params));const A=e0(i,dt({},N,{hash:j_(ke),path:ue.path})),R=r.createHref(A);return dt({fullPath:A,hash:ke,query:i===uf?L0(N.query):N.query||{}},ue,{redirectedFrom:void 0,href:R})}function w(N){return typeof N=="string"?Oa(n,N,l.value.path):dt({},N)}function T(N,oe){if(c!==N)return Fr(8,{from:oe,to:N})}function S(N){return P(N)}function D(N){return S(dt(w(N),{replace:!0}))}function C(N){const oe=N.matched[N.matched.length-1];if(oe&&oe.redirect){const{redirect:fe}=oe;let ue=typeof fe=="function"?fe(N):fe;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=w(ue):{path:ue},ue.params={}),dt({query:N.query,hash:N.hash,params:ue.path!=null?{}:N.params},ue)}}function P(N,oe){const fe=c=p(N),ue=l.value,ke=N.state,A=N.force,R=N.replace===!0,x=C(fe);if(x)return P(dt(w(x),{state:typeof x=="object"?dt({},ke,x.state):ke,force:A,replace:R}),oe||fe);const ie=fe;ie.redirectedFrom=oe;let k;return!A&&t0(i,ue,fe)&&(k=Fr(16,{to:ie,from:ue}),Ue(ue,ue,!0,!1)),(k?Promise.resolve(k):y(ie,ue)).catch(W=>Xn(W)?Xn(W,2)?W:Te(W):V(W,ie,ue)).then(W=>{if(W){if(Xn(W,2))return P(dt({replace:R},w(W.to),{state:typeof W.to=="object"?dt({},ke,W.to.state):ke,force:A}),oe||ie)}else W=F(ie,ue,!0,R,ke);return L(ie,ue,W),W})}function O(N,oe){const fe=T(N,oe);return fe?Promise.reject(fe):Promise.resolve()}function b(N){const oe=j.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(N):N()}function y(N,oe){let fe;const[ue,ke,A]=H0(N,oe);fe=Fa(ue.reverse(),"beforeRouteLeave",N,oe);for(const x of ue)x.leaveGuards.forEach(ie=>{fe.push(Ti(ie,N,oe))});const R=O.bind(null,N,oe);return fe.push(R),we(fe).then(()=>{fe=[];for(const x of s.list())fe.push(Ti(x,N,oe));return fe.push(R),we(fe)}).then(()=>{fe=Fa(ke,"beforeRouteUpdate",N,oe);for(const x of ke)x.updateGuards.forEach(ie=>{fe.push(Ti(ie,N,oe))});return fe.push(R),we(fe)}).then(()=>{fe=[];for(const x of A)if(x.beforeEnter)if(Ln(x.beforeEnter))for(const ie of x.beforeEnter)fe.push(Ti(ie,N,oe));else fe.push(Ti(x.beforeEnter,N,oe));return fe.push(R),we(fe)}).then(()=>(N.matched.forEach(x=>x.enterCallbacks={}),fe=Fa(A,"beforeRouteEnter",N,oe,b),fe.push(R),we(fe))).then(()=>{fe=[];for(const x of o.list())fe.push(Ti(x,N,oe));return fe.push(R),we(fe)}).catch(x=>Xn(x,8)?x:Promise.reject(x))}function L(N,oe,fe){a.list().forEach(ue=>b(()=>ue(N,oe,fe)))}function F(N,oe,fe,ue,ke){const A=T(N,oe);if(A)return A;const R=oe===mi,x=wr?history.state:{};fe&&(ue||R?r.replace(N.fullPath,dt({scroll:R&&x&&x.scroll},ke)):r.push(N.fullPath,ke)),l.value=N,Ue(N,oe,fe,R),Te()}let H;function Q(){H||(H=r.listen((N,oe,fe)=>{if(!he.listening)return;const ue=p(N),ke=C(ue);if(ke){P(dt(ke,{replace:!0}),ue).catch(ms);return}c=ue;const A=l.value;wr&&c0(tf(A.fullPath,fe.delta),la()),y(ue,A).catch(R=>Xn(R,12)?R:Xn(R,2)?(P(R.to,ue).then(x=>{Xn(x,20)&&!fe.delta&&fe.type===Ts.pop&&r.go(-1,!1)}).catch(ms),Promise.reject()):(fe.delta&&r.go(-fe.delta,!1),V(R,ue,A))).then(R=>{R=R||F(ue,A,!1),R&&(fe.delta&&!Xn(R,8)?r.go(-fe.delta,!1):fe.type===Ts.pop&&Xn(R,20)&&r.go(-1,!1)),L(ue,A,R)}).catch(ms)}))}let ce=Qr(),ee=Qr(),ae;function V(N,oe,fe){Te(N);const ue=ee.list();return ue.length?ue.forEach(ke=>ke(N,oe,fe)):console.error(N),Promise.reject(N)}function Ee(){return ae&&l.value!==mi?Promise.resolve():new Promise((N,oe)=>{ce.add([N,oe])})}function Te(N){return ae||(ae=!N,Q(),ce.list().forEach(([oe,fe])=>N?fe(N):oe()),ce.reset()),N}function Ue(N,oe,fe,ue){const{scrollBehavior:ke}=t;if(!wr||!ke)return Promise.resolve();const A=!fe&&u0(tf(N.fullPath,0))||(ue||!fe)&&history.state&&history.state.scroll||null;return eh().then(()=>ke(N,oe,A)).then(R=>R&&l0(R)).catch(R=>V(R,N,oe))}const ze=N=>r.go(N);let et;const j=new Set,he={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:S,replace:D,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:Ee,install(N){const oe=this;N.component("RouterLink",N0),N.component("RouterView",k0),N.config.globalProperties.$router=oe,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Qe(l)}),wr&&!et&&l.value===mi&&(et=!0,S(r.location).catch(ke=>{}));const fe={};for(const ke in mi)Object.defineProperty(fe,ke,{get:()=>l.value[ke],enumerable:!0});N.provide(ca,oe),N.provide(Jh,Yd(fe)),N.provide(Dl,l);const ue=N.unmount;j.add(N),N.unmount=function(){j.delete(N),j.size<1&&(c=mi,H&&H(),H=null,l.value=mi,et=!1,ae=!1),ue()}}};function we(N){return N.reduce((oe,fe)=>oe.then(()=>b(fe)),Promise.resolve())}return he}function H0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Or(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Or(c,l))||r.push(l))}return[n,i,r]}function V0(){return Hn(ca)}const Wr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},G0={class:"fixed top-0 left-0 right-0 z-30 flex justify-center",style:{"padding-top":"env(safe-area-inset-top)"}},W0={class:"flex items-start md:items-center w-full max-w-[1280px] px-4 md:px-16"},X0={class:"hidden md:flex items-center w-full justify-between"},$0={class:"rounded-full px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},q0={class:"flex gap-x-2"},j0={class:"flex gap-x-6 rounded-full px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},Y0=["href"],K0={class:"flex flex-col gap-y-4 md:hidden items-center w-full justify-center"},Z0={class:"flex gap-x-3 items-center rounded-full px-8 p-4 mt-4 backdrop-blur-2xl bg-white/10 border border-white/10"},J0={class:"flex place-items-center"},Q0={class:"flex flex-col gap-y-4 items-center"},ev={class:"flex flex-col gap-y-6 rounded-3xl min-w-64 px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},tv=["href"],nv={__name:"Header",setup(t){const e=V0(),n=sn(!1),i=sn(!1),r=[{name:"후원",link:"#sponsors"},{name:"시간표",link:"#schedule"},{name:"연사",link:"#speakers"}],s=()=>{window.dispatchEvent(new CustomEvent("reset-particles")),i.value=!0,setTimeout(()=>{i.value=!1},600),e.push("/")},o=()=>{window.open("https://www.ticketa.co/events/35","_blank")};return(a,l)=>{const c=zc("router-link");return me(),_e("div",G0,[$("header",W0,[$("div",X0,[$("div",$0,[He(c,{to:"/",onClick:Zu(s,["prevent"])},{default:fs(()=>[$("div",{class:Cn(["font-black text-xl cursor-pointer",{flash:i.value}])},l[1]||(l[1]=[$("span",{class:"text-white box-shadow-xl"},[Ho("Let's Swift "),$("span",{class:"text-rainbow"},"2025")],-1)]),2)]),_:1})]),$("div",q0,[$("div",j0,[(me(),_e(ht,null,Nt(r,u=>$("div",{key:u},[$("a",{href:u.link,class:"font-semibold text-base text-white"},lt(u.name),9,Y0)])),64))]),$("button",{onClick:o,class:"px-8 p-4 flex items-center font-semibold text-base text-slate-100 hover:text-white active:text-white backdrop-blur-2xl duration-300 bg-yellow-500/50 hover:bg-yellow-500/60 active:bg-yellow-500/50 border border-white/10 rounded-full transition"}," 입장권 구매 ")])]),$("div",K0,[$("div",Z0,[He(c,{to:"/",onClick:Zu(s,["prevent"])},{default:fs(()=>[$("div",{class:Cn(["font-black text-xl cursor-pointer",{flash:i.value}])},l[2]||(l[2]=[$("span",{class:"text-white box-shadow-xl"},[Ho("Let's Swift "),$("span",{class:"text-rainbow"},"2025")],-1)]),2)]),_:1}),$("div",J0,[$("button",{onClick:l[0]||(l[0]=u=>n.value=!n.value),class:"text-white"},l[3]||(l[3]=[$("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)]))])]),He(u_,{name:"mobile-menu"},{default:fs(()=>[ng($("div",null,[$("div",Q0,[$("div",ev,[(me(),_e(ht,null,Nt(r,u=>$("div",{key:u},[$("a",{href:u.link,class:"font-semibold text-base text-white"},lt(u.name),9,tv)])),64))]),$("button",{onClick:o,class:"px-8 p-4 cursor-pointer flex items-center font-semibold text-base text-slate-100 hover:text-white active:text-white backdrop-blur-2xl duration-300 bg-themeMain/50 hover:bg-themeMain/70 active:bg-themeMain/50 rounded-full transition"}," 입장권 구매 ")])],512),[[g_,n.value]])]),_:1})])])])}}},iv=Wr(nv,[["__scopeId","data-v-b0ca2f0a"]]),rv=["width","height"],sv=$("title",null,"Facebook",-1),ov=$("path",{d:"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"},null,-1),av=[sv,ov],Qh=xn({__name:"FacebookIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),av,16,rv))}}),lv=["width","height"],cv=$("title",null,"GitHub",-1),uv=$("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),fv=[cv,uv],$c=xn({__name:"GitHubIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),fv,16,lv))}}),dv=["width","height"],hv=$("title",null,"Instagram",-1),pv=$("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},null,-1),mv=[hv,pv],qc=xn({__name:"InstagramIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),mv,16,dv))}}),gv=["width","height"],_v=$("title",null,"LinkedIn",-1),vv=$("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},null,-1),xv=[_v,vv],jc=xn({__name:"LinkedInIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),xv,16,gv))}}),Sv=["width","height"],yv=$("title",null,"Mail.Ru",-1),Ev=$("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"},null,-1),Mv=[yv,Ev],ws=xn({__name:"MailDotRuIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Mv,16,Sv))}}),bv=["width","height"],Tv=$("title",null,"Mastodon",-1),wv=$("path",{d:"M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"},null,-1),Av=[Tv,wv],ep=xn({__name:"MastodonIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Av,16,bv))}}),Rv=["width","height"],Cv=$("title",null,"Medium",-1),Pv=$("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"},null,-1),Lv=[Cv,Pv],tp=xn({__name:"MediumIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Lv,16,Rv))}}),Dv=["width","height"],Iv=$("title",null,"Threads",-1),Uv=$("path",{d:"M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"},null,-1),Nv=[Iv,Uv],np=xn({__name:"ThreadsIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Nv,16,Dv))}}),Ov=["width","height"],Fv=$("title",null,"X",-1),Bv=$("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},null,-1),kv=[Fv,Bv],Yc=xn({__name:"XIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),kv,16,Ov))}}),zv=["width","height"],Hv=$("title",null,"YouTube",-1),Vv=$("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),Gv=[Hv,Vv],Kc=xn({__name:"YouTubeIcon",props:{size:{default:24}},setup(t){const e=t,n=st(()=>{const i=Qe(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(me(),_e("svg",Dn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Gv,16,zv))}}),Wv={class:"relative flex justify-center"},Xv={class:"z-20 mb-8 relative flex flex-col backdrop-blur-2xl bg-white/10 border border-white/10 rounded-4xl p-4 w-full max-w-[1280px] mx-4"},$v={class:"flex justify-center"},qv={class:"px-8 xl:px-8 py-4 w-full max-w-[1280px] flex flex-col items-center text-white"},jv={class:"px-2 pt-4 pb-12 grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-x-8 gap-y-12 text-xs font-semibold"},Yv={class:"flex flex-col space-y-3 items-start"},Kv=["href","target"],Zv={class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50 cursor-pointer"},Jv={class:"flex flex-col space-y-3 items-start"},Qv=["href"],ex=["href"],tx=["href"],nx={class:"flex flex-col space-y-3 items-start"},ix=["href"],rx={__name:"Footer",setup(t){const e=[{text:"Let'Swift 뉴스레터 구독하기",url:"https://page.stibee.com/subscriptions/58654",target:"_blank"},{text:"Let'Swift 앱 다운로드",url:"https://apps.apple.com/app/id1282995254",target:"_blank"},{text:"행동지침",url:null,link:"/CodeOfConduct",target:""}],n=[{text:"행사 후원 문의",url:"mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"}],i={MailDotRuIcon:ws,GitHubIcon:$c,XIcon:Yc,InstagramIcon:qc,YouTubeIcon:Kc,LinkedInIcon:jc},r=[{name:"Email",image:"MailDotRuIcon",url:"mailto:letswift.official@gmail.com"},{name:"YouTube",image:"YouTubeIcon",url:"https://www.youtube.com/@letswift_official"},{name:"YouTube (2023 이전)",image:"YouTubeIcon",url:"https://youtube.com/playlist?list=PLAHa1zfLtLiPY9gDxRwhNDbYZvjFKiurH&si=-Zft8ebxkt-65x4J"},{name:"LinkedIn",image:"LinkedInIcon",url:"https://www.linkedin.com/company/letswift"},{name:"Instagram",image:"InstagramIcon",url:"https://www.instagram.com/letswiftkr"},{name:"𝕏",image:"XIcon",url:"https://x.com/letswiftkr"},{name:"GitHub",image:"GitHubIcon",url:"https://github.com/letswiftconf"}],s=[{year:2024,url:"https://letswift.kr/2024",overlay_class:"bg-black/30",class:"",text_class:""},{year:2023,url:"https://letswift.kr/2023",overlay_class:"bg-black/30",class:"",text_class:""},{year:2022,url:"https://letswift.kr/2022",overlay_class:"bg-black/30",class:"",text_class:""},{year:2020,url:"https://letswift.kr/2020",overlay_class:"bg-black/30",class:"",text_class:""},{year:2019,url:"https://letswift.kr/2019",overlay_class:"bg-black/30",class:"",text_class:""},{year:2018,url:"https://letswift.kr/2018",overlay_class:"bg-black/30",class:"",text_class:""},{year:2017,url:"https://letswift.kr/2017",overlay_class:"bg-black/50",class:"bg-white",text_class:""},{year:2016,url:"https://letswift.kr/2016",overlay_class:"bg-black/50",class:"bg-white",text_class:""}],o=[{name:"홈페이지",image:"GitHubIcon",url:"https://github.com/letswiftconf/letswift.kr"},{name:"iOS 앱",image:"GitHubIcon",url:"https://github.com/letswiftconf/LetSwift"},{name:"뉴스레터",image:"GitHubIcon",url:"https://github.com/letswiftconf/newsletter"}];return(a,l)=>{const c=zc("router-link");return me(),_e("div",Wv,[$("footer",Xv,[$("div",$v,[$("div",qv,[l[4]||(l[4]=Al('<div class="px-2 flex grow w-full"><div class="text-lg font-bold text-zinc-200 select-none">Let&#39;Swift <span class="text-rainbow">2025</span></div><div class="grow"></div></div><div class="my-4 h-px w-full bg-white/10"></div>',2)),$("div",jv,[$("div",Yv,[(me(),_e(ht,null,Nt(e,u=>$("div",{key:u.text},[u.url!==null?(me(),_e("a",{key:0,href:u.url,target:u.target,class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},lt(u.text),9,Kv)):(me(),Eo(c,{key:1,to:u.link},{default:fs(()=>[$("span",Zv,lt(u.text),1)]),_:2},1032,["to"]))])),64))]),$("div",Jv,[l[0]||(l[0]=$("div",{class:"font-bold text-zinc-200"},"후원",-1)),(me(),_e(ht,null,Nt(n,u=>$("div",{key:u.text},[$("a",{href:u.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},lt(u.text),9,Qv)])),64)),l[1]||(l[1]=$("div",{class:"pt-4 font-bold text-zinc-200"},"소식",-1)),(me(),_e(ht,null,Nt(r,u=>$("div",{key:u.name},[$("a",{href:u.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(me(),Eo(Eu(i[u.image]),{fill:"gray",width:"10",height:"10"})),$("span",null,lt(u.name),1)],8,ex)])),64)),l[2]||(l[2]=$("div",{class:"pt-4 font-bold text-zinc-200"},"오픈소스",-1)),(me(),_e(ht,null,Nt(o,u=>$("div",{key:u.name},[$("a",{href:u.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(me(),Eo(Eu(i[u.image]),{fill:"gray",width:"10",height:"10"})),$("span",null,lt(u.name),1)],8,tx)])),64))]),$("div",nx,[l[3]||(l[3]=$("div",null,"이전 행사",-1)),(me(),_e(ht,null,Nt(s,u=>$("div",{key:u.text},[$("a",{href:u.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},lt(u.year),9,ix)])),64))])]),l[5]||(l[5]=Al('<div class="my-4 h-px w-full bg-white/10"></div><div class="px-2 w-full text-xs lg:flex lg:space-x-2 space-y-2 lg:space-y-0"><div><span class="text-zinc-400/80">Copyright © 2025 </span><span class="font-semibold text-zinc-200">Let&#39;Swift.</span><span class="text-zinc-400/80"> All rights reserved.</span></div></div>',2))])])])])}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="178",sx=0,gf=1,ox=2,ip=1,ax=2,Zn=3,Ii=0,Qt=1,ti=2,Ci=0,Ir=1,Il=2,_f=3,vf=4,lx=5,Zi=100,cx=101,ux=102,fx=103,dx=104,hx=200,px=201,mx=202,gx=203,Ul=204,Nl=205,_x=206,vx=207,xx=208,Sx=209,yx=210,Ex=211,Mx=212,bx=213,Tx=214,Ol=0,Fl=1,Bl=2,Br=3,kl=4,zl=5,Hl=6,Vl=7,rp=0,wx=1,Ax=2,Pi=0,Rx=1,Cx=2,Px=3,Lx=4,Dx=5,Ix=6,Ux=7,sp=300,kr=301,zr=302,Gl=303,Wl=304,ua=306,Xl=1e3,Qi=1001,$l=1002,Rn=1003,Nx=1004,js=1005,kn=1006,Ba=1007,er=1008,li=1009,op=1010,ap=1011,As=1012,Jc=1013,sr=1014,ni=1015,Us=1016,Qc=1017,eu=1018,Rs=1020,lp=35902,cp=1021,up=1022,wn=1023,Cs=1026,Ps=1027,fp=1028,tu=1029,dp=1030,nu=1031,iu=1033,To=33776,wo=33777,Ao=33778,Ro=33779,ql=35840,jl=35841,Yl=35842,Kl=35843,Zl=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,rc=37812,sc=37813,oc=37814,ac=37815,lc=37816,cc=37817,uc=37818,fc=37819,dc=37820,hc=37821,Co=36492,pc=36494,mc=36495,hp=36283,gc=36284,_c=36285,vc=36286,Ox=3200,Fx=3201,Bx=0,kx=1,wi="",gn="srgb",Hr="srgb-linear",Wo="linear",gt="srgb",fr=7680,xf=519,zx=512,Hx=513,Vx=514,pp=515,Gx=516,Wx=517,Xx=518,$x=519,Sf=35044,yf="300 es",ii=2e3,Xo=2001;class Xr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ka=Math.PI/180,xc=180/Math.PI;function Ns(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function qx(t,e){return(t%e+e)%e}function za(t,e,n){return(1-n)*t+n*e}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*v,w=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const D=Math.sqrt(T),C=Math.atan2(D,p*w);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const S=a*w;if(l=l*m+d*S,c=c*m+h*S,u=u*m+g*S,f=f*m+v*S,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=D,c*=D,u*=D,f*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ef.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new Z,Ef=new Os;class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],w=r[1],T=r[4],S=r[7],D=r[2],C=r[5],P=r[8];return s[0]=o*v+a*w+l*D,s[3]=o*m+a*T+l*C,s[6]=o*p+a*S+l*P,s[1]=c*v+u*w+f*D,s[4]=c*m+u*T+f*C,s[7]=c*p+u*S+f*P,s[2]=d*v+h*w+g*D,s[5]=d*m+h*T+g*C,s[8]=d*p+h*S+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Va.makeScale(e,n)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,n){return this.premultiply(Va.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Ze;function mp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jx(){const t=$o("canvas");return t.style.display="block",t}const Mf={};function Ur(t){t in Mf||(Mf[t]=!0,console.warn(t))}function Yx(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Kx(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zx(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bf=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jx(){const t={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Wo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hr]:{primaries:e,whitePoint:i,transfer:Wo,toXYZ:bf,fromXYZ:Tf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:bf,fromXYZ:Tf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),t}const rt=Jx();function si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Nr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let dr;class Qx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{dr===void 0&&(dr=$o("canvas")),dr.width=e.width,dr.height=e.height;const r=dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=dr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$o("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(si(n[i]/255)*255):n[i]=si(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eS=0;class ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ga(r[o].image)):s.push(Ga(r[o]))}else s=Ga(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ga(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tS=0;const Wa=new Z;class en extends Xr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Qi,r=Qi,s=kn,o=er,a=wn,l=li,c=en.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Ns(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xl:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xl:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=sp;en.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,S=(h+1)/2,D=(p+1)/2,C=(u+d)/4,P=(f+v)/4,O=(g+m)/4;return T>S&&T>D?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=P/i):S>D?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=O/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=P/s,r=O/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nS extends Xr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new en(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ru(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends nS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class gp extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iS extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Ks.subVectors(this.max,ts),hr.subVectors(e.a,ts),pr.subVectors(e.b,ts),mr.subVectors(e.c,ts),gi.subVectors(pr,hr),_i.subVectors(mr,pr),Hi.subVectors(hr,mr);let n=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Hi.z,Hi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Hi.z,0,-Hi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Hi.y,Hi.x,0];return!Xa(n,hr,pr,mr,Ks)||(n=[1,0,0,0,1,0,0,0,1],!Xa(n,hr,pr,mr,Ks))?!1:(Zs.crossVectors(gi,_i),n=[Zs.x,Zs.y,Zs.z],Xa(n,hr,pr,mr,Ks))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],yn=new Z,Ys=new Fs,hr=new Z,pr=new Z,mr=new Z,gi=new Z,_i=new Z,Hi=new Z,ts=new Z,Ks=new Z,Zs=new Z,Vi=new Z;function Xa(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vi.fromArray(t,s);const a=r.x*Math.abs(Vi.x)+r.y*Math.abs(Vi.y)+r.z*Math.abs(Vi.z),l=e.dot(Vi),c=n.dot(Vi),u=i.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rS=new Fs,ns=new Z,$a=new Z;class fa{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add($a)),this.expandByPoint(ns.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new Z,qa=new Z,Js=new Z,vi=new Z,ja=new Z,Qs=new Z,Ya=new Z;class _p{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qa.copy(e).add(n).multiplyScalar(.5),Js.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(qa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Js),a=vi.dot(this.direction),l=-vi.dot(Js),c=vi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qa).addScaledVector(Js,d),h}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){ja.subVectors(n,e),Qs.subVectors(i,e),Ya.crossVectors(ja,Qs);let o=this.direction.dot(Ya),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(Qs.crossVectors(vi,Qs));if(l<0)return null;const c=a*this.direction.dot(ja.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(Ya);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,oS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),xi.crossVectors(i,ln),xi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),xi.crossVectors(i,ln)),xi.normalize(),eo.crossVectors(ln,xi),r[0]=xi.x,r[4]=eo.x,r[8]=ln.x,r[1]=xi.y,r[5]=eo.y,r[9]=ln.y,r[2]=xi.z,r[6]=eo.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],T=i[7],S=i[11],D=i[15],C=r[0],P=r[4],O=r[8],b=r[12],y=r[1],L=r[5],F=r[9],H=r[13],Q=r[2],ce=r[6],ee=r[10],ae=r[14],V=r[3],Ee=r[7],Te=r[11],Ue=r[15];return s[0]=o*C+a*y+l*Q+c*V,s[4]=o*P+a*L+l*ce+c*Ee,s[8]=o*O+a*F+l*ee+c*Te,s[12]=o*b+a*H+l*ae+c*Ue,s[1]=u*C+f*y+d*Q+h*V,s[5]=u*P+f*L+d*ce+h*Ee,s[9]=u*O+f*F+d*ee+h*Te,s[13]=u*b+f*H+d*ae+h*Ue,s[2]=g*C+v*y+m*Q+p*V,s[6]=g*P+v*L+m*ce+p*Ee,s[10]=g*O+v*F+m*ee+p*Te,s[14]=g*b+v*H+m*ae+p*Ue,s[3]=w*C+T*y+S*Q+D*V,s[7]=w*P+T*L+S*ce+D*Ee,s[11]=w*O+T*F+S*ee+D*Te,s[15]=w*b+T*H+S*ae+D*Ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,T=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,S=u*v*c-g*f*c+g*a*h-o*v*h-u*a*p+o*f*p,D=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,C=n*w+i*T+r*S+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=w*P,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*P,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*P,e[4]=T*P,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*P,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*P,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*P,e[8]=S*P,e[9]=(g*f*s-u*v*s-g*i*h+n*v*h+u*i*p-n*f*p)*P,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*P,e[12]=D*P,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*P,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,w=l*c,T=l*u,S=l*f,D=i.x,C=i.y,P=i.z;return r[0]=(1-(v+p))*D,r[1]=(h+S)*D,r[2]=(g-T)*D,r[3]=0,r[4]=(h-S)*C,r[5]=(1-(d+p))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(g+T)*P,r[9]=(m-w)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=gr.set(r[0],r[1],r[2]).length();const o=gr.set(r[4],r[5],r[6]).length(),a=gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const c=1/s,u=1/o,f=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=f,En.elements[9]*=f,En.elements[10]*=f,n.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ii){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===ii)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Xo)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ii){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,v;if(a===ii)g=(o+s)*f,v=-2*f;else if(a===Xo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gr=new Z,En=new Ct,sS=new Z(0,0,0),oS=new Z(1,1,1),xi=new Z,eo=new Z,ln=new Z,wf=new Ct,Af=new Os;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Af.setFromEuler(this),this.setFromQuaternion(Af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aS=0;const Rf=new Z,_r=new Os,jn=new Ct,to=new Z,is=new Z,lS=new Z,cS=new Os,Cf=new Z(1,0,0),Pf=new Z(0,1,0),Lf=new Z(0,0,1),Df={type:"added"},uS={type:"removed"},vr={type:"childadded",child:null},Ka={type:"childremoved",child:null};class tn extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Z,n=new ci,i=new Os,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ze}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Pf,e)}rotateZ(e){return this.rotateOnAxis(Lf,e)}translateOnAxis(e,n){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Pf,e)}translateZ(e){return this.translateOnAxis(Lf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?to.copy(e):to.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(is,to,this.up):jn.lookAt(to,is,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(jn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Df),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uS),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Df),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,lS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Z(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new Z,Yn=new Z,Za=new Z,Kn=new Z,xr=new Z,Sr=new Z,If=new Z,Ja=new Z,Qa=new Z,el=new Z,tl=new Rt,nl=new Rt,il=new Rt;class Tn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Mn.subVectors(e,n),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Mn.subVectors(r,n),Yn.subVectors(i,n),Za.subVectors(e,n);const o=Mn.dot(Mn),a=Mn.dot(Yn),l=Mn.dot(Za),c=Yn.dot(Yn),u=Yn.dot(Za),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,n),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(tl,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(e,n,i,r){return Mn.subVectors(i,n),Yn.subVectors(e,n),Mn.cross(Yn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Mn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;xr.subVectors(r,i),Sr.subVectors(s,i),Ja.subVectors(e,i);const l=xr.dot(Ja),c=Sr.dot(Ja);if(l<=0&&c<=0)return n.copy(i);Qa.subVectors(e,r);const u=xr.dot(Qa),f=Sr.dot(Qa);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(xr,o);el.subVectors(e,s);const h=xr.dot(el),g=Sr.dot(el);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Sr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return If.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(If,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(xr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},no={h:0,s:0,l:0};function rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class pt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=qx(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=rl(o,s,e+1/3),this.g=rl(o,s,e),this.b=rl(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=gn){const i=xp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return rt.workingToColorSpace(zt.copy(this),e),Math.round(nt(zt.r*255,0,255))*65536+Math.round(nt(zt.g*255,0,255))*256+Math.round(nt(zt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=gn){rt.workingToColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+n,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Si),e.getHSL(no);const i=za(Si.h,no.h,n),r=za(Si.s,no.s,n),s=za(Si.l,no.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new pt;pt.NAMES=xp;let fS=0;class Bs extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Ir,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Sp extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new Z,io=new ct;let dS=0;class Lt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sf,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)io.fromBufferAttribute(this,n),io.applyMatrix3(e),this.setXY(n,io.x,io.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sf&&(e.usage=this.usage),e}}class yp extends Lt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ep extends Lt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ir extends Lt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hS=0;const mn=new Ct,sl=new tn,yr=new Z,cn=new Fs,rs=new Fs,Ut=new Z;class hi extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?Ep:yp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ir(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(cn.min,rs.min),cn.expandByPoint(Ut),Ut.addVectors(cn.max,rs.max),cn.expandByPoint(Ut)):(cn.expandByPoint(rs.min),cn.expandByPoint(rs.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ut.fromBufferAttribute(a,c),l&&(yr.fromBufferAttribute(e,c),Ut.add(yr)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new Z,l[O]=new Z;const c=new Z,u=new Z,f=new Z,d=new ct,h=new ct,g=new ct,v=new Z,m=new Z;function p(O,b,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,O),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(L),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(L),a[O].add(v),a[b].add(v),a[y].add(v),l[O].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,b=w.length;O<b;++O){const y=w[O],L=y.start,F=y.count;for(let H=L,Q=L+F;H<Q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new Z,S=new Z,D=new Z,C=new Z;function P(O){D.fromBufferAttribute(r,O),C.copy(D);const b=a[O];T.copy(b),T.sub(D.multiplyScalar(D.dot(b))).normalize(),S.crossVectors(C,b);const L=S.dot(l[O])<0?-1:1;o.setXYZW(O,T.x,T.y,T.z,L)}for(let O=0,b=w.length;O<b;++O){const y=w[O],L=y.start,F=y.count;for(let H=L,Q=L+F;H<Q;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Lt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uf=new Ct,Gi=new _p,ro=new fa,Nf=new Z,so=new Z,oo=new Z,ao=new Z,ol=new Z,lo=new Z,Of=new Z,co=new Z;class ri extends tn{constructor(e=new hi,n=new Sp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ol.fromBufferAttribute(f,e),o?lo.addScaledVector(ol,u):lo.addScaledVector(ol.sub(n),u))}n.add(lo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),!(ro.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ro,Nf)===null||Gi.origin.distanceToSquared(Nf)>(e.far-e.near)**2))&&(Uf.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(Uf),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Gi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=w,D=T;S<D;S+=3){const C=a.getX(S),P=a.getX(S+1),O=a.getX(S+2);r=uo(this,p,e,i,c,u,f,C,P,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);r=uo(this,o,e,i,c,u,f,w,T,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=w,D=T;S<D;S+=3){const C=S,P=S+1,O=S+2;r=uo(this,p,e,i,c,u,f,C,P,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const w=m,T=m+1,S=m+2;r=uo(this,o,e,i,c,u,f,w,T,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function pS(t,e,n,i,r,s,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;co.copy(a),co.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(co);return c<n.near||c>n.far?null:{distance:c,point:co.clone(),object:t}}function uo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,so),t.getVertexPosition(l,oo),t.getVertexPosition(c,ao);const u=pS(t,e,n,i,so,oo,ao,Of);if(u){const f=new Z;Tn.getBarycoord(Of,so,oo,ao,f),r&&(u.uv=Tn.getInterpolatedAttribute(r,a,l,c,f,new ct)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,a,l,c,f,new ct)),o&&(u.normal=Tn.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Z,materialIndex:0};Tn.getNormal(so,oo,ao,d.normal),u.face=d,u.barycoord=f}return u}class ks extends hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ir(c,3)),this.setAttribute("normal",new ir(u,3)),this.setAttribute("uv",new ir(f,2));function g(v,m,p,w,T,S,D,C,P,O,b){const y=S/P,L=D/O,F=S/2,H=D/2,Q=C/2,ce=P+1,ee=O+1;let ae=0,V=0;const Ee=new Z;for(let Te=0;Te<ee;Te++){const Ue=Te*L-H;for(let ze=0;ze<ce;ze++){const et=ze*y-F;Ee[v]=et*w,Ee[m]=Ue*T,Ee[p]=Q,c.push(Ee.x,Ee.y,Ee.z),Ee[v]=0,Ee[m]=0,Ee[p]=C>0?1:-1,u.push(Ee.x,Ee.y,Ee.z),f.push(ze/P),f.push(1-Te/O),ae+=1}}for(let Te=0;Te<O;Te++)for(let Ue=0;Ue<P;Ue++){const ze=d+Ue+ce*Te,et=d+Ue+ce*(Te+1),j=d+(Ue+1)+ce*(Te+1),he=d+(Ue+1)+ce*Te;l.push(ze,et,he),l.push(et,j,he),V+=6}a.addGroup(h,V,b),h+=V,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Vr(t[n]);for(const r in i)e[r]=i[r]}return e}function mS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const gS={clone:Vr,merge:$t};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=vS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=mS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bp extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new Z,Ff=new ct,Bf=new ct;class bn extends bp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,Ff,Bf),n.subVectors(Bf,Ff)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ka*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Mr=1;class xS extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Er,Mr,e,n);r.layers=this.layers,this.add(r);const s=new bn(Er,Mr,e,n);s.layers=this.layers,this.add(s);const o=new bn(Er,Mr,e,n);o.layers=this.layers,this.add(o);const a=new bn(Er,Mr,e,n);a.layers=this.layers,this.add(a);const l=new bn(Er,Mr,e,n);l.layers=this.layers,this.add(l);const c=new bn(Er,Mr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Tp extends en{constructor(e=[],n=kr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ks(5,5,5),s=new ui({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ci});s.uniforms.tEquirect.value=n;const o=new ri(r,s),a=n.minFilter;return n.minFilter===er&&(n.minFilter=kn),new xS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class fo extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yS={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class ES extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ll=new Z,MS=new Z,bS=new Ze;class ji{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ll.subVectors(i,n).cross(MS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bS.getNormalMatrix(e),r=this.coplanarPoint(ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new fa,TS=new ct(.5,.5),ho=new Z;class wp{constructor(e=new ji,n=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],w=r[13],T=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-h,S-p).normalize(),i[1].setComponents(l+s,d+c,m+h,S+p).normalize(),i[2].setComponents(l+o,d+u,m+g,S+w).normalize(),i[3].setComponents(l-o,d-u,m-g,S-w).normalize(),i[4].setComponents(l-a,d-f,m-v,S-T).normalize(),n===ii)i[5].setComponents(l+a,d+f,m+v,S+T).normalize();else if(n===Xo)i[5].setComponents(a,f,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);const n=TS.distanceTo(e.center);return Wi.radius=.7071067811865476+n,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wS extends Bs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kf=new Ct,Sc=new _p,po=new fa,mo=new Z;class AS extends tn{constructor(e=new hi,n=new wS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;kf.copy(r).invert(),Sc.copy(e.ray).applyMatrix4(kf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,v=h;g<v;g++){const m=c.getX(g);mo.fromBufferAttribute(f,m),zf(mo,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,v=h;g<v;g++)mo.fromBufferAttribute(f,g),zf(mo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zf(t,e,n,i,r,s,o){const a=Sc.distanceSqToPoint(t);if(a<n){const l=new Z;Sc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ap extends en{constructor(e,n,i=sr,r,s,o,a=Rn,l=Rn,c,u=Cs,f=1){if(u!==Cs&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ru(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class da extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let T=0;T<c;T++){const S=T*f-s;g.push(S,-w,0),v.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const T=w+c*p,S=w+c*(p+1),D=w+1+c*(p+1),C=w+1+c*p;h.push(T,S,C),h.push(S,D,C)}this.setIndex(h),this.setAttribute("position",new ir(g,3)),this.setAttribute("normal",new ir(v,3)),this.setAttribute("uv",new ir(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class RS extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CS extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rp extends bp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class PS extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Hf(t,e,n,i){const r=LS(i);switch(n){case cp:return t*e;case fp:return t*e/r.components*r.byteLength;case tu:return t*e/r.components*r.byteLength;case dp:return t*e*2/r.components*r.byteLength;case nu:return t*e*2/r.components*r.byteLength;case up:return t*e*3/r.components*r.byteLength;case wn:return t*e*4/r.components*r.byteLength;case iu:return t*e*4/r.components*r.byteLength;case To:case wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jl:case Kl:return Math.max(t,16)*Math.max(e,8)/4;case ql:case Yl:return Math.max(t,8)*Math.max(e,8)/2;case Zl:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ic:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ac:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Co:case pc:case mc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hp:case gc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case _c:case vc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LS(t){switch(t){case li:case op:return{byteLength:1,components:1};case As:case ap:case Us:return{byteLength:2,components:1};case Qc:case eu:return{byteLength:2,components:4};case sr:case Jc:case ni:return{byteLength:4,components:1};case lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var IS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
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
#endif`,NS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
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
#endif`,zS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HS=`#ifdef USE_BATCHING
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
#endif`,VS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$S=`#ifdef USE_IRIDESCENCE
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
#endif`,qS=`#ifdef USE_BUMPMAP
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
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ny=`#define PI 3.141592653589793
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ry=`vec3 transformedNormal = objectNormal;
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
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sy=`#ifdef USE_GRADIENTMAP
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
}`,yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,by=`uniform bool receiveShadow;
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
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,wy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Py=`PhysicalMaterial material;
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
#endif`,Ly=`struct PhysicalMaterial {
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
}`,Dy=`
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
#endif`,Iy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ny=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
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
#endif`,Yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
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
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_E=`float getShadowMask() {
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
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,zE=`#define DISTANCE
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
}`,HE=`#define DISTANCE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
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
}`,XE=`uniform vec3 diffuse;
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
}`,$E=`#include <common>
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
}`,qE=`uniform vec3 diffuse;
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
}`,jE=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,KE=`#define MATCAP
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
}`,ZE=`#define MATCAP
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
}`,JE=`#define NORMAL
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
}`,QE=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,sM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,cM=`uniform vec3 color;
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
}`,uM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:IS,alphahash_pars_fragment:US,alphamap_fragment:NS,alphamap_pars_fragment:OS,alphatest_fragment:FS,alphatest_pars_fragment:BS,aomap_fragment:kS,aomap_pars_fragment:zS,batching_pars_vertex:HS,batching_vertex:VS,begin_vertex:GS,beginnormal_vertex:WS,bsdfs:XS,iridescence_fragment:$S,bumpmap_pars_fragment:qS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:YS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:ZS,color_fragment:JS,color_pars_fragment:QS,color_pars_vertex:ey,color_vertex:ty,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:ry,displacementmap_pars_vertex:sy,displacementmap_vertex:oy,emissivemap_fragment:ay,emissivemap_pars_fragment:ly,colorspace_fragment:cy,colorspace_pars_fragment:uy,envmap_fragment:fy,envmap_common_pars_fragment:dy,envmap_pars_fragment:hy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ty,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:_y,fog_fragment:vy,fog_pars_fragment:xy,gradientmap_pars_fragment:Sy,lightmap_pars_fragment:yy,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:My,lights_pars_begin:by,lights_toon_fragment:wy,lights_toon_pars_fragment:Ay,lights_phong_fragment:Ry,lights_phong_pars_fragment:Cy,lights_physical_fragment:Py,lights_physical_pars_fragment:Ly,lights_fragment_begin:Dy,lights_fragment_maps:Iy,lights_fragment_end:Uy,logdepthbuf_fragment:Ny,logdepthbuf_pars_fragment:Oy,logdepthbuf_pars_vertex:Fy,logdepthbuf_vertex:By,map_fragment:ky,map_pars_fragment:zy,map_particle_fragment:Hy,map_particle_pars_fragment:Vy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Wy,morphinstance_vertex:Xy,morphcolor_vertex:$y,morphnormal_vertex:qy,morphtarget_pars_vertex:jy,morphtarget_vertex:Yy,normal_fragment_begin:Ky,normal_fragment_maps:Zy,normal_pars_fragment:Jy,normal_pars_vertex:Qy,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:fE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:SE,skinnormal_vertex:yE,specularmap_fragment:EE,specularmap_pars_fragment:ME,tonemapping_fragment:bE,tonemapping_pars_fragment:TE,transmission_fragment:wE,transmission_pars_fragment:AE,uv_pars_fragment:RE,uv_pars_vertex:CE,uv_vertex:PE,worldpos_vertex:LE,background_vert:DE,background_frag:IE,backgroundCube_vert:UE,backgroundCube_frag:NE,cube_vert:OE,cube_frag:FE,depth_vert:BE,depth_frag:kE,distanceRGBA_vert:zE,distanceRGBA_frag:HE,equirect_vert:VE,equirect_frag:GE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:$E,meshbasic_frag:qE,meshlambert_vert:jE,meshlambert_frag:YE,meshmatcap_vert:KE,meshmatcap_frag:ZE,meshnormal_vert:JE,meshnormal_frag:QE,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:rM,meshtoon_frag:sM,points_vert:oM,points_frag:aM,shadow_vert:lM,shadow_frag:cM,sprite_vert:uM,sprite_frag:fM},Ce={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Bn={basic:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:$t([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:$t([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:$t([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new pt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:$t([Ce.points,Ce.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:$t([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:$t([Ce.common,Ce.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:$t([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:$t([Ce.sprite,Ce.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:$t([Ce.common,Ce.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:$t([Ce.lights,Ce.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Bn.physical={uniforms:$t([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const go={r:0,b:0,g:0},Xi=new ci,dM=new Ct;function hM(t,e,n,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?n:e).get(S)),S}function v(T){let S=!1;const D=g(T);D===null?p(a,l):D&&D.isColor&&(p(D,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,S){const D=g(S);D&&(D.isCubeTexture||D.mapping===ua)?(u===void 0&&(u=new ri(new ks(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:Vr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xi.copy(S.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Xi)),u.material.toneMapped=rt.getTransfer(D.colorSpace)!==gt,(f!==D||d!==D.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=D,d=D.version,h=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new ri(new da(2,2),new ui({name:"BackgroundMaterial",uniforms:Vr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=rt.getTransfer(D.colorSpace)!==gt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(f!==D||d!==D.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=D,d=D.version,h=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(go,Mp(t)),i.buffers.color.setClear(go.r,go.g,go.b,S,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:v,addToRenderList:m,dispose:w}}function pM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,L,F,H,Q){let ce=!1;const ee=f(H,F,L);s!==ee&&(s=ee,c(s.object)),ce=h(y,H,F,Q),ce&&g(y,H,F,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,S(y,L,F,H),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function f(y,L,F){const H=F.wireframe===!0;let Q=i[y.id];Q===void 0&&(Q={},i[y.id]=Q);let ce=Q[L.id];ce===void 0&&(ce={},Q[L.id]=ce);let ee=ce[H];return ee===void 0&&(ee=d(l()),ce[H]=ee),ee}function d(y){const L=[],F=[],H=[];for(let Q=0;Q<n;Q++)L[Q]=0,F[Q]=0,H[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:H,object:y,attributes:{},index:null}}function h(y,L,F,H){const Q=s.attributes,ce=L.attributes;let ee=0;const ae=F.getAttributes();for(const V in ae)if(ae[V].location>=0){const Te=Q[V];let Ue=ce[V];if(Ue===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Ue=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Ue=y.instanceColor)),Te===void 0||Te.attribute!==Ue||Ue&&Te.data!==Ue.data)return!0;ee++}return s.attributesNum!==ee||s.index!==H}function g(y,L,F,H){const Q={},ce=L.attributes;let ee=0;const ae=F.getAttributes();for(const V in ae)if(ae[V].location>=0){let Te=ce[V];Te===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor));const Ue={};Ue.attribute=Te,Te&&Te.data&&(Ue.data=Te.data),Q[V]=Ue,ee++}s.attributes=Q,s.attributesNum=ee,s.index=H}function v(){const y=s.newAttributes;for(let L=0,F=y.length;L<F;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const F=s.newAttributes,H=s.enabledAttributes,Q=s.attributeDivisors;F[y]=1,H[y]===0&&(t.enableVertexAttribArray(y),H[y]=1),Q[y]!==L&&(t.vertexAttribDivisor(y,L),Q[y]=L)}function w(){const y=s.newAttributes,L=s.enabledAttributes;for(let F=0,H=L.length;F<H;F++)L[F]!==y[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function T(y,L,F,H,Q,ce,ee){ee===!0?t.vertexAttribIPointer(y,L,F,Q,ce):t.vertexAttribPointer(y,L,F,H,Q,ce)}function S(y,L,F,H){v();const Q=H.attributes,ce=F.getAttributes(),ee=L.defaultAttributeValues;for(const ae in ce){const V=ce[ae];if(V.location>=0){let Ee=Q[ae];if(Ee===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),Ee!==void 0){const Te=Ee.normalized,Ue=Ee.itemSize,ze=e.get(Ee);if(ze===void 0)continue;const et=ze.buffer,j=ze.type,he=ze.bytesPerElement,we=j===t.INT||j===t.UNSIGNED_INT||Ee.gpuType===Jc;if(Ee.isInterleavedBufferAttribute){const N=Ee.data,oe=N.stride,fe=Ee.offset;if(N.isInstancedInterleavedBuffer){for(let ue=0;ue<V.locationSize;ue++)p(V.location+ue,N.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ue=0;ue<V.locationSize;ue++)m(V.location+ue);t.bindBuffer(t.ARRAY_BUFFER,et);for(let ue=0;ue<V.locationSize;ue++)T(V.location+ue,Ue/V.locationSize,j,Te,oe*he,(fe+Ue/V.locationSize*ue)*he,we)}else{if(Ee.isInstancedBufferAttribute){for(let N=0;N<V.locationSize;N++)p(V.location+N,Ee.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let N=0;N<V.locationSize;N++)m(V.location+N);t.bindBuffer(t.ARRAY_BUFFER,et);for(let N=0;N<V.locationSize;N++)T(V.location+N,Ue/V.locationSize,j,Te,Ue*he,Ue/V.locationSize*N*he,we)}}else if(ee!==void 0){const Te=ee[ae];if(Te!==void 0)switch(Te.length){case 2:t.vertexAttrib2fv(V.location,Te);break;case 3:t.vertexAttrib3fv(V.location,Te);break;case 4:t.vertexAttrib4fv(V.location,Te);break;default:t.vertexAttrib1fv(V.location,Te)}}}}w()}function D(){O();for(const y in i){const L=i[y];for(const F in L){const H=L[F];for(const Q in H)u(H[Q].object),delete H[Q];delete L[F]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const F in L){const H=L[F];for(const Q in H)u(H[Q].object),delete H[Q];delete L[F]}delete i[y.id]}function P(y){for(const L in i){const F=i[L];if(F[y.id]===void 0)continue;const H=F[y.id];for(const Q in H)u(H[Q].object),delete H[Q];delete F[y.id]}}function O(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function mM(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==wn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==li&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ni&&!O)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:D,maxSamples:C}}function _M(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ji,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,T=w*4;let S=p.clippingState||null;l.value=S,S=u(g,d,T,h);for(let D=0;D!==T;++D)S[D]=n[D];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,S=h;T!==v;++T,S+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function vM(t){let e=new WeakMap;function n(o,a){return a===Gl?o.mapping=kr:a===Wl&&(o.mapping=zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gl||a===Wl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ar=4,Vf=[.125,.215,.35,.446,.526,.582],Ji=20,cl=new Rp,Gf=new pt;let ul=null,fl=0,dl=0,hl=!1;const Yi=(1+Math.sqrt(5))/2,br=1/Yi,Wf=[new Z(-Yi,br,0),new Z(Yi,br,0),new Z(-br,0,Yi),new Z(br,0,Yi),new Z(0,Yi,-br),new Z(0,Yi,br),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],xM=new Z;class Xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=xM}=s;ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,dl),this._renderer.xr.enabled=hl,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Us,format:wn,colorSpace:Hr,depthBuffer:!1},r=$f(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(s)),this._blurMaterial=yM(s,e,n)}return r}_compileMaterial(e){const n=new ri(this._lodPlanes[0],e);this._renderer.compile(n,cl)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Gf),f.toneMapping=Pi,f.autoClear=!1;const g=new Sp({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new ri(new ks,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Gf),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const S=this._cubeSize;_o(r,T*S,w>2?S:0,S,S),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===kr||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wf[(r-s-1)%Wf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ri(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ji-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let w=0;for(let P=0;P<Ji;++P){const O=P/v,b=Math.exp(-O*O/2);p.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const S=this._sizeLods[r],D=3*S*(r>T-Ar?r-T+Ar:0),C=4*(this._cubeSize-S);_o(n,D,C,3*S,2*S),l.setRenderTarget(n),l.render(f,cl)}}function SM(t){const e=[],n=[],i=[];let r=t;const s=t-Ar+1+Vf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ar?l=Vf[o-t+Ar-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*h),T=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let C=0;C<h;C++){const P=C%3*2/3-1,O=C>2?0:-1,b=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];w.set(b,v*g*C),T.set(d,m*g*C);const y=[C,C,C,C,C,C];S.set(y,p*g*C)}const D=new hi;D.setAttribute("position",new Lt(w,v)),D.setAttribute("uv",new Lt(T,m)),D.setAttribute("faceIndex",new Lt(S,p)),e.push(D),r>Ar&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $f(t,e,n){const i=new or(t,e,n);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _o(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yM(t,e,n){const i=new Float32Array(Ji),r=new Z(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:su(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function qf(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function jf(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function EM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gl||l===Wl,u=l===kr||l===zr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Xf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Xf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function MM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ur("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bM(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const w=h.array;v=h.version;for(let T=0,S=w.length;T<S;T+=3){const D=w[T+0],C=w[T+1],P=w[T+2];d.push(D,C,C,P,P,D)}}else if(g!==void 0){const w=g.array;v=g.version;for(let T=0,S=w.length/3-1;T<S;T+=3){const D=T+0,C=T+1,P=T+2;d.push(D,C,C,P,P,D)}}else return;const m=new(mp(d)?Ep:yp)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TM(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*v[w];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AM(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;h===!0&&(T=1),g===!0&&(T=2),v===!0&&(T=3);let S=a.attributes.position.count*T,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const C=new Float32Array(S*D*4*f),P=new gp(C,S,D,f);P.type=ni,P.needsUpdate=!0;const O=T*4;for(let y=0;y<f;y++){const L=m[y],F=p[y],H=w[y],Q=S*D*4*y;for(let ce=0;ce<L.count;ce++){const ee=ce*O;h===!0&&(r.fromBufferAttribute(L,ce),C[Q+ee+0]=r.x,C[Q+ee+1]=r.y,C[Q+ee+2]=r.z,C[Q+ee+3]=0),g===!0&&(r.fromBufferAttribute(F,ce),C[Q+ee+4]=r.x,C[Q+ee+5]=r.y,C[Q+ee+6]=r.z,C[Q+ee+7]=0),v===!0&&(r.fromBufferAttribute(H,ce),C[Q+ee+8]=r.x,C[Q+ee+9]=r.y,C[Q+ee+10]=r.z,C[Q+ee+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new ct(S,D)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function RM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Pp=new en,Yf=new Ap(1,1),Lp=new gp,Dp=new iS,Ip=new Tp,Kf=[],Zf=[],Jf=new Float32Array(16),Qf=new Float32Array(9),ed=new Float32Array(4);function $r(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kf[r];if(s===void 0&&(s=new Float32Array(r),Kf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ha(t,e){let n=Zf[e];n===void 0&&(n=new Int32Array(e),Zf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function LM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function DM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function IM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;ed.set(i),t.uniformMatrix2fv(this.addr,!1,ed),It(n,i)}}function UM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Qf.set(i),t.uniformMatrix3fv(this.addr,!1,Qf),It(n,i)}}function NM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;Jf.set(i),t.uniformMatrix4fv(this.addr,!1,Jf),It(n,i)}}function OM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function FM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function BM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function zM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function VM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function GM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function WM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yf.compareFunction=pp,s=Yf):s=Pp,n.setTexture2D(e||s,r)}function XM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dp,r)}function $M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ip,r)}function qM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lp,r)}function jM(t){switch(t){case 5126:return CM;case 35664:return PM;case 35665:return LM;case 35666:return DM;case 35674:return IM;case 35675:return UM;case 35676:return NM;case 5124:case 35670:return OM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return zM;case 36294:return HM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return qM}}function YM(t,e){t.uniform1fv(this.addr,e)}function KM(t,e){const n=$r(e,this.size,2);t.uniform2fv(this.addr,n)}function ZM(t,e){const n=$r(e,this.size,3);t.uniform3fv(this.addr,n)}function JM(t,e){const n=$r(e,this.size,4);t.uniform4fv(this.addr,n)}function QM(t,e){const n=$r(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function e1(t,e){const n=$r(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function t1(t,e){const n=$r(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function n1(t,e){t.uniform1iv(this.addr,e)}function i1(t,e){t.uniform2iv(this.addr,e)}function r1(t,e){t.uniform3iv(this.addr,e)}function s1(t,e){t.uniform4iv(this.addr,e)}function o1(t,e){t.uniform1uiv(this.addr,e)}function a1(t,e){t.uniform2uiv(this.addr,e)}function l1(t,e){t.uniform3uiv(this.addr,e)}function c1(t,e){t.uniform4uiv(this.addr,e)}function u1(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Pp,s[o])}function f1(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Dp,s[o])}function d1(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ip,s[o])}function h1(t,e,n){const i=this.cache,r=e.length,s=ha(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lp,s[o])}function p1(t){switch(t){case 5126:return YM;case 35664:return KM;case 35665:return ZM;case 35666:return JM;case 35674:return QM;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return h1}}class m1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jM(n.type)}}class g1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p1(n.type)}}class _1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function td(t,e){t.seq.push(e),t.map[e.id]=e}function v1(t,e,n){const i=t.name,r=i.length;for(pl.lastIndex=0;;){const s=pl.exec(i),o=pl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){td(n,c===void 0?new m1(a,t,e):new g1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new _1(a),td(n,f)),n=f}}}class Po{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);v1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function nd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const x1=37297;let S1=0;function y1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const id=new Ze;function E1(t){rt._getMatrix(id,rt.workingColorSpace,t);const e=`mat3( ${id.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case Wo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+y1(t.getShaderSource(e),o)}else return r}function M1(t,e){const n=E1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function b1(t,e){let n;switch(e){case Rx:n="Linear";break;case Cx:n="Reinhard";break;case Px:n="Cineon";break;case Lx:n="ACESFilmic";break;case Ix:n="AgX";break;case Ux:n="Neutral";break;case Dx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vo=new Z;function T1(){rt.getLuminanceCoefficients(vo);const t=vo.x.toFixed(4),e=vo.y.toFixed(4),n=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function A1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function R1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function as(t){return t!==""}function sd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function od(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(t){return t.replace(C1,L1)}const P1=new Map;function L1(t,e){let n=Je[e];if(n===void 0){const i=P1.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(n)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(t){return t.replace(D1,I1)}function I1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ld(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ip?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ax?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case kr:case zr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function F1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case rp:e="ENVMAP_BLENDING_MULTIPLY";break;case wx:e="ENVMAP_BLENDING_MIX";break;case Ax:e="ENVMAP_BLENDING_ADD";break}return e}function B1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function k1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=U1(n),c=N1(n),u=O1(n),f=F1(n),d=B1(n),h=w1(n),g=A1(s),v=r.createProgram();let m,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(as).join(`
`),p.length>0&&(p+=`
`)):(m=[ld(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),p=[ld(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Je.tonemapping_pars_fragment:"",n.toneMapping!==Pi?b1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,M1("linearToOutputTexel",n.outputColorSpace),T1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(as).join(`
`)),o=yc(o),o=sd(o,n),o=od(o,n),a=yc(a),a=sd(a,n),a=od(a,n),o=ad(o),a=ad(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=w+m+o,S=w+p+a,D=nd(r,r.VERTEX_SHADER,T),C=nd(r,r.FRAGMENT_SHADER,S);r.attachShader(v,D),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(L){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(D).trim(),Q=r.getShaderInfoLog(C).trim();let ce=!0,ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ce=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,D,C);else{const ae=rd(r,D,"vertex"),V=rd(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+ae+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||Q==="")&&(ee=!1);ee&&(L.diagnostics={runnable:ce,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(D),r.deleteShader(C),O=new Po(r,v),b=R1(r,v)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,x1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=C,this}let z1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new V1(e),n.set(e,i)),i}}class V1{constructor(e){this.id=z1++,this.code=e,this.usedTimes=0}}function G1(t,e,n,i,r,s,o){const a=new vp,l=new H1,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,L,F,H){const Q=F.fog,ce=H.geometry,ee=b.isMeshStandardMaterial?F.environment:null,ae=(b.isMeshStandardMaterial?n:e).get(b.envMap||ee),V=ae&&ae.mapping===ua?ae.image.height:null,Ee=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const Te=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ue=Te!==void 0?Te.length:0;let ze=0;ce.morphAttributes.position!==void 0&&(ze=1),ce.morphAttributes.normal!==void 0&&(ze=2),ce.morphAttributes.color!==void 0&&(ze=3);let et,j,he,we;if(Ee){const ft=Bn[Ee];et=ft.vertexShader,j=ft.fragmentShader}else et=b.vertexShader,j=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),we=l.getFragmentShaderID(b);const N=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),fe=H.isInstancedMesh===!0,ue=H.isBatchedMesh===!0,ke=!!b.map,A=!!b.matcap,R=!!ae,x=!!b.aoMap,ie=!!b.lightMap,k=!!b.bumpMap,W=!!b.normalMap,G=!!b.displacementMap,re=!!b.emissiveMap,Y=!!b.metalnessMap,te=!!b.roughnessMap,Ae=b.anisotropy>0,E=b.clearcoat>0,_=b.dispersion>0,I=b.iridescence>0,q=b.sheen>0,se=b.transmission>0,X=Ae&&!!b.anisotropyMap,Pe=E&&!!b.clearcoatMap,ve=E&&!!b.clearcoatNormalMap,ye=E&&!!b.clearcoatRoughnessMap,xe=I&&!!b.iridescenceMap,le=I&&!!b.iridescenceThicknessMap,be=q&&!!b.sheenColorMap,Ie=q&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Me=!!b.specularColorMap,Xe=!!b.specularIntensityMap,U=se&&!!b.transmissionMap,Re=se&&!!b.thicknessMap,pe=!!b.gradientMap,Oe=!!b.alphaMap,ge=b.alphaTest>0,de=!!b.alphaHash,Fe=!!b.extensions;let Ye=Pi;b.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ye=t.toneMapping);const St={shaderID:Ee,shaderType:b.type,shaderName:b.name,vertexShader:et,fragmentShader:j,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ue,batchingColor:ue&&H._colorsTexture!==null,instancing:fe,instancingColor:fe&&H.instanceColor!==null,instancingMorph:fe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Hr,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:A,envMap:R,envMapMode:R&&ae.mapping,envMapCubeUVHeight:V,aoMap:x,lightMap:ie,bumpMap:k,normalMap:W,displacementMap:d&&G,emissiveMap:re,normalMapObjectSpace:W&&b.normalMapType===kx,normalMapTangentSpace:W&&b.normalMapType===Bx,metalnessMap:Y,roughnessMap:te,anisotropy:Ae,anisotropyMap:X,clearcoat:E,clearcoatMap:Pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:_,iridescence:I,iridescenceMap:xe,iridescenceThicknessMap:le,sheen:q,sheenColorMap:be,sheenRoughnessMap:Ie,specularMap:Le,specularColorMap:Me,specularIntensityMap:Xe,transmission:se,transmissionMap:U,thicknessMap:Re,gradientMap:pe,opaque:b.transparent===!1&&b.blending===Ir&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ge,alphaHash:de,combine:b.combine,mapUv:ke&&v(b.map.channel),aoMapUv:x&&v(b.aoMap.channel),lightMapUv:ie&&v(b.lightMap.channel),bumpMapUv:k&&v(b.bumpMap.channel),normalMapUv:W&&v(b.normalMap.channel),displacementMapUv:G&&v(b.displacementMap.channel),emissiveMapUv:re&&v(b.emissiveMap.channel),metalnessMapUv:Y&&v(b.metalnessMap.channel),roughnessMapUv:te&&v(b.roughnessMap.channel),anisotropyMapUv:X&&v(b.anisotropyMap.channel),clearcoatMapUv:Pe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ve&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:be&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(b.sheenRoughnessMap.channel),specularMapUv:Le&&v(b.specularMap.channel),specularColorMapUv:Me&&v(b.specularColorMap.channel),specularIntensityMapUv:Xe&&v(b.specularIntensityMap.channel),transmissionMapUv:U&&v(b.transmissionMap.channel),thicknessMapUv:Re&&v(b.thicknessMap.channel),alphaMapUv:Oe&&v(b.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(W||Ae),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ce.attributes.uv&&(ke||Oe),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:oe,skinning:H.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:re&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ti,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Fe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&b.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(w(y,b),T(y,b),y.push(t.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function T(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const y=g[b.type];let L;if(y){const F=Bn[y];L=gS.clone(F.uniforms)}else L=b.uniforms;return L}function D(b,y){let L;for(let F=0,H=u.length;F<H;F++){const Q=u[F];if(Q.cacheKey===y){L=Q,++L.usedTimes;break}}return L===void 0&&(L=new k1(t,y,b,s),u.push(L)),L}function C(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:D,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:O}}function W1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function X1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ud(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||X1),i.length>1&&i.sort(d||cd),r.length>1&&r.sort(d||cd)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function $1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ud,t.set(i,[o])):r>=s.length?(o=new ud,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function q1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new pt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new pt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":n={color:new pt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function j1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Y1=0;function K1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Z1(t){const e=new q1,n=j1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,w=0,T=0,S=0,D=0,C=0,P=0;c.sort(K1);for(let b=0,y=c.length;b<y;b++){const L=c[b],F=L.color,H=L.intensity,Q=L.distance,ce=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=F.r*H,f+=F.g*H,d+=F.b*H;else if(L.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(L.sh.coefficients[ee],H);P++}else if(L.isDirectionalLight){const ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ae=L.shadow,V=n.get(L);V.shadowIntensity=ae.intensity,V.shadowBias=ae.bias,V.shadowNormalBias=ae.normalBias,V.shadowRadius=ae.radius,V.shadowMapSize=ae.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=ce,i.directionalShadowMatrix[h]=L.shadow.matrix,w++}i.directional[h]=ee,h++}else if(L.isSpotLight){const ee=e.get(L);ee.position.setFromMatrixPosition(L.matrixWorld),ee.color.copy(F).multiplyScalar(H),ee.distance=Q,ee.coneCos=Math.cos(L.angle),ee.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ee.decay=L.decay,i.spot[v]=ee;const ae=L.shadow;if(L.map&&(i.spotLightMap[D]=L.map,D++,ae.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[v]=ae.matrix,L.castShadow){const V=n.get(L);V.shadowIntensity=ae.intensity,V.shadowBias=ae.bias,V.shadowNormalBias=ae.normalBias,V.shadowRadius=ae.radius,V.shadowMapSize=ae.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=ce,S++}v++}else if(L.isRectAreaLight){const ee=e.get(L);ee.color.copy(F).multiplyScalar(H),ee.halfWidth.set(L.width*.5,0,0),ee.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=ee,m++}else if(L.isPointLight){const ee=e.get(L);if(ee.color.copy(L.color).multiplyScalar(L.intensity),ee.distance=L.distance,ee.decay=L.decay,L.castShadow){const ae=L.shadow,V=n.get(L);V.shadowIntensity=ae.intensity,V.shadowBias=ae.bias,V.shadowNormalBias=ae.normalBias,V.shadowRadius=ae.radius,V.shadowMapSize=ae.mapSize,V.shadowCameraNear=ae.camera.near,V.shadowCameraFar=ae.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=ce,i.pointShadowMatrix[g]=L.shadow.matrix,T++}i.point[g]=ee,g++}else if(L.isHemisphereLight){const ee=e.get(L);ee.skyColor.copy(L.color).multiplyScalar(H),ee.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[p]=ee,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==S||O.numSpotMaps!==D||O.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=S+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,O.directionalLength=h,O.pointLength=g,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=S,O.numSpotMaps=D,O.numLightProbes=P,i.version=Y1++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const T=c[p];if(T.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function fd(t){const e=new Z1(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function J1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new fd(t),e.set(r,[a])):s>=o.length?(a=new fd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
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
}`;function tb(t,e,n){let i=new wp;const r=new ct,s=new ct,o=new Rt,a=new RS({depthPacking:Fx}),l=new CS,c={},u=n.maxTextureSize,f={[Ii]:Qt,[Qt]:Ii,[ti]:ti},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Q1,fragmentShader:eb}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ri(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ip;let p=this.type;this.render=function(C,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),y=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ci),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==Zn&&this.type===Zn,Q=p===Zn&&this.type!==Zn;for(let ce=0,ee=C.length;ce<ee;ce++){const ae=C[ce],V=ae.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Ee=V.getFrameExtents();if(r.multiply(Ee),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Ee.x),r.x=s.x*Ee.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Ee.y),r.y=s.y*Ee.y,V.mapSize.y=s.y)),V.map===null||H===!0||Q===!0){const Ue=this.type!==Zn?{minFilter:Rn,magFilter:Rn}:{};V.map!==null&&V.map.dispose(),V.map=new or(r.x,r.y,Ue),V.map.texture.name=ae.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const Te=V.getViewportCount();for(let Ue=0;Ue<Te;Ue++){const ze=V.getViewport(Ue);o.set(s.x*ze.x,s.y*ze.y,s.x*ze.z,s.y*ze.w),F.viewport(o),V.updateMatrices(ae,Ue),i=V.getFrustum(),S(P,O,V.camera,ae,this.type)}V.isPointLightShadow!==!0&&this.type===Zn&&w(V,O),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,y,L)};function w(C,P){const O=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new or(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,O,d,v,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,O,h,v,null)}function T(C,P,O,b){let y=null;const L=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)y=L;else if(y=O.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=y.uuid,H=P.uuid;let Q=c[F];Q===void 0&&(Q={},c[F]=Q);let ce=Q[H];ce===void 0&&(ce=y.clone(),Q[H]=ce,P.addEventListener("dispose",D)),y=ce}if(y.visible=P.visible,y.wireframe=P.wireframe,b===Zn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=O}return y}function S(C,P,O,b,y){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Zn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const H=e.update(C),Q=C.material;if(Array.isArray(Q)){const ce=H.groups;for(let ee=0,ae=ce.length;ee<ae;ee++){const V=ce[ee],Ee=Q[V.materialIndex];if(Ee&&Ee.visible){const Te=T(C,Ee,b,y);C.onBeforeShadow(t,C,P,O,H,Te,V),t.renderBufferDirect(O,null,H,Te,C,V),C.onAfterShadow(t,C,P,O,H,Te,V)}}}else if(Q.visible){const ce=T(C,Q,b,y);C.onBeforeShadow(t,C,P,O,H,ce,null),t.renderBufferDirect(O,null,H,ce,C,null),C.onAfterShadow(t,C,P,O,H,ce,null)}}const F=C.children;for(let H=0,Q=F.length;H<Q;H++)S(F[H],P,O,b,y)}function D(C){C.target.removeEventListener("dispose",D);for(const O in c){const b=c[O],y=C.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const nb={[Ol]:Fl,[Bl]:Hl,[kl]:Vl,[Br]:zl,[Fl]:Ol,[Hl]:Bl,[Vl]:kl,[zl]:Br};function ib(t,e){function n(){let U=!1;const Re=new Rt;let pe=null;const Oe=new Rt(0,0,0,0);return{setMask:function(ge){pe!==ge&&!U&&(t.colorMask(ge,ge,ge,ge),pe=ge)},setLocked:function(ge){U=ge},setClear:function(ge,de,Fe,Ye,St){St===!0&&(ge*=Ye,de*=Ye,Fe*=Ye),Re.set(ge,de,Fe,Ye),Oe.equals(Re)===!1&&(t.clearColor(ge,de,Fe,Ye),Oe.copy(Re))},reset:function(){U=!1,pe=null,Oe.set(-1,0,0,0)}}}function i(){let U=!1,Re=!1,pe=null,Oe=null,ge=null;return{setReversed:function(de){if(Re!==de){const Fe=e.get("EXT_clip_control");de?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Re=de;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return Re},setTest:function(de){de?N(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(de){pe!==de&&!U&&(t.depthMask(de),pe=de)},setFunc:function(de){if(Re&&(de=nb[de]),Oe!==de){switch(de){case Ol:t.depthFunc(t.NEVER);break;case Fl:t.depthFunc(t.ALWAYS);break;case Bl:t.depthFunc(t.LESS);break;case Br:t.depthFunc(t.LEQUAL);break;case kl:t.depthFunc(t.EQUAL);break;case zl:t.depthFunc(t.GEQUAL);break;case Hl:t.depthFunc(t.GREATER);break;case Vl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Oe=de}},setLocked:function(de){U=de},setClear:function(de){ge!==de&&(Re&&(de=1-de),t.clearDepth(de),ge=de)},reset:function(){U=!1,pe=null,Oe=null,ge=null,Re=!1}}}function r(){let U=!1,Re=null,pe=null,Oe=null,ge=null,de=null,Fe=null,Ye=null,St=null;return{setTest:function(ft){U||(ft?N(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ft){Re!==ft&&!U&&(t.stencilMask(ft),Re=ft)},setFunc:function(ft,Sn,Vn){(pe!==ft||Oe!==Sn||ge!==Vn)&&(t.stencilFunc(ft,Sn,Vn),pe=ft,Oe=Sn,ge=Vn)},setOp:function(ft,Sn,Vn){(de!==ft||Fe!==Sn||Ye!==Vn)&&(t.stencilOp(ft,Sn,Vn),de=ft,Fe=Sn,Ye=Vn)},setLocked:function(ft){U=ft},setClear:function(ft){St!==ft&&(t.clearStencil(ft),St=ft)},reset:function(){U=!1,Re=null,pe=null,Oe=null,ge=null,de=null,Fe=null,Ye=null,St=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,w=null,T=null,S=null,D=null,C=null,P=new pt(0,0,0),O=0,b=!1,y=null,L=null,F=null,H=null,Q=null;const ce=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ae=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(V)[1]),ee=ae>=1):V.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ee=ae>=2);let Ee=null,Te={};const Ue=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),et=new Rt().fromArray(Ue),j=new Rt().fromArray(ze);function he(U,Re,pe,Oe){const ge=new Uint8Array(4),de=t.createTexture();t.bindTexture(U,de),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<pe;Fe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,Oe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(Re+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return de}const we={};we[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),we[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),we[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(t.DEPTH_TEST),o.setFunc(Br),k(!1),W(gf),N(t.CULL_FACE),x(Ci);function N(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function oe(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function fe(U,Re){return f[U]!==Re?(t.bindFramebuffer(U,Re),f[U]=Re,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Re),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function ue(U,Re){let pe=h,Oe=!1;if(U){pe=d.get(Re),pe===void 0&&(pe=[],d.set(Re,pe));const ge=U.textures;if(pe.length!==ge.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let de=0,Fe=ge.length;de<Fe;de++)pe[de]=t.COLOR_ATTACHMENT0+de;pe.length=ge.length,Oe=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,Oe=!0);Oe&&t.drawBuffers(pe)}function ke(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const A={[Zi]:t.FUNC_ADD,[cx]:t.FUNC_SUBTRACT,[ux]:t.FUNC_REVERSE_SUBTRACT};A[fx]=t.MIN,A[dx]=t.MAX;const R={[hx]:t.ZERO,[px]:t.ONE,[mx]:t.SRC_COLOR,[Ul]:t.SRC_ALPHA,[yx]:t.SRC_ALPHA_SATURATE,[xx]:t.DST_COLOR,[_x]:t.DST_ALPHA,[gx]:t.ONE_MINUS_SRC_COLOR,[Nl]:t.ONE_MINUS_SRC_ALPHA,[Sx]:t.ONE_MINUS_DST_COLOR,[vx]:t.ONE_MINUS_DST_ALPHA,[Ex]:t.CONSTANT_COLOR,[Mx]:t.ONE_MINUS_CONSTANT_COLOR,[bx]:t.CONSTANT_ALPHA,[Tx]:t.ONE_MINUS_CONSTANT_ALPHA};function x(U,Re,pe,Oe,ge,de,Fe,Ye,St,ft){if(U===Ci){v===!0&&(oe(t.BLEND),v=!1);return}if(v===!1&&(N(t.BLEND),v=!0),U!==lx){if(U!==m||ft!==b){if((p!==Zi||S!==Zi)&&(t.blendEquation(t.FUNC_ADD),p=Zi,S=Zi),ft)switch(U){case Ir:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Il:t.blendFunc(t.ONE,t.ONE);break;case _f:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ir:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Il:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _f:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,T=null,D=null,C=null,P.set(0,0,0),O=0,m=U,b=ft}return}ge=ge||Re,de=de||pe,Fe=Fe||Oe,(Re!==p||ge!==S)&&(t.blendEquationSeparate(A[Re],A[ge]),p=Re,S=ge),(pe!==w||Oe!==T||de!==D||Fe!==C)&&(t.blendFuncSeparate(R[pe],R[Oe],R[de],R[Fe]),w=pe,T=Oe,D=de,C=Fe),(Ye.equals(P)===!1||St!==O)&&(t.blendColor(Ye.r,Ye.g,Ye.b,St),P.copy(Ye),O=St),m=U,b=!1}function ie(U,Re){U.side===ti?oe(t.CULL_FACE):N(t.CULL_FACE);let pe=U.side===Qt;Re&&(pe=!pe),k(pe),U.blending===Ir&&U.transparent===!1?x(Ci):x(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Oe=U.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function k(U){y!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),y=U)}function W(U){U!==sx?(N(t.CULL_FACE),U!==L&&(U===gf?t.cullFace(t.BACK):U===ox?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),L=U}function G(U){U!==F&&(ee&&t.lineWidth(U),F=U)}function re(U,Re,pe){U?(N(t.POLYGON_OFFSET_FILL),(H!==Re||Q!==pe)&&(t.polygonOffset(Re,pe),H=Re,Q=pe)):oe(t.POLYGON_OFFSET_FILL)}function Y(U){U?N(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function te(U){U===void 0&&(U=t.TEXTURE0+ce-1),Ee!==U&&(t.activeTexture(U),Ee=U)}function Ae(U,Re,pe){pe===void 0&&(Ee===null?pe=t.TEXTURE0+ce-1:pe=Ee);let Oe=Te[pe];Oe===void 0&&(Oe={type:void 0,texture:void 0},Te[pe]=Oe),(Oe.type!==U||Oe.texture!==Re)&&(Ee!==pe&&(t.activeTexture(pe),Ee=pe),t.bindTexture(U,Re||we[U]),Oe.type=U,Oe.texture=Re)}function E(){const U=Te[Ee];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){et.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function Ie(U){j.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),j.copy(U))}function Le(U,Re){let pe=c.get(Re);pe===void 0&&(pe=new WeakMap,c.set(Re,pe));let Oe=pe.get(U);Oe===void 0&&(Oe=t.getUniformBlockIndex(Re,U.name),pe.set(U,Oe))}function Me(U,Re){const Oe=c.get(Re).get(U);l.get(Re)!==Oe&&(t.uniformBlockBinding(Re,Oe,U.__bindingPointIndex),l.set(Re,Oe))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Ee=null,Te={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,w=null,T=null,S=null,D=null,C=null,P=new pt(0,0,0),O=0,b=!1,y=null,L=null,F=null,H=null,Q=null,et.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:oe,bindFramebuffer:fe,drawBuffers:ue,useProgram:ke,setBlending:x,setMaterial:ie,setFlipSided:k,setCullFace:W,setLineWidth:G,setPolygonOffset:re,setScissorTest:Y,activeTexture:te,bindTexture:Ae,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:xe,texImage3D:le,updateUBOMapping:Le,uniformBlockBinding:Me,texStorage2D:ve,texStorage3D:ye,texSubImage2D:q,texSubImage3D:se,compressedTexSubImage2D:X,compressedTexSubImage3D:Pe,scissor:be,viewport:Ie,reset:Xe}}function rb(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return h?new OffscreenCanvas(E,_):$o("canvas")}function v(E,_,I){let q=1;const se=Ae(E);if((se.width>I||se.height>I)&&(q=I/Math.max(se.width,se.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const X=Math.floor(q*se.width),Pe=Math.floor(q*se.height);f===void 0&&(f=g(X,Pe));const ve=_?g(X,Pe):f;return ve.width=X,ve.height=Pe,ve.getContext("2d").drawImage(E,0,0,X,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+X+"x"+Pe+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){t.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(E,_,I,q,se=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=_;if(_===t.RED&&(I===t.FLOAT&&(X=t.R32F),I===t.HALF_FLOAT&&(X=t.R16F),I===t.UNSIGNED_BYTE&&(X=t.R8)),_===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.R8UI),I===t.UNSIGNED_SHORT&&(X=t.R16UI),I===t.UNSIGNED_INT&&(X=t.R32UI),I===t.BYTE&&(X=t.R8I),I===t.SHORT&&(X=t.R16I),I===t.INT&&(X=t.R32I)),_===t.RG&&(I===t.FLOAT&&(X=t.RG32F),I===t.HALF_FLOAT&&(X=t.RG16F),I===t.UNSIGNED_BYTE&&(X=t.RG8)),_===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RG8UI),I===t.UNSIGNED_SHORT&&(X=t.RG16UI),I===t.UNSIGNED_INT&&(X=t.RG32UI),I===t.BYTE&&(X=t.RG8I),I===t.SHORT&&(X=t.RG16I),I===t.INT&&(X=t.RG32I)),_===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGB8UI),I===t.UNSIGNED_SHORT&&(X=t.RGB16UI),I===t.UNSIGNED_INT&&(X=t.RGB32UI),I===t.BYTE&&(X=t.RGB8I),I===t.SHORT&&(X=t.RGB16I),I===t.INT&&(X=t.RGB32I)),_===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),I===t.UNSIGNED_INT&&(X=t.RGBA32UI),I===t.BYTE&&(X=t.RGBA8I),I===t.SHORT&&(X=t.RGBA16I),I===t.INT&&(X=t.RGBA32I)),_===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),_===t.RGBA){const Pe=se?Wo:rt.getTransfer(q);I===t.FLOAT&&(X=t.RGBA32F),I===t.HALF_FLOAT&&(X=t.RGBA16F),I===t.UNSIGNED_BYTE&&(X=Pe===gt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function S(E,_){let I;return E?_===null||_===sr||_===Rs?I=t.DEPTH24_STENCIL8:_===ni?I=t.DEPTH32F_STENCIL8:_===As&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===sr||_===Rs?I=t.DEPTH_COMPONENT24:_===ni?I=t.DEPTH_COMPONENT32F:_===As&&(I=t.DEPTH_COMPONENT16),I}function D(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Rn&&E.minFilter!==kn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){const _=E.target;_.removeEventListener("dispose",C),O(_),_.isVideoTexture&&u.delete(_)}function P(E){const _=E.target;_.removeEventListener("dispose",P),y(_)}function O(E){const _=i.get(E);if(_.__webglInit===void 0)return;const I=E.source,q=d.get(I);if(q){const se=q[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(E),Object.keys(q).length===0&&d.delete(I)}i.remove(E)}function b(E){const _=i.get(E);t.deleteTexture(_.__webglTexture);const I=E.source,q=d.get(I);delete q[_.__cacheKey],o.memory.textures--}function y(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let se=0;se<_.__webglFramebuffer[q].length;se++)t.deleteFramebuffer(_.__webglFramebuffer[q][se]);else t.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)t.deleteFramebuffer(_.__webglFramebuffer[q]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=E.textures;for(let q=0,se=I.length;q<se;q++){const X=i.get(I[q]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[q])}i.remove(E)}let L=0;function F(){L=0}function H(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function Q(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ce(E,_){const I=i.get(E);if(E.isVideoTexture&&Y(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(I,E,_);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+_)}function ee(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){we(I,E,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+_)}function ae(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){we(I,E,_);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+_)}function V(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){N(I,E,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+_)}const Ee={[Xl]:t.REPEAT,[Qi]:t.CLAMP_TO_EDGE,[$l]:t.MIRRORED_REPEAT},Te={[Rn]:t.NEAREST,[Nx]:t.NEAREST_MIPMAP_NEAREST,[js]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Ba]:t.LINEAR_MIPMAP_NEAREST,[er]:t.LINEAR_MIPMAP_LINEAR},Ue={[zx]:t.NEVER,[$x]:t.ALWAYS,[Hx]:t.LESS,[pp]:t.LEQUAL,[Vx]:t.EQUAL,[Xx]:t.GEQUAL,[Gx]:t.GREATER,[Wx]:t.NOTEQUAL};function ze(E,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kn||_.magFilter===Ba||_.magFilter===js||_.magFilter===er||_.minFilter===kn||_.minFilter===Ba||_.minFilter===js||_.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,Ee[_.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,Ee[_.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,Ee[_.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,Te[_.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,Te[_.minFilter]),_.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Ue[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Rn||_.minFilter!==js&&_.minFilter!==er||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function et(E,_){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));const q=_.source;let se=d.get(q);se===void 0&&(se={},d.set(q,se));const X=Q(_);if(X!==E.__cacheKey){se[X]===void 0&&(se[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),se[X].usedTimes++;const Pe=se[E.__cacheKey];Pe!==void 0&&(se[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(_)),E.__cacheKey=X,E.__webglTexture=se[X].texture}return I}function j(E,_,I){return Math.floor(Math.floor(E/I)/_)}function he(E,_,I,q){const X=E.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,I,q,_.data);else{X.sort((le,be)=>le.start-be.start);let Pe=0;for(let le=1;le<X.length;le++){const be=X[Pe],Ie=X[le],Le=be.start+be.count,Me=j(Ie.start,_.width,4),Xe=j(be.start,_.width,4);Ie.start<=Le+1&&Me===Xe&&j(Ie.start+Ie.count-1,_.width,4)===Me?be.count=Math.max(be.count,Ie.start+Ie.count-be.start):(++Pe,X[Pe]=Ie)}X.length=Pe+1;const ve=t.getParameter(t.UNPACK_ROW_LENGTH),ye=t.getParameter(t.UNPACK_SKIP_PIXELS),xe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let le=0,be=X.length;le<be;le++){const Ie=X[le],Le=Math.floor(Ie.start/4),Me=Math.ceil(Ie.count/4),Xe=Le%_.width,U=Math.floor(Le/_.width),Re=Me,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Xe,U,Re,pe,I,q,_.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ve),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function we(E,_,I){let q=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=t.TEXTURE_3D);const se=et(E,_),X=_.source;n.bindTexture(q,E.__webglTexture,t.TEXTURE0+I);const Pe=i.get(X);if(X.version!==Pe.__version||se===!0){n.activeTexture(t.TEXTURE0+I);const ve=rt.getPrimaries(rt.workingColorSpace),ye=_.colorSpace===wi?null:rt.getPrimaries(_.colorSpace),xe=_.colorSpace===wi||ve===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let le=v(_.image,!1,r.maxTextureSize);le=te(_,le);const be=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let Le=T(_.internalFormat,be,Ie,_.colorSpace,_.isVideoTexture);ze(q,_);let Me;const Xe=_.mipmaps,U=_.isVideoTexture!==!0,Re=Pe.__version===void 0||se===!0,pe=X.dataReady,Oe=D(_,le);if(_.isDepthTexture)Le=S(_.format===Ps,_.type),Re&&(U?n.texStorage2D(t.TEXTURE_2D,1,Le,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Le,le.width,le.height,0,be,Ie,null));else if(_.isDataTexture)if(Xe.length>0){U&&Re&&n.texStorage2D(t.TEXTURE_2D,Oe,Le,Xe[0].width,Xe[0].height);for(let ge=0,de=Xe.length;ge<de;ge++)Me=Xe[ge],U?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Me.width,Me.height,be,Ie,Me.data):n.texImage2D(t.TEXTURE_2D,ge,Le,Me.width,Me.height,0,be,Ie,Me.data);_.generateMipmaps=!1}else U?(Re&&n.texStorage2D(t.TEXTURE_2D,Oe,Le,le.width,le.height),pe&&he(_,le,be,Ie)):n.texImage2D(t.TEXTURE_2D,0,Le,le.width,le.height,0,be,Ie,le.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,Le,Xe[0].width,Xe[0].height,le.depth);for(let ge=0,de=Xe.length;ge<de;ge++)if(Me=Xe[ge],_.format!==wn)if(be!==null)if(U){if(pe)if(_.layerUpdates.size>0){const Fe=Hf(Me.width,Me.height,_.format,_.type);for(const Ye of _.layerUpdates){const St=Me.data.subarray(Ye*Fe/Me.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,Ye,Me.width,Me.height,1,be,St)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Me.width,Me.height,le.depth,be,Me.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Le,Me.width,Me.height,le.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Me.width,Me.height,le.depth,be,Ie,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Le,Me.width,Me.height,le.depth,0,be,Ie,Me.data)}else{U&&Re&&n.texStorage2D(t.TEXTURE_2D,Oe,Le,Xe[0].width,Xe[0].height);for(let ge=0,de=Xe.length;ge<de;ge++)Me=Xe[ge],_.format!==wn?be!==null?U?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Me.width,Me.height,be,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Me.width,Me.height,be,Ie,Me.data):n.texImage2D(t.TEXTURE_2D,ge,Le,Me.width,Me.height,0,be,Ie,Me.data)}else if(_.isDataArrayTexture)if(U){if(Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Oe,Le,le.width,le.height,le.depth),pe)if(_.layerUpdates.size>0){const ge=Hf(le.width,le.height,_.format,_.type);for(const de of _.layerUpdates){const Fe=le.data.subarray(de*ge/le.data.BYTES_PER_ELEMENT,(de+1)*ge/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,le.width,le.height,1,be,Ie,Fe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,be,Ie,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,be,Ie,le.data);else if(_.isData3DTexture)U?(Re&&n.texStorage3D(t.TEXTURE_3D,Oe,Le,le.width,le.height,le.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,be,Ie,le.data)):n.texImage3D(t.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,be,Ie,le.data);else if(_.isFramebufferTexture){if(Re)if(U)n.texStorage2D(t.TEXTURE_2D,Oe,Le,le.width,le.height);else{let ge=le.width,de=le.height;for(let Fe=0;Fe<Oe;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Le,ge,de,0,be,Ie,null),ge>>=1,de>>=1}}else if(Xe.length>0){if(U&&Re){const ge=Ae(Xe[0]);n.texStorage2D(t.TEXTURE_2D,Oe,Le,ge.width,ge.height)}for(let ge=0,de=Xe.length;ge<de;ge++)Me=Xe[ge],U?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,be,Ie,Me):n.texImage2D(t.TEXTURE_2D,ge,Le,be,Ie,Me);_.generateMipmaps=!1}else if(U){if(Re){const ge=Ae(le);n.texStorage2D(t.TEXTURE_2D,Oe,Le,ge.width,ge.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,be,Ie,le)}else n.texImage2D(t.TEXTURE_2D,0,Le,be,Ie,le);m(_)&&p(q),Pe.__version=X.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function N(E,_,I){if(_.image.length!==6)return;const q=et(E,_),se=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+I);const X=i.get(se);if(se.version!==X.__version||q===!0){n.activeTexture(t.TEXTURE0+I);const Pe=rt.getPrimaries(rt.workingColorSpace),ve=_.colorSpace===wi?null:rt.getPrimaries(_.colorSpace),ye=_.colorSpace===wi||Pe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,le=_.image[0]&&_.image[0].isDataTexture,be=[];for(let de=0;de<6;de++)!xe&&!le?be[de]=v(_.image[de],!0,r.maxCubemapSize):be[de]=le?_.image[de].image:_.image[de],be[de]=te(_,be[de]);const Ie=be[0],Le=s.convert(_.format,_.colorSpace),Me=s.convert(_.type),Xe=T(_.internalFormat,Le,Me,_.colorSpace),U=_.isVideoTexture!==!0,Re=X.__version===void 0||q===!0,pe=se.dataReady;let Oe=D(_,Ie);ze(t.TEXTURE_CUBE_MAP,_);let ge;if(xe){U&&Re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Xe,Ie.width,Ie.height);for(let de=0;de<6;de++){ge=be[de].mipmaps;for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];_.format!==wn?Le!==null?U?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,0,0,Ye.width,Ye.height,Le,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,Xe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,0,0,Ye.width,Ye.height,Le,Me,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe,Xe,Ye.width,Ye.height,0,Le,Me,Ye.data)}}}else{if(ge=_.mipmaps,U&&Re){ge.length>0&&Oe++;const de=Ae(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,Xe,de.width,de.height)}for(let de=0;de<6;de++)if(le){U?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,be[de].width,be[de].height,Le,Me,be[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,be[de].width,be[de].height,0,Le,Me,be[de].data);for(let Fe=0;Fe<ge.length;Fe++){const St=ge[Fe].image[de].image;U?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,0,0,St.width,St.height,Le,Me,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,Xe,St.width,St.height,0,Le,Me,St.data)}}else{U?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Le,Me,be[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,Le,Me,be[de]);for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];U?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,0,0,Le,Me,Ye.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Fe+1,Xe,Le,Me,Ye.image[de])}}}m(_)&&p(t.TEXTURE_CUBE_MAP),X.__version=se.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function oe(E,_,I,q,se,X){const Pe=s.convert(I.format,I.colorSpace),ve=s.convert(I.type),ye=T(I.internalFormat,Pe,ve,I.colorSpace),xe=i.get(_),le=i.get(I);if(le.__renderTarget=_,!xe.__hasExternalTextures){const be=Math.max(1,_.width>>X),Ie=Math.max(1,_.height>>X);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,X,ye,be,Ie,_.depth,0,Pe,ve,null):n.texImage2D(se,X,ye,be,Ie,0,Pe,ve,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,se,le.__webglTexture,0,G(_)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,se,le.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(E,_,I){if(t.bindRenderbuffer(t.RENDERBUFFER,E),_.depthBuffer){const q=_.depthTexture,se=q&&q.isDepthTexture?q.type:null,X=S(_.stencilBuffer,se),Pe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=G(_);re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,X,_.width,_.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,X,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,X,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,E)}else{const q=_.textures;for(let se=0;se<q.length;se++){const X=q[se],Pe=s.convert(X.format,X.colorSpace),ve=s.convert(X.type),ye=T(X.internalFormat,Pe,ve,X.colorSpace),xe=G(_);I&&re(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ye,_.width,_.height):re(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,ye,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ye,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ce(_.depthTexture,0);const se=q.__webglTexture,X=G(_);if(_.depthTexture.format===Cs)re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(_.depthTexture.format===Ps)re(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ke(E){const _=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",se)};q.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const q=E.texture.mipmaps;q&&q.length>0?ue(_.__webglFramebuffer[0],E):ue(_.__webglFramebuffer,E)}else if(I){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=t.createRenderbuffer(),fe(_.__webglDepthbuffer[q],E,!1);else{const se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,X)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),fe(_.__webglDepthbuffer,E,!1);else{const se=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function A(E,_,I){const q=i.get(E);_!==void 0&&oe(q.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&ke(E)}function R(E){const _=E.texture,I=i.get(E),q=i.get(_);E.addEventListener("dispose",P);const se=E.textures,X=E.isWebGLCubeRenderTarget===!0,Pe=se.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=_.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[ve]=[];for(let ye=0;ye<_.mipmaps.length;ye++)I.__webglFramebuffer[ve][ye]=t.createFramebuffer()}else I.__webglFramebuffer[ve]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let ve=0;ve<_.mipmaps.length;ve++)I.__webglFramebuffer[ve]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let ve=0,ye=se.length;ve<ye;ve++){const xe=i.get(se[ve]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&re(E)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const ye=se[ve];I.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ve]);const xe=s.convert(ye.format,ye.colorSpace),le=s.convert(ye.type),be=T(ye.internalFormat,xe,le,ye.colorSpace,E.isXRRenderTarget===!0),Ie=G(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,be,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,I.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(I.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ze(t.TEXTURE_CUBE_MAP,_);for(let ve=0;ve<6;ve++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)oe(I.__webglFramebuffer[ve][ye],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ye);else oe(I.__webglFramebuffer[ve],E,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let ve=0,ye=se.length;ve<ye;ve++){const xe=se[ve],le=i.get(xe);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ze(t.TEXTURE_2D,xe),oe(I.__webglFramebuffer,E,xe,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),m(xe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ve=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ve=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ve,q.__webglTexture),ze(ve,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)oe(I.__webglFramebuffer[ye],E,_,t.COLOR_ATTACHMENT0,ve,ye);else oe(I.__webglFramebuffer,E,_,t.COLOR_ATTACHMENT0,ve,0);m(_)&&p(ve),n.unbindTexture()}E.depthBuffer&&ke(E)}function x(E){const _=E.textures;for(let I=0,q=_.length;I<q;I++){const se=_[I];if(m(se)){const X=w(E),Pe=i.get(se).__webglTexture;n.bindTexture(X,Pe),p(X),n.unbindTexture()}}}const ie=[],k=[];function W(E){if(E.samples>0){if(re(E)===!1){const _=E.textures,I=E.width,q=E.height;let se=t.COLOR_BUFFER_BIT;const X=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(E),ve=_.length>1;if(ve)for(let xe=0;xe<_.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ye=E.texture.mipmaps;ye&&ye.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),ve){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const le=i.get(_[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,le,0)}t.blitFramebuffer(0,0,I,q,0,0,I,q,se,t.NEAREST),l===!0&&(ie.length=0,k.length=0,ie.push(t.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ie.push(X),k.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,k)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let xe=0;xe<_.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const le=i.get(_[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function G(E){return Math.min(r.maxSamples,E.samples)}function re(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function te(E,_){const I=E.colorSpace,q=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==Hr&&I!==wi&&(rt.getTransfer(I)===gt?(q!==wn||se!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}function Ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=ce,this.setTexture2DArray=ee,this.setTexture3D=ae,this.setTextureCube=V,this.rebindTextures=A,this.setupRenderTarget=R,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=re}function sb(t,e){function n(i,r=wi){let s;const o=rt.getTransfer(r);if(i===li)return t.UNSIGNED_BYTE;if(i===Qc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===op)return t.BYTE;if(i===ap)return t.SHORT;if(i===As)return t.UNSIGNED_SHORT;if(i===Jc)return t.INT;if(i===sr)return t.UNSIGNED_INT;if(i===ni)return t.FLOAT;if(i===Us)return t.HALF_FLOAT;if(i===cp)return t.ALPHA;if(i===up)return t.RGB;if(i===wn)return t.RGBA;if(i===Cs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===fp)return t.RED;if(i===tu)return t.RED_INTEGER;if(i===dp)return t.RG;if(i===nu)return t.RG_INTEGER;if(i===iu)return t.RGBA_INTEGER;if(i===To||i===wo||i===Ao||i===Ro)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===jl||i===Yl||i===Kl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Jl||i===Ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Zl||i===Jl)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ec)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ic)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ac)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===pc||i===mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Co)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hp||i===gc||i===_c||i===vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
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

}`;class lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ui({vertexShader:ob,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cb extends Xr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=new lb,m=n.getContextAttributes();let p=null,w=null;const T=[],S=[],D=new ct;let C=null;const P=new bn;P.viewport=new Rt;const O=new bn;O.viewport=new Rt;const b=[P,O],y=new PS;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let he=T[j];return he===void 0&&(he=new al,T[j]=he),he.getTargetRaySpace()},this.getControllerGrip=function(j){let he=T[j];return he===void 0&&(he=new al,T[j]=he),he.getGripSpace()},this.getHand=function(j){let he=T[j];return he===void 0&&(he=new al,T[j]=he),he.getHandSpace()};function H(j){const he=S.indexOf(j.inputSource);if(he===-1)return;const we=T[he];we!==void 0&&(we.update(j.inputSource,j.frame,c||o),we.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",ce);for(let j=0;j<T.length;j++){const he=S[j];he!==null&&(S[j]=null,T[j].disconnect(he))}L=null,F=null,v.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,w=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",ce),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,N=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=m.stencil?Ps:Cs,N=m.stencil?Rs:sr);const fe={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new or(d.textureWidth,d.textureHeight,{format:wn,type:li,depthTexture:new Ap(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const we={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,we),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),w=new or(h.framebufferWidth,h.framebufferHeight,{format:wn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ce(j){for(let he=0;he<j.removed.length;he++){const we=j.removed[he],N=S.indexOf(we);N>=0&&(S[N]=null,T[N].disconnect(we))}for(let he=0;he<j.added.length;he++){const we=j.added[he];let N=S.indexOf(we);if(N===-1){for(let fe=0;fe<T.length;fe++)if(fe>=S.length){S.push(we),N=fe;break}else if(S[fe]===null){S[fe]=we,N=fe;break}if(N===-1)break}const oe=T[N];oe&&oe.connect(we)}}const ee=new Z,ae=new Z;function V(j,he,we){ee.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(we.matrixWorld);const N=ee.distanceTo(ae),oe=he.projectionMatrix.elements,fe=we.projectionMatrix.elements,ue=oe[14]/(oe[10]-1),ke=oe[14]/(oe[10]+1),A=(oe[9]+1)/oe[5],R=(oe[9]-1)/oe[5],x=(oe[8]-1)/oe[0],ie=(fe[8]+1)/fe[0],k=ue*x,W=ue*ie,G=N/(-x+ie),re=G*-x;if(he.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(re),j.translateZ(G),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),oe[10]===-1)j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Y=ue+G,te=ke+G,Ae=k-re,E=W+(N-re),_=A*ke/te*Y,I=R*ke/te*Y;j.projectionMatrix.makePerspective(Ae,E,_,I,Y,te),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Ee(j,he){he===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(he.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let he=j.near,we=j.far;v.texture!==null&&(v.depthNear>0&&(he=v.depthNear),v.depthFar>0&&(we=v.depthFar)),y.near=O.near=P.near=he,y.far=O.far=P.far=we,(L!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,F=y.far),P.layers.mask=j.layers.mask|2,O.layers.mask=j.layers.mask|4,y.layers.mask=P.layers.mask|O.layers.mask;const N=j.parent,oe=y.cameras;Ee(y,N);for(let fe=0;fe<oe.length;fe++)Ee(oe[fe],N);oe.length===2?V(y,P,O):y.projectionMatrix.copy(P.projectionMatrix),Te(j,y,N)};function Te(j,he,we){we===null?j.matrix.copy(he.matrixWorld):(j.matrix.copy(we.matrixWorld),j.matrix.invert(),j.matrix.multiply(he.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(he.projectionMatrix),j.projectionMatrixInverse.copy(he.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Ue=null;function ze(j,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const we=u.views;h!==null&&(e.setRenderTargetFramebuffer(w,h.framebuffer),e.setRenderTarget(w));let N=!1;we.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let ue=0;ue<we.length;ue++){const ke=we[ue];let A=null;if(h!==null)A=h.getViewport(ke);else{const x=f.getViewSubImage(d,ke);A=x.viewport,ue===0&&(e.setRenderTargetTextures(w,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(w))}let R=b[ue];R===void 0&&(R=new bn,R.layers.enable(ue),R.viewport=new Rt,b[ue]=R),R.matrix.fromArray(ke.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ke.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(A.x,A.y,A.width,A.height),ue===0&&(y.matrix.copy(R.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(R)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ue=f.getDepthInformation(we[0]);ue&&ue.isValid&&ue.texture&&v.init(e,ue,r.renderState)}}for(let we=0;we<T.length;we++){const N=S[we],oe=T[we];N!==null&&oe!==void 0&&oe.update(N,he,c||o)}Ue&&Ue(j,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const et=new Cp;et.setAnimationLoop(ze),this.setAnimationLoop=function(j){Ue=j},this.dispose=function(){}}}const $i=new ci,ub=new Ct;function fb(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),T=w.envMap,S=w.envMapRotation;T&&(m.envMap.value=T,$i.copy(S),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(ub.makeRotationFromEuler($i)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function db(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const S=T.program;i.uniformBlockBinding(w,S)}function c(w,T){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));const D=T.program;i.updateUBOMapping(w,D);const C=e.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function u(w){const T=f();w.__bindingPointIndex=T;const S=t.createBuffer(),D=w.__size,C=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,D,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,S),S}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=r[w.id],S=w.uniforms,D=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let C=0,P=S.length;C<P;C++){const O=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,y=O.length;b<y;b++){const L=O[b];if(h(L,C,b,D)===!0){const F=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let Q=0;for(let ce=0;ce<H.length;ce++){const ee=H[ce],ae=v(ee);typeof ee=="number"||typeof ee=="boolean"?(L.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,F+Q,L.__data)):ee.isMatrix3?(L.__data[0]=ee.elements[0],L.__data[1]=ee.elements[1],L.__data[2]=ee.elements[2],L.__data[3]=0,L.__data[4]=ee.elements[3],L.__data[5]=ee.elements[4],L.__data[6]=ee.elements[5],L.__data[7]=0,L.__data[8]=ee.elements[6],L.__data[9]=ee.elements[7],L.__data[10]=ee.elements[8],L.__data[11]=0):(ee.toArray(L.__data,Q),Q+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(w,T,S,D){const C=w.value,P=T+"_"+S;if(D[P]===void 0)return typeof C=="number"||typeof C=="boolean"?D[P]=C:D[P]=C.clone(),!0;{const O=D[P];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return D[P]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function g(w){const T=w.uniforms;let S=0;const D=16;for(let P=0,O=T.length;P<O;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let y=0,L=b.length;y<L;y++){const F=b[y],H=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,ce=H.length;Q<ce;Q++){const ee=H[Q],ae=v(ee),V=S%D,Ee=V%ae.boundary,Te=V+Ee;S+=Ee,Te!==0&&D-Te<ae.storage&&(S+=D-Te),F.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=ae.storage}}}const C=S%D;return C>0&&(S+=D-C),w.__size=S,w.__cache={},this}function v(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class hb{constructor(e={}){const{canvas:n=jx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=gn;let C=0,P=0,O=null,b=-1,y=null;const L=new Rt,F=new Rt;let H=null;const Q=new pt(0);let ce=0,ee=n.width,ae=n.height,V=1,Ee=null,Te=null;const Ue=new Rt(0,0,ee,ae),ze=new Rt(0,0,ee,ae);let et=!1;const j=new wp;let he=!1,we=!1;const N=new Ct,oe=new Ct,fe=new Z,ue=new Rt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function R(){return O===null?V:1}let x=i;function ie(M,B){return n.getContext(M,B)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zc}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",de,!1),x===null){const B="webgl2";if(x=ie(B,M),x===null)throw ie(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let k,W,G,re,Y,te,Ae,E,_,I,q,se,X,Pe,ve,ye,xe,le,be,Ie,Le,Me,Xe,U;function Re(){k=new MM(x),k.init(),Me=new sb(x,k),W=new gM(x,k,e,Me),G=new ib(x,k),W.reverseDepthBuffer&&d&&G.buffers.depth.setReversed(!0),re=new wM(x),Y=new W1,te=new rb(x,k,G,Y,W,Me,re),Ae=new vM(S),E=new EM(S),_=new DS(x),Xe=new pM(x,_),I=new bM(x,_,re,Xe),q=new RM(x,I,_,re),be=new AM(x,W,te),ye=new _M(Y),se=new G1(S,Ae,E,k,W,Xe,ye),X=new fb(S,Y),Pe=new $1,ve=new J1(k),le=new hM(S,Ae,E,G,q,h,l),xe=new tb(S,q,W),U=new db(x,re,W,G),Ie=new mM(x,k,re),Le=new TM(x,k,re),re.programs=se.programs,S.capabilities=W,S.extensions=k,S.properties=Y,S.renderLists=Pe,S.shadowMap=xe,S.state=G,S.info=re}Re();const pe=new cb(S,x);this.xr=pe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=k.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=k.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(ee,ae,!1))},this.getSize=function(M){return M.set(ee,ae)},this.setSize=function(M,B,K=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,ae=B,n.width=Math.floor(M*V),n.height=Math.floor(B*V),K===!0&&(n.style.width=M+"px",n.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(ee*V,ae*V).floor()},this.setDrawingBufferSize=function(M,B,K){ee=M,ae=B,V=K,n.width=Math.floor(M*K),n.height=Math.floor(B*K),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ue)},this.setViewport=function(M,B,K,J){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,B,K,J),G.viewport(L.copy(Ue).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,B,K,J){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,B,K,J),G.scissor(F.copy(ze).multiplyScalar(V).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){G.setScissorTest(et=M)},this.setOpaqueSort=function(M){Ee=M},this.setTransparentSort=function(M){Te=M},this.getClearColor=function(M){return M.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,K=!0){let J=0;if(M){let z=!1;if(O!==null){const Se=O.texture.format;z=Se===iu||Se===nu||Se===tu}if(z){const Se=O.texture.type,De=Se===li||Se===sr||Se===As||Se===Rs||Se===Qc||Se===eu,Be=le.getClearColor(),Ne=le.getClearAlpha(),$e=Be.r,qe=Be.g,Ve=Be.b;De?(g[0]=$e,g[1]=qe,g[2]=Ve,g[3]=Ne,x.clearBufferuiv(x.COLOR,0,g)):(v[0]=$e,v[1]=qe,v[2]=Ve,v[3]=Ne,x.clearBufferiv(x.COLOR,0,v))}else J|=x.COLOR_BUFFER_BIT}B&&(J|=x.DEPTH_BUFFER_BIT),K&&(J|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",de,!1),le.dispose(),Pe.dispose(),ve.dispose(),Y.dispose(),Ae.dispose(),E.dispose(),q.dispose(),Xe.dispose(),U.dispose(),se.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",uu),pe.removeEventListener("sessionend",fu),Ni.stop()};function Oe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const M=re.autoReset,B=xe.enabled,K=xe.autoUpdate,J=xe.needsUpdate,z=xe.type;Re(),re.autoReset=M,xe.enabled=B,xe.autoUpdate=K,xe.needsUpdate=J,xe.type=z}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Fe(M){const B=M.target;B.removeEventListener("dispose",Fe),Ye(B)}function Ye(M){St(M),Y.remove(M)}function St(M){const B=Y.get(M).programs;B!==void 0&&(B.forEach(function(K){se.releaseProgram(K)}),M.isShaderMaterial&&se.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,K,J,z,Se){B===null&&(B=ke);const De=z.isMesh&&z.matrixWorld.determinant()<0,Be=om(M,B,K,J,z);G.setMaterial(J,De);let Ne=K.index,$e=1;if(J.wireframe===!0){if(Ne=I.getWireframeAttribute(K),Ne===void 0)return;$e=2}const qe=K.drawRange,Ve=K.attributes.position;let tt=qe.start*$e,mt=(qe.start+qe.count)*$e;Se!==null&&(tt=Math.max(tt,Se.start*$e),mt=Math.min(mt,(Se.start+Se.count)*$e)),Ne!==null?(tt=Math.max(tt,0),mt=Math.min(mt,Ne.count)):Ve!=null&&(tt=Math.max(tt,0),mt=Math.min(mt,Ve.count));const wt=mt-tt;if(wt<0||wt===1/0)return;Xe.setup(z,J,Be,K,Ne);let yt,_t=Ie;if(Ne!==null&&(yt=_.get(Ne),_t=Le,_t.setIndex(yt)),z.isMesh)J.wireframe===!0?(G.setLineWidth(J.wireframeLinewidth*R()),_t.setMode(x.LINES)):_t.setMode(x.TRIANGLES);else if(z.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),G.setLineWidth(Ge*R()),z.isLineSegments?_t.setMode(x.LINES):z.isLineLoop?_t.setMode(x.LINE_LOOP):_t.setMode(x.LINE_STRIP)}else z.isPoints?_t.setMode(x.POINTS):z.isSprite&&_t.setMode(x.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))_t.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ge=z._multiDrawStarts,bt=z._multiDrawCounts,it=z._multiDrawCount,on=Ne?_.get(Ne).bytesPerElement:1,cr=Y.get(J).currentProgram.getUniforms();for(let an=0;an<it;an++)cr.setValue(x,"_gl_DrawID",an),_t.render(Ge[an]/on,bt[an])}else if(z.isInstancedMesh)_t.renderInstances(tt,wt,z.count);else if(K.isInstancedBufferGeometry){const Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,bt=Math.min(K.instanceCount,Ge);_t.renderInstances(tt,wt,bt)}else _t.render(tt,wt)};function ft(M,B,K){M.transparent===!0&&M.side===ti&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,Gs(M,B,K),M.side=Ii,M.needsUpdate=!0,Gs(M,B,K),M.side=ti):Gs(M,B,K)}this.compile=function(M,B,K=null){K===null&&(K=M),p=ve.get(K),p.init(B),T.push(p),K.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),M!==K&&M.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const J=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const Se=z.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){const Be=Se[De];ft(Be,K,z),J.add(Be)}else ft(Se,K,z),J.add(Se)}),p=T.pop(),J},this.compileAsync=function(M,B,K=null){const J=this.compile(M,B,K);return new Promise(z=>{function Se(){if(J.forEach(function(De){Y.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){z(M);return}setTimeout(Se,10)}k.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Sn=null;function Vn(M){Sn&&Sn(M)}function uu(){Ni.stop()}function fu(){Ni.start()}const Ni=new Cp;Ni.setAnimationLoop(Vn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(M){Sn=M,pe.setAnimationLoop(M),M===null?Ni.stop():Ni.start()},pe.addEventListener("sessionstart",uu),pe.addEventListener("sessionend",fu),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(B),B=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,B,O),p=ve.get(M,T.length),p.init(B),T.push(p),oe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(oe),we=this.localClippingEnabled,he=ye.init(this.clippingPlanes,we),m=Pe.get(M,w.length),m.init(),w.push(m),pe.enabled===!0&&pe.isPresenting===!0){const Se=S.xr.getDepthSensingMesh();Se!==null&&ya(Se,B,-1/0,S.sortObjects)}ya(M,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Ee,Te),A=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,A&&le.addToRenderList(m,M),this.info.render.frame++,he===!0&&ye.beginShadows();const K=p.state.shadowsArray;xe.render(K,M,B),he===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const Se=B.cameras;if(z.length>0)for(let De=0,Be=Se.length;De<Be;De++){const Ne=Se[De];hu(J,z,M,Ne)}A&&le.render(M);for(let De=0,Be=Se.length;De<Be;De++){const Ne=Se[De];du(m,M,Ne,Ne.viewport)}}else z.length>0&&hu(J,z,M,B),A&&le.render(M),du(m,M,B);O!==null&&P===0&&(te.updateMultisampleRenderTarget(O),te.updateRenderTargetMipmap(O)),M.isScene===!0&&M.onAfterRender(S,M,B),Xe.resetDefaultState(),b=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],he===!0&&ye.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ya(M,B,K,J){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){J&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);const De=q.update(M),Be=M.material;Be.visible&&m.push(M,De,Be,K,ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const De=q.update(M),Be=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ue.copy(De.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Be)){const Ne=De.groups;for(let $e=0,qe=Ne.length;$e<qe;$e++){const Ve=Ne[$e],tt=Be[Ve.materialIndex];tt&&tt.visible&&m.push(M,De,tt,K,ue.z,Ve)}}else Be.visible&&m.push(M,De,Be,K,ue.z,null)}}const Se=M.children;for(let De=0,Be=Se.length;De<Be;De++)ya(Se[De],B,K,J)}function du(M,B,K,J){const z=M.opaque,Se=M.transmissive,De=M.transparent;p.setupLightsView(K),he===!0&&ye.setGlobalState(S.clippingPlanes,K),J&&G.viewport(L.copy(J)),z.length>0&&Vs(z,B,K),Se.length>0&&Vs(Se,B,K),De.length>0&&Vs(De,B,K),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function hu(M,B,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new or(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?Us:li,minFilter:er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Se=p.state.transmissionRenderTarget[J.id],De=J.viewport||L;Se.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);const Be=S.getRenderTarget(),Ne=S.getActiveCubeFace(),$e=S.getActiveMipmapLevel();S.setRenderTarget(Se),S.getClearColor(Q),ce=S.getClearAlpha(),ce<1&&S.setClearColor(16777215,.5),S.clear(),A&&le.render(K);const qe=S.toneMapping;S.toneMapping=Pi;const Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),he===!0&&ye.setGlobalState(S.clippingPlanes,J),Vs(M,K,J),te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se),k.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let mt=0,wt=B.length;mt<wt;mt++){const yt=B[mt],_t=yt.object,Ge=yt.geometry,bt=yt.material,it=yt.group;if(bt.side===ti&&_t.layers.test(J.layers)){const on=bt.side;bt.side=Qt,bt.needsUpdate=!0,pu(_t,K,J,Ge,bt,it),bt.side=on,bt.needsUpdate=!0,tt=!0}}tt===!0&&(te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se))}S.setRenderTarget(Be,Ne,$e),S.setClearColor(Q,ce),Ve!==void 0&&(J.viewport=Ve),S.toneMapping=qe}function Vs(M,B,K){const J=B.isScene===!0?B.overrideMaterial:null;for(let z=0,Se=M.length;z<Se;z++){const De=M[z],Be=De.object,Ne=De.geometry,$e=De.group;let qe=De.material;qe.allowOverride===!0&&J!==null&&(qe=J),Be.layers.test(K.layers)&&pu(Be,B,K,Ne,qe,$e)}}function pu(M,B,K,J,z,Se){M.onBeforeRender(S,B,K,J,z,Se),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(S,B,K,J,M,Se),z.transparent===!0&&z.side===ti&&z.forceSinglePass===!1?(z.side=Qt,z.needsUpdate=!0,S.renderBufferDirect(K,B,J,z,M,Se),z.side=Ii,z.needsUpdate=!0,S.renderBufferDirect(K,B,J,z,M,Se),z.side=ti):S.renderBufferDirect(K,B,J,z,M,Se),M.onAfterRender(S,B,K,J,z,Se)}function Gs(M,B,K){B.isScene!==!0&&(B=ke);const J=Y.get(M),z=p.state.lights,Se=p.state.shadowsArray,De=z.state.version,Be=se.getParameters(M,z.state,Se,B,K),Ne=se.getProgramCacheKey(Be);let $e=J.programs;J.environment=M.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(M.isMeshStandardMaterial?E:Ae).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,$e===void 0&&(M.addEventListener("dispose",Fe),$e=new Map,J.programs=$e);let qe=$e.get(Ne);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===De)return gu(M,Be),qe}else Be.uniforms=se.getUniforms(M),M.onBeforeCompile(Be,S),qe=se.acquireProgram(Be,Ne),$e.set(Ne,qe),J.uniforms=Be.uniforms;const Ve=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ve.clippingPlanes=ye.uniform),gu(M,Be),J.needsLights=lm(M),J.lightsStateVersion=De,J.needsLights&&(Ve.ambientLightColor.value=z.state.ambient,Ve.lightProbe.value=z.state.probe,Ve.directionalLights.value=z.state.directional,Ve.directionalLightShadows.value=z.state.directionalShadow,Ve.spotLights.value=z.state.spot,Ve.spotLightShadows.value=z.state.spotShadow,Ve.rectAreaLights.value=z.state.rectArea,Ve.ltc_1.value=z.state.rectAreaLTC1,Ve.ltc_2.value=z.state.rectAreaLTC2,Ve.pointLights.value=z.state.point,Ve.pointLightShadows.value=z.state.pointShadow,Ve.hemisphereLights.value=z.state.hemi,Ve.directionalShadowMap.value=z.state.directionalShadowMap,Ve.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ve.spotShadowMap.value=z.state.spotShadowMap,Ve.spotLightMatrix.value=z.state.spotLightMatrix,Ve.spotLightMap.value=z.state.spotLightMap,Ve.pointShadowMap.value=z.state.pointShadowMap,Ve.pointShadowMatrix.value=z.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function mu(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Po.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function gu(M,B){const K=Y.get(M);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function om(M,B,K,J,z){B.isScene!==!0&&(B=ke),te.resetTextureUnits();const Se=B.fog,De=J.isMeshStandardMaterial?B.environment:null,Be=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Hr,Ne=(J.isMeshStandardMaterial?E:Ae).get(J.envMap||De),$e=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,qe=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!K.morphAttributes.position,tt=!!K.morphAttributes.normal,mt=!!K.morphAttributes.color;let wt=Pi;J.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(wt=S.toneMapping);const yt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_t=yt!==void 0?yt.length:0,Ge=Y.get(J),bt=p.state.lights;if(he===!0&&(we===!0||M!==y)){const Wt=M===y&&J.id===b;ye.setState(J,M,Wt)}let it=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==bt.state.version||Ge.outputColorSpace!==Be||z.isBatchedMesh&&Ge.batching===!1||!z.isBatchedMesh&&Ge.batching===!0||z.isBatchedMesh&&Ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ge.instancing===!1||!z.isInstancedMesh&&Ge.instancing===!0||z.isSkinnedMesh&&Ge.skinning===!1||!z.isSkinnedMesh&&Ge.skinning===!0||z.isInstancedMesh&&Ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ge.instancingMorph===!1&&z.morphTexture!==null||Ge.envMap!==Ne||J.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ye.numPlanes||Ge.numIntersection!==ye.numIntersection)||Ge.vertexAlphas!==$e||Ge.vertexTangents!==qe||Ge.morphTargets!==Ve||Ge.morphNormals!==tt||Ge.morphColors!==mt||Ge.toneMapping!==wt||Ge.morphTargetsCount!==_t)&&(it=!0):(it=!0,Ge.__version=J.version);let on=Ge.currentProgram;it===!0&&(on=Gs(J,B,z));let cr=!1,an=!1,Yr=!1;const Mt=on.getUniforms(),dn=Ge.uniforms;if(G.useProgram(on.program)&&(cr=!0,an=!0,Yr=!0),J.id!==b&&(b=J.id,an=!0),cr||y!==M){G.buffers.depth.getReversed()?(N.copy(M.projectionMatrix),Kx(N),Zx(N),Mt.setValue(x,"projectionMatrix",N)):Mt.setValue(x,"projectionMatrix",M.projectionMatrix),Mt.setValue(x,"viewMatrix",M.matrixWorldInverse);const Yt=Mt.map.cameraPosition;Yt!==void 0&&Yt.setValue(x,fe.setFromMatrixPosition(M.matrixWorld)),W.logarithmicDepthBuffer&&Mt.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Mt.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,an=!0,Yr=!0)}if(z.isSkinnedMesh){Mt.setOptional(x,z,"bindMatrix"),Mt.setOptional(x,z,"bindMatrixInverse");const Wt=z.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Mt.setValue(x,"boneTexture",Wt.boneTexture,te))}z.isBatchedMesh&&(Mt.setOptional(x,z,"batchingTexture"),Mt.setValue(x,"batchingTexture",z._matricesTexture,te),Mt.setOptional(x,z,"batchingIdTexture"),Mt.setValue(x,"batchingIdTexture",z._indirectTexture,te),Mt.setOptional(x,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(x,"batchingColorTexture",z._colorsTexture,te));const hn=K.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&be.update(z,K,on),(an||Ge.receiveShadow!==z.receiveShadow)&&(Ge.receiveShadow=z.receiveShadow,Mt.setValue(x,"receiveShadow",z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(dn.envMap.value=Ne,dn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&B.environment!==null&&(dn.envMapIntensity.value=B.environmentIntensity),an&&(Mt.setValue(x,"toneMappingExposure",S.toneMappingExposure),Ge.needsLights&&am(dn,Yr),Se&&J.fog===!0&&X.refreshFogUniforms(dn,Se),X.refreshMaterialUniforms(dn,J,V,ae,p.state.transmissionRenderTarget[M.id]),Po.upload(x,mu(Ge),dn,te)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Po.upload(x,mu(Ge),dn,te),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Mt.setValue(x,"center",z.center),Mt.setValue(x,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(x,"normalMatrix",z.normalMatrix),Mt.setValue(x,"modelMatrix",z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Wt=J.uniformsGroups;for(let Yt=0,Ea=Wt.length;Yt<Ea;Yt++){const Oi=Wt[Yt];U.update(Oi,on),U.bind(Oi,on)}}return on}function am(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function lm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,B,K){const J=Y.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=B,Y.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const K=Y.get(M);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0};const cm=x.createFramebuffer();this.setRenderTarget=function(M,B=0,K=0){O=M,C=B,P=K;let J=!0,z=null,Se=!1,De=!1;if(M){const Ne=Y.get(M);if(Ne.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(x.FRAMEBUFFER,null),J=!1;else if(Ne.__webglFramebuffer===void 0)te.setupRenderTarget(M);else if(Ne.__hasExternalTextures)te.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(Ne.__boundDepthTexture!==Ve){if(Ve!==null&&Y.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(M)}}const $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const qe=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qe[B])?z=qe[B][K]:z=qe[B],Se=!0):M.samples>0&&te.useMultisampledRTT(M)===!1?z=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(qe)?z=qe[K]:z=qe,L.copy(M.viewport),F.copy(M.scissor),H=M.scissorTest}else L.copy(Ue).multiplyScalar(V).floor(),F.copy(ze).multiplyScalar(V).floor(),H=et;if(K!==0&&(z=cm),G.bindFramebuffer(x.FRAMEBUFFER,z)&&J&&G.drawBuffers(M,z),G.viewport(L),G.scissor(F),G.setScissorTest(H),Se){const Ne=Y.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,K)}else if(De){const Ne=Y.get(M.texture),$e=B;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ne.__webglTexture,K,$e)}else if(M!==null&&K!==0){const Ne=Y.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ne.__webglTexture,K)}b=-1},this.readRenderTargetPixels=function(M,B,K,J,z,Se,De,Be=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){G.bindFramebuffer(x.FRAMEBUFFER,Ne);try{const $e=M.textures[Be],qe=$e.format,Ve=$e.type;if(!W.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-J&&K>=0&&K<=M.height-z&&(M.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Be),x.readPixels(B,K,J,z,Me.convert(qe),Me.convert(Ve),Se))}finally{const $e=O!==null?Y.get(O).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(M,B,K,J,z,Se,De,Be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(B>=0&&B<=M.width-J&&K>=0&&K<=M.height-z){G.bindFramebuffer(x.FRAMEBUFFER,Ne);const $e=M.textures[Be],qe=$e.format,Ve=$e.type;if(!W.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,tt),x.bufferData(x.PIXEL_PACK_BUFFER,Se.byteLength,x.STREAM_READ),M.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Be),x.readPixels(B,K,J,z,Me.convert(qe),Me.convert(Ve),0);const mt=O!==null?Y.get(O).__webglFramebuffer:null;G.bindFramebuffer(x.FRAMEBUFFER,mt);const wt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Yx(x,wt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,tt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,Se),x.deleteBuffer(tt),x.deleteSync(wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,K=0){const J=Math.pow(2,-K),z=Math.floor(M.image.width*J),Se=Math.floor(M.image.height*J),De=B!==null?B.x:0,Be=B!==null?B.y:0;te.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,K,0,0,De,Be,z,Se),G.unbindTexture()};const um=x.createFramebuffer(),fm=x.createFramebuffer();this.copyTextureToTexture=function(M,B,K=null,J=null,z=0,Se=null){Se===null&&(z!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=z,z=0):Se=0);let De,Be,Ne,$e,qe,Ve,tt,mt,wt;const yt=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(K!==null)De=K.max.x-K.min.x,Be=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,$e=K.min.x,qe=K.min.y,Ve=K.isBox3?K.min.z:0;else{const hn=Math.pow(2,-z);De=Math.floor(yt.width*hn),Be=Math.floor(yt.height*hn),M.isDataArrayTexture?Ne=yt.depth:M.isData3DTexture?Ne=Math.floor(yt.depth*hn):Ne=1,$e=0,qe=0,Ve=0}J!==null?(tt=J.x,mt=J.y,wt=J.z):(tt=0,mt=0,wt=0);const _t=Me.convert(B.format),Ge=Me.convert(B.type);let bt;B.isData3DTexture?(te.setTexture3D(B,0),bt=x.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(te.setTexture2DArray(B,0),bt=x.TEXTURE_2D_ARRAY):(te.setTexture2D(B,0),bt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,B.unpackAlignment);const it=x.getParameter(x.UNPACK_ROW_LENGTH),on=x.getParameter(x.UNPACK_IMAGE_HEIGHT),cr=x.getParameter(x.UNPACK_SKIP_PIXELS),an=x.getParameter(x.UNPACK_SKIP_ROWS),Yr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,$e),x.pixelStorei(x.UNPACK_SKIP_ROWS,qe),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ve);const Mt=M.isDataArrayTexture||M.isData3DTexture,dn=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const hn=Y.get(M),Wt=Y.get(B),Yt=Y.get(hn.__renderTarget),Ea=Y.get(Wt.__renderTarget);G.bindFramebuffer(x.READ_FRAMEBUFFER,Yt.__webglFramebuffer),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Oi=0;Oi<Ne;Oi++)Mt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,z,Ve+Oi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,Se,wt+Oi)),x.blitFramebuffer($e,qe,De,Be,tt,mt,De,Be,x.DEPTH_BUFFER_BIT,x.NEAREST);G.bindFramebuffer(x.READ_FRAMEBUFFER,null),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Y.has(M)){const hn=Y.get(M),Wt=Y.get(B);G.bindFramebuffer(x.READ_FRAMEBUFFER,um),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,fm);for(let Yt=0;Yt<Ne;Yt++)Mt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,hn.__webglTexture,z,Ve+Yt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,hn.__webglTexture,z),dn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Wt.__webglTexture,Se,wt+Yt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Wt.__webglTexture,Se),z!==0?x.blitFramebuffer($e,qe,De,Be,tt,mt,De,Be,x.COLOR_BUFFER_BIT,x.NEAREST):dn?x.copyTexSubImage3D(bt,Se,tt,mt,wt+Yt,$e,qe,De,Be):x.copyTexSubImage2D(bt,Se,tt,mt,$e,qe,De,Be);G.bindFramebuffer(x.READ_FRAMEBUFFER,null),G.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else dn?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(bt,Se,tt,mt,wt,De,Be,Ne,_t,Ge,yt.data):B.isCompressedArrayTexture?x.compressedTexSubImage3D(bt,Se,tt,mt,wt,De,Be,Ne,_t,yt.data):x.texSubImage3D(bt,Se,tt,mt,wt,De,Be,Ne,_t,Ge,yt):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Se,tt,mt,De,Be,_t,Ge,yt.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Se,tt,mt,yt.width,yt.height,_t,yt.data):x.texSubImage2D(x.TEXTURE_2D,Se,tt,mt,De,Be,_t,Ge,yt);x.pixelStorei(x.UNPACK_ROW_LENGTH,it),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,on),x.pixelStorei(x.UNPACK_SKIP_PIXELS,cr),x.pixelStorei(x.UNPACK_SKIP_ROWS,an),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Yr),Se===0&&B.generateMipmaps&&x.generateMipmap(bt),G.unbindTexture()},this.copyTextureToTexture3D=function(M,B,K=null,J=null,z=0){return Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,K,J,z)},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&te.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?te.setTextureCube(M,0):M.isData3DTexture?te.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?te.setTexture2DArray(M,0):te.setTexture2D(M,0),G.unbindTexture()},this.resetState=function(){C=0,P=0,O=null,G.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const pb={key:0,class:"fallback-background"},mb={__name:"FireAshBackground",setup(t){const e=Object.freeze({PARTICLE_COUNT:300,WIND_RADIUS:80,WIND_RADIUS_SQUARED:6400,WIND_STRENGTH:1200,HORIZONTAL_DRIFT:.3,MIN_UPWARD_SPEED:.25,MAX_UPWARD_SPEED:.6,MIN_SIZE:4,MAX_SIZE:10,VELOCITY_DAMPING:.98,VELOCITY_RESTORATION:.02,MOUSE_VELOCITY_DAMPING:.95,MOUSE_DRAG_FACTOR:.05,WIND_FORCE_FACTOR:.1,MAX_VELOCITY_X:2,MIN_VELOCITY_X:-2,MAX_VELOCITY_Y:3,MIN_VELOCITY_Y:-1,LIFETIME_INCREMENT:8e-4,LIFETIME_INCREMENT_FAST:.004,MAX_PIXEL_RATIO:1.5,WIND_FORCE:120,UPWARD_SPEED_RANGE:.35,SIZE_RANGE:6,AVERAGE_UPWARD_SPEED:.425}),n=sn(null),i=sn(!0);let r,s,o,a,l;e.PARTICLE_COUNT;let c=e.PARTICLE_COUNT,u=new ct(-1e4,-1e4),f=new ct(0,0),d=new ct(-1e4,-1e4),h,g,v,m,p,w,T,S,D=!0,C=0,P=!1,O=0,b=0,y=2,L=5,F=0,H=0,Q=0,ce=0;const ee=()=>{try{const j=document.createElement("canvas");return!!(j.getContext("webgl")||j.getContext("experimental-webgl"))}catch{return!1}},ae=()=>{D=!document.hidden},V=j=>{j.preventDefault(),l&&(cancelAnimationFrame(l),l=null)},Ee=()=>{Ue()},Te=()=>{const j=Math.random();return{x:(j-.5)*e.HORIZONTAL_DRIFT,y:e.MIN_UPWARD_SPEED+j*e.UPWARD_SPEED_RANGE}},Ue=()=>{if(!n.value)return;if(!ee()){i.value=!1,console.warn("WebGL not supported, using fallback background");return}const j=n.value.clientWidth,he=n.value.clientHeight;r=new ES,s=new Rp(j/-2,j/2,he/2,he/-2,.1,1e3),s.position.z=1;try{o=new hb({alpha:!0,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch(k){console.error("Failed to create WebGL renderer:",k),i.value=!1;return}o.setSize(j,he),o.setPixelRatio(Math.min(window.devicePixelRatio,e.MAX_PIXEL_RATIO)),n.value.appendChild(o.domElement),o.domElement.addEventListener("webglcontextlost",V,!1),o.domElement.addEventListener("webglcontextrestored",Ee,!1);const we=new hi,N=new Float32Array(e.PARTICLE_COUNT*3),oe=new Float32Array(e.PARTICLE_COUNT*3),fe=new Float32Array(e.PARTICLE_COUNT),ue=new Float32Array(e.PARTICLE_COUNT),ke=new Float32Array(e.PARTICLE_COUNT);for(let k=0;k<e.PARTICLE_COUNT;k++){const W=k*3;N[W]=(Math.random()-.5)*j,N[W+1]=(Math.random()-.5)*he,N[W+2]=0;const G=Te();oe[W]=G.x,oe[W+1]=G.y,oe[W+2]=0,fe[k]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,ue[k]=Math.random()*Math.PI*2,ke[k]=Math.random()}we.setAttribute("position",new Lt(N,3)),we.setAttribute("velocity",new Lt(oe,3)),we.setAttribute("size",new Lt(fe,1)),we.setAttribute("phase",new Lt(ue,1)),we.setAttribute("lifetime",new Lt(ke,1));const A=new ui({uniforms:{time:{value:0},isRainbowMode:{value:0}},vertexShader:`
      attribute float size;
      attribute float phase;
      attribute float lifetime;
      uniform float time;
      uniform float isRainbowMode;
      varying float vOpacity;
      varying vec3 vColor;

      // HSV to RGB conversion for rainbow colors
      vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
      }

      void main() {
        // Flickering effect
        float flicker = sin(time * 3.0 + phase) * 0.3 + 0.7;

        // Fade based on lifetime (fade in at start, fade out near end)
        float fade = smoothstep(0.0, 0.1, lifetime) * smoothstep(1.0, 0.7, lifetime);
        vOpacity = fade * flicker;

        // Fire colors - from yellow-white hot to orange-red
        float heat = 1.0 - lifetime;
        vec3 hotColor = vec3(1.0, 0.9, 0.7);    // Yellow-white
        vec3 warmColor = vec3(1.0, 0.5, 0.2);   // Orange
        vec3 coolColor = vec3(0.8, 0.2, 0.1);   // Red

        vec3 fireColor;
        if(heat > 0.6) {
          fireColor = mix(warmColor, hotColor, (heat - 0.6) / 0.4);
        } else {
          fireColor = mix(coolColor, warmColor, heat / 0.6);
        }

        // Rainbow colors - each particle has a unique color across the full spectrum
        // Use phase (0 to 2π) as the primary hue determinant with minimal time cycling
        // This ensures particles are distributed across all rainbow colors
        float baseHue = phase / 6.28318; // Normalize phase to 0-1
        // Add very slow time variation (reduced from 0.03 to 0.01) and lifetime variation
        float hueVariation = sin(time * 0.01 + phase) * 0.1 + lifetime * 0.1;
        float hue = fract(baseHue + hueVariation);
        // Vary saturation slightly for more diversity (0.7 to 0.95)
        float saturation = 0.7 + sin(phase * 3.0) * 0.25;
        vec3 rainbowColor = hsv2rgb(vec3(hue, saturation, 1.0));

        // Mix between fire and rainbow based on isRainbowMode
        vColor = mix(fireColor, rainbowColor, isRainbowMode);

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
    `,transparent:!0,blending:Il,depthWrite:!1});a=new AS(we,A),r.add(a);const R=(k,W)=>{if(!n.value)return;if(k<0||k>window.innerWidth||W<0||W>window.innerHeight){x();return}const G=n.value.getBoundingClientRect();u.x=k-G.left-j/2,u.y=-(W-G.top-he/2),f.x=u.x-d.x,f.y=u.y-d.y,d.copy(u)};h=k=>{R(k.clientX,k.clientY)},g=k=>{k.touches.length>0&&R(k.touches[0].clientX,k.touches[0].clientY)};const x=()=>{u.set(-1e4,-1e4),d.set(-1e4,-1e4),f.set(0,0)};v=x,m=k=>{(!k.relatedTarget||k.relatedTarget.nodeName==="HTML")&&x()},p=x,w=()=>{F=Math.min(F+300,3e3),H=performance.now()+3e3,ze(5e3)},T=()=>{b=0,P=!1,F=0,Q=0},S=k=>{P=k.detail.active,b=P?1:0,P?(Q=F,ze(5e3)):F=0},window.addEventListener("mousemove",h,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",p,{passive:!0}),document.addEventListener("mouseleave",v,{passive:!0}),document.addEventListener("mouseout",m,{passive:!0}),window.addEventListener("increase-particles",w),window.addEventListener("reset-particles",T),window.addEventListener("rainbow-mode",S);const ie=()=>{if(l=requestAnimationFrame(ie),!D)return;const k=performance.now()*.001,W=ce===0?1/60:Math.min(k-ce,.1);if(ce=k,O!==b){const ye=O<b,le=W/(ye?y:L);Math.abs(O-b)<le?(O=b,O===0&&Q>0&&(F=Q,Q=0)):O+=ye?le:-le}A.uniforms.time.value=k,A.uniforms.isRainbowMode.value=O;const G=a.geometry.attributes.position.array,re=a.geometry.attributes.velocity.array;a.geometry.attributes.size.array,a.geometry.attributes.phase.array;const Y=a.geometry.attributes.lifetime.array,te=G.length/3,Ae=n.value.clientHeight,E=n.value.clientWidth,_=Ae/2;C%4===0&&F>0&&k*1e3>H&&(F=Math.max(0,F-200));const I=O>0&&Q>0?Q:F,q=e.PARTICLE_COUNT+I,se=1+2*O,X=Math.floor(q*se);if(c=Math.min(X,5e3),C%2===0){let ye=0;const xe=80,le=Math.min(te,5e3);for(let be=e.PARTICLE_COUNT;be<le;be++)if(be<c&&Y[be]>1){if(ye>=xe)break;Y[be]=Math.random();const Ie=be*3;G[Ie]=(Math.random()-.5)*E,G[Ie+1]=(Math.random()-.5)*Ae;const Le=Te();re[Ie]=Le.x,re[Ie+1]=Le.y,ye++}else be>=c&&Y[be]<=1&&(Y[be]=.95)}f.x*=e.MOUSE_VELOCITY_DAMPING,f.y*=e.MOUSE_VELOCITY_DAMPING,C++;const Pe=C%2===0,ve=Math.min(te,5e3);for(let ye=0;ye<ve;ye++){const xe=ye*3;if(Y[ye]>1)continue;const le=G[xe],be=G[xe+1];if(Pe){const Le=le-u.x,Me=be-u.y,Xe=Math.abs(Le),U=Math.abs(Me);if(Xe<=e.WIND_RADIUS&&U<=e.WIND_RADIUS){const Re=Le*Le+Me*Me;if(Re<e.WIND_RADIUS_SQUARED&&Re>0){const pe=Math.sqrt(Re),ge=(1-pe/e.WIND_RADIUS)*e.WIND_STRENGTH*e.WIND_FORCE_FACTOR/pe;re[xe]+=Le*ge+f.x*e.MOUSE_DRAG_FACTOR,re[xe+1]+=Me*ge+f.y*e.MOUSE_DRAG_FACTOR,re[xe]=Math.max(e.MIN_VELOCITY_X,Math.min(e.MAX_VELOCITY_X,re[xe])),re[xe+1]=Math.max(e.MIN_VELOCITY_Y,Math.min(e.MAX_VELOCITY_Y,re[xe+1]))}}}const Ie=1+2*O;if(re[xe]*=e.VELOCITY_DAMPING,re[xe+1]=re[xe+1]*e.VELOCITY_DAMPING+e.AVERAGE_UPWARD_SPEED*e.VELOCITY_RESTORATION*Ie,G[xe]+=re[xe],G[xe+1]+=re[xe+1],Y[ye]+=e.LIFETIME_INCREMENT,G[xe+1]>_+50||Y[ye]>1)if(ye<c){G[xe]=(Math.random()-.5)*E,G[xe+1]=(Math.random()-.5)*Ae,Y[ye]=0;const Le=Te();re[xe]=Le.x,re[xe+1]=Le.y}else Y[ye]=1.5}a.geometry.attributes.position.needsUpdate=!0,a.geometry.attributes.velocity.needsUpdate=!0,a.geometry.attributes.lifetime.needsUpdate=!0,o.render(r,s)};ie()},ze=j=>{if(!a||!n.value||a.geometry.attributes.position.array.length>=j*3)return;const he=n.value.clientWidth,we=n.value.clientHeight,N=a.geometry.attributes.position.array,oe=a.geometry.attributes.velocity.array,fe=a.geometry.attributes.size.array,ue=a.geometry.attributes.phase.array,ke=a.geometry.attributes.lifetime.array,A=N.length/3,R=new Float32Array(j*3),x=new Float32Array(j*3),ie=new Float32Array(j),k=new Float32Array(j),W=new Float32Array(j);R.set(N),x.set(oe),ie.set(fe),k.set(ue),W.set(ke);for(let G=A;G<j;G++){const re=G*3;R[re]=(Math.random()-.5)*he,R[re+1]=(Math.random()-.5)*we,R[re+2]=0;const Y=Te();x[re]=Y.x,x[re+1]=Y.y,x[re+2]=0,ie[G]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,k[G]=Math.random()*Math.PI*2,W[G]=1.5}a.geometry.setAttribute("position",new Lt(R,3)),a.geometry.setAttribute("velocity",new Lt(x,3)),a.geometry.setAttribute("size",new Lt(ie,1)),a.geometry.setAttribute("phase",new Lt(k,1)),a.geometry.setAttribute("lifetime",new Lt(W,1))},et=()=>{if(!n.value||!o||!s)return;const j=n.value.clientWidth,he=n.value.clientHeight;s.left=j/-2,s.right=j/2,s.top=he/2,s.bottom=he/-2,s.updateProjectionMatrix(),o.setSize(j,he)};return di(()=>{Ue(),window.addEventListener("resize",et,{passive:!0}),document.addEventListener("visibilitychange",ae)}),Gr(()=>{l&&cancelAnimationFrame(l),window.removeEventListener("resize",et),document.removeEventListener("visibilitychange",ae),h&&window.removeEventListener("mousemove",h),g&&window.removeEventListener("touchmove",g),p&&window.removeEventListener("touchend",p),v&&document.removeEventListener("mouseleave",v),m&&document.removeEventListener("mouseout",m),w&&window.removeEventListener("increase-particles",w),T&&window.removeEventListener("reset-particles",T),S&&window.removeEventListener("rainbow-mode",S),o&&(o.domElement&&(o.domElement.removeEventListener("webglcontextlost",V),o.domElement.removeEventListener("webglcontextrestored",Ee)),o.dispose(),n.value&&o.domElement&&n.value.contains(o.domElement)&&n.value.removeChild(o.domElement)),a&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())}),(j,he)=>(me(),_e("div",{ref_key:"container",ref:n,class:"ash-container"},[i.value?ot("",!0):(me(),_e("div",pb))],512))}},gb=Wr(mb,[["__scopeId","data-v-88947529"]]),_b={class:"font-sans flex flex-col min-h-screen bg-black relative app-container"},vb={class:"pt-0 flex flex-col space-y-16 md:space-y-64 relative z-10"},xb={__name:"App",setup(t){return(e,n)=>{const i=zc("router-view");return me(),_e("div",_b,[n[0]||(n[0]=$("div",{class:"gradient-bg"},null,-1)),He(gb),He(iv,{class:"fixed top-0 left-0 w-full h-14 md:h-20"}),$("div",vb,[He(i),He(rx)])])}}},Sb=Wr(xb,[["__scopeId","data-v-6db8d45d"]]),yb="modulepreload",Eb=function(t){return"/2025/"+t},dd={},Mb=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(n.map(c=>{if(c=Eb(c),c in dd)return;dd[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":yb,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},bb="/2025/assets/2025-Dbj42giJ.png",Tb={__name:"FlameText",props:{text:{type:String,default:"Ember to Stars"},fontSize:{type:Number,default:60}},setup(t){const e=sn(null),n=sn(!0);let i=null;return di(()=>{i=new IntersectionObserver(r=>{r.forEach(s=>{n.value=s.isIntersecting})},{threshold:.1}),e.value&&i.observe(e.value)}),Gr(()=>{i&&e.value&&i.unobserve(e.value)}),(r,s)=>(me(),_e("div",{ref_key:"fireTextRef",ref:e,class:Cn(["fire-text",{paused:!n.value}]),style:Ri({fontSize:t.fontSize+"px"})},lt(t.text),7))}},wb=Wr(Tb,[["__scopeId","data-v-08d75d46"]]),Ab={class:"min-h-screen flex items-center justify-center text-white relative"},Rb={class:"flex flex-col items-center gap-y-4 relative z-10"},Cb={class:"text-center"},Pb={class:"text-center px-4 py-8"},Lb={class:"flow flow-col space-y-8 select-none"},Db={__name:"Teaser2025",setup(t){const e=sn(typeof window<"u"?window.innerWidth:1024),n=sn(!1),i=st(()=>e.value<640?"50vw":"320px"),r=()=>{window.dispatchEvent(new CustomEvent("increase-particles")),n.value=!0,setTimeout(()=>{n.value=!1},600)},s=()=>{e.value=window.innerWidth};di(()=>{window.addEventListener("resize",s)}),Gr(()=>{window.removeEventListener("resize",s)});const o=()=>{const c={title:"Let'Swift 2025",description:"Let'Swift 2025 Conference - iOS Swift Developer Conference",location:"세종대학교 컨벤션센터, 서울특별시 광진구",startDate:"20251124T100000",endDate:"20251124T180000",timestamp:new Date().toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"};return`BEGIN:VCALENDAR
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
DTSTART;TZID=Asia/Seoul:${c.startDate}
DTEND;TZID=Asia/Seoul:${c.endDate}
DTSTAMP:${c.timestamp}
SUMMARY:${c.title}
DESCRIPTION:${c.description}
LOCATION:${c.location}
URL:https://letswift.kr/2025
CATEGORIES:CONFERENCE,TECHNOLOGY
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`},a=(c,u)=>{const f=new Blob([c],{type:"text/calendar;charset=utf-8"}),d=document.createElement("a");d.href=window.URL.createObjectURL(f),d.download=u,document.body.appendChild(d),d.click(),document.body.removeChild(d),window.URL.revokeObjectURL(d.href)},l=()=>{try{const c=o();a(c,"letswift-2025.ics")}catch(c){console.error("Failed to generate calendar file:",c),window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Let%27Swift%202025&dates=20251124T010000Z/20251124T090000Z&details=Let%27Swift%202025%20Conference&location=%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B4%91%EA%B0%9C%ED%86%A0%EA%B4%80","_blank")}};return(c,u)=>(me(),_e("div",Ab,[$("div",Rb,[$("div",Cb,[$("img",{src:bb,alt:"Let'Swift 2025",style:Ri({width:i.value,height:"auto"}),class:Cn(["select-none cursor-pointer",{flash:n.value}]),onClick:r},null,6)]),$("div",Pb,[$("div",Lb,[u[0]||(u[0]=$("h1",{class:"text-5xl md:text-7xl leading-none font-black tracking-normal"}," Let'Swift 2025 ",-1)),He(wb,{text:"Ember to Stars",fontSize:e.value<768?38:52},null,8,["fontSize"])]),u[1]||(u[1]=$("div",{class:"mt-8 text-3xl font-medium space-y-2"},[$("p",{class:"text-2xl md:text-2xl font-bold text-zinc-200"},"2025.11.24 월요일"),$("p",{class:"text-xl md:text-2xl font-bold text-zinc-300"},"세종대학교 컨벤션센터")],-1)),$("div",{class:"mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center py-6"},[$("button",{onClick:l,class:"px-6 py-3 rounded-full cursor-pointer bg-red-500/40 border border-red-400/60 text-white text-lg font-bold hover:bg-red-500/50 hover:border-red-400/80 transition-all duration-200 active:bg-red-500/60 select-none","aria-label":"Let'Swift 2025 행사를 캘린더에 추가"}," 캘린더에 추가 ")])])])]))}},Ib=Wr(Db,[["__scopeId","data-v-5d347048"]]),Ub={class:"flex justify-center"},Nb={class:"w-full px-8 xl:px-0 max-w-[1280px] flex justify-center"},Ob={class:"inline-flex flex-col items-center"},Fb={class:"relative z-10 font-black text-4xl md:text-5xl text-white"},Bb={class:"flex items-center gap-1 -mt-3",style:{transform:"skewX(-20deg)","transform-origin":"bottom right"}},kb={class:"relative h-4 px-4 ml-6 bg-orange-600"},zb={class:"font-black text-4xl md:text-5xl invisible"},ou={__name:"SectionHeader",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(me(),_e("div",Ub,[$("div",Nb,[$("div",Ob,[$("h3",Fb,lt(t.title),1),$("div",Bb,[$("div",kb,[$("div",zb,lt(t.title),1)]),n[0]||(n[0]=$("div",{class:"flex gap-1"},[$("div",{class:"w-1 h-4 bg-orange-600"}),$("div",{class:"w-1 h-4 bg-orange-600"}),$("div",{class:"w-1 h-4 bg-orange-600"})],-1))])])])]))}};function Up(t,e){return function(){return t.apply(e,arguments)}}const{toString:Hb}=Object.prototype,{getPrototypeOf:au}=Object,{iterator:pa,toStringTag:Np}=Symbol,ma=(t=>e=>{const n=Hb.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),In=t=>(t=t.toLowerCase(),e=>ma(e)===t),ga=t=>e=>typeof e===t,{isArray:qr}=Array,Ls=ga("undefined");function Vb(t){return t!==null&&!Ls(t)&&t.constructor!==null&&!Ls(t.constructor)&&nn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Op=In("ArrayBuffer");function Gb(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Op(t.buffer),e}const Wb=ga("string"),nn=ga("function"),Fp=ga("number"),_a=t=>t!==null&&typeof t=="object",Xb=t=>t===!0||t===!1,Lo=t=>{if(ma(t)!=="object")return!1;const e=au(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Np in t)&&!(pa in t)},$b=In("Date"),qb=In("File"),jb=In("Blob"),Yb=In("FileList"),Kb=t=>_a(t)&&nn(t.pipe),Zb=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||nn(t.append)&&((e=ma(t))==="formdata"||e==="object"&&nn(t.toString)&&t.toString()==="[object FormData]"))},Jb=In("URLSearchParams"),[Qb,eT,tT,nT]=["ReadableStream","Request","Response","Headers"].map(In),iT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zs(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),qr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Bp(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kp=t=>!Ls(t)&&t!==tr;function Ec(){const{caseless:t}=kp(this)&&this||{},e={},n=(i,r)=>{const s=t&&Bp(e,r)||r;Lo(e[s])&&Lo(i)?e[s]=Ec(e[s],i):Lo(i)?e[s]=Ec({},i):qr(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&zs(arguments[i],n);return e}const rT=(t,e,n,{allOwnKeys:i}={})=>(zs(e,(r,s)=>{n&&nn(r)?t[s]=Up(r,n):t[s]=r},{allOwnKeys:i}),t),sT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),oT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},aT=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&au(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},lT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},cT=t=>{if(!t)return null;if(qr(t))return t;let e=t.length;if(!Fp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},uT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&au(Uint8Array)),fT=(t,e)=>{const i=(t&&t[pa]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},dT=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},hT=In("HTMLFormElement"),pT=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),hd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),mT=In("RegExp"),zp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};zs(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},gT=t=>{zp(t,(e,n)=>{if(nn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(nn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_T=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return qr(t)?i(t):i(String(t).split(e)),n},vT=()=>{},xT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function ST(t){return!!(t&&nn(t.append)&&t[Np]==="FormData"&&t[pa])}const yT=t=>{const e=new Array(10),n=(i,r)=>{if(_a(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=qr(i)?[]:{};return zs(i,(o,a)=>{const l=n(o,r+1);!Ls(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},ET=In("AsyncFunction"),MT=t=>t&&(_a(t)||nn(t))&&nn(t.then)&&nn(t.catch),Hp=((t,e)=>t?setImmediate:e?((n,i)=>(tr.addEventListener("message",({source:r,data:s})=>{r===tr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),tr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",nn(tr.postMessage)),bT=typeof queueMicrotask<"u"?queueMicrotask.bind(tr):typeof process<"u"&&process.nextTick||Hp,TT=t=>t!=null&&nn(t[pa]),ne={isArray:qr,isArrayBuffer:Op,isBuffer:Vb,isFormData:Zb,isArrayBufferView:Gb,isString:Wb,isNumber:Fp,isBoolean:Xb,isObject:_a,isPlainObject:Lo,isReadableStream:Qb,isRequest:eT,isResponse:tT,isHeaders:nT,isUndefined:Ls,isDate:$b,isFile:qb,isBlob:jb,isRegExp:mT,isFunction:nn,isStream:Kb,isURLSearchParams:Jb,isTypedArray:uT,isFileList:Yb,forEach:zs,merge:Ec,extend:rT,trim:iT,stripBOM:sT,inherits:oT,toFlatObject:aT,kindOf:ma,kindOfTest:In,endsWith:lT,toArray:cT,forEachEntry:fT,matchAll:dT,isHTMLForm:hT,hasOwnProperty:hd,hasOwnProp:hd,reduceDescriptors:zp,freezeMethods:gT,toObjectSet:_T,toCamelCase:pT,noop:vT,toFiniteNumber:xT,findKey:Bp,global:tr,isContextDefined:kp,isSpecCompliantForm:ST,toJSONObject:yT,isAsyncFn:ET,isThenable:MT,setImmediate:Hp,asap:bT,isIterable:TT};function Ke(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}ne.inherits(Ke,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.status}}});const Vp=Ke.prototype,Gp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Gp[t]={value:t}});Object.defineProperties(Ke,Gp);Object.defineProperty(Vp,"isAxiosError",{value:!0});Ke.from=(t,e,n,i,r,s)=>{const o=Object.create(Vp);return ne.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ke.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const wT=null;function Mc(t){return ne.isPlainObject(t)||ne.isArray(t)}function Wp(t){return ne.endsWith(t,"[]")?t.slice(0,-2):t}function pd(t,e,n){return t?t.concat(e).map(function(r,s){return r=Wp(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function AT(t){return ne.isArray(t)&&!t.some(Mc)}const RT=ne.toFlatObject(ne,{},null,function(e){return/^is[A-Z]/.test(e)});function va(t,e,n){if(!ne.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=ne.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!ne.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(e);if(!ne.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(ne.isDate(g))return g.toISOString();if(!l&&ne.isBlob(g))throw new Ke("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(g)||ne.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,m){let p=g;if(g&&!m&&typeof g=="object"){if(ne.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(ne.isArray(g)&&AT(g)||(ne.isFileList(g)||ne.endsWith(v,"[]"))&&(p=ne.toArray(g)))return v=Wp(v),p.forEach(function(T,S){!(ne.isUndefined(T)||T===null)&&e.append(o===!0?pd([v],S,s):o===null?v:v+"[]",c(T))}),!1}return Mc(g)?!0:(e.append(pd(m,v,s),c(g)),!1)}const f=[],d=Object.assign(RT,{defaultVisitor:u,convertValue:c,isVisitable:Mc});function h(g,v){if(!ne.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),ne.forEach(g,function(p,w){(!(ne.isUndefined(p)||p===null)&&r.call(e,p,ne.isString(w)?w.trim():w,v,d))===!0&&h(p,v?v.concat(w):[w])}),f.pop()}}if(!ne.isObject(t))throw new TypeError("data must be an object");return h(t),e}function md(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function lu(t,e){this._pairs=[],t&&va(t,this,e)}const Xp=lu.prototype;Xp.append=function(e,n){this._pairs.push([e,n])};Xp.toString=function(e){const n=e?function(i){return e.call(this,i,md)}:md;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function CT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function $p(t,e,n){if(!e)return t;const i=n&&n.encode||CT;ne.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=ne.isURLSearchParams(e)?e.toString():new lu(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class gd{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ne.forEach(this.handlers,function(i){i!==null&&e(i)})}}const qp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},PT=typeof URLSearchParams<"u"?URLSearchParams:lu,LT=typeof FormData<"u"?FormData:null,DT=typeof Blob<"u"?Blob:null,IT={isBrowser:!0,classes:{URLSearchParams:PT,FormData:LT,Blob:DT},protocols:["http","https","file","blob","url","data"]},cu=typeof window<"u"&&typeof document<"u",bc=typeof navigator=="object"&&navigator||void 0,UT=cu&&(!bc||["ReactNative","NativeScript","NS"].indexOf(bc.product)<0),NT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",OT=cu&&window.location.href||"http://localhost",FT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:cu,hasStandardBrowserEnv:UT,hasStandardBrowserWebWorkerEnv:NT,navigator:bc,origin:OT},Symbol.toStringTag,{value:"Module"})),Vt={...FT,...IT};function BT(t,e){return va(t,new Vt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Vt.isNode&&ne.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function kT(t){return ne.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function zT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function jp(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&ne.isArray(r)?r.length:o,l?(ne.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!ne.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&ne.isArray(r[o])&&(r[o]=zT(r[o])),!a)}if(ne.isFormData(t)&&ne.isFunction(t.entries)){const n={};return ne.forEachEntry(t,(i,r)=>{e(kT(i),r,n,0)}),n}return null}function HT(t,e,n){if(ne.isString(t))try{return(e||JSON.parse)(t),ne.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Hs={transitional:qp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=ne.isObject(e);if(s&&ne.isHTMLForm(e)&&(e=new FormData(e)),ne.isFormData(e))return r?JSON.stringify(jp(e)):e;if(ne.isArrayBuffer(e)||ne.isBuffer(e)||ne.isStream(e)||ne.isFile(e)||ne.isBlob(e)||ne.isReadableStream(e))return e;if(ne.isArrayBufferView(e))return e.buffer;if(ne.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return BT(e,this.formSerializer).toString();if((a=ne.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return va(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),HT(e)):e}],transformResponse:[function(e){const n=this.transitional||Hs.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(ne.isResponse(e)||ne.isReadableStream(e))return e;if(e&&ne.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ke.from(a,Ke.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vt.classes.FormData,Blob:Vt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ne.forEach(["delete","get","head","post","put","patch"],t=>{Hs.headers[t]={}});const VT=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),GT=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&VT[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},_d=Symbol("internals");function ss(t){return t&&String(t).trim().toLowerCase()}function Do(t){return t===!1||t==null?t:ne.isArray(t)?t.map(Do):String(t)}function WT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const XT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ml(t,e,n,i,r){if(ne.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!ne.isString(e)){if(ne.isString(i))return e.indexOf(i)!==-1;if(ne.isRegExp(i))return i.test(e)}}function $T(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function qT(t,e){const n=ne.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let rn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=ss(l);if(!u)throw new Error("header name must be a non-empty string");const f=ne.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Do(a))}const o=(a,l)=>ne.forEach(a,(c,u)=>s(c,u,l));if(ne.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(ne.isString(e)&&(e=e.trim())&&!XT(e))o(GT(e),n);else if(ne.isObject(e)&&ne.isIterable(e)){let a={},l,c;for(const u of e){if(!ne.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?ne.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=ss(e),e){const i=ne.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return WT(r);if(ne.isFunction(n))return n.call(this,r,i);if(ne.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ss(e),e){const i=ne.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ml(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=ss(o),o){const a=ne.findKey(i,o);a&&(!n||ml(i,i[a],a,n))&&(delete i[a],r=!0)}}return ne.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||ml(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return ne.forEach(this,(r,s)=>{const o=ne.findKey(i,s);if(o){n[o]=Do(r),delete n[s];return}const a=e?$T(s):String(s).trim();a!==s&&delete n[s],n[a]=Do(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return ne.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&ne.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[_d]=this[_d]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=ss(o);i[a]||(qT(r,o),i[a]=!0)}return ne.isArray(e)?e.forEach(s):s(e),this}};rn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.reduceDescriptors(rn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});ne.freezeMethods(rn);function gl(t,e){const n=this||Hs,i=e||n,r=rn.from(i.headers);let s=i.data;return ne.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Yp(t){return!!(t&&t.__CANCEL__)}function jr(t,e,n){Ke.call(this,t??"canceled",Ke.ERR_CANCELED,e,n),this.name="CanceledError"}ne.inherits(jr,Ke,{__CANCEL__:!0});function Kp(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ke("Request failed with status code "+n.status,[Ke.ERR_BAD_REQUEST,Ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function jT(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function YT(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function KT(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const qo=(t,e,n=3)=>{let i=0;const r=YT(50,250);return KT(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},vd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},xd=t=>(...e)=>ne.asap(()=>t(...e)),ZT=Vt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Vt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Vt.origin),Vt.navigator&&/(msie|trident)/i.test(Vt.navigator.userAgent)):()=>!0,JT=Vt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];ne.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ne.isString(i)&&o.push("path="+i),ne.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QT(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ew(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Zp(t,e,n){let i=!QT(e);return t&&(i||n==!1)?ew(t,e):e}const Sd=t=>t instanceof rn?{...t}:t;function ar(t,e){e=e||{};const n={};function i(c,u,f,d){return ne.isPlainObject(c)&&ne.isPlainObject(u)?ne.merge.call({caseless:d},c,u):ne.isPlainObject(u)?ne.merge({},u):ne.isArray(u)?u.slice():u}function r(c,u,f,d){if(ne.isUndefined(u)){if(!ne.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!ne.isUndefined(u))return i(void 0,u)}function o(c,u){if(ne.isUndefined(u)){if(!ne.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Sd(c),Sd(u),f,!0)};return ne.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);ne.isUndefined(d)&&f!==a||(n[u]=d)}),n}const Jp=t=>{const e=ar({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=rn.from(o),e.url=$p(Zp(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(ne.isFormData(n)){if(Vt.hasStandardBrowserEnv||Vt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Vt.hasStandardBrowserEnv&&(i&&ne.isFunction(i)&&(i=i(e)),i||i!==!1&&ZT(e.url))){const c=r&&s&&JT.read(s);c&&o.set(r,c)}return e},tw=typeof XMLHttpRequest<"u",nw=tw&&function(t){return new Promise(function(n,i){const r=Jp(t);let s=r.data;const o=rn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,h,g;function v(){h&&h(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function p(){if(!m)return;const T=rn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),D={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:T,config:t,request:m};Kp(function(P){n(P),v()},function(P){i(P),v()},D),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new Ke("Request aborted",Ke.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new Ke("Network Error",Ke.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let S=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const D=r.transitional||qp;r.timeoutErrorMessage&&(S=r.timeoutErrorMessage),i(new Ke(S,D.clarifyTimeoutError?Ke.ETIMEDOUT:Ke.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&ne.forEach(o.toJSON(),function(S,D){m.setRequestHeader(D,S)}),ne.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=qo(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=qo(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(r.cancelToken||r.signal)&&(u=T=>{m&&(i(!T||T.type?new jr(null,t,m):T),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const w=jT(r.url);if(w&&Vt.protocols.indexOf(w)===-1){i(new Ke("Unsupported protocol "+w+":",Ke.ERR_BAD_REQUEST,t));return}m.send(s||null)})},iw=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ke?u:new jr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Ke(`timeout ${e} of ms exceeded`,Ke.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>ne.asap(a),l}},rw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},sw=async function*(t,e){for await(const n of ow(t))yield*rw(n,e)},ow=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},yd=(t,e,n,i)=>{const r=sw(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},xa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Qp=xa&&typeof ReadableStream=="function",aw=xa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),em=(t,...e)=>{try{return!!t(...e)}catch{return!1}},lw=Qp&&em(()=>{let t=!1;const e=new Request(Vt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ed=64*1024,Tc=Qp&&em(()=>ne.isReadableStream(new Response("").body)),jo={stream:Tc&&(t=>t.body)};xa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!jo[e]&&(jo[e]=ne.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Ke(`Response type '${e}' is not supported`,Ke.ERR_NOT_SUPPORT,i)})})})(new Response);const cw=async t=>{if(t==null)return 0;if(ne.isBlob(t))return t.size;if(ne.isSpecCompliantForm(t))return(await new Request(Vt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(ne.isArrayBufferView(t)||ne.isArrayBuffer(t))return t.byteLength;if(ne.isURLSearchParams(t)&&(t=t+""),ne.isString(t))return(await aw(t)).byteLength},uw=async(t,e)=>{const n=ne.toFiniteNumber(t.getContentLength());return n??cw(e)},fw=xa&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Jp(t);c=c?(c+"").toLowerCase():"text";let h=iw([r,s&&s.toAbortSignal()],o),g;const v=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let m;try{if(l&&lw&&n!=="get"&&n!=="head"&&(m=await uw(u,i))!==0){let D=new Request(e,{method:"POST",body:i,duplex:"half"}),C;if(ne.isFormData(i)&&(C=D.headers.get("content-type"))&&u.setContentType(C),D.body){const[P,O]=vd(m,qo(xd(l)));i=yd(D.body,Ed,P,O)}}ne.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(e,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let w=await fetch(g);const T=Tc&&(c==="stream"||c==="response");if(Tc&&(a||T&&v)){const D={};["status","statusText","headers"].forEach(b=>{D[b]=w[b]});const C=ne.toFiniteNumber(w.headers.get("content-length")),[P,O]=a&&vd(C,qo(xd(a),!0))||[];w=new Response(yd(w.body,Ed,P,()=>{O&&O(),v&&v()}),D)}c=c||"text";let S=await jo[ne.findKey(jo,c)||"text"](w,t);return!T&&v&&v(),await new Promise((D,C)=>{Kp(D,C,{data:S,headers:rn.from(w.headers),status:w.status,statusText:w.statusText,config:t,request:g})})}catch(p){throw v&&v(),p&&p.name==="TypeError"&&/Load failed|fetch/i.test(p.message)?Object.assign(new Ke("Network Error",Ke.ERR_NETWORK,t,g),{cause:p.cause||p}):Ke.from(p,p&&p.code,t,g)}}),wc={http:wT,xhr:nw,fetch:fw};ne.forEach(wc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Md=t=>`- ${t}`,dw=t=>ne.isFunction(t)||t===null||t===!1,tm={getAdapter:t=>{t=ne.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!dw(n)&&(i=wc[(o=String(n)).toLowerCase()],i===void 0))throw new Ke(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Md).join(`
`):" "+Md(s[0]):"as no adapter specified";throw new Ke("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:wc};function _l(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new jr(null,t)}function bd(t){return _l(t),t.headers=rn.from(t.headers),t.data=gl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),tm.getAdapter(t.adapter||Hs.adapter)(t).then(function(i){return _l(t),i.data=gl.call(t,t.transformResponse,i),i.headers=rn.from(i.headers),i},function(i){return Yp(i)||(_l(t),i&&i.response&&(i.response.data=gl.call(t,t.transformResponse,i.response),i.response.headers=rn.from(i.response.headers))),Promise.reject(i)})}const nm="1.9.0",Sa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Sa[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Td={};Sa.transitional=function(e,n,i){function r(s,o){return"[Axios v"+nm+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Ke(r(o," has been removed"+(n?" in "+n:"")),Ke.ERR_DEPRECATED);return n&&!Td[o]&&(Td[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Sa.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function hw(t,e,n){if(typeof t!="object")throw new Ke("options must be an object",Ke.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ke("option "+s+" must be "+l,Ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ke("Unknown option "+s,Ke.ERR_BAD_OPTION)}}const Io={assertOptions:hw,validators:Sa},Nn=Io.validators;let rr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new gd,response:new gd}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ar(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Io.assertOptions(i,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),r!=null&&(ne.isFunction(r)?n.paramsSerializer={serialize:r}:Io.assertOptions(r,{encode:Nn.function,serialize:Nn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Io.assertOptions(n,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&ne.merge(s.common,s[n.method]);s&&ne.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=rn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[bd.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(f=0;f<d;){const g=a[f++],v=a[f++];try{h=g(h)}catch(m){v.call(this,m);break}}try{u=bd.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=ar(this.defaults,e);const n=Zp(e.baseURL,e.url,e.allowAbsoluteUrls);return $p(n,e.params,e.paramsSerializer)}};ne.forEach(["delete","get","head","options"],function(e){rr.prototype[e]=function(n,i){return this.request(ar(i||{},{method:e,url:n,data:(i||{}).data}))}});ne.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(ar(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}rr.prototype[e]=n(),rr.prototype[e+"Form"]=n(!0)});let pw=class im{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new jr(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new im(function(r){e=r}),cancel:e}}};function mw(t){return function(n){return t.apply(null,n)}}function gw(t){return ne.isObject(t)&&t.isAxiosError===!0}const Ac={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ac).forEach(([t,e])=>{Ac[e]=t});function rm(t){const e=new rr(t),n=Up(rr.prototype.request,e);return ne.extend(n,rr.prototype,e,{allOwnKeys:!0}),ne.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return rm(ar(t,r))},n}const Tt=rm(Hs);Tt.Axios=rr;Tt.CanceledError=jr;Tt.CancelToken=pw;Tt.isCancel=Yp;Tt.VERSION=nm;Tt.toFormData=va;Tt.AxiosError=Ke;Tt.Cancel=Tt.CanceledError;Tt.all=function(e){return Promise.all(e)};Tt.spread=mw;Tt.isAxiosError=gw;Tt.mergeConfig=ar;Tt.AxiosHeaders=rn;Tt.formToJSON=t=>jp(ne.isHTMLForm(t)?new FormData(t):t);Tt.getAdapter=tm.getAdapter;Tt.HttpStatusCode=Ac;Tt.default=Tt;const{Axios:d2,AxiosError:h2,CanceledError:p2,isCancel:m2,CancelToken:g2,VERSION:_2,all:v2,Cancel:x2,isAxiosError:S2,spread:y2,toFormData:E2,AxiosHeaders:M2,HttpStatusCode:b2,formToJSON:T2,getAdapter:w2,mergeConfig:A2}=Tt,_w={class:"flex justify-center"},vw={class:"px-8 xl:px-0 max-w-[1280px] space-y-48"},xw={class:"space-y-32"},Sw={key:0,class:"flex flex-col gap-y-12"},yw=["href"],Ew=["src"],Mw={key:1,class:"flex flex-col gap-y-12"},bw=["href"],Tw=["src"],ww={key:2,class:"flex flex-col gap-y-12"},Aw=["href"],Rw=["src"],Cw={key:0,class:"flex flex-col gap-y-12"},Pw={class:"grid sm:grid-cols-2 md:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16"},Lw={class:"flex flex-col gap-x-3 gap-y-6 items-center"},Dw=["src"],Iw={class:"flex flex-col gap-y-2"},Uw={key:0,class:"text-zinc-400 text-sm font-semibold"},Nw={class:"flex gap-x-4 gap-y-4 justify-end pointer-cursor"},Ow=["href"],Fw=["href"],Bw=["href"],kw=["href"],zw=["href"],Hw=["href"],Vw=["href"],Gw=["href"],Ww=["href"],Xw=["href"],$w=["href"],qw={__name:"Sponsors",setup(t){const e=sn([]),n=sn(null);let i=null;const r=st(()=>e.value.filter(d=>d.tier==="Platinum"&&d.should_display===!0)),s=st(()=>e.value.filter(d=>d.tier==="Gold"&&d.should_display===!0)),o=st(()=>e.value.filter(d=>d.tier==="Silver"&&d.should_display===!0)),a=st(()=>e.value.filter(d=>d.tier==="Individual"&&d.should_display===!0));di(()=>{l(),i=new IntersectionObserver(d=>{d.forEach(h=>{h.isIntersecting?window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!0}})):window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!1}}))})},{threshold:.3}),n.value&&i.observe(n.value)}),Gr(()=>{i&&n.value&&i.unobserve(n.value)});const l=async()=>{try{const h=await Tt.get("/2025/assets/json/sponsors.json");e.value=h.data}catch(d){console.error(d)}},c=d=>`/2025/assets/sponsors/${d}`,u=d=>["from-zinc-200 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400"][d],f=()=>{window.location.href="mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"};return(d,h)=>(me(),_e("div",{ref_key:"sponsorsSection",ref:n,class:"space-y-16 py-36 md:scroll-mt-28"},[He(ou,{title:"행사 후원"}),$("div",_w,[$("div",vw,[$("div",xw,[r.value.length!==0?(me(),_e("div",Sw,[h[0]||(h[0]=$("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-slate-100 to-slate-400"},"플래티넘",-1)),(me(!0),_e(ht,null,Nt(r.value,g=>(me(),_e("div",{key:g.id,class:"flex flex-col items-center space-y-4 text-white"},[$("a",{href:g.social.web,target:"_blank",class:"pointer-cursor"},[$("img",{src:c(g.image_name),loading:"lazy",class:"w-full md:h-24 object-contain"},null,8,Ew)],8,yw)]))),128))])):ot("",!0),s.value.length!==0?(me(),_e("div",Mw,[h[1]||(h[1]=$("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-amber-100 to-amber-400"},"골드",-1)),(me(!0),_e(ht,null,Nt(s.value,g=>(me(),_e("div",{key:g.id,class:"flex flex-col items-center space-y-4 text-white"},[$("a",{href:g.social.web,target:"_blank",class:"pointer-cursor w-3/4"},[$("img",{src:c(g.image_name),loading:"lazy",class:"w-full md:h-24 object-contain"},null,8,Tw)],8,bw)]))),128))])):ot("",!0),o.value.length!==0?(me(),_e("div",ww,[h[2]||(h[2]=$("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-zinc-300 to-zinc-600"},"실버",-1)),(me(!0),_e(ht,null,Nt(o.value,g=>(me(),_e("div",{key:g.id,class:"flex flex-col items-center space-y-4 text-white"},[$("a",{href:g.social.web,target:"_blank",class:"pointer-cursor w-2/3"},[$("img",{src:c(g.image_name),loading:"lazy",class:"w-full sm:h-24 object-contain"},null,8,Rw)],8,Aw)]))),128))])):ot("",!0)]),a.value.length!==0?(me(),_e("div",Cw,[h[3]||(h[3]=$("div",{class:"font-bold text-lg md:text-xl text-rainbow"},"개인 후원",-1)),$("div",Pw,[(me(!0),_e(ht,null,Nt(a.value,(g,v)=>(me(),_e("div",{key:g.id,class:"items-center text-white"},[$("div",Lw,[$("div",null,[$("img",{src:c(g.image_name),loading:"lazy",class:"bg-zinc-500 rounded-full w-24 h-24 object-contain"},null,8,Dw)]),$("div",Iw,[$("div",{class:Cn(["font-bold text-lg bg-linear-to-br bg-clip-text text-transparent",u(v)])},lt(g.name),3),g.description?(me(),_e("div",Uw,lt(g.description),1)):ot("",!0)]),$("div",Nw,[g.social.email?(me(),_e("a",{key:0,href:`mailto:${g.social.email}`,target:"_blank"},[He(Qe(ws),{fill:"gray",width:"16",height:"16"})],8,Ow)):ot("",!0),g.social.web?(me(),_e("a",{key:1,href:g.social.web,target:"_blank"},[He(Qe(ws),{fill:"gray",width:"16",height:"16"})],8,Fw)):ot("",!0),g.social.linkedin?(me(),_e("a",{key:2,href:g.social.linkedin,target:"_blank"},[He(Qe(jc),{fill:"gray",width:"16",height:"16"})],8,Bw)):ot("",!0),g.social.instagram?(me(),_e("a",{key:3,href:g.social.instagram,target:"_blank"},[He(Qe(qc),{fill:"gray",width:"16",height:"16"})],8,kw)):ot("",!0),g.social.facebook?(me(),_e("a",{key:4,href:g.social.facebook,target:"_blank"},[He(Qe(Qh),{fill:"gray",width:"16",height:"16"})],8,zw)):ot("",!0),g.social.github?(me(),_e("a",{key:5,href:g.social.github,target:"_blank"},[He(Qe($c),{fill:"gray",width:"16",height:"16"})],8,Hw)):ot("",!0),g.social.youtube?(me(),_e("a",{key:6,href:g.social.youtube,target:"_blank"},[He(Qe(Kc),{fill:"gray",width:"16",height:"16"})],8,Vw)):ot("",!0),g.social.x?(me(),_e("a",{key:7,href:g.social.x,target:"_blank"},[He(Qe(Yc),{fill:"gray",width:"16",height:"16"})],8,Gw)):ot("",!0),g.social.mastodon?(me(),_e("a",{key:8,href:g.social.mastodon,target:"_blank"},[He(Qe(ep),{fill:"gray",width:"16",height:"16"})],8,Ww)):ot("",!0),g.social.medium?(me(),_e("a",{key:9,href:g.social.medium,target:"_blank"},[He(Qe(tp),{fill:"gray",width:"16",height:"16"})],8,Xw)):ot("",!0),g.social.thread?(me(),_e("a",{key:10,href:g.social.thread,target:"_blank"},[He(Qe(np),{fill:"gray",width:"16",height:"16"})],8,$w)):ot("",!0)])])]))),128))])])):ot("",!0),$("button",{onClick:f,class:"px-6 py-3 rounded-full cursor-pointer bg-themeMain/40 border border-themeMain/60 text-white text-lg font-bold hover:bg-themeMain/50 hover:border-themeMain/80 transition-all duration-200 active:bg-themeMain/60 select-none","aria-label":"Let'Swift 2025 후원 문의하기"}," 후원 문의 ")])])],512))}},jw={class:"space-y-12 py-16"},Yw={class:"flex justify-center"},Kw={class:"px-8 xl:px-0 max-w-[1280px] flex flex-col gap-y-16 md:gap-y-24"},Zw={class:"grid grid-cols-1 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-16"},Jw=["href"],Qw=["src"],eA={class:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 justify-center"},tA=["src"],nA={__name:"SponsorsMini",setup(t){const e=sn([]),n=st(()=>e.value.filter(a=>a.tier!=="Individual"&&a.should_display===!0)),i=st(()=>e.value.filter(a=>a.tier==="Individual"&&a.should_display===!0));di(()=>{r()});const r=async()=>{try{const l=await Tt.get("/2025/assets/json/sponsors.json");e.value=l.data}catch(a){console.error(a)}},s=a=>`/2025/assets/sponsors/${a}`,o=a=>["from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400"][a];return(a,l)=>(me(),_e("div",jw,[l[0]||(l[0]=$("h3",{class:"font-bold text-lg text-rainbow"},"행사 후원",-1)),$("div",Yw,[$("div",Kw,[$("div",Zw,[(me(!0),_e(ht,null,Nt(n.value,c=>(me(),_e("div",{key:c.id,class:"flex flex-col items-center text-white"},[$("a",{href:c.social.web,target:"_blank",class:"pointer-cursor"},[$("img",{src:s(c.image_name),loading:"lazy",class:"h-12 lg:h-16 object-contain"},null,8,Qw)],8,Jw)]))),128))]),$("div",eA,[(me(!0),_e(ht,null,Nt(i.value,(c,u)=>(me(),_e("div",{key:c.id,class:"flex flex-col gap-y-4 items-center text-white"},[$("img",{src:s(c.image_name),loading:"lazy",class:"bg-zinc-500 rounded-full w-16 h-16 object-contain"},null,8,tA),$("span",{class:Cn(["font-black font-mono text-xs md:text-sm bg-linear-to-br bg-clip-text text-transparent",o(u)])},lt(c.name),3)]))),128))])])])]))}},iA=JSON.parse('[{"id":"0","name":"입장","name_en":"Entry","type":"entry","track":"트랙 A","track_en":"Track A","venue":"","venue_en":" ","speakers":[],"start_time":"2025-11-24T09:20:00","duration":2400,"end_time":"2025-11-24T10:00:00","keynote_url":"","video_url":"","level":""},{"id":"1","name":"오프닝","name_en":"Opening","type":"opening","track":"트랙 A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[],"start_time":"2025-11-24T10:00:00","duration":1200,"end_time":"2025-11-24T10:20:00","keynote_url":"","video_url":"","level":""},{"id":"2","name":"쉬는 시간","name_en":"Recess","type":"recess","track":"","track_en":"","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T10:20:00","duration":600,"end_time":"2025-11-24T10:30:00","keynote_url":"","video_url":"","level":""},{"id":"3","name":"AI가 코딩하는데, 퇴근은 왜 그대로일까?","name_en":"AI가 코딩하는데, 퇴근은 왜 그대로일까?","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"6","name":"송영모","name_en":"","nickname":"","image_name":"youngmo_song.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/youngmo_song.jpeg","affiliation":"강남언니","affiliation_en":"","description":"개발자이자, software 제품를 만드는 사람로서\\n유저에게 좋은 가치를 제공하려 노력합니다.","description_en":"","social":{"web":"","email":"","github":"https://github.com/annapo99","linkedin":"https://www.linkedin.com/in/annapo923","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T10:30:00","duration":1200,"end_time":"2025-11-24T10:50:00","keynote_url":"","video_url":"","level":"medium"},{"id":"4","name":"AI 친화적 코드베이스 - AI는 왜 내 코드에서만 해맬까?","name_en":"AI 친화적 코드베이스 - AI는 왜 내 코드에서만 해맬까?","type":"presentation","track":"트랙 B","track_en":"Track B","venue":"C홀","venue_en":"Hall C","speakers":[{"id":"1","name":"박건우","name_en":"","nickname":"","image_name":"geonwoo_park.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/geonwoo_park.jpeg","affiliation":"스포카","affiliation_en":"","description":"좋은 제품을 위한 단순한 도구를\\n탐구하는 메이커입니다.","description_en":"","social":{"web":"","email":"rjsdnqkr0@gmail.com","github":"https://github.com/gunoooo","linkedin":"","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T10:30:00","duration":2400,"end_time":"2025-11-24T11:10:00","keynote_url":"","video_url":"","level":"medium"},{"id":"5","name":"Home, Home, Sweet Home - HomeKit으로 공간을 디자인하다.","name_en":"Home, Home, Sweet Home - HomeKit으로 공간을 디자인하다.","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"13","name":"유경모","name_en":"","nickname":"Demian","image_name":"gyeongmo_yoo.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/gyeongmo_yoo.jpeg","affiliation":"Apple Developer Academy 4th Learner","affiliation_en":"","description":"배우에서 개발자로, 사람의 경험을 디자인하는 사람.\\n안녕하세요, iOS 개발자 데미안입니다.","description_en":"","social":{"web":"","email":"","github":"https://github.com/YooGyeongMo","linkedin":"https://www.linkedin.com/in/gyeongmo-yoo-b4098b316/","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T10:50:00","duration":1200,"end_time":"2025-11-24T11:10:00","keynote_url":"","video_url":"","level":"medium"},{"id":"6","name":"쉬는 시간","name_en":"Recess","type":"recess","track":"","track_en":"","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T11:10:00","duration":600,"end_time":"2025-11-24T11:20:00","keynote_url":"","video_url":"","level":""},{"id":"7","name":"AlarmKit으로 매끄러운 유저 경험 구현하기","name_en":"AlarmKit으로 매끄러운 유저 경험 구현하기","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"3","name":"이승준","name_en":"","nickname":"첼란","image_name":"seungjun_lee.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/seungjun_lee.jpeg","affiliation":"","affiliation_en":"","description":"어제보다 덜 부끄러운 코드를 쓰고 싶은\\n주니어 iOS 개발자 입니다!","description_en":"","social":{"web":"","email":"","github":"https://github.com/ValseLee","linkedin":"https://www.linkedin.com/in/celanlee","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T11:20:00","duration":1200,"end_time":"2025-11-24T11:40:00","keynote_url":"","video_url":"","level":"all"},{"id":"8","name":"macOS 앱에서 파이썬 및 pip 패키지 완전 통합하기","name_en":"macOS 앱에서 파이썬 및 pip 패키지 완전 통합하기","type":"presentation","track":"트랙 B","track_en":"Track B","venue":"C홀","venue_en":"Hall C","speakers":[{"id":"10","name":"김부성","name_en":"","nickname":"","image_name":"buseong_kim.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/buseong_kim.jpeg","affiliation":"","affiliation_en":"","description":"개발과 애플을 사랑하며\\n더 나은 내일을 기대하는 iOS 개발자입니다.","description_en":"","social":{"web":"","email":"flight@skyline23.com","github":"https://github.com/Skyline-23","linkedin":"","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T11:20:00","duration":2400,"end_time":"2025-11-24T12:00:00","keynote_url":"","video_url":"","level":"easy"},{"id":"9","name":"CGAffineTransform으로 화면 렌더링 이해도 높이기","name_en":"CGAffineTransform으로 화면 렌더링 이해도 높이기","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"8","name":"고상범","name_en":"","nickname":"","image_name":"sangbeom_go.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/sangbeom_go.jpeg","affiliation":"","affiliation_en":"","description":"미디어와 그래픽스에 관심이 많은 개발자 입니다","description_en":"","social":{"web":"","email":"","github":"","linkedin":"https://www.linkedin.com/in/sangbum-goh-540aa6159/","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T11:40:00","duration":1200,"end_time":"2025-11-24T12:00:00","keynote_url":"","video_url":"","level":"all"},{"id":"10","name":"점심 식사","name_en":"Lunch","type":"lunch","track":"트랙 A","track_en":"Track A","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T12:00:00","duration":5400,"end_time":"2025-11-24T13:30:00","keynote_url":"","video_url":"","level":""},{"id":"11","name":"SwiftUI로 디자인시스템 약간 오버 엔지니어링 설계하기 (feat. OOP)","name_en":"SwiftUI로 디자인시스템 약간 오버 엔지니어링 설계하기 (feat. OOP)","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"12","name":"이재웅","name_en":"","nickname":"Curry","image_name":"jaewoong_lee.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/jaewoong_lee.jpeg","affiliation":"KiTbetter (전 MUZLIVE)","affiliation_en":"","description":"항상 시도하는 개발자 이재웅입니다.","description_en":"","social":{"web":"","email":"jaewoong0624@gmail.com","github":"","linkedin":"https://www.linkedin.com/in/iosjaewoong/","x":"","mastodon":"","facebook":"","instagram":"","thread":"https://www.threads.com/@jaewoonglee_?igshid=NTc4MTIwNjQ2YQ==","youtube":"","medium":""}}],"start_time":"2025-11-24T13:40:00","duration":1200,"end_time":"2025-11-24T14:00:00","keynote_url":"","video_url":"","level":"easy"},{"id":"12","name":"모놀로식에서 모듈화로, 그 중간 어딘가","name_en":"모놀로식에서 모듈화로, 그 중간 어딘가","type":"presentation","track":"트랙 B","track_en":"Track B","venue":"C홀","venue_en":"Hall C","speakers":[{"id":"2","name":"유현식","name_en":"","nickname":"","image_name":"hyunsik_yoo.jpeg","image_url":"https://letswift.kr/2025/assets/speakers/hyunsik_yoo.jpeg","affiliation":"카카오스타일","affiliation_en":"","description":"붕어빵 굽는 가슴속 3천원 개발자입니다","description_en":"","social":{"web":"","email":"","github":"https://github.com/Raymond-Sik","linkedin":"https://www.linkedin.com/in/hyun-sik-yoo","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}},{"id":"11","name":"장진혁","name_en":"","nickname":"","image_name":"jinhyuk_jang.png","image_url":"https://letswift.kr/2025/assets/speakers/jinhyuk_jang.png","affiliation":"카카오스타일","affiliation_en":"","description":"카카오스타일에서\\n지그재그를 더 좋게 만들고 있어요 ✨","description_en":"","social":{"web":"","email":"jjhyuk15@gmail.com","github":"","linkedin":"https://kr.linkedin.com/in/%EC%A7%84%ED%98%81-%EC%9E%A5-08832a1ab","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T13:40:00","duration":2400,"end_time":"2025-11-24T14:20:00","keynote_url":"","video_url":"","level":"easy"},{"id":"13","name":"Vapor와 함께 풀스택 개발자 도전","name_en":"Vapor와 함께 풀스택 개발자 도전","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"9","name":"손원영","name_en":"","nickname":"","image_name":"wonyoung_son.jpg","image_url":"https://letswift.kr/2025/assets/speakers/wonyoung_son.jpg","affiliation":"","affiliation_en":"","description":"Swift로 풀스택을 꿈꾸는 개발자","description_en":"","social":{"web":"","email":"","github":"","linkedin":"https://www.linkedin.com/in/wyson","x":"https://x.com/garoad","mastodon":"","facebook":"","instagram":"https://www.instagram.com/garoad","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T14:00:00","duration":1200,"end_time":"2025-11-24T14:20:00","keynote_url":"","video_url":"","level":"easy"},{"id":"14","name":"쉬는 시간","name_en":"Recess","type":"recess","track":"","track_en":"","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T14:20:00","duration":600,"end_time":"2025-11-24T14:30:00","keynote_url":"","video_url":"","level":""},{"id":"15","name":"Modern Network와 WebSocket","name_en":"Modern Network와 WebSocket","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"7","name":"윤태중","name_en":"","nickname":"","image_name":"taejoong_yoon.jpg","image_url":"https://letswift.kr/2025/assets/speakers/taejoong_yoon.jpg","affiliation":"카카오","affiliation_en":"","description":"불규칙 속의 규칙을 찾습니다","description_en":"","social":{"web":"","email":"","github":"","linkedin":"https://www.linkedin.com/in/taejoongyoon/","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T14:30:00","duration":1200,"end_time":"2025-11-24T14:50:00","keynote_url":"","video_url":"","level":""},{"id":"16","name":"접근성의 관심에서, 포용을 목표로","name_en":"접근성의 관심에서, 포용을 목표로","type":"presentation","track":"트랙 B","track_en":"Track B","venue":"C홀","venue_en":"Hall C","speakers":[{"id":"4","name":"한가온","name_en":"","nickname":"Gaon","image_name":"gaon_han.jpg","image_url":"https://letswift.kr/2025/assets/speakers/gaon_han.jpg","affiliation":"모스픽","affiliation_en":"","description":"안녕하세요, Gaon입니다.\\n섬세함과 정성으로 루게릭병 환우분들을 위한\\n모스픽을 만들어가고 있습니다.","description_en":"","social":{"web":"","email":"xnoag@icloud.com","github":"","linkedin":"https://www.linkedin.com/in/xnoag/","x":"","mastodon":"","facebook":"","instagram":"https://www.instagram.com/xnoag/","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T14:30:00","duration":1200,"end_time":"2025-11-24T14:50:00","keynote_url":"","video_url":"","level":"all"},{"id":"17","name":"쉬는 시간","name_en":"Recess","type":"recess","track":"","track_en":"","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T14:50:00","duration":1200,"end_time":"2025-11-24T15:10:00","keynote_url":"","video_url":"","level":""},{"id":"18","name":"네트워킹","name_en":"Networking","type":"networking","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[],"start_time":"2025-11-24T15:10:00","duration":3600,"end_time":"2025-11-24T16:10:00","keynote_url":"","video_url":"","level":""},{"id":"19","name":"쉬는 시간","name_en":"Recess","type":"recess","track":"","track_en":"","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T16:10:00","duration":600,"end_time":"2025-11-24T16:20:00","keynote_url":"","video_url":"","level":""},{"id":"20","name":"Xcode Internals: 내부에 숨겨진 파일들","name_en":"Xcode Internals: 내부에 숨겨진 파일들","type":"presentation","track":"Track A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[{"id":"5","name":"고드름","name_en":"","nickname":"","image_name":"godreum.jpg","image_url":"https://letswift.kr/2025/assets/speakers/godreum.jpg","affiliation":"코드스쿼드","affiliation_en":"","description":"뜨거워진 스위프트로\\n임베디드와 맥 개발을 즐기는 아웃사이더","description_en":"","social":{"web":"","email":"","github":"https://github.com/godrm","linkedin":"","x":"https://x.com/godrm","mastodon":"","facebook":"","instagram":"https://instagram.com/godrm","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T16:20:00","duration":2400,"end_time":"2025-11-24T17:00:00","keynote_url":"","video_url":"","level":"easy"},{"id":"21","name":"Swift 개발자를 위한 온디바이스 AI LLM (Foundation Models 첫걸음)","name_en":"Swift 개발자를 위한 온디바이스 AI LLM (Foundation Models 첫걸음)","type":"presentation","track":"트랙 B","track_en":"Track B","venue":"C홀","venue_en":"Hall C","speakers":[{"id":"14","name":"최재훈","name_en":"","nickname":"","image_name":"jaehun_choi.jpg","image_url":"https://letswift.kr/2025/assets/speakers/jaehun_choi.jpg","affiliation":"","affiliation_en":"","description":"On-Device AI SW 엔지니어입니다.\\nVision Pro 애플 XR 앱 개발도 즐겨 합니다.\\n모두의연구소, 카카오임팩트 등 개발 커뮤니티에서도 활발히 활동 중입니다.","description_en":"","social":{"web":"","email":"","github":"","linkedin":"https://linkedin.com/in/jaydenchoe","x":"","mastodon":"","facebook":"","instagram":"","thread":"","youtube":"","medium":""}}],"start_time":"2025-11-24T16:20:00","duration":2400,"end_time":"2025-11-24T17:00:00","keynote_url":"","video_url":"","level":"medium"},{"id":"22","name":"쉬는 시간","name_en":"Recess","type":"recess","track":"","track_en":"","venue":"","venue_en":"","speakers":[],"start_time":"2025-11-24T17:00:00","duration":600,"end_time":"2025-11-24T17:10:00","keynote_url":"","video_url":"","level":""},{"id":"23","name":"클로징","name_en":"Closing","type":"closing","track":"트랙 A","track_en":"Track A","venue":"B홀","venue_en":"Hall B","speakers":[],"start_time":"2025-11-24T17:10:00","duration":1200,"end_time":"2025-11-24T17:30:00","keynote_url":"","video_url":"","level":""}]'),rA={class:"flex flex-col text-base h-full justify-center overflow-hidden text-left text-ellipsis"},sA={key:0,class:"flex flex-col space-y-0 items-baseline px-2 sm:px-4 py-1 md:py-2"},oA={class:"font-bold text-sm text-zinc-300"},aA={key:0},lA={key:1,class:"flex gap-x-4 text-justify px-2 sm:px-4 py-2 md:py-1 drop-shadow-[0_23px_23px_rgba(0,0,0,0.75)] h-full"},cA={class:"flex flex-col items-baseline text-justify py-1 gap-y-0.5"},uA={class:"font-black text-xs sm:text-lg md:text-lg text-zinc-300 line-clamp-3 break-normal w-full text-left"},fA={class:"flex gap-x-2 items-baseline"},dA={class:"font-bold font-mono text-xs sm:text-sm md:text-sm text-zinc-200/80 text-left"},hA={class:"font-bold font-mono text-xs sm:text-xs text-zinc-300/60 text-left"},pA={key:0,class:"flex space-x-2"},mA={class:"font-black text-sm sm:text-sm md:text-base text-zinc-300/70"},gA={key:0,class:"font-semibold mr-2"},_A={key:1},vA={class:"text-xs sm:text-xs opacity-60"},xA={key:2},SA={key:0},yA={key:1},wd={__name:"TimelineItem",props:["session"],setup(t){const e=t,n=st(()=>{const s=e.session;return s.type==="recess"||s.type==="lunch"}),i=s=>`${Math.floor(s/60)}분`,r=s=>{const o=new Date(s),a=o.getHours(),l=o.getMinutes(),c=a.toString().padStart(2,"0"),u=l.toString().padStart(2,"0");return`${c}:${u}`};return(s,o)=>(me(),_e("div",rA,[n.value===!0?(me(),_e("div",sA,[$("div",oA,lt(t.session.name),1),t.session.type==="lunch"?(me(),_e("div",aA,o[0]||(o[0]=[$("div",{class:"flex flex-col text-xs text-zinc-500 py-4"},[$("div",null,"식사시 주의 사항"),$("div",null,"내부 음식물 섭취 안내: 컨퍼런스 내부에서 물 이외의 음식은 취식 불가입니다.")],-1)]))):ot("",!0)])):(me(),_e("div",lA,[o[1]||(o[1]=$("div",{class:"bg-themeMain h-full w-1 rounded-full"},null,-1)),$("div",cA,[$("div",uA,lt(t.session.name),1),$("div",fA,[$("div",dA,lt(r(t.session.start_time))+" ~ "+lt(r(t.session.end_time)),1),$("div",hA,lt(i(t.session.duration)),1)]),t.session.speakers?(me(),_e("div",pA,[(me(!0),_e(ht,null,Nt(t.session.speakers,(a,l)=>(me(),_e("div",mA,[l>0?(me(),_e("span",gA,"&")):ot("",!0),a.nickname!==""&&a.name!==""?(me(),_e("span",_A,[Ho(lt(a.nickname)+" ",1),$("span",vA,lt(a.name),1)])):(me(),_e("span",xA,[a.nickname!==""?(me(),_e("span",SA,lt(a.nickname),1)):(me(),_e("span",yA,lt(a.name),1))]))]))),256))])):ot("",!0)])]))]))}},EA={class:"flex flex-col space-y-8 md:space-y-16 md:scroll-mt-28"},MA={class:"space-y-12"},bA={class:"flex justify-center"},TA={class:"w-full px-2 sm:px-8 py-2 xl:px-0 max-w-[1280px] space-y-12 xl:rounded-3xl"},wA={class:"text-white"},AA={class:"min-h-[250vh] sm:min-h-[300vh] md:min-h-[200vh] grid grid-rows-[repeat(56,1fr)] grid-cols-13 gap-1"},RA={class:"md:hidden"},CA={class:"hidden md:inline"},PA={__name:"Schedule",setup(t){const e=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],n=sn([]),i=st(()=>n.value.filter(c=>c.track_en==="")),r=st(()=>n.value.filter(c=>c.track_en==="Track A").concat(i.value)),s=st(()=>n.value.filter(c=>c.track_en==="Track B").concat(i.value));di(()=>{o()});const o=async()=>{try{n.value=iA}catch(c){console.error(c)}},a=(c,u)=>{let f=" ";return u===0?f+=" col-start-2 col-span-6":f+=" col-start-8 col-span-6",c.type==="entry"?f+=" bg-white/5 rounded-md":c.type==="recess"||c.type==="lunch"?f+=" ":(c.type==="opening"||c.type==="closing"||c.type==="networking"||c.track_en==="Track A"||c.track_en==="Track B")&&(f+=" bg-white/10 rounded-md"),f},l=c=>{let u="";const f=new Date(c.start_time),d=f.getHours(),h=f.getMinutes(),g=(d-9)*6+Math.ceil(h/10)+1+1,v=Math.ceil(c.duration/600),m=g+v;return u+=` grid-row-start: ${g}; grid-row-end: ${m};`,u};return(c,u)=>(me(),_e("div",EA,[$("div",MA,[He(ou,{title:"시간표"})]),$("div",bA,[$("div",TA,[$("div",wA,[$("div",AA,[u[0]||(u[0]=Al('<div class="contents text-center font-bold text-lg md:text-xl"><div class="flex flex-col space-y-2 items-center justify-center col-start-1 col-span-1 row-start-0 row-span-1"><div class="text-sm md:text-md text-zinc-200"></div></div><div class="relative flex flex-col space-y-2 items-center justify-center col-start-2 col-span-6 row-start-0 row-span-1 bg-zinc-700/50 rounded-2xl"><div class="flex place-items-baseline gap-x-4"><div>Track A</div><div class="text-3xl text-rainbow">STAR</div></div></div><div class="flex flex-col space-y-2 items-center justify-center col-start-8 col-span-6 row-start-0 row-span-1 bg-zinc-700/50 rounded-2xl"><div class="flex place-items-baseline gap-x-4"><div>Track B</div><div class="text-3xl text-rainbow">EMBER</div></div></div></div>',1)),(me(),_e(ht,null,Nt(e,(f,d)=>$("div",{class:"px-1 flex items-center justify-center bg-zinc-700/50 rounded-2xl col-start-1 col-span-1 row-span-6 font-mono font-semibold text-xs sm:text-sm md:text-lg",style:Ri(`grid-row-start: ${d*0}`)},[$("span",RA,lt(f.split(":")[0].replace(/^0/,"")),1),$("span",CA,lt(f),1)],4)),64)),(me(!0),_e(ht,null,Nt(r.value,f=>(me(),_e("div",{key:f.id,class:Cn(a(f,0)),style:Ri(l(f))},[He(wd,{session:f},null,8,["session"])],6))),128)),(me(!0),_e(ht,null,Nt(s.value,f=>(me(),_e("div",{key:f.id,class:Cn(a(f,1)),style:Ri(l(f))},[He(wd,{session:f},null,8,["session"])],6))),128))])])])])]))}},LA={class:"flex flex-col space-y-8 items-end text-white"},DA={class:"flex flex-col gap-y-8 items-end"},IA=["src"],UA={class:"flex flex-col gap-y-4 items-end text-end"},NA={key:0},OA={class:"font-bold text-lg md:text-xl"},FA={class:"font-bold text-sm md:text-base opacity-60"},BA={key:1},kA={key:0,class:"font-bold text-lg md:text-xl"},zA={key:1,class:"font-bold text-lg md:text-xl"},HA={class:"korean-text text-xs md:text-sm text-right text-pretty font-semibold text-zinc-300 opacity-90 max-w-80"},VA={class:"flex pt-2 gap-x-4 gap-y-4 justify-end pointer-cursor"},GA=["href"],WA=["href"],XA=["href"],$A=["href"],qA=["href"],jA=["href"],YA=["href"],KA=["href"],ZA=["href"],JA=["href"],QA=["href"],e2={__name:"Speaker",props:["person"],setup(t){const e=n=>`/2025/assets/speakers/${n}`;return(n,i)=>(me(),_e("div",LA,[$("div",DA,[$("img",{src:e(t.person.image_name),loading:"lazy",class:"w-36 md:w-44 h-36 md:h-44 bg-white rounded-tl-full object-cover z-10"},null,8,IA),$("div",UA,[t.person.nickname!==""&&t.person.name!==""?(me(),_e("div",NA,[$("div",OA,lt(t.person.nickname),1),$("div",FA,lt(t.person.name),1)])):(me(),_e("div",BA,[t.person.nickname!==""?(me(),_e("div",kA,lt(t.person.nickname),1)):(me(),_e("div",zA,lt(t.person.name),1))])),$("div",HA,lt(t.person.description),1),$("div",VA,[t.person.social.email?(me(),_e("a",{key:0,href:`mailto:${t.person.social.email}`,target:"_blank"},[He(Qe(ws),{fill:"gray",width:"16",height:"16"})],8,GA)):ot("",!0),t.person.social.web?(me(),_e("a",{key:1,href:t.person.social.web,target:"_blank"},[He(Qe(ws),{fill:"gray",width:"16",height:"16"})],8,WA)):ot("",!0),t.person.social.linkedin?(me(),_e("a",{key:2,href:t.person.social.linkedin,target:"_blank"},[He(Qe(jc),{fill:"gray",width:"16",height:"16"})],8,XA)):ot("",!0),t.person.social.instagram?(me(),_e("a",{key:3,href:t.person.social.instagram,target:"_blank"},[He(Qe(qc),{fill:"gray",width:"16",height:"16"})],8,$A)):ot("",!0),t.person.social.facebook?(me(),_e("a",{key:4,href:t.person.social.facebook,target:"_blank"},[He(Qe(Qh),{fill:"gray",width:"16",height:"16"})],8,qA)):ot("",!0),t.person.social.github?(me(),_e("a",{key:5,href:t.person.social.github,target:"_blank"},[He(Qe($c),{fill:"gray",width:"16",height:"16"})],8,jA)):ot("",!0),t.person.social.youtube?(me(),_e("a",{key:6,href:t.person.social.youtube,target:"_blank"},[He(Qe(Kc),{fill:"gray",width:"16",height:"16"})],8,YA)):ot("",!0),t.person.social.x?(me(),_e("a",{key:7,href:t.person.social.x,target:"_blank"},[He(Qe(Yc),{fill:"gray",width:"16",height:"16"})],8,KA)):ot("",!0),t.person.social.mastodon?(me(),_e("a",{key:8,href:t.person.social.mastodon,target:"_blank"},[He(Qe(ep),{fill:"gray",width:"16",height:"16"})],8,ZA)):ot("",!0),t.person.social.medium?(me(),_e("a",{key:9,href:t.person.social.medium,target:"_blank"},[He(Qe(tp),{fill:"gray",width:"16",height:"16"})],8,JA)):ot("",!0),t.person.social.thread?(me(),_e("a",{key:10,href:t.person.social.thread,target:"_blank"},[He(Qe(np),{fill:"gray",width:"16",height:"16"})],8,QA)):ot("",!0)])])])]))}},t2=Wr(e2,[["__scopeId","data-v-4015cb58"]]),n2={class:"flex flex-col space-y-12 md:space-y-36 md:scroll-mt-28"},i2={class:"flex justify-center"},r2={class:"px-8 xl:px-0 max-w-[1280px]"},s2={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-28"},o2={__name:"Speakers",setup(t){const e=sn([]);di(()=>{n()});const n=async()=>{try{const r=await Tt.get("/2025/assets/json/speakers.json");e.value=r.data}catch(i){console.error(i)}};return(i,r)=>(me(),_e("div",n2,[He(ou,{title:"연사 소개"}),$("div",i2,[$("div",r2,[$("div",s2,[(me(!0),_e(ht,null,Nt(e.value,s=>(me(),_e("div",{key:s.id},[He(t2,{person:s},null,8,["person"])]))),128))])])])]))}},a2={__name:"Home",setup(t){return(e,n)=>(me(),_e(ht,null,[He(Ib,{id:"hero"}),He(qw,{id:"sponsors"}),He(PA,{id:"schedule"}),He(o2,{id:"speakers"}),He(nA,{id:"sponsorsMini"})],64))}},l2=[{path:"/",component:a2},{path:"/CodeOfConduct",component:()=>Mb(()=>import("./CodeOfConduct-n8j9zgve.js"),[])}],c2=z0({history:p0("/2025/"),routes:l2}),sm=N_(Sb);sm.use(c2);sm.mount("#app");export{ht as F,ou as _,He as a,$ as b,_e as c,me as o,Nt as r,lt as t};
