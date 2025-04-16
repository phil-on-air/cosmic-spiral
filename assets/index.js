(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var If={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function WS(){if(jg)return vo;jg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return vo.Fragment=t,vo.jsx=i,vo.jsxs=i,vo}var Jg;function YS(){return Jg||(Jg=1,If.exports=WS()),If.exports}var Fa=YS(),Ff={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function ZS(){if($g)return se;$g=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function S(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function M(w,j,dt){this.props=w,this.context=j,this.refs=C,this.updater=dt||y}M.prototype.isReactComponent={},M.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},M.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=M.prototype;function F(w,j,dt){this.props=w,this.context=j,this.refs=C,this.updater=dt||y}var N=F.prototype=new _;N.constructor=F,E(N,M.prototype),N.isPureReactComponent=!0;var U=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function B(w,j,dt,mt,K,ut){return dt=ut.ref,{$$typeof:o,type:w,key:j,ref:dt!==void 0?dt:null,props:ut}}function J(w,j){return B(w.type,j,void 0,void 0,void 0,w.props)}function D(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function R(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(dt){return j[dt]})}var P=/\/+/g;function W(w,j){return typeof w=="object"&&w!==null&&w.key!=null?R(""+w.key):j.toString(36)}function X(){}function ct(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(X,X):(w.status="pending",w.then(function(j){w.status==="pending"&&(w.status="fulfilled",w.value=j)},function(j){w.status==="pending"&&(w.status="rejected",w.reason=j)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Y(w,j,dt,mt,K){var ut=typeof w;(ut==="undefined"||ut==="boolean")&&(w=null);var gt=!1;if(w===null)gt=!0;else switch(ut){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(w.$$typeof){case o:case t:gt=!0;break;case g:return gt=w._init,Y(gt(w._payload),j,dt,mt,K)}}if(gt)return K=K(w),gt=mt===""?"."+W(w,0):mt,U(K)?(dt="",gt!=null&&(dt=gt.replace(P,"$&/")+"/"),Y(K,j,dt,"",function(Qt){return Qt})):K!=null&&(D(K)&&(K=J(K,dt+(K.key==null||w&&w.key===K.key?"":(""+K.key).replace(P,"$&/")+"/")+gt)),j.push(K)),1;gt=0;var Mt=mt===""?".":mt+":";if(U(w))for(var bt=0;bt<w.length;bt++)mt=w[bt],ut=Mt+W(mt,bt),gt+=Y(mt,j,dt,ut,K);else if(bt=S(w),typeof bt=="function")for(w=bt.call(w),bt=0;!(mt=w.next()).done;)mt=mt.value,ut=Mt+W(mt,bt++),gt+=Y(mt,j,dt,ut,K);else if(ut==="object"){if(typeof w.then=="function")return Y(ct(w),j,dt,mt,K);throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return gt}function O(w,j,dt){if(w==null)return w;var mt=[],K=0;return Y(w,mt,"","",function(ut){return j.call(dt,ut,K++)}),mt}function tt(w){if(w._status===-1){var j=w._result;j=j(),j.then(function(dt){(w._status===0||w._status===-1)&&(w._status=1,w._result=dt)},function(dt){(w._status===0||w._status===-1)&&(w._status=2,w._result=dt)}),w._status===-1&&(w._status=0,w._result=j)}if(w._status===1)return w._result.default;throw w._result}var H=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ht(){}return se.Children={map:O,forEach:function(w,j,dt){O(w,function(){j.apply(this,arguments)},dt)},count:function(w){var j=0;return O(w,function(){j++}),j},toArray:function(w){return O(w,function(j){return j})||[]},only:function(w){if(!D(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},se.Component=M,se.Fragment=i,se.Profiler=l,se.PureComponent=F,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,se.__COMPILER_RUNTIME={__proto__:null,c:function(w){return V.H.useMemoCache(w)}},se.cache=function(w){return function(){return w.apply(null,arguments)}},se.cloneElement=function(w,j,dt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var mt=E({},w.props),K=w.key,ut=void 0;if(j!=null)for(gt in j.ref!==void 0&&(ut=void 0),j.key!==void 0&&(K=""+j.key),j)!k.call(j,gt)||gt==="key"||gt==="__self"||gt==="__source"||gt==="ref"&&j.ref===void 0||(mt[gt]=j[gt]);var gt=arguments.length-2;if(gt===1)mt.children=dt;else if(1<gt){for(var Mt=Array(gt),bt=0;bt<gt;bt++)Mt[bt]=arguments[bt+2];mt.children=Mt}return B(w.type,K,void 0,void 0,ut,mt)},se.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:c,_context:w},w},se.createElement=function(w,j,dt){var mt,K={},ut=null;if(j!=null)for(mt in j.key!==void 0&&(ut=""+j.key),j)k.call(j,mt)&&mt!=="key"&&mt!=="__self"&&mt!=="__source"&&(K[mt]=j[mt]);var gt=arguments.length-2;if(gt===1)K.children=dt;else if(1<gt){for(var Mt=Array(gt),bt=0;bt<gt;bt++)Mt[bt]=arguments[bt+2];K.children=Mt}if(w&&w.defaultProps)for(mt in gt=w.defaultProps,gt)K[mt]===void 0&&(K[mt]=gt[mt]);return B(w,ut,void 0,void 0,null,K)},se.createRef=function(){return{current:null}},se.forwardRef=function(w){return{$$typeof:d,render:w}},se.isValidElement=D,se.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:tt}},se.memo=function(w,j){return{$$typeof:p,type:w,compare:j===void 0?null:j}},se.startTransition=function(w){var j=V.T,dt={};V.T=dt;try{var mt=w(),K=V.S;K!==null&&K(dt,mt),typeof mt=="object"&&mt!==null&&typeof mt.then=="function"&&mt.then(ht,H)}catch(ut){H(ut)}finally{V.T=j}},se.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},se.use=function(w){return V.H.use(w)},se.useActionState=function(w,j,dt){return V.H.useActionState(w,j,dt)},se.useCallback=function(w,j){return V.H.useCallback(w,j)},se.useContext=function(w){return V.H.useContext(w)},se.useDebugValue=function(){},se.useDeferredValue=function(w,j){return V.H.useDeferredValue(w,j)},se.useEffect=function(w,j,dt){var mt=V.H;if(typeof dt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return mt.useEffect(w,j)},se.useId=function(){return V.H.useId()},se.useImperativeHandle=function(w,j,dt){return V.H.useImperativeHandle(w,j,dt)},se.useInsertionEffect=function(w,j){return V.H.useInsertionEffect(w,j)},se.useLayoutEffect=function(w,j){return V.H.useLayoutEffect(w,j)},se.useMemo=function(w,j){return V.H.useMemo(w,j)},se.useOptimistic=function(w,j){return V.H.useOptimistic(w,j)},se.useReducer=function(w,j,dt){return V.H.useReducer(w,j,dt)},se.useRef=function(w){return V.H.useRef(w)},se.useState=function(w){return V.H.useState(w)},se.useSyncExternalStore=function(w,j,dt){return V.H.useSyncExternalStore(w,j,dt)},se.useTransition=function(){return V.H.useTransition()},se.version="19.1.0",se}var t_;function dd(){return t_||(t_=1,Ff.exports=ZS()),Ff.exports}var Ba=dd(),Hf={exports:{}},So={},Gf={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function KS(){return e_||(e_=1,function(o){function t(O,tt){var H=O.length;O.push(tt);t:for(;0<H;){var ht=H-1>>>1,w=O[ht];if(0<l(w,tt))O[ht]=tt,O[H]=w,H=ht;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var tt=O[0],H=O.pop();if(H!==tt){O[0]=H;t:for(var ht=0,w=O.length,j=w>>>1;ht<j;){var dt=2*(ht+1)-1,mt=O[dt],K=dt+1,ut=O[K];if(0>l(mt,H))K<w&&0>l(ut,mt)?(O[ht]=ut,O[K]=H,ht=K):(O[ht]=mt,O[dt]=H,ht=dt);else if(K<w&&0>l(ut,H))O[ht]=ut,O[K]=H,ht=K;else break t}}return tt}function l(O,tt){var H=O.sortIndex-tt.sortIndex;return H!==0?H:O.id-tt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,S=3,y=!1,E=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var tt=i(p);tt!==null;){if(tt.callback===null)r(p);else if(tt.startTime<=O)r(p),tt.sortIndex=tt.expirationTime,t(m,tt);else break;tt=i(p)}}function V(O){if(C=!1,U(O),!E)if(i(m)!==null)E=!0,k||(k=!0,W());else{var tt=i(p);tt!==null&&Y(V,tt.startTime-O)}}var k=!1,B=-1,J=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<J)}function P(){if(M=!1,k){var O=o.unstable_now();D=O;var tt=!0;try{t:{E=!1,C&&(C=!1,F(B),B=-1),y=!0;var H=S;try{e:{for(U(O),v=i(m);v!==null&&!(v.expirationTime>O&&R());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,S=v.priorityLevel;var w=ht(v.expirationTime<=O);if(O=o.unstable_now(),typeof w=="function"){v.callback=w,U(O),tt=!0;break e}v===i(m)&&r(m),U(O)}else r(m);v=i(m)}if(v!==null)tt=!0;else{var j=i(p);j!==null&&Y(V,j.startTime-O),tt=!1}}break t}finally{v=null,S=H,y=!1}tt=void 0}}finally{tt?W():k=!1}}}var W;if(typeof N=="function")W=function(){N(P)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ct=X.port2;X.port1.onmessage=P,W=function(){ct.postMessage(null)}}else W=function(){_(P,0)};function Y(O,tt){B=_(function(){O(o.unstable_now())},tt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var tt=3;break;default:tt=S}var H=S;S=tt;try{return O()}finally{S=H}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,tt){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=S;S=O;try{return tt()}finally{S=H}},o.unstable_scheduleCallback=function(O,tt,H){var ht=o.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ht+H:ht):H=ht,O){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=H+w,O={id:g++,callback:tt,priorityLevel:O,startTime:H,expirationTime:w,sortIndex:-1},H>ht?(O.sortIndex=H,t(p,O),i(m)===null&&O===i(p)&&(C?(F(B),B=-1):C=!0,Y(V,H-ht))):(O.sortIndex=w,t(m,O),E||y||(E=!0,k||(k=!0,W()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var tt=S;return function(){var H=S;S=tt;try{return O.apply(this,arguments)}finally{S=H}}}}(Vf)),Vf}var n_;function QS(){return n_||(n_=1,Gf.exports=KS()),Gf.exports}var kf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function jS(){if(i_)return bn;i_=1;var o=dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},bn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.1.0",bn}var a_;function JS(){if(a_)return kf.exports;a_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=jS(),kf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function $S(){if(r_)return So;r_=1;var o=QS(),t=dd(),i=JS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===s)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,s=f;break}if(b===s){x=!0,s=u,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,s=u;break}if(b===s){x=!0,s=f,a=u;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),F=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var X=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===X?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case C:return"StrictMode";case V:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case N:return(e.displayName||"Context")+".Provider";case F:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var Y=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ht=[],w=-1;function j(e){return{current:e}}function dt(e){0>w||(e.current=ht[w],ht[w]=null,w--)}function mt(e,n){w++,ht[w]=e.current,e.current=n}var K=j(null),ut=j(null),gt=j(null),Mt=j(null);function bt(e,n){switch(mt(gt,n),mt(ut,e),mt(K,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=bg(n),e=Ag(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}dt(K),mt(K,e)}function Qt(){dt(K),dt(ut),dt(gt)}function kt(e){e.memoizedState!==null&&mt(Mt,e);var n=K.current,a=Ag(n,e.type);n!==a&&(mt(ut,e),mt(K,a))}function le(e){ut.current===e&&(dt(K),dt(ut)),Mt.current===e&&(dt(Mt),ho._currentValue=H)}var ce=Object.prototype.hasOwnProperty,Vt=o.unstable_scheduleCallback,I=o.unstable_cancelCallback,Ke=o.unstable_shouldYield,ie=o.unstable_requestPaint,Zt=o.unstable_now,It=o.unstable_getCurrentPriorityLevel,ve=o.unstable_ImmediatePriority,Ft=o.unstable_UserBlockingPriority,L=o.unstable_NormalPriority,T=o.unstable_LowPriority,at=o.unstable_IdlePriority,yt=o.log,Et=o.unstable_setDisableYieldValue,_t=null,zt=null;function Rt(e){if(typeof yt=="function"&&Et(e),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(_t,e)}catch{}}var Ct=Math.clz32?Math.clz32:Ht,Se=Math.log,At=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(Se(e)/At|0)|0}var Kt=256,Jt=4194304;function Ot(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?u=Ot(s):(x&=b,x!==0?u=Ot(x):a||(a=b&~e,a!==0&&(u=Ot(a))))):(b=s&~f,b!==0?u=Ot(b):x!==0?u=Ot(x):a||(a=s&~e,a!==0&&(u=Ot(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function q(){var e=Kt;return Kt<<=1,(Kt&4194048)===0&&(Kt=256),e}function Lt(){var e=Jt;return Jt<<=1,(Jt&62914560)===0&&(Jt=4194304),e}function ft(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function St(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pt(e,n,a,s,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,it=e.hiddenUpdates;for(a=x&~a;0<a;){var pt=31-Ct(a),xt=1<<pt;b[pt]=0,z[pt]=-1;var rt=it[pt];if(rt!==null)for(it[pt]=null,pt=0;pt<rt.length;pt++){var st=rt[pt];st!==null&&(st.lane&=-536870913)}a&=~xt}s!==0&&Nt(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Nt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ct(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194090}function ae(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ct(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Fe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $e(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function be(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:qg(e.type))}function Fn(e,n){var a=tt.p;try{return tt.p=e,n()}finally{tt.p=a}}var fn=Math.random().toString(36).slice(2),rn="__reactFiber$"+fn,_n="__reactProps$"+fn,Un="__reactContainer$"+fn,Xa="__reactEvents$"+fn,Fo="__reactListeners$"+fn,Ho="__reactHandles$"+fn,qa="__reactResources$"+fn,ra="__reactMarker$"+fn;function sa(e){delete e[rn],delete e[_n],delete e[Xa],delete e[Fo],delete e[Ho]}function Ri(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Un]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Dg(e);e!==null;){if(a=e[rn])return a;e=Dg(e)}return n}e=a,a=e.parentNode}return null}function Ci(e){if(e=e[rn]||e[Un]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Wa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function oa(e){var n=e[qa];return n||(n=e[qa]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(e){e[ra]=!0}var Go=new Set,Vo={};function wi(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(Vo[e]=n,e=0;e<n.length;e++)Go.add(n[e])}var Q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function $(e){return ce.call(lt,e)?!0:ce.call(ot,e)?!1:Q.test(e)?lt[e]=!0:(ot[e]=!0,!1)}function Tt(e,n,a){if($(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}var Bt,te;function Wt(e){if(Bt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Bt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bt+e+te}var qt=!1;function pe(e,n){if(!e||qt)return"";qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(st){var rt=st}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(st){rt=st}e.call(xt.prototype)}}else{try{throw Error()}catch(st){rt=st}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(st){if(st&&rt&&typeof st.stack=="string")return[st.stack,rt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var z=x.split(`
`),it=b.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===it.length)for(s=z.length-1,u=it.length-1;1<=s&&0<=u&&z[s]!==it[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==it[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==it[u]){var pt=`
`+z[s].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=s&&0<=u);break}}}finally{qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function Ae(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return pe(e.type,!1);case 11:return pe(e.type.render,!1);case 1:return pe(e.type,!0);case 31:return Wt("Activity");default:return""}}function ke(e){try{var n="";do n+=Ae(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function We(e){e._valueTracker||(e._valueTracker=Yt(e))}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=ye(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var la=/[\n"\\]/g;function He(e){return e.replace(la,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Di(e,n,a,s,u,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?En(e,x,xe(n)):a!=null?En(e,x,xe(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+xe(b):e.removeAttribute("name")}function Be(e,n,a,s,u,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function En(e,n,a){n==="number"&&Mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function sn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function hn(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function vn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Y(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function gi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ui=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Ui.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ad(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&bd(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&bd(e,f,n[f])}function zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bc=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Tr=null;function Rd(e){var n=Ci(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(Di(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+He(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[_n]||null;if(!u)throw Error(r(90));Di(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ee(s)}break t;case"textarea":hn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&sn(e,!!a.multiple,n,!1)}}}var Fc=!1;function Cd(e,n,a){if(Fc)return e(n,a);Fc=!0;try{var s=e(n);return s}finally{if(Fc=!1,(Er!==null||Tr!==null)&&(Cl(),Er&&(n=Er,e=Tr,Tr=Er=null,Rd(n),e)))for(n=0;n<e.length;n++)Rd(e[n])}}function bs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[_n]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Li)try{var As={};Object.defineProperty(As,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",As,As),window.removeEventListener("test",As,As)}catch{Hc=!1}var ca=null,Gc=null,Xo=null;function wd(){if(Xo)return Xo;var e,n=Gc,a=n.length,s,u="value"in ca?ca.value:ca.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===u[f-s];s++);return Xo=u.slice(e,1<s?1-s:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Dd(){return!1}function Ln(e){function n(a,s,u,f,x){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:Dd,this.isPropagationStopped=Dd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=Ln(Ya),Rs=g({},Ya,{view:0,detail:0}),Wv=Ln(Rs),Vc,kc,Cs,Zo=g({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cs&&(Cs&&e.type==="mousemove"?(Vc=e.screenX-Cs.screenX,kc=e.screenY-Cs.screenY):kc=Vc=0,Cs=e),Vc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),Ud=Ln(Zo),Yv=g({},Zo,{dataTransfer:0}),Zv=Ln(Yv),Kv=g({},Rs,{relatedTarget:0}),Xc=Ln(Kv),Qv=g({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Ln(Qv),Jv=g({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Ln(Jv),t0=g({},Ya,{data:0}),Ld=Ln(t0),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=i0[e])?!!n[e]:!1}function qc(){return a0}var r0=g({},Rs,{key:function(e){if(e.key){var n=e0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s0=Ln(r0),o0=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nd=Ln(o0),l0=g({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),c0=Ln(l0),u0=g({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=Ln(u0),h0=g({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=Ln(h0),p0=g({},Ya,{newState:0,oldState:0}),m0=Ln(p0),g0=[9,13,27,32],Wc=Li&&"CompositionEvent"in window,ws=null;Li&&"documentMode"in document&&(ws=document.documentMode);var _0=Li&&"TextEvent"in window&&!ws,Od=Li&&(!Wc||ws&&8<ws&&11>=ws),Pd=" ",zd=!1;function Bd(e,n){switch(e){case"keyup":return g0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function v0(e,n){switch(e){case"compositionend":return Id(n);case"keypress":return n.which!==32?null:(zd=!0,Pd);case"textInput":return e=n.data,e===Pd&&zd?null:e;default:return null}}function S0(e,n){if(br)return e==="compositionend"||!Wc&&Bd(e,n)?(e=wd(),Xo=Gc=ca=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Od&&n.locale!=="ko"?null:n.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!x0[e.type]:n==="textarea"}function Hd(e,n,a,s){Er?Tr?Tr.push(s):Tr=[s]:Er=s,n=Ol(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ds=null,Us=null;function y0(e){xg(e,0)}function Ko(e){var n=Wa(e);if(Ee(n))return e}function Gd(e,n){if(e==="change")return n}var Vd=!1;if(Li){var Yc;if(Li){var Zc="oninput"in document;if(!Zc){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Zc=typeof kd.oninput=="function"}Yc=Zc}else Yc=!1;Vd=Yc&&(!document.documentMode||9<document.documentMode)}function Xd(){Ds&&(Ds.detachEvent("onpropertychange",qd),Us=Ds=null)}function qd(e){if(e.propertyName==="value"&&Ko(Us)){var n=[];Hd(n,Us,e,Ic(e)),Cd(y0,n)}}function M0(e,n,a){e==="focusin"?(Xd(),Ds=n,Us=a,Ds.attachEvent("onpropertychange",qd)):e==="focusout"&&Xd()}function E0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(Us)}function T0(e,n){if(e==="click")return Ko(n)}function b0(e,n){if(e==="input"||e==="change")return Ko(n)}function A0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Hn=typeof Object.is=="function"?Object.is:A0;function Ls(e,n){if(Hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!ce.call(n,u)||!Hn(e[u],n[u]))return!1}return!0}function Wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yd(e,n){var a=Wd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Wd(a)}}function Zd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Mn(e.document)}return n}function Kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var R0=Li&&"documentMode"in document&&11>=document.documentMode,Ar=null,Qc=null,Ns=null,jc=!1;function Qd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Ar==null||Ar!==Mn(s)||(s=Ar,"selectionStart"in s&&Kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ns&&Ls(Ns,s)||(Ns=s,s=Ol(Qc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ar)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Rr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},Jc={},jd={};Li&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Ka(e){if(Jc[e])return Jc[e];if(!Rr[e])return e;var n=Rr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in jd)return Jc[e]=n[a];return e}var Jd=Ka("animationend"),$d=Ka("animationiteration"),tp=Ka("animationstart"),C0=Ka("transitionrun"),w0=Ka("transitionstart"),D0=Ka("transitioncancel"),ep=Ka("transitionend"),np=new Map,$c="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$c.push("scrollEnd");function si(e,n){np.set(e,n),wi(n,[e])}var ip=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=ip.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ke(n)},ip.set(e,n),n)}return{value:e,source:n,stack:ke(n)}}var Qn=[],Cr=0,tu=0;function Qo(){for(var e=Cr,n=tu=Cr=0;n<e;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&u!==null){var x=s.pending;x===null?u.next=u:(u.next=x.next,x.next=u),s.pending=u}f!==0&&ap(a,u,f)}}function jo(e,n,a,s){Qn[Cr++]=e,Qn[Cr++]=n,Qn[Cr++]=a,Qn[Cr++]=s,tu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function eu(e,n,a,s){return jo(e,n,a,s),Jo(e)}function wr(e,n){return jo(e,null,null,n),Jo(e)}function ap(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ct(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(e){if(50<ao)throw ao=0,lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function U0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(e,n,a,s){return new U0(e,n,a,s)}function nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,n){var a=e.alternate;return a===null?(a=Gn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function $o(e,n,a,s,u,f){var x=0;if(s=e,typeof e=="function")nu(e)&&(x=1);else if(typeof e=="string")x=NS(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Gn(31,a,n,u),e.elementType=D,e.lanes=f,e;case E:return Qa(a.children,u,f,n);case C:x=8,u|=24;break;case M:return e=Gn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case V:return e=Gn(13,a,n,u),e.elementType=V,e.lanes=f,e;case k:return e=Gn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case N:x=10;break t;case F:x=9;break t;case U:x=11;break t;case B:x=14;break t;case J:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Gn(x,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function Qa(e,n,a,s){return e=Gn(7,e,s,n),e.lanes=a,e}function iu(e,n,a){return e=Gn(6,e,null,n),e.lanes=a,e}function au(e,n,a){return n=Gn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ur=[],Lr=0,tl=null,el=0,jn=[],Jn=0,ja=null,Oi=1,Pi="";function Ja(e,n){Ur[Lr++]=el,Ur[Lr++]=tl,tl=e,el=n}function sp(e,n,a){jn[Jn++]=Oi,jn[Jn++]=Pi,jn[Jn++]=ja,ja=e;var s=Oi;e=Pi;var u=32-Ct(s)-1;s&=~(1<<u),a+=1;var f=32-Ct(n)+u;if(30<f){var x=u-u%5;f=(s&(1<<x)-1).toString(32),s>>=x,u-=x,Oi=1<<32-Ct(n)+u|a<<u|s,Pi=f+e}else Oi=1<<f|a<<u|s,Pi=e}function ru(e){e.return!==null&&(Ja(e,1),sp(e,1,0))}function su(e){for(;e===tl;)tl=Ur[--Lr],Ur[Lr]=null,el=Ur[--Lr],Ur[Lr]=null;for(;e===ja;)ja=jn[--Jn],jn[Jn]=null,Pi=jn[--Jn],jn[Jn]=null,Oi=jn[--Jn],jn[Jn]=null}var Cn=null,Ye=null,we=!1,$a=null,_i=!1,ou=Error(r(519));function tr(e){var n=Error(r(418,""));throw zs(Kn(n,e)),ou}function op(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[_n]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<so.length;a++)ge(so[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Be(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),We(n);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),vn(n,s.value,s.defaultValue,s.children),We(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Tg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Pl),n=!0):n=!1,n||tr(e)}function lp(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Cn=Cn.return}}function Os(e){if(e!==Cn)return!1;if(!we)return lp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Tf(e.type,e.memoizedProps)),a=!a),a&&Ye&&tr(e),lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ye=li(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ye=null}}else n===27?(n=Ye,ba(e.type)?(e=Cf,Cf=null,Ye=e):Ye=n):Ye=Cn?li(e.stateNode.nextSibling):null;return!0}function Ps(){Ye=Cn=null,we=!1}function cp(){var e=$a;return e!==null&&(Pn===null?Pn=e:Pn.push.apply(Pn,e),$a=null),e}function zs(e){$a===null?$a=[e]:$a.push(e)}var lu=j(null),er=null,zi=null;function ua(e,n,a){mt(lu,n._currentValue),n._currentValue=a}function Bi(e){e._currentValue=lu.current,dt(lu)}function cu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function uu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),cu(f.return,a,e),s||(x=null);break t}f=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),cu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Bs(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=u.type;Hn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===Mt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ho):e=[ho])}u=u.return}e!==null&&uu(n,e,a,s),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function nr(e){er=e,zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return up(er,e)}function il(e,n){return er===null&&nr(e),up(e,n)}function up(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(e===null)throw Error(r(308));zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else zi=zi.next=n;return a}var L0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},N0=o.unstable_scheduleCallback,O0=o.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new L0,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&N0(O0,function(){e.controller.abort()})}var Fs=null,hu=0,Nr=0,Or=null;function P0(e,n){if(Fs===null){var a=Fs=[];hu=0,Nr=mf(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return hu++,n.then(fp,fp),n}function fp(){if(--hu===0&&Fs!==null){Or!==null&&(Or.status="fulfilled");var e=Fs;Fs=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function z0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var hp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&P0(e,n),hp!==null&&hp(e,n)};var ir=j(null);function du(){var e=ir.current;return e!==null?e:Ge.pooledCache}function al(e,n){n===null?mt(ir,ir.current):mt(ir,n.pool)}function dp(){var e=du();return e===null?null:{parent:on._currentValue,pool:e}}var Hs=Error(r(460)),pp=Error(r(474)),rl=Error(r(542)),pu={then:function(){}};function mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sl(){}function gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sl,sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e;default:if(typeof n.status=="string")n.then(sl,sl);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e}throw Gs=n,Hs}}var Gs=null;function _p(){if(Gs===null)throw Error(r(459));var e=Gs;return Gs=null,e}function vp(e){if(e===Hs||e===rl)throw Error(r(483))}var fa=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function da(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(De&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Jo(e),ap(e,null,a),n}return jo(e,s,n,a),Jo(e)}function Vs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ae(e,a)}}function _u(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vu=!1;function ks(){if(vu){var e=Or;if(e!==null)throw e}}function Xs(e,n,a,s){vu=!1;var u=e.updateQueue;fa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var z=b,it=z.next;z.next=null,x===null?f=it:x.next=it,x=z;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,b=pt.lastBaseUpdate,b!==x&&(b===null?pt.firstBaseUpdate=it:b.next=it,pt.lastBaseUpdate=z))}if(f!==null){var xt=u.baseState;x=0,pt=it=z=null,b=f;do{var rt=b.lane&-536870913,st=rt!==b.lane;if(st?(Me&rt)===rt:(s&rt)===rt){rt!==0&&rt===Nr&&(vu=!0),pt!==null&&(pt=pt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,jt=b;rt=n;var Pe=a;switch(jt.tag){case 1:if(ee=jt.payload,typeof ee=="function"){xt=ee.call(Pe,xt,rt);break t}xt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=jt.payload,rt=typeof ee=="function"?ee.call(Pe,xt,rt):ee,rt==null)break t;xt=g({},xt,rt);break t;case 2:fa=!0}}rt=b.callback,rt!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[rt]:st.push(rt))}else st={lane:rt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},pt===null?(it=pt=st,z=xt):pt=pt.next=st,x|=rt;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;st=b,b=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);pt===null&&(z=xt),u.baseState=z,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),ya|=x,e.lanes=x,e.memoizedState=xt}}function Sp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sp(a[e],n)}var Pr=j(null),ol=j(0);function yp(e,n){e=Xi,mt(ol,e),mt(Pr,n),Xi=e|n.baseLanes}function Su(){mt(ol,Xi),mt(Pr,Pr.current)}function xu(){Xi=ol.current,dt(Pr),dt(ol)}var pa=0,he=null,Ne=null,en=null,ll=!1,zr=!1,ar=!1,cl=0,qs=0,Br=null,B0=0;function Qe(){throw Error(r(321))}function yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Hn(e[a],n[a]))return!1;return!0}function Mu(e,n,a,s,u,f){return pa=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?am:rm,ar=!1,f=a(s,u),ar=!1,zr&&(f=Ep(n,a,s,u)),Mp(e),f}function Mp(e){O.H=ml;var n=Ne!==null&&Ne.next!==null;if(pa=0,en=Ne=he=null,ll=!1,qs=0,Br=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&nl(e)&&(dn=!0))}function Ep(e,n,a,s){he=e;var u=0;do{if(zr&&(Br=null),qs=0,zr=!1,25<=u)throw Error(r(301));if(u+=1,en=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=X0,f=n(a,s)}while(zr);return f}function I0(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?Ws(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(he.flags|=1024),n}function Eu(){var e=cl!==0;return cl=0,e}function Tu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function bu(e){if(ll){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ll=!1}pa=0,en=Ne=he=null,zr=!1,qs=cl=0,Br=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?he.memoizedState=en=e:en=en.next=e,en}function nn(){if(Ne===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=en===null?he.memoizedState:en.next;if(n!==null)en=n,Ne=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},en===null?he.memoizedState=en=e:en=en.next=e}return en}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ws(e){var n=qs;return qs+=1,Br===null&&(Br=[]),e=gp(Br,e,n),n=he,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?am:rm),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ws(e);if(e.$$typeof===N)return Tn(e)}throw Error(r(438,String(e)))}function Ru(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Au(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=nn();return Cu(n,Ne,e)}function Cu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=x=null,z=null,it=n,pt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Me&xt)===xt:(pa&xt)===xt){var rt=it.revertLane;if(rt===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===Nr&&(pt=!0);else if((pa&rt)===rt){it=it.next,rt===Nr&&(pt=!0);continue}else xt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(b=z=xt,x=f):z=z.next=xt,he.lanes|=rt,ya|=rt;xt=it.action,ar&&a(f,xt),f=it.hasEagerState?it.eagerState:a(f,xt)}else rt={lane:xt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(b=z=rt,x=f):z=z.next=rt,he.lanes|=xt,ya|=xt;it=it.next}while(it!==null&&it!==n);if(z===null?x=f:z.next=b,!Hn(f,e.memoizedState)&&(dn=!0,pt&&(a=Or,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function wu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Hn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Tp(e,n,a){var s=he,u=nn(),f=we;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Hn((Ne||u).memoizedState,a);x&&(u.memoizedState=a,dn=!0),u=u.queue;var b=Rp.bind(null,s,u,e);if(Ys(2048,8,b,[e]),u.getSnapshot!==n||x||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Ir(9,hl(),Ap.bind(null,s,u,a,n),null),Ge===null)throw Error(r(349));f||(pa&124)!==0||bp(s,n,a)}return a}function bp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Au(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ap(e,n,a,s){n.value=a,n.getSnapshot=s,Cp(n)&&wp(e)}function Rp(e,n,a){return a(function(){Cp(n)&&wp(e)})}function Cp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Hn(e,a)}catch{return!0}}function wp(e){var n=wr(e,2);n!==null&&Wn(n,e,2)}function Du(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),ar){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Dp(e,n,a,s){return e.baseState=a,Cu(e,Ne,typeof s=="function"?s:Ii)}function F0(e,n,a,s,u){if(pl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Up(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Up(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var b=a(u,s),z=O.S;z!==null&&z(x,b),Lp(e,n,b)}catch(it){Uu(e,n,it)}finally{O.T=f}}else try{f=a(u,s),Lp(e,n,f)}catch(it){Uu(e,n,it)}}function Lp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Np(e,n,s)},function(s){return Uu(e,n,s)}):Np(e,n,a)}function Np(e,n,a){n.status="fulfilled",n.value=a,Op(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Up(e,a)))}function Uu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Op(n),n=n.next;while(n!==s)}e.action=null}function Op(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pp(e,n){return n}function zp(e,n){if(we){var a=Ge.formState;if(a!==null){t:{var s=he;if(we){if(Ye){e:{for(var u=Ye,f=_i;u.nodeType!==8;){if(!f){u=null;break e}if(u=li(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=li(u.nextSibling),s=u.data==="F!";break t}}tr(s)}s=!1}s&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pp,lastRenderedState:n},a.queue=s,a=em.bind(null,he,s),s.dispatch=a,s=Du(!1),f=zu.bind(null,he,!1,s.queue),s=Nn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=F0.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Bp(e){var n=nn();return Ip(n,Ne,e)}function Ip(e,n,a){if(n=Cu(e,n,Pp)[0],e=fl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Ws(n)}catch(x){throw x===Hs?rl:x}else s=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Ir(9,hl(),H0.bind(null,u,a),null)),[s,f,e]}function H0(e,n){e.action=n}function Fp(e){var n=nn(),a=Ne;if(a!==null)return Ip(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Ir(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Au(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function hl(){return{destroy:void 0,resource:void 0}}function Hp(){return nn().memoizedState}function dl(e,n,a,s){var u=Nn();s=s===void 0?null:s,he.flags|=e,u.memoizedState=Ir(1|n,hl(),a,s)}function Ys(e,n,a,s){var u=nn();s=s===void 0?null:s;var f=u.memoizedState.inst;Ne!==null&&s!==null&&yu(s,Ne.memoizedState.deps)?u.memoizedState=Ir(n,f,a,s):(he.flags|=e,u.memoizedState=Ir(1|n,f,a,s))}function Gp(e,n){dl(8390656,8,e,n)}function Vp(e,n){Ys(2048,8,e,n)}function kp(e,n){return Ys(4,2,e,n)}function Xp(e,n){return Ys(4,4,e,n)}function qp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wp(e,n,a){a=a!=null?a.concat([e]):null,Ys(4,4,qp.bind(null,n,e),a)}function Lu(){}function Yp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&yu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Zp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&yu(n,s[1]))return s[0];if(s=e(),ar){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[s,n],s}function Nu(e,n,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=jm(),he.lanes|=e,ya|=e,a)}function Kp(e,n,a,s){return Hn(a,n)?a:Pr.current!==null?(e=Nu(e,a,s),Hn(e,n)||(dn=!0),e):(pa&42)===0?(dn=!0,e.memoizedState=a):(e=jm(),he.lanes|=e,ya|=e,n)}function Qp(e,n,a,s,u){var f=tt.p;tt.p=f!==0&&8>f?f:8;var x=O.T,b={};O.T=b,zu(e,!1,n,a);try{var z=u(),it=O.S;if(it!==null&&it(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pt=z0(z,s);Zs(e,n,pt,qn(e))}else Zs(e,n,s,qn(e))}catch(xt){Zs(e,n,{then:function(){},status:"rejected",reason:xt},qn())}finally{tt.p=f,O.T=x}}function G0(){}function Ou(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=jp(e).queue;Qp(e,u,n,H,a===null?G0:function(){return Jp(e),a(s)})}function jp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jp(e){var n=jp(e).next.queue;Zs(e,n,{},qn())}function Pu(){return Tn(ho)}function $p(){return nn().memoizedState}function tm(){return nn().memoizedState}function V0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=ha(a);var s=da(n,e,a);s!==null&&(Wn(s,n,a),Vs(s,n,a)),n={cache:fu()},e.payload=n;return}n=n.return}}function k0(e,n,a){var s=qn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(e)?nm(n,a):(a=eu(e,n,a,s),a!==null&&(Wn(a,e,s),im(a,n,s)))}function em(e,n,a){var s=qn();Zs(e,n,a,s)}function Zs(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(e))nm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(u.hasEagerState=!0,u.eagerState=b,Hn(b,x))return jo(e,n,u,0),Ge===null&&Qo(),!1}catch{}finally{}if(a=eu(e,n,u,s),a!==null)return Wn(a,e,s),im(a,n,s),!0}return!1}function zu(e,n,a,s){if(s={lane:2,revertLane:mf(),action:s,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(n)throw Error(r(479))}else n=eu(e,a,s,2),n!==null&&Wn(n,e,2)}function pl(e){var n=e.alternate;return e===he||n!==null&&n===he}function nm(e,n){zr=ll=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function im(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ae(e,a)}}var ml={readContext:Tn,use:ul,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},am={readContext:Tn,use:ul,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Gp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,dl(4194308,4,qp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return dl(4194308,4,e,n)},useInsertionEffect:function(e,n){dl(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var s=e();if(ar){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Nn();if(a!==void 0){var u=a(n);if(ar){Rt(!0);try{a(n)}finally{Rt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=k0.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Du(e);var n=e.queue,a=em.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(e,n){var a=Nn();return Nu(a,e,n)},useTransition:function(){var e=Du(!1);return e=Qp.bind(null,he,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=he,u=Nn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(Me&124)!==0||bp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gp(Rp.bind(null,s,f,e),[e]),s.flags|=2048,Ir(9,hl(),Ap.bind(null,s,f,a,n),null),a},useId:function(){var e=Nn(),n=Ge.identifierPrefix;if(we){var a=Pi,s=Oi;a=(s&~(1<<32-Ct(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=cl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=B0++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Pu,useFormState:zp,useActionState:zp,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zu.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ru,useCacheRefresh:function(){return Nn().memoizedState=V0.bind(null,he)}},rm={readContext:Tn,use:ul,useCallback:Yp,useContext:Tn,useEffect:Vp,useImperativeHandle:Wp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:Zp,useReducer:fl,useRef:Hp,useState:function(){return fl(Ii)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=nn();return Kp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=fl(Ii)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Pu,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=nn();return Dp(a,Ne,e,n)},useMemoCache:Ru,useCacheRefresh:tm},X0={readContext:Tn,use:ul,useCallback:Yp,useContext:Tn,useEffect:Vp,useImperativeHandle:Wp,useInsertionEffect:kp,useLayoutEffect:Xp,useMemo:Zp,useReducer:wu,useRef:Hp,useState:function(){return wu(Ii)},useDebugValue:Lu,useDeferredValue:function(e,n){var a=nn();return Ne===null?Nu(a,e,n):Kp(a,Ne.memoizedState,e,n)},useTransition:function(){var e=wu(Ii)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:Ws(e),n]},useSyncExternalStore:Tp,useId:$p,useHostTransitionStatus:Pu,useFormState:Fp,useActionState:Fp,useOptimistic:function(e,n){var a=nn();return Ne!==null?Dp(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ru,useCacheRefresh:tm},Fr=null,Ks=0;function gl(e){var n=Ks;return Ks+=1,Fr===null&&(Fr=[]),gp(Fr,e,n)}function Qs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sm(e){var n=e._init;return n(e._payload)}function om(e){function n(Z,G){if(e){var nt=Z.deletions;nt===null?(Z.deletions=[G],Z.flags|=16):nt.push(G)}}function a(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function s(Z){for(var G=new Map;Z!==null;)Z.key!==null?G.set(Z.key,Z):G.set(Z.index,Z),Z=Z.sibling;return G}function u(Z,G){return Z=Ni(Z,G),Z.index=0,Z.sibling=null,Z}function f(Z,G,nt){return Z.index=nt,e?(nt=Z.alternate,nt!==null?(nt=nt.index,nt<G?(Z.flags|=67108866,G):nt):(Z.flags|=67108866,G)):(Z.flags|=1048576,G)}function x(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function b(Z,G,nt,vt){return G===null||G.tag!==6?(G=iu(nt,Z.mode,vt),G.return=Z,G):(G=u(G,nt),G.return=Z,G)}function z(Z,G,nt,vt){var Gt=nt.type;return Gt===E?pt(Z,G,nt.props.children,vt,nt.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===J&&sm(Gt)===G.type)?(G=u(G,nt.props),Qs(G,nt),G.return=Z,G):(G=$o(nt.type,nt.key,nt.props,null,Z.mode,vt),Qs(G,nt),G.return=Z,G)}function it(Z,G,nt,vt){return G===null||G.tag!==4||G.stateNode.containerInfo!==nt.containerInfo||G.stateNode.implementation!==nt.implementation?(G=au(nt,Z.mode,vt),G.return=Z,G):(G=u(G,nt.children||[]),G.return=Z,G)}function pt(Z,G,nt,vt,Gt){return G===null||G.tag!==7?(G=Qa(nt,Z.mode,vt,Gt),G.return=Z,G):(G=u(G,nt),G.return=Z,G)}function xt(Z,G,nt){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=iu(""+G,Z.mode,nt),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return nt=$o(G.type,G.key,G.props,null,Z.mode,nt),Qs(nt,G),nt.return=Z,nt;case y:return G=au(G,Z.mode,nt),G.return=Z,G;case J:var vt=G._init;return G=vt(G._payload),xt(Z,G,nt)}if(Y(G)||W(G))return G=Qa(G,Z.mode,nt,null),G.return=Z,G;if(typeof G.then=="function")return xt(Z,gl(G),nt);if(G.$$typeof===N)return xt(Z,il(Z,G),nt);_l(Z,G)}return null}function rt(Z,G,nt,vt){var Gt=G!==null?G.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Gt!==null?null:b(Z,G,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return nt.key===Gt?z(Z,G,nt,vt):null;case y:return nt.key===Gt?it(Z,G,nt,vt):null;case J:return Gt=nt._init,nt=Gt(nt._payload),rt(Z,G,nt,vt)}if(Y(nt)||W(nt))return Gt!==null?null:pt(Z,G,nt,vt,null);if(typeof nt.then=="function")return rt(Z,G,gl(nt),vt);if(nt.$$typeof===N)return rt(Z,G,il(Z,nt),vt);_l(Z,nt)}return null}function st(Z,G,nt,vt,Gt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Z=Z.get(nt)||null,b(G,Z,""+vt,Gt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return Z=Z.get(vt.key===null?nt:vt.key)||null,z(G,Z,vt,Gt);case y:return Z=Z.get(vt.key===null?nt:vt.key)||null,it(G,Z,vt,Gt);case J:var de=vt._init;return vt=de(vt._payload),st(Z,G,nt,vt,Gt)}if(Y(vt)||W(vt))return Z=Z.get(nt)||null,pt(G,Z,vt,Gt,null);if(typeof vt.then=="function")return st(Z,G,nt,gl(vt),Gt);if(vt.$$typeof===N)return st(Z,G,nt,il(G,vt),Gt);_l(G,vt)}return null}function ee(Z,G,nt,vt){for(var Gt=null,de=null,Xt=G,$t=G=0,mn=null;Xt!==null&&$t<nt.length;$t++){Xt.index>$t?(mn=Xt,Xt=null):mn=Xt.sibling;var Re=rt(Z,Xt,nt[$t],vt);if(Re===null){Xt===null&&(Xt=mn);break}e&&Xt&&Re.alternate===null&&n(Z,Xt),G=f(Re,G,$t),de===null?Gt=Re:de.sibling=Re,de=Re,Xt=mn}if($t===nt.length)return a(Z,Xt),we&&Ja(Z,$t),Gt;if(Xt===null){for(;$t<nt.length;$t++)Xt=xt(Z,nt[$t],vt),Xt!==null&&(G=f(Xt,G,$t),de===null?Gt=Xt:de.sibling=Xt,de=Xt);return we&&Ja(Z,$t),Gt}for(Xt=s(Xt);$t<nt.length;$t++)mn=st(Xt,Z,$t,nt[$t],vt),mn!==null&&(e&&mn.alternate!==null&&Xt.delete(mn.key===null?$t:mn.key),G=f(mn,G,$t),de===null?Gt=mn:de.sibling=mn,de=mn);return e&&Xt.forEach(function(Da){return n(Z,Da)}),we&&Ja(Z,$t),Gt}function jt(Z,G,nt,vt){if(nt==null)throw Error(r(151));for(var Gt=null,de=null,Xt=G,$t=G=0,mn=null,Re=nt.next();Xt!==null&&!Re.done;$t++,Re=nt.next()){Xt.index>$t?(mn=Xt,Xt=null):mn=Xt.sibling;var Da=rt(Z,Xt,Re.value,vt);if(Da===null){Xt===null&&(Xt=mn);break}e&&Xt&&Da.alternate===null&&n(Z,Xt),G=f(Da,G,$t),de===null?Gt=Da:de.sibling=Da,de=Da,Xt=mn}if(Re.done)return a(Z,Xt),we&&Ja(Z,$t),Gt;if(Xt===null){for(;!Re.done;$t++,Re=nt.next())Re=xt(Z,Re.value,vt),Re!==null&&(G=f(Re,G,$t),de===null?Gt=Re:de.sibling=Re,de=Re);return we&&Ja(Z,$t),Gt}for(Xt=s(Xt);!Re.done;$t++,Re=nt.next())Re=st(Xt,Z,$t,Re.value,vt),Re!==null&&(e&&Re.alternate!==null&&Xt.delete(Re.key===null?$t:Re.key),G=f(Re,G,$t),de===null?Gt=Re:de.sibling=Re,de=Re);return e&&Xt.forEach(function(qS){return n(Z,qS)}),we&&Ja(Z,$t),Gt}function Pe(Z,G,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===E&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:t:{for(var Gt=nt.key;G!==null;){if(G.key===Gt){if(Gt=nt.type,Gt===E){if(G.tag===7){a(Z,G.sibling),vt=u(G,nt.props.children),vt.return=Z,Z=vt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===J&&sm(Gt)===G.type){a(Z,G.sibling),vt=u(G,nt.props),Qs(vt,nt),vt.return=Z,Z=vt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}nt.type===E?(vt=Qa(nt.props.children,Z.mode,vt,nt.key),vt.return=Z,Z=vt):(vt=$o(nt.type,nt.key,nt.props,null,Z.mode,vt),Qs(vt,nt),vt.return=Z,Z=vt)}return x(Z);case y:t:{for(Gt=nt.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===nt.containerInfo&&G.stateNode.implementation===nt.implementation){a(Z,G.sibling),vt=u(G,nt.children||[]),vt.return=Z,Z=vt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}vt=au(nt,Z.mode,vt),vt.return=Z,Z=vt}return x(Z);case J:return Gt=nt._init,nt=Gt(nt._payload),Pe(Z,G,nt,vt)}if(Y(nt))return ee(Z,G,nt,vt);if(W(nt)){if(Gt=W(nt),typeof Gt!="function")throw Error(r(150));return nt=Gt.call(nt),jt(Z,G,nt,vt)}if(typeof nt.then=="function")return Pe(Z,G,gl(nt),vt);if(nt.$$typeof===N)return Pe(Z,G,il(Z,nt),vt);_l(Z,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,G!==null&&G.tag===6?(a(Z,G.sibling),vt=u(G,nt),vt.return=Z,Z=vt):(a(Z,G),vt=iu(nt,Z.mode,vt),vt.return=Z,Z=vt),x(Z)):a(Z,G)}return function(Z,G,nt,vt){try{Ks=0;var Gt=Pe(Z,G,nt,vt);return Fr=null,Gt}catch(Xt){if(Xt===Hs||Xt===rl)throw Xt;var de=Gn(29,Xt,null,Z.mode);return de.lanes=vt,de.return=Z,de}finally{}}}var Hr=om(!0),lm=om(!1),$n=j(null),vi=null;function ma(e){var n=e.alternate;mt(ln,ln.current&1),mt($n,e),vi===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(vi=e)}function cm(e){if(e.tag===22){if(mt(ln,ln.current),mt($n,e),vi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(vi=e)}}else ga()}function ga(){mt(ln,ln.current),mt($n,$n.current)}function Fi(e){dt($n),vi===e&&(vi=null),dt(ln)}var ln=j(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Rf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Bu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Iu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=qn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=da(e,u,s),n!==null&&(Wn(n,e,s),Vs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=qn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(e,u,s),n!==null&&(Wn(n,e,s),Vs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(e,s,a),n!==null&&(Wn(n,e,a),Vs(n,e,a))}};function um(e,n,a,s,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Ls(a,s)||!Ls(u,f):!0}function fm(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Iu.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function hm(e){Sl(e)}function dm(e){console.error(e)}function pm(e){Sl(e)}function xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function mm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Fu(e,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(e,n)},a}function gm(e){return e=ha(e),e.tag=3,e}function _m(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){mm(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){mm(n,a,s),typeof u!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function q0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Bs(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 13:return vi===null?uf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),hf(e,s,u)),!1;case 22:return a.flags|=65536,s===pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),hf(e,s,u)),!1}throw Error(r(435,a.tag))}return hf(e,s,u),uf(),!1}if(we)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==ou&&(e=Error(r(422),{cause:s}),zs(Kn(e,a)))):(s!==ou&&(n=Error(r(423),{cause:s}),zs(Kn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=Kn(s,a),u=Fu(e.stateNode,s,u),_u(e,u),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),io===null?io=[f]:io.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Fu(a.stateNode,s,e),_u(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=gm(u),_m(u,e,a,s),_u(a,u),!1}a=a.return}while(a!==null);return!1}var vm=Error(r(461)),dn=!1;function Sn(e,n,a,s){n.child=e===null?lm(n,null,a,s):Hr(n,e.child,a,s)}function Sm(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var b in s)b!=="ref"&&(x[b]=s[b])}else x=s;return nr(n),s=Mu(e,n,a,x,f,u),b=Eu(),e!==null&&!dn?(Tu(e,n,u),Hi(e,n,u)):(we&&b&&ru(n),n.flags|=1,Sn(e,n,s,u),n.child)}function xm(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!nu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,ym(e,n,f,s,u)):(e=$o(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yu(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ls,a(x,s)&&e.ref===n.ref)return Hi(e,n,u)}return n.flags|=1,e=Ni(f,s),e.ref=n.ref,e.return=n,n.child=e}function ym(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ls(f,s)&&e.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Yu(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Hi(e,n,u)}return Hu(e,n,a,s,u)}function Mm(e,n,a){var s=n.pendingProps,u=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Em(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?yp(n,f):Su(),cm(n);else return n.lanes=n.childLanes=536870912,Em(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(al(n,f.cachePool),yp(n,f),ga(),n.memoizedState=null):(e!==null&&al(n,null),Su(),ga());return Sn(e,n,u,a),n.child}function Em(e,n,a,s){var u=du();return u=u===null?null:{parent:on._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&al(n,null),Su(),cm(n),e!==null&&Bs(e,n,s,!0),null}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Hu(e,n,a,s,u){return nr(n),a=Mu(e,n,a,s,void 0,u),s=Eu(),e!==null&&!dn?(Tu(e,n,u),Hi(e,n,u)):(we&&s&&ru(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Tm(e,n,a,s,u,f){return nr(n),n.updateQueue=null,a=Ep(n,s,a,u),Mp(e),s=Eu(),e!==null&&!dn?(Tu(e,n,f),Hi(e,n,f)):(we&&s&&ru(n),n.flags|=1,Sn(e,n,a,f),n.child)}function bm(e,n,a,s,u){if(nr(n),n.stateNode===null){var f=Dr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Iu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},mu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):Dr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Bu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Iu.enqueueReplaceState(f,f.state,null),Xs(n,s,f,u),ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,z=rr(a,b);f.props=z;var it=f.context,pt=a.contextType;x=Dr,typeof pt=="object"&&pt!==null&&(x=Tn(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||it!==x)&&fm(n,f,s,x),fa=!1;var rt=n.memoizedState;f.state=rt,Xs(n,s,f,u),ks(),it=n.memoizedState,b||rt!==it||fa?(typeof xt=="function"&&(Bu(n,a,xt,s),it=n.memoizedState),(z=fa||um(n,a,z,s,rt,it,x))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=x,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,gu(e,n),x=n.memoizedProps,pt=rr(a,x),f.props=pt,xt=n.pendingProps,rt=f.context,it=a.contextType,z=Dr,typeof it=="object"&&it!==null&&(z=Tn(it)),b=a.getDerivedStateFromProps,(it=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==xt||rt!==z)&&fm(n,f,s,z),fa=!1,rt=n.memoizedState,f.state=rt,Xs(n,s,f,u),ks();var st=n.memoizedState;x!==xt||rt!==st||fa||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof b=="function"&&(Bu(n,a,b,s),st=n.memoizedState),(pt=fa||um(n,a,pt,s,rt,st,z)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(it||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=z,s=pt):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Hr(n,e.child,null,u),n.child=Hr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Hi(e,n,u),e}function Am(e,n,a,s){return Ps(),n.flags|=256,Sn(e,n,a,s),n.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vu(e){return{baseLanes:e,cachePool:dp()}}function ku(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Rm(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?ma(n):ga(),we){var b=Ye,z;if(z=b){t:{for(z=b,b=_i;z.nodeType!==8;){if(!b){b=null;break t}if(z=li(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:ja!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},z=Gn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,Cn=n,Ye=null,z=!0):z=!1}z||tr(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Rf(b)?n.lanes=32:n.lanes=536870912,null;Fi(n)}return b=s.children,s=s.fallback,u?(ga(),u=n.mode,b=Ml({mode:"hidden",children:b},u),s=Qa(s,u,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,u=n.child,u.memoizedState=Vu(a),u.childLanes=ku(e,x,a),n.memoizedState=Gu,s):(ma(n),Xu(n,b))}if(z=e.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=qu(e,n,a)):n.memoizedState!==null?(ga(),n.child=e.child,n.flags|=128,n=null):(ga(),u=s.fallback,b=n.mode,s=Ml({mode:"visible",children:s.children},b),u=Qa(u,b,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Hr(n,e.child,null,a),s=n.child,s.memoizedState=Vu(a),s.childLanes=ku(e,x,a),n.memoizedState=Gu,n=u);else if(ma(n),Rf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var it=x.dgst;x=it,s=Error(r(419)),s.stack="",s.digest=x,zs({value:s,source:null,stack:null}),n=qu(e,n,a)}else if(dn||Bs(e,n,a,!1),x=(a&e.childLanes)!==0,dn||x){if(x=Ge,x!==null&&(s=a&-a,s=(s&42)!==0?1:Fe(s),s=(s&(x.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,wr(e,s),Wn(x,e,s),vm;b.data==="$?"||uf(),n=qu(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Ye=li(b.nextSibling),Cn=n,we=!0,$a=null,_i=!1,e!==null&&(jn[Jn++]=Oi,jn[Jn++]=Pi,jn[Jn++]=ja,Oi=e.id,Pi=e.overflow,ja=n),n=Xu(n,s.children),n.flags|=4096);return n}return u?(ga(),u=s.fallback,b=n.mode,z=e.child,it=z.sibling,s=Ni(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,it!==null?u=Ni(it,u):(u=Qa(u,b,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,b=e.child.memoizedState,b===null?b=Vu(a):(z=b.cachePool,z!==null?(it=on._currentValue,z=z.parent!==it?{parent:it,pool:it}:z):z=dp(),b={baseLanes:b.baseLanes|a,cachePool:z}),u.memoizedState=b,u.childLanes=ku(e,x,a),n.memoizedState=Gu,s):(ma(n),a=e.child,e=a.sibling,a=Ni(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Xu(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=Gn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function qu(e,n,a){return Hr(n,e.child,null,a),e=Xu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Cm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),cu(e.return,n,a)}function Wu(e,n,a,s,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=u)}function wm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;if(Sn(e,n,s.children,a),s=ln.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cm(e,a,n);else if(e.tag===19)Cm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(mt(ln,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Wu(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Wu(n,!0,a,null,f);break;case"together":Wu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Hi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Bs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ni(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ni(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function W0(e,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),ua(n,on,e.memoizedState.cache),Ps();break;case 27:case 5:kt(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:ua(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Rm(e,n,a):(ma(n),e=Hi(e,n,a),e!==null?e.sibling:null);ma(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Bs(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return wm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(ln,ln.current),s)break;return null;case 22:case 23:return n.lanes=0,Mm(e,n,a);case 24:ua(n,on,e.memoizedState.cache)}return Hi(e,n,a)}function Dm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Yu(e,a)&&(n.flags&128)===0)return dn=!1,W0(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,we&&(n.flags&1048576)!==0&&sp(n,el,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")nu(s)?(e=rr(s,e),n.tag=1,n=bm(null,n,s,e,a)):(n.tag=0,n=Hu(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===U){n.tag=11,n=Sm(null,n,s,e,a);break t}else if(u===B){n.tag=14,n=xm(null,n,s,e,a);break t}}throw n=ct(s)||s,Error(r(306,n,""))}}return n;case 0:return Hu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=rr(s,n.pendingProps),bm(e,n,s,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,gu(e,n),Xs(n,s,null,a);var x=n.memoizedState;if(s=x.cache,ua(n,on,s),s!==f.cache&&uu(n,[on],a,!0),ks(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Am(e,n,s,a);break t}else if(s!==u){u=Kn(Error(r(424)),n),zs(u),n=Am(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=li(e.firstChild),Cn=n,we=!0,$a=null,_i=!0,a=lm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ps(),s===u){n=Hi(e,n,a);break t}Sn(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,s=zl(gt.current).createElement(a),s[rn]=n,s[_n]=e,yn(s,a,e),tn(s),n.stateNode=s):n.memoizedState=Og(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&we&&(s=n.stateNode=Ug(n.type,n.pendingProps,gt.current),Cn=n,_i=!0,u=Ye,ba(n.type)?(Cf=u,Ye=li(s.firstChild)):Ye=u),Sn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=s=Ye)&&(s=xS(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,Cn=n,Ye=li(s.firstChild),_i=!1,u=!0):u=!1),u||tr(n)),kt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,Tf(u,f)?s=null:x!==null&&Tf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Mu(e,n,I0,null,null,a),ho._currentValue=u),yl(e,n),Sn(e,n,s,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=yS(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Cn=n,Ye=null,e=!0):e=!1),e||tr(n)),null;case 13:return Rm(e,n,a);case 4:return bt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Hr(n,null,s,a):Sn(e,n,s,a),n.child;case 11:return Sm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ua(n,n.type,s.value),Sn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,nr(n),u=Tn(u),s=s(u),n.flags|=1,Sn(e,n,s,a),n.child;case 14:return xm(e,n,n.type,n.pendingProps,a);case 15:return ym(e,n,n.type,n.pendingProps,a);case 19:return wm(e,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},e===null?(a=Ml(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ni(e.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Mm(e,n,a);case 24:return nr(n),s=Tn(on),e===null?(u=du(),u===null&&(u=Ge,f=fu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},mu(n),ua(n,on,u)):((e.lanes&a)!==0&&(gu(e,n),Xs(n,null,null,a),ks()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ua(n,on,s)):(s=f.cache,ua(n,on,s),s!==u.cache&&uu(n,[on],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Gi(e){e.flags|=4}function Um(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fg(n)){if(n=$n.current,n!==null&&((Me&4194048)===Me?vi!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==vi))throw Gs=pu,pp;e.flags|=8192}}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Xr|=n)}function js(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Y0(e,n,a){var s=n.pendingProps;switch(su(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Bi(on),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Os(n)?Gi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cp())),Xe(n),null;case 26:return a=n.memoizedState,e===null?(Gi(n),a!==null?(Xe(n),Um(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Gi(n),Xe(n),Um(n,a)):(Xe(n),n.flags&=-16777217):(e.memoizedProps!==s&&Gi(n),Xe(n),n.flags&=-16777217),null;case 27:le(n),a=gt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}e=K.current,Os(n)?op(n):(e=Ug(u,s,a),n.stateNode=e,Gi(n))}return Xe(n),null;case 5:if(le(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(e=K.current,Os(n))op(n);else{switch(u=zl(gt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[rn]=n,e[_n]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(yn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Gi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Gi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=gt.current,Os(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Tg(e.nodeValue,a)),e||tr(n)}else e=zl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Xe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Os(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else u=cp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Fi(n),n):(Fi(n),null)}if(Fi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Xe(n),null;case 4:return Qt(),e===null&&Sf(n.stateNode.containerInfo),Xe(n),null;case 10:return Bi(n.type),Xe(n),null;case 19:if(dt(ln),u=n.memoizedState,u===null)return Xe(n),null;if(s=(n.flags&128)!==0,f=u.rendering,f===null)if(s)js(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,js(u,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rp(a,e),a=a.sibling;return mt(ln,ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&Zt()>Al&&(n.flags|=128,s=!0,js(u,!1),n.lanes=4194304)}else{if(!s)if(e=vl(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),js(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!we)return Xe(n),null}else 2*Zt()-u.renderingStartTime>Al&&a!==536870912&&(n.flags|=128,s=!0,js(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Zt(),n.sibling=null,e=ln.current,mt(ln,s?e&1|2:e&1),n):(Xe(n),null);case 22:case 23:return Fi(n),xu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&dt(ir),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Bi(on),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Z0(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Bi(on),Qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 13:if(Fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return dt(ln),null;case 4:return Qt(),null;case 10:return Bi(n.type),null;case 22:case 23:return Fi(n),xu(),e!==null&&dt(ir),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Bi(on),null;case 25:return null;default:return null}}function Lm(e,n){switch(su(n),n.tag){case 3:Bi(on),Qt();break;case 26:case 27:case 5:le(n);break;case 4:Qt();break;case 13:Fi(n);break;case 19:dt(ln);break;case 10:Bi(n.type);break;case 22:case 23:Fi(n),xu(),e!==null&&dt(ir);break;case 24:Bi(on)}}function Js(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==u)}}catch(b){Ie(n,n.return,b)}}function _a(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var x=s.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var z=a,it=b;try{it()}catch(pt){Ie(u,z,pt)}}}s=s.next}while(s!==f)}}catch(pt){Ie(n,n.return,pt)}}function Nm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xp(n,a)}catch(s){Ie(e,e.return,s)}}}function Om(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(e,n,s)}}function $s(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ie(e,n,u)}}function Si(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ie(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,n,u)}else a.current=null}function Pm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function Zu(e,n,a){try{var s=e.stateNode;mS(s,e.type,a,n),s[_n]=n}catch(u){Ie(e,e.return,u)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ba(e.type)||e.tag===4}function Ku(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pl));else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Qu(e,n,a),e=e.sibling;e!==null;)Qu(e,n,a),e=e.sibling}function Tl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function Bm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,s,a),n[rn]=e,n[_n]=a}catch(f){Ie(e,e.return,f)}}var Vi=!1,je=!1,ju=!1,Im=typeof WeakSet=="function"?WeakSet:Set,pn=null;function K0(e,n){if(e=e.containerInfo,Mf=Vl,e=Kd(e),Kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,z=-1,it=0,pt=0,xt=e,rt=null;e:for(;;){for(var st;xt!==a||u!==0&&xt.nodeType!==3||(b=x+u),xt!==f||s!==0&&xt.nodeType!==3||(z=x+s),xt.nodeType===3&&(x+=xt.nodeValue.length),(st=xt.firstChild)!==null;)rt=xt,xt=st;for(;;){if(xt===e)break e;if(rt===a&&++it===u&&(b=x),rt===f&&++pt===s&&(z=x),(st=xt.nextSibling)!==null)break;xt=rt,rt=xt.parentNode}xt=st}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ef={focusedElem:e,selectionRange:a},Vl=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var ee=rr(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(ee,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(jt){Ie(a,a.return,jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Af(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Af(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function Fm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:va(e,a),s&4&&Js(5,a);break;case 1:if(va(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ie(a,a.return,x)}else{var u=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(a,a.return,x)}}s&64&&Nm(a),s&512&&$s(a,a.return);break;case 3:if(va(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xp(e,n)}catch(x){Ie(a,a.return,x)}}break;case 27:n===null&&s&4&&Bm(a);case 26:case 5:va(e,a),n===null&&s&4&&Pm(a),s&512&&$s(a,a.return);break;case 12:va(e,a);break;case 13:va(e,a),s&4&&Vm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=aS.bind(null,a),MS(e,a))));break;case 22:if(s=a.memoizedState!==null||Vi,!s){n=n!==null&&n.memoizedState!==null||je,u=Vi;var f=je;Vi=s,(je=n)&&!f?Sa(e,a,(a.subtreeFlags&8772)!==0):va(e,a),Vi=u,je=f}break;case 30:break;default:va(e,a)}}function Hm(e){var n=e.alternate;n!==null&&(e.alternate=null,Hm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&sa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,On=!1;function ki(e,n,a){for(a=a.child;a!==null;)Gm(e,n,a),a=a.sibling}function Gm(e,n,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(_t,a)}catch{}switch(a.tag){case 26:je||Si(a,n),ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||Si(a,n);var s=Ve,u=On;ba(a.type)&&(Ve=a.stateNode,On=!1),ki(e,n,a),lo(a.stateNode),Ve=s,On=u;break;case 5:je||Si(a,n);case 6:if(s=Ve,u=On,Ve=null,ki(e,n,a),Ve=s,On=u,Ve!==null)if(On)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{Ve.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:Ve!==null&&(On?(e=Ve,wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),_o(e)):wg(Ve,a.stateNode));break;case 4:s=Ve,u=On,Ve=a.stateNode.containerInfo,On=!0,ki(e,n,a),Ve=s,On=u;break;case 0:case 11:case 14:case 15:je||_a(2,a,n),je||_a(4,a,n),ki(e,n,a);break;case 1:je||(Si(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Om(a,n,s)),ki(e,n,a);break;case 21:ki(e,n,a);break;case 22:je=(s=je)||a.memoizedState!==null,ki(e,n,a),je=s;break;default:ki(e,n,a)}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(a){Ie(n,n.return,a)}}function Q0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Im),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Im),n;default:throw Error(r(435,e.tag))}}function Ju(e,n){var a=Q0(e);n.forEach(function(s){var u=rS.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(ba(b.type)){Ve=b.stateNode,On=!1;break t}break;case 5:Ve=b.stateNode,On=!1;break t;case 3:case 4:Ve=b.stateNode.containerInfo,On=!0;break t}b=b.return}if(Ve===null)throw Error(r(160));Gm(f,x,u),Ve=null,On=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var oi=null;function km(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),kn(e),s&4&&(_a(3,e,e.return),Js(3,e),_a(5,e,e.return));break;case 1:Vn(n,e),kn(e),s&512&&(je||a===null||Si(a,a.return)),s&64&&Vi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=oi;if(Vn(n,e),kn(e),s&512&&(je||a===null||Si(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ra]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,s,a),f[rn]=e,tn(f),s=f;break t;case"link":var x=Bg("link","href",u).get(s+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;case"meta":if(x=Bg("meta","content",u).get(s+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,tn(f),s=f}e.stateNode=s}else Ig(u,e.type,e.stateNode);else e.stateNode=zg(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ig(u,e.type,e.stateNode):zg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Zu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),kn(e),s&512&&(je||a===null||Si(a,a.return)),a!==null&&s&4&&Zu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),kn(e),s&512&&(je||a===null||Si(a,a.return)),e.flags&32){u=e.stateNode;try{gi(u,"")}catch(st){Ie(e,e.return,st)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Zu(e,u,a!==null?a.memoizedProps:u)),s&1024&&(ju=!0);break;case 6:if(Vn(n,e),kn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(st){Ie(e,e.return,st)}}break;case 3:if(Fl=null,u=oi,oi=Bl(n.containerInfo),Vn(n,e),oi=u,kn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(st){Ie(e,e.return,st)}ju&&(ju=!1,Xm(e));break;case 4:s=oi,oi=Bl(e.stateNode.containerInfo),Vn(n,e),kn(e),oi=s;break;case 12:Vn(n,e),kn(e);break;case 13:Vn(n,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rf=Zt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ju(e,s)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,it=Vi,pt=je;if(Vi=it||u,je=pt||z,Vn(n,e),je=pt,Vi=it,kn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Vi||je||sr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=z.stateNode;var xt=z.memoizedProps.style,rt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;b.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(st){Ie(z,z.return,st)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(st){Ie(z,z.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ju(e,a))));break;case 19:Vn(n,e),kn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Ju(e,s)));break;case 30:break;case 21:break;default:Vn(n,e),kn(e)}}function kn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(zm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Ku(e);Tl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(gi(x,""),a.flags&=-33);var b=Ku(e);Tl(e,b,x);break;case 3:case 4:var z=a.stateNode.containerInfo,it=Ku(e);Qu(e,it,z);break;default:throw Error(r(161))}}catch(pt){Ie(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function va(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Fm(e,n.alternate,n),n=n.sibling}function sr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),sr(n);break;case 1:Si(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Om(n,n.return,a),sr(n);break;case 27:lo(n.stateNode);case 26:case 5:Si(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Sa(u,f,a),Js(4,f);break;case 1:if(Sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ie(s,s.return,it)}if(s=f,u=s.updateQueue,u!==null){var b=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Sp(z[u],b)}catch(it){Ie(s,s.return,it)}}a&&x&64&&Nm(f),$s(f,f.return);break;case 27:Bm(f);case 26:case 5:Sa(u,f,a),a&&s===null&&x&4&&Pm(f),$s(f,f.return);break;case 12:Sa(u,f,a);break;case 13:Sa(u,f,a),a&&x&4&&Vm(u,f);break;case 22:f.memoizedState===null&&Sa(u,f,a),$s(f,f.return);break;case 30:break;default:Sa(u,f,a)}n=n.sibling}}function $u(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Is(a))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Is(e))}function xi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qm(e,n,a,s),n=n.sibling}function qm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,s),u&2048&&Js(9,n);break;case 1:xi(e,n,a,s);break;case 3:xi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Is(e)));break;case 12:if(u&2048){xi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ie(n,n.return,z)}}else xi(e,n,a,s);break;case 13:xi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,s):to(e,n):f._visibility&2?xi(e,n,a,s):(f._visibility|=2,Gr(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&$u(x,n);break;case 24:xi(e,n,a,s),u&2048&&tf(n.alternate,n);break;default:xi(e,n,a,s)}}function Gr(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,x=n,b=a,z=s,it=x.flags;switch(x.tag){case 0:case 11:case 15:Gr(f,x,b,z,u),Js(8,x);break;case 23:break;case 22:var pt=x.stateNode;x.memoizedState!==null?pt._visibility&2?Gr(f,x,b,z,u):to(f,x):(pt._visibility|=2,Gr(f,x,b,z,u)),u&&it&2048&&$u(x.alternate,x);break;case 24:Gr(f,x,b,z,u),u&&it&2048&&tf(x.alternate,x);break;default:Gr(f,x,b,z,u)}n=n.sibling}}function to(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:to(a,s),u&2048&&$u(s.alternate,s);break;case 24:to(a,s),u&2048&&tf(s.alternate,s);break;default:to(a,s)}n=n.sibling}}var eo=8192;function Vr(e){if(e.subtreeFlags&eo)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 26:Vr(e),e.flags&eo&&e.memoizedState!==null&&PS(oi,e.memoizedState,e.memoizedProps);break;case 5:Vr(e);break;case 3:case 4:var n=oi;oi=Bl(e.stateNode.containerInfo),Vr(e),oi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=eo,eo=16777216,Vr(e),eo=n):Vr(e));break;default:Vr(e)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Km(s,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zm(e),e=e.sibling}function Zm(e){switch(e.tag){case 0:case 11:case 15:no(e),e.flags&2048&&_a(9,e,e.return);break;case 3:no(e);break;case 12:no(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,bl(e)):no(e);break;default:no(e)}}function bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Km(s,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_a(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}e=e.sibling}}function Km(e,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Is(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=e;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Hm(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var j0={getCacheForType:function(e){var n=Tn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},J0=typeof WeakMap=="function"?WeakMap:Map,De=0,Ge=null,me=null,Me=0,Ue=0,Xn=null,xa=!1,kr=!1,ef=!1,Xi=0,Ze=0,ya=0,or=0,nf=0,ti=0,Xr=0,io=null,Pn=null,af=!1,rf=0,Al=1/0,Rl=null,Ma=null,xn=0,Ea=null,qr=null,Wr=0,sf=0,of=null,Qm=null,ao=0,lf=null;function qn(){if((De&2)!==0&&Me!==0)return Me&-Me;if(O.T!==null){var e=Nr;return e!==0?e:mf()}return be()}function jm(){ti===0&&(ti=(Me&536870912)===0||we?q():536870912);var e=$n.current;return e!==null&&(e.flags|=32),ti}function Wn(e,n,a){(e===Ge&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),Ta(e,Me,ti,!1)),St(e,a),((De&2)===0||e!==Ge)&&(e===Ge&&((De&2)===0&&(or|=a),Ze===4&&Ta(e,Me,ti,!1)),yi(e))}function Jm(e,n,a){if((De&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),u=s?eS(e,n):ff(e,n,!0),f=s;do{if(u===0){kr&&!s&&Ta(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!$0(a)){u=ff(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=io;var z=b.current.memoizedState.isDehydrated;if(z&&(Yr(b,x).flags|=256),x=ff(b,x,!1),x!==2){if(ef&&!z){b.errorRecoveryDisabledLanes|=f,or|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){Yr(e,0),Ta(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,ti,!xa);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=rf+300-Zt(),10<u)){if(Ta(s,n,ti,!xa),fe(s,0,!0)!==0)break t;s.timeoutHandle=Rg($m.bind(null,s,a,Pn,Rl,af,n,ti,or,Xr,xa,f,2,-0,0),u);break t}$m(s,a,Pn,Rl,af,n,ti,or,Xr,xa,f,0,-0,0)}}break}while(!0);yi(e)}function $m(e,n,a,s,u,f,x,b,z,it,pt,xt,rt,st){if(e.timeoutHandle=-1,xt=n.subtreeFlags,(xt&8192||(xt&16785408)===16785408)&&(fo={stylesheets:null,count:0,unsuspend:OS},Wm(n),xt=zS(),xt!==null)){e.cancelPendingCommit=xt(sg.bind(null,e,n,f,a,s,u,x,b,z,pt,1,rt,st)),Ta(e,f,x,!it);return}sg(e,n,f,a,s,u,x,b,z)}function $0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Hn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(e,n,a,s){n&=~nf,n&=~or,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Ct(u),x=1<<f;s[f]=-1,u&=~x}a!==0&&Nt(e,a,n)}function Cl(){return(De&6)===0?(ro(0),!1):!0}function cf(){if(me!==null){if(Ue===0)var e=me.return;else e=me,zi=er=null,bu(e),Fr=null,Ks=0,e=me;for(;e!==null;)Lm(e.alternate,e),e=e.return;me=null}}function Yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_S(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),cf(),Ge=e,me=a=Ni(e.current,null),Me=n,Ue=0,Xn=null,xa=!1,kr=ne(e,n),ef=!1,Xr=ti=nf=or=ya=Ze=0,Pn=io=null,af=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Ct(s),f=1<<u;n|=e[u],s&=~f}return Xi=n,Qo(),a}function tg(e,n){he=null,O.H=ml,n===Hs||n===rl?(n=_p(),Ue=3):n===pp?(n=_p(),Ue=4):Ue=n===vm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,me===null&&(Ze=1,xl(e,Kn(n,e.current)))}function eg(){var e=O.H;return O.H=ml,e===null?ml:e}function ng(){var e=O.A;return O.A=j0,e}function uf(){Ze=4,xa||(Me&4194048)!==Me&&$n.current!==null||(kr=!0),(ya&134217727)===0&&(or&134217727)===0||Ge===null||Ta(Ge,Me,ti,!1)}function ff(e,n,a){var s=De;De|=2;var u=eg(),f=ng();(Ge!==e||Me!==n)&&(Rl=null,Yr(e,n)),n=!1;var x=Ze;t:do try{if(Ue!==0&&me!==null){var b=me,z=Xn;switch(Ue){case 8:cf(),x=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var it=Ue;if(Ue=0,Xn=null,Zr(e,b,z,it),a&&kr){x=0;break t}break;default:it=Ue,Ue=0,Xn=null,Zr(e,b,z,it)}}tS(),x=Ze;break}catch(pt){tg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,zi=er=null,De=s,O.H=u,O.A=f,me===null&&(Ge=null,Me=0,Qo()),x}function tS(){for(;me!==null;)ig(me)}function eS(e,n){var a=De;De|=2;var s=eg(),u=ng();Ge!==e||Me!==n?(Rl=null,Al=Zt()+500,Yr(e,n)):kr=ne(e,n);t:do try{if(Ue!==0&&me!==null){n=me;var f=Xn;e:switch(Ue){case 1:Ue=0,Xn=null,Zr(e,n,f,1);break;case 2:case 9:if(mp(f)){Ue=0,Xn=null,ag(n);break}n=function(){Ue!==2&&Ue!==9||Ge!==e||(Ue=7),yi(e)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:mp(f)?(Ue=0,Xn=null,ag(n)):(Ue=0,Xn=null,Zr(e,n,f,7));break;case 5:var x=null;switch(me.tag){case 26:x=me.memoizedState;case 5:case 27:var b=me;if(!x||Fg(x)){Ue=0,Xn=null;var z=b.sibling;if(z!==null)me=z;else{var it=b.return;it!==null?(me=it,wl(it)):me=null}break e}}Ue=0,Xn=null,Zr(e,n,f,5);break;case 6:Ue=0,Xn=null,Zr(e,n,f,6);break;case 8:cf(),Ze=6;break t;default:throw Error(r(462))}}nS();break}catch(pt){tg(e,pt)}while(!0);return zi=er=null,O.H=s,O.A=u,De=a,me!==null?0:(Ge=null,Me=0,Qo(),Ze)}function nS(){for(;me!==null&&!Ke();)ig(me)}function ig(e){var n=Dm(e.alternate,e,Xi);e.memoizedProps=e.pendingProps,n===null?wl(e):me=n}function ag(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Tm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Tm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:bu(n);default:Lm(a,n),n=me=rp(n,Xi),n=Dm(a,n,Xi)}e.memoizedProps=e.pendingProps,n===null?wl(e):me=n}function Zr(e,n,a,s){zi=er=null,bu(n),Fr=null,Ks=0;var u=n.return;try{if(q0(e,u,n,a,Me)){Ze=1,xl(e,Kn(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Ze=1,xl(e,Kn(a,e.current)),me=null;return}n.flags&32768?(we||s===1?e=!0:kr||(Me&536870912)!==0?e=!1:(xa=e=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),rg(n,e)):wl(n)}function wl(e){var n=e;do{if((n.flags&32768)!==0){rg(n,xa);return}e=n.return;var a=Y0(n.alternate,n,Xi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ze===0&&(Ze=5)}function rg(e,n){do{var a=Z0(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ze=6,me=null}function sg(e,n,a,s,u,f,x,b,z){e.cancelPendingCommit=null;do Dl();while(xn!==0);if((De&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,Pt(e,a,f,x,b,z),e===Ge&&(me=Ge=null,Me=0),qr=n,Ea=e,Wr=a,sf=f,of=u,Qm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(L,function(){return fg(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,u=tt.p,tt.p=2,x=De,De|=4;try{K0(e,n,a)}finally{De=x,tt.p=u,O.T=s}}xn=1,og(),lg(),cg()}}function og(){if(xn===1){xn=0;var e=Ea,n=qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=tt.p;tt.p=2;var u=De;De|=4;try{km(n,e);var f=Ef,x=Kd(e.containerInfo),b=f.focusedElem,z=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&Zd(b.ownerDocument.documentElement,b)){if(z!==null&&Kc(b)){var it=z.start,pt=z.end;if(pt===void 0&&(pt=it),"selectionStart"in b)b.selectionStart=it,b.selectionEnd=Math.min(pt,b.value.length);else{var xt=b.ownerDocument||document,rt=xt&&xt.defaultView||window;if(rt.getSelection){var st=rt.getSelection(),ee=b.textContent.length,jt=Math.min(z.start,ee),Pe=z.end===void 0?jt:Math.min(z.end,ee);!st.extend&&jt>Pe&&(x=Pe,Pe=jt,jt=x);var Z=Yd(b,jt),G=Yd(b,Pe);if(Z&&G&&(st.rangeCount!==1||st.anchorNode!==Z.node||st.anchorOffset!==Z.offset||st.focusNode!==G.node||st.focusOffset!==G.offset)){var nt=xt.createRange();nt.setStart(Z.node,Z.offset),st.removeAllRanges(),jt>Pe?(st.addRange(nt),st.extend(G.node,G.offset)):(nt.setEnd(G.node,G.offset),st.addRange(nt))}}}}for(xt=[],st=b;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<xt.length;b++){var vt=xt[b];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}Vl=!!Mf,Ef=Mf=null}finally{De=u,tt.p=s,O.T=a}}e.current=n,xn=2}}function lg(){if(xn===2){xn=0;var e=Ea,n=qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=tt.p;tt.p=2;var u=De;De|=4;try{Fm(e,n.alternate,n)}finally{De=u,tt.p=s,O.T=a}}xn=3}}function cg(){if(xn===4||xn===3){xn=0,ie();var e=Ea,n=qr,a=Wr,s=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,qr=Ea=null,ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ma=null),$e(a),n=n.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(_t,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,u=tt.p,tt.p=2,O.T=null;try{for(var f=e.onRecoverableError,x=0;x<s.length;x++){var b=s[x];f(b.value,{componentStack:b.stack})}}finally{O.T=n,tt.p=u}}(Wr&3)!==0&&Dl(),yi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===lf?ao++:(ao=0,lf=e):ao=0,ro(0)}}function ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Is(n)))}function Dl(e){return og(),lg(),cg(),fg()}function fg(){if(xn!==5)return!1;var e=Ea,n=sf;sf=0;var a=$e(Wr),s=O.T,u=tt.p;try{tt.p=32>a?32:a,O.T=null,a=of,of=null;var f=Ea,x=Wr;if(xn=0,qr=Ea=null,Wr=0,(De&6)!==0)throw Error(r(331));var b=De;if(De|=4,Zm(f.current),qm(f,f.current,x,a),De=b,ro(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(_t,f)}catch{}return!0}finally{tt.p=u,O.T=s,ug(e,n)}}function hg(e,n,a){n=Kn(a,n),n=Fu(e.stateNode,n,2),e=da(e,n,2),e!==null&&(St(e,2),yi(e))}function Ie(e,n,a){if(e.tag===3)hg(e,e,a);else for(;n!==null;){if(n.tag===3){hg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=Kn(a,e),a=gm(2),s=da(n,a,2),s!==null&&(_m(a,s,n,e),St(s,2),yi(s));break}}n=n.return}}function hf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new J0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(ef=!0,u.add(a),e=iS.bind(null,e,n,a),n.then(e,e))}function iS(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(Me&a)===a&&(Ze===4||Ze===3&&(Me&62914560)===Me&&300>Zt()-rf?(De&2)===0&&Yr(e,0):nf|=a,Xr===Me&&(Xr=0)),yi(e)}function dg(e,n){n===0&&(n=Lt()),e=wr(e,n),e!==null&&(St(e,n),yi(e))}function aS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),dg(e,a)}function rS(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),dg(e,a)}function sS(e,n){return Vt(e,n)}var Ul=null,Kr=null,df=!1,Ll=!1,pf=!1,lr=0;function yi(e){e!==Kr&&e.next===null&&(Kr===null?Ul=Kr=e:Kr=Kr.next=e),Ll=!0,df||(df=!0,lS())}function ro(e,n){if(!pf&&Ll){pf=!0;do for(var a=!1,s=Ul;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var x=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-Ct(42|e)+1)-1,f&=u&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,_g(s,f))}else f=Me,f=fe(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ne(s,f)||(a=!0,_g(s,f));s=s.next}while(a);pf=!1}}function oS(){pg()}function pg(){Ll=df=!1;var e=0;lr!==0&&(gS()&&(e=lr),lr=0);for(var n=Zt(),a=null,s=Ul;s!==null;){var u=s.next,f=mg(s,n);f===0?(s.next=null,a===null?Ul=u:a.next=u,u===null&&(Kr=a)):(a=s,(e!==0||(f&3)!==0)&&(Ll=!0)),s=u}ro(e)}function mg(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ct(f),b=1<<x,z=u[x];z===-1?((b&a)===0||(b&s)!==0)&&(u[x]=Le(b,n)):z<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ge,a=Me,a=fe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&I(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&I(s),$e(a)){case 2:case 8:a=Ft;break;case 32:a=L;break;case 268435456:a=at;break;default:a=L}return s=gg.bind(null,e),a=Vt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&I(s),e.callbackPriority=2,e.callbackNode=null,2}function gg(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Dl()&&e.callbackNode!==a)return null;var s=Me;return s=fe(e,e===Ge?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Jm(e,s,n),mg(e,Zt()),e.callbackNode!=null&&e.callbackNode===a?gg.bind(null,e):null)}function _g(e,n){if(Dl())return null;Jm(e,n,!0)}function lS(){vS(function(){(De&6)!==0?Vt(ve,oS):pg()})}function mf(){return lr===0&&(lr=q()),lr}function vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function Sg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=vg((u[_n]||null).action),x=s.submitter;x&&(n=(n=x[_n]||null)?vg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new Yo("action","action",null,s,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(lr!==0){var z=x?Sg(u,x):new FormData(u);Ou(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=x?Sg(u,x):new FormData(u),Ou(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var gf=0;gf<$c.length;gf++){var _f=$c[gf],uS=_f.toLowerCase(),fS=_f[0].toUpperCase()+_f.slice(1);si(uS,"on"+fS)}si(Jd,"onAnimationEnd"),si($d,"onAnimationIteration"),si(tp,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(C0,"onTransitionRun"),si(w0,"onTransitionStart"),si(D0,"onTransitionCancel"),si(ep,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wi("onBeforeInput",["compositionend","keypress","textInput","paste"]),wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(so));function xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var b=s[x],z=b.instance,it=b.currentTarget;if(b=b.listener,z!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=it;try{f(u)}catch(pt){Sl(pt)}u.currentTarget=null,f=z}else for(x=0;x<s.length;x++){if(b=s[x],z=b.instance,it=b.currentTarget,b=b.listener,z!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=it;try{f(u)}catch(pt){Sl(pt)}u.currentTarget=null,f=z}}}}function ge(e,n){var a=n[Xa];a===void 0&&(a=n[Xa]=new Set);var s=e+"__bubble";a.has(s)||(yg(n,e,2,!1),a.add(s))}function vf(e,n,a){var s=0;n&&(s|=4),yg(a,e,s,n)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Nl]){e[Nl]=!0,Go.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||vf(a,!1,e),vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Nl]||(n[Nl]=!0,vf("selectionchange",!1,n))}}function yg(e,n,a,s){switch(qg(n)){case 2:var u=FS;break;case 8:u=HS;break;default:u=Nf}a=u.bind(null,n,a,e),u=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function xf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var b=s.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=s.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=Ri(b),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){s=f=x;continue t}b=b.parentNode}}s=s.return}Cd(function(){var it=f,pt=Ic(a),xt=[];t:{var rt=np.get(e);if(rt!==void 0){var st=Yo,ee=e;switch(e){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":st=s0;break;case"focusin":ee="focus",st=Xc;break;case"focusout":ee="blur",st=Xc;break;case"beforeblur":case"afterblur":st=Xc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=c0;break;case Jd:case $d:case tp:st=jv;break;case ep:st=f0;break;case"scroll":case"scrollend":st=Wv;break;case"wheel":st=d0;break;case"copy":case"cut":case"paste":st=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Nd;break;case"toggle":case"beforetoggle":st=m0}var jt=(n&4)!==0,Pe=!jt&&(e==="scroll"||e==="scrollend"),Z=jt?rt!==null?rt+"Capture":null:rt;jt=[];for(var G=it,nt;G!==null;){var vt=G;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||Z===null||(vt=bs(G,Z),vt!=null&&jt.push(oo(G,vt,nt))),Pe)break;G=G.return}0<jt.length&&(rt=new st(rt,ee,null,a,pt),xt.push({event:rt,listeners:jt}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",rt&&a!==Bc&&(ee=a.relatedTarget||a.fromElement)&&(Ri(ee)||ee[Un]))break t;if((st||rt)&&(rt=pt.window===pt?pt:(rt=pt.ownerDocument)?rt.defaultView||rt.parentWindow:window,st?(ee=a.relatedTarget||a.toElement,st=it,ee=ee?Ri(ee):null,ee!==null&&(Pe=c(ee),jt=ee.tag,ee!==Pe||jt!==5&&jt!==27&&jt!==6)&&(ee=null)):(st=null,ee=it),st!==ee)){if(jt=Ud,vt="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(jt=Nd,vt="onPointerLeave",Z="onPointerEnter",G="pointer"),Pe=st==null?rt:Wa(st),nt=ee==null?rt:Wa(ee),rt=new jt(vt,G+"leave",st,a,pt),rt.target=Pe,rt.relatedTarget=nt,vt=null,Ri(pt)===it&&(jt=new jt(Z,G+"enter",ee,a,pt),jt.target=nt,jt.relatedTarget=Pe,vt=jt),Pe=vt,st&&ee)e:{for(jt=st,Z=ee,G=0,nt=jt;nt;nt=Qr(nt))G++;for(nt=0,vt=Z;vt;vt=Qr(vt))nt++;for(;0<G-nt;)jt=Qr(jt),G--;for(;0<nt-G;)Z=Qr(Z),nt--;for(;G--;){if(jt===Z||Z!==null&&jt===Z.alternate)break e;jt=Qr(jt),Z=Qr(Z)}jt=null}else jt=null;st!==null&&Mg(xt,rt,st,jt,!1),ee!==null&&Pe!==null&&Mg(xt,Pe,ee,jt,!0)}}t:{if(rt=it?Wa(it):window,st=rt.nodeName&&rt.nodeName.toLowerCase(),st==="select"||st==="input"&&rt.type==="file")var Gt=Gd;else if(Fd(rt))if(Vd)Gt=b0;else{Gt=E0;var de=M0}else st=rt.nodeName,!st||st.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?it&&zc(it.elementType)&&(Gt=Gd):Gt=T0;if(Gt&&(Gt=Gt(e,it))){Hd(xt,Gt,a,pt);break t}de&&de(e,rt,it),e==="focusout"&&it&&rt.type==="number"&&it.memoizedProps.value!=null&&En(rt,"number",rt.value)}switch(de=it?Wa(it):window,e){case"focusin":(Fd(de)||de.contentEditable==="true")&&(Ar=de,Qc=it,Ns=null);break;case"focusout":Ns=Qc=Ar=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Qd(xt,a,pt);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":Qd(xt,a,pt)}var Xt;if(Wc)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else br?Bd(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(Od&&a.locale!=="ko"&&(br||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&br&&(Xt=wd()):(ca=pt,Gc="value"in ca?ca.value:ca.textContent,br=!0)),de=Ol(it,$t),0<de.length&&($t=new Ld($t,e,null,a,pt),xt.push({event:$t,listeners:de}),Xt?$t.data=Xt:(Xt=Id(a),Xt!==null&&($t.data=Xt)))),(Xt=_0?v0(e,a):S0(e,a))&&($t=Ol(it,"onBeforeInput"),0<$t.length&&(de=new Ld("onBeforeInput","beforeinput",null,a,pt),xt.push({event:de,listeners:$t}),de.data=Xt)),cS(xt,e,it,a,pt)}xg(xt,n)})}function oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ol(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=bs(e,a),u!=null&&s.unshift(oo(e,u,f)),u=bs(e,n),u!=null&&s.push(oo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mg(e,n,a,s,u){for(var f=n._reactName,x=[];a!==null&&a!==s;){var b=a,z=b.alternate,it=b.stateNode;if(b=b.tag,z!==null&&z===s)break;b!==5&&b!==26&&b!==27||it===null||(z=it,u?(it=bs(a,f),it!=null&&x.unshift(oo(a,it,z))):u||(it=bs(a,f),it!=null&&x.push(oo(a,it,z)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Eg(e){return(typeof e=="string"?e:""+e).replace(dS,`
`).replace(pS,"")}function Tg(e,n){return n=Eg(n),Eg(e)===n}function Pl(){}function Oe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||gi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&gi(e,""+s);break;case"className":wt(e,"class",s);break;case"tabIndex":wt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":wt(e,a,s);break;case"style":Ad(e,s,f);break;case"data":if(n!=="object"){wt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pl);break;case"onScroll":s!=null&&ge("scroll",e);break;case"onScrollEnd":s!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Tt(e,"popover",s);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Tt(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,Tt(e,a,s))}}function yf(e,n,a,s,u,f){switch(a){case"style":Ad(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?gi(e,s):(typeof s=="number"||typeof s=="bigint")&&gi(e,""+s);break;case"onScroll":s!=null&&ge("scroll",e);break;case"onScrollEnd":s!=null&&ge("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[_n]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):Tt(e,a,s)}}}function yn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,x,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),s&&Oe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=x=u=null,z=null,it=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":u=pt;break;case"type":x=pt;break;case"checked":z=pt;break;case"defaultChecked":it=pt;break;case"value":f=pt;break;case"defaultValue":b=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Oe(e,n,s,pt,a,null)}}Be(e,f,b,z,it,x,u,!1),We(e);return;case"select":ge("invalid",e),s=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":s=b;default:Oe(e,n,u,b,a,null)}n=f,a=x,e.multiple=!!s,n!=null?sn(e,!!s,n,!1):a!=null&&sn(e,!!s,a,!0);return;case"textarea":ge("invalid",e),f=u=s=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":s=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Oe(e,n,x,b,a,null)}vn(e,s,u,f),We(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(e,n,z,s,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(s=0;s<so.length;s++)ge(so[s],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(s=a[it],s!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,it,s,a,null)}return;default:if(zc(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&yf(e,n,pt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Oe(e,n,b,s,a,null))}function mS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,b=null,z=null,it=null,pt=null;for(st in a){var xt=a[st];if(a.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=xt;default:s.hasOwnProperty(st)||Oe(e,n,st,null,s,xt)}}for(var rt in s){var st=s[rt];if(xt=a[rt],s.hasOwnProperty(rt)&&(st!=null||xt!=null))switch(rt){case"type":f=st;break;case"name":u=st;break;case"checked":it=st;break;case"defaultChecked":pt=st;break;case"value":x=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==xt&&Oe(e,n,rt,st,s,xt)}}Di(e,x,b,z,it,pt,f,u);return;case"select":st=x=b=rt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":st=z;default:s.hasOwnProperty(f)||Oe(e,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":rt=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==z&&Oe(e,n,u,f,s,z)}n=b,a=x,s=st,rt!=null?sn(e,!!a,rt,!1):!!s!=!!a&&(n!=null?sn(e,!!a,n,!0):sn(e,!!a,a?[]:"",!1));return;case"textarea":st=rt=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,s,u)}for(x in s)if(u=s[x],f=a[x],s.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":rt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(e,n,x,u,s,f)}hn(e,rt,st);return;case"option":for(var ee in a)if(rt=a[ee],a.hasOwnProperty(ee)&&rt!=null&&!s.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,n,ee,null,s,rt)}for(z in s)if(rt=s[z],st=a[z],s.hasOwnProperty(z)&&rt!==st&&(rt!=null||st!=null))switch(z){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Oe(e,n,z,rt,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)rt=a[jt],a.hasOwnProperty(jt)&&rt!=null&&!s.hasOwnProperty(jt)&&Oe(e,n,jt,null,s,rt);for(it in s)if(rt=s[it],st=a[it],s.hasOwnProperty(it)&&rt!==st&&(rt!=null||st!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:Oe(e,n,it,rt,s,st)}return;default:if(zc(n)){for(var Pe in a)rt=a[Pe],a.hasOwnProperty(Pe)&&rt!==void 0&&!s.hasOwnProperty(Pe)&&yf(e,n,Pe,void 0,s,rt);for(pt in s)rt=s[pt],st=a[pt],!s.hasOwnProperty(pt)||rt===st||rt===void 0&&st===void 0||yf(e,n,pt,rt,s,st);return}}for(var Z in a)rt=a[Z],a.hasOwnProperty(Z)&&rt!=null&&!s.hasOwnProperty(Z)&&Oe(e,n,Z,null,s,rt);for(xt in s)rt=s[xt],st=a[xt],!s.hasOwnProperty(xt)||rt===st||rt==null&&st==null||Oe(e,n,xt,rt,s,st)}var Mf=null,Ef=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ag(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Tf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bf=null;function gS(){var e=window.event;return e&&e.type==="popstate"?e===bf?!1:(bf=e,!0):(bf=null,!1)}var Rg=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(e){return Cg.resolve(null).then(e).catch(SS)}:Rg;function SS(e){setTimeout(function(){throw e})}function ba(e){return e==="head"}function wg(e,n){var a=n,s=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var x=e.ownerDocument;if(a&1&&lo(x.documentElement),a&2&&lo(x.body),a&4)for(a=x.head,lo(a),x=a.firstChild;x;){var b=x.nextSibling,z=x.nodeName;x[ra]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&x.rel.toLowerCase()==="stylesheet"||a.removeChild(x),x=b}}if(u===0){e.removeChild(f),_o(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);_o(n)}function Af(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ra])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function yS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function Rf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function MS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Cf=null;function Dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Ug(e,n,a){switch(n=zl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);sa(e)}var ei=new Map,Lg=new Set;function Bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qi=tt.d;tt.d={f:ES,r:TS,D:bS,C:AS,L:RS,m:CS,X:DS,S:wS,M:US};function ES(){var e=qi.f(),n=Cl();return e||n}function TS(e){var n=Ci(e);n!==null&&n.tag===5&&n.type==="form"?Jp(n):qi.r(e)}var jr=typeof document>"u"?null:document;function Ng(e,n,a){var s=jr;if(s&&typeof n=="string"&&n){var u=He(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),yn(n,"link",e),tn(n),s.head.appendChild(n)))}}function bS(e){qi.D(e),Ng("dns-prefetch",e,null)}function AS(e,n){qi.C(e,n),Ng("preconnect",e,n)}function RS(e,n,a){qi.L(e,n,a);var s=jr;if(s&&e&&n){var u='link[rel="preload"][as="'+He(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+He(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+He(a.imageSizes)+'"]')):u+='[href="'+He(e)+'"]';var f=u;switch(n){case"style":f=Jr(e);break;case"script":f=$r(e)}ei.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ei.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(co(f))||n==="script"&&s.querySelector(uo(f))||(n=s.createElement("link"),yn(n,"link",e),tn(n),s.head.appendChild(n)))}}function CS(e,n){qi.m(e,n);var a=jr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+He(s)+'"][href="'+He(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=$r(e)}if(!ei.has(f)&&(e=g({rel:"modulepreload",href:e},n),ei.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uo(f)))return}s=a.createElement("link"),yn(s,"link",e),tn(s),a.head.appendChild(s)}}}function wS(e,n,a){qi.S(e,n,a);var s=jr;if(s&&e){var u=oa(s).hoistableStyles,f=Jr(e);n=n||"default";var x=u.get(f);if(!x){var b={loading:0,preload:null};if(x=s.querySelector(co(f)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ei.get(f))&&wf(e,a);var z=x=s.createElement("link");tn(z),yn(z,"link",e),z._p=new Promise(function(it,pt){z.onload=it,z.onerror=pt}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Il(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(f,x)}}}function DS(e,n){qi.X(e,n);var a=jr;if(a&&e){var s=oa(a).hoistableScripts,u=$r(e),f=s.get(u);f||(f=a.querySelector(uo(u)),f||(e=g({src:e,async:!0},n),(n=ei.get(u))&&Df(e,n),f=a.createElement("script"),tn(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function US(e,n){qi.M(e,n);var a=jr;if(a&&e){var s=oa(a).hoistableScripts,u=$r(e),f=s.get(u);f||(f=a.querySelector(uo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ei.get(u))&&Df(e,n),f=a.createElement("script"),tn(f),yn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Og(e,n,a,s){var u=(u=gt.current)?Bl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Jr(a.href),a=oa(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Jr(a.href);var f=oa(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(co(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ei.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(e,a),f||LS(u,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=$r(a),a=oa(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Jr(e){return'href="'+He(e)+'"'}function co(e){return'link[rel="stylesheet"]['+e+"]"}function Pg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function LS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),tn(n),e.head.appendChild(n))}function $r(e){return'[src="'+He(e)+'"]'}function uo(e){return"script[async]"+e}function zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+He(a.href)+'"]');if(s)return n.instance=s,tn(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),tn(s),yn(s,"style",u),Il(s,a.precedence,e),n.instance=s;case"stylesheet":u=Jr(a.href);var f=e.querySelector(co(u));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;s=Pg(a),(u=ei.get(u))&&wf(s,u),f=(e.ownerDocument||e).createElement("link"),tn(f);var x=f;return x._p=new Promise(function(b,z){x.onload=b,x.onerror=z}),yn(f,"link",s),n.state.loading|=4,Il(f,a.precedence,e),n.instance=f;case"script":return f=$r(a.src),(u=e.querySelector(uo(f)))?(n.instance=u,tn(u),u):(s=a,(u=ei.get(f))&&(s=g({},a),Df(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),tn(u),yn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Il(s,a.precedence,e));return n.instance}function Il(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,x=0;x<s.length;x++){var b=s[x];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Fl=null;function Bg(e,n,a){if(Fl===null){var s=new Map,u=Fl=new Map;u.set(a,s)}else u=Fl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ra]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=s.get(x);b?b.push(f):s.set(x,[f])}}return s}function Ig(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function NS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fo=null;function OS(){}function PS(e,n,a){if(fo===null)throw Error(r(475));var s=fo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Jr(a.href),f=e.querySelector(co(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Hl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,tn(f);return}f=e.ownerDocument||e,a=Pg(a),(u=ei.get(u))&&wf(a,u),f=f.createElement("link"),tn(f);var x=f;x._p=new Promise(function(b,z){x.onload=b,x.onerror=z}),yn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Hl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function zS(){if(fo===null)throw Error(r(475));var e=fo;return e.stylesheets&&e.count===0&&Uf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Uf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Hl(){if(this.count--,this.count===0){if(this.stylesheets)Uf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gl=null;function Uf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gl=new Map,n.forEach(BS,e),Gl=null,Hl.call(e))}function BS(e,n){if(!(n.state.loading&4)){var a=Gl.get(e);if(a)var s=a.get(null);else{a=new Map,Gl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,u),a.set(x,u),this.count++,s=Hl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ho={$$typeof:N,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function IS(e,n,a,s,u,f,x,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Hg(e,n,a,s,u,f,x,b,z,it,pt,xt){return e=new IS(e,n,a,x,b,z,it,xt),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),e.current=f,f.stateNode=e,n=fu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},mu(f),e}function Gg(e){return e?(e=Dr,e):Dr}function Vg(e,n,a,s,u,f){u=Gg(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(e,s,n),a!==null&&(Wn(a,e,n),Vs(a,e,n))}function kg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Lf(e,n){kg(e,n),(e=e.alternate)&&kg(e,n)}function Xg(e){if(e.tag===13){var n=wr(e,67108864);n!==null&&Wn(n,e,67108864),Lf(e,67108864)}}var Vl=!0;function FS(e,n,a,s){var u=O.T;O.T=null;var f=tt.p;try{tt.p=2,Nf(e,n,a,s)}finally{tt.p=f,O.T=u}}function HS(e,n,a,s){var u=O.T;O.T=null;var f=tt.p;try{tt.p=8,Nf(e,n,a,s)}finally{tt.p=f,O.T=u}}function Nf(e,n,a,s){if(Vl){var u=Of(s);if(u===null)xf(e,n,s,kl,a),Wg(e,s);else if(VS(u,e,n,a,s))s.stopPropagation();else if(Wg(e,s),n&4&&-1<GS.indexOf(e)){for(;u!==null;){var f=Ci(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ot(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var z=1<<31-Ct(x);b.entanglements[1]|=z,x&=~z}yi(f),(De&6)===0&&(Al=Zt()+500,ro(0))}}break;case 13:b=wr(f,2),b!==null&&Wn(b,f,2),Cl(),Lf(f,2)}if(f=Of(s),f===null&&xf(e,n,s,kl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else xf(e,n,s,null,a)}}function Of(e){return e=Ic(e),Pf(e)}var kl=null;function Pf(e){if(kl=null,e=Ri(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return kl=e,null}function qg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(It()){case ve:return 2;case Ft:return 8;case L:case T:return 32;case at:return 268435456;default:return 32}default:return 32}}var zf=!1,Aa=null,Ra=null,Ca=null,po=new Map,mo=new Map,wa=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(e,n){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(n.pointerId)}}function go(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ci(n),n!==null&&Xg(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function VS(e,n,a,s,u){switch(n){case"focusin":return Aa=go(Aa,e,n,a,s,u),!0;case"dragenter":return Ra=go(Ra,e,n,a,s,u),!0;case"mouseover":return Ca=go(Ca,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return po.set(f,go(po.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,mo.set(f,go(mo.get(f)||null,e,n,a,s,u)),!0}return!1}function Yg(e){var n=Ri(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Fn(e.priority,function(){if(a.tag===13){var s=qn();s=Fe(s);var u=wr(a,s);u!==null&&Wn(u,a,s),Lf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Of(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Bc=s,a.target.dispatchEvent(s),Bc=null}else return n=Ci(a),n!==null&&Xg(n),e.blockedOn=a,!1;n.shift()}return!0}function Zg(e,n,a){Xl(e)&&a.delete(n)}function kS(){zf=!1,Aa!==null&&Xl(Aa)&&(Aa=null),Ra!==null&&Xl(Ra)&&(Ra=null),Ca!==null&&Xl(Ca)&&(Ca=null),po.forEach(Zg),mo.forEach(Zg)}function ql(e,n){e.blockedOn===n&&(e.blockedOn=null,zf||(zf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kS)))}var Wl=null;function Kg(e){Wl!==e&&(Wl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Wl===e&&(Wl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(Pf(s||a)===null)continue;break}var f=Ci(a);f!==null&&(e.splice(n,3),n-=3,Ou(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function _o(e){function n(z){return ql(z,e)}Aa!==null&&ql(Aa,e),Ra!==null&&ql(Ra,e),Ca!==null&&ql(Ca,e),po.forEach(n),mo.forEach(n);for(var a=0;a<wa.length;a++){var s=wa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],x=u[_n]||null;if(typeof f=="function")x||Kg(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[_n]||null)b=x.formAction;else if(Pf(u)!==null)continue}else b=x.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Kg(a)}}}function Bf(e){this._internalRoot=e}Yl.prototype.render=Bf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();Vg(a,s,e,n,null,null)},Yl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Vg(e.current,2,null,e,null,null),Cl(),n[Un]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var n=be();e={blockedOn:null,target:e,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,e),a===0&&Yg(e)}};var Qg=t.version;if(Qg!=="19.1.0")throw Error(r(527,Qg,"19.1.0"));tt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var XS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{_t=Zl.inject(XS),zt=Zl}catch{}}return So.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=hm,f=dm,x=pm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Hg(e,1,!1,null,null,a,s,u,f,x,b,null),e[Un]=n.current,Sf(e),new Bf(n)},So.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=hm,x=dm,b=pm,z=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=Hg(e,1,!0,n,a??null,s,u,f,x,b,z,it),n.context=Gg(null),a=n.current,s=qn(),s=Fe(s),u=ha(s),u.callback=null,da(a,u,s),a=s,n.current.lanes=a,St(n,a),yi(n),e[Un]=n.current,Sf(e),new Yl(n)},So.version="19.1.0",So}var s_;function tx(){if(s_)return Hf.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hf.exports=$S(),Hf.exports}var ex=tx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pd="175",nx=0,o_=1,ix=2,cv=1,ax=2,ji=3,Va=0,Bn=1,Ji=2,Ha=0,ms=1,l_=2,c_=3,u_=4,rx=5,_r=100,sx=101,ox=102,lx=103,cx=104,ux=200,fx=201,hx=202,dx=203,Th=204,bh=205,px=206,mx=207,gx=208,_x=209,vx=210,Sx=211,xx=212,yx=213,Mx=214,Ah=0,Rh=1,Ch=2,_s=3,wh=4,Dh=5,Uh=6,Lh=7,uv=0,Ex=1,Tx=2,Ga=0,bx=1,Ax=2,Rx=3,Cx=4,wx=5,Dx=6,Ux=7,fv=300,vs=301,Ss=302,Nh=303,Oh=304,Nc=306,Ph=1e3,Sr=1001,zh=1002,pi=1003,Lx=1004,Kl=1005,Ti=1006,Xf=1007,xr=1008,ia=1009,hv=1010,dv=1011,wo=1012,md=1013,yr=1014,$i=1015,No=1016,gd=1017,_d=1018,Do=1020,pv=35902,mv=1021,gv=1022,di=1023,_v=1024,vv=1025,Uo=1026,Lo=1027,Sv=1028,vd=1029,xv=1030,Sd=1031,xd=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Bh=35840,Ih=35841,Fh=35842,Hh=35843,Gh=36196,Vh=37492,kh=37496,Xh=37808,qh=37809,Wh=37810,Yh=37811,Zh=37812,Kh=37813,Qh=37814,jh=37815,Jh=37816,$h=37817,td=37818,ed=37819,nd=37820,id=37821,bc=36492,ad=36494,rd=36495,yv=36283,sd=36284,od=36285,ld=36286,Nx=3200,Ox=3201,Px=0,zx=1,Ia="",ii="srgb",xs="srgb-linear",Cc="linear",ze="srgb",ts=7680,f_=519,Bx=512,Ix=513,Fx=514,Mv=515,Hx=516,Gx=517,Vx=518,kx=519,h_=35044,d_="300 es",ta=2e3,wc=2001;class Ms{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,cd=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function _e(o,t,i){return Math.max(t,Math.min(i,o))}function Xx(o,t){return(o%t+t)%t}function Wf(o,t,i){return(1-i)*o+i*t}function xo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,r,l,c,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],S=r[2],y=r[5],E=r[8],C=l[0],M=l[3],_=l[6],F=l[1],N=l[4],U=l[7],V=l[2],k=l[5],B=l[8];return c[0]=h*C+d*F+m*V,c[3]=h*M+d*N+m*k,c[6]=h*_+d*U+m*B,c[1]=p*C+g*F+v*V,c[4]=p*M+g*N+v*k,c[7]=p*_+g*U+v*B,c[2]=S*C+y*F+E*V,c[5]=S*M+y*N+E*k,c[8]=S*_+y*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,S=d*m-g*c,y=p*c-h*m,E=i*v+r*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=v*C,t[1]=(l*p-g*r)*C,t[2]=(d*r-l*h)*C,t[3]=S*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=y*C,t[7]=(r*m-p*i)*C,t[8]=(h*i-r*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Yf.makeScale(t,i)),this}rotate(t){return this.premultiply(Yf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Yf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new oe;function Ev(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qx(){const o=Dc("canvas");return o.style.display="block",o}const p_={};function Ac(o){o in p_||(p_[o]=!0,console.warn(o))}function Wx(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function Yx(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const m_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),g_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kx(){const o={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ze&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=gs(l.r),l.g=gs(l.g),l.b=gs(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ia?Cc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[xs]:{primaries:t,whitePoint:r,transfer:Cc,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:m_,fromXYZ:g_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Ce=Kx();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function gs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let es;class Qx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{es===void 0&&(es=Dc("canvas")),es.width=t.width,es.height=t.height;const l=es.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=es}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=na(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jx=0;class yd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=Oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Zf(l[h].image)):c.push(Zf(l[h]))}else c=Zf(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Qx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jx=0;class In extends Ms{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Sr,l=Sr,c=Ti,h=xr,d=di,m=ia,p=In.DEFAULT_ANISOTROPY,g=Ia){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Oo(),this.name="",this.source=new yd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ph:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case zh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ph:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case zh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=fv;In.DEFAULT_ANISOTROPY=1;class Je{constructor(t=0,i=0,r=0,l=1){Je.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],S=m[1],y=m[5],E=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(v-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,V=(_+1)/2,k=(g+S)/4,B=(v+C)/4,J=(E+M)/4;return N>U&&N>V?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=k/r,c=B/r):U>V?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=k/l,c=J/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=B/c,l=J/c),this.set(r,l,c,i),this}let F=Math.sqrt((M-E)*(M-E)+(v-C)*(v-C)+(S-g)*(S-g));return Math.abs(F)<.001&&(F=1),this.x=(M-E)/F,this.y=(v-C)/F,this.z=(S-g)/F,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $x extends Ms{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new In(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends $x{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Tv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const S=c[h+0],y=c[h+1],E=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=S,t[i+1]=y,t[i+2]=E,t[i+3]=C;return}if(v!==C||m!==S||p!==y||g!==E){let M=1-d;const _=m*S+p*y+g*E+v*C,F=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const V=Math.sqrt(N),k=Math.atan2(V,_*F);M=Math.sin(M*k)/V,d=Math.sin(d*k)/V}const U=d*F;if(m=m*M+S*U,p=p*M+y*U,g=g*M+E*U,v=v*M+C*U,M===1-d){const V=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=V,p*=V,g*=V,v*=V}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[h],S=c[h+1],y=c[h+2],E=c[h+3];return t[i]=d*E+g*v+m*y-p*S,t[i+1]=m*E+g*S+p*v-d*y,t[i+2]=p*E+g*y+d*S-m*v,t[i+3]=g*E-d*v-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),S=m(r/2),y=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=S*g*v+p*y*E,this._y=p*y*v-S*g*E,this._z=p*g*E+S*y*v,this._w=p*g*v-S*y*E;break;case"YXZ":this._x=S*g*v+p*y*E,this._y=p*y*v-S*g*E,this._z=p*g*E-S*y*v,this._w=p*g*v+S*y*E;break;case"ZXY":this._x=S*g*v-p*y*E,this._y=p*y*v+S*g*E,this._z=p*g*E+S*y*v,this._w=p*g*v-S*y*E;break;case"ZYX":this._x=S*g*v-p*y*E,this._y=p*y*v+S*g*E,this._z=p*g*E-S*y*v,this._w=p*g*v+S*y*E;break;case"YZX":this._x=S*g*v+p*y*E,this._y=p*y*v+S*g*E,this._z=p*g*E-S*y*v,this._w=p*g*v-S*y*E;break;case"XZY":this._x=S*g*v-p*y*E,this._y=p*y*v-S*g*E,this._z=p*g*E+S*y*v,this._w=p*g*v+S*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*v+this._w*S,this._x=r*v+this._x*S,this._y=l*v+this._y*S,this._z=c*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(__.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(__.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Kf.copy(this).projectOnVector(t),this.sub(Kf)}reflect(t){return this.sub(Kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(_e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kf=new et,__=new Po;class zo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,ci):ci.fromBufferAttribute(c,h),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yo),jl.subVectors(this.max,yo),ns.subVectors(t.a,yo),is.subVectors(t.b,yo),as.subVectors(t.c,yo),Ua.subVectors(is,ns),La.subVectors(as,is),cr.subVectors(ns,as);let i=[0,-Ua.z,Ua.y,0,-La.z,La.y,0,-cr.z,cr.y,Ua.z,0,-Ua.x,La.z,0,-La.x,cr.z,0,-cr.x,-Ua.y,Ua.x,0,-La.y,La.x,0,-cr.y,cr.x,0];return!Qf(i,ns,is,as,jl)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,ns,is,as,jl))?!1:(Jl.crossVectors(Ua,La),i=[Jl.x,Jl.y,Jl.z],Qf(i,ns,is,as,jl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wi=[new et,new et,new et,new et,new et,new et,new et,new et],ci=new et,Ql=new zo,ns=new et,is=new et,as=new et,Ua=new et,La=new et,cr=new et,yo=new et,jl=new et,Jl=new et,ur=new et;function Qf(o,t,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){ur.fromArray(o,c);const d=l.x*Math.abs(ur.x)+l.y*Math.abs(ur.y)+l.z*Math.abs(ur.z),m=t.dot(ur),p=i.dot(ur),g=r.dot(ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const ey=new zo,Mo=new et,jf=new et;class Bo{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):ey.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(jf)),this.expandByPoint(Mo.copy(t.center).sub(jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new et,Jf=new et,$l=new et,Na=new et,$f=new et,tc=new et,th=new et;class Md{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Yi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,i),Yi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Jf.copy(t).add(i).multiplyScalar(.5),$l.copy(i).sub(t).normalize(),Na.copy(this.origin).sub(Jf);const c=t.distanceTo(i)*.5,h=-this.direction.dot($l),d=Na.dot(this.direction),m=-Na.dot($l),p=Na.lengthSq(),g=Math.abs(1-h*h);let v,S,y,E;if(g>0)if(v=h*m-d,S=h*d-m,E=c*g,v>=0)if(S>=-E)if(S<=E){const C=1/g;v*=C,S*=C,y=v*(v+h*S+2*d)+S*(h*v+S+2*m)+p}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;else S<=-E?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p):S<=E?(v=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+S*(S+2*m)+p);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Jf).addScaledVector($l,S),y}intersectSphere(t,i){Yi.subVectors(t.center,this.origin);const r=Yi.dot(this.direction),l=Yi.dot(Yi)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-S.z)*v,m=(t.max.z-S.z)*v):(d=(t.max.z-S.z)*v,m=(t.min.z-S.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,i,r,l,c){$f.subVectors(i,t),tc.subVectors(r,t),th.crossVectors($f,tc);let h=this.direction.dot(th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Na.subVectors(this.origin,t);const m=d*this.direction.dot(tc.crossVectors(Na,tc));if(m<0)return null;const p=d*this.direction.dot($f.cross(Na));if(p<0||m+p>h)return null;const g=-d*Na.dot(th);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,r,l,c,h,d,m,p,g,v,S,y,E,C,M){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,v,S,y,E,C,M)}set(t,i,r,l,c,h,d,m,p,g,v,S,y,E,C,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=E,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/rs.setFromMatrixColumn(t,0).length(),c=1/rs.setFromMatrixColumn(t,1).length(),h=1/rs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const S=h*g,y=h*v,E=d*g,C=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=y+E*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,y=m*v,E=p*g,C=p*v;i[0]=S+C*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,y=m*v,E=p*g,C=p*v;i[0]=S-C*d,i[4]=-h*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,y=h*v,E=d*g,C=d*v;i[0]=m*g,i[4]=E*p-y,i[8]=S*p+C,i[1]=m*v,i[5]=C*p+S,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,y=h*p,E=d*m,C=d*p;i[0]=m*g,i[4]=C-S*v,i[8]=E*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*v+E,i[10]=S-C*v}else if(t.order==="XZY"){const S=h*m,y=h*p,E=d*m,C=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=S*v+C,i[5]=h*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=C*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ny,t,iy)}lookAt(t,i,r){const l=this.elements;return Yn.subVectors(t,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Oa.crossVectors(r,Yn),Oa.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Oa.crossVectors(r,Yn)),Oa.normalize(),ec.crossVectors(Yn,Oa),l[0]=Oa.x,l[4]=ec.x,l[8]=Yn.x,l[1]=Oa.y,l[5]=ec.y,l[9]=Yn.y,l[2]=Oa.z,l[6]=ec.z,l[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],S=r[9],y=r[13],E=r[2],C=r[6],M=r[10],_=r[14],F=r[3],N=r[7],U=r[11],V=r[15],k=l[0],B=l[4],J=l[8],D=l[12],R=l[1],P=l[5],W=l[9],X=l[13],ct=l[2],Y=l[6],O=l[10],tt=l[14],H=l[3],ht=l[7],w=l[11],j=l[15];return c[0]=h*k+d*R+m*ct+p*H,c[4]=h*B+d*P+m*Y+p*ht,c[8]=h*J+d*W+m*O+p*w,c[12]=h*D+d*X+m*tt+p*j,c[1]=g*k+v*R+S*ct+y*H,c[5]=g*B+v*P+S*Y+y*ht,c[9]=g*J+v*W+S*O+y*w,c[13]=g*D+v*X+S*tt+y*j,c[2]=E*k+C*R+M*ct+_*H,c[6]=E*B+C*P+M*Y+_*ht,c[10]=E*J+C*W+M*O+_*w,c[14]=E*D+C*X+M*tt+_*j,c[3]=F*k+N*R+U*ct+V*H,c[7]=F*B+N*P+U*Y+V*ht,c[11]=F*J+N*W+U*O+V*w,c[15]=F*D+N*X+U*tt+V*j,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],S=t[10],y=t[14],E=t[3],C=t[7],M=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*d*S+r*p*S+l*d*y-r*m*y)+C*(+i*m*y-i*p*S+c*h*S-l*h*y+l*p*g-c*m*g)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*S+l*h*v-r*h*S+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],S=t[10],y=t[11],E=t[12],C=t[13],M=t[14],_=t[15],F=v*M*p-C*S*p+C*m*y-d*M*y-v*m*_+d*S*_,N=E*S*p-g*M*p-E*m*y+h*M*y+g*m*_-h*S*_,U=g*C*p-E*v*p+E*d*y-h*C*y-g*d*_+h*v*_,V=E*v*m-g*C*m-E*d*S+h*C*S+g*d*M-h*v*M,k=i*F+r*N+l*U+c*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/k;return t[0]=F*B,t[1]=(C*S*c-v*M*c-C*l*y+r*M*y+v*l*_-r*S*_)*B,t[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*_+r*m*_)*B,t[3]=(v*m*c-d*S*c-v*l*p+r*S*p+d*l*y-r*m*y)*B,t[4]=N*B,t[5]=(g*M*c-E*S*c+E*l*y-i*M*y-g*l*_+i*S*_)*B,t[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*_-i*m*_)*B,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*y+i*m*y)*B,t[8]=U*B,t[9]=(E*v*c-g*C*c-E*r*y+i*C*y+g*r*_-i*v*_)*B,t[10]=(h*C*c-E*d*c+E*r*p-i*C*p-h*r*_+i*d*_)*B,t[11]=(g*d*c-h*v*c-g*r*p+i*v*p+h*r*y-i*d*y)*B,t[12]=V*B,t[13]=(g*C*l-E*v*l+E*r*S-i*C*S-g*r*M+i*v*M)*B,t[14]=(E*d*l-h*C*l-E*r*m+i*C*m+h*r*M-i*d*M)*B,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*S+i*d*S)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,v=d+d,S=c*p,y=c*g,E=c*v,C=h*g,M=h*v,_=d*v,F=m*p,N=m*g,U=m*v,V=r.x,k=r.y,B=r.z;return l[0]=(1-(C+_))*V,l[1]=(y+U)*V,l[2]=(E-N)*V,l[3]=0,l[4]=(y-U)*k,l[5]=(1-(S+_))*k,l[6]=(M+F)*k,l[7]=0,l[8]=(E+N)*B,l[9]=(M-F)*B,l[10]=(1-(S+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=rs.set(l[0],l[1],l[2]).length();const h=rs.set(l[4],l[5],l[6]).length(),d=rs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],ui.copy(this);const p=1/c,g=1/h,v=1/d;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,i.setFromRotationMatrix(ui),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=ta){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),S=(r+l)/(r-l);let y,E;if(d===ta)y=-(h+c)/(h-c),E=-2*h*c/(h-c);else if(d===wc)y=-h/(h-c),E=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=ta){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(h-c),S=(i+t)*p,y=(r+l)*g;let E,C;if(d===ta)E=(h+c)*v,C=-2*v;else if(d===wc)E=c*v,C=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const rs=new et,ui=new qe,ny=new et(0,0,0),iy=new et(1,1,1),Oa=new et,ec=new et,Yn=new et,v_=new qe,S_=new Po;class aa{constructor(t=0,i=0,r=0,l=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return v_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return S_.setFromEuler(this),this.setFromQuaternion(S_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class bv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ay=0;const x_=new et,ss=new Po,Zi=new qe,nc=new et,Eo=new et,ry=new et,sy=new Po,y_=new et(1,0,0),M_=new et(0,1,0),E_=new et(0,0,1),T_={type:"added"},oy={type:"removed"},os={type:"childadded",child:null},eh={type:"childremoved",child:null};class Dn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const t=new et,i=new aa,r=new Po,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new oe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.multiply(ss),this}rotateOnWorldAxis(t,i){return ss.setFromAxisAngle(t,i),this.quaternion.premultiply(ss),this}rotateX(t){return this.rotateOnAxis(y_,t)}rotateY(t){return this.rotateOnAxis(M_,t)}rotateZ(t){return this.rotateOnAxis(E_,t)}translateOnAxis(t,i){return x_.copy(t).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y_,t)}translateY(t){return this.translateOnAxis(M_,t)}translateZ(t){return this.translateOnAxis(E_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?nc.copy(t):nc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Eo,nc,this.up):Zi.lookAt(nc,Eo,this.up),this.quaternion.setFromRotationMatrix(Zi),l&&(Zi.extractRotation(l.matrixWorld),ss.setFromRotationMatrix(Zi),this.quaternion.premultiply(ss.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(T_),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oy),eh.child=t,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(T_),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,t,ry),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,sy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),S=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new et(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new et,Ki=new et,nh=new et,Qi=new et,ls=new et,cs=new et,b_=new et,ih=new et,ah=new et,rh=new et,sh=new Je,oh=new Je,lh=new Je;class hi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),fi.subVectors(t,i),l.cross(fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){fi.subVectors(l,i),Ki.subVectors(r,i),nh.subVectors(t,i);const h=fi.dot(fi),d=fi.dot(Ki),m=fi.dot(nh),p=Ki.dot(Ki),g=Ki.dot(nh),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(p*m-d*g)*S,E=(h*g-d*m)*S;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return sh.setScalar(0),oh.setScalar(0),lh.setScalar(0),sh.fromBufferAttribute(t,i),oh.fromBufferAttribute(t,r),lh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(sh,c.x),h.addScaledVector(oh,c.y),h.addScaledVector(lh,c.z),h}static isFrontFacing(t,i,r,l){return fi.subVectors(r,i),Ki.subVectors(t,i),fi.cross(Ki).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),fi.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return hi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return hi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;ls.subVectors(l,r),cs.subVectors(c,r),ih.subVectors(t,r);const m=ls.dot(ih),p=cs.dot(ih);if(m<=0&&p<=0)return i.copy(r);ah.subVectors(t,l);const g=ls.dot(ah),v=cs.dot(ah);if(g>=0&&v<=g)return i.copy(l);const S=m*v-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(ls,h);rh.subVectors(t,c);const y=ls.dot(rh),E=cs.dot(rh);if(E>=0&&y<=E)return i.copy(c);const C=y*p-m*E;if(C<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(cs,d);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return b_.subVectors(c,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(b_,d);const _=1/(M+C+S);return h=C*_,d=S*_,i.copy(r).addScaledVector(ls,h).addScaledVector(cs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pa={h:0,s:0,l:0},ic={h:0,s:0,l:0};function ch(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Te{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=Xx(t,1),i=_e(i,0,1),r=_e(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=ch(h,c,t+1/3),this.g=ch(h,c,t),this.b=ch(h,c,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=ii){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ii){const r=Av[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=na(t.r),this.g=na(t.g),this.b=na(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Ce.fromWorkingColorSpace(Rn.copy(this),t),Math.round(_e(Rn.r*255,0,255))*65536+Math.round(_e(Rn.g*255,0,255))*256+Math.round(_e(Rn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ii){Ce.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==ii?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Pa),this.setHSL(Pa.h+t,Pa.s+i,Pa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Pa),t.getHSL(ic);const r=Wf(Pa.h,ic.h,i),l=Wf(Pa.s,ic.s,i),c=Wf(Pa.l,ic.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Te;Te.NAMES=Av;let ly=0;class Es extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=ms,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=bh,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Th&&(r.blendSrc=this.blendSrc),this.blendDst!==bh&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rv extends Es{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const an=new et,ac=new re;let cy=0;class bi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=h_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ac.fromBufferAttribute(this,i),ac.applyMatrix3(t),this.setXY(i,ac.x,ac.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(t),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(t),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(t),this.setXYZ(i,an.x,an.y,an.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==h_&&(t.usage=this.usage),t}}class Cv extends bi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class wv extends bi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class mi extends bi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let uy=0;const ni=new qe,uh=new Dn,us=new et,Zn=new zo,To=new zo,gn=new et;class ri extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ev(t)?wv:Cv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new oe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,i,r){return ni.makeTranslation(t,i,r),this.applyMatrix4(ni),this}scale(t,i,r){return ni.makeScale(t,i,r),this.applyMatrix4(ni),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new mi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Zn.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];To.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Zn.min,To.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,To.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(To.min),Zn.expandByPoint(To.max))}Zn.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)gn.fromBufferAttribute(d,p),m&&(us.fromBufferAttribute(t,p),gn.add(us)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let J=0;J<r.count;J++)d[J]=new et,m[J]=new et;const p=new et,g=new et,v=new et,S=new re,y=new re,E=new re,C=new et,M=new et;function _(J,D,R){p.fromBufferAttribute(r,J),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),S.fromBufferAttribute(c,J),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),g.sub(p),v.sub(p),y.sub(S),E.sub(S);const P=1/(y.x*E.y-E.x*y.y);isFinite(P)&&(C.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(P),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(P),d[J].add(C),d[D].add(C),d[R].add(C),m[J].add(M),m[D].add(M),m[R].add(M))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let J=0,D=F.length;J<D;++J){const R=F[J],P=R.start,W=R.count;for(let X=P,ct=P+W;X<ct;X+=3)_(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const N=new et,U=new et,V=new et,k=new et;function B(J){V.fromBufferAttribute(l,J),k.copy(V);const D=d[J];N.copy(D),N.sub(V.multiplyScalar(V.dot(D))).normalize(),U.crossVectors(k,D);const P=U.dot(m[J])<0?-1:1;h.setXYZW(J,N.x,N.y,N.z,P)}for(let J=0,D=F.length;J<D;++J){const R=F[J],P=R.start,W=R.count;for(let X=P,ct=P+W;X<ct;X+=3)B(t.getX(X+0)),B(t.getX(X+1)),B(t.getX(X+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new et,c=new et,h=new et,d=new et,m=new et,p=new et,g=new et,v=new et;if(t)for(let S=0,y=t.count;S<y;S+=3){const E=t.getX(S+0),C=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,S=new p.constructor(m.length*g);let y=0,E=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*g;for(let _=0;_<g;_++)S[E++]=p[y++]}return new bi(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ri,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const S=p[g],y=t(S,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,S=p.length;v<S;v++){const y=p[v];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new qe,fr=new Md,rc=new Bo,R_=new et,sc=new et,oc=new et,lc=new et,fh=new et,cc=new et,C_=new et,uc=new et;class ea extends Dn{constructor(t=new ri,i=new Rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){cc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(fh.fromBufferAttribute(v,t),h?cc.addScaledVector(fh,g):cc.addScaledVector(fh.sub(i),g))}i.add(cc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rc.copy(r.boundingSphere),rc.applyMatrix4(c),fr.copy(t.ray).recast(t.near),!(rc.containsPoint(fr.origin)===!1&&(fr.intersectSphere(rc,R_)===null||fr.origin.distanceToSquared(R_)>(t.far-t.near)**2))&&(A_.copy(c).invert(),fr.copy(t.ray).applyMatrix4(A_),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,fr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const M=S[E],_=h[M.materialIndex],F=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=F,V=N;U<V;U+=3){const k=d.getX(U),B=d.getX(U+1),J=d.getX(U+2);l=fc(this,_,t,r,p,g,v,k,B,J),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=E,_=C;M<_;M+=3){const F=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=fc(this,h,t,r,p,g,v,F,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,C=S.length;E<C;E++){const M=S[E],_=h[M.materialIndex],F=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=F,V=N;U<V;U+=3){const k=U,B=U+1,J=U+2;l=fc(this,_,t,r,p,g,v,k,B,J),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=E,_=C;M<_;M+=3){const F=M,N=M+1,U=M+2;l=fc(this,h,t,r,p,g,v,F,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function fy(o,t,i,r,l,c,h,d){let m;if(t.side===Bn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===Va,d),m===null)return null;uc.copy(d),uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(uc);return p<i.near||p>i.far?null:{distance:p,point:uc.clone(),object:o}}function fc(o,t,i,r,l,c,h,d,m,p){o.getVertexPosition(d,sc),o.getVertexPosition(m,oc),o.getVertexPosition(p,lc);const g=fy(o,t,i,r,sc,oc,lc,C_);if(g){const v=new et;hi.getBarycoord(C_,sc,oc,lc,v),l&&(g.uv=hi.getInterpolatedAttribute(l,d,m,p,v,new re)),c&&(g.uv1=hi.getInterpolatedAttribute(c,d,m,p,v,new re)),h&&(g.normal=hi.getInterpolatedAttribute(h,d,m,p,v,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new et,materialIndex:0};hi.getNormal(sc,oc,lc,S.normal),g.face=S,g.barycoord=v}return g}class Io extends ri{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],v=[];let S=0,y=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new mi(p,3)),this.setAttribute("normal",new mi(g,3)),this.setAttribute("uv",new mi(v,2));function E(C,M,_,F,N,U,V,k,B,J,D){const R=U/B,P=V/J,W=U/2,X=V/2,ct=k/2,Y=B+1,O=J+1;let tt=0,H=0;const ht=new et;for(let w=0;w<O;w++){const j=w*P-X;for(let dt=0;dt<Y;dt++){const mt=dt*R-W;ht[C]=mt*F,ht[M]=j*N,ht[_]=ct,p.push(ht.x,ht.y,ht.z),ht[C]=0,ht[M]=0,ht[_]=k>0?1:-1,g.push(ht.x,ht.y,ht.z),v.push(dt/B),v.push(1-w/J),tt+=1}}for(let w=0;w<J;w++)for(let j=0;j<B;j++){const dt=S+j+Y*w,mt=S+j+Y*(w+1),K=S+(j+1)+Y*(w+1),ut=S+(j+1)+Y*w;m.push(dt,mt,ut),m.push(mt,K,ut),H+=6}d.addGroup(y,H,D),y+=H,S+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function wn(o){const t={};for(let i=0;i<o.length;i++){const r=ys(o[i]);for(const l in r)t[l]=r[l]}return t}function hy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Dv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const dy={clone:ys,merge:wn};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends Es{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=hy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Uv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ta}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const za=new et,w_=new re,D_=new re;class ai extends Uv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cd*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){za.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(za.x,za.y).multiplyScalar(-t/za.z),za.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(za.x,za.y).multiplyScalar(-t/za.z)}getViewSize(t,i){return this.getViewBounds(t,w_,D_),i.subVectors(D_,w_)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class gy extends Dn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(fs,hs,t,i);l.layers=this.layers,this.add(l);const c=new ai(fs,hs,t,i);c.layers=this.layers,this.add(c);const h=new ai(fs,hs,t,i);h.layers=this.layers,this.add(h);const d=new ai(fs,hs,t,i);d.layers=this.layers,this.add(d);const m=new ai(fs,hs,t,i);m.layers=this.layers,this.add(m);const p=new ai(fs,hs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ta)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,v=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,S,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Lv extends In{constructor(t=[],i=vs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _y extends Mr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Lv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ti}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Io(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Ha});c.uniforms.tEquirect.value=i;const h=new ea(l,c),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ti),new gy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Mi extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,E=.005;p.inputState.pinching&&S>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Mi;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Sy extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const dh=new et,xy=new et,yy=new oe;class mr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=dh.subVectors(r,i).cross(xy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(dh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||yy.getNormalMatrix(t),l=this.coplanarPoint(dh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Bo,hc=new et;class Nv{constructor(t=new mr,i=new mr,r=new mr,l=new mr,c=new mr,h=new mr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ta){const r=this.planes,l=t.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],S=l[7],y=l[8],E=l[9],C=l[10],M=l[11],_=l[12],F=l[13],N=l[14],U=l[15];if(r[0].setComponents(m-c,S-p,M-y,U-_).normalize(),r[1].setComponents(m+c,S+p,M+y,U+_).normalize(),r[2].setComponents(m+h,S+g,M+E,U+F).normalize(),r[3].setComponents(m-h,S-g,M-E,U-F).normalize(),r[4].setComponents(m-d,S-v,M-C,U-N).normalize(),i===ta)r[5].setComponents(m+d,S+v,M+C,U+N).normalize();else if(i===wc)r[5].setComponents(d,v,C,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(t){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hc.x=l.normal.x>0?t.max.x:t.min.x,hc.y=l.normal.y>0?t.max.y:t.min.y,hc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(hc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ud extends Es{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Uc=new et,Lc=new et,U_=new qe,bo=new Md,dc=new Bo,ph=new et,L_=new et;class N_ extends Dn{constructor(t=new ri,i=new ud){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Uc.fromBufferAttribute(i,l-1),Lc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Uc.distanceTo(Lc);t.setAttribute("lineDistance",new mi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(l),dc.radius+=c,t.ray.intersectsSphere(dc)===!1)return;U_.copy(l).invert(),bo.copy(t.ray).applyMatrix4(U_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const y=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let C=y,M=E-1;C<M;C+=p){const _=g.getX(C),F=g.getX(C+1),N=pc(this,t,bo,m,_,F,C);N&&i.push(N)}if(this.isLineLoop){const C=g.getX(E-1),M=g.getX(y),_=pc(this,t,bo,m,C,M,E-1);_&&i.push(_)}}else{const y=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let C=y,M=E-1;C<M;C+=p){const _=pc(this,t,bo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=pc(this,t,bo,m,E-1,y,E-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function pc(o,t,i,r,l,c,h){const d=o.geometry.attributes.position;if(Uc.fromBufferAttribute(d,l),Lc.fromBufferAttribute(d,c),i.distanceSqToSegment(Uc,Lc,ph,L_)>r)return;ph.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(ph);if(!(p<t.near||p>t.far))return{distance:p,point:L_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Ov extends Es{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const O_=new qe,fd=new Md,mc=new Bo,gc=new et;class My extends Dn{constructor(t=new ri,i=new Ov){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),mc.copy(r.boundingSphere),mc.applyMatrix4(l),mc.radius+=c,t.ray.intersectsSphere(mc)===!1)return;O_.copy(l).invert(),fd.copy(t.ray).applyMatrix4(O_);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,v=r.attributes.position;if(p!==null){const S=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let E=S,C=y;E<C;E++){const M=p.getX(E);gc.fromBufferAttribute(v,M),P_(gc,M,m,l,t,i,this)}}else{const S=Math.max(0,h.start),y=Math.min(v.count,h.start+h.count);for(let E=S,C=y;E<C;E++)gc.fromBufferAttribute(v,E),P_(gc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function P_(o,t,i,r,l,c,h){const d=fd.distanceSqToPoint(o);if(d<i){const m=new et;fd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Pv extends In{constructor(t,i,r=yr,l,c,h,d=pi,m=pi,p,g=Uo){if(g!==Uo&&g!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let h;i?h=i:h=t*r[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=r[l]-h,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,r[l]===h)return l/(c-1);const g=r[l],S=r[l+1]-g,y=(h-g)/S;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const h=this.getPoint(l),d=this.getPoint(c),m=i||(h.isVector2?new re:new et);return m.copy(d).sub(h).normalize(),m}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new et,l=[],c=[],h=[],d=new et,m=new qe;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new et)}c[0]=new et,h[0]=new et;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),S=Math.abs(l[0].z);g<=p&&(p=g,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),S<=p&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),h[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(_e(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(d,E))}h[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(_e(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),h[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zv extends Ai{constructor(t=0,i=0,r=1,l=1,c=0,h=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=h,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new re){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const h=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(h?c=0:c=l),this.aClockwise===!0&&!h&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),S=m-this.aX,y=p-this.aY;m=S*g-y*v+this.aX,p=S*v+y*g+this.aY}return r.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ey extends zv{constructor(t,i,r,l,c,h){super(t,i,r,r,l,c,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Ed(){let o=0,t=0,i=0,r=0;function l(c,h,d,m){o=c,t=d,i=-3*c+3*h-2*d-m,r=2*c-2*h+d+m}return{initCatmullRom:function(c,h,d,m,p){l(h,d,p*(d-c),p*(m-h))},initNonuniformCatmullRom:function(c,h,d,m,p,g,v){let S=(h-c)/p-(d-c)/(p+g)+(d-h)/g,y=(d-h)/g-(m-h)/(g+v)+(m-d)/v;S*=g,y*=g,l(h,d,S,y)},calc:function(c){const h=c*c,d=h*c;return o+t*c+i*h+r*d}}}const _c=new et,mh=new Ed,gh=new Ed,_h=new Ed;class Ty extends Ai{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new et){const r=i,l=this.points,c=l.length,h=(c-(this.closed?0:1))*t;let d=Math.floor(h),m=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:m===0&&d===c-1&&(d=c-2,m=1);let p,g;this.closed||d>0?p=l[(d-1)%c]:(_c.subVectors(l[0],l[1]).add(l[0]),p=_c);const v=l[d%c],S=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(_c.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=_c),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(v),y),C=Math.pow(v.distanceToSquared(S),y),M=Math.pow(S.distanceToSquared(g),y);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),mh.initNonuniformCatmullRom(p.x,v.x,S.x,g.x,E,C,M),gh.initNonuniformCatmullRom(p.y,v.y,S.y,g.y,E,C,M),_h.initNonuniformCatmullRom(p.z,v.z,S.z,g.z,E,C,M)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(p.x,v.x,S.x,g.x,this.tension),gh.initCatmullRom(p.y,v.y,S.y,g.y,this.tension),_h.initCatmullRom(p.z,v.z,S.z,g.z,this.tension));return r.set(mh.calc(m),gh.calc(m),_h.calc(m)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new et().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function z_(o,t,i,r,l){const c=(r-t)*.5,h=(l-i)*.5,d=o*o,m=o*d;return(2*i-2*r+c+h)*m+(-3*i+3*r-2*c-h)*d+c*o+i}function by(o,t){const i=1-o;return i*i*t}function Ay(o,t){return 2*(1-o)*o*t}function Ry(o,t){return o*o*t}function Ro(o,t,i,r){return by(o,t)+Ay(o,i)+Ry(o,r)}function Cy(o,t){const i=1-o;return i*i*i*t}function wy(o,t){const i=1-o;return 3*i*i*o*t}function Dy(o,t){return 3*(1-o)*o*o*t}function Uy(o,t){return o*o*o*t}function Co(o,t,i,r,l){return Cy(o,t)+wy(o,i)+Dy(o,r)+Uy(o,l)}class Ly extends Ai{constructor(t=new re,i=new re,r=new re,l=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new re){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Co(t,l.x,c.x,h.x,d.x),Co(t,l.y,c.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ny extends Ai{constructor(t=new et,i=new et,r=new et,l=new et){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new et){const r=i,l=this.v0,c=this.v1,h=this.v2,d=this.v3;return r.set(Co(t,l.x,c.x,h.x,d.x),Co(t,l.y,c.y,h.y,d.y),Co(t,l.z,c.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oy extends Ai{constructor(t=new re,i=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new re){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new re){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bv extends Ai{constructor(t=new et,i=new et){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new et){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new et){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Py extends Ai{constructor(t=new re,i=new re,r=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new re){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Ro(t,l.x,c.x,h.x),Ro(t,l.y,c.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zy extends Ai{constructor(t=new et,i=new et,r=new et){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new et){const r=i,l=this.v0,c=this.v1,h=this.v2;return r.set(Ro(t,l.x,c.x,h.x),Ro(t,l.y,c.y,h.y),Ro(t,l.z,c.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class By extends Ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new re){const r=i,l=this.points,c=(l.length-1)*t,h=Math.floor(c),d=c-h,m=l[h===0?h:h-1],p=l[h],g=l[h>l.length-2?l.length-1:h+1],v=l[h>l.length-3?l.length-1:h+2];return r.set(z_(d,m.x,p.x,g.x,v.x),z_(d,m.y,p.y,g.y,v.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new re().fromArray(l))}return this}}var B_=Object.freeze({__proto__:null,ArcCurve:Ey,CatmullRomCurve3:Ty,CubicBezierCurve:Ly,CubicBezierCurve3:Ny,EllipseCurve:zv,LineCurve:Oy,LineCurve3:Bv,QuadraticBezierCurve:Py,QuadraticBezierCurve3:zy,SplineCurve:By});class Iy extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new B_[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const h=l[c]-r,d=this.curves[c],m=d.getLength(),p=m===0?0:1-h/m;return d.getPointAt(p,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const h=c[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,m=h.getPoints(d);for(let p=0;p<m.length;p++){const g=m[p];r&&r.equals(g)||(i.push(g),r=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new B_[l.type]().fromJSON(l))}return this}}class Oc extends ri{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,S=i/m,y=[],E=[],C=[],M=[];for(let _=0;_<g;_++){const F=_*S-h;for(let N=0;N<p;N++){const U=N*v-c;E.push(U,-F,0),C.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let F=0;F<d;F++){const N=F+p*_,U=F+p*(_+1),V=F+1+p*(_+1),k=F+1+p*_;y.push(N,U,k),y.push(U,V,k)}this.setIndex(y),this.setAttribute("position",new mi(E,3)),this.setAttribute("normal",new mi(C,3)),this.setAttribute("uv",new mi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fy extends Es{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hy extends Es{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gy extends Uv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Vy extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function I_(o,t,i,r){const l=ky(r);switch(i){case mv:return o*t;case _v:return o*t;case vv:return o*t*2;case Sv:return o*t/l.components*l.byteLength;case vd:return o*t/l.components*l.byteLength;case xv:return o*t*2/l.components*l.byteLength;case Sd:return o*t*2/l.components*l.byteLength;case gv:return o*t*3/l.components*l.byteLength;case di:return o*t*4/l.components*l.byteLength;case xd:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:case Hh:return Math.max(o,16)*Math.max(t,8)/4;case Bh:case Fh:return Math.max(o,8)*Math.max(t,8)/2;case Gh:case Vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case $h:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case td:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ed:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case nd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case id:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bc:case ad:case rd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case yv:case sd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case od:case ld:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ky(o){switch(o){case ia:case hv:return{byteLength:1,components:1};case wo:case dv:case No:return{byteLength:2,components:1};case gd:case _d:return{byteLength:2,components:4};case yr:case md:case $i:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iv(){let o=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Xy(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,g);else{v.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<v.length;y++){const E=v[S],C=v[y];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++S,v[S]=C)}v.length=S+1;for(let y=0,E=v.length;y<E;y++){const C=v[y];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
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
#endif`,Yy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,Jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$y=`#ifdef USE_BATCHING
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
#endif`,tM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,rM=`#ifdef USE_BUMPMAP
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pM=`#define PI 3.141592653589793
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
} // validated`,mM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gM=`vec3 transformedNormal = objectNormal;
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
#endif`,_M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yM="gl_FragColor = linearToOutputTexel( gl_FragColor );",MM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LM=`#ifdef USE_GRADIENTMAP
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
}`,NM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zM=`uniform bool receiveShadow;
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
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VM=`PhysicalMaterial material;
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
#endif`,kM=`struct PhysicalMaterial {
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
}`,XM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tE=`#if defined( USE_POINTS_UV )
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
#endif`,eE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`#ifdef USE_MORPHTARGETS
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
#endif`,oE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dE=`#ifdef USE_NORMALMAP
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
#endif`,pE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_E=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ME=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wE=`float getShadowMask() {
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
}`,DE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,LE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NE=`#ifdef USE_SKINNING
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
#endif`,OE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`#include <common>
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
}`,jE=`#if DEPTH_PACKING == 3200
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
}`,JE=`#define DISTANCE
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
}`,$E=`#define DISTANCE
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
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
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
}`,iT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,rT=`uniform vec3 diffuse;
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
}`,sT=`#define LAMBERT
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
}`,oT=`#define LAMBERT
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
}`,lT=`#define MATCAP
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
}`,cT=`#define MATCAP
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
}`,uT=`#define NORMAL
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
}`,fT=`#define NORMAL
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
}`,hT=`#define PHONG
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
}`,dT=`#define PHONG
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
}`,pT=`#define STANDARD
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
}`,mT=`#define STANDARD
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
}`,gT=`#define TOON
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
}`,_T=`#define TOON
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
}`,vT=`uniform float size;
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
}`,ST=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,yT=`uniform vec3 color;
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
}`,MT=`uniform float rotation;
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
}`,ET=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:qy,alphahash_pars_fragment:Wy,alphamap_fragment:Yy,alphamap_pars_fragment:Zy,alphatest_fragment:Ky,alphatest_pars_fragment:Qy,aomap_fragment:jy,aomap_pars_fragment:Jy,batching_pars_vertex:$y,batching_vertex:tM,begin_vertex:eM,beginnormal_vertex:nM,bsdfs:iM,iridescence_fragment:aM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:cM,color_fragment:uM,color_pars_fragment:fM,color_pars_vertex:hM,color_vertex:dM,common:pM,cube_uv_reflection_fragment:mM,defaultnormal_vertex:gM,displacementmap_pars_vertex:_M,displacementmap_vertex:vM,emissivemap_fragment:SM,emissivemap_pars_fragment:xM,colorspace_fragment:yM,colorspace_pars_fragment:MM,envmap_fragment:EM,envmap_common_pars_fragment:TM,envmap_pars_fragment:bM,envmap_pars_vertex:AM,envmap_physical_pars_fragment:BM,envmap_vertex:RM,fog_vertex:CM,fog_pars_vertex:wM,fog_fragment:DM,fog_pars_fragment:UM,gradientmap_pars_fragment:LM,lightmap_pars_fragment:NM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:PM,lights_pars_begin:zM,lights_toon_fragment:IM,lights_toon_pars_fragment:FM,lights_phong_fragment:HM,lights_phong_pars_fragment:GM,lights_physical_fragment:VM,lights_physical_pars_fragment:kM,lights_fragment_begin:XM,lights_fragment_maps:qM,lights_fragment_end:WM,logdepthbuf_fragment:YM,logdepthbuf_pars_fragment:ZM,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:QM,map_fragment:jM,map_pars_fragment:JM,map_particle_fragment:$M,map_particle_pars_fragment:tE,metalnessmap_fragment:eE,metalnessmap_pars_fragment:nE,morphinstance_vertex:iE,morphcolor_vertex:aE,morphnormal_vertex:rE,morphtarget_pars_vertex:sE,morphtarget_vertex:oE,normal_fragment_begin:lE,normal_fragment_maps:cE,normal_pars_fragment:uE,normal_pars_vertex:fE,normal_vertex:hE,normalmap_pars_fragment:dE,clearcoat_normal_fragment_begin:pE,clearcoat_normal_fragment_maps:mE,clearcoat_pars_fragment:gE,iridescence_pars_fragment:_E,opaque_fragment:vE,packing:SE,premultiplied_alpha_fragment:xE,project_vertex:yE,dithering_fragment:ME,dithering_pars_fragment:EE,roughnessmap_fragment:TE,roughnessmap_pars_fragment:bE,shadowmap_pars_fragment:AE,shadowmap_pars_vertex:RE,shadowmap_vertex:CE,shadowmask_pars_fragment:wE,skinbase_vertex:DE,skinning_pars_vertex:UE,skinning_vertex:LE,skinnormal_vertex:NE,specularmap_fragment:OE,specularmap_pars_fragment:PE,tonemapping_fragment:zE,tonemapping_pars_fragment:BE,transmission_fragment:IE,transmission_pars_fragment:FE,uv_pars_fragment:HE,uv_pars_vertex:GE,uv_vertex:VE,worldpos_vertex:kE,background_vert:XE,background_frag:qE,backgroundCube_vert:WE,backgroundCube_frag:YE,cube_vert:ZE,cube_frag:KE,depth_vert:QE,depth_frag:jE,distanceRGBA_vert:JE,distanceRGBA_frag:$E,equirect_vert:tT,equirect_frag:eT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:aT,meshbasic_frag:rT,meshlambert_vert:sT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:fT,meshphong_vert:hT,meshphong_frag:dT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:_T,points_vert:vT,points_frag:ST,shadow_vert:xT,shadow_frag:yT,sprite_vert:MT,sprite_frag:ET},Ut={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ei={basic:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:wn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:wn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Te(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:wn([Ut.points,Ut.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:wn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:wn([Ut.common,Ut.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:wn([Ut.sprite,Ut.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:wn([Ut.common,Ut.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:wn([Ut.lights,Ut.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ei.physical={uniforms:wn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const vc={r:0,b:0,g:0},dr=new aa,TT=new qe;function bT(o,t,i,r,l,c,h){const d=new Te(0);let m=c===!0?0:1,p,g,v=null,S=0,y=null;function E(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function C(N){let U=!1;const V=E(N);V===null?_(d,m):V&&V.isColor&&(_(V,1),U=!0);const k=o.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,U){const V=E(U);V&&(V.isCubeTexture||V.mapping===Nc)?(g===void 0&&(g=new ea(new Io(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:ys(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,B,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),dr.copy(U.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(dr)),g.material.toneMapped=Ce.getTransfer(V.colorSpace)!==ze,(v!==V||S!==V.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,v=V,S=V.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new ea(new Oc(2,2),new ka({name:"BackgroundMaterial",uniforms:ys(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(V.colorSpace)!==ze,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||S!==V.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=V,S=V.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(vc,Dv(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,U,h)}function F(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:C,addToRenderList:M,dispose:F}}function AT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(R,P,W,X,ct){let Y=!1;const O=v(X,W,P);c!==O&&(c=O,p(c.object)),Y=y(R,X,W,ct),Y&&E(R,X,W,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,U(R,P,W,X),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function g(R){return o.deleteVertexArray(R)}function v(R,P,W){const X=W.wireframe===!0;let ct=r[R.id];ct===void 0&&(ct={},r[R.id]=ct);let Y=ct[P.id];Y===void 0&&(Y={},ct[P.id]=Y);let O=Y[X];return O===void 0&&(O=S(m()),Y[X]=O),O}function S(R){const P=[],W=[],X=[];for(let ct=0;ct<i;ct++)P[ct]=0,W[ct]=0,X[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:X,object:R,attributes:{},index:null}}function y(R,P,W,X){const ct=c.attributes,Y=P.attributes;let O=0;const tt=W.getAttributes();for(const H in tt)if(tt[H].location>=0){const w=ct[H];let j=Y[H];if(j===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(j=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(j=R.instanceColor)),w===void 0||w.attribute!==j||j&&w.data!==j.data)return!0;O++}return c.attributesNum!==O||c.index!==X}function E(R,P,W,X){const ct={},Y=P.attributes;let O=0;const tt=W.getAttributes();for(const H in tt)if(tt[H].location>=0){let w=Y[H];w===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(w=R.instanceColor));const j={};j.attribute=w,w&&w.data&&(j.data=w.data),ct[H]=j,O++}c.attributes=ct,c.attributesNum=O,c.index=X}function C(){const R=c.newAttributes;for(let P=0,W=R.length;P<W;P++)R[P]=0}function M(R){_(R,0)}function _(R,P){const W=c.newAttributes,X=c.enabledAttributes,ct=c.attributeDivisors;W[R]=1,X[R]===0&&(o.enableVertexAttribArray(R),X[R]=1),ct[R]!==P&&(o.vertexAttribDivisor(R,P),ct[R]=P)}function F(){const R=c.newAttributes,P=c.enabledAttributes;for(let W=0,X=P.length;W<X;W++)P[W]!==R[W]&&(o.disableVertexAttribArray(W),P[W]=0)}function N(R,P,W,X,ct,Y,O){O===!0?o.vertexAttribIPointer(R,P,W,ct,Y):o.vertexAttribPointer(R,P,W,X,ct,Y)}function U(R,P,W,X){C();const ct=X.attributes,Y=W.getAttributes(),O=P.defaultAttributeValues;for(const tt in Y){const H=Y[tt];if(H.location>=0){let ht=ct[tt];if(ht===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ht!==void 0){const w=ht.normalized,j=ht.itemSize,dt=t.get(ht);if(dt===void 0)continue;const mt=dt.buffer,K=dt.type,ut=dt.bytesPerElement,gt=K===o.INT||K===o.UNSIGNED_INT||ht.gpuType===md;if(ht.isInterleavedBufferAttribute){const Mt=ht.data,bt=Mt.stride,Qt=ht.offset;if(Mt.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)_(H.location+kt,Mt.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let kt=0;kt<H.locationSize;kt++)M(H.location+kt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let kt=0;kt<H.locationSize;kt++)N(H.location+kt,j/H.locationSize,K,w,bt*ut,(Qt+j/H.locationSize*kt)*ut,gt)}else{if(ht.isInstancedBufferAttribute){for(let Mt=0;Mt<H.locationSize;Mt++)_(H.location+Mt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Mt=0;Mt<H.locationSize;Mt++)M(H.location+Mt);o.bindBuffer(o.ARRAY_BUFFER,mt);for(let Mt=0;Mt<H.locationSize;Mt++)N(H.location+Mt,j/H.locationSize,K,w,j*ut,j/H.locationSize*Mt*ut,gt)}}else if(O!==void 0){const w=O[tt];if(w!==void 0)switch(w.length){case 2:o.vertexAttrib2fv(H.location,w);break;case 3:o.vertexAttrib3fv(H.location,w);break;case 4:o.vertexAttrib4fv(H.location,w);break;default:o.vertexAttrib1fv(H.location,w)}}}}F()}function V(){J();for(const R in r){const P=r[R];for(const W in P){const X=P[W];for(const ct in X)g(X[ct].object),delete X[ct];delete P[W]}delete r[R]}}function k(R){if(r[R.id]===void 0)return;const P=r[R.id];for(const W in P){const X=P[W];for(const ct in X)g(X[ct].object),delete X[ct];delete P[W]}delete r[R.id]}function B(R){for(const P in r){const W=r[P];if(W[R.id]===void 0)continue;const X=W[R.id];for(const ct in X)g(X[ct].object),delete X[ct];delete W[R.id]}}function J(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:F}}function RT(o,t,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(o.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function m(p,g,v,S){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,v);let E=0;for(let C=0;C<v;C++)E+=g[C]*S[C];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function CT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==di&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const J=B===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ia&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==$i&&!J)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),F=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,k=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:F,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:V,maxSamples:k}}function wT(o){const t=this;let i=null,r=0,l=!1,c=!1;const h=new mr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const E=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):p();else{const F=c?0:r,N=F*4;let U=_.clippingState||null;m.value=U,U=g(E,S,N,y);for(let V=0;V!==N;++V)U[V]=i[V];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,S,y,E){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const _=y+C*4,F=S.matrixWorldInverse;d.getNormalMatrix(F),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,U=y;N!==C;++N,U+=4)h.copy(v[N]).applyMatrix4(F,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function DT(o){let t=new WeakMap;function i(h,d){return d===Nh?h.mapping=vs:d===Oh&&(h.mapping=Ss),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nh||d===Oh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new _y(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ps=4,F_=[.125,.215,.35,.446,.526,.582],vr=20,vh=new Gy,H_=new Te;let Sh=null,xh=0,yh=0,Mh=!1;const gr=(1+Math.sqrt(5))/2,ds=1/gr,G_=[new et(-gr,ds,0),new et(gr,ds,0),new et(-ds,0,gr),new et(ds,0,gr),new et(0,gr,-ds),new et(0,gr,ds),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],UT=new et;class V_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=UT}=c;Sh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sh,xh,yh),this._renderer.xr.enabled=Mh,t.scissorTest=!1,Sc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===vs||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:No,format:di,colorSpace:xs,depthBuffer:!1},l=k_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=k_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LT(c)),this._blurMaterial=NT(c,t,i)}return l}_compileMaterial(t){const i=new ea(this._lodPlanes[0],t);this._renderer.compile(i,vh)}_sceneToCubeUV(t,i,r,l,c){const m=new ai(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(H_),v.toneMapping=Ga,v.autoClear=!1;const E=new Rv({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),C=new ea(new Io,E);let M=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,M=!0):(E.color.copy(H_),M=!0);for(let F=0;F<6;F++){const N=F%3;N===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[F],c.y,c.z)):N===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[F]));const U=this._cubeSize;Sc(l,N*U,F>2?U:0,U,U),v.setRenderTarget(l),M&&v.render(C,m),v.render(t,m)}C.geometry.dispose(),C.material.dispose(),v.toneMapping=y,v.autoClear=S,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===vs||t.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new ea(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Sc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,vh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=G_[(l-c-1)%G_.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ea(this._lodPlanes[l],p),S=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*vr-1),C=c/E,M=isFinite(c)?1+Math.floor(g*C):vr;M>vr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${vr}`);const _=[];let F=0;for(let B=0;B<vr;++B){const J=B/C,D=Math.exp(-J*J/2);_.push(D),B===0?F+=D:B<M&&(F+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/F;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=E,S.mipInt.value=N-r;const U=this._sizeLods[l],V=3*U*(l>N-ps?l-N+ps:0),k=4*(this._cubeSize-U);Sc(i,V,k,3*U,2*U),m.setRenderTarget(i),m.render(v,vh)}}function LT(o){const t=[],i=[],r=[];let l=o;const c=o-ps+1+F_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-ps?m=F_[h-o+ps-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,C=3,M=2,_=1,F=new Float32Array(C*E*y),N=new Float32Array(M*E*y),U=new Float32Array(_*E*y);for(let k=0;k<y;k++){const B=k%3*2/3-1,J=k>2?0:-1,D=[B,J,0,B+2/3,J,0,B+2/3,J+1,0,B,J,0,B+2/3,J+1,0,B,J+1,0];F.set(D,C*E*k),N.set(S,M*E*k);const R=[k,k,k,k,k,k];U.set(R,_*E*k)}const V=new ri;V.setAttribute("position",new bi(F,C)),V.setAttribute("uv",new bi(N,M)),V.setAttribute("faceIndex",new bi(U,_)),t.push(V),l>ps&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function k_(o,t,i){const r=new Mr(o,t,i);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Sc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function NT(o,t,i){const r=new Float32Array(vr),l=new et(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function X_(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function q_(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function OT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Nh||m===Oh,g=m===vs||m===Ss;if(p||g){let v=t.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new V_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function PT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ac("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function zT(o,t,i,r){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&t.remove(S.index);for(const E in S.attributes)t.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(v){const S=v.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(v){const S=[],y=v.index,E=v.attributes.position;let C=0;if(y!==null){const F=y.array;C=y.version;for(let N=0,U=F.length;N<U;N+=3){const V=F[N+0],k=F[N+1],B=F[N+2];S.push(V,k,k,B,B,V)}}else if(E!==void 0){const F=E.array;C=E.version;for(let N=0,U=F.length/3-1;N<U;N+=3){const V=N+0,k=N+1,B=N+2;S.push(V,k,k,B,B,V)}}else return;const M=new(Ev(S)?wv:Cv)(S,1);M.version=C;const _=c.get(v);_&&t.remove(_),c.set(v,M)}function g(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function BT(o,t,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,y){o.drawElements(r,y,c,S*h),i.update(y,r,1)}function p(S,y,E){E!==0&&(o.drawElementsInstanced(r,y,c,S*h,E),i.update(y,r,E))}function g(S,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,r,1)}function v(S,y,E,C){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,C,0,E);let _=0;for(let F=0;F<E;F++)_+=y[F]*C[F];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function IT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function FT(o,t,i){const r=new WeakMap,l=new Je;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let R=function(){J.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],F=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let V=d.attributes.position.count*U,k=1;V>t.maxTextureSize&&(k=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const B=new Float32Array(V*k*4*v),J=new Tv(B,V,k,v);J.type=$i,J.needsUpdate=!0;const D=U*4;for(let P=0;P<v;P++){const W=_[P],X=F[P],ct=N[P],Y=V*k*4*P;for(let O=0;O<W.count;O++){const tt=O*D;E===!0&&(l.fromBufferAttribute(W,O),B[Y+tt+0]=l.x,B[Y+tt+1]=l.y,B[Y+tt+2]=l.z,B[Y+tt+3]=0),C===!0&&(l.fromBufferAttribute(X,O),B[Y+tt+4]=l.x,B[Y+tt+5]=l.y,B[Y+tt+6]=l.z,B[Y+tt+7]=0),M===!0&&(l.fromBufferAttribute(ct,O),B[Y+tt+8]=l.x,B[Y+tt+9]=l.y,B[Y+tt+10]=l.z,B[Y+tt+11]=ct.itemSize===4?l.w:1)}}S={count:v,texture:J,size:new re(V,k)},r.set(d,S),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function HT(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Fv=new In,W_=new Pv(1,1),Hv=new Tv,Gv=new ty,Vv=new Lv,Y_=[],Z_=[],K_=new Float32Array(16),Q_=new Float32Array(9),j_=new Float32Array(4);function Ts(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=Y_[l];if(c===void 0&&(c=new Float32Array(l),Y_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function cn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function un(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Pc(o,t){let i=Z_[t];i===void 0&&(i=new Int32Array(t),Z_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function GT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function VT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2fv(this.addr,t),un(i,t)}}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(cn(i,t))return;o.uniform3fv(this.addr,t),un(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4fv(this.addr,t),un(i,t)}}function qT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;j_.set(r),o.uniformMatrix2fv(this.addr,!1,j_),un(i,r)}}function WT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;Q_.set(r),o.uniformMatrix3fv(this.addr,!1,Q_),un(i,r)}}function YT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(cn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),un(i,t)}else{if(cn(i,r))return;K_.set(r),o.uniformMatrix4fv(this.addr,!1,K_),un(i,r)}}function ZT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function KT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2iv(this.addr,t),un(i,t)}}function QT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3iv(this.addr,t),un(i,t)}}function jT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4iv(this.addr,t),un(i,t)}}function JT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function $T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(cn(i,t))return;o.uniform2uiv(this.addr,t),un(i,t)}}function tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(cn(i,t))return;o.uniform3uiv(this.addr,t),un(i,t)}}function eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(cn(i,t))return;o.uniform4uiv(this.addr,t),un(i,t)}}function nb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(W_.compareFunction=Mv,c=W_):c=Fv,i.setTexture2D(t||c,l)}function ib(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Gv,l)}function ab(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Vv,l)}function rb(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Hv,l)}function sb(o){switch(o){case 5126:return GT;case 35664:return VT;case 35665:return kT;case 35666:return XT;case 35674:return qT;case 35675:return WT;case 35676:return YT;case 5124:case 35670:return ZT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return jT;case 5125:return JT;case 36294:return $T;case 36295:return tb;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return rb}}function ob(o,t){o.uniform1fv(this.addr,t)}function lb(o,t){const i=Ts(t,this.size,2);o.uniform2fv(this.addr,i)}function cb(o,t){const i=Ts(t,this.size,3);o.uniform3fv(this.addr,i)}function ub(o,t){const i=Ts(t,this.size,4);o.uniform4fv(this.addr,i)}function fb(o,t){const i=Ts(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function hb(o,t){const i=Ts(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function db(o,t){const i=Ts(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function pb(o,t){o.uniform1iv(this.addr,t)}function mb(o,t){o.uniform2iv(this.addr,t)}function gb(o,t){o.uniform3iv(this.addr,t)}function _b(o,t){o.uniform4iv(this.addr,t)}function vb(o,t){o.uniform1uiv(this.addr,t)}function Sb(o,t){o.uniform2uiv(this.addr,t)}function xb(o,t){o.uniform3uiv(this.addr,t)}function yb(o,t){o.uniform4uiv(this.addr,t)}function Mb(o,t,i){const r=this.cache,l=t.length,c=Pc(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Fv,c[h])}function Eb(o,t,i){const r=this.cache,l=t.length,c=Pc(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Gv,c[h])}function Tb(o,t,i){const r=this.cache,l=t.length,c=Pc(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Vv,c[h])}function bb(o,t,i){const r=this.cache,l=t.length,c=Pc(i,l);cn(r,c)||(o.uniform1iv(this.addr,c),un(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Hv,c[h])}function Ab(o){switch(o){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return fb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return _b;case 5125:return vb;case 36294:return Sb;case 36295:return xb;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return bb}}class Rb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=sb(i.type)}}class Cb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Ab(i.type)}}class wb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function J_(o,t){o.seq.push(t),o.map[t.id]=t}function Db(o,t,i){const r=o.name,l=r.length;for(Eh.lastIndex=0;;){const c=Eh.exec(r),h=Eh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){J_(i,p===void 0?new Rb(d,o,t):new Cb(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new wb(d),J_(i,v)),i=v}}}class Rc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Db(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function $_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const Ub=37297;let Lb=0;function Nb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const tv=new oe;function Ob(o){Ce._getMatrix(tv,Ce.workingColorSpace,o);const t=`mat3( ${tv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Cc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ev(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Nb(o.getShaderSource(t),h)}else return l}function Pb(o,t){const i=Ob(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function zb(o,t){let i;switch(t){case bx:i="Linear";break;case Ax:i="Reinhard";break;case Rx:i="Cineon";break;case Cx:i="ACESFilmic";break;case Dx:i="AgX";break;case Ux:i="Neutral";break;case wx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const xc=new et;function Bb(){Ce.getLuminanceCoefficients(xc);const o=xc.x.toFixed(4),t=xc.y.toFixed(4),i=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ib(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function Fb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Hb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ao(o){return o!==""}function nv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hd(o){return o.replace(Gb,kb)}const Vb=new Map;function kb(o,t){let i=ue[t];if(i===void 0){const r=Vb.get(t);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return hd(i)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function av(o){return o.replace(Xb,qb)}function qb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function rv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===cv?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ax?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function Yb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vs:case Ss:t="ENVMAP_TYPE_CUBE";break;case Nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ss:t="ENVMAP_MODE_REFRACTION";break}return t}function Kb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case uv:t="ENVMAP_BLENDING_MULTIPLY";break;case Ex:t="ENVMAP_BLENDING_MIX";break;case Tx:t="ENVMAP_BLENDING_ADD";break}return t}function Qb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function jb(o,t,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=Wb(i),p=Yb(i),g=Zb(i),v=Kb(i),S=Qb(i),y=Ib(i),E=Fb(c),C=l.createProgram();let M,_,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ao).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(M=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[rv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ga?"#define TONE_MAPPING":"",i.toneMapping!==Ga?ue.tonemapping_pars_fragment:"",i.toneMapping!==Ga?zb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Pb("linearToOutputTexel",i.outputColorSpace),Bb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ao).join(`
`)),h=hd(h),h=nv(h,i),h=iv(h,i),d=hd(d),d=nv(d,i),d=iv(d,i),h=av(h),d=av(d),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=F+M+h,U=F+_+d,V=$_(l,l.VERTEX_SHADER,N),k=$_(l,l.FRAGMENT_SHADER,U);l.attachShader(C,V),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(P){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(C).trim(),X=l.getShaderInfoLog(V).trim(),ct=l.getShaderInfoLog(k).trim();let Y=!0,O=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,k);else{const tt=ev(l,V,"vertex"),H=ev(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+tt+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||ct==="")&&(O=!1);O&&(P.diagnostics={runnable:Y,programLog:W,vertexShader:{log:X,prefix:M},fragmentShader:{log:ct,prefix:_}})}l.deleteShader(V),l.deleteShader(k),J=new Rc(l,C),D=Hb(l,C)}let J;this.getUniforms=function(){return J===void 0&&B(this),J};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,Ub)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Lb++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=k,this}let Jb=0;class $b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new tA(t),i.set(t,r)),r}}class tA{constructor(t){this.id=Jb++,this.code=t,this.usedTimes=0}}function eA(o,t,i,r,l,c,h){const d=new bv,m=new $b,p=new Set,g=[],v=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,P,W,X){const ct=W.fog,Y=X.geometry,O=D.isMeshStandardMaterial?W.environment:null,tt=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),H=tt&&tt.mapping===Nc?tt.image.height:null,ht=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const w=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,j=w!==void 0?w.length:0;let dt=0;Y.morphAttributes.position!==void 0&&(dt=1),Y.morphAttributes.normal!==void 0&&(dt=2),Y.morphAttributes.color!==void 0&&(dt=3);let mt,K,ut,gt;if(ht){const be=Ei[ht];mt=be.vertexShader,K=be.fragmentShader}else mt=D.vertexShader,K=D.fragmentShader,m.update(D),ut=m.getVertexShaderID(D),gt=m.getFragmentShaderID(D);const Mt=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Qt=X.isInstancedMesh===!0,kt=X.isBatchedMesh===!0,le=!!D.map,ce=!!D.matcap,Vt=!!tt,I=!!D.aoMap,Ke=!!D.lightMap,ie=!!D.bumpMap,Zt=!!D.normalMap,It=!!D.displacementMap,ve=!!D.emissiveMap,Ft=!!D.metalnessMap,L=!!D.roughnessMap,T=D.anisotropy>0,at=D.clearcoat>0,yt=D.dispersion>0,Et=D.iridescence>0,_t=D.sheen>0,zt=D.transmission>0,Rt=T&&!!D.anisotropyMap,Ct=at&&!!D.clearcoatMap,Se=at&&!!D.clearcoatNormalMap,At=at&&!!D.clearcoatRoughnessMap,Ht=Et&&!!D.iridescenceMap,Kt=Et&&!!D.iridescenceThicknessMap,Jt=_t&&!!D.sheenColorMap,Ot=_t&&!!D.sheenRoughnessMap,fe=!!D.specularMap,ne=!!D.specularColorMap,Le=!!D.specularIntensityMap,q=zt&&!!D.transmissionMap,Lt=zt&&!!D.thicknessMap,ft=!!D.gradientMap,St=!!D.alphaMap,Pt=D.alphaTest>0,Nt=!!D.alphaHash,ae=!!D.extensions;let Fe=Ga;D.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Fe=o.toneMapping);const $e={shaderID:ht,shaderType:D.type,shaderName:D.name,vertexShader:mt,fragmentShader:K,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:gt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:kt,batchingColor:kt&&X._colorsTexture!==null,instancing:Qt,instancingColor:Qt&&X.instanceColor!==null,instancingMorph:Qt&&X.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:Mt===null?o.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:xs,alphaToCoverage:!!D.alphaToCoverage,map:le,matcap:ce,envMap:Vt,envMapMode:Vt&&tt.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Ke,bumpMap:ie,normalMap:Zt,displacementMap:S&&It,emissiveMap:ve,normalMapObjectSpace:Zt&&D.normalMapType===zx,normalMapTangentSpace:Zt&&D.normalMapType===Px,metalnessMap:Ft,roughnessMap:L,anisotropy:T,anisotropyMap:Rt,clearcoat:at,clearcoatMap:Ct,clearcoatNormalMap:Se,clearcoatRoughnessMap:At,dispersion:yt,iridescence:Et,iridescenceMap:Ht,iridescenceThicknessMap:Kt,sheen:_t,sheenColorMap:Jt,sheenRoughnessMap:Ot,specularMap:fe,specularColorMap:ne,specularIntensityMap:Le,transmission:zt,transmissionMap:q,thicknessMap:Lt,gradientMap:ft,opaque:D.transparent===!1&&D.blending===ms&&D.alphaToCoverage===!1,alphaMap:St,alphaTest:Pt,alphaHash:Nt,combine:D.combine,mapUv:le&&C(D.map.channel),aoMapUv:I&&C(D.aoMap.channel),lightMapUv:Ke&&C(D.lightMap.channel),bumpMapUv:ie&&C(D.bumpMap.channel),normalMapUv:Zt&&C(D.normalMap.channel),displacementMapUv:It&&C(D.displacementMap.channel),emissiveMapUv:ve&&C(D.emissiveMap.channel),metalnessMapUv:Ft&&C(D.metalnessMap.channel),roughnessMapUv:L&&C(D.roughnessMap.channel),anisotropyMapUv:Rt&&C(D.anisotropyMap.channel),clearcoatMapUv:Ct&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Se&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&C(D.sheenRoughnessMap.channel),specularMapUv:fe&&C(D.specularMap.channel),specularColorMapUv:ne&&C(D.specularColorMap.channel),specularIntensityMapUv:Le&&C(D.specularIntensityMap.channel),transmissionMapUv:q&&C(D.transmissionMap.channel),thicknessMapUv:Lt&&C(D.thicknessMap.channel),alphaMapUv:St&&C(D.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Zt||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Y.attributes.uv&&(le||St),fog:!!ct,useFog:D.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:bt,skinning:X.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:dt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:Fe,decodeVideoTexture:le&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===ze,decodeVideoTextureEmissive:ve&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===ze,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ji,flipSided:D.side===Bn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ae&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&D.extensions.multiDraw===!0||kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return $e.vertexUv1s=p.has(1),$e.vertexUv2s=p.has(2),$e.vertexUv3s=p.has(3),p.clear(),$e}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const P in D.defines)R.push(P),R.push(D.defines[P]);return D.isRawShaderMaterial===!1&&(F(R,D),N(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function F(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function N(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const R=E[D.type];let P;if(R){const W=Ei[R];P=dy.clone(W.uniforms)}else P=D.uniforms;return P}function V(D,R){let P;for(let W=0,X=g.length;W<X;W++){const ct=g[W];if(ct.cacheKey===R){P=ct,++P.usedTimes;break}}return P===void 0&&(P=new jb(o,R,D,c),g.push(P)),P}function k(D){if(--D.usedTimes===0){const R=g.indexOf(D);g[R]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function J(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:V,releaseProgram:k,releaseShaderCache:B,programs:g,dispose:J}}function nA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function iA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function sv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ov(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,E,C,M){let _=o[t];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:E,renderOrder:v.renderOrder,z:C,group:M},o[t]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=C,_.group=M),t++,_}function d(v,S,y,E,C,M){const _=h(v,S,y,E,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,S,y,E,C,M){const _=h(v,S,y,E,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,S){i.length>1&&i.sort(v||iA),r.length>1&&r.sort(S||sv),l.length>1&&l.sort(S||sv)}function g(){for(let v=t,S=o.length;v<S;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function aA(){let o=new WeakMap;function t(r,l){const c=o.get(r);let h;return c===void 0?(h=new ov,o.set(r,[h])):l>=c.length?(h=new ov,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function rA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Te};break;case"SpotLight":i={position:new et,direction:new et,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function sA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let oA=0;function lA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function cA(o){const t=new rA,i=sA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new qe,h=new qe;function d(p){let g=0,v=0,S=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,E=0,C=0,M=0,_=0,F=0,N=0,U=0,V=0,k=0,B=0;p.sort(lA);for(let D=0,R=p.length;D<R;D++){const P=p[D],W=P.color,X=P.intensity,ct=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)g+=W.r*X,v+=W.g*X,S+=W.b*X;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],X);B++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,H=i.get(P);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=P.shadow.matrix,F++}r.directional[y]=O,y++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(W).multiplyScalar(X),O.distance=ct,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[C]=O;const tt=P.shadow;if(P.map&&(r.spotLightMap[V]=P.map,V++,tt.updateMatrices(P),P.castShadow&&k++),r.spotLightMatrix[C]=tt.matrix,P.castShadow){const H=i.get(P);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,r.spotShadow[C]=H,r.spotShadowMap[C]=Y,U++}C++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(W).multiplyScalar(X),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[M]=O,M++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const tt=P.shadow,H=i.get(P);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=Y,r.pointShadowMatrix[E]=P.shadow.matrix,N++}r.point[E]=O,E++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(X),O.groundColor.copy(P.groundColor).multiplyScalar(X),r.hemi[_]=O,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const J=r.hash;(J.directionalLength!==y||J.pointLength!==E||J.spotLength!==C||J.rectAreaLength!==M||J.hemiLength!==_||J.numDirectionalShadows!==F||J.numPointShadows!==N||J.numSpotShadows!==U||J.numSpotMaps!==V||J.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+V-k,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=B,J.directionalLength=y,J.pointLength=E,J.spotLength=C,J.rectAreaLength=M,J.hemiLength=_,J.numDirectionalShadows=F,J.numPointShadows=N,J.numSpotShadows=U,J.numSpotMaps=V,J.numLightProbes=B,r.version=oA++)}function m(p,g){let v=0,S=0,y=0,E=0,C=0;const M=g.matrixWorldInverse;for(let _=0,F=p.length;_<F;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),v++}else if(N.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),S++}else if(N.isHemisphereLight){const U=r.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function lv(o){const t=new cA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function uA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new lv(o),t.set(l,[d])):c>=h.length?(d=new lv(o),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
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
}`;function dA(o,t,i){let r=new Nv;const l=new re,c=new re,h=new Je,d=new Fy({depthPacking:Ox}),m=new Hy,p={},g=i.maxTextureSize,v={[Va]:Bn,[Bn]:Va,[Ji]:Ji},S=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:fA,fragmentShader:hA}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new ri;E.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ea(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cv;let _=this.type;this.render=function(k,B,J){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||k.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Ha),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=_!==ji&&this.type===ji,ct=_===ji&&this.type!==ji;for(let Y=0,O=k.length;Y<O;Y++){const tt=k[Y],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ht=H.getFrameExtents();if(l.multiply(ht),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ht.x),l.x=c.x*ht.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ht.y),l.y=c.y*ht.y,H.mapSize.y=c.y)),H.map===null||X===!0||ct===!0){const j=this.type!==ji?{minFilter:pi,magFilter:pi}:{};H.map!==null&&H.map.dispose(),H.map=new Mr(l.x,l.y,j),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const w=H.getViewportCount();for(let j=0;j<w;j++){const dt=H.getViewport(j);h.set(c.x*dt.x,c.y*dt.y,c.x*dt.z,c.y*dt.w),W.viewport(h),H.updateMatrices(tt,j),r=H.getFrustum(),U(B,J,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===ji&&F(H,J),H.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,P)};function F(k,B){const J=t.update(C);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,y.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Mr(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,o.setRenderTarget(k.mapPass),o.clear(),o.renderBufferDirect(B,null,J,S,C,null),y.uniforms.shadow_pass.value=k.mapPass.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,o.setRenderTarget(k.map),o.clear(),o.renderBufferDirect(B,null,J,y,C,null)}function N(k,B,J,D){let R=null;const P=J.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(P!==void 0)R=P;else if(R=J.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const W=R.uuid,X=B.uuid;let ct=p[W];ct===void 0&&(ct={},p[W]=ct);let Y=ct[X];Y===void 0&&(Y=R.clone(),ct[X]=Y,B.addEventListener("dispose",V)),R=Y}if(R.visible=B.visible,R.wireframe=B.wireframe,D===ji?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:v[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,J.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const W=o.properties.get(R);W.light=J}return R}function U(k,B,J,D,R){if(k.visible===!1)return;if(k.layers.test(B.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===ji)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,k.matrixWorld);const X=t.update(k),ct=k.material;if(Array.isArray(ct)){const Y=X.groups;for(let O=0,tt=Y.length;O<tt;O++){const H=Y[O],ht=ct[H.materialIndex];if(ht&&ht.visible){const w=N(k,ht,D,R);k.onBeforeShadow(o,k,B,J,X,w,H),o.renderBufferDirect(J,null,X,w,k,H),k.onAfterShadow(o,k,B,J,X,w,H)}}}else if(ct.visible){const Y=N(k,ct,D,R);k.onBeforeShadow(o,k,B,J,X,Y,null),o.renderBufferDirect(J,null,X,Y,k,null),k.onAfterShadow(o,k,B,J,X,Y,null)}}const W=k.children;for(let X=0,ct=W.length;X<ct;X++)U(W[X],B,J,D,R)}function V(k){k.target.removeEventListener("dispose",V);for(const J in p){const D=p[J],R=k.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const pA={[Ah]:Rh,[Ch]:Uh,[wh]:Lh,[_s]:Dh,[Rh]:Ah,[Uh]:Ch,[Lh]:wh,[Dh]:_s};function mA(o,t){function i(){let q=!1;const Lt=new Je;let ft=null;const St=new Je(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!q&&(o.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){q=Pt},setClear:function(Pt,Nt,ae,Fe,$e){$e===!0&&(Pt*=Fe,Nt*=Fe,ae*=Fe),Lt.set(Pt,Nt,ae,Fe),St.equals(Lt)===!1&&(o.clearColor(Pt,Nt,ae,Fe),St.copy(Lt))},reset:function(){q=!1,ft=null,St.set(-1,0,0,0)}}}function r(){let q=!1,Lt=!1,ft=null,St=null,Pt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ae=t.get("EXT_clip_control");Nt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const Fe=Pt;Pt=null,this.setClear(Fe)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?Mt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Nt){ft!==Nt&&!q&&(o.depthMask(Nt),ft=Nt)},setFunc:function(Nt){if(Lt&&(Nt=pA[Nt]),St!==Nt){switch(Nt){case Ah:o.depthFunc(o.NEVER);break;case Rh:o.depthFunc(o.ALWAYS);break;case Ch:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case wh:o.depthFunc(o.EQUAL);break;case Dh:o.depthFunc(o.GEQUAL);break;case Uh:o.depthFunc(o.GREATER);break;case Lh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}St=Nt}},setLocked:function(Nt){q=Nt},setClear:function(Nt){Pt!==Nt&&(Lt&&(Nt=1-Nt),o.clearDepth(Nt),Pt=Nt)},reset:function(){q=!1,ft=null,St=null,Pt=null,Lt=!1}}}function l(){let q=!1,Lt=null,ft=null,St=null,Pt=null,Nt=null,ae=null,Fe=null,$e=null;return{setTest:function(be){q||(be?Mt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(be){Lt!==be&&!q&&(o.stencilMask(be),Lt=be)},setFunc:function(be,Fn,fn){(ft!==be||St!==Fn||Pt!==fn)&&(o.stencilFunc(be,Fn,fn),ft=be,St=Fn,Pt=fn)},setOp:function(be,Fn,fn){(Nt!==be||ae!==Fn||Fe!==fn)&&(o.stencilOp(be,Fn,fn),Nt=be,ae=Fn,Fe=fn)},setLocked:function(be){q=be},setClear:function(be){$e!==be&&(o.clearStencil(be),$e=be)},reset:function(){q=!1,Lt=null,ft=null,St=null,Pt=null,Nt=null,ae=null,Fe=null,$e=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},S=new WeakMap,y=[],E=null,C=!1,M=null,_=null,F=null,N=null,U=null,V=null,k=null,B=new Te(0,0,0),J=0,D=!1,R=null,P=null,W=null,X=null,ct=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,tt=0;const H=o.getParameter(o.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=tt>=2);let ht=null,w={};const j=o.getParameter(o.SCISSOR_BOX),dt=o.getParameter(o.VIEWPORT),mt=new Je().fromArray(j),K=new Je().fromArray(dt);function ut(q,Lt,ft,St){const Pt=new Uint8Array(4),Nt=o.createTexture();o.bindTexture(q,Nt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<ft;ae++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,St,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Lt+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Nt}const gt={};gt[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),gt[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),gt[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Mt(o.DEPTH_TEST),h.setFunc(_s),ie(!1),Zt(o_),Mt(o.CULL_FACE),I(Ha);function Mt(q){g[q]!==!0&&(o.enable(q),g[q]=!0)}function bt(q){g[q]!==!1&&(o.disable(q),g[q]=!1)}function Qt(q,Lt){return v[q]!==Lt?(o.bindFramebuffer(q,Lt),v[q]=Lt,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Lt),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function kt(q,Lt){let ft=y,St=!1;if(q){ft=S.get(Lt),ft===void 0&&(ft=[],S.set(Lt,ft));const Pt=q.textures;if(ft.length!==Pt.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let Nt=0,ae=Pt.length;Nt<ae;Nt++)ft[Nt]=o.COLOR_ATTACHMENT0+Nt;ft.length=Pt.length,St=!0}}else ft[0]!==o.BACK&&(ft[0]=o.BACK,St=!0);St&&o.drawBuffers(ft)}function le(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const ce={[_r]:o.FUNC_ADD,[sx]:o.FUNC_SUBTRACT,[ox]:o.FUNC_REVERSE_SUBTRACT};ce[lx]=o.MIN,ce[cx]=o.MAX;const Vt={[ux]:o.ZERO,[fx]:o.ONE,[hx]:o.SRC_COLOR,[Th]:o.SRC_ALPHA,[vx]:o.SRC_ALPHA_SATURATE,[gx]:o.DST_COLOR,[px]:o.DST_ALPHA,[dx]:o.ONE_MINUS_SRC_COLOR,[bh]:o.ONE_MINUS_SRC_ALPHA,[_x]:o.ONE_MINUS_DST_COLOR,[mx]:o.ONE_MINUS_DST_ALPHA,[Sx]:o.CONSTANT_COLOR,[xx]:o.ONE_MINUS_CONSTANT_COLOR,[yx]:o.CONSTANT_ALPHA,[Mx]:o.ONE_MINUS_CONSTANT_ALPHA};function I(q,Lt,ft,St,Pt,Nt,ae,Fe,$e,be){if(q===Ha){C===!0&&(bt(o.BLEND),C=!1);return}if(C===!1&&(Mt(o.BLEND),C=!0),q!==rx){if(q!==M||be!==D){if((_!==_r||U!==_r)&&(o.blendEquation(o.FUNC_ADD),_=_r,U=_r),be)switch(q){case ms:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case l_:o.blendFunc(o.ONE,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case u_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ms:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case l_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case c_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case u_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}F=null,N=null,V=null,k=null,B.set(0,0,0),J=0,M=q,D=be}return}Pt=Pt||Lt,Nt=Nt||ft,ae=ae||St,(Lt!==_||Pt!==U)&&(o.blendEquationSeparate(ce[Lt],ce[Pt]),_=Lt,U=Pt),(ft!==F||St!==N||Nt!==V||ae!==k)&&(o.blendFuncSeparate(Vt[ft],Vt[St],Vt[Nt],Vt[ae]),F=ft,N=St,V=Nt,k=ae),(Fe.equals(B)===!1||$e!==J)&&(o.blendColor(Fe.r,Fe.g,Fe.b,$e),B.copy(Fe),J=$e),M=q,D=!1}function Ke(q,Lt){q.side===Ji?bt(o.CULL_FACE):Mt(o.CULL_FACE);let ft=q.side===Bn;Lt&&(ft=!ft),ie(ft),q.blending===ms&&q.transparent===!1?I(Ha):I(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const St=q.stencilWrite;d.setTest(St),St&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ve(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Mt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(q){R!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),R=q)}function Zt(q){q!==nx?(Mt(o.CULL_FACE),q!==P&&(q===o_?o.cullFace(o.BACK):q===ix?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),P=q}function It(q){q!==W&&(O&&o.lineWidth(q),W=q)}function ve(q,Lt,ft){q?(Mt(o.POLYGON_OFFSET_FILL),(X!==Lt||ct!==ft)&&(o.polygonOffset(Lt,ft),X=Lt,ct=ft)):bt(o.POLYGON_OFFSET_FILL)}function Ft(q){q?Mt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function L(q){q===void 0&&(q=o.TEXTURE0+Y-1),ht!==q&&(o.activeTexture(q),ht=q)}function T(q,Lt,ft){ft===void 0&&(ht===null?ft=o.TEXTURE0+Y-1:ft=ht);let St=w[ft];St===void 0&&(St={type:void 0,texture:void 0},w[ft]=St),(St.type!==q||St.texture!==Lt)&&(ht!==ft&&(o.activeTexture(ft),ht=ft),o.bindTexture(q,Lt||gt[q]),St.type=q,St.texture=Lt)}function at(){const q=w[ht];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function yt(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Et(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function zt(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Se(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Jt(q){mt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),mt.copy(q))}function Ot(q){K.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),K.copy(q))}function fe(q,Lt){let ft=p.get(Lt);ft===void 0&&(ft=new WeakMap,p.set(Lt,ft));let St=ft.get(q);St===void 0&&(St=o.getUniformBlockIndex(Lt,q.name),ft.set(q,St))}function ne(q,Lt){const St=p.get(Lt).get(q);m.get(Lt)!==St&&(o.uniformBlockBinding(Lt,St,q.__bindingPointIndex),m.set(Lt,St))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ht=null,w={},v={},S=new WeakMap,y=[],E=null,C=!1,M=null,_=null,F=null,N=null,U=null,V=null,k=null,B=new Te(0,0,0),J=0,D=!1,R=null,P=null,W=null,X=null,ct=null,mt.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Mt,disable:bt,bindFramebuffer:Qt,drawBuffers:kt,useProgram:le,setBlending:I,setMaterial:Ke,setFlipSided:ie,setCullFace:Zt,setLineWidth:It,setPolygonOffset:ve,setScissorTest:Ft,activeTexture:L,bindTexture:T,unbindTexture:at,compressedTexImage2D:yt,compressedTexImage3D:Et,texImage2D:Ht,texImage3D:Kt,updateUBOMapping:fe,uniformBlockBinding:ne,texStorage2D:Se,texStorage3D:At,texSubImage2D:_t,texSubImage3D:zt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ct,scissor:Jt,viewport:Ot,reset:Le}}function gA(o,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new re,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):Dc("canvas")}function C(L,T,at){let yt=1;const Et=Ft(L);if((Et.width>at||Et.height>at)&&(yt=at/Math.max(Et.width,Et.height)),yt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _t=Math.floor(yt*Et.width),zt=Math.floor(yt*Et.height);v===void 0&&(v=E(_t,zt));const Rt=T?E(_t,zt):v;return Rt.width=_t,Rt.height=zt,Rt.getContext("2d").drawImage(L,0,0,_t,zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+_t+"x"+zt+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,T,at,yt,Et=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _t=T;if(T===o.RED&&(at===o.FLOAT&&(_t=o.R32F),at===o.HALF_FLOAT&&(_t=o.R16F),at===o.UNSIGNED_BYTE&&(_t=o.R8)),T===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.R8UI),at===o.UNSIGNED_SHORT&&(_t=o.R16UI),at===o.UNSIGNED_INT&&(_t=o.R32UI),at===o.BYTE&&(_t=o.R8I),at===o.SHORT&&(_t=o.R16I),at===o.INT&&(_t=o.R32I)),T===o.RG&&(at===o.FLOAT&&(_t=o.RG32F),at===o.HALF_FLOAT&&(_t=o.RG16F),at===o.UNSIGNED_BYTE&&(_t=o.RG8)),T===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RG8UI),at===o.UNSIGNED_SHORT&&(_t=o.RG16UI),at===o.UNSIGNED_INT&&(_t=o.RG32UI),at===o.BYTE&&(_t=o.RG8I),at===o.SHORT&&(_t=o.RG16I),at===o.INT&&(_t=o.RG32I)),T===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),at===o.UNSIGNED_INT&&(_t=o.RGB32UI),at===o.BYTE&&(_t=o.RGB8I),at===o.SHORT&&(_t=o.RGB16I),at===o.INT&&(_t=o.RGB32I)),T===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),at===o.UNSIGNED_INT&&(_t=o.RGBA32UI),at===o.BYTE&&(_t=o.RGBA8I),at===o.SHORT&&(_t=o.RGBA16I),at===o.INT&&(_t=o.RGBA32I)),T===o.RGB&&at===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),T===o.RGBA){const zt=Et?Cc:Ce.getTransfer(yt);at===o.FLOAT&&(_t=o.RGBA32F),at===o.HALF_FLOAT&&(_t=o.RGBA16F),at===o.UNSIGNED_BYTE&&(_t=zt===ze?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function U(L,T){let at;return L?T===null||T===yr||T===Do?at=o.DEPTH24_STENCIL8:T===$i?at=o.DEPTH32F_STENCIL8:T===wo&&(at=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yr||T===Do?at=o.DEPTH_COMPONENT24:T===$i?at=o.DEPTH_COMPONENT32F:T===wo&&(at=o.DEPTH_COMPONENT16),at}function V(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==pi&&L.minFilter!==Ti?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function k(L){const T=L.target;T.removeEventListener("dispose",k),J(T),T.isVideoTexture&&g.delete(T)}function B(L){const T=L.target;T.removeEventListener("dispose",B),R(T)}function J(L){const T=r.get(L);if(T.__webglInit===void 0)return;const at=L.source,yt=S.get(at);if(yt){const Et=yt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&D(L),Object.keys(yt).length===0&&S.delete(at)}r.remove(L)}function D(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const at=L.source,yt=S.get(at);delete yt[T.__cacheKey],h.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let Et=0;Et<T.__webglFramebuffer[yt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[yt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[yt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=L.textures;for(let yt=0,Et=at.length;yt<Et;yt++){const _t=r.get(at[yt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),h.memory.textures--),r.remove(at[yt])}r.remove(L)}let P=0;function W(){P=0}function X(){const L=P;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),P+=1,L}function ct(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Y(L,T){const at=r.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){const yt=L.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(at,L,T);return}}i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+T)}function O(L,T){const at=r.get(L);if(L.version>0&&at.__version!==L.version){K(at,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+T)}function tt(L,T){const at=r.get(L);if(L.version>0&&at.__version!==L.version){K(at,L,T);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+T)}function H(L,T){const at=r.get(L);if(L.version>0&&at.__version!==L.version){ut(at,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+T)}const ht={[Ph]:o.REPEAT,[Sr]:o.CLAMP_TO_EDGE,[zh]:o.MIRRORED_REPEAT},w={[pi]:o.NEAREST,[Lx]:o.NEAREST_MIPMAP_NEAREST,[Kl]:o.NEAREST_MIPMAP_LINEAR,[Ti]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},j={[Bx]:o.NEVER,[kx]:o.ALWAYS,[Ix]:o.LESS,[Mv]:o.LEQUAL,[Fx]:o.EQUAL,[Vx]:o.GEQUAL,[Hx]:o.GREATER,[Gx]:o.NOTEQUAL};function dt(L,T){if(T.type===$i&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ti||T.magFilter===Xf||T.magFilter===Kl||T.magFilter===xr||T.minFilter===Ti||T.minFilter===Xf||T.minFilter===Kl||T.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ht[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ht[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ht[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,w[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,w[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,j[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==Kl&&T.minFilter!==xr||T.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function mt(L,T){let at=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",k));const yt=T.source;let Et=S.get(yt);Et===void 0&&(Et={},S.set(yt,Et));const _t=ct(T);if(_t!==L.__cacheKey){Et[_t]===void 0&&(Et[_t]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),Et[_t].usedTimes++;const zt=Et[L.__cacheKey];zt!==void 0&&(Et[L.__cacheKey].usedTimes--,zt.usedTimes===0&&D(T)),L.__cacheKey=_t,L.__webglTexture=Et[_t].texture}return at}function K(L,T,at){let yt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(yt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(yt=o.TEXTURE_3D);const Et=mt(L,T),_t=T.source;i.bindTexture(yt,L.__webglTexture,o.TEXTURE0+at);const zt=r.get(_t);if(_t.version!==zt.__version||Et===!0){i.activeTexture(o.TEXTURE0+at);const Rt=Ce.getPrimaries(Ce.workingColorSpace),Ct=T.colorSpace===Ia?null:Ce.getPrimaries(T.colorSpace),Se=T.colorSpace===Ia||Rt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let At=C(T.image,!1,l.maxTextureSize);At=ve(T,At);const Ht=c.convert(T.format,T.colorSpace),Kt=c.convert(T.type);let Jt=N(T.internalFormat,Ht,Kt,T.colorSpace,T.isVideoTexture);dt(yt,T);let Ot;const fe=T.mipmaps,ne=T.isVideoTexture!==!0,Le=zt.__version===void 0||Et===!0,q=_t.dataReady,Lt=V(T,At);if(T.isDepthTexture)Jt=U(T.format===Lo,T.type),Le&&(ne?i.texStorage2D(o.TEXTURE_2D,1,Jt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Jt,At.width,At.height,0,Ht,Kt,null));else if(T.isDataTexture)if(fe.length>0){ne&&Le&&i.texStorage2D(o.TEXTURE_2D,Lt,Jt,fe[0].width,fe[0].height);for(let ft=0,St=fe.length;ft<St;ft++)Ot=fe[ft],ne?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Ht,Kt,Ot.data):i.texImage2D(o.TEXTURE_2D,ft,Jt,Ot.width,Ot.height,0,Ht,Kt,Ot.data);T.generateMipmaps=!1}else ne?(Le&&i.texStorage2D(o.TEXTURE_2D,Lt,Jt,At.width,At.height),q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Ht,Kt,At.data)):i.texImage2D(o.TEXTURE_2D,0,Jt,At.width,At.height,0,Ht,Kt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Jt,fe[0].width,fe[0].height,At.depth);for(let ft=0,St=fe.length;ft<St;ft++)if(Ot=fe[ft],T.format!==di)if(Ht!==null)if(ne){if(q)if(T.layerUpdates.size>0){const Pt=I_(Ot.width,Ot.height,T.format,T.type);for(const Nt of T.layerUpdates){const ae=Ot.data.subarray(Nt*Pt/Ot.data.BYTES_PER_ELEMENT,(Nt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,Nt,Ot.width,Ot.height,1,Ht,ae)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,At.depth,Ht,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,Jt,Ot.width,Ot.height,At.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,At.depth,Ht,Kt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ft,Jt,Ot.width,Ot.height,At.depth,0,Ht,Kt,Ot.data)}else{ne&&Le&&i.texStorage2D(o.TEXTURE_2D,Lt,Jt,fe[0].width,fe[0].height);for(let ft=0,St=fe.length;ft<St;ft++)Ot=fe[ft],T.format!==di?Ht!==null?ne?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Ht,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,ft,Jt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Ht,Kt,Ot.data):i.texImage2D(o.TEXTURE_2D,ft,Jt,Ot.width,Ot.height,0,Ht,Kt,Ot.data)}else if(T.isDataArrayTexture)if(ne){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Jt,At.width,At.height,At.depth),q)if(T.layerUpdates.size>0){const ft=I_(At.width,At.height,T.format,T.type);for(const St of T.layerUpdates){const Pt=At.data.subarray(St*ft/At.data.BYTES_PER_ELEMENT,(St+1)*ft/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,Ht,Kt,Pt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ht,Kt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Jt,At.width,At.height,At.depth,0,Ht,Kt,At.data);else if(T.isData3DTexture)ne?(Le&&i.texStorage3D(o.TEXTURE_3D,Lt,Jt,At.width,At.height,At.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ht,Kt,At.data)):i.texImage3D(o.TEXTURE_3D,0,Jt,At.width,At.height,At.depth,0,Ht,Kt,At.data);else if(T.isFramebufferTexture){if(Le)if(ne)i.texStorage2D(o.TEXTURE_2D,Lt,Jt,At.width,At.height);else{let ft=At.width,St=At.height;for(let Pt=0;Pt<Lt;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,Jt,ft,St,0,Ht,Kt,null),ft>>=1,St>>=1}}else if(fe.length>0){if(ne&&Le){const ft=Ft(fe[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Jt,ft.width,ft.height)}for(let ft=0,St=fe.length;ft<St;ft++)Ot=fe[ft],ne?q&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ht,Kt,Ot):i.texImage2D(o.TEXTURE_2D,ft,Jt,Ht,Kt,Ot);T.generateMipmaps=!1}else if(ne){if(Le){const ft=Ft(At);i.texStorage2D(o.TEXTURE_2D,Lt,Jt,ft.width,ft.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ht,Kt,At)}else i.texImage2D(o.TEXTURE_2D,0,Jt,Ht,Kt,At);M(T)&&_(yt),zt.__version=_t.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ut(L,T,at){if(T.image.length!==6)return;const yt=mt(L,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+at);const _t=r.get(Et);if(Et.version!==_t.__version||yt===!0){i.activeTexture(o.TEXTURE0+at);const zt=Ce.getPrimaries(Ce.workingColorSpace),Rt=T.colorSpace===Ia?null:Ce.getPrimaries(T.colorSpace),Ct=T.colorSpace===Ia||zt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Se=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ht=[];for(let St=0;St<6;St++)!Se&&!At?Ht[St]=C(T.image[St],!0,l.maxCubemapSize):Ht[St]=At?T.image[St].image:T.image[St],Ht[St]=ve(T,Ht[St]);const Kt=Ht[0],Jt=c.convert(T.format,T.colorSpace),Ot=c.convert(T.type),fe=N(T.internalFormat,Jt,Ot,T.colorSpace),ne=T.isVideoTexture!==!0,Le=_t.__version===void 0||yt===!0,q=Et.dataReady;let Lt=V(T,Kt);dt(o.TEXTURE_CUBE_MAP,T);let ft;if(Se){ne&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,fe,Kt.width,Kt.height);for(let St=0;St<6;St++){ft=Ht[St].mipmaps;for(let Pt=0;Pt<ft.length;Pt++){const Nt=ft[Pt];T.format!==di?Jt!==null?ne?q&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,Nt.width,Nt.height,Jt,Nt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,fe,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,Nt.width,Nt.height,Jt,Ot,Nt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,fe,Nt.width,Nt.height,0,Jt,Ot,Nt.data)}}}else{if(ft=T.mipmaps,ne&&Le){ft.length>0&&Lt++;const St=Ft(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,fe,St.width,St.height)}for(let St=0;St<6;St++)if(At){ne?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ht[St].width,Ht[St].height,Jt,Ot,Ht[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Ht[St].width,Ht[St].height,0,Jt,Ot,Ht[St].data);for(let Pt=0;Pt<ft.length;Pt++){const ae=ft[Pt].image[St].image;ne?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,ae.width,ae.height,Jt,Ot,ae.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,fe,ae.width,ae.height,0,Jt,Ot,ae.data)}}else{ne?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Jt,Ot,Ht[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,fe,Jt,Ot,Ht[St]);for(let Pt=0;Pt<ft.length;Pt++){const Nt=ft[Pt];ne?q&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,Jt,Ot,Nt.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,fe,Jt,Ot,Nt.image[St])}}}M(T)&&_(o.TEXTURE_CUBE_MAP),_t.__version=Et.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function gt(L,T,at,yt,Et,_t){const zt=c.convert(at.format,at.colorSpace),Rt=c.convert(at.type),Ct=N(at.internalFormat,zt,Rt,at.colorSpace),Se=r.get(T),At=r.get(at);if(At.__renderTarget=T,!Se.__hasExternalTextures){const Ht=Math.max(1,T.width>>_t),Kt=Math.max(1,T.height>>_t);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,_t,Ct,Ht,Kt,T.depth,0,zt,Rt,null):i.texImage2D(Et,_t,Ct,Ht,Kt,0,zt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Zt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,Et,At.__webglTexture,0,ie(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,yt,Et,At.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(L,T,at){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const yt=T.depthTexture,Et=yt&&yt.isDepthTexture?yt.type:null,_t=U(T.stencilBuffer,Et),zt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=ie(T);Zt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,_t,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,_t,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,_t,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,zt,o.RENDERBUFFER,L)}else{const yt=T.textures;for(let Et=0;Et<yt.length;Et++){const _t=yt[Et],zt=c.convert(_t.format,_t.colorSpace),Rt=c.convert(_t.type),Ct=N(_t.internalFormat,zt,Rt,_t.colorSpace),Se=ie(T);at&&Zt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Se,Ct,T.width,T.height):Zt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Se,Ct,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=r.get(T.depthTexture);yt.__renderTarget=T,(!yt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const Et=yt.__webglTexture,_t=ie(T);if(T.depthTexture.format===Uo)Zt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Lo)Zt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Qt(L){const T=r.get(L),at=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const yt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),yt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,yt.removeEventListener("dispose",Et)};yt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=yt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,L)}else if(at){T.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[yt]),T.__webglDepthbuffer[yt]===void 0)T.__webglDepthbuffer[yt]=o.createRenderbuffer(),Mt(T.__webglDepthbuffer[yt],L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=T.__webglDepthbuffer[yt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,_t)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Mt(T.__webglDepthbuffer,L,!1);else{const yt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,Et)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(L,T,at){const yt=r.get(L);T!==void 0&&gt(yt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Qt(L)}function le(L){const T=L.texture,at=r.get(L),yt=r.get(T);L.addEventListener("dispose",B);const Et=L.textures,_t=L.isWebGLCubeRenderTarget===!0,zt=Et.length>1;if(zt||(yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture()),yt.__version=T.version,h.memory.textures++),_t){at.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[Rt]=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)at.__webglFramebuffer[Rt][Ct]=o.createFramebuffer()}else at.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)at.__webglFramebuffer[Rt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(zt)for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Se=r.get(Et[Rt]);Se.__webglTexture===void 0&&(Se.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Zt(L)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Ct=Et[Rt];at.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Rt]);const Se=c.convert(Ct.format,Ct.colorSpace),At=c.convert(Ct.type),Ht=N(Ct.internalFormat,Se,At,Ct.colorSpace,L.isXRRenderTarget===!0),Kt=ie(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ht,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(at.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),dt(o.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)gt(at.__webglFramebuffer[Rt][Ct],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ct);else gt(at.__webglFramebuffer[Rt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(zt){for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const Se=Et[Rt],At=r.get(Se);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),dt(o.TEXTURE_2D,Se),gt(at.__webglFramebuffer,L,Se,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,0),M(Se)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,yt.__webglTexture),dt(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)gt(at.__webglFramebuffer[Ct],L,T,o.COLOR_ATTACHMENT0,Rt,Ct);else gt(at.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,Rt,0);M(T)&&_(Rt),i.unbindTexture()}L.depthBuffer&&Qt(L)}function ce(L){const T=L.textures;for(let at=0,yt=T.length;at<yt;at++){const Et=T[at];if(M(Et)){const _t=F(L),zt=r.get(Et).__webglTexture;i.bindTexture(_t,zt),_(_t),i.unbindTexture()}}}const Vt=[],I=[];function Ke(L){if(L.samples>0){if(Zt(L)===!1){const T=L.textures,at=L.width,yt=L.height;let Et=o.COLOR_BUFFER_BIT;const _t=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,zt=r.get(L),Rt=T.length>1;if(Rt)for(let Ct=0;Ct<T.length;Ct++)i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,zt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Ct=0;Ct<T.length;Ct++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Ct]);const Se=r.get(T[Ct]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,at,yt,0,0,at,yt,Et,o.NEAREST),m===!0&&(Vt.length=0,I.length=0,Vt.push(o.COLOR_ATTACHMENT0+Ct),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Vt.push(_t),I.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Vt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Ct=0;Ct<T.length;Ct++){i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,zt.__webglColorRenderbuffer[Ct]);const Se=r.get(T[Ct]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,Se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ie(L){return Math.min(l.maxSamples,L.samples)}function Zt(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(L){const T=h.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ve(L,T){const at=L.colorSpace,yt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||at!==xs&&at!==Ia&&(Ce.getTransfer(at)===ze?(yt!==di||Et!==ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=O,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=kt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Zt}function _A(o,t){function i(r,l=Ia){let c;const h=Ce.getTransfer(l);if(r===ia)return o.UNSIGNED_BYTE;if(r===gd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===_d)return o.UNSIGNED_SHORT_5_5_5_1;if(r===pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hv)return o.BYTE;if(r===dv)return o.SHORT;if(r===wo)return o.UNSIGNED_SHORT;if(r===md)return o.INT;if(r===yr)return o.UNSIGNED_INT;if(r===$i)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===mv)return o.ALPHA;if(r===gv)return o.RGB;if(r===di)return o.RGBA;if(r===_v)return o.LUMINANCE;if(r===vv)return o.LUMINANCE_ALPHA;if(r===Uo)return o.DEPTH_COMPONENT;if(r===Lo)return o.DEPTH_STENCIL;if(r===Sv)return o.RED;if(r===vd)return o.RED_INTEGER;if(r===xv)return o.RG;if(r===Sd)return o.RG_INTEGER;if(r===xd)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===Ec||r===Tc)if(h===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bh||r===Ih||r===Fh||r===Hh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ih)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gh||r===Vh||r===kh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Gh||r===Vh)return h===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===kh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xh||r===qh||r===Wh||r===Yh||r===Zh||r===Kh||r===Qh||r===jh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Xh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jh)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===td)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ed)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nd)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===id)return h===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc||r===ad||r===rd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===bc)return h===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yv||r===sd||r===od||r===ld)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===sd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===od)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Do?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SA=`
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

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new In,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ka({vertexShader:vA,fragmentShader:SA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ea(new Oc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yA extends Ms{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,S=null,y=null,E=null;const C=new xA,M=i.getContextAttributes();let _=null,F=null;const N=[],U=[],V=new re;let k=null;const B=new ai;B.viewport=new Je;const J=new ai;J.viewport=new Je;const D=[B,J],R=new Vy;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ut=N[K];return ut===void 0&&(ut=new hh,N[K]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(K){let ut=N[K];return ut===void 0&&(ut=new hh,N[K]=ut),ut.getGripSpace()},this.getHand=function(K){let ut=N[K];return ut===void 0&&(ut=new hh,N[K]=ut),ut.getHandSpace()};function X(K){const ut=U.indexOf(K.inputSource);if(ut===-1)return;const gt=N[ut];gt!==void 0&&(gt.update(K.inputSource,K.frame,p||h),gt.dispatchEvent({type:K.type,data:K.inputSource}))}function ct(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",ct),l.removeEventListener("inputsourceschange",Y);for(let K=0;K<N.length;K++){const ut=U[K];ut!==null&&(U[K]=null,N[K].disconnect(ut))}P=null,W=null,C.reset(),t.setRenderTarget(_),y=null,S=null,v=null,l=null,F=null,mt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",ct),l.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(V),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Mt=null,bt=null;M.depth&&(bt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,gt=M.stencil?Lo:Uo,Mt=M.stencil?Do:yr);const Qt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};v=new XRWebGLBinding(l,i),S=v.createProjectionLayer(Qt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),F=new Mr(S.textureWidth,S.textureHeight,{format:di,type:ia,depthTexture:new Pv(S.textureWidth,S.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const gt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,gt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Mr(y.framebufferWidth,y.framebufferHeight,{format:di,type:ia,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),mt.setContext(l),mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function Y(K){for(let ut=0;ut<K.removed.length;ut++){const gt=K.removed[ut],Mt=U.indexOf(gt);Mt>=0&&(U[Mt]=null,N[Mt].disconnect(gt))}for(let ut=0;ut<K.added.length;ut++){const gt=K.added[ut];let Mt=U.indexOf(gt);if(Mt===-1){for(let Qt=0;Qt<N.length;Qt++)if(Qt>=U.length){U.push(gt),Mt=Qt;break}else if(U[Qt]===null){U[Qt]=gt,Mt=Qt;break}if(Mt===-1)break}const bt=N[Mt];bt&&bt.connect(gt)}}const O=new et,tt=new et;function H(K,ut,gt){O.setFromMatrixPosition(ut.matrixWorld),tt.setFromMatrixPosition(gt.matrixWorld);const Mt=O.distanceTo(tt),bt=ut.projectionMatrix.elements,Qt=gt.projectionMatrix.elements,kt=bt[14]/(bt[10]-1),le=bt[14]/(bt[10]+1),ce=(bt[9]+1)/bt[5],Vt=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],Ke=(Qt[8]+1)/Qt[0],ie=kt*I,Zt=kt*Ke,It=Mt/(-I+Ke),ve=It*-I;if(ut.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ve),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),bt[10]===-1)K.projectionMatrix.copy(ut.projectionMatrix),K.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Ft=kt+It,L=le+It,T=ie-ve,at=Zt+(Mt-ve),yt=ce*le/L*Ft,Et=Vt*le/L*Ft;K.projectionMatrix.makePerspective(T,at,yt,Et,Ft,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ht(K,ut){ut===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ut.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ut=K.near,gt=K.far;C.texture!==null&&(C.depthNear>0&&(ut=C.depthNear),C.depthFar>0&&(gt=C.depthFar)),R.near=J.near=B.near=ut,R.far=J.far=B.far=gt,(P!==R.near||W!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),P=R.near,W=R.far),B.layers.mask=K.layers.mask|2,J.layers.mask=K.layers.mask|4,R.layers.mask=B.layers.mask|J.layers.mask;const Mt=K.parent,bt=R.cameras;ht(R,Mt);for(let Qt=0;Qt<bt.length;Qt++)ht(bt[Qt],Mt);bt.length===2?H(R,B,J):R.projectionMatrix.copy(B.projectionMatrix),w(K,R,Mt)};function w(K,ut,gt){gt===null?K.matrix.copy(ut.matrixWorld):(K.matrix.copy(gt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ut.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ut.projectionMatrix),K.projectionMatrixInverse.copy(ut.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=cd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let j=null;function dt(K,ut){if(g=ut.getViewerPose(p||h),E=ut,g!==null){const gt=g.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let Mt=!1;gt.length!==R.cameras.length&&(R.cameras.length=0,Mt=!0);for(let kt=0;kt<gt.length;kt++){const le=gt[kt];let ce=null;if(y!==null)ce=y.getViewport(le);else{const I=v.getViewSubImage(S,le);ce=I.viewport,kt===0&&(t.setRenderTargetTextures(F,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(F))}let Vt=D[kt];Vt===void 0&&(Vt=new ai,Vt.layers.enable(kt),Vt.viewport=new Je,D[kt]=Vt),Vt.matrix.fromArray(le.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(le.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ce.x,ce.y,ce.width,ce.height),kt===0&&(R.matrix.copy(Vt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Mt===!0&&R.cameras.push(Vt)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const kt=v.getDepthInformation(gt[0]);kt&&kt.isValid&&kt.texture&&C.init(t,kt,l.renderState)}}for(let gt=0;gt<N.length;gt++){const Mt=U[gt],bt=N[gt];Mt!==null&&bt!==void 0&&bt.update(Mt,ut,p||h)}j&&j(K,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),E=null}const mt=new Iv;mt.setAnimationLoop(dt),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}const pr=new aa,MA=new qe;function EA(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Dv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,F,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,F,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Bn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Bn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const F=t.get(_),N=F.envMap,U=F.envMapRotation;N&&(M.envMap.value=N,pr.copy(U),pr.x*=-1,pr.y*=-1,pr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),M.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(pr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,F,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*F,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,F){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=F.texture,M.transmissionSamplerSize.value.set(F.width,F.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const F=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(F.matrixWorld),M.nearDistance.value=F.shadow.camera.near,M.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function TA(o,t,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(F,N){const U=N.program;r.uniformBlockBinding(F,U)}function p(F,N){let U=l[F.id];U===void 0&&(E(F),U=g(F),l[F.id]=U,F.addEventListener("dispose",M));const V=N.program;r.updateUBOMapping(F,V);const k=t.render.frame;c[F.id]!==k&&(S(F),c[F.id]=k)}function g(F){const N=v();F.__bindingPointIndex=N;const U=o.createBuffer(),V=F.__size,k=F.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,V,k),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function v(){for(let F=0;F<d;F++)if(h.indexOf(F)===-1)return h.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(F){const N=l[F.id],U=F.uniforms,V=F.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let k=0,B=U.length;k<B;k++){const J=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,R=J.length;D<R;D++){const P=J[D];if(y(P,k,D,V)===!0){const W=P.__offset,X=Array.isArray(P.value)?P.value:[P.value];let ct=0;for(let Y=0;Y<X.length;Y++){const O=X[Y],tt=C(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,W+ct,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,ct),ct+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(F,N,U,V){const k=F.value,B=N+"_"+U;if(V[B]===void 0)return typeof k=="number"||typeof k=="boolean"?V[B]=k:V[B]=k.clone(),!0;{const J=V[B];if(typeof k=="number"||typeof k=="boolean"){if(J!==k)return V[B]=k,!0}else if(J.equals(k)===!1)return J.copy(k),!0}return!1}function E(F){const N=F.uniforms;let U=0;const V=16;for(let B=0,J=N.length;B<J;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let R=0,P=D.length;R<P;R++){const W=D[R],X=Array.isArray(W.value)?W.value:[W.value];for(let ct=0,Y=X.length;ct<Y;ct++){const O=X[ct],tt=C(O),H=U%V,ht=H%tt.boundary,w=H+ht;U+=ht,w!==0&&V-w<tt.storage&&(U+=V-w),W.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=U,U+=tt.storage}}}const k=U%V;return k>0&&(U+=V-k),F.__size=U,F.__cache={},this}function C(F){const N={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(N.boundary=4,N.storage=4):F.isVector2?(N.boundary=8,N.storage=8):F.isVector3||F.isColor?(N.boundary=16,N.storage=12):F.isVector4?(N.boundary=16,N.storage=16):F.isMatrix3?(N.boundary=48,N.storage=48):F.isMatrix4?(N.boundary=64,N.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),N}function M(F){const N=F.target;N.removeEventListener("dispose",M);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const F in l)o.deleteBuffer(l[F]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class bA{constructor(t={}){const{canvas:i=qx(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const F=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let V=!1;this._outputColorSpace=ii;let k=0,B=0,J=null,D=-1,R=null;const P=new Je,W=new Je;let X=null;const ct=new Te(0);let Y=0,O=i.width,tt=i.height,H=1,ht=null,w=null;const j=new Je(0,0,O,tt),dt=new Je(0,0,O,tt);let mt=!1;const K=new Nv;let ut=!1,gt=!1;const Mt=new qe,bt=new qe,Qt=new et,kt=new Je,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function Vt(){return J===null?H:1}let I=r;function Ke(A,Q){return i.getContext(A,Q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pd}`),i.addEventListener("webglcontextlost",St,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),I===null){const Q="webgl2";if(I=Ke(Q,A),I===null)throw Ke(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ie,Zt,It,ve,Ft,L,T,at,yt,Et,_t,zt,Rt,Ct,Se,At,Ht,Kt,Jt,Ot,fe,ne,Le,q;function Lt(){ie=new PT(I),ie.init(),ne=new _A(I,ie),Zt=new CT(I,ie,t,ne),It=new mA(I,ie),Zt.reverseDepthBuffer&&S&&It.buffers.depth.setReversed(!0),ve=new IT(I),Ft=new nA,L=new gA(I,ie,It,Ft,Zt,ne,ve),T=new DT(U),at=new OT(U),yt=new Xy(I),Le=new AT(I,yt),Et=new zT(I,yt,ve,Le),_t=new HT(I,Et,yt,ve),Jt=new FT(I,Zt,L),At=new wT(Ft),zt=new eA(U,T,at,ie,Zt,Le,At),Rt=new EA(U,Ft),Ct=new aA,Se=new uA(ie),Kt=new bT(U,T,at,It,_t,y,m),Ht=new dA(U,_t,Zt),q=new TA(I,ve,Zt,It),Ot=new RT(I,ie,ve),fe=new BT(I,ie,ve),ve.programs=zt.programs,U.capabilities=Zt,U.extensions=ie,U.properties=Ft,U.renderLists=Ct,U.shadowMap=Ht,U.state=It,U.info=ve}Lt();const ft=new yA(U,I);this.xr=ft,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(O,tt,!1))},this.getSize=function(A){return A.set(O,tt)},this.setSize=function(A,Q,ot=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,tt=Q,i.width=Math.floor(A*H),i.height=Math.floor(Q*H),ot===!0&&(i.style.width=A+"px",i.style.height=Q+"px"),this.setViewport(0,0,A,Q)},this.getDrawingBufferSize=function(A){return A.set(O*H,tt*H).floor()},this.setDrawingBufferSize=function(A,Q,ot){O=A,tt=Q,H=ot,i.width=Math.floor(A*ot),i.height=Math.floor(Q*ot),this.setViewport(0,0,A,Q)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,Q,ot,lt){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,Q,ot,lt),It.viewport(P.copy(j).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,Q,ot,lt){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,Q,ot,lt),It.scissor(W.copy(dt).multiplyScalar(H).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(A){It.setScissorTest(mt=A)},this.setOpaqueSort=function(A){ht=A},this.setTransparentSort=function(A){w=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,Q=!0,ot=!0){let lt=0;if(A){let $=!1;if(J!==null){const Tt=J.texture.format;$=Tt===xd||Tt===Sd||Tt===vd}if($){const Tt=J.texture.type,wt=Tt===ia||Tt===yr||Tt===wo||Tt===Do||Tt===gd||Tt===_d,Dt=Kt.getClearColor(),Bt=Kt.getClearAlpha(),te=Dt.r,Wt=Dt.g,qt=Dt.b;wt?(E[0]=te,E[1]=Wt,E[2]=qt,E[3]=Bt,I.clearBufferuiv(I.COLOR,0,E)):(C[0]=te,C[1]=Wt,C[2]=qt,C[3]=Bt,I.clearBufferiv(I.COLOR,0,C))}else lt|=I.COLOR_BUFFER_BIT}Q&&(lt|=I.DEPTH_BUFFER_BIT),ot&&(lt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",St,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),Kt.dispose(),Ct.dispose(),Se.dispose(),Ft.dispose(),T.dispose(),at.dispose(),_t.dispose(),Le.dispose(),q.dispose(),zt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",rn),ft.removeEventListener("sessionend",_n),Un.stop()};function St(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=ve.autoReset,Q=Ht.enabled,ot=Ht.autoUpdate,lt=Ht.needsUpdate,$=Ht.type;Lt(),ve.autoReset=A,Ht.enabled=Q,Ht.autoUpdate=ot,Ht.needsUpdate=lt,Ht.type=$}function Nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const Q=A.target;Q.removeEventListener("dispose",ae),Fe(Q)}function Fe(A){$e(A),Ft.remove(A)}function $e(A){const Q=Ft.get(A).programs;Q!==void 0&&(Q.forEach(function(ot){zt.releaseProgram(ot)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Q,ot,lt,$,Tt){Q===null&&(Q=le);const wt=$.isMesh&&$.matrixWorld.determinant()<0,Dt=Wa(A,Q,ot,lt,$);It.setMaterial(lt,wt);let Bt=ot.index,te=1;if(lt.wireframe===!0){if(Bt=Et.getWireframeAttribute(ot),Bt===void 0)return;te=2}const Wt=ot.drawRange,qt=ot.attributes.position;let pe=Wt.start*te,Ae=(Wt.start+Wt.count)*te;Tt!==null&&(pe=Math.max(pe,Tt.start*te),Ae=Math.min(Ae,(Tt.start+Tt.count)*te)),Bt!==null?(pe=Math.max(pe,0),Ae=Math.min(Ae,Bt.count)):qt!=null&&(pe=Math.max(pe,0),Ae=Math.min(Ae,qt.count));const ke=Ae-pe;if(ke<0||ke===1/0)return;Le.setup($,lt,Dt,ot,Bt);let xe,ye=Ot;if(Bt!==null&&(xe=yt.get(Bt),ye=fe,ye.setIndex(xe)),$.isMesh)lt.wireframe===!0?(It.setLineWidth(lt.wireframeLinewidth*Vt()),ye.setMode(I.LINES)):ye.setMode(I.TRIANGLES);else if($.isLine){let Yt=lt.linewidth;Yt===void 0&&(Yt=1),It.setLineWidth(Yt*Vt()),$.isLineSegments?ye.setMode(I.LINES):$.isLineLoop?ye.setMode(I.LINE_LOOP):ye.setMode(I.LINE_STRIP)}else $.isPoints?ye.setMode(I.POINTS):$.isSprite&&ye.setMode(I.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ac("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ye.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Yt=$._multiDrawStarts,We=$._multiDrawCounts,Ee=$._multiDrawCount,Mn=Bt?yt.get(Bt).bytesPerElement:1,la=Ft.get(lt).currentProgram.getUniforms();for(let He=0;He<Ee;He++)la.setValue(I,"_gl_DrawID",He),ye.render(Yt[He]/Mn,We[He])}else if($.isInstancedMesh)ye.renderInstances(pe,ke,$.count);else if(ot.isInstancedBufferGeometry){const Yt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,We=Math.min(ot.instanceCount,Yt);ye.renderInstances(pe,ke,We)}else ye.render(pe,ke)};function be(A,Q,ot){A.transparent===!0&&A.side===Ji&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,sa(A,Q,ot),A.side=Va,A.needsUpdate=!0,sa(A,Q,ot),A.side=Ji):sa(A,Q,ot)}this.compile=function(A,Q,ot=null){ot===null&&(ot=A),_=Se.get(ot),_.init(Q),N.push(_),ot.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),A!==ot&&A.traverseVisible(function($){$.isLight&&$.layers.test(Q.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const lt=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Tt=$.material;if(Tt)if(Array.isArray(Tt))for(let wt=0;wt<Tt.length;wt++){const Dt=Tt[wt];be(Dt,ot,$),lt.add(Dt)}else be(Tt,ot,$),lt.add(Tt)}),_=N.pop(),lt},this.compileAsync=function(A,Q,ot=null){const lt=this.compile(A,Q,ot);return new Promise($=>{function Tt(){if(lt.forEach(function(wt){Ft.get(wt).currentProgram.isReady()&&lt.delete(wt)}),lt.size===0){$(A);return}setTimeout(Tt,10)}ie.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Fn=null;function fn(A){Fn&&Fn(A)}function rn(){Un.stop()}function _n(){Un.start()}const Un=new Iv;Un.setAnimationLoop(fn),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(A){Fn=A,ft.setAnimationLoop(A),A===null?Un.stop():Un.start()},ft.addEventListener("sessionstart",rn),ft.addEventListener("sessionend",_n),this.render=function(A,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(Q),Q=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(U,A,Q,J),_=Se.get(A,N.length),_.init(Q),N.push(_),bt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),K.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,ut=At.init(this.clippingPlanes,gt),M=Ct.get(A,F.length),M.init(),F.push(M),ft.enabled===!0&&ft.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Xa(Tt,Q,-1/0,U.sortObjects)}Xa(A,Q,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(ht,w),ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ce&&Kt.addToRenderList(M,A),this.info.render.frame++,ut===!0&&At.beginShadows();const ot=_.state.shadowsArray;Ht.render(ot,A,Q),ut===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=M.opaque,$=M.transmissive;if(_.setupLights(),Q.isArrayCamera){const Tt=Q.cameras;if($.length>0)for(let wt=0,Dt=Tt.length;wt<Dt;wt++){const Bt=Tt[wt];Ho(lt,$,A,Bt)}ce&&Kt.render(A);for(let wt=0,Dt=Tt.length;wt<Dt;wt++){const Bt=Tt[wt];Fo(M,A,Bt,Bt.viewport)}}else $.length>0&&Ho(lt,$,A,Q),ce&&Kt.render(A),Fo(M,A,Q);J!==null&&B===0&&(L.updateMultisampleRenderTarget(J),L.updateRenderTargetMipmap(J)),A.isScene===!0&&A.onAfterRender(U,A,Q),Le.resetDefaultState(),D=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],ut===!0&&At.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,F.pop(),F.length>0?M=F[F.length-1]:M=null};function Xa(A,Q,ot,lt){if(A.visible===!1)return;if(A.layers.test(Q.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||K.intersectsSprite(A)){lt&&kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const wt=_t.update(A),Dt=A.material;Dt.visible&&M.push(A,wt,Dt,ot,kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||K.intersectsObject(A))){const wt=_t.update(A),Dt=A.material;if(lt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),kt.copy(A.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),kt.copy(wt.boundingSphere.center)),kt.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(Dt)){const Bt=wt.groups;for(let te=0,Wt=Bt.length;te<Wt;te++){const qt=Bt[te],pe=Dt[qt.materialIndex];pe&&pe.visible&&M.push(A,wt,pe,ot,kt.z,qt)}}else Dt.visible&&M.push(A,wt,Dt,ot,kt.z,null)}}const Tt=A.children;for(let wt=0,Dt=Tt.length;wt<Dt;wt++)Xa(Tt[wt],Q,ot,lt)}function Fo(A,Q,ot,lt){const $=A.opaque,Tt=A.transmissive,wt=A.transparent;_.setupLightsView(ot),ut===!0&&At.setGlobalState(U.clippingPlanes,ot),lt&&It.viewport(P.copy(lt)),$.length>0&&qa($,Q,ot),Tt.length>0&&qa(Tt,Q,ot),wt.length>0&&qa(wt,Q,ot),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ho(A,Q,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Mr(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?No:ia,minFilter:xr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[lt.id],wt=lt.viewport||P;Tt.setSize(wt.z*U.transmissionResolutionScale,wt.w*U.transmissionResolutionScale);const Dt=U.getRenderTarget();U.setRenderTarget(Tt),U.getClearColor(ct),Y=U.getClearAlpha(),Y<1&&U.setClearColor(16777215,.5),U.clear(),ce&&Kt.render(ot);const Bt=U.toneMapping;U.toneMapping=Ga;const te=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),ut===!0&&At.setGlobalState(U.clippingPlanes,lt),qa(A,ot,lt),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let qt=0,pe=Q.length;qt<pe;qt++){const Ae=Q[qt],ke=Ae.object,xe=Ae.geometry,ye=Ae.material,Yt=Ae.group;if(ye.side===Ji&&ke.layers.test(lt.layers)){const We=ye.side;ye.side=Bn,ye.needsUpdate=!0,ra(ke,ot,lt,xe,ye,Yt),ye.side=We,ye.needsUpdate=!0,Wt=!0}}Wt===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}U.setRenderTarget(Dt),U.setClearColor(ct,Y),te!==void 0&&(lt.viewport=te),U.toneMapping=Bt}function qa(A,Q,ot){const lt=Q.isScene===!0?Q.overrideMaterial:null;for(let $=0,Tt=A.length;$<Tt;$++){const wt=A[$],Dt=wt.object,Bt=wt.geometry,te=wt.group;let Wt=wt.material;Wt.allowOverride===!0&&lt!==null&&(Wt=lt),Dt.layers.test(ot.layers)&&ra(Dt,Q,ot,Bt,Wt,te)}}function ra(A,Q,ot,lt,$,Tt){A.onBeforeRender(U,Q,ot,lt,$,Tt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(U,Q,ot,lt,A,Tt),$.transparent===!0&&$.side===Ji&&$.forceSinglePass===!1?($.side=Bn,$.needsUpdate=!0,U.renderBufferDirect(ot,Q,lt,$,A,Tt),$.side=Va,$.needsUpdate=!0,U.renderBufferDirect(ot,Q,lt,$,A,Tt),$.side=Ji):U.renderBufferDirect(ot,Q,lt,$,A,Tt),A.onAfterRender(U,Q,ot,lt,$,Tt)}function sa(A,Q,ot){Q.isScene!==!0&&(Q=le);const lt=Ft.get(A),$=_.state.lights,Tt=_.state.shadowsArray,wt=$.state.version,Dt=zt.getParameters(A,$.state,Tt,Q,ot),Bt=zt.getProgramCacheKey(Dt);let te=lt.programs;lt.environment=A.isMeshStandardMaterial?Q.environment:null,lt.fog=Q.fog,lt.envMap=(A.isMeshStandardMaterial?at:T).get(A.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&A.envMap===null?Q.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",ae),te=new Map,lt.programs=te);let Wt=te.get(Bt);if(Wt!==void 0){if(lt.currentProgram===Wt&&lt.lightsStateVersion===wt)return Ci(A,Dt),Wt}else Dt.uniforms=zt.getUniforms(A),A.onBeforeCompile(Dt,U),Wt=zt.acquireProgram(Dt,Bt),te.set(Bt,Wt),lt.uniforms=Dt.uniforms;const qt=lt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=At.uniform),Ci(A,Dt),lt.needsLights=tn(A),lt.lightsStateVersion=wt,lt.needsLights&&(qt.ambientLightColor.value=$.state.ambient,qt.lightProbe.value=$.state.probe,qt.directionalLights.value=$.state.directional,qt.directionalLightShadows.value=$.state.directionalShadow,qt.spotLights.value=$.state.spot,qt.spotLightShadows.value=$.state.spotShadow,qt.rectAreaLights.value=$.state.rectArea,qt.ltc_1.value=$.state.rectAreaLTC1,qt.ltc_2.value=$.state.rectAreaLTC2,qt.pointLights.value=$.state.point,qt.pointLightShadows.value=$.state.pointShadow,qt.hemisphereLights.value=$.state.hemi,qt.directionalShadowMap.value=$.state.directionalShadowMap,qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qt.spotShadowMap.value=$.state.spotShadowMap,qt.spotLightMatrix.value=$.state.spotLightMatrix,qt.spotLightMap.value=$.state.spotLightMap,qt.pointShadowMap.value=$.state.pointShadowMap,qt.pointShadowMatrix.value=$.state.pointShadowMatrix),lt.currentProgram=Wt,lt.uniformsList=null,Wt}function Ri(A){if(A.uniformsList===null){const Q=A.currentProgram.getUniforms();A.uniformsList=Rc.seqWithValue(Q.seq,A.uniforms)}return A.uniformsList}function Ci(A,Q){const ot=Ft.get(A);ot.outputColorSpace=Q.outputColorSpace,ot.batching=Q.batching,ot.batchingColor=Q.batchingColor,ot.instancing=Q.instancing,ot.instancingColor=Q.instancingColor,ot.instancingMorph=Q.instancingMorph,ot.skinning=Q.skinning,ot.morphTargets=Q.morphTargets,ot.morphNormals=Q.morphNormals,ot.morphColors=Q.morphColors,ot.morphTargetsCount=Q.morphTargetsCount,ot.numClippingPlanes=Q.numClippingPlanes,ot.numIntersection=Q.numClipIntersection,ot.vertexAlphas=Q.vertexAlphas,ot.vertexTangents=Q.vertexTangents,ot.toneMapping=Q.toneMapping}function Wa(A,Q,ot,lt,$){Q.isScene!==!0&&(Q=le),L.resetTextureUnits();const Tt=Q.fog,wt=lt.isMeshStandardMaterial?Q.environment:null,Dt=J===null?U.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:xs,Bt=(lt.isMeshStandardMaterial?at:T).get(lt.envMap||wt),te=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Wt=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,pe=!!ot.morphAttributes.normal,Ae=!!ot.morphAttributes.color;let ke=Ga;lt.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=U.toneMapping);const xe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ye=xe!==void 0?xe.length:0,Yt=Ft.get(lt),We=_.state.lights;if(ut===!0&&(gt===!0||A!==R)){const hn=A===R&&lt.id===D;At.setState(lt,A,hn)}let Ee=!1;lt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==We.state.version||Yt.outputColorSpace!==Dt||$.isBatchedMesh&&Yt.batching===!1||!$.isBatchedMesh&&Yt.batching===!0||$.isBatchedMesh&&Yt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Yt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Yt.instancing===!1||!$.isInstancedMesh&&Yt.instancing===!0||$.isSkinnedMesh&&Yt.skinning===!1||!$.isSkinnedMesh&&Yt.skinning===!0||$.isInstancedMesh&&Yt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Yt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Yt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Yt.instancingMorph===!1&&$.morphTexture!==null||Yt.envMap!==Bt||lt.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==At.numPlanes||Yt.numIntersection!==At.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==Wt||Yt.morphTargets!==qt||Yt.morphNormals!==pe||Yt.morphColors!==Ae||Yt.toneMapping!==ke||Yt.morphTargetsCount!==ye)&&(Ee=!0):(Ee=!0,Yt.__version=lt.version);let Mn=Yt.currentProgram;Ee===!0&&(Mn=sa(lt,Q,$));let la=!1,He=!1,Di=!1;const Be=Mn.getUniforms(),En=Yt.uniforms;if(It.useProgram(Mn.program)&&(la=!0,He=!0,Di=!0),lt.id!==D&&(D=lt.id,He=!0),la||R!==A){It.buffers.depth.getReversed()?(Mt.copy(A.projectionMatrix),Yx(Mt),Zx(Mt),Be.setValue(I,"projectionMatrix",Mt)):Be.setValue(I,"projectionMatrix",A.projectionMatrix),Be.setValue(I,"viewMatrix",A.matrixWorldInverse);const vn=Be.map.cameraPosition;vn!==void 0&&vn.setValue(I,Qt.setFromMatrixPosition(A.matrixWorld)),Zt.logarithmicDepthBuffer&&Be.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Be.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,He=!0,Di=!0)}if($.isSkinnedMesh){Be.setOptional(I,$,"bindMatrix"),Be.setOptional(I,$,"bindMatrixInverse");const hn=$.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Be.setValue(I,"boneTexture",hn.boneTexture,L))}$.isBatchedMesh&&(Be.setOptional(I,$,"batchingTexture"),Be.setValue(I,"batchingTexture",$._matricesTexture,L),Be.setOptional(I,$,"batchingIdTexture"),Be.setValue(I,"batchingIdTexture",$._indirectTexture,L),Be.setOptional(I,$,"batchingColorTexture"),$._colorsTexture!==null&&Be.setValue(I,"batchingColorTexture",$._colorsTexture,L));const sn=ot.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Jt.update($,ot,Mn),(He||Yt.receiveShadow!==$.receiveShadow)&&(Yt.receiveShadow=$.receiveShadow,Be.setValue(I,"receiveShadow",$.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(En.envMap.value=Bt,En.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Q.environment!==null&&(En.envMapIntensity.value=Q.environmentIntensity),He&&(Be.setValue(I,"toneMappingExposure",U.toneMappingExposure),Yt.needsLights&&oa(En,Di),Tt&&lt.fog===!0&&Rt.refreshFogUniforms(En,Tt),Rt.refreshMaterialUniforms(En,lt,H,tt,_.state.transmissionRenderTarget[A.id]),Rc.upload(I,Ri(Yt),En,L)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Rc.upload(I,Ri(Yt),En,L),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Be.setValue(I,"center",$.center),Be.setValue(I,"modelViewMatrix",$.modelViewMatrix),Be.setValue(I,"normalMatrix",$.normalMatrix),Be.setValue(I,"modelMatrix",$.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const hn=lt.uniformsGroups;for(let vn=0,gi=hn.length;vn<gi;vn++){const Ui=hn[vn];q.update(Ui,Mn),q.bind(Ui,Mn)}}return Mn}function oa(A,Q){A.ambientLightColor.needsUpdate=Q,A.lightProbe.needsUpdate=Q,A.directionalLights.needsUpdate=Q,A.directionalLightShadows.needsUpdate=Q,A.pointLights.needsUpdate=Q,A.pointLightShadows.needsUpdate=Q,A.spotLights.needsUpdate=Q,A.spotLightShadows.needsUpdate=Q,A.rectAreaLights.needsUpdate=Q,A.hemisphereLights.needsUpdate=Q}function tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,Q,ot){const lt=Ft.get(A);lt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=Q,Ft.get(A.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Q){const ot=Ft.get(A);ot.__webglFramebuffer=Q,ot.__useDefaultFramebuffer=Q===void 0};const Go=I.createFramebuffer();this.setRenderTarget=function(A,Q=0,ot=0){J=A,k=Q,B=ot;let lt=!0,$=null,Tt=!1,wt=!1;if(A){const Bt=Ft.get(A);if(Bt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(I.FRAMEBUFFER,null),lt=!1;else if(Bt.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Bt.__hasExternalTextures)L.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Bt.__boundDepthTexture!==qt){if(qt!==null&&Ft.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(wt=!0);const Wt=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[Q])?$=Wt[Q][ot]:$=Wt[Q],Tt=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?$=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[ot]:$=Wt,P.copy(A.viewport),W.copy(A.scissor),X=A.scissorTest}else P.copy(j).multiplyScalar(H).floor(),W.copy(dt).multiplyScalar(H).floor(),X=mt;if(ot!==0&&($=Go),It.bindFramebuffer(I.FRAMEBUFFER,$)&&lt&&It.drawBuffers(A,$),It.viewport(P),It.scissor(W),It.setScissorTest(X),Tt){const Bt=Ft.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Bt.__webglTexture,ot)}else if(wt){const Bt=Ft.get(A.texture),te=Q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,ot,te)}else if(A!==null&&ot!==0){const Bt=Ft.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(A,Q,ot,lt,$,Tt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){It.bindFramebuffer(I.FRAMEBUFFER,Dt);try{const Bt=A.texture,te=Bt.format,Wt=Bt.type;if(!Zt.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=A.width-lt&&ot>=0&&ot<=A.height-$&&I.readPixels(Q,ot,lt,$,ne.convert(te),ne.convert(Wt),Tt)}finally{const Bt=J!==null?Ft.get(J).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,Q,ot,lt,$,Tt,wt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt)if(Q>=0&&Q<=A.width-lt&&ot>=0&&ot<=A.height-$){It.bindFramebuffer(I.FRAMEBUFFER,Dt);const Bt=A.texture,te=Bt.format,Wt=Bt.type;if(!Zt.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),I.readPixels(Q,ot,lt,$,ne.convert(te),ne.convert(Wt),0);const pe=J!==null?Ft.get(J).__webglFramebuffer:null;It.bindFramebuffer(I.FRAMEBUFFER,pe);const Ae=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wx(I,Ae,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,qt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(qt),I.deleteSync(Ae),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Q=null,ot=0){const lt=Math.pow(2,-ot),$=Math.floor(A.image.width*lt),Tt=Math.floor(A.image.height*lt),wt=Q!==null?Q.x:0,Dt=Q!==null?Q.y:0;L.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,wt,Dt,$,Tt),It.unbindTexture()};const Vo=I.createFramebuffer(),wi=I.createFramebuffer();this.copyTextureToTexture=function(A,Q,ot=null,lt=null,$=0,Tt=null){Tt===null&&($!==0?(Ac("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=$,$=0):Tt=0);let wt,Dt,Bt,te,Wt,qt,pe,Ae,ke;const xe=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(ot!==null)wt=ot.max.x-ot.min.x,Dt=ot.max.y-ot.min.y,Bt=ot.isBox3?ot.max.z-ot.min.z:1,te=ot.min.x,Wt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const sn=Math.pow(2,-$);wt=Math.floor(xe.width*sn),Dt=Math.floor(xe.height*sn),A.isDataArrayTexture?Bt=xe.depth:A.isData3DTexture?Bt=Math.floor(xe.depth*sn):Bt=1,te=0,Wt=0,qt=0}lt!==null?(pe=lt.x,Ae=lt.y,ke=lt.z):(pe=0,Ae=0,ke=0);const ye=ne.convert(Q.format),Yt=ne.convert(Q.type);let We;Q.isData3DTexture?(L.setTexture3D(Q,0),We=I.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(L.setTexture2DArray(Q,0),We=I.TEXTURE_2D_ARRAY):(L.setTexture2D(Q,0),We=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),Mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),la=I.getParameter(I.UNPACK_SKIP_PIXELS),He=I.getParameter(I.UNPACK_SKIP_ROWS),Di=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qt);const Be=A.isDataArrayTexture||A.isData3DTexture,En=Q.isDataArrayTexture||Q.isData3DTexture;if(A.isDepthTexture){const sn=Ft.get(A),hn=Ft.get(Q),vn=Ft.get(sn.__renderTarget),gi=Ft.get(hn.__renderTarget);It.bindFramebuffer(I.READ_FRAMEBUFFER,vn.__webglFramebuffer),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Ui=0;Ui<Bt;Ui++)Be&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,$,qt+Ui),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(Q).__webglTexture,Tt,ke+Ui)),I.blitFramebuffer(te,Wt,wt,Dt,pe,Ae,wt,Dt,I.DEPTH_BUFFER_BIT,I.NEAREST);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Ft.has(A)){const sn=Ft.get(A),hn=Ft.get(Q);It.bindFramebuffer(I.READ_FRAMEBUFFER,Vo),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,wi);for(let vn=0;vn<Bt;vn++)Be?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,sn.__webglTexture,$,qt+vn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,sn.__webglTexture,$),En?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,Tt,ke+vn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,Tt),$!==0?I.blitFramebuffer(te,Wt,wt,Dt,pe,Ae,wt,Dt,I.COLOR_BUFFER_BIT,I.NEAREST):En?I.copyTexSubImage3D(We,Tt,pe,Ae,ke+vn,te,Wt,wt,Dt):I.copyTexSubImage2D(We,Tt,pe,Ae,te,Wt,wt,Dt);It.bindFramebuffer(I.READ_FRAMEBUFFER,null),It.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(We,Tt,pe,Ae,ke,wt,Dt,Bt,ye,Yt,xe.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D(We,Tt,pe,Ae,ke,wt,Dt,Bt,ye,xe.data):I.texSubImage3D(We,Tt,pe,Ae,ke,wt,Dt,Bt,ye,Yt,xe):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,pe,Ae,wt,Dt,ye,Yt,xe.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,pe,Ae,xe.width,xe.height,ye,xe.data):I.texSubImage2D(I.TEXTURE_2D,Tt,pe,Ae,wt,Dt,ye,Yt,xe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,la),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Di),Tt===0&&Q.generateMipmaps&&I.generateMipmap(We),It.unbindTexture()},this.copyTextureToTexture3D=function(A,Q,ot=null,lt=null,$=0){return Ac('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Q,ot,lt,$)},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){k=0,B=0,J=null,It.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const AA=()=>{const o=Ba.useRef(null),[t,i]=Ba.useState(!1),r=Ba.useRef(null),l=Ba.useRef([]),c=Ba.useRef(null),h=()=>{window.location.reload()},d=()=>{t?p():m(),i(!t)},m=()=>{try{r.current||(r.current=new(window.AudioContext||window.webkitAudioContext));const g=r.current;g.state==="suspended"&&g.resume(),c.current=g.createGain(),c.current.gain.value=.3;const v=()=>{const D=g.createConvolver(),R=g.createGain(),P=g.sampleRate*3,W=g.createBuffer(2,P,g.sampleRate);for(let X=0;X<2;X++){const ct=W.getChannelData(X);for(let Y=0;Y<P;Y++){const O=Math.random()*2-1;ct[Y]=O*Math.exp(-Y/(P/3))}}return D.buffer=W,R.gain.value=.5,{convolver:D,reverbGain:R}},S=()=>{const D=g.createDelay(),R=g.createGain();return D.delayTime.value=.3,R.gain.value=.4,D.connect(R),R.connect(D),{delay:D,feedback:R}},{convolver:y,reverbGain:E}=v(),{delay:C,feedback:M}=S();c.current.connect(C),C.connect(y),y.connect(E),E.connect(g.destination),M.connect(g.destination),l.current=[];const _=(D,R,P)=>{const W=g.createOscillator(),X=g.createGain();return W.type=R,W.frequency.value=D,W.frequency.setValueAtTime(D,g.currentTime),W.frequency.linearRampToValueAtTime(D*(1+Math.random()*.02),g.currentTime+20),X.gain.value=P,W.connect(X),X.connect(c.current),W.start(),{oscillator:W,gainNode:X}},F=(D,R)=>{const P=g.createOscillator(),W=g.createGain();P.type="sine",P.frequency.value=D;const X=g.createOscillator(),ct=g.createGain();return X.frequency.value=.05+Math.random()*.1,ct.gain.value=D*.3,X.connect(ct),ct.connect(P.frequency),W.gain.value=R,P.connect(W),W.connect(c.current),X.start(),P.start(),{oscillator:P,gainNode:W,lfo:X,lfoGain:ct}},N=(D,R)=>{const P=g.createOscillator(),W=g.createGain();P.type="sine",P.frequency.value=D;const X=g.createOscillator(),ct=g.createGain();return X.frequency.value=.02+Math.random()*.05,ct.gain.value=R*.5,X.connect(ct),ct.connect(W.gain),W.gain.value=R,P.connect(W),W.connect(c.current),X.start(),P.start(),{oscillator:P,gainNode:W,pulseLfo:X,pulseLfoGain:ct}},U=D=>{const R=2*g.sampleRate,P=g.createBuffer(1,R,g.sampleRate),W=P.getChannelData(0);for(let O=0;O<R;O++)W[O]=Math.random()*2-1;const X=g.createBufferSource();X.buffer=P,X.loop=!0;const ct=g.createGain();ct.gain.value=D;const Y=g.createBiquadFilter();return Y.type="bandpass",Y.frequency.value=400+Math.random()*800,Y.Q.value=.5,X.connect(Y),Y.connect(ct),ct.connect(c.current),X.start(),{noise:X,noiseGain:ct,filter:Y}},V=()=>{const D=()=>{if(!t)return;const P=g.createOscillator(),W=g.createGain(),X=220+Math.random()*440;P.frequency.value=X;const ct=["sine","triangle","sawtooth"];P.type=ct[Math.floor(Math.random()*ct.length)];const Y=g.currentTime;W.gain.setValueAtTime(0,Y),W.gain.linearRampToValueAtTime(.5,Y+.05),W.gain.linearRampToValueAtTime(0,Y+1.5),P.frequency.setValueAtTime(X,Y),P.frequency.linearRampToValueAtTime(X*1.2,Y+.3),P.connect(W),W.connect(c.current),P.start(Y),P.stop(Y+1.5);const O=5e3+Math.random()*1e4;setTimeout(D,O)},R=2e3+Math.random()*5e3;setTimeout(D,R)},k=()=>{const D=()=>{if(!t)return;const P=g.createOscillator(),W=g.createGain(),X=110+Math.random()*880;P.frequency.value=X;const ct=["sine","square","triangle","sawtooth"];P.type=ct[Math.floor(Math.random()*ct.length)];const Y=g.currentTime;W.gain.setValueAtTime(0,Y),W.gain.linearRampToValueAtTime(.7,Y+.01),W.gain.exponentialRampToValueAtTime(.001,Y+.3),P.frequency.setValueAtTime(X,Y),P.frequency.exponentialRampToValueAtTime(X*.8,Y+.3),P.connect(W),W.connect(c.current),P.start(Y),P.stop(Y+.3);const O=2e3+Math.random()*5e3;setTimeout(D,O)},R=1e3+Math.random()*3e3;setTimeout(D,R)};l.current.push(_(27.5,"sine",.15)),l.current.push(_(55,"sine",.12)),l.current.push(_(110,"sine",.08)),l.current.push(F(220,.04)),l.current.push(N(73.4,.1)),l.current.push(U(.015)),V(),k();const B=g.createBiquadFilter();B.type="lowpass",B.frequency.value=2e3,B.Q.value=.5,c.current.disconnect(),c.current.connect(B),B.connect(C);const J=()=>{if(!t)return;const D=g.currentTime;B.frequency.setValueAtTime(2e3,D),B.frequency.linearRampToValueAtTime(800,D+15),B.frequency.linearRampToValueAtTime(2e3,D+30),setTimeout(J,3e4)};J()}catch(g){console.error("Error starting audio:",g)}},p=()=>{try{l.current.length>0&&(l.current.forEach(g=>{g.oscillator&&g.oscillator.stop(),g.noise&&g.noise.stop(),g.lfo&&g.lfo.stop(),g.pulseLfo&&g.pulseLfo.stop()}),l.current=[]),c.current&&(c.current.gain.setValueAtTime(c.current.gain.value,r.current.currentTime),c.current.gain.linearRampToValueAtTime(0,r.current.currentTime+.5))}catch(g){console.error("Error stopping audio:",g)}};return Ba.useEffect(()=>()=>{p(),r.current&&r.current.state!=="closed"&&r.current.close()},[]),Ba.useEffect(()=>{if(o.current)try{const g=new Sy;g.background=new Te(0);const v=new ai(75,window.innerWidth/window.innerHeight,.1,1e3);v.position.z=5;const S=new bA({antialias:!0,alpha:!0});S.setSize(window.innerWidth,window.innerHeight),S.setPixelRatio(window.devicePixelRatio),o.current.appendChild(S.domElement);const y=new Mi;g.add(y);const E=new ri,C=new Ov({color:16777215,size:.05,sizeAttenuation:!0}),M=[],_=[];for(let H=0;H<2e3;H++){const ht=(Math.random()-.5)*20,w=(Math.random()-.5)*20,j=(Math.random()-.5)*20;M.push(ht,w,j),_.push({twinkleSpeed:.5+Math.random()*2,twinklePhase:Math.random()*Math.PI*2,size:.03+Math.random()*.04,color:new Te(.8+Math.random()*.2,.8+Math.random()*.2,.8+Math.random()*.2)})}E.setAttribute("position",new mi(M,3));const F=new My(E,C);y.add(F);const N=new Mi;g.add(N);const U=new Mi;N.add(U);const V=new Mi;N.add(V);const k=new Mi;N.add(k);const B=H=>{const{turns:ht=5,segments:w=1e3,radius:j=1,height:dt=2,thickness:mt=.01,taper:K=.5}=H,ut=new Iy,gt=[];for(let Mt=0;Mt<=w;Mt++){const bt=Mt/w,Qt=ht*Math.PI*2*bt,kt=j*(1-bt*K),le=kt*Math.cos(Qt),ce=dt*(bt-.5),Vt=kt*Math.sin(Qt);gt.push(new et(le,ce,Vt))}for(let Mt=0;Mt<gt.length-1;Mt++){const bt=new Bv(gt[Mt],gt[Mt+1]);ut.add(bt)}return{curve:ut,points:gt}},J=B({turns:3,segments:1e3,radius:2,height:3,taper:.7}),D=B({turns:2,segments:800,radius:2.5,height:2.5,taper:.4}),R=(H,ht)=>{const{color:w=16777215,linewidth:j=1,opacity:dt=1,points:mt}=ht,{curve:K}=H,ut=new ri().setFromPoints(mt||H.points),gt=[],Mt=ut.attributes.position.array;for(let le=0;le<Mt.length/3;le++){const ce=Mt[le*3+1],Vt=-1.5,Ke=(ce-Vt)/(1.5-Vt),ie=.2+Ke*.8,Zt=.1+Ke*.9;gt.push(ie,ie,ie,Zt)}ut.setAttribute("color",new mi(gt,4));const bt=new ud({vertexColors:!0,transparent:!0,opacity:1});return{line:new N_(ut,bt),speed:.3+Math.random()*.4,phase:Math.random()*Math.PI*2,opacityRange:.2+Math.random()*.3,baseOpacity:dt,originalPoints:(mt||H.points).slice()}},P=(H=50)=>{const ht=new Mi,w=[];for(let j=0;j<H;j++){const dt=Math.random()*Math.PI*2,mt=.5+Math.random()*3,K=-1.5+Math.random()*3,ut=dt+(Math.random()*2-1)*Math.PI*3,gt=.5+Math.random()*3,Mt=K+(Math.random()-.5)*2,bt=new et(mt*Math.cos(dt),K,mt*Math.sin(dt)),Qt=new et(gt*Math.cos(ut),Mt,gt*Math.sin(ut)),kt=[],le=20+Math.floor(Math.random()*30);for(let It=0;It<=le;It++){const ve=It/le,Ft=dt+(ut-dt)*ve,L=mt+(gt-mt)*ve,T=K+(Mt-K)*ve;kt.push(new et(L*Math.cos(Ft),T,L*Math.sin(Ft)))}const ce=new ri().setFromPoints(kt),Vt=[],I=ce.attributes.position.array;for(let It=0;It<I.length/3;It++){const ve=I[It*3+1],Ft=-1.5,T=(ve-Ft)/(1.5-Ft),at=.1+T*.9,yt=.05+T*.95;Vt.push(at,at,at,yt)}ce.setAttribute("color",new mi(Vt,4));const Ke=.3+Math.random()*.4,ie=new ud({vertexColors:!0,transparent:!0,opacity:1}),Zt=new N_(ce,ie);ht.add(Zt),w.push({line:Zt,speed:.1+Math.random()*.3,phase:Math.random()*Math.PI*2,rotationSpeed:.01+Math.random()*.03,rotationPhase:Math.random()*Math.PI*2,opacitySpeed:.2+Math.random()*.5,opacityPhase:Math.random()*Math.PI*2,opacityRange:.1+Math.random()*.3,baseOpacity:Ke,points:kt.slice(),morphSpeed:.05+Math.random()*.15,morphPhase:Math.random()*Math.PI*2})}return{group:ht,decorativeLinesData:w}},W=R(J,{opacity:.8});U.add(W.line);const X=R(D,{opacity:.6});V.add(X.line);const ct=P(80);k.add(ct.group);let Y=0;const O=()=>{if(Y+=.002,y.rotation.x=Math.sin(Y*.2)*.15,y.rotation.y=-Y*.4,y.rotation.z=Math.cos(Y*.15)*.08,N.rotation.x=Math.sin(Y*.5)*.3,N.rotation.y=Y*1.2,N.rotation.z=Math.cos(Y*.3)*.2,U.rotation.x=Math.sin(Y*.3)*.15,U.rotation.y=Math.sin(Y*.2)*.1,U.position.y=Math.sin(Y*.4)*.2,V.rotation.x=Math.sin(Y*.25)*.12,V.rotation.y=Math.sin(Y*.15)*.08,V.position.y=Math.sin(Y*.35)*.15,k.rotation.x=Math.sin(Y*.2)*.1,k.rotation.y=Math.sin(Y*.1)*.05,k.position.y=Math.sin(Y*.3)*.1,_.forEach((H,ht)=>{const w=Math.sin(Y*H.twinkleSpeed+H.twinklePhase)*.5+.5,j=.5+w*.5;C.size=H.size*j;const dt=.7+w*.3;C.color=new Te(H.color.r*dt,H.color.g*dt,H.color.b*dt)}),W.line.material.opacity=W.baseOpacity*(.5+Math.abs(Math.sin(Y*W.speed+W.phase))*W.opacityRange),W.originalPoints&&W.originalPoints.length>0){const H=W.line.geometry.attributes.position.array,ht=W.line.geometry.attributes.color.array;for(let w=0;w<W.originalPoints.length;w++){const j=W.originalPoints[w],dt=w/(W.originalPoints.length-1),mt=Math.sin(Y*.3+dt*Math.PI*4)*.03;H[w*3]=j.x+Math.sin(Y*.2+w*.05)*mt,H[w*3+1]=j.y+Math.cos(Y*.3+w*.05)*mt,H[w*3+2]=j.z+Math.sin(Y*.1+w*.05)*mt;const K=H[w*3+1],ut=-1.5,Mt=(K-ut)/(1.5-ut),bt=.2+Mt*.8,Qt=.1+Mt*.9;ht[w*4]=bt,ht[w*4+1]=bt,ht[w*4+2]=bt,ht[w*4+3]=Qt}W.line.geometry.attributes.position.needsUpdate=!0,W.line.geometry.attributes.color.needsUpdate=!0}if(X.line.material.opacity=X.baseOpacity*(.5+Math.abs(Math.sin(Y*X.speed+X.phase))*X.opacityRange),X.originalPoints&&X.originalPoints.length>0){const H=X.line.geometry.attributes.position.array,ht=X.line.geometry.attributes.color.array;for(let w=0;w<X.originalPoints.length;w++){const j=X.originalPoints[w],dt=w/(X.originalPoints.length-1),mt=Math.sin(Y*.4+dt*Math.PI*3)*.04;H[w*3]=j.x+Math.sin(Y*.3+w*.06)*mt,H[w*3+1]=j.y+Math.cos(Y*.4+w*.06)*mt,H[w*3+2]=j.z+Math.sin(Y*.2+w*.06)*mt;const K=H[w*3+1],ut=-1.5,Mt=(K-ut)/(1.5-ut),bt=.2+Mt*.8,Qt=.1+Mt*.9;ht[w*4]=bt,ht[w*4+1]=bt,ht[w*4+2]=bt,ht[w*4+3]=Qt}X.line.geometry.attributes.position.needsUpdate=!0,X.line.geometry.attributes.color.needsUpdate=!0}ct.decorativeLinesData.forEach(H=>{const{line:ht,speed:w,phase:j,rotationSpeed:dt,rotationPhase:mt,opacitySpeed:K,opacityPhase:ut,opacityRange:gt,baseOpacity:Mt,points:bt,morphSpeed:Qt,morphPhase:kt}=H;ht.rotation.x=Math.sin(Y*dt+mt)*.05,ht.rotation.z=Math.cos(Y*dt+mt)*.05;const le=ht.geometry.attributes.position.array,ce=ht.geometry.attributes.color.array;for(let Vt=0;Vt<bt.length;Vt++){const I=bt[Vt],Ke=Vt/(bt.length-1),ie=Math.sin(Y*Qt+kt+Ke*Math.PI*2)*.15;le[Vt*3]=I.x+Math.sin(Y*.5+Vt*.1)*ie,le[Vt*3+1]=I.y+Math.cos(Y*.7+Vt*.1)*ie,le[Vt*3+2]=I.z+Math.sin(Y*.3+Vt*.1)*ie;const Zt=le[Vt*3+1],It=-1.5,Ft=(Zt-It)/(1.5-It),L=.1+Ft*.9,T=.05+Ft*.95;ce[Vt*4]=L,ce[Vt*4+1]=L,ce[Vt*4+2]=L,ce[Vt*4+3]=T}ht.geometry.attributes.position.needsUpdate=!0,ht.geometry.attributes.color.needsUpdate=!0}),S.render(g,v),requestAnimationFrame(O)};O();const tt=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),S.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",tt),()=>{window.removeEventListener("resize",tt),o.current&&S.domElement&&o.current.removeChild(S.domElement)}}catch(g){console.error("Error in CosmicSpiral:",g)}},[]),Fa.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh"},children:[Fa.jsx("div",{ref:o,style:{width:"100%",height:"100vh",background:"black",overflow:"hidden",position:"relative"}}),Fa.jsx("button",{onClick:h,style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"18px",zIndex:1e3,transition:"all 0.3s ease",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},onMouseOver:g=>{g.currentTarget.style.background="rgba(255, 255, 255, 0.3)",g.currentTarget.style.transform="scale(1.1)"},onMouseOut:g=>{g.currentTarget.style.background="rgba(255, 255, 255, 0.2)",g.currentTarget.style.transform="scale(1)"},children:"↻"}),Fa.jsx("button",{onClick:d,style:{position:"absolute",top:"20px",right:"70px",background:"rgba(255, 255, 255, 0.2)",color:"white",border:"1px solid rgba(255, 255, 255, 0.3)",borderRadius:"50%",width:"40px",height:"40px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"18px",zIndex:1e3,transition:"all 0.3s ease",boxShadow:"0 0 10px rgba(0, 0, 0, 0.3)"},onMouseOver:g=>{g.currentTarget.style.background="rgba(255, 255, 255, 0.3)",g.currentTarget.style.transform="scale(1.1)"},onMouseOut:g=>{g.currentTarget.style.background="rgba(255, 255, 255, 0.2)",g.currentTarget.style.transform="scale(1)"},children:t?"🔊":"🔈"})]})};function RA(){return Fa.jsx("div",{style:{width:"100vw",height:"100vh",overflow:"hidden",position:"fixed",top:0,left:0},children:Fa.jsx(AA,{})})}const kv=document.getElementById("root");if(!kv)throw new Error("Root element not found");ex.createRoot(kv).render(Fa.jsx(Ba.StrictMode,{children:Fa.jsx(RA,{})}));
//# sourceMappingURL=index.js.map
