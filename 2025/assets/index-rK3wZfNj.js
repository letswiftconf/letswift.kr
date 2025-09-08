(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},pr=[],bn=()=>{},md=()=>!1,So=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Il=n=>n.startsWith("onUpdate:"),Ft=Object.assign,Dl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gd=Object.prototype.hasOwnProperty,tt=(n,e)=>gd.call(n,e),He=Array.isArray,mr=n=>Eo(n)==="[object Map]",af=n=>Eo(n)==="[object Set]",Xe=n=>typeof n=="function",xt=n=>typeof n=="string",Jn=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",lf=n=>(pt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),cf=Object.prototype.toString,Eo=n=>cf.call(n),_d=n=>Eo(n).slice(8,-1),uf=n=>Eo(n)==="[object Object]",Ll=n=>xt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$r=Pl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},vd=/-(\w)/g,fn=Mo(n=>n.replace(vd,(e,t)=>t?t.toUpperCase():"")),xd=/\B([A-Z])/g,ki=Mo(n=>n.replace(xd,"-$1").toLowerCase()),yo=Mo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Vo=Mo(n=>n?`on${yo(n)}`:""),mi=(n,e)=>!Object.is(n,e),zo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ff=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sd=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gc;const To=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=xt(i)?Td(i):Ao(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(xt(n)||pt(n))return n}const Ed=/;(?![^(]*\))/g,Md=/:([^]+)/,yd=/\/\*[^]*?\*\//g;function Td(n){const e={};return n.replace(yd,"").split(Ed).forEach(t=>{if(t){const i=t.split(Md);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function bo(n){let e="";if(xt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=bo(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bd=Pl(Ad);function hf(n){return!!n||n===""}const df=n=>!!(n&&n.__v_isRef===!0),cr=n=>xt(n)?n:n==null?"":He(n)||pt(n)&&(n.toString===cf||!Xe(n.toString))?df(n)?cr(n.value):JSON.stringify(n,pf,2):String(n),pf=(n,e)=>df(e)?pf(n,e.value):mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ho(i,s)+" =>"]=r,t),{})}:af(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ho(t))}:Jn(e)?Ho(e):pt(e)&&!He(e)&&!uf(e)?String(e):e,Ho=(n,e="")=>{var t;return Jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Rd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){++this._on===1&&(this.prevScope=qt,qt=this)}off(){this._on>0&&--this._on===0&&(qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function wd(){return qt}let ct;const Go=new WeakSet;class mf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,qt&&qt.active&&qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Go.has(this)&&(Go.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_c(this),vf(this);const e=ct,t=xn;ct=this,xn=!0;try{return this.fn()}finally{xf(this),ct=e,xn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ol(e);this.deps=this.depsTail=void 0,_c(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Go.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pa(this)&&this.run()}get dirty(){return Pa(this)}}let gf=0,Kr,jr;function _f(n,e=!1){if(n.flags|=8,e){n.next=jr,jr=n;return}n.next=Kr,Kr=n}function Ul(){gf++}function Nl(){if(--gf>0)return;if(jr){let e=jr;for(jr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Kr;){let e=Kr;for(Kr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function vf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ol(i),Cd(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Pa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Sf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ns)||(n.globalVersion=ns,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pa(n))))return;n.flags|=2;const e=n.dep,t=ct,i=xn;ct=n,xn=!0;try{vf(n);const r=n.fn(n._value);(e.version===0||mi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=t,xn=i,xf(n),n.flags&=-3}}function Ol(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ol(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Cd(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let xn=!0;const Ef=[];function qn(){Ef.push(xn),xn=!1}function Yn(){const n=Ef.pop();xn=n===void 0?!0:n}function _c(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let ns=0;class Pd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ct||!xn||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new Pd(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,Mf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=i)}return t}trigger(e){this.version++,ns++,this.notify(e)}notify(e){Ul();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Nl()}}}function Mf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Mf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ia=new WeakMap,Vi=Symbol(""),Da=Symbol(""),is=Symbol("");function It(n,e,t){if(xn&&ct){let i=Ia.get(n);i||Ia.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Fl),r.map=i,r.key=t),r.track()}}function zn(n,e,t,i,r,s){const o=Ia.get(n);if(!o){ns++;return}const a=l=>{l&&l.trigger()};if(Ul(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&Ll(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===is||!Jn(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(is)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Vi)),mr(n)&&a(o.get(Da)));break;case"delete":l||(a(o.get(Vi)),mr(n)&&a(o.get(Da)));break;case"set":mr(n)&&a(o.get(Vi));break}}Nl()}function qi(n){const e=et(n);return e===n?e:(It(e,"iterate",is),un(n)?e:e.map(wt))}function Ro(n){return It(n=et(n),"iterate",is),n}const Id={__proto__:null,[Symbol.iterator](){return ko(this,Symbol.iterator,wt)},concat(...n){return qi(this).concat(...n.map(e=>He(e)?qi(e):e))},entries(){return ko(this,"entries",n=>(n[1]=wt(n[1]),n))},every(n,e){return In(this,"every",n,e,void 0,arguments)},filter(n,e){return In(this,"filter",n,e,t=>t.map(wt),arguments)},find(n,e){return In(this,"find",n,e,wt,arguments)},findIndex(n,e){return In(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return In(this,"findLast",n,e,wt,arguments)},findLastIndex(n,e){return In(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return In(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wo(this,"includes",n)},indexOf(...n){return Wo(this,"indexOf",n)},join(n){return qi(this).join(n)},lastIndexOf(...n){return Wo(this,"lastIndexOf",n)},map(n,e){return In(this,"map",n,e,void 0,arguments)},pop(){return Br(this,"pop")},push(...n){return Br(this,"push",n)},reduce(n,...e){return vc(this,"reduce",n,e)},reduceRight(n,...e){return vc(this,"reduceRight",n,e)},shift(){return Br(this,"shift")},some(n,e){return In(this,"some",n,e,void 0,arguments)},splice(...n){return Br(this,"splice",n)},toReversed(){return qi(this).toReversed()},toSorted(n){return qi(this).toSorted(n)},toSpliced(...n){return qi(this).toSpliced(...n)},unshift(...n){return Br(this,"unshift",n)},values(){return ko(this,"values",wt)}};function ko(n,e,t){const i=Ro(n),r=i[e]();return i!==n&&!un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Dd=Array.prototype;function In(n,e,t,i,r,s){const o=Ro(n),a=o!==n&&!un(n),l=o[e];if(l!==Dd[e]){const f=l.apply(n,s);return a?wt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,wt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function vc(n,e,t,i){const r=Ro(n);let s=t;return r!==n&&(un(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,wt(a),l,n)}),r[e](s,...i)}function Wo(n,e,t){const i=et(n);It(i,"iterate",is);const r=i[e](...t);return(r===-1||r===!1)&&zl(t[0])?(t[0]=et(t[0]),i[e](...t)):r}function Br(n,e,t=[]){qn(),Ul();const i=et(n)[e].apply(n,t);return Nl(),Yn(),i}const Ld=Pl("__proto__,__v_isRef,__isVue"),yf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jn));function Ud(n){Jn(n)||(n=String(n));const e=et(this);return It(e,"has",n),e.hasOwnProperty(n)}class Tf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Wd:wf:s?Rf:bf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=Id[t]))return l;if(t==="hasOwnProperty")return Ud}const a=Reflect.get(e,t,Nt(e)?e:i);return(Jn(t)?yf.has(t):Ld(t))||(r||It(e,"get",t),s)?a:Nt(a)?o&&Ll(t)?a:a.value:pt(a)?r?Pf(a):wo(a):a}}class Af extends Tf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=vi(s);if(!un(i)&&!vi(i)&&(s=et(s),i=et(i)),!He(e)&&Nt(s)&&!Nt(i))return l?!1:(s.value=i,!0)}const o=He(e)&&Ll(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,Nt(e)?e:r);return e===et(r)&&(o?mi(i,s)&&zn(e,"set",t,i):zn(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&zn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Jn(t)||!yf.has(t))&&It(e,"has",t),i}ownKeys(e){return It(e,"iterate",He(e)?"length":Vi),Reflect.ownKeys(e)}}class Nd extends Tf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Od=new Af,Fd=new Nd,Bd=new Af(!0);const La=n=>n,Ts=n=>Reflect.getPrototypeOf(n);function Vd(n,e,t){return function(...i){const r=this.__v_raw,s=et(r),o=mr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?La:e?ao:wt;return!e&&It(s,"iterate",l?Da:Vi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function As(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function zd(n,e){const t={get(r){const s=this.__v_raw,o=et(s),a=et(r);n||(mi(r,a)&&It(o,"get",r),It(o,"get",a));const{has:l}=Ts(o),c=e?La:n?ao:wt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&It(et(r),"iterate",Vi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=et(s),a=et(r);return n||(mi(r,a)&&It(o,"has",r),It(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=et(a),c=e?La:n?ao:wt;return!n&&It(l,"iterate",Vi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ft(t,n?{add:As("add"),set:As("set"),delete:As("delete"),clear:As("clear")}:{add(r){!e&&!un(r)&&!vi(r)&&(r=et(r));const s=et(this);return Ts(s).has.call(s,r)||(s.add(r),zn(s,"add",r,r)),this},set(r,s){!e&&!un(s)&&!vi(s)&&(s=et(s));const o=et(this),{has:a,get:l}=Ts(o);let c=a.call(o,r);c||(r=et(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?mi(s,u)&&zn(o,"set",r,s):zn(o,"add",r,s),this},delete(r){const s=et(this),{has:o,get:a}=Ts(s);let l=o.call(s,r);l||(r=et(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&zn(s,"delete",r,void 0),c},clear(){const r=et(this),s=r.size!==0,o=r.clear();return s&&zn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Vd(r,n,e)}),t}function Bl(n,e){const t=zd(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(tt(t,r)&&r in i?t:i,r,s)}const Hd={get:Bl(!1,!1)},Gd={get:Bl(!1,!0)},kd={get:Bl(!0,!1)};const bf=new WeakMap,Rf=new WeakMap,wf=new WeakMap,Wd=new WeakMap;function Xd(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(n){return n.__v_skip||!Object.isExtensible(n)?0:Xd(_d(n))}function wo(n){return vi(n)?n:Vl(n,!1,Od,Hd,bf)}function Cf(n){return Vl(n,!1,Bd,Gd,Rf)}function Pf(n){return Vl(n,!0,Fd,kd,wf)}function Vl(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=qd(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function gr(n){return vi(n)?gr(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function un(n){return!!(n&&n.__v_isShallow)}function zl(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Yd(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&ff(n,"__v_skip",!0),n}const wt=n=>pt(n)?wo(n):n,ao=n=>pt(n)?Pf(n):n;function Nt(n){return n?n.__v_isRef===!0:!1}function ui(n){return If(n,!1)}function $d(n){return If(n,!0)}function If(n,e){return Nt(n)?n:new Kd(n,e)}class Kd{constructor(e,t){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:wt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||un(e)||vi(e);e=i?e:et(e),mi(e,t)&&(this._rawValue=e,this._value=i?e:wt(e),this.dep.trigger())}}function Yt(n){return Nt(n)?n.value:n}const jd={get:(n,e,t)=>e==="__v_raw"?n:Yt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Nt(r)&&!Nt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Df(n){return gr(n)?n:new Proxy(n,jd)}class Zd{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ns-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return _f(this,!0),!0}get value(){const e=this.dep.track();return Sf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jd(n,e,t=!1){let i,r;return Xe(n)?i=n:(i=n.get,r=n.set),new Zd(i,r,t)}const bs={},lo=new WeakMap;let Li;function Qd(n,e=!1,t=Li){if(t){let i=lo.get(t);i||lo.set(t,i=[]),i.push(n)}}function ep(n,e,t=ut){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=M=>r?M:un(M)||r===!1||r===0?fi(M,1):fi(M);let u,f,h,d,_=!1,x=!1;if(Nt(n)?(f=()=>n.value,_=un(n)):gr(n)?(f=()=>c(n),_=!0):He(n)?(x=!0,_=n.some(M=>gr(M)||un(M)),f=()=>n.map(M=>{if(Nt(M))return M.value;if(gr(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){qn();try{h()}finally{Yn()}}const M=Li;Li=u;try{return l?l(n,3,[d]):n(d)}finally{Li=M}}:f=bn,e&&r){const M=f,U=r===!0?1/0:r;f=()=>fi(M(),U)}const m=wd(),p=()=>{u.stop(),m&&m.active&&Dl(m.effects,u)};if(s&&e){const M=e;e=(...U)=>{M(...U),p()}}let b=x?new Array(n.length).fill(bs):bs;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const U=u.run();if(r||_||(x?U.some((P,C)=>mi(P,b[C])):mi(U,b))){h&&h();const P=Li;Li=u;try{const C=[U,b===bs?void 0:x&&b[0]===bs?[]:b,d];b=U,l?l(e,3,C):e(...C)}finally{Li=P}}}else u.run()};return a&&a(T),u=new mf(f),u.scheduler=o?()=>o(T,!1):T,d=M=>Qd(M,!1,u),h=u.onStop=()=>{const M=lo.get(u);if(M){if(l)l(M,4);else for(const U of M)U();lo.delete(u)}},e?i?T(!0):b=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function fi(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Nt(n))fi(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)fi(n[i],e,t);else if(af(n)||mr(n))n.forEach(i=>{fi(i,e,t)});else if(uf(n)){for(const i in n)fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(n,e,t,i){try{return i?n(...i):n()}catch(r){Co(r,e,t)}}function wn(n,e,t,i){if(Xe(n)){const r=gs(n,e,t,i);return r&&lf(r)&&r.catch(s=>{Co(s,e,t)}),r}if(He(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wn(n[s],e,t,i));return r}}function Co(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){qn(),gs(s,null,10,[n,l,c]),Yn();return}}tp(n,t,r,i,o)}function tp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Gt=[];let yn=-1;const _r=[];let ai=null,ur=0;const Lf=Promise.resolve();let co=null;function Uf(n){const e=co||Lf;return n?e.then(this?n.bind(this):n):e}function np(n){let e=yn+1,t=Gt.length;for(;e<t;){const i=e+t>>>1,r=Gt[i],s=rs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Hl(n){if(!(n.flags&1)){const e=rs(n),t=Gt[Gt.length-1];!t||!(n.flags&2)&&e>=rs(t)?Gt.push(n):Gt.splice(np(e),0,n),n.flags|=1,Nf()}}function Nf(){co||(co=Lf.then(Ff))}function ip(n){He(n)?_r.push(...n):ai&&n.id===-1?ai.splice(ur+1,0,n):n.flags&1||(_r.push(n),n.flags|=1),Nf()}function xc(n,e,t=yn+1){for(;t<Gt.length;t++){const i=Gt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Gt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Of(n){if(_r.length){const e=[...new Set(_r)].sort((t,i)=>rs(t)-rs(i));if(_r.length=0,ai){ai.push(...e);return}for(ai=e,ur=0;ur<ai.length;ur++){const t=ai[ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ai=null,ur=0}}const rs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ff(n){try{for(yn=0;yn<Gt.length;yn++){const e=Gt[yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yn<Gt.length;yn++){const e=Gt[yn];e&&(e.flags&=-2)}yn=-1,Gt.length=0,Of(),co=null,(Gt.length||_r.length)&&Ff()}}let kt=null,Bf=null;function uo(n){const e=kt;return kt=n,Bf=n&&n.type.__scopeId||null,e}function Vf(n,e=kt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Pc(-1);const s=uo(e);let o;try{o=n(...r)}finally{uo(s),i._d&&Pc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function yi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qn(),wn(l,t,8,[n.el,a,n,e]),Yn())}}const rp=Symbol("_vte"),sp=n=>n.__isTeleport;function Gl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Gl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Si(n,e){return Xe(n)?Ft({name:n.name},e,{setup:n}):n}function zf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function fo(n,e,t,i,r=!1){if(He(n)){n.forEach((_,x)=>fo(_,e&&(He(e)?e[x]:e),t,i,r));return}if(vr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fo(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Yl(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState,h=et(f),d=f===ut?()=>!1:_=>tt(h,_);if(c!=null&&c!==l&&(xt(c)?(u[c]=null,d(c)&&(f[c]=null)):Nt(c)&&(c.value=null)),Xe(l))gs(l,a,12,[o,u]);else{const _=xt(l),x=Nt(l);if(_||x){const m=()=>{if(n.f){const p=_?d(l)?f[l]:u[l]:l.value;r?He(p)&&Dl(p,s):He(p)?p.includes(s)||p.push(s):_?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,d(l)&&(f[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Qt(m,t)):m()}}}To().requestIdleCallback;To().cancelIdleCallback;const vr=n=>!!n.type.__asyncLoader,Hf=n=>n.type.__isKeepAlive;function op(n,e){Gf(n,"a",e)}function ap(n,e){Gf(n,"da",e)}function Gf(n,e,t=Ut){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Po(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Hf(r.parent.vnode)&&lp(i,e,t,r),r=r.parent}}function lp(n,e,t,i){const r=Po(e,n,i,!0);kl(()=>{Dl(i[e],r)},t)}function Po(n,e,t=Ut,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{qn();const a=_s(t),l=wn(e,t,n,o);return a(),Yn(),l});return i?r.unshift(s):r.push(s),s}}const Qn=n=>(e,t=Ut)=>{(!as||n==="sp")&&Po(n,(...i)=>e(...i),t)},cp=Qn("bm"),kf=Qn("m"),up=Qn("bu"),fp=Qn("u"),hp=Qn("bum"),kl=Qn("um"),dp=Qn("sp"),pp=Qn("rtg"),mp=Qn("rtc");function gp(n,e=Ut){Po("ec",n,e)}const Wf="components";function Xf(n,e){return Yf(Wf,n,!0,e)||n}const qf=Symbol.for("v-ndc");function _p(n){return xt(n)?Yf(Wf,n,!1)||n:n||qf}function Yf(n,e,t=!0,i=!1){const r=kt||Ut;if(r){const s=r.type;{const a=im(s,!1);if(a&&(a===e||a===fn(e)||a===yo(fn(e))))return s}const o=Sc(r[n]||s[n],e)||Sc(r.appContext[n],e);return!o&&i?s:o}}function Sc(n,e){return n&&(n[e]||n[fn(e)]||n[yo(fn(e))])}function Rs(n,e,t,i){let r;const s=t,o=He(n);if(o||xt(n)){const a=o&&gr(n);let l=!1,c=!1;a&&(l=!un(n),c=vi(n),n=Ro(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ao(wt(n[u])):wt(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function Ec(n,e,t={},i,r){if(kt.ce||kt.parent&&vr(kt.parent)&&kt.parent.ce)return e!=="default"&&(t.name=e),_t(),yr(Dt,null,[Rt("slot",t,i&&i())],64);let s=n[e];s&&s._c&&(s._d=!1),_t();const o=s&&$f(s(t)),a=t.key||o&&o.key,l=yr(Dt,{key:(a&&!Jn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function $f(n){return n.some(e=>os(e)?!(e.type===$n||e.type===Dt&&!$f(e.children)):!0)?n:null}const Ua=n=>n?ph(n)?Yl(n):Ua(n.parent):null,Zr=Ft(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ua(n.parent),$root:n=>Ua(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>jf(n),$forceUpdate:n=>n.f||(n.f=()=>{Hl(n.update)}),$nextTick:n=>n.n||(n.n=Uf.bind(n.proxy)),$watch:n=>Bp.bind(n)}),Xo=(n,e)=>n!==ut&&!n.__isScriptSetup&&tt(n,e),vp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xo(i,e))return o[e]=1,i[e];if(r!==ut&&tt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,s[e];if(t!==ut&&tt(t,e))return o[e]=4,t[e];Na&&(o[e]=0)}}const u=Zr[e];let f,h;if(u)return e==="$attrs"&&It(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ut&&tt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,tt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Xo(r,e)?(r[e]=t,!0):i!==ut&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ut&&tt(n,o)||Xo(e,o)||(a=s[0])&&tt(a,o)||tt(i,o)||tt(Zr,o)||tt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mc(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Na=!0;function xp(n){const e=jf(n),t=n.proxy,i=n.ctx;Na=!1,e.beforeCreate&&yc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:T,unmounted:M,render:U,renderTracked:P,renderTriggered:C,errorCaptured:B,serverPrefetch:A,expose:y,inheritAttrs:L,components:te,directives:W,filters:ie}=e;if(c&&Sp(c,i,null),o)for(const re in o){const V=o[re];Xe(V)&&(i[re]=V.bind(t))}if(r){const re=r.call(t,t);pt(re)&&(n.data=wo(re))}if(Na=!0,s)for(const re in s){const V=s[re],ge=Xe(V)?V.bind(t,t):Xe(V.get)?V.get.bind(t,t):bn,xe=!Xe(V)&&Xe(V.set)?V.set.bind(t):bn,Ce=Et({get:ge,set:xe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Oe=>Ce.value=Oe})}if(a)for(const re in a)Kf(a[re],i,t,re);if(l){const re=Xe(l)?l.call(t):l;Reflect.ownKeys(re).forEach(V=>{js(V,re[V])})}u&&yc(u,n,"c");function $(re,V){He(V)?V.forEach(ge=>re(ge.bind(t))):V&&re(V.bind(t))}if($(cp,f),$(kf,h),$(up,d),$(fp,_),$(op,x),$(ap,m),$(gp,B),$(mp,P),$(pp,C),$(hp,b),$(kl,M),$(dp,A),He(y))if(y.length){const re=n.exposed||(n.exposed={});y.forEach(V=>{Object.defineProperty(re,V,{get:()=>t[V],set:ge=>t[V]=ge})})}else n.exposed||(n.exposed={});U&&n.render===bn&&(n.render=U),L!=null&&(n.inheritAttrs=L),te&&(n.components=te),W&&(n.directives=W),A&&zf(n)}function Sp(n,e,t=bn){He(n)&&(n=Oa(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=Wn(r.from||i,r.default,!0):s=Wn(r.from||i):s=Wn(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function yc(n,e,t){wn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Kf(n,e,t,i){let r=i.includes(".")?ch(t,i):()=>t[i];if(xt(n)){const s=e[n];Xe(s)&&Jr(r,s)}else if(Xe(n))Jr(r,n.bind(t));else if(pt(n))if(He(n))n.forEach(s=>Kf(s,e,t,i));else{const s=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(s)&&Jr(r,s,n)}}function jf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ho(l,c,o,!0)),ho(l,e,o)),pt(e)&&s.set(e,l),l}function ho(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ho(n,s,t,!0),r&&r.forEach(o=>ho(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ep[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ep={data:Tc,props:Ac,emits:Ac,methods:qr,computed:qr,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:qr,directives:qr,watch:yp,provide:Tc,inject:Mp};function Tc(n,e){return e?n?function(){return Ft(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Mp(n,e){return qr(Oa(n),Oa(e))}function Oa(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function qr(n,e){return n?Ft(Object.create(null),n,e):e}function Ac(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Ft(Object.create(null),Mc(n),Mc(e??{})):e}function yp(n,e){if(!n)return e;if(!e)return n;const t=Ft(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function Zf(){return{app:null,config:{isNativeTag:md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function Ap(n,e){return function(i,r=null){Xe(i)||(i=Ft({},i)),r!=null&&!pt(r)&&(r=null);const s=Zf(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Tp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:sm,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...f)):Xe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Rt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Yl(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(wn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=xr;xr=c;try{return u()}finally{xr=f}}};return c}}let xr=null;function js(n,e){if(Ut){let t=Ut.provides;const i=Ut.parent&&Ut.parent.provides;i===t&&(t=Ut.provides=Object.create(i)),t[n]=e}}function Wn(n,e,t=!1){const i=Ut||kt;if(i||xr){let r=xr?xr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const Jf={},Qf=()=>Object.create(Jf),eh=n=>Object.getPrototypeOf(n)===Jf;function bp(n,e,t,i=!1){const r={},s=Qf();n.propsDefaults=Object.create(null),th(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Cf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Rp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=et(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Io(n.emitsOptions,h))continue;const d=e[h];if(l)if(tt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=fn(h);r[_]=Fa(l,a,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{th(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!tt(e,f)&&((u=ki(f))===f||!tt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Fa(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!tt(e,f))&&(delete s[f],c=!0)}c&&zn(n.attrs,"set","")}function th(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if($r(l))continue;const c=e[l];let u;r&&tt(r,u=fn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Io(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=et(t),c=a||ut;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Fa(r,l,f,c[f],n,!tt(c,f))}}return o}function Fa(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=_s(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ki(t))&&(i=!0))}return i}const wp=new WeakMap;function nh(n,e,t=!1){const i=t?wp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=f=>{l=!0;const[h,d]=nh(f,e,!0);Ft(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,pr),pr;if(He(s))for(let u=0;u<s.length;u++){const f=fn(s[u]);bc(f)&&(o[f]=ut)}else if(s)for(const u in s){const f=fn(u);if(bc(f)){const h=s[u],d=o[f]=He(h)||Xe(h)?{type:h}:Ft({},h),_=d.type;let x=!1,m=!0;if(He(_))for(let p=0;p<_.length;++p){const b=_[p],T=Xe(b)&&b.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Xe(_)&&_.name==="Boolean";d[0]=x,d[1]=m,(x||tt(d,"default"))&&a.push(f)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function bc(n){return n[0]!=="$"&&!$r(n)}const Wl=n=>n[0]==="_"||n==="$stable",Xl=n=>He(n)?n.map(Tn):[Tn(n)],Cp=(n,e,t)=>{if(e._n)return e;const i=Vf((...r)=>Xl(e(...r)),t);return i._c=!1,i},ih=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Wl(r))continue;const s=n[r];if(Xe(s))e[r]=Cp(r,s,i);else if(s!=null){const o=Xl(s);e[r]=()=>o}}},rh=(n,e)=>{const t=Xl(e);n.slots.default=()=>t},sh=(n,e,t)=>{for(const i in e)(t||!Wl(i))&&(n[i]=e[i])},Pp=(n,e,t)=>{const i=n.slots=Qf();if(n.vnode.shapeFlag&32){const r=e._;r?(sh(i,e,t),t&&ff(i,"_",r,!0)):ih(e,i)}else e&&rh(n,e)},Ip=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:sh(r,e,t):(s=!e.$stable,ih(e,r)),o=e}else e&&(rh(n,e),o={default:1});if(s)for(const a in r)!Wl(a)&&o[a]==null&&delete r[a]},Qt=Xp;function Dp(n){return Lp(n)}function Lp(n,e){const t=To();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=bn,insertStaticContent:_}=n,x=(R,w,v,Q=null,q=null,Y=null,Z=void 0,se=null,j=!!w.dynamicChildren)=>{if(R===w)return;R&&!Vr(R,w)&&(Q=N(R),Oe(R,q,Y,!0),R=null),w.patchFlag===-2&&(j=!1,w.dynamicChildren=null);const{type:K,ref:Se,shapeFlag:E}=w;switch(K){case Do:m(R,w,v,Q);break;case $n:p(R,w,v,Q);break;case Zs:R==null&&b(w,v,Q,Z);break;case Dt:te(R,w,v,Q,q,Y,Z,se,j);break;default:E&1?U(R,w,v,Q,q,Y,Z,se,j):E&6?W(R,w,v,Q,q,Y,Z,se,j):(E&64||E&128)&&K.process(R,w,v,Q,q,Y,Z,se,j,ae)}Se!=null&&q&&fo(Se,R&&R.ref,Y,w||R,!w)},m=(R,w,v,Q)=>{if(R==null)i(w.el=a(w.children),v,Q);else{const q=w.el=R.el;w.children!==R.children&&c(q,w.children)}},p=(R,w,v,Q)=>{R==null?i(w.el=l(w.children||""),v,Q):w.el=R.el},b=(R,w,v,Q)=>{[R.el,R.anchor]=_(R.children,w,v,Q,R.el,R.anchor)},T=({el:R,anchor:w},v,Q)=>{let q;for(;R&&R!==w;)q=h(R),i(R,v,Q),R=q;i(w,v,Q)},M=({el:R,anchor:w})=>{let v;for(;R&&R!==w;)v=h(R),r(R),R=v;r(w)},U=(R,w,v,Q,q,Y,Z,se,j)=>{w.type==="svg"?Z="svg":w.type==="math"&&(Z="mathml"),R==null?P(w,v,Q,q,Y,Z,se,j):A(R,w,q,Y,Z,se,j)},P=(R,w,v,Q,q,Y,Z,se)=>{let j,K;const{props:Se,shapeFlag:E,transition:g,dirs:I}=R;if(j=R.el=o(R.type,Y,Se&&Se.is,Se),E&8?u(j,R.children):E&16&&B(R.children,j,null,Q,q,qo(R,Y),Z,se),I&&yi(R,null,Q,"created"),C(j,R,R.scopeId,Z,Q),Se){for(const J in Se)J!=="value"&&!$r(J)&&s(j,J,null,Se[J],Y,Q);"value"in Se&&s(j,"value",null,Se.value,Y),(K=Se.onVnodeBeforeMount)&&Mn(K,Q,R)}I&&yi(R,null,Q,"beforeMount");const G=Up(q,g);G&&g.beforeEnter(j),i(j,w,v),((K=Se&&Se.onVnodeMounted)||G||I)&&Qt(()=>{K&&Mn(K,Q,R),G&&g.enter(j),I&&yi(R,null,Q,"mounted")},q)},C=(R,w,v,Q,q)=>{if(v&&d(R,v),Q)for(let Y=0;Y<Q.length;Y++)d(R,Q[Y]);if(q){let Y=q.subTree;if(w===Y||fh(Y.type)&&(Y.ssContent===w||Y.ssFallback===w)){const Z=q.vnode;C(R,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},B=(R,w,v,Q,q,Y,Z,se,j=0)=>{for(let K=j;K<R.length;K++){const Se=R[K]=se?li(R[K]):Tn(R[K]);x(null,Se,w,v,Q,q,Y,Z,se)}},A=(R,w,v,Q,q,Y,Z)=>{const se=w.el=R.el;let{patchFlag:j,dynamicChildren:K,dirs:Se}=w;j|=R.patchFlag&16;const E=R.props||ut,g=w.props||ut;let I;if(v&&Ti(v,!1),(I=g.onVnodeBeforeUpdate)&&Mn(I,v,w,R),Se&&yi(w,R,v,"beforeUpdate"),v&&Ti(v,!0),(E.innerHTML&&g.innerHTML==null||E.textContent&&g.textContent==null)&&u(se,""),K?y(R.dynamicChildren,K,se,v,Q,qo(w,q),Y):Z||V(R,w,se,null,v,Q,qo(w,q),Y,!1),j>0){if(j&16)L(se,E,g,v,q);else if(j&2&&E.class!==g.class&&s(se,"class",null,g.class,q),j&4&&s(se,"style",E.style,g.style,q),j&8){const G=w.dynamicProps;for(let J=0;J<G.length;J++){const z=G[J],ye=E[z],pe=g[z];(pe!==ye||z==="value")&&s(se,z,ye,pe,q,v)}}j&1&&R.children!==w.children&&u(se,w.children)}else!Z&&K==null&&L(se,E,g,v,q);((I=g.onVnodeUpdated)||Se)&&Qt(()=>{I&&Mn(I,v,w,R),Se&&yi(w,R,v,"updated")},Q)},y=(R,w,v,Q,q,Y,Z)=>{for(let se=0;se<w.length;se++){const j=R[se],K=w[se],Se=j.el&&(j.type===Dt||!Vr(j,K)||j.shapeFlag&198)?f(j.el):v;x(j,K,Se,null,Q,q,Y,Z,!0)}},L=(R,w,v,Q,q)=>{if(w!==v){if(w!==ut)for(const Y in w)!$r(Y)&&!(Y in v)&&s(R,Y,w[Y],null,q,Q);for(const Y in v){if($r(Y))continue;const Z=v[Y],se=w[Y];Z!==se&&Y!=="value"&&s(R,Y,se,Z,q,Q)}"value"in v&&s(R,"value",w.value,v.value,q)}},te=(R,w,v,Q,q,Y,Z,se,j)=>{const K=w.el=R?R.el:a(""),Se=w.anchor=R?R.anchor:a("");let{patchFlag:E,dynamicChildren:g,slotScopeIds:I}=w;I&&(se=se?se.concat(I):I),R==null?(i(K,v,Q),i(Se,v,Q),B(w.children||[],v,Se,q,Y,Z,se,j)):E>0&&E&64&&g&&R.dynamicChildren?(y(R.dynamicChildren,g,v,q,Y,Z,se),(w.key!=null||q&&w===q.subTree)&&oh(R,w,!0)):V(R,w,v,Se,q,Y,Z,se,j)},W=(R,w,v,Q,q,Y,Z,se,j)=>{w.slotScopeIds=se,R==null?w.shapeFlag&512?q.ctx.activate(w,v,Q,Z,j):ie(w,v,Q,q,Y,Z,j):ue(R,w,j)},ie=(R,w,v,Q,q,Y,Z)=>{const se=R.component=Jp(R,Q,q);if(Hf(R)&&(se.ctx.renderer=ae),Qp(se,!1,Z),se.asyncDep){if(q&&q.registerDep(se,$,Z),!R.el){const j=se.subTree=Rt($n);p(null,j,w,v)}}else $(se,R,w,v,q,Y,Z)},ue=(R,w,v)=>{const Q=w.component=R.component;if(kp(R,w,v))if(Q.asyncDep&&!Q.asyncResolved){re(Q,w,v);return}else Q.next=w,Q.update();else w.el=R.el,Q.vnode=w},$=(R,w,v,Q,q,Y,Z)=>{const se=()=>{if(R.isMounted){let{next:E,bu:g,u:I,parent:G,vnode:J}=R;{const Re=ah(R);if(Re){E&&(E.el=J.el,re(R,E,Z)),Re.asyncDep.then(()=>{R.isUnmounted||se()});return}}let z=E,ye;Ti(R,!1),E?(E.el=J.el,re(R,E,Z)):E=J,g&&zo(g),(ye=E.props&&E.props.onVnodeBeforeUpdate)&&Mn(ye,G,E,J),Ti(R,!0);const pe=wc(R),Te=R.subTree;R.subTree=pe,x(Te,pe,f(Te.el),N(Te),R,q,Y),E.el=pe.el,z===null&&Wp(R,pe.el),I&&Qt(I,q),(ye=E.props&&E.props.onVnodeUpdated)&&Qt(()=>Mn(ye,G,E,J),q)}else{let E;const{el:g,props:I}=w,{bm:G,m:J,parent:z,root:ye,type:pe}=R,Te=vr(w);Ti(R,!1),G&&zo(G),!Te&&(E=I&&I.onVnodeBeforeMount)&&Mn(E,z,w),Ti(R,!0);{ye.ce&&ye.ce._injectChildStyle(pe);const Re=R.subTree=wc(R);x(null,Re,v,Q,R,q,Y),w.el=Re.el}if(J&&Qt(J,q),!Te&&(E=I&&I.onVnodeMounted)){const Re=w;Qt(()=>Mn(E,z,Re),q)}(w.shapeFlag&256||z&&vr(z.vnode)&&z.vnode.shapeFlag&256)&&R.a&&Qt(R.a,q),R.isMounted=!0,w=v=Q=null}};R.scope.on();const j=R.effect=new mf(se);R.scope.off();const K=R.update=j.run.bind(j),Se=R.job=j.runIfDirty.bind(j);Se.i=R,Se.id=R.uid,j.scheduler=()=>Hl(Se),Ti(R,!0),K()},re=(R,w,v)=>{w.component=R;const Q=R.vnode.props;R.vnode=w,R.next=null,Rp(R,w.props,Q,v),Ip(R,w.children,v),qn(),xc(R),Yn()},V=(R,w,v,Q,q,Y,Z,se,j=!1)=>{const K=R&&R.children,Se=R?R.shapeFlag:0,E=w.children,{patchFlag:g,shapeFlag:I}=w;if(g>0){if(g&128){xe(K,E,v,Q,q,Y,Z,se,j);return}else if(g&256){ge(K,E,v,Q,q,Y,Z,se,j);return}}I&8?(Se&16&&Ae(K,q,Y),E!==K&&u(v,E)):Se&16?I&16?xe(K,E,v,Q,q,Y,Z,se,j):Ae(K,q,Y,!0):(Se&8&&u(v,""),I&16&&B(E,v,Q,q,Y,Z,se,j))},ge=(R,w,v,Q,q,Y,Z,se,j)=>{R=R||pr,w=w||pr;const K=R.length,Se=w.length,E=Math.min(K,Se);let g;for(g=0;g<E;g++){const I=w[g]=j?li(w[g]):Tn(w[g]);x(R[g],I,v,null,q,Y,Z,se,j)}K>Se?Ae(R,q,Y,!0,!1,E):B(w,v,Q,q,Y,Z,se,j,E)},xe=(R,w,v,Q,q,Y,Z,se,j)=>{let K=0;const Se=w.length;let E=R.length-1,g=Se-1;for(;K<=E&&K<=g;){const I=R[K],G=w[K]=j?li(w[K]):Tn(w[K]);if(Vr(I,G))x(I,G,v,null,q,Y,Z,se,j);else break;K++}for(;K<=E&&K<=g;){const I=R[E],G=w[g]=j?li(w[g]):Tn(w[g]);if(Vr(I,G))x(I,G,v,null,q,Y,Z,se,j);else break;E--,g--}if(K>E){if(K<=g){const I=g+1,G=I<Se?w[I].el:Q;for(;K<=g;)x(null,w[K]=j?li(w[K]):Tn(w[K]),v,G,q,Y,Z,se,j),K++}}else if(K>g)for(;K<=E;)Oe(R[K],q,Y,!0),K++;else{const I=K,G=K,J=new Map;for(K=G;K<=g;K++){const Ie=w[K]=j?li(w[K]):Tn(w[K]);Ie.key!=null&&J.set(Ie.key,K)}let z,ye=0;const pe=g-G+1;let Te=!1,Re=0;const ce=new Array(pe);for(K=0;K<pe;K++)ce[K]=0;for(K=I;K<=E;K++){const Ie=R[K];if(ye>=pe){Oe(Ie,q,Y,!0);continue}let De;if(Ie.key!=null)De=J.get(Ie.key);else for(z=G;z<=g;z++)if(ce[z-G]===0&&Vr(Ie,w[z])){De=z;break}De===void 0?Oe(Ie,q,Y,!0):(ce[De-G]=K+1,De>=Re?Re=De:Te=!0,x(Ie,w[De],v,null,q,Y,Z,se,j),ye++)}const be=Te?Np(ce):pr;for(z=be.length-1,K=pe-1;K>=0;K--){const Ie=G+K,De=w[Ie],_e=Ie+1<Se?w[Ie+1].el:Q;ce[K]===0?x(null,De,v,_e,q,Y,Z,se,j):Te&&(z<0||K!==be[z]?Ce(De,v,_e,2):z--)}}},Ce=(R,w,v,Q,q=null)=>{const{el:Y,type:Z,transition:se,children:j,shapeFlag:K}=R;if(K&6){Ce(R.component.subTree,w,v,Q);return}if(K&128){R.suspense.move(w,v,Q);return}if(K&64){Z.move(R,w,v,ae);return}if(Z===Dt){i(Y,w,v);for(let E=0;E<j.length;E++)Ce(j[E],w,v,Q);i(R.anchor,w,v);return}if(Z===Zs){T(R,w,v);return}if(Q!==2&&K&1&&se)if(Q===0)se.beforeEnter(Y),i(Y,w,v),Qt(()=>se.enter(Y),q);else{const{leave:E,delayLeave:g,afterLeave:I}=se,G=()=>{R.ctx.isUnmounted?r(Y):i(Y,w,v)},J=()=>{E(Y,()=>{G(),I&&I()})};g?g(Y,G,J):J()}else i(Y,w,v)},Oe=(R,w,v,Q=!1,q=!1)=>{const{type:Y,props:Z,ref:se,children:j,dynamicChildren:K,shapeFlag:Se,patchFlag:E,dirs:g,cacheIndex:I}=R;if(E===-2&&(q=!1),se!=null&&(qn(),fo(se,null,v,R,!0),Yn()),I!=null&&(w.renderCache[I]=void 0),Se&256){w.ctx.deactivate(R);return}const G=Se&1&&g,J=!vr(R);let z;if(J&&(z=Z&&Z.onVnodeBeforeUnmount)&&Mn(z,w,R),Se&6)me(R.component,v,Q);else{if(Se&128){R.suspense.unmount(v,Q);return}G&&yi(R,null,w,"beforeUnmount"),Se&64?R.type.remove(R,w,v,ae,Q):K&&!K.hasOnce&&(Y!==Dt||E>0&&E&64)?Ae(K,w,v,!1,!0):(Y===Dt&&E&384||!q&&Se&16)&&Ae(j,w,v),Q&&Ze(R)}(J&&(z=Z&&Z.onVnodeUnmounted)||G)&&Qt(()=>{z&&Mn(z,w,R),G&&yi(R,null,w,"unmounted")},v)},Ze=R=>{const{type:w,el:v,anchor:Q,transition:q}=R;if(w===Dt){ne(v,Q);return}if(w===Zs){M(R);return}const Y=()=>{r(v),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(R.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:se}=q,j=()=>Z(v,Y);se?se(R.el,Y,j):j()}else Y()},ne=(R,w)=>{let v;for(;R!==w;)v=h(R),r(R),R=v;r(w)},me=(R,w,v)=>{const{bum:Q,scope:q,job:Y,subTree:Z,um:se,m:j,a:K,parent:Se,slots:{__:E}}=R;Rc(j),Rc(K),Q&&zo(Q),Se&&He(E)&&E.forEach(g=>{Se.renderCache[g]=void 0}),q.stop(),Y&&(Y.flags|=8,Oe(Z,R,w,v)),se&&Qt(se,w),Qt(()=>{R.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ae=(R,w,v,Q=!1,q=!1,Y=0)=>{for(let Z=Y;Z<R.length;Z++)Oe(R[Z],w,v,Q,q)},N=R=>{if(R.shapeFlag&6)return N(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const w=h(R.anchor||R.el),v=w&&w[rp];return v?h(v):w};let ee=!1;const le=(R,w,v)=>{R==null?w._vnode&&Oe(w._vnode,null,null,!0):x(w._vnode||null,R,w,null,null,null,v),w._vnode=R,ee||(ee=!0,xc(),Of(),ee=!1)},ae={p:x,um:Oe,m:Ce,r:Ze,mt:ie,mc:B,pc:V,pbc:y,n:N,o:n};return{render:le,hydrate:void 0,createApp:Ap(le)}}function qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Up(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function oh(n,e,t=!1){const i=n.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=li(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&oh(o,a)),a.type===Do&&(a.el=o.el),a.type===$n&&!a.el&&(a.el=o.el)}}function Np(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function ah(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ah(e)}function Rc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Op=Symbol.for("v-scx"),Fp=()=>Wn(Op);function Jr(n,e,t){return lh(n,e,t)}function lh(n,e,t=ut){const{immediate:i,deep:r,flush:s,once:o}=t,a=Ft({},t),l=e&&i||!e&&s!=="post";let c;if(as){if(s==="sync"){const d=Fp();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=bn,d.resume=bn,d.pause=bn,d}}const u=Ut;a.call=(d,_,x)=>wn(d,u,_,x);let f=!1;s==="post"?a.scheduler=d=>{Qt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,_)=>{_?d():Hl(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=ep(n,e,a);return as&&(c?c.push(h):l&&h()),h}function Bp(n,e,t){const i=this.proxy,r=xt(n)?n.includes(".")?ch(i,n):()=>i[n]:n.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,t=e);const o=_s(this),a=lh(r,s.bind(i),t);return o(),a}function ch(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${fn(e)}Modifiers`]||n[`${ki(e)}Modifiers`];function zp(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let r=t;const s=e.startsWith("update:"),o=s&&Vp(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>xt(u)?u.trim():u)),o.number&&(r=t.map(Sd)));let a,l=i[a=Vo(e)]||i[a=Vo(fn(e))];!l&&s&&(l=i[a=Vo(ki(e))]),l&&wn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,wn(c,n,6,r)}}function uh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=uh(c,e,!0);u&&(a=!0,Ft(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(He(s)?s.forEach(l=>o[l]=null):Ft(o,s),pt(n)&&i.set(n,o),o)}function Io(n,e){return!n||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,ki(e))||tt(n,e))}function wc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:x}=n,m=uo(n);let p,b;try{if(t.shapeFlag&4){const M=r||i,U=M;p=Tn(c.call(U,M,u,f,d,h,_)),b=a}else{const M=e;p=Tn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),b=e.props?a:Hp(a)}}catch(M){Qr.length=0,Co(M,n,1),p=Rt($n)}let T=p;if(b&&x!==!1){const M=Object.keys(b),{shapeFlag:U}=T;M.length&&U&7&&(s&&M.some(Il)&&(b=Gp(b,s)),T=Tr(T,b,!1,!0))}return t.dirs&&(T=Tr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&Gl(T,t.transition),p=T,uo(m),p}const Hp=n=>{let e;for(const t in n)(t==="class"||t==="style"||So(t))&&((e||(e={}))[t]=n[t]);return e},Gp=(n,e)=>{const t={};for(const i in n)(!Il(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function kp(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Cc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Io(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cc(i,o,c):!0:!!o;return!1}function Cc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Io(t,s))return!0}return!1}function Wp({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const fh=n=>n.__isSuspense;function Xp(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):ip(n)}const Dt=Symbol.for("v-fgt"),Do=Symbol.for("v-txt"),$n=Symbol.for("v-cmt"),Zs=Symbol.for("v-stc"),Qr=[];let nn=null;function _t(n=!1){Qr.push(nn=n?null:[])}function qp(){Qr.pop(),nn=Qr[Qr.length-1]||null}let ss=1;function Pc(n,e=!1){ss+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function hh(n){return n.dynamicChildren=ss>0?nn||pr:null,qp(),ss>0&&nn&&nn.push(n),n}function Lt(n,e,t,i,r,s){return hh($e(n,e,t,i,r,s,!0))}function yr(n,e,t,i,r){return hh(Rt(n,e,t,i,r,!0))}function os(n){return n?n.__v_isVNode===!0:!1}function Vr(n,e){return n.type===e.type&&n.key===e.key}const dh=({key:n})=>n??null,Js=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?xt(n)||Nt(n)||Xe(n)?{i:kt,r:n,k:e,f:!!t}:n:null);function $e(n,e=null,t=null,i=0,r=null,s=n===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&dh(e),ref:e&&Js(e),scopeId:Bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:kt};return a?(ql(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=xt(t)?8:16),ss>0&&!o&&nn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&nn.push(l),l}const Rt=Yp;function Yp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===qf)&&(n=$n),os(n)){const a=Tr(n,e,!0);return t&&ql(a,t),ss>0&&!s&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(rm(n)&&(n=n.__vccOpts),e){e=$p(e);let{class:a,style:l}=e;a&&!xt(a)&&(e.class=bo(a)),pt(l)&&(zl(l)&&!He(l)&&(l=Ft({},l)),e.style=Ao(l))}const o=xt(n)?1:fh(n)?128:sp(n)?64:pt(n)?4:Xe(n)?2:0;return $e(n,e,t,i,r,o,s,!0)}function $p(n){return n?zl(n)||eh(n)?Ft({},n):n:null}function Tr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Dr(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&dh(c),ref:e&&e.ref?t&&s?He(s)?s.concat(Js(e)):[s,Js(e)]:Js(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Tr(n.ssContent),ssFallback:n.ssFallback&&Tr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Gl(u,l.clone(u)),u}function Kp(n=" ",e=0){return Rt(Do,null,n,e)}function po(n,e){const t=Rt(Zs,null,n);return t.staticCount=e,t}function Ic(n="",e=!1){return e?(_t(),yr($n,null,n)):Rt($n,null,n)}function Tn(n){return n==null||typeof n=="boolean"?Rt($n):He(n)?Rt(Dt,null,n.slice()):os(n)?li(n):Rt(Do,null,String(n))}function li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Tr(n)}function ql(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ql(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!eh(e)?e._ctx=kt:r===3&&kt&&(kt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:kt},t=32):(e=String(e),i&64?(t=16,e=[Kp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Dr(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=bo([e.class,i.class]));else if(r==="style")e.style=Ao([e.style,i.style]);else if(So(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Mn(n,e,t,i=null){wn(n,e,7,[t,i])}const jp=Zf();let Zp=0;function Jp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||jp,s={uid:Zp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nh(i,r),emitsOptions:uh(i,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=zp.bind(null,s),n.ce&&n.ce(s),s}let Ut=null,mo,Ba;{const n=To(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};mo=e("__VUE_INSTANCE_SETTERS__",t=>Ut=t),Ba=e("__VUE_SSR_SETTERS__",t=>as=t)}const _s=n=>{const e=Ut;return mo(n),n.scope.on(),()=>{n.scope.off(),mo(e)}},Dc=()=>{Ut&&Ut.scope.off(),mo(null)};function ph(n){return n.vnode.shapeFlag&4}let as=!1;function Qp(n,e=!1,t=!1){e&&Ba(e);const{props:i,children:r}=n.vnode,s=ph(n);bp(n,i,s,e),Pp(n,r,t||e);const o=s?em(n,e):void 0;return e&&Ba(!1),o}function em(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,vp);const{setup:i}=t;if(i){qn();const r=n.setupContext=i.length>1?nm(n):null,s=_s(n),o=gs(i,n,0,[n.props,r]),a=lf(o);if(Yn(),s(),(a||n.sp)&&!vr(n)&&zf(n),a){if(o.then(Dc,Dc),e)return o.then(l=>{Lc(n,l)}).catch(l=>{Co(l,n,0)});n.asyncDep=o}else Lc(n,o)}else mh(n)}function Lc(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Df(e)),mh(n)}function mh(n,e,t){const i=n.type;n.render||(n.render=i.render||bn);{const r=_s(n);qn();try{xp(n)}finally{Yn(),r()}}}const tm={get(n,e){return It(n,"get",""),n[e]}};function nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,tm),slots:n.slots,emit:n.emit,expose:e}}function Yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Df(Yd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zr)return Zr[t](n)},has(e,t){return t in e||t in Zr}})):n.proxy}function im(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function rm(n){return Xe(n)&&"__vccOpts"in n}const Et=(n,e)=>Jd(n,e,as);function gh(n,e,t){const i=arguments.length;return i===2?pt(e)&&!He(e)?os(e)?Rt(n,null,[e]):Rt(n,e):Rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&os(t)&&(t=[t]),Rt(n,e,t))}const sm="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Va;const Uc=typeof window<"u"&&window.trustedTypes;if(Uc)try{Va=Uc.createPolicy("vue",{createHTML:n=>n})}catch{}const _h=Va?n=>Va.createHTML(n):n=>n,om="http://www.w3.org/2000/svg",am="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,Nc=Vn&&Vn.createElement("template"),lm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vn.createElementNS(om,n):e==="mathml"?Vn.createElementNS(am,n):t?Vn.createElement(n,{is:t}):Vn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vn.createTextNode(n),createComment:n=>Vn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Nc.innerHTML=_h(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Nc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cm=Symbol("_vtc");function um(n,e,t){const i=n[cm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Oc=Symbol("_vod"),fm=Symbol("_vsh"),hm=Symbol(""),dm=/(^|;)\s*display\s*:/;function pm(n,e,t){const i=n.style,r=xt(t);let s=!1;if(t&&!r){if(e)if(xt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Qs(i,a,"")}else for(const o in e)t[o]==null&&Qs(i,o,"");for(const o in t)o==="display"&&(s=!0),Qs(i,o,t[o])}else if(r){if(e!==t){const o=i[hm];o&&(t+=";"+o),i.cssText=t,s=dm.test(t)}}else e&&n.removeAttribute("style");Oc in n&&(n[Oc]=s?i.display:"",n[fm]&&(i.display="none"))}const Fc=/\s*!important$/;function Qs(n,e,t){if(He(t))t.forEach(i=>Qs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=mm(n,e);Fc.test(t)?n.setProperty(ki(i),t.replace(Fc,""),"important"):n[i]=t}}const Bc=["Webkit","Moz","ms"],Yo={};function mm(n,e){const t=Yo[e];if(t)return t;let i=fn(e);if(i!=="filter"&&i in n)return Yo[e]=i;i=yo(i);for(let r=0;r<Bc.length;r++){const s=Bc[r]+i;if(s in n)return Yo[e]=s}return e}const Vc="http://www.w3.org/1999/xlink";function zc(n,e,t,i,r,s=bd(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Vc,e.slice(6,e.length)):n.setAttributeNS(Vc,e,t):t==null||s&&!hf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Jn(t)?String(t):t)}function Hc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?_h(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=hf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function gm(n,e,t,i){n.addEventListener(e,t,i)}function _m(n,e,t,i){n.removeEventListener(e,t,i)}const Gc=Symbol("_vei");function vm(n,e,t,i,r=null){const s=n[Gc]||(n[Gc]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=xm(e);if(i){const c=s[e]=Mm(i,r);gm(n,a,c,l)}else o&&(_m(n,a,o,l),s[e]=void 0)}}const kc=/(?:Once|Passive|Capture)$/;function xm(n){let e;if(kc.test(n)){e={};let i;for(;i=n.match(kc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ki(n.slice(2)),e]}let $o=0;const Sm=Promise.resolve(),Em=()=>$o||(Sm.then(()=>$o=0),$o=Date.now());function Mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wn(ym(i,t.value),e,5,[i])};return t.value=n,t.attached=Em(),t}function ym(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Tm=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?um(n,i,o):e==="style"?pm(n,t,i):So(e)?Il(e)||vm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Am(n,e,i,o))?(Hc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zc(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!xt(i))?Hc(n,fn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),zc(n,e,i,o))};function Am(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wc(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wc(e)&&xt(t)?!1:e in n}const bm=Ft({patchProp:Tm},lm);let Xc;function Rm(){return Xc||(Xc=Dp(bm))}const wm=(...n)=>{const e=Rm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Pm(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Cm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Cm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pm(n){return xt(n)?document.querySelector(n):n}const vh=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Im=["width","height"],Dm=$e("title",null,"GitHub",-1),Lm=$e("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},null,-1),Um=[Dm,Lm],Nm=Si({__name:"GitHubIcon",props:{size:{default:24}},setup(n){const e=n,t=Et(()=>{const i=Yt(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(_t(),Lt("svg",Dr({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Um,16,Im))}}),Om=["width","height"],Fm=$e("title",null,"Instagram",-1),Bm=$e("path",{d:"M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"},null,-1),Vm=[Fm,Bm],zm=Si({__name:"InstagramIcon",props:{size:{default:24}},setup(n){const e=n,t=Et(()=>{const i=Yt(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(_t(),Lt("svg",Dr({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Vm,16,Om))}}),Hm=["width","height"],Gm=$e("title",null,"Mail.Ru",-1),km=$e("path",{d:"M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"},null,-1),Wm=[Gm,km],Xm=Si({__name:"MailDotRuIcon",props:{size:{default:24}},setup(n){const e=n,t=Et(()=>{const i=Yt(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(_t(),Lt("svg",Dr({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Wm,16,Hm))}}),qm=["width","height"],Ym=$e("title",null,"X",-1),$m=$e("path",{d:"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"},null,-1),Km=[Ym,$m],jm=Si({__name:"XIcon",props:{size:{default:24}},setup(n){const e=n,t=Et(()=>{const i=Yt(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(_t(),Lt("svg",Dr({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),Km,16,qm))}}),Zm=["width","height"],Jm=$e("title",null,"YouTube",-1),Qm=$e("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"},null,-1),eg=[Jm,Qm],tg=Si({__name:"YouTubeIcon",props:{size:{default:24}},setup(n){const e=n,t=Et(()=>{const i=Yt(e.size);return typeof i=="number"?`${i}px`:i});return(i,r)=>(_t(),Lt("svg",Dr({width:t.value,height:t.value,role:"img",viewBox:"0 0 24 24"},i.$attrs,{fill:"currentColor"}),eg,16,Zm))}}),ng={class:"relative flex justify-center"},ig={class:"z-20 mb-8 relative flex flex-col backdrop-blur-2xl bg-black/50 border border-white/10 rounded-4xl p-4 w-full max-w-[1280px] mx-4"},rg={class:"flex justify-center"},sg={class:"px-8 xl:px-8 py-4 w-full max-w-[1280px] flex flex-col items-center text-white"},og={class:"px-2 pt-4 pb-12 grid grid-cols-1 md:grid-cols-3 w-full justify-between gap-x-8 gap-y-12 text-xs font-semibold"},ag={class:"flex flex-col space-y-3 items-start"},lg=["href","target"],cg={class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50 cursor-pointer"},ug={class:"flex flex-col space-y-3 items-start"},fg=["href"],hg=["href"],dg={class:"flex flex-col space-y-3 items-start"},pg=["href"],mg={__name:"Footer",setup(n){const e=[{text:"Let'Swift 뉴스레터 받기",url:"https://page.stibee.com/subscriptions/58654",target:"_blank"},{text:"Let'Swift 앱 다운로드",url:"https://apps.apple.com/app/id1282995254",target:"_blank"},{text:"행동지침",url:null,link:"/CodeOfConduct",target:""}],t=[{text:"행사 후원 문의",url:"mailto:letswift.official@gmail.com?subject=Let%27Swift%202024%20%ED%9B%84%EC%9B%90%20%EB%AC%B8%EC%9D%98%20%2F%20Sponsorship%20Inquiry"}],i={MailDotRuIcon:Xm,GitHubIcon:Nm,XIcon:jm,InstagramIcon:zm,YouTubeIcon:tg},r=[{name:"Email",image:"MailDotRuIcon",url:"mailto:letswift.official@gmail.com"},{name:"YouTube",image:"YouTubeIcon",url:"https://youtube.com/playlist?list=PLAHa1zfLtLiPY9gDxRwhNDbYZvjFKiurH&si=-Zft8ebxkt-65x4J"},{name:"Instagram",image:"InstagramIcon",url:"https://www.instagram.com/letswiftkr"},{name:"GitHub",image:"GitHubIcon",url:"https://github.com/letswiftconf"},{name:"𝕏",image:"XIcon",url:"https://x.com/letswiftkr"}],s=[{year:2024,url:"https://letswift.kr/2024",overlay_class:"bg-black/30",class:"",text_class:""},{year:2023,url:"https://letswift.kr/2023",overlay_class:"bg-black/30",class:"",text_class:""},{year:2022,url:"https://letswift.kr/2022",overlay_class:"bg-black/30",class:"",text_class:""},{year:2020,url:"https://letswift.kr/2020",overlay_class:"bg-black/30",class:"",text_class:""},{year:2019,url:"https://letswift.kr/2019",overlay_class:"bg-black/30",class:"",text_class:""},{year:2018,url:"https://letswift.kr/2018",overlay_class:"bg-black/30",class:"",text_class:""},{year:2017,url:"https://letswift.kr/2017",overlay_class:"bg-black/50",class:"bg-white",text_class:""},{year:2016,url:"https://letswift.kr/2016",overlay_class:"bg-black/50",class:"bg-white",text_class:""}];return(o,a)=>{const l=Xf("router-link");return _t(),Lt("div",ng,[$e("footer",ig,[$e("div",rg,[$e("div",sg,[a[3]||(a[3]=po('<div class="px-2 flex grow w-full"><div class="text-lg font-bold text-slate-200">Let&#39;Swift <span class="text-rainbow">2025</span></div><div class="grow"></div></div><div class="my-4 h-px w-full bg-white/10"></div>',2)),$e("div",og,[$e("div",ag,[(_t(),Lt(Dt,null,Rs(e,c=>$e("div",{key:c.text},[c.url!==null?(_t(),Lt("a",{key:0,href:c.url,target:c.target,class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},cr(c.text),9,lg)):(_t(),yr(l,{key:1,to:c.link},{default:Vf(()=>[$e("span",cg,cr(c.text),1)]),_:2},1032,["to"]))])),64))]),$e("div",ug,[a[0]||(a[0]=$e("div",{class:"font-bold text-slate-200"},"후원",-1)),(_t(),Lt(Dt,null,Rs(t,c=>$e("div",{key:c.text},[$e("a",{href:c.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},cr(c.text),9,fg)])),64)),a[1]||(a[1]=$e("div",{class:"pt-4 font-bold text-slate-200"},"소식",-1)),(_t(),Lt(Dt,null,Rs(r,c=>$e("div",{key:c.name},[$e("a",{href:c.url,target:"_blank",class:"flex items-center space-x-2 text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},[(_t(),yr(_p(i[c.image]),{fill:"gray",width:"10",height:"10"})),$e("span",null,cr(c.name),1)],8,hg)])),64))]),$e("div",dg,[a[2]||(a[2]=$e("div",null,"이전 행사",-1)),(_t(),Lt(Dt,null,Rs(s,c=>$e("div",{key:c.text},[$e("a",{href:c.url,target:"_blank",class:"text-themeMain hover:text-themeMain/70 active:text-themeMain/50"},cr(c.year),9,pg)])),64))])]),a[4]||(a[4]=po('<div class="my-4 h-px w-full bg-white/10"></div><div class="px-2 w-full text-xs lg:flex lg:space-x-2 space-y-2 lg:space-y-0"><div><span class="text-slate-500/80">Copyright © 2025 </span><span class="font-semibold text-slate-200">Let&#39;Swift.</span><span class="text-slate-500/80"> All rights reserved.</span></div></div>',2))])])])])}}},gg={class:"font-sans flex flex-col"},_g={class:"pt-0 flex flex-col space-y-16 md:space-y-64"},vg={__name:"App",setup(n){return(e,t)=>{const i=Xf("router-view");return _t(),Lt("div",gg,[$e("div",_g,[Rt(i),Rt(mg)])])}}},xg="modulepreload",Sg=function(n){return"/2025/"+n},qc={},xh=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(t.map(c=>{if(c=Sg(c),c in qc)return;qc[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":xg,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((d,_)=>{h.addEventListener("load",d),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fr=typeof document<"u";function Eg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const rt=Object.assign;function Ko(n,e){const t={};for(const i in e){const r=e[i];t[i]=En(r)?r.map(n):n(r)}return t}const es=()=>{},En=Array.isArray,Sh=/#/g,Mg=/&/g,yg=/\//g,Tg=/=/g,Ag=/\?/g,Eh=/\+/g,bg=/%5B/g,Rg=/%5D/g,Mh=/%5E/g,wg=/%60/g,yh=/%7B/g,Cg=/%7C/g,Th=/%7D/g,Pg=/%20/g;function $l(n){return encodeURI(""+n).replace(Cg,"|").replace(bg,"[").replace(Rg,"]")}function Ig(n){return $l(n).replace(yh,"{").replace(Th,"}").replace(Mh,"^")}function za(n){return $l(n).replace(Eh,"%2B").replace(Pg,"+").replace(Sh,"%23").replace(Mg,"%26").replace(wg,"`").replace(yh,"{").replace(Th,"}").replace(Mh,"^")}function Dg(n){return za(n).replace(Tg,"%3D")}function Lg(n){return $l(n).replace(Sh,"%23").replace(Ag,"%3F")}function Ug(n){return n==null?"":Lg(n).replace(yg,"%2F")}function ls(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Ng=/\/$/,Og=n=>n.replace(Ng,"");function jo(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=zg(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ls(o)}}function Fg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Yc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Bg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Ar(e.matched[i],t.matched[r])&&Ah(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ar(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ah(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Vg(n[t],e[t]))return!1;return!0}function Vg(n,e){return En(n)?$c(n,e):En(e)?$c(e,n):n===e}function $c(n,e){return En(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function zg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var cs;(function(n){n.pop="pop",n.push="push"})(cs||(cs={}));var ts;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ts||(ts={}));function Hg(n){if(!n)if(fr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Og(n)}const Gg=/^[^#]+#/;function kg(n,e){return n.replace(Gg,"#")+e}function Wg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Lo=()=>({left:window.scrollX,top:window.scrollY});function Xg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Wg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kc(n,e){return(history.state?history.state.position-e:-1)+n}const Ha=new Map;function qg(n,e){Ha.set(n,e)}function Yg(n){const e=Ha.get(n);return Ha.delete(n),e}let $g=()=>location.protocol+"//"+location.host;function bh(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Yc(l,"")}return Yc(t,n)+i+r}function Kg(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=bh(n,location),_=t.value,x=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===_){o=null;return}m=x?h.position-x.position:0}else i(d);r.forEach(p=>{p(t.value,_,{delta:m,type:cs.pop,direction:m?m>0?ts.forward:ts.back:ts.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(rt({},h.state,{scroll:Lo()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function jc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Lo():null}}function jg(n){const{history:e,location:t}=window,i={value:bh(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:$g()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=rt({},e.state,jc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=rt({},r.value,e.state,{forward:l,scroll:Lo()});s(u.current,u,!0);const f=rt({},jc(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Zg(n){n=Hg(n);const e=jg(n),t=Kg(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=rt({location:"",base:n,go:i,createHref:kg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Jg(n){return typeof n=="string"||n&&typeof n=="object"}function Rh(n){return typeof n=="string"||typeof n=="symbol"}const wh=Symbol("");var Zc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zc||(Zc={}));function br(n,e){return rt(new Error,{type:n,[wh]:!0},e)}function Dn(n,e){return n instanceof Error&&wh in n&&(e==null||!!(n.type&e))}const Jc="[^/]+?",Qg={sensitive:!1,strict:!1,start:!0,end:!0},e_=/[.+*?^${}()[\]/\\]/g;function t_(n,e){const t=rt({},Qg,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(e_,"\\$&"),d+=40;else if(h.type===1){const{value:_,repeatable:x,optional:m,regexp:p}=h;s.push({name:_,repeatable:x,optional:m});const b=p||Jc;if(b!==Jc){d+=10;try{new RegExp(`(${b})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+M.message)}}let T=x?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,d+=20,m&&(d+=-8),x&&(d+=-20),b===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:_,repeatable:x,optional:m}=d,p=_ in c?c[_]:"";if(En(p)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=En(p)?p.join("/"):p;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function n_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ch(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=n_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Qc(i))return 1;if(Qc(r))return-1}return r.length-i.length}function Qc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const i_={type:0,value:""},r_=/[a-zA-Z0-9_]/;function s_(n){if(!n)return[[]];if(n==="/")return[[i_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:r_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function o_(n,e,t){const i=t_(s_(n.path),t),r=rt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function a_(n,e){const t=[],i=new Map;e=nu({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,x=l_(f);x.aliasOf=d&&d.record;const m=nu(e,f),p=[x];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of M)p.push(rt({},x,{components:d?d.record.components:x.components,path:U,aliasOf:d?d.record:x}))}let b,T;for(const M of p){const{path:U}=M;if(h&&U[0]!=="/"){const P=h.record.path,C=P[P.length-1]==="/"?"":"/";M.path=h.record.path+(U&&C+U)}if(b=o_(M,h,m),d?d.alias.push(b):(T=T||b,T!==b&&T.alias.push(b),_&&f.name&&!tu(b)&&o(f.name)),Ph(b)&&l(b),x.children){const P=x.children;for(let C=0;C<P.length;C++)s(P[C],b,d&&d.children[C])}d=d||b}return T?()=>{o(T)}:es}function o(f){if(Rh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=f_(f,t);t.splice(h,0,f),f.record.name&&!tu(f)&&i.set(f.record.name,f)}function c(f,h){let d,_={},x,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw br(1,{location:f});m=d.record.name,_=rt(eu(h.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&eu(f.params,d.keys.map(T=>T.name))),x=d.stringify(_)}else if(f.path!=null)x=f.path,d=t.find(T=>T.re.test(x)),d&&(_=d.parse(x),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(T=>T.re.test(h.path)),!d)throw br(1,{location:f,currentLocation:h});m=d.record.name,_=rt({},h.params,f.params),x=d.stringify(_)}const p=[];let b=d;for(;b;)p.unshift(b.record),b=b.parent;return{name:m,path:x,params:_,matched:p,meta:u_(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function eu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function l_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:c_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function c_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function tu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function u_(n){return n.reduce((e,t)=>rt(e,t.meta),{})}function nu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function f_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Ch(n,e[s])<0?i=s:t=s+1}const r=h_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function h_(n){let e=n;for(;e=e.parent;)if(Ph(e)&&Ch(n,e)===0)return e}function Ph({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function d_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Eh," "),o=s.indexOf("="),a=ls(o<0?s:s.slice(0,o)),l=o<0?null:ls(s.slice(o+1));if(a in e){let c=e[a];En(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function iu(n){let e="";for(let t in n){const i=n[t];if(t=Dg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(En(i)?i.map(s=>s&&za(s)):[i&&za(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function p_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=En(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const m_=Symbol(""),ru=Symbol(""),Kl=Symbol(""),Ih=Symbol(""),Ga=Symbol("");function zr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ci(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(br(4,{from:t,to:e})):h instanceof Error?l(h):Jg(h)?l(br(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Zo(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(g_(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ci(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=Eg(u)?u.default:u;o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ci(d,t,i,o,a,r)()}))}}return s}function g_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function su(n){const e=Wn(Kl),t=Wn(Ih),i=Et(()=>{const l=Yt(n.to);return e.resolve(l)}),r=Et(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Ar.bind(null,u));if(h>-1)return h;const d=ou(l[c-2]);return c>1&&ou(u)===d&&f[f.length-1].path!==d?f.findIndex(Ar.bind(null,l[c-2])):h}),s=Et(()=>r.value>-1&&S_(t.params,i.value.params)),o=Et(()=>r.value>-1&&r.value===t.matched.length-1&&Ah(t.params,i.value.params));function a(l={}){return x_(l)?e[Yt(n.replace)?"replace":"push"](Yt(n.to)).catch(es):Promise.resolve()}return{route:i,href:Et(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const __=Si({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:su,setup(n,{slots:e}){const t=wo(su(n)),{options:i}=Wn(Kl),r=Et(()=>({[au(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[au(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:gh("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),v_=__;function x_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function S_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!En(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function ou(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const au=(n,e,t)=>n??e??t,E_=Si({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Wn(Ga),r=Et(()=>n.route||i.value),s=Wn(ru,0),o=Et(()=>{let c=Yt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Et(()=>r.value.matched[o.value]);js(ru,Et(()=>o.value+1)),js(m_,a),js(Ga,r);const l=ui();return Jr(()=>[l.value,a.value,n.name],([c,u,f],[h,d,_])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ar(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return lu(t.default,{Component:h,route:c});const d=f.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=gh(h,rt({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return lu(t.default,{Component:m,route:c})||m}}});function lu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const M_=E_;function y_(n){const e=a_(n.routes,n),t=n.parseQuery||d_,i=n.stringifyQuery||iu,r=n.history,s=zr(),o=zr(),a=zr(),l=$d(ei);let c=ei;fr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ko.bind(null,N=>""+N),f=Ko.bind(null,Ug),h=Ko.bind(null,ls);function d(N,ee){let le,ae;return Rh(N)?(le=e.getRecordMatcher(N),ae=ee):ae=N,e.addRoute(ae,le)}function _(N){const ee=e.getRecordMatcher(N);ee&&e.removeRoute(ee)}function x(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,ee){if(ee=rt({},ee||l.value),typeof N=="string"){const v=jo(t,N,ee.path),Q=e.resolve({path:v.path},ee),q=r.createHref(v.fullPath);return rt(v,Q,{params:h(Q.params),hash:ls(v.hash),redirectedFrom:void 0,href:q})}let le;if(N.path!=null)le=rt({},N,{path:jo(t,N.path,ee.path).path});else{const v=rt({},N.params);for(const Q in v)v[Q]==null&&delete v[Q];le=rt({},N,{params:f(v)}),ee.params=f(ee.params)}const ae=e.resolve(le,ee),Fe=N.hash||"";ae.params=u(h(ae.params));const R=Fg(i,rt({},N,{hash:Ig(Fe),path:ae.path})),w=r.createHref(R);return rt({fullPath:R,hash:Fe,query:i===iu?p_(N.query):N.query||{}},ae,{redirectedFrom:void 0,href:w})}function b(N){return typeof N=="string"?jo(t,N,l.value.path):rt({},N)}function T(N,ee){if(c!==N)return br(8,{from:ee,to:N})}function M(N){return C(N)}function U(N){return M(rt(b(N),{replace:!0}))}function P(N){const ee=N.matched[N.matched.length-1];if(ee&&ee.redirect){const{redirect:le}=ee;let ae=typeof le=="function"?le(N):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=b(ae):{path:ae},ae.params={}),rt({query:N.query,hash:N.hash,params:ae.path!=null?{}:N.params},ae)}}function C(N,ee){const le=c=p(N),ae=l.value,Fe=N.state,R=N.force,w=N.replace===!0,v=P(le);if(v)return C(rt(b(v),{state:typeof v=="object"?rt({},Fe,v.state):Fe,force:R,replace:w}),ee||le);const Q=le;Q.redirectedFrom=ee;let q;return!R&&Bg(i,ae,le)&&(q=br(16,{to:Q,from:ae}),Ce(ae,ae,!0,!1)),(q?Promise.resolve(q):y(Q,ae)).catch(Y=>Dn(Y)?Dn(Y,2)?Y:xe(Y):V(Y,Q,ae)).then(Y=>{if(Y){if(Dn(Y,2))return C(rt({replace:w},b(Y.to),{state:typeof Y.to=="object"?rt({},Fe,Y.to.state):Fe,force:R}),ee||Q)}else Y=te(Q,ae,!0,w,Fe);return L(Q,ae,Y),Y})}function B(N,ee){const le=T(N,ee);return le?Promise.reject(le):Promise.resolve()}function A(N){const ee=ne.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(N):N()}function y(N,ee){let le;const[ae,Fe,R]=T_(N,ee);le=Zo(ae.reverse(),"beforeRouteLeave",N,ee);for(const v of ae)v.leaveGuards.forEach(Q=>{le.push(ci(Q,N,ee))});const w=B.bind(null,N,ee);return le.push(w),Ae(le).then(()=>{le=[];for(const v of s.list())le.push(ci(v,N,ee));return le.push(w),Ae(le)}).then(()=>{le=Zo(Fe,"beforeRouteUpdate",N,ee);for(const v of Fe)v.updateGuards.forEach(Q=>{le.push(ci(Q,N,ee))});return le.push(w),Ae(le)}).then(()=>{le=[];for(const v of R)if(v.beforeEnter)if(En(v.beforeEnter))for(const Q of v.beforeEnter)le.push(ci(Q,N,ee));else le.push(ci(v.beforeEnter,N,ee));return le.push(w),Ae(le)}).then(()=>(N.matched.forEach(v=>v.enterCallbacks={}),le=Zo(R,"beforeRouteEnter",N,ee,A),le.push(w),Ae(le))).then(()=>{le=[];for(const v of o.list())le.push(ci(v,N,ee));return le.push(w),Ae(le)}).catch(v=>Dn(v,8)?v:Promise.reject(v))}function L(N,ee,le){a.list().forEach(ae=>A(()=>ae(N,ee,le)))}function te(N,ee,le,ae,Fe){const R=T(N,ee);if(R)return R;const w=ee===ei,v=fr?history.state:{};le&&(ae||w?r.replace(N.fullPath,rt({scroll:w&&v&&v.scroll},Fe)):r.push(N.fullPath,Fe)),l.value=N,Ce(N,ee,le,w),xe()}let W;function ie(){W||(W=r.listen((N,ee,le)=>{if(!me.listening)return;const ae=p(N),Fe=P(ae);if(Fe){C(rt(Fe,{replace:!0}),ae).catch(es);return}c=ae;const R=l.value;fr&&qg(Kc(R.fullPath,le.delta),Lo()),y(ae,R).catch(w=>Dn(w,12)?w:Dn(w,2)?(C(w.to,ae).then(v=>{Dn(v,20)&&!le.delta&&le.type===cs.pop&&r.go(-1,!1)}).catch(es),Promise.reject()):(le.delta&&r.go(-le.delta,!1),V(w,ae,R))).then(w=>{w=w||te(ae,R,!1),w&&(le.delta&&!Dn(w,8)?r.go(-le.delta,!1):le.type===cs.pop&&Dn(w,20)&&r.go(-1,!1)),L(ae,R,w)}).catch(es)}))}let ue=zr(),$=zr(),re;function V(N,ee,le){xe(N);const ae=$.list();return ae.length?ae.forEach(Fe=>Fe(N,ee,le)):console.error(N),Promise.reject(N)}function ge(){return re&&l.value!==ei?Promise.resolve():new Promise((N,ee)=>{ue.add([N,ee])})}function xe(N){return re||(re=!N,ie(),ue.list().forEach(([ee,le])=>N?le(N):ee()),ue.reset()),N}function Ce(N,ee,le,ae){const{scrollBehavior:Fe}=n;if(!fr||!Fe)return Promise.resolve();const R=!le&&Yg(Kc(N.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return Uf().then(()=>Fe(N,ee,R)).then(w=>w&&Xg(w)).catch(w=>V(w,N,ee))}const Oe=N=>r.go(N);let Ze;const ne=new Set,me={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:n,push:M,replace:U,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ge,install(N){const ee=this;N.component("RouterLink",v_),N.component("RouterView",M_),N.config.globalProperties.$router=ee,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(l)}),fr&&!Ze&&l.value===ei&&(Ze=!0,M(r.location).catch(Fe=>{}));const le={};for(const Fe in ei)Object.defineProperty(le,Fe,{get:()=>l.value[Fe],enumerable:!0});N.provide(Kl,ee),N.provide(Ih,Cf(le)),N.provide(Ga,l);const ae=N.unmount;ne.add(N),N.unmount=function(){ne.delete(N),ne.size<1&&(c=ei,W&&W(),W=null,l.value=ei,Ze=!1,re=!1),ae()}}};function Ae(N){return N.reduce((ee,le)=>ee.then(()=>A(le)),Promise.resolve())}return me}function T_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ar(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ar(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="178",A_=0,cu=1,b_=2,Dh=1,R_=2,Bn=3,xi=0,$t=1,Hn=2,gi=0,Sr=1,uu=2,fu=3,hu=4,w_=5,Oi=100,C_=101,P_=102,I_=103,D_=104,L_=200,U_=201,N_=202,O_=203,ka=204,Wa=205,F_=206,B_=207,V_=208,z_=209,H_=210,G_=211,k_=212,W_=213,X_=214,Xa=0,qa=1,Ya=2,Rr=3,$a=4,Ka=5,ja=6,Za=7,Lh=0,q_=1,Y_=2,_i=0,$_=1,K_=2,j_=3,Z_=4,J_=5,Q_=6,e0=7,Uh=300,wr=301,Cr=302,Ja=303,Qa=304,Uo=306,go=1e3,Bi=1001,el=1002,Sn=1003,t0=1004,ws=1005,rn=1006,Jo=1007,pi=1008,Kn=1009,Nh=1010,Oh=1011,us=1012,Zl=1013,Hi=1014,Gn=1015,Lr=1016,Jl=1017,Ql=1018,fs=1020,Fh=35902,Bh=1021,Vh=1022,cn=1023,hs=1026,ds=1027,zh=1028,ec=1029,Hh=1030,tc=1031,nc=1033,eo=33776,to=33777,no=33778,io=33779,tl=35840,nl=35841,il=35842,rl=35843,sl=36196,ol=37492,al=37496,ll=37808,cl=37809,ul=37810,fl=37811,hl=37812,dl=37813,pl=37814,ml=37815,gl=37816,_l=37817,vl=37818,xl=37819,Sl=37820,El=37821,ro=36492,Ml=36494,yl=36495,Gh=36283,Tl=36284,Al=36285,bl=36286,n0=3200,i0=3201,r0=0,s0=1,hi="",tn="srgb",Gi="srgb-linear",_o="linear",ot="srgb",Yi=7680,du=519,o0=512,a0=513,l0=514,kh=515,c0=516,u0=517,f0=518,h0=519,pu=35044,mu="300 es",kn=2e3,vo=2001;class Ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qo=Math.PI/180,Rl=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function d0(n,e){return(n%e+e)%e}function ea(n,e,t){return(1-t)*n+t*e}function Hr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],_=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*x,b=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const U=Math.sqrt(T),P=Math.atan2(U,p*b);m=Math.sin(m*P)/U,a=Math.sin(a*P)/U}const M=a*b;if(l=l*m+h*M,c=c*m+d*M,u=u*m+_*M,f=f*m+x*M,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new H,gu=new xs;class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],x=r[0],m=r[3],p=r[6],b=r[1],T=r[4],M=r[7],U=r[2],P=r[5],C=r[8];return s[0]=o*x+a*b+l*U,s[3]=o*m+a*T+l*P,s[6]=o*p+a*M+l*C,s[1]=c*x+u*b+f*U,s[4]=c*m+u*T+f*P,s[7]=c*p+u*M+f*C,s[2]=h*x+d*b+_*U,s[5]=h*m+d*T+_*P,s[8]=h*p+d*M+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new qe;function Wh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function p0(){const n=ps("canvas");return n.style.display="block",n}const _u={};function Er(n){n in _u||(_u[n]=!0,console.warn(n))}function m0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function g0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vu=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xu=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v0(){const n={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?_o:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Gi]:{primaries:e,whitePoint:i,transfer:_o,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:vu,fromXYZ:xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),n}const Qe=v0();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class x0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=ps("canvas")),$i.width=e.width,$i.height=e.height;const r=$i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let S0=0;class ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ia(r[o].image)):s.push(ia(r[o]))}else s=ia(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?x0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let E0=0;const ra=new H;class Ot extends Ur{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Bi,r=Bi,s=rn,o=pi,a=cn,l=Kn,c=Ot.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=vs(),this.name="",this.source=new ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Uh;Ot.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(d+1)/2,U=(p+1)/2,P=(u+h)/4,C=(f+x)/4,B=(_+m)/4;return T>M&&T>U?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=P/i,s=C/i):M>U?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=P/r,s=B/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=B/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-x)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M0 extends Ur{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Ot(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ic(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends M0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Xh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y0 extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Ps.subVectors(this.max,Gr),Ki.subVectors(e.a,Gr),ji.subVectors(e.b,Gr),Zi.subVectors(e.c,Gr),ti.subVectors(ji,Ki),ni.subVectors(Zi,ji),Ai.subVectors(Ki,Zi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-Ai.z,Ai.y,ti.z,0,-ti.x,ni.z,0,-ni.x,Ai.z,0,-Ai.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-Ai.y,Ai.x,0];return!sa(t,Ki,ji,Zi,Ps)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ki,ji,Zi,Ps))?!1:(Is.crossVectors(ti,ni),t=[Is.x,Is.y,Is.z],sa(t,Ki,ji,Zi,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new H,new H,new H,new H,new H,new H,new H,new H],dn=new H,Cs=new Ss,Ki=new H,ji=new H,Zi=new H,ti=new H,ni=new H,Ai=new H,Gr=new H,Ps=new H,Is=new H,bi=new H;function sa(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bi.fromArray(n,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),l=e.dot(bi),c=t.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const T0=new Ss,kr=new H,oa=new H;class rc{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(oa)),this.expandByPoint(kr.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new H,aa=new H,Ds=new H,ii=new H,la=new H,Ls=new H,ca=new H;class A0{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){aa.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ds),a=ii.dot(this.direction),l=-ii.dot(Ds),c=ii.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(aa).addScaledVector(Ds,h),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const i=Un.dot(this.direction),r=Un.dot(Un)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,i,r,s){la.subVectors(t,e),Ls.subVectors(i,e),ca.crossVectors(la,Ls);let o=this.direction.dot(ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const l=a*this.direction.dot(Ls.crossVectors(ii,Ls));if(l<0)return null;const c=a*this.direction.dot(la.cross(ii));if(c<0||l+c>o)return null;const u=-a*ii.dot(ca);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,_,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h+x*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,x=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,R0)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ri.crossVectors(i,Zt),ri.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ri.crossVectors(i,Zt)),ri.normalize(),Us.crossVectors(Zt,ri),r[0]=ri.x,r[4]=Us.x,r[8]=Zt.x,r[1]=ri.y,r[5]=Us.y,r[9]=Zt.y,r[2]=ri.z,r[6]=Us.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],b=i[3],T=i[7],M=i[11],U=i[15],P=r[0],C=r[4],B=r[8],A=r[12],y=r[1],L=r[5],te=r[9],W=r[13],ie=r[2],ue=r[6],$=r[10],re=r[14],V=r[3],ge=r[7],xe=r[11],Ce=r[15];return s[0]=o*P+a*y+l*ie+c*V,s[4]=o*C+a*L+l*ue+c*ge,s[8]=o*B+a*te+l*$+c*xe,s[12]=o*A+a*W+l*re+c*Ce,s[1]=u*P+f*y+h*ie+d*V,s[5]=u*C+f*L+h*ue+d*ge,s[9]=u*B+f*te+h*$+d*xe,s[13]=u*A+f*W+h*re+d*Ce,s[2]=_*P+x*y+m*ie+p*V,s[6]=_*C+x*L+m*ue+p*ge,s[10]=_*B+x*te+m*$+p*xe,s[14]=_*A+x*W+m*re+p*Ce,s[3]=b*P+T*y+M*ie+U*V,s[7]=b*C+T*L+M*ue+U*ge,s[11]=b*B+T*te+M*$+U*xe,s[15]=b*A+T*W+M*re+U*Ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+x*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],x=e[13],m=e[14],p=e[15],b=f*m*c-x*h*c+x*l*d-a*m*d-f*l*p+a*h*p,T=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,M=u*x*c-_*f*c+_*a*d-o*x*d-u*a*p+o*f*p,U=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=t*b+i*T+r*M+s*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/P;return e[0]=b*C,e[1]=(x*h*s-f*m*s-x*r*d+i*m*d+f*r*p-i*h*p)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*C,e[4]=T*C,e[5]=(u*m*s-_*h*s+_*r*d-t*m*d-u*r*p+t*h*p)*C,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*C,e[8]=M*C,e[9]=(_*f*s-u*x*s-_*i*d+t*x*d+u*i*p-t*f*p)*C,e[10]=(o*x*s-_*a*s+_*i*c-t*x*c-o*i*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=U*C,e[13]=(u*x*r-_*f*r+_*i*h-t*x*h-u*i*m+t*f*m)*C,e[14]=(_*a*r-o*x*r-_*i*l+t*x*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,x=o*u,m=o*f,p=a*f,b=l*c,T=l*u,M=l*f,U=i.x,P=i.y,C=i.z;return r[0]=(1-(x+p))*U,r[1]=(d+M)*U,r[2]=(_-T)*U,r[3]=0,r[4]=(d-M)*P,r[5]=(1-(h+p))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(_+T)*C,r[9]=(m-b)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);const c=1/s,u=1/o,f=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,_;if(a===kn)d=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===vo)d=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let _,x;if(a===kn)_=(o+s)*f,x=-2*f;else if(a===vo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ji=new H,pn=new Mt,b0=new H(0,0,0),R0=new H(1,1,1),ri=new H,Us=new H,Zt=new H,Su=new Mt,Eu=new xs;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class qh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let w0=0;const Mu=new H,Qi=new xs,Nn=new Mt,Ns=new H,Wr=new H,C0=new H,P0=new xs,yu=new H(1,0,0),Tu=new H(0,1,0),Au=new H(0,0,1),bu={type:"added"},I0={type:"removed"},er={type:"childadded",child:null},ua={type:"childremoved",child:null};class sn extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new H,t=new Zn,i=new xs,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new qe}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(yu,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yu,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ns.copy(e):Ns.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Wr,Ns,this.up):Nn.lookAt(Ns,Wr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bu),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bu),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new H(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new H,On=new H,fa=new H,Fn=new H,tr=new H,nr=new H,Ru=new H,ha=new H,da=new H,pa=new H,ma=new vt,ga=new vt,_a=new vt;class _n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),mn.subVectors(e,t),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){mn.subVectors(r,t),On.subVectors(i,t),fa.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(On),l=mn.dot(fa),c=On.dot(On),u=On.dot(fa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ma.setScalar(0),ga.setScalar(0),_a.setScalar(0),ma.fromBufferAttribute(e,t),ga.fromBufferAttribute(e,i),_a.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ma,s.x),o.addScaledVector(ga,s.y),o.addScaledVector(_a,s.z),o}static isFrontFacing(e,t,i,r){return mn.subVectors(i,t),On.subVectors(e,t),mn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),mn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,i),nr.subVectors(s,i),ha.subVectors(e,i);const l=tr.dot(ha),c=nr.dot(ha);if(l<=0&&c<=0)return t.copy(i);da.subVectors(e,r);const u=tr.dot(da),f=nr.dot(da);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(tr,o);pa.subVectors(e,s);const d=tr.dot(pa),_=nr.dot(pa);if(_>=0&&d<=_)return t.copy(s);const x=d*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(nr,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Ru.subVectors(s,r),a=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Ru,a);const p=1/(m+x+h);return o=x*p,a=h*p,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},Os={h:0,s:0,l:0};function va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=d0(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=va(o,s,e+1/3),this.g=va(o,s,e),this.b=va(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){const i=Yh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Qe.workingToColorSpace(Pt.copy(this),e),Math.round(je(Pt.r*255,0,255))*65536+Math.round(je(Pt.g*255,0,255))*256+Math.round(je(Pt.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=tn){Qe.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(Os);const i=ea(si.h,Os.h,t),r=ea(si.s,Os.s,t),s=ea(si.l,Os.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new at;at.NAMES=Yh;let D0=0;class No extends Ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Sr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Wa,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Wa&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $h extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new H,Fs=new nt;let L0=0;class Rn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),e}}class Kh extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class jh extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zi extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U0=0;const ln=new Mt,xa=new sn,ir=new H,Jt=new Ss,Xr=new Ss,At=new H;class Wi extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?jh:Kh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Jt.min,Xr.min),Jt.expandByPoint(At),At.addVectors(Jt.max,Xr.max),Jt.expandByPoint(At)):(Jt.expandByPoint(Xr.min),Jt.expandByPoint(Xr.max))}Jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),At.add(ir)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new H,l[B]=new H;const c=new H,u=new H,f=new H,h=new nt,d=new nt,_=new nt,x=new H,m=new H;function p(B,A,y){c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,B),d.fromBufferAttribute(s,A),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const L=1/(d.x*_.y-_.x*d.y);isFinite(L)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(L),a[B].add(x),a[A].add(x),a[y].add(x),l[B].add(m),l[A].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let B=0,A=b.length;B<A;++B){const y=b[B],L=y.start,te=y.count;for(let W=L,ie=L+te;W<ie;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const T=new H,M=new H,U=new H,P=new H;function C(B){U.fromBufferAttribute(r,B),P.copy(U);const A=a[B];T.copy(A),T.sub(U.multiplyScalar(U.dot(A))).normalize(),M.crossVectors(P,A);const L=M.dot(l[B])<0?-1:1;o.setXYZW(B,T.x,T.y,T.z,L)}for(let B=0,A=b.length;B<A;++B){const y=b[B],L=y.start,te=y.count;for(let W=L,ie=L+te;W<ie;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wu=new Mt,Ri=new A0,Bs=new rc,Cu=new H,Vs=new H,zs=new H,Hs=new H,Sa=new H,Gs=new H,Pu=new H,ks=new H;class vn extends sn{constructor(e=new Wi,t=new $h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Sa.fromBufferAttribute(f,e),o?Gs.addScaledVector(Sa,u):Gs.addScaledVector(Sa.sub(t),u))}t.add(Gs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Ri.copy(e.ray).recast(e.near),!(Bs.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Bs,Cu)===null||Ri.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(wu.copy(s).invert(),Ri.copy(e.ray).applyMatrix4(wu),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),T=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,U=T;M<U;M+=3){const P=a.getX(M),C=a.getX(M+1),B=a.getX(M+2);r=Ws(this,p,e,i,c,u,f,P,C,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const b=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);r=Ws(this,o,e,i,c,u,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],p=o[m.materialIndex],b=Math.max(m.start,d.start),T=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,U=T;M<U;M+=3){const P=M,C=M+1,B=M+2;r=Ws(this,p,e,i,c,u,f,P,C,B),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const b=m,T=m+1,M=m+2;r=Ws(this,o,e,i,c,u,f,b,T,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function N0(n,e,t,i,r,s,o,a){let l;if(e.side===$t?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:n}}function Ws(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Vs),n.getVertexPosition(l,zs),n.getVertexPosition(c,Hs);const u=N0(n,e,t,i,Vs,zs,Hs,Pu);if(u){const f=new H;_n.getBarycoord(Pu,Vs,zs,Hs,f),r&&(u.uv=_n.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=_n.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=_n.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};_n.getNormal(Vs,zs,Hs,h.normal),u.face=h,u.barycoord=f}return u}class Es extends Wi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zi(c,3)),this.setAttribute("normal",new zi(u,3)),this.setAttribute("uv",new zi(f,2));function _(x,m,p,b,T,M,U,P,C,B,A){const y=M/C,L=U/B,te=M/2,W=U/2,ie=P/2,ue=C+1,$=B+1;let re=0,V=0;const ge=new H;for(let xe=0;xe<$;xe++){const Ce=xe*L-W;for(let Oe=0;Oe<ue;Oe++){const Ze=Oe*y-te;ge[x]=Ze*b,ge[m]=Ce*T,ge[p]=ie,c.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[p]=P>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Oe/C),f.push(1-xe/B),re+=1}}for(let xe=0;xe<B;xe++)for(let Ce=0;Ce<C;Ce++){const Oe=h+Ce+ue*xe,Ze=h+Ce+ue*(xe+1),ne=h+(Ce+1)+ue*(xe+1),me=h+(Ce+1)+ue*xe;l.push(Oe,Ze,me),l.push(Ze,ne,me),V+=6}a.addGroup(d,V,A),d+=V,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=Pr(n[t]);for(const r in i)e[r]=i[r]}return e}function O0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const F0={clone:Pr,merge:zt};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jh extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new H,Iu=new nt,Du=new nt;class gn extends Jh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Du),t.subVectors(Du,Iu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class z0 extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new gn(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new gn(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new gn(rr,sr,e,t);a.layers=this.layers,this.add(a);const l=new gn(rr,sr,e,t);l.layers=this.layers,this.add(l);const c=new gn(rr,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Qh extends Ot{constructor(e=[],t=wr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H0 extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Es(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:gi});s.uniforms.tEquirect.value=t;const o=new vn(r,s),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=rn),new z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Xs extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const G0={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ed extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ma=new H,k0=new H,W0=new qe;class Ui{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ma.subVectors(i,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||W0.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wi=new rc,X0=new nt(.5,.5),qs=new H;class td{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],x=r[10],m=r[11],p=r[12],b=r[13],T=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-d,M-p).normalize(),i[1].setComponents(l+s,h+c,m+d,M+p).normalize(),i[2].setComponents(l+o,h+u,m+_,M+b).normalize(),i[3].setComponents(l-o,h-u,m-_,M-b).normalize(),i[4].setComponents(l-a,h-f,m-x,M-T).normalize(),t===kn)i[5].setComponents(l+a,h+f,m+x,M+T).normalize();else if(t===vo)i[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=X0.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q0 extends Ot{constructor(e,t,i,r,s=rn,o=rn,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class nd extends Ot{constructor(e,t,i=Hi,r,s,o,a=Sn,l=Sn,c,u=hs,f=1){if(u!==hs&&u!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ic(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nr extends Wi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],x=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let T=0;T<c;T++){const M=T*f-s;_.push(M,-b,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const T=b+c*p,M=b+c*(p+1),U=b+1+c*(p+1),P=b+1+c*p;d.push(T,M,P),d.push(M,U,P)}this.setIndex(d),this.setAttribute("position",new zi(_,3)),this.setAttribute("normal",new zi(x,3)),this.setAttribute("uv",new zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Y0 extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $0 extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ya={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class K0{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const j0=new K0;class sc{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sc.DEFAULT_MATERIAL_NAME="__DEFAULT";const or=new WeakMap;class Z0 extends sc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ya.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=or.get(o);f===void 0&&(f=[],or.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=ps("img");function l(){u(),t&&t(this);const f=or.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}or.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),ya.remove(`image:${e}`);const h=or.get(this)||[];for(let d=0;d<h.length;d++){const _=h[d];_.onError&&_.onError(f)}or.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ya.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class J0 extends sc{constructor(e){super(e)}load(e,t,i,r){const s=new Ot,o=new Z0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class oc extends Jh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Q0 extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Lu(n,e,t,i){const r=ev(i);switch(t){case Bh:return n*e;case zh:return n*e/r.components*r.byteLength;case ec:return n*e/r.components*r.byteLength;case Hh:return n*e*2/r.components*r.byteLength;case tc:return n*e*2/r.components*r.byteLength;case Vh:return n*e*3/r.components*r.byteLength;case cn:return n*e*4/r.components*r.byteLength;case nc:return n*e*4/r.components*r.byteLength;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:case rl:return Math.max(n,16)*Math.max(e,8)/4;case tl:case il:return Math.max(n,8)*Math.max(e,8)/2;case sl:case ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ul:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case _l:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ro:case Ml:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gh:case Tl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Al:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ev(n){switch(n){case Kn:case Nh:return{byteLength:1,components:1};case us:case Oh:case Lr:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case Hi:case Zl:case Gn:return{byteLength:4,components:1};case Fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function id(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function tv(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],x=f[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const x=f[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iv=`#ifdef USE_ALPHAHASH
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
#endif`,rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
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
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
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
#endif`,fv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Cv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_FOG
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
#endif`,Gv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
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
}`,Wv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yv=`uniform bool receiveShadow;
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
#endif`,$v=`#ifdef USE_ENVMAP
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
#endif`,Kv=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qv=`PhysicalMaterial material;
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
#endif`,ex=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fx=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ex=`#ifndef FLAT_SHADED
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
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
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
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
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
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
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
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wx=`#ifdef USE_SKINNING
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
#endif`,Xx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nS=`uniform sampler2D t2D;
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
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`#include <common>
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
}`,lS=`#if DEPTH_PACKING == 3200
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
}`,cS=`#define DISTANCE
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
}`,uS=`#define DISTANCE
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`uniform float scale;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 diffuse;
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
}`,_S=`#define LAMBERT
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
}`,vS=`#define LAMBERT
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
}`,xS=`#define MATCAP
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
}`,SS=`#define MATCAP
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
}`,ES=`#define NORMAL
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
}`,yS=`#define PHONG
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
}`,TS=`#define PHONG
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
}`,AS=`#define STANDARD
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
}`,bS=`#define STANDARD
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
}`,RS=`#define TOON
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
}`,CS=`uniform float size;
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
}`,PS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,US=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:nv,alphahash_pars_fragment:iv,alphamap_fragment:rv,alphamap_pars_fragment:sv,alphatest_fragment:ov,alphatest_pars_fragment:av,aomap_fragment:lv,aomap_pars_fragment:cv,batching_pars_vertex:uv,batching_vertex:fv,begin_vertex:hv,beginnormal_vertex:dv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:_v,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:Sv,color_fragment:Ev,color_pars_fragment:Mv,color_pars_vertex:yv,color_vertex:Tv,common:Av,cube_uv_reflection_fragment:bv,defaultnormal_vertex:Rv,displacementmap_pars_vertex:wv,displacementmap_vertex:Cv,emissivemap_fragment:Pv,emissivemap_pars_fragment:Iv,colorspace_fragment:Dv,colorspace_pars_fragment:Lv,envmap_fragment:Uv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Ov,envmap_pars_vertex:Fv,envmap_physical_pars_fragment:$v,envmap_vertex:Bv,fog_vertex:Vv,fog_pars_vertex:zv,fog_fragment:Hv,fog_pars_fragment:Gv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:Wv,lights_lambert_fragment:Xv,lights_lambert_pars_fragment:qv,lights_pars_begin:Yv,lights_toon_fragment:Kv,lights_toon_pars_fragment:jv,lights_phong_fragment:Zv,lights_phong_pars_fragment:Jv,lights_physical_fragment:Qv,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:ux,map_particle_pars_fragment:fx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:dx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:vx,normal_fragment_begin:xx,normal_fragment_maps:Sx,normal_pars_fragment:Ex,normal_pars_vertex:Mx,normal_vertex:yx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:wx,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Ix,project_vertex:Dx,dithering_fragment:Lx,dithering_pars_fragment:Ux,roughnessmap_fragment:Nx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Fx,shadowmap_pars_vertex:Bx,shadowmap_vertex:Vx,shadowmask_pars_fragment:zx,skinbase_vertex:Hx,skinning_pars_vertex:Gx,skinning_vertex:kx,skinnormal_vertex:Wx,specularmap_fragment:Xx,specularmap_pars_fragment:qx,tonemapping_fragment:Yx,tonemapping_pars_fragment:$x,transmission_fragment:Kx,transmission_pars_fragment:jx,uv_pars_fragment:Zx,uv_pars_vertex:Jx,uv_vertex:Qx,worldpos_vertex:eS,background_vert:tS,background_frag:nS,backgroundCube_vert:iS,backgroundCube_frag:rS,cube_vert:sS,cube_frag:oS,depth_vert:aS,depth_frag:lS,distanceRGBA_vert:cS,distanceRGBA_frag:uS,equirect_vert:fS,equirect_frag:hS,linedashed_vert:dS,linedashed_frag:pS,meshbasic_vert:mS,meshbasic_frag:gS,meshlambert_vert:_S,meshlambert_frag:vS,meshmatcap_vert:xS,meshmatcap_frag:SS,meshnormal_vert:ES,meshnormal_frag:MS,meshphong_vert:yS,meshphong_frag:TS,meshphysical_vert:AS,meshphysical_frag:bS,meshtoon_vert:RS,meshtoon_frag:wS,points_vert:CS,points_frag:PS,shadow_vert:IS,shadow_frag:DS,sprite_vert:LS,sprite_frag:US},ve={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new at(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:zt([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:zt([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:zt([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:zt([ve.common,ve.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:zt([ve.lights,ve.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};An.physical={uniforms:zt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ys={r:0,b:0,g:0},Ci=new Zn,NS=new Mt;function OS(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function x(T){let M=!1;const U=_(T);U===null?p(a,l):U&&U.isColor&&(p(U,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,M){const U=_(M);U&&(U.isCubeTexture||U.mapping===Uo)?(u===void 0&&(u=new vn(new Es(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Pr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ci.copy(M.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Ci)),u.material.toneMapped=Qe.getTransfer(U.colorSpace)!==ot,(f!==U||h!==U.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,d=n.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new vn(new Nr(2,2),new Cn({name:"BackgroundMaterial",uniforms:Pr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(U.colorSpace)!==ot,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,h=U.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(Ys,Zh(n)),i.buffers.color.setClear(Ys.r,Ys.g,Ys.b,M,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m,dispose:b}}function FS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,L,te,W,ie){let ue=!1;const $=f(W,te,L);s!==$&&(s=$,c(s.object)),ue=d(y,W,te,ie),ue&&_(y,W,te,ie),ie!==null&&e.update(ie,n.ELEMENT_ARRAY_BUFFER),(ue||o)&&(o=!1,M(y,L,te,W),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,L,te){const W=te.wireframe===!0;let ie=i[y.id];ie===void 0&&(ie={},i[y.id]=ie);let ue=ie[L.id];ue===void 0&&(ue={},ie[L.id]=ue);let $=ue[W];return $===void 0&&($=h(l()),ue[W]=$),$}function h(y){const L=[],te=[],W=[];for(let ie=0;ie<t;ie++)L[ie]=0,te[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:te,attributeDivisors:W,object:y,attributes:{},index:null}}function d(y,L,te,W){const ie=s.attributes,ue=L.attributes;let $=0;const re=te.getAttributes();for(const V in re)if(re[V].location>=0){const xe=ie[V];let Ce=ue[V];if(Ce===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Ce=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Ce=y.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;$++}return s.attributesNum!==$||s.index!==W}function _(y,L,te,W){const ie={},ue=L.attributes;let $=0;const re=te.getAttributes();for(const V in re)if(re[V].location>=0){let xe=ue[V];xe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor));const Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),ie[V]=Ce,$++}s.attributes=ie,s.attributesNum=$,s.index=W}function x(){const y=s.newAttributes;for(let L=0,te=y.length;L<te;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const te=s.newAttributes,W=s.enabledAttributes,ie=s.attributeDivisors;te[y]=1,W[y]===0&&(n.enableVertexAttribArray(y),W[y]=1),ie[y]!==L&&(n.vertexAttribDivisor(y,L),ie[y]=L)}function b(){const y=s.newAttributes,L=s.enabledAttributes;for(let te=0,W=L.length;te<W;te++)L[te]!==y[te]&&(n.disableVertexAttribArray(te),L[te]=0)}function T(y,L,te,W,ie,ue,$){$===!0?n.vertexAttribIPointer(y,L,te,ie,ue):n.vertexAttribPointer(y,L,te,W,ie,ue)}function M(y,L,te,W){x();const ie=W.attributes,ue=te.getAttributes(),$=L.defaultAttributeValues;for(const re in ue){const V=ue[re];if(V.location>=0){let ge=ie[re];if(ge===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const xe=ge.normalized,Ce=ge.itemSize,Oe=e.get(ge);if(Oe===void 0)continue;const Ze=Oe.buffer,ne=Oe.type,me=Oe.bytesPerElement,Ae=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===Zl;if(ge.isInterleavedBufferAttribute){const N=ge.data,ee=N.stride,le=ge.offset;if(N.isInstancedInterleavedBuffer){for(let ae=0;ae<V.locationSize;ae++)p(V.location+ae,N.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ae=0;ae<V.locationSize;ae++)T(V.location+ae,Ce/V.locationSize,ne,xe,ee*me,(le+Ce/V.locationSize*ae)*me,Ae)}else{if(ge.isInstancedBufferAttribute){for(let N=0;N<V.locationSize;N++)p(V.location+N,ge.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let N=0;N<V.locationSize;N++)m(V.location+N);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let N=0;N<V.locationSize;N++)T(V.location+N,Ce/V.locationSize,ne,xe,Ce*me,Ce/V.locationSize*N*me,Ae)}}else if($!==void 0){const xe=$[re];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(V.location,xe);break;case 3:n.vertexAttrib3fv(V.location,xe);break;case 4:n.vertexAttrib4fv(V.location,xe);break;default:n.vertexAttrib1fv(V.location,xe)}}}}b()}function U(){B();for(const y in i){const L=i[y];for(const te in L){const W=L[te];for(const ie in W)u(W[ie].object),delete W[ie];delete L[te]}delete i[y]}}function P(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const te in L){const W=L[te];for(const ie in W)u(W[ie].object),delete W[ie];delete L[te]}delete i[y.id]}function C(y){for(const L in i){const te=i[L];if(te[y.id]===void 0)continue;const W=te[y.id];for(const ie in W)u(W[ie].object),delete W[ie];delete te[y.id]}}function B(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:B,resetDefaultState:A,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function BS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let _=0;_<f;_++)d+=u[_];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function VS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==cn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const B=C===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Kn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Gn&&!B)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:U,maxSamples:P}}function zS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:i,T=b*4;let M=p.clippingState||null;l.value=M,M=u(_,h,T,d);for(let U=0;U!==T;++U)M[U]=t[U];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const p=d+x*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=d;T!==x;++T,M+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function HS(n){let e=new WeakMap;function t(o,a){return a===Ja?o.mapping=wr:a===Qa&&(o.mapping=Cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ja||a===Qa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new H0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const dr=4,Uu=[.125,.215,.35,.446,.526,.582],Fi=20,Ta=new oc,Nu=new at;let Aa=null,ba=0,Ra=0,wa=!1;const Ni=(1+Math.sqrt(5))/2,ar=1/Ni,Ou=[new H(-Ni,ar,0),new H(Ni,ar,0),new H(-ar,0,Ni),new H(ar,0,Ni),new H(0,Ni,-ar),new H(0,Ni,ar),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],GS=new H;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=GS}=s;Aa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,ba,Ra),this._renderer.xr.enabled=wa,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wr||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Lr,format:cn,colorSpace:Gi,depthBuffer:!1},r=Bu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(s)),this._blurMaterial=WS(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,i,r,s){const l=new gn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Nu),f.toneMapping=_i,f.autoClear=!1;const _=new $h({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),x=new vn(new Es,_);let m=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,m=!0):(_.color.copy(Nu),m=!0);for(let b=0;b<6;b++){const T=b%3;T===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):T===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const M=this._cubeSize;$s(r,T*M,b>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wr||e.mapping===Cr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ta)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ou[(r-s-1)%Ou.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),x=s/_,m=isFinite(s)?1+Math.floor(u*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const p=[];let b=0;for(let C=0;C<Fi;++C){const B=C/x,A=Math.exp(-B*B/2);p.push(A),C===0?b+=A:C<m&&(b+=2*A)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=_,h.mipInt.value=T-i;const M=this._sizeLods[r],U=3*M*(r>T-dr?r-T+dr:0),P=4*(this._cubeSize-M);$s(t,U,P,3*M,2*M),l.setRenderTarget(t),l.render(f,Ta)}}function kS(n){const e=[],t=[],i=[];let r=n;const s=n-dr+1+Uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-dr?l=Uu[o-n+dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,x=3,m=2,p=1,b=new Float32Array(x*_*d),T=new Float32Array(m*_*d),M=new Float32Array(p*_*d);for(let P=0;P<d;P++){const C=P%3*2/3-1,B=P>2?0:-1,A=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];b.set(A,x*_*P),T.set(h,m*_*P);const y=[P,P,P,P,P,P];M.set(y,p*_*P)}const U=new Wi;U.setAttribute("position",new Rn(b,x)),U.setAttribute("uv",new Rn(T,m)),U.setAttribute("faceIndex",new Rn(M,p)),e.push(U),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bu(n,e,t){const i=new jn(n,e,t);return i.texture.mapping=Uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function WS(n,e,t){const i=new Float32Array(Fi),r=new H(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ac(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Vu(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ac(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function zu(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function ac(){return`

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
	`}function XS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ja||l===Qa,u=l===wr||l===Cr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fu(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Fu(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function qS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Er("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let T=0,M=b.length;T<M;T+=3){const U=b[T+0],P=b[T+1],C=b[T+2];h.push(U,P,P,C,C,U)}}else if(_!==void 0){const b=_.array;x=_.version;for(let T=0,M=b.length/3-1;T<M;T+=3){const U=T+0,P=T+1,C=T+2;h.push(U,P,P,C,C,U)}}else return;const m=new(Wh(h)?jh:Kh)(h,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function $S(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,h*o,_),t.update(d,i,_))}function u(h,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,i,1)}function f(h,d,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,x,0,_);let p=0;for(let b=0;b<_;b++)p+=d[b]*x[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function KS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jS(n,e,t){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let T=0;d===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let M=a.attributes.position.count*T,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*U*4*f),C=new Xh(P,M,U,f);C.type=Gn,C.needsUpdate=!0;const B=T*4;for(let y=0;y<f;y++){const L=m[y],te=p[y],W=b[y],ie=M*U*4*y;for(let ue=0;ue<L.count;ue++){const $=ue*B;d===!0&&(r.fromBufferAttribute(L,ue),P[ie+$+0]=r.x,P[ie+$+1]=r.y,P[ie+$+2]=r.z,P[ie+$+3]=0),_===!0&&(r.fromBufferAttribute(te,ue),P[ie+$+4]=r.x,P[ie+$+5]=r.y,P[ie+$+6]=r.z,P[ie+$+7]=0),x===!0&&(r.fromBufferAttribute(W,ue),P[ie+$+8]=r.x,P[ie+$+9]=r.y,P[ie+$+10]=r.z,P[ie+$+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:C,size:new nt(M,U)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const _=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ZS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const rd=new Ot,Hu=new nd(1,1),sd=new Xh,od=new y0,ad=new Qh,Gu=[],ku=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function JS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function eE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function tE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function nE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;qu.set(i),n.uniformMatrix2fv(this.addr,!1,qu),Tt(t,i)}}function iE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Xu.set(i),n.uniformMatrix3fv(this.addr,!1,Xu),Tt(t,i)}}function rE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(yt(t,i))return;Wu.set(i),n.uniformMatrix4fv(this.addr,!1,Wu),Tt(t,i)}}function sE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function oE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function aE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function lE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function cE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function uE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function fE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function hE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function dE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Hu.compareFunction=kh,s=Hu):s=rd,t.setTexture2D(e||s,r)}function pE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||od,r)}function mE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ad,r)}function gE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sd,r)}function _E(n){switch(n){case 5126:return JS;case 35664:return QS;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return aE;case 35669:case 35673:return lE;case 5125:return cE;case 36294:return uE;case 36295:return fE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return gE}}function vE(n,e){n.uniform1fv(this.addr,e)}function xE(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function SE(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function EE(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function ME(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yE(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TE(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function AE(n,e){n.uniform1iv(this.addr,e)}function bE(n,e){n.uniform2iv(this.addr,e)}function RE(n,e){n.uniform3iv(this.addr,e)}function wE(n,e){n.uniform4iv(this.addr,e)}function CE(n,e){n.uniform1uiv(this.addr,e)}function PE(n,e){n.uniform2uiv(this.addr,e)}function IE(n,e){n.uniform3uiv(this.addr,e)}function DE(n,e){n.uniform4uiv(this.addr,e)}function LE(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rd,s[o])}function UE(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||od,s[o])}function NE(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ad,s[o])}function OE(n,e,t){const i=this.cache,r=e.length,s=Oo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sd,s[o])}function FE(n){switch(n){case 5126:return vE;case 35664:return xE;case 35665:return SE;case 35666:return EE;case 35674:return ME;case 35675:return yE;case 35676:return TE;case 5124:case 35670:return AE;case 35667:case 35671:return bE;case 35668:case 35672:return RE;case 35669:case 35673:return wE;case 5125:return CE;case 36294:return PE;case 36295:return IE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return NE;case 36289:case 36303:case 36311:case 36292:return OE}}class BE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_E(t.type)}}class VE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FE(t.type)}}class zE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Yu(n,e){n.seq.push(e),n.map[e.id]=e}function HE(n,e,t){const i=n.name,r=i.length;for(Ca.lastIndex=0;;){const s=Ca.exec(i),o=Ca.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yu(t,c===void 0?new BE(a,n,e):new VE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new zE(a),Yu(t,f)),t=f}}}class so{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);HE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function $u(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const GE=37297;let kE=0;function WE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ku=new qe;function XE(n){Qe._getMatrix(Ku,Qe.workingColorSpace,n);const e=`mat3( ${Ku.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case _o:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ju(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+WE(n.getShaderSource(e),o)}else return r}function qE(n,e){const t=XE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YE(n,e){let t;switch(e){case $_:t="Linear";break;case K_:t="Reinhard";break;case j_:t="Cineon";break;case Z_:t="ACESFilmic";break;case Q_:t="AgX";break;case e0:t="Neutral";break;case J_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ks=new H;function $E(){Qe.getLuminanceCoefficients(Ks);const n=Ks.x.toFixed(4),e=Ks.y.toFixed(4),t=Ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function jE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yr(n){return n!==""}function Zu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(JE,eM)}const QE=new Map;function eM(n,e){let t=Ye[e];if(t===void 0){const i=QE.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const tM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(n){return n.replace(tM,nM)}function nM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ef(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function iM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function rM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wr:case Cr:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cr:e="ENVMAP_MODE_REFRACTION";break}return e}function oM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case q_:e="ENVMAP_BLENDING_MIX";break;case Y_:e="ENVMAP_BLENDING_ADD";break}return e}function aM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=iM(t),c=rM(t),u=sM(t),f=oM(t),h=aM(t),d=KE(t),_=jE(s),x=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(m=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ye.tonemapping_pars_fragment:"",t.toneMapping!==_i?YE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,qE("linearToOutputTexel",t.outputColorSpace),$E(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),o=wl(o),o=Zu(o,t),o=Ju(o,t),a=wl(a),a=Zu(a,t),a=Ju(a,t),o=Qu(o),a=Qu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=b+m+o,M=b+p+a,U=$u(r,r.VERTEX_SHADER,T),P=$u(r,r.FRAGMENT_SHADER,M);r.attachShader(x,U),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(L){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(U).trim(),ie=r.getShaderInfoLog(P).trim();let ue=!0,$=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,U,P);else{const re=ju(r,U,"vertex"),V=ju(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+re+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(W===""||ie==="")&&($=!1);$&&(L.diagnostics={runnable:ue,programLog:te,vertexShader:{log:W,prefix:m},fragmentShader:{log:ie,prefix:p}})}r.deleteShader(U),r.deleteShader(P),B=new so(r,x),A=ZE(r,x)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,GE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=P,this}let cM=0;class uM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fM(e),t.set(e,i)),i}}class fM{constructor(e){this.id=cM++,this.code=e,this.usedTimes=0}}function hM(n,e,t,i,r,s,o){const a=new qh,l=new uM,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,y,L,te,W){const ie=te.fog,ue=W.geometry,$=A.isMeshStandardMaterial?te.environment:null,re=(A.isMeshStandardMaterial?t:e).get(A.envMap||$),V=re&&re.mapping===Uo?re.image.height:null,ge=_[A.type];A.precision!==null&&(d=r.getMaxPrecision(A.precision),d!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",d,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Ce=xe!==void 0?xe.length:0;let Oe=0;ue.morphAttributes.position!==void 0&&(Oe=1),ue.morphAttributes.normal!==void 0&&(Oe=2),ue.morphAttributes.color!==void 0&&(Oe=3);let Ze,ne,me,Ae;if(ge){const it=An[ge];Ze=it.vertexShader,ne=it.fragmentShader}else Ze=A.vertexShader,ne=A.fragmentShader,l.update(A),me=l.getVertexShaderID(A),Ae=l.getFragmentShaderID(A);const N=n.getRenderTarget(),ee=n.state.buffers.depth.getReversed(),le=W.isInstancedMesh===!0,ae=W.isBatchedMesh===!0,Fe=!!A.map,R=!!A.matcap,w=!!re,v=!!A.aoMap,Q=!!A.lightMap,q=!!A.bumpMap,Y=!!A.normalMap,Z=!!A.displacementMap,se=!!A.emissiveMap,j=!!A.metalnessMap,K=!!A.roughnessMap,Se=A.anisotropy>0,E=A.clearcoat>0,g=A.dispersion>0,I=A.iridescence>0,G=A.sheen>0,J=A.transmission>0,z=Se&&!!A.anisotropyMap,ye=E&&!!A.clearcoatMap,pe=E&&!!A.clearcoatNormalMap,Te=E&&!!A.clearcoatRoughnessMap,Re=I&&!!A.iridescenceMap,ce=I&&!!A.iridescenceThicknessMap,be=G&&!!A.sheenColorMap,Ie=G&&!!A.sheenRoughnessMap,De=!!A.specularMap,_e=!!A.specularColorMap,Ge=!!A.specularIntensityMap,D=J&&!!A.transmissionMap,Ee=J&&!!A.thicknessMap,fe=!!A.gradientMap,Pe=!!A.alphaMap,he=A.alphaTest>0,oe=!!A.alphaHash,Le=!!A.extensions;let ke=_i;A.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ft={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:Ze,fragmentShader:ne,defines:A.defines,customVertexShaderID:me,customFragmentShaderID:Ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:d,batching:ae,batchingColor:ae&&W._colorsTexture!==null,instancing:le,instancingColor:le&&W.instanceColor!==null,instancingMorph:le&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gi,alphaToCoverage:!!A.alphaToCoverage,map:Fe,matcap:R,envMap:w,envMapMode:w&&re.mapping,envMapCubeUVHeight:V,aoMap:v,lightMap:Q,bumpMap:q,normalMap:Y,displacementMap:h&&Z,emissiveMap:se,normalMapObjectSpace:Y&&A.normalMapType===s0,normalMapTangentSpace:Y&&A.normalMapType===r0,metalnessMap:j,roughnessMap:K,anisotropy:Se,anisotropyMap:z,clearcoat:E,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Te,dispersion:g,iridescence:I,iridescenceMap:Re,iridescenceThicknessMap:ce,sheen:G,sheenColorMap:be,sheenRoughnessMap:Ie,specularMap:De,specularColorMap:_e,specularIntensityMap:Ge,transmission:J,transmissionMap:D,thicknessMap:Ee,gradientMap:fe,opaque:A.transparent===!1&&A.blending===Sr&&A.alphaToCoverage===!1,alphaMap:Pe,alphaTest:he,alphaHash:oe,combine:A.combine,mapUv:Fe&&x(A.map.channel),aoMapUv:v&&x(A.aoMap.channel),lightMapUv:Q&&x(A.lightMap.channel),bumpMapUv:q&&x(A.bumpMap.channel),normalMapUv:Y&&x(A.normalMap.channel),displacementMapUv:Z&&x(A.displacementMap.channel),emissiveMapUv:se&&x(A.emissiveMap.channel),metalnessMapUv:j&&x(A.metalnessMap.channel),roughnessMapUv:K&&x(A.roughnessMap.channel),anisotropyMapUv:z&&x(A.anisotropyMap.channel),clearcoatMapUv:ye&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(A.sheenRoughnessMap.channel),specularMapUv:De&&x(A.specularMap.channel),specularColorMapUv:_e&&x(A.specularColorMap.channel),specularIntensityMapUv:Ge&&x(A.specularIntensityMap.channel),transmissionMapUv:D&&x(A.transmissionMap.channel),thicknessMapUv:Ee&&x(A.thicknessMap.channel),alphaMapUv:Pe&&x(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Y||Se),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ue.attributes.uv&&(Fe||Pe),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ee,skinning:W.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Oe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Fe&&A.map.isVideoTexture===!0&&Qe.getTransfer(A.map.colorSpace)===ot,decodeVideoTextureEmissive:se&&A.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(A.emissiveMap.colorSpace)===ot,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Hn,flipSided:A.side===$t,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function p(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)y.push(L),y.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(b(y,A),T(y,A),y.push(n.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function b(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function T(A,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),A.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),A.push(a.mask)}function M(A){const y=_[A.type];let L;if(y){const te=An[y];L=F0.clone(te.uniforms)}else L=A.uniforms;return L}function U(A,y){let L;for(let te=0,W=u.length;te<W;te++){const ie=u[te];if(ie.cacheKey===y){L=ie,++L.usedTimes;break}}return L===void 0&&(L=new lM(n,y,A,s),u.push(L)),L}function P(A){if(--A.usedTimes===0){const y=u.indexOf(A);u[y]=u[u.length-1],u.pop(),A.destroy()}}function C(A){l.remove(A)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:U,releaseProgram:P,releaseShaderCache:C,programs:u,dispose:B}}function dM(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function pM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,_,x,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,_,x,m){const p=o(f,h,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||pM),i.length>1&&i.sort(h||tf),r.length>1&&r.sort(h||tf)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function mM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new nf,n.set(i,[o])):r>=s.length?(o=new nf,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new at};break;case"SpotLight":t={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function _M(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vM=0;function xM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SM(n){const e=new gM,t=_M(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Mt,o=new Mt;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,b=0,T=0,M=0,U=0,P=0,C=0;c.sort(xM);for(let A=0,y=c.length;A<y;A++){const L=c[A],te=L.color,W=L.intensity,ie=L.distance,ue=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=te.r*W,f+=te.g*W,h+=te.b*W;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],W);C++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,V=t.get(L);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=ue,i.directionalShadowMatrix[d]=L.shadow.matrix,b++}i.directional[d]=$,d++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(te).multiplyScalar(W),$.distance=ie,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[x]=$;const re=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,re.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[x]=re.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=ue,M++}x++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(te).multiplyScalar(W),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const re=L.shadow,V=t.get(L);V.shadowIntensity=re.intensity,V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,V.shadowCameraNear=re.camera.near,V.shadowCameraFar=re.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=ue,i.pointShadowMatrix[_]=L.shadow.matrix,T++}i.point[_]=$,_++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(W),$.groundColor.copy(L.groundColor).multiplyScalar(W),i.hemi[p]=$,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const B=i.hash;(B.directionalLength!==d||B.pointLength!==_||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==b||B.numPointShadows!==T||B.numSpotShadows!==M||B.numSpotMaps!==U||B.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=M+U-P,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=C,B.directionalLength=d,B.pointLength=_,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=b,B.numPointShadows=T,B.numSpotShadows=M,B.numSpotMaps=U,B.numLightProbes=C,i.version=vM++)}function l(c,u){let f=0,h=0,d=0,_=0,x=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const T=c[p];if(T.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(T.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function rf(n){const e=new SM(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function EM(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rf(n),e.set(r,[a])):s>=o.length?(a=new rf(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const MM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`;function TM(n,e,t){let i=new td;const r=new nt,s=new nt,o=new vt,a=new Y0({depthPacking:i0}),l=new $0,c={},u=t.maxTextureSize,f={[xi]:$t,[$t]:xi,[Hn]:Hn},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:MM,fragmentShader:yM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Wi;_.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new vn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let p=this.type;this.render=function(P,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const A=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),te=n.state;te.setBlending(gi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const W=p!==Bn&&this.type===Bn,ie=p===Bn&&this.type!==Bn;for(let ue=0,$=P.length;ue<$;ue++){const re=P[ue],V=re.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ge=V.getFrameExtents();if(r.multiply(ge),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,V.mapSize.y=s.y)),V.map===null||W===!0||ie===!0){const Ce=this.type!==Bn?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new jn(r.x,r.y,Ce),V.map.texture.name=re.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const xe=V.getViewportCount();for(let Ce=0;Ce<xe;Ce++){const Oe=V.getViewport(Ce);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),te.viewport(o),V.updateMatrices(re,Ce),i=V.getFrustum(),M(C,B,V.camera,re,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&b(V,B),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,y,L)};function b(P,C){const B=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jn(r.x,r.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(C,null,B,h,x,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(C,null,B,d,x,null)}function T(P,C,B,A){let y=null;const L=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)y=L;else if(y=B.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const te=y.uuid,W=C.uuid;let ie=c[te];ie===void 0&&(ie={},c[te]=ie);let ue=ie[W];ue===void 0&&(ue=y.clone(),ie[W]=ue,C.addEventListener("dispose",U)),y=ue}if(y.visible=C.visible,y.wireframe=C.wireframe,A===Bn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const te=n.properties.get(y);te.light=B}return y}function M(P,C,B,A,y){if(P.visible===!1)return;if(P.layers.test(C.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Bn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);const W=e.update(P),ie=P.material;if(Array.isArray(ie)){const ue=W.groups;for(let $=0,re=ue.length;$<re;$++){const V=ue[$],ge=ie[V.materialIndex];if(ge&&ge.visible){const xe=T(P,ge,A,y);P.onBeforeShadow(n,P,C,B,W,xe,V),n.renderBufferDirect(B,null,W,xe,P,V),P.onAfterShadow(n,P,C,B,W,xe,V)}}}else if(ie.visible){const ue=T(P,ie,A,y);P.onBeforeShadow(n,P,C,B,W,ue,null),n.renderBufferDirect(B,null,W,ue,P,null),P.onAfterShadow(n,P,C,B,W,ue,null)}}const te=P.children;for(let W=0,ie=te.length;W<ie;W++)M(te[W],C,B,A,y)}function U(P){P.target.removeEventListener("dispose",U);for(const B in c){const A=c[B],y=P.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}const AM={[Xa]:qa,[Ya]:ja,[$a]:Za,[Rr]:Ka,[qa]:Xa,[ja]:Ya,[Za]:$a,[Ka]:Rr};function bM(n,e){function t(){let D=!1;const Ee=new vt;let fe=null;const Pe=new vt(0,0,0,0);return{setMask:function(he){fe!==he&&!D&&(n.colorMask(he,he,he,he),fe=he)},setLocked:function(he){D=he},setClear:function(he,oe,Le,ke,ft){ft===!0&&(he*=ke,oe*=ke,Le*=ke),Ee.set(he,oe,Le,ke),Pe.equals(Ee)===!1&&(n.clearColor(he,oe,Le,ke),Pe.copy(Ee))},reset:function(){D=!1,fe=null,Pe.set(-1,0,0,0)}}}function i(){let D=!1,Ee=!1,fe=null,Pe=null,he=null;return{setReversed:function(oe){if(Ee!==oe){const Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Ee=oe;const ke=he;he=null,this.setClear(ke)}},getReversed:function(){return Ee},setTest:function(oe){oe?N(n.DEPTH_TEST):ee(n.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!D&&(n.depthMask(oe),fe=oe)},setFunc:function(oe){if(Ee&&(oe=AM[oe]),Pe!==oe){switch(oe){case Xa:n.depthFunc(n.NEVER);break;case qa:n.depthFunc(n.ALWAYS);break;case Ya:n.depthFunc(n.LESS);break;case Rr:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case Ka:n.depthFunc(n.GEQUAL);break;case ja:n.depthFunc(n.GREATER);break;case Za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=oe}},setLocked:function(oe){D=oe},setClear:function(oe){he!==oe&&(Ee&&(oe=1-oe),n.clearDepth(oe),he=oe)},reset:function(){D=!1,fe=null,Pe=null,he=null,Ee=!1}}}function r(){let D=!1,Ee=null,fe=null,Pe=null,he=null,oe=null,Le=null,ke=null,ft=null;return{setTest:function(it){D||(it?N(n.STENCIL_TEST):ee(n.STENCIL_TEST))},setMask:function(it){Ee!==it&&!D&&(n.stencilMask(it),Ee=it)},setFunc:function(it,hn,Pn){(fe!==it||Pe!==hn||he!==Pn)&&(n.stencilFunc(it,hn,Pn),fe=it,Pe=hn,he=Pn)},setOp:function(it,hn,Pn){(oe!==it||Le!==hn||ke!==Pn)&&(n.stencilOp(it,hn,Pn),oe=it,Le=hn,ke=Pn)},setLocked:function(it){D=it},setClear:function(it){ft!==it&&(n.clearStencil(it),ft=it)},reset:function(){D=!1,Ee=null,fe=null,Pe=null,he=null,oe=null,Le=null,ke=null,ft=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,b=null,T=null,M=null,U=null,P=null,C=new at(0,0,0),B=0,A=!1,y=null,L=null,te=null,W=null,ie=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=re>=1):V.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=re>=2);let ge=null,xe={};const Ce=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ze=new vt().fromArray(Ce),ne=new vt().fromArray(Oe);function me(D,Ee,fe,Pe){const he=new Uint8Array(4),oe=n.createTexture();n.bindTexture(D,oe),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<fe;Le++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,he):n.texImage2D(Ee+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,he);return oe}const Ae={};Ae[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Ae[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ae[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(n.DEPTH_TEST),o.setFunc(Rr),q(!1),Y(cu),N(n.CULL_FACE),v(gi);function N(D){u[D]!==!0&&(n.enable(D),u[D]=!0)}function ee(D){u[D]!==!1&&(n.disable(D),u[D]=!1)}function le(D,Ee){return f[D]!==Ee?(n.bindFramebuffer(D,Ee),f[D]=Ee,D===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),D===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ae(D,Ee){let fe=d,Pe=!1;if(D){fe=h.get(Ee),fe===void 0&&(fe=[],h.set(Ee,fe));const he=D.textures;if(fe.length!==he.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,Le=he.length;oe<Le;oe++)fe[oe]=n.COLOR_ATTACHMENT0+oe;fe.length=he.length,Pe=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(fe)}function Fe(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const R={[Oi]:n.FUNC_ADD,[C_]:n.FUNC_SUBTRACT,[P_]:n.FUNC_REVERSE_SUBTRACT};R[I_]=n.MIN,R[D_]=n.MAX;const w={[L_]:n.ZERO,[U_]:n.ONE,[N_]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[H_]:n.SRC_ALPHA_SATURATE,[V_]:n.DST_COLOR,[F_]:n.DST_ALPHA,[O_]:n.ONE_MINUS_SRC_COLOR,[Wa]:n.ONE_MINUS_SRC_ALPHA,[z_]:n.ONE_MINUS_DST_COLOR,[B_]:n.ONE_MINUS_DST_ALPHA,[G_]:n.CONSTANT_COLOR,[k_]:n.ONE_MINUS_CONSTANT_COLOR,[W_]:n.CONSTANT_ALPHA,[X_]:n.ONE_MINUS_CONSTANT_ALPHA};function v(D,Ee,fe,Pe,he,oe,Le,ke,ft,it){if(D===gi){x===!0&&(ee(n.BLEND),x=!1);return}if(x===!1&&(N(n.BLEND),x=!0),D!==w_){if(D!==m||it!==A){if((p!==Oi||M!==Oi)&&(n.blendEquation(n.FUNC_ADD),p=Oi,M=Oi),it)switch(D){case Sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFunc(n.ONE,n.ONE);break;case fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case fu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,T=null,U=null,P=null,C.set(0,0,0),B=0,m=D,A=it}return}he=he||Ee,oe=oe||fe,Le=Le||Pe,(Ee!==p||he!==M)&&(n.blendEquationSeparate(R[Ee],R[he]),p=Ee,M=he),(fe!==b||Pe!==T||oe!==U||Le!==P)&&(n.blendFuncSeparate(w[fe],w[Pe],w[oe],w[Le]),b=fe,T=Pe,U=oe,P=Le),(ke.equals(C)===!1||ft!==B)&&(n.blendColor(ke.r,ke.g,ke.b,ft),C.copy(ke),B=ft),m=D,A=!1}function Q(D,Ee){D.side===Hn?ee(n.CULL_FACE):N(n.CULL_FACE);let fe=D.side===$t;Ee&&(fe=!fe),q(fe),D.blending===Sr&&D.transparent===!1?v(gi):v(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Pe=D.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(D){y!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),y=D)}function Y(D){D!==A_?(N(n.CULL_FACE),D!==L&&(D===cu?n.cullFace(n.BACK):D===b_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ee(n.CULL_FACE),L=D}function Z(D){D!==te&&($&&n.lineWidth(D),te=D)}function se(D,Ee,fe){D?(N(n.POLYGON_OFFSET_FILL),(W!==Ee||ie!==fe)&&(n.polygonOffset(Ee,fe),W=Ee,ie=fe)):ee(n.POLYGON_OFFSET_FILL)}function j(D){D?N(n.SCISSOR_TEST):ee(n.SCISSOR_TEST)}function K(D){D===void 0&&(D=n.TEXTURE0+ue-1),ge!==D&&(n.activeTexture(D),ge=D)}function Se(D,Ee,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+ue-1:fe=ge);let Pe=xe[fe];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[fe]=Pe),(Pe.type!==D||Pe.texture!==Ee)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(D,Ee||Ae[D]),Pe.type=D,Pe.texture=Ee)}function E(){const D=xe[ge];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{n.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{n.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){Ze.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Ie(D){ne.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function De(D,Ee){let fe=c.get(Ee);fe===void 0&&(fe=new WeakMap,c.set(Ee,fe));let Pe=fe.get(D);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ee,D.name),fe.set(D,Pe))}function _e(D,Ee){const Pe=c.get(Ee).get(D);l.get(Ee)!==Pe&&(n.uniformBlockBinding(Ee,Pe,D.__bindingPointIndex),l.set(Ee,Pe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,xe={},f={},h=new WeakMap,d=[],_=null,x=!1,m=null,p=null,b=null,T=null,M=null,U=null,P=null,C=new at(0,0,0),B=0,A=!1,y=null,L=null,te=null,W=null,ie=null,Ze.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:ee,bindFramebuffer:le,drawBuffers:ae,useProgram:Fe,setBlending:v,setMaterial:Q,setFlipSided:q,setCullFace:Y,setLineWidth:Z,setPolygonOffset:se,setScissorTest:j,activeTexture:K,bindTexture:Se,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Re,texImage3D:ce,updateUBOMapping:De,uniformBlockBinding:_e,texStorage2D:pe,texStorage3D:Te,texSubImage2D:G,texSubImage3D:J,compressedTexSubImage2D:z,compressedTexSubImage3D:ye,scissor:be,viewport:Ie,reset:Ge}}function RM(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,g){return d?new OffscreenCanvas(E,g):ps("canvas")}function x(E,g,I){let G=1;const J=Se(E);if((J.width>I||J.height>I)&&(G=I/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const z=Math.floor(G*J.width),ye=Math.floor(G*J.height);f===void 0&&(f=_(z,ye));const pe=g?_(z,ye):f;return pe.width=z,pe.height=ye,pe.getContext("2d").drawImage(E,0,0,z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+z+"x"+ye+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,g,I,G,J=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let z=g;if(g===n.RED&&(I===n.FLOAT&&(z=n.R32F),I===n.HALF_FLOAT&&(z=n.R16F),I===n.UNSIGNED_BYTE&&(z=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.R8UI),I===n.UNSIGNED_SHORT&&(z=n.R16UI),I===n.UNSIGNED_INT&&(z=n.R32UI),I===n.BYTE&&(z=n.R8I),I===n.SHORT&&(z=n.R16I),I===n.INT&&(z=n.R32I)),g===n.RG&&(I===n.FLOAT&&(z=n.RG32F),I===n.HALF_FLOAT&&(z=n.RG16F),I===n.UNSIGNED_BYTE&&(z=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.RG8UI),I===n.UNSIGNED_SHORT&&(z=n.RG16UI),I===n.UNSIGNED_INT&&(z=n.RG32UI),I===n.BYTE&&(z=n.RG8I),I===n.SHORT&&(z=n.RG16I),I===n.INT&&(z=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.RGB8UI),I===n.UNSIGNED_SHORT&&(z=n.RGB16UI),I===n.UNSIGNED_INT&&(z=n.RGB32UI),I===n.BYTE&&(z=n.RGB8I),I===n.SHORT&&(z=n.RGB16I),I===n.INT&&(z=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),I===n.UNSIGNED_INT&&(z=n.RGBA32UI),I===n.BYTE&&(z=n.RGBA8I),I===n.SHORT&&(z=n.RGBA16I),I===n.INT&&(z=n.RGBA32I)),g===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),g===n.RGBA){const ye=J?_o:Qe.getTransfer(G);I===n.FLOAT&&(z=n.RGBA32F),I===n.HALF_FLOAT&&(z=n.RGBA16F),I===n.UNSIGNED_BYTE&&(z=ye===ot?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return(z===n.R16F||z===n.R32F||z===n.RG16F||z===n.RG32F||z===n.RGBA16F||z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function M(E,g){let I;return E?g===null||g===Hi||g===fs?I=n.DEPTH24_STENCIL8:g===Gn?I=n.DEPTH32F_STENCIL8:g===us&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hi||g===fs?I=n.DEPTH_COMPONENT24:g===Gn?I=n.DEPTH_COMPONENT32F:g===us&&(I=n.DEPTH_COMPONENT16),I}function U(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Sn&&E.minFilter!==rn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){const g=E.target;g.removeEventListener("dispose",P),B(g),g.isVideoTexture&&u.delete(g)}function C(E){const g=E.target;g.removeEventListener("dispose",C),y(g)}function B(E){const g=i.get(E);if(g.__webglInit===void 0)return;const I=E.source,G=h.get(I);if(G){const J=G[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&A(E),Object.keys(G).length===0&&h.delete(I)}i.remove(E)}function A(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const I=E.source,G=h.get(I);delete G[g.__cacheKey],o.memory.textures--}function y(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let J=0;J<g.__webglFramebuffer[G].length;J++)n.deleteFramebuffer(g.__webglFramebuffer[G][J]);else n.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)n.deleteFramebuffer(g.__webglFramebuffer[G]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=E.textures;for(let G=0,J=I.length;G<J;G++){const z=i.get(I[G]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(E)}let L=0;function te(){L=0}function W(){const E=L;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function ie(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ue(E,g){const I=i.get(E);if(E.isVideoTexture&&j(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(I,E,g);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function $(E,g){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Ae(I,E,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function re(E,g){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Ae(I,E,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function V(E,g){const I=i.get(E);if(E.version>0&&I.__version!==E.version){N(I,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const ge={[go]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[el]:n.MIRRORED_REPEAT},xe={[Sn]:n.NEAREST,[t0]:n.NEAREST_MIPMAP_NEAREST,[ws]:n.NEAREST_MIPMAP_LINEAR,[rn]:n.LINEAR,[Jo]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},Ce={[o0]:n.NEVER,[h0]:n.ALWAYS,[a0]:n.LESS,[kh]:n.LEQUAL,[l0]:n.EQUAL,[f0]:n.GEQUAL,[c0]:n.GREATER,[u0]:n.NOTEQUAL};function Oe(E,g){if(g.type===Gn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===rn||g.magFilter===Jo||g.magFilter===ws||g.magFilter===pi||g.minFilter===rn||g.minFilter===Jo||g.minFilter===ws||g.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ge[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,xe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ce[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Sn||g.minFilter!==ws&&g.minFilter!==pi||g.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ze(E,g){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));const G=g.source;let J=h.get(G);J===void 0&&(J={},h.set(G,J));const z=ie(g);if(z!==E.__cacheKey){J[z]===void 0&&(J[z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[z].usedTimes++;const ye=J[E.__cacheKey];ye!==void 0&&(J[E.__cacheKey].usedTimes--,ye.usedTimes===0&&A(g)),E.__cacheKey=z,E.__webglTexture=J[z].texture}return I}function ne(E,g,I){return Math.floor(Math.floor(E/I)/g)}function me(E,g,I,G){const z=E.updateRanges;if(z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,I,G,g.data);else{z.sort((ce,be)=>ce.start-be.start);let ye=0;for(let ce=1;ce<z.length;ce++){const be=z[ye],Ie=z[ce],De=be.start+be.count,_e=ne(Ie.start,g.width,4),Ge=ne(be.start,g.width,4);Ie.start<=De+1&&_e===Ge&&ne(Ie.start+Ie.count-1,g.width,4)===_e?be.count=Math.max(be.count,Ie.start+Ie.count-be.start):(++ye,z[ye]=Ie)}z.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),Re=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let ce=0,be=z.length;ce<be;ce++){const Ie=z[ce],De=Math.floor(Ie.start/4),_e=Math.ceil(Ie.count/4),Ge=De%g.width,D=Math.floor(De/g.width),Ee=_e,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ge,D,Ee,fe,I,G,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,Re)}}function Ae(E,g,I){let G=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=n.TEXTURE_3D);const J=Ze(E,g),z=g.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+I);const ye=i.get(z);if(z.version!==ye.__version||J===!0){t.activeTexture(n.TEXTURE0+I);const pe=Qe.getPrimaries(Qe.workingColorSpace),Te=g.colorSpace===hi?null:Qe.getPrimaries(g.colorSpace),Re=g.colorSpace===hi||pe===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ce=x(g.image,!1,r.maxTextureSize);ce=K(g,ce);const be=s.convert(g.format,g.colorSpace),Ie=s.convert(g.type);let De=T(g.internalFormat,be,Ie,g.colorSpace,g.isVideoTexture);Oe(G,g);let _e;const Ge=g.mipmaps,D=g.isVideoTexture!==!0,Ee=ye.__version===void 0||J===!0,fe=z.dataReady,Pe=U(g,ce);if(g.isDepthTexture)De=M(g.format===ds,g.type),Ee&&(D?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,be,Ie,null));else if(g.isDataTexture)if(Ge.length>0){D&&Ee&&t.texStorage2D(n.TEXTURE_2D,Pe,De,Ge[0].width,Ge[0].height);for(let he=0,oe=Ge.length;he<oe;he++)_e=Ge[he],D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,be,Ie,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,be,Ie,_e.data);g.generateMipmaps=!1}else D?(Ee&&t.texStorage2D(n.TEXTURE_2D,Pe,De,ce.width,ce.height),fe&&me(g,ce,be,Ie)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,be,Ie,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,De,Ge[0].width,Ge[0].height,ce.depth);for(let he=0,oe=Ge.length;he<oe;he++)if(_e=Ge[he],g.format!==cn)if(be!==null)if(D){if(fe)if(g.layerUpdates.size>0){const Le=Lu(_e.width,_e.height,g.format,g.type);for(const ke of g.layerUpdates){const ft=_e.data.subarray(ke*Le/_e.data.BYTES_PER_ELEMENT,(ke+1)*Le/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,ke,_e.width,_e.height,1,be,ft)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,be,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ce.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,he,0,0,0,_e.width,_e.height,ce.depth,be,Ie,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,he,De,_e.width,_e.height,ce.depth,0,be,Ie,_e.data)}else{D&&Ee&&t.texStorage2D(n.TEXTURE_2D,Pe,De,Ge[0].width,Ge[0].height);for(let he=0,oe=Ge.length;he<oe;he++)_e=Ge[he],g.format!==cn?be!==null?D?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,be,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,_e.width,_e.height,be,Ie,_e.data):t.texImage2D(n.TEXTURE_2D,he,De,_e.width,_e.height,0,be,Ie,_e.data)}else if(g.isDataArrayTexture)if(D){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,De,ce.width,ce.height,ce.depth),fe)if(g.layerUpdates.size>0){const he=Lu(ce.width,ce.height,g.format,g.type);for(const oe of g.layerUpdates){const Le=ce.data.subarray(oe*he/ce.data.BYTES_PER_ELEMENT,(oe+1)*he/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,ce.width,ce.height,1,be,Ie,Le)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,be,Ie,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,be,Ie,ce.data);else if(g.isData3DTexture)D?(Ee&&t.texStorage3D(n.TEXTURE_3D,Pe,De,ce.width,ce.height,ce.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,be,Ie,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,be,Ie,ce.data);else if(g.isFramebufferTexture){if(Ee)if(D)t.texStorage2D(n.TEXTURE_2D,Pe,De,ce.width,ce.height);else{let he=ce.width,oe=ce.height;for(let Le=0;Le<Pe;Le++)t.texImage2D(n.TEXTURE_2D,Le,De,he,oe,0,be,Ie,null),he>>=1,oe>>=1}}else if(Ge.length>0){if(D&&Ee){const he=Se(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Pe,De,he.width,he.height)}for(let he=0,oe=Ge.length;he<oe;he++)_e=Ge[he],D?fe&&t.texSubImage2D(n.TEXTURE_2D,he,0,0,be,Ie,_e):t.texImage2D(n.TEXTURE_2D,he,De,be,Ie,_e);g.generateMipmaps=!1}else if(D){if(Ee){const he=Se(ce);t.texStorage2D(n.TEXTURE_2D,Pe,De,he.width,he.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ie,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,be,Ie,ce);m(g)&&p(G),ye.__version=z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function N(E,g,I){if(g.image.length!==6)return;const G=Ze(E,g),J=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const z=i.get(J);if(J.version!==z.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const ye=Qe.getPrimaries(Qe.workingColorSpace),pe=g.colorSpace===hi?null:Qe.getPrimaries(g.colorSpace),Te=g.colorSpace===hi||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,ce=g.image[0]&&g.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!Re&&!ce?be[oe]=x(g.image[oe],!0,r.maxCubemapSize):be[oe]=ce?g.image[oe].image:g.image[oe],be[oe]=K(g,be[oe]);const Ie=be[0],De=s.convert(g.format,g.colorSpace),_e=s.convert(g.type),Ge=T(g.internalFormat,De,_e,g.colorSpace),D=g.isVideoTexture!==!0,Ee=z.__version===void 0||G===!0,fe=J.dataReady;let Pe=U(g,Ie);Oe(n.TEXTURE_CUBE_MAP,g);let he;if(Re){D&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ge,Ie.width,Ie.height);for(let oe=0;oe<6;oe++){he=be[oe].mipmaps;for(let Le=0;Le<he.length;Le++){const ke=he[Le];g.format!==cn?De!==null?D?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,ke.width,ke.height,De,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,0,0,ke.width,ke.height,De,_e,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le,Ge,ke.width,ke.height,0,De,_e,ke.data)}}}else{if(he=g.mipmaps,D&&Ee){he.length>0&&Pe++;const oe=Se(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Ge,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ce){D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,De,_e,be[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,be[oe].width,be[oe].height,0,De,_e,be[oe].data);for(let Le=0;Le<he.length;Le++){const ft=he[Le].image[oe].image;D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,ft.width,ft.height,De,_e,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ge,ft.width,ft.height,0,De,_e,ft.data)}}else{D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,_e,be[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ge,De,_e,be[oe]);for(let Le=0;Le<he.length;Le++){const ke=he[Le];D?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,0,0,De,_e,ke.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Le+1,Ge,De,_e,ke.image[oe])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),z.__version=J.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ee(E,g,I,G,J,z){const ye=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),Te=T(I.internalFormat,ye,pe,I.colorSpace),Re=i.get(g),ce=i.get(I);if(ce.__renderTarget=g,!Re.__hasExternalTextures){const be=Math.max(1,g.width>>z),Ie=Math.max(1,g.height>>z);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,z,Te,be,Ie,g.depth,0,ye,pe,null):t.texImage2D(J,z,Te,be,Ie,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,J,ce.__webglTexture,0,Z(g)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,J,ce.__webglTexture,z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(E,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const G=g.depthTexture,J=G&&G.isDepthTexture?G.type:null,z=M(g.stencilBuffer,J),ye=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Z(g);se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,z,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,z,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,z,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,E)}else{const G=g.textures;for(let J=0;J<G.length;J++){const z=G[J],ye=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),Te=T(z.internalFormat,ye,pe,z.colorSpace),Re=Z(g);I&&se(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,Te,g.width,g.height):se(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,Te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ue(g.depthTexture,0);const J=G.__webglTexture,z=Z(g);if(g.depthTexture.format===hs)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(g.depthTexture.format===ds)se(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(E){const g=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=G}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const G=E.texture.mipmaps;G&&G.length>0?ae(g.__webglFramebuffer[0],E):ae(g.__webglFramebuffer,E)}else if(I){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=n.createRenderbuffer(),le(g.__webglDepthbuffer[G],E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,z)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),le(g.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,z=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,z),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(E,g,I){const G=i.get(E);g!==void 0&&ee(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Fe(E)}function w(E){const g=E.texture,I=i.get(E),G=i.get(g);E.addEventListener("dispose",C);const J=E.textures,z=E.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=g.version,o.memory.textures++),z){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let Te=0;Te<g.mipmaps.length;Te++)I.__webglFramebuffer[pe][Te]=n.createFramebuffer()}else I.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)I.__webglFramebuffer[pe]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Te=J.length;pe<Te;pe++){const Re=i.get(J[pe]);Re.__webglTexture===void 0&&(Re.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&se(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<J.length;pe++){const Te=J[pe];I.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Re=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),be=T(Te.internalFormat,Re,ce,Te.colorSpace,E.isXRRenderTarget===!0),Ie=Z(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,be,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),le(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(z){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)ee(I.__webglFramebuffer[pe][Te],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Te);else ee(I.__webglFramebuffer[pe],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Te=J.length;pe<Te;pe++){const Re=J[pe],ce=i.get(Re);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),Oe(n.TEXTURE_2D,Re),ee(I.__webglFramebuffer,E,Re,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(Re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,G.__webglTexture),Oe(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)ee(I.__webglFramebuffer[Te],E,g,n.COLOR_ATTACHMENT0,pe,Te);else ee(I.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,pe,0);m(g)&&p(pe),t.unbindTexture()}E.depthBuffer&&Fe(E)}function v(E){const g=E.textures;for(let I=0,G=g.length;I<G;I++){const J=g[I];if(m(J)){const z=b(E),ye=i.get(J).__webglTexture;t.bindTexture(z,ye),p(z),t.unbindTexture()}}}const Q=[],q=[];function Y(E){if(E.samples>0){if(se(E)===!1){const g=E.textures,I=E.width,G=E.height;let J=n.COLOR_BUFFER_BIT;const z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),pe=g.length>1;if(pe)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Te=E.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const ce=i.get(g[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,J,n.NEAREST),l===!0&&(Q.length=0,q.length=0,Q.push(n.COLOR_ATTACHMENT0+Re),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Q.push(z),q.push(z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,ye.__webglColorRenderbuffer[Re]);const ce=i.get(g[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Z(E){return Math.min(r.maxSamples,E.samples)}function se(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(E){const g=o.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function K(E,g){const I=E.colorSpace,G=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==Gi&&I!==hi&&(Qe.getTransfer(I)===ot?(G!==cn||J!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=te,this.setTexture2D=ue,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=V,this.rebindTextures=R,this.setupRenderTarget=w,this.updateRenderTargetMipmap=v,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=se}function wM(n,e){function t(i,r=hi){let s;const o=Qe.getTransfer(r);if(i===Kn)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nh)return n.BYTE;if(i===Oh)return n.SHORT;if(i===us)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===Hi)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Lr)return n.HALF_FLOAT;if(i===Bh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===cn)return n.RGBA;if(i===hs)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===zh)return n.RED;if(i===ec)return n.RED_INTEGER;if(i===Hh)return n.RG;if(i===tc)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===eo||i===to||i===no||i===io)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tl||i===nl||i===il||i===rl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sl||i===ol||i===al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sl||i===ol)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===al)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl||i===Sl||i===El)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ll)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ul)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_l)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===Ml||i===yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ro)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Tl||i===Al||i===bl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ro)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
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

}`;class IM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cn({vertexShader:CM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new Nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DM extends Ur{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const x=new IM,m=t.getContextAttributes();let p=null,b=null;const T=[],M=[],U=new nt;let P=null;const C=new gn;C.viewport=new vt;const B=new gn;B.viewport=new vt;const A=[C,B],y=new Q0;let L=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=T[ne];return me===void 0&&(me=new Ea,T[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=T[ne];return me===void 0&&(me=new Ea,T[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=T[ne];return me===void 0&&(me=new Ea,T[ne]=me),me.getHandSpace()};function W(ne){const me=M.indexOf(ne.inputSource);if(me===-1)return;const Ae=T[me];Ae!==void 0&&(Ae.update(ne.inputSource,ne.frame,c||o),Ae.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ie(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ue);for(let ne=0;ne<T.length;ne++){const me=M[ne];me!==null&&(M[ne]=null,T[ne].disconnect(me))}L=null,te=null,x.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ue),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,N=null,ee=null;m.depth&&(ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=m.stencil?ds:hs,N=m.stencil?fs:Hi);const le={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new jn(h.textureWidth,h.textureHeight,{format:cn,type:Kn,depthTexture:new nd(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Ae),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new jn(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ue(ne){for(let me=0;me<ne.removed.length;me++){const Ae=ne.removed[me],N=M.indexOf(Ae);N>=0&&(M[N]=null,T[N].disconnect(Ae))}for(let me=0;me<ne.added.length;me++){const Ae=ne.added[me];let N=M.indexOf(Ae);if(N===-1){for(let le=0;le<T.length;le++)if(le>=M.length){M.push(Ae),N=le;break}else if(M[le]===null){M[le]=Ae,N=le;break}if(N===-1)break}const ee=T[N];ee&&ee.connect(Ae)}}const $=new H,re=new H;function V(ne,me,Ae){$.setFromMatrixPosition(me.matrixWorld),re.setFromMatrixPosition(Ae.matrixWorld);const N=$.distanceTo(re),ee=me.projectionMatrix.elements,le=Ae.projectionMatrix.elements,ae=ee[14]/(ee[10]-1),Fe=ee[14]/(ee[10]+1),R=(ee[9]+1)/ee[5],w=(ee[9]-1)/ee[5],v=(ee[8]-1)/ee[0],Q=(le[8]+1)/le[0],q=ae*v,Y=ae*Q,Z=N/(-v+Q),se=Z*-v;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(Z),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),ee[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const j=ae+Z,K=Fe+Z,Se=q-se,E=Y+(N-se),g=R*Fe/K*j,I=w*Fe/K*j;ne.projectionMatrix.makePerspective(Se,E,g,I,j,K),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,Ae=ne.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Ae=x.depthFar)),y.near=B.near=C.near=me,y.far=B.far=C.far=Ae,(L!==y.near||te!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,te=y.far),C.layers.mask=ne.layers.mask|2,B.layers.mask=ne.layers.mask|4,y.layers.mask=C.layers.mask|B.layers.mask;const N=ne.parent,ee=y.cameras;ge(y,N);for(let le=0;le<ee.length;le++)ge(ee[le],N);ee.length===2?V(y,C,B):y.projectionMatrix.copy(C.projectionMatrix),xe(ne,y,N)};function xe(ne,me,Ae){Ae===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(Ae.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Rl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let Ce=null;function Oe(ne,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let N=!1;Ae.length!==y.cameras.length&&(y.cameras.length=0,N=!0);for(let ae=0;ae<Ae.length;ae++){const Fe=Ae[ae];let R=null;if(d!==null)R=d.getViewport(Fe);else{const v=f.getViewSubImage(h,Fe);R=v.viewport,ae===0&&(e.setRenderTargetTextures(b,v.colorTexture,v.depthStencilTexture),e.setRenderTarget(b))}let w=A[ae];w===void 0&&(w=new gn,w.layers.enable(ae),w.viewport=new vt,A[ae]=w),w.matrix.fromArray(Fe.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Fe.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(R.x,R.y,R.width,R.height),ae===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),N===!0&&y.cameras.push(w)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(Ae[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,r.renderState)}}for(let Ae=0;Ae<T.length;Ae++){const N=M[Ae],ee=T[Ae];N!==null&&ee!==void 0&&ee.update(N,me,c||o)}Ce&&Ce(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ze=new id;Ze.setAnimationLoop(Oe),this.setAnimationLoop=function(ne){Ce=ne},this.dispose=function(){}}}const Pi=new Zn,LM=new Mt;function UM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$t&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$t&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),T=b.envMap,M=b.envMapRotation;T&&(m.envMap.value=T,Pi.copy(M),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Pi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const M=T.program;i.uniformBlockBinding(b,M)}function c(b,T){let M=r[b.id];M===void 0&&(_(b),M=u(b),r[b.id]=M,b.addEventListener("dispose",m));const U=T.program;i.updateUBOMapping(b,U);const P=e.render.frame;s[b.id]!==P&&(h(b),s[b.id]=P)}function u(b){const T=f();b.__bindingPointIndex=T;const M=n.createBuffer(),U=b.__size,P=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,U,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,M),M}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const T=r[b.id],M=b.uniforms,U=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,C=M.length;P<C;P++){const B=Array.isArray(M[P])?M[P]:[M[P]];for(let A=0,y=B.length;A<y;A++){const L=B[A];if(d(L,P,A,U)===!0){const te=L.__offset,W=Array.isArray(L.value)?L.value:[L.value];let ie=0;for(let ue=0;ue<W.length;ue++){const $=W[ue],re=x($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,te+ie,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,ie),ie+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(b,T,M,U){const P=b.value,C=T+"_"+M;if(U[C]===void 0)return typeof P=="number"||typeof P=="boolean"?U[C]=P:U[C]=P.clone(),!0;{const B=U[C];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return U[C]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function _(b){const T=b.uniforms;let M=0;const U=16;for(let C=0,B=T.length;C<B;C++){const A=Array.isArray(T[C])?T[C]:[T[C]];for(let y=0,L=A.length;y<L;y++){const te=A[y],W=Array.isArray(te.value)?te.value:[te.value];for(let ie=0,ue=W.length;ie<ue;ie++){const $=W[ie],re=x($),V=M%U,ge=V%re.boundary,xe=V+ge;M+=ge,xe!==0&&U-xe<re.storage&&(M+=U-xe),te.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=M,M+=re.storage}}}const P=M%U;return P>0&&(M+=U-P),b.__size=M,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const M=o.indexOf(T.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class OM{constructor(e={}){const{canvas:t=p0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let U=!1;this._outputColorSpace=tn;let P=0,C=0,B=null,A=-1,y=null;const L=new vt,te=new vt;let W=null;const ie=new at(0);let ue=0,$=t.width,re=t.height,V=1,ge=null,xe=null;const Ce=new vt(0,0,$,re),Oe=new vt(0,0,$,re);let Ze=!1;const ne=new td;let me=!1,Ae=!1;const N=new Mt,ee=new Mt,le=new H,ae=new vt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function w(){return B===null?V:1}let v=i;function Q(S,O){return t.getContext(S,O)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",oe,!1),v===null){const O="webgl2";if(v=Q(O,S),v===null)throw Q(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let q,Y,Z,se,j,K,Se,E,g,I,G,J,z,ye,pe,Te,Re,ce,be,Ie,De,_e,Ge,D;function Ee(){q=new qS(v),q.init(),_e=new wM(v,q),Y=new VS(v,q,e,_e),Z=new bM(v,q),Y.reverseDepthBuffer&&h&&Z.buffers.depth.setReversed(!0),se=new KS(v),j=new dM,K=new RM(v,q,Z,j,Y,_e,se),Se=new HS(M),E=new XS(M),g=new tv(v),Ge=new FS(v,g),I=new YS(v,g,se,Ge),G=new ZS(v,I,g,se),be=new jS(v,Y,K),Te=new zS(j),J=new hM(M,Se,E,q,Y,Ge,Te),z=new UM(M,j),ye=new mM,pe=new EM(q),ce=new OS(M,Se,E,Z,G,d,l),Re=new TM(M,G,Y),D=new NM(v,se,Y,Z),Ie=new BS(v,q,se),De=new $S(v,q,se),se.programs=J.programs,M.capabilities=Y,M.extensions=q,M.properties=j,M.renderLists=ye,M.shadowMap=Re,M.state=Z,M.info=se}Ee();const fe=new DM(M,v);this.xr=fe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const S=q.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=q.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize($,re,!1))},this.getSize=function(S){return S.set($,re)},this.setSize=function(S,O,k=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,re=O,t.width=Math.floor(S*V),t.height=Math.floor(O*V),k===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set($*V,re*V).floor()},this.setDrawingBufferSize=function(S,O,k){$=S,re=O,V=k,t.width=Math.floor(S*k),t.height=Math.floor(O*k),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Ce)},this.setViewport=function(S,O,k,X){S.isVector4?Ce.set(S.x,S.y,S.z,S.w):Ce.set(S,O,k,X),Z.viewport(L.copy(Ce).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Oe)},this.setScissor=function(S,O,k,X){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,O,k,X),Z.scissor(te.copy(Oe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(S){Z.setScissorTest(Ze=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){xe=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,k=!0){let X=0;if(S){let F=!1;if(B!==null){const de=B.texture.format;F=de===nc||de===tc||de===ec}if(F){const de=B.texture.type,Me=de===Kn||de===Hi||de===us||de===fs||de===Jl||de===Ql,Ue=ce.getClearColor(),we=ce.getClearAlpha(),Ve=Ue.r,ze=Ue.g,Ne=Ue.b;Me?(_[0]=Ve,_[1]=ze,_[2]=Ne,_[3]=we,v.clearBufferuiv(v.COLOR,0,_)):(x[0]=Ve,x[1]=ze,x[2]=Ne,x[3]=we,v.clearBufferiv(v.COLOR,0,x))}else X|=v.COLOR_BUFFER_BIT}O&&(X|=v.DEPTH_BUFFER_BIT),k&&(X|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ce.dispose(),ye.dispose(),pe.dispose(),j.dispose(),Se.dispose(),E.dispose(),G.dispose(),Ge.dispose(),D.dispose(),J.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",cc),fe.removeEventListener("sessionend",uc),Ei.stop()};function Pe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=se.autoReset,O=Re.enabled,k=Re.autoUpdate,X=Re.needsUpdate,F=Re.type;Ee(),se.autoReset=S,Re.enabled=O,Re.autoUpdate=k,Re.needsUpdate=X,Re.type=F}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Le(S){const O=S.target;O.removeEventListener("dispose",Le),ke(O)}function ke(S){ft(S),j.remove(S)}function ft(S){const O=j.get(S).programs;O!==void 0&&(O.forEach(function(k){J.releaseProgram(k)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,k,X,F,de){O===null&&(O=Fe);const Me=F.isMesh&&F.matrixWorld.determinant()<0,Ue=cd(S,O,k,X,F);Z.setMaterial(X,Me);let we=k.index,Ve=1;if(X.wireframe===!0){if(we=I.getWireframeAttribute(k),we===void 0)return;Ve=2}const ze=k.drawRange,Ne=k.attributes.position;let Ke=ze.start*Ve,st=(ze.start+ze.count)*Ve;de!==null&&(Ke=Math.max(Ke,de.start*Ve),st=Math.min(st,(de.start+de.count)*Ve)),we!==null?(Ke=Math.max(Ke,0),st=Math.min(st,we.count)):Ne!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Ne.count));const gt=st-Ke;if(gt<0||gt===1/0)return;Ge.setup(F,X,Ue,k,we);let ht,lt=Ie;if(we!==null&&(ht=g.get(we),lt=De,lt.setIndex(ht)),F.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*w()),lt.setMode(v.LINES)):lt.setMode(v.TRIANGLES);else if(F.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),Z.setLineWidth(Be*w()),F.isLineSegments?lt.setMode(v.LINES):F.isLineLoop?lt.setMode(v.LINE_LOOP):lt.setMode(v.LINE_STRIP)}else F.isPoints?lt.setMode(v.POINTS):F.isSprite&&lt.setMode(v.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))lt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Be=F._multiDrawStarts,mt=F._multiDrawCounts,Je=F._multiDrawCount,Kt=we?g.get(we).bytesPerElement:1,Xi=j.get(X).currentProgram.getUniforms();for(let jt=0;jt<Je;jt++)Xi.setValue(v,"_gl_DrawID",jt),lt.render(Be[jt]/Kt,mt[jt])}else if(F.isInstancedMesh)lt.renderInstances(Ke,gt,F.count);else if(k.isInstancedBufferGeometry){const Be=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,mt=Math.min(k.instanceCount,Be);lt.renderInstances(Ke,gt,mt)}else lt.render(Ke,gt)};function it(S,O,k){S.transparent===!0&&S.side===Hn&&S.forceSinglePass===!1?(S.side=$t,S.needsUpdate=!0,ys(S,O,k),S.side=xi,S.needsUpdate=!0,ys(S,O,k),S.side=Hn):ys(S,O,k)}this.compile=function(S,O,k=null){k===null&&(k=S),p=pe.get(k),p.init(O),T.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==k&&S.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const X=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const de=F.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ue=de[Me];it(Ue,k,F),X.add(Ue)}else it(de,k,F),X.add(de)}),p=T.pop(),X},this.compileAsync=function(S,O,k=null){const X=this.compile(S,O,k);return new Promise(F=>{function de(){if(X.forEach(function(Me){j.get(Me).currentProgram.isReady()&&X.delete(Me)}),X.size===0){F(S);return}setTimeout(de,10)}q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let hn=null;function Pn(S){hn&&hn(S)}function cc(){Ei.stop()}function uc(){Ei.start()}const Ei=new id;Ei.setAnimationLoop(Pn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(S){hn=S,fe.setAnimationLoop(S),S===null?Ei.stop():Ei.start()},fe.addEventListener("sessionstart",cc),fe.addEventListener("sessionend",uc),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(O),O=fe.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,O,B),p=pe.get(S,T.length),p.init(O),T.push(p),ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ne.setFromProjectionMatrix(ee),Ae=this.localClippingEnabled,me=Te.init(this.clippingPlanes,Ae),m=ye.get(S,b.length),m.init(),b.push(m),fe.enabled===!0&&fe.isPresenting===!0){const de=M.xr.getDepthSensingMesh();de!==null&&Fo(de,O,-1/0,M.sortObjects)}Fo(S,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ge,xe),R=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,R&&ce.addToRenderList(m,S),this.info.render.frame++,me===!0&&Te.beginShadows();const k=p.state.shadowsArray;Re.render(k,S,O),me===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const de=O.cameras;if(F.length>0)for(let Me=0,Ue=de.length;Me<Ue;Me++){const we=de[Me];hc(X,F,S,we)}R&&ce.render(S);for(let Me=0,Ue=de.length;Me<Ue;Me++){const we=de[Me];fc(m,S,we,we.viewport)}}else F.length>0&&hc(X,F,S,O),R&&ce.render(S),fc(m,S,O);B!==null&&C===0&&(K.updateMultisampleRenderTarget(B),K.updateRenderTargetMipmap(B)),S.isScene===!0&&S.onAfterRender(M,S,O),Ge.resetDefaultState(),A=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],me===!0&&Te.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Fo(S,O,k,X){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ne.intersectsSprite(S)){X&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ee);const Me=G.update(S),Ue=S.material;Ue.visible&&m.push(S,Me,Ue,k,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ne.intersectsObject(S))){const Me=G.update(S),Ue=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ae.copy(Me.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(ee)),Array.isArray(Ue)){const we=Me.groups;for(let Ve=0,ze=we.length;Ve<ze;Ve++){const Ne=we[Ve],Ke=Ue[Ne.materialIndex];Ke&&Ke.visible&&m.push(S,Me,Ke,k,ae.z,Ne)}}else Ue.visible&&m.push(S,Me,Ue,k,ae.z,null)}}const de=S.children;for(let Me=0,Ue=de.length;Me<Ue;Me++)Fo(de[Me],O,k,X)}function fc(S,O,k,X){const F=S.opaque,de=S.transmissive,Me=S.transparent;p.setupLightsView(k),me===!0&&Te.setGlobalState(M.clippingPlanes,k),X&&Z.viewport(L.copy(X)),F.length>0&&Ms(F,O,k),de.length>0&&Ms(de,O,k),Me.length>0&&Ms(Me,O,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function hc(S,O,k,X){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Lr:Kn,minFilter:pi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const de=p.state.transmissionRenderTarget[X.id],Me=X.viewport||L;de.setSize(Me.z*M.transmissionResolutionScale,Me.w*M.transmissionResolutionScale);const Ue=M.getRenderTarget(),we=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(de),M.getClearColor(ie),ue=M.getClearAlpha(),ue<1&&M.setClearColor(16777215,.5),M.clear(),R&&ce.render(k);const ze=M.toneMapping;M.toneMapping=_i;const Ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),me===!0&&Te.setGlobalState(M.clippingPlanes,X),Ms(S,k,X),K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let st=0,gt=O.length;st<gt;st++){const ht=O[st],lt=ht.object,Be=ht.geometry,mt=ht.material,Je=ht.group;if(mt.side===Hn&&lt.layers.test(X.layers)){const Kt=mt.side;mt.side=$t,mt.needsUpdate=!0,dc(lt,k,X,Be,mt,Je),mt.side=Kt,mt.needsUpdate=!0,Ke=!0}}Ke===!0&&(K.updateMultisampleRenderTarget(de),K.updateRenderTargetMipmap(de))}M.setRenderTarget(Ue,we,Ve),M.setClearColor(ie,ue),Ne!==void 0&&(X.viewport=Ne),M.toneMapping=ze}function Ms(S,O,k){const X=O.isScene===!0?O.overrideMaterial:null;for(let F=0,de=S.length;F<de;F++){const Me=S[F],Ue=Me.object,we=Me.geometry,Ve=Me.group;let ze=Me.material;ze.allowOverride===!0&&X!==null&&(ze=X),Ue.layers.test(k.layers)&&dc(Ue,O,k,we,ze,Ve)}}function dc(S,O,k,X,F,de){S.onBeforeRender(M,O,k,X,F,de),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(M,O,k,X,S,de),F.transparent===!0&&F.side===Hn&&F.forceSinglePass===!1?(F.side=$t,F.needsUpdate=!0,M.renderBufferDirect(k,O,X,F,S,de),F.side=xi,F.needsUpdate=!0,M.renderBufferDirect(k,O,X,F,S,de),F.side=Hn):M.renderBufferDirect(k,O,X,F,S,de),S.onAfterRender(M,O,k,X,F,de)}function ys(S,O,k){O.isScene!==!0&&(O=Fe);const X=j.get(S),F=p.state.lights,de=p.state.shadowsArray,Me=F.state.version,Ue=J.getParameters(S,F.state,de,O,k),we=J.getProgramCacheKey(Ue);let Ve=X.programs;X.environment=S.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(S.isMeshStandardMaterial?E:Se).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ve===void 0&&(S.addEventListener("dispose",Le),Ve=new Map,X.programs=Ve);let ze=Ve.get(we);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===Me)return mc(S,Ue),ze}else Ue.uniforms=J.getUniforms(S),S.onBeforeCompile(Ue,M),ze=J.acquireProgram(Ue,we),Ve.set(we,ze),X.uniforms=Ue.uniforms;const Ne=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=Te.uniform),mc(S,Ue),X.needsLights=fd(S),X.lightsStateVersion=Me,X.needsLights&&(Ne.ambientLightColor.value=F.state.ambient,Ne.lightProbe.value=F.state.probe,Ne.directionalLights.value=F.state.directional,Ne.directionalLightShadows.value=F.state.directionalShadow,Ne.spotLights.value=F.state.spot,Ne.spotLightShadows.value=F.state.spotShadow,Ne.rectAreaLights.value=F.state.rectArea,Ne.ltc_1.value=F.state.rectAreaLTC1,Ne.ltc_2.value=F.state.rectAreaLTC2,Ne.pointLights.value=F.state.point,Ne.pointLightShadows.value=F.state.pointShadow,Ne.hemisphereLights.value=F.state.hemi,Ne.directionalShadowMap.value=F.state.directionalShadowMap,Ne.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ne.spotShadowMap.value=F.state.spotShadowMap,Ne.spotLightMatrix.value=F.state.spotLightMatrix,Ne.spotLightMap.value=F.state.spotLightMap,Ne.pointShadowMap.value=F.state.pointShadowMap,Ne.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function pc(S){if(S.uniformsList===null){const O=S.currentProgram.getUniforms();S.uniformsList=so.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function mc(S,O){const k=j.get(S);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function cd(S,O,k,X,F){O.isScene!==!0&&(O=Fe),K.resetTextureUnits();const de=O.fog,Me=X.isMeshStandardMaterial?O.environment:null,Ue=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Gi,we=(X.isMeshStandardMaterial?E:Se).get(X.envMap||Me),Ve=X.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ze=!!k.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ne=!!k.morphAttributes.position,Ke=!!k.morphAttributes.normal,st=!!k.morphAttributes.color;let gt=_i;X.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(gt=M.toneMapping);const ht=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=ht!==void 0?ht.length:0,Be=j.get(X),mt=p.state.lights;if(me===!0&&(Ae===!0||S!==y)){const Bt=S===y&&X.id===A;Te.setState(X,S,Bt)}let Je=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==mt.state.version||Be.outputColorSpace!==Ue||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isBatchedMesh&&Be.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Be.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Be.instancingMorph===!1&&F.morphTexture!==null||Be.envMap!==we||X.fog===!0&&Be.fog!==de||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Te.numPlanes||Be.numIntersection!==Te.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==ze||Be.morphTargets!==Ne||Be.morphNormals!==Ke||Be.morphColors!==st||Be.toneMapping!==gt||Be.morphTargetsCount!==lt)&&(Je=!0):(Je=!0,Be.__version=X.version);let Kt=Be.currentProgram;Je===!0&&(Kt=ys(X,O,F));let Xi=!1,jt=!1,Fr=!1;const dt=Kt.getUniforms(),on=Be.uniforms;if(Z.useProgram(Kt.program)&&(Xi=!0,jt=!0,Fr=!0),X.id!==A&&(A=X.id,jt=!0),Xi||y!==S){Z.buffers.depth.getReversed()?(N.copy(S.projectionMatrix),g0(N),_0(N),dt.setValue(v,"projectionMatrix",N)):dt.setValue(v,"projectionMatrix",S.projectionMatrix),dt.setValue(v,"viewMatrix",S.matrixWorldInverse);const Wt=dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(v,le.setFromMatrixPosition(S.matrixWorld)),Y.logarithmicDepthBuffer&&dt.setValue(v,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&dt.setValue(v,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,jt=!0,Fr=!0)}if(F.isSkinnedMesh){dt.setOptional(v,F,"bindMatrix"),dt.setOptional(v,F,"bindMatrixInverse");const Bt=F.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),dt.setValue(v,"boneTexture",Bt.boneTexture,K))}F.isBatchedMesh&&(dt.setOptional(v,F,"batchingTexture"),dt.setValue(v,"batchingTexture",F._matricesTexture,K),dt.setOptional(v,F,"batchingIdTexture"),dt.setValue(v,"batchingIdTexture",F._indirectTexture,K),dt.setOptional(v,F,"batchingColorTexture"),F._colorsTexture!==null&&dt.setValue(v,"batchingColorTexture",F._colorsTexture,K));const an=k.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&be.update(F,k,Kt),(jt||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,dt.setValue(v,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(on.envMap.value=we,on.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(on.envMapIntensity.value=O.environmentIntensity),jt&&(dt.setValue(v,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&ud(on,Fr),de&&X.fog===!0&&z.refreshFogUniforms(on,de),z.refreshMaterialUniforms(on,X,V,re,p.state.transmissionRenderTarget[S.id]),so.upload(v,pc(Be),on,K)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(so.upload(v,pc(Be),on,K),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&dt.setValue(v,"center",F.center),dt.setValue(v,"modelViewMatrix",F.modelViewMatrix),dt.setValue(v,"normalMatrix",F.normalMatrix),dt.setValue(v,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Bt=X.uniformsGroups;for(let Wt=0,Bo=Bt.length;Wt<Bo;Wt++){const Mi=Bt[Wt];D.update(Mi,Kt),D.bind(Mi,Kt)}}return Kt}function ud(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function fd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(S,O,k){const X=j.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),j.get(S.texture).__webglTexture=O,j.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:k,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){const k=j.get(S);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};const hd=v.createFramebuffer();this.setRenderTarget=function(S,O=0,k=0){B=S,P=O,C=k;let X=!0,F=null,de=!1,Me=!1;if(S){const we=j.get(S);if(we.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(v.FRAMEBUFFER,null),X=!1;else if(we.__webglFramebuffer===void 0)K.setupRenderTarget(S);else if(we.__hasExternalTextures)K.rebindTextures(S,j.get(S.texture).__webglTexture,j.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(we.__boundDepthTexture!==Ne){if(Ne!==null&&j.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(S)}}const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const ze=j.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?F=ze[O][k]:F=ze[O],de=!0):S.samples>0&&K.useMultisampledRTT(S)===!1?F=j.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?F=ze[k]:F=ze,L.copy(S.viewport),te.copy(S.scissor),W=S.scissorTest}else L.copy(Ce).multiplyScalar(V).floor(),te.copy(Oe).multiplyScalar(V).floor(),W=Ze;if(k!==0&&(F=hd),Z.bindFramebuffer(v.FRAMEBUFFER,F)&&X&&Z.drawBuffers(S,F),Z.viewport(L),Z.scissor(te),Z.setScissorTest(W),de){const we=j.get(S.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,k)}else if(Me){const we=j.get(S.texture),Ve=O;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,we.__webglTexture,k,Ve)}else if(S!==null&&k!==0){const we=j.get(S.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,we.__webglTexture,k)}A=-1},this.readRenderTargetPixels=function(S,O,k,X,F,de,Me,Ue=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){Z.bindFramebuffer(v.FRAMEBUFFER,we);try{const Ve=S.textures[Ue],ze=Ve.format,Ne=Ve.type;if(!Y.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-X&&k>=0&&k<=S.height-F&&(S.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(O,k,X,F,_e.convert(ze),_e.convert(Ne),de))}finally{const Ve=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(v.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(S,O,k,X,F,de,Me,Ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=j.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(O>=0&&O<=S.width-X&&k>=0&&k<=S.height-F){Z.bindFramebuffer(v.FRAMEBUFFER,we);const Ve=S.textures[Ue],ze=Ve.format,Ne=Ve.type;if(!Y.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,Ke),v.bufferData(v.PIXEL_PACK_BUFFER,de.byteLength,v.STREAM_READ),S.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Ue),v.readPixels(O,k,X,F,_e.convert(ze),_e.convert(Ne),0);const st=B!==null?j.get(B).__webglFramebuffer:null;Z.bindFramebuffer(v.FRAMEBUFFER,st);const gt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await m0(v,gt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,Ke),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,de),v.deleteBuffer(Ke),v.deleteSync(gt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,k=0){const X=Math.pow(2,-k),F=Math.floor(S.image.width*X),de=Math.floor(S.image.height*X),Me=O!==null?O.x:0,Ue=O!==null?O.y:0;K.setTexture2D(S,0),v.copyTexSubImage2D(v.TEXTURE_2D,k,0,0,Me,Ue,F,de),Z.unbindTexture()};const dd=v.createFramebuffer(),pd=v.createFramebuffer();this.copyTextureToTexture=function(S,O,k=null,X=null,F=0,de=null){de===null&&(F!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=F,F=0):de=0);let Me,Ue,we,Ve,ze,Ne,Ke,st,gt;const ht=S.isCompressedTexture?S.mipmaps[de]:S.image;if(k!==null)Me=k.max.x-k.min.x,Ue=k.max.y-k.min.y,we=k.isBox3?k.max.z-k.min.z:1,Ve=k.min.x,ze=k.min.y,Ne=k.isBox3?k.min.z:0;else{const an=Math.pow(2,-F);Me=Math.floor(ht.width*an),Ue=Math.floor(ht.height*an),S.isDataArrayTexture?we=ht.depth:S.isData3DTexture?we=Math.floor(ht.depth*an):we=1,Ve=0,ze=0,Ne=0}X!==null?(Ke=X.x,st=X.y,gt=X.z):(Ke=0,st=0,gt=0);const lt=_e.convert(O.format),Be=_e.convert(O.type);let mt;O.isData3DTexture?(K.setTexture3D(O,0),mt=v.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),mt=v.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),mt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=v.getParameter(v.UNPACK_ROW_LENGTH),Kt=v.getParameter(v.UNPACK_IMAGE_HEIGHT),Xi=v.getParameter(v.UNPACK_SKIP_PIXELS),jt=v.getParameter(v.UNPACK_SKIP_ROWS),Fr=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,ht.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,ht.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ve),v.pixelStorei(v.UNPACK_SKIP_ROWS,ze),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Ne);const dt=S.isDataArrayTexture||S.isData3DTexture,on=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){const an=j.get(S),Bt=j.get(O),Wt=j.get(an.__renderTarget),Bo=j.get(Bt.__renderTarget);Z.bindFramebuffer(v.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,Bo.__webglFramebuffer);for(let Mi=0;Mi<we;Mi++)dt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(S).__webglTexture,F,Ne+Mi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(O).__webglTexture,de,gt+Mi)),v.blitFramebuffer(Ve,ze,Me,Ue,Ke,st,Me,Ue,v.DEPTH_BUFFER_BIT,v.NEAREST);Z.bindFramebuffer(v.READ_FRAMEBUFFER,null),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||j.has(S)){const an=j.get(S),Bt=j.get(O);Z.bindFramebuffer(v.READ_FRAMEBUFFER,dd),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,pd);for(let Wt=0;Wt<we;Wt++)dt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,an.__webglTexture,F,Ne+Wt):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,an.__webglTexture,F),on?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Bt.__webglTexture,de,gt+Wt):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Bt.__webglTexture,de),F!==0?v.blitFramebuffer(Ve,ze,Me,Ue,Ke,st,Me,Ue,v.COLOR_BUFFER_BIT,v.NEAREST):on?v.copyTexSubImage3D(mt,de,Ke,st,gt+Wt,Ve,ze,Me,Ue):v.copyTexSubImage2D(mt,de,Ke,st,Ve,ze,Me,Ue);Z.bindFramebuffer(v.READ_FRAMEBUFFER,null),Z.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else on?S.isDataTexture||S.isData3DTexture?v.texSubImage3D(mt,de,Ke,st,gt,Me,Ue,we,lt,Be,ht.data):O.isCompressedArrayTexture?v.compressedTexSubImage3D(mt,de,Ke,st,gt,Me,Ue,we,lt,ht.data):v.texSubImage3D(mt,de,Ke,st,gt,Me,Ue,we,lt,Be,ht):S.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,de,Ke,st,Me,Ue,lt,Be,ht.data):S.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,de,Ke,st,ht.width,ht.height,lt,ht.data):v.texSubImage2D(v.TEXTURE_2D,de,Ke,st,Me,Ue,lt,Be,ht);v.pixelStorei(v.UNPACK_ROW_LENGTH,Je),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Kt),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Xi),v.pixelStorei(v.UNPACK_SKIP_ROWS,jt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Fr),de===0&&O.generateMipmaps&&v.generateMipmap(mt),Z.unbindTexture()},this.copyTextureToTexture3D=function(S,O,k=null,X=null,F=0){return Er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,O,k,X,F)},this.initRenderTarget=function(S){j.get(S).__webglFramebuffer===void 0&&K.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?K.setTextureCube(S,0):S.isData3DTexture?K.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?K.setTexture2DArray(S,0):K.setTexture2D(S,0),Z.unbindTexture()},this.resetState=function(){P=0,C=0,B=null,Z.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class FM{constructor(e){this.scene=null,this.camera=null,this.onUpdate=null,this.container=e,this.rect=e.getBoundingClientRect(),this.renderer=new OM({alpha:!1,antialias:!1,logarithmicDepthBuffer:!1}),this.renderer.outputColorSpace=tn,this.renderer.setSize(this.rect.width,this.rect.height),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.container.appendChild(this.renderer.domElement),this.renderer.domElement.style.pointerEvents="none",this.container.style.pointerEvents="auto",window.addEventListener("resize",()=>this.handleResize()),this.renderer.setAnimationLoop(()=>this.loop())}setScene(e){this.scene=e}setCamera(e){this.camera=e}handleResize(){this.rect=this.container.getBoundingClientRect(),this.renderer.setSize(this.rect.width,this.rect.height);const e=this.scene;e!=null&&e.onResize&&e.onResize(this.rect.width,this.rect.height)}loop(){var t;if((t=this.onUpdate)==null||t.call(this,1/60),!this.scene||!this.camera)return;const e=this.scene;e.drawRenderer&&(e.drawRenderer.resize(this.rect.width,this.rect.height),e.drawRenderer.render(this.renderer)),this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera)}}const ms={MASK_URL:"/lets/let_swift_heat_alt.png",VIDEO_URL:"/lets/let_swift_mask_alt.mp4"},Ir={effectIntensity:1,contrastPower:.8,colorSaturation:1.3,heatSensitivity:.5,videoBlendAmount:1,gradientShift:0,heatDecay:.95,interactionRadius:1,reactivity:1},lc=["000000","073dff","53d5fd","fefcdd","ffec6a","f9d400","a61904"],di={LOOP_START_TIME:2.95,LOOP_END_TIME:11.95,AUTOPLAY:!1,MUTED:!0,CONTROLS:!1},bt={FADE_IN_SPEED:.1,MOUSE_INTERPOLATION_SPEED:.8,SCROLL_INTERPOLATION_SPEED:.2,MOVEMENT_INTERPOLATION_SPEED:.01,POWER_INTERPOLATION_SPEED:.01,VIDEO_BLEND_SPEED:.1,HEAT_MAX_VALUE:1.3,TARGET_FPS:60,POWER_MIN:.8,POWER_MAX:1},en={TEXTURE_SIZE:256,RADIUS_RATIO:1e3,MOBILE_RADIUS:350,DESKTOP_RADIUS:220,UNIFORMS:{RADIUS_VECTOR:[-8,.9,150],SIZE_DAMPING:.8,FADE_DAMPING:.98,DIRECTION_MULTIPLIER:100}},oo={BLEND_POINTS:[.4,.7,.81,.91],FADE_RANGES:[1,1,.72,.52],MAX_BLEND:[.8,.87,.5,.27],VERTICAL_GRADIENT_START:.2,VERTICAL_GRADIENT_END:.5,VERTICAL_GRADIENT_MIX:.91,CIRCULAR_FADE_CENTER:[.5,.52],CIRCULAR_FADE_INNER:.5,CIRCULAR_FADE_OUTER:.62},Ht={LEFT:-.5,RIGHT:.5,TOP:.5,BOTTOM:-.5,NEAR:-1,FAR:1,POSITION_Z:1},hr={HEAT_DECAY_MIN:.8,HEAT_DECAY_MAX:.99,HEAT_SENSITIVITY_MIN:.1,HEAT_SENSITIVITY_MAX:2,INTERACTION_RADIUS_MIN:.1,INTERACTION_RADIUS_MAX:3,REACTIVITY_MIN:.1,REACTIVITY_MAX:3,HOLD_MOVE_TARGET:.95,RELEASE_MOVE_TARGET:1,HOLD_POWER_TARGET:1,RELEASE_POWER_TARGET:.8,HEAT_CLEANUP_THRESHOLD:.001},We={IDLE_THRESHOLD:3,EVENT_INTERVAL_MIN:.8,EVENT_INTERVAL_MAX:2.5,EVENT_DURATION_MIN:1.2,EVENT_DURATION_MAX:3,EVENT_INTENSITY_MIN:.4,EVENT_INTENSITY_MAX:1,POSITION_BOUNDS:{MIN_X:-.5,MAX_X:.5,MIN_Y:-.5,MAX_Y:.5},EDGE_BIAS:{EDGE_PROBABILITY:.98,EDGE_THRESHOLD:.4,EDGE_RING_INNER:.42,EDGE_RING_OUTER:.48},CONTINUOUS_MODE:{ENABLED:!0,SPAWN_INTERVAL:4,MAX_CONCURRENT_PATHS:3,ANGULAR_SPEED:.6,RADIUS_OSCILLATION:.01},MOVEMENT_SPEED:.02,MOVEMENT_VARIATION:.05,RADIUS_MULTIPLIER:3.5,MOVEMENT_PATTERNS:{CIRCULAR:.3,SPIRAL_IN:.15,SPIRAL_OUT:.15,FIGURE_EIGHT:.2,ORBITAL:.15,RANDOM_WALK:.05},SPIRAL:{RADIUS_CHANGE_SPEED:.05,MIN_RADIUS:.2,MAX_RADIUS:.48},FIGURE_EIGHT:{WIDTH:.35,HEIGHT:.25,SPEED_MULTIPLIER:1.2},ORBITAL:{CENTER_OFFSET:.15,ORBIT_RADIUS:.2}},BM={effectIntensity:{min:0,max:2,step:.1},contrastPower:{min:.1,max:2,step:.1},colorSaturation:{min:.5,max:3,step:.1},heatSensitivity:{min:.1,max:2,step:.1},videoBlendAmount:{min:0,max:1,step:.1},gradientShift:{min:-.5,max:.5,step:.05},heatDecay:{min:.8,max:.99,step:.01},interactionRadius:{min:.1,max:3,step:.1},reactivity:{min:.1,max:3,step:.1}},VM={ALPHA:!1,ANTIALIAS:!1,LOGARITHMIC_DEPTH_BUFFER:!1,CLEAR_COLOR:0},zM={TYPE:"HalfFloatType",FORMAT:"RGBAFormat",COLOR_SPACE:"LinearSRGBColorSpace",DEPTH_BUFFER:!1,STENCIL_BUFFER:!1,MAG_FILTER:"LinearFilter",MIN_FILTER:"LinearMipmapLinearFilter",GENERATE_MIPMAPS:!0},HM={maskUrl:ms.MASK_URL,videoUrl:ms.VIDEO_URL,defaultParameters:Ir,paletteHex:[...lc],videoLoop:{startTime:di.LOOP_START_TIME,endTime:di.LOOP_END_TIME},animation:{fadeInSpeed:bt.FADE_IN_SPEED,mouseInterpolationSpeed:bt.MOUSE_INTERPOLATION_SPEED,scrollInterpolationSpeed:bt.SCROLL_INTERPOLATION_SPEED,heatMaxValue:bt.HEAT_MAX_VALUE},drawRenderer:{textureSize:en.TEXTURE_SIZE,radiusRatio:en.RADIUS_RATIO,mobileRadius:en.MOBILE_RADIUS,desktopRadius:en.DESKTOP_RADIUS}},GM=Object.freeze(Object.defineProperty({__proto__:null,ANIMATION:bt,ASSETS:ms,CAMERA_CONFIG:Ht,DEFAULT_PARAMETERS:Ir,DRAW_RENDERER:en,GRADIENT_CONFIG:oo,IDLE_ANIMATION:We,INTERACTION:hr,PARAMETER_RANGES:BM,RENDERER_CONFIG:VM,RENDER_TARGET_OPTIONS:zM,THERMAL_EFFECT_CONFIG:HM,THERMAL_PALETTE:lc,VIDEO_CONFIG:di},Symbol.toStringTag,{value:"Module"})),kM=`/**
 * Thermal Effect Vertex Shader
 * Simple pass-through that prepares UV coordinates for the fragment shader
 */

varying vec2 vUv;
varying vec4 vClipPosition;

void main() {
    vUv = uv;
    vClipPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = vClipPosition;
}`,WM=`/**
 * Thermal Effect Fragment Shader
 * 
 * This shader creates the Apple Event logo thermal effect by combining:
 * - Video texture for base thermal patterns
 * - Apple logo mask for shaping
 * - Mouse interaction data for heat generation
 * - Multi-color gradient mapping for thermal visualization
 */

precision highp isampler2D;
precision highp usampler2D;

// Input textures
uniform sampler2D drawMap;      // Mouse interaction heat map
uniform sampler2D textureMap;   // Background video texture
uniform sampler2D maskMap;      // Apple logo mask

// Animation parameters
uniform float blendVideo;
uniform float amount;
uniform float opacity;
uniform vec2 scale;
uniform vec2 offset;

// Color palette (7 colors for thermal gradient)
uniform vec3 color1, color2, color3, color4, color5, color6, color7;
uniform vec4 blend, fade, maxBlend;
uniform float power, rnd;
uniform vec4 heat, stretch;

// HUD controllable parameters
uniform float effectIntensity;
uniform float colorSaturation;
uniform float gradientShift;
// Behavioral parameters
uniform float interactionSize;

varying vec2 vUv;
varying vec4 vClipPosition;

// Convert RGB to luminance for saturation adjustment
vec3 linearRgbToLuminance(vec3 c) {
    float f = dot(c, vec3(0.2126729, 0.7151522, 0.0721750));
    return vec3(f);
}

// Adjust color saturation
vec3 saturation(vec3 c, float s) {
    return mix(linearRgbToLuminance(c), c, s);
}

// 2D rotation matrix
mat2 rotate2D(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat2(c, -s, s, c);
}

// Simple noise function
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Smooth noise
float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Create thermal color gradient based on temperature value
vec3 gradient(float t) {
    // Apply gradient shift and color cycling
    t = clamp(t + gradientShift, 0.0, 1.0);

    float p1 = blend.x, p2 = blend.y, p3 = blend.z, p4 = blend.w;
    float p5 = maxBlend.x, p6 = maxBlend.y;
    float f1 = fade.x, f2 = fade.y, f3 = fade.z, f4 = fade.w;
    float f5 = maxBlend.z, f6 = maxBlend.w;

    // Smooth transitions between color stops
    float b1 = smoothstep(p1 - f1 * 0.5, p1 + f1 * 0.5, t);
    float b2 = smoothstep(p2 - f2 * 0.5, p2 + f2 * 0.5, t);
    float b3 = smoothstep(p3 - f3 * 0.5, p3 + f3 * 0.5, t);
    float b4 = smoothstep(p4 - f4 * 0.5, p4 + f4 * 0.5, t);
    float b5 = smoothstep(p5 - f5 * 0.5, p5 + f5 * 0.5, t);
    float b6 = smoothstep(p6 - f6 * 0.5, p6 + f6 * 0.5, t);

    // Blend colors based on temperature
    vec3 col = color1;
    col = mix(col, color2, b1);
    col = mix(col, color3, b2);
    col = mix(col, color4, b3);
    col = mix(col, color5, b4);
    col = mix(col, color6, b5);
    col = mix(col, color7, b6);

    return col;
}

void main() {
    // Convert clip space to UV coordinates for draw texture sampling
    vec2 duv = vClipPosition.xy / vClipPosition.w;
    duv = 0.5 + duv * 0.5;

    // Apply scaling to UV coordinates
    vec2 uv = vUv;
    uv -= 0.5;
    uv /= scale;
    uv += 0.5;
    uv += offset;

    // Calculate opacity and amount factors
    float o = clamp(opacity, 0.0, 1.0);
    float a = clamp(amount, 0.0, 1.0);
    float v = o * a;

    // Sample the Apple logo mask (green channel)
    vec4 tex = texture(maskMap, uv + offset);
    float mask = tex.g;

    // Sample mouse interaction data (heat map from DrawRenderer)
    vec3 draw = texture(drawMap, duv).rgb;
    float heatDraw = draw.b;
    heatDraw *= mix(0.1, 1.0, mask);  // Apply mask to heat

    // Apply interaction size scaling
    heatDraw *= interactionSize;

    // Sample background video with slight distortion from heat
    vec2 off = draw.rg * 0.01;
    vec3 video = textureLod(textureMap, uv + off, 0.0).rgb;

    // Enhance heat effect based on video content
    float h = mix(pow(1.0 - video.r, 1.5), 1.0, 0.2) * 1.25;
    heatDraw *= h;

    // Create base temperature map from video
    float map = video.r;
    map = pow(map, power);

    // Apply vertical gradient mask
    float msk = smoothstep(0.2, 0.5, uv.y);
    map = mix(map * 0.91, map, msk);
    map = mix(0.0, map, v);

    // Apply circular fade from center
    float fade = distance(vUv, vec2(0.5, 0.52));
    fade = smoothstep(0.5, 0.62, 1.0 - fade);

    // Generate final color using gradient function
    vec3 final = gradient(map + heatDraw);
    final = saturation(final, colorSaturation);  // Apply controllable saturation
    final *= fade;                    // Apply circular fade
    final = mix(vec3(0.0), final, a * effectIntensity); // Apply overall amount with intensity multiplier

    gl_FragColor = vec4(final, 1.0);
}`,XM=`/**
 * Draw Renderer Vertex Shader
 * Simple pass-through for mouse interaction texture rendering
 */

precision highp float;
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,qM=`/**
 * Draw Renderer Fragment Shader
 * 
 * Creates a mouse interaction heat map by tracking cursor position and movement.
 * Uses ping-pong rendering between two render targets for temporal effects.
 * 
 * Outputs:
 * - R/G channels: Movement direction vectors for distortion effects
 * - B channel: Heat intensity based on interaction
 */

precision highp float;

uniform float uDraw;
uniform vec3 uRadius;
uniform vec3 uResolution;
uniform vec2 uPosition;
uniform vec4 uDirection;
uniform float uSizeDamping;
uniform float uFadeDamping;
uniform sampler2D uTexture;

varying vec2 vUv;

void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 pos = uPosition;
    pos.y /= aspect;
    vec2 uv = vUv;
    uv.y /= aspect;
    
    float dist = distance(pos, uv) / (uRadius.z / uResolution.x);
    dist = smoothstep(uRadius.x, uRadius.y, dist);
    
    vec3 dir = uDirection.xyz * uDirection.w;
    vec2 offset = vec2((-dir.x) * (1.0 - dist), (dir.y) * (1.0 - dist));
    
    vec4 color = texture(uTexture, vUv + (offset * 0.01));
    color *= uFadeDamping;
    color.r += offset.x;
    color.g += offset.y;
    color.rg = clamp(color.rg, -1.0, 1.0);
    color.b += uDraw * (1.0 - dist);
    
    gl_FragColor = vec4(color.rgb, 1.0);
}`,xo={thermal:{vertex:kM,fragment:WM},draw:{vertex:XM,fragment:qM}};class YM{constructor(e=en.TEXTURE_SIZE,t={}){this.options=t,this.camera=new oc(Ht.LEFT,Ht.RIGHT,Ht.TOP,Ht.BOTTOM,Ht.NEAR,Ht.FAR),this.camera.position.z=Ht.POSITION_Z;const i={type:Lr,format:cn,colorSpace:Gi,depthBuffer:!1,stencilBuffer:!1,magFilter:rn,minFilter:pi,generateMipmaps:!0};this.renderTargetA=new jn(e,e,i),this.renderTargetB=new jn(e,e,i),this.uniforms=this.createUniforms(),this.material=new Cn({uniforms:this.uniforms,vertexShader:xo.draw.vertex,fragmentShader:xo.draw.fragment,depthTest:!1,transparent:!0}),this.scene=new ed,this.mesh=new vn(new Nr(1,1),this.material),this.scene.add(this.mesh)}createUniforms(){const[e,t,i]=en.UNIFORMS.RADIUS_VECTOR;return{uRadius:{value:new H(e,t,i)},uPosition:{value:new nt(0,0)},uDirection:{value:new vt(0,0,0,0)},uResolution:{value:new H(0,0,0)},uTexture:{value:null},uSizeDamping:{value:en.UNIFORMS.SIZE_DAMPING},uFadeDamping:{value:en.UNIFORMS.FADE_DAMPING},uDraw:{value:0}}}updateRadius(e=0){this.uniforms.uRadius.value.z=e}updateDraw(e=0){this.uniforms.uDraw.value=e}updatePosition(e,t=!1){let i=e.x,r=e.y;t&&(i=.5*e.x+.5,r=.5*e.y+.5),this.uniforms.uPosition.value.set(i,r)}updateDirection(e){this.uniforms.uDirection.value.set(e.x,e.y,0,en.UNIFORMS.DIRECTION_MULTIPLIER)}resize(e,t){const i=t/(this.options.radiusRatio??en.RADIUS_RATIO),s=(this.options.isMobile?en.MOBILE_RADIUS:en.DESKTOP_RADIUS)*i;this.updateRadius(s),this.uniforms.uResolution.value.set(e,t,1)}getTexture(){return this.renderTargetB.texture}render(e){this.uniforms.uTexture.value=this.renderTargetB.texture;const t=e.getRenderTarget();e.setRenderTarget(this.renderTargetA),e.autoClear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t);const i=this.renderTargetA;this.renderTargetA=this.renderTargetB,this.renderTargetB=i}dispose(){this.material.dispose(),this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.mesh.geometry.dispose()}}function lr(n,e,t){return n+(e-n)*t}function Ii(n,e){const t=n*e*60;return t>1?1:t<0?0:t}function $M(n,e,t){return Math.min(Math.max(n,e),t)}function KM(n){n=n.replace(/^#/,""),n.length===3&&(n=n.split("").map(r=>r+r).join(""));const e=parseInt(n.slice(0,2),16)/255,t=parseInt(n.slice(2,4),16)/255,i=parseInt(n.slice(4,6),16)/255;return[e,t,i]}function sf(n,e,t){let i=.5,r=.5;t.width>0&&(i=(n-t.left)/t.width),t.height>0&&(r=(e-t.top)/t.height);const s=2*(i-.5),o=2*-(r-.5);return{x:s,y:o}}function of(n,e,t,i,r){const s=r.width>0?(n-r.left)/r.width:.5,o=r.height>0?(e-r.top)/r.height:.5,a=s-t,l=o-i;return{x:a,y:l}}function jM(){return document.documentElement.classList.contains("touch")||"ontouchstart"in window||navigator.maxTouchPoints>0}function Cl(n){const e=document.querySelector(n);if(!e)throw new Error(`Required element not found: ${n}`);return e}function Di(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}class ZM{constructor(e){this.lastUserActivityTime=0,this.isIdle=!1,this.nextEventTime=0,this.currentEvent=null,this.currentPosition=new H,this.currentIntensity=0,this.continuousPaths=[],this.nextPathId=0,this.nextPathSpawn=0,this.onPositionUpdate=e.onPositionUpdate,this.onIdleStateChange=e.onIdleStateChange,this.resetUserActivity()}resetUserActivity(){this.lastUserActivityTime=performance.now()/1e3,this.isIdle&&(this.isIdle=!1,this.currentEvent=null,this.currentIntensity=0,this.onIdleStateChange(!1))}update(e){const t=e,i=t-this.lastUserActivityTime;!this.isIdle&&i>=We.IDLE_THRESHOLD&&(this.isIdle=!0,this.scheduleNextPathSpawn(t),this.onIdleStateChange(!0)),this.isIdle&&(We.CONTINUOUS_MODE.ENABLED?this.updateContinuousMode(t):this.updateDiscreteMode(t))}updateContinuousMode(e){e>=this.nextPathSpawn&&this.continuousPaths.length<We.CONTINUOUS_MODE.MAX_CONCURRENT_PATHS&&(this.spawnContinuousPath(e),this.scheduleNextPathSpawn(e)),this.updateContinuousPaths(e),this.calculateCombinedOutput()}updateDiscreteMode(e){this.currentEvent&&this.updateCurrentEvent(e),!this.currentEvent&&e>=this.nextEventTime&&this.startNewEvent(e)}updateCurrentEvent(e){if(!this.currentEvent||this.currentEvent.completed)return;const t=e-this.currentEvent.startTime,i=Math.min(t/this.currentEvent.duration,1);if(i>=1){this.currentEvent.completed=!0,this.currentIntensity=0,this.scheduleNextEvent(e);return}const r=this.easeInOutSine(i);this.currentPosition.lerpVectors(this.currentEvent.startPosition,this.currentEvent.targetPosition,r);const s=We.MOVEMENT_VARIATION;this.currentPosition.x+=(Math.random()-.5)*s,this.currentPosition.y+=(Math.random()-.5)*s;let o=1;i<.2?o=i/.2:i>.8&&(o=(1-i)/.2),this.currentIntensity=this.currentEvent.intensity*o,this.onPositionUpdate(this.currentPosition.clone(),this.currentIntensity)}startNewEvent(e){const t=this.generateRandomPosition(),i=this.generateRandomPosition(),r=.1;for(;t.distanceTo(i)<r;)i.copy(this.generateRandomPosition());this.currentEvent={startPosition:t,targetPosition:i,startTime:e,duration:this.randomBetween(We.EVENT_DURATION_MIN,We.EVENT_DURATION_MAX),intensity:this.randomBetween(We.EVENT_INTENSITY_MIN,We.EVENT_INTENSITY_MAX),completed:!1},this.currentPosition.copy(t)}scheduleNextEvent(e){const t=this.randomBetween(We.EVENT_INTERVAL_MIN,We.EVENT_INTERVAL_MAX);this.nextEventTime=e+t,this.currentEvent=null}generateRandomPosition(){const{EDGE_PROBABILITY:e,EDGE_RING_INNER:t,EDGE_RING_OUTER:i}=We.EDGE_BIAS;return Math.random()<e?this.generateEdgePosition():this.generateCenterPosition()}spawnContinuousPath(e){const{EDGE_RING_INNER:t,EDGE_RING_OUTER:i}=We.EDGE_BIAS,r=this.selectRandomPattern(),s=this.randomBetween(t,i),o={id:this.nextPathId++,pattern:r,startAngle:Math.random()*Math.PI*2,currentAngle:Math.random()*Math.PI*2,baseRadius:s,currentRadius:s,intensity:this.randomBetween(We.EVENT_INTENSITY_MIN,We.EVENT_INTENSITY_MAX),startTime:e,lifespan:this.randomBetween(We.EVENT_DURATION_MIN*2,We.EVENT_DURATION_MAX*2),clockwise:Math.random()>.5};this.initializePatternProperties(o),this.continuousPaths.push(o)}selectRandomPattern(){const e=We.MOVEMENT_PATTERNS,t=Object.values(e).reduce((r,s)=>r+s,0);let i=Math.random()*t;for(const[r,s]of Object.entries(e))if(i-=s,i<=0)return r;return"CIRCULAR"}initializePatternProperties(e){switch(e.pattern){case"ORBITAL":const t=Math.random()*Math.PI*2,i=We.ORBITAL.CENTER_OFFSET;e.centerOffset=new nt(Math.cos(t)*i,Math.sin(t)*i);break;case"FIGURE_EIGHT":e.phaseOffset=Math.random()*Math.PI*2;break;case"RANDOM_WALK":e.lastPosition=this.generateEdgePosition();break;case"SPIRAL_IN":e.currentRadius=We.SPIRAL.MAX_RADIUS;break;case"SPIRAL_OUT":e.currentRadius=We.SPIRAL.MIN_RADIUS;break}}updateContinuousPaths(e){const{ANGULAR_SPEED:t}=We.CONTINUOUS_MODE,i=1/60;for(let r=this.continuousPaths.length-1;r>=0;r--){const s=this.continuousPaths[r],o=e-s.startTime;if(o>=s.lifespan){this.continuousPaths.splice(r,1);continue}this.updatePathByPattern(s,i,o)}}updatePathByPattern(e,t,i){const r=We.CONTINUOUS_MODE.ANGULAR_SPEED*(e.clockwise?1:-1);switch(e.pattern){case"CIRCULAR":e.currentAngle+=r*t;break;case"SPIRAL_IN":e.currentAngle+=r*t,e.currentRadius=Math.max(We.SPIRAL.MIN_RADIUS,e.currentRadius-We.SPIRAL.RADIUS_CHANGE_SPEED*t);break;case"SPIRAL_OUT":e.currentAngle+=r*t,e.currentRadius=Math.min(We.SPIRAL.MAX_RADIUS,e.currentRadius+We.SPIRAL.RADIUS_CHANGE_SPEED*t);break;case"FIGURE_EIGHT":const s=r*We.FIGURE_EIGHT.SPEED_MULTIPLIER;e.currentAngle+=s*t;break;case"ORBITAL":e.currentAngle+=r*t;break;case"RANDOM_WALK":i%.5<t&&this.updateRandomWalkPath(e);break}e.currentAngle>Math.PI*2&&(e.currentAngle-=Math.PI*2),e.currentAngle<0&&(e.currentAngle+=Math.PI*2)}updateRandomWalkPath(e){e.lastPosition||(e.lastPosition=this.generateEdgePosition());const t=.15,i=e.lastPosition.clone();i.x+=(Math.random()-.5)*t,i.y+=(Math.random()-.5)*t;const r=i.length();(r<We.EDGE_BIAS.EDGE_RING_INNER||r>We.EDGE_BIAS.EDGE_RING_OUTER)&&i.normalize().multiplyScalar(this.randomBetween(We.EDGE_BIAS.EDGE_RING_INNER,We.EDGE_BIAS.EDGE_RING_OUTER)),e.lastPosition=i,e.currentAngle=Math.atan2(i.y,i.x),e.currentRadius=i.length()}calculateCombinedOutput(){if(this.continuousPaths.length===0){this.currentIntensity=0;return}let e=this.continuousPaths[0],t=0;for(const i of this.continuousPaths){const s=(performance.now()/1e3-i.startTime)/i.lifespan;let o=1;s<.2?o=s/.2:s>.8&&(o=(1-s)/.2);const a=i.intensity*o;a>t&&(t=a,e=i)}this.currentPosition=this.calculatePatternPosition(e),this.currentIntensity=t,this.onPositionUpdate(this.currentPosition.clone(),this.currentIntensity)}scheduleNextPathSpawn(e){this.nextPathSpawn=e+We.CONTINUOUS_MODE.SPAWN_INTERVAL}calculatePatternPosition(e){const{RADIUS_OSCILLATION:t}=We.CONTINUOUS_MODE;let i=new H;switch(e.pattern){case"CIRCULAR":case"SPIRAL_IN":case"SPIRAL_OUT":{const r=Math.sin(performance.now()/1e3*2)*t,s=e.currentRadius+r;i.set(Math.cos(e.currentAngle)*s,Math.sin(e.currentAngle)*s,0)}break;case"FIGURE_EIGHT":{const{WIDTH:r,HEIGHT:s}=We.FIGURE_EIGHT,o=e.currentAngle+(e.phaseOffset||0);if(i.set(r*Math.sin(o),s*Math.sin(o*2),0),i.length()>0){const l=this.randomBetween(We.EDGE_BIAS.EDGE_RING_INNER,We.EDGE_BIAS.EDGE_RING_OUTER);i.normalize().multiplyScalar(l)}}break;case"ORBITAL":if(e.centerOffset){const r=We.ORBITAL.ORBIT_RADIUS,s=Math.cos(e.currentAngle)*r,o=Math.sin(e.currentAngle)*r;i.set(e.centerOffset.x+s,e.centerOffset.y+o,0)}else i.set(Math.cos(e.currentAngle)*e.currentRadius,Math.sin(e.currentAngle)*e.currentRadius,0);break;case"RANDOM_WALK":e.lastPosition?i=e.lastPosition.clone():i.set(Math.cos(e.currentAngle)*e.currentRadius,Math.sin(e.currentAngle)*e.currentRadius,0);break;default:i.set(Math.cos(e.currentAngle)*e.currentRadius,Math.sin(e.currentAngle)*e.currentRadius,0)}return i}generateEdgePosition(){const{EDGE_RING_INNER:e,EDGE_RING_OUTER:t}=We.EDGE_BIAS,i=Math.random()*Math.PI*2,r=this.randomBetween(e,t),s=Math.cos(i)*r,o=Math.sin(i)*r;return new H(s,o,0)}generateCenterPosition(){const{MIN_X:e,MAX_X:t,MIN_Y:i,MAX_Y:r}=We.POSITION_BOUNDS,s=.3;return new H(this.randomBetween(-.3,s),this.randomBetween(-.3,s),0)}randomBetween(e,t){return e+Math.random()*(t-e)}easeInOutSine(e){return-(Math.cos(Math.PI*e)-1)/2}getIsIdle(){return this.isIdle}getCurrentPosition(){return this.currentPosition.clone()}getCurrentIntensity(){return this.currentIntensity}forceIdle(){this.isIdle=!0,this.scheduleNextEvent(performance.now()/1e3),this.onIdleStateChange(!0)}dispose(){this.currentEvent=null,this.isIdle=!1,this.continuousPaths=[]}}class JM{constructor(e){this.cleanupFunctions=[],this.isUsingIdleAnimation=!1,this.handlePointerMove=t=>{const i=t;this.updatePosition(i.clientX,i.clientY),this.setInteracting(!0),this.idleAnimator.resetUserActivity()},this.handlePointerDown=t=>{const i=t;this.updatePosition(i.clientX,i.clientY),this.setInteracting(!0),this.idleAnimator.resetUserActivity()},this.handlePointerEnter=t=>{const i=t;this.updatePosition(i.clientX,i.clientY),this.idleAnimator.resetUserActivity()},this.handlePointerUp=()=>{this.setInteracting(!1),this.idleAnimator.resetUserActivity()},this.handlePointerLeave=()=>{this.setInteracting(!1),this.idleAnimator.resetUserActivity()},this.handleGlobalPointerMove=t=>{const i=t;this.updateGlobalPosition(i.clientX,i.clientY),this.setInteracting(!0),this.idleAnimator.resetUserActivity()},this.handleScroll=()=>{},this.container=e.container,this.hitContainer=e.hitContainer||e.container,this.onPositionUpdate=e.onPositionUpdate,this.onInteractionChange=e.onInteractionChange,this.mouseState={position:new H(0,0,0),target:new H(0,0,0)},this.interactionState={hold:!1,heatUp:0,lastNX:.5,lastNY:.5},this.setupEventListeners(),this.setupIdleAnimator()}setupEventListeners(){this.setupLocalEvents(),this.setupGlobalEvents()}setupLocalEvents(){const e=[this.hitContainer];this.container!==this.hitContainer&&e.push(this.container),e.forEach(t=>{this.cleanupFunctions.push(Di(t,"pointermove",this.handlePointerMove),Di(t,"pointerdown",this.handlePointerDown),Di(t,"pointerenter",this.handlePointerEnter),Di(t,"pointerup",this.handlePointerUp),Di(t,"pointerleave",this.handlePointerLeave))})}setupGlobalEvents(){this.cleanupFunctions.push(Di(window,"pointermove",this.handleGlobalPointerMove,{passive:!0}),Di(window,"scroll",this.handleScroll,{passive:!0}))}updatePosition(e,t){const i=this.hitContainer.getBoundingClientRect(),{x:r,y:s}=sf(e,t,i),{x:o,y:a}=of(e,t,this.interactionState.lastNX,this.interactionState.lastNY,i);this.mouseState.target.set(r,s,0),this.onPositionUpdate(this.mouseState.target,{x:o,y:a}),this.interactionState.lastNX=i.width>0?(e-i.left)/i.width:.5,this.interactionState.lastNY=i.height>0?(t-i.top)/i.height:.5}updateGlobalPosition(e,t){const i=this.container.getBoundingClientRect(),{x:r,y:s}=sf(e,t,i),{x:o,y:a}=of(e,t,this.interactionState.lastNX,this.interactionState.lastNY,i);this.mouseState.target.set(r,s,0),this.onPositionUpdate(this.mouseState.target,{x:o,y:a}),this.interactionState.lastNX=i.width>0?(e-i.left)/i.width:.5,this.interactionState.lastNY=i.height>0?(t-i.top)/i.height:.5}setupIdleAnimator(){this.idleAnimator=new ZM({onPositionUpdate:(e,t)=>{const i=We.RADIUS_MULTIPLIER,r={x:(Math.random()-.5)*t*i*1.5,y:(Math.random()-.5)*t*i*1.5};this.mouseState.target.copy(e),this.onPositionUpdate(e,r),this.isUsingIdleAnimation=!0},onIdleStateChange:e=>{e||(this.isUsingIdleAnimation=!1),this.setInteracting(e)}})}setInteracting(e){this.interactionState.hold!==e&&(this.interactionState.hold=e,this.onInteractionChange(e))}getMouseState(){return this.mouseState}getInteractionState(){return this.interactionState}updateMousePosition(e){this.mouseState.position.lerp(this.mouseState.target,e)}updateIdleAnimation(e){this.idleAnimator.update(e)}isUsingIdle(){return this.isUsingIdleAnimation}dispose(){var e;this.cleanupFunctions.forEach(t=>t()),this.cleanupFunctions=[],(e=this.idleAnimator)==null||e.dispose()}}class QM{constructor(e={}){this.controls=new Map,this.callbacks=e,this.parameters={...Ir},e.initialParameters&&Object.assign(this.parameters,e.initialParameters),this.initializeHUD()}initializeHUD(){this.hudContainer=Cl(".parameter-controls"),this.createParameterControls(),this.setupResetButton()}createParameterControls(){Object.entries({effectIntensity:{label:"Effect Intensity",min:0,max:2,step:.1},contrastPower:{label:"Contrast Power",min:.1,max:2,step:.1},colorSaturation:{label:"Color Saturation",min:.5,max:3,step:.1},heatSensitivity:{label:"Heat Sensitivity",min:.1,max:2,step:.1},videoBlendAmount:{label:"Video Blend",min:0,max:1,step:.1},gradientShift:{label:"Gradient Shift",min:-.5,max:.5,step:.05},heatDecay:{label:"Heat Decay",min:.8,max:.99,step:.01},interactionRadius:{label:"Interaction Radius",min:.1,max:3,step:.1},reactivity:{label:"Reactivity",min:.1,max:3,step:.1}}).forEach(([t,i])=>{const r=t,s=document.createElement("div");s.className="control-group";const o=document.createElement("label");o.textContent=i.label,o.htmlFor=`param-${t}`;const a=document.createElement("input");a.type="range",a.id=`param-${t}`,a.min=i.min.toString(),a.max=i.max.toString(),a.step=i.step.toString(),a.value=this.parameters[r].toString();const l=document.createElement("span");l.className="value-display",l.textContent=this.parameters[r].toString(),a.addEventListener("input",()=>{const c=parseFloat(a.value);this.setParameter(r,c),l.textContent=c.toString()}),s.appendChild(o),s.appendChild(a),s.appendChild(l),this.hudContainer.appendChild(s),this.controls.set(r,a)})}setupResetButton(){const e=document.createElement("button");e.textContent="Reset Parameters",e.className="reset-button",e.addEventListener("click",()=>this.resetToDefaults()),this.hudContainer.appendChild(e)}setParameter(e,t){var i,r;if(this.parameters.hasOwnProperty(e)){this.parameters[e]=t,(r=(i=this.callbacks).onParameterChange)==null||r.call(i,e,t);const s=this.controls.get(e);s&&(s.value=t.toString())}else console.warn(`Unknown parameter: ${String(e)}`)}updateParameters(e){Object.entries(e).forEach(([t,i])=>{i!==void 0&&this.setParameter(t,i)})}getAllParameters(){return{...this.parameters}}getParameter(e){return this.parameters[e]}resetToDefaults(){var e,t;this.parameters={...Ir},(t=(e=this.callbacks).onReset)==null||t.call(e),Object.entries(this.parameters).forEach(([i,r])=>{var a,l;const s=i,o=this.controls.get(s);if(o){o.value=r.toString();const c=o.nextElementSibling;c&&(c.textContent=r.toString())}(l=(a=this.callbacks).onParameterChange)==null||l.call(a,s,r)})}getParameterRanges(){return{effectIntensity:{min:0,max:2,step:.1},contrastPower:{min:.1,max:2,step:.1},colorSaturation:{min:.5,max:3,step:.1},heatSensitivity:{min:.1,max:2,step:.1},videoBlendAmount:{min:0,max:1,step:.1},gradientShift:{min:-.5,max:.5,step:.05},heatDecay:{min:.8,max:.99,step:.01},interactionRadius:{min:.1,max:3,step:.1},reactivity:{min:.1,max:3,step:.1}}}validateParameter(e,t){const r=this.getParameterRanges()[e];return r?Math.max(r.min,Math.min(r.max,t)):(console.warn(`No validation range found for parameter: ${String(e)}`),t)}setParameterSafe(e,t){const i=this.validateParameter(e,t);this.setParameter(e,i)}toJSON(){return{...this.parameters}}fromJSON(e){Object.entries(e).forEach(([t,i])=>{i!==void 0&&typeof i=="number"&&this.setParameterSafe(t,i)})}dispose(){this.controls.clear(),this.hudContainer&&(this.hudContainer.innerHTML=""),this.callbacks={}}}class ey{constructor(e={}){this.callbacks=e,this.parameters={...Ir},e.initialParameters&&Object.assign(this.parameters,e.initialParameters)}setParameter(e,t){var i,r;this.parameters.hasOwnProperty(e)?(this.parameters[e]=t,(r=(i=this.callbacks).onParameterChange)==null||r.call(i,e,t)):console.warn(`Unknown parameter: ${String(e)}`)}updateParameters(e){Object.entries(e).forEach(([t,i])=>{i!==void 0&&this.setParameter(t,i)})}getAllParameters(){return{...this.parameters}}getParameter(e){return this.parameters[e]}resetToDefaults(){var e,t;this.parameters={...Ir},(t=(e=this.callbacks).onReset)==null||t.call(e),Object.entries(this.parameters).forEach(([i,r])=>{var s,o;(o=(s=this.callbacks).onParameterChange)==null||o.call(s,i,r)})}getParameterRanges(){return{effectIntensity:{min:0,max:2,step:.1},contrastPower:{min:.1,max:2,step:.1},colorSaturation:{min:.5,max:3,step:.1},heatSensitivity:{min:.1,max:2,step:.1},videoBlendAmount:{min:0,max:1,step:.1},gradientShift:{min:-.5,max:.5,step:.05},heatDecay:{min:.8,max:.99,step:.01},interactionRadius:{min:.1,max:3,step:.1},reactivity:{min:.1,max:3,step:.1}}}validateParameter(e,t){const r=this.getParameterRanges()[e];return r?Math.max(r.min,Math.min(r.max,t)):(console.warn(`No validation range found for parameter: ${String(e)}`),t)}setParameterSafe(e,t){const i=this.validateParameter(e,t);this.setParameter(e,i)}toJSON(){return{...this.parameters}}fromJSON(e){Object.entries(e).forEach(([t,i])=>{i!==void 0&&typeof i=="number"&&this.setParameterSafe(t,i)})}dispose(){this.callbacks={}}}class ty{constructor(e){this.uniforms=this.createUniforms(e),this.material=this.createMaterial()}createUniforms(e){const t=lc.map(i=>KM(i));return{blendVideo:{value:0},drawMap:{value:e.drawTexture},textureMap:{value:e.videoTexture},maskMap:{value:e.maskTexture},scale:{value:[1,1]},offset:{value:[0,0]},opacity:{value:1},amount:{value:0},color1:{value:t[0]},color2:{value:t[1]},color3:{value:t[2]},color4:{value:t[3]},color5:{value:t[4]},color6:{value:t[5]},color7:{value:t[6]},blend:{value:[...oo.BLEND_POINTS]},fade:{value:[...oo.FADE_RANGES]},maxBlend:{value:[...oo.MAX_BLEND]},power:{value:.8},rnd:{value:0},heat:{value:[0,0,0,1.02]},stretch:{value:[1,1,0,0]},effectIntensity:{value:1},colorSaturation:{value:1.3},gradientShift:{value:0},interactionSize:{value:1}}}createMaterial(){return new Cn({uniforms:this.uniforms,vertexShader:xo.thermal.vertex,fragmentShader:xo.thermal.fragment,depthTest:!1,transparent:!0})}updateUniforms(e){e.opacity!==void 0&&(this.uniforms.opacity.value=e.opacity),e.amount!==void 0&&(this.uniforms.amount.value=e.amount),e.power!==void 0&&(this.uniforms.power.value=e.power),e.blendVideo!==void 0&&(this.uniforms.blendVideo.value=e.blendVideo),e.effectIntensity!==void 0&&(this.uniforms.effectIntensity.value=e.effectIntensity),e.colorSaturation!==void 0&&(this.uniforms.colorSaturation.value=e.colorSaturation),e.gradientShift!==void 0&&(this.uniforms.gradientShift.value=e.gradientShift),e.interactionSize!==void 0&&(this.uniforms.interactionSize.value=e.interactionSize),e.randomValue!==void 0&&(this.uniforms.rnd.value=e.randomValue)}updateTextures(e){e.videoTexture&&(this.uniforms.textureMap.value=e.videoTexture),e.drawTexture&&(this.uniforms.drawMap.value=e.drawTexture),e.maskTexture&&(this.uniforms.maskMap.value=e.maskTexture)}updateTransform(e){e.scale&&(this.uniforms.scale.value=e.scale),e.offset&&(this.uniforms.offset.value=e.offset)}updateFromParameters(e){this.updateUniforms({effectIntensity:e.effectIntensity,colorSaturation:e.colorSaturation,gradientShift:e.gradientShift,interactionSize:e.interactionRadius,power:e.contrastPower,blendVideo:e.videoBlendAmount})}getMaterial(){return this.material}getUniforms(){return this.uniforms}dispose(){this.material.dispose()}}function ny(n){return new Promise((e,t)=>{new J0().load(n,i=>{i.wrapS=i.wrapT=go,e(i)},void 0,i=>t(i))})}function iy(n,e,t,i={}){const r=document.createElement("video");return r.muted=i.muted??!0,r.playsInline=i.playsInline??!0,r.autoplay=i.autoplay??!1,r.controls=i.controls??!1,r.loop=i.loop??!0,r.width=e,r.height=t,r.src=n,r}function ry(n){return new q0(n)}function sy(n,e){n.addEventListener("loadeddata",e,{once:!0})}class oy extends ed{constructor(e){super(),this.videoReady=!1,this.textureReady=!1,this.heatUp=0,this.animationValues={blendVideo:{value:0,target:0},amount:{value:0,target:0},mouse:{position:new H(0,0,0),target:new H(0,0,0)},move:{value:1,target:1},scrollAnimation:{opacity:{value:1,target:1},scale:{value:1,target:1},power:{value:.8,target:.8}}},this.rendererWrapper=e,this.camera=new oc(Ht.LEFT,Ht.RIGHT,Ht.TOP,Ht.BOTTOM,Ht.NEAR,Ht.FAR),this.camera.position.z=Ht.POSITION_Z,this.setupDOMReferences(),this.setupPlayPauseButton()}setupDOMReferences(){this.animationWrapper=Cl(".canvas-wrapper"),this.playButton=Cl("#play-pause-btn")}setupPlayPauseButton(){this.playButton.addEventListener("click",this.handleToggleVideo.bind(this))}async init(){this.rendererWrapper.renderer.setClearColor(0);const e=jM();this.drawRenderer=new YM(256,{radiusRatio:1e3,isMobile:e}),await this.loadAssets(),this.createThermalEffect(),this.setupInteractionManager(),this.setupParameterController(),this.onResize(this.rendererWrapper.rect.width,this.rendererWrapper.rect.height),this.animationWrapper.classList.add("loaded")}async loadAssets(){const{width:e,height:t}=this.rendererWrapper.rect,[i]=await Promise.all([ny(ms.MASK_URL),this.createVideoElement(e,t)]);this.maskTexture=i}async createVideoElement(e,t){this.video=iy(ms.VIDEO_URL,e,t,{muted:di.MUTED,autoplay:di.AUTOPLAY,controls:di.CONTROLS,loop:!0}),sy(this.video,this.handleVideoReady.bind(this))}handleVideoReady(){this.videoReady||(this.videoTexture=ry(this.video),this.thermalMaterial&&this.thermalMaterial.updateTextures({videoTexture:this.videoTexture}),this.animationValues.amount.target=1,this.animationValues.blendVideo.value=1,this.videoReady=!0,this.textureReady=!0,this.video.play().catch(()=>{}),this.updatePlayButtonState())}createThermalEffect(){this.thermalMaterial=new ty({drawTexture:this.drawRenderer.getTexture(),videoTexture:this.videoTexture,maskTexture:this.maskTexture}),this.heatMesh=new vn(new Nr(1,1),this.thermalMaterial.getMaterial()),this.add(this.heatMesh)}setupInteractionManager(){const e=document.querySelector(".interaction-area");this.interactionManager=new JM({container:this.rendererWrapper.container,hitContainer:e,onPositionUpdate:(t,i)=>{this.animationValues.mouse.target.copy(t),this.drawRenderer.updateDirection(i)},onInteractionChange:t=>{this.animationValues.move.target=t?hr.HOLD_MOVE_TARGET:hr.RELEASE_MOVE_TARGET,this.animationValues.scrollAnimation.power.target=t?hr.HOLD_POWER_TARGET:hr.RELEASE_POWER_TARGET}})}setupParameterController(){try{this.parameterController=new QM({onParameterChange:(e,t)=>{const i=this.parameterController.getAllParameters();this.thermalMaterial.updateFromParameters(i)},onReset:()=>{const e=this.parameterController.getAllParameters();this.thermalMaterial.updateFromParameters(e),this.heatUp=0}})}catch{console.log("HUD elements not found, using headless parameter controller"),this.parameterController=new ey({onParameterChange:(t,i)=>{const r=this.parameterController.getAllParameters();this.thermalMaterial.updateFromParameters(r)},onReset:()=>{const t=this.parameterController.getAllParameters();this.thermalMaterial.updateFromParameters(t),this.heatUp=0}})}}handleToggleVideo(){this.video&&(this.video.paused?this.video.play().catch(()=>{}):this.video.pause(),this.updatePlayButtonState())}updatePlayButtonState(){!this.playButton||!this.video||(this.playButton.textContent=this.video.paused?"Play":"Pause")}onResize(e,t){const i=e/t;let r,s;i>=1?(s=1,r=i):(r=1,s=1/i),this.camera.left=-r/2,this.camera.right=r/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix()}update(e){this.textureReady&&(this.updateAnimationValues(e),this.updateVideoLoop(),this.updateHeatInteraction(e),this.updateThermalMaterial(),this.updateMeshTransform(),this.updateDrawRenderer())}updateAnimationValues(e){this.animationValues.mouse.position.lerp(this.animationValues.mouse.target,Ii(bt.MOUSE_INTERPOLATION_SPEED,e)),this.animationValues.move.value=lr(this.animationValues.move.value,this.animationValues.move.target,Ii(bt.MOVEMENT_INTERPOLATION_SPEED,e)),this.animationValues.scrollAnimation.power.value=$M(lr(this.animationValues.scrollAnimation.power.value,this.animationValues.scrollAnimation.power.target,Ii(bt.POWER_INTERPOLATION_SPEED,e)),bt.POWER_MIN,bt.POWER_MAX),this.animationValues.scrollAnimation.opacity.value=lr(this.animationValues.scrollAnimation.opacity.value,this.animationValues.scrollAnimation.opacity.target*this.animationValues.move.value,Ii(bt.SCROLL_INTERPOLATION_SPEED,e)),this.animationValues.scrollAnimation.scale.value=lr(this.animationValues.scrollAnimation.scale.value,this.animationValues.scrollAnimation.scale.target,Ii(bt.SCROLL_INTERPOLATION_SPEED,e)),this.animationValues.amount.value<.99999&&(this.animationValues.amount.value=lr(this.animationValues.amount.value,this.animationValues.amount.target,bt.FADE_IN_SPEED*e*bt.TARGET_FPS)),this.videoReady&&(this.animationValues.blendVideo.value=lr(this.animationValues.blendVideo.value,this.animationValues.blendVideo.target,Ii(bt.VIDEO_BLEND_SPEED,e)))}updateVideoLoop(){this.videoReady&&this.video.currentTime>=di.LOOP_END_TIME&&(this.video.currentTime=di.LOOP_START_TIME)}updateHeatInteraction(e){if(!this.videoReady)return;const t=this.interactionManager.getInteractionState(),i=this.interactionManager.getMouseState(),r=this.parameterController.getAllParameters();if(this.drawRenderer.updatePosition(i.position,!0),t.hold){let s=r.heatSensitivity;this.interactionManager.isUsingIdle()&&(s*=We.RADIUS_MULTIPLIER),this.heatUp+=s*e*bt.TARGET_FPS,this.heatUp=Math.min(this.heatUp,bt.HEAT_MAX_VALUE)}this.drawRenderer.updateDraw(this.heatUp),this.heatUp*=r.heatDecay,this.heatUp<hr.HEAT_CLEANUP_THRESHOLD&&(this.heatUp=0),this.interactionManager.updateMousePosition(Ii(bt.MOUSE_INTERPOLATION_SPEED,e)),this.interactionManager.updateIdleAnimation(performance.now()/1e3)}updateThermalMaterial(){if(!this.thermalMaterial)return;const e=this.parameterController.getAllParameters();this.thermalMaterial.updateUniforms({opacity:this.animationValues.scrollAnimation.opacity.value,amount:this.animationValues.amount.value,power:e.contrastPower,blendVideo:e.videoBlendAmount,randomValue:Math.random()})}updateMeshTransform(){if(!this.heatMesh)return;const e=this.animationValues.scrollAnimation.scale.value;this.heatMesh.scale.set(e,e,e)}updateDrawRenderer(){this.drawRenderer.updateDirection({x:0,y:0})}getParameters(){var e;return((e=this.parameterController)==null?void 0:e.getAllParameters())??{}}setParameter(e,t){this.parameterController&&("setParameter"in this.parameterController?this.parameterController.setParameter(e,t):"setParameterSafe"in this.parameterController&&this.parameterController.setParameterSafe(e,t))}updateParameters(e){this.parameterController&&"updateParameters"in this.parameterController?this.parameterController.updateParameters(e):this.parameterController&&Object.entries(e).forEach(([t,i])=>{i!==void 0&&this.setParameter(t,i)})}resetParameters(){var e;(e=this.parameterController)==null||e.resetToDefaults()}dispose(){var e,t,i,r,s,o;(e=this.drawRenderer)==null||e.dispose(),(t=this.interactionManager)==null||t.dispose(),(i=this.parameterController)==null||i.dispose(),(r=this.thermalMaterial)==null||r.dispose(),this.heatMesh&&(this.heatMesh.geometry.dispose(),this.remove(this.heatMesh)),(s=this.maskTexture)==null||s.dispose(),(o=this.videoTexture)==null||o.dispose(),this.video&&(this.video.pause(),this.video.src="",this.video.load())}}function ay(n={}){const e=ui(!1),t=ui(null);let i=null,r=null,s=!1;async function o(d){var _,x;try{t.value=null,s&&u(),i=new FM(d.webglContainer),r=new oy(i),i.setScene(r),i.setCamera(r.camera),i.onUpdate=m=>r.update(m),await a(r,d),d.initialParameters&&l(d.initialParameters),s=!0,e.value=!0,(_=n.onReady)==null||_.call(n)}catch(m){const p=m instanceof Error?m:new Error(String(m));t.value=p,(x=n.onError)==null||x.call(n,p),console.error("Failed to initialize thermal effect:",m)}}async function a(d,_){const x=d.init.bind(d),m=await xh(()=>Promise.resolve().then(()=>GM),void 0),p={...m.ASSETS};m.ASSETS.VIDEO_URL=_.videoUrl,m.ASSETS.MASK_URL=_.maskUrl;try{await x()}finally{Object.assign(m.ASSETS,p)}if(n.onInteractionChange&&d.interactionManager){const b=d.interactionManager.setInteracting;d.interactionManager.setInteracting=function(T){const M=b.call(this,T);return n.onInteractionChange(T),M}}}function l(d){if(!r||!s){console.warn("Thermal effect not initialized");return}try{Object.entries(d).forEach(([_,x])=>{x!==void 0&&r.setParameter(_,x)})}catch(_){console.error("Failed to update parameters:",_)}}function c(){if(!r||!s)return null;try{return r.getParameters()}catch(d){return console.error("Failed to get parameters:",d),null}}function u(){try{r&&(r.dispose(),r=null),i&&(i.onUpdate=null,i=null),s=!1,e.value=!1,t.value=null}catch(d){console.error("Error during disposal:",d)}}function f(){if(!(!r||!s))try{r.resetParameters()}catch(d){console.error("Failed to reset parameters:",d)}}function h(){if(!(!r||!s))try{const d=r.interactionManager;d!=null&&d.idleAnimator&&d.idleAnimator.forceIdle()}catch(d){console.error("Failed to force idle animation:",d)}}return{isLoaded:e,error:t,initialize:o,dispose:u,updateParameters:l,getParameters:c,resetParameters:f,forceIdleAnimation:h}}const ly=["src"],cy={key:0,class:"absolute inset-0 flex items-center justify-center"},uy={class:"text-white/60"},fy={key:1,class:"absolute inset-0 flex items-center justify-center"},hy={class:"text-red-400"},dy=Si({__name:"ThermalLogo",props:{videoUrl:{default:"/lets/let_swift_mask_alt.mp4"},maskUrl:{default:"/lets/let_swift_heat_alt.png"},width:{default:"100%"},height:{default:"400px"},parameters:{},containerClasses:{},containerStyle:{},autoPlay:{type:Boolean,default:!0},enableIdleAnimation:{type:Boolean,default:!0},showDebugInfo:{type:Boolean,default:!1}},emits:["ready","error","interaction"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=ui(),o=ui(),a=ui(),l=ui(0),c=ui(null),{isLoaded:u,error:f,initialize:h,dispose:d,updateParameters:_,getParameters:x}=ay({onReady:()=>r("ready"),onError:p=>r("error",p),onInteractionChange:p=>r("interaction",p)});Et(()=>typeof i.width=="number"?`${i.width}px`:i.width),Et(()=>typeof i.height=="number"?`${i.height}px`:i.height),Jr(()=>i.parameters,p=>{p&&u.value&&_(p)},{deep:!0});const m=()=>{if(l.value++,c.value&&clearTimeout(c.value),l.value>=5){window.open("https://github.com/samhenrigold/apple-event-shader/?tab=readme-ov-file","_blank"),l.value=0;return}c.value=setTimeout(()=>{l.value=0},2e3)};return kf(async()=>{if(!s.value||!o.value||!a.value){r("error",new Error("Required DOM elements not found"));return}try{await h({container:s.value,webglContainer:o.value,videoElement:a.value,videoUrl:i.videoUrl,maskUrl:i.maskUrl,autoPlay:i.autoPlay,enableIdleAnimation:i.enableIdleAnimation,initialParameters:i.parameters})}catch(p){r("error",p)}}),kl(()=>{c.value&&clearTimeout(c.value),d()}),e({updateParameters:_,getParameters:x,isLoaded:Et(()=>u.value),error:Et(()=>f.value)}),(p,b)=>(_t(),Lt("div",{ref_key:"containerRef",ref:s,class:bo(["relative overflow-hidden","bg-black",p.containerClasses]),style:Ao({width:p.width||"100%",height:p.height||"400px",...p.containerStyle})},[$e("div",{ref_key:"webglRef",ref:o,class:"canvas-wrapper absolute inset-0 w-full h-full",style:{pointerEvents:"none"}},[$e("div",{class:"absolute inset-0 w-full h-full cursor-none",style:{pointerEvents:"auto"},onClick:m})],512),b[2]||(b[2]=po('<button id="play-pause-btn" class="absolute top-4 right-4 opacity-0 pointer-events-none" type="button" data-v-1e1474bf> Play/Pause </button><div class="hidden" data-v-1e1474bf><input id="effect-intensity" type="range" min="0" max="2" step="0.1" value="1.0" data-v-1e1474bf><span id="intensity-value" data-v-1e1474bf>1.0</span><input id="contrast-power" type="range" min="0.1" max="2" step="0.1" value="0.8" data-v-1e1474bf><span id="power-value" data-v-1e1474bf>0.8</span><input id="saturation" type="range" min="0.5" max="3" step="0.1" value="1.3" data-v-1e1474bf><span id="saturation-value" data-v-1e1474bf>1.3</span><input id="heat-sensitivity" type="range" min="0.1" max="2" step="0.1" value="0.5" data-v-1e1474bf><span id="heat-value" data-v-1e1474bf>0.5</span><input id="video-blend" type="range" min="0" max="1" step="0.1" value="1.0" data-v-1e1474bf><span id="blend-value" data-v-1e1474bf>1.0</span><input id="gradient-shift" type="range" min="-0.5" max="0.5" step="0.05" value="0.0" data-v-1e1474bf><span id="gradient-value" data-v-1e1474bf>0.0</span><input id="heat-decay" type="range" min="0.8" max="0.99" step="0.01" value="0.95" data-v-1e1474bf><span id="decay-value" data-v-1e1474bf>0.95</span><input id="interaction-radius" type="range" min="0.1" max="3" step="0.1" value="1.0" data-v-1e1474bf><span id="radius-value" data-v-1e1474bf>1.0</span><input id="reactivity" type="range" min="0.1" max="3" step="0.1" value="1.0" data-v-1e1474bf><span id="reactivity-value" data-v-1e1474bf>1.0</span></div>',2)),$e("video",{ref_key:"videoRef",ref:a,class:"absolute opacity-0 pointer-events-none",src:p.videoUrl,muted:"",loop:"",preload:"none"},null,8,ly),Yt(u)?Ic("",!0):(_t(),Lt("div",cy,[$e("div",uy,[Ec(p.$slots,"loading",{},()=>[b[0]||(b[0]=$e("div",{class:"animate-pulse"},"Loading thermal effect...",-1))])])])),Yt(f)?(_t(),Lt("div",fy,[$e("div",hy,[Ec(p.$slots,"error",{error:Yt(f)},()=>[b[1]||(b[1]=$e("div",null,"Failed to load thermal effect",-1))])])])):Ic("",!0)],6))}}),py=vh(dy,[["__scopeId","data-v-1e1474bf"]]),my={class:"min-h-screen flex items-center justify-center text-white"},gy={class:"flex flex-col items-center gap-y-4"},_y={__name:"Teaser2025",setup(n){return(e,t)=>(_t(),Lt("div",my,[$e("div",gy,[Rt(py,{width:"600px",height:"600px","container-classes":"rounded-lg"}),t[0]||(t[0]=po('<div class="text-center px-4" data-v-e526b83a><h1 class="text-[5vw] leading-none font-black tracking-normal" data-v-e526b83a> Let&#39;Swift 2025 </h1><div class="mt-8 text-4xl font-medium space-y-4" data-v-e526b83a><p class="text-4xl font-bold text-zinc-200" data-v-e526b83a>2025.11.24 월요일</p><p class="text-2xl font-semibold text-zinc-300" data-v-e526b83a>세종대학교 광개토관</p></div></div>',1))])]))}},vy=vh(_y,[["__scopeId","data-v-e526b83a"]]),xy={__name:"Home",setup(n){return(e,t)=>(_t(),yr(vy))}},Sy=[{path:"/",component:xy},{path:"/CodeOfConduct",component:()=>xh(()=>import("./CodeOfConduct-ga59OEsE.js"),[])}],Ey=y_({history:Zg("/2025/"),routes:Sy}),ld=wm(vg);ld.use(Ey);ld.mount("#app");export{Dt as F,$e as a,Lt as c,_t as o,Rs as r,cr as t};
