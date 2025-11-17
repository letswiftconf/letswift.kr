(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const yt={},$r=[],Yn=()=>{},hm=()=>!1,fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yc=t=>t.startsWith("onUpdate:"),kt=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},pm=Object.prototype.hasOwnProperty,mt=(t,e)=>pm.call(t,e),qe=Array.isArray,qr=t=>da(t)==="[object Map]",Bd=t=>da(t)==="[object Set]",Ze=t=>typeof t=="function",Ct=t=>typeof t=="string",Xi=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",kd=t=>(bt(t)||Ze(t))&&Ze(t.then)&&Ze(t.catch),zd=Object.prototype.toString,da=t=>zd.call(t),mm=t=>da(t).slice(8,-1),Hd=t=>da(t)==="[object Object]",Zc=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ws=jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gm=/-(\w)/g,An=ha(t=>t.replace(gm,(e,n)=>n?n.toUpperCase():"")),_m=/\B([A-Z])/g,Er=ha(t=>t.replace(_m,"-$1").toLowerCase()),pa=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=ha(t=>t?`on${pa(t)}`:""),Bi=(t,e)=>!Object.is(t,e),Wa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},vm=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xm=t=>{const e=Ct(t)?Number(t):NaN;return isNaN(e)?t:e};let Ru;const ma=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ki(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ct(i)?Mm(i):ki(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(t)||bt(t))return t}const Sm=/;(?![^(]*\))/g,ym=/:([^]+)/,Em=/\/\*[^]*?\*\//g;function Mm(t){const e={};return t.replace(Em,"").split(Sm).forEach(n=>{if(n){const i=n.split(ym);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fn(t){let e="";if(Ct(t))e=t;else if(qe(t))for(let n=0;n<t.length;n++){const i=Fn(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tm=jc(bm);function Gd(t){return!!t||t===""}const Wd=t=>!!(t&&t.__v_isRef===!0),st=t=>Ct(t)?t:t==null?"":qe(t)||bt(t)&&(t.toString===zd||!Ze(t.toString))?Wd(t)?st(t.value):JSON.stringify(t,Xd,2):String(t),Xd=(t,e)=>Wd(e)?Xd(t,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Xa(i,s)+" =>"]=r,n),{})}:Bd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xa(n))}:Xi(e)?Xa(e):bt(e)&&!qe(e)&&!Hd(e)?String(e):e,Xa=(t,e="")=>{var n;return Xi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class wm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Am(){return on}let Et;const $a=new WeakSet;class $d{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cu(this),Yd(this);const e=Et,n=Nn;Et=this,Nn=!0;try{return this.fn()}finally{Kd(this),Et=e,Nn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)eu(e);this.deps=this.depsTail=void 0,Cu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bl(this)&&this.run()}get dirty(){return Bl(this)}}let qd=0,As,Rs;function jd(t,e=!1){if(t.flags|=8,e){t.next=Rs,Rs=t;return}t.next=As,As=t}function Jc(){qd++}function Qc(){if(--qd>0)return;if(Rs){let e=Rs;for(Rs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;As;){let e=As;for(As=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Yd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),eu(i),Rm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ns)||(t.globalVersion=Ns,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Bl(t))))return;t.flags|=2;const e=t.dep,n=Et,i=Nn;Et=t,Nn=!0;try{Yd(t);const r=t.fn(t._value);(e.version===0||Bi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=n,Nn=i,Kd(t),t.flags&=-3}}function eu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)eu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Rm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nn=!0;const Jd=[];function pi(){Jd.push(Nn),Nn=!1}function mi(){const t=Jd.pop();Nn=t===void 0?!0:t}function Cu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Et;Et=void 0;try{e()}finally{Et=n}}}let Ns=0;class Cm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!Nn||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new Cm(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,Qd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(e){this.version++,Ns++,this.notify(e)}notify(e){Jc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qc()}}}function Qd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Qd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const kl=new WeakMap,mr=Symbol(""),zl=Symbol(""),Os=Symbol("");function $t(t,e,n){if(Nn&&Et){let i=kl.get(t);i||kl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new tu),r.map=i,r.key=n),r.track()}}function ai(t,e,n,i,r,s){const o=kl.get(t);if(!o){Ns++;return}const a=l=>{l&&l.trigger()};if(Jc(),e==="clear")o.forEach(a);else{const l=qe(t),c=l&&Zc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Os||!Xi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Os)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mr)),qr(t)&&a(o.get(zl)));break;case"delete":l||(a(o.get(mr)),qr(t)&&a(o.get(zl)));break;case"set":qr(t)&&a(o.get(mr));break}}Qc()}function Rr(t){const e=ht(t);return e===t?e:($t(e,"iterate",Os),wn(t)?e:e.map(Ht))}function ga(t){return $t(t=ht(t),"iterate",Os),t}const Pm={__proto__:null,[Symbol.iterator](){return qa(this,Symbol.iterator,Ht)},concat(...t){return Rr(this).concat(...t.map(e=>qe(e)?Rr(e):e))},entries(){return qa(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return Zn(this,"every",t,e,void 0,arguments)},filter(t,e){return Zn(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return Zn(this,"find",t,e,Ht,arguments)},findIndex(t,e){return Zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Zn(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return Zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ja(this,"includes",t)},indexOf(...t){return ja(this,"indexOf",t)},join(t){return Rr(this).join(t)},lastIndexOf(...t){return ja(this,"lastIndexOf",t)},map(t,e){return Zn(this,"map",t,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...t){return ps(this,"push",t)},reduce(t,...e){return Pu(this,"reduce",t,e)},reduceRight(t,...e){return Pu(this,"reduceRight",t,e)},shift(){return ps(this,"shift")},some(t,e){return Zn(this,"some",t,e,void 0,arguments)},splice(...t){return ps(this,"splice",t)},toReversed(){return Rr(this).toReversed()},toSorted(t){return Rr(this).toSorted(t)},toSpliced(...t){return Rr(this).toSpliced(...t)},unshift(...t){return ps(this,"unshift",t)},values(){return qa(this,"values",Ht)}};function qa(t,e,n){const i=ga(t),r=i[e]();return i!==t&&!wn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const Dm=Array.prototype;function Zn(t,e,n,i,r,s){const o=ga(t),a=o!==t&&!wn(t),l=o[e];if(l!==Dm[e]){const f=l.apply(t,s);return a?Ht(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Ht(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Pu(t,e,n,i){const r=ga(t);let s=n;return r!==t&&(wn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ht(a),l,t)}),r[e](s,...i)}function ja(t,e,n){const i=ht(t);$t(i,"iterate",Os);const r=i[e](...n);return(r===-1||r===!1)&&ru(n[0])?(n[0]=ht(n[0]),i[e](...n)):r}function ps(t,e,n=[]){pi(),Jc();const i=ht(t)[e].apply(t,n);return Qc(),mi(),i}const Lm=jc("__proto__,__v_isRef,__isVue"),eh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xi));function Im(t){Xi(t)||(t=String(t));const e=ht(this);return $t(e,"has",t),e.hasOwnProperty(t)}class th{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Gm:sh:s?rh:ih).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!r){let l;if(o&&(l=Pm[n]))return l;if(n==="hasOwnProperty")return Im}const a=Reflect.get(e,n,jt(e)?e:i);return(Xi(n)?eh.has(n):Lm(n))||(r||$t(e,"get",n),s)?a:jt(a)?o&&Zc(n)?a:a.value:bt(a)?r?ah(a):_a(a):a}}class nh extends th{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Vi(s);if(!wn(i)&&!Vi(i)&&(s=ht(s),i=ht(i)),!qe(e)&&jt(s)&&!jt(i))return l?!1:(s.value=i,!0)}const o=qe(e)&&Zc(n)?Number(n)<e.length:mt(e,n),a=Reflect.set(e,n,i,jt(e)?e:r);return e===ht(r)&&(o?Bi(i,s)&&ai(e,"set",n,i):ai(e,"add",n,i)),a}deleteProperty(e,n){const i=mt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ai(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Xi(n)||!eh.has(n))&&$t(e,"has",n),i}ownKeys(e){return $t(e,"iterate",qe(e)?"length":mr),Reflect.ownKeys(e)}}class Um extends th{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Nm=new nh,Om=new Um,Fm=new nh(!0);const Hl=t=>t,ao=t=>Reflect.getPrototypeOf(t);function Bm(t,e,n){return function(...i){const r=this.__v_raw,s=ht(r),o=qr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Hl:e?Zo:Ht;return!e&&$t(s,"iterate",l?zl:mr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function km(t,e){const n={get(r){const s=this.__v_raw,o=ht(s),a=ht(r);t||(Bi(r,a)&&$t(o,"get",r),$t(o,"get",a));const{has:l}=ao(o),c=e?Hl:t?Zo:Ht;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&$t(ht(r),"iterate",mr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ht(s),a=ht(r);return t||(Bi(r,a)&&$t(o,"has",r),$t(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ht(a),c=e?Hl:t?Zo:Ht;return!t&&$t(l,"iterate",mr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return kt(n,t?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(r){!e&&!wn(r)&&!Vi(r)&&(r=ht(r));const s=ht(this);return ao(s).has.call(s,r)||(s.add(r),ai(s,"add",r,r)),this},set(r,s){!e&&!wn(s)&&!Vi(s)&&(s=ht(s));const o=ht(this),{has:a,get:l}=ao(o);let c=a.call(o,r);c||(r=ht(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Bi(s,u)&&ai(o,"set",r,s):ai(o,"add",r,s),this},delete(r){const s=ht(this),{has:o,get:a}=ao(s);let l=o.call(s,r);l||(r=ht(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ai(s,"delete",r,void 0),c},clear(){const r=ht(this),s=r.size!==0,o=r.clear();return s&&ai(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Bm(r,t,e)}),n}function nu(t,e){const n=km(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(mt(n,r)&&r in i?n:i,r,s)}const zm={get:nu(!1,!1)},Hm={get:nu(!1,!0)},Vm={get:nu(!0,!1)};const ih=new WeakMap,rh=new WeakMap,sh=new WeakMap,Gm=new WeakMap;function Wm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xm(t){return t.__v_skip||!Object.isExtensible(t)?0:Wm(mm(t))}function _a(t){return Vi(t)?t:iu(t,!1,Nm,zm,ih)}function oh(t){return iu(t,!1,Fm,Hm,rh)}function ah(t){return iu(t,!0,Om,Vm,sh)}function iu(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Xm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function jr(t){return Vi(t)?jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function ru(t){return t?!!t.__v_raw:!1}function ht(t){const e=t&&t.__v_raw;return e?ht(e):t}function $m(t){return!mt(t,"__v_skip")&&Object.isExtensible(t)&&Vd(t,"__v_skip",!0),t}const Ht=t=>bt(t)?_a(t):t,Zo=t=>bt(t)?ah(t):t;function jt(t){return t?t.__v_isRef===!0:!1}function Nt(t){return lh(t,!1)}function qm(t){return lh(t,!0)}function lh(t,e){return jt(t)?t:new jm(t,e)}class jm{constructor(e,n){this.dep=new tu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ht(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||Vi(e);e=i?e:ht(e),Bi(e,n)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function $e(t){return jt(t)?t.value:t}const Ym={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return jt(r)&&!jt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ch(t){return jr(t)?t:new Proxy(t,Ym)}class Km{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new tu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return jd(this,!0),!0}get value(){const e=this.dep.track();return Zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zm(t,e,n=!1){let i,r;return Ze(t)?i=t:(i=t.get,r=t.set),new Km(i,r,n)}const co={},Jo=new WeakMap;let or;function Jm(t,e=!1,n=or){if(n){let i=Jo.get(n);i||Jo.set(n,i=[]),i.push(t)}}function Qm(t,e,n=yt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=E=>r?E:wn(E)||r===!1||r===0?li(E,1):li(E);let u,f,d,h,g=!1,_=!1;if(jt(t)?(f=()=>t.value,g=wn(t)):jr(t)?(f=()=>c(t),g=!0):qe(t)?(_=!0,g=t.some(E=>jr(E)||wn(E)),f=()=>t.map(E=>{if(jt(E))return E.value;if(jr(E))return c(E);if(Ze(E))return l?l(E,2):E()})):Ze(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){pi();try{d()}finally{mi()}}const E=or;or=u;try{return l?l(t,3,[h]):t(h)}finally{or=E}}:f=Yn,e&&r){const E=f,L=r===!0?1/0:r;f=()=>li(E(),L)}const m=Am(),p=()=>{u.stop(),m&&m.active&&Kc(m.effects,u)};if(s&&e){const E=e;e=(...L)=>{E(...L),p()}}let y=_?new Array(t.length).fill(co):co;const w=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const L=u.run();if(r||g||(_?L.some((C,P)=>Bi(C,y[P])):Bi(L,y))){d&&d();const C=or;or=u;try{const P=[L,y===co?void 0:_&&y[0]===co?[]:y,h];y=L,l?l(e,3,P):e(...P)}finally{or=C}}}else u.run()};return a&&a(w),u=new $d(f),u.scheduler=o?()=>o(w,!1):w,h=E=>Jm(E,!1,u),d=u.onStop=()=>{const E=Jo.get(u);if(E){if(l)l(E,4);else for(const L of E)L();Jo.delete(u)}},e?i?w(!0):y=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function li(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,jt(t))li(t.value,e,n);else if(qe(t))for(let i=0;i<t.length;i++)li(t[i],e,n);else if(Bd(t)||qr(t))t.forEach(i=>{li(i,e,n)});else if(Hd(t)){for(const i in t)li(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&li(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ks(t,e,n,i){try{return i?t(...i):t()}catch(r){va(r,e,n)}}function Bn(t,e,n,i){if(Ze(t)){const r=Ks(t,e,n,i);return r&&kd(r)&&r.catch(s=>{va(s,e,n)}),r}if(qe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Bn(t[s],e,n,i));return r}}function va(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||yt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){pi(),Ks(s,null,10,[t,l,c]),mi();return}}eg(t,n,r,i,o)}function eg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Qt=[];let Xn=-1;const Yr=[];let Ii=null,Gr=0;const uh=Promise.resolve();let Qo=null;function fh(t){const e=Qo||uh;return t?e.then(this?t.bind(this):t):e}function tg(t){let e=Xn+1,n=Qt.length;for(;e<n;){const i=e+n>>>1,r=Qt[i],s=Fs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function su(t){if(!(t.flags&1)){const e=Fs(t),n=Qt[Qt.length-1];!n||!(t.flags&2)&&e>=Fs(n)?Qt.push(t):Qt.splice(tg(e),0,t),t.flags|=1,dh()}}function dh(){Qo||(Qo=uh.then(ph))}function ng(t){qe(t)?Yr.push(...t):Ii&&t.id===-1?Ii.splice(Gr+1,0,t):t.flags&1||(Yr.push(t),t.flags|=1),dh()}function Du(t,e,n=Xn+1){for(;n<Qt.length;n++){const i=Qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hh(t){if(Yr.length){const e=[...new Set(Yr)].sort((n,i)=>Fs(n)-Fs(i));if(Yr.length=0,Ii){Ii.push(...e);return}for(Ii=e,Gr=0;Gr<Ii.length;Gr++){const n=Ii[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ii=null,Gr=0}}const Fs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ph(t){try{for(Xn=0;Xn<Qt.length;Xn++){const e=Qt[Xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Xn<Qt.length;Xn++){const e=Qt[Xn];e&&(e.flags&=-2)}Xn=-1,Qt.length=0,hh(),Qo=null,(Qt.length||Yr.length)&&ph()}}let an=null,mh=null;function ea(t){const e=an;return an=t,mh=t&&t.type.__scopeId||null,e}function Cs(t,e=an,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Gu(-1);const s=ea(e);let o;try{o=t(...r)}finally{ea(s),i._d&&Gu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ig(t,e){if(an===null)return t;const n=Ma(an),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=yt]=e[r];s&&(Ze(s)&&(s={mounted:s,updated:s}),s.deep&&li(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(pi(),Bn(l,n,8,[t.el,a,t,e]),mi())}}const rg=Symbol("_vte"),gh=t=>t.__isTeleport,Ui=Symbol("_leaveCb"),uo=Symbol("_enterCb");function sg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zn(()=>{t.isMounted=!0}),bh(()=>{t.isUnmounting=!0}),t}const Mn=[Function,Array],_h={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},vh=t=>{const e=t.subTree;return e.component?vh(e.component):e},og={name:"BaseTransition",props:_h,setup(t,{slots:e}){const n=Jg(),i=sg();return()=>{const r=e.default&&yh(e.default(),!0);if(!r||!r.length)return;const s=xh(r),o=ht(t),{mode:a}=o;if(i.isLeaving)return Ya(s);const l=Lu(s);if(!l)return Ya(s);let c=Vl(l,o,i,n,f=>c=f);l.type!==en&&Bs(l,c);let u=n.subTree&&Lu(n.subTree);if(u&&u.type!==en&&!cr(l,u)&&vh(n).type!==en){let f=Vl(u,o,i,n);if(Bs(u,f),a==="out-in"&&l.type!==en)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ya(s);a==="in-out"&&l.type!==en?f.delayLeave=(d,h,g)=>{const _=Sh(i,u);_[String(u.key)]=u,d[Ui]=()=>{h(),d[Ui]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function xh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==en){e=n;break}}return e}const ag=og;function Sh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Vl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:w}=e,E=String(t.key),L=Sh(n,t),C=(T,S)=>{T&&Bn(T,i,9,S)},P=(T,S)=>{const D=S[1];C(T,S),qe(T)?T.every(k=>k.length<=1)&&D():T.length<=1&&D()},F={mode:o,persisted:a,beforeEnter(T){let S=l;if(!n.isMounted)if(s)S=m||l;else return;T[Ui]&&T[Ui](!0);const D=L[E];D&&cr(t,D)&&D.el[Ui]&&D.el[Ui](),C(S,[T])},enter(T){let S=c,D=u,k=f;if(!n.isMounted)if(s)S=p||c,D=y||u,k=w||f;else return;let H=!1;const q=T[uo]=de=>{H||(H=!0,de?C(k,[T]):C(D,[T]),F.delayedLeave&&F.delayedLeave(),T[uo]=void 0)};S?P(S,[T,q]):q()},leave(T,S){const D=String(t.key);if(T[uo]&&T[uo](!0),n.isUnmounting)return S();C(d,[T]);let k=!1;const H=T[Ui]=q=>{k||(k=!0,S(),q?C(_,[T]):C(g,[T]),T[Ui]=void 0,L[D]===t&&delete L[D])};L[D]=t,h?P(h,[T,H]):H()},clone(T){const S=Vl(T,e,n,i,r);return r&&r(S),S}};return F}function Ya(t){if(xa(t))return t=Gi(t),t.children=null,t}function Lu(t){if(!xa(t))return gh(t.type)&&t.children?xh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ze(n.default))return n.default()}}function Bs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===dt?(o.patchFlag&128&&r++,i=i.concat(yh(o.children,e,a))):(e||o.type!==en)&&i.push(a!=null?Gi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Rn(t,e){return Ze(t)?kt({name:t.name},e,{setup:t}):t}function Eh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ta(t,e,n,i,r=!1){if(qe(t)){t.forEach((g,_)=>ta(g,e&&(qe(e)?e[_]:e),n,i,r));return}if(Ps(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ta(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ma(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState,d=ht(f),h=f===yt?()=>!1:g=>mt(d,g);if(c!=null&&c!==l&&(Ct(c)?(u[c]=null,h(c)&&(f[c]=null)):jt(c)&&(c.value=null)),Ze(l))Ks(l,a,12,[o,u]);else{const g=Ct(l),_=jt(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;r?qe(p)&&Kc(p,s):qe(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,vn(m,n)):m()}}}ma().requestIdleCallback;ma().cancelIdleCallback;const Ps=t=>!!t.type.__asyncLoader,xa=t=>t.type.__isKeepAlive;function lg(t,e){Mh(t,"a",e)}function cg(t,e){Mh(t,"da",e)}function Mh(t,e,n=Vt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Sa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)xa(r.parent.vnode)&&ug(i,e,n,r),r=r.parent}}function ug(t,e,n,i){const r=Sa(e,t,i,!0);Mr(()=>{Kc(i[e],r)},n)}function Sa(t,e,n=Vt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{pi();const a=Zs(n),l=Bn(e,n,t,o);return a(),mi(),l});return i?r.unshift(s):r.push(s),s}}const xi=t=>(e,n=Vt)=>{(!Hs||t==="sp")&&Sa(t,(...i)=>e(...i),n)},fg=xi("bm"),zn=xi("m"),dg=xi("bu"),hg=xi("u"),bh=xi("bum"),Mr=xi("um"),pg=xi("sp"),mg=xi("rtg"),gg=xi("rtc");function _g(t,e=Vt){Sa("ec",t,e)}const Th="components";function ou(t,e){return Ah(Th,t,!0,e)||t}const wh=Symbol.for("v-ndc");function Iu(t){return Ct(t)?Ah(Th,t,!1)||t:t||wh}function Ah(t,e,n=!0,i=!1){const r=an||Vt;if(r){const s=r.type;{const a=i_(s,!1);if(a&&(a===e||a===An(e)||a===pa(An(e))))return s}const o=Uu(r[t]||s[t],e)||Uu(r.appContext[t],e);return!o&&i?s:o}}function Uu(t,e){return t&&(t[e]||t[An(e)]||t[pa(An(e))])}function Pt(t,e,n,i){let r;const s=n,o=qe(t);if(o||Ct(t)){const a=o&&jr(t);let l=!1,c=!1;a&&(l=!wn(t),c=Vi(t),t=ga(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Zo(Ht(t[u])):Ht(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Gl=t=>t?qh(t)?Ma(t):Gl(t.parent):null,Ds=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gl(t.parent),$root:t=>Gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ch(t),$forceUpdate:t=>t.f||(t.f=()=>{su(t.update)}),$nextTick:t=>t.n||(t.n=fh.bind(t.proxy)),$watch:t=>Bg.bind(t)}),Ka=(t,e)=>t!==yt&&!t.__isScriptSetup&&mt(t,e),vg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ka(i,e))return o[e]=1,i[e];if(r!==yt&&mt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&mt(c,e))return o[e]=3,s[e];if(n!==yt&&mt(n,e))return o[e]=4,n[e];Wl&&(o[e]=0)}}const u=Ds[e];let f,d;if(u)return e==="$attrs"&&$t(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==yt&&mt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,mt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ka(r,e)?(r[e]=n,!0):i!==yt&&mt(i,e)?(i[e]=n,!0):mt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==yt&&mt(t,o)||Ka(e,o)||(a=s[0])&&mt(a,o)||mt(i,o)||mt(Ds,o)||mt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:mt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nu(t){return qe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Wl=!0;function xg(t){const e=Ch(t),n=t.proxy,i=t.ctx;Wl=!1,e.beforeCreate&&Ou(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:w,unmounted:E,render:L,renderTracked:C,renderTriggered:P,errorCaptured:F,serverPrefetch:T,expose:S,inheritAttrs:D,components:k,directives:H,filters:q}=e;if(c&&Sg(c,i,null),o)for(const fe in o){const V=o[fe];Ze(V)&&(i[fe]=V.bind(n))}if(r){const fe=r.call(n,n);bt(fe)&&(t.data=_a(fe))}if(Wl=!0,s)for(const fe in s){const V=s[fe],Te=Ze(V)?V.bind(n,n):Ze(V.get)?V.get.bind(n,n):Yn,Pe=!Ze(V)&&Ze(V.set)?V.set.bind(n):Yn,Fe=ct({get:Te,set:Pe});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Ve=>Fe.value=Ve})}if(a)for(const fe in a)Rh(a[fe],i,n,fe);if(l){const fe=Ze(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(V=>{Oo(V,fe[V])})}u&&Ou(u,t,"c");function Z(fe,V){qe(V)?V.forEach(Te=>fe(Te.bind(n))):V&&fe(V.bind(n))}if(Z(fg,f),Z(zn,d),Z(dg,h),Z(hg,g),Z(lg,_),Z(cg,m),Z(_g,F),Z(gg,C),Z(mg,P),Z(bh,y),Z(Mr,E),Z(pg,T),qe(S))if(S.length){const fe=t.exposed||(t.exposed={});S.forEach(V=>{Object.defineProperty(fe,V,{get:()=>n[V],set:Te=>n[V]=Te})})}else t.exposed||(t.exposed={});L&&t.render===Yn&&(t.render=L),D!=null&&(t.inheritAttrs=D),k&&(t.components=k),H&&(t.directives=H),T&&Eh(t)}function Sg(t,e,n=Yn){qe(t)&&(t=Xl(t));for(const i in t){const r=t[i];let s;bt(r)?"default"in r?s=Kn(r.from||i,r.default,!0):s=Kn(r.from||i):s=Kn(r),jt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Ou(t,e,n){Bn(qe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rh(t,e,n,i){let r=i.includes(".")?Vh(n,i):()=>n[i];if(Ct(t)){const s=e[t];Ze(s)&&Fo(r,s)}else if(Ze(t))Fo(r,t.bind(n));else if(bt(t))if(qe(t))t.forEach(s=>Rh(s,e,n,i));else{const s=Ze(t.handler)?t.handler.bind(n):e[t.handler];Ze(s)&&Fo(r,s,t)}}function Ch(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>na(l,c,o,!0)),na(l,e,o)),bt(e)&&s.set(e,l),l}function na(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&na(t,s,n,!0),r&&r.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=yg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yg={data:Fu,props:Bu,emits:Bu,methods:bs,computed:bs,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:bs,directives:bs,watch:Mg,provide:Fu,inject:Eg};function Fu(t,e){return e?t?function(){return kt(Ze(t)?t.call(this,this):t,Ze(e)?e.call(this,this):e)}:e:t}function Eg(t,e){return bs(Xl(t),Xl(e))}function Xl(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Zt(t,e){return t?[...new Set([].concat(t,e))]:e}function bs(t,e){return t?kt(Object.create(null),t,e):e}function Bu(t,e){return t?qe(t)&&qe(e)?[...new Set([...t,...e])]:kt(Object.create(null),Nu(t),Nu(e??{})):e}function Mg(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=Zt(t[i],e[i]);return n}function Ph(){return{app:null,config:{isNativeTag:hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bg=0;function Tg(t,e){return function(i,r=null){Ze(i)||(i=kt({},i)),r!=null&&!bt(r)&&(r=null);const s=Ph(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:bg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:s_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ze(u.install)?(o.add(u),u.install(c,...f)):Ze(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Ue(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Ma(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Bn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Kr;Kr=c;try{return u()}finally{Kr=f}}};return c}}let Kr=null;function Oo(t,e){if(Vt){let n=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===n&&(n=Vt.provides=Object.create(i)),n[t]=e}}function Kn(t,e,n=!1){const i=Vt||an;if(i||Kr){let r=Kr?Kr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ze(e)?e.call(i&&i.proxy):e}}const Dh={},Lh=()=>Object.create(Dh),Ih=t=>Object.getPrototypeOf(t)===Dh;function wg(t,e,n,i=!1){const r={},s=Lh();t.propsDefaults=Object.create(null),Uh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:oh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Ag(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ht(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ya(t.emitsOptions,d))continue;const h=e[d];if(l)if(mt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=An(d);r[g]=$l(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Uh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!mt(e,f)&&((u=Er(f))===f||!mt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=$l(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!mt(e,f))&&(delete s[f],c=!0)}c&&ai(t.attrs,"set","")}function Uh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ws(l))continue;const c=e[l];let u;r&&mt(r,u=An(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ya(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ht(n),c=a||yt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=$l(r,l,f,c[f],t,!mt(c,f))}}return o}function $l(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=mt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ze(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Zs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Er(n))&&(i=!0))}return i}const Rg=new WeakMap;function Nh(t,e,n=!1){const i=n?Rg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ze(t)){const u=f=>{l=!0;const[d,h]=Nh(f,e,!0);kt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return bt(t)&&i.set(t,$r),$r;if(qe(s))for(let u=0;u<s.length;u++){const f=An(s[u]);ku(f)&&(o[f]=yt)}else if(s)for(const u in s){const f=An(u);if(ku(f)){const d=s[u],h=o[f]=qe(d)||Ze(d)?{type:d}:kt({},d),g=h.type;let _=!1,m=!0;if(qe(g))for(let p=0;p<g.length;++p){const y=g[p],w=Ze(y)&&y.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(m=!1)}else _=Ze(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||mt(h,"default"))&&a.push(f)}}const c=[o,a];return bt(t)&&i.set(t,c),c}function ku(t){return t[0]!=="$"&&!ws(t)}const au=t=>t[0]==="_"||t==="$stable",lu=t=>qe(t)?t.map($n):[$n(t)],Cg=(t,e,n)=>{if(e._n)return e;const i=Cs((...r)=>lu(e(...r)),n);return i._c=!1,i},Oh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(au(r))continue;const s=t[r];if(Ze(s))e[r]=Cg(r,s,i);else if(s!=null){const o=lu(s);e[r]=()=>o}}},Fh=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Bh=(t,e,n)=>{for(const i in e)(n||!au(i))&&(t[i]=e[i])},Pg=(t,e,n)=>{const i=t.slots=Lh();if(t.vnode.shapeFlag&32){const r=e._;r?(Bh(i,e,n),n&&Vd(i,"_",r,!0)):Oh(e,i)}else e&&Fh(t,e)},Dg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Bh(r,e,n):(s=!e.$stable,Oh(e,r)),o=e}else e&&(Fh(t,e),o={default:1});if(s)for(const a in r)!au(a)&&o[a]==null&&delete r[a]},vn=Xg;function Lg(t){return Ig(t)}function Ig(t,e){const n=ma();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Yn,insertStaticContent:g}=t,_=(A,R,x,se=null,J=null,Y=null,ie=void 0,pe=null,ne=!!R.dynamicChildren)=>{if(A===R)return;A&&!cr(A,R)&&(se=O(A),Ve(A,J,Y,!0),A=null),R.patchFlag===-2&&(ne=!1,R.dynamicChildren=null);const{type:ee,ref:Le,shapeFlag:b}=R;switch(ee){case Ea:m(A,R,x,se);break;case en:p(A,R,x,se);break;case Bo:A==null&&y(R,x,se,ie);break;case dt:k(A,R,x,se,J,Y,ie,pe,ne);break;default:b&1?L(A,R,x,se,J,Y,ie,pe,ne):b&6?H(A,R,x,se,J,Y,ie,pe,ne):(b&64||b&128)&&ee.process(A,R,x,se,J,Y,ie,pe,ne,me)}Le!=null&&J&&ta(Le,A&&A.ref,Y,R||A,!R)},m=(A,R,x,se)=>{if(A==null)i(R.el=a(R.children),x,se);else{const J=R.el=A.el;R.children!==A.children&&c(J,R.children)}},p=(A,R,x,se)=>{A==null?i(R.el=l(R.children||""),x,se):R.el=A.el},y=(A,R,x,se)=>{[A.el,A.anchor]=g(A.children,R,x,se,A.el,A.anchor)},w=({el:A,anchor:R},x,se)=>{let J;for(;A&&A!==R;)J=d(A),i(A,x,se),A=J;i(R,x,se)},E=({el:A,anchor:R})=>{let x;for(;A&&A!==R;)x=d(A),r(A),A=x;r(R)},L=(A,R,x,se,J,Y,ie,pe,ne)=>{R.type==="svg"?ie="svg":R.type==="math"&&(ie="mathml"),A==null?C(R,x,se,J,Y,ie,pe,ne):T(A,R,J,Y,ie,pe,ne)},C=(A,R,x,se,J,Y,ie,pe)=>{let ne,ee;const{props:Le,shapeFlag:b,transition:v,dirs:U}=A;if(ne=A.el=o(A.type,Y,Le&&Le.is,Le),b&8?u(ne,A.children):b&16&&F(A.children,ne,null,se,J,Za(A,Y),ie,pe),U&&Ki(A,null,se,"created"),P(ne,A,A.scopeId,ie,se),Le){for(const re in Le)re!=="value"&&!ws(re)&&s(ne,re,null,Le[re],Y,se);"value"in Le&&s(ne,"value",null,Le.value,Y),(ee=Le.onVnodeBeforeMount)&&Gn(ee,se,A)}U&&Ki(A,null,se,"beforeMount");const W=Ug(J,v);W&&v.beforeEnter(ne),i(ne,R,x),((ee=Le&&Le.onVnodeMounted)||W||U)&&vn(()=>{ee&&Gn(ee,se,A),W&&v.enter(ne),U&&Ki(A,null,se,"mounted")},J)},P=(A,R,x,se,J)=>{if(x&&h(A,x),se)for(let Y=0;Y<se.length;Y++)h(A,se[Y]);if(J){let Y=J.subTree;if(R===Y||Wh(Y.type)&&(Y.ssContent===R||Y.ssFallback===R)){const ie=J.vnode;P(A,ie,ie.scopeId,ie.slotScopeIds,J.parent)}}},F=(A,R,x,se,J,Y,ie,pe,ne=0)=>{for(let ee=ne;ee<A.length;ee++){const Le=A[ee]=pe?Ni(A[ee]):$n(A[ee]);_(null,Le,R,x,se,J,Y,ie,pe)}},T=(A,R,x,se,J,Y,ie)=>{const pe=R.el=A.el;let{patchFlag:ne,dynamicChildren:ee,dirs:Le}=R;ne|=A.patchFlag&16;const b=A.props||yt,v=R.props||yt;let U;if(x&&Zi(x,!1),(U=v.onVnodeBeforeUpdate)&&Gn(U,x,R,A),Le&&Ki(R,A,x,"beforeUpdate"),x&&Zi(x,!0),(b.innerHTML&&v.innerHTML==null||b.textContent&&v.textContent==null)&&u(pe,""),ee?S(A.dynamicChildren,ee,pe,x,se,Za(R,J),Y):ie||V(A,R,pe,null,x,se,Za(R,J),Y,!1),ne>0){if(ne&16)D(pe,b,v,x,J);else if(ne&2&&b.class!==v.class&&s(pe,"class",null,v.class,J),ne&4&&s(pe,"style",b.style,v.style,J),ne&8){const W=R.dynamicProps;for(let re=0;re<W.length;re++){const G=W[re],ve=b[G],ue=v[G];(ue!==ve||G==="value")&&s(pe,G,ve,ue,J,x)}}ne&1&&A.children!==R.children&&u(pe,R.children)}else!ie&&ee==null&&D(pe,b,v,x,J);((U=v.onVnodeUpdated)||Le)&&vn(()=>{U&&Gn(U,x,R,A),Le&&Ki(R,A,x,"updated")},se)},S=(A,R,x,se,J,Y,ie)=>{for(let pe=0;pe<R.length;pe++){const ne=A[pe],ee=R[pe],Le=ne.el&&(ne.type===dt||!cr(ne,ee)||ne.shapeFlag&198)?f(ne.el):x;_(ne,ee,Le,null,se,J,Y,ie,!0)}},D=(A,R,x,se,J)=>{if(R!==x){if(R!==yt)for(const Y in R)!ws(Y)&&!(Y in x)&&s(A,Y,R[Y],null,J,se);for(const Y in x){if(ws(Y))continue;const ie=x[Y],pe=R[Y];ie!==pe&&Y!=="value"&&s(A,Y,pe,ie,J,se)}"value"in x&&s(A,"value",R.value,x.value,J)}},k=(A,R,x,se,J,Y,ie,pe,ne)=>{const ee=R.el=A?A.el:a(""),Le=R.anchor=A?A.anchor:a("");let{patchFlag:b,dynamicChildren:v,slotScopeIds:U}=R;U&&(pe=pe?pe.concat(U):U),A==null?(i(ee,x,se),i(Le,x,se),F(R.children||[],x,Le,J,Y,ie,pe,ne)):b>0&&b&64&&v&&A.dynamicChildren?(S(A.dynamicChildren,v,x,J,Y,ie,pe),(R.key!=null||J&&R===J.subTree)&&kh(A,R,!0)):V(A,R,x,Le,J,Y,ie,pe,ne)},H=(A,R,x,se,J,Y,ie,pe,ne)=>{R.slotScopeIds=pe,A==null?R.shapeFlag&512?J.ctx.activate(R,x,se,ie,ne):q(R,x,se,J,Y,ie,ne):de(A,R,ne)},q=(A,R,x,se,J,Y,ie)=>{const pe=A.component=Zg(A,se,J);if(xa(A)&&(pe.ctx.renderer=me),Qg(pe,!1,ie),pe.asyncDep){if(J&&J.registerDep(pe,Z,ie),!A.el){const ne=pe.subTree=Ue(en);p(null,ne,R,x)}}else Z(pe,A,R,x,J,Y,ie)},de=(A,R,x)=>{const se=R.component=A.component;if(Gg(A,R,x))if(se.asyncDep&&!se.asyncResolved){fe(se,R,x);return}else se.next=R,se.update();else R.el=A.el,se.vnode=R},Z=(A,R,x,se,J,Y,ie)=>{const pe=()=>{if(A.isMounted){let{next:b,bu:v,u:U,parent:W,vnode:re}=A;{const ye=zh(A);if(ye){b&&(b.el=re.el,fe(A,b,ie)),ye.asyncDep.then(()=>{A.isUnmounted||pe()});return}}let G=b,ve;Zi(A,!1),b?(b.el=re.el,fe(A,b,ie)):b=re,v&&Wa(v),(ve=b.props&&b.props.onVnodeBeforeUpdate)&&Gn(ve,W,b,re),Zi(A,!0);const ue=Hu(A),_e=A.subTree;A.subTree=ue,_(_e,ue,f(_e.el),O(_e),A,J,Y),b.el=ue.el,G===null&&Wg(A,ue.el),U&&vn(U,J),(ve=b.props&&b.props.onVnodeUpdated)&&vn(()=>Gn(ve,W,b,re),J)}else{let b;const{el:v,props:U}=R,{bm:W,m:re,parent:G,root:ve,type:ue}=A,_e=Ps(R);Zi(A,!1),W&&Wa(W),!_e&&(b=U&&U.onVnodeBeforeMount)&&Gn(b,G,R),Zi(A,!0);{ve.ce&&ve.ce._injectChildStyle(ue);const ye=A.subTree=Hu(A);_(null,ye,x,se,A,J,Y),R.el=ye.el}if(re&&vn(re,J),!_e&&(b=U&&U.onVnodeMounted)){const ye=R;vn(()=>Gn(b,G,ye),J)}(R.shapeFlag&256||G&&Ps(G.vnode)&&G.vnode.shapeFlag&256)&&A.a&&vn(A.a,J),A.isMounted=!0,R=x=se=null}};A.scope.on();const ne=A.effect=new $d(pe);A.scope.off();const ee=A.update=ne.run.bind(ne),Le=A.job=ne.runIfDirty.bind(ne);Le.i=A,Le.id=A.uid,ne.scheduler=()=>su(Le),Zi(A,!0),ee()},fe=(A,R,x)=>{R.component=A;const se=A.vnode.props;A.vnode=R,A.next=null,Ag(A,R.props,se,x),Dg(A,R.children,x),pi(),Du(A),mi()},V=(A,R,x,se,J,Y,ie,pe,ne=!1)=>{const ee=A&&A.children,Le=A?A.shapeFlag:0,b=R.children,{patchFlag:v,shapeFlag:U}=R;if(v>0){if(v&128){Pe(ee,b,x,se,J,Y,ie,pe,ne);return}else if(v&256){Te(ee,b,x,se,J,Y,ie,pe,ne);return}}U&8?(Le&16&&Ce(ee,J,Y),b!==ee&&u(x,b)):Le&16?U&16?Pe(ee,b,x,se,J,Y,ie,pe,ne):Ce(ee,J,Y,!0):(Le&8&&u(x,""),U&16&&F(b,x,se,J,Y,ie,pe,ne))},Te=(A,R,x,se,J,Y,ie,pe,ne)=>{A=A||$r,R=R||$r;const ee=A.length,Le=R.length,b=Math.min(ee,Le);let v;for(v=0;v<b;v++){const U=R[v]=ne?Ni(R[v]):$n(R[v]);_(A[v],U,x,null,J,Y,ie,pe,ne)}ee>Le?Ce(A,J,Y,!0,!1,b):F(R,x,se,J,Y,ie,pe,ne,b)},Pe=(A,R,x,se,J,Y,ie,pe,ne)=>{let ee=0;const Le=R.length;let b=A.length-1,v=Le-1;for(;ee<=b&&ee<=v;){const U=A[ee],W=R[ee]=ne?Ni(R[ee]):$n(R[ee]);if(cr(U,W))_(U,W,x,null,J,Y,ie,pe,ne);else break;ee++}for(;ee<=b&&ee<=v;){const U=A[b],W=R[v]=ne?Ni(R[v]):$n(R[v]);if(cr(U,W))_(U,W,x,null,J,Y,ie,pe,ne);else break;b--,v--}if(ee>b){if(ee<=v){const U=v+1,W=U<Le?R[U].el:se;for(;ee<=v;)_(null,R[ee]=ne?Ni(R[ee]):$n(R[ee]),x,W,J,Y,ie,pe,ne),ee++}}else if(ee>v)for(;ee<=b;)Ve(A[ee],J,Y,!0),ee++;else{const U=ee,W=ee,re=new Map;for(ee=W;ee<=v;ee++){const Ie=R[ee]=ne?Ni(R[ee]):$n(R[ee]);Ie.key!=null&&re.set(Ie.key,ee)}let G,ve=0;const ue=v-W+1;let _e=!1,ye=0;const ae=new Array(ue);for(ee=0;ee<ue;ee++)ae[ee]=0;for(ee=U;ee<=b;ee++){const Ie=A[ee];if(ve>=ue){Ve(Ie,J,Y,!0);continue}let Ne;if(Ie.key!=null)Ne=re.get(Ie.key);else for(G=W;G<=v;G++)if(ae[G-W]===0&&cr(Ie,R[G])){Ne=G;break}Ne===void 0?Ve(Ie,J,Y,!0):(ae[Ne-W]=ee+1,Ne>=ye?ye=Ne:_e=!0,_(Ie,R[Ne],x,null,J,Y,ie,pe,ne),ve++)}const Ae=_e?Ng(ae):$r;for(G=Ae.length-1,ee=ue-1;ee>=0;ee--){const Ie=W+ee,Ne=R[Ie],we=Ie+1<Le?R[Ie+1].el:se;ae[ee]===0?_(null,Ne,x,we,J,Y,ie,pe,ne):_e&&(G<0||ee!==Ae[G]?Fe(Ne,x,we,2):G--)}}},Fe=(A,R,x,se,J=null)=>{const{el:Y,type:ie,transition:pe,children:ne,shapeFlag:ee}=A;if(ee&6){Fe(A.component.subTree,R,x,se);return}if(ee&128){A.suspense.move(R,x,se);return}if(ee&64){ie.move(A,R,x,me);return}if(ie===dt){i(Y,R,x);for(let b=0;b<ne.length;b++)Fe(ne[b],R,x,se);i(A.anchor,R,x);return}if(ie===Bo){w(A,R,x);return}if(se!==2&&ee&1&&pe)if(se===0)pe.beforeEnter(Y),i(Y,R,x),vn(()=>pe.enter(Y),J);else{const{leave:b,delayLeave:v,afterLeave:U}=pe,W=()=>{A.ctx.isUnmounted?r(Y):i(Y,R,x)},re=()=>{b(Y,()=>{W(),U&&U()})};v?v(Y,W,re):re()}else i(Y,R,x)},Ve=(A,R,x,se=!1,J=!1)=>{const{type:Y,props:ie,ref:pe,children:ne,dynamicChildren:ee,shapeFlag:Le,patchFlag:b,dirs:v,cacheIndex:U}=A;if(b===-2&&(J=!1),pe!=null&&(pi(),ta(pe,null,x,A,!0),mi()),U!=null&&(R.renderCache[U]=void 0),Le&256){R.ctx.deactivate(A);return}const W=Le&1&&v,re=!Ps(A);let G;if(re&&(G=ie&&ie.onVnodeBeforeUnmount)&&Gn(G,R,A),Le&6)Ee(A.component,x,se);else{if(Le&128){A.suspense.unmount(x,se);return}W&&Ki(A,null,R,"beforeUnmount"),Le&64?A.type.remove(A,R,x,me,se):ee&&!ee.hasOnce&&(Y!==dt||b>0&&b&64)?Ce(ee,R,x,!1,!0):(Y===dt&&b&384||!J&&Le&16)&&Ce(ne,R,x),se&&Je(A)}(re&&(G=ie&&ie.onVnodeUnmounted)||W)&&vn(()=>{G&&Gn(G,R,A),W&&Ki(A,null,R,"unmounted")},x)},Je=A=>{const{type:R,el:x,anchor:se,transition:J}=A;if(R===dt){le(x,se);return}if(R===Bo){E(A);return}const Y=()=>{r(x),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(A.shapeFlag&1&&J&&!J.persisted){const{leave:ie,delayLeave:pe}=J,ne=()=>ie(x,Y);pe?pe(A.el,Y,ne):ne()}else Y()},le=(A,R)=>{let x;for(;A!==R;)x=d(A),r(A),A=x;r(R)},Ee=(A,R,x)=>{const{bum:se,scope:J,job:Y,subTree:ie,um:pe,m:ne,a:ee,parent:Le,slots:{__:b}}=A;zu(ne),zu(ee),se&&Wa(se),Le&&qe(b)&&b.forEach(v=>{Le.renderCache[v]=void 0}),J.stop(),Y&&(Y.flags|=8,Ve(ie,A,R,x)),pe&&vn(pe,R),vn(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Ce=(A,R,x,se=!1,J=!1,Y=0)=>{for(let ie=Y;ie<A.length;ie++)Ve(A[ie],R,x,se,J)},O=A=>{if(A.shapeFlag&6)return O(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const R=d(A.anchor||A.el),x=R&&R[rg];return x?d(x):R};let Q=!1;const ge=(A,R,x)=>{A==null?R._vnode&&Ve(R._vnode,null,null,!0):_(R._vnode||null,A,R,null,null,null,x),R._vnode=A,Q||(Q=!0,Du(),hh(),Q=!1)},me={p:_,um:Ve,m:Fe,r:Je,mt:q,mc:F,pc:V,pbc:S,n:O,o:t};return{render:ge,hydrate:void 0,createApp:Tg(ge)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Zi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ug(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kh(t,e,n=!1){const i=t.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ni(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&kh(o,a)),a.type===Ea&&(a.el=o.el),a.type===en&&!a.el&&(a.el=o.el)}}function Ng(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function zh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zh(e)}function zu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Og=Symbol.for("v-scx"),Fg=()=>Kn(Og);function Fo(t,e,n){return Hh(t,e,n)}function Hh(t,e,n=yt){const{immediate:i,deep:r,flush:s,once:o}=n,a=kt({},n),l=e&&i||!e&&s!=="post";let c;if(Hs){if(s==="sync"){const h=Fg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Yn,h.resume=Yn,h.pause=Yn,h}}const u=Vt;a.call=(h,g,_)=>Bn(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{vn(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():su(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Qm(t,e,a);return Hs&&(c?c.push(d):l&&d()),d}function Bg(t,e,n){const i=this.proxy,r=Ct(t)?t.includes(".")?Vh(i,t):()=>i[t]:t.bind(i,i);let s;Ze(e)?s=e:(s=e.handler,n=e);const o=Zs(this),a=Hh(r,s.bind(i),n);return o(),a}function Vh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const kg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${Er(e)}Modifiers`];function zg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let r=n;const s=e.startsWith("update:"),o=s&&kg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Ct(u)?u.trim():u)),o.number&&(r=n.map(vm)));let a,l=i[a=Ga(e)]||i[a=Ga(An(e))];!l&&s&&(l=i[a=Ga(Er(e))]),l&&Bn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bn(c,t,6,r)}}function Gh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ze(t)){const l=c=>{const u=Gh(c,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(bt(t)&&i.set(t,null),null):(qe(s)?s.forEach(l=>o[l]=null):kt(o,s),bt(t)&&i.set(t,o),o)}function ya(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),mt(t,e[0].toLowerCase()+e.slice(1))||mt(t,Er(e))||mt(t,e))}function Hu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=ea(t);let p,y;try{if(n.shapeFlag&4){const E=r||i,L=E;p=$n(c.call(L,E,u,f,h,d,g)),y=a}else{const E=e;p=$n(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),y=e.props?a:Hg(a)}}catch(E){Ls.length=0,va(E,t,1),p=Ue(en)}let w=p;if(y&&_!==!1){const E=Object.keys(y),{shapeFlag:L}=w;E.length&&L&7&&(s&&E.some(Yc)&&(y=Vg(y,s)),w=Gi(w,y,!1,!0))}return n.dirs&&(w=Gi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Bs(w,n.transition),p=w,ea(m),p}const Hg=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},Vg=(t,e)=>{const n={};for(const i in t)(!Yc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Gg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ya(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vu(i,o,c):!0:!!o;return!1}function Vu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ya(n,s))return!0}return!1}function Wg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wh=t=>t.__isSuspense;function Xg(t,e){e&&e.pendingBranch?qe(t)?e.effects.push(...t):e.effects.push(t):ng(t)}const dt=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),en=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Ls=[];let Sn=null;function oe(t=!1){Ls.push(Sn=t?null:[])}function $g(){Ls.pop(),Sn=Ls[Ls.length-1]||null}let ks=1;function Gu(t,e=!1){ks+=t,t<0&&Sn&&e&&(Sn.hasOnce=!0)}function Xh(t){return t.dynamicChildren=ks>0?Sn||$r:null,$g(),ks>0&&Sn&&Sn.push(t),t}function ce(t,e,n,i,r,s){return Xh(N(t,e,n,i,r,s,!0))}function ko(t,e,n,i,r){return Xh(Ue(t,e,n,i,r,!0))}function ia(t){return t?t.__v_isVNode===!0:!1}function cr(t,e){return t.type===e.type&&t.key===e.key}const $h=({key:t})=>t??null,zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||jt(t)||Ze(t)?{i:an,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,i=0,r=null,s=t===dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$h(e),ref:e&&zo(e),scopeId:mh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return a?(cu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),ks>0&&!o&&Sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Sn.push(l),l}const Ue=qg;function qg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===wh)&&(t=en),ia(t)){const a=Gi(t,e,!0);return n&&cu(a,n),ks>0&&!s&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(t)]=a:Sn.push(a)),a.patchFlag=-2,a}if(r_(t)&&(t=t.__vccOpts),e){e=jg(e);let{class:a,style:l}=e;a&&!Ct(a)&&(e.class=Fn(a)),bt(l)&&(ru(l)&&!qe(l)&&(l=kt({},l)),e.style=ki(l))}const o=Ct(t)?1:Wh(t)?128:gh(t)?64:bt(t)?4:Ze(t)?2:0;return N(t,e,n,i,r,o,s,!0)}function jg(t){return t?ru(t)||Ih(t)?kt({},t):t:null}function Gi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Hn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&$h(c),ref:e&&e.ref?n&&s?qe(s)?s.concat(zo(e)):[s,zo(e)]:zo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gi(t.ssContent),ssFallback:t.ssFallback&&Gi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Bs(u,l.clone(u)),u}function xn(t=" ",e=0){return Ue(Ea,null,t,e)}function zs(t,e){const n=Ue(Bo,null,t);return n.staticCount=e,n}function Ke(t="",e=!1){return e?(oe(),ko(en,null,t)):Ue(en,null,t)}function $n(t){return t==null||typeof t=="boolean"?Ue(en):qe(t)?Ue(dt,null,t.slice()):ia(t)?Ni(t):Ue(Ea,null,String(t))}function Ni(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gi(t)}function cu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(qe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),cu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ih(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:an},n=32):(e=String(e),i&64?(n=16,e=[xn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hn(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Fn([e.class,i.class]));else if(r==="style")e.style=ki([e.style,i.style]);else if(fa(r)){const s=e[r],o=i[r];o&&s!==o&&!(qe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Gn(t,e,n,i=null){Bn(t,e,7,[n,i])}const Yg=Ph();let Kg=0;function Zg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Yg,s={uid:Kg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nh(i,r),emitsOptions:Gh(i,r),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zg.bind(null,s),t.ce&&t.ce(s),s}let Vt=null;const Jg=()=>Vt||an;let ra,ql;{const t=ma(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ra=e("__VUE_INSTANCE_SETTERS__",n=>Vt=n),ql=e("__VUE_SSR_SETTERS__",n=>Hs=n)}const Zs=t=>{const e=Vt;return ra(t),t.scope.on(),()=>{t.scope.off(),ra(e)}},Wu=()=>{Vt&&Vt.scope.off(),ra(null)};function qh(t){return t.vnode.shapeFlag&4}let Hs=!1;function Qg(t,e=!1,n=!1){e&&ql(e);const{props:i,children:r}=t.vnode,s=qh(t);wg(t,i,s,e),Pg(t,r,n||e);const o=s?e_(t,e):void 0;return e&&ql(!1),o}function e_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vg);const{setup:i}=n;if(i){pi();const r=t.setupContext=i.length>1?n_(t):null,s=Zs(t),o=Ks(i,t,0,[t.props,r]),a=kd(o);if(mi(),s(),(a||t.sp)&&!Ps(t)&&Eh(t),a){if(o.then(Wu,Wu),e)return o.then(l=>{Xu(t,l)}).catch(l=>{va(l,t,0)});t.asyncDep=o}else Xu(t,o)}else jh(t)}function Xu(t,e,n){Ze(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=ch(e)),jh(t)}function jh(t,e,n){const i=t.type;t.render||(t.render=i.render||Yn);{const r=Zs(t);pi();try{xg(t)}finally{mi(),r()}}}const t_={get(t,e){return $t(t,"get",""),t[e]}};function n_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,t_),slots:t.slots,emit:t.emit,expose:e}}function Ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ch($m(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ds)return Ds[n](t)},has(e,n){return n in e||n in Ds}})):t.proxy}function i_(t,e=!0){return Ze(t)?t.displayName||t.name:t.name||e&&t.__name}function r_(t){return Ze(t)&&"__vccOpts"in t}const ct=(t,e)=>Zm(t,e,Hs);function uu(t,e,n){const i=arguments.length;return i===2?bt(e)&&!qe(e)?ia(e)?Ue(t,null,[e]):Ue(t,e):Ue(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ia(n)&&(n=[n]),Ue(t,e,n))}const s_="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jl;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{jl=$u.createPolicy("vue",{createHTML:t=>t})}catch{}const Yh=jl?t=>jl.createHTML(t):t=>t,o_="http://www.w3.org/2000/svg",a_="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,qu=oi&&oi.createElement("template"),l_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?oi.createElementNS(o_,t):e==="mathml"?oi.createElementNS(a_,t):n?oi.createElement(t,{is:n}):oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>oi.createTextNode(t),createComment:t=>oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{qu.innerHTML=Yh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ti="transition",ms="animation",Vs=Symbol("_vtc"),Kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},c_=kt({},_h,Kh),u_=t=>(t.displayName="Transition",t.props=c_,t),f_=u_((t,{slots:e})=>uu(ag,d_(t),e)),Ji=(t,e=[])=>{qe(t)?t.forEach(n=>n(...e)):t&&t(...e)},ju=t=>t?qe(t)?t.some(e=>e.length>1):t.length>1:!1;function d_(t){const e={};for(const k in t)k in Kh||(e[k]=t[k]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=h_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:w,onLeave:E,onLeaveCancelled:L,onBeforeAppear:C=p,onAppear:P=y,onAppearCancelled:F=w}=e,T=(k,H,q,de)=>{k._enterCancelled=de,Qi(k,H?u:a),Qi(k,H?c:o),q&&q()},S=(k,H)=>{k._isLeaving=!1,Qi(k,f),Qi(k,h),Qi(k,d),H&&H()},D=k=>(H,q)=>{const de=k?P:y,Z=()=>T(H,k,q);Ji(de,[H,Z]),Yu(()=>{Qi(H,k?l:s),Jn(H,k?u:a),ju(de)||Ku(H,i,_,Z)})};return kt(e,{onBeforeEnter(k){Ji(p,[k]),Jn(k,s),Jn(k,o)},onBeforeAppear(k){Ji(C,[k]),Jn(k,l),Jn(k,c)},onEnter:D(!1),onAppear:D(!0),onLeave(k,H){k._isLeaving=!0;const q=()=>S(k,H);Jn(k,f),k._enterCancelled?(Jn(k,d),Qu()):(Qu(),Jn(k,d)),Yu(()=>{k._isLeaving&&(Qi(k,f),Jn(k,h),ju(E)||Ku(k,i,m,q))}),Ji(E,[k,q])},onEnterCancelled(k){T(k,!1,void 0,!0),Ji(w,[k])},onAppearCancelled(k){T(k,!0,void 0,!0),Ji(F,[k])},onLeaveCancelled(k){S(k),Ji(L,[k])}})}function h_(t){if(t==null)return null;if(bt(t))return[Ja(t.enter),Ja(t.leave)];{const e=Ja(t);return[e,e]}}function Ja(t){return xm(t)}function Jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vs]||(t[Vs]=new Set)).add(e)}function Qi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Vs];n&&(n.delete(e),n.size||(t[Vs]=void 0))}function Yu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let p_=0;function Ku(t,e,n,i){const r=t._endId=++p_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=m_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function m_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${Ti}Delay`),s=i(`${Ti}Duration`),o=Zu(r,s),a=i(`${ms}Delay`),l=i(`${ms}Duration`),c=Zu(a,l);let u=null,f=0,d=0;e===Ti?o>0&&(u=Ti,f=o,d=s.length):e===ms?c>0&&(u=ms,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Ti:ms:null,d=u?u===Ti?s.length:l.length:0);const h=u===Ti&&/\b(transform|all)(,|$)/.test(i(`${Ti}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Zu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Ju(n)+Ju(t[i])))}function Ju(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Qu(){return document.body.offsetHeight}function g_(t,e,n){const i=t[Vs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sa=Symbol("_vod"),Zh=Symbol("_vsh"),__={beforeMount(t,{value:e},{transition:n}){t[sa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),gs(t,!0),i.enter(t)):i.leave(t,()=>{gs(t,!1)}):gs(t,e))},beforeUnmount(t,{value:e}){gs(t,e)}};function gs(t,e){t.style.display=e?t[sa]:"none",t[Zh]=!e}const v_=Symbol(""),x_=/(^|;)\s*display\s*:/;function S_(t,e,n){const i=t.style,r=Ct(n);let s=!1;if(n&&!r){if(e)if(Ct(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ho(i,a,"")}else for(const o in e)n[o]==null&&Ho(i,o,"");for(const o in n)o==="display"&&(s=!0),Ho(i,o,n[o])}else if(r){if(e!==n){const o=i[v_];o&&(n+=";"+o),i.cssText=n,s=x_.test(n)}}else e&&t.removeAttribute("style");sa in t&&(t[sa]=s?i.display:"",t[Zh]&&(i.display="none"))}const ef=/\s*!important$/;function Ho(t,e,n){if(qe(n))n.forEach(i=>Ho(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=y_(t,e);ef.test(n)?t.setProperty(Er(i),n.replace(ef,""),"important"):t[i]=n}}const tf=["Webkit","Moz","ms"],Qa={};function y_(t,e){const n=Qa[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return Qa[e]=i;i=pa(i);for(let r=0;r<tf.length;r++){const s=tf[r]+i;if(s in t)return Qa[e]=s}return e}const nf="http://www.w3.org/1999/xlink";function rf(t,e,n,i,r,s=Tm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nf,e.slice(6,e.length)):t.setAttributeNS(nf,e,n):n==null||s&&!Gd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Xi(n)?String(n):n)}function sf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Gd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function E_(t,e,n,i){t.addEventListener(e,n,i)}function M_(t,e,n,i){t.removeEventListener(e,n,i)}const of=Symbol("_vei");function b_(t,e,n,i,r=null){const s=t[of]||(t[of]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=T_(e);if(i){const c=s[e]=R_(i,r);E_(t,a,c,l)}else o&&(M_(t,a,o,l),s[e]=void 0)}}const af=/(?:Once|Passive|Capture)$/;function T_(t){let e;if(af.test(t)){e={};let i;for(;i=t.match(af);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Er(t.slice(2)),e]}let el=0;const w_=Promise.resolve(),A_=()=>el||(w_.then(()=>el=0),el=Date.now());function R_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Bn(C_(i,n.value),e,5,[i])};return n.value=t,n.attached=A_(),n}function C_(t,e){if(qe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const lf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,P_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?g_(t,i,o):e==="style"?S_(t,n,i):fa(e)?Yc(e)||b_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D_(t,e,i,o))?(sf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?sf(t,An(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),rf(t,e,i,o))};function D_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&lf(e)&&Ze(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lf(e)&&Ct(n)?!1:e in t}const L_=["ctrl","shift","alt","meta"],I_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>L_.some(n=>t[`${n}Key`]&&!e.includes(n))},cf=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=I_[e[o]];if(a&&a(r,e))return}return t(r,...s)})},U_=kt({patchProp:P_},l_);let uf;function N_(){return uf||(uf=Lg(U_))}const O_=(...t)=>{const e=N_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=B_(i);if(!r)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,F_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function F_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function B_(t){return Ct(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function k_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const gt=Object.assign;function tl(t,e){const n={};for(const i in e){const r=e[i];n[i]=kn(r)?r.map(t):t(r)}return n}const Is=()=>{},kn=Array.isArray,Jh=/#/g,z_=/&/g,H_=/\//g,V_=/=/g,G_=/\?/g,Qh=/\+/g,W_=/%5B/g,X_=/%5D/g,ep=/%5E/g,$_=/%60/g,tp=/%7B/g,q_=/%7C/g,np=/%7D/g,j_=/%20/g;function fu(t){return encodeURI(""+t).replace(q_,"|").replace(W_,"[").replace(X_,"]")}function Y_(t){return fu(t).replace(tp,"{").replace(np,"}").replace(ep,"^")}function Yl(t){return fu(t).replace(Qh,"%2B").replace(j_,"+").replace(Jh,"%23").replace(z_,"%26").replace($_,"`").replace(tp,"{").replace(np,"}").replace(ep,"^")}function K_(t){return Yl(t).replace(V_,"%3D")}function Z_(t){return fu(t).replace(Jh,"%23").replace(G_,"%3F")}function J_(t){return t==null?"":Z_(t).replace(H_,"%2F")}function Gs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Q_=/\/$/,e0=t=>t.replace(Q_,"");function nl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=r0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Gs(o)}}function t0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function n0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&es(e.matched[i],n.matched[r])&&ip(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ip(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!i0(t[n],e[n]))return!1;return!0}function i0(t,e){return kn(t)?df(t,e):kn(e)?df(e,t):t===e}function df(t,e){return kn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function r0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ws;(function(t){t.pop="pop",t.push="push"})(Ws||(Ws={}));var Us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Us||(Us={}));function s0(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),e0(t)}const o0=/^[^#]+#/;function a0(t,e){return t.replace(o0,"#")+e}function l0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ba=()=>({left:window.scrollX,top:window.scrollY});function c0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=l0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hf(t,e){return(history.state?history.state.position-e:-1)+t}const Kl=new Map;function u0(t,e){Kl.set(t,e)}function f0(t){const e=Kl.get(t);return Kl.delete(t),e}let d0=()=>location.protocol+"//"+location.host;function rp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ff(l,"")}return ff(n,t)+i+r}function h0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=rp(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Ws.pop,direction:m?m>0?Us.forward:Us.back:Us.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(gt({},d.state,{scroll:ba()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function pf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ba():null}}function p0(t){const{history:e,location:n}=window,i={value:rp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:d0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=gt({},e.state,pf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=gt({},r.value,e.state,{forward:l,scroll:ba()});s(u.current,u,!0);const f=gt({},pf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function m0(t){t=s0(t);const e=p0(t),n=h0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=gt({location:"",base:t,go:i,createHref:a0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function g0(t){return typeof t=="string"||t&&typeof t=="object"}function sp(t){return typeof t=="string"||typeof t=="symbol"}const op=Symbol("");var mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(mf||(mf={}));function ts(t,e){return gt(new Error,{type:t,[op]:!0},e)}function Qn(t,e){return t instanceof Error&&op in t&&(e==null||!!(t.type&e))}const gf="[^/]+?",_0={sensitive:!1,strict:!1,start:!0,end:!0},v0=/[.+*?^${}()[\]/\\]/g;function x0(t,e){const n=gt({},_0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(v0,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const y=p||gf;if(y!==gf){h+=10;try{new RegExp(`(${y})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+E.message)}}let w=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(w=m&&c.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),r+=w,h+=20,m&&(h+=-8),_&&(h+=-20),y===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(kn(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=kn(p)?p.join("/"):p;if(!y)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function S0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ap(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=S0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(_f(i))return 1;if(_f(r))return-1}return r.length-i.length}function _f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y0={type:0,value:""},E0=/[a-zA-Z0-9_]/;function M0(t){if(!t)return[[]];if(t==="/")return[[y0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:E0.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function b0(t,e,n){const i=x0(M0(t.path),n),r=gt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function T0(t,e){const n=[],i=new Map;e=Sf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=w0(f);_.aliasOf=h&&h.record;const m=Sf(e,f),p=[_];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of E)p.push(gt({},_,{components:h?h.record.components:_.components,path:L,aliasOf:h?h.record:_}))}let y,w;for(const E of p){const{path:L}=E;if(d&&L[0]!=="/"){const C=d.record.path,P=C[C.length-1]==="/"?"":"/";E.path=d.record.path+(L&&P+L)}if(y=b0(E,d,m),h?h.alias.push(y):(w=w||y,w!==y&&w.alias.push(y),g&&f.name&&!xf(y)&&o(f.name)),lp(y)&&l(y),_.children){const C=_.children;for(let P=0;P<C.length;P++)s(C[P],y,h&&h.children[P])}h=h||y}return w?()=>{o(w)}:Is}function o(f){if(sp(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=C0(f,n);n.splice(d,0,f),f.record.name&&!xf(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw ts(1,{location:f});m=h.record.name,g=gt(vf(d.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),f.params&&vf(f.params,h.keys.map(w=>w.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=n.find(w=>w.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(w=>w.re.test(d.path)),!h)throw ts(1,{location:f,currentLocation:d});m=h.record.name,g=gt({},d.params,f.params),_=h.stringify(g)}const p=[];let y=h;for(;y;)p.unshift(y.record),y=y.parent;return{name:m,path:_,params:g,matched:p,meta:R0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function vf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function w0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:A0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function A0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function R0(t){return t.reduce((e,n)=>gt(e,n.meta),{})}function Sf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function C0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;ap(t,e[s])<0?i=s:n=s+1}const r=P0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function P0(t){let e=t;for(;e=e.parent;)if(lp(e)&&ap(t,e)===0)return e}function lp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function D0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Qh," "),o=s.indexOf("="),a=Gs(o<0?s:s.slice(0,o)),l=o<0?null:Gs(s.slice(o+1));if(a in e){let c=e[a];kn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function yf(t){let e="";for(let n in t){const i=t[n];if(n=K_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(kn(i)?i.map(s=>s&&Yl(s)):[i&&Yl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function L0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=kn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const I0=Symbol(""),Ef=Symbol(""),Ta=Symbol(""),cp=Symbol(""),Zl=Symbol("");function _s(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Oi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ts(4,{from:n,to:e})):d instanceof Error?l(d):g0(d)?l(ts(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function il(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(U0(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Oi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=k_(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&Oi(h,n,i,o,a,r)()}))}}return s}function U0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mf(t){const e=Kn(Ta),n=Kn(cp),i=ct(()=>{const l=$e(t.to);return e.resolve(l)}),r=ct(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(es.bind(null,u));if(d>-1)return d;const h=bf(l[c-2]);return c>1&&bf(u)===h&&f[f.length-1].path!==h?f.findIndex(es.bind(null,l[c-2])):d}),s=ct(()=>r.value>-1&&B0(n.params,i.value.params)),o=ct(()=>r.value>-1&&r.value===n.matched.length-1&&ip(n.params,i.value.params));function a(l={}){return F0(l)?e[$e(t.replace)?"replace":"push"]($e(t.to)).catch(Is):Promise.resolve()}return{route:i,href:ct(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const N0=Rn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mf,setup(t,{slots:e}){const n=_a(Mf(t)),{options:i}=Kn(Ta),r=ct(()=>({[Tf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Tf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:uu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),O0=N0;function F0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function B0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!kn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tf=(t,e,n)=>t??e??n,k0=Rn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Kn(Zl),r=ct(()=>t.route||i.value),s=Kn(Ef,0),o=ct(()=>{let c=$e(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ct(()=>r.value.matched[o.value]);Oo(Ef,ct(()=>o.value+1)),Oo(I0,a),Oo(Zl,r);const l=Nt();return Fo(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!es(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return wf(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=uu(d,gt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wf(n.default,{Component:m,route:c})||m}}});function wf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z0=k0;function H0(t){const e=T0(t.routes,t),n=t.parseQuery||D0,i=t.stringifyQuery||yf,r=t.history,s=_s(),o=_s(),a=_s(),l=qm(wi);let c=wi;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,O=>""+O),f=tl.bind(null,J_),d=tl.bind(null,Gs);function h(O,Q){let ge,me;return sp(O)?(ge=e.getRecordMatcher(O),me=Q):me=O,e.addRoute(me,ge)}function g(O){const Q=e.getRecordMatcher(O);Q&&e.removeRoute(Q)}function _(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,Q){if(Q=gt({},Q||l.value),typeof O=="string"){const x=nl(n,O,Q.path),se=e.resolve({path:x.path},Q),J=r.createHref(x.fullPath);return gt(x,se,{params:d(se.params),hash:Gs(x.hash),redirectedFrom:void 0,href:J})}let ge;if(O.path!=null)ge=gt({},O,{path:nl(n,O.path,Q.path).path});else{const x=gt({},O.params);for(const se in x)x[se]==null&&delete x[se];ge=gt({},O,{params:f(x)}),Q.params=f(Q.params)}const me=e.resolve(ge,Q),Ge=O.hash||"";me.params=u(d(me.params));const A=t0(i,gt({},O,{hash:Y_(Ge),path:me.path})),R=r.createHref(A);return gt({fullPath:A,hash:Ge,query:i===yf?L0(O.query):O.query||{}},me,{redirectedFrom:void 0,href:R})}function y(O){return typeof O=="string"?nl(n,O,l.value.path):gt({},O)}function w(O,Q){if(c!==O)return ts(8,{from:Q,to:O})}function E(O){return P(O)}function L(O){return E(gt(y(O),{replace:!0}))}function C(O){const Q=O.matched[O.matched.length-1];if(Q&&Q.redirect){const{redirect:ge}=Q;let me=typeof ge=="function"?ge(O):ge;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=y(me):{path:me},me.params={}),gt({query:O.query,hash:O.hash,params:me.path!=null?{}:O.params},me)}}function P(O,Q){const ge=c=p(O),me=l.value,Ge=O.state,A=O.force,R=O.replace===!0,x=C(ge);if(x)return P(gt(y(x),{state:typeof x=="object"?gt({},Ge,x.state):Ge,force:A,replace:R}),Q||ge);const se=ge;se.redirectedFrom=Q;let J;return!A&&n0(i,me,ge)&&(J=ts(16,{to:se,from:me}),Fe(me,me,!0,!1)),(J?Promise.resolve(J):S(se,me)).catch(Y=>Qn(Y)?Qn(Y,2)?Y:Pe(Y):V(Y,se,me)).then(Y=>{if(Y){if(Qn(Y,2))return P(gt({replace:R},y(Y.to),{state:typeof Y.to=="object"?gt({},Ge,Y.to.state):Ge,force:A}),Q||se)}else Y=k(se,me,!0,R,Ge);return D(se,me,Y),Y})}function F(O,Q){const ge=w(O,Q);return ge?Promise.reject(ge):Promise.resolve()}function T(O){const Q=le.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(O):O()}function S(O,Q){let ge;const[me,Ge,A]=V0(O,Q);ge=il(me.reverse(),"beforeRouteLeave",O,Q);for(const x of me)x.leaveGuards.forEach(se=>{ge.push(Oi(se,O,Q))});const R=F.bind(null,O,Q);return ge.push(R),Ce(ge).then(()=>{ge=[];for(const x of s.list())ge.push(Oi(x,O,Q));return ge.push(R),Ce(ge)}).then(()=>{ge=il(Ge,"beforeRouteUpdate",O,Q);for(const x of Ge)x.updateGuards.forEach(se=>{ge.push(Oi(se,O,Q))});return ge.push(R),Ce(ge)}).then(()=>{ge=[];for(const x of A)if(x.beforeEnter)if(kn(x.beforeEnter))for(const se of x.beforeEnter)ge.push(Oi(se,O,Q));else ge.push(Oi(x.beforeEnter,O,Q));return ge.push(R),Ce(ge)}).then(()=>(O.matched.forEach(x=>x.enterCallbacks={}),ge=il(A,"beforeRouteEnter",O,Q,T),ge.push(R),Ce(ge))).then(()=>{ge=[];for(const x of o.list())ge.push(Oi(x,O,Q));return ge.push(R),Ce(ge)}).catch(x=>Qn(x,8)?x:Promise.reject(x))}function D(O,Q,ge){a.list().forEach(me=>T(()=>me(O,Q,ge)))}function k(O,Q,ge,me,Ge){const A=w(O,Q);if(A)return A;const R=Q===wi,x=Wr?history.state:{};ge&&(me||R?r.replace(O.fullPath,gt({scroll:R&&x&&x.scroll},Ge)):r.push(O.fullPath,Ge)),l.value=O,Fe(O,Q,ge,R),Pe()}let H;function q(){H||(H=r.listen((O,Q,ge)=>{if(!Ee.listening)return;const me=p(O),Ge=C(me);if(Ge){P(gt(Ge,{replace:!0}),me).catch(Is);return}c=me;const A=l.value;Wr&&u0(hf(A.fullPath,ge.delta),ba()),S(me,A).catch(R=>Qn(R,12)?R:Qn(R,2)?(P(R.to,me).then(x=>{Qn(x,20)&&!ge.delta&&ge.type===Ws.pop&&r.go(-1,!1)}).catch(Is),Promise.reject()):(ge.delta&&r.go(-ge.delta,!1),V(R,me,A))).then(R=>{R=R||k(me,A,!1),R&&(ge.delta&&!Qn(R,8)?r.go(-ge.delta,!1):ge.type===Ws.pop&&Qn(R,20)&&r.go(-1,!1)),D(me,A,R)}).catch(Is)}))}let de=_s(),Z=_s(),fe;function V(O,Q,ge){Pe(O);const me=Z.list();return me.length?me.forEach(Ge=>Ge(O,Q,ge)):console.error(O),Promise.reject(O)}function Te(){return fe&&l.value!==wi?Promise.resolve():new Promise((O,Q)=>{de.add([O,Q])})}function Pe(O){return fe||(fe=!O,q(),de.list().forEach(([Q,ge])=>O?ge(O):Q()),de.reset()),O}function Fe(O,Q,ge,me){const{scrollBehavior:Ge}=t;if(!Wr||!Ge)return Promise.resolve();const A=!ge&&f0(hf(O.fullPath,0))||(me||!ge)&&history.state&&history.state.scroll||null;return fh().then(()=>Ge(O,Q,A)).then(R=>R&&c0(R)).catch(R=>V(R,O,Q))}const Ve=O=>r.go(O);let Je;const le=new Set,Ee={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:E,replace:L,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Z.add,isReady:Te,install(O){const Q=this;O.component("RouterLink",O0),O.component("RouterView",z0),O.config.globalProperties.$router=Q,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),Wr&&!Je&&l.value===wi&&(Je=!0,E(r.location).catch(Ge=>{}));const ge={};for(const Ge in wi)Object.defineProperty(ge,Ge,{get:()=>l.value[Ge],enumerable:!0});O.provide(Ta,Q),O.provide(cp,oh(ge)),O.provide(Zl,l);const me=O.unmount;le.add(O),O.unmount=function(){le.delete(O),le.size<1&&(c=wi,H&&H(),H=null,l.value=wi,Je=!1,fe=!1),me()}}};function Ce(O){return O.reduce((Q,ge)=>Q.then(()=>T(ge)),Promise.resolve())}return Ee}function V0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>es(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>es(c,l))||r.push(l))}return[n,i,r]}function G0(){return Kn(Ta)}const $i=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},W0={class:"fixed top-0 left-0 right-0 z-30 flex justify-center",style:{"padding-top":"env(safe-area-inset-top)"}},X0={class:"flex items-start md:items-center w-full max-w-[1280px] px-4 md:px-16"},$0={class:"hidden md:flex items-center w-full justify-between"},q0={class:"rounded-full px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},j0={class:"flex gap-x-2"},Y0={class:"flex gap-x-6 rounded-full px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},K0=["href"],Z0={class:"flex flex-col gap-y-4 md:hidden items-center w-full justify-center"},J0={class:"flex gap-x-3 items-center rounded-full px-8 py-3 mt-2 backdrop-blur-2xl bg-white/10 border border-white/10"},Q0={class:"flex place-items-center"},ev={class:"flex flex-col gap-y-4 items-center"},tv={class:"flex flex-col gap-y-6 rounded-3xl min-w-64 px-8 p-4 backdrop-blur-2xl bg-white/10 border border-white/10"},nv=["href"],iv={__name:"Header",setup(t){const e=G0(),n=Nt(!1),i=Nt(!1),r=[{name:"소개",link:"#intro"},{name:"후원",link:"#sponsors"},{name:"시간표",link:"#schedule"},{name:"연사",link:"#speakers"},{name:"준비위원회",link:"#organizers"},{name:"행사장",link:"#venue"}],s=()=>{window.dispatchEvent(new CustomEvent("reset-particles")),i.value=!0,setTimeout(()=>{i.value=!1},600),e.push("/")},o=()=>{window.open("https://www.ticketa.co/events/35","_blank")};return(a,l)=>{const c=ou("router-link");return oe(),ce("div",W0,[N("header",X0,[N("div",$0,[N("div",q0,[Ue(c,{to:"/",onClick:cf(s,["prevent"])},{default:Cs(()=>[N("div",{class:Fn(["font-black text-xl cursor-pointer",{flash:i.value}])},l[1]||(l[1]=[N("span",{class:"text-white box-shadow-xl"},[xn("Let'Swift "),N("span",{class:"text-rainbow"},"2025")],-1)]),2)]),_:1})]),N("div",j0,[N("div",Y0,[(oe(),ce(dt,null,Pt(r,u=>N("div",{key:u},[N("a",{href:u.link,class:"font-semibold text-base text-white"},st(u.name),9,K0)])),64))]),N("button",{onClick:o,class:"px-8 p-4 flex items-center font-semibold text-base text-slate-100 hover:text-white active:text-white backdrop-blur-2xl duration-300 bg-amber-500/60 hover:bg-amber-500/70 active:bg-amber-500/80 border border-white/10 rounded-full transition"}," 입장권 구매 ")])]),N("div",Z0,[N("div",J0,[Ue(c,{to:"/",onClick:cf(s,["prevent"])},{default:Cs(()=>[N("div",{class:Fn(["font-black text-lg cursor-pointer",{flash:i.value}])},l[2]||(l[2]=[N("span",{class:"text-white box-shadow-xl"},[xn("Let's Swift "),N("span",{class:"text-rainbow"},"2025")],-1)]),2)]),_:1}),N("div",Q0,[N("button",{onClick:l[0]||(l[0]=u=>n.value=!n.value),class:"text-white"},l[3]||(l[3]=[N("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[N("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)]))])]),Ue(f_,{name:"mobile-menu"},{default:Cs(()=>[ig(N("div",null,[N("div",ev,[N("div",tv,[(oe(),ce(dt,null,Pt(r,u=>N("div",{key:u},[N("a",{href:u.link,class:"font-semibold text-base text-white"},st(u.name),9,nv)])),64))]),N("button",{onClick:o,class:"px-8 p-4 cursor-pointer flex items-center font-semibold text-base text-slate-100 hover:text-white active:text-white backdrop-blur-2xl duration-300 bg-themeMain/50 hover:bg-themeMain/70 active:bg-themeMain/50 rounded-full transition"}," 입장권 구매 ")])],512),[[__,n.value]])]),_:1})])])])}}},rv=$i(iv,[["__scopeId","data-v-87db05d3"]]),sv=["width","height"],ov=N("title",null,"Facebook",-1),av=N("path",{d:"M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"},null,-1),lv=[ov,av],du=Rn({__name:"FacebookIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),lv,16,sv))}}),cv=["width","height"],uv=N("title",null,"GitHub",-1),fv=N("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),dv=[uv,fv],wa=Rn({__name:"GitHubIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),dv,16,cv))}}),hv=["width","height"],pv=N("title",null,"Instagram",-1),mv=N("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},null,-1),gv=[pv,mv],Aa=Rn({__name:"InstagramIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),gv,16,hv))}}),_v=["width","height"],vv=N("title",null,"LinkedIn",-1),xv=N("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},null,-1),Sv=[vv,xv],Ra=Rn({__name:"LinkedInIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Sv,16,_v))}}),yv=["width","height"],Ev=N("title",null,"Mail.Ru",-1),Mv=N("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"},null,-1),bv=[Ev,Mv],vr=Rn({__name:"MailDotRuIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),bv,16,yv))}}),Tv=["width","height"],wv=N("title",null,"Mastodon",-1),Av=N("path",{d:"M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"},null,-1),Rv=[wv,Av],hu=Rn({__name:"MastodonIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Rv,16,Tv))}}),Cv=["width","height"],Pv=N("title",null,"Medium",-1),Dv=N("path",{d:"M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"},null,-1),Lv=[Pv,Dv],pu=Rn({__name:"MediumIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Lv,16,Cv))}}),Iv=["width","height"],Uv=N("title",null,"Threads",-1),Nv=N("path",{d:"M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"},null,-1),Ov=[Uv,Nv],mu=Rn({__name:"ThreadsIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Ov,16,Iv))}}),Fv=["width","height"],Bv=N("title",null,"X",-1),kv=N("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},null,-1),zv=[Bv,kv],Ca=Rn({__name:"XIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),zv,16,Fv))}}),Hv=["width","height"],Vv=N("title",null,"YouTube",-1),Gv=N("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),Wv=[Vv,Gv],Pa=Rn({__name:"YouTubeIcon",props:{size:{default:24}},setup(t){const e=t,n=ct(()=>{const i=$e(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(oe(),ce("svg",Hn({width:n.value,height:n.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Wv,16,Hv))}}),Xv={class:"relative flex justify-center"},$v={class:"z-20 mb-8 relative flex flex-col backdrop-blur-2xl bg-white/10 border border-white/10 rounded-4xl p-4 w-full max-w-[1280px] mx-4"},qv={class:"flex justify-center"},jv={class:"px-8 xl:px-8 py-4 w-full max-w-[1280px] flex flex-col items-center text-white"},Yv={class:"px-2 pt-4 pb-12 grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-x-8 gap-y-12 text-xs font-semibold"},Kv={class:"flex flex-col space-y-3 items-start"},Zv=["href","target"],Jv={class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50 cursor-pointer"},Qv={class:"flex flex-col space-y-3 items-start"},ex=["href"],tx=["href"],nx=["href"],ix={class:"flex flex-col space-y-3 items-start"},rx=["href"],sx={__name:"Footer",setup(t){const e=[{text:"Let'Swift 뉴스레터 구독하기",url:"https://page.stibee.com/subscriptions/58654",target:"_blank"},{text:"Let'Swift 앱 다운로드",url:"https://apps.apple.com/app/id1282995254",target:"_blank"},{text:"행동지침",url:null,link:"/CodeOfConduct",target:""}],n=[{text:"행사 후원 문의",url:"mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"}],i={MailDotRuIcon:vr,GitHubIcon:wa,XIcon:Ca,InstagramIcon:Aa,YouTubeIcon:Pa,LinkedInIcon:Ra},r=[{name:"Email",image:"MailDotRuIcon",url:"mailto:letswift.official@gmail.com"},{name:"YouTube",image:"YouTubeIcon",url:"https://www.youtube.com/@letswift_official"},{name:"YouTube (2023 이전)",image:"YouTubeIcon",url:"https://youtube.com/playlist?list=PLAHa1zfLtLiPY9gDxRwhNDbYZvjFKiurH&si=-Zft8ebxkt-65x4J"},{name:"LinkedIn",image:"LinkedInIcon",url:"https://www.linkedin.com/company/letswift"},{name:"Instagram",image:"InstagramIcon",url:"https://www.instagram.com/letswiftkr"},{name:"𝕏",image:"XIcon",url:"https://x.com/letswiftkr"},{name:"GitHub",image:"GitHubIcon",url:"https://github.com/letswiftconf"}],s=[{year:2024,url:"https://letswift.kr/2024",overlay_class:"bg-black/30",class:"",text_class:""},{year:2023,url:"https://letswift.kr/2023",overlay_class:"bg-black/30",class:"",text_class:""},{year:2022,url:"https://letswift.kr/2022",overlay_class:"bg-black/30",class:"",text_class:""},{year:2020,url:"https://letswift.kr/2020",overlay_class:"bg-black/30",class:"",text_class:""},{year:2019,url:"https://letswift.kr/2019",overlay_class:"bg-black/30",class:"",text_class:""},{year:2018,url:"https://letswift.kr/2018",overlay_class:"bg-black/30",class:"",text_class:""},{year:2017,url:"https://letswift.kr/2017",overlay_class:"bg-black/50",class:"bg-white",text_class:""},{year:2016,url:"https://letswift.kr/2016",overlay_class:"bg-black/50",class:"bg-white",text_class:""}],o=[{name:"홈페이지",image:"GitHubIcon",url:"https://github.com/letswiftconf/letswift.kr"},{name:"iOS 앱",image:"GitHubIcon",url:"https://github.com/letswiftconf/LetSwift"},{name:"뉴스레터",image:"GitHubIcon",url:"https://github.com/letswiftconf/newsletter"}];return(a,l)=>{const c=ou("router-link");return oe(),ce("div",Xv,[N("footer",$v,[N("div",qv,[N("div",jv,[l[4]||(l[4]=zs('<div class="px-2 flex grow w-full"><div class="text-lg font-bold text-zinc-200 select-none">Let&#39;Swift <span class="text-rainbow">2025</span></div><div class="grow"></div></div><div class="my-4 h-px w-full bg-white/10"></div>',2)),N("div",Yv,[N("div",Kv,[(oe(),ce(dt,null,Pt(e,u=>N("div",{key:u.text},[u.url!==null?(oe(),ce("a",{key:0,href:u.url,target:u.target,class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},st(u.text),9,Zv)):(oe(),ko(c,{key:1,to:u.link},{default:Cs(()=>[N("span",Jv,st(u.text),1)]),_:2},1032,["to"]))])),64))]),N("div",Qv,[l[0]||(l[0]=N("div",{class:"font-bold text-zinc-200"},"후원",-1)),(oe(),ce(dt,null,Pt(n,u=>N("div",{key:u.text},[N("a",{href:u.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},st(u.text),9,ex)])),64)),l[1]||(l[1]=N("div",{class:"pt-4 font-bold text-zinc-200"},"소식",-1)),(oe(),ce(dt,null,Pt(r,u=>N("div",{key:u.name},[N("a",{href:u.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(oe(),ko(Iu(i[u.image]),{fill:"gray",width:"10",height:"10"})),N("span",null,st(u.name),1)],8,tx)])),64)),l[2]||(l[2]=N("div",{class:"pt-4 font-bold text-zinc-200"},"오픈소스",-1)),(oe(),ce(dt,null,Pt(o,u=>N("div",{key:u.name},[N("a",{href:u.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(oe(),ko(Iu(i[u.image]),{fill:"gray",width:"10",height:"10"})),N("span",null,st(u.name),1)],8,nx)])),64))]),N("div",ix,[l[3]||(l[3]=N("div",null,"이전 행사",-1)),(oe(),ce(dt,null,Pt(s,u=>N("div",{key:u.text},[N("a",{href:u.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},st(u.year),9,rx)])),64))])]),l[5]||(l[5]=zs('<div class="my-4 h-px w-full bg-white/10"></div><div class="px-2 w-full text-xs lg:flex lg:space-x-2 space-y-2 lg:space-y-0"><div><span class="text-zinc-400/80">Copyright © 2025 </span><span class="font-semibold text-zinc-200">Let&#39;Swift.</span><span class="text-zinc-400/80"> All rights reserved.</span></div></div>',2))])])])])}}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gu="178",ox=0,Af=1,ax=2,up=1,lx=2,si=3,Wi=0,ln=1,ci=2,zi=0,Zr=1,Jl=2,Rf=3,Cf=4,cx=5,ur=100,ux=101,fx=102,dx=103,hx=104,px=200,mx=201,gx=202,_x=203,Ql=204,ec=205,vx=206,xx=207,Sx=208,yx=209,Ex=210,Mx=211,bx=212,Tx=213,wx=214,tc=0,nc=1,ic=2,ns=3,rc=4,sc=5,oc=6,ac=7,fp=0,Ax=1,Rx=2,Hi=0,Cx=1,Px=2,Dx=3,Lx=4,Ix=5,Ux=6,Nx=7,dp=300,is=301,rs=302,lc=303,cc=304,Da=306,uc=1e3,dr=1001,fc=1002,On=1003,Ox=1004,fo=1005,jn=1006,rl=1007,hr=1008,gi=1009,hp=1010,pp=1011,Xs=1012,_u=1013,xr=1014,ui=1015,Js=1016,vu=1017,xu=1018,$s=1020,mp=35902,gp=1021,_p=1022,Un=1023,qs=1026,js=1027,vp=1028,Su=1029,xp=1030,yu=1031,Eu=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,dc=35840,hc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37808,Sc=37809,yc=37810,Ec=37811,Mc=37812,bc=37813,Tc=37814,wc=37815,Ac=37816,Rc=37817,Cc=37818,Pc=37819,Dc=37820,Lc=37821,$o=36492,Ic=36494,Uc=36495,Sp=36283,Nc=36284,Oc=36285,Fc=36286,Fx=3200,Bx=3201,kx=0,zx=1,Fi="",Tn="srgb",ss="srgb-linear",oa="linear",xt="srgb",Cr=7680,Pf=519,Hx=512,Vx=513,Gx=514,yp=515,Wx=516,Xx=517,$x=518,qx=519,Df=35044,Lf="300 es",fi=2e3,aa=2001;class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,Bc=180/Math.PI;function Qs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function jx(t,e){return(t%e+e)%e}function ol(t,e,n){return(1-n)*t+n*e}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class eo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,y=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const L=Math.sqrt(w),C=Math.atan2(L,p*y);m=Math.sin(m*C)/L,a=Math.sin(a*C)/L}const E=a*y;if(l=l*m+d*E,c=c*m+h*E,u=u*m+g*E,f=f*m+_*E,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(If.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new K,If=new eo;class et{constructor(e,n,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],w=r[4],E=r[7],L=r[2],C=r[5],P=r[8];return s[0]=o*_+a*y+l*L,s[3]=o*m+a*w+l*C,s[6]=o*p+a*E+l*P,s[1]=c*_+u*y+f*L,s[4]=c*m+u*w+f*C,s[7]=c*p+u*E+f*P,s[2]=d*_+h*y+g*L,s[5]=d*m+h*w+g*C,s[8]=d*p+h*E+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ll.makeScale(e,n)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,n){return this.premultiply(ll.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ll=new et;function Ep(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function la(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yx(){const t=la("canvas");return t.style.display="block",t}const Uf={};function Jr(t){t in Uf||(Uf[t]=!0,console.warn(t))}function Kx(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Zx(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jx(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Of=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qx(){const t={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=Qr(r.r),r.g=Qr(r.g),r.b=Qr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fi?oa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Jr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Jr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ss]:{primaries:e,whitePoint:i,transfer:oa,toXYZ:Nf,fromXYZ:Of,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Nf,fromXYZ:Of,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const ft=Qx();function hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Pr;class eS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=la("canvas")),Pr.width=e.width,Pr.height=e.height;const r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=la("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hi(n[i]/255)*255):n[i]=hi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tS=0;class Mu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=Qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cl(r[o].image)):s.push(cl(r[o]))}else s=cl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function cl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nS=0;const ul=new K;class cn extends as{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=dr,r=dr,s=jn,o=hr,a=Un,l=gi,c=cn.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Qs(),this.name="",this.source=new Mu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ul).x}get height(){return this.source.getSize(ul).y}get depth(){return this.source.getSize(ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uc:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case fc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uc:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case fc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=dp;cn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,E=(h+1)/2,L=(p+1)/2,C=(u+d)/4,P=(f+_)/4,F=(g+m)/4;return w>E&&w>L?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=C/i,s=P/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=P/s,r=F/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iS extends as{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new cn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Mu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends iS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mp extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),po.subVectors(this.max,xs),Dr.subVectors(e.a,xs),Lr.subVectors(e.b,xs),Ir.subVectors(e.c,xs),Ai.subVectors(Lr,Dr),Ri.subVectors(Ir,Lr),er.subVectors(Dr,Ir);let n=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-er.z,er.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,er.z,0,-er.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-er.y,er.x,0];return!fl(n,Dr,Lr,Ir,po)||(n=[1,0,0,0,1,0,0,0,1],!fl(n,Dr,Lr,Ir,po))?!1:(mo.crossVectors(Ai,Ri),n=[mo.x,mo.y,mo.z],fl(n,Dr,Lr,Ir,po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new K,new K,new K,new K,new K,new K,new K,new K],Cn=new K,ho=new to,Dr=new K,Lr=new K,Ir=new K,Ai=new K,Ri=new K,er=new K,xs=new K,po=new K,mo=new K,tr=new K;function fl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){tr.fromArray(t,s);const a=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),u=i.dot(tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sS=new to,Ss=new K,dl=new K;class La{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);const n=Ss.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(dl)),this.expandByPoint(Ss.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ti=new K,hl=new K,go=new K,Ci=new K,pl=new K,_o=new K,ml=new K;class bp{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){hl.copy(e).add(n).multiplyScalar(.5),go.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(hl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(go),a=Ci.dot(this.direction),l=-Ci.dot(go),c=Ci.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(hl).addScaledVector(go,d),h}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){pl.subVectors(n,e),_o.subVectors(i,e),ml.crossVectors(pl,_o);let o=this.direction.dot(ml),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(_o.crossVectors(Ci,_o));if(l<0)return null;const c=a*this.direction.dot(pl.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(ml);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),o=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,aS)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(i,gn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(i,gn)),Pi.normalize(),vo.crossVectors(gn,Pi),r[0]=Pi.x,r[4]=vo.x,r[8]=gn.x,r[1]=Pi.y,r[5]=vo.y,r[9]=gn.y,r[2]=Pi.z,r[6]=vo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],w=i[7],E=i[11],L=i[15],C=r[0],P=r[4],F=r[8],T=r[12],S=r[1],D=r[5],k=r[9],H=r[13],q=r[2],de=r[6],Z=r[10],fe=r[14],V=r[3],Te=r[7],Pe=r[11],Fe=r[15];return s[0]=o*C+a*S+l*q+c*V,s[4]=o*P+a*D+l*de+c*Te,s[8]=o*F+a*k+l*Z+c*Pe,s[12]=o*T+a*H+l*fe+c*Fe,s[1]=u*C+f*S+d*q+h*V,s[5]=u*P+f*D+d*de+h*Te,s[9]=u*F+f*k+d*Z+h*Pe,s[13]=u*T+f*H+d*fe+h*Fe,s[2]=g*C+_*S+m*q+p*V,s[6]=g*P+_*D+m*de+p*Te,s[10]=g*F+_*k+m*Z+p*Pe,s[14]=g*T+_*H+m*fe+p*Fe,s[3]=y*C+w*S+E*q+L*V,s[7]=y*P+w*D+E*de+L*Te,s[11]=y*F+w*k+E*Z+L*Pe,s[15]=y*T+w*H+E*fe+L*Fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,w=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,E=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,L=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,C=n*y+i*w+r*E+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=y*P,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*P,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*P,e[4]=w*P,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*P,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*P,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*P,e[8]=E*P,e[9]=(g*f*s-u*_*s-g*i*h+n*_*h+u*i*p-n*f*p)*P,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*P,e[12]=L*P,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*P,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,w=l*u,E=l*f,L=i.x,C=i.y,P=i.z;return r[0]=(1-(_+p))*L,r[1]=(h+E)*L,r[2]=(g-w)*L,r[3]=0,r[4]=(h-E)*C,r[5]=(1-(d+p))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(g+w)*P,r[9]=(m-y)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const o=Ur.set(r[4],r[5],r[6]).length(),a=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,u=1/o,f=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,n.setFromRotationMatrix(Pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=fi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===fi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===aa)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=fi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,_;if(a===fi)g=(o+s)*f,_=-2*f;else if(a===aa)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new K,Pn=new Lt,oS=new K(0,0,0),aS=new K(1,1,1),Pi=new K,vo=new K,gn=new K,Ff=new Lt,Bf=new eo;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bf.setFromEuler(this),this.setFromQuaternion(Bf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lS=0;const kf=new K,Nr=new eo,ni=new Lt,xo=new K,ys=new K,cS=new K,uS=new eo,zf=new K(1,0,0),Hf=new K(0,1,0),Vf=new K(0,0,1),Gf={type:"added"},fS={type:"removed"},Or={type:"childadded",child:null},gl={type:"childremoved",child:null};class un extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new K,n=new _i,i=new eo,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new et}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,n){return Nr.setFromAxisAngle(e,n),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(zf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Vf,e)}translateOnAxis(e,n){return kf.copy(e).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Vf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xo.copy(e):xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(ys,xo,this.up):ni.lookAt(xo,ys,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ni),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fS),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,cS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,uS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new K(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new K,ii=new K,_l=new K,ri=new K,Fr=new K,Br=new K,Wf=new K,vl=new K,xl=new K,Sl=new K,yl=new Dt,El=new Dt,Ml=new Dt;class In{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ii.subVectors(i,n),_l.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ii),l=Dn.dot(_l),c=ii.dot(ii),u=ii.dot(_l),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return yl.setScalar(0),El.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(e,n),El.fromBufferAttribute(e,i),Ml.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yl,s.x),o.addScaledVector(El,s.y),o.addScaledVector(Ml,s.z),o}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ii.subVectors(e,n),Dn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Dn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Br.subVectors(s,i),vl.subVectors(e,i);const l=Fr.dot(vl),c=Br.dot(vl);if(l<=0&&c<=0)return n.copy(i);xl.subVectors(e,r);const u=Fr.dot(xl),f=Br.dot(xl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Fr,o);Sl.subVectors(e,s);const h=Fr.dot(Sl),g=Br.dot(Sl);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Br,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Wf.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Wf,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(Fr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},So={h:0,s:0,l:0};function bl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class _t{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=jx(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=bl(o,s,e+1/3),this.g=bl(o,s,e),this.b=bl(o,s,e-1/3)}return ft.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=wp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ft.workingToColorSpace(Xt.copy(this),e),Math.round(lt(Xt.r*255,0,255))*65536+Math.round(lt(Xt.g*255,0,255))*256+Math.round(lt(Xt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.workingToColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ft.workingColorSpace){return ft.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Tn){ft.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(So);const i=ol(Di.h,So.h,n),r=ol(Di.s,So.s,n),s=ol(Di.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new _t;_t.NAMES=wp;let dS=0;class no extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=Zr,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=ec,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==ec&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ap extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new K,yo=new pt;let hS=0;class Ut{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Df,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yo.fromBufferAttribute(this,n),yo.applyMatrix3(e),this.setXY(n,yo.x,yo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}}class Rp extends Ut{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cp extends Ut{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gr extends Ut{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pS=0;const bn=new Lt,Tl=new un,kr=new K,_n=new to,Es=new to,Bt=new K;class Si extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ep(e)?Cp:Rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Tl.lookAt(e),Tl.updateMatrix(),this.applyMatrix4(Tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(_n.min,Es.min),_n.expandByPoint(Bt),Bt.addVectors(_n.max,Es.max),_n.expandByPoint(Bt)):(_n.expandByPoint(Es.min),_n.expandByPoint(Es.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(kr.fromBufferAttribute(e,c),Bt.add(kr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new K,l[F]=new K;const c=new K,u=new K,f=new K,d=new pt,h=new pt,g=new pt,_=new K,m=new K;function p(F,T,S){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,F),h.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[F].add(_),a[T].add(_),a[S].add(_),l[F].add(m),l[T].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,T=y.length;F<T;++F){const S=y[F],D=S.start,k=S.count;for(let H=D,q=D+k;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new K,E=new K,L=new K,C=new K;function P(F){L.fromBufferAttribute(r,F),C.copy(L);const T=a[F];w.copy(T),w.sub(L.multiplyScalar(L.dot(T))).normalize(),E.crossVectors(C,T);const D=E.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,D)}for(let F=0,T=y.length;F<T;++F){const S=y[F],D=S.start,k=S.count;for(let H=D,q=D+k;H<q;H+=3)P(e.getX(H+0)),P(e.getX(H+1)),P(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Ut(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Si,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xf=new Lt,nr=new bp,Eo=new La,$f=new K,Mo=new K,bo=new K,To=new K,wl=new K,wo=new K,qf=new K,Ao=new K;class di extends un{constructor(e=new Si,n=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(wl.fromBufferAttribute(f,e),o?wo.addScaledVector(wl,u):wo.addScaledVector(wl.sub(n),u))}n.add(wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Eo.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Eo,$f)===null||nr.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Xf.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Xf),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,L=w;E<L;E+=3){const C=a.getX(E),P=a.getX(E+1),F=a.getX(E+2);r=Ro(this,p,e,i,c,u,f,C,P,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),w=a.getX(m+1),E=a.getX(m+2);r=Ro(this,o,e,i,c,u,f,y,w,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=y,L=w;E<L;E+=3){const C=E,P=E+1,F=E+2;r=Ro(this,p,e,i,c,u,f,C,P,F),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,w=m+1,E=m+2;r=Ro(this,o,e,i,c,u,f,y,w,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mS(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Wi,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ao);return c<n.near||c>n.far?null:{distance:c,point:Ao.clone(),object:t}}function Ro(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Mo),t.getVertexPosition(l,bo),t.getVertexPosition(c,To);const u=mS(t,e,n,i,Mo,bo,To,qf);if(u){const f=new K;In.getBarycoord(qf,Mo,bo,To,f),r&&(u.uv=In.getInterpolatedAttribute(r,a,l,c,f,new pt)),s&&(u.uv1=In.getInterpolatedAttribute(s,a,l,c,f,new pt)),o&&(u.normal=In.getInterpolatedAttribute(o,a,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new K,materialIndex:0};In.getNormal(Mo,bo,To,d.normal),u.face=d,u.barycoord=f}return u}class io extends Si{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gr(c,3)),this.setAttribute("normal",new gr(u,3)),this.setAttribute("uv",new gr(f,2));function g(_,m,p,y,w,E,L,C,P,F,T){const S=E/P,D=L/F,k=E/2,H=L/2,q=C/2,de=P+1,Z=F+1;let fe=0,V=0;const Te=new K;for(let Pe=0;Pe<Z;Pe++){const Fe=Pe*D-H;for(let Ve=0;Ve<de;Ve++){const Je=Ve*S-k;Te[_]=Je*y,Te[m]=Fe*w,Te[p]=q,c.push(Te.x,Te.y,Te.z),Te[_]=0,Te[m]=0,Te[p]=C>0?1:-1,u.push(Te.x,Te.y,Te.z),f.push(Ve/P),f.push(1-Pe/F),fe+=1}}for(let Pe=0;Pe<F;Pe++)for(let Fe=0;Fe<P;Fe++){const Ve=d+Fe+de*Pe,Je=d+Fe+de*(Pe+1),le=d+(Fe+1)+de*(Pe+1),Ee=d+(Fe+1)+de*Pe;l.push(Ve,Je,Ee),l.push(Je,le,Ee),V+=6}a.addGroup(h,V,T),h+=V,d+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=os(t[n]);for(const r in i)e[r]=i[r]}return e}function gS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Pp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const _S={clone:os,merge:Jt};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Dp extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new K,jf=new pt,Yf=new pt;class Ln extends Dp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,jf,Yf),n.subVectors(Yf,jf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zr=-90,Hr=1;class SS extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ln(zr,Hr,e,n);r.layers=this.layers,this.add(r);const s=new Ln(zr,Hr,e,n);s.layers=this.layers,this.add(s);const o=new Ln(zr,Hr,e,n);o.layers=this.layers,this.add(o);const a=new Ln(zr,Hr,e,n);a.layers=this.layers,this.add(a);const l=new Ln(zr,Hr,e,n);l.layers=this.layers,this.add(l);const c=new Ln(zr,Hr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Lp extends cn{constructor(e=[],n=is,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yS extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new io(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:zi});s.uniforms.tEquirect.value=n;const o=new di(r,s),a=n.minFilter;return n.minFilter===hr&&(n.minFilter=jn),new SS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Co extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Co;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class MS extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Rl=new K,bS=new K,TS=new et;class ar{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Rl.subVectors(i,n).cross(bS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Rl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TS.getNormalMatrix(e),r=this.coplanarPoint(Rl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new La,wS=new pt(.5,.5),Po=new K;class Ip{constructor(e=new ar,n=new ar,i=new ar,r=new ar,s=new ar,o=new ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],w=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,m-h,E-p).normalize(),i[1].setComponents(l+s,d+c,m+h,E+p).normalize(),i[2].setComponents(l+o,d+u,m+g,E+y).normalize(),i[3].setComponents(l-o,d-u,m-g,E-y).normalize(),i[4].setComponents(l-a,d-f,m-_,E-w).normalize(),n===fi)i[5].setComponents(l+a,d+f,m+_,E+w).normalize();else if(n===aa)i[5].setComponents(a,f,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const n=wS.distanceTo(e.center);return ir.radius=.7071067811865476+n,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AS extends no{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kf=new Lt,kc=new bp,Do=new La,Lo=new K;class RS extends un{constructor(e=new Si,n=new AS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;Kf.copy(r).invert(),kc.copy(e.ray).applyMatrix4(Kf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);Lo.fromBufferAttribute(f,m),Zf(Lo,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Lo.fromBufferAttribute(f,g),Zf(Lo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zf(t,e,n,i,r,s,o){const a=kc.distanceSqToPoint(t);if(a<n){const l=new K;kc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Up extends cn{constructor(e,n,i=xr,r,s,o,a=On,l=On,c,u=qs,f=1){if(u!==qs&&u!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ia extends Si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let w=0;w<c;w++){const E=w*f-s;g.push(E,-y,0),_.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const w=y+c*p,E=y+c*(p+1),L=y+1+c*(p+1),C=y+1+c*p;h.push(w,E,C),h.push(E,L,C)}this.setIndex(h),this.setAttribute("position",new gr(g,3)),this.setAttribute("normal",new gr(_,3)),this.setAttribute("uv",new gr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class CS extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PS extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Np extends Dp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DS extends Ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Jf(t,e,n,i){const r=LS(i);switch(n){case gp:return t*e;case vp:return t*e/r.components*r.byteLength;case Su:return t*e/r.components*r.byteLength;case xp:return t*e*2/r.components*r.byteLength;case yu:return t*e*2/r.components*r.byteLength;case _p:return t*e*3/r.components*r.byteLength;case Un:return t*e*4/r.components*r.byteLength;case Eu:return t*e*4/r.components*r.byteLength;case Vo:case Go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:case mc:return Math.max(t,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(t,8)*Math.max(e,8)/2;case gc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case bc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $o:case Ic:case Uc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sp:case Nc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Oc:case Fc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LS(t){switch(t){case gi:case hp:return{byteLength:1,components:1};case Xs:case pp:case Js:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case xr:case _u:case ui:return{byteLength:4,components:1};case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Op(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var US=`#ifdef USE_ALPHAHASH
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
}`,tt={alphahash_fragment:US,alphahash_pars_fragment:NS,alphamap_fragment:OS,alphamap_pars_fragment:FS,alphatest_fragment:BS,alphatest_pars_fragment:kS,aomap_fragment:zS,aomap_pars_fragment:HS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:$S,iridescence_fragment:qS,bumpmap_pars_fragment:jS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:JS,color_fragment:QS,color_pars_fragment:ey,color_pars_vertex:ty,color_vertex:ny,common:iy,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ay,emissivemap_fragment:ly,emissivemap_pars_fragment:cy,colorspace_fragment:uy,colorspace_pars_fragment:fy,envmap_fragment:dy,envmap_common_pars_fragment:hy,envmap_pars_fragment:py,envmap_pars_vertex:my,envmap_physical_pars_fragment:wy,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:xy,fog_pars_fragment:Sy,gradientmap_pars_fragment:yy,lightmap_pars_fragment:Ey,lights_lambert_fragment:My,lights_lambert_pars_fragment:by,lights_pars_begin:Ty,lights_toon_fragment:Ay,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:Py,lights_physical_fragment:Dy,lights_physical_pars_fragment:Ly,lights_fragment_begin:Iy,lights_fragment_maps:Uy,lights_fragment_end:Ny,logdepthbuf_fragment:Oy,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:ky,map_fragment:zy,map_pars_fragment:Hy,map_particle_fragment:Vy,map_particle_pars_fragment:Gy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:Xy,morphinstance_vertex:$y,morphcolor_vertex:qy,morphnormal_vertex:jy,morphtarget_pars_vertex:Yy,morphtarget_vertex:Ky,normal_fragment_begin:Zy,normal_fragment_maps:Jy,normal_pars_fragment:Qy,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:fE,dithering_pars_fragment:dE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:vE,skinbase_vertex:xE,skinning_pars_vertex:SE,skinning_vertex:yE,skinnormal_vertex:EE,specularmap_fragment:ME,specularmap_pars_fragment:bE,tonemapping_fragment:TE,tonemapping_pars_fragment:wE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:PE,uv_vertex:DE,worldpos_vertex:LE,background_vert:IE,background_frag:UE,backgroundCube_vert:NE,backgroundCube_frag:OE,cube_vert:FE,cube_frag:BE,depth_vert:kE,depth_frag:zE,distanceRGBA_vert:HE,distanceRGBA_frag:VE,equirect_vert:GE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:$E,meshbasic_vert:qE,meshbasic_frag:jE,meshlambert_vert:YE,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:JE,meshnormal_vert:QE,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:oM,points_vert:aM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:fM,sprite_frag:dM},De={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},qn={basic:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new _t(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([De.points,De.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([De.common,De.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([De.sprite,De.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Jt([De.common,De.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Jt([De.lights,De.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};qn.physical={uniforms:Jt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Io={r:0,b:0,g:0},rr=new _i,hM=new Lt;function pM(t,e,n,i,r,s,o){const a=new _t(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?n:e).get(E)),E}function _(w){let E=!1;const L=g(w);L===null?p(a,l):L&&L.isColor&&(p(L,1),E=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(w,E){const L=g(E);L&&(L.isCubeTexture||L.mapping===Da)?(u===void 0&&(u=new di(new io(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:os(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rr.copy(E.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(rr)),u.material.toneMapped=ft.getTransfer(L.colorSpace)!==xt,(f!==L||d!==L.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,h=t.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new di(new Ia(2,2),new vi({name:"BackgroundMaterial",uniforms:os(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ft.getTransfer(L.colorSpace)!==xt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,h=t.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,E){w.getRGB(Io,Pp(t)),i.buffers.color.setClear(Io.r,Io.g,Io.b,E,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:m,dispose:y}}function mM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,D,k,H,q){let de=!1;const Z=f(H,k,D);s!==Z&&(s=Z,c(s.object)),de=h(S,H,k,q),de&&g(S,H,k,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(de||o)&&(o=!1,E(S,D,k,H),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,D,k){const H=k.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let de=q[D.id];de===void 0&&(de={},q[D.id]=de);let Z=de[H];return Z===void 0&&(Z=d(l()),de[H]=Z),Z}function d(S){const D=[],k=[],H=[];for(let q=0;q<n;q++)D[q]=0,k[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:S,attributes:{},index:null}}function h(S,D,k,H){const q=s.attributes,de=D.attributes;let Z=0;const fe=k.getAttributes();for(const V in fe)if(fe[V].location>=0){const Pe=q[V];let Fe=de[V];if(Fe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Fe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Fe=S.instanceColor)),Pe===void 0||Pe.attribute!==Fe||Fe&&Pe.data!==Fe.data)return!0;Z++}return s.attributesNum!==Z||s.index!==H}function g(S,D,k,H){const q={},de=D.attributes;let Z=0;const fe=k.getAttributes();for(const V in fe)if(fe[V].location>=0){let Pe=de[V];Pe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Pe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Pe=S.instanceColor));const Fe={};Fe.attribute=Pe,Pe&&Pe.data&&(Fe.data=Pe.data),q[V]=Fe,Z++}s.attributes=q,s.attributesNum=Z,s.index=H}function _(){const S=s.newAttributes;for(let D=0,k=S.length;D<k;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const k=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;k[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),q[S]!==D&&(t.vertexAttribDivisor(S,D),q[S]=D)}function y(){const S=s.newAttributes,D=s.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==S[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function w(S,D,k,H,q,de,Z){Z===!0?t.vertexAttribIPointer(S,D,k,q,de):t.vertexAttribPointer(S,D,k,H,q,de)}function E(S,D,k,H){_();const q=H.attributes,de=k.getAttributes(),Z=D.defaultAttributeValues;for(const fe in de){const V=de[fe];if(V.location>=0){let Te=q[fe];if(Te===void 0&&(fe==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),fe==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor)),Te!==void 0){const Pe=Te.normalized,Fe=Te.itemSize,Ve=e.get(Te);if(Ve===void 0)continue;const Je=Ve.buffer,le=Ve.type,Ee=Ve.bytesPerElement,Ce=le===t.INT||le===t.UNSIGNED_INT||Te.gpuType===_u;if(Te.isInterleavedBufferAttribute){const O=Te.data,Q=O.stride,ge=Te.offset;if(O.isInstancedInterleavedBuffer){for(let me=0;me<V.locationSize;me++)p(V.location+me,O.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let me=0;me<V.locationSize;me++)m(V.location+me);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let me=0;me<V.locationSize;me++)w(V.location+me,Fe/V.locationSize,le,Pe,Q*Ee,(ge+Fe/V.locationSize*me)*Ee,Ce)}else{if(Te.isInstancedBufferAttribute){for(let O=0;O<V.locationSize;O++)p(V.location+O,Te.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let O=0;O<V.locationSize;O++)m(V.location+O);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let O=0;O<V.locationSize;O++)w(V.location+O,Fe/V.locationSize,le,Pe,Fe*Ee,Fe/V.locationSize*O*Ee,Ce)}}else if(Z!==void 0){const Pe=Z[fe];if(Pe!==void 0)switch(Pe.length){case 2:t.vertexAttrib2fv(V.location,Pe);break;case 3:t.vertexAttrib3fv(V.location,Pe);break;case 4:t.vertexAttrib4fv(V.location,Pe);break;default:t.vertexAttrib1fv(V.location,Pe)}}}}y()}function L(){F();for(const S in i){const D=i[S];for(const k in D){const H=D[k];for(const q in H)u(H[q].object),delete H[q];delete D[k]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const k in D){const H=D[k];for(const q in H)u(H[q].object),delete H[q];delete D[k]}delete i[S.id]}function P(S){for(const D in i){const k=i[D];if(k[S.id]===void 0)continue;const H=k[S.id];for(const q in H)u(H[q].object),delete H[q];delete k[S.id]}}function F(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function gM(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _M(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Un&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==gi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ui&&!F)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:L,maxSamples:C}}function vM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ar,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,w=y*4;let E=p.clippingState||null;l.value=E,E=u(g,d,w,h);for(let L=0;L!==w;++L)E[L]=n[L];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,E=h;w!==_;++w,E+=4)o.copy(f[w]).applyMatrix4(y,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function xM(t){let e=new WeakMap;function n(o,a){return a===lc?o.mapping=is:a===cc&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lc||a===cc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Xr=4,Qf=[.125,.215,.35,.446,.526,.582],fr=20,Cl=new Np,ed=new _t;let Pl=null,Dl=0,Ll=0,Il=!1;const lr=(1+Math.sqrt(5))/2,Vr=1/lr,td=[new K(-lr,Vr,0),new K(lr,Vr,0),new K(-Vr,0,lr),new K(Vr,0,lr),new K(0,lr,-Vr),new K(0,lr,Vr),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],SM=new K;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=SM}=s;Pl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Dl,Ll),this._renderer.xr.enabled=Il,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Js,format:Un,colorSpace:ss,depthBuffer:!1},r=id(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yM(s)),this._blurMaterial=EM(s,e,n)}return r}_compileMaterial(e){const n=new di(this._lodPlanes[0],e);this._renderer.compile(n,Cl)}_sceneToCubeUV(e,n,i,r,s){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(ed),f.toneMapping=Hi,f.autoClear=!1;const g=new Ap({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),_=new di(new io,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(ed),m=!0);for(let y=0;y<6;y++){const w=y%3;w===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):w===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const E=this._cubeSize;Uo(r,w*E,y>2?E:0,E,E),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Cl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=td[(r-s-1)%td.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new di(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*fr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const p=[];let y=0;for(let P=0;P<fr;++P){const F=P/_,T=Math.exp(-F*F/2);p.push(T),P===0?y+=T:P<m&&(y+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const E=this._sizeLods[r],L=3*E*(r>w-Xr?r-w+Xr:0),C=4*(this._cubeSize-E);Uo(n,L,C,3*E,2*E),l.setRenderTarget(n),l.render(f,Cl)}}function yM(t){const e=[],n=[],i=[];let r=t;const s=t-Xr+1+Qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xr?l=Qf[o-t+Xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),w=new Float32Array(m*g*h),E=new Float32Array(p*g*h);for(let C=0;C<h;C++){const P=C%3*2/3-1,F=C>2?0:-1,T=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];y.set(T,_*g*C),w.set(d,m*g*C);const S=[C,C,C,C,C,C];E.set(S,p*g*C)}const L=new Si;L.setAttribute("position",new Ut(y,_)),L.setAttribute("uv",new Ut(w,m)),L.setAttribute("faceIndex",new Ut(E,p)),e.push(L),r>Xr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function id(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EM(t,e,n){const i=new Float32Array(fr),r=new K(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function rd(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function sd(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}function MM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lc||l===cc,u=l===is||l===rs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new nd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new nd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Jr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TM(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let w=0,E=y.length;w<E;w+=3){const L=y[w+0],C=y[w+1],P=y[w+2];d.push(L,C,C,P,P,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let w=0,E=y.length/3-1;w<E;w+=3){const L=w+0,C=w+1,P=w+2;d.push(L,C,C,P,P,L)}}else return;const m=new(Ep(d)?Cp:Rp)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wM(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function AM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RM(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let w=0;h===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let E=a.attributes.position.count*w,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*L*4*f),P=new Mp(C,E,L,f);P.type=ui,P.needsUpdate=!0;const F=w*4;for(let S=0;S<f;S++){const D=m[S],k=p[S],H=y[S],q=E*L*4*S;for(let de=0;de<D.count;de++){const Z=de*F;h===!0&&(r.fromBufferAttribute(D,de),C[q+Z+0]=r.x,C[q+Z+1]=r.y,C[q+Z+2]=r.z,C[q+Z+3]=0),g===!0&&(r.fromBufferAttribute(k,de),C[q+Z+4]=r.x,C[q+Z+5]=r.y,C[q+Z+6]=r.z,C[q+Z+7]=0),_===!0&&(r.fromBufferAttribute(H,de),C[q+Z+8]=r.x,C[q+Z+9]=r.y,C[q+Z+10]=r.z,C[q+Z+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new pt(E,L)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function CM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Fp=new cn,od=new Up(1,1),Bp=new Mp,kp=new rS,zp=new Lp,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),fd=new Float32Array(4);function ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ua(t,e){let n=ld[e];n===void 0&&(n=new Int32Array(e),ld[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function LM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function IM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function UM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;fd.set(i),t.uniformMatrix2fv(this.addr,!1,fd),Ft(n,i)}}function NM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;ud.set(i),t.uniformMatrix3fv(this.addr,!1,ud),Ft(n,i)}}function OM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ot(n,i))return;cd.set(i),t.uniformMatrix4fv(this.addr,!1,cd),Ft(n,i)}}function FM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function kM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function zM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function HM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function GM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function WM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function XM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(od.compareFunction=yp,s=od):s=Fp,n.setTexture2D(e||s,r)}function $M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kp,r)}function qM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zp,r)}function jM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bp,r)}function YM(t){switch(t){case 5126:return PM;case 35664:return DM;case 35665:return LM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return kM;case 35669:case 35673:return zM;case 5125:return HM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return jM}}function KM(t,e){t.uniform1fv(this.addr,e)}function ZM(t,e){const n=ls(e,this.size,2);t.uniform2fv(this.addr,n)}function JM(t,e){const n=ls(e,this.size,3);t.uniform3fv(this.addr,n)}function QM(t,e){const n=ls(e,this.size,4);t.uniform4fv(this.addr,n)}function eb(t,e){const n=ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tb(t,e){const n=ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nb(t,e){const n=ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ib(t,e){t.uniform1iv(this.addr,e)}function rb(t,e){t.uniform2iv(this.addr,e)}function sb(t,e){t.uniform3iv(this.addr,e)}function ob(t,e){t.uniform4iv(this.addr,e)}function ab(t,e){t.uniform1uiv(this.addr,e)}function lb(t,e){t.uniform2uiv(this.addr,e)}function cb(t,e){t.uniform3uiv(this.addr,e)}function ub(t,e){t.uniform4uiv(this.addr,e)}function fb(t,e,n){const i=this.cache,r=e.length,s=Ua(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fp,s[o])}function db(t,e,n){const i=this.cache,r=e.length,s=Ua(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||kp,s[o])}function hb(t,e,n){const i=this.cache,r=e.length,s=Ua(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zp,s[o])}function pb(t,e,n){const i=this.cache,r=e.length,s=Ua(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Bp,s[o])}function mb(t){switch(t){case 5126:return KM;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return pb}}class gb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YM(n.type)}}class _b{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mb(n.type)}}class vb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ul=/(\w+)(\])?(\[|\.)?/g;function dd(t,e){t.seq.push(e),t.map[e.id]=e}function xb(t,e,n){const i=t.name,r=i.length;for(Ul.lastIndex=0;;){const s=Ul.exec(i),o=Ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(n,c===void 0?new gb(a,t,e):new _b(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new vb(a),dd(n,f)),n=f}}}class qo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);xb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function hd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Sb=37297;let yb=0;function Eb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const pd=new et;function Mb(t){ft._getMatrix(pd,ft.workingColorSpace,t);const e=`mat3( ${pd.elements.map(n=>n.toFixed(4))} )`;switch(ft.getTransfer(t)){case oa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function md(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Eb(t.getShaderSource(e),o)}else return r}function bb(t,e){const n=Mb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Tb(t,e){let n;switch(e){case Cx:n="Linear";break;case Px:n="Reinhard";break;case Dx:n="Cineon";break;case Lx:n="ACESFilmic";break;case Ux:n="AgX";break;case Nx:n="Neutral";break;case Ix:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const No=new K;function wb(){ft.getLuminanceCoefficients(No);const t=No.x.toFixed(4),e=No.y.toFixed(4),n=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ab(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Rb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Cb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ts(t){return t!==""}function gd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace(Pb,Lb)}const Db=new Map;function Lb(t,e){let n=tt[e];if(n===void 0){const i=Db.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(n)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(t){return t.replace(Ib,Ub)}function Ub(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Nb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Ob(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Bb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case Ax:e="ENVMAP_BLENDING_MIX";break;case Rx:e="ENVMAP_BLENDING_ADD";break}return e}function kb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Nb(n),c=Ob(n),u=Fb(n),f=Bb(n),d=kb(n),h=Ab(n),g=Rb(s),_=r.createProgram();let m,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?tt.tonemapping_pars_fragment:"",n.toneMapping!==Hi?Tb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,bb("linearToOutputTexel",n.outputColorSpace),wb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),o=zc(o),o=gd(o,n),o=_d(o,n),a=zc(a),a=gd(a,n),a=_d(a,n),o=vd(o),a=vd(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+o,E=y+p+a,L=hd(r,r.VERTEX_SHADER,w),C=hd(r,r.FRAGMENT_SHADER,E);r.attachShader(_,L),r.attachShader(_,C),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(C).trim();let de=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(de=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,L,C);else{const fe=md(r,L,"vertex"),V=md(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+k+`
`+fe+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||q==="")&&(Z=!1);Z&&(D.diagnostics={runnable:de,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}r.deleteShader(L),r.deleteShader(C),F=new qo(r,_),T=Cb(r,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,Sb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=C,this}let Hb=0;class Vb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gb(e),n.set(e,i)),i}}class Gb{constructor(e){this.id=Hb++,this.code=e,this.usedTimes=0}}function Wb(t,e,n,i,r,s,o){const a=new Tp,l=new Vb,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,D,k,H){const q=k.fog,de=H.geometry,Z=T.isMeshStandardMaterial?k.environment:null,fe=(T.isMeshStandardMaterial?n:e).get(T.envMap||Z),V=fe&&fe.mapping===Da?fe.image.height:null,Te=g[T.type];T.precision!==null&&(h=r.getMaxPrecision(T.precision),h!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",h,"instead."));const Pe=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Fe=Pe!==void 0?Pe.length:0;let Ve=0;de.morphAttributes.position!==void 0&&(Ve=1),de.morphAttributes.normal!==void 0&&(Ve=2),de.morphAttributes.color!==void 0&&(Ve=3);let Je,le,Ee,Ce;if(Te){const nt=qn[Te];Je=nt.vertexShader,le=nt.fragmentShader}else Je=T.vertexShader,le=T.fragmentShader,l.update(T),Ee=l.getVertexShaderID(T),Ce=l.getFragmentShaderID(T);const O=t.getRenderTarget(),Q=t.state.buffers.depth.getReversed(),ge=H.isInstancedMesh===!0,me=H.isBatchedMesh===!0,Ge=!!T.map,A=!!T.matcap,R=!!fe,x=!!T.aoMap,se=!!T.lightMap,J=!!T.bumpMap,Y=!!T.normalMap,ie=!!T.displacementMap,pe=!!T.emissiveMap,ne=!!T.metalnessMap,ee=!!T.roughnessMap,Le=T.anisotropy>0,b=T.clearcoat>0,v=T.dispersion>0,U=T.iridescence>0,W=T.sheen>0,re=T.transmission>0,G=Le&&!!T.anisotropyMap,ve=b&&!!T.clearcoatMap,ue=b&&!!T.clearcoatNormalMap,_e=b&&!!T.clearcoatRoughnessMap,ye=U&&!!T.iridescenceMap,ae=U&&!!T.iridescenceThicknessMap,Ae=W&&!!T.sheenColorMap,Ie=W&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,we=!!T.specularColorMap,He=!!T.specularIntensityMap,I=re&&!!T.transmissionMap,Re=re&&!!T.thicknessMap,xe=!!T.gradientMap,Se=!!T.alphaMap,he=T.alphaTest>0,j=!!T.alphaHash,Me=!!T.extensions;let ke=Hi;T.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ke=t.toneMapping);const it={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:Je,fragmentShader:le,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:Ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:h,batching:me,batchingColor:me&&H._colorsTexture!==null,instancing:ge,instancingColor:ge&&H.instanceColor!==null,instancingMorph:ge&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ss,alphaToCoverage:!!T.alphaToCoverage,map:Ge,matcap:A,envMap:R,envMapMode:R&&fe.mapping,envMapCubeUVHeight:V,aoMap:x,lightMap:se,bumpMap:J,normalMap:Y,displacementMap:d&&ie,emissiveMap:pe,normalMapObjectSpace:Y&&T.normalMapType===zx,normalMapTangentSpace:Y&&T.normalMapType===kx,metalnessMap:ne,roughnessMap:ee,anisotropy:Le,anisotropyMap:G,clearcoat:b,clearcoatMap:ve,clearcoatNormalMap:ue,clearcoatRoughnessMap:_e,dispersion:v,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:ae,sheen:W,sheenColorMap:Ae,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:we,specularIntensityMap:He,transmission:re,transmissionMap:I,thicknessMap:Re,gradientMap:xe,opaque:T.transparent===!1&&T.blending===Zr&&T.alphaToCoverage===!1,alphaMap:Se,alphaTest:he,alphaHash:j,combine:T.combine,mapUv:Ge&&_(T.map.channel),aoMapUv:x&&_(T.aoMap.channel),lightMapUv:se&&_(T.lightMap.channel),bumpMapUv:J&&_(T.bumpMap.channel),normalMapUv:Y&&_(T.normalMap.channel),displacementMapUv:ie&&_(T.displacementMap.channel),emissiveMapUv:pe&&_(T.emissiveMap.channel),metalnessMapUv:ne&&_(T.metalnessMap.channel),roughnessMapUv:ee&&_(T.roughnessMap.channel),anisotropyMapUv:G&&_(T.anisotropyMap.channel),clearcoatMapUv:ve&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(T.sheenRoughnessMap.channel),specularMapUv:Ne&&_(T.specularMap.channel),specularColorMapUv:we&&_(T.specularColorMap.channel),specularIntensityMapUv:He&&_(T.specularIntensityMap.channel),transmissionMapUv:I&&_(T.transmissionMap.channel),thicknessMapUv:Re&&_(T.thicknessMap.channel),alphaMapUv:Se&&_(T.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Y||Le),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!de.attributes.uv&&(Ge||Se),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Q,skinning:H.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:Ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ge&&T.map.isVideoTexture===!0&&ft.getTransfer(T.map.colorSpace)===xt,decodeVideoTextureEmissive:pe&&T.emissiveMap.isVideoTexture===!0&&ft.getTransfer(T.emissiveMap.colorSpace)===xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ci,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Me&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&T.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(y(S,T),w(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function y(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function w(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const S=g[T.type];let D;if(S){const k=qn[S];D=_S.clone(k.uniforms)}else D=T.uniforms;return D}function L(T,S){let D;for(let k=0,H=u.length;k<H;k++){const q=u[k];if(q.cacheKey===S){D=q,++D.usedTimes;break}}return D===void 0&&(D=new zb(t,S,T,s),u.push(D)),D}function C(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:F}}function Xb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function $b(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||$b),i.length>1&&i.sort(d||Sd),r.length>1&&r.sort(d||Sd)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yd,t.set(i,[o])):r>=s.length?(o=new yd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function jb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new _t};break;case"SpotLight":n={position:new K,direction:new K,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new _t,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":n={color:new _t,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function Yb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Kb=0;function Zb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Jb(t){const e=new jb,n=Yb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Lt,o=new Lt;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,w=0,E=0,L=0,C=0,P=0;c.sort(Zb);for(let T=0,S=c.length;T<S;T++){const D=c[T],k=D.color,H=D.intensity,q=D.distance,de=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*H,f+=k.g*H,d+=k.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);P++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const fe=D.shadow,V=n.get(D);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=de,i.directionalShadowMatrix[h]=D.shadow.matrix,y++}i.directional[h]=Z,h++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(k).multiplyScalar(H),Z.distance=q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[_]=Z;const fe=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,fe.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=fe.matrix,D.castShadow){const V=n.get(D);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=de,E++}_++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(k).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=Z,m++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const fe=D.shadow,V=n.get(D);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,V.shadowCameraNear=fe.camera.near,V.shadowCameraFar=fe.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=de,i.pointShadowMatrix[g]=D.shadow.matrix,w++}i.point[g]=Z,g++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[p]=Z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==h||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==y||F.numPointShadows!==w||F.numSpotShadows!==E||F.numSpotMaps!==L||F.numLightProbes!==P)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,F.directionalLength=h,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=y,F.numPointShadows=w,F.numSpotShadows=E,F.numSpotMaps=L,F.numLightProbes=P,i.version=Kb++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const w=c[p];if(w.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(w.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(w.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ed(t){const e=new Jb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ed(t),e.set(r,[a])):s>=o.length?(a=new Ed(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const e1=`void main() {
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
}`;function n1(t,e,n){let i=new Ip;const r=new pt,s=new pt,o=new Dt,a=new CS({depthPacking:Bx}),l=new PS,c={},u=n.maxTextureSize,f={[Wi]:ln,[ln]:Wi,[ci]:ci},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Si;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new di(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(C,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(zi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==si&&this.type===si,q=p===si&&this.type!==si;for(let de=0,Z=C.length;de<Z;de++){const fe=C[de],V=fe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const Te=V.getFrameExtents();if(r.multiply(Te),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Te.x),r.x=s.x*Te.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Te.y),r.y=s.y*Te.y,V.mapSize.y=s.y)),V.map===null||H===!0||q===!0){const Fe=this.type!==si?{minFilter:On,magFilter:On}:{};V.map!==null&&V.map.dispose(),V.map=new Sr(r.x,r.y,Fe),V.map.texture.name=fe.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();const Pe=V.getViewportCount();for(let Fe=0;Fe<Pe;Fe++){const Ve=V.getViewport(Fe);o.set(s.x*Ve.x,s.y*Ve.y,s.x*Ve.z,s.y*Ve.w),k.viewport(o),V.updateMatrices(fe,Fe),i=V.getFrustum(),E(P,F,V.camera,fe,this.type)}V.isPointLightShadow!==!0&&this.type===si&&y(V,F),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,D)};function y(C,P){const F=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,h.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Sr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(P,null,F,d,_,null),h.uniforms.shadow_pass.value=C.mapPass.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(P,null,F,h,_,null)}function w(C,P,F,T){let S=null;const D=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=F.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const k=S.uuid,H=P.uuid;let q=c[k];q===void 0&&(q={},c[k]=q);let de=q[H];de===void 0&&(de=S.clone(),q[H]=de,P.addEventListener("dispose",L)),S=de}if(S.visible=P.visible,S.wireframe=P.wireframe,T===si?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:f[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=F}return S}function E(C,P,F,T,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===si)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const H=e.update(C),q=C.material;if(Array.isArray(q)){const de=H.groups;for(let Z=0,fe=de.length;Z<fe;Z++){const V=de[Z],Te=q[V.materialIndex];if(Te&&Te.visible){const Pe=w(C,Te,T,S);C.onBeforeShadow(t,C,P,F,H,Pe,V),t.renderBufferDirect(F,null,H,Pe,C,V),C.onAfterShadow(t,C,P,F,H,Pe,V)}}}else if(q.visible){const de=w(C,q,T,S);C.onBeforeShadow(t,C,P,F,H,de,null),t.renderBufferDirect(F,null,H,de,C,null),C.onAfterShadow(t,C,P,F,H,de,null)}}const k=C.children;for(let H=0,q=k.length;H<q;H++)E(k[H],P,F,T,S)}function L(C){C.target.removeEventListener("dispose",L);for(const F in c){const T=c[F],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const i1={[tc]:nc,[ic]:oc,[rc]:ac,[ns]:sc,[nc]:tc,[oc]:ic,[ac]:rc,[sc]:ns};function r1(t,e){function n(){let I=!1;const Re=new Dt;let xe=null;const Se=new Dt(0,0,0,0);return{setMask:function(he){xe!==he&&!I&&(t.colorMask(he,he,he,he),xe=he)},setLocked:function(he){I=he},setClear:function(he,j,Me,ke,it){it===!0&&(he*=ke,j*=ke,Me*=ke),Re.set(he,j,Me,ke),Se.equals(Re)===!1&&(t.clearColor(he,j,Me,ke),Se.copy(Re))},reset:function(){I=!1,xe=null,Se.set(-1,0,0,0)}}}function i(){let I=!1,Re=!1,xe=null,Se=null,he=null;return{setReversed:function(j){if(Re!==j){const Me=e.get("EXT_clip_control");j?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),Re=j;const ke=he;he=null,this.setClear(ke)}},getReversed:function(){return Re},setTest:function(j){j?O(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(j){xe!==j&&!I&&(t.depthMask(j),xe=j)},setFunc:function(j){if(Re&&(j=i1[j]),Se!==j){switch(j){case tc:t.depthFunc(t.NEVER);break;case nc:t.depthFunc(t.ALWAYS);break;case ic:t.depthFunc(t.LESS);break;case ns:t.depthFunc(t.LEQUAL);break;case rc:t.depthFunc(t.EQUAL);break;case sc:t.depthFunc(t.GEQUAL);break;case oc:t.depthFunc(t.GREATER);break;case ac:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=j}},setLocked:function(j){I=j},setClear:function(j){he!==j&&(Re&&(j=1-j),t.clearDepth(j),he=j)},reset:function(){I=!1,xe=null,Se=null,he=null,Re=!1}}}function r(){let I=!1,Re=null,xe=null,Se=null,he=null,j=null,Me=null,ke=null,it=null;return{setTest:function(nt){I||(nt?O(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(nt){Re!==nt&&!I&&(t.stencilMask(nt),Re=nt)},setFunc:function(nt,zt,tn){(xe!==nt||Se!==zt||he!==tn)&&(t.stencilFunc(nt,zt,tn),xe=nt,Se=zt,he=tn)},setOp:function(nt,zt,tn){(j!==nt||Me!==zt||ke!==tn)&&(t.stencilOp(nt,zt,tn),j=nt,Me=zt,ke=tn)},setLocked:function(nt){I=nt},setClear:function(nt){it!==nt&&(t.clearStencil(nt),it=nt)},reset:function(){I=!1,Re=null,xe=null,Se=null,he=null,j=null,Me=null,ke=null,it=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,w=null,E=null,L=null,C=null,P=new _t(0,0,0),F=0,T=!1,S=null,D=null,k=null,H=null,q=null;const de=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,fe=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=fe>=1):V.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=fe>=2);let Te=null,Pe={};const Fe=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),Je=new Dt().fromArray(Fe),le=new Dt().fromArray(Ve);function Ee(I,Re,xe,Se){const he=new Uint8Array(4),j=t.createTexture();t.bindTexture(I,j),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<xe;Me++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(Re+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return j}const Ce={};Ce[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),Ce[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ce[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(t.DEPTH_TEST),o.setFunc(ns),J(!1),Y(Af),O(t.CULL_FACE),x(zi);function O(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function Q(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function ge(I,Re){return f[I]!==Re?(t.bindFramebuffer(I,Re),f[I]=Re,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Re),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function me(I,Re){let xe=h,Se=!1;if(I){xe=d.get(Re),xe===void 0&&(xe=[],d.set(Re,xe));const he=I.textures;if(xe.length!==he.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let j=0,Me=he.length;j<Me;j++)xe[j]=t.COLOR_ATTACHMENT0+j;xe.length=he.length,Se=!0}}else xe[0]!==t.BACK&&(xe[0]=t.BACK,Se=!0);Se&&t.drawBuffers(xe)}function Ge(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const A={[ur]:t.FUNC_ADD,[ux]:t.FUNC_SUBTRACT,[fx]:t.FUNC_REVERSE_SUBTRACT};A[dx]=t.MIN,A[hx]=t.MAX;const R={[px]:t.ZERO,[mx]:t.ONE,[gx]:t.SRC_COLOR,[Ql]:t.SRC_ALPHA,[Ex]:t.SRC_ALPHA_SATURATE,[Sx]:t.DST_COLOR,[vx]:t.DST_ALPHA,[_x]:t.ONE_MINUS_SRC_COLOR,[ec]:t.ONE_MINUS_SRC_ALPHA,[yx]:t.ONE_MINUS_DST_COLOR,[xx]:t.ONE_MINUS_DST_ALPHA,[Mx]:t.CONSTANT_COLOR,[bx]:t.ONE_MINUS_CONSTANT_COLOR,[Tx]:t.CONSTANT_ALPHA,[wx]:t.ONE_MINUS_CONSTANT_ALPHA};function x(I,Re,xe,Se,he,j,Me,ke,it,nt){if(I===zi){_===!0&&(Q(t.BLEND),_=!1);return}if(_===!1&&(O(t.BLEND),_=!0),I!==cx){if(I!==m||nt!==T){if((p!==ur||E!==ur)&&(t.blendEquation(t.FUNC_ADD),p=ur,E=ur),nt)switch(I){case Zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jl:t.blendFunc(t.ONE,t.ONE);break;case Rf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,w=null,L=null,C=null,P.set(0,0,0),F=0,m=I,T=nt}return}he=he||Re,j=j||xe,Me=Me||Se,(Re!==p||he!==E)&&(t.blendEquationSeparate(A[Re],A[he]),p=Re,E=he),(xe!==y||Se!==w||j!==L||Me!==C)&&(t.blendFuncSeparate(R[xe],R[Se],R[j],R[Me]),y=xe,w=Se,L=j,C=Me),(ke.equals(P)===!1||it!==F)&&(t.blendColor(ke.r,ke.g,ke.b,it),P.copy(ke),F=it),m=I,T=!1}function se(I,Re){I.side===ci?Q(t.CULL_FACE):O(t.CULL_FACE);let xe=I.side===ln;Re&&(xe=!xe),J(xe),I.blending===Zr&&I.transparent===!1?x(zi):x(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Se=I.stencilWrite;a.setTest(Se),Se&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function Y(I){I!==ox?(O(t.CULL_FACE),I!==D&&(I===Af?t.cullFace(t.BACK):I===ax?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),D=I}function ie(I){I!==k&&(Z&&t.lineWidth(I),k=I)}function pe(I,Re,xe){I?(O(t.POLYGON_OFFSET_FILL),(H!==Re||q!==xe)&&(t.polygonOffset(Re,xe),H=Re,q=xe)):Q(t.POLYGON_OFFSET_FILL)}function ne(I){I?O(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function ee(I){I===void 0&&(I=t.TEXTURE0+de-1),Te!==I&&(t.activeTexture(I),Te=I)}function Le(I,Re,xe){xe===void 0&&(Te===null?xe=t.TEXTURE0+de-1:xe=Te);let Se=Pe[xe];Se===void 0&&(Se={type:void 0,texture:void 0},Pe[xe]=Se),(Se.type!==I||Se.texture!==Re)&&(Te!==xe&&(t.activeTexture(xe),Te=xe),t.bindTexture(I,Re||Ce[I]),Se.type=I,Se.texture=Re)}function b(){const I=Pe[Te];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{t.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{t.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(I){Je.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function Ie(I){le.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),le.copy(I))}function Ne(I,Re){let xe=c.get(Re);xe===void 0&&(xe=new WeakMap,c.set(Re,xe));let Se=xe.get(I);Se===void 0&&(Se=t.getUniformBlockIndex(Re,I.name),xe.set(I,Se))}function we(I,Re){const Se=c.get(Re).get(I);l.get(Re)!==Se&&(t.uniformBlockBinding(Re,Se,I.__bindingPointIndex),l.set(Re,Se))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Te=null,Pe={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,w=null,E=null,L=null,C=null,P=new _t(0,0,0),F=0,T=!1,S=null,D=null,k=null,H=null,q=null,Je.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:Q,bindFramebuffer:ge,drawBuffers:me,useProgram:Ge,setBlending:x,setMaterial:se,setFlipSided:J,setCullFace:Y,setLineWidth:ie,setPolygonOffset:pe,setScissorTest:ne,activeTexture:ee,bindTexture:Le,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:ye,texImage3D:ae,updateUBOMapping:Ne,uniformBlockBinding:we,texStorage2D:ue,texStorage3D:_e,texSubImage2D:W,texSubImage3D:re,compressedTexSubImage2D:G,compressedTexSubImage3D:ve,scissor:Ae,viewport:Ie,reset:He}}function s1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return h?new OffscreenCanvas(b,v):la("canvas")}function _(b,v,U){let W=1;const re=Le(b);if((re.width>U||re.height>U)&&(W=U/Math.max(re.width,re.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(W*re.width),ve=Math.floor(W*re.height);f===void 0&&(f=g(G,ve));const ue=v?g(G,ve):f;return ue.width=G,ue.height=ve,ue.getContext("2d").drawImage(b,0,0,G,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+G+"x"+ve+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){t.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(b,v,U,W,re=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=v;if(v===t.RED&&(U===t.FLOAT&&(G=t.R32F),U===t.HALF_FLOAT&&(G=t.R16F),U===t.UNSIGNED_BYTE&&(G=t.R8)),v===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.R8UI),U===t.UNSIGNED_SHORT&&(G=t.R16UI),U===t.UNSIGNED_INT&&(G=t.R32UI),U===t.BYTE&&(G=t.R8I),U===t.SHORT&&(G=t.R16I),U===t.INT&&(G=t.R32I)),v===t.RG&&(U===t.FLOAT&&(G=t.RG32F),U===t.HALF_FLOAT&&(G=t.RG16F),U===t.UNSIGNED_BYTE&&(G=t.RG8)),v===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RG8UI),U===t.UNSIGNED_SHORT&&(G=t.RG16UI),U===t.UNSIGNED_INT&&(G=t.RG32UI),U===t.BYTE&&(G=t.RG8I),U===t.SHORT&&(G=t.RG16I),U===t.INT&&(G=t.RG32I)),v===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGB8UI),U===t.UNSIGNED_SHORT&&(G=t.RGB16UI),U===t.UNSIGNED_INT&&(G=t.RGB32UI),U===t.BYTE&&(G=t.RGB8I),U===t.SHORT&&(G=t.RGB16I),U===t.INT&&(G=t.RGB32I)),v===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(G=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(G=t.RGBA16UI),U===t.UNSIGNED_INT&&(G=t.RGBA32UI),U===t.BYTE&&(G=t.RGBA8I),U===t.SHORT&&(G=t.RGBA16I),U===t.INT&&(G=t.RGBA32I)),v===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(G=t.RGB9_E5),v===t.RGBA){const ve=re?oa:ft.getTransfer(W);U===t.FLOAT&&(G=t.RGBA32F),U===t.HALF_FLOAT&&(G=t.RGBA16F),U===t.UNSIGNED_BYTE&&(G=ve===xt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(b,v){let U;return b?v===null||v===xr||v===$s?U=t.DEPTH24_STENCIL8:v===ui?U=t.DEPTH32F_STENCIL8:v===Xs&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xr||v===$s?U=t.DEPTH_COMPONENT24:v===ui?U=t.DEPTH_COMPONENT32F:v===Xs&&(U=t.DEPTH_COMPONENT16),U}function L(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==On&&b.minFilter!==jn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){const v=b.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&u.delete(v)}function P(b){const v=b.target;v.removeEventListener("dispose",P),S(v)}function F(b){const v=i.get(b);if(v.__webglInit===void 0)return;const U=b.source,W=d.get(U);if(W){const re=W[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&T(b),Object.keys(W).length===0&&d.delete(U)}i.remove(b)}function T(b){const v=i.get(b);t.deleteTexture(v.__webglTexture);const U=b.source,W=d.get(U);delete W[v.__cacheKey],o.memory.textures--}function S(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let re=0;re<v.__webglFramebuffer[W].length;re++)t.deleteFramebuffer(v.__webglFramebuffer[W][re]);else t.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)t.deleteFramebuffer(v.__webglFramebuffer[W]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=b.textures;for(let W=0,re=U.length;W<re;W++){const G=i.get(U[W]);G.__webglTexture&&(t.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(U[W])}i.remove(b)}let D=0;function k(){D=0}function H(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function de(b,v){const U=i.get(b);if(b.isVideoTexture&&ne(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(U,b,v);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function Z(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Ce(U,b,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function fe(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){Ce(U,b,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function V(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){O(U,b,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const Te={[uc]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[fc]:t.MIRRORED_REPEAT},Pe={[On]:t.NEAREST,[Ox]:t.NEAREST_MIPMAP_NEAREST,[fo]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[rl]:t.LINEAR_MIPMAP_NEAREST,[hr]:t.LINEAR_MIPMAP_LINEAR},Fe={[Hx]:t.NEVER,[qx]:t.ALWAYS,[Vx]:t.LESS,[yp]:t.LEQUAL,[Gx]:t.EQUAL,[$x]:t.GEQUAL,[Wx]:t.GREATER,[Xx]:t.NOTEQUAL};function Ve(b,v){if(v.type===ui&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jn||v.magFilter===rl||v.magFilter===fo||v.magFilter===hr||v.minFilter===jn||v.minFilter===rl||v.minFilter===fo||v.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,Te[v.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,Te[v.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,Te[v.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,Pe[v.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Fe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===On||v.minFilter!==fo&&v.minFilter!==hr||v.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Je(b,v){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",C));const W=v.source;let re=d.get(W);re===void 0&&(re={},d.set(W,re));const G=q(v);if(G!==b.__cacheKey){re[G]===void 0&&(re[G]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),re[G].usedTimes++;const ve=re[b.__cacheKey];ve!==void 0&&(re[b.__cacheKey].usedTimes--,ve.usedTimes===0&&T(v)),b.__cacheKey=G,b.__webglTexture=re[G].texture}return U}function le(b,v,U){return Math.floor(Math.floor(b/U)/v)}function Ee(b,v,U,W){const G=b.updateRanges;if(G.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,U,W,v.data);else{G.sort((ae,Ae)=>ae.start-Ae.start);let ve=0;for(let ae=1;ae<G.length;ae++){const Ae=G[ve],Ie=G[ae],Ne=Ae.start+Ae.count,we=le(Ie.start,v.width,4),He=le(Ae.start,v.width,4);Ie.start<=Ne+1&&we===He&&le(Ie.start+Ie.count-1,v.width,4)===we?Ae.count=Math.max(Ae.count,Ie.start+Ie.count-Ae.start):(++ve,G[ve]=Ie)}G.length=ve+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),_e=t.getParameter(t.UNPACK_SKIP_PIXELS),ye=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ae=0,Ae=G.length;ae<Ae;ae++){const Ie=G[ae],Ne=Math.floor(Ie.start/4),we=Math.ceil(Ie.count/4),He=Ne%v.width,I=Math.floor(Ne/v.width),Re=we,xe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,He,I,Re,xe,U,W,v.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function Ce(b,v,U){let W=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=t.TEXTURE_3D);const re=Je(b,v),G=v.source;n.bindTexture(W,b.__webglTexture,t.TEXTURE0+U);const ve=i.get(G);if(G.version!==ve.__version||re===!0){n.activeTexture(t.TEXTURE0+U);const ue=ft.getPrimaries(ft.workingColorSpace),_e=v.colorSpace===Fi?null:ft.getPrimaries(v.colorSpace),ye=v.colorSpace===Fi||ue===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ae=_(v.image,!1,r.maxTextureSize);ae=ee(v,ae);const Ae=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type);let Ne=w(v.internalFormat,Ae,Ie,v.colorSpace,v.isVideoTexture);Ve(W,v);let we;const He=v.mipmaps,I=v.isVideoTexture!==!0,Re=ve.__version===void 0||re===!0,xe=G.dataReady,Se=L(v,ae);if(v.isDepthTexture)Ne=E(v.format===js,v.type),Re&&(I?n.texStorage2D(t.TEXTURE_2D,1,Ne,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ae.width,ae.height,0,Ae,Ie,null));else if(v.isDataTexture)if(He.length>0){I&&Re&&n.texStorage2D(t.TEXTURE_2D,Se,Ne,He[0].width,He[0].height);for(let he=0,j=He.length;he<j;he++)we=He[he],I?xe&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,we.width,we.height,Ae,Ie,we.data):n.texImage2D(t.TEXTURE_2D,he,Ne,we.width,we.height,0,Ae,Ie,we.data);v.generateMipmaps=!1}else I?(Re&&n.texStorage2D(t.TEXTURE_2D,Se,Ne,ae.width,ae.height),xe&&Ee(v,ae,Ae,Ie)):n.texImage2D(t.TEXTURE_2D,0,Ne,ae.width,ae.height,0,Ae,Ie,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ne,He[0].width,He[0].height,ae.depth);for(let he=0,j=He.length;he<j;he++)if(we=He[he],v.format!==Un)if(Ae!==null)if(I){if(xe)if(v.layerUpdates.size>0){const Me=Jf(we.width,we.height,v.format,v.type);for(const ke of v.layerUpdates){const it=we.data.subarray(ke*Me/we.data.BYTES_PER_ELEMENT,(ke+1)*Me/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,ke,we.width,we.height,1,Ae,it)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,ae.depth,Ae,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Ne,we.width,we.height,ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,ae.depth,Ae,Ie,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Ne,we.width,we.height,ae.depth,0,Ae,Ie,we.data)}else{I&&Re&&n.texStorage2D(t.TEXTURE_2D,Se,Ne,He[0].width,He[0].height);for(let he=0,j=He.length;he<j;he++)we=He[he],v.format!==Un?Ae!==null?I?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,we.width,we.height,Ae,we.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Ne,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?xe&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,we.width,we.height,Ae,Ie,we.data):n.texImage2D(t.TEXTURE_2D,he,Ne,we.width,we.height,0,Ae,Ie,we.data)}else if(v.isDataArrayTexture)if(I){if(Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ne,ae.width,ae.height,ae.depth),xe)if(v.layerUpdates.size>0){const he=Jf(ae.width,ae.height,v.format,v.type);for(const j of v.layerUpdates){const Me=ae.data.subarray(j*he/ae.data.BYTES_PER_ELEMENT,(j+1)*he/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,ae.width,ae.height,1,Ae,Ie,Me)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Ie,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ae.width,ae.height,ae.depth,0,Ae,Ie,ae.data);else if(v.isData3DTexture)I?(Re&&n.texStorage3D(t.TEXTURE_3D,Se,Ne,ae.width,ae.height,ae.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Ie,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ae.width,ae.height,ae.depth,0,Ae,Ie,ae.data);else if(v.isFramebufferTexture){if(Re)if(I)n.texStorage2D(t.TEXTURE_2D,Se,Ne,ae.width,ae.height);else{let he=ae.width,j=ae.height;for(let Me=0;Me<Se;Me++)n.texImage2D(t.TEXTURE_2D,Me,Ne,he,j,0,Ae,Ie,null),he>>=1,j>>=1}}else if(He.length>0){if(I&&Re){const he=Le(He[0]);n.texStorage2D(t.TEXTURE_2D,Se,Ne,he.width,he.height)}for(let he=0,j=He.length;he<j;he++)we=He[he],I?xe&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Ae,Ie,we):n.texImage2D(t.TEXTURE_2D,he,Ne,Ae,Ie,we);v.generateMipmaps=!1}else if(I){if(Re){const he=Le(ae);n.texStorage2D(t.TEXTURE_2D,Se,Ne,he.width,he.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Ie,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Ae,Ie,ae);m(v)&&p(W),ve.__version=G.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function O(b,v,U){if(v.image.length!==6)return;const W=Je(b,v),re=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const G=i.get(re);if(re.version!==G.__version||W===!0){n.activeTexture(t.TEXTURE0+U);const ve=ft.getPrimaries(ft.workingColorSpace),ue=v.colorSpace===Fi?null:ft.getPrimaries(v.colorSpace),_e=v.colorSpace===Fi||ve===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let j=0;j<6;j++)!ye&&!ae?Ae[j]=_(v.image[j],!0,r.maxCubemapSize):Ae[j]=ae?v.image[j].image:v.image[j],Ae[j]=ee(v,Ae[j]);const Ie=Ae[0],Ne=s.convert(v.format,v.colorSpace),we=s.convert(v.type),He=w(v.internalFormat,Ne,we,v.colorSpace),I=v.isVideoTexture!==!0,Re=G.__version===void 0||W===!0,xe=re.dataReady;let Se=L(v,Ie);Ve(t.TEXTURE_CUBE_MAP,v);let he;if(ye){I&&Re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,He,Ie.width,Ie.height);for(let j=0;j<6;j++){he=Ae[j].mipmaps;for(let Me=0;Me<he.length;Me++){const ke=he[Me];v.format!==Un?Ne!==null?I?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,ke.width,ke.height,Ne,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,He,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,0,0,ke.width,ke.height,Ne,we,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me,He,ke.width,ke.height,0,Ne,we,ke.data)}}}else{if(he=v.mipmaps,I&&Re){he.length>0&&Se++;const j=Le(Ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,He,j.width,j.height)}for(let j=0;j<6;j++)if(ae){I?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae[j].width,Ae[j].height,Ne,we,Ae[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,Ae[j].width,Ae[j].height,0,Ne,we,Ae[j].data);for(let Me=0;Me<he.length;Me++){const it=he[Me].image[j].image;I?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,it.width,it.height,Ne,we,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,He,it.width,it.height,0,Ne,we,it.data)}}else{I?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ne,we,Ae[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,He,Ne,we,Ae[j]);for(let Me=0;Me<he.length;Me++){const ke=he[Me];I?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,0,0,Ne,we,ke.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me+1,He,Ne,we,ke.image[j])}}}m(v)&&p(t.TEXTURE_CUBE_MAP),G.__version=re.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Q(b,v,U,W,re,G){const ve=s.convert(U.format,U.colorSpace),ue=s.convert(U.type),_e=w(U.internalFormat,ve,ue,U.colorSpace),ye=i.get(v),ae=i.get(U);if(ae.__renderTarget=v,!ye.__hasExternalTextures){const Ae=Math.max(1,v.width>>G),Ie=Math.max(1,v.height>>G);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,G,_e,Ae,Ie,v.depth,0,ve,ue,null):n.texImage2D(re,G,_e,Ae,Ie,0,ve,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),pe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,W,re,ae.__webglTexture,0,ie(v)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,W,re,ae.__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(b,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),v.depthBuffer){const W=v.depthTexture,re=W&&W.isDepthTexture?W.type:null,G=E(v.stencilBuffer,re),ve=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=ie(v);pe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,G,v.width,v.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,G,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,G,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,b)}else{const W=v.textures;for(let re=0;re<W.length;re++){const G=W[re],ve=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),_e=w(G.internalFormat,ve,ue,G.colorSpace),ye=ie(v);U&&pe(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,_e,v.width,v.height):pe(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,_e,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,_e,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),de(v.depthTexture,0);const re=W.__webglTexture,G=ie(v);if(v.depthTexture.format===qs)pe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(v.depthTexture.format===js)pe(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,G):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ge(b){const v=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const re=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",re)};W.addEventListener("dispose",re),v.__depthDisposeCallback=re}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const W=b.texture.mipmaps;W&&W.length>0?me(v.__webglFramebuffer[0],b):me(v.__webglFramebuffer,b)}else if(U){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=t.createRenderbuffer(),ge(v.__webglDepthbuffer[W],b,!1);else{const re=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer[W];t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,G)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),ge(v.__webglDepthbuffer,b,!1);else{const re=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,G),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,G)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function A(b,v,U){const W=i.get(b);v!==void 0&&Q(W.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ge(b)}function R(b){const v=b.texture,U=i.get(b),W=i.get(v);b.addEventListener("dispose",P);const re=b.textures,G=b.isWebGLCubeRenderTarget===!0,ve=re.length>1;if(ve||(W.__webglTexture===void 0&&(W.__webglTexture=t.createTexture()),W.__version=v.version,o.memory.textures++),G){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let _e=0;_e<v.mipmaps.length;_e++)U.__webglFramebuffer[ue][_e]=t.createFramebuffer()}else U.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)U.__webglFramebuffer[ue]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(ve)for(let ue=0,_e=re.length;ue<_e;ue++){const ye=i.get(re[ue]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&pe(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const _e=re[ue];U.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const ye=s.convert(_e.format,_e.colorSpace),ae=s.convert(_e.type),Ae=w(_e.internalFormat,ye,ae,_e.colorSpace,b.isXRRenderTarget===!0),Ie=ie(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Ae,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(G){n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Q(U.__webglFramebuffer[ue][_e],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,_e);else Q(U.__webglFramebuffer[ue],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(v)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ue=0,_e=re.length;ue<_e;ue++){const ye=re[ue],ae=i.get(ye);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),Ve(t.TEXTURE_2D,ye),Q(U.__webglFramebuffer,b,ye,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),m(ye)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,W.__webglTexture),Ve(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let _e=0;_e<v.mipmaps.length;_e++)Q(U.__webglFramebuffer[_e],b,v,t.COLOR_ATTACHMENT0,ue,_e);else Q(U.__webglFramebuffer,b,v,t.COLOR_ATTACHMENT0,ue,0);m(v)&&p(ue),n.unbindTexture()}b.depthBuffer&&Ge(b)}function x(b){const v=b.textures;for(let U=0,W=v.length;U<W;U++){const re=v[U];if(m(re)){const G=y(b),ve=i.get(re).__webglTexture;n.bindTexture(G,ve),p(G),n.unbindTexture()}}}const se=[],J=[];function Y(b){if(b.samples>0){if(pe(b)===!1){const v=b.textures,U=b.width,W=b.height;let re=t.COLOR_BUFFER_BIT;const G=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(b),ue=v.length>1;if(ue)for(let ye=0;ye<v.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const _e=b.texture.mipmaps;_e&&_e.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);const ae=i.get(v[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,U,W,0,0,U,W,re,t.NEAREST),l===!0&&(se.length=0,J.length=0,se.push(t.COLOR_ATTACHMENT0+ye),b.depthBuffer&&b.resolveDepthBuffer===!1&&(se.push(G),J.push(G),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,J)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ye=0;ye<v.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,ve.__webglColorRenderbuffer[ye]);const ae=i.get(v[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function ie(b){return Math.min(r.maxSamples,b.samples)}function pe(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ee(b,v){const U=b.colorSpace,W=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==ss&&U!==Fi&&(ft.getTransfer(U)===xt?(W!==Un||re!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=de,this.setTexture2DArray=Z,this.setTexture3D=fe,this.setTextureCube=V,this.rebindTextures=A,this.setupRenderTarget=R,this.updateRenderTargetMipmap=x,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=pe}function o1(t,e){function n(i,r=Fi){let s;const o=ft.getTransfer(r);if(i===gi)return t.UNSIGNED_BYTE;if(i===vu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hp)return t.BYTE;if(i===pp)return t.SHORT;if(i===Xs)return t.UNSIGNED_SHORT;if(i===_u)return t.INT;if(i===xr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Js)return t.HALF_FLOAT;if(i===gp)return t.ALPHA;if(i===_p)return t.RGB;if(i===Un)return t.RGBA;if(i===qs)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===vp)return t.RED;if(i===Su)return t.RED_INTEGER;if(i===xp)return t.RG;if(i===yu)return t.RG_INTEGER;if(i===Eu)return t.RGBA_INTEGER;if(i===Vo||i===Go||i===Wo||i===Xo)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===hc||i===pc||i===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gc||i===_c)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xc||i===Sc||i===yc||i===Ec||i===Mc||i===bc||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Ic||i===Uc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Nc||i===Oc||i===Fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$s?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const a1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Ia(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends as{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new c1,m=n.getContextAttributes();let p=null,y=null;const w=[],E=[],L=new pt;let C=null;const P=new Ln;P.viewport=new Dt;const F=new Ln;F.viewport=new Dt;const T=[P,F],S=new DS;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Ee=w[le];return Ee===void 0&&(Ee=new Al,w[le]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(le){let Ee=w[le];return Ee===void 0&&(Ee=new Al,w[le]=Ee),Ee.getGripSpace()},this.getHand=function(le){let Ee=w[le];return Ee===void 0&&(Ee=new Al,w[le]=Ee),Ee.getHandSpace()};function H(le){const Ee=E.indexOf(le.inputSource);if(Ee===-1)return;const Ce=w[Ee];Ce!==void 0&&(Ce.update(le.inputSource,le.frame,c||o),Ce.dispatchEvent({type:le.type,data:le.inputSource}))}function q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",de);for(let le=0;le<w.length;le++){const Ee=E[le];Ee!==null&&(E[le]=null,w[le].disconnect(Ee))}D=null,k=null,_.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,y=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){s=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(le){if(r=le,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",q),r.addEventListener("inputsourceschange",de),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,O=null,Q=null;m.depth&&(Q=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=m.stencil?js:qs,O=m.stencil?$s:xr);const ge={colorFormat:n.RGBA8,depthFormat:Q,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Sr(d.textureWidth,d.textureHeight,{format:Un,type:gi,depthTexture:new Up(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Ce),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Sr(h.framebufferWidth,h.framebufferHeight,{format:Un,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function de(le){for(let Ee=0;Ee<le.removed.length;Ee++){const Ce=le.removed[Ee],O=E.indexOf(Ce);O>=0&&(E[O]=null,w[O].disconnect(Ce))}for(let Ee=0;Ee<le.added.length;Ee++){const Ce=le.added[Ee];let O=E.indexOf(Ce);if(O===-1){for(let ge=0;ge<w.length;ge++)if(ge>=E.length){E.push(Ce),O=ge;break}else if(E[ge]===null){E[ge]=Ce,O=ge;break}if(O===-1)break}const Q=w[O];Q&&Q.connect(Ce)}}const Z=new K,fe=new K;function V(le,Ee,Ce){Z.setFromMatrixPosition(Ee.matrixWorld),fe.setFromMatrixPosition(Ce.matrixWorld);const O=Z.distanceTo(fe),Q=Ee.projectionMatrix.elements,ge=Ce.projectionMatrix.elements,me=Q[14]/(Q[10]-1),Ge=Q[14]/(Q[10]+1),A=(Q[9]+1)/Q[5],R=(Q[9]-1)/Q[5],x=(Q[8]-1)/Q[0],se=(ge[8]+1)/ge[0],J=me*x,Y=me*se,ie=O/(-x+se),pe=ie*-x;if(Ee.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(pe),le.translateZ(ie),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Q[10]===-1)le.projectionMatrix.copy(Ee.projectionMatrix),le.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const ne=me+ie,ee=Ge+ie,Le=J-pe,b=Y+(O-pe),v=A*Ge/ee*ne,U=R*Ge/ee*ne;le.projectionMatrix.makePerspective(Le,b,v,U,ne,ee),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Te(le,Ee){Ee===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Ee.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(r===null)return;let Ee=le.near,Ce=le.far;_.texture!==null&&(_.depthNear>0&&(Ee=_.depthNear),_.depthFar>0&&(Ce=_.depthFar)),S.near=F.near=P.near=Ee,S.far=F.far=P.far=Ce,(D!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,k=S.far),P.layers.mask=le.layers.mask|2,F.layers.mask=le.layers.mask|4,S.layers.mask=P.layers.mask|F.layers.mask;const O=le.parent,Q=S.cameras;Te(S,O);for(let ge=0;ge<Q.length;ge++)Te(Q[ge],O);Q.length===2?V(S,P,F):S.projectionMatrix.copy(P.projectionMatrix),Pe(le,S,O)};function Pe(le,Ee,Ce){Ce===null?le.matrix.copy(Ee.matrixWorld):(le.matrix.copy(Ce.matrixWorld),le.matrix.invert(),le.matrix.multiply(Ee.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Ee.projectionMatrix),le.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Bc*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Fe=null;function Ve(le,Ee){if(u=Ee.getViewerPose(c||o),g=Ee,u!==null){const Ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let O=!1;Ce.length!==S.cameras.length&&(S.cameras.length=0,O=!0);for(let me=0;me<Ce.length;me++){const Ge=Ce[me];let A=null;if(h!==null)A=h.getViewport(Ge);else{const x=f.getViewSubImage(d,Ge);A=x.viewport,me===0&&(e.setRenderTargetTextures(y,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(y))}let R=T[me];R===void 0&&(R=new Ln,R.layers.enable(me),R.viewport=new Dt,T[me]=R),R.matrix.fromArray(Ge.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(Ge.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(A.x,A.y,A.width,A.height),me===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),O===!0&&S.cameras.push(R)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const me=f.getDepthInformation(Ce[0]);me&&me.isValid&&me.texture&&_.init(e,me,r.renderState)}}for(let Ce=0;Ce<w.length;Ce++){const O=E[Ce],Q=w[Ce];O!==null&&Q!==void 0&&Q.update(O,Ee,c||o)}Fe&&Fe(le,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),g=null}const Je=new Op;Je.setAnimationLoop(Ve),this.setAnimationLoop=function(le){Fe=le},this.dispose=function(){}}}const sr=new _i,f1=new Lt;function d1(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Pp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,w,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,E=y.envMapRotation;w&&(m.envMap.value=w,sr.copy(E),sr.x*=-1,sr.y*=-1,sr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),m.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(sr)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h1(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const E=w.program;i.uniformBlockBinding(y,E)}function c(y,w){let E=r[y.id];E===void 0&&(g(y),E=u(y),r[y.id]=E,y.addEventListener("dispose",m));const L=w.program;i.updateUBOMapping(y,L);const C=e.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const w=f();y.__bindingPointIndex=w;const E=t.createBuffer(),L=y.__size,C=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,E),E}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=r[y.id],E=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let C=0,P=E.length;C<P;C++){const F=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,S=F.length;T<S;T++){const D=F[T];if(h(D,C,T,L)===!0){const k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let de=0;de<H.length;de++){const Z=H[de],fe=_(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,k+q,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,q),q+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,w,E,L){const C=y.value,P=w+"_"+E;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const F=L[P];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return L[P]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(y){const w=y.uniforms;let E=0;const L=16;for(let P=0,F=w.length;P<F;P++){const T=Array.isArray(w[P])?w[P]:[w[P]];for(let S=0,D=T.length;S<D;S++){const k=T[S],H=Array.isArray(k.value)?k.value:[k.value];for(let q=0,de=H.length;q<de;q++){const Z=H[q],fe=_(Z),V=E%L,Te=V%fe.boundary,Pe=V+Te;E+=Te,Pe!==0&&L-Pe<fe.storage&&(E+=L-Pe),k.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=fe.storage}}}const C=E%L;return C>0&&(E+=L-C),y.__size=E,y.__cache={},this}function _(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),w}function m(y){const w=y.target;w.removeEventListener("dispose",m);const E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const y in r)t.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class p1{constructor(e={}){const{canvas:n=Yx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],w=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Tn;let C=0,P=0,F=null,T=-1,S=null;const D=new Dt,k=new Dt;let H=null;const q=new _t(0);let de=0,Z=n.width,fe=n.height,V=1,Te=null,Pe=null;const Fe=new Dt(0,0,Z,fe),Ve=new Dt(0,0,Z,fe);let Je=!1;const le=new Ip;let Ee=!1,Ce=!1;const O=new Lt,Q=new Lt,ge=new K,me=new Dt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function R(){return F===null?V:1}let x=i;function se(M,B){return n.getContext(M,B)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gu}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",j,!1),x===null){const B="webgl2";if(x=se(B,M),x===null)throw se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let J,Y,ie,pe,ne,ee,Le,b,v,U,W,re,G,ve,ue,_e,ye,ae,Ae,Ie,Ne,we,He,I;function Re(){J=new bM(x),J.init(),we=new o1(x,J),Y=new _M(x,J,e,we),ie=new r1(x,J),Y.reverseDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),pe=new AM(x),ne=new Xb,ee=new s1(x,J,ie,ne,Y,we,pe),Le=new xM(E),b=new MM(E),v=new IS(x),He=new mM(x,v),U=new TM(x,v,pe,He),W=new CM(x,U,v,pe),Ae=new RM(x,Y,ee),_e=new vM(ne),re=new Wb(E,Le,b,J,Y,He,_e),G=new d1(E,ne),ve=new qb,ue=new Qb(J),ae=new pM(E,Le,b,ie,W,h,l),ye=new n1(E,W,Y),I=new h1(x,pe,Y,ie),Ie=new gM(x,J,pe),Ne=new wM(x,J,pe),pe.programs=re.programs,E.capabilities=Y,E.extensions=J,E.properties=ne,E.renderLists=ve,E.shadowMap=ye,E.state=ie,E.info=pe}Re();const xe=new u1(E,x);this.xr=xe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=J.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=J.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(Z,fe,!1))},this.getSize=function(M){return M.set(Z,fe)},this.setSize=function(M,B,X=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,fe=B,n.width=Math.floor(M*V),n.height=Math.floor(B*V),X===!0&&(n.style.width=M+"px",n.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(Z*V,fe*V).floor()},this.setDrawingBufferSize=function(M,B,X){Z=M,fe=B,V=X,n.width=Math.floor(M*X),n.height=Math.floor(B*X),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Fe)},this.setViewport=function(M,B,X,$){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,B,X,$),ie.viewport(D.copy(Fe).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ve)},this.setScissor=function(M,B,X,$){M.isVector4?Ve.set(M.x,M.y,M.z,M.w):Ve.set(M,B,X,$),ie.scissor(k.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){ie.setScissorTest(Je=M)},this.setOpaqueSort=function(M){Te=M},this.setTransparentSort=function(M){Pe=M},this.getClearColor=function(M){return M.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,X=!0){let $=0;if(M){let z=!1;if(F!==null){const be=F.texture.format;z=be===Eu||be===yu||be===Su}if(z){const be=F.texture.type,Oe=be===gi||be===xr||be===Xs||be===$s||be===vu||be===xu,ze=ae.getClearColor(),Be=ae.getClearAlpha(),je=ze.r,Ye=ze.g,We=ze.b;Oe?(g[0]=je,g[1]=Ye,g[2]=We,g[3]=Be,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=je,_[1]=Ye,_[2]=We,_[3]=Be,x.clearBufferiv(x.COLOR,0,_))}else $|=x.COLOR_BUFFER_BIT}B&&($|=x.DEPTH_BUFFER_BIT),X&&($|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",j,!1),ae.dispose(),ve.dispose(),ue.dispose(),ne.dispose(),Le.dispose(),b.dispose(),W.dispose(),He.dispose(),I.dispose(),re.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",br),xe.removeEventListener("sessionend",Tr),nn.stop()};function Se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=pe.autoReset,B=ye.enabled,X=ye.autoUpdate,$=ye.needsUpdate,z=ye.type;Re(),pe.autoReset=M,ye.enabled=B,ye.autoUpdate=X,ye.needsUpdate=$,ye.type=z}function j(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Me(M){const B=M.target;B.removeEventListener("dispose",Me),ke(B)}function ke(M){it(M),ne.remove(M)}function it(M){const B=ne.get(M).programs;B!==void 0&&(B.forEach(function(X){re.releaseProgram(X)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,X,$,z,be){B===null&&(B=Ge);const Oe=z.isMesh&&z.matrixWorld.determinant()<0,ze=Mi(M,B,X,$,z);ie.setMaterial($,Oe);let Be=X.index,je=1;if($.wireframe===!0){if(Be=U.getWireframeAttribute(X),Be===void 0)return;je=2}const Ye=X.drawRange,We=X.attributes.position;let at=Ye.start*je,vt=(Ye.start+Ye.count)*je;be!==null&&(at=Math.max(at,be.start*je),vt=Math.min(vt,(be.start+be.count)*je)),Be!==null?(at=Math.max(at,0),vt=Math.min(vt,Be.count)):We!=null&&(at=Math.max(at,0),vt=Math.min(vt,We.count));const Rt=vt-at;if(Rt<0||Rt===1/0)return;He.setup(z,$,ze,X,Be);let Mt,St=Ie;if(Be!==null&&(Mt=v.get(Be),St=Ne,St.setIndex(Mt)),z.isMesh)$.wireframe===!0?(ie.setLineWidth($.wireframeLinewidth*R()),St.setMode(x.LINES)):St.setMode(x.TRIANGLES);else if(z.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),ie.setLineWidth(Xe*R()),z.isLineSegments?St.setMode(x.LINES):z.isLineLoop?St.setMode(x.LINE_LOOP):St.setMode(x.LINE_STRIP)}else z.isPoints?St.setMode(x.POINTS):z.isSprite&&St.setMode(x.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Jr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))St.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xe=z._multiDrawStarts,At=z._multiDrawCounts,ut=z._multiDrawCount,pn=Be?v.get(Be).bytesPerElement:1,Ar=ne.get($).currentProgram.getUniforms();for(let mn=0;mn<ut;mn++)Ar.setValue(x,"_gl_DrawID",mn),St.render(Xe[mn]/pn,At[mn])}else if(z.isInstancedMesh)St.renderInstances(at,Rt,z.count);else if(X.isInstancedBufferGeometry){const Xe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,Xe);St.renderInstances(at,Rt,At)}else St.render(at,Rt)};function nt(M,B,X){M.transparent===!0&&M.side===ci&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,Yt(M,B,X),M.side=Wi,M.needsUpdate=!0,Yt(M,B,X),M.side=ci):Yt(M,B,X)}this.compile=function(M,B,X=null){X===null&&(X=M),p=ue.get(X),p.init(B),w.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),M!==X&&M.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const $=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const be=z.material;if(be)if(Array.isArray(be))for(let Oe=0;Oe<be.length;Oe++){const ze=be[Oe];nt(ze,X,z),$.add(ze)}else nt(be,X,z),$.add(be)}),p=w.pop(),$},this.compileAsync=function(M,B,X=null){const $=this.compile(M,B,X);return new Promise(z=>{function be(){if($.forEach(function(Oe){ne.get(Oe).currentProgram.isReady()&&$.delete(Oe)}),$.size===0){z(M);return}setTimeout(be,10)}J.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let zt=null;function tn(M){zt&&zt(M)}function br(){nn.stop()}function Tr(){nn.start()}const nn=new Op;nn.setAnimationLoop(tn),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(M){zt=M,xe.setAnimationLoop(M),M===null?nn.stop():nn.start()},xe.addEventListener("sessionstart",br),xe.addEventListener("sessionend",Tr),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(B),B=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,B,F),p=ue.get(M,w.length),p.init(B),w.push(p),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),le.setFromProjectionMatrix(Q),Ce=this.localClippingEnabled,Ee=_e.init(this.clippingPlanes,Ce),m=ve.get(M,y.length),m.init(),y.push(m),xe.enabled===!0&&xe.isPresenting===!0){const be=E.xr.getDepthSensingMesh();be!==null&&yi(be,B,-1/0,E.sortObjects)}yi(M,B,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(Te,Pe),A=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,A&&ae.addToRenderList(m,M),this.info.render.frame++,Ee===!0&&_e.beginShadows();const X=p.state.shadowsArray;ye.render(X,M,B),Ee===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const be=B.cameras;if(z.length>0)for(let Oe=0,ze=be.length;Oe<ze;Oe++){const Be=be[Oe];ji($,z,M,Be)}A&&ae.render(M);for(let Oe=0,ze=be.length;Oe<ze;Oe++){const Be=be[Oe];qi(m,M,Be,Be.viewport)}}else z.length>0&&ji($,z,M,B),A&&ae.render(M),qi(m,M,B);F!==null&&P===0&&(ee.updateMultisampleRenderTarget(F),ee.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(E,M,B),He.resetDefaultState(),T=-1,S=null,w.pop(),w.length>0?(p=w[w.length-1],Ee===!0&&_e.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function yi(M,B,X,$){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||le.intersectsSprite(M)){$&&me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);const Oe=W.update(M),ze=M.material;ze.visible&&m.push(M,Oe,ze,X,me.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||le.intersectsObject(M))){const Oe=W.update(M),ze=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),me.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),me.copy(Oe.boundingSphere.center)),me.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(ze)){const Be=Oe.groups;for(let je=0,Ye=Be.length;je<Ye;je++){const We=Be[je],at=ze[We.materialIndex];at&&at.visible&&m.push(M,Oe,at,X,me.z,We)}}else ze.visible&&m.push(M,Oe,ze,X,me.z,null)}}const be=M.children;for(let Oe=0,ze=be.length;Oe<ze;Oe++)yi(be[Oe],B,X,$)}function qi(M,B,X,$){const z=M.opaque,be=M.transmissive,Oe=M.transparent;p.setupLightsView(X),Ee===!0&&_e.setGlobalState(E.clippingPlanes,X),$&&ie.viewport(D.copy($)),z.length>0&&rt(z,B,X),be.length>0&&rt(be,B,X),Oe.length>0&&rt(Oe,B,X),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function ji(M,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Sr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Js:gi,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));const be=p.state.transmissionRenderTarget[$.id],Oe=$.viewport||D;be.setSize(Oe.z*E.transmissionResolutionScale,Oe.w*E.transmissionResolutionScale);const ze=E.getRenderTarget(),Be=E.getActiveCubeFace(),je=E.getActiveMipmapLevel();E.setRenderTarget(be),E.getClearColor(q),de=E.getClearAlpha(),de<1&&E.setClearColor(16777215,.5),E.clear(),A&&ae.render(X);const Ye=E.toneMapping;E.toneMapping=Hi;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Ee===!0&&_e.setGlobalState(E.clippingPlanes,$),rt(M,X,$),ee.updateMultisampleRenderTarget(be),ee.updateRenderTargetMipmap(be),J.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let vt=0,Rt=B.length;vt<Rt;vt++){const Mt=B[vt],St=Mt.object,Xe=Mt.geometry,At=Mt.material,ut=Mt.group;if(At.side===ci&&St.layers.test($.layers)){const pn=At.side;At.side=ln,At.needsUpdate=!0,ot(St,X,$,Xe,At,ut),At.side=pn,At.needsUpdate=!0,at=!0}}at===!0&&(ee.updateMultisampleRenderTarget(be),ee.updateRenderTargetMipmap(be))}E.setRenderTarget(ze,Be,je),E.setClearColor(q,de),We!==void 0&&($.viewport=We),E.toneMapping=Ye}function rt(M,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,be=M.length;z<be;z++){const Oe=M[z],ze=Oe.object,Be=Oe.geometry,je=Oe.group;let Ye=Oe.material;Ye.allowOverride===!0&&$!==null&&(Ye=$),ze.layers.test(X.layers)&&ot(ze,B,X,Be,Ye,je)}}function ot(M,B,X,$,z,be){M.onBeforeRender(E,B,X,$,z,be),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(E,B,X,$,M,be),z.transparent===!0&&z.side===ci&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,E.renderBufferDirect(X,B,$,z,M,be),z.side=Wi,z.needsUpdate=!0,E.renderBufferDirect(X,B,$,z,M,be),z.side=ci):E.renderBufferDirect(X,B,$,z,M,be),M.onAfterRender(E,B,X,$,z,be)}function Yt(M,B,X){B.isScene!==!0&&(B=Ge);const $=ne.get(M),z=p.state.lights,be=p.state.shadowsArray,Oe=z.state.version,ze=re.getParameters(M,z.state,be,B,X),Be=re.getProgramCacheKey(ze);let je=$.programs;$.environment=M.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(M.isMeshStandardMaterial?b:Le).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,je===void 0&&(M.addEventListener("dispose",Me),je=new Map,$.programs=je);let Ye=je.get(Be);if(Ye!==void 0){if($.currentProgram===Ye&&$.lightsStateVersion===Oe)return Ei(M,ze),Ye}else ze.uniforms=re.getUniforms(M),M.onBeforeCompile(ze,E),Ye=re.acquireProgram(ze,Be),je.set(Be,Ye),$.uniforms=ze.uniforms;const We=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=_e.uniform),Ei(M,ze),$.needsLights=Gt(M),$.lightsStateVersion=Oe,$.needsLights&&(We.ambientLightColor.value=z.state.ambient,We.lightProbe.value=z.state.probe,We.directionalLights.value=z.state.directional,We.directionalLightShadows.value=z.state.directionalShadow,We.spotLights.value=z.state.spot,We.spotLightShadows.value=z.state.spotShadow,We.rectAreaLights.value=z.state.rectArea,We.ltc_1.value=z.state.rectAreaLTC1,We.ltc_2.value=z.state.rectAreaLTC2,We.pointLights.value=z.state.point,We.pointLightShadows.value=z.state.pointShadow,We.hemisphereLights.value=z.state.hemi,We.directionalShadowMap.value=z.state.directionalShadowMap,We.directionalShadowMatrix.value=z.state.directionalShadowMatrix,We.spotShadowMap.value=z.state.spotShadowMap,We.spotLightMatrix.value=z.state.spotLightMatrix,We.spotLightMap.value=z.state.spotLightMap,We.pointShadowMap.value=z.state.pointShadowMap,We.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ye,$.uniformsList=null,Ye}function hn(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=qo.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Ei(M,B){const X=ne.get(M);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Mi(M,B,X,$,z){B.isScene!==!0&&(B=Ge),ee.resetTextureUnits();const be=B.fog,Oe=$.isMeshStandardMaterial?B.environment:null,ze=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ss,Be=($.isMeshStandardMaterial?b:Le).get($.envMap||Oe),je=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let Rt=Hi;$.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Rt=E.toneMapping);const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,St=Mt!==void 0?Mt.length:0,Xe=ne.get($),At=p.state.lights;if(Ee===!0&&(Ce===!0||M!==S)){const Kt=M===S&&$.id===T;_e.setState($,M,Kt)}let ut=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==At.state.version||Xe.outputColorSpace!==ze||z.isBatchedMesh&&Xe.batching===!1||!z.isBatchedMesh&&Xe.batching===!0||z.isBatchedMesh&&Xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Xe.instancing===!1||!z.isInstancedMesh&&Xe.instancing===!0||z.isSkinnedMesh&&Xe.skinning===!1||!z.isSkinnedMesh&&Xe.skinning===!0||z.isInstancedMesh&&Xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Xe.instancingMorph===!1&&z.morphTexture!==null||Xe.envMap!==Be||$.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==_e.numPlanes||Xe.numIntersection!==_e.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==Ye||Xe.morphTargets!==We||Xe.morphNormals!==at||Xe.morphColors!==vt||Xe.toneMapping!==Rt||Xe.morphTargetsCount!==St)&&(ut=!0):(ut=!0,Xe.__version=$.version);let pn=Xe.currentProgram;ut===!0&&(pn=Yt($,B,z));let Ar=!1,mn=!1,hs=!1;const wt=pn.getUniforms(),yn=Xe.uniforms;if(ie.useProgram(pn.program)&&(Ar=!0,mn=!0,hs=!0),$.id!==T&&(T=$.id,mn=!0),Ar||S!==M){ie.buffers.depth.getReversed()?(O.copy(M.projectionMatrix),Zx(O),Jx(O),wt.setValue(x,"projectionMatrix",O)):wt.setValue(x,"projectionMatrix",M.projectionMatrix),wt.setValue(x,"viewMatrix",M.matrixWorldInverse);const rn=wt.map.cameraPosition;rn!==void 0&&rn.setValue(x,ge.setFromMatrixPosition(M.matrixWorld)),Y.logarithmicDepthBuffer&&wt.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&wt.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,mn=!0,hs=!0)}if(z.isSkinnedMesh){wt.setOptional(x,z,"bindMatrix"),wt.setOptional(x,z,"bindMatrixInverse");const Kt=z.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),wt.setValue(x,"boneTexture",Kt.boneTexture,ee))}z.isBatchedMesh&&(wt.setOptional(x,z,"batchingTexture"),wt.setValue(x,"batchingTexture",z._matricesTexture,ee),wt.setOptional(x,z,"batchingIdTexture"),wt.setValue(x,"batchingIdTexture",z._indirectTexture,ee),wt.setOptional(x,z,"batchingColorTexture"),z._colorsTexture!==null&&wt.setValue(x,"batchingColorTexture",z._colorsTexture,ee));const En=X.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ae.update(z,X,pn),(mn||Xe.receiveShadow!==z.receiveShadow)&&(Xe.receiveShadow=z.receiveShadow,wt.setValue(x,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yn.envMap.value=Be,yn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(yn.envMapIntensity.value=B.environmentIntensity),mn&&(wt.setValue(x,"toneMappingExposure",E.toneMappingExposure),Xe.needsLights&&wr(yn,hs),be&&$.fog===!0&&G.refreshFogUniforms(yn,be),G.refreshMaterialUniforms(yn,$,V,fe,p.state.transmissionRenderTarget[M.id]),qo.upload(x,hn(Xe),yn,ee)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(qo.upload(x,hn(Xe),yn,ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&wt.setValue(x,"center",z.center),wt.setValue(x,"modelViewMatrix",z.modelViewMatrix),wt.setValue(x,"normalMatrix",z.normalMatrix),wt.setValue(x,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Kt=$.uniformsGroups;for(let rn=0,Va=Kt.length;rn<Va;rn++){const Yi=Kt[rn];I.update(Yi,pn),I.bind(Yi,pn)}}return pn}function wr(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Gt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,B,X){const $=ne.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ne.get(M.texture).__webglTexture=B,ne.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:X,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const X=ne.get(M);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const bi=x.createFramebuffer();this.setRenderTarget=function(M,B=0,X=0){F=M,C=B,P=X;let $=!0,z=null,be=!1,Oe=!1;if(M){const Be=ne.get(M);if(Be.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(x.FRAMEBUFFER,null),$=!1;else if(Be.__webglFramebuffer===void 0)ee.setupRenderTarget(M);else if(Be.__hasExternalTextures)ee.rebindTextures(M,ne.get(M.texture).__webglTexture,ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const We=M.depthTexture;if(Be.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(M.width!==We.image.width||M.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(M)}}const je=M.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);const Ye=ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ye[B])?z=Ye[B][X]:z=Ye[B],be=!0):M.samples>0&&ee.useMultisampledRTT(M)===!1?z=ne.get(M).__webglMultisampledFramebuffer:Array.isArray(Ye)?z=Ye[X]:z=Ye,D.copy(M.viewport),k.copy(M.scissor),H=M.scissorTest}else D.copy(Fe).multiplyScalar(V).floor(),k.copy(Ve).multiplyScalar(V).floor(),H=Je;if(X!==0&&(z=bi),ie.bindFramebuffer(x.FRAMEBUFFER,z)&&$&&ie.drawBuffers(M,z),ie.viewport(D),ie.scissor(k),ie.setScissorTest(H),be){const Be=ne.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+B,Be.__webglTexture,X)}else if(Oe){const Be=ne.get(M.texture),je=B;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Be.__webglTexture,X,je)}else if(M!==null&&X!==0){const Be=ne.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Be.__webglTexture,X)}T=-1},this.readRenderTargetPixels=function(M,B,X,$,z,be,Oe,ze=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be){ie.bindFramebuffer(x.FRAMEBUFFER,Be);try{const je=M.textures[ze],Ye=je.format,We=je.type;if(!Y.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-$&&X>=0&&X<=M.height-z&&(M.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+ze),x.readPixels(B,X,$,z,we.convert(Ye),we.convert(We),be))}finally{const je=F!==null?ne.get(F).__webglFramebuffer:null;ie.bindFramebuffer(x.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(M,B,X,$,z,be,Oe,ze=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe]),Be)if(B>=0&&B<=M.width-$&&X>=0&&X<=M.height-z){ie.bindFramebuffer(x.FRAMEBUFFER,Be);const je=M.textures[ze],Ye=je.format,We=je.type;if(!Y.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,at),x.bufferData(x.PIXEL_PACK_BUFFER,be.byteLength,x.STREAM_READ),M.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+ze),x.readPixels(B,X,$,z,we.convert(Ye),we.convert(We),0);const vt=F!==null?ne.get(F).__webglFramebuffer:null;ie.bindFramebuffer(x.FRAMEBUFFER,vt);const Rt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Kx(x,Rt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,at),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,be),x.deleteBuffer(at),x.deleteSync(Rt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,X=0){const $=Math.pow(2,-X),z=Math.floor(M.image.width*$),be=Math.floor(M.image.height*$),Oe=B!==null?B.x:0,ze=B!==null?B.y:0;ee.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,Oe,ze,z,be),ie.unbindTexture()};const fs=x.createFramebuffer(),ds=x.createFramebuffer();this.copyTextureToTexture=function(M,B,X=null,$=null,z=0,be=null){be===null&&(z!==0?(Jr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=z,z=0):be=0);let Oe,ze,Be,je,Ye,We,at,vt,Rt;const Mt=M.isCompressedTexture?M.mipmaps[be]:M.image;if(X!==null)Oe=X.max.x-X.min.x,ze=X.max.y-X.min.y,Be=X.isBox3?X.max.z-X.min.z:1,je=X.min.x,Ye=X.min.y,We=X.isBox3?X.min.z:0;else{const En=Math.pow(2,-z);Oe=Math.floor(Mt.width*En),ze=Math.floor(Mt.height*En),M.isDataArrayTexture?Be=Mt.depth:M.isData3DTexture?Be=Math.floor(Mt.depth*En):Be=1,je=0,Ye=0,We=0}$!==null?(at=$.x,vt=$.y,Rt=$.z):(at=0,vt=0,Rt=0);const St=we.convert(B.format),Xe=we.convert(B.type);let At;B.isData3DTexture?(ee.setTexture3D(B,0),At=x.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ee.setTexture2DArray(B,0),At=x.TEXTURE_2D_ARRAY):(ee.setTexture2D(B,0),At=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,B.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,B.unpackAlignment);const ut=x.getParameter(x.UNPACK_ROW_LENGTH),pn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ar=x.getParameter(x.UNPACK_SKIP_PIXELS),mn=x.getParameter(x.UNPACK_SKIP_ROWS),hs=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,je),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ye),x.pixelStorei(x.UNPACK_SKIP_IMAGES,We);const wt=M.isDataArrayTexture||M.isData3DTexture,yn=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const En=ne.get(M),Kt=ne.get(B),rn=ne.get(En.__renderTarget),Va=ne.get(Kt.__renderTarget);ie.bindFramebuffer(x.READ_FRAMEBUFFER,rn.__webglFramebuffer),ie.bindFramebuffer(x.DRAW_FRAMEBUFFER,Va.__webglFramebuffer);for(let Yi=0;Yi<Be;Yi++)wt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,ne.get(M).__webglTexture,z,We+Yi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,ne.get(B).__webglTexture,be,Rt+Yi)),x.blitFramebuffer(je,Ye,Oe,ze,at,vt,Oe,ze,x.DEPTH_BUFFER_BIT,x.NEAREST);ie.bindFramebuffer(x.READ_FRAMEBUFFER,null),ie.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||ne.has(M)){const En=ne.get(M),Kt=ne.get(B);ie.bindFramebuffer(x.READ_FRAMEBUFFER,fs),ie.bindFramebuffer(x.DRAW_FRAMEBUFFER,ds);for(let rn=0;rn<Be;rn++)wt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,En.__webglTexture,z,We+rn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,En.__webglTexture,z),yn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Kt.__webglTexture,be,Rt+rn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Kt.__webglTexture,be),z!==0?x.blitFramebuffer(je,Ye,Oe,ze,at,vt,Oe,ze,x.COLOR_BUFFER_BIT,x.NEAREST):yn?x.copyTexSubImage3D(At,be,at,vt,Rt+rn,je,Ye,Oe,ze):x.copyTexSubImage2D(At,be,at,vt,je,Ye,Oe,ze);ie.bindFramebuffer(x.READ_FRAMEBUFFER,null),ie.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else yn?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(At,be,at,vt,Rt,Oe,ze,Be,St,Xe,Mt.data):B.isCompressedArrayTexture?x.compressedTexSubImage3D(At,be,at,vt,Rt,Oe,ze,Be,St,Mt.data):x.texSubImage3D(At,be,at,vt,Rt,Oe,ze,Be,St,Xe,Mt):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,be,at,vt,Oe,ze,St,Xe,Mt.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,be,at,vt,Mt.width,Mt.height,St,Mt.data):x.texSubImage2D(x.TEXTURE_2D,be,at,vt,Oe,ze,St,Xe,Mt);x.pixelStorei(x.UNPACK_ROW_LENGTH,ut),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,pn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ar),x.pixelStorei(x.UNPACK_SKIP_ROWS,mn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,hs),be===0&&B.generateMipmaps&&x.generateMipmap(At),ie.unbindTexture()},this.copyTextureToTexture3D=function(M,B,X=null,$=null,z=0){return Jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,X,$,z)},this.initRenderTarget=function(M){ne.get(M).__webglFramebuffer===void 0&&ee.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ee.setTextureCube(M,0):M.isData3DTexture?ee.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ee.setTexture2DArray(M,0):ee.setTexture2D(M,0),ie.unbindTexture()},this.resetState=function(){C=0,P=0,F=null,ie.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),n.unpackColorSpace=ft._getUnpackColorSpace()}}const m1={key:0,class:"fallback-background"},g1={__name:"FireAshBackground",setup(t){const e=Object.freeze({PARTICLE_COUNT:300,WIND_RADIUS:80,WIND_RADIUS_SQUARED:6400,WIND_STRENGTH:1200,HORIZONTAL_DRIFT:.3,HORIZONTAL_DRIFT_HALF:.15,MIN_UPWARD_SPEED:.25,MAX_UPWARD_SPEED:.6,MIN_SIZE:4,MAX_SIZE:10,VELOCITY_DAMPING:.98,VELOCITY_RESTORATION:.02,MOUSE_VELOCITY_DAMPING:.95,MOUSE_DRAG_FACTOR:.05,WIND_FORCE_FACTOR:.1,MAX_VELOCITY_X:2,MIN_VELOCITY_X:-2,MAX_VELOCITY_Y:3,MIN_VELOCITY_Y:-1,LIFETIME_INCREMENT:8e-4,LIFETIME_INCREMENT_FAST:.004,MAX_PIXEL_RATIO:1.5,WIND_FORCE:120,UPWARD_SPEED_RANGE:.35,SIZE_RANGE:6,AVERAGE_UPWARD_SPEED:.425,AVERAGE_UPWARD_SPEED_RESTORATION:.0085}),n=Nt(null),i=Nt(!0);let r,s,o,a,l;e.PARTICLE_COUNT;let c=e.PARTICLE_COUNT,u=new pt(-1e4,-1e4),f=new pt(0,0),d=new pt(-1e4,-1e4),h,g,_,m,p,y,w,E,L,C,P=!0,F=0,T=!1,S=0,D=0,k=2,H=5,q=0,de=0,Z=0,fe=!1,V=3,Te=null,Pe=0,Fe=3e3,Ve=3e3,Je=[],le=null,Ee={left:0,top:0,width:0,height:0};const Ce={width:0,height:0,halfHeight:0};let O={x:0,y:0},Q={position:!1,velocity:!1,lifetime:!1},ge=null,me=null;const Ge=new ArrayBuffer(4),A=new Float32Array(Ge),R=new Uint32Array(Ge),x=()=>{try{const ve=document.createElement("canvas");return!!(ve.getContext("webgl")||ve.getContext("experimental-webgl"))}catch{return!1}},se=()=>{P=!document.hidden},J=()=>{Te||(Te=setInterval(()=>{const ve=Date.now()-Pe;T&&ve>=Fe&&ie()},Ve))},Y=()=>{Te&&(clearInterval(Te),Te=null)},ie=(ve=null,ue=null)=>{if(!a||Je.length<60)return;const _e=a.geometry.attributes,ye=_e.position.array,ae=_e.velocity.array,Ae=_e.size.array,Ie=_e.phase.array,Ne=_e.lifetime.array;let we,He;ve!==null&&ue!==null?(we=ve-Ee.left-Ee.width*.5,He=-(ue-Ee.top-Ee.height*.5)):(we=(Math.random()-.5)*Ee.width*.8,He=(Math.random()-.5)*Ee.height*.8);const I=6.283185307179586,Re=3.75,xe=7.5,Se=e.MIN_SIZE,he=e.SIZE_RANGE,j=new Float32Array(60*4);for(let Me=0;Me<240;Me++)j[Me]=Math.random();for(let Me=0;Me<60;Me++){const ke=Je.pop(),it=ke*3,nt=Me*4,zt=j[nt]*I,tn=j[nt]*3,br=Math.cos(zt),Tr=Math.sin(zt);ye[it]=we+br*tn,ye[it+1]=He+Tr*tn,ye[it+2]=0;const nn=Me*2,yi=(j[nt]-.5)*.5,qi=Math.cos(yi),ji=Math.sin(yi),rt=le[nn]*qi-le[nn+1]*ji,ot=le[nn]*ji+le[nn+1]*qi,Yt=Re+j[nt+1]*xe;ae[it]=rt*Yt,ae[it+1]=ot*Yt,ae[it+2]=0,Ae[ke]=Se+j[nt+2]*he,Ie[ke]=j[nt+3]*I,Ne[ke]=-3}_e.position.needsUpdate=!0,_e.velocity.needsUpdate=!0,_e.lifetime.needsUpdate=!0,_e.size.needsUpdate=!0,_e.phase.needsUpdate=!0},pe=ve=>{ve.preventDefault(),l&&(cancelAnimationFrame(l),l=null)},ne=()=>{W()},ee=()=>{const ve=Math.random();return O.x=(ve-.5)*e.HORIZONTAL_DRIFT,O.y=e.MIN_UPWARD_SPEED+ve*e.UPWARD_SPEED_RANGE,O},Le=ve=>{const ue=.5*ve;A[0]=ve,R[0]=1597463007-(R[0]>>1);let _e=A[0];return _e=_e*(1.5-ue*_e*_e),_e},b=(ve=null)=>{if(!n.value)return;const ue=ve||n.value.getBoundingClientRect();Ee.left=ue.left,Ee.top=ue.top,Ee.width=ue.width,Ee.height=ue.height,Ce.width=ue.width,Ce.height=ue.height,Ce.halfHeight=ue.height*.5},v=()=>{const ue=Math.PI*2/60;le=new Float32Array(60*2);for(let ye=0;ye<60;ye++){const ae=ye*ue;le[ye*2]=Math.cos(ae),le[ye*2+1]=Math.sin(ae)}const _e=e.WIND_RADIUS+1;ge=new Float32Array(_e*2);for(let ye=0;ye<_e;ye++){const ae=ye,Ae=ae<e.WIND_RADIUS?(1-ae/e.WIND_RADIUS)*e.WIND_STRENGTH*e.WIND_FORCE_FACTOR:0;ge[ye*2]=ae>0?Ae/ae:0,ge[ye*2+1]=ae}me=new Float32Array(150*3);for(let ye=0;ye<150;ye++){const ae=-3+ye*.02;let Ae=1,Ie=1,Ne=0;ae<-2?Ae=Ie=.98:ae<-.5?(Ae=Ie=.97,Ne=-.25):(Ae=Ie=.88,Ne=.1),me[ye*3]=Ae,me[ye*3+1]=Ie,me[ye*3+2]=Ne}Je=[]},U=(ve,ue)=>{Je.length=0;for(let _e=ue-1;_e>=0;_e--)ve[_e]>1&&Je.push(_e)},W=()=>{if(!n.value)return;if(!x()){i.value=!1,console.warn("WebGL not supported, using fallback background");return}const ve=n.value.getBoundingClientRect();b(ve);const{width:ue,height:_e}=Ce;v(),r=new MS,s=new Np(ue/-2,ue/2,_e/2,_e/-2,.1,1e3),s.position.z=1;try{o=new p1({alpha:!0,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1})}catch(Se){console.error("Failed to create WebGL renderer:",Se),i.value=!1;return}o.setSize(ue,_e),o.setPixelRatio(Math.min(window.devicePixelRatio,e.MAX_PIXEL_RATIO)),n.value.appendChild(o.domElement),o.domElement.addEventListener("webglcontextlost",pe,!1),o.domElement.addEventListener("webglcontextrestored",ne,!1);const ye=new Si,ae=new Float32Array(e.PARTICLE_COUNT*3),Ae=new Float32Array(e.PARTICLE_COUNT*3),Ie=new Float32Array(e.PARTICLE_COUNT),Ne=new Float32Array(e.PARTICLE_COUNT),we=new Float32Array(e.PARTICLE_COUNT);for(let Se=0;Se<e.PARTICLE_COUNT;Se++){const he=Se*3;ae[he]=(Math.random()-.5)*ue,ae[he+1]=(Math.random()-.5)*_e,ae[he+2]=0;const j=ee();Ae[he]=j.x,Ae[he+1]=j.y,Ae[he+2]=0,Ie[Se]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,Ne[Se]=Math.random()*Math.PI*2,we[Se]=Math.random()}ye.setAttribute("position",new Ut(ae,3)),ye.setAttribute("velocity",new Ut(Ae,3)),ye.setAttribute("size",new Ut(Ie,1)),ye.setAttribute("phase",new Ut(Ne,1)),ye.setAttribute("lifetime",new Ut(we,1));const He=new vi({uniforms:{time:{value:0},isRainbowMode:{value:0}},vertexShader:`
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
    `,transparent:!0,blending:Jl,depthWrite:!1});a=new RS(ye,He),r.add(a);const I=(Se,he)=>{if(!n.value)return;if(Se<0||Se>window.innerWidth||he<0||he>window.innerHeight){Re();return}const j=n.value.getBoundingClientRect();u.x=Se-j.left-ue/2,u.y=-(he-j.top-_e/2),f.x=u.x-d.x,f.y=u.y-d.y,d.copy(u)};h=Se=>{I(Se.clientX,Se.clientY)},g=Se=>{Se.touches.length>0&&I(Se.touches[0].clientX,Se.touches[0].clientY)};const Re=()=>{u.set(-1e4,-1e4),d.set(-1e4,-1e4),f.set(0,0)};_=Re,m=Se=>{(!Se.relatedTarget||Se.relatedTarget.nodeName==="HTML")&&Re()},p=Re,y=()=>{fe=!1,q=Math.min(q+300,3e3),re(5e3)},w=()=>{fe=!1,q=Math.max(0,q-300)},E=()=>{fe=!0,D=0,T=!1,de=0},L=Se=>{T=Se.detail.active,D=T?1:0,T?(de=q,re(5e3),J()):(q=0,Y())},C=Se=>{Pe=Date.now(),Y(),setTimeout(()=>{Date.now()-Pe>=Fe&&T&&J()},Fe),ie(Se.detail.x,Se.detail.y)},window.addEventListener("mousemove",h,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",p,{passive:!0}),document.addEventListener("mouseleave",_,{passive:!0}),document.addEventListener("mouseout",m,{passive:!0}),window.addEventListener("increase-particles",y),window.addEventListener("decrease-particles",w),window.addEventListener("reset-particles",E),window.addEventListener("rainbow-mode",L),window.addEventListener("firework",C);const xe=()=>{if(l=requestAnimationFrame(xe),!P)return;const Se=performance.now()*.001,he=Z===0?1/60:Math.min(Se-Z,.1);if(Z=Se,Q.position=!1,Q.velocity=!1,Q.lifetime=!1,S!==D){const rt=S<D,Yt=he/(rt?k:H);Math.abs(S-D)<Yt?(S=D,S===0&&de>0&&(q=de,de=0)):S+=rt?Yt:-Yt}if(fe&&q>0){const rt=(e.PARTICLE_COUNT+3e3)*(he/V);q=Math.max(0,q-rt),q===0&&(fe=!1)}He.uniforms.time.value=Se,He.uniforms.isRainbowMode.value=S;const j=a.geometry.attributes.position.array,Me=a.geometry.attributes.velocity.array,ke=a.geometry.attributes.lifetime.array,it=j.length/3,{width:nt,height:zt,halfHeight:tn}=Ce,br=S>0&&de>0?de:q,Tr=e.PARTICLE_COUNT+br,nn=1+2*S,yi=Math.floor(Tr*nn);if(c=Math.min(yi,5e3),F%2===0){let rt=0;const ot=80,Yt=Math.min(it,5e3);for(let hn=e.PARTICLE_COUNT;hn<Yt;hn++){const Ei=ke[hn];if(hn<c&&Ei>1){if(rt>=ot)break;ke[hn]=Math.random();const Mi=hn*3,wr=Math.random();j[Mi]=(wr-.5)*nt,j[Mi+1]=(Math.random()-.5)*zt;const Gt=ee();Me[Mi]=Gt.x,Me[Mi+1]=Gt.y,rt++,Q.position=!0,Q.velocity=!0,Q.lifetime=!0}else hn>=c&&Ei<=1&&Ei>=0&&(ke[hn]=.95,Q.lifetime=!0)}}f.x*=e.MOUSE_VELOCITY_DAMPING,f.y*=e.MOUSE_VELOCITY_DAMPING,F++;const qi=F%2===0;if(F%10===0&&n.value){const rt=n.value.getBoundingClientRect();(rt.left!==Ee.left||rt.top!==Ee.top||rt.width!==Ce.width||rt.height!==Ce.height)&&b(rt)}if(F%30===0&&(U(ke,it),Je.length<100)){const rt=100-Je.length;re(Math.min(it+rt,5e3))}const ji=Math.min(it,5e3);for(let rt=0;rt<ji;rt++){const ot=rt*3;if(ke[rt]>1)continue;const Yt=j[ot],hn=j[ot+1];if(ke[rt]<0){const Gt=Math.floor((ke[rt]+3)*50)*3,bi=me[Gt],fs=me[Gt+1],ds=me[Gt+2];let M=Me[ot]*bi,B=Me[ot+1]*fs+ds;if(j[ot]+=M,j[ot+1]+=B,Me[ot]=M,Me[ot+1]=B,ke[rt]+=.02,ke[rt]>=0){ke[rt]=0;const $=ee();Me[ot]=$.x,Me[ot+1]=$.y}Q.position=!0,Q.velocity=!0,Q.lifetime=!0;continue}if(qi){const Gt=Yt-u.x,bi=hn-u.y,fs=Math.abs(Gt),ds=Math.abs(bi);if(fs<=e.WIND_RADIUS&&ds<=e.WIND_RADIUS){const M=Gt*Gt+bi*bi;if(M<e.WIND_RADIUS_SQUARED&&M>.01){const B=Le(M),X=M*B,$=Math.floor(X),z=Math.min($,e.WIND_RADIUS)*2,be=ge[z];Me[ot]+=Gt*be+f.x*e.MOUSE_DRAG_FACTOR,Me[ot+1]+=bi*be+f.y*e.MOUSE_DRAG_FACTOR,Me[ot]=Math.max(e.MIN_VELOCITY_X,Math.min(e.MAX_VELOCITY_X,Me[ot])),Me[ot+1]=Math.max(e.MIN_VELOCITY_Y,Math.min(e.MAX_VELOCITY_Y,Me[ot+1])),Q.velocity=!0}}}const Ei=1+S*2,Mi=e.AVERAGE_UPWARD_SPEED_RESTORATION*Ei;Me[ot]*=e.VELOCITY_DAMPING,Me[ot+1]=Me[ot+1]*e.VELOCITY_DAMPING+Mi,j[ot]+=Me[ot],j[ot+1]+=Me[ot+1];const wr=ke[rt]+e.LIFETIME_INCREMENT;if(ke[rt]=wr,Q.position=!0,Q.velocity=!0,Q.lifetime=!0,j[ot+1]>tn+50||wr>1)if(rt<c){j[ot]=(Math.random()-.5)*nt,j[ot+1]=(Math.random()-.5)*zt,ke[rt]=0;const Gt=ee();Me[ot]=Gt.x,Me[ot+1]=Gt.y}else ke[rt]=1.5}Q.position&&(a.geometry.attributes.position.needsUpdate=!0),Q.velocity&&(a.geometry.attributes.velocity.needsUpdate=!0),Q.lifetime&&(a.geometry.attributes.lifetime.needsUpdate=!0),o.render(r,s)};xe()},re=ve=>{if(!a||!n.value||a.geometry.attributes.position.array.length>=ve*3)return;(Ce.width===0||Ce.height===0)&&b();const{width:ue,height:_e}=Ce,ye=a.geometry.attributes.position.array,ae=a.geometry.attributes.velocity.array,Ae=a.geometry.attributes.size.array,Ie=a.geometry.attributes.phase.array,Ne=a.geometry.attributes.lifetime.array,we=ye.length/3,He=new Float32Array(ve*3),I=new Float32Array(ve*3),Re=new Float32Array(ve),xe=new Float32Array(ve),Se=new Float32Array(ve);He.set(ye),I.set(ae),Re.set(Ae),xe.set(Ie),Se.set(Ne);for(let he=we;he<ve;he++){const j=he*3;He[j]=(Math.random()-.5)*ue,He[j+1]=(Math.random()-.5)*_e,He[j+2]=0;const Me=ee();I[j]=Me.x,I[j+1]=Me.y,I[j+2]=0,Re[he]=e.MIN_SIZE+Math.random()*e.SIZE_RANGE,xe[he]=Math.random()*Math.PI*2,Se[he]=1.5}a.geometry.setAttribute("position",new Ut(He,3)),a.geometry.setAttribute("velocity",new Ut(I,3)),a.geometry.setAttribute("size",new Ut(Re,1)),a.geometry.setAttribute("phase",new Ut(xe,1)),a.geometry.setAttribute("lifetime",new Ut(Se,1))},G=()=>{if(!n.value||!o||!s)return;const ve=n.value.getBoundingClientRect();b(ve);const{width:ue,height:_e}=Ce;s.left=ue/-2,s.right=ue/2,s.top=_e/2,s.bottom=_e/-2,s.updateProjectionMatrix(),o.setSize(ue,_e)};return zn(()=>{W(),window.addEventListener("resize",G,{passive:!0}),document.addEventListener("visibilitychange",se)}),Mr(()=>{l&&cancelAnimationFrame(l),Y(),window.removeEventListener("resize",G),document.removeEventListener("visibilitychange",se),h&&window.removeEventListener("mousemove",h),g&&window.removeEventListener("touchmove",g),p&&window.removeEventListener("touchend",p),_&&document.removeEventListener("mouseleave",_),m&&document.removeEventListener("mouseout",m),y&&window.removeEventListener("increase-particles",y),w&&window.removeEventListener("decrease-particles",w),E&&window.removeEventListener("reset-particles",E),L&&window.removeEventListener("rainbow-mode",L),C&&window.removeEventListener("firework",C),o&&(o.domElement&&(o.domElement.removeEventListener("webglcontextlost",pe),o.domElement.removeEventListener("webglcontextrestored",ne)),o.dispose(),n.value&&o.domElement&&n.value.contains(o.domElement)&&n.value.removeChild(o.domElement)),a&&(a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())}),(ve,ue)=>(oe(),ce("div",{ref_key:"container",ref:n,class:"ash-container"},[i.value?Ke("",!0):(oe(),ce("div",m1))],512))}},_1=$i(g1,[["__scopeId","data-v-8f9e0192"]]),v1={class:"font-sans flex flex-col min-h-screen bg-black relative app-container"},x1={class:"pt-0 flex flex-col space-y-16 md:space-y-64 relative z-10"},S1={__name:"App",setup(t){return(e,n)=>{const i=ou("router-view");return oe(),ce("div",v1,[n[0]||(n[0]=N("div",{class:"gradient-bg"},null,-1)),Ue(_1),Ue(rv,{class:"fixed top-0 left-0 w-full h-14 md:h-20"}),N("div",x1,[Ue(i),Ue(sx)])])}}},y1=$i(S1,[["__scopeId","data-v-6db8d45d"]]),E1="modulepreload",M1=function(t){return"/2025/"+t},Md={},b1=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(n.map(c=>{if(c=M1(c),c in Md)return;Md[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":E1,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},T1="/2025/assets/2025-Dbj42giJ.png",w1={__name:"FlameText",props:{text:{type:String,default:"Ember to Stars"},fontSize:{type:[Number,String],default:60}},setup(t){const e=Nt(null),n=Nt(!0);let i=null;return zn(()=>{i=new IntersectionObserver(r=>{r.forEach(s=>{n.value=s.isIntersecting})},{threshold:.1}),e.value&&i.observe(e.value)}),Mr(()=>{i&&e.value&&i.unobserve(e.value)}),(r,s)=>(oe(),ce("div",{ref_key:"fireTextRef",ref:e,class:Fn(["fire-text",{paused:!n.value}]),style:ki({fontSize:typeof t.fontSize=="number"?t.fontSize+"px":t.fontSize})},st(t.text),7))}},Hc=$i(w1,[["__scopeId","data-v-30b61211"]]),A1={class:"min-h-screen flex items-center justify-center text-white relative"},R1={class:"flex flex-col items-center gap-y-4 relative z-10"},C1={class:"text-center"},P1={class:"text-center px-4 py-4 md:py-8"},D1={class:"flow flow-col space-y-4 md:space-y-8 select-none"},L1={__name:"Teaser2025",setup(t){const e=Nt(typeof window<"u"?window.innerWidth:1024),n=Nt(!1),i=ct(()=>e.value<640?"50vw":"320px"),r=()=>{window.dispatchEvent(new CustomEvent("increase-particles")),n.value=!0,setTimeout(()=>{n.value=!1},600)},s=()=>{e.value=window.innerWidth};zn(()=>{window.addEventListener("resize",s)}),Mr(()=>{window.removeEventListener("resize",s)});const o=()=>{const c={title:"Let'Swift 2025",description:"Let'Swift 2025 Conference - iOS Swift Developer Conference",location:"세종대학교 컨벤션센터, 서울특별시 광진구",startDate:"20251124T100000",endDate:"20251124T180000",timestamp:new Date().toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"};return`BEGIN:VCALENDAR
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
END:VCALENDAR`},a=(c,u)=>{const f=new Blob([c],{type:"text/calendar;charset=utf-8"}),d=document.createElement("a");d.href=window.URL.createObjectURL(f),d.download=u,document.body.appendChild(d),d.click(),document.body.removeChild(d),window.URL.revokeObjectURL(d.href)},l=()=>{try{const c=o();a(c,"letswift-2025.ics")}catch(c){console.error("Failed to generate calendar file:",c),window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Let%27Swift%202025&dates=20251124T010000Z/20251124T090000Z&details=Let%27Swift%202025%20Conference&location=%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B4%91%EA%B0%9C%ED%86%A0%EA%B4%80","_blank")}};return(c,u)=>(oe(),ce("div",A1,[N("div",R1,[N("div",C1,[N("img",{src:T1,alt:"Let'Swift 2025",style:ki({width:i.value,height:"auto"}),class:Fn(["select-none cursor-pointer pt-28",{flash:n.value}]),onClick:r},null,6)]),N("div",P1,[N("div",D1,[u[0]||(u[0]=N("h1",{class:"text-4xl md:text-7xl leading-none font-black tracking-normal"}," Let'Swift 2025 ",-1)),Ue(Hc,{text:"Ember to Stars",fontSize:e.value<768?30:52},null,8,["fontSize"])]),u[1]||(u[1]=N("div",{class:"mt-4 md:mt-8 text-3xl font-medium space-y-2"},[N("p",{class:"text-xl md:text-2xl font-bold text-zinc-200"},"2025.11.24 월요일"),N("p",{class:"text-lg md:text-2xl font-bold text-zinc-300"},"세종대학교 컨벤션센터")],-1)),N("div",{class:"mt-4 md:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center py-1 md:py-6"},[N("button",{onClick:l,class:"px-6 py-3 rounded-full cursor-pointer bg-red-500/40 border border-red-400/60 text-white text-lg font-bold hover:bg-red-500/50 hover:border-red-400/80 transition-all duration-200 active:bg-red-500/60 select-none","aria-label":"Let'Swift 2025 행사를 캘린더에 추가"}," 캘린더에 추가 ")])])])]))}},I1=$i(L1,[["__scopeId","data-v-61d6b89d"]]),U1={class:"py-64 pb-32 flex flex-col space-y-16"},N1={class:"flex justify-center"},O1={class:"gradient-background px-8 sm:px-16 md:px-12 xl:px-0 max-w-[1280px] space-y-32"},F1={class:"flex flex-col gap-y-12"},B1={class:"fadein font-black text-white text-4xl"},k1={class:"flex justify-center"},z1={__name:"Introduction",setup(t){return(e,n)=>(oe(),ce("div",U1,[N("div",N1,[N("div",O1,[n[3]||(n[3]=zs('<div class="flex flex-col gap-y-12" data-v-3abc6bd7><div class="fadein font-black text-white text-xl md:text-4xl" data-v-3abc6bd7><span class="text-rainbow text-2xl md:text-5xl" data-v-3abc6bd7>Let&#39;Swift 2025</span> 를 시작하며 </div><div class="fadein text-white font-bold text-lg md:text-2xl space-y-16 text-justify lg:text-center" data-v-3abc6bd7><p data-v-3abc6bd7>우리는 과거의 경험,<br data-v-3abc6bd7>도전과 배움의 순간들을 함께 나누며<br data-v-3abc6bd7>미래를 향한 길을 만들어 왔습니다.</p><p data-v-3abc6bd7>작은 불씨가 모여 불꽃이 되고,<br data-v-3abc6bd7>별들이 모여 빛나는 밤하늘을 이루듯<br data-v-3abc6bd7>여러분의 경험 하나하나가 모여<br data-v-3abc6bd7>iOS 생태계를 비추는 빛이 되었습니다.</p></div></div>',1)),N("div",F1,[N("div",B1,[N("div",k1,[Ue(Hc,{text:"불씨",fontSize:"2.25rem"}),n[0]||(n[0]=xn("에서 ")),Ue(Hc,{text:"별빛",fontSize:"2.25rem"}),n[1]||(n[1]=xn("으로! "))])]),n[2]||(n[2]=N("div",{class:"fadein text-white font-bold text-lg md:text-2xl space-y-16 text-justify lg:text-center"},[N("p",null,[xn("Let’Swift 2025 : Ember to Stars 는"),N("br"),xn("iOS 개발의 과거, 현재, 미래를 탐험하는 여정을 준비했습니다.")]),N("p",null,[xn("현장에서 생생한 세션을 경험하고,"),N("br"),xn("함께 네트워킹하며,"),N("br"),xn("다음 도약을 위한 인사이트를 발견해 보세요.")]),N("p",null,[xn("작은 불씨가 모여 큰 별빛이 되는 순간,"),N("br"),xn("Let’Swift 2025에서 함께 만나요!")])],-1))])])])]))}},H1=$i(z1,[["__scopeId","data-v-3abc6bd7"]]),V1={class:"flex justify-center"},G1={class:"w-full px-8 xl:px-0 max-w-[1280px] flex justify-center"},W1={class:"inline-flex flex-col items-center"},X1={class:"relative z-10 font-black text-4xl md:text-5xl text-white"},$1={class:"flex items-center gap-1 -mt-3",style:{transform:"skewX(-20deg)","transform-origin":"bottom right"}},q1={class:"relative h-4 px-4 ml-6 bg-orange-600"},j1={class:"font-black text-4xl md:text-5xl invisible"},ro={__name:"SectionHeader",props:{title:{type:String,required:!0}},setup(t){return(e,n)=>(oe(),ce("div",V1,[N("div",G1,[N("div",W1,[N("h3",X1,st(t.title),1),N("div",$1,[N("div",q1,[N("div",j1,st(t.title),1)]),n[0]||(n[0]=N("div",{class:"flex gap-1"},[N("div",{class:"w-1 h-4 bg-orange-600"}),N("div",{class:"w-1 h-4 bg-orange-600"}),N("div",{class:"w-1 h-4 bg-orange-600"})],-1))])])])]))}};function Hp(t,e){return function(){return t.apply(e,arguments)}}const{toString:Y1}=Object.prototype,{getPrototypeOf:Tu}=Object,{iterator:Na,toStringTag:Vp}=Symbol,Oa=(t=>e=>{const n=Y1.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Vn=t=>(t=t.toLowerCase(),e=>Oa(e)===t),Fa=t=>e=>typeof e===t,{isArray:cs}=Array,Ys=Fa("undefined");function K1(t){return t!==null&&!Ys(t)&&t.constructor!==null&&!Ys(t.constructor)&&fn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Gp=Vn("ArrayBuffer");function Z1(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Gp(t.buffer),e}const J1=Fa("string"),fn=Fa("function"),Wp=Fa("number"),Ba=t=>t!==null&&typeof t=="object",Q1=t=>t===!0||t===!1,jo=t=>{if(Oa(t)!=="object")return!1;const e=Tu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Vp in t)&&!(Na in t)},eT=Vn("Date"),tT=Vn("File"),nT=Vn("Blob"),iT=Vn("FileList"),rT=t=>Ba(t)&&fn(t.pipe),sT=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||fn(t.append)&&((e=Oa(t))==="formdata"||e==="object"&&fn(t.toString)&&t.toString()==="[object FormData]"))},oT=Vn("URLSearchParams"),[aT,lT,cT,uT]=["ReadableStream","Request","Response","Headers"].map(Vn),fT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function so(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),cs(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Xp(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const pr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$p=t=>!Ys(t)&&t!==pr;function Vc(){const{caseless:t}=$p(this)&&this||{},e={},n=(i,r)=>{const s=t&&Xp(e,r)||r;jo(e[s])&&jo(i)?e[s]=Vc(e[s],i):jo(i)?e[s]=Vc({},i):cs(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&so(arguments[i],n);return e}const dT=(t,e,n,{allOwnKeys:i}={})=>(so(e,(r,s)=>{n&&fn(r)?t[s]=Hp(r,n):t[s]=r},{allOwnKeys:i}),t),hT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),pT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},mT=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Tu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},gT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},_T=t=>{if(!t)return null;if(cs(t))return t;let e=t.length;if(!Wp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},vT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Tu(Uint8Array)),xT=(t,e)=>{const i=(t&&t[Na]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},ST=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},yT=Vn("HTMLFormElement"),ET=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),bd=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),MT=Vn("RegExp"),qp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};so(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},bT=t=>{qp(t,(e,n)=>{if(fn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(fn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TT=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return cs(t)?i(t):i(String(t).split(e)),n},wT=()=>{},AT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function RT(t){return!!(t&&fn(t.append)&&t[Vp]==="FormData"&&t[Na])}const CT=t=>{const e=new Array(10),n=(i,r)=>{if(Ba(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=cs(i)?[]:{};return so(i,(o,a)=>{const l=n(o,r+1);!Ys(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},PT=Vn("AsyncFunction"),DT=t=>t&&(Ba(t)||fn(t))&&fn(t.then)&&fn(t.catch),jp=((t,e)=>t?setImmediate:e?((n,i)=>(pr.addEventListener("message",({source:r,data:s})=>{r===pr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),pr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",fn(pr.postMessage)),LT=typeof queueMicrotask<"u"?queueMicrotask.bind(pr):typeof process<"u"&&process.nextTick||jp,IT=t=>t!=null&&fn(t[Na]),te={isArray:cs,isArrayBuffer:Gp,isBuffer:K1,isFormData:sT,isArrayBufferView:Z1,isString:J1,isNumber:Wp,isBoolean:Q1,isObject:Ba,isPlainObject:jo,isReadableStream:aT,isRequest:lT,isResponse:cT,isHeaders:uT,isUndefined:Ys,isDate:eT,isFile:tT,isBlob:nT,isRegExp:MT,isFunction:fn,isStream:rT,isURLSearchParams:oT,isTypedArray:vT,isFileList:iT,forEach:so,merge:Vc,extend:dT,trim:fT,stripBOM:hT,inherits:pT,toFlatObject:mT,kindOf:Oa,kindOfTest:Vn,endsWith:gT,toArray:_T,forEachEntry:xT,matchAll:ST,isHTMLForm:yT,hasOwnProperty:bd,hasOwnProp:bd,reduceDescriptors:qp,freezeMethods:bT,toObjectSet:TT,toCamelCase:ET,noop:wT,toFiniteNumber:AT,findKey:Xp,global:pr,isContextDefined:$p,isSpecCompliantForm:RT,toJSONObject:CT,isAsyncFn:PT,isThenable:DT,setImmediate:jp,asap:LT,isIterable:IT};function Qe(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}te.inherits(Qe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const Yp=Qe.prototype,Kp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Kp[t]={value:t}});Object.defineProperties(Qe,Kp);Object.defineProperty(Yp,"isAxiosError",{value:!0});Qe.from=(t,e,n,i,r,s)=>{const o=Object.create(Yp);return te.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Qe.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const UT=null;function Gc(t){return te.isPlainObject(t)||te.isArray(t)}function Zp(t){return te.endsWith(t,"[]")?t.slice(0,-2):t}function Td(t,e,n){return t?t.concat(e).map(function(r,s){return r=Zp(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function NT(t){return te.isArray(t)&&!t.some(Gc)}const OT=te.toFlatObject(te,{},null,function(e){return/^is[A-Z]/.test(e)});function ka(t,e,n){if(!te.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=te.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,m){return!te.isUndefined(m[_])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(e);if(!te.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(te.isDate(g))return g.toISOString();if(!l&&te.isBlob(g))throw new Qe("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(g)||te.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,_,m){let p=g;if(g&&!m&&typeof g=="object"){if(te.endsWith(_,"{}"))_=i?_:_.slice(0,-2),g=JSON.stringify(g);else if(te.isArray(g)&&NT(g)||(te.isFileList(g)||te.endsWith(_,"[]"))&&(p=te.toArray(g)))return _=Zp(_),p.forEach(function(w,E){!(te.isUndefined(w)||w===null)&&e.append(o===!0?Td([_],E,s):o===null?_:_+"[]",c(w))}),!1}return Gc(g)?!0:(e.append(Td(m,_,s),c(g)),!1)}const f=[],d=Object.assign(OT,{defaultVisitor:u,convertValue:c,isVisitable:Gc});function h(g,_){if(!te.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(g),te.forEach(g,function(p,y){(!(te.isUndefined(p)||p===null)&&r.call(e,p,te.isString(y)?y.trim():y,_,d))===!0&&h(p,_?_.concat(y):[y])}),f.pop()}}if(!te.isObject(t))throw new TypeError("data must be an object");return h(t),e}function wd(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function wu(t,e){this._pairs=[],t&&ka(t,this,e)}const Jp=wu.prototype;Jp.append=function(e,n){this._pairs.push([e,n])};Jp.toString=function(e){const n=e?function(i){return e.call(this,i,wd)}:wd;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function FT(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qp(t,e,n){if(!e)return t;const i=n&&n.encode||FT;te.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=te.isURLSearchParams(e)?e.toString():new wu(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Ad{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){te.forEach(this.handlers,function(i){i!==null&&e(i)})}}const em={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},BT=typeof URLSearchParams<"u"?URLSearchParams:wu,kT=typeof FormData<"u"?FormData:null,zT=typeof Blob<"u"?Blob:null,HT={isBrowser:!0,classes:{URLSearchParams:BT,FormData:kT,Blob:zT},protocols:["http","https","file","blob","url","data"]},Au=typeof window<"u"&&typeof document<"u",Wc=typeof navigator=="object"&&navigator||void 0,VT=Au&&(!Wc||["ReactNative","NativeScript","NS"].indexOf(Wc.product)<0),GT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",WT=Au&&window.location.href||"http://localhost",XT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Au,hasStandardBrowserEnv:VT,hasStandardBrowserWebWorkerEnv:GT,navigator:Wc,origin:WT},Symbol.toStringTag,{value:"Module"})),qt={...XT,...HT};function $T(t,e){return ka(t,new qt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return qt.isNode&&te.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function qT(t){return te.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function jT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function tm(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&te.isArray(r)?r.length:o,l?(te.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!te.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&te.isArray(r[o])&&(r[o]=jT(r[o])),!a)}if(te.isFormData(t)&&te.isFunction(t.entries)){const n={};return te.forEachEntry(t,(i,r)=>{e(qT(i),r,n,0)}),n}return null}function YT(t,e,n){if(te.isString(t))try{return(e||JSON.parse)(t),te.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const oo={transitional:em,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=te.isObject(e);if(s&&te.isHTMLForm(e)&&(e=new FormData(e)),te.isFormData(e))return r?JSON.stringify(tm(e)):e;if(te.isArrayBuffer(e)||te.isBuffer(e)||te.isStream(e)||te.isFile(e)||te.isBlob(e)||te.isReadableStream(e))return e;if(te.isArrayBufferView(e))return e.buffer;if(te.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return $T(e,this.formSerializer).toString();if((a=te.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ka(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),YT(e)):e}],transformResponse:[function(e){const n=this.transitional||oo.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(te.isResponse(e)||te.isReadableStream(e))return e;if(e&&te.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Qe.from(a,Qe.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],t=>{oo.headers[t]={}});const KT=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZT=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&KT[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Rd=Symbol("internals");function Ms(t){return t&&String(t).trim().toLowerCase()}function Yo(t){return t===!1||t==null?t:te.isArray(t)?t.map(Yo):String(t)}function JT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const QT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Nl(t,e,n,i,r){if(te.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!te.isString(e)){if(te.isString(i))return e.indexOf(i)!==-1;if(te.isRegExp(i))return i.test(e)}}function ew(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function tw(t,e){const n=te.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let dn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Ms(l);if(!u)throw new Error("header name must be a non-empty string");const f=te.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Yo(a))}const o=(a,l)=>te.forEach(a,(c,u)=>s(c,u,l));if(te.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(te.isString(e)&&(e=e.trim())&&!QT(e))o(ZT(e),n);else if(te.isObject(e)&&te.isIterable(e)){let a={},l,c;for(const u of e){if(!te.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?te.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Ms(e),e){const i=te.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return JT(r);if(te.isFunction(n))return n.call(this,r,i);if(te.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ms(e),e){const i=te.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Nl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Ms(o),o){const a=te.findKey(i,o);a&&(!n||Nl(i,i[a],a,n))&&(delete i[a],r=!0)}}return te.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Nl(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return te.forEach(this,(r,s)=>{const o=te.findKey(i,s);if(o){n[o]=Yo(r),delete n[s];return}const a=e?ew(s):String(s).trim();a!==s&&delete n[s],n[a]=Yo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return te.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&te.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Rd]=this[Rd]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Ms(o);i[a]||(tw(r,o),i[a]=!0)}return te.isArray(e)?e.forEach(s):s(e),this}};dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(dn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});te.freezeMethods(dn);function Ol(t,e){const n=this||oo,i=e||n,r=dn.from(i.headers);let s=i.data;return te.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function nm(t){return!!(t&&t.__CANCEL__)}function us(t,e,n){Qe.call(this,t??"canceled",Qe.ERR_CANCELED,e,n),this.name="CanceledError"}te.inherits(us,Qe,{__CANCEL__:!0});function im(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Qe("Request failed with status code "+n.status,[Qe.ERR_BAD_REQUEST,Qe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function nw(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function iw(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function rw(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const ca=(t,e,n=3)=>{let i=0;const r=iw(50,250);return rw(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Cd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Pd=t=>(...e)=>te.asap(()=>t(...e)),sw=qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(qt.origin),qt.navigator&&/(msie|trident)/i.test(qt.navigator.userAgent)):()=>!0,ow=qt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];te.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),te.isString(i)&&o.push("path="+i),te.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function aw(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function lw(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function rm(t,e,n){let i=!aw(e);return t&&(i||n==!1)?lw(t,e):e}const Dd=t=>t instanceof dn?{...t}:t;function yr(t,e){e=e||{};const n={};function i(c,u,f,d){return te.isPlainObject(c)&&te.isPlainObject(u)?te.merge.call({caseless:d},c,u):te.isPlainObject(u)?te.merge({},u):te.isArray(u)?u.slice():u}function r(c,u,f,d){if(te.isUndefined(u)){if(!te.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!te.isUndefined(u))return i(void 0,u)}function o(c,u){if(te.isUndefined(u)){if(!te.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Dd(c),Dd(u),f,!0)};return te.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);te.isUndefined(d)&&f!==a||(n[u]=d)}),n}const sm=t=>{const e=yr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=dn.from(o),e.url=Qp(rm(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(te.isFormData(n)){if(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(qt.hasStandardBrowserEnv&&(i&&te.isFunction(i)&&(i=i(e)),i||i!==!1&&sw(e.url))){const c=r&&s&&ow.read(s);c&&o.set(r,c)}return e},cw=typeof XMLHttpRequest<"u",uw=cw&&function(t){return new Promise(function(n,i){const r=sm(t);let s=r.data;const o=dn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,h,g;function _(){h&&h(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function p(){if(!m)return;const w=dn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:w,config:t,request:m};im(function(P){n(P),_()},function(P){i(P),_()},L),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new Qe("Request aborted",Qe.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new Qe("Network Error",Qe.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const L=r.transitional||em;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new Qe(E,L.clarifyTimeoutError?Qe.ETIMEDOUT:Qe.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&te.forEach(o.toJSON(),function(E,L){m.setRequestHeader(L,E)}),te.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=ca(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=ca(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(r.cancelToken||r.signal)&&(u=w=>{m&&(i(!w||w.type?new us(null,t,m):w),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const y=nw(r.url);if(y&&qt.protocols.indexOf(y)===-1){i(new Qe("Unsupported protocol "+y+":",Qe.ERR_BAD_REQUEST,t));return}m.send(s||null)})},fw=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Qe?u:new us(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Qe(`timeout ${e} of ms exceeded`,Qe.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>te.asap(a),l}},dw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},hw=async function*(t,e){for await(const n of pw(t))yield*dw(n,e)},pw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Ld=(t,e,n,i)=>{const r=hw(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},za=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",om=za&&typeof ReadableStream=="function",mw=za&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),am=(t,...e)=>{try{return!!t(...e)}catch{return!1}},gw=om&&am(()=>{let t=!1;const e=new Request(qt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Id=64*1024,Xc=om&&am(()=>te.isReadableStream(new Response("").body)),ua={stream:Xc&&(t=>t.body)};za&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ua[e]&&(ua[e]=te.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Qe(`Response type '${e}' is not supported`,Qe.ERR_NOT_SUPPORT,i)})})})(new Response);const _w=async t=>{if(t==null)return 0;if(te.isBlob(t))return t.size;if(te.isSpecCompliantForm(t))return(await new Request(qt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(te.isArrayBufferView(t)||te.isArrayBuffer(t))return t.byteLength;if(te.isURLSearchParams(t)&&(t=t+""),te.isString(t))return(await mw(t)).byteLength},vw=async(t,e)=>{const n=te.toFiniteNumber(t.getContentLength());return n??_w(e)},xw=za&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=sm(t);c=c?(c+"").toLowerCase():"text";let h=fw([r,s&&s.toAbortSignal()],o),g;const _=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let m;try{if(l&&gw&&n!=="get"&&n!=="head"&&(m=await vw(u,i))!==0){let L=new Request(e,{method:"POST",body:i,duplex:"half"}),C;if(te.isFormData(i)&&(C=L.headers.get("content-type"))&&u.setContentType(C),L.body){const[P,F]=Cd(m,ca(Pd(l)));i=Ld(L.body,Id,P,F)}}te.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(e,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let y=await fetch(g);const w=Xc&&(c==="stream"||c==="response");if(Xc&&(a||w&&_)){const L={};["status","statusText","headers"].forEach(T=>{L[T]=y[T]});const C=te.toFiniteNumber(y.headers.get("content-length")),[P,F]=a&&Cd(C,ca(Pd(a),!0))||[];y=new Response(Ld(y.body,Id,P,()=>{F&&F(),_&&_()}),L)}c=c||"text";let E=await ua[te.findKey(ua,c)||"text"](y,t);return!w&&_&&_(),await new Promise((L,C)=>{im(L,C,{data:E,headers:dn.from(y.headers),status:y.status,statusText:y.statusText,config:t,request:g})})}catch(p){throw _&&_(),p&&p.name==="TypeError"&&/Load failed|fetch/i.test(p.message)?Object.assign(new Qe("Network Error",Qe.ERR_NETWORK,t,g),{cause:p.cause||p}):Qe.from(p,p&&p.code,t,g)}}),$c={http:UT,xhr:uw,fetch:xw};te.forEach($c,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ud=t=>`- ${t}`,Sw=t=>te.isFunction(t)||t===null||t===!1,lm={getAdapter:t=>{t=te.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!Sw(n)&&(i=$c[(o=String(n)).toLowerCase()],i===void 0))throw new Qe(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Ud).join(`
`):" "+Ud(s[0]):"as no adapter specified";throw new Qe("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:$c};function Fl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new us(null,t)}function Nd(t){return Fl(t),t.headers=dn.from(t.headers),t.data=Ol.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),lm.getAdapter(t.adapter||oo.adapter)(t).then(function(i){return Fl(t),i.data=Ol.call(t,t.transformResponse,i),i.headers=dn.from(i.headers),i},function(i){return nm(i)||(Fl(t),i&&i.response&&(i.response.data=Ol.call(t,t.transformResponse,i.response),i.response.headers=dn.from(i.response.headers))),Promise.reject(i)})}const cm="1.9.0",Ha={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ha[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Od={};Ha.transitional=function(e,n,i){function r(s,o){return"[Axios v"+cm+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Qe(r(o," has been removed"+(n?" in "+n:"")),Qe.ERR_DEPRECATED);return n&&!Od[o]&&(Od[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Ha.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function yw(t,e,n){if(typeof t!="object")throw new Qe("options must be an object",Qe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Qe("option "+s+" must be "+l,Qe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Qe("Unknown option "+s,Qe.ERR_BAD_OPTION)}}const Ko={assertOptions:yw,validators:Ha},Wn=Ko.validators;let _r=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ad,response:new Ad}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=yr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ko.assertOptions(i,{silentJSONParsing:Wn.transitional(Wn.boolean),forcedJSONParsing:Wn.transitional(Wn.boolean),clarifyTimeoutError:Wn.transitional(Wn.boolean)},!1),r!=null&&(te.isFunction(r)?n.paramsSerializer={serialize:r}:Ko.assertOptions(r,{encode:Wn.function,serialize:Wn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ko.assertOptions(n,{baseUrl:Wn.spelling("baseURL"),withXsrfToken:Wn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&te.merge(s.common,s[n.method]);s&&te.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=dn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(l=l&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Nd.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(f=0;f<d;){const g=a[f++],_=a[f++];try{h=g(h)}catch(m){_.call(this,m);break}}try{u=Nd.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=yr(this.defaults,e);const n=rm(e.baseURL,e.url,e.allowAbsoluteUrls);return Qp(n,e.params,e.paramsSerializer)}};te.forEach(["delete","get","head","options"],function(e){_r.prototype[e]=function(n,i){return this.request(yr(i||{},{method:e,url:n,data:(i||{}).data}))}});te.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(yr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}_r.prototype[e]=n(),_r.prototype[e+"Form"]=n(!0)});let Ew=class um{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new us(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new um(function(r){e=r}),cancel:e}}};function Mw(t){return function(n){return t.apply(null,n)}}function bw(t){return te.isObject(t)&&t.isAxiosError===!0}const qc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qc).forEach(([t,e])=>{qc[e]=t});function fm(t){const e=new _r(t),n=Hp(_r.prototype.request,e);return te.extend(n,_r.prototype,e,{allOwnKeys:!0}),te.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return fm(yr(t,r))},n}const Tt=fm(oo);Tt.Axios=_r;Tt.CanceledError=us;Tt.CancelToken=Ew;Tt.isCancel=nm;Tt.VERSION=cm;Tt.toFormData=ka;Tt.AxiosError=Qe;Tt.Cancel=Tt.CanceledError;Tt.all=function(e){return Promise.all(e)};Tt.spread=Mw;Tt.isAxiosError=bw;Tt.mergeConfig=yr;Tt.AxiosHeaders=dn;Tt.formToJSON=t=>tm(te.isHTMLForm(t)?new FormData(t):t);Tt.getAdapter=lm.getAdapter;Tt.HttpStatusCode=qc;Tt.default=Tt;const{Axios:cR,AxiosError:uR,CanceledError:fR,isCancel:dR,CancelToken:hR,VERSION:pR,all:mR,Cancel:gR,isAxiosError:_R,spread:vR,toFormData:xR,AxiosHeaders:SR,HttpStatusCode:yR,formToJSON:ER,getAdapter:MR,mergeConfig:bR}=Tt,Tw={class:"flex justify-center"},ww={class:"px-8 xl:px-0 max-w-[1280px] space-y-48"},Aw={class:"space-y-32"},Rw={key:0,class:"flex flex-col gap-y-12"},Cw=["href"],Pw=["src"],Dw={key:1,class:"flex flex-col gap-y-12"},Lw=["href"],Iw=["src"],Uw={key:2,class:"flex flex-col gap-y-12"},Nw=["href"],Ow=["src"],Fw={key:0,class:"flex flex-col gap-y-12"},Bw={class:"grid sm:grid-cols-3 md:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16"},kw={class:"flex flex-col gap-x-3 gap-y-6 items-center"},zw=["src"],Hw={class:"flex flex-col gap-y-2"},Vw={key:0,class:"text-zinc-400 text-sm font-semibold"},Gw={class:"flex gap-x-4 gap-y-4 justify-end pointer-cursor"},Ww=["href"],Xw=["href"],$w=["href"],qw=["href"],jw=["href"],Yw=["href"],Kw=["href"],Zw=["href"],Jw=["href"],Qw=["href"],eA=["href"],tA={key:1,class:"flex flex-col gap-y-12"},nA={class:"flex flex-row justify-center items-center space-x-16"},iA=["href"],rA=["src"],sA={__name:"Sponsors",setup(t){const e=Nt([]),n=Nt(null),i=Nt(!1);let r=null;const s=ct(()=>e.value.filter(m=>m.tier==="Platinum"&&m.should_display===!0)),o=ct(()=>e.value.filter(m=>m.tier==="Gold"&&m.should_display===!0)),a=ct(()=>e.value.filter(m=>m.tier==="Silver"&&m.should_display===!0)),l=ct(()=>e.value.filter(m=>m.tier==="dev_growth"&&m.should_display===!0)),c=ct(()=>{const m=e.value.filter(p=>p.tier==="Individual"&&p.should_display===!0);return u(m)});zn(()=>{f(),r=new IntersectionObserver(m=>{m.forEach(p=>{i.value=p.isIntersecting,p.isIntersecting?window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!0}})):window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!1}}))})},{threshold:.3}),n.value&&r.observe(n.value)}),Mr(()=>{r&&n.value&&r.unobserve(n.value)});const u=m=>{const p=[...m];for(let y=p.length-1;y>0;y--){const w=Math.floor(Math.random()*(y+1));[p[y],p[w]]=[p[w],p[y]]}return p},f=async()=>{try{const p=await Tt.get("/2025/assets/json/sponsors.json");e.value=p.data}catch(m){console.error(m)}},d=m=>`/2025/assets/sponsors/${m}`,h=m=>{const p=["from-zinc-200 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400","from-zinc-100 to-zinc-400"];return p[m%p.length]},g=m=>{if(!i.value)return;const p=m.target;p.tagName==="BUTTON"||p.tagName==="A"||p.closest("button")||p.closest("a")||window.dispatchEvent(new CustomEvent("firework",{detail:{x:m.clientX,y:m.clientY}}))},_=()=>{window.location.href="mailto:letswift.official@gmail.com?subject=Let%27Swift%202025%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"};return(m,p)=>(oe(),ce("div",{ref_key:"sponsorsSection",ref:n,class:"space-y-16 py-36 md:scroll-mt-28",onClick:g},[Ue(ro,{title:"행사 후원"}),N("div",Tw,[N("div",ww,[N("div",Aw,[s.value.length!==0?(oe(),ce("div",Rw,[p[0]||(p[0]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-slate-100 to-slate-400"},"플래티넘",-1)),(oe(!0),ce(dt,null,Pt(s.value,y=>(oe(),ce("div",{key:y.id,class:"flex flex-col items-center space-y-4 text-white"},[N("a",{href:y.social.web,target:"_blank",class:"pointer-cursor"},[N("img",{src:d(y.image_name),loading:"lazy",class:"w-full md:h-24 object-contain"},null,8,Pw)],8,Cw)]))),128))])):Ke("",!0),o.value.length!==0?(oe(),ce("div",Dw,[p[1]||(p[1]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-amber-100 to-amber-400"},"골드",-1)),(oe(!0),ce(dt,null,Pt(o.value,y=>(oe(),ce("div",{key:y.id,class:"flex flex-col items-center space-y-4 text-white"},[N("a",{href:y.social.web,target:"_blank",class:"pointer-cursor w-3/4"},[N("img",{src:d(y.image_name),loading:"lazy",class:"w-full h-20 object-contain"},null,8,Iw)],8,Lw)]))),128))])):Ke("",!0),a.value.length!==0?(oe(),ce("div",Uw,[p[2]||(p[2]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-zinc-300 to-zinc-600"},"실버",-1)),(oe(!0),ce(dt,null,Pt(a.value,y=>(oe(),ce("div",{key:y.id,class:"flex flex-col items-center space-y-4 text-white"},[N("a",{href:y.social.web,target:"_blank",class:"pointer-cursor w-2/3"},[N("img",{src:d(y.image_name),loading:"lazy",class:"w-full sm:h-24 object-contain"},null,8,Ow)],8,Nw)]))),128))])):Ke("",!0)]),c.value.length!==0?(oe(),ce("div",Fw,[p[3]||(p[3]=N("div",{class:"font-bold text-lg md:text-xl text-rainbow"},"개인 후원",-1)),N("div",Bw,[(oe(!0),ce(dt,null,Pt(c.value,(y,w)=>(oe(),ce("div",{key:y.id,class:"items-center text-white"},[N("div",kw,[N("div",null,[N("img",{src:d(y.image_name),loading:"lazy",class:"bg-gradient-to-b from-zinc-300/10 to-zinc-300/20 rounded-full w-24 h-24 object-cover"},null,8,zw)]),N("div",Hw,[N("div",{class:Fn(["font-bold text-lg bg-linear-to-br bg-clip-text text-transparent",h(w)])},st(y.name),3),y.description?(oe(),ce("div",Vw,st(y.description),1)):Ke("",!0)]),N("div",Gw,[y.social.email?(oe(),ce("a",{key:0,href:`mailto:${y.social.email}`,target:"_blank"},[Ue($e(vr),{fill:"gray",width:"16",height:"16"})],8,Ww)):Ke("",!0),y.social.web?(oe(),ce("a",{key:1,href:y.social.web,target:"_blank"},[Ue($e(vr),{fill:"gray",width:"16",height:"16"})],8,Xw)):Ke("",!0),y.social.linkedin?(oe(),ce("a",{key:2,href:y.social.linkedin,target:"_blank"},[Ue($e(Ra),{fill:"gray",width:"16",height:"16"})],8,$w)):Ke("",!0),y.social.instagram?(oe(),ce("a",{key:3,href:y.social.instagram,target:"_blank"},[Ue($e(Aa),{fill:"gray",width:"16",height:"16"})],8,qw)):Ke("",!0),y.social.facebook?(oe(),ce("a",{key:4,href:y.social.facebook,target:"_blank"},[Ue($e(du),{fill:"gray",width:"16",height:"16"})],8,jw)):Ke("",!0),y.social.github?(oe(),ce("a",{key:5,href:y.social.github,target:"_blank"},[Ue($e(wa),{fill:"gray",width:"16",height:"16"})],8,Yw)):Ke("",!0),y.social.youtube?(oe(),ce("a",{key:6,href:y.social.youtube,target:"_blank"},[Ue($e(Pa),{fill:"gray",width:"16",height:"16"})],8,Kw)):Ke("",!0),y.social.x?(oe(),ce("a",{key:7,href:y.social.x,target:"_blank"},[Ue($e(Ca),{fill:"gray",width:"16",height:"16"})],8,Zw)):Ke("",!0),y.social.mastodon?(oe(),ce("a",{key:8,href:y.social.mastodon,target:"_blank"},[Ue($e(hu),{fill:"gray",width:"16",height:"16"})],8,Jw)):Ke("",!0),y.social.medium?(oe(),ce("a",{key:9,href:y.social.medium,target:"_blank"},[Ue($e(pu),{fill:"gray",width:"16",height:"16"})],8,Qw)):Ke("",!0),y.social.thread?(oe(),ce("a",{key:10,href:y.social.thread,target:"_blank"},[Ue($e(mu),{fill:"gray",width:"16",height:"16"})],8,eA)):Ke("",!0)])])]))),128))])])):Ke("",!0),l.value.length!==0?(oe(),ce("div",tA,[p[4]||(p[4]=N("div",{class:"font-bold text-lg md:text-xl bg-linear-to-br bg-clip-text text-transparent from-green-300 to-green-600"},"개발자 성장 지원",-1)),N("div",nA,[(oe(!0),ce(dt,null,Pt(l.value,y=>(oe(),ce("div",{key:y.id,class:"text-white w-1/3"},[N("a",{href:y.social.web,target:"_blank",class:"pointer-cursor"},[N("img",{src:d(y.image_name),loading:"lazy",class:"w-full sm:h-14 object-contain"},null,8,rA)],8,iA)]))),128))])])):Ke("",!0),N("button",{onClick:_,class:"px-6 py-3 rounded-full cursor-pointer bg-themeMain/40 border border-themeMain/60 text-white text-lg font-bold hover:bg-themeMain/50 hover:border-themeMain/80 transition-all duration-200 active:bg-themeMain/60 select-none","aria-label":"Let'Swift 2025 후원 문의하기"}," 후원 문의 ")])])],512))}},oA={class:"flex justify-center"},aA={class:"px-8 xl:px-0 max-w-[1280px] flex flex-col gap-y-16 md:gap-y-32 w-full"},lA={class:"grid grid-cols-1 lg:grid-cols-1 gap-x-8 md:gap-x-16 gap-y-16 justify-center"},cA=["href"],uA=["src"],fA={class:"grid grid-cols-3 md:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-16 justify-center"},dA=["src"],hA={class:"grid grid-cols-2 lg:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-16 justify-center"},pA=["href"],mA=["src"],gA={__name:"SponsorsMini",setup(t){const e=Nt([]),n=Nt(null),i=Nt(!1);let r=null;const s=ct(()=>e.value.filter(h=>h.tier!=="Individual"&&h.tier!=="dev_growth"&&h.should_display===!0)),o=ct(()=>e.value.filter(h=>h.tier==="dev_growth"&&h.should_display===!0)),a=ct(()=>{const h=e.value.filter(g=>g.tier==="Individual"&&g.should_display===!0);return l(h)});zn(()=>{c(),r=new IntersectionObserver(h=>{h.forEach(g=>{i.value=g.isIntersecting,g.isIntersecting?window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!0}})):window.dispatchEvent(new CustomEvent("rainbow-mode",{detail:{active:!1}}))})},{threshold:.3}),n.value&&r.observe(n.value)}),Mr(()=>{r&&n.value&&r.unobserve(n.value)});const l=h=>{const g=[...h];for(let _=g.length-1;_>0;_--){const m=Math.floor(Math.random()*(_+1));[g[_],g[m]]=[g[m],g[_]]}return g},c=async()=>{try{const g=await Tt.get("/2025/assets/json/sponsors.json");e.value=g.data}catch(h){console.error(h)}},u=h=>`/2025/assets/sponsors/${h}`,f=h=>{const g=["from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400","from-zinc-200 to-zinc-400"];return g[h%g.length]},d=h=>{if(!i.value)return;const g=h.target;g.tagName==="BUTTON"||g.tagName==="A"||g.closest("button")||g.closest("a")||window.dispatchEvent(new CustomEvent("firework",{detail:{x:h.clientX,y:h.clientY}}))};return(h,g)=>(oe(),ce("div",{ref_key:"sponsorsMiniSection",ref:n,class:"space-y-24 py-16",onClick:d},[g[0]||(g[0]=N("h3",{class:"font-medium text-4xl md:text-6xl text-rainbow text-cherishline leading-tight pb-2 pt-4"},"Special Thanks to",-1)),N("div",oA,[N("div",aA,[N("div",lA,[(oe(!0),ce(dt,null,Pt(s.value,_=>(oe(),ce("div",{key:_.id,class:"flex flex-col items-center text-white"},[N("a",{href:_.social.web,target:"_blank",class:"pointer-cursor"},[N("img",{src:u(_.image_name),loading:"lazy",class:"h-10 lg:h-16 object-contain"},null,8,uA)],8,cA)]))),128))]),N("div",fA,[(oe(!0),ce(dt,null,Pt(a.value,(_,m)=>(oe(),ce("div",{key:_.id,class:"flex flex-col gap-y-4 items-center text-white"},[N("img",{src:u(_.image_name),loading:"lazy",class:"bg-gradient-to-b from-zinc-300/10 to-zinc-300/20 rounded-full w-16 h-16 object-cover"},null,8,dA),N("span",{class:Fn(["font-black font-mono text-xs md:text-sm bg-linear-to-br bg-clip-text text-transparent",f(m)])},st(_.name),3)]))),128))]),N("div",hA,[(oe(!0),ce(dt,null,Pt(o.value,_=>(oe(),ce("div",{key:_.id,class:"flex flex-col items-center text-white"},[N("a",{href:_.social.web,target:"_blank",class:"pointer-cursor"},[N("img",{src:u(_.image_name),loading:"lazy",class:"h-8 lg:h-12 object-contain"},null,8,mA)],8,pA)]))),128))])])])],512))}},_A={class:"relative space-y-12 py-0 md:scroll-mt-28"},vA={class:"w-full space-y-8"},xA={class:"flex justify-center"},SA={class:"w-full px-8 xl:px-0 max-w-[1280px] space-y-4"},yA={key:0,class:"bg-white/30 w-full h-[480px] md:h-[720px] rounded-3xl overflow-hidden",style:{filter:"invert(90%) hue-rotate(180deg)"}},EA={__name:"Venue",setup(t){const e=Nt(2),n=()=>{typeof daum<"u"&&daum.roughmap&&daum.roughmap.Lander?new daum.roughmap.Lander({timestamp:"1728435092684",key:"2kudi",mapWidth:"1280",mapHeight:"720"}).render():console.error("Daum map library not loaded properly.")};zn(()=>{n()});const i=()=>{try{const o=r();s(o,"letswift-2025.ics")}catch(o){console.error("Failed to generate calendar file:",o),window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&text=Let%27Swift%202025&dates=20251124T010000Z/20251124T090000Z&details=Let%27Swift%202025%20Conference&location=%EC%84%B8%EC%A2%85%EB%8C%80%ED%95%99%EA%B5%90%20%EA%B4%91%EA%B0%9C%ED%86%A0%EA%B4%80","_blank")}},r=()=>{const o={title:"Let'Swift 2025",description:"Let'Swift 2025 Conference - iOS Swift Developer Conference",location:"세종대학교 컨벤션센터, 서울특별시 광진구",startDate:"20251124T100000",endDate:"20251124T180000",timestamp:new Date().toISOString().replace(/[-:]/g,"").split(".")[0]+"Z"};return`BEGIN:VCALENDAR
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
END:VCALENDAR`},s=(o,a)=>{const l=new Blob([o],{type:"text/calendar;charset=utf-8"}),c=document.createElement("a");c.href=window.URL.createObjectURL(l),c.download=a,document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(c.href)};return(o,a)=>(oe(),ce("div",_A,[N("div",vA,[Ue(ro,{title:"행사장"})]),N("div",xA,[N("div",SA,[e.value===2?(oe(),ce("div",yA,a[0]||(a[0]=[N("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2102424479963!2d127.06830008511824!3d37.55011015299899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4daa73c863f%3A0xd6bd626e0463b230!2z7IS47KKF64yA7ZWZ6rWQIOq0keqwnO2GoOq0gA!5e0!3m2!1sko!2skr!4v1728434846925!5m2!1sko!2skr",width:"1280",height:"720",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"hidden md:block h-[720px]"},null,-1),N("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.2102424479963!2d127.06830008511824!3d37.55011015299899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca4daa73c863f%3A0xd6bd626e0463b230!2z7IS47KKF64yA7ZWZ6rWQIOq0keqwnO2GoOq0gA!5e0!3m2!1sko!2skr!4v1728434846925!5m2!1sko!2skr",width:"720",height:"480",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"block md:hidden h-[480px]"},null,-1)]))):Ke("",!0)])]),N("div",{class:"flex justify-center"},[N("div",{class:"w-full px-8 xl:px-0 max-w-[1280px] space-y-16"},[a[1]||(a[1]=zs('<div class="flex-col md:flex md:flex-row md:justify-between px-4 space-y-4"><div class="flex flex-col space-y-2 text-white font-bold text-justify"><div class="text-zinc-300 text-xl">세종대학교 컨벤션홀</div><div class="text-zinc-400 text-base font-bold">서울 광진구 능동로 209</div></div><div class="text-xl text-zinc-300 font-bold flex md:block"><span class="text-zinc-200">2025년 </span><span>11월 24일</span><span class="text-zinc-200"> 월요일</span></div></div>',1)),N("button",{onClick:i,class:"px-6 py-3 rounded-full cursor-pointer bg-red-500/40 border border-red-400/60 text-white text-lg font-bold hover:bg-red-500/50 hover:border-red-400/80 transition-all duration-200 active:bg-red-500/60 select-none","aria-label":"Let'Swift 2025 행사를 캘린더에 추가"}," 캘린더에 추가 ")])])]))}},MA={class:"flex flex-col text-base h-full justify-center overflow-hidden text-left text-ellipsis"},bA={key:0,class:"flex flex-col space-y-0 items-baseline px-2 sm:px-4 py-1 md:py-2"},TA={class:"font-bold text-sm text-zinc-300"},wA={key:0},AA={key:1,class:"flex gap-x-4 text-justify px-2 sm:px-4 py-2 md:py-1 drop-shadow-[0_23px_23px_rgba(0,0,0,0.75)] h-full"},RA={class:"flex flex-col items-baseline text-justify py-1 gap-y-0.5"},CA={class:"font-black text-xs sm:text-lg md:text-lg text-zinc-300 line-clamp-3 break-normal w-full text-left"},PA={class:"flex gap-x-2 items-baseline"},DA={class:"font-bold font-mono text-xs sm:text-sm md:text-sm text-zinc-200/80 text-left"},LA={class:"font-bold font-mono text-xs sm:text-xs text-zinc-300/60 text-left"},IA={key:0,class:"flex space-x-2"},UA={class:"font-black text-sm sm:text-sm md:text-base text-zinc-300/70"},NA={key:0,class:"font-semibold mr-2"},OA={key:1},FA={class:"text-xs sm:text-xs opacity-60"},BA={key:2},kA={key:0},zA={key:1},Fd={__name:"TimelineItem",props:["session"],setup(t){const e=t,n=ct(()=>{const s=e.session;return s.type==="recess"||s.type==="lunch"}),i=s=>`${Math.floor(s/60)}분`,r=s=>{const o=new Date(s),a=o.getHours(),l=o.getMinutes(),c=a.toString().padStart(2,"0"),u=l.toString().padStart(2,"0");return`${c}:${u}`};return(s,o)=>(oe(),ce("div",MA,[n.value===!0?(oe(),ce("div",bA,[N("div",TA,st(t.session.name),1),t.session.type==="lunch"?(oe(),ce("div",wA,o[0]||(o[0]=[N("div",{class:"flex flex-col text-xs text-zinc-500 py-4"},[N("div",null,"식사시 주의 사항"),N("div",null,"내부 음식물 섭취 안내: 컨퍼런스 내부에서 물 이외의 음식은 취식 불가입니다.")],-1)]))):Ke("",!0)])):(oe(),ce("div",AA,[o[1]||(o[1]=N("div",{class:"bg-themeMain h-full w-1 rounded-full"},null,-1)),N("div",RA,[N("div",CA,st(t.session.name),1),N("div",PA,[N("div",DA,st(r(t.session.start_time))+" ~ "+st(r(t.session.end_time)),1),N("div",LA,st(i(t.session.duration)),1)]),t.session.speakers?(oe(),ce("div",IA,[(oe(!0),ce(dt,null,Pt(t.session.speakers,(a,l)=>(oe(),ce("div",UA,[l>0?(oe(),ce("span",NA,"&")):Ke("",!0),a.nickname!==""&&a.name!==""?(oe(),ce("span",OA,[xn(st(a.nickname)+" ",1),N("span",FA,st(a.name),1)])):(oe(),ce("span",BA,[a.nickname!==""?(oe(),ce("span",kA,st(a.nickname),1)):(oe(),ce("span",zA,st(a.name),1))]))]))),256))])):Ke("",!0)])]))]))}},HA={class:"flex flex-col gap-y-8 md:scroll-mt-28"},VA={class:"space-y-12"},GA={class:"flex justify-center"},WA={class:"w-full px-2 sm:px-8 py-2 xl:px-0 max-w-[1280px] space-y-12 xl:rounded-3xl"},XA={class:"text-white"},$A={class:"min-h-[250vh] sm:min-h-[300vh] md:min-h-[200vh] grid grid-rows-[repeat(56,1fr)] grid-cols-13 gap-1"},qA={class:"md:hidden"},jA={class:"hidden md:inline"},YA={__name:"Schedule",setup(t){const e=["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"],n=Nt([]),i=ct(()=>n.value.filter(c=>c.track_en==="")),r=ct(()=>n.value.filter(c=>c.track_en==="Track A").concat(i.value)),s=ct(()=>n.value.filter(c=>c.track_en==="Track B").concat(i.value));zn(()=>{o()});const o=async()=>{try{const u=await Tt.get("/2025/assets/json/schedule.json");n.value=u.data}catch(c){console.error(c)}},a=(c,u)=>{let f=" ";return u===0?f+=" col-start-2 col-span-6":f+=" col-start-8 col-span-6",c.type==="entry"?f+=" bg-white/5 rounded-md":c.type==="recess"||c.type==="lunch"?f+=" ":(c.type==="opening"||c.type==="closing"||c.type==="networking"||c.track_en==="Track A"||c.track_en==="Track B")&&(f+=" bg-white/10 rounded-md"),f},l=c=>{let u="";const f=new Date(c.start_time),d=f.getHours(),h=f.getMinutes(),g=(d-9)*6+Math.ceil(h/10)+1+1,_=Math.ceil(c.duration/600),m=g+_;return u+=` grid-row-start: ${g}; grid-row-end: ${m};`,u};return(c,u)=>(oe(),ce("div",HA,[N("div",VA,[Ue(ro,{title:"시간표"})]),u[1]||(u[1]=N("div",{class:"text-zinc-500 text-xs"},"상황에 따라 일정 및 세션 내용은 변경될 수 있습니다.",-1)),N("div",GA,[N("div",WA,[N("div",XA,[N("div",$A,[u[0]||(u[0]=zs('<div class="contents text-center font-bold text-lg md:text-xl"><div class="relative flex flex-col space-y-0 items-center justify-center col-start-2 col-span-6 row-start-0 row-span-1 bg-zinc-700/50 rounded-2xl"><div class="flex flex-col md:flex-row place-items-center md:place-items-baseline gap-x-2"><div class="text-sm md:text-xl">Track A</div><div class="text-xl md:text-3xl text-rainbow">EMBER</div></div><div class="text-xs text-zinc-500">홀 B</div></div><div class="flex flex-col space-y-0 items-center justify-center col-start-8 col-span-6 row-start-0 row-span-1 bg-zinc-700/50 rounded-2xl"><div class="flex flex-col md:flex-row place-items-center md:place-items-baseline gap-x-2"><div class="text-sm md:text-xl">Track B</div><div class="text-xl md:text-3xl text-rainbow">STAR</div></div><div class="text-xs text-zinc-500">홀 C</div></div></div>',1)),(oe(),ce(dt,null,Pt(e,(f,d)=>N("div",{class:"px-1 flex items-center justify-center bg-zinc-700/50 rounded-2xl col-start-1 col-span-1 row-span-6 font-mono font-semibold text-xs sm:text-sm md:text-lg",style:ki(`grid-row-start: ${d*0}`)},[N("span",qA,st(f.split(":")[0].replace(/^0/,"")),1),N("span",jA,st(f),1)],4)),64)),(oe(!0),ce(dt,null,Pt(r.value,f=>(oe(),ce("div",{key:f.id,class:Fn(a(f,0)),style:ki(l(f))},[Ue(Fd,{session:f},null,8,["session"])],6))),128)),(oe(!0),ce(dt,null,Pt(s.value,f=>(oe(),ce("div",{key:f.id,class:Fn(a(f,1)),style:ki(l(f))},[Ue(Fd,{session:f},null,8,["session"])],6))),128))])])])])]))}},KA={class:"flex flex-col gap-y-8 items-end text-white"},ZA={class:"flex flex-col gap-y-8 items-end"},JA=["src"],QA={class:"flex flex-col gap-y-4 items-end text-end"},e2={key:0},t2={class:"font-bold text-lg md:text-xl"},n2={class:"font-bold text-sm md:text-base opacity-60"},i2={key:1},r2={key:0,class:"font-bold text-lg md:text-xl"},s2={key:1,class:"font-bold text-lg md:text-xl"},o2={class:"font-bold text-xs md:text-sm"},a2={class:"korean-text text-xs md:text-sm text-right text-pretty font-semibold text-zinc-300 opacity-90 max-w-80"},l2={class:"flex pt-2 gap-x-4 gap-y-4 justify-end pointer-cursor"},c2=["href"],u2=["href"],f2=["href"],d2=["href"],h2=["href"],p2=["href"],m2=["href"],g2=["href"],_2=["href"],v2=["href"],x2=["href"],S2={__name:"Speaker",props:["person"],setup(t){const e=n=>`/2025/assets/speakers/${n}`;return(n,i)=>(oe(),ce("div",KA,[N("div",ZA,[N("img",{src:e(t.person.image_name),loading:"lazy",class:"w-36 md:w-44 h-36 md:h-44 bg-white rounded-tl-full object-cover z-10"},null,8,JA),N("div",QA,[t.person.nickname!==""&&t.person.name!==""?(oe(),ce("div",e2,[N("div",t2,st(t.person.nickname),1),N("div",n2,st(t.person.name),1)])):(oe(),ce("div",i2,[t.person.nickname!==""?(oe(),ce("div",r2,st(t.person.nickname),1)):(oe(),ce("div",s2,st(t.person.name),1))])),N("div",o2,st(t.person.affiliation),1),N("div",a2,st(t.person.description),1),N("div",l2,[t.person.social.email?(oe(),ce("a",{key:0,href:`mailto:${t.person.social.email}`,target:"_blank"},[Ue($e(vr),{fill:"gray",width:"16",height:"16"})],8,c2)):Ke("",!0),t.person.social.web?(oe(),ce("a",{key:1,href:t.person.social.web,target:"_blank"},[Ue($e(vr),{fill:"gray",width:"16",height:"16"})],8,u2)):Ke("",!0),t.person.social.linkedin?(oe(),ce("a",{key:2,href:t.person.social.linkedin,target:"_blank"},[Ue($e(Ra),{fill:"gray",width:"16",height:"16"})],8,f2)):Ke("",!0),t.person.social.instagram?(oe(),ce("a",{key:3,href:t.person.social.instagram,target:"_blank"},[Ue($e(Aa),{fill:"gray",width:"16",height:"16"})],8,d2)):Ke("",!0),t.person.social.facebook?(oe(),ce("a",{key:4,href:t.person.social.facebook,target:"_blank"},[Ue($e(du),{fill:"gray",width:"16",height:"16"})],8,h2)):Ke("",!0),t.person.social.github?(oe(),ce("a",{key:5,href:t.person.social.github,target:"_blank"},[Ue($e(wa),{fill:"gray",width:"16",height:"16"})],8,p2)):Ke("",!0),t.person.social.youtube?(oe(),ce("a",{key:6,href:t.person.social.youtube,target:"_blank"},[Ue($e(Pa),{fill:"gray",width:"16",height:"16"})],8,m2)):Ke("",!0),t.person.social.x?(oe(),ce("a",{key:7,href:t.person.social.x,target:"_blank"},[Ue($e(Ca),{fill:"gray",width:"16",height:"16"})],8,g2)):Ke("",!0),t.person.social.mastodon?(oe(),ce("a",{key:8,href:t.person.social.mastodon,target:"_blank"},[Ue($e(hu),{fill:"gray",width:"16",height:"16"})],8,_2)):Ke("",!0),t.person.social.medium?(oe(),ce("a",{key:9,href:t.person.social.medium,target:"_blank"},[Ue($e(pu),{fill:"gray",width:"16",height:"16"})],8,v2)):Ke("",!0),t.person.social.thread?(oe(),ce("a",{key:10,href:t.person.social.thread,target:"_blank"},[Ue($e(mu),{fill:"gray",width:"16",height:"16"})],8,x2)):Ke("",!0)])])])]))}},y2=$i(S2,[["__scopeId","data-v-875a9e5f"]]),E2={class:"flex flex-col space-y-12 md:space-y-36 md:scroll-mt-28"},M2={class:"flex justify-center"},b2={class:"px-8 xl:px-0 max-w-[1280px]"},T2={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-28"},w2={__name:"Speakers",setup(t){const e=Nt([]);zn(()=>{n()});const n=async()=>{try{const r=await Tt.get("/2025/assets/json/speakers.json");e.value=r.data}catch(i){console.error(i)}};return(i,r)=>(oe(),ce("div",E2,[Ue(ro,{title:"연사 소개"}),N("div",M2,[N("div",b2,[N("div",T2,[(oe(!0),ce(dt,null,Pt(e.value,s=>(oe(),ce("div",{key:s.id},[Ue(y2,{person:s},null,8,["person"])]))),128))])])])]))}},A2={class:"flex flex-col gap-y-8 items-center"},R2={class:"relative w-36 md:w-44 h-36 md:h-44"},C2=["src"],P2={key:1,class:"absolute top-0 left-0 w-36 md:w-44 h-36 md:h-44 bg-zinc-200/50 rounded-full object-cover z-10"},D2={class:"flex flex-col gap-y-4 items-center text-center"},L2={key:0},I2={class:"font-bold text-lg md:text-xl"},U2={class:"font-bold text-sm md:text-base opacity-60"},N2={key:1},O2={key:0,class:"font-bold text-lg md:text-xl"},F2={key:1,class:"font-bold text-lg md:text-xl"},B2={class:"korean-text text-xs md:text-sm text-right text-pretty font-semibold text-zinc-300 opacity-90 max-w-80"},k2={class:"flex pt-2 gap-x-4 gap-y-4 justify-center pointer-cursor"},z2=["href"],H2=["href"],V2=["href"],G2=["href"],W2=["href"],X2=["href"],$2=["href"],q2=["href"],j2=["href"],Y2=["href"],K2=["href"],Z2={__name:"Organizer",props:["person"],setup(t){const e=t,n=Nt(!1),i=o=>`/2025/assets/organizers/${o}`,r="/2025/assets/organizers/muyaho.jpg",s=()=>{(e.person.nickname==="윌"||e.person.name==="윌")&&(console.log("그만큼 신나시는 거지~"),n.value=!0,setTimeout(()=>{n.value=!1},3e3))};return(o,a)=>(oe(),ce("div",{class:"flex flex-col gap-y-8 items-center text-white",onClick:s},[N("div",A2,[N("div",R2,[t.person.image_name?(oe(),ce("img",{key:0,src:i(t.person.image_name),loading:"lazy",class:"absolute top-0 left-0 w-36 md:w-44 h-36 md:h-44 bg-gradient-to-b from-zinc-300/10 to-zinc-300/20 rounded-full object-cover z-10"},null,8,C2)):(oe(),ce("img",P2)),n.value?(oe(),ce("img",{key:2,src:r,class:"absolute top-0 left-0 w-36 md:w-44 h-36 md:h-44 rounded-full object-cover z-20 overlay-animation"})):Ke("",!0)]),N("div",D2,[t.person.nickname!==""&&t.person.name!==""?(oe(),ce("div",L2,[N("div",I2,st(t.person.nickname),1),N("div",U2,st(t.person.name),1)])):(oe(),ce("div",N2,[t.person.nickname!==""?(oe(),ce("div",O2,st(t.person.nickname),1)):(oe(),ce("div",F2,st(t.person.name),1))])),N("div",B2,st(t.person.description),1),N("div",k2,[t.person.social.email?(oe(),ce("a",{key:0,href:`mailto:${t.person.social.email}`,target:"_blank"},[Ue($e(vr),{fill:"gray",width:"16",height:"16"})],8,z2)):Ke("",!0),t.person.social.web?(oe(),ce("a",{key:1,href:t.person.social.web,target:"_blank"},[Ue($e(vr),{fill:"gray",width:"16",height:"16"})],8,H2)):Ke("",!0),t.person.social.linkedin?(oe(),ce("a",{key:2,href:t.person.social.linkedin,target:"_blank"},[Ue($e(Ra),{fill:"gray",width:"16",height:"16"})],8,V2)):Ke("",!0),t.person.social.instagram?(oe(),ce("a",{key:3,href:t.person.social.instagram,target:"_blank"},[Ue($e(Aa),{fill:"gray",width:"16",height:"16"})],8,G2)):Ke("",!0),t.person.social.facebook?(oe(),ce("a",{key:4,href:t.person.social.facebook,target:"_blank"},[Ue($e(du),{fill:"gray",width:"16",height:"16"})],8,W2)):Ke("",!0),t.person.social.github?(oe(),ce("a",{key:5,href:t.person.social.github,target:"_blank"},[Ue($e(wa),{fill:"gray",width:"16",height:"16"})],8,X2)):Ke("",!0),t.person.social.youtube?(oe(),ce("a",{key:6,href:t.person.social.youtube,target:"_blank"},[Ue($e(Pa),{fill:"gray",width:"16",height:"16"})],8,$2)):Ke("",!0),t.person.social.x?(oe(),ce("a",{key:7,href:t.person.social.x,target:"_blank"},[Ue($e(Ca),{fill:"gray",width:"16",height:"16"})],8,q2)):Ke("",!0),t.person.social.mastodon?(oe(),ce("a",{key:8,href:t.person.social.mastodon,target:"_blank"},[Ue($e(hu),{fill:"gray",width:"16",height:"16"})],8,j2)):Ke("",!0),t.person.social.medium?(oe(),ce("a",{key:9,href:t.person.social.medium,target:"_blank"},[Ue($e(pu),{fill:"gray",width:"16",height:"16"})],8,Y2)):Ke("",!0),t.person.social.thread?(oe(),ce("a",{key:10,href:t.person.social.thread,target:"_blank"},[Ue($e(mu),{fill:"gray",width:"16",height:"16"})],8,K2)):Ke("",!0)])])])]))}},J2=$i(Z2,[["__scopeId","data-v-63ffb987"]]),Q2={class:"flex flex-col space-y-12 md:space-y-36 md:scroll-mt-28"},eR={class:"flex justify-center"},tR={class:"px-8 xl:px-0 max-w-[1280px]"},nR={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-12 md:gap-x-24 gap-y-28"},iR={__name:"Organizers",setup(t){const e=Nt([]);zn(()=>{i()});const n=r=>{const s=[...r];for(let o=s.length-1;o>0;o--){const a=Math.floor(Math.random()*(o+1));[s[o],s[a]]=[s[a],s[o]]}return s},i=async()=>{try{const s=await Tt.get("/2025/assets/json/organizers.json");e.value=n(s.data)}catch(r){console.error(r)}};return(r,s)=>(oe(),ce("div",Q2,[Ue(ro,{title:"준비위원회"}),N("div",eR,[N("div",tR,[N("div",nR,[(oe(!0),ce(dt,null,Pt(e.value,o=>(oe(),ce("div",{key:o.id},[Ue(J2,{person:o},null,8,["person"])]))),128))])])])]))}},rR={__name:"Home",setup(t){return(e,n)=>(oe(),ce(dt,null,[Ue(I1,{id:"hero"}),Ue(H1,{id:"intro"}),Ue(sA,{id:"sponsors"}),Ue(YA,{id:"schedule"}),Ue(w2,{id:"speakers"}),Ue(iR,{id:"organizers"}),Ue(EA,{id:"venue"}),Ue(gA,{id:"sponsorsMini"})],64))}},sR=[{path:"/",component:rR},{path:"/CodeOfConduct",component:()=>b1(()=>import("./CodeOfConduct-B0veLZN7.js"),[])}],oR=H0({history:m0("/2025/"),routes:sR}),dm=O_(y1);dm.use(oR);dm.mount("#app");export{dt as F,ro as _,Ue as a,N as b,ce as c,oe as o,Pt as r,st as t};
