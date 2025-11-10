(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xt={},zr=[],Yn=()=>{},hm=()=>!1,sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gc=t=>t.startsWith("onUpdate:"),Ht=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pm=Object.prototype.hasOwnProperty,dt=(t,e)=>pm.call(t,e),je=Array.isArray,Hr=t=>oa(t)==="[object Map]",Ld=t=>oa(t)==="[object Set]",Qe=t=>typeof t=="function",At=t=>typeof t=="string",Gi=t=>typeof t=="symbol",Et=t=>t!==null&&typeof t=="object",Id=t=>(Et(t)||Qe(t))&&Qe(t.then)&&Qe(t.catch),Ud=Object.prototype.toString,oa=t=>Ud.call(t),mm=t=>oa(t).slice(8,-1),Nd=t=>oa(t)==="[object Object]",Xc=t=>At(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gm=/-(\w)/g,Tn=aa(t=>t.replace(gm,(e,n)=>n?n.toUpperCase():"")),_m=/\B([A-Z])/g,xr=aa(t=>t.replace(_m,"-$1").toLowerCase()),la=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=aa(t=>t?`on${la(t)}`:""),Oi=(t,e)=>!Object.is(t,e),Ba=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Od=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},vm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xm=t=>{const e=At(t)?Number(t):NaN;return isNaN(e)?t:e};let Eu;const ca=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fi(t){if(je(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=At(i)?Mm(i):Fi(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(t)||Et(t))return t}const Sm=/;(?![^(]*\))/g,ym=/:([^]+)/,Em=/\/\*[^]*?\*\//g;function Mm(t){const e={};return t.replace(Em,"").split(Sm).forEach(n=>{if(n){const i=n.split(ym);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function On(t){let e="";if(At(t))e=t;else if(je(t))for(let n=0;n<t.length;n++){const i=On(t[n]);i&&(e+=i+" ")}else if(Et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tm=Vc(bm);function Fd(t){return!!t||t===""}const Bd=t=>!!(t&&t.__v_isRef===!0),rt=t=>At(t)?t:t==null?"":je(t)||Et(t)&&(t.toString===Ud||!Qe(t.toString))?Bd(t)?rt(t.value):JSON.stringify(t,kd,2):String(t),kd=(t,e)=>Bd(e)?kd(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[ka(i,s)+" =>"]=r,n),{})}:Ld(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ka(n))}:Gi(e)?ka(e):Et(e)&&!je(e)&&!Nd(e)?String(e):e,ka=(t,e="")=>{var n;return Gi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class wm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Am(){return nn}let St;const za=new WeakSet;class zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mu(this),Gd(this);const e=St,n=Un;St=this,Un=!0;try{return this.fn()}finally{Wd(this),St=e,Un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jc(e);this.deps=this.depsTail=void 0,Mu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let Hd=0,Ss,ys;function Vd(t,e=!1){if(t.flags|=8,e){t.next=ys,ys=t;return}t.next=Ss,Ss=t}function $c(){Hd++}function qc(){if(--Hd>0)return;if(ys){let e=ys;for(ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ss;){let e=Ss;for(Ss=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Gd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),jc(i),Rm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Ll(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Rs)||(t.globalVersion=Rs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ll(t))))return;t.flags|=2;const e=t.dep,n=St,i=Un;St=t,Un=!0;try{Gd(t);const r=t.fn(t._value);(e.version===0||Oi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{St=n,Un=i,Wd(t),t.flags&=-3}}function jc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)jc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Un=!0;const $d=[];function gi(){$d.push(Un),Un=!1}function _i(){const t=$d.pop();Un=t===void 0?!0:t}function Mu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=St;St=void 0;try{e()}finally{St=n}}}let Rs=0;class Cm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!St||!Un||St===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==St)n=this.activeLink=new Cm(St,this),St.deps?(n.prevDep=St.depsTail,St.depsTail.nextDep=n,St.depsTail=n):St.deps=St.depsTail=n,qd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=St.depsTail,n.nextDep=void 0,St.depsTail.nextDep=n,St.depsTail=n,St.deps===n&&(St.deps=i)}return n}trigger(e){this.version++,Rs++,this.notify(e)}notify(e){$c();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qc()}}}function qd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Il=new WeakMap,dr=Symbol(""),Ul=Symbol(""),Cs=Symbol("");function $t(t,e,n){if(Un&&St){let i=Il.get(t);i||Il.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Yc),r.map=i,r.key=n),r.track()}}function ci(t,e,n,i,r,s){const o=Il.get(t);if(!o){Rs++;return}const a=l=>{l&&l.trigger()};if($c(),e==="clear")o.forEach(a);else{const l=je(t),c=l&&Xc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Cs||!Gi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Cs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(dr)),Hr(t)&&a(o.get(Ul)));break;case"delete":l||(a(o.get(dr)),Hr(t)&&a(o.get(Ul)));break;case"set":Hr(t)&&a(o.get(dr));break}}qc()}function Er(t){const e=ut(t);return e===t?e:($t(e,"iterate",Cs),bn(t)?e:e.map(Vt))}function ua(t){return $t(t=ut(t),"iterate",Cs),t}const Pm={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,Vt)},concat(...t){return Er(this).concat(...t.map(e=>je(e)?Er(e):e))},entries(){return Ha(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return Qn(this,"find",t,e,Vt,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Va(this,"includes",t)},indexOf(...t){return Va(this,"indexOf",t)},join(t){return Er(this).join(t)},lastIndexOf(...t){return Va(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return as(this,"pop")},push(...t){return as(this,"push",t)},reduce(t,...e){return bu(this,"reduce",t,e)},reduceRight(t,...e){return bu(this,"reduceRight",t,e)},shift(){return as(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return as(this,"splice",t)},toReversed(){return Er(this).toReversed()},toSorted(t){return Er(this).toSorted(t)},toSpliced(...t){return Er(this).toSpliced(...t)},unshift(...t){return as(this,"unshift",t)},values(){return Ha(this,"values",Vt)}};function Ha(t,e,n){const i=ua(t),r=i[e]();return i!==t&&!bn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Dm=Array.prototype;function Qn(t,e,n,i,r,s){const o=ua(t),a=o!==t&&!bn(t),l=o[e];if(l!==Dm[e]){const f=l.apply(t,s);return a?Vt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Vt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function bu(t,e,n,i){const r=ua(t);let s=n;return r!==t&&(bn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Vt(a),l,t)}),r[e](s,...i)}function Va(t,e,n){const i=ut(t);$t(i,"iterate",Cs);const r=i[e](...n);return(r===-1||r===!1)&&Jc(n[0])?(n[0]=ut(n[0]),i[e](...n)):r}function as(t,e,n=[]){gi(),$c();const i=ut(t)[e].apply(t,n);return qc(),_i(),i}const Lm=Vc("__proto__,__v_isRef,__isVue"),jd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gi));function Im(t){Gi(t)||(t=String(t));const e=ut(this);return $t(e,"has",t),e.hasOwnProperty(t)}class Yd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Gm:Qd:s?Jd:Zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!r){let l;if(o&&(l=Pm[n]))return l;if(n==="hasOwnProperty")return Im}const a=Reflect.get(e,n,jt(e)?e:i);return(Gi(n)?jd.has(n):Lm(n))||(r||$t(e,"get",n),s)?a:jt(a)?o&&Xc(n)?a:a.value:Et(a)?r?th(a):fa(a):a}}class Kd extends Yd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=zi(s);if(!bn(i)&&!zi(i)&&(s=ut(s),i=ut(i)),!je(e)&&jt(s)&&!jt(i))return l?!1:(s.value=i,!0)}const o=je(e)&&Xc(n)?Number(n)<e.length:dt(e,n),a=Reflect.set(e,n,i,jt(e)?e:r);return e===ut(r)&&(o?Oi(i,s)&&ci(e,"set",n,i):ci(e,"add",n,i)),a}deleteProperty(e,n){const i=dt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ci(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gi(n)||!jd.has(n))&&$t(e,"has",n),i}ownKeys(e){return $t(e,"iterate",je(e)?"length":dr),Reflect.ownKeys(e)}}class Um extends Yd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nm=new Kd,Om=new Um,Fm=new Kd(!0);const Nl=t=>t,to=t=>Reflect.getPrototypeOf(t);function Bm(t,e,n){return function(...i){const r=this.__v_raw,s=ut(r),o=Hr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Nl:e?Xo:Vt;return!e&&$t(s,"iterate",l?Ul:dr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function km(t,e){const n={get(r){const s=this.__v_raw,o=ut(s),a=ut(r);t||(Oi(r,a)&&$t(o,"get",r),$t(o,"get",a));const{has:l}=to(o),c=e?Nl:t?Xo:Vt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&$t(ut(r),"iterate",dr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ut(s),a=ut(r);return t||(Oi(r,a)&&$t(o,"has",r),$t(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ut(a),c=e?Nl:t?Xo:Vt;return!t&&$t(l,"iterate",dr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ht(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(r){!e&&!bn(r)&&!zi(r)&&(r=ut(r));const s=ut(this);return to(s).has.call(s,r)||(s.add(r),ci(s,"add",r,r)),this},set(r,s){!e&&!bn(s)&&!zi(s)&&(s=ut(s));const o=ut(this),{has:a,get:l}=to(o);let c=a.call(o,r);c||(r=ut(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Oi(s,u)&&ci(o,"set",r,s):ci(o,"add",r,s),this},delete(r){const s=ut(this),{has:o,get:a}=to(s);let l=o.call(s,r);l||(r=ut(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ci(s,"delete",r,void 0),c},clear(){const r=ut(this),s=r.size!==0,o=r.clear();return s&&ci(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Bm(r,t,e)}),n}function Kc(t,e){const n=km(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(dt(n,r)&&r in i?n:i,r,s)}const zm={get:Kc(!1,!1)},Hm={get:Kc(!1,!0)},Vm={get:Kc(!0,!1)};const Zd=new WeakMap,Jd=new WeakMap,Qd=new WeakMap,Gm=new WeakMap;function Wm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xm(t){return t.__v_skip||!Object.isExtensible(t)?0:Wm(mm(t))}function fa(t){return zi(t)?t:Zc(t,!1,Nm,zm,Zd)}function eh(t){return Zc(t,!1,Fm,Hm,Jd)}function th(t){return Zc(t,!0,Om,Vm,Qd)}function Zc(t,e,n,i,r){if(!Et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Xm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Vr(t){return zi(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function zi(t){return!!(t&&t.__v_isReadonly)}function bn(t){return!!(t&&t.__v_isShallow)}function Jc(t){return t?!!t.__v_raw:!1}function ut(t){const e=t&&t.__v_raw;return e?ut(e):t}function $m(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&Od(t,"__v_skip",!0),t}const Vt=t=>Et(t)?fa(t):t,Xo=t=>Et(t)?th(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function It(t){return nh(t,!1)}function qm(t){return nh(t,!0)}function nh(t,e){return jt(t)?t:new jm(t,e)}class jm{constructor(e,n){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ut(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||bn(e)||zi(e);e=i?e:ut(e),Oi(e,n)&&(this._rawValue=e,this._value=i?e:Vt(e),this.dep.trigger())}}function $e(t){return jt(t)?t.value:t}const Ym={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return jt(r)&&!jt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ih(t){return Vr(t)?t:new Proxy(t,Ym)}class Km{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&St!==this)return Vd(this,!0),!0}get value(){const e=this.dep.track();return Xd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zm(t,e,n=!1){let i,r;return Qe(t)?i=t:(i=t.get,r=t.set),new Km(i,r,n)}const io={},$o=new WeakMap;let ir;function Jm(t,e=!1,n=ir){if(n){let i=$o.get(n);i||$o.set(n,i=[]),i.push(t)}}function Qm(t,e,n=xt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:bn(y)||r===!1||r===0?ui(y,1):ui(y);let u,f,d,p,g=!1,_=!1;if(jt(t)?(f=()=>t.value,g=bn(t)):Vr(t)?(f=()=>c(t),g=!0):je(t)?(_=!0,g=t.some(y=>Vr(y)||bn(y)),f=()=>t.map(y=>{if(jt(y))return y.value;if(Vr(y))return c(y);if(Qe(y))return l?l(y,2):y()})):Qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){gi();try{d()}finally{_i()}}const y=ir;ir=u;try{return l?l(t,3,[p]):t(p)}finally{ir=y}}:f=Yn,e&&r){const y=f,L=r===!0?1/0:r;f=()=>ui(y(),L)}const m=Am(),h=()=>{u.stop(),m&&m.active&&Wc(m.effects,u)};if(s&&e){const y=e;e=(...L)=>{y(...L),h()}}let w=_?new Array(t.length).fill(io):io;const T=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(r||g||(_?L.some((C,P)=>Oi(C,w[P])):Oi(L,w))){d&&d();const C=ir;ir=u;try{const P=[L,w===io?void 0:_&&w[0]===io?[]:w,p];w=L,l?l(e,3,P):e(...P)}finally{ir=C}}}else u.run()};return a&&a(T),u=new zd(f),u.scheduler=o?()=>o(T,!1):T,p=y=>Jm(y,!1,u),d=u.onStop=()=>{const y=$o.get(u);if(y){if(l)l(y,4);else for(const L of y)L();$o.delete(u)}},e?i?T(!0):w=u.run():o?o(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ui(t,e=1/0,n){if(e<=0||!Et(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,jt(t))ui(t.value,e,n);else if(je(t))for(let i=0;i<t.length;i++)ui(t[i],e,n);else if(Ld(t)||Hr(t))t.forEach(i=>{ui(i,e,n)});else if(Nd(t)){for(const i in t)ui(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ui(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gs(t,e,n,i){try{return i?t(...i):t()}catch(r){da(r,e,n)}}function Fn(t,e,n,i){if(Qe(t)){const r=Gs(t,e,n,i);return r&&Id(r)&&r.catch(s=>{da(s,e,n)}),r}if(je(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Fn(t[s],e,n,i));return r}}function da(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){gi(),Gs(s,null,10,[t,l,c]),_i();return}}eg(t,n,r,i,o)}function eg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Jt=[];let Xn=-1;const Gr=[];let Di=null,Fr=0;const rh=Promise.resolve();let qo=null;function sh(t){const e=qo||rh;return t?e.then(this?t.bind(this):t):e}function tg(t){let e=Xn+1,n=Jt.length;for(;e<n;){const i=e+n>>>1,r=Jt[i],s=Ps(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Qc(t){if(!(t.flags&1)){const e=Ps(t),n=Jt[Jt.length-1];!n||!(t.flags&2)&&e>=Ps(n)?Jt.push(t):Jt.splice(tg(e),0,t),t.flags|=1,oh()}}function oh(){qo||(qo=rh.then(lh))}function ng(t){je(t)?Gr.push(...t):Di&&t.id===-1?Di.splice(Fr+1,0,t):t.flags&1||(Gr.push(t),t.flags|=1),oh()}function Tu(t,e,n=Xn+1){for(;n<Jt.length;n++){const i=Jt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Jt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ah(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,i)=>Ps(n)-Ps(i));if(Gr.length=0,Di){Di.push(...e);return}for(Di=e,Fr=0;Fr<Di.length;Fr++){const n=Di[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Di=null,Fr=0}}const Ps=t=>t.id==null?t.flags&2?-1:1/0:t.id;function lh(t){try{for(Xn=0;Xn<Jt.length;Xn++){const e=Jt[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<Jt.length;Xn++){const e=Jt[Xn];e&&(e.flags&=-2)}Xn=-1,Jt.length=0,ah(),qo=null,(Jt.length||Gr.length)&&lh()}}let rn=null,ch=null;function jo(t){const e=rn;return rn=t,ch=t&&t.type.__scopeId||null,e}function Es(t,e=rn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Fu(-1);const s=jo(e);let o;try{o=t(...r)}finally{jo(s),i._d&&Fu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ig(t,e){if(rn===null)return t;const n=_a(rn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=xt]=e[r];s&&(Qe(s)&&(s={mounted:s,updated:s}),s.deep&&ui(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function qi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(gi(),Fn(l,n,8,[t.el,a,t,e]),_i())}}const rg=Symbol("_vte"),uh=t=>t.__isTeleport,Li=Symbol("_leaveCb"),ro=Symbol("_enterCb");function sg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kn(()=>{t.isMounted=!0}),vh(()=>{t.isUnmounting=!0}),t}const yn=[Function,Array],fh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},dh=t=>{const e=t.subTree;return e.component?dh(e.component):e},og={name:"BaseTransition",props:fh,setup(t,{slots:e}){const n=Jg(),i=sg();return()=>{const r=e.default&&mh(e.default(),!0);if(!r||!r.length)return;const s=hh(r),o=ut(t),{mode:a}=o;if(i.isLeaving)return Ga(s);const l=wu(s);if(!l)return Ga(s);let c=Ol(l,o,i,n,f=>c=f);l.type!==Qt&&Ds(l,c);let u=n.subTree&&wu(n.subTree);if(u&&u.type!==Qt&&!or(l,u)&&dh(n).type!==Qt){let f=Ol(u,o,i,n);if(Ds(u,f),a==="out-in"&&l.type!==Qt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ga(s);a==="in-out"&&l.type!==Qt?f.delayLeave=(d,p,g)=>{const _=ph(i,u);_[String(u.key)]=u,d[Li]=()=>{p(),d[Li]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function hh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Qt){e=n;break}}return e}const ag=og;function ph(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ol(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:h,onAfterAppear:w,onAppearCancelled:T}=e,y=String(t.key),L=ph(n,t),C=(b,S)=>{b&&Fn(b,i,9,S)},P=(b,S)=>{const D=S[1];C(b,S),je(b)?b.every(B=>B.length<=1)&&D():b.length<=1&&D()},F={mode:o,persisted:a,beforeEnter(b){let S=l;if(!n.isMounted)if(s)S=m||l;else return;b[Li]&&b[Li](!0);const D=L[y];D&&or(t,D)&&D.el[Li]&&D.el[Li](),C(S,[b])},enter(b){let S=c,D=u,B=f;if(!n.isMounted)if(s)S=h||c,D=w||u,B=T||f;else return;let G=!1;const Y=b[ro]=he=>{G||(G=!0,he?C(B,[b]):C(D,[b]),F.delayedLeave&&F.delayedLeave(),b[ro]=void 0)};S?P(S,[b,Y]):Y()},leave(b,S){const D=String(t.key);if(b[ro]&&b[ro](!0),n.isUnmounting)return S();C(d,[b]);let B=!1;const G=b[Li]=Y=>{B||(B=!0,S(),Y?C(_,[b]):C(g,[b]),b[Li]=void 0,L[D]===t&&delete L[D])};L[D]=t,p?P(p,[b,G]):G()},clone(b){const S=Ol(b,e,n,i,r);return r&&r(S),S}};return F}function Ga(t){if(ha(t))return t=Hi(t),t.children=null,t}function wu(t){if(!ha(t))return uh(t.type)&&t.children?hh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Qe(n.default))return n.default()}}function Ds(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ds(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ht?(o.patchFlag&128&&r++,i=i.concat(mh(o.children,e,a))):(e||o.type!==Qt)&&i.push(a!=null?Hi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function wn(t,e){return Qe(t)?Ht({name:t.name},e,{setup:t}):t}function gh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yo(t,e,n,i,r=!1){if(je(t)){t.forEach((g,_)=>Yo(g,e&&(je(e)?e[_]:e),n,i,r));return}if(Ms(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Yo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?_a(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,f=a.setupState,d=ut(f),p=f===xt?()=>!1:g=>dt(d,g);if(c!=null&&c!==l&&(At(c)?(u[c]=null,p(c)&&(f[c]=null)):jt(c)&&(c.value=null)),Qe(l))Gs(l,a,12,[o,u]);else{const g=At(l),_=jt(l);if(g||_){const m=()=>{if(t.f){const h=g?p(l)?f[l]:u[l]:l.value;r?je(h)&&Wc(h,s):je(h)?h.includes(s)||h.push(s):g?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,p(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,mn(m,n)):m()}}}ca().requestIdleCallback;ca().cancelIdleCallback;const Ms=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function lg(t,e){_h(t,"a",e)}function cg(t,e){_h(t,"da",e)}function _h(t,e,n=Gt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(pa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ha(r.parent.vnode)&&ug(i,e,n,r),r=r.parent}}function ug(t,e,n,i){const r=pa(e,t,i,!0);Sr(()=>{Wc(i[e],r)},n)}function pa(t,e,n=Gt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{gi();const a=Ws(n),l=Fn(e,n,t,o);return a(),_i(),l});return i?r.unshift(s):r.push(s),s}}const yi=t=>(e,n=Gt)=>{(!Us||t==="sp")&&pa(t,(...i)=>e(...i),n)},fg=yi("bm"),kn=yi("m"),dg=yi("bu"),hg=yi("u"),vh=yi("bum"),Sr=yi("um"),pg=yi("sp"),mg=yi("rtg"),gg=yi("rtc");function _g(t,e=Gt){pa("ec",t,e)}const xh="components";function eu(t,e){return yh(xh,t,!0,e)||t}const Sh=Symbol.for("v-ndc");function Au(t){return At(t)?yh(xh,t,!1)||t:t||Sh}function yh(t,e,n=!0,i=!1){const r=rn||Gt;if(r){const s=r.type;{const a=i_(s,!1);if(a&&(a===e||a===Tn(e)||a===la(Tn(e))))return s}const o=Ru(r[t]||s[t],e)||Ru(r.appContext[t],e);return!o&&i?s:o}}function Ru(t,e){return t&&(t[e]||t[Tn(e)]||t[la(Tn(e))])}function Ft(t,e,n,i){let r;const s=n,o=je(t);if(o||At(t)){const a=o&&Vr(t);let l=!1,c=!1;a&&(l=!bn(t),c=zi(t),t=ua(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Xo(Vt(t[u])):Vt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Et(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Fl=t=>t?Hh(t)?_a(t):Fl(t.parent):null,bs=Ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Fl(t.parent),$root:t=>Fl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mh(t),$forceUpdate:t=>t.f||(t.f=()=>{Qc(t.update)}),$nextTick:t=>t.n||(t.n=sh.bind(t.proxy)),$watch:t=>Bg.bind(t)}),Wa=(t,e)=>t!==xt&&!t.__isScriptSetup&&dt(t,e),vg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Wa(i,e))return o[e]=1,i[e];if(r!==xt&&dt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&dt(c,e))return o[e]=3,s[e];if(n!==xt&&dt(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=bs[e];let f,d;if(u)return e==="$attrs"&&$t(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==xt&&dt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,dt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Wa(r,e)?(r[e]=n,!0):i!==xt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==xt&&dt(t,o)||Wa(e,o)||(a=s[0])&&dt(a,o)||dt(i,o)||dt(bs,o)||dt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cu(t){return je(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bl=!0;function xg(t){const e=Mh(t),n=t.proxy,i=t.ctx;Bl=!1,e.beforeCreate&&Pu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:T,unmounted:y,render:L,renderTracked:C,renderTriggered:P,errorCaptured:F,serverPrefetch:b,expose:S,inheritAttrs:D,components:B,directives:G,filters:Y}=e;if(c&&Sg(c,i,null),o)for(const fe in o){const q=o[fe];Qe(q)&&(i[fe]=q.bind(n))}if(r){const fe=r.call(n,n);Et(fe)&&(t.data=fa(fe))}if(Bl=!0,s)for(const fe in s){const q=s[fe],Me=Qe(q)?q.bind(n,n):Qe(q.get)?q.get.bind(n,n):Yn,Ae=!Qe(q)&&Qe(q.set)?q.set.bind(n):Yn,Re=ct({get:Me,set:Ae});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>Re.value,set:He=>Re.value=He})}if(a)for(const fe in a)Eh(a[fe],i,n,fe);if(l){const fe=Qe(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(q=>{Po(q,fe[q])})}u&&Pu(u,t,"c");function J(fe,q){je(q)?q.forEach(Me=>fe(Me.bind(n))):q&&fe(q.bind(n))}if(J(fg,f),J(kn,d),J(dg,p),J(hg,g),J(lg,_),J(cg,m),J(_g,F),J(gg,C),J(mg,P),J(vh,w),J(Sr,y),J(pg,b),je(S))if(S.length){const fe=t.exposed||(t.exposed={});S.forEach(q=>{Object.defineProperty(fe,q,{get:()=>n[q],set:Me=>n[q]=Me})})}else t.exposed||(t.exposed={});L&&t.render===Yn&&(t.render=L),D!=null&&(t.inheritAttrs=D),B&&(t.components=B),G&&(t.directives=G),b&&gh(t)}function Sg(t,e,n=Yn){je(t)&&(t=kl(t));for(const i in t){const r=t[i];let s;Et(r)?"default"in r?s=Kn(r.from||i,r.default,!0):s=Kn(r.from||i):s=Kn(r),jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Pu(t,e,n){Fn(je(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Eh(t,e,n,i){let r=i.includes(".")?Oh(n,i):()=>n[i];if(At(t)){const s=e[t];Qe(s)&&Do(r,s)}else if(Qe(t))Do(r,t.bind(n));else if(Et(t))if(je(t))t.forEach(s=>Eh(s,e,n,i));else{const s=Qe(t.handler)?t.handler.bind(n):e[t.handler];Qe(s)&&Do(r,s,t)}}function Mh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ko(l,c,o,!0)),Ko(l,e,o)),Et(e)&&s.set(e,l),l}function Ko(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ko(t,s,n,!0),r&&r.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=yg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yg={data:Du,props:Lu,emits:Lu,methods:_s,computed:_s,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:_s,directives:_s,watch:Mg,provide:Du,inject:Eg};function Du(t,e){return e?t?function(){return Ht(Qe(t)?t.call(this,this):t,Qe(e)?e.call(this,this):e)}:e:t}function Eg(t,e){return _s(kl(t),kl(e))}function kl(t){if(je(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function _s(t,e){return t?Ht(Object.create(null),t,e):e}function Lu(t,e){return t?je(t)&&je(e)?[...new Set([...t,...e])]:Ht(Object.create(null),Cu(t),Cu(e??{})):e}function Mg(t,e){if(!t)return e;if(!e)return t;const n=Ht(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function bh(){return{app:null,config:{isNativeTag:hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bg=0;function Tg(t,e){return function(i,r=null){Qe(i)||(i=Ht({},i)),r!=null&&!Et(r)&&(r=null);const s=bh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:bg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:s_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...f)):Qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ie(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,_a(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Fn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Wr;Wr=c;try{return u()}finally{Wr=f}}};return c}}let Wr=null;function Po(t,e){if(Gt){let n=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===n&&(n=Gt.provides=Object.create(i)),n[t]=e}}function Kn(t,e,n=!1){const i=Gt||rn;if(i||Wr){let r=Wr?Wr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Qe(e)?e.call(i&&i.proxy):e}}const Th={},wh=()=>Object.create(Th),Ah=t=>Object.getPrototypeOf(t)===Th;function wg(t,e,n,i=!1){const r={},s=wh();t.propsDefaults=Object.create(null),Rh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:eh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Ag(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ut(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ma(t.emitsOptions,d))continue;const p=e[d];if(l)if(dt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=Tn(d);r[g]=zl(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Rh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!dt(e,f)&&((u=xr(f))===f||!dt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=zl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!dt(e,f))&&(delete s[f],c=!0)}c&&ci(t.attrs,"set","")}function Rh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&dt(r,u=Tn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ma(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ut(n),c=a||xt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=zl(r,l,f,c[f],t,!dt(c,f))}}return o}function zl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ws(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===xr(n))&&(i=!0))}return i}const Rg=new WeakMap;function Ch(t,e,n=!1){const i=n?Rg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Qe(t)){const u=f=>{l=!0;const[d,p]=Ch(f,e,!0);Ht(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Et(t)&&i.set(t,zr),zr;if(je(s))for(let u=0;u<s.length;u++){const f=Tn(s[u]);Iu(f)&&(o[f]=xt)}else if(s)for(const u in s){const f=Tn(u);if(Iu(f)){const d=s[u],p=o[f]=je(d)||Qe(d)?{type:d}:Ht({},d),g=p.type;let _=!1,m=!0;if(je(g))for(let h=0;h<g.length;++h){const w=g[h],T=Qe(w)&&w.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(m=!1)}else _=Qe(g)&&g.name==="Boolean";p[0]=_,p[1]=m,(_||dt(p,"default"))&&a.push(f)}}const c=[o,a];return Et(t)&&i.set(t,c),c}function Iu(t){return t[0]!=="$"&&!xs(t)}const tu=t=>t[0]==="_"||t==="$stable",nu=t=>je(t)?t.map($n):[$n(t)],Cg=(t,e,n)=>{if(e._n)return e;const i=Es((...r)=>nu(e(...r)),n);return i._c=!1,i},Ph=(t,e,n)=>{const i=t._ctx;for(const r in t){if(tu(r))continue;const s=t[r];if(Qe(s))e[r]=Cg(r,s,i);else if(s!=null){const o=nu(s);e[r]=()=>o}}},Dh=(t,e)=>{const n=nu(e);t.slots.default=()=>n},Lh=(t,e,n)=>{for(const i in e)(n||!tu(i))&&(t[i]=e[i])},Pg=(t,e,n)=>{const i=t.slots=wh();if(t.vnode.shapeFlag&32){const r=e._;r?(Lh(i,e,n),n&&Od(i,"_",r,!0)):Ph(e,i)}else e&&Dh(t,e)},Dg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Lh(r,e,n):(s=!e.$stable,Ph(e,r)),o=e}else e&&(Dh(t,e),o={default:1});if(s)for(const a in r)!tu(a)&&o[a]==null&&delete r[a]},mn=Xg;function Lg(t){return Ig(t)}function Ig(t,e){const n=ca();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Yn,insertStaticContent:g}=t,_=(A,R,x,re=null,Q=null,z=null,j=void 0,se=null,V=!!R.dynamicChildren)=>{if(A===R)return;A&&!or(A,R)&&(re=O(A),He(A,Q,z,!0),A=null),R.patchFlag===-2&&(V=!1,R.dynamicChildren=null);const{type:X,ref:be,shapeFlag:E}=R;switch(X){case ga:m(A,R,x,re);break;case Qt:h(A,R,x,re);break;case Lo:A==null&&w(R,x,re,j);break;case ht:B(A,R,x,re,Q,z,j,se,V);break;default:E&1?L(A,R,x,re,Q,z,j,se,V):E&6?G(A,R,x,re,Q,z,j,se,V):(E&64||E&128)&&X.process(A,R,x,re,Q,z,j,se,V,pe)}be!=null&&Q&&Yo(be,A&&A.ref,z,R||A,!R)},m=(A,R,x,re)=>{if(A==null)i(R.el=a(R.children),x,re);else{const Q=R.el=A.el;R.children!==A.children&&c(Q,R.children)}},h=(A,R,x,re)=>{A==null?i(R.el=l(R.children||""),x,re):R.el=A.el},w=(A,R,x,re)=>{[A.el,A.anchor]=g(A.children,R,x,re,A.el,A.anchor)},T=({el:A,anchor:R},x,re)=>{let Q;for(;A&&A!==R;)Q=d(A),i(A,x,re),A=Q;i(R,x,re)},y=({el:A,anchor:R})=>{let x;for(;A&&A!==R;)x=d(A),r(A),A=x;r(R)},L=(A,R,x,re,Q,z,j,se,V)=>{R.type==="svg"?j="svg":R.type==="math"&&(j="mathml"),A==null?C(R,x,re,Q,z,j,se,V):b(A,R,Q,z,j,se,V)},C=(A,R,x,re,Q,z,j,se)=>{let V,X;const{props:be,shapeFlag:E,transition:v,dirs:I}=A;if(V=A.el=o(A.type,z,be&&be.is,be),E&8?u(V,A.children):E&16&&F(A.children,V,null,re,Q,Xa(A,z),j,se),I&&qi(A,null,re,"created"),P(V,A,A.scopeId,j,re),be){for(const te in be)te!=="value"&&!xs(te)&&s(V,te,null,be[te],z,re);"value"in be&&s(V,"value",null,be.value,z),(X=be.onVnodeBeforeMount)&&Gn(X,re,A)}I&&qi(A,null,re,"beforeMount");const $=Ug(Q,v);$&&v.beforeEnter(V),i(V,R,x),((X=be&&be.onVnodeMounted)||$||I)&&mn(()=>{X&&Gn(X,re,A),$&&v.enter(V),I&&qi(A,null,re,"mounted")},Q)},P=(A,R,x,re,Q)=>{if(x&&p(A,x),re)for(let z=0;z<re.length;z++)p(A,re[z]);if(Q){let z=Q.subTree;if(R===z||Bh(z.type)&&(z.ssContent===R||z.ssFallback===R)){const j=Q.vnode;P(A,j,j.scopeId,j.slotScopeIds,Q.parent)}}},F=(A,R,x,re,Q,z,j,se,V=0)=>{for(let X=V;X<A.length;X++){const be=A[X]=se?Ii(A[X]):$n(A[X]);_(null,be,R,x,re,Q,z,j,se)}},b=(A,R,x,re,Q,z,j)=>{const se=R.el=A.el;let{patchFlag:V,dynamicChildren:X,dirs:be}=R;V|=A.patchFlag&16;const E=A.props||xt,v=R.props||xt;let I;if(x&&ji(x,!1),(I=v.onVnodeBeforeUpdate)&&Gn(I,x,R,A),be&&qi(R,A,x,"beforeUpdate"),x&&ji(x,!0),(E.innerHTML&&v.innerHTML==null||E.textContent&&v.textContent==null)&&u(se,""),X?S(A.dynamicChildren,X,se,x,re,Xa(R,Q),z):j||q(A,R,se,null,x,re,Xa(R,Q),z,!1),V>0){if(V&16)D(se,E,v,x,Q);else if(V&2&&E.class!==v.class&&s(se,"class",null,v.class,Q),V&4&&s(se,"style",E.style,v.style,Q),V&8){const $=R.dynamicProps;for(let te=0;te<$.length;te++){const W=$[te],Pe=E[W],oe=v[W];(oe!==Pe||W==="value")&&s(se,W,Pe,oe,Q,x)}}V&1&&A.children!==R.children&&u(se,R.children)}else!j&&X==null&&D(se,E,v,x,Q);((I=v.onVnodeUpdated)||be)&&mn(()=>{I&&Gn(I,x,R,A),be&&qi(R,A,x,"updated")},re)},S=(A,R,x,re,Q,z,j)=>{for(let se=0;se<R.length;se++){const V=A[se],X=R[se],be=V.el&&(V.type===ht||!or(V,X)||V.shapeFlag&198)?f(V.el):x;_(V,X,be,null,re,Q,z,j,!0)}},D=(A,R,x,re,Q)=>{if(R!==x){if(R!==xt)for(const z in R)!xs(z)&&!(z in x)&&s(A,z,R[z],null,Q,re);for(const z in x){if(xs(z))continue;const j=x[z],se=R[z];j!==se&&z!=="value"&&s(A,z,se,j,Q,re)}"value"in x&&s(A,"value",R.value,x.value,Q)}},B=(A,R,x,re,Q,z,j,se,V)=>{const X=R.el=A?A.el:a(""),be=R.anchor=A?A.anchor:a("");let{patchFlag:E,dynamicChildren:v,slotScopeIds:I}=R;I&&(se=se?se.concat(I):I),A==null?(i(X,x,re),i(be,x,re),F(R.children||[],x,be,Q,z,j,se,V)):E>0&&E&64&&v&&A.dynamicChildren?(S(A.dynamicChildren,v,x,Q,z,j,se),(R.key!=null||Q&&R===Q.subTree)&&Ih(A,R,!0)):q(A,R,x,be,Q,z,j,se,V)},G=(A,R,x,re,Q,z,j,se,V)=>{R.slotScopeIds=se,A==null?R.shapeFlag&512?Q.ctx.activate(R,x,re,j,V):Y(R,x,re,Q,z,j,V):he(A,R,V)},Y=(A,R,x,re,Q,z,j)=>{const se=A.component=Zg(A,re,Q);if(ha(A)&&(se.ctx.renderer=pe),Qg(se,!1,j),se.asyncDep){if(Q&&Q.registerDep(se,J,j),!A.el){const V=se.subTree=Ie(Qt);h(null,V,R,x)}}else J(se,A,R,x,Q,z,j)},he=(A,R,x)=>{const re=R.component=A.component;if(Gg(A,R,x))if(re.asyncDep&&!re.asyncResolved){fe(re,R,x);return}else re.next=R,re.update();else R.el=A.el,re.vnode=R},J=(A,R,x,re,Q,z,j)=>{const se=()=>{if(A.isMounted){let{next:E,bu:v,u:I,parent:$,vnode:te}=A;{const xe=Uh(A);if(xe){E&&(E.el=te.el,fe(A,E,j)),xe.asyncDep.then(()=>{A.isUnmounted||se()});return}}let W=E,Pe;ji(A,!1),E?(E.el=te.el,fe(A,E,j)):E=te,v&&Ba(v),(Pe=E.props&&E.props.onVnodeBeforeUpdate)&&Gn(Pe,$,E,te),ji(A,!0);const oe=Nu(A),ge=A.subTree;A.subTree=oe,_(ge,oe,f(ge.el),O(ge),A,Q,z),E.el=oe.el,W===null&&Wg(A,oe.el),I&&mn(I,Q),(Pe=E.props&&E.props.onVnodeUpdated)&&mn(()=>Gn(Pe,$,E,te),Q)}else{let E;const{el:v,props:I}=R,{bm:$,m:te,parent:W,root:Pe,type:oe}=A,ge=Ms(R);ji(A,!1),$&&Ba($),!ge&&(E=I&&I.onVnodeBeforeMount)&&Gn(E,W,R),ji(A,!0);{Pe.ce&&Pe.ce._injectChildStyle(oe);const xe=A.subTree=Nu(A);_(null,xe,x,re,A,Q,z),R.el=xe.el}if(te&&mn(te,Q),!ge&&(E=I&&I.onVnodeMounted)){const xe=R;mn(()=>Gn(E,W,xe),Q)}(R.shapeFlag&256||W&&Ms(W.vnode)&&W.vnode.shapeFlag&256)&&A.a&&mn(A.a,Q),A.isMounted=!0,R=x=re=null}};A.scope.on();const V=A.effect=new zd(se);A.scope.off();const X=A.update=V.run.bind(V),be=A.job=V.runIfDirty.bind(V);be.i=A,be.id=A.uid,V.scheduler=()=>Qc(be),ji(A,!0),X()},fe=(A,R,x)=>{R.component=A;const re=A.vnode.props;A.vnode=R,A.next=null,Ag(A,R.props,re,x),Dg(A,R.children,x),gi(),Tu(A),_i()},q=(A,R,x,re,Q,z,j,se,V=!1)=>{const X=A&&A.children,be=A?A.shapeFlag:0,E=R.children,{patchFlag:v,shapeFlag:I}=R;if(v>0){if(v&128){Ae(X,E,x,re,Q,z,j,se,V);return}else if(v&256){Me(X,E,x,re,Q,z,j,se,V);return}}I&8?(be&16&&Ne(X,Q,z),E!==X&&u(x,E)):be&16?I&16?Ae(X,E,x,re,Q,z,j,se,V):Ne(X,Q,z,!0):(be&8&&u(x,""),I&16&&F(E,x,re,Q,z,j,se,V))},Me=(A,R,x,re,Q,z,j,se,V)=>{A=A||zr,R=R||zr;const X=A.length,be=R.length,E=Math.min(X,be);let v;for(v=0;v<E;v++){const I=R[v]=V?Ii(R[v]):$n(R[v]);_(A[v],I,x,null,Q,z,j,se,V)}X>be?Ne(A,Q,z,!0,!1,E):F(R,x,re,Q,z,j,se,V,E)},Ae=(A,R,x,re,Q,z,j,se,V)=>{let X=0;const be=R.length;let E=A.length-1,v=be-1;for(;X<=E&&X<=v;){const I=A[X],$=R[X]=V?Ii(R[X]):$n(R[X]);if(or(I,$))_(I,$,x,null,Q,z,j,se,V);else break;X++}for(;X<=E&&X<=v;){const I=A[E],$=R[v]=V?Ii(R[v]):$n(R[v]);if(or(I,$))_(I,$,x,null,Q,z,j,se,V);else break;E--,v--}if(X>E){if(X<=v){const I=v+1,$=I<be?R[I].el:re;for(;X<=v;)_(null,R[X]=V?Ii(R[X]):$n(R[X]),x,$,Q,z,j,se,V),X++}}else if(X>v)for(;X<=E;)He(A[X],Q,z,!0),X++;else{const I=X,$=X,te=new Map;for(X=$;X<=v;X++){const Oe=R[X]=V?Ii(R[X]):$n(R[X]);Oe.key!=null&&te.set(Oe.key,X)}let W,Pe=0;const oe=v-$+1;let ge=!1,xe=0;const ie=new Array(oe);for(X=0;X<oe;X++)ie[X]=0;for(X=I;X<=E;X++){const Oe=A[X];if(Pe>=oe){He(Oe,Q,z,!0);continue}let Fe;if(Oe.key!=null)Fe=te.get(Oe.key);else for(W=$;W<=v;W++)if(ie[W-$]===0&&or(Oe,R[W])){Fe=W;break}Fe===void 0?He(Oe,Q,z,!0):(ie[Fe-$]=X+1,Fe>=xe?xe=Fe:ge=!0,_(Oe,R[Fe],x,null,Q,z,j,se,V),Pe++)}const Te=ge?Ng(ie):zr;for(W=Te.length-1,X=oe-1;X>=0;X--){const Oe=$+X,Fe=R[Oe],we=Oe+1<be?R[Oe+1].el:re;ie[X]===0?_(null,Fe,x,we,Q,z,j,se,V):ge&&(W<0||X!==Te[W]?Re(Fe,x,we,2):W--)}}},Re=(A,R,x,re,Q=null)=>{const{el:z,type:j,transition:se,children:V,shapeFlag:X}=A;if(X&6){Re(A.component.subTree,R,x,re);return}if(X&128){A.suspense.move(R,x,re);return}if(X&64){j.move(A,R,x,pe);return}if(j===ht){i(z,R,x);for(let E=0;E<V.length;E++)Re(V[E],R,x,re);i(A.anchor,R,x);return}if(j===Lo){T(A,R,x);return}if(re!==2&&X&1&&se)if(re===0)se.beforeEnter(z),i(z,R,x),mn(()=>se.enter(z),Q);else{const{leave:E,delayLeave:v,afterLeave:I}=se,$=()=>{A.ctx.isUnmounted?r(z):i(z,R,x)},te=()=>{E(z,()=>{$(),I&&I()})};v?v(z,$,te):te()}else i(z,R,x)},He=(A,R,x,re=!1,Q=!1)=>{const{type:z,props:j,ref:se,children:V,dynamicChildren:X,shapeFlag:be,patchFlag:E,dirs:v,cacheIndex:I}=A;if(E===-2&&(Q=!1),se!=null&&(gi(),Yo(se,null,x,A,!0),_i()),I!=null&&(R.renderCache[I]=void 0),be&256){R.ctx.deactivate(A);return}const $=be&1&&v,te=!Ms(A);let W;if(te&&(W=j&&j.onVnodeBeforeUnmount)&&Gn(W,R,A),be&6)ye(A.component,x,re);else{if(be&128){A.suspense.unmount(x,re);return}$&&qi(A,null,R,"beforeUnmount"),be&64?A.type.remove(A,R,x,pe,re):X&&!X.hasOnce&&(z!==ht||E>0&&E&64)?Ne(X,R,x,!1,!0):(z===ht&&E&384||!Q&&be&16)&&Ne(V,R,x),re&&We(A)}(te&&(W=j&&j.onVnodeUnmounted)||$)&&mn(()=>{W&&Gn(W,R,A),$&&qi(A,null,R,"unmounted")},x)},We=A=>{const{type:R,el:x,anchor:re,transition:Q}=A;if(R===ht){le(x,re);return}if(R===Lo){y(A);return}const z=()=>{r(x),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(A.shapeFlag&1&&Q&&!Q.persisted){const{leave:j,delayLeave:se}=Q,V=()=>j(x,z);se?se(A.el,z,V):V()}else z()},le=(A,R)=>{let x;for(;A!==R;)x=d(A),r(A),A=x;r(R)},ye=(A,R,x)=>{const{bum:re,scope:Q,job:z,subTree:j,um:se,m:V,a:X,parent:be,slots:{__:E}}=A;Uu(V),Uu(X),re&&Ba(re),be&&je(E)&&E.forEach(v=>{be.renderCache[v]=void 0}),Q.stop(),z&&(z.flags|=8,He(j,A,R,x)),se&&mn(se,R),mn(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ne=(A,R,x,re=!1,Q=!1,z=0)=>{for(let j=z;j<A.length;j++)He(A[j],R,x,re,Q)},O=A=>{if(A.shapeFlag&6)return O(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=d(A.anchor||A.el),x=R&&R[rg];return x?d(x):R};let ae=!1;const me=(A,R,x)=>{A==null?R._vnode&&He(R._vnode,null,null,!0):_(R._vnode||null,A,R,null,null,null,x),R._vnode=A,ae||(ae=!0,Tu(),ah(),ae=!1)},pe={p:_,um:He,m:Re,r:We,mt:Y,mc:F,pc:q,pbc:S,n:O,o:t};return{render:me,hydrate:void 0,createApp:Tg(me)}}function Xa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ji({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ih(t,e,n=!1){const i=t.children,r=e.children;if(je(i)&&je(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ii(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ih(o,a)),a.type===ga&&(a.el=o.el),a.type===Qt&&!a.el&&(a.el=o.el)}}function Ng(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Uh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Uh(e)}function Uu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Og=Symbol.for("v-scx"),Fg=()=>Kn(Og);function Do(t,e,n){return Nh(t,e,n)}function Nh(t,e,n=xt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ht({},n),l=e&&i||!e&&s!=="post";let c;if(Us){if(s==="sync"){const p=Fg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Yn,p.resume=Yn,p.pause=Yn,p}}const u=Gt;a.call=(p,g,_)=>Fn(p,u,g,_);let f=!1;s==="post"?a.scheduler=p=>{mn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():Qc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Qm(t,e,a);return Us&&(c?c.push(d):l&&d()),d}function Bg(t,e,n){const i=this.proxy,r=At(t)?t.includes(".")?Oh(i,t):()=>i[t]:t.bind(i,i);let s;Qe(e)?s=e:(s=e.handler,n=e);const o=Ws(this),a=Nh(r,s.bind(i),n);return o(),a}function Oh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const kg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tn(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function zg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xt;let r=n;const s=e.startsWith("update:"),o=s&&kg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>At(u)?u.trim():u)),o.number&&(r=n.map(vm)));let a,l=i[a=Fa(e)]||i[a=Fa(Tn(e))];!l&&s&&(l=i[a=Fa(xr(e))]),l&&Fn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Fn(c,t,6,r)}}function Fh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Qe(t)){const l=c=>{const u=Fh(c,e,!0);u&&(a=!0,Ht(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Et(t)&&i.set(t,null),null):(je(s)?s.forEach(l=>o[l]=null):Ht(o,s),Et(t)&&i.set(t,o),o)}function ma(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,xr(e))||dt(t,e))}function Nu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:_}=t,m=jo(t);let h,w;try{if(n.shapeFlag&4){const y=r||i,L=y;h=$n(c.call(L,y,u,f,p,d,g)),w=a}else{const y=e;h=$n(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),w=e.props?a:Hg(a)}}catch(y){Ts.length=0,da(y,t,1),h=Ie(Qt)}let T=h;if(w&&_!==!1){const y=Object.keys(w),{shapeFlag:L}=T;y.length&&L&7&&(s&&y.some(Gc)&&(w=Vg(w,s)),T=Hi(T,w,!1,!0))}return n.dirs&&(T=Hi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Ds(T,n.transition),h=T,jo(m),h}const Hg=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},Vg=(t,e)=>{const n={};for(const i in t)(!Gc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Gg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ou(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ma(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ou(i,o,c):!0:!!o;return!1}function Ou(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ma(n,s))return!0}return!1}function Wg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Bh=t=>t.__isSuspense;function Xg(t,e){e&&e.pendingBranch?je(t)?e.effects.push(...t):e.effects.push(t):ng(t)}const ht=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),Ts=[];let _n=null;function ce(t=!1){Ts.push(_n=t?null:[])}function $g(){Ts.pop(),_n=Ts[Ts.length-1]||null}let Ls=1;function Fu(t,e=!1){Ls+=t,t<0&&_n&&e&&(_n.hasOnce=!0)}function kh(t){return t.dynamicChildren=Ls>0?_n||zr:null,$g(),Ls>0&&_n&&_n.push(t),t}function ue(t,e,n,i,r,s){return kh(N(t,e,n,i,r,s,!0))}function Io(t,e,n,i,r){return kh(Ie(t,e,n,i,r,!0))}function Zo(t){return t?t.__v_isVNode===!0:!1}function or(t,e){return t.type===e.type&&t.key===e.key}const zh=({key:t})=>t??null,Uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?At(t)||jt(t)||Qe(t)?{i:rn,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,i=0,r=null,s=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zh(e),ref:e&&Uo(e),scopeId:ch,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(iu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=At(n)?8:16),Ls>0&&!o&&_n&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&_n.push(l),l}const Ie=qg;function qg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Sh)&&(t=Qt),Zo(t)){const a=Hi(t,e,!0);return n&&iu(a,n),Ls>0&&!s&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag=-2,a}if(r_(t)&&(t=t.__vccOpts),e){e=jg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=On(a)),Et(l)&&(Jc(l)&&!je(l)&&(l=Ht({},l)),e.style=Fi(l))}const o=At(t)?1:Bh(t)?128:uh(t)?64:Et(t)?4:Qe(t)?2:0;return N(t,e,n,i,r,o,s,!0)}function jg(t){return t?Jc(t)||Ah(t)?Ht({},t):t:null}function Hi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?zn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&zh(c),ref:e&&e.ref?n&&s?je(s)?s.concat(Uo(e)):[s,Uo(e)]:Uo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Hi(t.ssContent),ssFallback:t.ssFallback&&Hi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ds(u,l.clone(u)),u}function gn(t=" ",e=0){return Ie(ga,null,t,e)}function Is(t,e){const n=Ie(Lo,null,t);return n.staticCount=e,n}function Je(t="",e=!1){return e?(ce(),Io(Qt,null,t)):Ie(Qt,null,t)}function $n(t){return t==null||typeof t=="boolean"?Ie(Qt):je(t)?Ie(ht,null,t.slice()):Zo(t)?Ii(t):Ie(ga,null,String(t))}function Ii(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Hi(t)}function iu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(je(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),iu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ah(e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:rn},n=32):(e=String(e),i&64?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function zn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=On([e.class,i.class]));else if(r==="style")e.style=Fi([e.style,i.style]);else if(sa(r)){const s=e[r],o=i[r];o&&s!==o&&!(je(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Gn(t,e,n,i=null){Fn(t,e,7,[n,i])}const Yg=bh();let Kg=0;function Zg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Yg,s={uid:Kg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ch(i,r),emitsOptions:Fh(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zg.bind(null,s),t.ce&&t.ce(s),s}let Gt=null;const Jg=()=>Gt||rn;let Jo,Hl;{const t=ca(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>Gt=n),Hl=e("__VUE_SSR_SETTERS__",n=>Us=n)}const Ws=t=>{const e=Gt;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},Bu=()=>{Gt&&Gt.scope.off(),Jo(null)};function Hh(t){return t.vnode.shapeFlag&4}let Us=!1;function Qg(t,e=!1,n=!1){e&&Hl(e);const{props:i,children:r}=t.vnode,s=Hh(t);wg(t,i,s,e),Pg(t,r,n||e);const o=s?e_(t,e):void 0;return e&&Hl(!1),o}function e_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vg);const{setup:i}=n;if(i){gi();const r=t.setupContext=i.length>1?n_(t):null,s=Ws(t),o=Gs(i,t,0,[t.props,r]),a=Id(o);if(_i(),s(),(a||t.sp)&&!Ms(t)&&gh(t),a){if(o.then(Bu,Bu),e)return o.then(l=>{ku(t,l)}).catch(l=>{da(l,t,0)});t.asyncDep=o}else ku(t,o)}else Vh(t)}function ku(t,e,n){Qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Et(e)&&(t.setupState=ih(e)),Vh(t)}function Vh(t,e,n){const i=t.type;t.render||(t.render=i.render||Yn);{const r=Ws(t);gi();try{xg(t)}finally{_i(),r()}}}const t_={get(t,e){return $t(t,"get",""),t[e]}};function n_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,t_),slots:t.slots,emit:t.emit,expose:e}}function _a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ih($m(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)},has(e,n){return n in e||n in bs}})):t.proxy}function i_(t,e=!0){return Qe(t)?t.displayName||t.name:t.name||e&&t.__name}function r_(t){return Qe(t)&&"__vccOpts"in t}const ct=(t,e)=>Zm(t,e,Us);function ru(t,e,n){const i=arguments.length;return i===2?Et(e)&&!je(e)?Zo(e)?Ie(t,null,[e]):Ie(t,e):Ie(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Zo(n)&&(n=[n]),Ie(t,e,n))}const s_="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const zu=typeof window<"u"&&window.trustedTypes;if(zu)try{Vl=zu.createPolicy("vue",{createHTML:t=>t})}catch{}const Gh=Vl?t=>Vl.createHTML(t):t=>t,o_="http://www.w3.org/2000/svg",a_="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,Hu=li&&li.createElement("template"),l_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?li.createElementNS(o_,t):e==="mathml"?li.createElementNS(a_,t):n?li.createElement(t,{is:n}):li.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>li.createTextNode(t),createComment:t=>li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Hu.innerHTML=Gh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Hu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Mi="transition",ls="animation",Ns=Symbol("_vtc"),Wh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},c_=Ht({},fh,Wh),u_=t=>(t.displayName="Transition",t.props=c_,t),f_=u_((t,{slots:e})=>ru(ag,d_(t),e)),Yi=(t,e=[])=>{je(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vu=t=>t?je(t)?t.some(e=>e.length>1):t.length>1:!1;function d_(t){const e={};for(const B in t)B in Wh||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=h_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:h,onEnter:w,onEnterCancelled:T,onLeave:y,onLeaveCancelled:L,onBeforeAppear:C=h,onAppear:P=w,onAppearCancelled:F=T}=e,b=(B,G,Y,he)=>{B._enterCancelled=he,Ki(B,G?u:a),Ki(B,G?c:o),Y&&Y()},S=(B,G)=>{B._isLeaving=!1,Ki(B,f),Ki(B,p),Ki(B,d),G&&G()},D=B=>(G,Y)=>{const he=B?P:w,J=()=>b(G,B,Y);Yi(he,[G,J]),Gu(()=>{Ki(G,B?l:s),ei(G,B?u:a),Vu(he)||Wu(G,i,_,J)})};return Ht(e,{onBeforeEnter(B){Yi(h,[B]),ei(B,s),ei(B,o)},onBeforeAppear(B){Yi(C,[B]),ei(B,l),ei(B,c)},onEnter:D(!1),onAppear:D(!0),onLeave(B,G){B._isLeaving=!0;const Y=()=>S(B,G);ei(B,f),B._enterCancelled?(ei(B,d),qu()):(qu(),ei(B,d)),Gu(()=>{B._isLeaving&&(Ki(B,f),ei(B,p),Vu(y)||Wu(B,i,m,Y))}),Yi(y,[B,Y])},onEnterCancelled(B){b(B,!1,void 0,!0),Yi(T,[B])},onAppearCancelled(B){b(B,!0,void 0,!0),Yi(F,[B])},onLeaveCancelled(B){S(B),Yi(L,[B])}})}function h_(t){if(t==null)return null;if(Et(t))return[$a(t.enter),$a(t.leave)];{const e=$a(t);return[e,e]}}function $a(t){return xm(t)}function ei(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ns]||(t[Ns]=new Set)).add(e)}function Ki(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ns];n&&(n.delete(e),n.size||(t[Ns]=void 0))}function Gu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let p_=0;function Wu(t,e,n,i){const r=t._endId=++p_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=m_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function m_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${Mi}Delay`),s=i(`${Mi}Duration`),o=Xu(r,s),a=i(`${ls}Delay`),l=i(`${ls}Duration`),c=Xu(a,l);let u=null,f=0,d=0;e===Mi?o>0&&(u=Mi,f=o,d=s.length):e===ls?c>0&&(u=ls,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Mi:ls:null,d=u?u===Mi?s.length:l.length:0);const p=u===Mi&&/\b(transform|all)(,|$)/.test(i(`${Mi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function Xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>$u(n)+$u(t[i])))}function $u(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function qu(){return document.body.offsetHeight}function g_(t,e,n){const i=t[Ns];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qo=Symbol("_vod"),Xh=Symbol("_vsh"),__={beforeMount(t,{value:e},{transition:n}){t[Qo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):cs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),cs(t,!0),i.enter(t)):i.leave(t,()=>{cs(t,!1)}):cs(t,e))},beforeUnmount(t,{value:e}){cs(t,e)}};function cs(t,e){t.style.display=e?t[Qo]:"none",t[Xh]=!e}const v_=Symbol(""),x_=/(^|;)\s*display\s*:/;function S_(t,e,n){const i=t.style,r=At(n);let s=!1;if(n&&!r){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&No(i,a,"")}else for(const o in e)n[o]==null&&No(i,o,"");for(const o in n)o==="display"&&(s=!0),No(i,o,n[o])}else if(r){if(e!==n){const o=i[v_];o&&(n+=";"+o),i.cssText=n,s=x_.test(n)}}else e&&t.removeAttribute("style");Qo in t&&(t[Qo]=s?i.display:"",t[Xh]&&(i.display="none"))}const ju=/\s*!important$/;function No(t,e,n){if(je(n))n.forEach(i=>No(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=y_(t,e);ju.test(n)?t.setProperty(xr(i),n.replace(ju,""),"important"):t[i]=n}}const Yu=["Webkit","Moz","ms"],qa={};function y_(t,e){const n=qa[e];if(n)return n;let i=Tn(e);if(i!=="filter"&&i in t)return qa[e]=i;i=la(i);for(let r=0;r<Yu.length;r++){const s=Yu[r]+i;if(s in t)return qa[e]=s}return e}const Ku="http://www.w3.org/1999/xlink";function Zu(t,e,n,i,r,s=Tm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ku,e.slice(6,e.length)):t.setAttributeNS(Ku,e,n):n==null||s&&!Fd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Gi(n)?String(n):n)}function Ju(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Gh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Fd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function E_(t,e,n,i){t.addEventListener(e,n,i)}function M_(t,e,n,i){t.removeEventListener(e,n,i)}const Qu=Symbol("_vei");function b_(t,e,n,i,r=null){const s=t[Qu]||(t[Qu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=T_(e);if(i){const c=s[e]=R_(i,r);E_(t,a,c,l)}else o&&(M_(t,a,o,l),s[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function T_(t){let e;if(ef.test(t)){e={};let i;for(;i=t.match(ef);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let ja=0;const w_=Promise.resolve(),A_=()=>ja||(w_.then(()=>ja=0),ja=Date.now());function R_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Fn(C_(i,n.value),e,5,[i])};return n.value=t,n.attached=A_(),n}function C_(t,e){if(je(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,P_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?g_(t,i,o):e==="style"?S_(t,n,i):sa(e)?Gc(e)||b_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D_(t,e,i,o))?(Ju(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!At(i))?Ju(t,Tn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Zu(t,e,i,o))};function D_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&Qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tf(e)&&At(n)?!1:e in t}const L_=["ctrl","shift","alt","meta"],I_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>L_.some(n=>t[`${n}Key`]&&!e.includes(n))},nf=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=I_[e[o]];if(a&&a(r,e))return}return t(r,...s)})},U_=Ht({patchProp:P_},l_);let rf;function N_(){return rf||(rf=Lg(U_))}const O_=(...t)=>{const e=N_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=B_(i);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,F_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function F_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function B_(t){return At(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Br=typeof document<"u";function k_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const pt=Object.assign;function Ya(t,e){const n={};for(const i in e){const r=e[i];n[i]=Bn(r)?r.map(t):t(r)}return n}const ws=()=>{},Bn=Array.isArray,$h=/#/g,z_=/&/g,H_=/\//g,V_=/=/g,G_=/\?/g,qh=/\+/g,W_=/%5B/g,X_=/%5D/g,jh=/%5E/g,$_=/%60/g,Yh=/%7B/g,q_=/%7C/g,Kh=/%7D/g,j_=/%20/g;function su(t){return encodeURI(""+t).replace(q_,"|").replace(W_,"[").replace(X_,"]")}function Y_(t){return su(t).replace(Yh,"{").replace(Kh,"}").replace(jh,"^")}function Gl(t){return su(t).replace(qh,"%2B").replace(j_,"+").replace($h,"%23").replace(z_,"%26").replace($_,"`").replace(Yh,"{").replace(Kh,"}").replace(jh,"^")}function K_(t){return Gl(t).replace(V_,"%3D")}function Z_(t){return su(t).replace($h,"%23").replace(G_,"%3F")}function J_(t){return t==null?"":Z_(t).replace(H_,"%2F")}function Os(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Q_=/\/$/,e0=t=>t.replace(Q_,"");function Ka(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=r0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Os(o)}}function t0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function n0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&jr(e.matched[i],n.matched[r])&&Zh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!i0(t[n],e[n]))return!1;return!0}function i0(t,e){return Bn(t)?of(t,e):Bn(e)?of(e,t):t===e}function of(t,e){return Bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function r0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fs;(function(t){t.pop="pop",t.push="push"})(Fs||(Fs={}));var As;(function(t){t.back="back",t.forward="forward",t.unknown=""})(As||(As={}));function s0(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),e0(t)}const o0=/^[^#]+#/;function a0(t,e){return t.replace(o0,"#")+e}function l0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function c0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=l0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const Wl=new Map;function u0(t,e){Wl.set(t,e)}function f0(t){const e=Wl.get(t);return Wl.delete(t),e}let d0=()=>location.protocol+"//"+location.host;function Jh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),sf(l,"")}return sf(n,t)+i+r}function h0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=Jh(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(p);r.forEach(h=>{h(n.value,g,{delta:m,type:Fs.pop,direction:m?m>0?As.forward:As.back:As.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(pt({},d.state,{scroll:va()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function lf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?va():null}}function p0(t){const{history:e,location:n}=window,i={value:Jh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:d0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=pt({},e.state,lf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=pt({},r.value,e.state,{forward:l,scroll:va()});s(u.current,u,!0);const f=pt({},lf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function m0(t){t=s0(t);const e=p0(t),n=h0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=pt({location:"",base:t,go:i,createHref:a0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function g0(t){return typeof t=="string"||t&&typeof t=="object"}function Qh(t){return typeof t=="string"||typeof t=="symbol"}const ep=Symbol("");var cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cf||(cf={}));function Yr(t,e){return pt(new Error,{type:t,[ep]:!0},e)}function ti(t,e){return t instanceof Error&&ep in t&&(e==null||!!(t.type&e))}const uf="[^/]+?",_0={sensitive:!1,strict:!1,start:!0,end:!0},v0=/[.+*?^${}()[\]/\\]/g;function x0(t,e){const n=pt({},_0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(v0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:h}=d;s.push({name:g,repeatable:_,optional:m});const w=h||uf;if(w!==uf){p+=10;try{new RegExp(`(${w})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+y.message)}}let T=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,p+=20,m&&(p+=-8),_&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:_,optional:m}=p,h=g in c?c[g]:"";if(Bn(h)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Bn(h)?h.join("/"):h;if(!w)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function S0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function tp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=S0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(ff(i))return 1;if(ff(r))return-1}return r.length-i.length}function ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y0={type:0,value:""},E0=/[a-zA-Z0-9_]/;function M0(t){if(!t)return[[]];if(t==="/")return[[y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:E0.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function b0(t,e,n){const i=x0(M0(t.path),n),r=pt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function T0(t,e){const n=[],i=new Map;e=pf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const g=!p,_=w0(f);_.aliasOf=p&&p.record;const m=pf(e,f),h=[_];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of y)h.push(pt({},_,{components:p?p.record.components:_.components,path:L,aliasOf:p?p.record:_}))}let w,T;for(const y of h){const{path:L}=y;if(d&&L[0]!=="/"){const C=d.record.path,P=C[C.length-1]==="/"?"":"/";y.path=d.record.path+(L&&P+L)}if(w=b0(y,d,m),p?p.alias.push(w):(T=T||w,T!==w&&T.alias.push(w),g&&f.name&&!hf(w)&&o(f.name)),np(w)&&l(w),_.children){const C=_.children;for(let P=0;P<C.length;P++)s(C[P],w,p&&p.children[P])}p=p||w}return T?()=>{o(T)}:ws}function o(f){if(Qh(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=C0(f,n);n.splice(d,0,f),f.record.name&&!hf(f)&&i.set(f.record.name,f)}function c(f,d){let p,g={},_,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Yr(1,{location:f});m=p.record.name,g=pt(df(d.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&df(f.params,p.keys.map(T=>T.name))),_=p.stringify(g)}else if(f.path!=null)_=f.path,p=n.find(T=>T.re.test(_)),p&&(g=p.parse(_),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!p)throw Yr(1,{location:f,currentLocation:d});m=p.record.name,g=pt({},d.params,f.params),_=p.stringify(g)}const h=[];let w=p;for(;w;)h.unshift(w.record),w=w.parent;return{name:m,path:_,params:g,matched:h,meta:R0(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function df(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function w0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:A0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function A0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function hf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function R0(t){return t.reduce((e,n)=>pt(e,n.meta),{})}function pf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function C0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;tp(t,e[s])<0?i=s:n=s+1}const r=P0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function P0(t){let e=t;for(;e=e.parent;)if(np(e)&&tp(t,e)===0)return e}function np({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function D0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(qh," "),o=s.indexOf("="),a=Os(o<0?s:s.slice(0,o)),l=o<0?null:Os(s.slice(o+1));if(a in e){let c=e[a];Bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function mf(t){let e="";for(let n in t){const i=t[n];if(n=K_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bn(i)?i.map(s=>s&&Gl(s)):[i&&Gl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function L0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const I0=Symbol(""),gf=Symbol(""),xa=Symbol(""),ip=Symbol(""),Xl=Symbol("");function us(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ui(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Yr(4,{from:n,to:e})):d instanceof Error?l(d):g0(d)?l(Yr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Za(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(U0(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ui(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=k_(u)?u.default:u;o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Ui(p,n,i,o,a,r)()}))}}return s}function U0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _f(t){const e=Kn(xa),n=Kn(ip),i=ct(()=>{const l=$e(t.to);return e.resolve(l)}),r=ct(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(jr.bind(null,u));if(d>-1)return d;const p=vf(l[c-2]);return c>1&&vf(u)===p&&f[f.length-1].path!==p?f.findIndex(jr.bind(null,l[c-2])):d}),s=ct(()=>r.value>-1&&B0(n.params,i.value.params)),o=ct(()=>r.value>-1&&r.value===n.matched.length-1&&Zh(n.params,i.value.params));function a(l={}){return F0(l)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(ws):Promise.resolve()}return{route:i,href:ct(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const N0=wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_f,setup(t,{slots:e}){const n=fa(_f(t)),{options:i}=Kn(xa),r=ct(()=>({[xf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[xf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:ru("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),O0=N0;function F0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function B0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Bn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xf=(t,e,n)=>t??e??n,k0=wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Kn(Xl),r=ct(()=>t.route||i.value),s=Kn(gf,0),o=ct(()=>{let c=$e(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ct(()=>r.value.matched[o.value]);Po(gf,ct(()=>o.value+1)),Po(I0,a),Po(Xl,r);const l=It();return Do(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!jr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Sf(n.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ru(d,pt({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sf(n.default,{Component:m,route:c})||m}}});function Sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z0=k0;function H0(t){const e=T0(t.routes,t),n=t.parseQuery||D0,i=t.stringifyQuery||mf,r=t.history,s=us(),o=us(),a=us(),l=qm(bi);let c=bi;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ya.bind(null,O=>""+O),f=Ya.bind(null,J_),d=Ya.bind(null,Os);function p(O,ae){let me,pe;return Qh(O)?(me=e.getRecordMatcher(O),pe=ae):pe=O,e.addRoute(pe,me)}function g(O){const ae=e.getRecordMatcher(O);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function h(O,ae){if(ae=pt({},ae||l.value),typeof O=="string"){const x=Ka(n,O,ae.path),re=e.resolve({path:x.path},ae),Q=r.createHref(x.fullPath);return pt(x,re,{params:d(re.params),hash:Os(x.hash),redirectedFrom:void 0,href:Q})}let me;if(O.path!=null)me=pt({},O,{path:Ka(n,O.path,ae.path).path});else{const x=pt({},O.params);for(const re in x)x[re]==null&&delete x[re];me=pt({},O,{params:f(x)}),ae.params=f(ae.params)}const pe=e.resolve(me,ae),Ve=O.hash||"";pe.params=u(d(pe.params));const A=t0(i,pt({},O,{hash:Y_(Ve),path:pe.path})),R=r.createHref(A);return pt({fullPath:A,hash:Ve,query:i===mf?L0(O.query):O.query||{}},pe,{redirectedFrom:void 0,href:R})}function w(O){return typeof O=="string"?Ka(n,O,l.value.path):pt({},O)}function T(O,ae){if(c!==O)return Yr(8,{from:ae,to:O})}function y(O){return P(O)}function L(O){return y(pt(w(O),{replace:!0}))}function C(O){const ae=O.matched[O.matched.length-1];if(ae&&ae.redirect){const{redirect:me}=ae;let pe=typeof me=="function"?me(O):me;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=w(pe):{path:pe},pe.params={}),pt({query:O.query,hash:O.hash,params:pe.path!=null?{}:O.params},pe)}}function P(O,ae){const me=c=h(O),pe=l.value,Ve=O.state,A=O.force,R=O.replace===!0,x=C(me);if(x)return P(pt(w(x),{state:typeof x=="object"?pt({},Ve,x.state):Ve,force:A,replace:R}),ae||me);const re=me;re.redirectedFrom=ae;let Q;return!A&&n0(i,pe,me)&&(Q=Yr(16,{to:re,from:pe}),Re(pe,pe,!0,!1)),(Q?Promise.resolve(Q):S(re,pe)).catch(z=>ti(z)?ti(z,2)?z:Ae(z):q(z,re,pe)).then(z=>{if(z){if(ti(z,2))return P(pt({replace:R},w(z.to),{state:typeof z.to=="object"?pt({},Ve,z.to.state):Ve,force:A}),ae||re)}else z=B(re,pe,!0,R,Ve);return D(re,pe,z),z})}function F(O,ae){const me=T(O,ae);return me?Promise.reject(me):Promise.resolve()}function b(O){const ae=le.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(O):O()}function S(O,ae){let me;const[pe,Ve,A]=V0(O,ae);me=Za(pe.reverse(),"beforeRouteLeave",O,ae);for(const x of pe)x.leaveGuards.forEach(re=>{me.push(Ui(re,O,ae))});const R=F.bind(null,O,ae);return me.push(R),Ne(me).then(()=>{me=[];for(const x of s.list())me.push(Ui(x,O,ae));return me.push(R),Ne(me)}).then(()=>{me=Za(Ve,"beforeRouteUpdate",O,ae);for(const x of Ve)x.updateGuards.forEach(re=>{me.push(Ui(re,O,ae))});return me.push(R),Ne(me)}).then(()=>{me=[];for(const x of A)if(x.beforeEnter)if(Bn(x.beforeEnter))for(const re of x.beforeEnter)me.push(Ui(re,O,ae));else me.push(Ui(x.beforeEnter,O,ae));return me.push(R),Ne(me)}).then(()=>(O.matched.forEach(x=>x.enterCallbacks={}),me=Za(A,"beforeRouteEnter",O,ae,b),me.push(R),Ne(me))).then(()=>{me=[];for(const x of o.list())me.push(Ui(x,O,ae));return me.push(R),Ne(me)}).catch(x=>ti(x,8)?x:Promise.reject(x))}function D(O,ae,me){a.list().forEach(pe=>b(()=>pe(O,ae,me)))}function B(O,ae,me,pe,Ve){const A=T(O,ae);if(A)return A;const R=ae===bi,x=Br?history.state:{};me&&(pe||R?r.replace(O.fullPath,pt({scroll:R&&x&&x.scroll},Ve)):r.push(O.fullPath,Ve)),l.value=O,Re(O,ae,me,R),Ae()}let G;function Y(){G||(G=r.listen((O,ae,me)=>{if(!ye.listening)return;const pe=h(O),Ve=C(pe);if(Ve){P(pt(Ve,{replace:!0}),pe).catch(ws);return}c=pe;const A=l.value;Br&&u0(af(A.fullPath,me.delta),va()),S(pe,A).catch(R=>ti(R,12)?R:ti(R,2)?(P(R.to,pe).then(x=>{ti(x,20)&&!me.delta&&me.type===Fs.pop&&r.go(-1,!1)}).catch(ws),Promise.reject()):(me.delta&&r.go(-me.delta,!1),q(R,pe,A))).then(R=>{R=R||B(pe,A,!1),R&&(me.delta&&!ti(R,8)?r.go(-me.delta,!1):me.type===Fs.pop&&ti(R,20)&&r.go(-1,!1)),D(pe,A,R)}).catch(ws)}))}let he=us(),J=us(),fe;function q(O,ae,me){Ae(O);const pe=J.list();return pe.length?pe.forEach(Ve=>Ve(O,ae,me)):console.error(O),Promise.reject(O)}function Me(){return fe&&l.value!==bi?Promise.resolve():new Promise((O,ae)=>{he.add([O,ae])})}function Ae(O){return fe||(fe=!O,Y(),he.list().forEach(([ae,me])=>O?me(O):ae()),he.reset()),O}function Re(O,ae,me,pe){const{scrollBehavior:Ve}=t;if(!Br||!Ve)return Promise.resolve();const A=!me&&f0(af(O.fullPath,0))||(pe||!me)&&history.state&&history.state.scroll||null;return sh().then(()=>Ve(O,ae,A)).then(R=>R&&c0(R)).catch(R=>q(R,O,ae))}const He=O=>r.go(O);let We;const le=new Set,ye={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:h,options:t,push:y,replace:L,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:Me,install(O){const ae=this;O.component("RouterLink",O0),O.component("RouterView",z0),O.config.globalProperties.$router=ae,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),Br&&!We&&l.value===bi&&(We=!0,y(r.location).catch(Ve=>{}));const me={};for(const Ve in bi)Object.defineProperty(me,Ve,{get:()=>l.value[Ve],enumerable:!0});O.provide(xa,ae),O.provide(ip,eh(me)),O.provide(Xl,l);const pe=O.unmount;le.add(O),O.unmount=function(){le.delete(O),le.size<1&&(c=bi,G&&G(),G=null,l.value=bi,We=!1,fe=!1),pe()}}};function Ne(O){return O.reduce((ae,me)=>ae.then(()=>b(me)),Promise.resolve())}return ye}function V0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>jr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>jr(c,l))||r.push(l))}return[n,i,r]}function G0(){return Kn(xa)}const Wi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},W0={class:"fixed top-0 left-0 right-0 z-30 flex justify-center",style:{"padding-top":"env(safe-area-inset-top)"}},X0={class:"flex items-start md:items-center w-full max-w-[1280px] px-4 md:px-16"},$0={class:"hidden md:flex items-center w-full justify-between"},q0={class:"rounded-full px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},j0={class:"flex gap-x-2"},Y0={class:"flex gap-x-6 rounded-full px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},K0=["href"],Z0={class:"flex flex-col gap-y-4 md:hidden items-center w-full justify-center"},J0={class:"flex gap-x-3 items-center rounded-full px-8 py-3 mt-2 backdrop-blur-2xl bg-white/10 border border-white/10"},Q0={class:"flex place-items-center"},ev={class:"flex flex-col gap-y-4 items-center"},tv={class:"flex flex-col gap-y-6 rounded-3xl min-w-64 px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},nv=["href"],iv={__name:"Header",setup(t){const e=G0(),n=It(!1),i=It(!1),r=[{name:"소개",link:"#intro"},{name:"후원",link:"#sponsors"},{name:"시간표",link:"#schedule"},{name:"연사",link:"#speakers"},{name:"준비위원회",link:"#organizers"},{name:"행사장",link:"#venue"}],s=()=>{window.dispatchEvent(new CustomEvent("reset-particles")),i.value=!0,setTimeout(()=>{i.value=!1},600),e.push("/")},o=()=>{window.open("https://www.ticketa.co/events/35","_blank")};return(a,l)=>{const c=eu("router-link");return ce(),ue("div",W0,[N("header",X0,[N("div",$0,[N("div",q0,[Ie(c,{to:"/",onClick:nf(s,["prevent"])},{default:Es(()=>[N("div",{class:On(["font-black text-xl cursor-pointer",{flash:i.value}])},l[1]||(l[1]=[N("span",{class:"text-white box-shadow-xl"},[gn("Let's Swift "),N("span",{class:"text-rainbow"},"2025")],-1)]),2)]),_:1})]),N("div",j0,[N("div",Y0,[(ce(),ue(ht,null,Ft(r,u=>N("div",{key:u},[N("a",{href:u.link,class:"font-semibold text-base text-white"},rt(u.name),9,K0)])),64))]),N("button",{onClick:o,class:"px-8 p-4 flex items-center font-semibold text-base text-slate-100 hover:text-white active:text-white backdrop-blur-2xl duration-300 bg-amber-500/60 hover:bg-amber-500/70 active:bg-amber-500/80 border border-white/10 rounded-full transition"}," 입장권 구매 ")])]),N("div",Z0,[N("div",J0,[Ie(c,{to:"/",onClick:nf(s,["prevent"])},{default:Es(()=>[N("div",{class:On(["font-black text-lg cursor-pointer",{flash:i.value}])},l[2]||(l[2]=[N("span",{class:"text-white box-shadow-xl"},[gn("Let's Swift "),N("span",{class:"text-rainbow"},"2025")],-1)]),2)]),_:1}),N("div",Q0,[N("button",{onClick:l[0]||(l[0]=u=>n.value=!n.value),class:"text-white"},l[3]||(l[3]=[N("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[N("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)]))])]),Ie(f_,{name:"mobile-menu"},{default:Es(()=>[ig(N("div",null,[N("div",ev,[N("div",tv,[(ce(),ue(ht,null,Ft(r,u=>N("div",{key:u},[N("a",{href:u.link,class:"font-semibold text-base text-white"},rt(u.name),9,nv)])),64))]),N("button",{onClick:o,class:"px-8 p-4 cursor-pointer flex items-center font-semibold text-base text-slate-100 hover:text-white active:text-white backdrop-blur-2xl duration-300 bg-themeMain/50 hover:bg-themeMain/70 active:bg-themeMain/50 rounded-full transition"}," 입장권 구매 ")])],512),[[__,n.value]])]),_:1})])])])}}},rv=Wi(iv,[["__scopeId","data-v-027569af"]]),sv=["width","height"],ov=N("title",null,"Facebook",-1),av=N("path",{d:"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"},null,-1),lv=[ov,av],ou=wn({__name:"FacebookIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),lv,16,sv))}}),cv=["width","height"],uv=N("title",null,"GitHub",-1),fv=N("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),dv=[uv,fv],Sa=wn({__name:"GitHubIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),dv,16,cv))}}),hv=["width","height"],pv=N("title",null,"Instagram",-1),mv=N("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},null,-1),gv=[pv,mv],ya=wn({__name:"InstagramIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),gv,16,hv))}}),_v=["width","height"],vv=N("title",null,"LinkedIn",-1),xv=N("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},null,-1),Sv=[vv,xv],Ea=wn({__name:"LinkedInIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Sv,16,_v))}}),yv=["width","height"],Ev=N("title",null,"Mail.Ru",-1),Mv=N("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"},null,-1),bv=[Ev,Mv],mr=wn({__name:"MailDotRuIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),bv,16,yv))}}),Tv=["width","height"],wv=N("title",null,"Mastodon",-1),Av=N("path",{d:"M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"},null,-1),Rv=[wv,Av],au=wn({__name:"MastodonIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Rv,16,Tv))}}),Cv=["width","height"],Pv=N("title",null,"Medium",-1),Dv=N("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"},null,-1),Lv=[Pv,Dv],lu=wn({__name:"MediumIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Lv,16,Cv))}}),Iv=["width","height"],Uv=N("title",null,"Threads",-1),Nv=N("path",{d:"M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"},null,-1),Ov=[Uv,Nv],cu=wn({__name:"ThreadsIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Ov,16,Iv))}}),Fv=["width","height"],Bv=N("title",null,"X",-1),kv=N("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},null,-1),zv=[Bv,kv],Ma=wn({__name:"XIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),zv,16,Fv))}}),Hv=["width","height"],Vv=N("title",null,"YouTube",-1),Gv=N("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),Wv=[Vv,Gv],ba=wn({__name:"YouTubeIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(ce(),ue("svg",zn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Wv,16,Hv))}}),Xv={class:"relative flex justify-center"},$v={class:"z-20 mb-8 relative flex flex-col backdrop-blur-2xl bg-white/10 border border-white/10 rounded-4xl p-4 w-full max-w-[1280px] mx-4"},qv={class:"flex justify-center"},jv={class:"px-8 xl:px-8 py-4 w-full max-w-[1280px] flex flex-col items-center text-white"},Yv={class:"px-2 pt-4 pb-12 grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-x-8 gap-y-12 text-xs font-semibold"},Kv={class:"flex flex-col space-y-3 items-start"},Zv=["href","target"],Jv={class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50 cursor-pointer"},Qv={class:"flex flex-col space-y-3 items-start"},ex=["href"],tx=["href"],nx=["href"],ix={class:"flex flex-col space-y-3 items-start"},rx=["href"],sx={__name:"Footer",setup(t){const e=[{text:"Let'Swift 뉴스레터 구독하기",url:"https://page.stibee.com/subscriptions/58654",target:"_blank"},{text:"Let'Swift 앱 다운로드",url:"https://apps.apple.com/app/id1282995254",target:"_blank"},{text:"행동지침",url:null,link:"/CodeOfConduct",target:""}],n=[{text:"행사 후원 문의",url:"mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"}],i={MailDotRuIcon:mr,GitHubIcon:Sa,XIcon:Ma,InstagramIcon:ya,YouTubeIcon:ba,LinkedInIcon:Ea},r=[{name:"Email",image:"MailDotRuIcon",url:"mailto:letswift.official@gmail.com"},{name:"YouTube",image:"YouTubeIcon",url:"https://www.youtube.com/@letswift_official"},{name:"YouTube (2023 이전)",image:"YouTubeIcon",url:"https://youtube.com/playlist?list=PLAHa1zfLtLiPY9gDxRwhNDbYZvjFKiurH&si=-Zft8ebxkt-65x4J"},{name:"LinkedIn",image:"LinkedInIcon",url:"https://www.linkedin.com/company/letswift"},{name:"Instagram",image:"InstagramIcon",url:"https://www.instagram.com/letswiftkr"},{name:"𝕏",image:"XIcon",url:"https://x.com/letswiftkr"},{name:"GitHub",image:"GitHubIcon",url:"https://github.com/letswiftconf"}],s=[{year:2024,url:"https://letswift.kr/2024",overlay_class:"bg-black/30",class:"",text_class:""},{year:2023,url:"https://letswift.kr/2023",overlay_class:"bg-black/30",class:"",text_class:""},{year:2022,url:"https://letswift.kr/2022",overlay_class:"bg-black/30",class:"",text_class:""},{year:2020,url:"https://letswift.kr/2020",overlay_class:"bg-black/30",class:"",text_class:""},{year:2019,url:"https://letswift.kr/2019",overlay_class:"bg-black/30",class:"",text_class:""},{year:2018,url:"https://letswift.kr/2018",overlay_class:"bg-black/30",class:"",text_class:""},{year:2017,url:"https://letswift.kr/2017",overlay_class:"bg-black/50",class:"bg-white",text_class:""},{year:2016,url:"https://letswift.kr/2016",overlay_class:"bg-black/50",class:"bg-white",text_class:""}],o=[{name:"홈페이지",image:"GitHubIcon",url:"https://github.com/letswiftconf/letswift.kr"},{name:"iOS 앱",image:"GitHubIcon",url:"https://github.com/letswiftconf/LetSwift"},{name:"뉴스레터",image:"GitHubIcon",url:"https://github.com/letswiftconf/newsletter"}];return(a,l)=>{const c=eu("router-link");return ce(),ue("div",Xv,[N("footer",$v,[N("div",qv,[N("div",jv,[l[4]||(l[4]=Is('<div class="px-2 flex grow w-full"><div class="text-lg font-bold text-zinc-200 select-none">Let&#39;Swift <span class="text-rainbow">2025</span></div><div class="grow"></div></div><div class="my-4 h-px w-full bg-white/10"></div>',2)),N("div",Yv,[N("div",Kv,[(ce(),ue(ht,null,Ft(e,u=>N("div",{key:u.text},[u.url!==null?(ce(),ue("a",{key:0,href:u.url,target:u.target,class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},rt(u.text),9,Zv)):(ce(),Io(c,{key:1,to:u.link},{default:Es(()=>[N("span",Jv,rt(u.text),1)]),_:2},1032,["to"]))])),64))]),N("div",Qv,[l[0]||(l[0]=N("div",{class:"font-bold text-zinc-200"},"후원",-1)),(ce(),ue(ht,null,Ft(n,u=>N("div",{key:u.text},[N("a",{href:u.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},rt(u.text),9,ex)])),64)),l[1]||(l[1]=N("div",{class:"pt-4 font-bold text-zinc-200"},"소식",-1)),(ce(),ue(ht,null,Ft(r,u=>N("div",{key:u.name},[N("a",{href:u.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(ce(),Io(Au(i[u.image]),{fill:"gray",width:"10",height:"10"})),N("span",null,rt(u.name),1)],8,tx)])),64)),l[2]||(l[2]=N("div",{class:"pt-4 font-bold text-zinc-200"},"오픈소스",-1)),(ce(),ue(ht,null,Ft(o,u=>N("div",{key:u.name},[N("a",{href:u.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(ce(),Io(Au(i[u.image]),{fill:"gray",width:"10",height:"10"})),N("span",null,rt(u.name),1)],8,nx)])),64))]),N("div",ix,[l[3]||(l[3]=N("div",null,"이전 행사",-1)),(ce(),ue(ht,null,Ft(s,u=>N("div",{key:u.text},[N("a",{href:u.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},rt(u.year),9,rx)])),64))])]),l[5]||(l[5]=Is('<div class="my-4 h-px w-full bg-white/10"></div><div class="px-2 w-full text-xs lg:flex lg:space-x-2 space-y-2 lg:space-y-0"><div><span class="text-zinc-400/80">Copyright © 2025 </span><span class="font-semibold text-zinc-200">Let&#39;Swift.</span><span class="text-zinc-400/80"> All rights reserved.</span></div></div>',2))])])])])}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uu="178",ox=0,yf=1,ax=2,rp=1,lx=2,ai=3,Vi=0,sn=1,fi=2,Bi=0,Xr=1,$l=2,Ef=3,Mf=4,cx=5,ar=100,ux=101,fx=102,dx=103,hx=104,px=200,mx=201,gx=202,_x=203,ql=204,jl=205,vx=206,xx=207,Sx=208,yx=209,Ex=210,Mx=211,bx=212,Tx=213,wx=214,Yl=0,Kl=1,Zl=2,Kr=3,Jl=4,Ql=5,ec=6,tc=7,sp=0,Ax=1,Rx=2,ki=0,Cx=1,Px=2,Dx=3,Lx=4,Ix=5,Ux=6,Nx=7,op=300,Zr=301,Jr=302,nc=303,ic=304,Ta=306,rc=1e3,cr=1001,sc=1002,Nn=1003,Ox=1004,so=1005,jn=1006,Ja=1007,ur=1008,vi=1009,ap=1010,lp=1011,Bs=1012,fu=1013,gr=1014,di=1015,Xs=1016,du=1017,hu=1018,ks=1020,cp=35902,up=1021,fp=1022,In=1023,zs=1026,Hs=1027,dp=1028,pu=1029,hp=1030,mu=1031,gu=1033,Oo=33776,Fo=33777,Bo=33778,ko=33779,oc=35840,ac=35841,lc=35842,cc=35843,uc=36196,fc=37492,dc=37496,hc=37808,pc=37809,mc=37810,gc=37811,_c=37812,vc=37813,xc=37814,Sc=37815,yc=37816,Ec=37817,Mc=37818,bc=37819,Tc=37820,wc=37821,zo=36492,Ac=36494,Rc=36495,pp=36283,Cc=36284,Pc=36285,Dc=36286,Fx=3200,Bx=3201,kx=0,zx=1,Ni="",Mn="srgb",Qr="srgb-linear",ea="linear",_t="srgb",Mr=7680,bf=519,Hx=512,Vx=513,Gx=514,mp=515,Wx=516,Xx=517,$x=518,qx=519,Tf=35044,wf="300 es",hi=2e3,ta=2001;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qa=Math.PI/180,Lc=180/Math.PI;function $s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function ot(t,e,n){return Math.max(e,Math.min(n,t))}function jx(t,e){return(t%e+e)%e}function el(t,e,n){return(1-n)*t+n*e}function fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*_,w=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const L=Math.sqrt(T),C=Math.atan2(L,h*w);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const y=a*w;if(l=l*m+d*y,c=c*m+p*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Af.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Af.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new Z,Af=new qs;class tt{constructor(e,n,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],w=r[1],T=r[4],y=r[7],L=r[2],C=r[5],P=r[8];return s[0]=o*_+a*w+l*L,s[3]=o*m+a*T+l*C,s[6]=o*h+a*y+l*P,s[1]=c*_+u*w+f*L,s[4]=c*m+u*T+f*C,s[7]=c*h+u*y+f*P,s[2]=d*_+p*w+g*L,s[5]=d*m+p*T+g*C,s[8]=d*h+p*y+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nl.makeScale(e,n)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,n){return this.premultiply(nl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new tt;function gp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function na(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yx(){const t=na("canvas");return t.style.display="block",t}const Rf={};function $r(t){t in Rf||(Rf[t]=!0,console.warn(t))}function Kx(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Zx(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jx(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cf=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pf=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){const t={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=qr(r.r),r.g=qr(r.g),r.b=qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ni?ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Qr]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Cf,fromXYZ:Pf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const lt=Qx();function mi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class eS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=na("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=na("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mi(n[i]/255)*255):n[i]=mi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class _u{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=$s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(il(r[o].image)):s.push(il(r[o]))}else s=il(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function il(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;const rl=new Z;class on extends ts{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=cr,r=cr,s=jn,o=ur,a=In,l=vi,c=on.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=$s(),this.name="",this.source=new _u(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=op;on.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,y=(p+1)/2,L=(h+1)/2,C=(u+d)/4,P=(f+_)/4,F=(g+m)/4;return T>y&&T>L?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=C/i,s=P/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=F/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this.w=ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this.w=ot(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new on(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new _u(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _p extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),ao.subVectors(this.max,ds),Tr.subVectors(e.a,ds),wr.subVectors(e.b,ds),Ar.subVectors(e.c,ds),Ti.subVectors(wr,Tr),wi.subVectors(Ar,wr),Zi.subVectors(Tr,Ar);let n=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Zi.z,Zi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Zi.z,0,-Zi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Zi.y,Zi.x,0];return!sl(n,Tr,wr,Ar,ao)||(n=[1,0,0,0,1,0,0,0,1],!sl(n,Tr,wr,Ar,ao))?!1:(lo.crossVectors(Ti,wi),n=[lo.x,lo.y,lo.z],sl(n,Tr,wr,Ar,ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Rn=new Z,oo=new js,Tr=new Z,wr=new Z,Ar=new Z,Ti=new Z,wi=new Z,Zi=new Z,ds=new Z,ao=new Z,lo=new Z,Ji=new Z;function sl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ji.fromArray(t,s);const a=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),l=e.dot(Ji),c=n.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sS=new js,hs=new Z,ol=new Z;class wa{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const n=hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(ol)),this.expandByPoint(hs.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ii=new Z,al=new Z,co=new Z,Ai=new Z,ll=new Z,uo=new Z,cl=new Z;class vp{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){al.copy(e).add(n).multiplyScalar(.5),co.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(al);const s=e.distanceTo(n)*.5,o=-this.direction.dot(co),a=Ai.dot(this.direction),l=-Ai.dot(co),c=Ai.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(al).addScaledVector(co,d),p}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){ll.subVectors(n,e),uo.subVectors(i,e),cl.crossVectors(ll,uo);let o=this.direction.dot(cl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(Ai,uo));if(l<0)return null;const c=a*this.direction.dot(ll.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(cl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Rr.setFromMatrixColumn(e,0).length(),s=1/Rr.setFromMatrixColumn(e,1).length(),o=1/Rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,aS)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ri.crossVectors(i,hn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ri.crossVectors(i,hn)),Ri.normalize(),fo.crossVectors(hn,Ri),r[0]=Ri.x,r[4]=fo.x,r[8]=hn.x,r[1]=Ri.y,r[5]=fo.y,r[9]=hn.y,r[2]=Ri.z,r[6]=fo.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],w=i[3],T=i[7],y=i[11],L=i[15],C=r[0],P=r[4],F=r[8],b=r[12],S=r[1],D=r[5],B=r[9],G=r[13],Y=r[2],he=r[6],J=r[10],fe=r[14],q=r[3],Me=r[7],Ae=r[11],Re=r[15];return s[0]=o*C+a*S+l*Y+c*q,s[4]=o*P+a*D+l*he+c*Me,s[8]=o*F+a*B+l*J+c*Ae,s[12]=o*b+a*G+l*fe+c*Re,s[1]=u*C+f*S+d*Y+p*q,s[5]=u*P+f*D+d*he+p*Me,s[9]=u*F+f*B+d*J+p*Ae,s[13]=u*b+f*G+d*fe+p*Re,s[2]=g*C+_*S+m*Y+h*q,s[6]=g*P+_*D+m*he+h*Me,s[10]=g*F+_*B+m*J+h*Ae,s[14]=g*b+_*G+m*fe+h*Re,s[3]=w*C+T*S+y*Y+L*q,s[7]=w*P+T*D+y*he+L*Me,s[11]=w*F+T*B+y*J+L*Ae,s[15]=w*b+T*G+y*fe+L*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+_*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],w=f*m*c-_*d*c+_*l*p-a*m*p-f*l*h+a*d*h,T=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,y=u*_*c-g*f*c+g*a*p-o*_*p-u*a*h+o*f*h,L=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,C=n*w+i*T+r*y+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=w*P,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*P,e[4]=T*P,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*P,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*P,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*P,e[8]=y*P,e[9]=(g*f*s-u*_*s-g*i*p+n*_*p+u*i*h-n*f*h)*P,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=L*P,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*P,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,_=o*u,m=o*f,h=a*f,w=l*c,T=l*u,y=l*f,L=i.x,C=i.y,P=i.z;return r[0]=(1-(_+h))*L,r[1]=(p+y)*L,r[2]=(g-T)*L,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(d+h))*C,r[6]=(m+w)*C,r[7]=0,r[8]=(g+T)*P,r[9]=(m-w)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Rr.set(r[0],r[1],r[2]).length();const o=Rr.set(r[4],r[5],r[6]).length(),a=Rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,u=1/o,f=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,n.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===hi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ta)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,_;if(a===hi)g=(o+s)*f,_=-2*f;else if(a===ta)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Rr=new Z,Cn=new Ct,oS=new Z(0,0,0),aS=new Z(1,1,1),Ri=new Z,fo=new Z,hn=new Z,Df=new Ct,Lf=new qs;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const If=new Z,Cr=new qs,ri=new Ct,ho=new Z,ps=new Z,cS=new Z,uS=new qs,Uf=new Z(1,0,0),Nf=new Z(0,1,0),Of=new Z(0,0,1),Ff={type:"added"},fS={type:"removed"},Pr={type:"childadded",child:null},ul={type:"childremoved",child:null};class an extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new Z,n=new xi,i=new qs,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new tt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,n){return Cr.setFromAxisAngle(e,n),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Uf,e)}rotateY(e){return this.rotateOnAxis(Nf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,n){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uf,e)}translateY(e){return this.translateOnAxis(Nf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ho.copy(e):ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ps,ho,this.up):ri.lookAt(ho,ps,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Cr.setFromRotationMatrix(ri),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fS),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,cS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,uS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new Z(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new Z,si=new Z,fl=new Z,oi=new Z,Dr=new Z,Lr=new Z,Bf=new Z,dl=new Z,hl=new Z,pl=new Z,ml=new Rt,gl=new Rt,_l=new Rt;class Ln{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),si.subVectors(i,n),fl.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(si),l=Pn.dot(fl),c=si.dot(si),u=si.dot(fl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ml,s.x),o.addScaledVector(gl,s.y),o.addScaledVector(_l,s.z),o}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),si.subVectors(e,n),Pn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Pn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Lr.subVectors(s,i),dl.subVectors(e,i);const l=Dr.dot(dl),c=Lr.dot(dl);if(l<=0&&c<=0)return n.copy(i);hl.subVectors(e,r);const u=Dr.dot(hl),f=Lr.dot(hl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Dr,o);pl.subVectors(e,s);const p=Dr.dot(pl),g=Lr.dot(pl);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Lr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Bf.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Bf,a);const h=1/(m+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(Dr,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},po={h:0,s:0,l:0};function vl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class mt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=jx(e,1),n=ot(n,0,1),i=ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vl(o,s,e+1/3),this.g=vl(o,s,e),this.b=vl(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=Sp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return lt.workingToColorSpace(Xt.copy(this),e),Math.round(ot(Xt.r*255,0,255))*65536+Math.round(ot(Xt.g*255,0,255))*256+Math.round(ot(Xt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Mn){lt.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(po);const i=el(Ci.h,po.h,n),r=el(Ci.s,po.s,n),s=el(Ci.l,po.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new mt;mt.NAMES=Sp;let dS=0;class Ys extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=Xr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=jl,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ql&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yp extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new Z,mo=new ft;let hS=0;class Lt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tf,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}}class Ep extends Lt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mp extends Lt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class hr extends Lt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const En=new Ct,xl=new an,Ir=new Z,pn=new js,ms=new js,zt=new Z;class Ei extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gp(e)?Mp:Ep)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new hr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(pn.min,ms.min),pn.expandByPoint(zt),zt.addVectors(pn.max,ms.max),pn.expandByPoint(zt)):(pn.expandByPoint(ms.min),pn.expandByPoint(ms.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),zt.add(Ir)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new Z,l[F]=new Z;const c=new Z,u=new Z,f=new Z,d=new ft,p=new ft,g=new ft,_=new Z,m=new Z;function h(F,b,S){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[F].add(_),a[b].add(_),a[S].add(_),l[F].add(m),l[b].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,b=w.length;F<b;++F){const S=w[F],D=S.start,B=S.count;for(let G=D,Y=D+B;G<Y;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new Z,y=new Z,L=new Z,C=new Z;function P(F){L.fromBufferAttribute(r,F),C.copy(L);const b=a[F];T.copy(b),T.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(C,b);const D=y.dot(l[F])<0?-1:1;o.setXYZW(F,T.x,T.y,T.z,D)}for(let F=0,b=w.length;F<b;++F){const S=w[F],D=S.start,B=S.count;for(let G=D,Y=D+B;G<Y;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Lt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new Ct,Qi=new vp,go=new wa,zf=new Z,_o=new Z,vo=new Z,xo=new Z,Sl=new Z,So=new Z,Hf=new Z,yo=new Z;class pi extends an{constructor(e=new Ei,n=new yp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){So.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Sl.fromBufferAttribute(f,e),o?So.addScaledVector(Sl,u):So.addScaledVector(Sl.sub(n),u))}n.add(So)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),Qi.copy(e.ray).recast(e.near),!(go.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(go,zf)===null||Qi.origin.distanceToSquared(zf)>(e.far-e.near)**2))&&(kf.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(kf),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,L=T;y<L;y+=3){const C=a.getX(y),P=a.getX(y+1),F=a.getX(y+2);r=Eo(this,h,e,i,c,u,f,C,P,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);r=Eo(this,o,e,i,c,u,f,w,T,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,L=T;y<L;y+=3){const C=y,P=y+1,F=y+2;r=Eo(this,h,e,i,c,u,f,C,P,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const w=m,T=m+1,y=m+2;r=Eo(this,o,e,i,c,u,f,w,T,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;yo.copy(a),yo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yo);return c<n.near||c>n.far?null:{distance:c,point:yo.clone(),object:t}}function Eo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,_o),t.getVertexPosition(l,vo),t.getVertexPosition(c,xo);const u=mS(t,e,n,i,_o,vo,xo,Hf);if(u){const f=new Z;Ln.getBarycoord(Hf,_o,vo,xo,f),r&&(u.uv=Ln.getInterpolatedAttribute(r,a,l,c,f,new ft)),s&&(u.uv1=Ln.getInterpolatedAttribute(s,a,l,c,f,new ft)),o&&(u.normal=Ln.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Z,materialIndex:0};Ln.getNormal(_o,vo,xo,d.normal),u.face=d,u.barycoord=f}return u}class Ks extends Ei{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hr(c,3)),this.setAttribute("normal",new hr(u,3)),this.setAttribute("uv",new hr(f,2));function g(_,m,h,w,T,y,L,C,P,F,b){const S=y/P,D=L/F,B=y/2,G=L/2,Y=C/2,he=P+1,J=F+1;let fe=0,q=0;const Me=new Z;for(let Ae=0;Ae<J;Ae++){const Re=Ae*D-G;for(let He=0;He<he;He++){const We=He*S-B;Me[_]=We*w,Me[m]=Re*T,Me[h]=Y,c.push(Me.x,Me.y,Me.z),Me[_]=0,Me[m]=0,Me[h]=C>0?1:-1,u.push(Me.x,Me.y,Me.z),f.push(He/P),f.push(1-Ae/F),fe+=1}}for(let Ae=0;Ae<F;Ae++)for(let Re=0;Re<P;Re++){const He=d+Re+he*Ae,We=d+Re+he*(Ae+1),le=d+(Re+1)+he*(Ae+1),ye=d+(Re+1)+he*Ae;l.push(He,We,ye),l.push(We,le,ye),q+=6}a.addGroup(p,q,b),p+=q,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=es(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const _S={clone:es,merge:Zt};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Tp extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new Z,Vf=new ft,Gf=new ft;class Dn extends Tp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,Vf,Gf),n.subVectors(Gf,Vf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ur=-90,Nr=1;class SS extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(Ur,Nr,e,n);r.layers=this.layers,this.add(r);const s=new Dn(Ur,Nr,e,n);s.layers=this.layers,this.add(s);const o=new Dn(Ur,Nr,e,n);o.layers=this.layers,this.add(o);const a=new Dn(Ur,Nr,e,n);a.layers=this.layers,this.add(a);const l=new Dn(Ur,Nr,e,n);l.layers=this.layers,this.add(l);const c=new Dn(Ur,Nr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class wp extends on{constructor(e=[],n=Zr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yS extends _r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ks(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Bi});s.uniforms.tEquirect.value=n;const o=new pi(r,s),a=n.minFilter;return n.minFilter===ur&&(n.minFilter=jn),new SS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Mo extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class MS extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const El=new Z,bS=new Z,TS=new tt;class rr{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=El.subVectors(i,n).cross(bS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(El),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TS.getNormalMatrix(e),r=this.coplanarPoint(El).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new wa,wS=new ft(.5,.5),bo=new Z;class Ap{constructor(e=new rr,n=new rr,i=new rr,r=new rr,s=new rr,o=new rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],w=r[13],T=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-p,y-h).normalize(),i[1].setComponents(l+s,d+c,m+p,y+h).normalize(),i[2].setComponents(l+o,d+u,m+g,y+w).normalize(),i[3].setComponents(l-o,d-u,m-g,y-w).normalize(),i[4].setComponents(l-a,d-f,m-_,y-T).normalize(),n===hi)i[5].setComponents(l+a,d+f,m+_,y+T).normalize();else if(n===ta)i[5].setComponents(a,f,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const n=wS.distanceTo(e.center);return er.radius=.7071067811865476+n,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(bo.x=r.normal.x>0?e.max.x:e.min.x,bo.y=r.normal.y>0?e.max.y:e.min.y,bo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AS extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wf=new Ct,Ic=new vp,To=new wa,wo=new Z;class RS extends an{constructor(e=new Ei,n=new AS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),To.radius+=s,e.ray.intersectsSphere(To)===!1)return;Wf.copy(r).invert(),Ic.copy(e.ray).applyMatrix4(Wf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);wo.fromBufferAttribute(f,m),Xf(wo,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)wo.fromBufferAttribute(f,g),Xf(wo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Xf(t,e,n,i,r,s,o){const a=Ic.distanceSqToPoint(t);if(a<n){const l=new Z;Ic.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rp extends on{constructor(e,n,i=gr,r,s,o,a=Nn,l=Nn,c,u=zs,f=1){if(u!==zs&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _u(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Aa extends Ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const w=h*d-o;for(let T=0;T<c;T++){const y=T*f-s;g.push(y,-w,0),_.push(0,0,1),m.push(T/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const T=w+c*h,y=w+c*(h+1),L=w+1+c*(h+1),C=w+1+c*h;p.push(T,y,C),p.push(y,L,C)}this.setIndex(p),this.setAttribute("position",new hr(g,3)),this.setAttribute("normal",new hr(_,3)),this.setAttribute("uv",new hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class CS extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PS extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Cp extends Tp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DS extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $f(t,e,n,i){const r=LS(i);switch(n){case up:return t*e;case dp:return t*e/r.components*r.byteLength;case pu:return t*e/r.components*r.byteLength;case hp:return t*e*2/r.components*r.byteLength;case mu:return t*e*2/r.components*r.byteLength;case fp:return t*e*3/r.components*r.byteLength;case In:return t*e*4/r.components*r.byteLength;case gu:return t*e*4/r.components*r.byteLength;case Oo:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bo:case ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:case cc:return Math.max(t,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(t,8)*Math.max(e,8)/2;case uc:case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case _c:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zo:case Ac:case Rc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pp:case Cc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pc:case Dc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LS(t){switch(t){case vi:case ap:return{byteLength:1,components:1};case Bs:case lp:case Xs:return{byteLength:2,components:1};case du:case hu:return{byteLength:2,components:4};case gr:case fu:case di:return{byteLength:4,components:1};case cp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var US=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NS=`#ifdef USE_ALPHAHASH
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
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zS=`#ifdef USE_AOMAP
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
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
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
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qS=`#ifdef USE_IRIDESCENCE
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
#endif`,jS=`#ifdef USE_BUMPMAP
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
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iy=`#define PI 3.141592653589793
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
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sy=`vec3 transformedNormal = objectNormal;
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
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dy=`#ifdef USE_ENVMAP
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
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
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
}`,Ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,My=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,by=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ty=`uniform bool receiveShadow;
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
#endif`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
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
}`,Iy=`
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
#endif`,Uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ky=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gy=`#if defined( USE_POINTS_UV )
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
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$y=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
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
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
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
}`,zE=`#if DEPTH_PACKING == 3200
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
}`,HE=`#define DISTANCE
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
}`,VE=`#define DISTANCE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,$E=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,jE=`uniform vec3 diffuse;
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
}`,YE=`#define LAMBERT
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
}`,KE=`#define LAMBERT
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
}`,ZE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,QE=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,rM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,oM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 color;
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
}`,fM=`uniform float rotation;
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
}`,dM=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:US,alphahash_pars_fragment:NS,alphamap_fragment:OS,alphamap_pars_fragment:FS,alphatest_fragment:BS,alphatest_pars_fragment:kS,aomap_fragment:zS,aomap_pars_fragment:HS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:$S,iridescence_fragment:qS,bumpmap_pars_fragment:jS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:JS,color_fragment:QS,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ay,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:uy,colorspace_pars_fragment:fy,envmap_fragment:dy,envmap_common_pars_fragment:hy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:wy,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:xy,fog_pars_fragment:Sy,gradientmap_pars_fragment:yy,lightmap_pars_fragment:Ey,lights_lambert_fragment:My,lights_lambert_pars_fragment:by,lights_pars_begin:Ty,lights_toon_fragment:Ay,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:Py,lights_physical_fragment:Dy,lights_physical_pars_fragment:Ly,lights_fragment_begin:Iy,lights_fragment_maps:Uy,lights_fragment_end:Ny,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:ky,map_fragment:zy,map_pars_fragment:Hy,map_particle_fragment:Vy,map_particle_pars_fragment:Gy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:$y,morphcolor_vertex:qy,morphnormal_vertex:jy,morphtarget_pars_vertex:Yy,morphtarget_vertex:Ky,normal_fragment_begin:Zy,normal_fragment_maps:Jy,normal_pars_fragment:Qy,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:fE,dithering_pars_fragment:dE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:SE,skinning_vertex:yE,skinnormal_vertex:EE,specularmap_fragment:ME,specularmap_pars_fragment:bE,tonemapping_fragment:TE,tonemapping_pars_fragment:wE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:PE,uv_vertex:DE,worldpos_vertex:LE,background_vert:IE,background_frag:UE,backgroundCube_vert:NE,backgroundCube_frag:OE,cube_vert:FE,cube_frag:BE,depth_vert:kE,depth_frag:zE,distanceRGBA_vert:HE,distanceRGBA_frag:VE,equirect_vert:GE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:$E,meshbasic_vert:qE,meshbasic_frag:jE,meshlambert_vert:YE,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:JE,meshnormal_vert:QE,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:oM,points_vert:aM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:fM,sprite_frag:dM},Le={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},qn={basic:{uniforms:Zt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Zt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Zt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Zt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Zt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new mt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Zt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Zt([Le.points,Le.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Zt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Zt([Le.common,Le.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Zt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Zt([Le.sprite,Le.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Zt([Le.common,Le.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Zt([Le.lights,Le.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};qn.physical={uniforms:Zt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ao={r:0,b:0,g:0},tr=new xi,hM=new Ct;function pM(t,e,n,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?n:e).get(y)),y}function _(T){let y=!1;const L=g(T);L===null?h(a,l):L&&L.isColor&&(h(L,1),y=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,y){const L=g(y);L&&(L.isCubeTexture||L.mapping===Ta)?(u===void 0&&(u=new pi(new Ks(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:es(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),tr.copy(y.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(tr)),u.material.toneMapped=lt.getTransfer(L.colorSpace)!==_t,(f!==L||d!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new pi(new Aa(2,2),new Si({name:"BackgroundMaterial",uniforms:es(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(L.colorSpace)!==_t,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,y){T.getRGB(Ao,bp(t)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,y,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:_,addToRenderList:m,dispose:w}}function mM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,D,B,G,Y){let he=!1;const J=f(G,B,D);s!==J&&(s=J,c(s.object)),he=p(S,G,B,Y),he&&g(S,G,B,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(he||o)&&(o=!1,y(S,D,B,G),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,D,B){const G=B.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let he=Y[D.id];he===void 0&&(he={},Y[D.id]=he);let J=he[G];return J===void 0&&(J=d(l()),he[G]=J),J}function d(S){const D=[],B=[],G=[];for(let Y=0;Y<n;Y++)D[Y]=0,B[Y]=0,G[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,D,B,G){const Y=s.attributes,he=D.attributes;let J=0;const fe=B.getAttributes();for(const q in fe)if(fe[q].location>=0){const Ae=Y[q];let Re=he[q];if(Re===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Re=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Re=S.instanceColor)),Ae===void 0||Ae.attribute!==Re||Re&&Ae.data!==Re.data)return!0;J++}return s.attributesNum!==J||s.index!==G}function g(S,D,B,G){const Y={},he=D.attributes;let J=0;const fe=B.getAttributes();for(const q in fe)if(fe[q].location>=0){let Ae=he[q];Ae===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ae=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ae=S.instanceColor));const Re={};Re.attribute=Ae,Ae&&Ae.data&&(Re.data=Ae.data),Y[q]=Re,J++}s.attributes=Y,s.attributesNum=J,s.index=G}function _(){const S=s.newAttributes;for(let D=0,B=S.length;D<B;D++)S[D]=0}function m(S){h(S,0)}function h(S,D){const B=s.newAttributes,G=s.enabledAttributes,Y=s.attributeDivisors;B[S]=1,G[S]===0&&(t.enableVertexAttribArray(S),G[S]=1),Y[S]!==D&&(t.vertexAttribDivisor(S,D),Y[S]=D)}function w(){const S=s.newAttributes,D=s.enabledAttributes;for(let B=0,G=D.length;B<G;B++)D[B]!==S[B]&&(t.disableVertexAttribArray(B),D[B]=0)}function T(S,D,B,G,Y,he,J){J===!0?t.vertexAttribIPointer(S,D,B,Y,he):t.vertexAttribPointer(S,D,B,G,Y,he)}function y(S,D,B,G){_();const Y=G.attributes,he=B.getAttributes(),J=D.defaultAttributeValues;for(const fe in he){const q=he[fe];if(q.location>=0){let Me=Y[fe];if(Me===void 0&&(fe==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),fe==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor)),Me!==void 0){const Ae=Me.normalized,Re=Me.itemSize,He=e.get(Me);if(He===void 0)continue;const We=He.buffer,le=He.type,ye=He.bytesPerElement,Ne=le===t.INT||le===t.UNSIGNED_INT||Me.gpuType===fu;if(Me.isInterleavedBufferAttribute){const O=Me.data,ae=O.stride,me=Me.offset;if(O.isInstancedInterleavedBuffer){for(let pe=0;pe<q.locationSize;pe++)h(q.location+pe,O.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let pe=0;pe<q.locationSize;pe++)m(q.location+pe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let pe=0;pe<q.locationSize;pe++)T(q.location+pe,Re/q.locationSize,le,Ae,ae*ye,(me+Re/q.locationSize*pe)*ye,Ne)}else{if(Me.isInstancedBufferAttribute){for(let O=0;O<q.locationSize;O++)h(q.location+O,Me.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let O=0;O<q.locationSize;O++)m(q.location+O);t.bindBuffer(t.ARRAY_BUFFER,We);for(let O=0;O<q.locationSize;O++)T(q.location+O,Re/q.locationSize,le,Ae,Re*ye,Re/q.locationSize*O*ye,Ne)}}else if(J!==void 0){const Ae=J[fe];if(Ae!==void 0)switch(Ae.length){case 2:t.vertexAttrib2fv(q.location,Ae);break;case 3:t.vertexAttrib3fv(q.location,Ae);break;case 4:t.vertexAttrib4fv(q.location,Ae);break;default:t.vertexAttrib1fv(q.location,Ae)}}}}w()}function L(){F();for(const S in i){const D=i[S];for(const B in D){const G=D[B];for(const Y in G)u(G[Y].object),delete G[Y];delete D[B]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const B in D){const G=D[B];for(const Y in G)u(G[Y].object),delete G[Y];delete D[B]}delete i[S.id]}function P(S){for(const D in i){const B=i[D];if(B[S.id]===void 0)continue;const G=B[S.id];for(const Y in G)u(G[Y].object),delete G[Y];delete B[S.id]}}function F(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function gM(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _M(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==In&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==vi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==di&&!F)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:L,maxSamples:C}}function vM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new rr,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,T=w*4;let y=h.clippingState||null;l.value=y,y=u(g,d,T,p);for(let L=0;L!==T;++L)y[L]=n[L];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,y=p;T!==_;++T,y+=4)o.copy(f[T]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function xM(t){let e=new WeakMap;function n(o,a){return a===nc?o.mapping=Zr:a===ic&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nc||a===ic)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const kr=4,qf=[.125,.215,.35,.446,.526,.582],lr=20,Ml=new Cp,jf=new mt;let bl=null,Tl=0,wl=0,Al=!1;const sr=(1+Math.sqrt(5))/2,Or=1/sr,Yf=[new Z(-sr,Or,0),new Z(sr,Or,0),new Z(-Or,0,sr),new Z(Or,0,sr),new Z(0,sr,-Or),new Z(0,sr,Or),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],SM=new Z;class Kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=SM}=s;bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,Tl,wl),this._renderer.xr.enabled=Al,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Xs,format:In,colorSpace:Qr,depthBuffer:!1},r=Zf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yM(s)),this._blurMaterial=EM(s,e,n)}return r}_compileMaterial(e){const n=new pi(this._lodPlanes[0],e);this._renderer.compile(n,Ml)}_sceneToCubeUV(e,n,i,r,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(jf),f.toneMapping=ki,f.autoClear=!1;const g=new yp({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new pi(new Ks,g);let m=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,m=!0):(g.color.copy(jf),m=!0);for(let w=0;w<6;w++){const T=w%3;T===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):T===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const y=this._cubeSize;Ro(r,T*y,w>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ml)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yf[(r-s-1)%Yf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new pi(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*lr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):lr;m>lr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const h=[];let w=0;for(let P=0;P<lr;++P){const F=P/_,b=Math.exp(-F*F/2);h.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const y=this._sizeLods[r],L=3*y*(r>T-kr?r-T+kr:0),C=4*(this._cubeSize-y);Ro(n,L,C,3*y,2*y),l.setRenderTarget(n),l.render(f,Ml)}}function yM(t){const e=[],n=[],i=[];let r=t;const s=t-kr+1+qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-kr?l=qf[o-t+kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,w=new Float32Array(_*g*p),T=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,F=C>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(b,_*g*C),T.set(d,m*g*C);const S=[C,C,C,C,C,C];y.set(S,h*g*C)}const L=new Ei;L.setAttribute("position",new Lt(w,_)),L.setAttribute("uv",new Lt(T,m)),L.setAttribute("faceIndex",new Lt(y,h)),e.push(L),r>kr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zf(t,e,n){const i=new _r(t,e,n);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EM(t,e,n){const i=new Float32Array(lr),r=new Z(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Jf(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Qf(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}function MM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===ic,u=l===Zr||l===Jr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Kf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Kf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TM(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let T=0,y=w.length;T<y;T+=3){const L=w[T+0],C=w[T+1],P=w[T+2];d.push(L,C,C,P,P,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let T=0,y=w.length/3-1;T<y;T+=3){const L=T+0,C=T+1,P=T+2;d.push(L,C,C,P,P,L)}}else return;const m=new(gp(d)?Mp:Ep)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wM(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*_[w];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function AM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RM(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let y=a.attributes.position.count*T,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*L*4*f),P=new _p(C,y,L,f);P.type=di,P.needsUpdate=!0;const F=T*4;for(let S=0;S<f;S++){const D=m[S],B=h[S],G=w[S],Y=y*L*4*S;for(let he=0;he<D.count;he++){const J=he*F;p===!0&&(r.fromBufferAttribute(D,he),C[Y+J+0]=r.x,C[Y+J+1]=r.y,C[Y+J+2]=r.z,C[Y+J+3]=0),g===!0&&(r.fromBufferAttribute(B,he),C[Y+J+4]=r.x,C[Y+J+5]=r.y,C[Y+J+6]=r.z,C[Y+J+7]=0),_===!0&&(r.fromBufferAttribute(G,he),C[Y+J+8]=r.x,C[Y+J+9]=r.y,C[Y+J+10]=r.z,C[Y+J+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new ft(y,L)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function CM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Dp=new on,ed=new Rp(1,1),Lp=new _p,Ip=new rS,Up=new wp,td=[],nd=[],id=new Float32Array(16),rd=new Float32Array(9),sd=new Float32Array(4);function ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=td[r];if(s===void 0&&(s=new Float32Array(r),td[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ra(t,e){let n=nd[e];n===void 0&&(n=new Int32Array(e),nd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function LM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function IM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function UM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;sd.set(i),t.uniformMatrix2fv(this.addr,!1,sd),kt(n,i)}}function NM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;rd.set(i),t.uniformMatrix3fv(this.addr,!1,rd),kt(n,i)}}function OM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;id.set(i),t.uniformMatrix4fv(this.addr,!1,id),kt(n,i)}}function FM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function zM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function HM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function GM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function XM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ed.compareFunction=mp,s=ed):s=Dp,n.setTexture2D(e||s,r)}function $M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ip,r)}function qM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Up,r)}function jM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lp,r)}function YM(t){switch(t){case 5126:return PM;case 35664:return DM;case 35665:return LM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return jM}}function KM(t,e){t.uniform1fv(this.addr,e)}function ZM(t,e){const n=ns(e,this.size,2);t.uniform2fv(this.addr,n)}function JM(t,e){const n=ns(e,this.size,3);t.uniform3fv(this.addr,n)}function QM(t,e){const n=ns(e,this.size,4);t.uniform4fv(this.addr,n)}function eb(t,e){const n=ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tb(t,e){const n=ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nb(t,e){const n=ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ib(t,e){t.uniform1iv(this.addr,e)}function rb(t,e){t.uniform2iv(this.addr,e)}function sb(t,e){t.uniform3iv(this.addr,e)}function ob(t,e){t.uniform4iv(this.addr,e)}function ab(t,e){t.uniform1uiv(this.addr,e)}function lb(t,e){t.uniform2uiv(this.addr,e)}function cb(t,e){t.uniform3uiv(this.addr,e)}function ub(t,e){t.uniform4uiv(this.addr,e)}function fb(t,e,n){const i=this.cache,r=e.length,s=Ra(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dp,s[o])}function db(t,e,n){const i=this.cache,r=e.length,s=Ra(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ip,s[o])}function hb(t,e,n){const i=this.cache,r=e.length,s=Ra(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Up,s[o])}function pb(t,e,n){const i=this.cache,r=e.length,s=Ra(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Lp,s[o])}function mb(t){switch(t){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YM(n.type)}}class _b{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mb(n.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function od(t,e){t.seq.push(e),t.map[e.id]=e}function xb(t,e,n){const i=t.name,r=i.length;for(Rl.lastIndex=0;;){const s=Rl.exec(i),o=Rl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){od(n,c===void 0?new gb(a,t,e):new _b(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new vb(a),od(n,f)),n=f}}}class Ho{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);xb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ad(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Sb=37297;let yb=0;function Eb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ld=new tt;function Mb(t){lt._getMatrix(ld,lt.workingColorSpace,t);const e=`mat3( ${ld.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case ea:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function cd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Eb(t.getShaderSource(e),o)}else return r}function bb(t,e){const n=Mb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Tb(t,e){let n;switch(e){case Cx:n="Linear";break;case Px:n="Reinhard";break;case Dx:n="Cineon";break;case Lx:n="ACESFilmic";break;case Ux:n="AgX";break;case Nx:n="Neutral";break;case Ix:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Co=new Z;function wb(){lt.getLuminanceCoefficients(Co);const t=Co.x.toFixed(4),e=Co.y.toFixed(4),n=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function Rb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Cb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vs(t){return t!==""}function ud(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(t){return t.replace(Pb,Lb)}const Db=new Map;function Lb(t,e){let n=it[e];if(n===void 0){const i=Db.get(e);if(i!==void 0)n=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uc(n)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(t){return t.replace(Ib,Ub)}function Ub(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Nb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===rp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Ob(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Bb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case sp:e="ENVMAP_BLENDING_MULTIPLY";break;case Ax:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function kb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Nb(n),c=Ob(n),u=Fb(n),f=Bb(n),d=kb(n),p=Ab(n),g=Rb(s),_=r.createProgram();let m,h,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vs).join(`
`),h.length>0&&(h+=`
`)):(m=[hd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),h=[hd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?it.tonemapping_pars_fragment:"",n.toneMapping!==ki?Tb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,bb("linearToOutputTexel",n.outputColorSpace),wb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vs).join(`
`)),o=Uc(o),o=ud(o,n),o=fd(o,n),a=Uc(a),a=ud(a,n),a=fd(a,n),o=dd(o),a=dd(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=w+m+o,y=w+h+a,L=ad(r,r.VERTEX_SHADER,T),C=ad(r,r.FRAGMENT_SHADER,y);r.attachShader(_,L),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),G=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(C).trim();let he=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(he=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,L,C);else{const fe=cd(r,L,"vertex"),q=cd(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+fe+`
`+q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||Y==="")&&(J=!1);J&&(D.diagnostics={runnable:he,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(L),r.deleteShader(C),F=new Ho(r,_),b=Cb(r,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Sb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Hb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gb(e),n.set(e,i)),i}}class Gb{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}}function Wb(t,e,n,i,r,s,o){const a=new xp,l=new Vb,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,B,G){const Y=B.fog,he=G.geometry,J=b.isMeshStandardMaterial?B.environment:null,fe=(b.isMeshStandardMaterial?n:e).get(b.envMap||J),q=fe&&fe.mapping===Ta?fe.image.height:null,Me=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Ae=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Re=Ae!==void 0?Ae.length:0;let He=0;he.morphAttributes.position!==void 0&&(He=1),he.morphAttributes.normal!==void 0&&(He=2),he.morphAttributes.color!==void 0&&(He=3);let We,le,ye,Ne;if(Me){const Ye=qn[Me];We=Ye.vertexShader,le=Ye.fragmentShader}else We=b.vertexShader,le=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),Ne=l.getFragmentShaderID(b);const O=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),me=G.isInstancedMesh===!0,pe=G.isBatchedMesh===!0,Ve=!!b.map,A=!!b.matcap,R=!!fe,x=!!b.aoMap,re=!!b.lightMap,Q=!!b.bumpMap,z=!!b.normalMap,j=!!b.displacementMap,se=!!b.emissiveMap,V=!!b.metalnessMap,X=!!b.roughnessMap,be=b.anisotropy>0,E=b.clearcoat>0,v=b.dispersion>0,I=b.iridescence>0,$=b.sheen>0,te=b.transmission>0,W=be&&!!b.anisotropyMap,Pe=E&&!!b.clearcoatMap,oe=E&&!!b.clearcoatNormalMap,ge=E&&!!b.clearcoatRoughnessMap,xe=I&&!!b.iridescenceMap,ie=I&&!!b.iridescenceThicknessMap,Te=$&&!!b.sheenColorMap,Oe=$&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,we=!!b.specularColorMap,qe=!!b.specularIntensityMap,U=te&&!!b.transmissionMap,De=te&&!!b.thicknessMap,_e=!!b.gradientMap,Be=!!b.alphaMap,Se=b.alphaTest>0,de=!!b.alphaHash,ve=!!b.extensions;let Ce=ki;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ce=t.toneMapping);const nt={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:We,fragmentShader:le,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:Ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:pe,batchingColor:pe&&G._colorsTexture!==null,instancing:me,instancingColor:me&&G.instanceColor!==null,instancingMorph:me&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Qr,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:A,envMap:R,envMapMode:R&&fe.mapping,envMapCubeUVHeight:q,aoMap:x,lightMap:re,bumpMap:Q,normalMap:z,displacementMap:d&&j,emissiveMap:se,normalMapObjectSpace:z&&b.normalMapType===zx,normalMapTangentSpace:z&&b.normalMapType===kx,metalnessMap:V,roughnessMap:X,anisotropy:be,anisotropyMap:W,clearcoat:E,clearcoatMap:Pe,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,dispersion:v,iridescence:I,iridescenceMap:xe,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:Te,sheenRoughnessMap:Oe,specularMap:Fe,specularColorMap:we,specularIntensityMap:qe,transmission:te,transmissionMap:U,thicknessMap:De,gradientMap:_e,opaque:b.transparent===!1&&b.blending===Xr&&b.alphaToCoverage===!1,alphaMap:Be,alphaTest:Se,alphaHash:de,combine:b.combine,mapUv:Ve&&_(b.map.channel),aoMapUv:x&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:z&&_(b.normalMap.channel),displacementMapUv:j&&_(b.displacementMap.channel),emissiveMapUv:se&&_(b.emissiveMap.channel),metalnessMapUv:V&&_(b.metalnessMap.channel),roughnessMapUv:X&&_(b.roughnessMap.channel),anisotropyMapUv:W&&_(b.anisotropyMap.channel),clearcoatMapUv:Pe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(b.sheenRoughnessMap.channel),specularMapUv:Fe&&_(b.specularMap.channel),specularColorMapUv:we&&_(b.specularColorMap.channel),specularIntensityMapUv:qe&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:De&&_(b.thicknessMap.channel),alphaMapUv:Be&&_(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(z||be),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!he.attributes.uv&&(Ve||Be),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ae,skinning:G.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:He,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===_t,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===_t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fi,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&b.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function h(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(S,b),T(S,b),S.push(t.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function w(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const S=g[b.type];let D;if(S){const B=qn[S];D=_S.clone(B.uniforms)}else D=b.uniforms;return D}function L(b,S){let D;for(let B=0,G=u.length;B<G;B++){const Y=u[B];if(Y.cacheKey===S){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new zb(t,S,b,s),u.push(D)),D}function C(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:F}}function Xb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function $b(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function md(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||$b),i.length>1&&i.sort(d||pd),r.length>1&&r.sort(d||pd)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new md,t.set(i,[o])):r>=s.length?(o=new md,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function jb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new mt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":n={color:new mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function Yb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Kb=0;function Zb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Jb(t){const e=new jb,n=Yb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,w=0,T=0,y=0,L=0,C=0,P=0;c.sort(Zb);for(let b=0,S=c.length;b<S;b++){const D=c[b],B=D.color,G=D.intensity,Y=D.distance,he=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*G,f+=B.g*G,d+=B.b*G;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],G);P++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,q=n.get(D);q.shadowIntensity=fe.intensity,q.shadowBias=fe.bias,q.shadowNormalBias=fe.normalBias,q.shadowRadius=fe.radius,q.shadowMapSize=fe.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=he,i.directionalShadowMatrix[p]=D.shadow.matrix,w++}i.directional[p]=J,p++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(B).multiplyScalar(G),J.distance=Y,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[_]=J;const fe=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,fe.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=fe.matrix,D.castShadow){const q=n.get(D);q.shadowIntensity=fe.intensity,q.shadowBias=fe.bias,q.shadowNormalBias=fe.normalBias,q.shadowRadius=fe.radius,q.shadowMapSize=fe.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=he,y++}_++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(B).multiplyScalar(G),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=J,m++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const fe=D.shadow,q=n.get(D);q.shadowIntensity=fe.intensity,q.shadowBias=fe.bias,q.shadowNormalBias=fe.normalBias,q.shadowRadius=fe.radius,q.shadowMapSize=fe.mapSize,q.shadowCameraNear=fe.camera.near,q.shadowCameraFar=fe.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=he,i.pointShadowMatrix[g]=D.shadow.matrix,T++}i.point[g]=J,g++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(G),J.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[h]=J,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==w||F.numPointShadows!==T||F.numSpotShadows!==y||F.numSpotMaps!==L||F.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=w,F.numPointShadows=T,F.numSpotShadows=y,F.numSpotMaps=L,F.numLightProbes=P,i.version=Kb++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const T=c[h];if(T.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function gd(t){const e=new Jb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gd(t),e.set(r,[a])):s>=o.length?(a=new gd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
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
}`;function n1(t,e,n){let i=new Ap;const r=new ft,s=new ft,o=new Rt,a=new CS({depthPacking:Bx}),l=new PS,c={},u=n.maxTextureSize,f={[Vi]:sn,[sn]:Vi,[fi]:fi},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ei;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rp;let h=this.type;this.render=function(C,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Bi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=h!==ai&&this.type===ai,Y=h===ai&&this.type!==ai;for(let he=0,J=C.length;he<J;he++){const fe=C[he],q=fe.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const Me=q.getFrameExtents();if(r.multiply(Me),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Me.x),r.x=s.x*Me.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Me.y),r.y=s.y*Me.y,q.mapSize.y=s.y)),q.map===null||G===!0||Y===!0){const Re=this.type!==ai?{minFilter:Nn,magFilter:Nn}:{};q.map!==null&&q.map.dispose(),q.map=new _r(r.x,r.y,Re),q.map.texture.name=fe.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const Ae=q.getViewportCount();for(let Re=0;Re<Ae;Re++){const He=q.getViewport(Re);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),B.viewport(o),q.updateMatrices(fe,Re),i=q.getFrustum(),y(P,F,q.camera,fe,this.type)}q.isPointLightShadow!==!0&&this.type===ai&&w(q,F),q.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,S,D)};function w(C,P){const F=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new _r(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,F,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,F,p,_,null)}function T(C,P,F,b){let S=null;const D=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=F.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=S.uuid,G=P.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let he=Y[G];he===void 0&&(he=S.clone(),Y[G]=he,P.addEventListener("dispose",L)),S=he}if(S.visible=P.visible,S.wireframe=P.wireframe,b===ai?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:f[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=F}return S}function y(C,P,F,b,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const G=e.update(C),Y=C.material;if(Array.isArray(Y)){const he=G.groups;for(let J=0,fe=he.length;J<fe;J++){const q=he[J],Me=Y[q.materialIndex];if(Me&&Me.visible){const Ae=T(C,Me,b,S);C.onBeforeShadow(t,C,P,F,G,Ae,q),t.renderBufferDirect(F,null,G,Ae,C,q),C.onAfterShadow(t,C,P,F,G,Ae,q)}}}else if(Y.visible){const he=T(C,Y,b,S);C.onBeforeShadow(t,C,P,F,G,he,null),t.renderBufferDirect(F,null,G,he,C,null),C.onAfterShadow(t,C,P,F,G,he,null)}}const B=C.children;for(let G=0,Y=B.length;G<Y;G++)y(B[G],P,F,b,S)}function L(C){C.target.removeEventListener("dispose",L);for(const F in c){const b=c[F],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const i1={[Yl]:Kl,[Zl]:ec,[Jl]:tc,[Kr]:Ql,[Kl]:Yl,[ec]:Zl,[tc]:Jl,[Ql]:Kr};function r1(t,e){function n(){let U=!1;const De=new Rt;let _e=null;const Be=new Rt(0,0,0,0);return{setMask:function(Se){_e!==Se&&!U&&(t.colorMask(Se,Se,Se,Se),_e=Se)},setLocked:function(Se){U=Se},setClear:function(Se,de,ve,Ce,nt){nt===!0&&(Se*=Ce,de*=Ce,ve*=Ce),De.set(Se,de,ve,Ce),Be.equals(De)===!1&&(t.clearColor(Se,de,ve,Ce),Be.copy(De))},reset:function(){U=!1,_e=null,Be.set(-1,0,0,0)}}}function i(){let U=!1,De=!1,_e=null,Be=null,Se=null;return{setReversed:function(de){if(De!==de){const ve=e.get("EXT_clip_control");de?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),De=de;const Ce=Se;Se=null,this.setClear(Ce)}},getReversed:function(){return De},setTest:function(de){de?O(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(de){_e!==de&&!U&&(t.depthMask(de),_e=de)},setFunc:function(de){if(De&&(de=i1[de]),Be!==de){switch(de){case Yl:t.depthFunc(t.NEVER);break;case Kl:t.depthFunc(t.ALWAYS);break;case Zl:t.depthFunc(t.LESS);break;case Kr:t.depthFunc(t.LEQUAL);break;case Jl:t.depthFunc(t.EQUAL);break;case Ql:t.depthFunc(t.GEQUAL);break;case ec:t.depthFunc(t.GREATER);break;case tc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Be=de}},setLocked:function(de){U=de},setClear:function(de){Se!==de&&(De&&(de=1-de),t.clearDepth(de),Se=de)},reset:function(){U=!1,_e=null,Be=null,Se=null,De=!1}}}function r(){let U=!1,De=null,_e=null,Be=null,Se=null,de=null,ve=null,Ce=null,nt=null;return{setTest:function(Ye){U||(Ye?O(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Ye){De!==Ye&&!U&&(t.stencilMask(Ye),De=Ye)},setFunc:function(Ye,Pt,Ut){(_e!==Ye||Be!==Pt||Se!==Ut)&&(t.stencilFunc(Ye,Pt,Ut),_e=Ye,Be=Pt,Se=Ut)},setOp:function(Ye,Pt,Ut){(de!==Ye||ve!==Pt||Ce!==Ut)&&(t.stencilOp(Ye,Pt,Ut),de=Ye,ve=Pt,Ce=Ut)},setLocked:function(Ye){U=Ye},setClear:function(Ye){nt!==Ye&&(t.clearStencil(Ye),nt=Ye)},reset:function(){U=!1,De=null,_e=null,Be=null,Se=null,de=null,ve=null,Ce=null,nt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,T=null,y=null,L=null,C=null,P=new mt(0,0,0),F=0,b=!1,S=null,D=null,B=null,G=null,Y=null;const he=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,fe=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=fe>=1):q.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=fe>=2);let Me=null,Ae={};const Re=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),We=new Rt().fromArray(Re),le=new Rt().fromArray(He);function ye(U,De,_e,Be){const Se=new Uint8Array(4),de=t.createTexture();t.bindTexture(U,de),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ve=0;ve<_e;ve++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(De,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(De+ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return de}const Ne={};Ne[t.TEXTURE_2D]=ye(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=ye(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[t.TEXTURE_2D_ARRAY]=ye(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=ye(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(t.DEPTH_TEST),o.setFunc(Kr),Q(!1),z(yf),O(t.CULL_FACE),x(Bi);function O(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function ae(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function me(U,De){return f[U]!==De?(t.bindFramebuffer(U,De),f[U]=De,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=De),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=De),!0):!1}function pe(U,De){let _e=p,Be=!1;if(U){_e=d.get(De),_e===void 0&&(_e=[],d.set(De,_e));const Se=U.textures;if(_e.length!==Se.length||_e[0]!==t.COLOR_ATTACHMENT0){for(let de=0,ve=Se.length;de<ve;de++)_e[de]=t.COLOR_ATTACHMENT0+de;_e.length=Se.length,Be=!0}}else _e[0]!==t.BACK&&(_e[0]=t.BACK,Be=!0);Be&&t.drawBuffers(_e)}function Ve(U){return g!==U?(t.useProgram(U),g=U,!0):!1}const A={[ar]:t.FUNC_ADD,[ux]:t.FUNC_SUBTRACT,[fx]:t.FUNC_REVERSE_SUBTRACT};A[dx]=t.MIN,A[hx]=t.MAX;const R={[px]:t.ZERO,[mx]:t.ONE,[gx]:t.SRC_COLOR,[ql]:t.SRC_ALPHA,[Ex]:t.SRC_ALPHA_SATURATE,[Sx]:t.DST_COLOR,[vx]:t.DST_ALPHA,[_x]:t.ONE_MINUS_SRC_COLOR,[jl]:t.ONE_MINUS_SRC_ALPHA,[yx]:t.ONE_MINUS_DST_COLOR,[xx]:t.ONE_MINUS_DST_ALPHA,[Mx]:t.CONSTANT_COLOR,[bx]:t.ONE_MINUS_CONSTANT_COLOR,[Tx]:t.CONSTANT_ALPHA,[wx]:t.ONE_MINUS_CONSTANT_ALPHA};function x(U,De,_e,Be,Se,de,ve,Ce,nt,Ye){if(U===Bi){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(O(t.BLEND),_=!0),U!==cx){if(U!==m||Ye!==b){if((h!==ar||y!==ar)&&(t.blendEquation(t.FUNC_ADD),h=ar,y=ar),Ye)switch(U){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $l:t.blendFunc(t.ONE,t.ONE);break;case Ef:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $l:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ef:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,T=null,L=null,C=null,P.set(0,0,0),F=0,m=U,b=Ye}return}Se=Se||De,de=de||_e,ve=ve||Be,(De!==h||Se!==y)&&(t.blendEquationSeparate(A[De],A[Se]),h=De,y=Se),(_e!==w||Be!==T||de!==L||ve!==C)&&(t.blendFuncSeparate(R[_e],R[Be],R[de],R[ve]),w=_e,T=Be,L=de,C=ve),(Ce.equals(P)===!1||nt!==F)&&(t.blendColor(Ce.r,Ce.g,Ce.b,nt),P.copy(Ce),F=nt),m=U,b=!1}function re(U,De){U.side===fi?ae(t.CULL_FACE):O(t.CULL_FACE);let _e=U.side===sn;De&&(_e=!_e),Q(_e),U.blending===Xr&&U.transparent===!1?x(Bi):x(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Be=U.stencilWrite;a.setTest(Be),Be&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){S!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),S=U)}function z(U){U!==ox?(O(t.CULL_FACE),U!==D&&(U===yf?t.cullFace(t.BACK):U===ax?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),D=U}function j(U){U!==B&&(J&&t.lineWidth(U),B=U)}function se(U,De,_e){U?(O(t.POLYGON_OFFSET_FILL),(G!==De||Y!==_e)&&(t.polygonOffset(De,_e),G=De,Y=_e)):ae(t.POLYGON_OFFSET_FILL)}function V(U){U?O(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function X(U){U===void 0&&(U=t.TEXTURE0+he-1),Me!==U&&(t.activeTexture(U),Me=U)}function be(U,De,_e){_e===void 0&&(Me===null?_e=t.TEXTURE0+he-1:_e=Me);let Be=Ae[_e];Be===void 0&&(Be={type:void 0,texture:void 0},Ae[_e]=Be),(Be.type!==U||Be.texture!==De)&&(Me!==_e&&(t.activeTexture(_e),Me=_e),t.bindTexture(U,De||Ne[U]),Be.type=U,Be.texture=De)}function E(){const U=Ae[Me];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(U){We.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),We.copy(U))}function Oe(U){le.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function Fe(U,De){let _e=c.get(De);_e===void 0&&(_e=new WeakMap,c.set(De,_e));let Be=_e.get(U);Be===void 0&&(Be=t.getUniformBlockIndex(De,U.name),_e.set(U,Be))}function we(U,De){const Be=c.get(De).get(U);l.get(De)!==Be&&(t.uniformBlockBinding(De,Be,U.__bindingPointIndex),l.set(De,Be))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Me=null,Ae={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,w=null,T=null,y=null,L=null,C=null,P=new mt(0,0,0),F=0,b=!1,S=null,D=null,B=null,G=null,Y=null,We.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:ae,bindFramebuffer:me,drawBuffers:pe,useProgram:Ve,setBlending:x,setMaterial:re,setFlipSided:Q,setCullFace:z,setLineWidth:j,setPolygonOffset:se,setScissorTest:V,activeTexture:X,bindTexture:be,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:xe,texImage3D:ie,updateUBOMapping:Fe,uniformBlockBinding:we,texStorage2D:oe,texStorage3D:ge,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:W,compressedTexSubImage3D:Pe,scissor:Te,viewport:Oe,reset:qe}}function s1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):na("canvas")}function _(E,v,I){let $=1;const te=be(E);if((te.width>I||te.height>I)&&($=I/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const W=Math.floor($*te.width),Pe=Math.floor($*te.height);f===void 0&&(f=g(W,Pe));const oe=v?g(W,Pe):f;return oe.width=W,oe.height=Pe,oe.getContext("2d").drawImage(E,0,0,W,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+W+"x"+Pe+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){t.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(E,v,I,$,te=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let W=v;if(v===t.RED&&(I===t.FLOAT&&(W=t.R32F),I===t.HALF_FLOAT&&(W=t.R16F),I===t.UNSIGNED_BYTE&&(W=t.R8)),v===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.R8UI),I===t.UNSIGNED_SHORT&&(W=t.R16UI),I===t.UNSIGNED_INT&&(W=t.R32UI),I===t.BYTE&&(W=t.R8I),I===t.SHORT&&(W=t.R16I),I===t.INT&&(W=t.R32I)),v===t.RG&&(I===t.FLOAT&&(W=t.RG32F),I===t.HALF_FLOAT&&(W=t.RG16F),I===t.UNSIGNED_BYTE&&(W=t.RG8)),v===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RG8UI),I===t.UNSIGNED_SHORT&&(W=t.RG16UI),I===t.UNSIGNED_INT&&(W=t.RG32UI),I===t.BYTE&&(W=t.RG8I),I===t.SHORT&&(W=t.RG16I),I===t.INT&&(W=t.RG32I)),v===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RGB8UI),I===t.UNSIGNED_SHORT&&(W=t.RGB16UI),I===t.UNSIGNED_INT&&(W=t.RGB32UI),I===t.BYTE&&(W=t.RGB8I),I===t.SHORT&&(W=t.RGB16I),I===t.INT&&(W=t.RGB32I)),v===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),I===t.UNSIGNED_INT&&(W=t.RGBA32UI),I===t.BYTE&&(W=t.RGBA8I),I===t.SHORT&&(W=t.RGBA16I),I===t.INT&&(W=t.RGBA32I)),v===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),v===t.RGBA){const Pe=te?ea:lt.getTransfer($);I===t.FLOAT&&(W=t.RGBA32F),I===t.HALF_FLOAT&&(W=t.RGBA16F),I===t.UNSIGNED_BYTE&&(W=Pe===_t?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(E,v){let I;return E?v===null||v===gr||v===ks?I=t.DEPTH24_STENCIL8:v===di?I=t.DEPTH32F_STENCIL8:v===Bs&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gr||v===ks?I=t.DEPTH_COMPONENT24:v===di?I=t.DEPTH_COMPONENT32F:v===Bs&&(I=t.DEPTH_COMPONENT16),I}function L(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nn&&E.minFilter!==jn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){const v=E.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&u.delete(v)}function P(E){const v=E.target;v.removeEventListener("dispose",P),S(v)}function F(E){const v=i.get(E);if(v.__webglInit===void 0)return;const I=E.source,$=d.get(I);if($){const te=$[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(I)}i.remove(E)}function b(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const I=E.source,$=d.get(I);delete $[v.__cacheKey],o.memory.textures--}function S(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let te=0;te<v.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(v.__webglFramebuffer[$][te]);else t.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)t.deleteFramebuffer(v.__webglFramebuffer[$]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=E.textures;for(let $=0,te=I.length;$<te;$++){const W=i.get(I[$]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(I[$])}i.remove(E)}let D=0;function B(){D=0}function G(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function Y(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function he(E,v){const I=i.get(E);if(E.isVideoTexture&&V(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(I,E,v);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+v)}function J(E,v){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Ne(I,E,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+v)}function fe(E,v){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Ne(I,E,v);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+v)}function q(E,v){const I=i.get(E);if(E.version>0&&I.__version!==E.version){O(I,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+v)}const Me={[rc]:t.REPEAT,[cr]:t.CLAMP_TO_EDGE,[sc]:t.MIRRORED_REPEAT},Ae={[Nn]:t.NEAREST,[Ox]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[Ja]:t.LINEAR_MIPMAP_NEAREST,[ur]:t.LINEAR_MIPMAP_LINEAR},Re={[Hx]:t.NEVER,[qx]:t.ALWAYS,[Vx]:t.LESS,[mp]:t.LEQUAL,[Gx]:t.EQUAL,[$x]:t.GEQUAL,[Wx]:t.GREATER,[Xx]:t.NOTEQUAL};function He(E,v){if(v.type===di&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jn||v.magFilter===Ja||v.magFilter===so||v.magFilter===ur||v.minFilter===jn||v.minFilter===Ja||v.minFilter===so||v.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,Me[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,Me[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,Me[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,Ae[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,Ae[v.minFilter]),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==so&&v.minFilter!==ur||v.type===di&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function We(E,v){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const $=v.source;let te=d.get($);te===void 0&&(te={},d.set($,te));const W=Y(v);if(W!==E.__cacheKey){te[W]===void 0&&(te[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),te[W].usedTimes++;const Pe=te[E.__cacheKey];Pe!==void 0&&(te[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&b(v)),E.__cacheKey=W,E.__webglTexture=te[W].texture}return I}function le(E,v,I){return Math.floor(Math.floor(E/I)/v)}function ye(E,v,I,$){const W=E.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,I,$,v.data);else{W.sort((ie,Te)=>ie.start-Te.start);let Pe=0;for(let ie=1;ie<W.length;ie++){const Te=W[Pe],Oe=W[ie],Fe=Te.start+Te.count,we=le(Oe.start,v.width,4),qe=le(Te.start,v.width,4);Oe.start<=Fe+1&&we===qe&&le(Oe.start+Oe.count-1,v.width,4)===we?Te.count=Math.max(Te.count,Oe.start+Oe.count-Te.start):(++Pe,W[Pe]=Oe)}W.length=Pe+1;const oe=t.getParameter(t.UNPACK_ROW_LENGTH),ge=t.getParameter(t.UNPACK_SKIP_PIXELS),xe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ie=0,Te=W.length;ie<Te;ie++){const Oe=W[ie],Fe=Math.floor(Oe.start/4),we=Math.ceil(Oe.count/4),qe=Fe%v.width,U=Math.floor(Fe/v.width),De=we,_e=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,qe,U,De,_e,I,$,v.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function Ne(E,v,I){let $=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=t.TEXTURE_3D);const te=We(E,v),W=v.source;n.bindTexture($,E.__webglTexture,t.TEXTURE0+I);const Pe=i.get(W);if(W.version!==Pe.__version||te===!0){n.activeTexture(t.TEXTURE0+I);const oe=lt.getPrimaries(lt.workingColorSpace),ge=v.colorSpace===Ni?null:lt.getPrimaries(v.colorSpace),xe=v.colorSpace===Ni||oe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ie=_(v.image,!1,r.maxTextureSize);ie=X(v,ie);const Te=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let Fe=T(v.internalFormat,Te,Oe,v.colorSpace,v.isVideoTexture);He($,v);let we;const qe=v.mipmaps,U=v.isVideoTexture!==!0,De=Pe.__version===void 0||te===!0,_e=W.dataReady,Be=L(v,ie);if(v.isDepthTexture)Fe=y(v.format===Hs,v.type),De&&(U?n.texStorage2D(t.TEXTURE_2D,1,Fe,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Te,Oe,null));else if(v.isDataTexture)if(qe.length>0){U&&De&&n.texStorage2D(t.TEXTURE_2D,Be,Fe,qe[0].width,qe[0].height);for(let Se=0,de=qe.length;Se<de;Se++)we=qe[Se],U?_e&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,we.width,we.height,Te,Oe,we.data):n.texImage2D(t.TEXTURE_2D,Se,Fe,we.width,we.height,0,Te,Oe,we.data);v.generateMipmaps=!1}else U?(De&&n.texStorage2D(t.TEXTURE_2D,Be,Fe,ie.width,ie.height),_e&&ye(v,ie,Te,Oe)):n.texImage2D(t.TEXTURE_2D,0,Fe,ie.width,ie.height,0,Te,Oe,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Fe,qe[0].width,qe[0].height,ie.depth);for(let Se=0,de=qe.length;Se<de;Se++)if(we=qe[Se],v.format!==In)if(Te!==null)if(U){if(_e)if(v.layerUpdates.size>0){const ve=$f(we.width,we.height,v.format,v.type);for(const Ce of v.layerUpdates){const nt=we.data.subarray(Ce*ve/we.data.BYTES_PER_ELEMENT,(Ce+1)*ve/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,Ce,we.width,we.height,1,Te,nt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,we.width,we.height,ie.depth,Te,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Se,Fe,we.width,we.height,ie.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?_e&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Se,0,0,0,we.width,we.height,ie.depth,Te,Oe,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Se,Fe,we.width,we.height,ie.depth,0,Te,Oe,we.data)}else{U&&De&&n.texStorage2D(t.TEXTURE_2D,Be,Fe,qe[0].width,qe[0].height);for(let Se=0,de=qe.length;Se<de;Se++)we=qe[Se],v.format!==In?Te!==null?U?_e&&n.compressedTexSubImage2D(t.TEXTURE_2D,Se,0,0,we.width,we.height,Te,we.data):n.compressedTexImage2D(t.TEXTURE_2D,Se,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?_e&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,we.width,we.height,Te,Oe,we.data):n.texImage2D(t.TEXTURE_2D,Se,Fe,we.width,we.height,0,Te,Oe,we.data)}else if(v.isDataArrayTexture)if(U){if(De&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Fe,ie.width,ie.height,ie.depth),_e)if(v.layerUpdates.size>0){const Se=$f(ie.width,ie.height,v.format,v.type);for(const de of v.layerUpdates){const ve=ie.data.subarray(de*Se/ie.data.BYTES_PER_ELEMENT,(de+1)*Se/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,ie.width,ie.height,1,Te,Oe,ve)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Te,Oe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,ie.width,ie.height,ie.depth,0,Te,Oe,ie.data);else if(v.isData3DTexture)U?(De&&n.texStorage3D(t.TEXTURE_3D,Be,Fe,ie.width,ie.height,ie.depth),_e&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Te,Oe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,ie.width,ie.height,ie.depth,0,Te,Oe,ie.data);else if(v.isFramebufferTexture){if(De)if(U)n.texStorage2D(t.TEXTURE_2D,Be,Fe,ie.width,ie.height);else{let Se=ie.width,de=ie.height;for(let ve=0;ve<Be;ve++)n.texImage2D(t.TEXTURE_2D,ve,Fe,Se,de,0,Te,Oe,null),Se>>=1,de>>=1}}else if(qe.length>0){if(U&&De){const Se=be(qe[0]);n.texStorage2D(t.TEXTURE_2D,Be,Fe,Se.width,Se.height)}for(let Se=0,de=qe.length;Se<de;Se++)we=qe[Se],U?_e&&n.texSubImage2D(t.TEXTURE_2D,Se,0,0,Te,Oe,we):n.texImage2D(t.TEXTURE_2D,Se,Fe,Te,Oe,we);v.generateMipmaps=!1}else if(U){if(De){const Se=be(ie);n.texStorage2D(t.TEXTURE_2D,Be,Fe,Se.width,Se.height)}_e&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Oe,ie)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Te,Oe,ie);m(v)&&h($),Pe.__version=W.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function O(E,v,I){if(v.image.length!==6)return;const $=We(E,v),te=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+I);const W=i.get(te);if(te.version!==W.__version||$===!0){n.activeTexture(t.TEXTURE0+I);const Pe=lt.getPrimaries(lt.workingColorSpace),oe=v.colorSpace===Ni?null:lt.getPrimaries(v.colorSpace),ge=v.colorSpace===Ni||Pe===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,Te=[];for(let de=0;de<6;de++)!xe&&!ie?Te[de]=_(v.image[de],!0,r.maxCubemapSize):Te[de]=ie?v.image[de].image:v.image[de],Te[de]=X(v,Te[de]);const Oe=Te[0],Fe=s.convert(v.format,v.colorSpace),we=s.convert(v.type),qe=T(v.internalFormat,Fe,we,v.colorSpace),U=v.isVideoTexture!==!0,De=W.__version===void 0||$===!0,_e=te.dataReady;let Be=L(v,Oe);He(t.TEXTURE_CUBE_MAP,v);let Se;if(xe){U&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,qe,Oe.width,Oe.height);for(let de=0;de<6;de++){Se=Te[de].mipmaps;for(let ve=0;ve<Se.length;ve++){const Ce=Se[ve];v.format!==In?Fe!==null?U?_e&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve,0,0,Ce.width,Ce.height,Fe,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve,qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve,0,0,Ce.width,Ce.height,Fe,we,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve,qe,Ce.width,Ce.height,0,Fe,we,Ce.data)}}}else{if(Se=v.mipmaps,U&&De){Se.length>0&&Be++;const de=be(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,qe,de.width,de.height)}for(let de=0;de<6;de++)if(ie){U?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Te[de].width,Te[de].height,Fe,we,Te[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Te[de].width,Te[de].height,0,Fe,we,Te[de].data);for(let ve=0;ve<Se.length;ve++){const nt=Se[ve].image[de].image;U?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve+1,0,0,nt.width,nt.height,Fe,we,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve+1,qe,nt.width,nt.height,0,Fe,we,nt.data)}}else{U?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Fe,we,Te[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,qe,Fe,we,Te[de]);for(let ve=0;ve<Se.length;ve++){const Ce=Se[ve];U?_e&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve+1,0,0,Fe,we,Ce.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve+1,qe,Fe,we,Ce.image[de])}}}m(v)&&h(t.TEXTURE_CUBE_MAP),W.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ae(E,v,I,$,te,W){const Pe=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),ge=T(I.internalFormat,Pe,oe,I.colorSpace),xe=i.get(v),ie=i.get(I);if(ie.__renderTarget=v,!xe.__hasExternalTextures){const Te=Math.max(1,v.width>>W),Oe=Math.max(1,v.height>>W);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,W,ge,Te,Oe,v.depth,0,Pe,oe,null):n.texImage2D(te,W,ge,Te,Oe,0,Pe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),se(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,ie.__webglTexture,0,j(v)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,ie.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(E,v,I){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){const $=v.depthTexture,te=$&&$.isDepthTexture?$.type:null,W=y(v.stencilBuffer,te),Pe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=j(v);se(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,W,v.width,v.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,W,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,W,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,E)}else{const $=v.textures;for(let te=0;te<$.length;te++){const W=$[te],Pe=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),ge=T(W.internalFormat,Pe,oe,W.colorSpace),xe=j(v);I&&se(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ge,v.width,v.height):se(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,xe,ge,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ge,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),he(v.depthTexture,0);const te=$.__webglTexture,W=j(v);if(v.depthTexture.format===zs)se(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(v.depthTexture.format===Hs)se(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ve(E){const v=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const $=E.texture.mipmaps;$&&$.length>0?pe(v.__webglFramebuffer[0],E):pe(v.__webglFramebuffer,E)}else if(I){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=t.createRenderbuffer(),me(v.__webglDepthbuffer[$],E,!1);else{const te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,W)}}else{const $=E.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),me(v.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function A(E,v,I){const $=i.get(E);v!==void 0&&ae($.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ve(E)}function R(E){const v=E.texture,I=i.get(E),$=i.get(v);E.addEventListener("dispose",P);const te=E.textures,W=E.isWebGLCubeRenderTarget===!0,Pe=te.length>1;if(Pe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=v.version,o.memory.textures++),W){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let ge=0;ge<v.mipmaps.length;ge++)I.__webglFramebuffer[oe][ge]=t.createFramebuffer()}else I.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)I.__webglFramebuffer[oe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let oe=0,ge=te.length;oe<ge;oe++){const xe=i.get(te[oe]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&se(E)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<te.length;oe++){const ge=te[oe];I.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);const xe=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),Te=T(ge.internalFormat,xe,ie,ge.colorSpace,E.isXRRenderTarget===!0),Oe=j(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Te,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),me(I.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),He(t.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ae(I.__webglFramebuffer[oe][ge],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge);else ae(I.__webglFramebuffer[oe],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let oe=0,ge=te.length;oe<ge;oe++){const xe=te[oe],ie=i.get(xe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),He(t.TEXTURE_2D,xe),ae(I.__webglFramebuffer,E,xe,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),m(xe)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,$.__webglTexture),He(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ae(I.__webglFramebuffer[ge],E,v,t.COLOR_ATTACHMENT0,oe,ge);else ae(I.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,oe,0);m(v)&&h(oe),n.unbindTexture()}E.depthBuffer&&Ve(E)}function x(E){const v=E.textures;for(let I=0,$=v.length;I<$;I++){const te=v[I];if(m(te)){const W=w(E),Pe=i.get(te).__webglTexture;n.bindTexture(W,Pe),h(W),n.unbindTexture()}}}const re=[],Q=[];function z(E){if(E.samples>0){if(se(E)===!1){const v=E.textures,I=E.width,$=E.height;let te=t.COLOR_BUFFER_BIT;const W=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(E),oe=v.length>1;if(oe)for(let xe=0;xe<v.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ge=E.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const ie=i.get(v[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,I,$,0,0,I,$,te,t.NEAREST),l===!0&&(re.length=0,Q.length=0,re.push(t.COLOR_ATTACHMENT0+xe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(re.push(W),Q.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let xe=0;xe<v.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[xe]);const ie=i.get(v[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function j(E){return Math.min(r.maxSamples,E.samples)}function se(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function V(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function X(E,v){const I=E.colorSpace,$=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==Qr&&I!==Ni&&(lt.getTransfer(I)===_t?($!==In||te!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=he,this.setTexture2DArray=J,this.setTexture3D=fe,this.setTextureCube=q,this.rebindTextures=A,this.setupRenderTarget=R,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=se}function o1(t,e){function n(i,r=Ni){let s;const o=lt.getTransfer(r);if(i===vi)return t.UNSIGNED_BYTE;if(i===du)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ap)return t.BYTE;if(i===lp)return t.SHORT;if(i===Bs)return t.UNSIGNED_SHORT;if(i===fu)return t.INT;if(i===gr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Xs)return t.HALF_FLOAT;if(i===up)return t.ALPHA;if(i===fp)return t.RGB;if(i===In)return t.RGBA;if(i===zs)return t.DEPTH_COMPONENT;if(i===Hs)return t.DEPTH_STENCIL;if(i===dp)return t.RED;if(i===pu)return t.RED_INTEGER;if(i===hp)return t.RG;if(i===mu)return t.RG_INTEGER;if(i===gu)return t.RGBA_INTEGER;if(i===Oo||i===Fo||i===Bo||i===ko)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uc||i===fc||i===dc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uc||i===fc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===Sc||i===yc||i===Ec||i===Mc||i===bc||i===Tc||i===wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_c)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ec)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Ac||i===Rc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zo)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pp||i===Cc||i===Pc||i===Dc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Si({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new Aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=new c1,m=n.getContextAttributes();let h=null,w=null;const T=[],y=[],L=new ft;let C=null;const P=new Dn;P.viewport=new Rt;const F=new Dn;F.viewport=new Rt;const b=[P,F],S=new DS;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ye=T[le];return ye===void 0&&(ye=new yl,T[le]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(le){let ye=T[le];return ye===void 0&&(ye=new yl,T[le]=ye),ye.getGripSpace()},this.getHand=function(le){let ye=T[le];return ye===void 0&&(ye=new yl,T[le]=ye),ye.getHandSpace()};function G(le){const ye=y.indexOf(le.inputSource);if(ye===-1)return;const Ne=T[ye];Ne!==void 0&&(Ne.update(le.inputSource,le.frame,c||o),Ne.dispatchEvent({type:le.type,data:le.inputSource}))}function Y(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",he);for(let le=0;le<T.length;le++){const ye=y[le];ye!==null&&(y[le]=null,T[le].disconnect(ye))}D=null,B=null,_.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,w=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",he),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,O=null,ae=null;m.depth&&(ae=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=m.stencil?Hs:zs,O=m.stencil?ks:gr);const me={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new _r(d.textureWidth,d.textureHeight,{format:In,type:vi,depthTexture:new Rp(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new _r(p.framebufferWidth,p.framebufferHeight,{format:In,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function he(le){for(let ye=0;ye<le.removed.length;ye++){const Ne=le.removed[ye],O=y.indexOf(Ne);O>=0&&(y[O]=null,T[O].disconnect(Ne))}for(let ye=0;ye<le.added.length;ye++){const Ne=le.added[ye];let O=y.indexOf(Ne);if(O===-1){for(let me=0;me<T.length;me++)if(me>=y.length){y.push(Ne),O=me;break}else if(y[me]===null){y[me]=Ne,O=me;break}if(O===-1)break}const ae=T[O];ae&&ae.connect(Ne)}}const J=new Z,fe=new Z;function q(le,ye,Ne){J.setFromMatrixPosition(ye.matrixWorld),fe.setFromMatrixPosition(Ne.matrixWorld);const O=J.distanceTo(fe),ae=ye.projectionMatrix.elements,me=Ne.projectionMatrix.elements,pe=ae[14]/(ae[10]-1),Ve=ae[14]/(ae[10]+1),A=(ae[9]+1)/ae[5],R=(ae[9]-1)/ae[5],x=(ae[8]-1)/ae[0],re=(me[8]+1)/me[0],Q=pe*x,z=pe*re,j=O/(-x+re),se=j*-x;if(ye.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(se),le.translateZ(j),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ae[10]===-1)le.projectionMatrix.copy(ye.projectionMatrix),le.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const V=pe+j,X=Ve+j,be=Q-se,E=z+(O-se),v=A*Ve/X*V,I=R*Ve/X*V;le.projectionMatrix.makePerspective(be,E,v,I,V,X),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Me(le,ye){ye===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ye.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let ye=le.near,Ne=le.far;_.texture!==null&&(_.depthNear>0&&(ye=_.depthNear),_.depthFar>0&&(Ne=_.depthFar)),S.near=F.near=P.near=ye,S.far=F.far=P.far=Ne,(D!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,B=S.far),P.layers.mask=le.layers.mask|2,F.layers.mask=le.layers.mask|4,S.layers.mask=P.layers.mask|F.layers.mask;const O=le.parent,ae=S.cameras;Me(S,O);for(let me=0;me<ae.length;me++)Me(ae[me],O);ae.length===2?q(S,P,F):S.projectionMatrix.copy(P.projectionMatrix),Ae(le,S,O)};function Ae(le,ye,Ne){Ne===null?le.matrix.copy(ye.matrixWorld):(le.matrix.copy(Ne.matrixWorld),le.matrix.invert(),le.matrix.multiply(ye.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ye.projectionMatrix),le.projectionMatrixInverse.copy(ye.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Lc*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Re=null;function He(le,ye){if(u=ye.getViewerPose(c||o),g=ye,u!==null){const Ne=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let O=!1;Ne.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let pe=0;pe<Ne.length;pe++){const Ve=Ne[pe];let A=null;if(p!==null)A=p.getViewport(Ve);else{const x=f.getViewSubImage(d,Ve);A=x.viewport,pe===0&&(e.setRenderTargetTextures(w,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(w))}let R=b[pe];R===void 0&&(R=new Dn,R.layers.enable(pe),R.viewport=new Rt,b[pe]=R),R.matrix.fromArray(Ve.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ve.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(A.x,A.y,A.width,A.height),pe===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(R)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const pe=f.getDepthInformation(Ne[0]);pe&&pe.isValid&&pe.texture&&_.init(e,pe,r.renderState)}}for(let Ne=0;Ne<T.length;Ne++){const O=y[Ne],ae=T[Ne];O!==null&&ae!==void 0&&ae.update(O,ye,c||o)}Re&&Re(le,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),g=null}const We=new Pp;We.setAnimationLoop(He),this.setAnimationLoop=function(le){Re=le},this.dispose=function(){}}}const nr=new xi,f1=new Ct;function d1(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,bp(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,w,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===sn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===sn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),T=w.envMap,y=w.envMapRotation;T&&(m.envMap.value=T,nr.copy(y),nr.x*=-1,nr.y*=-1,nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),m.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(nr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=T*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const y=T.program;i.uniformBlockBinding(w,y)}function c(w,T){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(w,L);const C=e.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function u(w){const T=f();w.__bindingPointIndex=T;const y=t.createBuffer(),L=w.__size,C=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,y),y}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=r[w.id],y=w.uniforms,L=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let C=0,P=y.length;C<P;C++){const F=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,S=F.length;b<S;b++){const D=F[b];if(p(D,C,b,L)===!0){const B=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let he=0;he<G.length;he++){const J=G[he],fe=_(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,B+Y,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):(J.toArray(D.__data,Y),Y+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,T,y,L){const C=w.value,P=T+"_"+y;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const F=L[P];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[P]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(w){const T=w.uniforms;let y=0;const L=16;for(let P=0,F=T.length;P<F;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let S=0,D=b.length;S<D;S++){const B=b[S],G=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,he=G.length;Y<he;Y++){const J=G[Y],fe=_(J),q=y%L,Me=q%fe.boundary,Ae=q+Me;y+=Me,Ae!==0&&L-Ae<fe.storage&&(y+=L-Ae),B.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=fe.storage}}}const C=y%L;return C>0&&(y+=L-C),w.__size=y,w.__cache={},this}function _(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function m(w){const T=w.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class p1{constructor(e={}){const{canvas:n=Yx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const w=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=Mn;let C=0,P=0,F=null,b=-1,S=null;const D=new Rt,B=new Rt;let G=null;const Y=new mt(0);let he=0,J=n.width,fe=n.height,q=1,Me=null,Ae=null;const Re=new Rt(0,0,J,fe),He=new Rt(0,0,J,fe);let We=!1;const le=new Ap;let ye=!1,Ne=!1;const O=new Ct,ae=new Ct,me=new Z,pe=new Rt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function R(){return F===null?q:1}let x=i;function re(M,k){return n.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uu}`),n.addEventListener("webglcontextlost",Be,!1),n.addEventListener("webglcontextrestored",Se,!1),n.addEventListener("webglcontextcreationerror",de,!1),x===null){const k="webgl2";if(x=re(k,M),x===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,z,j,se,V,X,be,E,v,I,$,te,W,Pe,oe,ge,xe,ie,Te,Oe,Fe,we,qe,U;function De(){Q=new bM(x),Q.init(),we=new o1(x,Q),z=new _M(x,Q,e,we),j=new r1(x,Q),z.reverseDepthBuffer&&d&&j.buffers.depth.setReversed(!0),se=new AM(x),V=new Xb,X=new s1(x,Q,j,V,z,we,se),be=new xM(y),E=new MM(y),v=new IS(x),qe=new mM(x,v),I=new TM(x,v,se,qe),$=new CM(x,I,v,se),Te=new RM(x,z,X),ge=new vM(V),te=new Wb(y,be,E,Q,z,qe,ge),W=new d1(y,V),Pe=new qb,oe=new Qb(Q),ie=new pM(y,be,E,j,$,p,l),xe=new n1(y,$,z),U=new h1(x,se,z,j),Oe=new gM(x,Q,se),Fe=new wM(x,Q,se),se.programs=te.programs,y.capabilities=z,y.extensions=Q,y.properties=V,y.renderLists=Pe,y.shadowMap=xe,y.state=j,y.info=se}De();const _e=new u1(y,x);this.xr=_e,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(J,fe,!1))},this.getSize=function(M){return M.set(J,fe)},this.setSize=function(M,k,K=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,fe=k,n.width=Math.floor(M*q),n.height=Math.floor(k*q),K===!0&&(n.style.width=M+"px",n.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(J*q,fe*q).floor()},this.setDrawingBufferSize=function(M,k,K){J=M,fe=k,q=K,n.width=Math.floor(M*K),n.height=Math.floor(k*K),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Re)},this.setViewport=function(M,k,K,ee){M.isVector4?Re.set(M.x,M.y,M.z,M.w):Re.set(M,k,K,ee),j.viewport(D.copy(Re).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,k,K,ee){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,k,K,ee),j.scissor(B.copy(He).multiplyScalar(q).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(M){j.setScissorTest(We=M)},this.setOpaqueSort=function(M){Me=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,K=!0){let ee=0;if(M){let H=!1;if(F!==null){const Ee=F.texture.format;H=Ee===gu||Ee===mu||Ee===pu}if(H){const Ee=F.texture.type,Ue=Ee===vi||Ee===gr||Ee===Bs||Ee===ks||Ee===du||Ee===hu,ze=ie.getClearColor(),ke=ie.getClearAlpha(),Ke=ze.r,Ze=ze.g,Ge=ze.b;Ue?(g[0]=Ke,g[1]=Ze,g[2]=Ge,g[3]=ke,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Ke,_[1]=Ze,_[2]=Ge,_[3]=ke,x.clearBufferiv(x.COLOR,0,_))}else ee|=x.COLOR_BUFFER_BIT}k&&(ee|=x.DEPTH_BUFFER_BIT),K&&(ee|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Be,!1),n.removeEventListener("webglcontextrestored",Se,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ie.dispose(),Pe.dispose(),oe.dispose(),V.dispose(),be.dispose(),E.dispose(),$.dispose(),qe.dispose(),U.dispose(),te.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Zn),_e.removeEventListener("sessionend",Nt),Ot.stop()};function Be(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=se.autoReset,k=xe.enabled,K=xe.autoUpdate,ee=xe.needsUpdate,H=xe.type;De(),se.autoReset=M,xe.enabled=k,xe.autoUpdate=K,xe.needsUpdate=ee,xe.type=H}function de(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ve(M){const k=M.target;k.removeEventListener("dispose",ve),Ce(k)}function Ce(M){nt(M),V.remove(M)}function nt(M){const k=V.get(M).programs;k!==void 0&&(k.forEach(function(K){te.releaseProgram(K)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,K,ee,H,Ee){k===null&&(k=Ve);const Ue=H.isMesh&&H.matrixWorld.determinant()<0,ze=am(M,k,K,ee,H);j.setMaterial(ee,Ue);let ke=K.index,Ke=1;if(ee.wireframe===!0){if(ke=I.getWireframeAttribute(K),ke===void 0)return;Ke=2}const Ze=K.drawRange,Ge=K.attributes.position;let st=Ze.start*Ke,gt=(Ze.start+Ze.count)*Ke;Ee!==null&&(st=Math.max(st,Ee.start*Ke),gt=Math.min(gt,(Ee.start+Ee.count)*Ke)),ke!==null?(st=Math.max(st,0),gt=Math.min(gt,ke.count)):Ge!=null&&(st=Math.max(st,0),gt=Math.min(gt,Ge.count));const wt=gt-st;if(wt<0||wt===1/0)return;qe.setup(H,ee,ze,K,ke);let yt,vt=Oe;if(ke!==null&&(yt=v.get(ke),vt=Fe,vt.setIndex(yt)),H.isMesh)ee.wireframe===!0?(j.setLineWidth(ee.wireframeLinewidth*R()),vt.setMode(x.LINES)):vt.setMode(x.TRIANGLES);else if(H.isLine){let Xe=ee.linewidth;Xe===void 0&&(Xe=1),j.setLineWidth(Xe*R()),H.isLineSegments?vt.setMode(x.LINES):H.isLineLoop?vt.setMode(x.LINE_LOOP):vt.setMode(x.LINE_STRIP)}else H.isPoints?vt.setMode(x.POINTS):H.isSprite&&vt.setMode(x.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))vt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xe=H._multiDrawStarts,Tt=H._multiDrawCounts,at=H._multiDrawCount,fn=ke?v.get(ke).bytesPerElement:1,yr=V.get(ee).currentProgram.getUniforms();for(let dn=0;dn<at;dn++)yr.setValue(x,"_gl_DrawID",dn),vt.render(Xe[dn]/fn,Tt[dn])}else if(H.isInstancedMesh)vt.renderInstances(st,wt,H.count);else if(K.isInstancedBufferGeometry){const Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tt=Math.min(K.instanceCount,Xe);vt.renderInstances(st,wt,Tt)}else vt.render(st,wt)};function Ye(M,k,K){M.transparent===!0&&M.side===fi&&M.forceSinglePass===!1?(M.side=sn,M.needsUpdate=!0,vn(M,k,K),M.side=Vi,M.needsUpdate=!0,vn(M,k,K),M.side=fi):vn(M,k,K)}this.compile=function(M,k,K=null){K===null&&(K=M),h=oe.get(K),h.init(k),T.push(h),K.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),M!==K&&M.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights();const ee=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Ee=H.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){const ze=Ee[Ue];Ye(ze,K,H),ee.add(ze)}else Ye(Ee,K,H),ee.add(Ee)}),h=T.pop(),ee},this.compileAsync=function(M,k,K=null){const ee=this.compile(M,k,K);return new Promise(H=>{function Ee(){if(ee.forEach(function(Ue){V.get(Ue).currentProgram.isReady()&&ee.delete(Ue)}),ee.size===0){H(M);return}setTimeout(Ee,10)}Q.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Pt=null;function Ut(M){Pt&&Pt(M)}function Zn(){Ot.stop()}function Nt(){Ot.start()}const Ot=new Pp;Ot.setAnimationLoop(Ut),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(M){Pt=M,_e.setAnimationLoop(M),M===null?Ot.stop():Ot.start()},_e.addEventListener("sessionstart",Zn),_e.addEventListener("sessionend",Nt),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(k),k=_e.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,k,F),h=oe.get(M,T.length),h.init(k),T.push(h),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(ae),Ne=this.localClippingEnabled,ye=ge.init(this.clippingPlanes,Ne),m=Pe.get(M,w.length),m.init(),w.push(m),_e.enabled===!0&&_e.isPresenting===!0){const Ee=y.xr.getDepthSensingMesh();Ee!==null&&Vn(Ee,k,-1/0,y.sortObjects)}Vn(M,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Me,Ae),A=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,A&&ie.addToRenderList(m,M),this.info.render.frame++,ye===!0&&ge.beginShadows();const K=h.state.shadowsArray;xe.render(K,M,k),ye===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,H=m.transmissive;if(h.setupLights(),k.isArrayCamera){const Ee=k.cameras;if(H.length>0)for(let Ue=0,ze=Ee.length;Ue<ze;Ue++){const ke=Ee[Ue];un(ee,H,M,ke)}A&&ie.render(M);for(let Ue=0,ze=Ee.length;Ue<ze;Ue++){const ke=Ee[Ue];Jn(m,M,ke,ke.viewport)}}else H.length>0&&un(ee,H,M,k),A&&ie.render(M),Jn(m,M,k);F!==null&&P===0&&(X.updateMultisampleRenderTarget(F),X.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(y,M,k),qe.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(h=T[T.length-1],ye===!0&&ge.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Vn(M,k,K,ee){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||le.intersectsSprite(M)){ee&&pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ae);const Ue=$.update(M),ze=M.material;ze.visible&&m.push(M,Ue,ze,K,pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||le.intersectsObject(M))){const Ue=$.update(M),ze=M.material;if(ee&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),pe.copy(M.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),pe.copy(Ue.boundingSphere.center)),pe.applyMatrix4(M.matrixWorld).applyMatrix4(ae)),Array.isArray(ze)){const ke=Ue.groups;for(let Ke=0,Ze=ke.length;Ke<Ze;Ke++){const Ge=ke[Ke],st=ze[Ge.materialIndex];st&&st.visible&&m.push(M,Ue,st,K,pe.z,Ge)}}else ze.visible&&m.push(M,Ue,ze,K,pe.z,null)}}const Ee=M.children;for(let Ue=0,ze=Ee.length;Ue<ze;Ue++)Vn(Ee[Ue],k,K,ee)}function Jn(M,k,K,ee){const H=M.opaque,Ee=M.transmissive,Ue=M.transparent;h.setupLightsView(K),ye===!0&&ge.setGlobalState(y.clippingPlanes,K),ee&&j.viewport(D.copy(ee)),H.length>0&&An(H,k,K),Ee.length>0&&An(Ee,k,K),Ue.length>0&&An(Ue,k,K),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function un(M,k,K,ee){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ee.id]===void 0&&(h.state.transmissionRenderTarget[ee.id]=new _r(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Xs:vi,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Ee=h.state.transmissionRenderTarget[ee.id],Ue=ee.viewport||D;Ee.setSize(Ue.z*y.transmissionResolutionScale,Ue.w*y.transmissionResolutionScale);const ze=y.getRenderTarget(),ke=y.getActiveCubeFace(),Ke=y.getActiveMipmapLevel();y.setRenderTarget(Ee),y.getClearColor(Y),he=y.getClearAlpha(),he<1&&y.setClearColor(16777215,.5),y.clear(),A&&ie.render(K);const Ze=y.toneMapping;y.toneMapping=ki;const Ge=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),h.setupLightsView(ee),ye===!0&&ge.setGlobalState(y.clippingPlanes,ee),An(M,K,ee),X.updateMultisampleRenderTarget(Ee),X.updateRenderTargetMipmap(Ee),Q.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let gt=0,wt=k.length;gt<wt;gt++){const yt=k[gt],vt=yt.object,Xe=yt.geometry,Tt=yt.material,at=yt.group;if(Tt.side===fi&&vt.layers.test(ee.layers)){const fn=Tt.side;Tt.side=sn,Tt.needsUpdate=!0,Xi(vt,K,ee,Xe,Tt,at),Tt.side=fn,Tt.needsUpdate=!0,st=!0}}st===!0&&(X.updateMultisampleRenderTarget(Ee),X.updateRenderTargetMipmap(Ee))}y.setRenderTarget(ze,ke,Ke),y.setClearColor(Y,he),Ge!==void 0&&(ee.viewport=Ge),y.toneMapping=Ze}function An(M,k,K){const ee=k.isScene===!0?k.overrideMaterial:null;for(let H=0,Ee=M.length;H<Ee;H++){const Ue=M[H],ze=Ue.object,ke=Ue.geometry,Ke=Ue.group;let Ze=Ue.material;Ze.allowOverride===!0&&ee!==null&&(Ze=ee),ze.layers.test(K.layers)&&Xi(ze,k,K,ke,Ze,Ke)}}function Xi(M,k,K,ee,H,Ee){M.onBeforeRender(y,k,K,ee,H,Ee),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(y,k,K,ee,M,Ee),H.transparent===!0&&H.side===fi&&H.forceSinglePass===!1?(H.side=sn,H.needsUpdate=!0,y.renderBufferDirect(K,k,ee,H,M,Ee),H.side=Vi,H.needsUpdate=!0,y.renderBufferDirect(K,k,ee,H,M,Ee),H.side=fi):y.renderBufferDirect(K,k,ee,H,M,Ee),M.onAfterRender(y,k,K,ee,H,Ee)}function vn(M,k,K){k.isScene!==!0&&(k=Ve);const ee=V.get(M),H=h.state.lights,Ee=h.state.shadowsArray,Ue=H.state.version,ze=te.getParameters(M,H.state,Ee,k,K),ke=te.getProgramCacheKey(ze);let Ke=ee.programs;ee.environment=M.isMeshStandardMaterial?k.environment:null,ee.fog=k.fog,ee.envMap=(M.isMeshStandardMaterial?E:be).get(M.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ke===void 0&&(M.addEventListener("dispose",ve),Ke=new Map,ee.programs=Ke);let Ze=Ke.get(ke);if(Ze!==void 0){if(ee.currentProgram===Ze&&ee.lightsStateVersion===Ue)return ss(M,ze),Ze}else ze.uniforms=te.getUniforms(M),M.onBeforeCompile(ze,y),Ze=te.acquireProgram(ze,ke),Ke.set(ke,Ze),ee.uniforms=ze.uniforms;const Ge=ee.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ge.clippingPlanes=ge.uniform),ss(M,ze),ee.needsLights=cm(M),ee.lightsStateVersion=Ue,ee.needsLights&&(Ge.ambientLightColor.value=H.state.ambient,Ge.lightProbe.value=H.state.probe,Ge.directionalLights.value=H.state.directional,Ge.directionalLightShadows.value=H.state.directionalShadow,Ge.spotLights.value=H.state.spot,Ge.spotLightShadows.value=H.state.spotShadow,Ge.rectAreaLights.value=H.state.rectArea,Ge.ltc_1.value=H.state.rectAreaLTC1,Ge.ltc_2.value=H.state.rectAreaLTC2,Ge.pointLights.value=H.state.point,Ge.pointLightShadows.value=H.state.pointShadow,Ge.hemisphereLights.value=H.state.hemi,Ge.directionalShadowMap.value=H.state.directionalShadowMap,Ge.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ge.spotShadowMap.value=H.state.spotShadowMap,Ge.spotLightMatrix.value=H.state.spotLightMatrix,Ge.spotLightMap.value=H.state.spotLightMap,Ge.pointShadowMap.value=H.state.pointShadowMap,Ge.pointShadowMatrix.value=H.state.pointShadowMatrix),ee.currentProgram=Ze,ee.uniformsList=null,Ze}function eo(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=Ho.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function ss(M,k){const K=V.get(M);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function am(M,k,K,ee,H){k.isScene!==!0&&(k=Ve),X.resetTextureUnits();const Ee=k.fog,Ue=ee.isMeshStandardMaterial?k.environment:null,ze=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qr,ke=(ee.isMeshStandardMaterial?E:be).get(ee.envMap||Ue),Ke=ee.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ge=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color;let wt=ki;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(wt=y.toneMapping);const yt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,vt=yt!==void 0?yt.length:0,Xe=V.get(ee),Tt=h.state.lights;if(ye===!0&&(Ne===!0||M!==S)){const Yt=M===S&&ee.id===b;ge.setState(ee,M,Yt)}let at=!1;ee.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Tt.state.version||Xe.outputColorSpace!==ze||H.isBatchedMesh&&Xe.batching===!1||!H.isBatchedMesh&&Xe.batching===!0||H.isBatchedMesh&&Xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Xe.instancing===!1||!H.isInstancedMesh&&Xe.instancing===!0||H.isSkinnedMesh&&Xe.skinning===!1||!H.isSkinnedMesh&&Xe.skinning===!0||H.isInstancedMesh&&Xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Xe.instancingMorph===!1&&H.morphTexture!==null||Xe.envMap!==ke||ee.fog===!0&&Xe.fog!==Ee||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ge.numPlanes||Xe.numIntersection!==ge.numIntersection)||Xe.vertexAlphas!==Ke||Xe.vertexTangents!==Ze||Xe.morphTargets!==Ge||Xe.morphNormals!==st||Xe.morphColors!==gt||Xe.toneMapping!==wt||Xe.morphTargetsCount!==vt)&&(at=!0):(at=!0,Xe.__version=ee.version);let fn=Xe.currentProgram;at===!0&&(fn=vn(ee,k,H));let yr=!1,dn=!1,os=!1;const bt=fn.getUniforms(),xn=Xe.uniforms;if(j.useProgram(fn.program)&&(yr=!0,dn=!0,os=!0),ee.id!==b&&(b=ee.id,dn=!0),yr||S!==M){j.buffers.depth.getReversed()?(O.copy(M.projectionMatrix),Zx(O),Jx(O),bt.setValue(x,"projectionMatrix",O)):bt.setValue(x,"projectionMatrix",M.projectionMatrix),bt.setValue(x,"viewMatrix",M.matrixWorldInverse);const en=bt.map.cameraPosition;en!==void 0&&en.setValue(x,me.setFromMatrixPosition(M.matrixWorld)),z.logarithmicDepthBuffer&&bt.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,dn=!0,os=!0)}if(H.isSkinnedMesh){bt.setOptional(x,H,"bindMatrix"),bt.setOptional(x,H,"bindMatrixInverse");const Yt=H.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),bt.setValue(x,"boneTexture",Yt.boneTexture,X))}H.isBatchedMesh&&(bt.setOptional(x,H,"batchingTexture"),bt.setValue(x,"batchingTexture",H._matricesTexture,X),bt.setOptional(x,H,"batchingIdTexture"),bt.setValue(x,"batchingIdTexture",H._indirectTexture,X),bt.setOptional(x,H,"batchingColorTexture"),H._colorsTexture!==null&&bt.setValue(x,"batchingColorTexture",H._colorsTexture,X));const Sn=K.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Te.update(H,K,fn),(dn||Xe.receiveShadow!==H.receiveShadow)&&(Xe.receiveShadow=H.receiveShadow,bt.setValue(x,"receiveShadow",H.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(xn.envMap.value=ke,xn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&k.environment!==null&&(xn.envMapIntensity.value=k.environmentIntensity),dn&&(bt.setValue(x,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&lm(xn,os),Ee&&ee.fog===!0&&W.refreshFogUniforms(xn,Ee),W.refreshMaterialUniforms(xn,ee,q,fe,h.state.transmissionRenderTarget[M.id]),Ho.upload(x,eo(Xe),xn,X)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ho.upload(x,eo(Xe),xn,X),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(x,"center",H.center),bt.setValue(x,"modelViewMatrix",H.modelViewMatrix),bt.setValue(x,"normalMatrix",H.normalMatrix),bt.setValue(x,"modelMatrix",H.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Yt=ee.uniformsGroups;for(let en=0,Oa=Yt.length;en<Oa;en++){const $i=Yt[en];U.update($i,fn),U.bind($i,fn)}}return fn}function lm(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function cm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,k,K){const ee=V.get(M);ee.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=k,V.get(M.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:K,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const K=V.get(M);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const um=x.createFramebuffer();this.setRenderTarget=function(M,k=0,K=0){F=M,C=k,P=K;let ee=!0,H=null,Ee=!1,Ue=!1;if(M){const ke=V.get(M);if(ke.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(x.FRAMEBUFFER,null),ee=!1;else if(ke.__webglFramebuffer===void 0)X.setupRenderTarget(M);else if(ke.__hasExternalTextures)X.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ge=M.depthTexture;if(ke.__boundDepthTexture!==Ge){if(Ge!==null&&V.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(M)}}const Ke=M.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const Ze=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ze[k])?H=Ze[k][K]:H=Ze[k],Ee=!0):M.samples>0&&X.useMultisampledRTT(M)===!1?H=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Ze)?H=Ze[K]:H=Ze,D.copy(M.viewport),B.copy(M.scissor),G=M.scissorTest}else D.copy(Re).multiplyScalar(q).floor(),B.copy(He).multiplyScalar(q).floor(),G=We;if(K!==0&&(H=um),j.bindFramebuffer(x.FRAMEBUFFER,H)&&ee&&j.drawBuffers(M,H),j.viewport(D),j.scissor(B),j.setScissorTest(G),Ee){const ke=V.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,K)}else if(Ue){const ke=V.get(M.texture),Ke=k;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,ke.__webglTexture,K,Ke)}else if(M!==null&&K!==0){const ke=V.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ke.__webglTexture,K)}b=-1},this.readRenderTargetPixels=function(M,k,K,ee,H,Ee,Ue,ze=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){j.bindFramebuffer(x.FRAMEBUFFER,ke);try{const Ke=M.textures[ze],Ze=Ke.format,Ge=Ke.type;if(!z.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-ee&&K>=0&&K<=M.height-H&&(M.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+ze),x.readPixels(k,K,ee,H,we.convert(Ze),we.convert(Ge),Ee))}finally{const Ke=F!==null?V.get(F).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(M,k,K,ee,H,Ee,Ue,ze=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(k>=0&&k<=M.width-ee&&K>=0&&K<=M.height-H){j.bindFramebuffer(x.FRAMEBUFFER,ke);const Ke=M.textures[ze],Ze=Ke.format,Ge=Ke.type;if(!z.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,st),x.bufferData(x.PIXEL_PACK_BUFFER,Ee.byteLength,x.STREAM_READ),M.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+ze),x.readPixels(k,K,ee,H,we.convert(Ze),we.convert(Ge),0);const gt=F!==null?V.get(F).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,gt);const wt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Kx(x,wt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,st),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,Ee),x.deleteBuffer(st),x.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,K=0){const ee=Math.pow(2,-K),H=Math.floor(M.image.width*ee),Ee=Math.floor(M.image.height*ee),Ue=k!==null?k.x:0,ze=k!==null?k.y:0;X.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,K,0,0,Ue,ze,H,Ee),j.unbindTexture()};const fm=x.createFramebuffer(),dm=x.createFramebuffer();this.copyTextureToTexture=function(M,k,K=null,ee=null,H=0,Ee=null){Ee===null&&(H!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=H,H=0):Ee=0);let Ue,ze,ke,Ke,Ze,Ge,st,gt,wt;const yt=M.isCompressedTexture?M.mipmaps[Ee]:M.image;if(K!==null)Ue=K.max.x-K.min.x,ze=K.max.y-K.min.y,ke=K.isBox3?K.max.z-K.min.z:1,Ke=K.min.x,Ze=K.min.y,Ge=K.isBox3?K.min.z:0;else{const Sn=Math.pow(2,-H);Ue=Math.floor(yt.width*Sn),ze=Math.floor(yt.height*Sn),M.isDataArrayTexture?ke=yt.depth:M.isData3DTexture?ke=Math.floor(yt.depth*Sn):ke=1,Ke=0,Ze=0,Ge=0}ee!==null?(st=ee.x,gt=ee.y,wt=ee.z):(st=0,gt=0,wt=0);const vt=we.convert(k.format),Xe=we.convert(k.type);let Tt;k.isData3DTexture?(X.setTexture3D(k,0),Tt=x.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(X.setTexture2DArray(k,0),Tt=x.TEXTURE_2D_ARRAY):(X.setTexture2D(k,0),Tt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,k.unpackAlignment);const at=x.getParameter(x.UNPACK_ROW_LENGTH),fn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),yr=x.getParameter(x.UNPACK_SKIP_PIXELS),dn=x.getParameter(x.UNPACK_SKIP_ROWS),os=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ke),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ze),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ge);const bt=M.isDataArrayTexture||M.isData3DTexture,xn=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const Sn=V.get(M),Yt=V.get(k),en=V.get(Sn.__renderTarget),Oa=V.get(Yt.__renderTarget);j.bindFramebuffer(x.READ_FRAMEBUFFER,en.__webglFramebuffer),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,Oa.__webglFramebuffer);for(let $i=0;$i<ke;$i++)bt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,V.get(M).__webglTexture,H,Ge+$i),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,V.get(k).__webglTexture,Ee,wt+$i)),x.blitFramebuffer(Ke,Ze,Ue,ze,st,gt,Ue,ze,x.DEPTH_BUFFER_BIT,x.NEAREST);j.bindFramebuffer(x.READ_FRAMEBUFFER,null),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||V.has(M)){const Sn=V.get(M),Yt=V.get(k);j.bindFramebuffer(x.READ_FRAMEBUFFER,fm),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,dm);for(let en=0;en<ke;en++)bt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Sn.__webglTexture,H,Ge+en):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Sn.__webglTexture,H),xn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Yt.__webglTexture,Ee,wt+en):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Yt.__webglTexture,Ee),H!==0?x.blitFramebuffer(Ke,Ze,Ue,ze,st,gt,Ue,ze,x.COLOR_BUFFER_BIT,x.NEAREST):xn?x.copyTexSubImage3D(Tt,Ee,st,gt,wt+en,Ke,Ze,Ue,ze):x.copyTexSubImage2D(Tt,Ee,st,gt,Ke,Ze,Ue,ze);j.bindFramebuffer(x.READ_FRAMEBUFFER,null),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else xn?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(Tt,Ee,st,gt,wt,Ue,ze,ke,vt,Xe,yt.data):k.isCompressedArrayTexture?x.compressedTexSubImage3D(Tt,Ee,st,gt,wt,Ue,ze,ke,vt,yt.data):x.texSubImage3D(Tt,Ee,st,gt,wt,Ue,ze,ke,vt,Xe,yt):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,Ee,st,gt,Ue,ze,vt,Xe,yt.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,Ee,st,gt,yt.width,yt.height,vt,yt.data):x.texSubImage2D(x.TEXTURE_2D,Ee,st,gt,Ue,ze,vt,Xe,yt);x.pixelStorei(x.UNPACK_ROW_LENGTH,at),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,fn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,yr),x.pixelStorei(x.UNPACK_SKIP_ROWS,dn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,os),Ee===0&&k.generateMipmaps&&x.generateMipmap(Tt),j.unbindTexture()},this.copyTextureToTexture3D=function(M,k,K=null,ee=null,H=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,K,ee,H)},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&X.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?X.setTextureCube(M,0):M.isData3DTexture?X.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?X.setTexture2DArray(M,0):X.setTexture2D(M,0),j.unbindTexture()},this.resetState=function(){C=0,P=0,F=null,j.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}const m1={key:0,class:"fallback-background"},g1={__name:"FireAshBackground",setup(t){const e=Object.freeze({PARTICLE_COUNT:300,WIND_RADIUS:80,WIND_RADIUS_SQUARED:6400,WIND_STRENGTH:1200,HORIZONTAL_DRIFT:.3,HORIZONTAL_DRIFT_HALF:.15,MIN_UPWARD_SPEED:.25,MAX_UPWARD_SPEED:.6,MIN_SIZE:4,MAX_SIZE:10,VELOCITY_DAMPING:.98,VELOCITY_RESTORATION:.02,MOUSE_VELOCITY_DAMPING:.95,MOUSE_DRAG_FACTOR:.05,WIND_FORCE_FACTOR:.1,MAX_VELOCITY_X:2,MIN_VELOCITY_X:-2,MAX_VELOCITY_Y:3,MIN_VELOCITY_Y:-1,LIFETIME_INCREMENT:8e-4,LIFETIME_INCREMENT_FAST:.004,MAX_PIXEL_RATIO:1.5,WIND_FORCE:120,UPWARD_SPEED_RANGE:.35,SIZE_RANGE:6,AVERAGE_UPWARD_SPEED:.425,AVERAGE_UPWARD_SPEED_RESTORATION:.0085}),n=It(null),i=It(!0);let r,s,o,a,l;e.PARTICLE_COUNT;let c=e.PARTICLE_COUNT,u=new ft(-1e4,-1e4),f=new ft(0,0),d=new ft(-1e4,-1e4),p,g,_,m,h,w,T,y,L,C,P=!0,F=0,b=!1,S=0,D=0,B=2,G=5,Y=0,he=0,J=0,fe=!1,q=3,Me=[],Ae=null,Re={left:0,top:0,width:0,height:0},He={x:0,y:0},We={position:!1,velocity:!1,lifetime:!1},le=null,ye=null;const Ne=()=>{try{const z=document.createElement("canvas");return!!(z.getContext("webgl")||z.getContext("experimental-webgl"))}catch{return!1}},O=()=>{P=!document.hidden},ae=z=>{z.preventDefault(),l&&(cancelAnimationFrame(l),l=null)},me=()=>{x()},pe=()=>{const z=Math.random();return He.x=(z-.5)*e.HORIZONTAL_DRIFT,He.y=e.MIN_UPWARD_SPEED+z*e.UPWARD_SPEED_RANGE,He},Ve=z=>{const j=.5*z;let se=new Float32Array(1);se[0]=z;let V=new Uint32Array(se.buffer);V[0]=1597463007-(V[0]>>1);let X=new Float32Array(V.buffer)[0];return X=X*(1.5-j*X*X),X},A=()=>{const j=Math.PI*2/60;Ae=new Float32Array(60*2);for(let V=0;V<60;V++){const X=V*j;Ae[V*2]=Math.cos(X),Ae[V*2+1]=Math.sin(X)}const se=e.WIND_RADIUS+1;le=new Float32Array(se*2);for(let V=0;V<se;V++){const X=V,be=X<e.WIND_RADIUS?(1-X/e.WIND_RADIUS)*e.WIND_STRENGTH*e.WIND_FORCE_FACTOR:0;le[V*2]=X>0?be/X:0,le[V*2+1]=X}ye=new Float32Array(150*3);for(let V=0;V<150;V++){const X=-3+V*.02;let be=1,E=1,v=0;X<-2?be=E=.98:X<-.5?(be=E=.97,v=-.25):(be=E=.88,v=.1),ye[V*3]=be,ye[V*3+1]=E,ye[V*3+2]=v}Me=[]},R=(z,j)=>{Me.length=0;for(let se=j-1;se>=0;se--)z[se]>1&&Me.push(se)},x=()=>{if(!n.value)return;if(!Ne()){i.value=!1,console.warn("WebGL not supported, using fallback background");return}const z=n.value.clientWidth,j=n.value.clientHeight;A();const se=n.value.getBoundingClientRect();Re.left=se.left,Re.top=se.top,Re.width=z,Re.height=j,r=new MS,s=new Cp(z/-2,z/2,j/2,j/-2,.1,1e3),s.position.z=1;try{o=new p1({alpha:!0,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch(oe){console.error("Failed to create WebGL renderer:",oe),i.value=!1;return}o.setSize(z,j),o.setPixelRatio(Math.min(window.devicePixelRatio,e.MAX_PIXEL_RATIO)),n.value.appendChild(o.domElement),o.domElement.addEventListener("webglcontextlost",ae,!1),o.domElement.addEventListener("webglcontextrestored",me,!1);const V=new Ei,X=new Float32Array(e.PARTICLE_COUNT*3),be=new Float32Array(e.PARTICLE_COUNT*3),E=new Float32Array(e.PARTICLE_COUNT),v=new Float32Array(e.PARTICLE_COUNT),I=new Float32Array(e.PARTICLE_COUNT);for(let oe=0;oe<e.PARTICLE_COUNT;oe++){const ge=oe*3;X[ge]=(Math.random()-.5)*z,X[ge+1]=(Math.random()-.5)*j,X[ge+2]=0;const xe=pe();be[ge]=xe.x,be[ge+1]=xe.y,be[ge+2]=0,E[oe]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,v[oe]=Math.random()*Math.PI*2,I[oe]=Math.random()}V.setAttribute("position",new Lt(X,3)),V.setAttribute("velocity",new Lt(be,3)),V.setAttribute("size",new Lt(E,1)),V.setAttribute("phase",new Lt(v,1)),V.setAttribute("lifetime",new Lt(I,1));const $=new Si({uniforms:{time:{value:0},isRainbowMode:{value:0}},vertexShader:`
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

        // Fade based on lifetime
        // For firework particles (negative lifetime), keep them fully visible
        // For normal particles (0 to 1), fade in at start and fade out near end
        float fade;
        if (lifetime < 0.0) {
          // Firework particles: fully visible with slight fade-in from -3.0 to -2.8
          fade = smoothstep(-3.0, -2.8, lifetime);
        } else {
          // Normal particles: fade in at start, fade out near end
          fade = smoothstep(0.0, 0.1, lifetime) * smoothstep(1.0, 0.7, lifetime);
        }
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
    `,transparent:!0,blending:$l,depthWrite:!1});a=new RS(V,$),r.add(a);const te=(oe,ge)=>{if(!n.value)return;if(oe<0||oe>window.innerWidth||ge<0||ge>window.innerHeight){W();return}const xe=n.value.getBoundingClientRect();u.x=oe-xe.left-z/2,u.y=-(ge-xe.top-j/2),f.x=u.x-d.x,f.y=u.y-d.y,d.copy(u)};p=oe=>{te(oe.clientX,oe.clientY)},g=oe=>{oe.touches.length>0&&te(oe.touches[0].clientX,oe.touches[0].clientY)};const W=()=>{u.set(-1e4,-1e4),d.set(-1e4,-1e4),f.set(0,0)};_=W,m=oe=>{(!oe.relatedTarget||oe.relatedTarget.nodeName==="HTML")&&W()},h=W,w=()=>{fe=!1,Y=Math.min(Y+300,3e3),re(5e3)},T=()=>{fe=!1,Y=Math.max(0,Y-300)},y=()=>{fe=!0,D=0,b=!1,he=0},L=oe=>{b=oe.detail.active,D=b?1:0,b?(he=Y,re(5e3)):Y=0},C=oe=>{if(!a||Me.length<60)return;const ge=a.geometry.attributes,xe=ge.position.array,ie=ge.velocity.array,Te=ge.size.array,Oe=ge.phase.array,Fe=ge.lifetime.array,we=oe.detail.x-Re.left-Re.width*.5,qe=-(oe.detail.y-Re.top-Re.height*.5),U=6.283185307179586,De=3.75,_e=7.5,Be=e.MIN_SIZE,Se=e.SIZE_RANGE,de=new Float32Array(60*4);for(let ve=0;ve<240;ve++)de[ve]=Math.random();for(let ve=0;ve<60;ve++){const Ce=Me.pop(),nt=Ce*3,Ye=ve*4,Pt=de[Ye]*U,Ut=de[Ye]*3,Zn=Math.cos(Pt),Nt=Math.sin(Pt);xe[nt]=we+Zn*Ut,xe[nt+1]=qe+Nt*Ut,xe[nt+2]=0;const Ot=ve*2,Vn=(de[Ye]-.5)*.5,Jn=Math.cos(Vn),un=Math.sin(Vn),An=Ae[Ot]*Jn-Ae[Ot+1]*un,Xi=Ae[Ot]*un+Ae[Ot+1]*Jn,vn=De+de[Ye+1]*_e;ie[nt]=An*vn,ie[nt+1]=Xi*vn,ie[nt+2]=0,Te[Ce]=Be+de[Ye+2]*Se,Oe[Ce]=de[Ye+3]*U,Fe[Ce]=-3}ge.position.needsUpdate=!0,ge.velocity.needsUpdate=!0,ge.lifetime.needsUpdate=!0,ge.size.needsUpdate=!0,ge.phase.needsUpdate=!0},window.addEventListener("mousemove",p,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",h,{passive:!0}),document.addEventListener("mouseleave",_,{passive:!0}),document.addEventListener("mouseout",m,{passive:!0}),window.addEventListener("increase-particles",w),window.addEventListener("decrease-particles",T),window.addEventListener("reset-particles",y),window.addEventListener("rainbow-mode",L),window.addEventListener("firework",C);const Pe=()=>{if(l=requestAnimationFrame(Pe),!P)return;const oe=performance.now()*.001,ge=J===0?1/60:Math.min(oe-J,.1);if(J=oe,We.position=!1,We.velocity=!1,We.lifetime=!1,S!==D){const ve=S<D,nt=ge/(ve?B:G);Math.abs(S-D)<nt?(S=D,S===0&&he>0&&(Y=he,he=0)):S+=ve?nt:-nt}if(fe&&Y>0){const ve=(e.PARTICLE_COUNT+3e3)*(ge/q);Y=Math.max(0,Y-ve),Y===0&&(fe=!1)}$.uniforms.time.value=oe,$.uniforms.isRainbowMode.value=S;const xe=a.geometry.attributes.position.array,ie=a.geometry.attributes.velocity.array,Te=a.geometry.attributes.lifetime.array,Oe=xe.length/3,Fe=n.value.clientHeight,we=n.value.clientWidth,qe=Fe/2,U=S>0&&he>0?he:Y,De=e.PARTICLE_COUNT+U,_e=1+2*S,Be=Math.floor(De*_e);if(c=Math.min(Be,5e3),F%2===0){let ve=0;const Ce=80,nt=Math.min(Oe,5e3);for(let Ye=e.PARTICLE_COUNT;Ye<nt;Ye++){const Pt=Te[Ye];if(Ye<c&&Pt>1){if(ve>=Ce)break;Te[Ye]=Math.random();const Ut=Ye*3,Zn=Math.random();xe[Ut]=(Zn-.5)*we,xe[Ut+1]=(Math.random()-.5)*Fe;const Nt=pe();ie[Ut]=Nt.x,ie[Ut+1]=Nt.y,ve++,We.position=!0,We.velocity=!0,We.lifetime=!0}else Ye>=c&&Pt<=1&&Pt>=0&&(Te[Ye]=.95,We.lifetime=!0)}}f.x*=e.MOUSE_VELOCITY_DAMPING,f.y*=e.MOUSE_VELOCITY_DAMPING,F++;const Se=F%2===0;if(F%10===0&&n.value){const ve=n.value.getBoundingClientRect();Re.left=ve.left,Re.top=ve.top,Re.width=we,Re.height=Fe}if(F%30===0&&(R(Te,Oe),Me.length<100)){const ve=100-Me.length;re(Math.min(Oe+ve,5e3))}const de=Math.min(Oe,5e3);for(let ve=0;ve<de;ve++){const Ce=ve*3;if(Te[ve]>1)continue;const nt=xe[Ce],Ye=xe[Ce+1];if(Te[ve]<0){const Nt=Math.floor((Te[ve]+3)*50)*3,Ot=ye[Nt],Vn=ye[Nt+1],Jn=ye[Nt+2];let un=ie[Ce]*Ot,An=ie[Ce+1]*Vn+Jn;if(xe[Ce]+=un,xe[Ce+1]+=An,ie[Ce]=un,ie[Ce+1]=An,Te[ve]+=.02,Te[ve]>=0){Te[ve]=0;const vn=pe();ie[Ce]=vn.x,ie[Ce+1]=vn.y}We.position=!0,We.velocity=!0,We.lifetime=!0;continue}if(Se){const Nt=nt-u.x,Ot=Ye-u.y,Vn=Math.abs(Nt),Jn=Math.abs(Ot);if(Vn<=e.WIND_RADIUS&&Jn<=e.WIND_RADIUS){const un=Nt*Nt+Ot*Ot;if(un<e.WIND_RADIUS_SQUARED&&un>.01){const An=Ve(un),Xi=un*An,vn=Math.floor(Xi),eo=Math.min(vn,e.WIND_RADIUS)*2,ss=le[eo];ie[Ce]+=Nt*ss+f.x*e.MOUSE_DRAG_FACTOR,ie[Ce+1]+=Ot*ss+f.y*e.MOUSE_DRAG_FACTOR,ie[Ce]=Math.max(e.MIN_VELOCITY_X,Math.min(e.MAX_VELOCITY_X,ie[Ce])),ie[Ce+1]=Math.max(e.MIN_VELOCITY_Y,Math.min(e.MAX_VELOCITY_Y,ie[Ce+1])),We.velocity=!0}}}const Pt=1+(S+S),Ut=e.AVERAGE_UPWARD_SPEED_RESTORATION*Pt;ie[Ce]*=e.VELOCITY_DAMPING,ie[Ce+1]=ie[Ce+1]*e.VELOCITY_DAMPING+Ut,xe[Ce]+=ie[Ce],xe[Ce+1]+=ie[Ce+1];const Zn=Te[ve]+e.LIFETIME_INCREMENT;if(Te[ve]=Zn,We.position=!0,We.velocity=!0,We.lifetime=!0,xe[Ce+1]>qe+50||Zn>1)if(ve<c){xe[Ce]=(Math.random()-.5)*we,xe[Ce+1]=(Math.random()-.5)*Fe,Te[ve]=0;const Nt=pe();ie[Ce]=Nt.x,ie[Ce+1]=Nt.y}else Te[ve]=1.5}We.position&&(a.geometry.attributes.position.needsUpdate=!0),We.velocity&&(a.geometry.attributes.velocity.needsUpdate=!0),We.lifetime&&(a.geometry.attributes.lifetime.needsUpdate=!0),o.render(r,s)};Pe()},re=z=>{if(!a||!n.value||a.geometry.attributes.position.array.length>=z*3)return;const j=n.value.clientWidth,se=n.value.clientHeight,V=a.geometry.attributes.position.array,X=a.geometry.attributes.velocity.array,be=a.geometry.attributes.size.array,E=a.geometry.attributes.phase.array,v=a.geometry.attributes.lifetime.array,I=V.length/3,$=new Float32Array(z*3),te=new Float32Array(z*3),W=new Float32Array(z),Pe=new Float32Array(z),oe=new Float32Array(z);$.set(V),te.set(X),W.set(be),Pe.set(E),oe.set(v);for(let ge=I;ge<z;ge++){const xe=ge*3;$[xe]=(Math.random()-.5)*j,$[xe+1]=(Math.random()-.5)*se,$[xe+2]=0;const ie=pe();te[xe]=ie.x,te[xe+1]=ie.y,te[xe+2]=0,W[ge]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,Pe[ge]=Math.random()*Math.PI*2,oe[ge]=1.5}a.geometry.setAttribute("position",new Lt($,3)),a.geometry.setAttribute("velocity",new Lt(te,3)),a.geometry.setAttribute("size",new Lt(W,1)),a.geometry.setAttribute("phase",new Lt(Pe,1)),a.geometry.setAttribute("lifetime",new Lt(oe,1))},Q=()=>{if(!n.value||!o||!s)return;const z=n.value.clientWidth,j=n.value.clientHeight;s.left=z/-2,s.right=z/2,s.top=j/2,s.bottom=j/-2,s.updateProjectionMatrix(),o.setSize(z,j);const se=n.value.getBoundingClientRect();Re.left=se.left,Re.top=se.top,Re.width=z,Re.height=j};return kn(()=>{x(),window.addEventListener("resize",Q,{passive:!0}),document.addEventListener("visibilitychange",O)}),Sr(()=>{l&&cancelAnimationFrame(l),window.removeEventListener("resize",Q),document.removeEventListener("visibilitychange",O),p&&window.removeEventListener("mousemove",p),g&&window.removeEventListener("touchmove",g),h&&window.removeEventListener("touchend",h),_&&document.removeEventListener("mouseleave",_),m&&document.removeEventListener("mouseout",m),w&&window.removeEventListener("increase-particles",w),T&&window.removeEventListener("decrease-particles",T),y&&window.removeEventListener("reset-particles",y),L&&window.removeEventListener("rainbow-mode",L),C&&window.removeEventListener("firework",C),o&&(o.domElement&&(o.domElement.removeEventListener("webglcontextlost",ae),o.domElement.removeEventListener("webglcontextrestored",me)),o.dispose(),n.value&&o.domElement&&n.value.contains(o.domElement)&&n.value.removeChild(o.domElement)),a&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())}),(z,j)=>(ce(),ue("div",{ref_key:"container",ref:n,class:"ash-container"},[i.value?Je("",!0):(ce(),ue("div",m1))],512))}},_1=Wi(g1,[["__scopeId","data-v-19c14107"]]),v1={class:"font-sans flex flex-col min-h-screen bg-black relative app-container"},x1={class:"pt-0 flex flex-col space-y-16 md:space-y-64 relative z-10"},S1={__name:"App",setup(t){return(e,n)=>{const i=eu("router-view");return ce(),ue("div",v1,[n[0]||(n[0]=N("div",{class:"gradient-bg"},null,-1)),Ie(_1),Ie(rv,{class:"fixed top-0 left-0 w-full h-14 md:h-20"}),N("div",x1,[Ie(i),Ie(sx)])])}}},y1=Wi(S1,[["__scopeId","data-v-6db8d45d"]]),E1="modulepreload",M1=function(t){return"/2025/"+t},_d={},b1=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(n.map(c=>{if(c=M1(c),c in _d)return;_d[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":E1,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},T1="/2025/assets/2025-Dbj42giJ.png",w1={__name:"FlameText",props:{text:{type:String,default:"Ember to Stars"},fontSize:{type:[Number,String],default:60}},setup(t){const e=It(null),n=It(!0);let i=null;return kn(()=>{i=new IntersectionObserver(r=>{r.forEach(s=>{n.value=s.isIntersecting})},{threshold:.1}),e.value&&i.observe(e.value)}),Sr(()=>{i&&e.value&&i.unobserve(e.value)}),(r,s)=>(ce(),ue("div",{ref_key:"fireTextRef",ref:e,class:On(["fire-text",{paused:!n.value}]),style:Fi({fontSize:typeof t.fontSize=="number"?t.fontSize+"px":t.fontSize})},rt(t.text),7))}},Nc=Wi(w1,[["__scopeId","data-v-30b61211"]]),A1={class:"min-h-screen flex items-center justify-center text-white relative"},R1={class:"flex flex-col items-center gap-y-4 relative z-10"},C1={class:"text-center"},P1={class:"text-center px-4 py-4 md:py-8"},D1={class:"flow flow-col space-y-4 md:space-y-8 select-none"},L1={__name:"Teaser2025",setup(t){const e=It(typeof window<"u"?window.innerWidth:1024),n=It(!1),i=ct(()=>e.value<640?"50vw":"320px"),r=()=>{window.dispatchEvent(new CustomEvent("increase-particles")),n.value=!0,setTimeout(()=>{n.value=!1},600)},s=()=>{e.value=window.innerWidth};kn(()=>{window.addEventListener("resize",s)}),Sr(()=>{window.removeEventListener("resize",s)});const o=()=>{const c={title:"Let'Swift 2025",description:"Let'Swift 2025 Conference - iOS Swift Developer Conference",location:"세종대학교 컨벤션센터, 서울특별시 광진구",startDate:"20251124T100000",endDate:"20251124T180000",timestamp:new Date().toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"};return`BEGIN:VCALENDAR
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
END:VCALENDAR`},a=(c,u)=>{const f=new Blob([c],{type:"text/calendar;charset=utf-8"}),d=document.createElement("a");d.href=window.URL.createObjectURL(f),d.download=u,document.body.appendChild(d),d.click(),document.body.removeChild(d),window.URL.revokeObjectURL(d.href)},l=()=>{try{const c=o();a(c,"letswift-2025.ics")}catch(c){console.error("Failed to generate calendar file:",c),window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Let%27Swift%202025&dates=20251124T010000Z/20251124T090000Z&details=Let%27Swift%202025%20Conference&location=%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B4%91%EA%B0%9C%ED%86%A0%EA%B4%80","_blank")}};return(c,u)=>(ce(),ue("div",A1,[N("div",R1,[N("div",C1,[N("img",{src:T1,alt:"Let'Swift 2025",style:Fi({width:i.value,height:"auto"}),class:On(["select-none cursor-pointer pt-28",{flash:n.value}]),onClick:r},null,6)]),N("div",P1,[N("div",D1,[u[0]||(u[0]=N("h1",{class:"text-4xl md:text-7xl leading-none font-black tracking-normal"}," Let'Swift 2025 ",-1)),Ie(Nc,{text:"Ember to Stars",fontSize:e.value<768?30:52},null,8,["fontSize"])]),u[1]||(u[1]=N("div",{class:"mt-4 md:mt-8 text-3xl font-medium space-y-2"},[N("p",{class:"text-xl md:text-2xl font-bold text-zinc-200"},"2025.11.24 월요일"),N("p",{class:"text-lg md:text-2xl font-bold text-zinc-300"},"세종대학교 컨벤션센터")],-1)),N("div",{class:"mt-4 md:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center py-1 md:py-6"},[N("button",{onClick:l,class:"px-6 py-3 rounded-full cursor-pointer bg-red-500/40 border border-red-400/60 text-white text-lg font-bold hover:bg-red-500/50 hover:border-red-400/80 transition-all duration-200 active:bg-red-500/60 select-none","aria-label":"Let'Swift 2025 행사를 캘린더에 추가"}," 캘린더에 추가 ")])])])]))}},I1=Wi(L1,[["__scopeId","data-v-61d6b89d"]]),U1={class:"py-64 pb-32 flex flex-col space-y-16"},N1={class:"flex justify-center"},O1={class:"gradient-background px-8 sm:px-16 md:px-12 xl:px-0 max-w-[1280px] space-y-32"},F1={class:"flex flex-col gap-y-12"},B1={class:"fadein font-black text-white text-4xl"},k1={class:"flex justify-center"},z1={__name:"Introduction",setup(t){return(e,n)=>(ce(),ue("div",U1,[N("div",N1,[N("div",O1,[n[3]||(n[3]=Is('<div class="flex flex-col gap-y-12" data-v-3abc6bd7><div class="fadein font-black text-white text-xl md:text-4xl" data-v-3abc6bd7><span class="text-rainbow text-2xl md:text-5xl" data-v-3abc6bd7>Let&#39;Swift 2025</span> 를 시작하며 </div><div class="fadein text-white font-bold text-lg md:text-2xl space-y-16 text-justify lg:text-center" data-v-3abc6bd7><p data-v-3abc6bd7>우리는 과거의 경험,<br data-v-3abc6bd7>도전과 배움의 순간들을 함께 나누며<br data-v-3abc6bd7>미래를 향한 길을 만들어 왔습니다.</p><p data-v-3abc6bd7>작은 불씨가 모여 불꽃이 되고,<br data-v-3abc6bd7>별들이 모여 빛나는 밤하늘을 이루듯<br data-v-3abc6bd7>여러분의 경험 하나하나가 모여<br data-v-3abc6bd7>iOS 생태계를 비추는 빛이 되었습니다.</p></div></div>',1)),N("div",F1,[N("div",B1,[N("div",k1,[Ie(Nc,{text:"불씨",fontSize:"2.25rem"}),n[0]||(n[0]=gn("에서 ")),Ie(Nc,{text:"별빛",fontSize:"2.25rem"}),n[1]||(n[1]=gn("으로! "))])]),n[2]||(n[2]=N("div",{class:"fadein text-white font-bold text-lg md:text-2xl space-y-16 text-justify lg:text-center"},[N("p",null,[gn("Let’Swift 2025 : Ember to Stars 는"),N("br"),gn("iOS 개발의 과거, 현재, 미래를 탐험하는 여정을 준비했습니다.")]),N("p",null,[gn("현장에서 생생한 세션을 경험하고,"),N("br"),gn("함께 네트워킹하며,"),N("br"),gn("다음 도약을 위한 인사이트를 발견해 보세요.")]),N("p",null,[gn("작은 불씨가 모여 큰 별빛이 되는 순간,"),N("br"),gn("Let’Swift 2025에서 함께 만나요!")])],-1))])])])]))}},H1=Wi(z1,[["__scopeId","data-v-3abc6bd7"]]),V1={class:"flex justify-center"},G1={class:"w-full px-8 xl:px-0 max-w-[1280px] flex justify-center"},W1={class:"inline-flex flex-col items-center"},X1={class:"relative z-10 font-black text-4xl md:text-5xl text-white"},$1={class:"flex items-center gap-1 -mt-3",style:{transform:"skewX(-20deg)","transform-origin":"bottom right"}},q1={class:"relative h-4 px-4 ml-6 bg-orange-600"},j1={class:"font-black text-4xl md:text-5xl invisible"},Zs={__name:"SectionHeader",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(ce(),ue("div",V1,[N("div",G1,[N("div",W1,[N("h3",X1,rt(t.title),1),N("div",$1,[N("div",q1,[N("div",j1,rt(t.title),1)]),n[0]||(n[0]=N("div",{class:"flex gap-1"},[N("div",{class:"w-1 h-4 bg-orange-600"}),N("div",{class:"w-1 h-4 bg-orange-600"}),N("div",{class:"w-1 h-4 bg-orange-600"})],-1))])])])]))}};function Np(t,e){return function(){return t.apply(e,arguments)}}const{toString:Y1}=Object.prototype,{getPrototypeOf:xu}=Object,{iterator:Ca,toStringTag:Op}=Symbol,Pa=(t=>e=>{const n=Y1.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Hn=t=>(t=t.toLowerCase(),e=>Pa(e)===t),Da=t=>e=>typeof e===t,{isArray:is}=Array,Vs=Da("undefined");function K1(t){return t!==null&&!Vs(t)&&t.constructor!==null&&!Vs(t.constructor)&&ln(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Fp=Hn("ArrayBuffer");function Z1(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Fp(t.buffer),e}const J1=Da("string"),ln=Da("function"),Bp=Da("number"),La=t=>t!==null&&typeof t=="object",Q1=t=>t===!0||t===!1,Vo=t=>{if(Pa(t)!=="object")return!1;const e=xu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Op in t)&&!(Ca in t)},eT=Hn("Date"),tT=Hn("File"),nT=Hn("Blob"),iT=Hn("FileList"),rT=t=>La(t)&&ln(t.pipe),sT=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ln(t.append)&&((e=Pa(t))==="formdata"||e==="object"&&ln(t.toString)&&t.toString()==="[object FormData]"))},oT=Hn("URLSearchParams"),[aT,lT,cT,uT]=["ReadableStream","Request","Response","Headers"].map(Hn),fT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Js(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),is(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function kp(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,zp=t=>!Vs(t)&&t!==fr;function Oc(){const{caseless:t}=zp(this)&&this||{},e={},n=(i,r)=>{const s=t&&kp(e,r)||r;Vo(e[s])&&Vo(i)?e[s]=Oc(e[s],i):Vo(i)?e[s]=Oc({},i):is(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Js(arguments[i],n);return e}const dT=(t,e,n,{allOwnKeys:i}={})=>(Js(e,(r,s)=>{n&&ln(r)?t[s]=Np(r,n):t[s]=r},{allOwnKeys:i}),t),hT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),pT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},mT=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&xu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},gT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},_T=t=>{if(!t)return null;if(is(t))return t;let e=t.length;if(!Bp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},vT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&xu(Uint8Array)),xT=(t,e)=>{const i=(t&&t[Ca]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},ST=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},yT=Hn("HTMLFormElement"),ET=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),vd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),MT=Hn("RegExp"),Hp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Js(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},bT=t=>{Hp(t,(e,n)=>{if(ln(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(ln(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TT=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return is(t)?i(t):i(String(t).split(e)),n},wT=()=>{},AT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function RT(t){return!!(t&&ln(t.append)&&t[Op]==="FormData"&&t[Ca])}const CT=t=>{const e=new Array(10),n=(i,r)=>{if(La(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=is(i)?[]:{};return Js(i,(o,a)=>{const l=n(o,r+1);!Vs(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},PT=Hn("AsyncFunction"),DT=t=>t&&(La(t)||ln(t))&&ln(t.then)&&ln(t.catch),Vp=((t,e)=>t?setImmediate:e?((n,i)=>(fr.addEventListener("message",({source:r,data:s})=>{r===fr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),fr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ln(fr.postMessage)),LT=typeof queueMicrotask<"u"?queueMicrotask.bind(fr):typeof process<"u"&&process.nextTick||Vp,IT=t=>t!=null&&ln(t[Ca]),ne={isArray:is,isArrayBuffer:Fp,isBuffer:K1,isFormData:sT,isArrayBufferView:Z1,isString:J1,isNumber:Bp,isBoolean:Q1,isObject:La,isPlainObject:Vo,isReadableStream:aT,isRequest:lT,isResponse:cT,isHeaders:uT,isUndefined:Vs,isDate:eT,isFile:tT,isBlob:nT,isRegExp:MT,isFunction:ln,isStream:rT,isURLSearchParams:oT,isTypedArray:vT,isFileList:iT,forEach:Js,merge:Oc,extend:dT,trim:fT,stripBOM:hT,inherits:pT,toFlatObject:mT,kindOf:Pa,kindOfTest:Hn,endsWith:gT,toArray:_T,forEachEntry:xT,matchAll:ST,isHTMLForm:yT,hasOwnProperty:vd,hasOwnProp:vd,reduceDescriptors:Hp,freezeMethods:bT,toObjectSet:TT,toCamelCase:ET,noop:wT,toFiniteNumber:AT,findKey:kp,global:fr,isContextDefined:zp,isSpecCompliantForm:RT,toJSONObject:CT,isAsyncFn:PT,isThenable:DT,setImmediate:Vp,asap:LT,isIterable:IT};function et(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}ne.inherits(et,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.status}}});const Gp=et.prototype,Wp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Wp[t]={value:t}});Object.defineProperties(et,Wp);Object.defineProperty(Gp,"isAxiosError",{value:!0});et.from=(t,e,n,i,r,s)=>{const o=Object.create(Gp);return ne.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),et.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const UT=null;function Fc(t){return ne.isPlainObject(t)||ne.isArray(t)}function Xp(t){return ne.endsWith(t,"[]")?t.slice(0,-2):t}function xd(t,e,n){return t?t.concat(e).map(function(r,s){return r=Xp(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function NT(t){return ne.isArray(t)&&!t.some(Fc)}const OT=ne.toFlatObject(ne,{},null,function(e){return/^is[A-Z]/.test(e)});function Ia(t,e,n){if(!ne.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=ne.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!ne.isUndefined(m[_])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(e);if(!ne.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(ne.isDate(g))return g.toISOString();if(!l&&ne.isBlob(g))throw new et("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(g)||ne.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,m){let h=g;if(g&&!m&&typeof g=="object"){if(ne.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(ne.isArray(g)&&NT(g)||(ne.isFileList(g)||ne.endsWith(_,"[]"))&&(h=ne.toArray(g)))return _=Xp(_),h.forEach(function(T,y){!(ne.isUndefined(T)||T===null)&&e.append(o===!0?xd([_],y,s):o===null?_:_+"[]",c(T))}),!1}return Fc(g)?!0:(e.append(xd(m,_,s),c(g)),!1)}const f=[],d=Object.assign(OT,{defaultVisitor:u,convertValue:c,isVisitable:Fc});function p(g,_){if(!ne.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),ne.forEach(g,function(h,w){(!(ne.isUndefined(h)||h===null)&&r.call(e,h,ne.isString(w)?w.trim():w,_,d))===!0&&p(h,_?_.concat(w):[w])}),f.pop()}}if(!ne.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Sd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Su(t,e){this._pairs=[],t&&Ia(t,this,e)}const $p=Su.prototype;$p.append=function(e,n){this._pairs.push([e,n])};$p.toString=function(e){const n=e?function(i){return e.call(this,i,Sd)}:Sd;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function FT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qp(t,e,n){if(!e)return t;const i=n&&n.encode||FT;ne.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=ne.isURLSearchParams(e)?e.toString():new Su(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class yd{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ne.forEach(this.handlers,function(i){i!==null&&e(i)})}}const jp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},BT=typeof URLSearchParams<"u"?URLSearchParams:Su,kT=typeof FormData<"u"?FormData:null,zT=typeof Blob<"u"?Blob:null,HT={isBrowser:!0,classes:{URLSearchParams:BT,FormData:kT,Blob:zT},protocols:["http","https","file","blob","url","data"]},yu=typeof window<"u"&&typeof document<"u",Bc=typeof navigator=="object"&&navigator||void 0,VT=yu&&(!Bc||["ReactNative","NativeScript","NS"].indexOf(Bc.product)<0),GT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",WT=yu&&window.location.href||"http://localhost",XT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:yu,hasStandardBrowserEnv:VT,hasStandardBrowserWebWorkerEnv:GT,navigator:Bc,origin:WT},Symbol.toStringTag,{value:"Module"})),qt={...XT,...HT};function $T(t,e){return Ia(t,new qt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return qt.isNode&&ne.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function qT(t){return ne.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function jT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Yp(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&ne.isArray(r)?r.length:o,l?(ne.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!ne.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&ne.isArray(r[o])&&(r[o]=jT(r[o])),!a)}if(ne.isFormData(t)&&ne.isFunction(t.entries)){const n={};return ne.forEachEntry(t,(i,r)=>{e(qT(i),r,n,0)}),n}return null}function YT(t,e,n){if(ne.isString(t))try{return(e||JSON.parse)(t),ne.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Qs={transitional:jp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=ne.isObject(e);if(s&&ne.isHTMLForm(e)&&(e=new FormData(e)),ne.isFormData(e))return r?JSON.stringify(Yp(e)):e;if(ne.isArrayBuffer(e)||ne.isBuffer(e)||ne.isStream(e)||ne.isFile(e)||ne.isBlob(e)||ne.isReadableStream(e))return e;if(ne.isArrayBufferView(e))return e.buffer;if(ne.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return $T(e,this.formSerializer).toString();if((a=ne.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ia(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),YT(e)):e}],transformResponse:[function(e){const n=this.transitional||Qs.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(ne.isResponse(e)||ne.isReadableStream(e))return e;if(e&&ne.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?et.from(a,et.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ne.forEach(["delete","get","head","post","put","patch"],t=>{Qs.headers[t]={}});const KT=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZT=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&KT[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Ed=Symbol("internals");function gs(t){return t&&String(t).trim().toLowerCase()}function Go(t){return t===!1||t==null?t:ne.isArray(t)?t.map(Go):String(t)}function JT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const QT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Cl(t,e,n,i,r){if(ne.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!ne.isString(e)){if(ne.isString(i))return e.indexOf(i)!==-1;if(ne.isRegExp(i))return i.test(e)}}function ew(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function tw(t,e){const n=ne.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let cn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=gs(l);if(!u)throw new Error("header name must be a non-empty string");const f=ne.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Go(a))}const o=(a,l)=>ne.forEach(a,(c,u)=>s(c,u,l));if(ne.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(ne.isString(e)&&(e=e.trim())&&!QT(e))o(ZT(e),n);else if(ne.isObject(e)&&ne.isIterable(e)){let a={},l,c;for(const u of e){if(!ne.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?ne.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=gs(e),e){const i=ne.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return JT(r);if(ne.isFunction(n))return n.call(this,r,i);if(ne.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=gs(e),e){const i=ne.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Cl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=gs(o),o){const a=ne.findKey(i,o);a&&(!n||Cl(i,i[a],a,n))&&(delete i[a],r=!0)}}return ne.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Cl(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return ne.forEach(this,(r,s)=>{const o=ne.findKey(i,s);if(o){n[o]=Go(r),delete n[s];return}const a=e?ew(s):String(s).trim();a!==s&&delete n[s],n[a]=Go(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return ne.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&ne.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Ed]=this[Ed]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=gs(o);i[a]||(tw(r,o),i[a]=!0)}return ne.isArray(e)?e.forEach(s):s(e),this}};cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.reduceDescriptors(cn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});ne.freezeMethods(cn);function Pl(t,e){const n=this||Qs,i=e||n,r=cn.from(i.headers);let s=i.data;return ne.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Kp(t){return!!(t&&t.__CANCEL__)}function rs(t,e,n){et.call(this,t??"canceled",et.ERR_CANCELED,e,n),this.name="CanceledError"}ne.inherits(rs,et,{__CANCEL__:!0});function Zp(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new et("Request failed with status code "+n.status,[et.ERR_BAD_REQUEST,et.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function nw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function iw(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function rw(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const ia=(t,e,n=3)=>{let i=0;const r=iw(50,250);return rw(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Md=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},bd=t=>(...e)=>ne.asap(()=>t(...e)),sw=qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(qt.origin),qt.navigator&&/(msie|trident)/i.test(qt.navigator.userAgent)):()=>!0,ow=qt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];ne.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ne.isString(i)&&o.push("path="+i),ne.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function aw(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function lw(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Jp(t,e,n){let i=!aw(e);return t&&(i||n==!1)?lw(t,e):e}const Td=t=>t instanceof cn?{...t}:t;function vr(t,e){e=e||{};const n={};function i(c,u,f,d){return ne.isPlainObject(c)&&ne.isPlainObject(u)?ne.merge.call({caseless:d},c,u):ne.isPlainObject(u)?ne.merge({},u):ne.isArray(u)?u.slice():u}function r(c,u,f,d){if(ne.isUndefined(u)){if(!ne.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!ne.isUndefined(u))return i(void 0,u)}function o(c,u){if(ne.isUndefined(u)){if(!ne.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Td(c),Td(u),f,!0)};return ne.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);ne.isUndefined(d)&&f!==a||(n[u]=d)}),n}const Qp=t=>{const e=vr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=cn.from(o),e.url=qp(Jp(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(ne.isFormData(n)){if(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(qt.hasStandardBrowserEnv&&(i&&ne.isFunction(i)&&(i=i(e)),i||i!==!1&&sw(e.url))){const c=r&&s&&ow.read(s);c&&o.set(r,c)}return e},cw=typeof XMLHttpRequest<"u",uw=cw&&function(t){return new Promise(function(n,i){const r=Qp(t);let s=r.data;const o=cn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,g;function _(){p&&p(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const T=cn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:T,config:t,request:m};Zp(function(P){n(P),_()},function(P){i(P),_()},L),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new et("Request aborted",et.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new et("Network Error",et.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const L=r.transitional||jp;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new et(y,L.clarifyTimeoutError?et.ETIMEDOUT:et.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&ne.forEach(o.toJSON(),function(y,L){m.setRequestHeader(L,y)}),ne.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=ia(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=ia(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=T=>{m&&(i(!T||T.type?new rs(null,t,m):T),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const w=nw(r.url);if(w&&qt.protocols.indexOf(w)===-1){i(new et("Unsupported protocol "+w+":",et.ERR_BAD_REQUEST,t));return}m.send(s||null)})},fw=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof et?u:new rs(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new et(`timeout ${e} of ms exceeded`,et.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>ne.asap(a),l}},dw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},hw=async function*(t,e){for await(const n of pw(t))yield*dw(n,e)},pw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},wd=(t,e,n,i)=>{const r=hw(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},Ua=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",em=Ua&&typeof ReadableStream=="function",mw=Ua&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),tm=(t,...e)=>{try{return!!t(...e)}catch{return!1}},gw=em&&tm(()=>{let t=!1;const e=new Request(qt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ad=64*1024,kc=em&&tm(()=>ne.isReadableStream(new Response("").body)),ra={stream:kc&&(t=>t.body)};Ua&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ra[e]&&(ra[e]=ne.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new et(`Response type '${e}' is not supported`,et.ERR_NOT_SUPPORT,i)})})})(new Response);const _w=async t=>{if(t==null)return 0;if(ne.isBlob(t))return t.size;if(ne.isSpecCompliantForm(t))return(await new Request(qt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(ne.isArrayBufferView(t)||ne.isArrayBuffer(t))return t.byteLength;if(ne.isURLSearchParams(t)&&(t=t+""),ne.isString(t))return(await mw(t)).byteLength},vw=async(t,e)=>{const n=ne.toFiniteNumber(t.getContentLength());return n??_w(e)},xw=Ua&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=Qp(t);c=c?(c+"").toLowerCase():"text";let p=fw([r,s&&s.toAbortSignal()],o),g;const _=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&gw&&n!=="get"&&n!=="head"&&(m=await vw(u,i))!==0){let L=new Request(e,{method:"POST",body:i,duplex:"half"}),C;if(ne.isFormData(i)&&(C=L.headers.get("content-type"))&&u.setContentType(C),L.body){const[P,F]=Md(m,ia(bd(l)));i=wd(L.body,Ad,P,F)}}ne.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;g=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:h?f:void 0});let w=await fetch(g);const T=kc&&(c==="stream"||c==="response");if(kc&&(a||T&&_)){const L={};["status","statusText","headers"].forEach(b=>{L[b]=w[b]});const C=ne.toFiniteNumber(w.headers.get("content-length")),[P,F]=a&&Md(C,ia(bd(a),!0))||[];w=new Response(wd(w.body,Ad,P,()=>{F&&F(),_&&_()}),L)}c=c||"text";let y=await ra[ne.findKey(ra,c)||"text"](w,t);return!T&&_&&_(),await new Promise((L,C)=>{Zp(L,C,{data:y,headers:cn.from(w.headers),status:w.status,statusText:w.statusText,config:t,request:g})})}catch(h){throw _&&_(),h&&h.name==="TypeError"&&/Load failed|fetch/i.test(h.message)?Object.assign(new et("Network Error",et.ERR_NETWORK,t,g),{cause:h.cause||h}):et.from(h,h&&h.code,t,g)}}),zc={http:UT,xhr:uw,fetch:xw};ne.forEach(zc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Rd=t=>`- ${t}`,Sw=t=>ne.isFunction(t)||t===null||t===!1,nm={getAdapter:t=>{t=ne.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!Sw(n)&&(i=zc[(o=String(n)).toLowerCase()],i===void 0))throw new et(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Rd).join(`
`):" "+Rd(s[0]):"as no adapter specified";throw new et("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:zc};function Dl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new rs(null,t)}function Cd(t){return Dl(t),t.headers=cn.from(t.headers),t.data=Pl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),nm.getAdapter(t.adapter||Qs.adapter)(t).then(function(i){return Dl(t),i.data=Pl.call(t,t.transformResponse,i),i.headers=cn.from(i.headers),i},function(i){return Kp(i)||(Dl(t),i&&i.response&&(i.response.data=Pl.call(t,t.transformResponse,i.response),i.response.headers=cn.from(i.response.headers))),Promise.reject(i)})}const im="1.9.0",Na={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Na[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Pd={};Na.transitional=function(e,n,i){function r(s,o){return"[Axios v"+im+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new et(r(o," has been removed"+(n?" in "+n:"")),et.ERR_DEPRECATED);return n&&!Pd[o]&&(Pd[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Na.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function yw(t,e,n){if(typeof t!="object")throw new et("options must be an object",et.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new et("option "+s+" must be "+l,et.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new et("Unknown option "+s,et.ERR_BAD_OPTION)}}const Wo={assertOptions:yw,validators:Na},Wn=Wo.validators;let pr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new yd,response:new yd}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=vr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Wo.assertOptions(i,{silentJSONParsing:Wn.transitional(Wn.boolean),forcedJSONParsing:Wn.transitional(Wn.boolean),clarifyTimeoutError:Wn.transitional(Wn.boolean)},!1),r!=null&&(ne.isFunction(r)?n.paramsSerializer={serialize:r}:Wo.assertOptions(r,{encode:Wn.function,serialize:Wn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Wo.assertOptions(n,{baseUrl:Wn.spelling("baseURL"),withXsrfToken:Wn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&ne.merge(s.common,s[n.method]);s&&ne.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=cn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Cd.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let p=n;for(f=0;f<d;){const g=a[f++],_=a[f++];try{p=g(p)}catch(m){_.call(this,m);break}}try{u=Cd.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=vr(this.defaults,e);const n=Jp(e.baseURL,e.url,e.allowAbsoluteUrls);return qp(n,e.params,e.paramsSerializer)}};ne.forEach(["delete","get","head","options"],function(e){pr.prototype[e]=function(n,i){return this.request(vr(i||{},{method:e,url:n,data:(i||{}).data}))}});ne.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(vr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}pr.prototype[e]=n(),pr.prototype[e+"Form"]=n(!0)});let Ew=class rm{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new rs(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new rm(function(r){e=r}),cancel:e}}};function Mw(t){return function(n){return t.apply(null,n)}}function bw(t){return ne.isObject(t)&&t.isAxiosError===!0}const Hc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hc).forEach(([t,e])=>{Hc[e]=t});function sm(t){const e=new pr(t),n=Np(pr.prototype.request,e);return ne.extend(n,pr.prototype,e,{allOwnKeys:!0}),ne.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return sm(vr(t,r))},n}const Mt=sm(Qs);Mt.Axios=pr;Mt.CanceledError=rs;Mt.CancelToken=Ew;Mt.isCancel=Kp;Mt.VERSION=im;Mt.toFormData=Ia;Mt.AxiosError=et;Mt.Cancel=Mt.CanceledError;Mt.all=function(e){return Promise.all(e)};Mt.spread=Mw;Mt.isAxiosError=bw;Mt.mergeConfig=vr;Mt.AxiosHeaders=cn;Mt.formToJSON=t=>Yp(ne.isHTMLForm(t)?new FormData(t):t);Mt.getAdapter=nm.getAdapter;Mt.HttpStatusCode=Hc;Mt.default=Mt;const{Axios:n2,AxiosError:i2,CanceledError:r2,isCancel:s2,CancelToken:o2,VERSION:a2,all:l2,Cancel:c2,isAxiosError:u2,spread:f2,toFormData:d2,AxiosHeaders:h2,HttpStatusCode:p2,formToJSON:m2,getAdapter:g2,mergeConfig:_2}=Mt,Tw={class:"flex justify-center"},ww={class:"px-8 xl:px-0 max-w-[1280px] space-y-48"},Aw={class:"space-y-32"},Rw={key:0,class:"flex flex-col gap-y-12"},Cw=["href"],Pw=["src"],Dw={key:1,class:"flex flex-col gap-y-12"},Lw=["href"],Iw=["src"],Uw={key:2,class:"flex flex-col gap-y-12"},Nw=["href"],Ow=["src"],Fw={key:0,class:"flex flex-col gap-y-12"},Bw={class:"grid sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16"},kw={class:"flex flex-col gap-x-3 gap-y-6 items-center"},zw=["src"],Hw={class:"flex flex-col gap-y-2"},Vw={key:0,class:"text-zinc-400 text-sm font-semibold"},Gw={class:"flex gap-x-4 gap-y-4 justify-end pointer-cursor"},Ww=["href"],Xw=["href"],$w=["href"],qw=["href"],jw=["href"],Yw=["href"],Kw=["href"],Zw=["href"],Jw=["href"],Qw=["href"],eA=["href"],tA={__name:"Sponsors",setup(t){const e=It([]),n=It(null),i=It(!1);let r=null;const s=ct(()=>e.value.filter(_=>_.tier==="Platinum"&&_.should_display===!0)),o=ct(()=>e.value.filter(_=>_.tier==="Gold"&&_.should_display===!0)),a=ct(()=>e.value.filter(_=>_.tier==="Silver"&&_.should_display===!0)),l=ct(()=>{const _=e.value.filter(m=>m.tier==="Individual"&&m.should_display===!0);return c(_)});kn(()=>{u(),r=new IntersectionObserver(_=>{_.forEach(m=>{i.value=m.isIntersecting,m.isIntersecting?window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!0}})):window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!1}}))})},{threshold:.3}),n.value&&r.observe(n.value)}),Sr(()=>{r&&n.value&&r.unobserve(n.value)});const c=_=>{const m=[..._];for(let h=m.length-1;h>0;h--){const w=Math.floor(Math.random()*(h+1));[m[h],m[w]]=[m[w],m[h]]}return m},u=async()=>{try{const m=await Mt.get("/2025/assets/json/sponsors.json");e.value=m.data}catch(_){console.error(_)}},f=_=>`/2025/assets/sponsors/${_}`,d=_=>["from-zinc-200 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400"][_],p=_=>{if(!i.value)return;const m=_.target;m.tagName==="BUTTON"||m.tagName==="A"||m.closest("button")||m.closest("a")||window.dispatchEvent(new CustomEvent("firework",{detail:{x:_.clientX,y:_.clientY}}))},g=()=>{window.location.href="mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"};return(_,m)=>(ce(),ue("div",{ref_key:"sponsorsSection",ref:n,class:"space-y-16 py-36 md:scroll-mt-28",onClick:p},[Ie(Zs,{title:"행사 후원"}),N("div",Tw,[N("div",ww,[N("div",Aw,[s.value.length!==0?(ce(),ue("div",Rw,[m[0]||(m[0]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-slate-100 to-slate-400"},"플래티넘",-1)),(ce(!0),ue(ht,null,Ft(s.value,h=>(ce(),ue("div",{key:h.id,class:"flex flex-col items-center space-y-4 text-white"},[N("a",{href:h.social.web,target:"_blank",class:"pointer-cursor"},[N("img",{src:f(h.image_name),loading:"lazy",class:"w-full md:h-24 object-contain"},null,8,Pw)],8,Cw)]))),128))])):Je("",!0),o.value.length!==0?(ce(),ue("div",Dw,[m[1]||(m[1]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-amber-100 to-amber-400"},"골드",-1)),(ce(!0),ue(ht,null,Ft(o.value,h=>(ce(),ue("div",{key:h.id,class:"flex flex-col items-center space-y-4 text-white"},[N("a",{href:h.social.web,target:"_blank",class:"pointer-cursor w-3/4"},[N("img",{src:f(h.image_name),loading:"lazy",class:"w-full md:h-24 object-contain"},null,8,Iw)],8,Lw)]))),128))])):Je("",!0),a.value.length!==0?(ce(),ue("div",Uw,[m[2]||(m[2]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-zinc-300 to-zinc-600"},"실버",-1)),(ce(!0),ue(ht,null,Ft(a.value,h=>(ce(),ue("div",{key:h.id,class:"flex flex-col items-center space-y-4 text-white"},[N("a",{href:h.social.web,target:"_blank",class:"pointer-cursor w-2/3"},[N("img",{src:f(h.image_name),loading:"lazy",class:"w-full sm:h-24 object-contain"},null,8,Ow)],8,Nw)]))),128))])):Je("",!0)]),l.value.length!==0?(ce(),ue("div",Fw,[m[3]||(m[3]=N("div",{class:"font-bold text-lg md:text-xl text-rainbow"},"개인 후원",-1)),N("div",Bw,[(ce(!0),ue(ht,null,Ft(l.value,(h,w)=>(ce(),ue("div",{key:h.id,class:"items-center text-white"},[N("div",kw,[N("div",null,[N("img",{src:f(h.image_name),loading:"lazy",class:"bg-zinc-500 rounded-full w-24 h-24 object-cover"},null,8,zw)]),N("div",Hw,[N("div",{class:On(["font-bold text-lg bg-linear-to-br bg-clip-text text-transparent",d(w)])},rt(h.name),3),h.description?(ce(),ue("div",Vw,rt(h.description),1)):Je("",!0)]),N("div",Gw,[h.social.email?(ce(),ue("a",{key:0,href:`mailto:${h.social.email}`,target:"_blank"},[Ie($e(mr),{fill:"gray",width:"16",height:"16"})],8,Ww)):Je("",!0),h.social.web?(ce(),ue("a",{key:1,href:h.social.web,target:"_blank"},[Ie($e(mr),{fill:"gray",width:"16",height:"16"})],8,Xw)):Je("",!0),h.social.linkedin?(ce(),ue("a",{key:2,href:h.social.linkedin,target:"_blank"},[Ie($e(Ea),{fill:"gray",width:"16",height:"16"})],8,$w)):Je("",!0),h.social.instagram?(ce(),ue("a",{key:3,href:h.social.instagram,target:"_blank"},[Ie($e(ya),{fill:"gray",width:"16",height:"16"})],8,qw)):Je("",!0),h.social.facebook?(ce(),ue("a",{key:4,href:h.social.facebook,target:"_blank"},[Ie($e(ou),{fill:"gray",width:"16",height:"16"})],8,jw)):Je("",!0),h.social.github?(ce(),ue("a",{key:5,href:h.social.github,target:"_blank"},[Ie($e(Sa),{fill:"gray",width:"16",height:"16"})],8,Yw)):Je("",!0),h.social.youtube?(ce(),ue("a",{key:6,href:h.social.youtube,target:"_blank"},[Ie($e(ba),{fill:"gray",width:"16",height:"16"})],8,Kw)):Je("",!0),h.social.x?(ce(),ue("a",{key:7,href:h.social.x,target:"_blank"},[Ie($e(Ma),{fill:"gray",width:"16",height:"16"})],8,Zw)):Je("",!0),h.social.mastodon?(ce(),ue("a",{key:8,href:h.social.mastodon,target:"_blank"},[Ie($e(au),{fill:"gray",width:"16",height:"16"})],8,Jw)):Je("",!0),h.social.medium?(ce(),ue("a",{key:9,href:h.social.medium,target:"_blank"},[Ie($e(lu),{fill:"gray",width:"16",height:"16"})],8,Qw)):Je("",!0),h.social.thread?(ce(),ue("a",{key:10,href:h.social.thread,target:"_blank"},[Ie($e(cu),{fill:"gray",width:"16",height:"16"})],8,eA)):Je("",!0)])])]))),128))])])):Je("",!0),N("button",{onClick:g,class:"px-6 py-3 rounded-full cursor-pointer bg-themeMain/40 border border-themeMain/60 text-white text-lg font-bold hover:bg-themeMain/50 hover:border-themeMain/80 transition-all duration-200 active:bg-themeMain/60 select-none","aria-label":"Let'Swift 2025 후원 문의하기"}," 후원 문의 ")])])],512))}},nA={class:"flex justify-center"},iA={class:"px-8 xl:px-0 max-w-[1280px] flex flex-col gap-y-16 md:gap-y-24"},rA={class:"grid grid-cols-1 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-16"},sA=["href"],oA=["src"],aA={class:"grid grid-cols-3 md:grid-cols-6 gap-x-8 md:gap-x-16 gap-y-8 justify-center"},lA=["src"],cA={__name:"SponsorsMini",setup(t){const e=It([]),n=It(null),i=It(!1);let r=null;const s=ct(()=>e.value.filter(d=>d.tier!=="Individual"&&d.should_display===!0)),o=ct(()=>{const d=e.value.filter(p=>p.tier==="Individual"&&p.should_display===!0);return a(d)});kn(()=>{l(),r=new IntersectionObserver(d=>{d.forEach(p=>{i.value=p.isIntersecting,p.isIntersecting?window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!0}})):window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!1}}))})},{threshold:.3}),n.value&&r.observe(n.value)}),Sr(()=>{r&&n.value&&r.unobserve(n.value)});const a=d=>{const p=[...d];for(let g=p.length-1;g>0;g--){const _=Math.floor(Math.random()*(g+1));[p[g],p[_]]=[p[_],p[g]]}return p},l=async()=>{try{const p=await Mt.get("/2025/assets/json/sponsors.json");e.value=p.data}catch(d){console.error(d)}},c=d=>`/2025/assets/sponsors/${d}`,u=d=>["from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400"][d],f=d=>{if(!i.value)return;const p=d.target;p.tagName==="BUTTON"||p.tagName==="A"||p.closest("button")||p.closest("a")||window.dispatchEvent(new CustomEvent("firework",{detail:{x:d.clientX,y:d.clientY}}))};return(d,p)=>(ce(),ue("div",{ref_key:"sponsorsMiniSection",ref:n,class:"space-y-12 py-16",onClick:f},[p[0]||(p[0]=N("h3",{class:"font-medium text-4xl md:text-6xl text-rainbow text-cherishline leading-tight pb-2 pt-4"},"Special Thanks to",-1)),N("div",nA,[N("div",iA,[N("div",rA,[(ce(!0),ue(ht,null,Ft(s.value,g=>(ce(),ue("div",{key:g.id,class:"flex flex-col items-center text-white"},[N("a",{href:g.social.web,target:"_blank",class:"pointer-cursor"},[N("img",{src:c(g.image_name),loading:"lazy",class:"h-12 lg:h-16 object-contain"},null,8,oA)],8,sA)]))),128))]),N("div",aA,[(ce(!0),ue(ht,null,Ft(o.value,(g,_)=>(ce(),ue("div",{key:g.id,class:"flex flex-col gap-y-4 items-center text-white"},[N("img",{src:c(g.image_name),loading:"lazy",class:"bg-zinc-500 rounded-full w-16 h-16 object-cover"},null,8,lA),N("span",{class:On(["font-black font-mono text-xs md:text-sm bg-linear-to-br bg-clip-text text-transparent",u(_)])},rt(g.name),3)]))),128))])])])],512))}},uA={class:"relative space-y-12 py-0 md:scroll-mt-28"},fA={class:"w-full space-y-8"},dA={class:"flex justify-center"},hA={class:"w-full px-8 xl:px-0 max-w-[1280px] space-y-4"},pA={key:0,class:"bg-white/30 w-full h-[480px] md:h-[720px] rounded-3xl overflow-hidden",style:{filter:"invert(90%) hue-rotate(180deg)"}},mA={__name:"Venue",setup(t){const e=It(2),n=()=>{typeof daum<"u"&&daum.roughmap&&daum.roughmap.Lander?new daum.roughmap.Lander({timestamp:"1728435092684",key:"2kudi",mapWidth:"1280",mapHeight:"720"}).render():console.error("Daum map library not loaded properly.")};kn(()=>{n()});const i=()=>{try{const o=r();s(o,"letswift-2025.ics")}catch(o){console.error("Failed to generate calendar file:",o),window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Let%27Swift%202025&dates=20251124T010000Z/20251124T090000Z&details=Let%27Swift%202025%20Conference&location=%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B4%91%EA%B0%9C%ED%86%A0%EA%B4%80","_blank")}},r=()=>{const o={title:"Let'Swift 2025",description:"Let'Swift 2025 Conference - iOS Swift Developer Conference",location:"세종대학교 컨벤션센터, 서울특별시 광진구",startDate:"20251124T100000",endDate:"20251124T180000",timestamp:new Date().toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"};return`BEGIN:VCALENDAR
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
DTSTART;TZID=Asia/Seoul:${o.startDate}
DTEND;TZID=Asia/Seoul:${o.endDate}
DTSTAMP:${o.timestamp}
SUMMARY:${o.title}
DESCRIPTION:${o.description}
LOCATION:${o.location}
URL:https://letswift.kr/2025
CATEGORIES:CONFERENCE,TECHNOLOGY
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR`},s=(o,a)=>{const l=new Blob([o],{type:"text/calendar;charset=utf-8"}),c=document.createElement("a");c.href=window.URL.createObjectURL(l),c.download=a,document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(c.href)};return(o,a)=>(ce(),ue("div",uA,[N("div",fA,[Ie(Zs,{title:"행사장"})]),N("div",dA,[N("div",hA,[e.value===2?(ce(),ue("div",pA,a[0]||(a[0]=[N("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2102424479963!2d127.06830008511824!3d37.55011015299899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4daa73c863f%3A0xd6bd626e0463b230!2z7IS47KKF64yA7ZWZ6rWQIOq0keqwnO2GoOq0gA!5e0!3m2!1sko!2skr!4v1728434846925!5m2!1sko!2skr",width:"1280",height:"720",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"hidden md:block h-[720px]"},null,-1),N("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2102424479963!2d127.06830008511824!3d37.55011015299899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4daa73c863f%3A0xd6bd626e0463b230!2z7IS47KKF64yA7ZWZ6rWQIOq0keqwnO2GoOq0gA!5e0!3m2!1sko!2skr!4v1728434846925!5m2!1sko!2skr",width:"720",height:"480",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"block md:hidden h-[480px]"},null,-1)]))):Je("",!0)])]),N("div",{class:"flex justify-center"},[N("div",{class:"w-full px-8 xl:px-0 max-w-[1280px] space-y-16"},[a[1]||(a[1]=Is('<div class="flex-col md:flex md:flex-row md:justify-between px-4 space-y-4"><div class="flex flex-col space-y-2 text-white font-bold text-justify"><div class="text-zinc-300 text-xl">세종대학교 컨벤션홀</div><div class="text-zinc-400 text-base font-bold">서울 광진구 능동로 209</div></div><div class="text-xl text-zinc-300 font-bold flex md:block"><span class="text-zinc-200">2025년 </span><span>11월 24일</span><span class="text-zinc-200"> 월요일</span></div></div>',1)),N("button",{onClick:i,class:"px-6 py-3 rounded-full cursor-pointer bg-red-500/40 border border-red-400/60 text-white text-lg font-bold hover:bg-red-500/50 hover:border-red-400/80 transition-all duration-200 active:bg-red-500/60 select-none","aria-label":"Let'Swift 2025 행사를 캘린더에 추가"}," 캘린더에 추가 ")])])]))}},gA={class:"flex flex-col text-base h-full justify-center overflow-hidden text-left text-ellipsis"},_A={key:0,class:"flex flex-col space-y-0 items-baseline px-2 sm:px-4 py-1 md:py-2"},vA={class:"font-bold text-sm text-zinc-300"},xA={key:0},SA={key:1,class:"flex gap-x-4 text-justify px-2 sm:px-4 py-2 md:py-1 drop-shadow-[0_23px_23px_rgba(0,0,0,0.75)] h-full"},yA={class:"flex flex-col items-baseline text-justify py-1 gap-y-0.5"},EA={class:"font-black text-xs sm:text-lg md:text-lg text-zinc-300 line-clamp-3 break-normal w-full text-left"},MA={class:"flex gap-x-2 items-baseline"},bA={class:"font-bold font-mono text-xs sm:text-sm md:text-sm text-zinc-200/80 text-left"},TA={class:"font-bold font-mono text-xs sm:text-xs text-zinc-300/60 text-left"},wA={key:0,class:"flex space-x-2"},AA={class:"font-black text-sm sm:text-sm md:text-base text-zinc-300/70"},RA={key:0,class:"font-semibold mr-2"},CA={key:1},PA={class:"text-xs sm:text-xs opacity-60"},DA={key:2},LA={key:0},IA={key:1},Dd={__name:"TimelineItem",props:["session"],setup(t){const e=t,n=ct(()=>{const s=e.session;return s.type==="recess"||s.type==="lunch"}),i=s=>`${Math.floor(s/60)}분`,r=s=>{const o=new Date(s),a=o.getHours(),l=o.getMinutes(),c=a.toString().padStart(2,"0"),u=l.toString().padStart(2,"0");return`${c}:${u}`};return(s,o)=>(ce(),ue("div",gA,[n.value===!0?(ce(),ue("div",_A,[N("div",vA,rt(t.session.name),1),t.session.type==="lunch"?(ce(),ue("div",xA,o[0]||(o[0]=[N("div",{class:"flex flex-col text-xs text-zinc-500 py-4"},[N("div",null,"식사시 주의 사항"),N("div",null,"내부 음식물 섭취 안내: 컨퍼런스 내부에서 물 이외의 음식은 취식 불가입니다.")],-1)]))):Je("",!0)])):(ce(),ue("div",SA,[o[1]||(o[1]=N("div",{class:"bg-themeMain h-full w-1 rounded-full"},null,-1)),N("div",yA,[N("div",EA,rt(t.session.name),1),N("div",MA,[N("div",bA,rt(r(t.session.start_time))+" ~ "+rt(r(t.session.end_time)),1),N("div",TA,rt(i(t.session.duration)),1)]),t.session.speakers?(ce(),ue("div",wA,[(ce(!0),ue(ht,null,Ft(t.session.speakers,(a,l)=>(ce(),ue("div",AA,[l>0?(ce(),ue("span",RA,"&")):Je("",!0),a.nickname!==""&&a.name!==""?(ce(),ue("span",CA,[gn(rt(a.nickname)+" ",1),N("span",PA,rt(a.name),1)])):(ce(),ue("span",DA,[a.nickname!==""?(ce(),ue("span",LA,rt(a.nickname),1)):(ce(),ue("span",IA,rt(a.name),1))]))]))),256))])):Je("",!0)])]))]))}},UA={class:"flex flex-col gap-y-8 md:scroll-mt-28"},NA={class:"space-y-12"},OA={class:"flex justify-center"},FA={class:"w-full px-2 sm:px-8 py-2 xl:px-0 max-w-[1280px] space-y-12 xl:rounded-3xl"},BA={class:"text-white"},kA={class:"min-h-[250vh] sm:min-h-[300vh] md:min-h-[200vh] grid grid-rows-[repeat(56,1fr)] grid-cols-13 gap-1"},zA={class:"md:hidden"},HA={class:"hidden md:inline"},VA={__name:"Schedule",setup(t){const e=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],n=It([]),i=ct(()=>n.value.filter(c=>c.track_en==="")),r=ct(()=>n.value.filter(c=>c.track_en==="Track A").concat(i.value)),s=ct(()=>n.value.filter(c=>c.track_en==="Track B").concat(i.value));kn(()=>{o()});const o=async()=>{try{const u=await Mt.get("/2025/assets/json/schedule.json");n.value=u.data}catch(c){console.error(c)}},a=(c,u)=>{let f=" ";return u===0?f+=" col-start-2 col-span-6":f+=" col-start-8 col-span-6",c.type==="entry"?f+=" bg-white/5 rounded-md":c.type==="recess"||c.type==="lunch"?f+=" ":(c.type==="opening"||c.type==="closing"||c.type==="networking"||c.track_en==="Track A"||c.track_en==="Track B")&&(f+=" bg-white/10 rounded-md"),f},l=c=>{let u="";const f=new Date(c.start_time),d=f.getHours(),p=f.getMinutes(),g=(d-9)*6+Math.ceil(p/10)+1+1,_=Math.ceil(c.duration/600),m=g+_;return u+=` grid-row-start: ${g}; grid-row-end: ${m};`,u};return(c,u)=>(ce(),ue("div",UA,[N("div",NA,[Ie(Zs,{title:"시간표"})]),u[1]||(u[1]=N("div",{class:"text-zinc-500 text-xs"},"상황에 따라 일정 및 세션 내용은 변경될 수 있습니다.",-1)),N("div",OA,[N("div",FA,[N("div",BA,[N("div",kA,[u[0]||(u[0]=Is('<div class="contents text-center font-bold text-lg md:text-xl"><div class="relative flex flex-col space-y-0 items-center justify-center col-start-2 col-span-6 row-start-0 row-span-1 bg-zinc-700/50 rounded-2xl"><div class="flex flex-col md:flex-row place-items-center md:place-items-baseline gap-x-2"><div class="text-sm md:text-xl">Track A</div><div class="text-xl md:text-3xl text-rainbow">EMBER</div></div><div class="text-xs text-zinc-500">홀 B</div></div><div class="flex flex-col space-y-0 items-center justify-center col-start-8 col-span-6 row-start-0 row-span-1 bg-zinc-700/50 rounded-2xl"><div class="flex flex-col md:flex-row place-items-center md:place-items-baseline gap-x-2"><div class="text-sm md:text-xl">Track B</div><div class="text-xl md:text-3xl text-rainbow">STAR</div></div><div class="text-xs text-zinc-500">홀 C</div></div></div>',1)),(ce(),ue(ht,null,Ft(e,(f,d)=>N("div",{class:"px-1 flex items-center justify-center bg-zinc-700/50 rounded-2xl col-start-1 col-span-1 row-span-6 font-mono font-semibold text-xs sm:text-sm md:text-lg",style:Fi(`grid-row-start: ${d*0}`)},[N("span",zA,rt(f.split(":")[0].replace(/^0/,"")),1),N("span",HA,rt(f),1)],4)),64)),(ce(!0),ue(ht,null,Ft(r.value,f=>(ce(),ue("div",{key:f.id,class:On(a(f,0)),style:Fi(l(f))},[Ie(Dd,{session:f},null,8,["session"])],6))),128)),(ce(!0),ue(ht,null,Ft(s.value,f=>(ce(),ue("div",{key:f.id,class:On(a(f,1)),style:Fi(l(f))},[Ie(Dd,{session:f},null,8,["session"])],6))),128))])])])])]))}},GA={class:"flex flex-col gap-y-8 items-end text-white"},WA={class:"flex flex-col gap-y-8 items-end"},XA=["src"],$A={class:"flex flex-col gap-y-4 items-end text-end"},qA={key:0},jA={class:"font-bold text-lg md:text-xl"},YA={class:"font-bold text-sm md:text-base opacity-60"},KA={key:1},ZA={key:0,class:"font-bold text-lg md:text-xl"},JA={key:1,class:"font-bold text-lg md:text-xl"},QA={class:"font-bold text-xs md:text-sm"},eR={class:"korean-text text-xs md:text-sm text-right text-pretty font-semibold text-zinc-300 opacity-90 max-w-80"},tR={class:"flex pt-2 gap-x-4 gap-y-4 justify-end pointer-cursor"},nR=["href"],iR=["href"],rR=["href"],sR=["href"],oR=["href"],aR=["href"],lR=["href"],cR=["href"],uR=["href"],fR=["href"],dR=["href"],hR={__name:"Speaker",props:["person"],setup(t){const e=n=>`/2025/assets/speakers/${n}`;return(n,i)=>(ce(),ue("div",GA,[N("div",WA,[N("img",{src:e(t.person.image_name),loading:"lazy",class:"w-36 md:w-44 h-36 md:h-44 bg-white rounded-tl-full object-cover z-10"},null,8,XA),N("div",$A,[t.person.nickname!==""&&t.person.name!==""?(ce(),ue("div",qA,[N("div",jA,rt(t.person.nickname),1),N("div",YA,rt(t.person.name),1)])):(ce(),ue("div",KA,[t.person.nickname!==""?(ce(),ue("div",ZA,rt(t.person.nickname),1)):(ce(),ue("div",JA,rt(t.person.name),1))])),N("div",QA,rt(t.person.affiliation),1),N("div",eR,rt(t.person.description),1),N("div",tR,[t.person.social.email?(ce(),ue("a",{key:0,href:`mailto:${t.person.social.email}`,target:"_blank"},[Ie($e(mr),{fill:"gray",width:"16",height:"16"})],8,nR)):Je("",!0),t.person.social.web?(ce(),ue("a",{key:1,href:t.person.social.web,target:"_blank"},[Ie($e(mr),{fill:"gray",width:"16",height:"16"})],8,iR)):Je("",!0),t.person.social.linkedin?(ce(),ue("a",{key:2,href:t.person.social.linkedin,target:"_blank"},[Ie($e(Ea),{fill:"gray",width:"16",height:"16"})],8,rR)):Je("",!0),t.person.social.instagram?(ce(),ue("a",{key:3,href:t.person.social.instagram,target:"_blank"},[Ie($e(ya),{fill:"gray",width:"16",height:"16"})],8,sR)):Je("",!0),t.person.social.facebook?(ce(),ue("a",{key:4,href:t.person.social.facebook,target:"_blank"},[Ie($e(ou),{fill:"gray",width:"16",height:"16"})],8,oR)):Je("",!0),t.person.social.github?(ce(),ue("a",{key:5,href:t.person.social.github,target:"_blank"},[Ie($e(Sa),{fill:"gray",width:"16",height:"16"})],8,aR)):Je("",!0),t.person.social.youtube?(ce(),ue("a",{key:6,href:t.person.social.youtube,target:"_blank"},[Ie($e(ba),{fill:"gray",width:"16",height:"16"})],8,lR)):Je("",!0),t.person.social.x?(ce(),ue("a",{key:7,href:t.person.social.x,target:"_blank"},[Ie($e(Ma),{fill:"gray",width:"16",height:"16"})],8,cR)):Je("",!0),t.person.social.mastodon?(ce(),ue("a",{key:8,href:t.person.social.mastodon,target:"_blank"},[Ie($e(au),{fill:"gray",width:"16",height:"16"})],8,uR)):Je("",!0),t.person.social.medium?(ce(),ue("a",{key:9,href:t.person.social.medium,target:"_blank"},[Ie($e(lu),{fill:"gray",width:"16",height:"16"})],8,fR)):Je("",!0),t.person.social.thread?(ce(),ue("a",{key:10,href:t.person.social.thread,target:"_blank"},[Ie($e(cu),{fill:"gray",width:"16",height:"16"})],8,dR)):Je("",!0)])])])]))}},pR=Wi(hR,[["__scopeId","data-v-875a9e5f"]]),mR={class:"flex flex-col space-y-12 md:space-y-36 md:scroll-mt-28"},gR={class:"flex justify-center"},_R={class:"px-8 xl:px-0 max-w-[1280px]"},vR={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-28"},xR={__name:"Speakers",setup(t){const e=It([]);kn(()=>{n()});const n=async()=>{try{const r=await Mt.get("/2025/assets/json/speakers.json");e.value=r.data}catch(i){console.error(i)}};return(i,r)=>(ce(),ue("div",mR,[Ie(Zs,{title:"연사 소개"}),N("div",gR,[N("div",_R,[N("div",vR,[(ce(!0),ue(ht,null,Ft(e.value,s=>(ce(),ue("div",{key:s.id},[Ie(pR,{person:s},null,8,["person"])]))),128))])])])]))}},SR={class:"flex flex-col gap-y-8 items-center"},yR={class:"relative w-36 md:w-44 h-36 md:h-44"},ER=["src"],MR={key:1,class:"absolute top-0 left-0 w-36 md:w-44 h-36 md:h-44 bg-zinc-200/50 rounded-full object-cover z-10"},bR={class:"flex flex-col gap-y-4 items-center text-center"},TR={key:0},wR={class:"font-bold text-lg md:text-xl"},AR={class:"font-bold text-sm md:text-base opacity-60"},RR={key:1},CR={key:0,class:"font-bold text-lg md:text-xl"},PR={key:1,class:"font-bold text-lg md:text-xl"},DR={class:"korean-text text-xs md:text-sm text-right text-pretty font-semibold text-zinc-300 opacity-90 max-w-80"},LR={class:"flex pt-2 gap-x-4 gap-y-4 justify-center pointer-cursor"},IR=["href"],UR=["href"],NR=["href"],OR=["href"],FR=["href"],BR=["href"],kR=["href"],zR=["href"],HR=["href"],VR=["href"],GR=["href"],WR={__name:"Organizer",props:["person"],setup(t){const e=t,n=It(!1),i=o=>`/2025/assets/organizers/${o}`,r="/2025/assets/organizers/muyaho.jpg",s=()=>{(e.person.nickname==="윌"||e.person.name==="윌")&&(console.log("그만큼 신나시는 거지~"),n.value=!0,setTimeout(()=>{n.value=!1},3e3))};return(o,a)=>(ce(),ue("div",{class:"flex flex-col gap-y-8 items-center text-white",onClick:s},[N("div",SR,[N("div",yR,[t.person.image_name?(ce(),ue("img",{key:0,src:i(t.person.image_name),loading:"lazy",class:"absolute top-0 left-0 w-36 md:w-44 h-36 md:h-44 bg-gradient-to-b from-zinc-300/10 to-zinc-300/20 rounded-full object-cover z-10"},null,8,ER)):(ce(),ue("img",MR)),n.value?(ce(),ue("img",{key:2,src:r,class:"absolute top-0 left-0 w-36 md:w-44 h-36 md:h-44 rounded-full object-cover z-20 overlay-animation"})):Je("",!0)]),N("div",bR,[t.person.nickname!==""&&t.person.name!==""?(ce(),ue("div",TR,[N("div",wR,rt(t.person.nickname),1),N("div",AR,rt(t.person.name),1)])):(ce(),ue("div",RR,[t.person.nickname!==""?(ce(),ue("div",CR,rt(t.person.nickname),1)):(ce(),ue("div",PR,rt(t.person.name),1))])),N("div",DR,rt(t.person.description),1),N("div",LR,[t.person.social.email?(ce(),ue("a",{key:0,href:`mailto:${t.person.social.email}`,target:"_blank"},[Ie($e(mr),{fill:"gray",width:"16",height:"16"})],8,IR)):Je("",!0),t.person.social.web?(ce(),ue("a",{key:1,href:t.person.social.web,target:"_blank"},[Ie($e(mr),{fill:"gray",width:"16",height:"16"})],8,UR)):Je("",!0),t.person.social.linkedin?(ce(),ue("a",{key:2,href:t.person.social.linkedin,target:"_blank"},[Ie($e(Ea),{fill:"gray",width:"16",height:"16"})],8,NR)):Je("",!0),t.person.social.instagram?(ce(),ue("a",{key:3,href:t.person.social.instagram,target:"_blank"},[Ie($e(ya),{fill:"gray",width:"16",height:"16"})],8,OR)):Je("",!0),t.person.social.facebook?(ce(),ue("a",{key:4,href:t.person.social.facebook,target:"_blank"},[Ie($e(ou),{fill:"gray",width:"16",height:"16"})],8,FR)):Je("",!0),t.person.social.github?(ce(),ue("a",{key:5,href:t.person.social.github,target:"_blank"},[Ie($e(Sa),{fill:"gray",width:"16",height:"16"})],8,BR)):Je("",!0),t.person.social.youtube?(ce(),ue("a",{key:6,href:t.person.social.youtube,target:"_blank"},[Ie($e(ba),{fill:"gray",width:"16",height:"16"})],8,kR)):Je("",!0),t.person.social.x?(ce(),ue("a",{key:7,href:t.person.social.x,target:"_blank"},[Ie($e(Ma),{fill:"gray",width:"16",height:"16"})],8,zR)):Je("",!0),t.person.social.mastodon?(ce(),ue("a",{key:8,href:t.person.social.mastodon,target:"_blank"},[Ie($e(au),{fill:"gray",width:"16",height:"16"})],8,HR)):Je("",!0),t.person.social.medium?(ce(),ue("a",{key:9,href:t.person.social.medium,target:"_blank"},[Ie($e(lu),{fill:"gray",width:"16",height:"16"})],8,VR)):Je("",!0),t.person.social.thread?(ce(),ue("a",{key:10,href:t.person.social.thread,target:"_blank"},[Ie($e(cu),{fill:"gray",width:"16",height:"16"})],8,GR)):Je("",!0)])])])]))}},XR=Wi(WR,[["__scopeId","data-v-63ffb987"]]),$R={class:"flex flex-col space-y-12 md:space-y-36 md:scroll-mt-28"},qR={class:"flex justify-center"},jR={class:"px-8 xl:px-0 max-w-[1280px]"},YR={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-28"},KR={__name:"Organizers",setup(t){const e=It([]);kn(()=>{i()});const n=r=>{const s=[...r];for(let o=s.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[s[o],s[a]]=[s[a],s[o]]}return s},i=async()=>{try{const s=await Mt.get("/2025/assets/json/organizers.json");e.value=n(s.data)}catch(r){console.error(r)}};return(r,s)=>(ce(),ue("div",$R,[Ie(Zs,{title:"준비위원회"}),N("div",qR,[N("div",jR,[N("div",YR,[(ce(!0),ue(ht,null,Ft(e.value,o=>(ce(),ue("div",{key:o.id},[Ie(XR,{person:o},null,8,["person"])]))),128))])])])]))}},ZR={__name:"Home",setup(t){return(e,n)=>(ce(),ue(ht,null,[Ie(I1,{id:"hero"}),Ie(H1,{id:"intro"}),Ie(tA,{id:"sponsors"}),Ie(VA,{id:"schedule"}),Ie(xR,{id:"speakers"}),Ie(KR,{id:"organizers"}),Ie(mA,{id:"venue"}),Ie(cA,{id:"sponsorsMini"})],64))}},JR=[{path:"/",component:ZR},{path:"/CodeOfConduct",component:()=>b1(()=>import("./CodeOfConduct-D8-HGgfm.js"),[])}],QR=H0({history:m0("/2025/"),routes:JR}),om=O_(y1);om.use(QR);om.mount("#app");export{ht as F,Zs as _,Ie as a,N as b,ue as c,ce as o,Ft as r,rt as t};
