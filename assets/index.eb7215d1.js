var i1=Object.defineProperty,a1=Object.defineProperties;var s1=Object.getOwnPropertyDescriptors;var rf=Object.getOwnPropertySymbols;var l1=Object.prototype.hasOwnProperty,c1=Object.prototype.propertyIsEnumerable;var nf=(e,t,r)=>t in e?i1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,of=(e,t)=>{for(var r in t||(t={}))l1.call(t,r)&&nf(e,r,t[r]);if(rf)for(var r of rf(t))c1.call(t,r)&&nf(e,r,t[r]);return e},af=(e,t)=>a1(e,s1(t));var u1=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var EC=u1((Ve,He)=>{const d1=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}};d1();var _={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bi=Symbol.for("react.element"),f1=Symbol.for("react.portal"),m1=Symbol.for("react.fragment"),p1=Symbol.for("react.strict_mode"),g1=Symbol.for("react.profiler"),h1=Symbol.for("react.provider"),b1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),y1=Symbol.for("react.suspense"),w1=Symbol.for("react.memo"),x1=Symbol.for("react.lazy"),sf=Symbol.iterator;function k1(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,sg={};function to(e,t,r){this.props=e,this.context=t,this.refs=sg,this.updater=r||ig}to.prototype.isReactComponent={};to.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};to.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lg(){}lg.prototype=to.prototype;function pu(e,t,r){this.props=e,this.context=t,this.refs=sg,this.updater=r||ig}var gu=pu.prototype=new lg;gu.constructor=pu;ag(gu,to.prototype);gu.isPureReactComponent=!0;var lf=Array.isArray,cg=Object.prototype.hasOwnProperty,hu={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function dg(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)cg.call(t,n)&&!ug.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:bi,type:e,key:i,ref:a,props:o,_owner:hu.current}}function _1(e,t){return{$$typeof:bi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===bi}function S1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var cf=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?S1(""+e.key):t.toString(36)}function ra(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case bi:case f1:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+el(a,0):n,lf(o)?(r="",e!=null&&(r=e.replace(cf,"$&/")+"/"),ra(o,t,r,"",function(c){return c})):o!=null&&(bu(o)&&(o=_1(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(cf,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",lf(e))for(var s=0;s<e.length;s++){i=e[s];var l=n+el(i,s);a+=ra(i,t,r,l,o)}else if(l=k1(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=n+el(i,s++),a+=ra(i,t,r,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function zi(e,t,r){if(e==null)return e;var n=[],o=0;return ra(e,n,"","",function(i){return t.call(r,i,o++)}),n}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},na={transition:null},I1={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:na,ReactCurrentOwner:hu};H.Children={map:zi,forEach:function(e,t,r){zi(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return zi(e,function(){t++}),t},toArray:function(e){return zi(e,function(t){return t})||[]},only:function(e){if(!bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=to;H.Fragment=m1;H.Profiler=g1;H.PureComponent=pu;H.StrictMode=p1;H.Suspense=y1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I1;H.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ag({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=hu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)cg.call(t,l)&&!ug.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:bi,type:e.type,key:o,ref:i,props:n,_owner:a}};H.createContext=function(e){return e={$$typeof:b1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:h1,_context:e},e.Consumer=e};H.createElement=dg;H.createFactory=function(e){var t=dg.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:v1,render:e}};H.isValidElement=bu;H.lazy=function(e){return{$$typeof:x1,_payload:{_status:-1,_result:e},_init:E1}};H.memo=function(e,t){return{$$typeof:w1,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=na.transition;na.transition={};try{e()}finally{na.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Re.current.useCallback(e,t)};H.useContext=function(e){return Re.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};H.useEffect=function(e,t){return Re.current.useEffect(e,t)};H.useId=function(){return Re.current.useId()};H.useImperativeHandle=function(e,t,r){return Re.current.useImperativeHandle(e,t,r)};H.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Re.current.useMemo(e,t)};H.useReducer=function(e,t,r){return Re.current.useReducer(e,t,r)};H.useRef=function(e){return Re.current.useRef(e)};H.useState=function(e){return Re.current.useState(e)};H.useSyncExternalStore=function(e,t,r){return Re.current.useSyncExternalStore(e,t,r)};H.useTransition=function(){return Re.current.useTransition()};H.version="18.1.0";_.exports=H;var fg=_.exports,Gl={},mg={exports:{}},Ye={},pg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,j){var F=P.length;P.push(j);e:for(;0<F;){var ne=F-1>>>1,le=P[ne];if(0<o(le,j))P[ne]=j,P[F]=le,F=ne;else break e}}function r(P){return P.length===0?null:P[0]}function n(P){if(P.length===0)return null;var j=P[0],F=P.pop();if(F!==j){P[0]=F;e:for(var ne=0,le=P.length,lt=le>>>1;ne<lt;){var yt=2*(ne+1)-1,Dr=P[yt],wt=yt+1,jr=P[wt];if(0>o(Dr,F))wt<le&&0>o(jr,Dr)?(P[ne]=jr,P[wt]=F,ne=wt):(P[ne]=Dr,P[yt]=F,ne=yt);else if(wt<le&&0>o(jr,F))P[ne]=jr,P[wt]=F,ne=wt;else break e}}return j}function o(P,j){var F=P.sortIndex-j.sortIndex;return F!==0?F:P.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var l=[],c=[],d=1,m=null,u=3,h=!1,w=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var j=r(c);j!==null;){if(j.callback===null)n(c);else if(j.startTime<=P)n(c),j.sortIndex=j.expirationTime,t(l,j);else break;j=r(c)}}function b(P){if(E=!1,g(P),!w)if(r(l)!==null)w=!0,Lr(x);else{var j=r(c);j!==null&&wn(b,j.startTime-P)}}function x(P,j){w=!1,E&&(E=!1,p(k),k=-1),h=!0;var F=u;try{for(g(j),m=r(l);m!==null&&(!(m.expirationTime>j)||P&&!B());){var ne=m.callback;if(typeof ne=="function"){m.callback=null,u=m.priorityLevel;var le=ne(m.expirationTime<=j);j=e.unstable_now(),typeof le=="function"?m.callback=le:m===r(l)&&n(l),g(j)}else n(l);m=r(l)}if(m!==null)var lt=!0;else{var yt=r(c);yt!==null&&wn(b,yt.startTime-j),lt=!1}return lt}finally{m=null,u=F,h=!1}}var I=!1,T=null,k=-1,A=5,z=-1;function B(){return!(e.unstable_now()-z<A)}function ue(){if(T!==null){var P=e.unstable_now();z=P;var j=!0;try{j=T(!0,P)}finally{j?be():(I=!1,T=null)}}else I=!1}var be;if(typeof f=="function")be=function(){f(ue)};else if(typeof MessageChannel!="undefined"){var vt=new MessageChannel,Je=vt.port2;vt.port1.onmessage=ue,be=function(){Je.postMessage(null)}}else be=function(){C(ue,0)};function Lr(P){T=P,I||(I=!0,be())}function wn(P,j){k=C(function(){P(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||h||(w=!0,Lr(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(P){switch(u){case 1:case 2:case 3:var j=3;break;default:j=u}var F=u;u=j;try{return P()}finally{u=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=u;u=P;try{return j()}finally{u=F}},e.unstable_scheduleCallback=function(P,j,F){var ne=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ne+F:ne):F=ne,P){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=F+le,P={id:d++,callback:j,priorityLevel:P,startTime:F,expirationTime:le,sortIndex:-1},F>ne?(P.sortIndex=F,t(c,P),r(l)===null&&P===r(c)&&(E?(p(k),k=-1):E=!0,wn(b,F-ne))):(P.sortIndex=le,t(l,P),w||h||(w=!0,Lr(x))),P},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(P){var j=u;return function(){var F=u;u=j;try{return P.apply(this,arguments)}finally{u=F}}}})(gg);pg.exports=gg;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=_.exports,Ke=pg.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,Wo={};function fn(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){for(Wo[e]=t,e=0;e<t.length;e++)bg.add(t[e])}var Vt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Kl=Object.prototype.hasOwnProperty,T1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},df={};function C1(e){return Kl.call(df,e)?!0:Kl.call(uf,e)?!1:T1.test(e)?df[e]=!0:(uf[e]=!0,!1)}function A1(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P1(e,t,r,n){if(t===null||typeof t=="undefined"||A1(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var vu=/[\-:]([a-z])/g;function yu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vu,yu);Ee[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vu,yu);Ee[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vu,yu);Ee[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function wu(e,t,r,n){var o=Ee.hasOwnProperty(t)?Ee[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P1(t,r,o,n)&&(r=null),n||o===null?C1(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Xt=hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mi=Symbol.for("react.element"),kn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),xu=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),ku=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),_u=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),ff=Symbol.iterator;function uo(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,tl;function ko(e){if(tl===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var rl=!1;function nl(e,t){if(!e||rl)return"";rl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var l=`
`+o[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s);break}}}finally{rl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ko(e):""}function O1(e){switch(e.tag){case 5:return ko(e.type);case 16:return ko("Lazy");case 13:return ko("Suspense");case 19:return ko("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Xl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case kn:return"Portal";case Yl:return"Profiler";case xu:return"StrictMode";case ql:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yg:return(e.displayName||"Context")+".Consumer";case vg:return(e._context.displayName||"Context")+".Provider";case ku:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _u:return t=e.displayName||null,t!==null?t:Xl(e.type)||"Memo";case or:t=e._payload,e=e._init;try{return Xl(e(t))}catch{}}return null}function N1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(t);case 8:return t===xu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R1(e){var t=xg(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Li(e){e._valueTracker||(e._valueTracker=R1(e))}function kg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=xg(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function wa(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function mf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Sr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _g(e,t){t=t.checked,t!=null&&wu(e,"checked",t,!1)}function Zl(e,t){_g(e,t);var r=Sr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ec(e,t.type,r):t.hasOwnProperty("defaultValue")&&ec(e,t.type,Sr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ec(e,t,r){(t!=="number"||wa(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var _o=Array.isArray;function jn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Sr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function tc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(_o(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Sr(r)}}function Sg(e,t){var r=Sr(t.value),n=Sr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Di,Ig=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Di=Di||document.createElement("div"),Di.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Di.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Go(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z1=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){z1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ao[t]=Ao[e]})});function Tg(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}function Cg(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Tg(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var M1=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(e,t){if(t){if(M1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function oc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ac=null,Fn=null,$n=null;function bf(e){if(e=wi(e)){if(typeof ac!="function")throw Error(S(280));var t=e.stateNode;t&&(t=cs(t),ac(e.stateNode,e.type,t))}}function Ag(e){Fn?$n?$n.push(e):$n=[e]:Fn=e}function Pg(){if(Fn){var e=Fn,t=$n;if($n=Fn=null,bf(e),t)for(e=0;e<t.length;e++)bf(t[e])}}function Og(e,t){return e(t)}function Ng(){}var ol=!1;function Rg(e,t,r){if(ol)return e(t,r);ol=!0;try{return Og(e,t,r)}finally{ol=!1,(Fn!==null||$n!==null)&&(Ng(),Pg())}}function Ko(e,t){var r=e.stateNode;if(r===null)return null;var n=cs(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var sc=!1;if(Vt)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){sc=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{sc=!1}function L1(e,t,r,n,o,i,a,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var Po=!1,xa=null,ka=!1,lc=null,D1={onError:function(e){Po=!0,xa=e}};function j1(e,t,r,n,o,i,a,s,l){Po=!1,xa=null,L1.apply(D1,arguments)}function F1(e,t,r,n,o,i,a,s,l){if(j1.apply(this,arguments),Po){if(Po){var c=xa;Po=!1,xa=null}else throw Error(S(198));ka||(ka=!0,lc=c)}}function mn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function zg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vf(e){if(mn(e)!==e)throw Error(S(188))}function $1(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return vf(o),e;if(i===n)return vf(o),t;i=i.sibling}throw Error(S(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function Mg(e){return e=$1(e),e!==null?Lg(e):null}function Lg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lg(e);if(t!==null)return t;e=e.sibling}return null}var Dg=Ke.unstable_scheduleCallback,yf=Ke.unstable_cancelCallback,U1=Ke.unstable_shouldYield,B1=Ke.unstable_requestPaint,de=Ke.unstable_now,V1=Ke.unstable_getCurrentPriorityLevel,Eu=Ke.unstable_ImmediatePriority,jg=Ke.unstable_UserBlockingPriority,_a=Ke.unstable_NormalPriority,H1=Ke.unstable_LowPriority,Fg=Ke.unstable_IdlePriority,is=null,Et=null;function W1(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(is,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Y1,G1=Math.log,K1=Math.LN2;function Y1(e){return e>>>=0,e===0?32:31-(G1(e)/K1|0)|0}var ji=64,Fi=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Sa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=So(s):(i&=a,i!==0&&(n=So(i)))}else a=r&~o,a!==0?n=So(a):i!==0&&(n=So(i));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-gt(t),o=1<<r,n|=e[r],t&=~o;return n}function q1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q1(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-gt(i),s=1<<a,l=o[a];l===-1?((s&r)===0||(s&n)!==0)&&(o[a]=q1(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function cc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $g(){var e=ji;return ji<<=1,(ji&4194240)===0&&(ji=64),e}function il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function vi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=r}function X1(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-gt(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Iu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-gt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Y=0;function Ug(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bg,Tu,Vg,Hg,Wg,uc=!1,$i=[],hr=null,br=null,vr=null,Yo=new Map,qo=new Map,sr=[],J1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(e,t){switch(e){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(t.pointerId)}}function mo(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=wi(t),t!==null&&Tu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Z1(e,t,r,n,o){switch(t){case"focusin":return hr=mo(hr,e,t,r,n,o),!0;case"dragenter":return br=mo(br,e,t,r,n,o),!0;case"mouseover":return vr=mo(vr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Yo.set(i,mo(Yo.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,qo.set(i,mo(qo.get(i)||null,e,t,r,n,o)),!0}return!1}function Gg(e){var t=Hr(e.target);if(t!==null){var r=mn(t);if(r!==null){if(t=r.tag,t===13){if(t=zg(r),t!==null){e.blockedOn=t,Wg(e.priority,function(){Vg(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ic=n,r.target.dispatchEvent(n),ic=null}else return t=wi(r),t!==null&&Tu(t),e.blockedOn=r,!1;t.shift()}return!0}function xf(e,t,r){oa(e)&&r.delete(t)}function ey(){uc=!1,hr!==null&&oa(hr)&&(hr=null),br!==null&&oa(br)&&(br=null),vr!==null&&oa(vr)&&(vr=null),Yo.forEach(xf),qo.forEach(xf)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,uc||(uc=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,ey)))}function Qo(e){function t(o){return po(o,e)}if(0<$i.length){po($i[0],e);for(var r=1;r<$i.length;r++){var n=$i[r];n.blockedOn===e&&(n.blockedOn=null)}}for(hr!==null&&po(hr,e),br!==null&&po(br,e),vr!==null&&po(vr,e),Yo.forEach(t),qo.forEach(t),r=0;r<sr.length;r++)n=sr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)Gg(r),r.blockedOn===null&&sr.shift()}var Un=Xt.ReactCurrentBatchConfig,Ea=!0;function ty(e,t,r,n){var o=Y,i=Un.transition;Un.transition=null;try{Y=1,Cu(e,t,r,n)}finally{Y=o,Un.transition=i}}function ry(e,t,r,n){var o=Y,i=Un.transition;Un.transition=null;try{Y=4,Cu(e,t,r,n)}finally{Y=o,Un.transition=i}}function Cu(e,t,r,n){if(Ea){var o=dc(e,t,r,n);if(o===null)gl(e,t,n,Ia,r),wf(e,n);else if(Z1(o,e,t,r,n))n.stopPropagation();else if(wf(e,n),t&4&&-1<J1.indexOf(e)){for(;o!==null;){var i=wi(o);if(i!==null&&Bg(i),i=dc(e,t,r,n),i===null&&gl(e,t,n,Ia,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else gl(e,t,n,null,r)}}var Ia=null;function dc(e,t,r,n){if(Ia=null,e=Su(n),e=Hr(e),e!==null)if(t=mn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=zg(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ia=e,null}function Kg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case Eu:return 1;case jg:return 4;case _a:case H1:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var mr=null,Au=null,ia=null;function Yg(){if(ia)return ia;var e,t=Au,r=t.length,n,o="value"in mr?mr.value:mr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return ia=o.slice(e,1<n?1-n:void 0)}function aa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function kf(){return!1}function qe(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ui:kf,this.isPropagationStopped=kf,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pu=qe(ro),yi=se({},ro,{view:0,detail:0}),ny=qe(yi),al,sl,go,as=se({},yi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==go&&(go&&e.type==="mousemove"?(al=e.screenX-go.screenX,sl=e.screenY-go.screenY):sl=al=0,go=e),al)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),_f=qe(as),oy=se({},as,{dataTransfer:0}),iy=qe(oy),ay=se({},yi,{relatedTarget:0}),ll=qe(ay),sy=se({},ro,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=qe(sy),cy=se({},ro,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=qe(cy),dy=se({},ro,{data:0}),Sf=qe(dy),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=py[e])?!!t[e]:!1}function Ou(){return gy}var hy=se({},yi,{key:function(e){if(e.key){var t=fy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=aa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?aa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?aa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),by=qe(hy),vy=se({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=qe(vy),yy=se({},yi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),wy=qe(yy),xy=se({},ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=qe(xy),_y=se({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sy=qe(_y),Ey=[9,13,27,32],Nu=Vt&&"CompositionEvent"in window,Oo=null;Vt&&"documentMode"in document&&(Oo=document.documentMode);var Iy=Vt&&"TextEvent"in window&&!Oo,qg=Vt&&(!Nu||Oo&&8<Oo&&11>=Oo),If=String.fromCharCode(32),Tf=!1;function Qg(e,t){switch(e){case"keyup":return Ey.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function Ty(e,t){switch(e){case"compositionend":return Xg(t);case"keypress":return t.which!==32?null:(Tf=!0,If);case"textInput":return e=t.data,e===If&&Tf?null:e;default:return null}}function Cy(e,t){if(Sn)return e==="compositionend"||!Nu&&Qg(e,t)?(e=Yg(),ia=Au=mr=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qg&&t.locale!=="ko"?null:t.data;default:return null}}var Ay={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ay[e.type]:t==="textarea"}function Jg(e,t,r,n){Ag(n),t=Ta(t,"onChange"),0<t.length&&(r=new Pu("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var No=null,Xo=null;function Py(e){ch(e,0)}function ss(e){var t=Tn(e);if(kg(t))return e}function Oy(e,t){if(e==="change")return t}var Zg=!1;if(Vt){var cl;if(Vt){var ul="oninput"in document;if(!ul){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),ul=typeof Af.oninput=="function"}cl=ul}else cl=!1;Zg=cl&&(!document.documentMode||9<document.documentMode)}function Pf(){No&&(No.detachEvent("onpropertychange",eh),Xo=No=null)}function eh(e){if(e.propertyName==="value"&&ss(Xo)){var t=[];Jg(t,Xo,e,Su(e)),Rg(Py,t)}}function Ny(e,t,r){e==="focusin"?(Pf(),No=t,Xo=r,No.attachEvent("onpropertychange",eh)):e==="focusout"&&Pf()}function Ry(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ss(Xo)}function zy(e,t){if(e==="click")return ss(t)}function My(e,t){if(e==="input"||e==="change")return ss(t)}function Ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Ly;function Jo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Kl.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var r=Of(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Of(r)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rh(){for(var e=window,t=wa();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=wa(e.document)}return t}function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dy(e){var t=rh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&th(r.ownerDocument.documentElement,r)){if(n!==null&&Ru(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Nf(r,i);var a=Nf(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jy=Vt&&"documentMode"in document&&11>=document.documentMode,En=null,fc=null,Ro=null,mc=!1;function Rf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;mc||En==null||En!==wa(n)||(n=En,"selectionStart"in n&&Ru(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ro&&Jo(Ro,n)||(Ro=n,n=Ta(fc,"onSelect"),0<n.length&&(t=new Pu("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=En)))}function Bi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var In={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},dl={},nh={};Vt&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ls(e){if(dl[e])return dl[e];if(!In[e])return e;var t=In[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in nh)return dl[e]=t[r];return e}var oh=ls("animationend"),ih=ls("animationiteration"),ah=ls("animationstart"),sh=ls("transitionend"),lh=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){lh.set(e,t),fn(t,[e])}for(var fl=0;fl<zf.length;fl++){var ml=zf[fl],Fy=ml.toLowerCase(),$y=ml[0].toUpperCase()+ml.slice(1);Or(Fy,"on"+$y)}Or(oh,"onAnimationEnd");Or(ih,"onAnimationIteration");Or(ah,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(sh,"onTransitionEnd");Kn("onMouseEnter",["mouseout","mouseover"]);Kn("onMouseLeave",["mouseout","mouseover"]);Kn("onPointerEnter",["pointerout","pointerover"]);Kn("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Mf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,F1(n,t,void 0,e),e.currentTarget=null}function ch(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;Mf(o,s,c),i=l}else for(a=0;a<n.length;a++){if(s=n[a],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;Mf(o,s,c),i=l}}}if(ka)throw e=lc,ka=!1,lc=null,e}function Z(e,t){var r=t[vc];r===void 0&&(r=t[vc]=new Set);var n=e+"__bubble";r.has(n)||(uh(t,e,2,!1),r.add(n))}function pl(e,t,r){var n=0;t&&(n|=4),uh(r,e,n,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function Zo(e){if(!e[Vi]){e[Vi]=!0,bg.forEach(function(r){r!=="selectionchange"&&(Uy.has(r)||pl(r,!1,e),pl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,pl("selectionchange",!1,t))}}function uh(e,t,r,n){switch(Kg(t)){case 1:var o=ty;break;case 4:o=ry;break;default:o=Cu}r=o.bind(null,t,r,e),o=void 0,!sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function gl(e,t,r,n,o){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Hr(s),a===null)return;if(l=a.tag,l===5||l===6){n=i=a;continue e}s=s.parentNode}}n=n.return}Rg(function(){var c=i,d=Su(r),m=[];e:{var u=lh.get(e);if(u!==void 0){var h=Pu,w=e;switch(e){case"keypress":if(aa(r)===0)break e;case"keydown":case"keyup":h=by;break;case"focusin":w="focus",h=ll;break;case"focusout":w="blur",h=ll;break;case"beforeblur":case"afterblur":h=ll;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=wy;break;case oh:case ih:case ah:h=ly;break;case sh:h=ky;break;case"scroll":h=ny;break;case"wheel":h=Sy;break;case"copy":case"cut":case"paste":h=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ef}var E=(t&4)!==0,C=!E&&e==="scroll",p=E?u!==null?u+"Capture":null:u;E=[];for(var f=c,g;f!==null;){g=f;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,p!==null&&(b=Ko(f,p),b!=null&&E.push(ei(f,b,g)))),C)break;f=f.return}0<E.length&&(u=new h(u,w,null,r,d),m.push({event:u,listeners:E}))}}if((t&7)===0){e:{if(u=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",u&&r!==ic&&(w=r.relatedTarget||r.fromElement)&&(Hr(w)||w[Ht]))break e;if((h||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,h?(w=r.relatedTarget||r.toElement,h=c,w=w?Hr(w):null,w!==null&&(C=mn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(h=null,w=c),h!==w)){if(E=_f,b="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ef,b="onPointerLeave",p="onPointerEnter",f="pointer"),C=h==null?u:Tn(h),g=w==null?u:Tn(w),u=new E(b,f+"leave",h,r,d),u.target=C,u.relatedTarget=g,b=null,Hr(d)===c&&(E=new E(p,f+"enter",w,r,d),E.target=g,E.relatedTarget=C,b=E),C=b,h&&w)t:{for(E=h,p=w,f=0,g=E;g;g=xn(g))f++;for(g=0,b=p;b;b=xn(b))g++;for(;0<f-g;)E=xn(E),f--;for(;0<g-f;)p=xn(p),g--;for(;f--;){if(E===p||p!==null&&E===p.alternate)break t;E=xn(E),p=xn(p)}E=null}else E=null;h!==null&&Lf(m,u,h,E,!1),w!==null&&C!==null&&Lf(m,C,w,E,!0)}}e:{if(u=c?Tn(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var x=Oy;else if(Cf(u))if(Zg)x=My;else{x=Ry;var I=Ny}else(h=u.nodeName)&&h.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(x=zy);if(x&&(x=x(e,c))){Jg(m,x,r,d);break e}I&&I(e,u,c),e==="focusout"&&(I=u._wrapperState)&&I.controlled&&u.type==="number"&&ec(u,"number",u.value)}switch(I=c?Tn(c):window,e){case"focusin":(Cf(I)||I.contentEditable==="true")&&(En=I,fc=c,Ro=null);break;case"focusout":Ro=fc=En=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,Rf(m,r,d);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":Rf(m,r,d)}var T;if(Nu)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Sn?Qg(e,r)&&(k="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(k="onCompositionStart");k&&(qg&&r.locale!=="ko"&&(Sn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Sn&&(T=Yg()):(mr=d,Au="value"in mr?mr.value:mr.textContent,Sn=!0)),I=Ta(c,k),0<I.length&&(k=new Sf(k,e,null,r,d),m.push({event:k,listeners:I}),T?k.data=T:(T=Xg(r),T!==null&&(k.data=T)))),(T=Iy?Ty(e,r):Cy(e,r))&&(c=Ta(c,"onBeforeInput"),0<c.length&&(d=new Sf("onBeforeInput","beforeinput",null,r,d),m.push({event:d,listeners:c}),d.data=T))}ch(m,t)})}function ei(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ta(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ko(e,r),i!=null&&n.unshift(ei(e,i,o)),i=Ko(e,t),i!=null&&n.push(ei(e,i,o))),e=e.return}return n}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lf(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&c!==null&&(s=c,o?(l=Ko(r,i),l!=null&&a.unshift(ei(r,l,s))):o||(l=Ko(r,i),l!=null&&a.push(ei(r,l,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var By=/\r\n?/g,Vy=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(By,`
`).replace(Vy,"")}function Hi(e,t,r){if(t=Df(t),Df(e)!==t&&r)throw Error(S(425))}function Ca(){}var pc=null,gc=null;function hc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof jf!="undefined"?function(e){return jf.resolve(null).then(e).catch(Gy)}:bc;function Gy(e){setTimeout(function(){throw e})}function hl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Qo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Qo(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var no=Math.random().toString(36).slice(2),_t="__reactFiber$"+no,ti="__reactProps$"+no,Ht="__reactContainer$"+no,vc="__reactEvents$"+no,Ky="__reactListeners$"+no,Yy="__reactHandles$"+no;function Hr(e){var t=e[_t];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ht]||r[_t]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ff(e);e!==null;){if(r=e[_t])return r;e=Ff(e)}return t}e=r,r=e.parentNode}return null}function wi(e){return e=e[_t]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function cs(e){return e[ti]||null}var yc=[],Cn=-1;function Nr(e){return{current:e}}function te(e){0>Cn||(e.current=yc[Cn],yc[Cn]=null,Cn--)}function J(e,t){Cn++,yc[Cn]=e.current,e.current=t}var Er={},Ae=Nr(Er),je=Nr(!1),Jr=Er;function Yn(e,t){var r=e.type.contextTypes;if(!r)return Er;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Aa(){te(je),te(Ae)}function $f(e,t,r){if(Ae.current!==Er)throw Error(S(168));J(Ae,t),J(je,r)}function dh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(S(108,N1(e)||"Unknown",o));return se({},r,n)}function Pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Er,Jr=Ae.current,J(Ae,e),J(je,je.current),!0}function Uf(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=dh(e,t,Jr),n.__reactInternalMemoizedMergedChildContext=e,te(je),te(Ae),J(Ae,e)):te(je),J(je,r)}var Lt=null,us=!1,bl=!1;function fh(e){Lt===null?Lt=[e]:Lt.push(e)}function qy(e){us=!0,fh(e)}function Rr(){if(!bl&&Lt!==null){bl=!0;var e=0,t=Y;try{var r=Lt;for(Y=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Lt=null,us=!1}catch(o){throw Lt!==null&&(Lt=Lt.slice(e+1)),Dg(Eu,Rr),o}finally{Y=t,bl=!1}}return null}var Qy=Xt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Oa=Nr(null),Na=null,An=null,zu=null;function Mu(){zu=An=Na=null}function Lu(e){var t=Oa.current;te(Oa),e._currentValue=t}function wc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Bn(e,t){Na=e,zu=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(zu!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Na===null)throw Error(S(308));An=e,Na.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var mt=null,ir=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t){var r=e.updateQueue;r!==null&&(r=r.shared,r0(e)?(e=r.interleaved,e===null?(t.next=t,mt===null?mt=[r]:mt.push(r)):(t.next=e.next,e.next=t),r.interleaved=t):(e=r.pending,e===null?t.next=t:(t.next=e.next,e.next=t),r.pending=t))}function sa(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Iu(e,r)}}function Bf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ra(e,t,r,n){var o=e.updateQueue;ir=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,a===null?i=c:a.next=c,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(i!==null){var m=o.baseState;a=0,d=c=l=null,s=i;do{var u=s.lane,h=s.eventTime;if((n&u)===u){d!==null&&(d=d.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,E=s;switch(u=t,h=r,E.tag){case 1:if(w=E.payload,typeof w=="function"){m=w.call(h,m,u);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,u=typeof w=="function"?w.call(h,m,u):w,u==null)break e;m=se({},m,u);break e;case 2:ir=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,u=o.effects,u===null?o.effects=[s]:u.push(s))}else h={eventTime:h,lane:u,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=h,l=m):d=d.next=h,a|=u;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;u=s,s=u.next,u.next=null,o.lastBaseUpdate=u,o.shared.pending=null}}while(1);if(d===null&&(l=m),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);tn|=a,e.lanes=a,e.memoizedState=m}}function Vf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(S(191,o));o.call(n)}}}var ph=new hg.Component().refs;function xc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ds={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=xr(e),i=Bt(n,o);i.payload=t,r!=null&&(i.callback=r),yr(e,i),t=ot(e,o,n),t!==null&&sa(t,e,o)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=xr(e),i=Bt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),yr(e,i),t=ot(e,o,n),t!==null&&sa(t,e,o)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=xr(e),o=Bt(r,n);o.tag=2,t!=null&&(o.callback=t),yr(e,o),t=ot(e,n,r),t!==null&&sa(t,e,n)}};function Hf(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!Jo(r,n)||!Jo(o,i):!0}function gh(e,t,r){var n=!1,o=Er,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=Fe(t)?Jr:Ae.current,n=t.contextTypes,i=(n=n!=null)?Yn(e,o):Er),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ds,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wf(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ds.enqueueReplaceState(t,t.state,null)}function kc(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=ph,Du(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=Fe(t)?Jr:Ae.current,o.context=Yn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xc(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ds.enqueueReplaceState(o,o.state,null),Ra(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}var Pn=[],On=0,za=null,Ma=0,et=[],tt=0,Zr=null,jt=1,Ft="";function $r(e,t){Pn[On++]=Ma,Pn[On++]=za,za=e,Ma=t}function hh(e,t,r){et[tt++]=jt,et[tt++]=Ft,et[tt++]=Zr,Zr=e;var n=jt;e=Ft;var o=32-gt(n)-1;n&=~(1<<o),r+=1;var i=32-gt(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,jt=1<<32-gt(t)+o|r<<o|n,Ft=i+e}else jt=1<<i|r<<o|n,Ft=e}function ju(e){e.return!==null&&($r(e,1),hh(e,1,0))}function Fu(e){for(;e===za;)za=Pn[--On],Pn[On]=null,Ma=Pn[--On],Pn[On]=null;for(;e===Zr;)Zr=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null,jt=et[--tt],et[tt]=null}var We=null,Le=null,oe=!1,ft=null;function bh(e,t){var r=rt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Gf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Le=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Zr!==null?{id:jt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=rt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,We=e,Le=null,!0):!1;default:return!1}}function _c(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sc(e){if(oe){var t=Le;if(t){var r=t;if(!Gf(e,t)){if(_c(e))throw Error(S(418));t=Dt(r.nextSibling);var n=We;t&&Gf(e,t)?bh(n,r):(e.flags=e.flags&-4097|2,oe=!1,We=e)}}else{if(_c(e))throw Error(S(418));e.flags=e.flags&-4097|2,oe=!1,We=e}}}function Kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function ho(e){if(e!==We)return!1;if(!oe)return Kf(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hc(e.type,e.memoizedProps)),t&&(t=Le)){if(_c(e)){for(e=Le;e;)e=Dt(e.nextSibling);throw Error(S(418))}for(;t;)bh(e,t),t=Dt(t.nextSibling)}if(Kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Le=Dt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=We?Dt(e.stateNode.nextSibling):null;return!0}function qn(){Le=We=null,oe=!1}function $u(e){ft===null?ft=[e]:ft.push(e)}function bo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===ph&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Wi(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yf(e){var t=e._init;return t(e._payload)}function vh(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function r(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function n(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function o(p,f){return p=Ir(p,f),p.index=0,p.sibling=null,p}function i(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,g,b){return f===null||f.tag!==6?(f=_l(g,p.mode,b),f.return=p,f):(f=o(f,g),f.return=p,f)}function l(p,f,g,b){var x=g.type;return x===_n?d(p,f,g.props.children,b,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===or&&Yf(x)===f.type)?(b=o(f,g.props),b.ref=bo(p,f,g),b.return=p,b):(b=fa(g.type,g.key,g.props,null,p.mode,b),b.ref=bo(p,f,g),b.return=p,b)}function c(p,f,g,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Sl(g,p.mode,b),f.return=p,f):(f=o(f,g.children||[]),f.return=p,f)}function d(p,f,g,b,x){return f===null||f.tag!==7?(f=Qr(g,p.mode,b,x),f.return=p,f):(f=o(f,g),f.return=p,f)}function m(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=_l(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Mi:return g=fa(f.type,f.key,f.props,null,p.mode,g),g.ref=bo(p,null,f),g.return=p,g;case kn:return f=Sl(f,p.mode,g),f.return=p,f;case or:var b=f._init;return m(p,b(f._payload),g)}if(_o(f)||uo(f))return f=Qr(f,p.mode,g,null),f.return=p,f;Wi(p,f)}return null}function u(p,f,g,b){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(p,f,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:return g.key===x?l(p,f,g,b):null;case kn:return g.key===x?c(p,f,g,b):null;case or:return x=g._init,u(p,f,x(g._payload),b)}if(_o(g)||uo(g))return x!==null?null:d(p,f,g,b,null);Wi(p,g)}return null}function h(p,f,g,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return p=p.get(g)||null,s(f,p,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Mi:return p=p.get(b.key===null?g:b.key)||null,l(f,p,b,x);case kn:return p=p.get(b.key===null?g:b.key)||null,c(f,p,b,x);case or:var I=b._init;return h(p,f,g,I(b._payload),x)}if(_o(b)||uo(b))return p=p.get(g)||null,d(f,p,b,x,null);Wi(f,b)}return null}function w(p,f,g,b){for(var x=null,I=null,T=f,k=f=0,A=null;T!==null&&k<g.length;k++){T.index>k?(A=T,T=null):A=T.sibling;var z=u(p,T,g[k],b);if(z===null){T===null&&(T=A);break}e&&T&&z.alternate===null&&t(p,T),f=i(z,f,k),I===null?x=z:I.sibling=z,I=z,T=A}if(k===g.length)return r(p,T),oe&&$r(p,k),x;if(T===null){for(;k<g.length;k++)T=m(p,g[k],b),T!==null&&(f=i(T,f,k),I===null?x=T:I.sibling=T,I=T);return oe&&$r(p,k),x}for(T=n(p,T);k<g.length;k++)A=h(T,p,k,g[k],b),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?k:A.key),f=i(A,f,k),I===null?x=A:I.sibling=A,I=A);return e&&T.forEach(function(B){return t(p,B)}),oe&&$r(p,k),x}function E(p,f,g,b){var x=uo(g);if(typeof x!="function")throw Error(S(150));if(g=x.call(g),g==null)throw Error(S(151));for(var I=x=null,T=f,k=f=0,A=null,z=g.next();T!==null&&!z.done;k++,z=g.next()){T.index>k?(A=T,T=null):A=T.sibling;var B=u(p,T,z.value,b);if(B===null){T===null&&(T=A);break}e&&T&&B.alternate===null&&t(p,T),f=i(B,f,k),I===null?x=B:I.sibling=B,I=B,T=A}if(z.done)return r(p,T),oe&&$r(p,k),x;if(T===null){for(;!z.done;k++,z=g.next())z=m(p,z.value,b),z!==null&&(f=i(z,f,k),I===null?x=z:I.sibling=z,I=z);return oe&&$r(p,k),x}for(T=n(p,T);!z.done;k++,z=g.next())z=h(T,p,k,z.value,b),z!==null&&(e&&z.alternate!==null&&T.delete(z.key===null?k:z.key),f=i(z,f,k),I===null?x=z:I.sibling=z,I=z);return e&&T.forEach(function(ue){return t(p,ue)}),oe&&$r(p,k),x}function C(p,f,g,b){if(typeof g=="object"&&g!==null&&g.type===_n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Mi:e:{for(var x=g.key,I=f;I!==null;){if(I.key===x){if(x=g.type,x===_n){if(I.tag===7){r(p,I.sibling),f=o(I,g.props.children),f.return=p,p=f;break e}}else if(I.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===or&&Yf(x)===I.type){r(p,I.sibling),f=o(I,g.props),f.ref=bo(p,I,g),f.return=p,p=f;break e}r(p,I);break}else t(p,I);I=I.sibling}g.type===_n?(f=Qr(g.props.children,p.mode,b,g.key),f.return=p,p=f):(b=fa(g.type,g.key,g.props,null,p.mode,b),b.ref=bo(p,f,g),b.return=p,p=b)}return a(p);case kn:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(p,f.sibling),f=o(f,g.children||[]),f.return=p,p=f;break e}else{r(p,f);break}else t(p,f);f=f.sibling}f=Sl(g,p.mode,b),f.return=p,p=f}return a(p);case or:return I=g._init,C(p,f,I(g._payload),b)}if(_o(g))return w(p,f,g,b);if(uo(g))return E(p,f,g,b);Wi(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(p,f.sibling),f=o(f,g),f.return=p,p=f):(r(p,f),f=_l(g,p.mode,b),f.return=p,p=f),a(p)):r(p,f)}return C}var Qn=vh(!0),yh=vh(!1),xi={},It=Nr(xi),ri=Nr(xi),ni=Nr(xi);function Wr(e){if(e===xi)throw Error(S(174));return e}function Uu(e,t){switch(J(ni,t),J(ri,e),J(It,xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rc(t,e)}te(It),J(It,t)}function Xn(){te(It),te(ri),te(ni)}function wh(e){Wr(ni.current);var t=Wr(It.current),r=rc(t,e.type);t!==r&&(J(ri,e),J(It,r))}function Bu(e){ri.current===e&&(te(It),te(ri))}var ie=Nr(0);function La(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vl=[];function Vu(){for(var e=0;e<vl.length;e++)vl[e]._workInProgressVersionPrimary=null;vl.length=0}var la=Xt.ReactCurrentDispatcher,yl=Xt.ReactCurrentBatchConfig,en=0,ae=null,pe=null,ye=null,Da=!1,zo=!1,oi=0,Xy=0;function Ie(){throw Error(S(321))}function Hu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!ht(e[r],t[r]))return!1;return!0}function Wu(e,t,r,n,o,i){if(en=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,la.current=e===null||e.memoizedState===null?tw:rw,e=r(n,o),zo){i=0;do{if(zo=!1,oi=0,25<=i)throw Error(S(301));i+=1,ye=pe=null,t.updateQueue=null,la.current=nw,e=r(n,o)}while(zo)}if(la.current=ja,t=pe!==null&&pe.next!==null,en=0,ye=pe=ae=null,Da=!1,t)throw Error(S(300));return e}function Gu(){var e=oi!==0;return oi=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function st(){if(pe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function ii(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=st(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=pe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=a=null,l=null,c=i;do{var d=c.lane;if((en&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var m={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=m,a=n):l=l.next=m,ae.lanes|=d,tn|=d}c=c.next}while(c!==null&&c!==i);l===null?a=n:l.next=s,ht(n,t.memoizedState)||(De=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,tn|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xl(e){var t=st(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ht(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function xh(){}function kh(e,t){var r=ae,n=st(),o=t(),i=!ht(n.memoizedState,o);if(i&&(n.memoizedState=o,De=!0),n=n.queue,Ku(Eh.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(r.flags|=2048,ai(9,Sh.bind(null,r,n,o,t),void 0,null),he===null)throw Error(S(349));(en&30)!==0||_h(r,t,o)}return o}function _h(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Sh(e,t,r,n){t.value=r,t.getSnapshot=n,Ih(t)&&ot(e,1,-1)}function Eh(e,t,r){return r(function(){Ih(t)&&ot(e,1,-1)})}function Ih(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!ht(e,r)}catch{return!0}}function qf(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=ew.bind(null,ae,e),[t.memoizedState,e]}function ai(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Th(){return st().memoizedState}function ca(e,t,r,n){var o=kt();ae.flags|=e,o.memoizedState=ai(1|t,r,void 0,n===void 0?null:n)}function fs(e,t,r,n){var o=st();n=n===void 0?null:n;var i=void 0;if(pe!==null){var a=pe.memoizedState;if(i=a.destroy,n!==null&&Hu(n,a.deps)){o.memoizedState=ai(t,r,i,n);return}}ae.flags|=e,o.memoizedState=ai(1|t,r,i,n)}function Qf(e,t){return ca(8390656,8,e,t)}function Ku(e,t){return fs(2048,8,e,t)}function Ch(e,t){return fs(4,2,e,t)}function Ah(e,t){return fs(4,4,e,t)}function Ph(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oh(e,t,r){return r=r!=null?r.concat([e]):null,fs(4,4,Ph.bind(null,t,e),r)}function Yu(){}function Nh(e,t){var r=st();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hu(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Rh(e,t){var r=st();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hu(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function zh(e,t,r){return(en&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=r):(ht(r,t)||(r=$g(),ae.lanes|=r,tn|=r,e.baseState=!0),t)}function Jy(e,t){var r=Y;Y=r!==0&&4>r?r:4,e(!0);var n=yl.transition;yl.transition={};try{e(!1),t()}finally{Y=r,yl.transition=n}}function Mh(){return st().memoizedState}function Zy(e,t,r){var n=xr(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Lh(e)?Dh(t,r):(jh(e,t,r),r=Ne(),e=ot(e,n,r),e!==null&&Fh(e,t,n))}function ew(e,t,r){var n=xr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lh(e))Dh(t,o);else{jh(e,t,o);var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,ht(s,a))return}catch{}finally{}r=Ne(),e=ot(e,n,r),e!==null&&Fh(e,t,n)}}function Lh(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Dh(e,t){zo=Da=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function jh(e,t,r){r0(e)?(e=t.interleaved,e===null?(r.next=r,mt===null?mt=[t]:mt.push(t)):(r.next=e.next,e.next=r),t.interleaved=r):(e=t.pending,e===null?r.next=r:(r.next=e.next,e.next=r),t.pending=r)}function Fh(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Iu(e,r)}}var ja={readContext:at,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},tw={readContext:at,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Qf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ca(4194308,4,Ph.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ca(4194308,4,e,t)},useInsertionEffect:function(e,t){return ca(4,2,e,t)},useMemo:function(e,t){var r=kt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=kt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Zy.bind(null,ae,e),[n.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:qf,useDebugValue:Yu,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=qf(!1),t=e[0];return e=Jy.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ae,o=kt();if(oe){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),he===null)throw Error(S(349));(en&30)!==0||_h(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Qf(Eh.bind(null,n,i,e),[e]),n.flags|=2048,ai(9,Sh.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=kt(),t=he.identifierPrefix;if(oe){var r=Ft,n=jt;r=(n&~(1<<32-gt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=oi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rw={readContext:at,useCallback:Nh,useContext:at,useEffect:Ku,useImperativeHandle:Oh,useInsertionEffect:Ch,useLayoutEffect:Ah,useMemo:Rh,useReducer:wl,useRef:Th,useState:function(){return wl(ii)},useDebugValue:Yu,useDeferredValue:function(e){var t=st();return zh(t,pe.memoizedState,e)},useTransition:function(){var e=wl(ii)[0],t=st().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:kh,useId:Mh,unstable_isNewReconciler:!1},nw={readContext:at,useCallback:Nh,useContext:at,useEffect:Ku,useImperativeHandle:Oh,useInsertionEffect:Ch,useLayoutEffect:Ah,useMemo:Rh,useReducer:xl,useRef:Th,useState:function(){return xl(ii)},useDebugValue:Yu,useDeferredValue:function(e){var t=st();return pe===null?t.memoizedState=e:zh(t,pe.memoizedState,e)},useTransition:function(){var e=xl(ii)[0],t=st().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:kh,useId:Mh,unstable_isNewReconciler:!1};function qu(e,t){try{var r="",n=t;do r+=O1(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o}}function Ec(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var ow=typeof WeakMap=="function"?WeakMap:Map;function $h(e,t,r){r=Bt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){$a||($a=!0,zc=n),Ec(e,t)},r}function Uh(e,t,r){r=Bt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Ec(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){Ec(e,t),typeof n!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Xf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new ow;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=bw.bind(null,e,t,r),t.then(e,e))}function Jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zf(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Bt(-1,1),t.tag=2,yr(r,t))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Bh,Ic,Vh,Hh;Bh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ic=function(){};Vh=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Wr(It.current);var i=null;switch(r){case"input":o=Jl(e,o),n=Jl(e,n),i=[];break;case"select":o=se({},o,{value:void 0}),n=se({},n,{value:void 0}),i=[];break;case"textarea":o=tc(e,o),n=tc(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ca)}nc(r,n);var a;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in n){var l=n[c];if(s=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(r||(r={}),r[a]=l[a])}else r||(i||(i=[]),i.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}r&&(i=i||[]).push("style",r);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Hh=function(e,t,r,n){r!==n&&(t.flags|=4)};function vo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function iw(e,t,r){var n=t.pendingProps;switch(Fu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Fe(t.type)&&Aa(),Te(t),null;case 3:return n=t.stateNode,Xn(),te(je),te(Ae),Vu(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Dc(ft),ft=null))),Ic(e,t),Te(t),null;case 5:Bu(t);var o=Wr(ni.current);if(r=t.type,e!==null&&t.stateNode!=null)Vh(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return Te(t),null}if(e=Wr(It.current),ho(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[_t]=t,n[ti]=i,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<Eo.length;o++)Z(Eo[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":mf(n,i),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Z("invalid",n);break;case"textarea":gf(n,i),Z("invalid",n)}nc(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&Hi(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Hi(n.textContent,s,e),o=["children",""+s]):Wo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Z("scroll",n)}switch(r){case"input":Li(n),pf(n,i,!0);break;case"textarea":Li(n),hf(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Ca)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eg(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[_t]=t,e[ti]=n,Bh(e,t,!1,!1),t.stateNode=e;e:{switch(a=oc(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<Eo.length;o++)Z(Eo[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":mf(e,n),o=Jl(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=se({},n,{value:void 0}),Z("invalid",e);break;case"textarea":gf(e,n),o=tc(e,n),Z("invalid",e);break;default:o=n}nc(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?Cg(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ig(e,l)):i==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Go(e,l):typeof l=="number"&&Go(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Wo.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Z("scroll",e):l!=null&&wu(e,i,l,a))}switch(r){case"input":Li(e),pf(e,n,!1);break;case"textarea":Li(e),hf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Sr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?jn(e,!!n.multiple,i,!1):n.defaultValue!=null&&jn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ca)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)Hh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=Wr(ni.current),Wr(It.current),ho(t)){if(n=t.stateNode,r=t.memoizedProps,n[_t]=t,(i=n.nodeValue!==r)&&(e=We,e!==null))switch(e.tag){case 3:Hi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hi(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[_t]=t,t.stateNode=n}return Te(t),null;case 13:if(te(ie),n=t.memoizedState,oe&&Le!==null&&(t.mode&1)!==0&&(t.flags&128)===0){for(n=Le;n;)n=Dt(n.nextSibling);return qn(),t.flags|=98560,t}if(n!==null&&n.dehydrated!==null){if(n=ho(t),e===null){if(!n)throw Error(S(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n[_t]=t}else qn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;return Te(t),null}return ft!==null&&(Dc(ft),ft=null),(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,r=!1,e===null?ho(t):r=e.memoizedState!==null,n!==r&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ie.current&1)!==0?ge===0&&(ge=3):td())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return Xn(),Ic(e,t),e===null&&Zo(t.stateNode.containerInfo),Te(t),null;case 10:return Lu(t.type._context),Te(t),null;case 17:return Fe(t.type)&&Aa(),Te(t),null;case 19:if(te(ie),i=t.memoizedState,i===null)return Te(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)vo(i,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=La(e),a!==null){for(t.flags|=128,vo(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return J(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>Jn&&(t.flags|=128,n=!0,vo(i,!1),t.lanes=4194304)}else{if(!n)if(e=La(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),vo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!oe)return Te(t),null}else 2*de()-i.renderingStartTime>Jn&&r!==1073741824&&(t.flags|=128,n=!0,vo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,r=ie.current,J(ie,n?r&1|2:r&1),t):(Te(t),null);case 22:case 23:return ed(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Be&1073741824)!==0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}var aw=Xt.ReactCurrentOwner,De=!1;function Oe(e,t,r,n){t.child=e===null?yh(t,null,r,n):Qn(t,e.child,r,n)}function em(e,t,r,n,o){r=r.render;var i=t.ref;return Bn(t,o),n=Wu(e,t,r,n,i,o),r=Gu(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(oe&&r&&ju(t),t.flags|=1,Oe(e,t,n,o),t.child)}function tm(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!rd(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,Wh(e,t,i,n,o)):(e=fa(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Jo,r(a,n)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=Ir(i,n),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Jo(i,n)&&e.ref===t.ref)if(De=!1,t.pendingProps=n=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Tc(e,t,r,n,o)}function Gh(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,Be),Be|=r;else if((r&1073741824)!==0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,J(Rn,Be),Be|=n;else return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,Be),Be|=e,null;else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,J(Rn,Be),Be|=n;return Oe(e,t,o,r),t.child}function Kh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Tc(e,t,r,n,o){var i=Fe(r)?Jr:Ae.current;return i=Yn(t,i),Bn(t,o),r=Wu(e,t,r,n,i,o),n=Gu(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(oe&&n&&ju(t),t.flags|=1,Oe(e,t,r,o),t.child)}function rm(e,t,r,n,o){if(Fe(r)){var i=!0;Pa(t)}else i=!1;if(Bn(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),gh(t,r,n),kc(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=at(c):(c=Fe(r)?Jr:Ae.current,c=Yn(t,c));var d=r.getDerivedStateFromProps,m=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||l!==c)&&Wf(t,a,n,c),ir=!1;var u=t.memoizedState;a.state=u,Ra(t,n,a,o),l=t.memoizedState,s!==n||u!==l||je.current||ir?(typeof d=="function"&&(xc(t,r,d,n),l=t.memoizedState),(s=ir||Hf(t,r,s,n,u,l,c))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=c,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,mh(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ut(t.type,s),a.props=c,m=t.pendingProps,u=a.context,l=r.contextType,typeof l=="object"&&l!==null?l=at(l):(l=Fe(r)?Jr:Ae.current,l=Yn(t,l));var h=r.getDerivedStateFromProps;(d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||u!==l)&&Wf(t,a,n,l),ir=!1,u=t.memoizedState,a.state=u,Ra(t,n,a,o);var w=t.memoizedState;s!==m||u!==w||je.current||ir?(typeof h=="function"&&(xc(t,r,h,n),w=t.memoizedState),(c=ir||Hf(t,r,c,n,u,w,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,w,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,w,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),a.props=n,a.state=w,a.context=l,n=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),n=!1)}return Cc(e,t,r,n,i,o)}function Cc(e,t,r,n,o,i){Kh(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Uf(t,r,!1),Wt(e,t,i);n=t.stateNode,aw.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Qn(t,e.child,null,i),t.child=Qn(t,null,s,i)):Oe(e,t,s,i),t.memoizedState=n.state,o&&Uf(t,r,!0),t.child}function Yh(e){var t=e.stateNode;t.pendingContext?$f(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$f(e,t.context,!1),Uu(e,t.containerInfo)}function nm(e,t,r,n,o){return qn(),$u(o),t.flags|=256,Oe(e,t,r,n),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function om(e,t){return{baseLanes:e.baseLanes|t,cachePool:null,transitions:e.transitions}}function qh(e,t,r){var n=t.pendingProps,o=ie.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ie,o&1),e===null)return Sc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=n.children,e=n.fallback,i?(n=t.mode,i=t.child,o={mode:"hidden",children:o},(n&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Va(o,n,0,null),e=Qr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ki(r),t.memoizedState=Gi,e):Ac(t,o));if(o=e.memoizedState,o!==null){if(s=o.dehydrated,s!==null){if(a)return t.flags&256?(t.flags&=-257,Yi(e,t,r,Error(S(422)))):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Va({mode:"visible",children:n.children},o,0,null),i=Qr(i,o,r,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,(t.mode&1)!==0&&Qn(t,e.child,null,r),t.child.memoizedState=Ki(r),t.memoizedState=Gi,i);if((t.mode&1)===0)t=Yi(e,t,r,null);else if(s.data==="$!")t=Yi(e,t,r,Error(S(419)));else if(n=(r&e.childLanes)!==0,De||n){if(n=he,n!==null){switch(r&-r){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}n=(i&(n.suspendedLanes|r))!==0?0:i,n!==0&&n!==o.retryLane&&(o.retryLane=n,ot(e,n,-1))}td(),t=Yi(e,t,r,Error(S(421)))}else s.data==="$?"?(t.flags|=128,t.child=e.child,t=vw.bind(null,e),s._reactRetry=t,t=null):(r=o.treeContext,Le=Dt(s.nextSibling),We=t,oe=!0,ft=null,r!==null&&(et[tt++]=jt,et[tt++]=Ft,et[tt++]=Zr,jt=r.id,Ft=r.overflow,Zr=t),t=Ac(t,t.pendingProps.children),t.flags|=4096);return t}return i?(n=am(e,t,n.children,n.fallback,r),i=t.child,o=e.child.memoizedState,i.memoizedState=o===null?Ki(r):om(o,r),i.childLanes=e.childLanes&~r,t.memoizedState=Gi,n):(r=im(e,t,n.children,r),t.memoizedState=null,r)}return i?(n=am(e,t,n.children,n.fallback,r),i=t.child,o=e.child.memoizedState,i.memoizedState=o===null?Ki(r):om(o,r),i.childLanes=e.childLanes&~r,t.memoizedState=Gi,n):(r=im(e,t,n.children,r),t.memoizedState=null,r)}function Ac(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function im(e,t,r,n){var o=e.child;return e=o.sibling,r=Ir(o,{mode:"visible",children:r}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r}function am(e,t,r,n,o){var i=t.mode;e=e.child;var a=e.sibling,s={mode:"hidden",children:r};return(i&1)===0&&t.child!==e?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ir(e,s),r.subtreeFlags=e.subtreeFlags&14680064),a!==null?n=Ir(a,n):(n=Qr(n,i,o,null),n.flags|=2),n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Yi(e,t,r,n){return n!==null&&$u(n),Qn(t,e.child,null,r),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sm(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),wc(e.return,t,r)}function kl(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Qh(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Oe(e,t,n.children,r),n=ie.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sm(e,r,t);else if(e.tag===19)sm(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(ie,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&La(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),kl(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&La(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}kl(t,!0,r,null,i);break;case"together":kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=Ir(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ir(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function sw(e,t,r){switch(t.tag){case 3:Yh(t),qn();break;case 5:wh(t);break;case 1:Fe(t.type)&&Pa(t);break;case 4:Uu(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;J(Oa,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(ie,ie.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?qh(e,t,r):(J(ie,ie.current&1),e=Wt(e,t,r),e!==null?e.sibling:null);J(ie,ie.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Qh(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ie,ie.current),n)break;return null;case 22:case 23:return t.lanes=0,Gh(e,t,r)}return Wt(e,t,r)}function lw(e,t){switch(Fu(t),t.tag){case 1:return Fe(t.type)&&Aa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xn(),te(je),te(Ae),Vu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bu(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return Xn(),null;case 10:return Lu(t.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var qi=!1,Ce=!1,cw=typeof WeakSet=="function"?WeakSet:Set,N=null;function Nn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ce(e,t,n)}else r.current=null}function Pc(e,t,r){try{r()}catch(n){ce(e,t,n)}}var lm=!1;function uw(e,t){if(pc=Ea,e=rh(),Ru(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,s=-1,l=-1,c=0,d=0,m=e,u=null;t:for(;;){for(var h;m!==r||o!==0&&m.nodeType!==3||(s=a+o),m!==i||n!==0&&m.nodeType!==3||(l=a+n),m.nodeType===3&&(a+=m.nodeValue.length),(h=m.firstChild)!==null;)u=m,m=h;for(;;){if(m===e)break t;if(u===r&&++c===o&&(s=a),u===i&&++d===n&&(l=a),(h=m.nextSibling)!==null)break;m=u,u=m.parentNode}m=h}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(gc={focusedElem:e,selectionRange:r},Ea=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,C=w.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?E:ut(t.type,E),C);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;if(g.nodeType===1)g.textContent="";else if(g.nodeType===9){var b=g.body;b!=null&&(b.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){ce(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return w=lm,lm=!1,w}function Mo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Pc(t,r,i)}o=o.next}while(o!==n)}}function ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Oc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Xh(e){var t=e.alternate;t!==null&&(e.alternate=null,Xh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[_t],delete t[ti],delete t[vc],delete t[Ky],delete t[Yy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jh(e){return e.tag===5||e.tag===3||e.tag===4}function cm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ca));else if(n!==4&&(e=e.child,e!==null))for(Nc(e,t,r),e=e.sibling;e!==null;)Nc(e,t,r),e=e.sibling}function Rc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Rc(e,t,r),e=e.sibling;e!==null;)Rc(e,t,r),e=e.sibling}var xe=null,dt=!1;function er(e,t,r){for(r=r.child;r!==null;)Zh(e,t,r),r=r.sibling}function Zh(e,t,r){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(is,r)}catch{}switch(r.tag){case 5:Ce||Nn(r,t);case 6:var n=xe,o=dt;xe=null,er(e,t,r),xe=n,dt=o,xe!==null&&(dt?(e=xe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):xe.removeChild(r.stateNode));break;case 18:xe!==null&&(dt?(e=xe,r=r.stateNode,e.nodeType===8?hl(e.parentNode,r):e.nodeType===1&&hl(e,r),Qo(e)):hl(xe,r.stateNode));break;case 4:n=xe,o=dt,xe=r.stateNode.containerInfo,dt=!0,er(e,t,r),xe=n,dt=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Pc(r,t,a),o=o.next}while(o!==n)}er(e,t,r);break;case 1:if(!Ce&&(Nn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ce(r,t,s)}er(e,t,r);break;case 21:er(e,t,r);break;case 22:r.mode&1?(Ce=(n=Ce)||r.memoizedState!==null,er(e,t,r),Ce=n):er(e,t,r);break;default:er(e,t,r)}}function um(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new cw),t.forEach(function(n){var o=yw.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function ct(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:xe=s.stateNode,dt=!1;break e;case 3:xe=s.stateNode.containerInfo,dt=!0;break e;case 4:xe=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(xe===null)throw Error(S(160));Zh(i,a,o),xe=null,dt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ce(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)e0(t,e),t=t.sibling}function e0(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),xt(e),n&4){try{Mo(3,e,e.return),ms(3,e)}catch(w){ce(e,e.return,w)}try{Mo(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:ct(t,e),xt(e),n&512&&r!==null&&Nn(r,r.return);break;case 5:if(ct(t,e),xt(e),n&512&&r!==null&&Nn(r,r.return),e.flags&32){var o=e.stateNode;try{Go(o,"")}catch(w){ce(e,e.return,w)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&_g(o,i),oc(s,a);var c=oc(s,i);for(a=0;a<l.length;a+=2){var d=l[a],m=l[a+1];d==="style"?Cg(o,m):d==="dangerouslySetInnerHTML"?Ig(o,m):d==="children"?Go(o,m):wu(o,d,m,c)}switch(s){case"input":Zl(o,i);break;case"textarea":Sg(o,i);break;case"select":var u=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?jn(o,!!i.multiple,h,!1):u!==!!i.multiple&&(i.defaultValue!=null?jn(o,!!i.multiple,i.defaultValue,!0):jn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ti]=i}catch(w){ce(e,e.return,w)}}break;case 6:if(ct(t,e),xt(e),n&4){if(e.stateNode===null)throw Error(S(162));c=e.stateNode,d=e.memoizedProps;try{c.nodeValue=d}catch(w){ce(e,e.return,w)}}break;case 3:if(ct(t,e),xt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Qo(t.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:ct(t,e),xt(e);break;case 13:ct(t,e),xt(e),c=e.child,c.flags&8192&&c.memoizedState!==null&&(c.alternate===null||c.alternate.memoizedState===null)&&(Ju=de()),n&4&&um(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(Ce=(d=Ce)||c,ct(t,e),Ce=d):ct(t,e),xt(e),n&8192){d=e.memoizedState!==null;e:for(m=null,u=e;;){if(u.tag===5){if(m===null){m=u;try{o=u.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=u.stateNode,l=u.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Tg("display",a))}catch(w){ce(e,e.return,w)}}}else if(u.tag===6){if(m===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(w){ce(e,e.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;m===u&&(m=null),u=u.return}m===u&&(m=null),u.sibling.return=u.return,u=u.sibling}if(d&&!c&&(e.mode&1)!==0)for(N=e,e=e.child;e!==null;){for(c=N=e;N!==null;){switch(d=N,m=d.child,d.tag){case 0:case 11:case 14:case 15:Mo(4,d,d.return);break;case 1:if(Nn(d,d.return),i=d.stateNode,typeof i.componentWillUnmount=="function"){u=d,h=d.return;try{o=u,i.props=o.memoizedProps,i.state=o.memoizedState,i.componentWillUnmount()}catch(w){ce(u,h,w)}}break;case 5:Nn(d,d.return);break;case 22:if(d.memoizedState!==null){fm(c);continue}}m!==null?(m.return=d,N=m):fm(c)}e=e.sibling}}break;case 19:ct(t,e),xt(e),n&4&&um(e);break;case 21:break;default:ct(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Jh(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Go(o,""),n.flags&=-33);var i=cm(e);Rc(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=cm(e);Nc(e,s,a);break;default:throw Error(S(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dw(e,t,r){N=e,t0(e)}function t0(e,t,r){for(var n=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||qi;if(!a){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Ce;s=qi;var c=Ce;if(qi=a,(Ce=l)&&!c)for(N=o;N!==null;)a=N,l=a.child,a.tag===22&&a.memoizedState!==null?mm(o):l!==null?(l.return=a,N=l):mm(o);for(;i!==null;)N=i,t0(i),i=i.sibling;N=o,qi=s,Ce=c}dm(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,N=i):dm(e)}}function dm(e){for(;N!==null;){var t=N;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||ms(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ce)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:ut(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Vf(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Vf(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var m=d.dehydrated;m!==null&&Qo(m)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(S(163))}Ce||t.flags&512&&Oc(t)}catch(u){ce(t,t.return,u)}}if(t===e){N=null;break}if(r=t.sibling,r!==null){r.return=t.return,N=r;break}N=t.return}}function fm(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var r=t.sibling;if(r!==null){r.return=t.return,N=r;break}N=t.return}}function mm(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ms(4,t)}catch(l){ce(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){ce(t,o,l)}}var i=t.return;try{Oc(t)}catch(l){ce(t,i,l)}break;case 5:var a=t.return;try{Oc(t)}catch(l){ce(t,a,l)}}}catch(l){ce(t,t.return,l)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var fw=Math.ceil,Fa=Xt.ReactCurrentDispatcher,Qu=Xt.ReactCurrentOwner,nt=Xt.ReactCurrentBatchConfig,W=0,he=null,me=null,Se=0,Be=0,Rn=Nr(0),ge=0,si=null,tn=0,ps=0,Xu=0,Lo=null,Me=null,Ju=0,Jn=1/0,Mt=null,$a=!1,zc=null,wr=null,Qi=!1,pr=null,Ua=0,Do=0,Mc=null,ua=-1,da=0;function Ne(){return(W&6)!==0?de():ua!==-1?ua:ua=de()}function xr(e){return(e.mode&1)===0?1:(W&2)!==0&&Se!==0?Se&-Se:Qy.transition!==null?(da===0&&(da=$g()),da):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Kg(e.type)),e)}function ot(e,t,r){if(50<Do)throw Do=0,Mc=null,Error(S(185));var n=gs(e,t);return n===null?null:(vi(n,t,r),((W&2)===0||n!==he)&&(n===he&&((W&2)===0&&(ps|=t),ge===4&&lr(n,Se)),$e(n,r),t===1&&W===0&&(e.mode&1)===0&&(Jn=de()+500,us&&Rr())),n)}function gs(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}function r0(e){return(he!==null||mt!==null)&&(e.mode&1)!==0&&(W&2)===0}function $e(e,t){var r=e.callbackNode;Q1(e,t);var n=Sa(e,e===he?Se:0);if(n===0)r!==null&&yf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&yf(r),t===1)e.tag===0?qy(pm.bind(null,e)):fh(pm.bind(null,e)),Wy(function(){W===0&&Rr()}),r=null;else{switch(Ug(n)){case 1:r=Eu;break;case 4:r=jg;break;case 16:r=_a;break;case 536870912:r=Fg;break;default:r=_a}r=u0(r,n0.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function n0(e,t){if(ua=-1,da=0,(W&6)!==0)throw Error(S(327));var r=e.callbackNode;if(Vn()&&e.callbackNode!==r)return null;var n=Sa(e,e===he?Se:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Ba(e,n);else{t=n;var o=W;W|=2;var i=i0();(he!==e||Se!==t)&&(Mt=null,Jn=de()+500,qr(e,t));do try{gw();break}catch(s){o0(e,s)}while(1);Mu(),Fa.current=i,W=o,me!==null?t=0:(he=null,Se=0,t=ge)}if(t!==0){if(t===2&&(o=cc(e),o!==0&&(n=o,t=Lc(e,o))),t===1)throw r=si,qr(e,0),lr(e,n),$e(e,de()),r;if(t===6)lr(e,n);else{if(o=e.current.alternate,(n&30)===0&&!mw(o)&&(t=Ba(e,n),t===2&&(i=cc(e),i!==0&&(n=i,t=Lc(e,i))),t===1))throw r=si,qr(e,0),lr(e,n),$e(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:Ur(e,Me,Mt);break;case 3:if(lr(e,n),(n&130023424)===n&&(t=Ju+500-de(),10<t)){if(Sa(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=bc(Ur.bind(null,e,Me,Mt),t);break}Ur(e,Me,Mt);break;case 4:if(lr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-gt(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*fw(n/1960))-n,10<n){e.timeoutHandle=bc(Ur.bind(null,e,Me,Mt),n);break}Ur(e,Me,Mt);break;case 5:Ur(e,Me,Mt);break;default:throw Error(S(329))}}}return $e(e,de()),e.callbackNode===r?n0.bind(null,e):null}function Lc(e,t){var r=Lo;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=Ba(e,t),e!==2&&(t=Me,Me=r,t!==null&&Dc(t)),e}function Dc(e){Me===null?Me=e:Me.push.apply(Me,e)}function mw(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lr(e,t){for(t&=~Xu,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-gt(t),n=1<<r;e[r]=-1,t&=~n}}function pm(e){if((W&6)!==0)throw Error(S(327));Vn();var t=Sa(e,0);if((t&1)===0)return $e(e,de()),null;var r=Ba(e,t);if(e.tag!==0&&r===2){var n=cc(e);n!==0&&(t=n,r=Lc(e,n))}if(r===1)throw r=si,qr(e,0),lr(e,t),$e(e,de()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ur(e,Me,Mt),$e(e,de()),null}function Zu(e,t){var r=W;W|=1;try{return e(t)}finally{W=r,W===0&&(Jn=de()+500,us&&Rr())}}function rn(e){pr!==null&&pr.tag===0&&(W&6)===0&&Vn();var t=W;W|=1;var r=nt.transition,n=Y;try{if(nt.transition=null,Y=1,e)return e()}finally{Y=n,nt.transition=r,W=t,(W&6)===0&&Rr()}}function ed(){Be=Rn.current,te(Rn)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Hy(r)),me!==null)for(r=me.return;r!==null;){var n=r;switch(Fu(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Aa();break;case 3:Xn(),te(je),te(Ae),Vu();break;case 5:Bu(n);break;case 4:Xn();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Lu(n.type._context);break;case 22:case 23:ed()}r=r.return}if(he=e,me=e=Ir(e.current,null),Se=Be=t,ge=0,si=null,Xu=ps=tn=0,Me=Lo=null,mt!==null){for(t=0;t<mt.length;t++)if(r=mt[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}mt=null}return e}function o0(e,t){do{var r=me;try{if(Mu(),la.current=ja,Da){for(var n=ae.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Da=!1}if(en=0,ye=pe=ae=null,zo=!1,oi=0,Qu.current=null,r===null||r.return===null){ge=1,si=t,me=null;break}e:{var i=e,a=r.return,s=r,l=t;if(t=Se,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,m=d.tag;if((d.mode&1)===0&&(m===0||m===11||m===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Jf(a);if(h!==null){h.flags&=-257,Zf(h,a,s,i,t),h.mode&1&&Xf(i,c,t),t=h,l=c;var w=t.updateQueue;if(w===null){var E=new Set;E.add(l),t.updateQueue=E}else w.add(l);break e}else{if((t&1)===0){Xf(i,c,t),td();break e}l=Error(S(426))}}else if(oe&&s.mode&1){var C=Jf(a);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),Zf(C,a,s,i,t),$u(l);break e}}i=l,ge!==4&&(ge=2),Lo===null?Lo=[i]:Lo.push(i),l=qu(l,s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=$h(s,l,t);Bf(s,p);break e;case 1:i=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wr===null||!wr.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=Uh(s,i,t);Bf(s,b);break e}}s=s.return}while(s!==null)}s0(r)}catch(x){t=x,me===r&&r!==null&&(me=r=r.return);continue}break}while(1)}function i0(){var e=Fa.current;return Fa.current=ja,e===null?ja:e}function td(){(ge===0||ge===3||ge===2)&&(ge=4),he===null||(tn&268435455)===0&&(ps&268435455)===0||lr(he,Se)}function Ba(e,t){var r=W;W|=2;var n=i0();(he!==e||Se!==t)&&(Mt=null,qr(e,t));do try{pw();break}catch(o){o0(e,o)}while(1);if(Mu(),W=r,Fa.current=n,me!==null)throw Error(S(261));return he=null,Se=0,ge}function pw(){for(;me!==null;)a0(me)}function gw(){for(;me!==null&&!U1();)a0(me)}function a0(e){var t=c0(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?s0(e):me=t,Qu.current=null}function s0(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=iw(r,t,Be),r!==null){me=r;return}}else{if(r=lw(r,t),r!==null){r.flags&=32767,me=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,me=null;return}}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ge===0&&(ge=5)}function Ur(e,t,r){var n=Y,o=nt.transition;try{nt.transition=null,Y=1,hw(e,t,r,n)}finally{nt.transition=o,Y=n}return null}function hw(e,t,r,n){do Vn();while(pr!==null);if((W&6)!==0)throw Error(S(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(X1(e,i),e===he&&(me=he=null,Se=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Qi||(Qi=!0,u0(_a,function(){return Vn(),null})),i=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var a=Y;Y=1;var s=W;W|=4,Qu.current=null,uw(e,r),e0(r,e),Dy(gc),Ea=!!pc,gc=pc=null,e.current=r,dw(r),B1(),W=s,Y=a,nt.transition=i}else e.current=r;if(Qi&&(Qi=!1,pr=e,Ua=o),i=e.pendingLanes,i===0&&(wr=null),W1(r.stateNode),$e(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)n(t[r]);if($a)throw $a=!1,e=zc,zc=null,e;return(Ua&1)!==0&&e.tag!==0&&Vn(),i=e.pendingLanes,(i&1)!==0?e===Mc?Do++:(Do=0,Mc=e):Do=0,Rr(),null}function Vn(){if(pr!==null){var e=Ug(Ua),t=nt.transition,r=Y;try{if(nt.transition=null,Y=16>e?16:e,pr===null)var n=!1;else{if(e=pr,pr=null,Ua=0,(W&6)!==0)throw Error(S(331));var o=W;for(W|=4,N=e.current;N!==null;){var i=N,a=i.child;if((N.flags&16)!==0){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Mo(8,d,i)}var m=d.child;if(m!==null)m.return=d,N=m;else for(;N!==null;){d=N;var u=d.sibling,h=d.return;if(Xh(d),d===c){N=null;break}if(u!==null){u.return=h,N=u;break}N=h}}}var w=i.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var C=E.sibling;E.sibling=null,E=C}while(E!==null)}}N=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Mo(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,N=p;break e}N=i.return}}var f=e.current;for(N=f;N!==null;){a=N;var g=a.child;if((a.subtreeFlags&2064)!==0&&g!==null)g.return=a,N=g;else e:for(a=f;N!==null;){if(s=N,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ms(9,s)}}catch(x){ce(s,s.return,x)}if(s===a){N=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,N=b;break e}N=s.return}}if(W=o,Rr(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(is,e)}catch{}n=!0}return n}finally{Y=r,nt.transition=t}}return!1}function gm(e,t,r){t=qu(r,t),t=$h(e,t,1),yr(e,t),t=Ne(),e=gs(e,1),e!==null&&(vi(e,1,t),$e(e,t))}function ce(e,t,r){if(e.tag===3)gm(e,e,r);else for(;t!==null;){if(t.tag===3){gm(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(wr===null||!wr.has(n))){e=qu(r,e),e=Uh(t,e,1),yr(t,e),e=Ne(),t=gs(t,1),t!==null&&(vi(t,1,e),$e(t,e));break}}t=t.return}}function bw(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,he===e&&(Se&r)===r&&(ge===4||ge===3&&(Se&130023424)===Se&&500>de()-Ju?qr(e,0):Xu|=r),$e(e,t)}function l0(e,t){t===0&&((e.mode&1)===0?t=1:(t=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var r=Ne();e=gs(e,t),e!==null&&(vi(e,t,r),$e(e,r))}function vw(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),l0(e,r)}function yw(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),l0(e,r)}var c0;c0=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)De=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return De=!1,sw(e,t,r);De=(e.flags&131072)!==0}else De=!1,oe&&(t.flags&1048576)!==0&&hh(t,Ma,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var o=Yn(t,Ae.current);Bn(t,r),o=Wu(null,t,n,e,o,r);var i=Gu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(n)?(i=!0,Pa(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Du(t),o.updater=ds,t.stateNode=o,o._reactInternals=t,kc(t,n,e,r),t=Cc(null,t,n,!0,i,r)):(t.tag=0,oe&&i&&ju(t),Oe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=xw(n),e=ut(n,e),o){case 0:t=Tc(null,t,n,e,r);break e;case 1:t=rm(null,t,n,e,r);break e;case 11:t=em(null,t,n,e,r);break e;case 14:t=tm(null,t,n,ut(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),Tc(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),rm(e,t,n,o,r);case 3:e:{if(Yh(t),e===null)throw Error(S(387));n=t.pendingProps,i=t.memoizedState,o=i.element,mh(e,t),Ra(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Error(S(423)),t=nm(e,t,n,r,o);break e}else if(n!==o){o=Error(S(424)),t=nm(e,t,n,r,o);break e}else for(Le=Dt(t.stateNode.containerInfo.firstChild),We=t,oe=!0,ft=null,r=yh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(qn(),n===o){t=Wt(e,t,r);break e}Oe(e,t,n,r)}t=t.child}return t;case 5:return wh(t),e===null&&Sc(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,hc(n,o)?a=null:i!==null&&hc(n,i)&&(t.flags|=32),Kh(e,t),Oe(e,t,a,r),t.child;case 6:return e===null&&Sc(t),null;case 13:return qh(e,t,r);case 4:return Uu(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Qn(t,null,n,r):Oe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),em(e,t,n,o,r);case 7:return Oe(e,t,t.pendingProps,r),t.child;case 8:return Oe(e,t,t.pendingProps.children,r),t.child;case 12:return Oe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,J(Oa,n._currentValue),n._currentValue=a,i!==null)if(ht(i.value,a)){if(i.children===o.children&&!je.current){t=Wt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(i.tag===1){l=Bt(-1,r&-r),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),wc(i.return,r,t),s.lanes|=r;break}l=l.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),wc(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Oe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Bn(t,r),o=at(o),n=n(o),t.flags|=1,Oe(e,t,n,r),t.child;case 14:return n=t.type,o=ut(n,t.pendingProps),o=ut(n.type,o),tm(e,t,n,o,r);case 15:return Wh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ut(n,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Fe(n)?(e=!0,Pa(t)):e=!1,Bn(t,r),gh(t,n,o),kc(t,n,o,r),Cc(null,t,n,!0,e,r);case 19:return Qh(e,t,r);case 22:return Gh(e,t,r)}throw Error(S(156,t.tag))};function u0(e,t){return Dg(e,t)}function ww(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,r,n){return new ww(e,t,r,n)}function rd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xw(e){if(typeof e=="function")return rd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ku)return 11;if(e===_u)return 14}return 2}function Ir(e,t){var r=e.alternate;return r===null?(r=rt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function fa(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")rd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _n:return Qr(r.children,o,i,t);case xu:a=8,o|=8;break;case Yl:return e=rt(12,r,t,o|2),e.elementType=Yl,e.lanes=i,e;case ql:return e=rt(13,r,t,o),e.elementType=ql,e.lanes=i,e;case Ql:return e=rt(19,r,t,o),e.elementType=Ql,e.lanes=i,e;case wg:return Va(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vg:a=10;break e;case yg:a=9;break e;case ku:a=11;break e;case _u:a=14;break e;case or:a=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=rt(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Qr(e,t,r,n){return e=rt(7,e,n,t),e.lanes=r,e}function Va(e,t,r,n){return e=rt(22,e,n,t),e.elementType=wg,e.lanes=r,e.stateNode={},e}function _l(e,t,r){return e=rt(6,e,null,t),e.lanes=r,e}function Sl(e,t,r){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kw(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nd(e,t,r,n,o,i,a,s,l){return e=new kw(e,t,r,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(i),e}function _w(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function d0(e){if(!e)return Er;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(Fe(r))return dh(e,r,t)}return t}function f0(e,t,r,n,o,i,a,s,l){return e=nd(r,n,!0,e,o,i,a,s,l),e.context=d0(null),r=e.current,n=Ne(),o=xr(r),i=Bt(n,o),i.callback=t!=null?t:null,yr(r,i),e.current.lanes=o,vi(e,o,n),$e(e,n),e}function hs(e,t,r,n){var o=t.current,i=Ne(),a=xr(o);return r=d0(r),t.context===null?t.context=r:t.pendingContext=r,t=Bt(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),yr(o,t),e=ot(o,a,i),e!==null&&sa(e,o,a),a}function Ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function od(e,t){hm(e,t),(e=e.alternate)&&hm(e,t)}function Sw(){return null}var m0=typeof reportError=="function"?reportError:function(e){console.error(e)};function id(e){this._internalRoot=e}bs.prototype.render=id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));hs(e,t,null,null)};bs.prototype.unmount=id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){hs(null,e,null,null)}),t[Ht]=null}};function bs(e){this._internalRoot=e}bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hg();e={blockedOn:null,target:e,priority:t};for(var r=0;r<sr.length&&t!==0&&t<sr[r].priority;r++);sr.splice(r,0,e),r===0&&Gg(e)}};function ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bm(){}function Ew(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var c=Ha(a);i.call(c)}}var a=f0(t,n,e,0,null,!1,!1,"",bm);return e._reactRootContainer=a,e[Ht]=a.current,Zo(e.nodeType===8?e.parentNode:e),rn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var c=Ha(l);s.call(c)}}var l=nd(e,0,!1,null,null,!1,!1,"",bm);return e._reactRootContainer=l,e[Ht]=l.current,Zo(e.nodeType===8?e.parentNode:e),rn(function(){hs(t,l,r,n)}),l}function ys(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var l=Ha(a);s.call(l)}}hs(t,a,e,o)}else a=Ew(r,t,e,o,n);return Ha(a)}Bg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=So(t.pendingLanes);r!==0&&(Iu(t,r|1),$e(t,de()),(W&6)===0&&(Jn=de()+500,Rr()))}break;case 13:var n=Ne();rn(function(){return ot(e,1,n)}),od(e,1)}};Tu=function(e){if(e.tag===13){var t=Ne();ot(e,134217728,t),od(e,134217728)}};Vg=function(e){if(e.tag===13){var t=Ne(),r=xr(e);ot(e,r,t),od(e,r)}};Hg=function(){return Y};Wg=function(e,t){var r=Y;try{return Y=e,t()}finally{Y=r}};ac=function(e,t,r){switch(t){case"input":if(Zl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=cs(n);if(!o)throw Error(S(90));kg(n),Zl(n,o)}}}break;case"textarea":Sg(e,r);break;case"select":t=r.value,t!=null&&jn(e,!!r.multiple,t,!1)}};Og=Zu;Ng=rn;var Iw={usingClientEntryPoint:!1,Events:[wi,Tn,cs,Ag,Pg,Zu]},yo={findFiberByHostInstance:Hr,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},Tw={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mg(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{is=Xi.inject(Tw),Et=Xi}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw;Ye.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(t))throw Error(S(200));return _w(e,t,null,r)};Ye.createRoot=function(e,t){if(!ad(e))throw Error(S(299));var r=!1,n="",o=m0;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nd(e,1,!1,null,null,r,!1,n,o),e[Ht]=t.current,Zo(e.nodeType===8?e.parentNode:e),new id(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Mg(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return rn(e)};Ye.hydrate=function(e,t,r){if(!vs(t))throw Error(S(200));return ys(null,e,t,!0,r)};Ye.hydrateRoot=function(e,t,r){if(!ad(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=m0;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=f0(t,null,e,1,r!=null?r:null,o,!1,i,a),e[Ht]=t.current,Zo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new bs(t)};Ye.render=function(e,t,r){if(!vs(t))throw Error(S(200));return ys(null,e,t,!1,r)};Ye.unmountComponentAtNode=function(e){if(!vs(e))throw Error(S(40));return e._reactRootContainer?(rn(function(){ys(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};Ye.unstable_batchedUpdates=Zu;Ye.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!vs(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return ys(e,t,r,!1,n)};Ye.version="18.1.0-next-22edb9f77-20220426";function p0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0)}catch(e){console.error(e)}}p0(),mg.exports=Ye;var vm=mg.exports;Gl.createRoot=vm.createRoot,Gl.hydrateRoot=vm.hydrateRoot;var ws={exports:{}},xs={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=_.exports,Aw=Symbol.for("react.element"),Pw=Symbol.for("react.fragment"),Ow=Object.prototype.hasOwnProperty,Nw=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rw={key:!0,ref:!0,__self:!0,__source:!0};function g0(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Ow.call(t,n)&&!Rw.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Aw,type:e,key:i,ref:a,props:o,_owner:Nw.current}}xs.Fragment=Pw;xs.jsx=g0;xs.jsxs=g0;ws.exports=xs;const y=ws.exports.jsx,G=ws.exports.jsxs,ki=ws.exports.Fragment;function Ji(e){return y("div",{className:"col-12 col-lg-3 col-md-6 m-0 p-2",children:G("div",{className:"card card-style bg-dark shadow text-light",children:[y("img",{src:e.img,className:"card-img-top scale",alt:"...","data-bs-toggle":"modal","data-bs-target":e.modal}),G("div",{className:"card-body",children:[y("h5",{className:"card-title",children:e.title}),y("p",{className:"card-text",children:e.text}),y("button",{className:"btn btn-dark","data-bs-toggle":"modal","data-bs-target":e.modal,children:"Learn More"})]})]})})}function Wa(){return Wa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Wa.apply(this,arguments)}var Gr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gr||(Gr={}));var ym=function(e){return e},wm="beforeunload",zw="hashchange",Mw="popstate";function Lw(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,o=n.history;function i(){var k=Tr(n.location.hash.substr(1)),A=k.pathname,z=A===void 0?"/":A,B=k.search,ue=B===void 0?"":B,be=k.hash,vt=be===void 0?"":be,Je=o.state||{};return[Je.idx,ym({pathname:z,search:ue,hash:vt,state:Je.usr||null,key:Je.key||"default"})]}var a=null;function s(){if(a)h.call(a),a=null;else{var k=Gr.Pop,A=i(),z=A[0],B=A[1];if(h.length){if(z!=null){var ue=d-z;ue&&(a={action:k,location:B,retry:function(){I(ue*-1)}},I(ue))}}else g(k)}}n.addEventListener(Mw,s),n.addEventListener(zw,function(){var k=i(),A=k[1];jo(A)!==jo(m)&&s()});var l=Gr.Pop,c=i(),d=c[0],m=c[1],u=km(),h=km();d==null&&(d=0,o.replaceState(Wa({},o.state,{idx:d}),""));function w(){var k=document.querySelector("base"),A="";if(k&&k.getAttribute("href")){var z=n.location.href,B=z.indexOf("#");A=B===-1?z:z.slice(0,B)}return A}function E(k){return w()+"#"+(typeof k=="string"?k:jo(k))}function C(k,A){return A===void 0&&(A=null),ym(Wa({pathname:m.pathname,hash:"",search:""},typeof k=="string"?Tr(k):k,{state:A,key:Dw()}))}function p(k,A){return[{usr:k.state,key:k.key,idx:A},E(k)]}function f(k,A,z){return!h.length||(h.call({action:k,location:A,retry:z}),!1)}function g(k){l=k;var A=i();d=A[0],m=A[1],u.call({action:l,location:m})}function b(k,A){var z=Gr.Push,B=C(k,A);function ue(){b(k,A)}if(f(z,B,ue)){var be=p(B,d+1),vt=be[0],Je=be[1];try{o.pushState(vt,"",Je)}catch{n.location.assign(Je)}g(z)}}function x(k,A){var z=Gr.Replace,B=C(k,A);function ue(){x(k,A)}if(f(z,B,ue)){var be=p(B,d),vt=be[0],Je=be[1];o.replaceState(vt,"",Je),g(z)}}function I(k){o.go(k)}var T={get action(){return l},get location(){return m},createHref:E,push:b,replace:x,go:I,back:function(){I(-1)},forward:function(){I(1)},listen:function(A){return u.push(A)},block:function(A){var z=h.push(A);return h.length===1&&n.addEventListener(wm,xm),function(){z(),h.length||n.removeEventListener(wm,xm)}}};return T}function xm(e){e.preventDefault(),e.returnValue=""}function km(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function Dw(){return Math.random().toString(36).substr(2,8)}function jo(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,o=n===void 0?"":n,i=e.hash,a=i===void 0?"":i;return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function Tr(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sd=_.exports.createContext(null),ld=_.exports.createContext(null),ks=_.exports.createContext({outlet:null,matches:[]});function Ot(e,t){if(!e)throw new Error(t)}function jw(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?Tr(t):t,o=v0(n.pathname||"/",r);if(o==null)return null;let i=h0(e);Fw(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=Yw(i[s],o);return a}function h0(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((o,i)=>{let a={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};a.relativePath.startsWith("/")&&(a.relativePath.startsWith(n)||Ot(!1),a.relativePath=a.relativePath.slice(n.length));let s=kr([n,a.relativePath]),l=r.concat(a);o.children&&o.children.length>0&&(o.index===!0&&Ot(!1),h0(o.children,t,l,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:Gw(s,o.index),routesMeta:l})}),t}function Fw(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Kw(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const $w=/^:\w+$/,Uw=3,Bw=2,Vw=1,Hw=10,Ww=-2,_m=e=>e==="*";function Gw(e,t){let r=e.split("/"),n=r.length;return r.some(_m)&&(n+=Ww),t&&(n+=Bw),r.filter(o=>!_m(o)).reduce((o,i)=>o+($w.test(i)?Uw:i===""?Vw:Hw),n)}function Kw(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Yw(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],l=a===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",d=qw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!d)return null;Object.assign(n,d.params);let m=s.route;i.push({params:n,pathname:kr([o,d.pathname]),pathnameBase:y0(kr([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=kr([o,d.pathnameBase]))}return i}function qw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Qw(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((c,d,m)=>{if(d==="*"){let u=s[m]||"";a=i.slice(0,i.length-u.length).replace(/(.)\/+$/,"$1")}return c[d]=Xw(s[m]||""),c},{}),pathname:i,pathnameBase:a,pattern:e}}function Qw(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(a,s)=>(n.push(s),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),n]}function Xw(e,t){try{return decodeURIComponent(e)}catch{return e}}function Jw(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Tr(e):e;return{pathname:r?r.startsWith("/")?r:Zw(r,t):t,search:tx(n),hash:rx(o)}}function Zw(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function b0(e,t,r){let n=typeof e=="string"?Tr(e):e,o=e===""||n.pathname===""?"/":n.pathname,i;if(o==null)i=r;else{let s=t.length-1;if(o.startsWith("..")){let l=o.split("/");for(;l[0]==="..";)l.shift(),s-=1;n.pathname=l.join("/")}i=s>=0?t[s]:"/"}let a=Jw(n,i);return o&&o!=="/"&&o.endsWith("/")&&!a.pathname.endsWith("/")&&(a.pathname+="/"),a}function ex(e){return e===""||e.pathname===""?"/":typeof e=="string"?Tr(e).pathname:e.pathname}function v0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}const kr=e=>e.join("/").replace(/\/\/+/g,"/"),y0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),tx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function nx(e){_i()||Ot(!1);let{basename:t,navigator:r}=_.exports.useContext(sd),{hash:n,pathname:o,search:i}=w0(e),a=o;if(t!=="/"){let s=ex(e),l=s!=null&&s.endsWith("/");a=o==="/"?t+(l?"/":""):kr([t,o])}return r.createHref({pathname:a,search:i,hash:n})}function _i(){return _.exports.useContext(ld)!=null}function oo(){return _i()||Ot(!1),_.exports.useContext(ld).location}function ox(){_i()||Ot(!1);let{basename:e,navigator:t}=_.exports.useContext(sd),{matches:r}=_.exports.useContext(ks),{pathname:n}=oo(),o=JSON.stringify(r.map(s=>s.pathnameBase)),i=_.exports.useRef(!1);return _.exports.useEffect(()=>{i.current=!0}),_.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!i.current)return;if(typeof s=="number"){t.go(s);return}let c=b0(s,JSON.parse(o),n);e!=="/"&&(c.pathname=kr([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state)},[e,t,o,n])}function w0(e){let{matches:t}=_.exports.useContext(ks),{pathname:r}=oo(),n=JSON.stringify(t.map(o=>o.pathnameBase));return _.exports.useMemo(()=>b0(e,JSON.parse(n),r),[e,n,r])}function ix(e,t){_i()||Ot(!1);let{matches:r}=_.exports.useContext(ks),n=r[r.length-1],o=n?n.params:{};n&&n.pathname;let i=n?n.pathnameBase:"/";n&&n.route;let a=oo(),s;if(t){var l;let u=typeof t=="string"?Tr(t):t;i==="/"||((l=u.pathname)==null?void 0:l.startsWith(i))||Ot(!1),s=u}else s=a;let c=s.pathname||"/",d=i==="/"?c:c.slice(i.length)||"/",m=jw(e,{pathname:d});return ax(m&&m.map(u=>Object.assign({},u,{params:Object.assign({},o,u.params),pathname:kr([i,u.pathname]),pathnameBase:u.pathnameBase==="/"?i:kr([i,u.pathnameBase])})),r)}function ax(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,o)=>_.exports.createElement(ks.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,o+1))}}),null)}function nr(e){Ot(!1)}function sx(e){let{basename:t="/",children:r=null,location:n,navigationType:o=Gr.Pop,navigator:i,static:a=!1}=e;_i()&&Ot(!1);let s=y0(t),l=_.exports.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof n=="string"&&(n=Tr(n));let{pathname:c="/",search:d="",hash:m="",state:u=null,key:h="default"}=n,w=_.exports.useMemo(()=>{let E=v0(c,s);return E==null?null:{pathname:E,search:d,hash:m,state:u,key:h}},[s,c,d,m,u,h]);return w==null?null:_.exports.createElement(sd.Provider,{value:l},_.exports.createElement(ld.Provider,{children:r,value:{location:w,navigationType:o}}))}function lx(e){let{children:t,location:r}=e;return ix(jc(t),r)}function jc(e){let t=[];return _.exports.Children.forEach(e,r=>{if(!_.exports.isValidElement(r))return;if(r.type===_.exports.Fragment){t.push.apply(t,jc(r.props.children));return}r.type!==nr&&Ot(!1);let n={caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path};r.props.children&&(n.children=jc(r.props.children)),t.push(n)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fc(){return Fc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fc.apply(this,arguments)}function cx(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const ux=["onClick","reloadDocument","replace","state","target","to"];function dx(e){let{basename:t,children:r,window:n}=e,o=_.exports.useRef();o.current==null&&(o.current=Lw({window:n}));let i=o.current,[a,s]=_.exports.useState({action:i.action,location:i.location});return _.exports.useLayoutEffect(()=>i.listen(s),[i]),_.exports.createElement(sx,{basename:t,children:r,location:a.location,navigationType:a.action,navigator:i})}function fx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const cd=_.exports.forwardRef(function(t,r){let{onClick:n,reloadDocument:o,replace:i=!1,state:a,target:s,to:l}=t,c=cx(t,ux),d=nx(l),m=mx(l,{replace:i,state:a,target:s});function u(h){n&&n(h),!h.defaultPrevented&&!o&&m(h)}return _.exports.createElement("a",Fc({},c,{href:d,onClick:u,ref:r,target:s}))});function mx(e,t){let{target:r,replace:n,state:o}=t===void 0?{}:t,i=ox(),a=oo(),s=w0(e);return _.exports.useCallback(l=>{if(l.button===0&&(!r||r==="_self")&&!fx(l)){l.preventDefault();let c=!!n||jo(a)===jo(s);i(e,{replace:c,state:o})}},[a,i,s,n,o,r,e])}function px(){return y("main",{className:"bg-img",children:G("h3",{className:"h1 txt-shadow",children:["Razer Ergonomic Wrist ",y("br",{})," Rest for Mini Keyboards",y(cd,{to:"learnMore",children:y("button",{className:"fs-2 p-2 bg-transparent shadow scale",children:"Learn More"})})]})})}var gx="/assets/teclado.b18b27e9.png",hx="/assets/teclado2.885aa50d.png",bx="/assets/mouse.70250104.png",vx="/assets/mouse2.fe397d3f.png",yx="/assets/more1.a0d3c294.jpg",wx="/assets/more2.ddf099a4.jpg",xx="/assets/more3.ef9d117d.jpg",kx="/assets/services.3e34e44c.jpg",_x="/assets/services1.6bb30319.jpg",Sx="/assets/services3.21965402.jpg",Ex="/assets/serviceItem1.95cfd165.jpg",Ix="/assets/serviceItem2.f451d3a4.jpg",Tx="/assets/serviceItem3.cdb680ef.jpg",_e={img1:gx,img2:hx,img3:bx,img4:vx,more1:yx,more2:wx,more3:xx,service1:kx,service2:_x,service3:Sx,item1:Ex,item2:Ix,item3:Tx};function Cx(e){return y("div",{className:"col-12  m-0 p-2",children:G("div",{className:"card card-style bg-dark text-light p-2",children:[y("img",{src:e.img,className:"card-img-top ",alt:"..."}),G("div",{className:"card-body",children:[y("h5",{className:"card-title",children:e.title}),y("p",{className:"card-text",children:e.text}),y("a",{href:"#",className:"btn btn-dark"})]})]})})}function Ax(e){return y(ki,{children:y("div",{className:"modal fade ",id:e.id,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:y("div",{className:"modal-dialog ",children:G("div",{className:"modal-content bg-transparent",children:[G("div",{className:"modal-header border-0",children:[y("h5",{className:"modal-title text-white",id:"staticBackdropLabel",children:e.title}),y("button",{type:"button",className:"btn-close ","data-bs-dismiss":"modal","aria-label":"Close",children:"X"})]}),y("div",{className:"modal-body",children:y(Cx,{title:e.titleCard,text:e.textCard,img:e.imgCard})}),y("div",{className:"modal-footer border-0",children:y("button",{type:"button",className:"btn btn-success ps-5 pe-5 w-75 m-auto text-black fw-bold ","data-bs-dismiss":"modal",children:"Close"})})]})})})})}var Px=[{title:"Mouse Razer",titleCard:"Razer Viper V2 Pro Hyperspeed Rat\xF3n inal\xE1mbrico para videojuegos",textCard:"Dise\xF1o ultraligero de 2.08 oz: uno de los ratones electr\xF3nicos m\xE1s ligeros jam\xE1s creados y ofrece un nivel de velocidad y control favorecido por los mejores profesionales de deportes electr\xF3nicos del mundo Sensor \xF3ptico Focus Pro 30K: la mejor precisi\xF3n de su clase a trav\xE9s de un rendimiento de seguimiento impecable en una variedad m\xE1s amplia de superficies, incluido el vidrio Interruptores de rat\xF3n \xF3pticos Gen-3: ciclo de vida mejorado de 90 millones de clics con cero problemas de doble clic y accionamiento de 0,2 ms que proporciona fiabilidad y velocidad creadas para deportes electr\xF3nicos",id:"modal1"},{title:"Teclado Gamer RGB",titleCard:"Teclado gamer Razer BlackWidow V3 QWERTY Green ingl\xE9s US color negro con luz RGB",textCard:"Lo que tienes que saber de este producto: Ergon\xF3mico y apto para diversos usos. Tiene reposa mu\xF1eca. Contiene teclado num\xE9rico. Funci\xF3n antighosting incorporada. Tipo de teclado: mec\xE1nico. Tecla cil\xEDndrica. Con conector USB 2.0. Indispensable para tus actividades. Las im\xE1genes pueden ser ilustrativa",id:"modal2"},{title:"Teclado Razer",titleCard:"Teclado gamer Razer Huntsman Mini QWERTY Razer Purple ingl\xE9s US color negro con luz RGB",textCard:"Lo que tienes que saber de este producto: Resiste a salpicaduras. Funci\xF3n antighosting incorporada. Tipo de teclado: opto-mec\xE1nico. Tecla cil\xEDndrica. Con conector USB-C. Con cable removible. Indispensable para tus actividades. Las im\xE1genes pueden ser ilustrativas",id:"modal3"},{title:"Mouse Razer",titleCard:"Mouse de juego Razer DeathAdder V2",textCard:"Lo que tienes que saber de este producto: Utiliza cable. Posee rueda de desplazamiento. Cuenta con 6 botones para un mayor control. Con luces para mejorar la experiencia de uso. Con sensor \xF3ptico. Resoluci\xF3n de 8500dpi. Creado para llevar a todas partes. Control inteligente y navegaci\xF3n f\xE1cil.",id:"modal4"}];function Sm(){const e=[_e.img3,_e.img2,_e.img1,_e.img4];return G(ki,{children:[Px.map(function(t,r){return y(Ax,{title:t.title,titleCard:t.titleCard,textCard:t.textCard,imgCard:e[r],id:t.id})}),y(px,{}),G("div",{className:"lista-card row container-fluid",children:[y(Ji,{title:"El mejor mouse ",text:"Razer Viper V2 Pro Hyperspeed",img:_e.img3,modal:"#modal1"}),y(Ji,{title:"El mejor teclado ",text:"BlackWidow V3 QWERTY",img:_e.img2,modal:"#modal2"}),y(Ji,{title:"El mejor teclado ",text:"Razer Huntsman Mini QWERTY Razer",img:_e.img1,modal:"#modal3"}),y(Ji,{title:"El mejor mouse ",text:"Razer DeathAdder V2",img:_e.img4,modal:"#modal4"})]})]})}function El(e){return y(ki,{children:G("div",{className:" text-center centrar",children:[y("h1",{className:"text-success fw-bold txt-shadow my-p",children:e.title}),y("p",{className:"text-white txt-shadow fs-6 w-50",children:e.text}),y("div",{className:"container-fluid container-img rounded",children:y("img",{src:e.img,className:"rounded"})})]})})}function Ox(){return G("div",{children:[y(El,{title:"LA MEJOR EXPERIENCIA DE JUEGO EN EL MERCADO",text:"The Razer Kishi V2 is designed to meet the standards of competitive console controllers with cutting edge microswitch buttons, analog triggers, and programmable macros.",img:_e.more1}),y(El,{title:"PERIF\xC9RICOS DE LA M\xC1S ALTA CALIDAD",text:"Rethink everything you knew about mobile gaming. Razer Kishi V2 is a universal mobile gaming controller that brings a console-class gameplay experience to your smartphone. Play the best AAA games, on your mobile phone, exactly as you\u2019d expect to play them on a game console \u2013 zero compromises.",img:_e.more2}),y(El,{title:"PRECIOS POR LA MEJOR CALIDAD",text:"Go beyond mobile gaming - use Kishi to play full PC and console games directly on your phone, with support for the biggest game streaming apps. Stream from your own device, or play from the cloud. ",img:_e.more3}),y("footer",{})]})}function Nx(e){return y("div",{children:G("div",{className:"card bg-dark text-white",children:[y("img",{src:e.imgBg,className:"card-img vh-80",alt:"..."}),G("div",{className:"card-img-overlay transparentize-img text-center",children:[y("h5",{className:"card-title h3 text-success",children:e.title}),y("p",{className:"card-text w-75 m-auto",children:e.text}),y("div",{className:"container-fluid container-img rounded mt-5",children:y("img",{src:e.imgItem,className:"rounded"})})]})]})})}var Rx=[{title:"PREMIUN SERVICE",text:"Razer Gold is the unified virtual credits for gamers worldwide, available in over 42,000 games and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for your buck\u2014including getting rewarded with Razer Silver and exclusive game deals  Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world"},{title:"SILVER SERVICE",text:"Razer Silver is the only loyalty rewards program for gamers. Earn Razer Silver simply by using Razer Gold to make your game purchases or participating in our software and services. Utilize your Razer Silver in exclusive events or use them to redeem exciting rewards\u2014from Razer hardware to digital rewards and discounts."},{title:"GOLD SERVICE",text:"Gold PINs are a digital code used to reload Razer Gold wallets or top up participating game credits. Gold PINs can be purchased at over 5.6 million touchpoints globally, including convenience stores, consumer electronics chains, and department stores."}];function zx(){const e=[_e.service1,_e.service2,_e.service3],t=[_e.item1,_e.item2,_e.item3];return G("div",{children:[G("div",{className:"card m-0 text-center rounded-0 bg-transparent ",children:[y("div",{className:"card-header bg-secondary text-white rounded-0 txt-shadow ",children:"Recuerda que puedes tener un descuento adicional si te unes ahora."}),G("div",{className:"card-body text-light transparentize",children:[y("h5",{className:"card-title h3 text-success",children:"NUESTROS SERVICIOS"}),G("p",{className:"card-text w-50 m-auto lh-lg",children:[y("p",{className:"mt-3",children:"Join over millions of users who enjoy using Razer Services to enrich their gaming experience. "}),y("br",{}),G("p",{children:["Razer Gold and Silver offers users the competitive advantage in any battlefield. Use Gold PINs to purchase from our ever-expanding list of games in the Gold Webshop. Protect your gear with RazerCare and use Razer ID to access all the best services Razer has to offer. ",y("br",{})," ",y("br",{})]}),y("p",{children:"Unlock your ultimate gaming potential with Razer Services now."})]})]})]}),Rx.map(function(r,n){return y(Nx,{imgBg:e[n],imgItem:t[n],title:r.title,text:r.text})})]})}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Em(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Em(Object(r),!0).forEach(function(n){Dx(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Em(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ga(e){return Ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ga(e)}function Mx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Im(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Lx(e,t,r){return t&&Im(e.prototype,t),r&&Im(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dx(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ud(e,t){return Fx(e)||Ux(e,t)||x0(e,t)||Vx()}function _s(e){return jx(e)||$x(e)||x0(e)||Bx()}function jx(e){if(Array.isArray(e))return $c(e)}function Fx(e){if(Array.isArray(e))return e}function $x(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ux(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,a,s;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(l){i=!0,s=l}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw s}}return n}}function x0(e,t){if(!!e){if(typeof e=="string")return $c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $c(e,t)}}function $c(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Bx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tm=function(){},dd={},k0={},_0=null,S0={mark:Tm,measure:Tm};try{typeof window!="undefined"&&(dd=window),typeof document!="undefined"&&(k0=document),typeof MutationObserver!="undefined"&&(_0=MutationObserver),typeof performance!="undefined"&&(S0=performance)}catch{}var Hx=dd.navigator||{},Cm=Hx.userAgent,Am=Cm===void 0?"":Cm,Cr=dd,re=k0,Pm=_0,Zi=S0;Cr.document;var Jt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",E0=~Am.indexOf("MSIE")||~Am.indexOf("Trident/"),Gt="___FONT_AWESOME___",Uc=16,I0="fa",T0="svg-inline--fa",nn="data-fa-i2svg",Bc="data-fa-pseudo-element",Wx="data-fa-pseudo-element-pending",fd="data-prefix",md="data-icon",Om="fontawesome-i2svg",Gx="async",Kx=["HTML","HEAD","STYLE","SCRIPT"],C0=function(){try{return!0}catch{return!1}}(),pd={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Ka={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},A0={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Yx={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},qx=/fa[srltdbk\-\ ]/,P0="fa-layers-text",Qx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Xx={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},O0=[1,2,3,4,5,6,7,8,9,10],Jx=O0.concat([11,12,13,14,15,16,17,18,19,20]),Zx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ek=[].concat(_s(Object.keys(Ka)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Kr.GROUP,Kr.SWAP_OPACITY,Kr.PRIMARY,Kr.SECONDARY]).concat(O0.map(function(e){return"".concat(e,"x")})).concat(Jx.map(function(e){return"w-".concat(e)})),N0=Cr.FontAwesomeConfig||{};function tk(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function rk(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var nk=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nk.forEach(function(e){var t=ud(e,2),r=t[0],n=t[1],o=rk(tk(r));o!=null&&(N0[n]=o)})}var ok={familyPrefix:I0,styleDefault:"solid",replacementClass:T0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Fo=O(O({},ok),N0);Fo.autoReplaceSvg||(Fo.observeMutations=!1);var L={};Object.keys(Fo).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(r){Fo[e]=r,ma.forEach(function(n){return n(L)})},get:function(){return Fo[e]}})});Cr.FontAwesomeConfig=L;var ma=[];function ik(e){return ma.push(e),function(){ma.splice(ma.indexOf(e),1)}}var tr=Uc,St={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ak(e){if(!(!e||!Jt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=re.head.childNodes,n=null,o=r.length-1;o>-1;o--){var i=r[o],a=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(n=i)}return re.head.insertBefore(t,n),e}}var sk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function li(){for(var e=12,t="";e-- >0;)t+=sk[Math.random()*62|0];return t}function io(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function gd(e){return e.classList?io(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function R0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lk(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(R0(e[r]),'" ')},"").trim()}function Ss(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function hd(e){return e.size!==St.size||e.x!==St.x||e.y!==St.y||e.rotate!==St.rotate||e.flipX||e.flipY}function ck(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(a," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:o,inner:l,path:c}}function uk(e){var t=e.transform,r=e.width,n=r===void 0?Uc:r,o=e.height,i=o===void 0?Uc:o,a=e.startCentered,s=a===void 0?!1:a,l="";return s&&E0?l+="translate(".concat(t.x/tr-n/2,"em, ").concat(t.y/tr-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/tr,"em), calc(-50% + ").concat(t.y/tr,"em)) "):l+="translate(".concat(t.x/tr,"em, ").concat(t.y/tr,"em) "),l+="scale(".concat(t.size/tr*(t.flipX?-1:1),", ").concat(t.size/tr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var dk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function z0(){var e=I0,t=T0,r=L.familyPrefix,n=L.replacementClass,o=dk;if(r!==e||n!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(i,".".concat(r,"-")).replace(a,"--".concat(r,"-")).replace(s,".".concat(n))}return o}var Nm=!1;function Il(){L.autoAddCss&&!Nm&&(ak(z0()),Nm=!0)}var fk={mixout:function(){return{dom:{css:z0,insertCss:Il}}},hooks:function(){return{beforeDOMElementCreation:function(){Il()},beforeI2svg:function(){Il()}}}},Kt=Cr||{};Kt[Gt]||(Kt[Gt]={});Kt[Gt].styles||(Kt[Gt].styles={});Kt[Gt].hooks||(Kt[Gt].hooks={});Kt[Gt].shims||(Kt[Gt].shims=[]);var pt=Kt[Gt],M0=[],mk=function e(){re.removeEventListener("DOMContentLoaded",e),Ya=1,M0.map(function(t){return t()})},Ya=!1;Jt&&(Ya=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),Ya||re.addEventListener("DOMContentLoaded",mk));function pk(e){!Jt||(Ya?setTimeout(e,0):M0.push(e))}function Si(e){var t=e.tag,r=e.attributes,n=r===void 0?{}:r,o=e.children,i=o===void 0?[]:o;return typeof e=="string"?R0(e):"<".concat(t," ").concat(lk(n),">").concat(i.map(Si).join(""),"</").concat(t,">")}function Rm(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var gk=function(t,r){return function(n,o,i,a){return t.call(r,n,o,i,a)}},Tl=function(t,r,n,o){var i=Object.keys(t),a=i.length,s=o!==void 0?gk(r,o):r,l,c,d;for(n===void 0?(l=1,d=t[i[0]]):(l=0,d=n);l<a;l++)c=i[l],d=s(d,t[c],c,t);return d};function hk(e){for(var t=[],r=0,n=e.length;r<n;){var o=e.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var i=e.charCodeAt(r++);(i&64512)==56320?t.push(((o&1023)<<10)+(i&1023)+65536):(t.push(o),r--)}else t.push(o)}return t}function Vc(e){var t=hk(e);return t.length===1?t[0].toString(16):null}function bk(e,t){var r=e.length,n=e.charCodeAt(t),o;return n>=55296&&n<=56319&&r>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(n-55296)*1024+o-56320+65536:n}function zm(e){return Object.keys(e).reduce(function(t,r){var n=e[r],o=!!n.icon;return o?t[n.iconName]=n.icon:t[r]=n,t},{})}function Hc(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,o=n===void 0?!1:n,i=zm(t);typeof pt.hooks.addPack=="function"&&!o?pt.hooks.addPack(e,zm(t)):pt.styles[e]=O(O({},pt.styles[e]||{}),i),e==="fas"&&Hc("fa",t)}var $o=pt.styles,vk=pt.shims,yk=Object.values(A0),bd=null,L0={},D0={},j0={},F0={},$0={},wk=Object.keys(pd);function xk(e){return~ek.indexOf(e)}function kk(e,t){var r=t.split("-"),n=r[0],o=r.slice(1).join("-");return n===e&&o!==""&&!xk(o)?o:null}var U0=function(){var t=function(i){return Tl($o,function(a,s,l){return a[l]=Tl(s,i,{}),a},{})};L0=t(function(o,i,a){if(i[3]&&(o[i[3]]=a),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){o[l.toString(16)]=a})}return o}),D0=t(function(o,i,a){if(o[a]=a,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){o[l]=a})}return o}),$0=t(function(o,i,a){var s=i[2];return o[a]=a,s.forEach(function(l){o[l]=a}),o});var r="far"in $o||L.autoFetchSvg,n=Tl(vk,function(o,i){var a=i[0],s=i[1],l=i[2];return s==="far"&&!r&&(s="fas"),typeof a=="string"&&(o.names[a]={prefix:s,iconName:l}),typeof a=="number"&&(o.unicodes[a.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});j0=n.names,F0=n.unicodes,bd=Es(L.styleDefault)};ik(function(e){bd=Es(e.styleDefault)});U0();function vd(e,t){return(L0[e]||{})[t]}function _k(e,t){return(D0[e]||{})[t]}function zn(e,t){return($0[e]||{})[t]}function B0(e){return j0[e]||{prefix:null,iconName:null}}function Sk(e){var t=F0[e],r=vd("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Ar(){return bd}var yd=function(){return{prefix:null,iconName:null,rest:[]}};function Es(e){var t=pd[e],r=Ka[e]||Ka[t],n=e in pt.styles?e:null;return r||n||null}function Is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.skipLookups,n=r===void 0?!1:r,o=null,i=e.reduce(function(a,s){var l=kk(L.familyPrefix,s);if($o[s]?(s=yk.includes(s)?Yx[s]:s,o=s,a.prefix=s):wk.indexOf(s)>-1?(o=s,a.prefix=Es(s)):l?a.iconName=l:s!==L.replacementClass&&a.rest.push(s),!n&&a.prefix&&a.iconName){var c=o==="fa"?B0(a.iconName):{},d=zn(a.prefix,a.iconName);c.prefix&&(o=null),a.iconName=c.iconName||d||a.iconName,a.prefix=c.prefix||a.prefix,a.prefix==="far"&&!$o.far&&$o.fas&&!L.autoFetchSvg&&(a.prefix="fas")}return a},yd());return(i.prefix==="fa"||o==="fa")&&(i.prefix=Ar()||"fas"),i}var Ek=function(){function e(){Mx(this,e),this.definitions={}}return Lx(e,[{key:"add",value:function(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];var a=o.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(s){r.definitions[s]=O(O({},r.definitions[s]||{}),a[s]),Hc(s,a[s]);var l=A0[s];l&&Hc(l,a[s]),U0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var o=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(o).map(function(i){var a=o[i],s=a.prefix,l=a.iconName,c=a.icon,d=c[2];r[s]||(r[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(r[s][m]=c)}),r[s][l]=c}),r}}]),e}(),Mm=[],Mn={},Hn={},Ik=Object.keys(Hn);function Tk(e,t){var r=t.mixoutsTo;return Mm=e,Mn={},Object.keys(Hn).forEach(function(n){Ik.indexOf(n)===-1&&delete Hn[n]}),Mm.forEach(function(n){var o=n.mixout?n.mixout():{};if(Object.keys(o).forEach(function(a){typeof o[a]=="function"&&(r[a]=o[a]),Ga(o[a])==="object"&&Object.keys(o[a]).forEach(function(s){r[a]||(r[a]={}),r[a][s]=o[a][s]})}),n.hooks){var i=n.hooks();Object.keys(i).forEach(function(a){Mn[a]||(Mn[a]=[]),Mn[a].push(i[a])})}n.provides&&n.provides(Hn)}),r}function Wc(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];var i=Mn[e]||[];return i.forEach(function(a){t=a.apply(null,[t].concat(n))}),t}function on(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Mn[e]||[];o.forEach(function(i){i.apply(null,r)})}function Yt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Hn[e]?Hn[e].apply(null,t):void 0}function Gc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Ar();if(!!t)return t=zn(r,t)||t,Rm(V0.definitions,r,t)||Rm(pt.styles,r,t)}var V0=new Ek,Ck=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,on("noAuto")},Ak={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jt?(on("beforeI2svg",t),Yt("pseudoElements2svg",t),Yt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,pk(function(){Ok({autoReplaceSvgRoot:r}),on("watch",t)})}},Pk={icon:function(t){if(t===null)return null;if(Ga(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:zn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Es(t[0]);return{prefix:n,iconName:zn(n,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(L.familyPrefix,"-"))>-1||t.match(qx))){var o=Is(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||Ar(),iconName:zn(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var i=Ar();return{prefix:i,iconName:zn(i,t)||t}}}},Qe={noAuto:Ck,config:L,dom:Ak,parse:Pk,library:V0,findIconDefinition:Gc,toHtml:Si},Ok=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,n=r===void 0?re:r;(Object.keys(pt.styles).length>0||L.autoFetchSvg)&&Jt&&L.autoReplaceSvg&&Qe.dom.i2svg({node:n})};function Ts(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return Si(n)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Jt){var n=re.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function Nk(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,i=e.styles,a=e.transform;if(hd(a)&&r.found&&!n.found){var s=r.width,l=r.height,c={x:s/l/2,y:.5};o.style=Ss(O(O({},i),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function Rk(e){var t=e.prefix,r=e.iconName,n=e.children,o=e.attributes,i=e.symbol,a=i===!0?"".concat(t,"-").concat(L.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},o),{},{id:a}),children:n}]}]}function wd(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,i=e.iconName,a=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,u=e.watchable,h=u===void 0?!1:u,w=n.found?n:r,E=w.width,C=w.height,p=o==="fak",f=[L.replacementClass,i?"".concat(L.familyPrefix,"-").concat(i):""].filter(function(A){return m.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(m.classes).join(" "),g={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":o,"data-icon":i,class:f,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(C)})},b=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/C*16*.0625,"em")}:{};h&&(g.attributes[nn]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(d||li())},children:[l]}),delete g.attributes.title);var x=O(O({},g),{},{prefix:o,iconName:i,main:r,mask:n,maskId:c,transform:a,symbol:s,styles:O(O({},b),m.styles)}),I=n.found&&r.found?Yt("generateAbstractMask",x)||{children:[],attributes:{}}:Yt("generateAbstractIcon",x)||{children:[],attributes:{}},T=I.children,k=I.attributes;return x.children=T,x.attributes=k,s?Rk(x):Nk(x)}function Lm(e){var t=e.content,r=e.width,n=e.height,o=e.transform,i=e.title,a=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},a.attributes),i?{title:i}:{}),{},{class:a.classes.join(" ")});l&&(c[nn]="");var d=O({},a.styles);hd(o)&&(d.transform=uk({transform:o,startCentered:!0,width:r,height:n}),d["-webkit-transform"]=d.transform);var m=Ss(d);m.length>0&&(c.style=m);var u=[];return u.push({tag:"span",attributes:c,children:[t]}),i&&u.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),u}function zk(e){var t=e.content,r=e.title,n=e.extra,o=O(O(O({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),i=Ss(n.styles);i.length>0&&(o.style=i);var a=[];return a.push({tag:"span",attributes:o,children:[t]}),r&&a.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),a}var Cl=pt.styles;function Kc(e){var t=e[0],r=e[1],n=e.slice(4),o=ud(n,1),i=o[0],a=null;return Array.isArray(i)?a={tag:"g",attributes:{class:"".concat(L.familyPrefix,"-").concat(Kr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.familyPrefix,"-").concat(Kr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(L.familyPrefix,"-").concat(Kr.PRIMARY),fill:"currentColor",d:i[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:r,icon:a}}var Mk={found:!1,width:512,height:512};function Lk(e,t){!C0&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Yc(e,t){var r=t;return t==="fa"&&L.styleDefault!==null&&(t=Ar()),new Promise(function(n,o){if(Yt("missingIconAbstract"),r==="fa"){var i=B0(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Cl[t]&&Cl[t][e]){var a=Cl[t][e];return n(Kc(a))}Lk(e,t),n(O(O({},Mk),{},{icon:L.showMissingIcons&&e?Yt("missingIconAbstract")||{}:{}}))})}var Dm=function(){},qc=L.measurePerformance&&Zi&&Zi.mark&&Zi.measure?Zi:{mark:Dm,measure:Dm},Io='FA "6.1.1"',Dk=function(t){return qc.mark("".concat(Io," ").concat(t," begins")),function(){return H0(t)}},H0=function(t){qc.mark("".concat(Io," ").concat(t," ends")),qc.measure("".concat(Io," ").concat(t),"".concat(Io," ").concat(t," begins"),"".concat(Io," ").concat(t," ends"))},xd={begin:Dk,end:H0},pa=function(){};function jm(e){var t=e.getAttribute?e.getAttribute(nn):null;return typeof t=="string"}function jk(e){var t=e.getAttribute?e.getAttribute(fd):null,r=e.getAttribute?e.getAttribute(md):null;return t&&r}function Fk(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function $k(){if(L.autoReplaceSvg===!0)return ga.replace;var e=ga[L.autoReplaceSvg];return e||ga.replace}function Uk(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function Bk(e){return re.createElement(e)}function W0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,n=r===void 0?e.tag==="svg"?Uk:Bk:r;if(typeof e=="string")return re.createTextNode(e);var o=n(e.tag);Object.keys(e.attributes||[]).forEach(function(a){o.setAttribute(a,e.attributes[a])});var i=e.children||[];return i.forEach(function(a){o.appendChild(W0(a,{ceFn:n}))}),o}function Vk(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ga={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(o){r.parentNode.insertBefore(W0(o),r)}),r.getAttribute(nn)===null&&L.keepOriginalSource){var n=re.createComment(Vk(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(t){var r=t[0],n=t[1];if(~gd(r).indexOf(L.replacementClass))return ga.replace(t);var o=new RegExp("".concat(L.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce(function(s,l){return l===L.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var a=n.map(function(s){return Si(s)}).join(`
`);r.setAttribute(nn,""),r.innerHTML=a}};function Fm(e){e()}function G0(e,t){var r=typeof t=="function"?t:pa;if(e.length===0)r();else{var n=Fm;L.mutateApproach===Gx&&(n=Cr.requestAnimationFrame||Fm),n(function(){var o=$k(),i=xd.begin("mutate");e.map(o),i(),r()})}}var kd=!1;function K0(){kd=!0}function Qc(){kd=!1}var qa=null;function $m(e){if(!!Pm&&!!L.observeMutations){var t=e.treeCallback,r=t===void 0?pa:t,n=e.nodeCallback,o=n===void 0?pa:n,i=e.pseudoElementsCallback,a=i===void 0?pa:i,s=e.observeMutationsRoot,l=s===void 0?re:s;qa=new Pm(function(c){if(!kd){var d=Ar();io(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!jm(m.addedNodes[0])&&(L.searchPseudoElements&&a(m.target),r(m.target)),m.type==="attributes"&&m.target.parentNode&&L.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&jm(m.target)&&~Zx.indexOf(m.attributeName))if(m.attributeName==="class"&&jk(m.target)){var u=Is(gd(m.target)),h=u.prefix,w=u.iconName;m.target.setAttribute(fd,h||d),w&&m.target.setAttribute(md,w)}else Fk(m.target)&&o(m.target)})}}),Jt&&qa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hk(){!qa||qa.disconnect()}function Wk(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(n,o){var i=o.split(":"),a=i[0],s=i.slice(1);return a&&s.length>0&&(n[a]=s.join(":").trim()),n},{})),r}function Gk(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",o=Is(gd(e));return o.prefix||(o.prefix=Ar()),t&&r&&(o.prefix=t,o.iconName=r),o.iconName&&o.prefix||o.prefix&&n.length>0&&(o.iconName=_k(o.prefix,e.innerText)||vd(o.prefix,Vc(e.innerText))),o}function Kk(e){var t=io(e.attributes).reduce(function(o,i){return o.name!=="class"&&o.name!=="style"&&(o[i.name]=i.value),o},{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return L.autoA11y&&(r?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(n||li()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yk(){return{iconName:null,title:null,titleId:null,prefix:null,transform:St,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Um(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=Gk(e),n=r.iconName,o=r.prefix,i=r.rest,a=Kk(e),s=Wc("parseNodeAttributes",{},e),l=t.styleParser?Wk(e):[];return O({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:St,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:a}},s)}var qk=pt.styles;function Y0(e){var t=L.autoReplaceSvg==="nest"?Um(e,{styleParser:!1}):Um(e);return~t.extra.classes.indexOf(P0)?Yt("generateLayersText",e,t):Yt("generateSvgReplacementMutation",e,t)}function Bm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jt)return Promise.resolve();var r=re.documentElement.classList,n=function(m){return r.add("".concat(Om,"-").concat(m))},o=function(m){return r.remove("".concat(Om,"-").concat(m))},i=L.autoFetchSvg?Object.keys(pd):Object.keys(qk),a=[".".concat(P0,":not([").concat(nn,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(nn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var s=[];try{s=io(e.querySelectorAll(a))}catch{}if(s.length>0)n("pending"),o("complete");else return Promise.resolve();var l=xd.begin("onTree"),c=s.reduce(function(d,m){try{var u=Y0(m);u&&d.push(u)}catch(h){C0||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(u){G0(u,function(){n("active"),n("complete"),o("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(u){l(),m(u)})})}function Qk(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Y0(e).then(function(r){r&&G0([r],t)})}function Xk(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Gc(t||{}),o=r.mask;return o&&(o=(o||{}).icon?o:Gc(o||{})),e(n,O(O({},r),{},{mask:o}))}}var Jk=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?St:n,i=r.symbol,a=i===void 0?!1:i,s=r.mask,l=s===void 0?null:s,c=r.maskId,d=c===void 0?null:c,m=r.title,u=m===void 0?null:m,h=r.titleId,w=h===void 0?null:h,E=r.classes,C=E===void 0?[]:E,p=r.attributes,f=p===void 0?{}:p,g=r.styles,b=g===void 0?{}:g;if(!!t){var x=t.prefix,I=t.iconName,T=t.icon;return Ts(O({type:"icon"},t),function(){return on("beforeDOMElementCreation",{iconDefinition:t,params:r}),L.autoA11y&&(u?f["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(w||li()):(f["aria-hidden"]="true",f.focusable="false")),wd({icons:{main:Kc(T),mask:l?Kc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:I,transform:O(O({},St),o),symbol:a,title:u,maskId:d,titleId:w,extra:{attributes:f,styles:b,classes:C}})})}},Zk={mixout:function(){return{icon:Xk(Jk)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Bm,r.nodeCallback=Qk,r}}},provides:function(t){t.i2svg=function(r){var n=r.node,o=n===void 0?re:n,i=r.callback,a=i===void 0?function(){}:i;return Bm(o,a)},t.generateSvgReplacementMutation=function(r,n){var o=n.iconName,i=n.title,a=n.titleId,s=n.prefix,l=n.transform,c=n.symbol,d=n.mask,m=n.maskId,u=n.extra;return new Promise(function(h,w){Promise.all([Yc(o,s),d.iconName?Yc(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var C=ud(E,2),p=C[0],f=C[1];h([r,wd({icons:{main:p,mask:f},prefix:s,iconName:o,transform:l,symbol:c,maskId:m,title:i,titleId:a,extra:u,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(r){var n=r.children,o=r.attributes,i=r.main,a=r.transform,s=r.styles,l=Ss(s);l.length>0&&(o.style=l);var c;return hd(a)&&(c=Yt("generateAbstractTransformGrouping",{main:i,transform:a,containerWidth:i.width,iconWidth:i.width})),n.push(c||i.icon),{children:n,attributes:o}}}},e5={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.classes,i=o===void 0?[]:o;return Ts({type:"layer"},function(){on("beforeDOMElementCreation",{assembler:r,params:n});var a=[];return r(function(s){Array.isArray(s)?s.map(function(l){a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.familyPrefix,"-layers")].concat(_s(i)).join(" ")},children:a}]})}}}},t5={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.title,i=o===void 0?null:o,a=n.classes,s=a===void 0?[]:a,l=n.attributes,c=l===void 0?{}:l,d=n.styles,m=d===void 0?{}:d;return Ts({type:"counter",content:r},function(){return on("beforeDOMElementCreation",{content:r,params:n}),zk({content:r.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(L.familyPrefix,"-layers-counter")].concat(_s(s))}})})}}}},r5={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.transform,i=o===void 0?St:o,a=n.title,s=a===void 0?null:a,l=n.classes,c=l===void 0?[]:l,d=n.attributes,m=d===void 0?{}:d,u=n.styles,h=u===void 0?{}:u;return Ts({type:"text",content:r},function(){return on("beforeDOMElementCreation",{content:r,params:n}),Lm({content:r,transform:O(O({},St),i),title:s,extra:{attributes:m,styles:h,classes:["".concat(L.familyPrefix,"-layers-text")].concat(_s(c))}})})}}},provides:function(t){t.generateLayersText=function(r,n){var o=n.title,i=n.transform,a=n.extra,s=null,l=null;if(E0){var c=parseInt(getComputedStyle(r).fontSize,10),d=r.getBoundingClientRect();s=d.width/c,l=d.height/c}return L.autoA11y&&!o&&(a.attributes["aria-hidden"]="true"),Promise.resolve([r,Lm({content:r.innerHTML,width:s,height:l,transform:i,title:o,extra:a,watchable:!0})])}}},n5=new RegExp('"',"ug"),Vm=[1105920,1112319];function o5(e){var t=e.replace(n5,""),r=bk(t,0),n=r>=Vm[0]&&r<=Vm[1],o=t.length===2?t[0]===t[1]:!1;return{value:Vc(o?t[0]:t),isSecondary:n||o}}function Hm(e,t){var r="".concat(Wx).concat(t.replace(":","-"));return new Promise(function(n,o){if(e.getAttribute(r)!==null)return n();var i=io(e.children),a=i.filter(function(I){return I.getAttribute(Bc)===t})[0],s=Cr.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Qx),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(a&&!l)return e.removeChild(a),n();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ka[l[2].toLowerCase()]:Xx[c],h=o5(m),w=h.value,E=h.isSecondary,C=l[0].startsWith("FontAwesome"),p=vd(u,w),f=p;if(C){var g=Sk(w);g.iconName&&g.prefix&&(p=g.iconName,u=g.prefix)}if(p&&!E&&(!a||a.getAttribute(fd)!==u||a.getAttribute(md)!==f)){e.setAttribute(r,f),a&&e.removeChild(a);var b=Yk(),x=b.extra;x.attributes[Bc]=t,Yc(p,u).then(function(I){var T=wd(O(O({},b),{},{icons:{main:I,mask:yd()},prefix:u,iconName:f,extra:x,watchable:!0})),k=re.createElement("svg");t==="::before"?e.insertBefore(k,e.firstChild):e.appendChild(k),k.outerHTML=T.map(function(A){return Si(A)}).join(`
`),e.removeAttribute(r),n()}).catch(o)}else n()}else n()})}function i5(e){return Promise.all([Hm(e,"::before"),Hm(e,"::after")])}function a5(e){return e.parentNode!==document.head&&!~Kx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Bc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wm(e){if(!!Jt)return new Promise(function(t,r){var n=io(e.querySelectorAll("*")).filter(a5).map(i5),o=xd.begin("searchPseudoElements");K0(),Promise.all(n).then(function(){o(),Qc(),t()}).catch(function(){o(),Qc(),r()})})}var s5={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=Wm,r}}},provides:function(t){t.pseudoElements2svg=function(r){var n=r.node,o=n===void 0?re:n;L.searchPseudoElements&&Wm(o)}}},Gm=!1,l5={mixout:function(){return{dom:{unwatch:function(){K0(),Gm=!0}}}},hooks:function(){return{bootstrap:function(){$m(Wc("mutationObserverCallbacks",{}))},noAuto:function(){Hk()},watch:function(r){var n=r.observeMutationsRoot;Gm?Qc():$m(Wc("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Km=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,o){var i=o.toLowerCase().split("-"),a=i[0],s=i.slice(1).join("-");if(a&&s==="h")return n.flipX=!0,n;if(a&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(a){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},r)},c5={mixout:function(){return{parse:{transform:function(r){return Km(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-transform");return o&&(r.transform=Km(o)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var n=r.main,o=r.transform,i=r.containerWidth,a=r.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),d="rotate(".concat(o.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},u={transform:"translate(".concat(a/2*-1," -256)")},h={outer:s,inner:m,path:u};return{tag:"g",attributes:O({},h.outer),children:[{tag:"g",attributes:O({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:O(O({},n.icon.attributes),h.path)}]}]}}}},Al={x:0,y:0,width:"100%",height:"100%"};function Ym(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function u5(e){return e.tag==="g"?e.children:[e]}var d5={hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-mask"),i=o?Is(o.split(" ").map(function(a){return a.trim()})):yd();return i.prefix||(i.prefix=Ar()),r.mask=i,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var n=r.children,o=r.attributes,i=r.main,a=r.mask,s=r.maskId,l=r.transform,c=i.width,d=i.icon,m=a.width,u=a.icon,h=ck({transform:l,containerWidth:m,iconWidth:c}),w={tag:"rect",attributes:O(O({},Al),{},{fill:"white"})},E=d.children?{children:d.children.map(Ym)}:{},C={tag:"g",attributes:O({},h.inner),children:[Ym(O({tag:d.tag,attributes:O(O({},d.attributes),h.path)},E))]},p={tag:"g",attributes:O({},h.outer),children:[C]},f="mask-".concat(s||li()),g="clip-".concat(s||li()),b={tag:"mask",attributes:O(O({},Al),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:u5(u)},b]};return n.push(x,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},Al)}),{children:n,attributes:o}}}},f5={provides:function(t){var r=!1;Cr.matchMedia&&(r=Cr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],o={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:O(O({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},a),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:O(O({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:O(O({},a),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:O(O({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},m5={hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-symbol"),i=o===null?!1:o===""?!0:o;return r.symbol=i,r}}}},p5=[fk,Zk,e5,t5,r5,s5,l5,c5,d5,f5,m5];Tk(p5,{mixoutsTo:Qe});Qe.noAuto;Qe.config;Qe.library;Qe.dom;var Xc=Qe.parse;Qe.findIconDefinition;Qe.toHtml;var g5=Qe.icon;Qe.layer;Qe.text;Qe.counter;var q0={exports:{}},h5="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b5=h5,v5=b5;function Q0(){}function X0(){}X0.resetWarningCache=Q0;var y5=function(){function e(n,o,i,a,s,l){if(l!==v5){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:X0,resetWarningCache:Q0};return r.PropTypes=r,r};q0.exports=y5();var V=q0.exports;function qm(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function gr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qm(Object(r),!0).forEach(function(n){Ln(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qm(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Qa(e){return Qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qa(e)}function Ln(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w5(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function J0(e,t){if(e==null)return{};var r=w5(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Jc(e){return x5(e)||k5(e)||_5(e)||S5()}function x5(e){if(Array.isArray(e))return Zc(e)}function k5(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _5(e,t){if(!!e){if(typeof e=="string")return Zc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Zc(e,t)}}function Zc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E5(e){var t,r=e.beat,n=e.fade,o=e.beatFade,i=e.bounce,a=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,d=e.spinReverse,m=e.pulse,u=e.fixedWidth,h=e.inverse,w=e.border,E=e.listItem,C=e.flip,p=e.size,f=e.rotation,g=e.pull,b=(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":i,"fa-shake":a,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":d,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":u,"fa-inverse":h,"fa-border":w,"fa-li":E,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Ln(t,"fa-".concat(p),typeof p!="undefined"&&p!==null),Ln(t,"fa-rotate-".concat(f),typeof f!="undefined"&&f!==null&&f!==0),Ln(t,"fa-pull-".concat(g),typeof g!="undefined"&&g!==null),Ln(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map(function(x){return b[x]?x:null}).filter(function(x){return x})}function I5(e){return e=e-0,e===e}function Z0(e){return I5(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var T5=["style"];function C5(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A5(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var n=r.indexOf(":"),o=Z0(r.slice(0,n)),i=r.slice(n+1).trim();return o.startsWith("webkit")?t[C5(o)]=i:t[o]=i,t},{})}function eb(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(l){return eb(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.attrs.className=d,delete t.attributes.class;break;case"style":l.attrs.style=A5(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[Z0(c)]=d}return l},{attrs:{}}),i=r.style,a=i===void 0?{}:i,s=J0(r,T5);return o.attrs.style=gr(gr({},o.attrs.style),a),e.apply(void 0,[t.tag,gr(gr({},o.attrs),s)].concat(Jc(n)))}var tb=!1;try{tb=!0}catch{}function P5(){if(!tb&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qm(e){if(e&&Qa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xc.icon)return Xc.icon(e);if(e===null)return null;if(e&&Qa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Pl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ln({},e,t):{}}var O5=["forwardedRef"];function ao(e){var t=e.forwardedRef,r=J0(e,O5),n=r.icon,o=r.mask,i=r.symbol,a=r.className,s=r.title,l=r.titleId,c=r.maskId,d=Qm(n),m=Pl("classes",[].concat(Jc(E5(r)),Jc(a.split(" ")))),u=Pl("transform",typeof r.transform=="string"?Xc.transform(r.transform):r.transform),h=Pl("mask",Qm(o)),w=g5(d,gr(gr(gr(gr({},m),u),h),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!w)return P5("Could not find icon",d),null;var E=w.abstract,C={ref:t};return Object.keys(r).forEach(function(p){ao.defaultProps.hasOwnProperty(p)||(C[p]=r[p])}),N5(E[0],C)}ao.displayName="FontAwesomeIcon";ao.propTypes={beat:V.bool,border:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf(["horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};ao.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var N5=eb.bind(null,fg.createElement);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var rb={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"]},nb={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z"]},Xm=Array.isArray,Jm=Object.keys,R5=Object.prototype.hasOwnProperty,z5=typeof Element!="undefined";function eu(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Xm(e),n=Xm(t),o,i,a;if(r&&n){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!eu(e[o],t[o]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,d=t instanceof RegExp;if(c!=d)return!1;if(c&&d)return e.toString()==t.toString();var m=Jm(e);if(i=m.length,i!==Jm(t).length)return!1;for(o=i;o--!==0;)if(!R5.call(t,m[o]))return!1;if(z5&&e instanceof Element&&t instanceof Element)return e===t;for(o=i;o--!==0;)if(a=m[o],!(a==="_owner"&&e.$$typeof)&&!eu(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var ar=function(t,r){try{return eu(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}},M5=function(t){return L5(t)&&!D5(t)};function L5(e){return!!e&&typeof e=="object"}function D5(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||$5(e)}var j5=typeof Symbol=="function"&&Symbol.for,F5=j5?Symbol.for("react.element"):60103;function $5(e){return e.$$typeof===F5}function U5(e){return Array.isArray(e)?[]:{}}function Xa(e,t){return t.clone!==!1&&t.isMergeableObject(e)?ci(U5(e),e,t):e}function B5(e,t,r){return e.concat(t).map(function(n){return Xa(n,r)})}function V5(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(o){n[o]=Xa(e[o],r)}),Object.keys(t).forEach(function(o){!r.isMergeableObject(t[o])||!e[o]?n[o]=Xa(t[o],r):n[o]=ci(e[o],t[o],r)}),n}function ci(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||B5,r.isMergeableObject=r.isMergeableObject||M5;var n=Array.isArray(t),o=Array.isArray(e),i=n===o;return i?n?r.arrayMerge(e,t,r):V5(e,t,r):Xa(t,r)}ci.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return ci(n,o,r)},{})};var tu=ci,H5=typeof global=="object"&&global&&global.Object===Object&&global,ob=H5,W5=typeof self=="object"&&self&&self.Object===Object&&self,G5=ob||W5||Function("return this")(),Rt=G5,K5=Rt.Symbol,Pr=K5,ib=Object.prototype,Y5=ib.hasOwnProperty,q5=ib.toString,wo=Pr?Pr.toStringTag:void 0;function Q5(e){var t=Y5.call(e,wo),r=e[wo];try{e[wo]=void 0;var n=!0}catch{}var o=q5.call(e);return n&&(t?e[wo]=r:delete e[wo]),o}var X5=Object.prototype,J5=X5.toString;function Z5(e){return J5.call(e)}var e2="[object Null]",t2="[object Undefined]",Zm=Pr?Pr.toStringTag:void 0;function pn(e){return e==null?e===void 0?t2:e2:Zm&&Zm in Object(e)?Q5(e):Z5(e)}function ab(e,t){return function(r){return e(t(r))}}var r2=ab(Object.getPrototypeOf,Object),_d=r2;function gn(e){return e!=null&&typeof e=="object"}var n2="[object Object]",o2=Function.prototype,i2=Object.prototype,sb=o2.toString,a2=i2.hasOwnProperty,s2=sb.call(Object);function ep(e){if(!gn(e)||pn(e)!=n2)return!1;var t=_d(e);if(t===null)return!0;var r=a2.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&sb.call(r)==s2}function l2(){this.__data__=[],this.size=0}function lb(e,t){return e===t||e!==e&&t!==t}function Cs(e,t){for(var r=e.length;r--;)if(lb(e[r][0],t))return r;return-1}var c2=Array.prototype,u2=c2.splice;function d2(e){var t=this.__data__,r=Cs(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():u2.call(t,r,1),--this.size,!0}function f2(e){var t=this.__data__,r=Cs(t,e);return r<0?void 0:t[r][1]}function m2(e){return Cs(this.__data__,e)>-1}function p2(e,t){var r=this.__data__,n=Cs(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Zt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Zt.prototype.clear=l2;Zt.prototype.delete=d2;Zt.prototype.get=f2;Zt.prototype.has=m2;Zt.prototype.set=p2;function g2(){this.__data__=new Zt,this.size=0}function h2(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function b2(e){return this.__data__.get(e)}function v2(e){return this.__data__.has(e)}function Ei(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var y2="[object AsyncFunction]",w2="[object Function]",x2="[object GeneratorFunction]",k2="[object Proxy]";function cb(e){if(!Ei(e))return!1;var t=pn(e);return t==w2||t==x2||t==y2||t==k2}var _2=Rt["__core-js_shared__"],Ol=_2,tp=function(){var e=/[^.]+$/.exec(Ol&&Ol.keys&&Ol.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function S2(e){return!!tp&&tp in e}var E2=Function.prototype,I2=E2.toString;function hn(e){if(e!=null){try{return I2.call(e)}catch{}try{return e+""}catch{}}return""}var T2=/[\\^$.*+?()[\]{}|]/g,C2=/^\[object .+?Constructor\]$/,A2=Function.prototype,P2=Object.prototype,O2=A2.toString,N2=P2.hasOwnProperty,R2=RegExp("^"+O2.call(N2).replace(T2,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function z2(e){if(!Ei(e)||S2(e))return!1;var t=cb(e)?R2:C2;return t.test(hn(e))}function M2(e,t){return e==null?void 0:e[t]}function bn(e,t){var r=M2(e,t);return z2(r)?r:void 0}var L2=bn(Rt,"Map"),ui=L2,D2=bn(Object,"create"),di=D2;function j2(){this.__data__=di?di(null):{},this.size=0}function F2(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var $2="__lodash_hash_undefined__",U2=Object.prototype,B2=U2.hasOwnProperty;function V2(e){var t=this.__data__;if(di){var r=t[e];return r===$2?void 0:r}return B2.call(t,e)?t[e]:void 0}var H2=Object.prototype,W2=H2.hasOwnProperty;function G2(e){var t=this.__data__;return di?t[e]!==void 0:W2.call(t,e)}var K2="__lodash_hash_undefined__";function Y2(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=di&&t===void 0?K2:t,this}function an(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}an.prototype.clear=j2;an.prototype.delete=F2;an.prototype.get=V2;an.prototype.has=G2;an.prototype.set=Y2;function q2(){this.size=0,this.__data__={hash:new an,map:new(ui||Zt),string:new an}}function Q2(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function As(e,t){var r=e.__data__;return Q2(t)?r[typeof t=="string"?"string":"hash"]:r.map}function X2(e){var t=As(this,e).delete(e);return this.size-=t?1:0,t}function J2(e){return As(this,e).get(e)}function Z2(e){return As(this,e).has(e)}function e3(e,t){var r=As(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function zr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}zr.prototype.clear=q2;zr.prototype.delete=X2;zr.prototype.get=J2;zr.prototype.has=Z2;zr.prototype.set=e3;var t3=200;function r3(e,t){var r=this.__data__;if(r instanceof Zt){var n=r.__data__;if(!ui||n.length<t3-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new zr(n)}return r.set(e,t),this.size=r.size,this}function so(e){var t=this.__data__=new Zt(e);this.size=t.size}so.prototype.clear=g2;so.prototype.delete=h2;so.prototype.get=b2;so.prototype.has=v2;so.prototype.set=r3;function n3(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var o3=function(){try{var e=bn(Object,"defineProperty");return e({},"",{}),e}catch{}}(),rp=o3;function ub(e,t,r){t=="__proto__"&&rp?rp(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var i3=Object.prototype,a3=i3.hasOwnProperty;function db(e,t,r){var n=e[t];(!(a3.call(e,t)&&lb(n,r))||r===void 0&&!(t in e))&&ub(e,t,r)}function Ps(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],l=n?n(r[s],e[s],s,r,e):void 0;l===void 0&&(l=e[s]),o?ub(r,s,l):db(r,s,l)}return r}function s3(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var l3="[object Arguments]";function np(e){return gn(e)&&pn(e)==l3}var fb=Object.prototype,c3=fb.hasOwnProperty,u3=fb.propertyIsEnumerable,d3=np(function(){return arguments}())?np:function(e){return gn(e)&&c3.call(e,"callee")&&!u3.call(e,"callee")},f3=d3,m3=Array.isArray,Ii=m3;function p3(){return!1}var mb=typeof Ve=="object"&&Ve&&!Ve.nodeType&&Ve,op=mb&&typeof He=="object"&&He&&!He.nodeType&&He,g3=op&&op.exports===mb,ip=g3?Rt.Buffer:void 0,h3=ip?ip.isBuffer:void 0,b3=h3||p3,pb=b3,v3=9007199254740991,y3=/^(?:0|[1-9]\d*)$/;function w3(e,t){var r=typeof e;return t=t==null?v3:t,!!t&&(r=="number"||r!="symbol"&&y3.test(e))&&e>-1&&e%1==0&&e<t}var x3=9007199254740991;function gb(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=x3}var k3="[object Arguments]",_3="[object Array]",S3="[object Boolean]",E3="[object Date]",I3="[object Error]",T3="[object Function]",C3="[object Map]",A3="[object Number]",P3="[object Object]",O3="[object RegExp]",N3="[object Set]",R3="[object String]",z3="[object WeakMap]",M3="[object ArrayBuffer]",L3="[object DataView]",D3="[object Float32Array]",j3="[object Float64Array]",F3="[object Int8Array]",$3="[object Int16Array]",U3="[object Int32Array]",B3="[object Uint8Array]",V3="[object Uint8ClampedArray]",H3="[object Uint16Array]",W3="[object Uint32Array]",ee={};ee[D3]=ee[j3]=ee[F3]=ee[$3]=ee[U3]=ee[B3]=ee[V3]=ee[H3]=ee[W3]=!0;ee[k3]=ee[_3]=ee[M3]=ee[S3]=ee[L3]=ee[E3]=ee[I3]=ee[T3]=ee[C3]=ee[A3]=ee[P3]=ee[O3]=ee[N3]=ee[R3]=ee[z3]=!1;function G3(e){return gn(e)&&gb(e.length)&&!!ee[pn(e)]}function Sd(e){return function(t){return e(t)}}var hb=typeof Ve=="object"&&Ve&&!Ve.nodeType&&Ve,Uo=hb&&typeof He=="object"&&He&&!He.nodeType&&He,K3=Uo&&Uo.exports===hb,Nl=K3&&ob.process,Y3=function(){try{var e=Uo&&Uo.require&&Uo.require("util").types;return e||Nl&&Nl.binding&&Nl.binding("util")}catch{}}(),Zn=Y3,ap=Zn&&Zn.isTypedArray,q3=ap?Sd(ap):G3,Q3=q3,X3=Object.prototype,J3=X3.hasOwnProperty;function bb(e,t){var r=Ii(e),n=!r&&f3(e),o=!r&&!n&&pb(e),i=!r&&!n&&!o&&Q3(e),a=r||n||o||i,s=a?s3(e.length,String):[],l=s.length;for(var c in e)(t||J3.call(e,c))&&!(a&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||w3(c,l)))&&s.push(c);return s}var Z3=Object.prototype;function Ed(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Z3;return e===r}var e_=ab(Object.keys,Object),t_=e_,r_=Object.prototype,n_=r_.hasOwnProperty;function o_(e){if(!Ed(e))return t_(e);var t=[];for(var r in Object(e))n_.call(e,r)&&r!="constructor"&&t.push(r);return t}function vb(e){return e!=null&&gb(e.length)&&!cb(e)}function Id(e){return vb(e)?bb(e):o_(e)}function i_(e,t){return e&&Ps(t,Id(t),e)}function a_(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var s_=Object.prototype,l_=s_.hasOwnProperty;function c_(e){if(!Ei(e))return a_(e);var t=Ed(e),r=[];for(var n in e)n=="constructor"&&(t||!l_.call(e,n))||r.push(n);return r}function Td(e){return vb(e)?bb(e,!0):c_(e)}function u_(e,t){return e&&Ps(t,Td(t),e)}var yb=typeof Ve=="object"&&Ve&&!Ve.nodeType&&Ve,sp=yb&&typeof He=="object"&&He&&!He.nodeType&&He,d_=sp&&sp.exports===yb,lp=d_?Rt.Buffer:void 0,cp=lp?lp.allocUnsafe:void 0;function f_(e,t){if(t)return e.slice();var r=e.length,n=cp?cp(r):new e.constructor(r);return e.copy(n),n}function wb(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function m_(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}function xb(){return[]}var p_=Object.prototype,g_=p_.propertyIsEnumerable,up=Object.getOwnPropertySymbols,h_=up?function(e){return e==null?[]:(e=Object(e),m_(up(e),function(t){return g_.call(e,t)}))}:xb,Cd=h_;function b_(e,t){return Ps(e,Cd(e),t)}function kb(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var v_=Object.getOwnPropertySymbols,y_=v_?function(e){for(var t=[];e;)kb(t,Cd(e)),e=_d(e);return t}:xb,_b=y_;function w_(e,t){return Ps(e,_b(e),t)}function Sb(e,t,r){var n=t(e);return Ii(e)?n:kb(n,r(e))}function x_(e){return Sb(e,Id,Cd)}function k_(e){return Sb(e,Td,_b)}var __=bn(Rt,"DataView"),ru=__,S_=bn(Rt,"Promise"),nu=S_,E_=bn(Rt,"Set"),ou=E_,I_=bn(Rt,"WeakMap"),iu=I_,dp="[object Map]",T_="[object Object]",fp="[object Promise]",mp="[object Set]",pp="[object WeakMap]",gp="[object DataView]",C_=hn(ru),A_=hn(ui),P_=hn(nu),O_=hn(ou),N_=hn(iu),Br=pn;(ru&&Br(new ru(new ArrayBuffer(1)))!=gp||ui&&Br(new ui)!=dp||nu&&Br(nu.resolve())!=fp||ou&&Br(new ou)!=mp||iu&&Br(new iu)!=pp)&&(Br=function(e){var t=pn(e),r=t==T_?e.constructor:void 0,n=r?hn(r):"";if(n)switch(n){case C_:return gp;case A_:return dp;case P_:return fp;case O_:return mp;case N_:return pp}return t});var Ad=Br,R_=Object.prototype,z_=R_.hasOwnProperty;function M_(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&z_.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var L_=Rt.Uint8Array,hp=L_;function Pd(e){var t=new e.constructor(e.byteLength);return new hp(t).set(new hp(e)),t}function D_(e,t){var r=t?Pd(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var j_=/\w*$/;function F_(e){var t=new e.constructor(e.source,j_.exec(e));return t.lastIndex=e.lastIndex,t}var bp=Pr?Pr.prototype:void 0,vp=bp?bp.valueOf:void 0;function $_(e){return vp?Object(vp.call(e)):{}}function U_(e,t){var r=t?Pd(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var B_="[object Boolean]",V_="[object Date]",H_="[object Map]",W_="[object Number]",G_="[object RegExp]",K_="[object Set]",Y_="[object String]",q_="[object Symbol]",Q_="[object ArrayBuffer]",X_="[object DataView]",J_="[object Float32Array]",Z_="[object Float64Array]",eS="[object Int8Array]",tS="[object Int16Array]",rS="[object Int32Array]",nS="[object Uint8Array]",oS="[object Uint8ClampedArray]",iS="[object Uint16Array]",aS="[object Uint32Array]";function sS(e,t,r){var n=e.constructor;switch(t){case Q_:return Pd(e);case B_:case V_:return new n(+e);case X_:return D_(e,r);case J_:case Z_:case eS:case tS:case rS:case nS:case oS:case iS:case aS:return U_(e,r);case H_:return new n;case W_:case Y_:return new n(e);case G_:return F_(e);case K_:return new n;case q_:return $_(e)}}var yp=Object.create,lS=function(){function e(){}return function(t){if(!Ei(t))return{};if(yp)return yp(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),cS=lS;function uS(e){return typeof e.constructor=="function"&&!Ed(e)?cS(_d(e)):{}}var dS="[object Map]";function fS(e){return gn(e)&&Ad(e)==dS}var wp=Zn&&Zn.isMap,mS=wp?Sd(wp):fS,pS=mS,gS="[object Set]";function hS(e){return gn(e)&&Ad(e)==gS}var xp=Zn&&Zn.isSet,bS=xp?Sd(xp):hS,vS=bS,yS=1,wS=2,xS=4,Eb="[object Arguments]",kS="[object Array]",_S="[object Boolean]",SS="[object Date]",ES="[object Error]",Ib="[object Function]",IS="[object GeneratorFunction]",TS="[object Map]",CS="[object Number]",Tb="[object Object]",AS="[object RegExp]",PS="[object Set]",OS="[object String]",NS="[object Symbol]",RS="[object WeakMap]",zS="[object ArrayBuffer]",MS="[object DataView]",LS="[object Float32Array]",DS="[object Float64Array]",jS="[object Int8Array]",FS="[object Int16Array]",$S="[object Int32Array]",US="[object Uint8Array]",BS="[object Uint8ClampedArray]",VS="[object Uint16Array]",HS="[object Uint32Array]",Q={};Q[Eb]=Q[kS]=Q[zS]=Q[MS]=Q[_S]=Q[SS]=Q[LS]=Q[DS]=Q[jS]=Q[FS]=Q[$S]=Q[TS]=Q[CS]=Q[Tb]=Q[AS]=Q[PS]=Q[OS]=Q[NS]=Q[US]=Q[BS]=Q[VS]=Q[HS]=!0;Q[ES]=Q[Ib]=Q[RS]=!1;function Bo(e,t,r,n,o,i){var a,s=t&yS,l=t&wS,c=t&xS;if(r&&(a=o?r(e,n,o,i):r(e)),a!==void 0)return a;if(!Ei(e))return e;var d=Ii(e);if(d){if(a=M_(e),!s)return wb(e,a)}else{var m=Ad(e),u=m==Ib||m==IS;if(pb(e))return f_(e,s);if(m==Tb||m==Eb||u&&!o){if(a=l||u?{}:uS(e),!s)return l?w_(e,u_(a,e)):b_(e,i_(a,e))}else{if(!Q[m])return o?e:{};a=sS(e,m,s)}}i||(i=new so);var h=i.get(e);if(h)return h;i.set(e,a),vS(e)?e.forEach(function(C){a.add(Bo(C,t,r,C,e,i))}):pS(e)&&e.forEach(function(C,p){a.set(p,Bo(C,t,r,p,e,i))});var w=c?l?k_:x_:l?Td:Id,E=d?void 0:w(e);return n3(E||e,function(C,p){E&&(p=C,C=e[p]),db(a,p,Bo(C,t,r,p,e,i))}),a}var WS=4;function kp(e){return Bo(e,WS)}function Cb(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var GS="[object Symbol]";function Od(e){return typeof e=="symbol"||gn(e)&&pn(e)==GS}var KS="Expected a function";function Nd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(KS);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Nd.Cache||zr),r}Nd.Cache=zr;var YS=500;function qS(e){var t=Nd(e,function(n){return r.size===YS&&r.clear(),n}),r=t.cache;return t}var QS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,XS=/\\(\\)?/g,JS=qS(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(QS,function(r,n,o,i){t.push(o?i.replace(XS,"$1"):n||r)}),t}),ZS=JS,e6=1/0;function t6(e){if(typeof e=="string"||Od(e))return e;var t=e+"";return t=="0"&&1/e==-e6?"-0":t}var r6=1/0,_p=Pr?Pr.prototype:void 0,Sp=_p?_p.toString:void 0;function Ab(e){if(typeof e=="string")return e;if(Ii(e))return Cb(e,Ab)+"";if(Od(e))return Sp?Sp.call(e):"";var t=e+"";return t=="0"&&1/e==-r6?"-0":t}function n6(e){return e==null?"":Ab(e)}function Pb(e){return Ii(e)?Cb(e,t6):Od(e)?[e]:wb(ZS(n6(e)))}var o6=!0;function i6(e,t){if(!o6){if(e)return;var r="Warning: "+t;typeof console!="undefined"&&console.warn(r);try{throw Error(r)}catch{}}}var Ob={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,Rd=we?Symbol.for("react.element"):60103,zd=we?Symbol.for("react.portal"):60106,Os=we?Symbol.for("react.fragment"):60107,Ns=we?Symbol.for("react.strict_mode"):60108,Rs=we?Symbol.for("react.profiler"):60114,zs=we?Symbol.for("react.provider"):60109,Ms=we?Symbol.for("react.context"):60110,Md=we?Symbol.for("react.async_mode"):60111,Ls=we?Symbol.for("react.concurrent_mode"):60111,Ds=we?Symbol.for("react.forward_ref"):60112,js=we?Symbol.for("react.suspense"):60113,a6=we?Symbol.for("react.suspense_list"):60120,Fs=we?Symbol.for("react.memo"):60115,$s=we?Symbol.for("react.lazy"):60116,s6=we?Symbol.for("react.block"):60121,l6=we?Symbol.for("react.fundamental"):60117,c6=we?Symbol.for("react.responder"):60118,u6=we?Symbol.for("react.scope"):60119;function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Rd:switch(e=e.type,e){case Md:case Ls:case Os:case Rs:case Ns:case js:return e;default:switch(e=e&&e.$$typeof,e){case Ms:case Ds:case $s:case Fs:case zs:return e;default:return t}}case zd:return t}}}function Nb(e){return Xe(e)===Ls}q.AsyncMode=Md;q.ConcurrentMode=Ls;q.ContextConsumer=Ms;q.ContextProvider=zs;q.Element=Rd;q.ForwardRef=Ds;q.Fragment=Os;q.Lazy=$s;q.Memo=Fs;q.Portal=zd;q.Profiler=Rs;q.StrictMode=Ns;q.Suspense=js;q.isAsyncMode=function(e){return Nb(e)||Xe(e)===Md};q.isConcurrentMode=Nb;q.isContextConsumer=function(e){return Xe(e)===Ms};q.isContextProvider=function(e){return Xe(e)===zs};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rd};q.isForwardRef=function(e){return Xe(e)===Ds};q.isFragment=function(e){return Xe(e)===Os};q.isLazy=function(e){return Xe(e)===$s};q.isMemo=function(e){return Xe(e)===Fs};q.isPortal=function(e){return Xe(e)===zd};q.isProfiler=function(e){return Xe(e)===Rs};q.isStrictMode=function(e){return Xe(e)===Ns};q.isSuspense=function(e){return Xe(e)===js};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Os||e===Ls||e===Rs||e===Ns||e===js||e===a6||typeof e=="object"&&e!==null&&(e.$$typeof===$s||e.$$typeof===Fs||e.$$typeof===zs||e.$$typeof===Ms||e.$$typeof===Ds||e.$$typeof===l6||e.$$typeof===c6||e.$$typeof===u6||e.$$typeof===s6)};q.typeOf=Xe;Ob.exports=q;var Rb=Ob.exports,d6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f6={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zb={};zb[Rb.ForwardRef]=d6;zb[Rb.Memo]=f6;var m6=1,p6=4;function g6(e){return Bo(e,m6|p6)}function fe(){return fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},fe.apply(this,arguments)}function h6(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Ld(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Ep(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Ip=function(t){return Array.isArray(t)&&t.length===0},Ue=function(t){return typeof t=="function"},Us=function(t){return t!==null&&typeof t=="object"},b6=function(t){return String(Math.floor(Number(t)))===t},Rl=function(t){return Object.prototype.toString.call(t)==="[object String]"},Mb=function(t){return _.exports.Children.count(t)===0},zl=function(t){return Us(t)&&Ue(t.then)};function ke(e,t,r,n){n===void 0&&(n=0);for(var o=Pb(t);e&&n<o.length;)e=e[o[n++]];return e===void 0?r:e}function Tt(e,t,r){for(var n=kp(e),o=n,i=0,a=Pb(t);i<a.length-1;i++){var s=a[i],l=ke(e,a.slice(0,i+1));if(l&&(Us(l)||Array.isArray(l)))o=o[s]=kp(l);else{var c=a[i+1];o=o[s]=b6(c)&&Number(c)>=0?[]:{}}}return(i===0?e:o)[a[i]]===r?e:(r===void 0?delete o[a[i]]:o[a[i]]=r,i===0&&r===void 0&&delete n[a[i]],n)}function Lb(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var o=0,i=Object.keys(e);o<i.length;o++){var a=i[o],s=e[a];Us(s)?r.get(s)||(r.set(s,!0),n[a]=Array.isArray(s)?[]:{},Lb(s,t,r,n[a])):n[a]=t}return n}var Bs=_.exports.createContext(void 0);Bs.displayName="FormikContext";var v6=Bs.Provider;Bs.Consumer;function y6(){var e=_.exports.useContext(Bs);return e||i6(!1),e}function w6(e,t){switch(t.type){case"SET_VALUES":return fe({},e,{values:t.payload});case"SET_TOUCHED":return fe({},e,{touched:t.payload});case"SET_ERRORS":return ar(e.errors,t.payload)?e:fe({},e,{errors:t.payload});case"SET_STATUS":return fe({},e,{status:t.payload});case"SET_ISSUBMITTING":return fe({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return fe({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return fe({},e,{values:Tt(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return fe({},e,{touched:Tt(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return fe({},e,{errors:Tt(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return fe({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return fe({},e,{touched:Lb(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return fe({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return fe({},e,{isSubmitting:!1});default:return e}}var Fr={},ea={};function x6(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,o=n===void 0?!0:n,i=e.validateOnMount,a=i===void 0?!1:i,s=e.isInitialValid,l=e.enableReinitialize,c=l===void 0?!1:l,d=e.onSubmit,m=Ld(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),u=fe({validateOnChange:r,validateOnBlur:o,validateOnMount:a,onSubmit:d},m),h=_.exports.useRef(u.initialValues),w=_.exports.useRef(u.initialErrors||Fr),E=_.exports.useRef(u.initialTouched||ea),C=_.exports.useRef(u.initialStatus),p=_.exports.useRef(!1),f=_.exports.useRef({});_.exports.useEffect(function(){return p.current=!0,function(){p.current=!1}},[]);var g=_.exports.useReducer(w6,{values:u.initialValues,errors:u.initialErrors||Fr,touched:u.initialTouched||ea,status:u.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),b=g[0],x=g[1],I=_.exports.useCallback(function(v,R){return new Promise(function(M,D){var U=u.validate(v,R);U==null?M(Fr):zl(U)?U.then(function(K){M(K||Fr)},function(K){D(K)}):M(U)})},[u.validate]),T=_.exports.useCallback(function(v,R){var M=u.validationSchema,D=Ue(M)?M(R):M,U=R&&D.validateAt?D.validateAt(R,v):_6(v,D);return new Promise(function(K,ve){U.then(function(){K(Fr)},function(zt){zt.name==="ValidationError"?K(k6(zt)):ve(zt)})})},[u.validationSchema]),k=_.exports.useCallback(function(v,R){return new Promise(function(M){return M(f.current[v].validate(R))})},[]),A=_.exports.useCallback(function(v){var R=Object.keys(f.current).filter(function(D){return Ue(f.current[D].validate)}),M=R.length>0?R.map(function(D){return k(D,ke(v,D))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(M).then(function(D){return D.reduce(function(U,K,ve){return K==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||K&&(U=Tt(U,R[ve],K)),U},{})})},[k]),z=_.exports.useCallback(function(v){return Promise.all([A(v),u.validationSchema?T(v):{},u.validate?I(v):{}]).then(function(R){var M=R[0],D=R[1],U=R[2],K=tu.all([M,D,U],{arrayMerge:S6});return K})},[u.validate,u.validationSchema,A,I,T]),B=Ze(function(v){return v===void 0&&(v=b.values),x({type:"SET_ISVALIDATING",payload:!0}),z(v).then(function(R){return p.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:R})),R})});_.exports.useEffect(function(){a&&p.current===!0&&ar(h.current,u.initialValues)&&B(h.current)},[a,B]);var ue=_.exports.useCallback(function(v){var R=v&&v.values?v.values:h.current,M=v&&v.errors?v.errors:w.current?w.current:u.initialErrors||{},D=v&&v.touched?v.touched:E.current?E.current:u.initialTouched||{},U=v&&v.status?v.status:C.current?C.current:u.initialStatus;h.current=R,w.current=M,E.current=D,C.current=U;var K=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!v&&!!v.isSubmitting,errors:M,touched:D,status:U,values:R,isValidating:!!v&&!!v.isValidating,submitCount:!!v&&!!v.submitCount&&typeof v.submitCount=="number"?v.submitCount:0}})};if(u.onReset){var ve=u.onReset(b.values,ef);zl(ve)?ve.then(K):K()}else K()},[u.initialErrors,u.initialStatus,u.initialTouched]);_.exports.useEffect(function(){p.current===!0&&!ar(h.current,u.initialValues)&&(c&&(h.current=u.initialValues,ue()),a&&B(h.current))},[c,u.initialValues,ue,a,B]),_.exports.useEffect(function(){c&&p.current===!0&&!ar(w.current,u.initialErrors)&&(w.current=u.initialErrors||Fr,x({type:"SET_ERRORS",payload:u.initialErrors||Fr}))},[c,u.initialErrors]),_.exports.useEffect(function(){c&&p.current===!0&&!ar(E.current,u.initialTouched)&&(E.current=u.initialTouched||ea,x({type:"SET_TOUCHED",payload:u.initialTouched||ea}))},[c,u.initialTouched]),_.exports.useEffect(function(){c&&p.current===!0&&!ar(C.current,u.initialStatus)&&(C.current=u.initialStatus,x({type:"SET_STATUS",payload:u.initialStatus}))},[c,u.initialStatus,u.initialTouched]);var be=Ze(function(v){if(f.current[v]&&Ue(f.current[v].validate)){var R=ke(b.values,v),M=f.current[v].validate(R);return zl(M)?(x({type:"SET_ISVALIDATING",payload:!0}),M.then(function(D){return D}).then(function(D){x({type:"SET_FIELD_ERROR",payload:{field:v,value:D}}),x({type:"SET_ISVALIDATING",payload:!1})})):(x({type:"SET_FIELD_ERROR",payload:{field:v,value:M}}),Promise.resolve(M))}else if(u.validationSchema)return x({type:"SET_ISVALIDATING",payload:!0}),T(b.values,v).then(function(D){return D}).then(function(D){x({type:"SET_FIELD_ERROR",payload:{field:v,value:D[v]}}),x({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),vt=_.exports.useCallback(function(v,R){var M=R.validate;f.current[v]={validate:M}},[]),Je=_.exports.useCallback(function(v){delete f.current[v]},[]),Lr=Ze(function(v,R){x({type:"SET_TOUCHED",payload:v});var M=R===void 0?o:R;return M?B(b.values):Promise.resolve()}),wn=_.exports.useCallback(function(v){x({type:"SET_ERRORS",payload:v})},[]),P=Ze(function(v,R){var M=Ue(v)?v(b.values):v;x({type:"SET_VALUES",payload:M});var D=R===void 0?r:R;return D?B(M):Promise.resolve()}),j=_.exports.useCallback(function(v,R){x({type:"SET_FIELD_ERROR",payload:{field:v,value:R}})},[]),F=Ze(function(v,R,M){x({type:"SET_FIELD_VALUE",payload:{field:v,value:R}});var D=M===void 0?r:M;return D?B(Tt(b.values,v,R)):Promise.resolve()}),ne=_.exports.useCallback(function(v,R){var M=R,D=v,U;if(!Rl(v)){v.persist&&v.persist();var K=v.target?v.target:v.currentTarget,ve=K.type,zt=K.name,Js=K.id,Zs=K.value,n1=K.checked,IC=K.outerHTML,tf=K.options,o1=K.multiple;M=R||zt||Js,D=/number|range/.test(ve)?(U=parseFloat(Zs),isNaN(U)?"":U):/checkbox/.test(ve)?I6(ke(b.values,M),n1,Zs):tf&&o1?E6(tf):Zs}M&&F(M,D)},[F,b.values]),le=Ze(function(v){if(Rl(v))return function(R){return ne(R,v)};ne(v)}),lt=Ze(function(v,R,M){R===void 0&&(R=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:v,value:R}});var D=M===void 0?o:M;return D?B(b.values):Promise.resolve()}),yt=_.exports.useCallback(function(v,R){v.persist&&v.persist();var M=v.target,D=M.name,U=M.id,K=M.outerHTML,ve=R||D||U;lt(ve,!0)},[lt]),Dr=Ze(function(v){if(Rl(v))return function(R){return yt(R,v)};yt(v)}),wt=_.exports.useCallback(function(v){Ue(v)?x({type:"SET_FORMIK_STATE",payload:v}):x({type:"SET_FORMIK_STATE",payload:function(){return v}})},[]),jr=_.exports.useCallback(function(v){x({type:"SET_STATUS",payload:v})},[]),Zd=_.exports.useCallback(function(v){x({type:"SET_ISSUBMITTING",payload:v})},[]),Qs=Ze(function(){return x({type:"SUBMIT_ATTEMPT"}),B().then(function(v){var R=v instanceof Error,M=!R&&Object.keys(v).length===0;if(M){var D;try{if(D=Qv(),D===void 0)return}catch(U){throw U}return Promise.resolve(D).then(function(U){return p.current&&x({type:"SUBMIT_SUCCESS"}),U}).catch(function(U){if(p.current)throw x({type:"SUBMIT_FAILURE"}),U})}else if(p.current&&(x({type:"SUBMIT_FAILURE"}),R))throw v})}),qv=Ze(function(v){v&&v.preventDefault&&Ue(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&Ue(v.stopPropagation)&&v.stopPropagation(),Qs().catch(function(R){console.warn("Warning: An unhandled error was caught from submitForm()",R)})}),ef={resetForm:ue,validateForm:B,validateField:be,setErrors:wn,setFieldError:j,setFieldTouched:lt,setFieldValue:F,setStatus:jr,setSubmitting:Zd,setTouched:Lr,setValues:P,setFormikState:wt,submitForm:Qs},Qv=Ze(function(){return d(b.values,ef)}),Xv=Ze(function(v){v&&v.preventDefault&&Ue(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&Ue(v.stopPropagation)&&v.stopPropagation(),ue()}),Jv=_.exports.useCallback(function(v){return{value:ke(b.values,v),error:ke(b.errors,v),touched:!!ke(b.touched,v),initialValue:ke(h.current,v),initialTouched:!!ke(E.current,v),initialError:ke(w.current,v)}},[b.errors,b.touched,b.values]),Zv=_.exports.useCallback(function(v){return{setValue:function(M,D){return F(v,M,D)},setTouched:function(M,D){return lt(v,M,D)},setError:function(M){return j(v,M)}}},[F,lt,j]),e1=_.exports.useCallback(function(v){var R=Us(v),M=R?v.name:v,D=ke(b.values,M),U={name:M,value:D,onChange:le,onBlur:Dr};if(R){var K=v.type,ve=v.value,zt=v.as,Js=v.multiple;K==="checkbox"?ve===void 0?U.checked=!!D:(U.checked=!!(Array.isArray(D)&&~D.indexOf(ve)),U.value=ve):K==="radio"?(U.checked=D===ve,U.value=ve):zt==="select"&&Js&&(U.value=U.value||[],U.multiple=!0)}return U},[Dr,le,b.values]),Xs=_.exports.useMemo(function(){return!ar(h.current,b.values)},[h.current,b.values]),t1=_.exports.useMemo(function(){return typeof s!="undefined"?Xs?b.errors&&Object.keys(b.errors).length===0:s!==!1&&Ue(s)?s(u):s:b.errors&&Object.keys(b.errors).length===0},[s,Xs,b.errors,u]),r1=fe({},b,{initialValues:h.current,initialErrors:w.current,initialTouched:E.current,initialStatus:C.current,handleBlur:Dr,handleChange:le,handleReset:Xv,handleSubmit:qv,resetForm:ue,setErrors:wn,setFormikState:wt,setFieldTouched:lt,setFieldValue:F,setFieldError:j,setStatus:jr,setSubmitting:Zd,setTouched:Lr,setValues:P,submitForm:Qs,validateForm:B,validateField:be,isValid:t1,dirty:Xs,unregisterField:Je,registerField:vt,getFieldProps:e1,getFieldMeta:Jv,getFieldHelpers:Zv,validateOnBlur:o,validateOnChange:r,validateOnMount:a});return r1}function Db(e){var t=x6(e),r=e.component,n=e.children,o=e.render,i=e.innerRef;return _.exports.useImperativeHandle(i,function(){return t}),_.exports.createElement(v6,{value:t},r?_.exports.createElement(r,t):o?o(t):n?Ue(n)?n(t):Mb(n)?null:_.exports.Children.only(n):null)}function k6(e){var t={};if(e.inner){if(e.inner.length===0)return Tt(t,e.path,e.message);for(var o=e.inner,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var i;if(r){if(n>=o.length)break;i=o[n++]}else{if(n=o.next(),n.done)break;i=n.value}var a=i;ke(t,a.path)||(t=Tt(t,a.path,a.message))}}return t}function _6(e,t,r,n){r===void 0&&(r=!1),n===void 0&&(n={});var o=au(e);return t[r?"validateSync":"validate"](o,{abortEarly:!1,context:n})}function au(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(o){return Array.isArray(o)===!0||ep(o)?au(o):o!==""?o:void 0}):ep(e[n])?t[n]=au(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function S6(e,t,r){var n=e.slice();return t.forEach(function(i,a){if(typeof n[a]=="undefined"){var s=r.clone!==!1,l=s&&r.isMergeableObject(i);n[a]=l?tu(Array.isArray(i)?[]:{},i,r):i}else r.isMergeableObject(i)?n[a]=tu(e[a],i,r):e.indexOf(i)===-1&&n.push(i)}),n}function E6(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function I6(e,t,r){if(typeof e=="boolean")return Boolean(t);var n=[],o=!1,i=-1;if(Array.isArray(e))n=e,i=e.indexOf(r),o=i>=0;else if(!r||r=="true"||r=="false")return Boolean(t);return t&&r&&!o?n.concat(r):o?n.slice(0,i).concat(n.slice(i+1)):n}var T6=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?_.exports.useLayoutEffect:_.exports.useEffect;function Ze(e){var t=_.exports.useRef(e);return T6(function(){t.current=e}),_.exports.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current.apply(void 0,n)},[])}var C6=_.exports.forwardRef(function(e,t){var r=e.action,n=Ld(e,["action"]),o=r!=null?r:"#",i=y6(),a=i.handleReset,s=i.handleSubmit;return _.exports.createElement("form",Object.assign({onSubmit:s,ref:t,onReset:a,action:o},n))});C6.displayName="Form";var A6=function(t,r,n){var o=eo(t),i=o[r];return o.splice(r,1),o.splice(n,0,i),o},P6=function(t,r,n){var o=eo(t),i=o[r];return o[r]=o[n],o[n]=i,o},Ml=function(t,r,n){var o=eo(t);return o.splice(r,0,n),o},O6=function(t,r,n){var o=eo(t);return o[r]=n,o},eo=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,o){return o>n?o:n},0);return Array.from(fe({},t,{length:r+1}))}else return[]},N6=function(e){h6(t,e);function t(n){var o;return o=e.call(this,n)||this,o.updateArrayField=function(i,a,s){var l=o.props,c=l.name,d=l.formik.setFormikState;d(function(m){var u=typeof s=="function"?s:i,h=typeof a=="function"?a:i,w=Tt(m.values,c,i(ke(m.values,c))),E=s?u(ke(m.errors,c)):void 0,C=a?h(ke(m.touched,c)):void 0;return Ip(E)&&(E=void 0),Ip(C)&&(C=void 0),fe({},m,{values:w,errors:s?Tt(m.errors,c,E):m.errors,touched:a?Tt(m.touched,c,C):m.touched})})},o.push=function(i){return o.updateArrayField(function(a){return[].concat(eo(a),[g6(i)])},!1,!1)},o.handlePush=function(i){return function(){return o.push(i)}},o.swap=function(i,a){return o.updateArrayField(function(s){return P6(s,i,a)},!0,!0)},o.handleSwap=function(i,a){return function(){return o.swap(i,a)}},o.move=function(i,a){return o.updateArrayField(function(s){return A6(s,i,a)},!0,!0)},o.handleMove=function(i,a){return function(){return o.move(i,a)}},o.insert=function(i,a){return o.updateArrayField(function(s){return Ml(s,i,a)},function(s){return Ml(s,i,null)},function(s){return Ml(s,i,null)})},o.handleInsert=function(i,a){return function(){return o.insert(i,a)}},o.replace=function(i,a){return o.updateArrayField(function(s){return O6(s,i,a)},!1,!1)},o.handleReplace=function(i,a){return function(){return o.replace(i,a)}},o.unshift=function(i){var a=-1;return o.updateArrayField(function(s){var l=s?[i].concat(s):[i];return a<0&&(a=l.length),l},function(s){var l=s?[null].concat(s):[null];return a<0&&(a=l.length),l},function(s){var l=s?[null].concat(s):[null];return a<0&&(a=l.length),l}),a},o.handleUnshift=function(i){return function(){return o.unshift(i)}},o.handleRemove=function(i){return function(){return o.remove(i)}},o.handlePop=function(){return function(){return o.pop()}},o.remove=o.remove.bind(Ep(o)),o.pop=o.pop.bind(Ep(o)),o}var r=t.prototype;return r.componentDidUpdate=function(o){this.props.validateOnChange&&this.props.formik.validateOnChange&&!ar(ke(o.formik.values,o.name),ke(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(o){var i;return this.updateArrayField(function(a){var s=a?eo(a):[];return i||(i=s[o]),Ue(s.splice)&&s.splice(o,1),s},!0,!0),i},r.pop=function(){var o;return this.updateArrayField(function(i){var a=i;return o||(o=a&&a.pop&&a.pop()),a},!0,!0),o},r.render=function(){var o={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,a=i.component,s=i.render,l=i.children,c=i.name,d=i.formik,m=Ld(d,["validate","validationSchema"]),u=fe({},o,{form:m,name:c});return a?_.exports.createElement(a,u):s?s(u):l?typeof l=="function"?l(u):Mb(l)?null:_.exports.Children.only(l):null},t}(_.exports.Component);N6.defaultProps={validateOnChange:!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},R6=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[r++];t[n++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=e[r++],a=e[r++],s=e[r++],l=((o&7)<<18|(i&63)<<12|(a&63)<<6|s&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const i=e[r++],a=e[r++];t[n++]=String.fromCharCode((o&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Fb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<e.length;o+=3){const i=e[o],a=o+1<e.length,s=a?e[o+1]:0,l=o+2<e.length,c=l?e[o+2]:0,d=i>>2,m=(i&3)<<4|s>>4;let u=(s&15)<<2|c>>6,h=c&63;l||(h=64,a||(u=64)),n.push(r[d],r[m],r[u],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jb(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):R6(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<e.length;){const i=r[e.charAt(o++)],s=o<e.length?r[e.charAt(o)]:0;++o;const c=o<e.length?r[e.charAt(o)]:64;++o;const m=o<e.length?r[e.charAt(o)]:64;if(++o,i==null||s==null||c==null||m==null)throw Error();const u=i<<2|s>>4;if(n.push(u),c!==64){const h=s<<4&240|c>>2;if(n.push(h),m!==64){const w=c<<6&192|m;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},z6=function(e){const t=jb(e);return Fb.encodeByteArray(t,!0)},$b=function(e){return z6(e).replace(/\./g,"")},M6=function(e){try{return Fb.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D6(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Ub(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function j6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F6(){const e=Pe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bb(){return typeof indexedDB=="object"}function Vb(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var i;t(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(r){t(r)}})}function $6(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U6="FirebaseError";class Mr extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=U6,Object.setPrototypeOf(this,Mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},o=`${this.service}/${t}`,i=this.errors[t],a=i?B6(i,n):"Error",s=`${this.serviceName}: ${a} (${o}).`;return new Mr(o,s,n)}}function B6(e,t){return e.replace(V6,(r,n)=>{const o=t[n];return o!=null?String(o):`<${n}?>`})}const V6=/\{\$([^}]+)}/g;function H6(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function fi(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const o of r){if(!n.includes(o))return!1;const i=e[o],a=t[o];if(Tp(i)&&Tp(a)){if(!fi(i,a))return!1}else if(i!==a)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function Tp(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(o=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function To(e){const t={};return e.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[o,i]=n.split("=");t[decodeURIComponent(o)]=decodeURIComponent(i)}}),t}function Co(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function W6(e,t){const r=new G6(e,t);return r.subscribe.bind(r)}class G6{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let o;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");K6(t,["next","error","complete"])?o=t:o={next:t,error:r,complete:n},o.next===void 0&&(o.next=Ll),o.error===void 0&&(o.error=Ll),o.complete===void 0&&(o.complete=Ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K6(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Ll(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y6=1e3,q6=2,Q6=4*60*60*1e3,X6=.5;function Cp(e,t=Y6,r=q6){const n=t*Math.pow(r,e),o=Math.round(X6*n*(Math.random()-.5)*2);return Math.min(Q6,n+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e){return e&&e._delegate?e._delegate:e}class Nt{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J6{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new L6;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&n.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(eE(t))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const i=this.getOrInitializeService({instanceIdentifier:o});n.resolve(i)}catch{}}}}clearInstance(t=Vr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vr){return this.instances.has(t)}getOptions(t=Vr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[i,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);n===s&&a.resolve(o)}return o}onInit(t,r){var n;const o=this.normalizeInstanceIdentifier(r),i=(n=this.onInitCallbacks.get(o))!==null&&n!==void 0?n:new Set;i.add(t),this.onInitCallbacks.set(o,i);const a=this.instances.get(o);return a&&t(a,o),()=>{i.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(!!n)for(const o of n)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Z6(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Vr){return this.component?this.component.multipleInstances?t:Vr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z6(e){return e===Vr?void 0:e}function eE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new J6(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(X||(X={}));const rE={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},nE=X.INFO,oE={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},iE=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),o=oE[t];if(o)console[o](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Dd{constructor(t){this.name=t,this._logLevel=nE,this._logHandler=iE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?rE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const aE=(e,t)=>t.some(r=>e instanceof r);let Ap,Pp;function sE(){return Ap||(Ap=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lE(){return Pp||(Pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hb=new WeakMap,su=new WeakMap,Wb=new WeakMap,Dl=new WeakMap,jd=new WeakMap;function cE(e){const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{r(_r(e.result)),o()},a=()=>{n(e.error),o()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(r=>{r instanceof IDBCursor&&Hb.set(r,e)}).catch(()=>{}),jd.set(t,e),t}function uE(e){if(su.has(e))return;const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{r(),o()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});su.set(e,t)}let lu={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return su.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wb.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return _r(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dE(e){lu=e(lu)}function fE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(jl(this),t,...r);return Wb.set(n,t.sort?t.sort():[t]),_r(n)}:lE().includes(e)?function(...t){return e.apply(jl(this),t),_r(Hb.get(this))}:function(...t){return _r(e.apply(jl(this),t))}}function mE(e){return typeof e=="function"?fE(e):(e instanceof IDBTransaction&&uE(e),aE(e,sE())?new Proxy(e,lu):e)}function _r(e){if(e instanceof IDBRequest)return cE(e);if(Dl.has(e))return Dl.get(e);const t=mE(e);return t!==e&&(Dl.set(e,t),jd.set(t,e)),t}const jl=e=>jd.get(e);function Gb(e,t,{blocked:r,upgrade:n,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=_r(a);return n&&a.addEventListener("upgradeneeded",l=>{n(_r(a.result),l.oldVersion,l.newVersion,_r(a.transaction))}),r&&a.addEventListener("blocked",()=>r()),s.then(l=>{i&&l.addEventListener("close",()=>i()),o&&l.addEventListener("versionchange",()=>o())}).catch(()=>{}),s}const pE=["get","getKey","getAll","getAllKeys","count"],gE=["put","add","delete","clear"],Fl=new Map;function Op(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Fl.get(t))return Fl.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=gE.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||pE.includes(r)))return;const i=async function(a,...s){const l=this.transaction(a,o?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(s.shift())),(await Promise.all([c[r](...s),o&&l.done]))[0]};return Fl.set(t,i),i}dE(e=>af(of({},e),{get:(t,r,n)=>Op(t,r)||e.get(t,r,n),has:(t,r)=>!!Op(t,r)||e.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(bE(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function bE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const cu="@firebase/app",Np="0.7.26";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Dd("@firebase/app"),vE="@firebase/app-compat",yE="@firebase/analytics-compat",wE="@firebase/analytics",xE="@firebase/app-check-compat",kE="@firebase/app-check",_E="@firebase/auth",SE="@firebase/auth-compat",EE="@firebase/database",IE="@firebase/database-compat",TE="@firebase/functions",CE="@firebase/functions-compat",AE="@firebase/installations",PE="@firebase/installations-compat",OE="@firebase/messaging",NE="@firebase/messaging-compat",RE="@firebase/performance",zE="@firebase/performance-compat",ME="@firebase/remote-config",LE="@firebase/remote-config-compat",DE="@firebase/storage",jE="@firebase/storage-compat",FE="@firebase/firestore",$E="@firebase/firestore-compat",UE="firebase",BE="9.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="[DEFAULT]",VE={[cu]:"fire-core",[vE]:"fire-core-compat",[wE]:"fire-analytics",[yE]:"fire-analytics-compat",[kE]:"fire-app-check",[xE]:"fire-app-check-compat",[_E]:"fire-auth",[SE]:"fire-auth-compat",[EE]:"fire-rtdb",[IE]:"fire-rtdb-compat",[TE]:"fire-fn",[CE]:"fire-fn-compat",[AE]:"fire-iid",[PE]:"fire-iid-compat",[OE]:"fire-fcm",[NE]:"fire-fcm-compat",[RE]:"fire-perf",[zE]:"fire-perf-compat",[ME]:"fire-rc",[LE]:"fire-rc-compat",[DE]:"fire-gcs",[jE]:"fire-gcs-compat",[FE]:"fire-fst",[$E]:"fire-fst-compat","fire-js":"fire-js",[UE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,uu=new Map;function HE(e,t){try{e.container.addComponent(t)}catch(r){Fd.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function qt(e){const t=e.name;if(uu.has(t))return Fd.debug(`There were multiple attempts to register component ${t}.`),!1;uu.set(t,e);for(const r of Ja.values())HE(r,e);return!0}function lo(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},sn=new vn("app","Firebase",WE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=BE;function KE(e,t={}){typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kb,automaticDataCollectionEnabled:!1},t),n=r.name;if(typeof n!="string"||!n)throw sn.create("bad-app-name",{appName:String(n)});const o=Ja.get(n);if(o){if(fi(e,o.options)&&fi(r,o.config))return o;throw sn.create("duplicate-app",{appName:n})}const i=new tE(n);for(const s of uu.values())i.addComponent(s);const a=new GE(e,r,i);return Ja.set(n,a),a}function Yb(e=Kb){const t=Ja.get(e);if(!t)throw sn.create("no-app",{appName:e});return t}function Ct(e,t,r){var n;let o=(n=VE[e])!==null&&n!==void 0?n:e;r&&(o+=`-${r}`);const i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const s=[`Unable to register library "${o}" with version "${t}":`];i&&s.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&a&&s.push("and"),a&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fd.warn(s.join(" "));return}qt(new Nt(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebase-heartbeat-database",qE=1,mi="firebase-heartbeat-store";let $l=null;function qb(){return $l||($l=Gb(YE,qE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(mi)}}}).catch(e=>{throw sn.create("storage-open",{originalErrorMessage:e.message})})),$l}async function QE(e){var t;try{return(await qb()).transaction(mi).objectStore(mi).get(Qb(e))}catch(r){throw sn.create("storage-get",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message})}}async function Rp(e,t){var r;try{const o=(await qb()).transaction(mi,"readwrite");return await o.objectStore(mi).put(t,Qb(e)),o.done}catch(n){throw sn.create("storage-set",{originalErrorMessage:(r=n)===null||r===void 0?void 0:r.message})}}function Qb(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=1024,JE=30*24*60*60*1e3;class ZE{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new tI(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=zp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(o=>o.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const i=new Date(o.date).valueOf();return Date.now()-i<=JE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zp(),{heartbeatsToSend:r,unsentEntries:n}=eI(this._heartbeatsCache.heartbeats),o=$b(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function zp(){return new Date().toISOString().substring(0,10)}function eI(e,t=XE){const r=[];let n=e.slice();for(const o of e){const i=r.find(a=>a.agent===o.agent);if(i){if(i.dates.push(o.date),Mp(r)>t){i.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Mp(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class tI{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bb()?Vb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Mp(e){return $b(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(e){qt(new Nt("platform-logger",t=>new hE(t),"PRIVATE")),qt(new Nt("heartbeat",t=>new ZE(t),"PRIVATE")),Ct(cu,Np,e),Ct(cu,Np,"esm2017"),Ct("fire-js","")}rI("");var nI="firebase",oI="9.8.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(nI,oI,"app");function $d(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function Xb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iI=Xb,Jb=new vn("auth","Firebase",Xb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Dd("@firebase/auth");function ha(e,...t){Lp.logLevel<=X.ERROR&&Lp.error(`Auth (${Vs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,...t){throw Ud(e,...t)}function At(e,...t){return Ud(e,...t)}function aI(e,t,r){const n=Object.assign(Object.assign({},iI()),{[t]:r});return new vn("auth","Firebase",n).create(t,{appName:e.name})}function Ud(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Jb.create(e,...t)}function $(e,t,...r){if(!e)throw Ud(t,...r)}function $t(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ha(t),new Error(t)}function Qt(e,t){e||$t(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=new Map;function Ut(e){Qt(e instanceof Function,"Expected a class definition");let t=Dp.get(e);return t?(Qt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dp.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(e,t){const r=lo(e,"auth");if(r.isInitialized()){const o=r.getImmediate(),i=r.getOptions();if(fi(i,t!=null?t:{}))return o;bt(o,"already-initialized")}return r.initialize({options:t})}function lI(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(Ut);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cI(){return jp()==="http:"||jp()==="https:"}function jp(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cI()||Ub()||"connection"in navigator)?navigator.onLine:!0}function dI(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,r){this.shortDelay=t,this.longDelay=r,Qt(r>t,"Short delay should be less than long delay!"),this.isMobile=D6()||j6()}get(){return uI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(e,t){Qt(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=new Ci(3e4,6e4);function Ai(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pi(e,t,r,n,o={}){return ev(e,o,async()=>{let i={},a={};n&&(t==="GET"?a=n:i={body:JSON.stringify(n)});const s=Ti(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Zb.fetch()(tv(e,e.config.apiHost,r,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function ev(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},fI),t);try{const o=new pI(e),i=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ta(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const s=i.ok?a.errorMessage:a.error.message,[l,c]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw ta(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw ta(e,"user-disabled",a);const d=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw aI(e,d,c);bt(e,d)}}catch(o){if(o instanceof Mr)throw o;bt(e,"network-request-failed")}}async function Oi(e,t,r,n,o={}){const i=await Pi(e,t,r,n,o);return"mfaPendingCredential"in i&&bt(e,"multi-factor-auth-required",{_serverResponse:i}),i}function tv(e,t,r,n){const o=`${t}${r}?${n}`;return e.config.emulator?Bd(e.config,o):`${e.config.apiScheme}://${o}`}class pI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(At(this.auth,"network-request-failed")),mI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const o=At(e,t,n);return o.customData._tokenResponse=r,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(e,t){return Pi(e,"POST","/v1/accounts:delete",t)}async function hI(e,t){return Pi(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bI(e,t=!1){const r=yn(e),n=await r.getIdToken(t),o=Vd(n);$(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const i=typeof o.firebase=="object"?o.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:o,token:n,authTime:Vo(Ul(o.auth_time)),issuedAtTime:Vo(Ul(o.iat)),expirationTime:Vo(Ul(o.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ul(e){return Number(e)*1e3}function Vd(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return ha("JWT malformed, contained fewer than 3 sections"),null;try{const o=M6(r);return o?JSON.parse(o):(ha("Failed to decode base64 JWT payload"),null)}catch(o){return ha("Caught error parsing JWT payload as JSON",o),null}}function vI(e){const t=Vd(e);return $(t,"internal-error"),$(typeof t.exp!="undefined","internal-error"),$(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof Mr&&yI(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function yI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const o=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(e){var t;const r=e.auth,n=await e.getIdToken(),o=await pi(e,hI(r,{idToken:n}));$(o==null?void 0:o.users.length,r,"internal-error");const i=o.users[0];e._notifyReloadListener(i);const a=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?_I(i.providerUserInfo):[],s=kI(e.providerData,a),l=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!(s!=null&&s.length),d=l?c:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rv(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,m)}async function xI(e){const t=yn(e);await Za(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function kI(e,t){return[...e.filter(n=>!t.some(o=>o.providerId===n.providerId)),...t]}function _I(e){return e.map(t=>{var{providerId:r}=t,n=$d(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(e,t){const r=await ev(e,{},async()=>{const n=Ti({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:i}=e.config,a=tv(e,o,"/v1/token",`key=${i}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Zb.fetch()(a,{method:"POST",headers:s,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken!="undefined","internal-error"),$(typeof t.refreshToken!="undefined","internal-error");const r="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):vI(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}async getToken(t,r=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:o,expiresIn:i}=await SI(t,r);this.updateTokensAndExpiration(n,o,Number(i))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:o,expirationTime:i}=r,a=new gi;return n&&($(typeof n=="string","internal-error",{appName:t}),a.refreshToken=n),o&&($(typeof o=="string","internal-error",{appName:t}),a.accessToken=o),i&&($(typeof i=="number","internal-error",{appName:t}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(e,t){$(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Xr{constructor(t){var{uid:r,auth:n,stsTokenManager:o}=t,i=$d(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rv(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const r=await pi(this,this.stsTokenManager.getToken(this.auth,t));return $(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return bI(this,t)}reload(){return xI(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Xr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await Za(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await pi(this,gI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,o,i,a,s,l,c,d;const m=(n=r.displayName)!==null&&n!==void 0?n:void 0,u=(o=r.email)!==null&&o!==void 0?o:void 0,h=(i=r.phoneNumber)!==null&&i!==void 0?i:void 0,w=(a=r.photoURL)!==null&&a!==void 0?a:void 0,E=(s=r.tenantId)!==null&&s!==void 0?s:void 0,C=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,p=(c=r.createdAt)!==null&&c!==void 0?c:void 0,f=(d=r.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:b,isAnonymous:x,providerData:I,stsTokenManager:T}=r;$(g&&T,t,"internal-error");const k=gi.fromJSON(this.name,T);$(typeof g=="string",t,"internal-error"),rr(m,t.name),rr(u,t.name),$(typeof b=="boolean",t,"internal-error"),$(typeof x=="boolean",t,"internal-error"),rr(h,t.name),rr(w,t.name),rr(E,t.name),rr(C,t.name),rr(p,t.name),rr(f,t.name);const A=new Xr({uid:g,auth:t,email:u,emailVerified:b,displayName:m,isAnonymous:x,photoURL:w,phoneNumber:h,tenantId:E,stsTokenManager:k,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(A.providerData=I.map(z=>Object.assign({},z))),C&&(A._redirectEventId=C),A}static async _fromIdTokenResponse(t,r,n=!1){const o=new gi;o.updateFromServerResponse(r);const i=new Xr({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:n});return await Za(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}nv.type="NONE";const Fp=nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e,t,r){return`firebase:${e}:${t}:${r}`}class Wn{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:o,name:i}=this.auth;this.fullUserKey=ba(this.userKey,o.apiKey,i),this.fullPersistenceKey=ba("persistence",o.apiKey,i),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Xr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new Wn(Ut(Fp),t,n);const o=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=o[0]||Ut(Fp);const a=ba(n,t.config.apiKey,t.name);let s=null;for(const c of r)try{const d=await c._get(a);if(d){const m=Xr._fromJSON(t,d);c!==i&&(s=m),i=c;break}}catch{}const l=o.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wn(i,t,n):(i=l[0],s&&await i._set(a,s.toJSON()),await Promise.all(r.map(async c=>{if(c!==i)try{await c._remove(a)}catch{}})),new Wn(i,t,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(av(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ov(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(lv(t))return"Blackberry";if(cv(t))return"Webos";if(Hd(t))return"Safari";if((t.includes("chrome/")||iv(t))&&!t.includes("edge/"))return"Chrome";if(sv(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function ov(e=Pe()){return/firefox\//i.test(e)}function Hd(e=Pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function iv(e=Pe()){return/crios\//i.test(e)}function av(e=Pe()){return/iemobile/i.test(e)}function sv(e=Pe()){return/android/i.test(e)}function lv(e=Pe()){return/blackberry/i.test(e)}function cv(e=Pe()){return/webos/i.test(e)}function Hs(e=Pe()){return/iphone|ipad|ipod/i.test(e)}function EI(e=Pe()){var t;return Hs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function II(){return F6()&&document.documentMode===10}function uv(e=Pe()){return Hs(e)||sv(e)||cv(e)||lv(e)||/windows phone/i.test(e)||av(e)}function TI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(e,t=[]){let r;switch(e){case"Browser":r=$p(Pe());break;case"Worker":r=`${$p(Pe())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Vs}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=i=>new Promise((a,s)=>{try{const l=t(i);a(l)}catch(l){s(l)}});n.onAbort=r,this.queue.push(n);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){var r;if(this.auth.currentUser===t)return;const n=[];try{for(const o of this.queue)await o(t),o.onAbort&&n.push(o.onAbort)}catch(o){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(r=o)===null||r===void 0?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t,r,n){this.app=t,this.heartbeatServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Up(this),this.idTokenSubscription=new Up(this),this.beforeStateQueue=new CI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Ut(r)),this._initializationPromise=this.queue(async()=>{var n,o;if(!this._deleted&&(this.persistenceManager=await Wn.create(this,t),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var r;const n=await this.assertedPersistence.getCurrentUser();let o=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,s=o==null?void 0:o._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===s)&&(l==null?void 0:l.user)&&(o=l.user,i=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(o)}catch(a){o=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Za(t)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const r=t?yn(t):null;return r&&$(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vn("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Ut(t)||this._popupRedirectResolver;$(r,this,"argument-error"),this.redirectPersistenceManager=await Wn.create(this,[Ut(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,o){if(this._deleted)return()=>{};const i=typeof r=="function"?r:r.next.bind(r),a=this._isInitialized?Promise.resolve():this._initializationPromise;return $(a,this,"internal-error"),a.then(()=>i(this.currentUser)),typeof r=="function"?t.addObserver(r,n,o):t.addObserver(r)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=dv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return n&&(r["X-Firebase-Client"]=n),r}}function Ws(e){return yn(e)}class Up{constructor(t){this.auth=t,this.observer=null,this.addObserver=W6(r=>this.observer=r)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return $t("not implemented")}_getIdTokenResponse(t){return $t("not implemented")}_linkToIdToken(t,r){return $t("not implemented")}_getReauthenticationResolver(t){return $t("not implemented")}}async function PI(e,t){return Pi(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(e,t){return Oi(e,"POST","/v1/accounts:signInWithPassword",Ai(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(e,t){return Oi(e,"POST","/v1/accounts:signInWithEmailLink",Ai(e,t))}async function RI(e,t){return Oi(e,"POST","/v1/accounts:signInWithEmailLink",Ai(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Wd{constructor(t,r,n,o=null){super("password",n),this._email=t,this._password=r,this._tenantId=o}static _fromEmailAndPassword(t,r){return new hi(t,r,"password")}static _fromEmailAndCode(t,r,n=null){return new hi(t,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if((r==null?void 0:r.email)&&(r==null?void 0:r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return OI(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return NI(t,{email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":return PI(t,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RI(t,{idToken:r,email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(e,t){return Oi(e,"POST","/v1/accounts:signInWithIdp",Ai(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="http://localhost";class ln extends Wd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):bt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:o}=r,i=$d(r,["providerId","signInMethod"]);if(!n||!o)return null;const a=new ln(n,o);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(t){const r=this.buildRequest();return Gn(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,Gn(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,Gn(t,r)}buildRequest(){const t={requestUri:zI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Ti(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LI(e){const t=To(Co(e)).link,r=t?To(Co(t)).deep_link_id:null,n=To(Co(e)).deep_link_id;return(n?To(Co(n)).link:null)||n||r||t||e}class Gd{constructor(t){var r,n,o,i,a,s;const l=To(Co(t)),c=(r=l.apiKey)!==null&&r!==void 0?r:null,d=(n=l.oobCode)!==null&&n!==void 0?n:null,m=MI((o=l.mode)!==null&&o!==void 0?o:null);$(c&&d&&m,"argument-error"),this.apiKey=c,this.operation=m,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const r=LI(t);try{return new Gd(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(t,r){return hi._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const n=Gd.parseLink(r);return $(n,"argument-error"),hi._fromEmailAndCode(t,n.code,n.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends fv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ni{constructor(){super("facebook.com")}static credential(t){return ln._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cr.credentialFromTaggedObject(t)}static credentialFromError(t){return cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cr.credential(t.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ni{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return ln._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return ur.credentialFromTaggedObject(t)}static credentialFromError(t){return ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return ur.credential(r,n)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ni{constructor(){super("github.com")}static credential(t){return ln._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return dr.credentialFromTaggedObject(t)}static credentialFromError(t){return dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return dr.credential(t.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ni{constructor(){super("twitter.com")}static credential(t,r){return ln._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return fr.credentialFromTaggedObject(t)}static credentialFromError(t){return fr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return fr.credential(r,n)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(e,t){return Oi(e,"POST","/v1/accounts:signUp",Ai(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,o=!1){const i=await Xr._fromIdTokenResponse(t,n,o),a=Bp(n);return new cn({user:i,providerId:a,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const o=Bp(n);return new cn({user:t,providerId:o,_tokenResponse:n,operationType:r})}}function Bp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Mr{constructor(t,r,n,o){var i;super(r.code,r.message),this.operationType=n,this.user=o,Object.setPrototypeOf(this,es.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,o){return new es(t,r,n,o)}}function mv(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?es._fromErrorAndOperation(e,i,t,n):i})}async function jI(e,t,r=!1){const n=await pi(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return cn._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(e,t,r=!1){const{auth:n}=e,o="reauthenticate";try{const i=await pi(e,mv(n,o,t,e),r);$(i.idToken,n,"internal-error");const a=Vd(i.idToken);$(a,n,"internal-error");const{sub:s}=a;return $(e.uid===s,n,"user-mismatch"),cn._forOperation(e,o,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(e,t,r=!1){const n="signIn",o=await mv(e,n,t),i=await cn._fromIdTokenResponse(e,n,o);return r||await e._updateCurrentUser(i.user),i}async function $I(e,t){return pv(Ws(e),t)}async function UI(e,t,r){const n=Ws(e),o=await DI(n,{returnSecureToken:!0,email:t,password:r}),i=await cn._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(i.user),i}function BI(e,t,r){return $I(yn(e),co.credential(t,r))}const ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(ts,"1"),this.storage.removeItem(ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){const e=Pe();return Hd(e)||Hs(e)}const HI=1e3,WI=10;class hv extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VI()&&TI(),this.fallbackToPolling=uv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),o=this.localCache[r];n!==o&&t(r,o,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((a,s,l)=>{this.notifyListeners(a,l)});return}const n=t.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(n);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!r)return}const o=()=>{const a=this.storage.getItem(n);!r&&this.localCache[n]===a||this.notifyListeners(n,a)},i=this.storage.getItem(n);II()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,WI):o()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const o of Array.from(n))o(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}hv.type="LOCAL";const GI=hv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}bv.type="SESSION";const vv=bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(e){return Promise.all(e.map(async t=>{try{const r=await t;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(o=>o.isListeningto(t));if(r)return r;const n=new Gs(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:o,data:i}=r.data,a=this.handlersMap[o];if(!(a!=null&&a.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:o});const s=Array.from(a).map(async c=>c(r.origin,i)),l=await KI(s);r.ports[0].postMessage({status:"done",eventId:n,eventType:o,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const o=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let i,a;return new Promise((s,l)=>{const c=Kd("",20);o.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},n);a={messageChannel:o,onMessage(m){const u=m;if(u.data.eventId===c)switch(u.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(u.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),o.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:r},[o.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function qI(e){Pt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return typeof Pt().WorkerGlobalScope!="undefined"&&typeof Pt().importScripts=="function"}async function QI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XI(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function JI(){return yv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv="firebaseLocalStorageDb",ZI=1,rs="firebaseLocalStorage",xv="fbase_key";class Ri{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Ks(e,t){return e.transaction([rs],t?"readwrite":"readonly").objectStore(rs)}function eT(){const e=indexedDB.deleteDatabase(wv);return new Ri(e).toPromise()}function fu(){const e=indexedDB.open(wv,ZI);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(rs,{keyPath:xv})}catch(o){r(o)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(rs)?t(n):(n.close(),await eT(),t(await fu()))})})}async function Vp(e,t,r){const n=Ks(e,!0).put({[xv]:t,value:r});return new Ri(n).toPromise()}async function tT(e,t){const r=Ks(e,!1).get(t),n=await new Ri(r).toPromise();return n===void 0?null:n.value}function Hp(e,t){const r=Ks(e,!0).delete(t);return new Ri(r).toPromise()}const rT=800,nT=3;class kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fu(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>nT)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gs._getInstance(JI()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new YI(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((t=n[0])===null||t===void 0?void 0:t.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||XI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fu();return await Vp(t,ts,"1"),await Hp(t,ts),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vp(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>tT(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hp(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const i=Ks(o,!1).getAll();return new Ri(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:o,value:i}of t)n.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(i)&&(this.notifyListeners(o,i),r.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!n.has(o)&&(this.notifyListeners(o,null),r.push(o));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const o of Array.from(n))o(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kv.type="LOCAL";const oT=kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function aT(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=o=>{const i=At("internal-error");i.customData=o,r(i)},n.type="text/javascript",n.charset="UTF-8",iT().appendChild(n)})}function sT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(e,t){return t?Ut(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Wd{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Gn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return Gn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return Gn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function cT(e){return pv(e.auth,new Yd(e),e.bypassAuthState)}function uT(e){const{auth:t,user:r}=e;return $(r,t,"internal-error"),FI(r,new Yd(e),e.bypassAuthState)}async function dT(e){const{auth:t,user:r}=e;return $(r,t,"internal-error"),jI(r,new Yd(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t,r,n,o,i=!1){this.auth=t,this.resolver=n,this.user=o,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:o,tenantId:i,error:a,type:s}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:i||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cT;case"linkViaPopup":case"linkViaRedirect":return dT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:bt(this.auth,"internal-error")}}resolve(t){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new Ci(2e3,1e4);class Dn extends _v{constructor(t,r,n,o,i){super(t,r,o,i),this.provider=n,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const t=Kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,fT.get())};t()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="pendingRedirect",va=new Map;class pT extends _v{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=va.get(this.auth._key());if(!t){try{const n=await gT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}va.set(this.auth._key(),t)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gT(e,t){const r=vT(t),n=bT(e);if(!await n._isAvailable())return!1;const o=await n._get(r)==="true";return await n._remove(r),o}function hT(e,t){va.set(e._key(),t)}function bT(e){return Ut(e._redirectPersistence)}function vT(e){return ba(mT,e.config.apiKey,e.name)}async function yT(e,t,r=!1){const n=Ws(e),o=lT(n,t),a=await new pT(n,o,r).execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=10*60*1e3;class xT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kT(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!Sv(t)){const o=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(At(this.auth,o))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wp(t))}saveEventToCache(t){this.cachedEventUids.add(Wp(t)),this.lastProcessedEventTime=Date.now()}}function Wp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sv({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sv(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(e,t={}){return Pi(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ET=/^https?/;async function IT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _T(e);for(const r of t)try{if(TT(r))return}catch{}bt(e,"unauthorized-domain")}function TT(e){const t=du(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&a.hostname===n}if(!ET.test(r))return!1;if(ST.test(e))return n===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Ci(3e4,6e4);function Gp(){const e=Pt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function AT(e){return new Promise((t,r)=>{var n,o,i;function a(){Gp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gp(),r(At(e,"network-request-failed"))},timeout:CT.get()})}if(!((o=(n=Pt().gapi)===null||n===void 0?void 0:n.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((i=Pt().gapi)===null||i===void 0)&&i.load)a();else{const s=sT("iframefcb");return Pt()[s]=()=>{gapi.load?a():r(At(e,"network-request-failed"))},aT(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>r(l))}}).catch(t=>{throw ya=null,t})}let ya=null;function PT(e){return ya=ya||AT(e),ya}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new Ci(5e3,15e3),NT="__/auth/iframe",RT="emulator/auth/iframe",zT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LT(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Bd(t,RT):`https://${e.config.authDomain}/${NT}`,n={apiKey:t.apiKey,appName:e.name,v:Vs},o=MT.get(e.config.apiHost);o&&(n.eid=o);const i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),`${r}?${Ti(n).slice(1)}`}async function DT(e){const t=await PT(e),r=Pt().gapi;return $(r,e,"internal-error"),t.open({where:document.body,url:LT(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zT,dontclear:!0},n=>new Promise(async(o,i)=>{await n.restyle({setHideOnLeave:!1});const a=At(e,"network-request-failed"),s=Pt().setTimeout(()=>{i(a)},OT.get());function l(){Pt().clearTimeout(s),o(n)}n.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FT=500,$T=600,UT="_blank",BT="http://localhost";class Kp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VT(e,t,r,n=FT,o=$T){const i=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let s="";const l=Object.assign(Object.assign({},jT),{width:n.toString(),height:o.toString(),top:i,left:a}),c=Pe().toLowerCase();r&&(s=iv(c)?UT:r),ov(c)&&(t=t||BT,l.scrollbars="yes");const d=Object.entries(l).reduce((u,[h,w])=>`${u}${h}=${w},`,"");if(EI(c)&&s!=="_self")return HT(t||"",s),new Kp(null);const m=window.open(t||"",s,d);$(m,e,"popup-blocked");try{m.focus()}catch{}return new Kp(m)}function HT(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="__/auth/handler",GT="emulator/auth/handler";function Yp(e,t,r,n,o,i){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Vs,eventId:o};if(t instanceof fv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",H6(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))a[l]=c}if(t instanceof Ni){const l=t.getScopes().filter(c=>c!=="");l.length>0&&(a.scopes=l.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${KT(e)}?${Ti(s).slice(1)}`}function KT({config:e}){return e.emulator?Bd(e,GT):`https://${e.authDomain}/${WT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="webStorageSupport";class YT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=yT,this._overrideRedirectResult=hT}async _openPopup(t,r,n,o){var i;Qt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=Yp(t,r,n,du(),o);return VT(t,a,Kd())}async _openRedirect(t,r,n,o){return await this._originValidation(t),qI(Yp(t,r,n,du(),o)),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:o,promise:i}=this.eventManagers[r];return o?Promise.resolve(o):(Qt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await DT(t),n=new xT(t);return r.register("authEvent",o=>($(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:n.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Bl,{type:Bl},o=>{var i;const a=(i=o==null?void 0:o[0])===null||i===void 0?void 0:i[Bl];a!==void 0&&r(!!a),bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=IT(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return uv()||Hd()||Hs()}}const qT=YT;var qp="@firebase/auth",Qp="0.20.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{var o;t(((o=n)===null||o===void 0?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);!r||(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function JT(e){qt(new Nt("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:i,authDomain:a}=n.options;return((s,l)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:s.name}),$(!(a!=null&&a.includes(":")),"argument-error",{appName:s.name});const c={apiKey:i,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dv(e)},d=new AI(s,l,c);return lI(d,r),d})(n,o)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),qt(new Nt("auth-internal",t=>{const r=Ws(t.getProvider("auth").getImmediate());return(n=>new QT(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(qp,Qp,XT(e)),Ct(qp,Qp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(e=Yb()){const t=lo(e,"auth");return t.isInitialized()?t.getImmediate():sI(e,{popupRedirectResolver:qT,persistence:[oT,GI,vv]})}JT("Browser");const Iv="@firebase/installations",qd="0.5.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=1e4,Cv=`w:${qd}`,Av="FIS_v2",ZT="https://firebaseinstallations.googleapis.com/v1",e4=60*60*1e3,t4="installations",r4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},un=new vn(t4,r4,n4);function Pv(e){return e instanceof Mr&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov({projectId:e}){return`${ZT}/projects/${e}/installations`}function Nv(e){return{token:e.token,requestStatus:2,expiresIn:i4(e.expiresIn),creationTime:Date.now()}}async function Rv(e,t){const n=(await t.json()).error;return un.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function zv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function o4(e,{refreshToken:t}){const r=zv(e);return r.append("Authorization",a4(t)),r}async function Mv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function i4(e){return Number(e.replace("s","000"))}function a4(e){return`${Av} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s4({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const n=Ov(e),o=zv(e),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const a={fid:r,authVersion:Av,appId:e.appId,sdkVersion:Cv},s={method:"POST",headers:o,body:JSON.stringify(a)},l=await Mv(()=>fetch(n,s));if(l.ok){const c=await l.json();return{fid:c.fid||r,registrationStatus:2,refreshToken:c.refreshToken,authToken:Nv(c.authToken)}}else throw await Rv("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c4=/^[cdef][\w-]{21}$/,mu="";function u4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const r=d4(e);return c4.test(r)?r:mu}catch{return mu}}function d4(e){return l4(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=new Map;function jv(e,t){const r=Ys(e);Fv(r,t),f4(r,t)}function Fv(e,t){const r=Dv.get(e);if(!!r)for(const n of r)n(t)}function f4(e,t){const r=m4();r&&r.postMessage({key:e,fid:t}),p4()}let Yr=null;function m4(){return!Yr&&"BroadcastChannel"in self&&(Yr=new BroadcastChannel("[Firebase] FID Change"),Yr.onmessage=e=>{Fv(e.data.key,e.data.fid)}),Yr}function p4(){Dv.size===0&&Yr&&(Yr.close(),Yr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4="firebase-installations-database",h4=1,dn="firebase-installations-store";let Vl=null;function Qd(){return Vl||(Vl=Gb(g4,h4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(dn)}}})),Vl}async function ns(e,t){const r=Ys(e),o=(await Qd()).transaction(dn,"readwrite"),i=o.objectStore(dn),a=await i.get(r);return await i.put(t,r),await o.done,(!a||a.fid!==t.fid)&&jv(e,t.fid),t}async function $v(e){const t=Ys(e),n=(await Qd()).transaction(dn,"readwrite");await n.objectStore(dn).delete(t),await n.done}async function qs(e,t){const r=Ys(e),o=(await Qd()).transaction(dn,"readwrite"),i=o.objectStore(dn),a=await i.get(r),s=t(a);return s===void 0?await i.delete(r):await i.put(s,r),await o.done,s&&(!a||a.fid!==s.fid)&&jv(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(e){let t;const r=await qs(e.appConfig,n=>{const o=b4(n),i=v4(e,o);return t=i.registrationPromise,i.installationEntry});return r.fid===mu?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function b4(e){const t=e||{fid:u4(),registrationStatus:0};return Uv(t)}function v4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(un.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=y4(e,r);return{installationEntry:r,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:w4(e)}:{installationEntry:t}}async function y4(e,t){try{const r=await s4(e,t);return ns(e.appConfig,r)}catch(r){throw Pv(r)&&r.customData.serverCode===409?await $v(e.appConfig):await ns(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function w4(e){let t=await Xp(e.appConfig);for(;t.registrationStatus===1;)await Lv(100),t=await Xp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await Xd(e);return n||r}return t}function Xp(e){return qs(e,t=>{if(!t)throw un.create("installation-not-found");return Uv(t)})}function Uv(e){return x4(e)?{fid:e.fid,registrationStatus:0}:e}function x4(e){return e.registrationStatus===1&&e.registrationTime+Tv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k4({appConfig:e,heartbeatServiceProvider:t},r){const n=_4(e,r),o=o4(e,r),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const a={installation:{sdkVersion:Cv,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(a)},l=await Mv(()=>fetch(n,s));if(l.ok){const c=await l.json();return Nv(c)}else throw await Rv("Generate Auth Token",l)}function _4(e,{fid:t}){return`${Ov(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jd(e,t=!1){let r;const n=await qs(e.appConfig,i=>{if(!Bv(i))throw un.create("not-registered");const a=i.authToken;if(!t&&I4(a))return i;if(a.requestStatus===1)return r=S4(e,t),i;{if(!navigator.onLine)throw un.create("app-offline");const s=C4(i);return r=E4(e,s),s}});return r?await r:n.authToken}async function S4(e,t){let r=await Jp(e.appConfig);for(;r.authToken.requestStatus===1;)await Lv(100),r=await Jp(e.appConfig);const n=r.authToken;return n.requestStatus===0?Jd(e,t):n}function Jp(e){return qs(e,t=>{if(!Bv(t))throw un.create("not-registered");const r=t.authToken;return A4(r)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function E4(e,t){try{const r=await k4(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await ns(e.appConfig,n),r}catch(r){if(Pv(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await $v(e.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ns(e.appConfig,n)}throw r}}function Bv(e){return e!==void 0&&e.registrationStatus===2}function I4(e){return e.requestStatus===2&&!T4(e)}function T4(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+e4}function C4(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function A4(e){return e.requestStatus===1&&e.requestTime+Tv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P4(e){const t=e,{installationEntry:r,registrationPromise:n}=await Xd(t);return n?n.catch(console.error):Jd(t).catch(console.error),r.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O4(e,t=!1){const r=e;return await N4(r),(await Jd(r,t)).token}async function N4(e){const{registrationPromise:t}=await Xd(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(e){if(!e||!e.options)throw Hl("App Configuration");if(!e.name)throw Hl("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw Hl(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hl(e){return un.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="installations",z4="installations-internal",M4=e=>{const t=e.getProvider("app").getImmediate(),r=R4(t),n=lo(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},L4=e=>{const t=e.getProvider("app").getImmediate(),r=lo(t,Vv).getImmediate();return{getId:()=>P4(r),getToken:o=>O4(r,o)}};function D4(){qt(new Nt(Vv,M4,"PUBLIC")),qt(new Nt(z4,L4,"PRIVATE"))}D4();Ct(Iv,qd);Ct(Iv,qd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="analytics",j4="firebase_id",F4="origin",$4=60*1e3,U4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hv="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Dd("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(e){return Promise.all(e.map(t=>t.catch(r=>r)))}function B4(e,t){const r=document.createElement("script");r.src=`${Hv}?l=${e}&id=${t}`,r.async=!0,document.head.appendChild(r)}function V4(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function H4(e,t,r,n,o,i){const a=n[o];try{if(a)await t[a];else{const l=(await Wv(r)).find(c=>c.measurementId===o);l&&await t[l.appId]}}catch(s){Ge.error(s)}e("config",o,i)}async function W4(e,t,r,n,o){try{let i=[];if(o&&o.send_to){let a=o.send_to;Array.isArray(a)||(a=[a]);const s=await Wv(r);for(const l of a){const c=s.find(m=>m.measurementId===l),d=c&&t[c.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",n,o||{})}catch(i){Ge.error(i)}}function G4(e,t,r,n){async function o(i,a,s){try{i==="event"?await W4(e,t,r,a,s):i==="config"?await H4(e,t,r,n,a,s):e("set",a)}catch(l){Ge.error(l)}}return o}function K4(e,t,r,n,o){let i=function(...a){window[n].push(arguments)};return window[o]&&typeof window[o]=="function"&&(i=window[o]),window[o]=G4(i,e,t,r),{gtagCore:i,wrappedGtag:window[o]}}function Y4(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Hv))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},it=new vn("analytics","Analytics",q4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q4=30,X4=1e3;class J4{constructor(t={},r=X4){this.throttleMetadata=t,this.intervalMillis=r}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,r){this.throttleMetadata[t]=r}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Gv=new J4;function Z4(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function eC(e){var t;const{appId:r,apiKey:n}=e,o={method:"GET",headers:Z4(n)},i=U4.replace("{app-id}",r),a=await fetch(i,o);if(a.status!==200&&a.status!==304){let s="";try{const l=await a.json();!((t=l.error)===null||t===void 0)&&t.message&&(s=l.error.message)}catch{}throw it.create("config-fetch-failed",{httpStatus:a.status,responseMessage:s})}return a.json()}async function tC(e,t=Gv,r){const{appId:n,apiKey:o,measurementId:i}=e.options;if(!n)throw it.create("no-app-id");if(!o){if(i)return{measurementId:i,appId:n};throw it.create("no-api-key")}const a=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new oC;return setTimeout(async()=>{s.abort()},r!==void 0?r:$4),Kv({appId:n,apiKey:o,measurementId:i},a,s,t)}async function Kv(e,{throttleEndTimeMillis:t,backoffCount:r},n,o=Gv){const{appId:i,measurementId:a}=e;try{await rC(n,t)}catch(s){if(a)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:i,measurementId:a};throw s}try{const s=await eC(e);return o.deleteThrottleMetadata(i),s}catch(s){if(!nC(s)){if(o.deleteThrottleMetadata(i),a)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:i,measurementId:a};throw s}const l=Number(s.customData.httpStatus)===503?Cp(r,o.intervalMillis,Q4):Cp(r,o.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:r+1};return o.setThrottleMetadata(i,c),Ge.debug(`Calling attemptFetch again in ${l} millis`),Kv(e,c,n,o)}}function rC(e,t){return new Promise((r,n)=>{const o=Math.max(t-Date.now(),0),i=setTimeout(r,o);e.addEventListener(()=>{clearTimeout(i),n(it.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function nC(e){if(!(e instanceof Mr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class oC{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(){if(Bb())try{await Vb()}catch(e){return Ge.warn(it.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return Ge.warn(it.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aC(e,t,r,n,o,i,a){var s;const l=tC(e);l.then(h=>{r[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Ge.error(h)),t.push(l);const c=iC().then(h=>{if(h)return n.getId()}),[d,m]=await Promise.all([l,c]);Y4()||B4(i,d.measurementId),o("js",new Date);const u=(s=a==null?void 0:a.config)!==null&&s!==void 0?s:{};return u[F4]="firebase",u.update=!0,m!=null&&(u[j4]=m),o("config",d.measurementId,u),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(t){this.app=t}_delete(){return delete Ho[this.app.options.appId],Promise.resolve()}}let Ho={},Zp=[];const eg={};let Wl="dataLayer",lC="gtag",tg,Yv,rg=!1;function cC(){const e=[];if(Ub()&&e.push("This is a browser extension environment."),$6()||e.push("Cookies are not available."),e.length>0){const t=e.map((n,o)=>`(${o+1}) ${n}`).join(" "),r=it.create("invalid-analytics-context",{errorInfo:t});Ge.warn(r.message)}}function uC(e,t,r){cC();const n=e.options.appId;if(!n)throw it.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw it.create("no-api-key");if(Ho[n]!=null)throw it.create("already-exists",{id:n});if(!rg){V4(Wl);const{wrappedGtag:i,gtagCore:a}=K4(Ho,Zp,eg,Wl,lC);Yv=i,tg=a,rg=!0}return Ho[n]=aC(e,Zp,eg,t,tg,Wl,r),new sC(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(e,t,r,n,o){if(o&&o.global){e("event",r,n);return}else{const i=await t,a=Object.assign(Object.assign({},n),{send_to:i});e("event",r,a)}}function fC(e=Yb()){e=yn(e);const t=lo(e,os);return t.isInitialized()?t.getImmediate():mC(e)}function mC(e,t={}){const r=lo(e,os);if(r.isInitialized()){const o=r.getImmediate();if(fi(t,r.getOptions()))return o;throw it.create("already-initialized")}return r.initialize({options:t})}function pC(e,t,r,n){e=yn(e),dC(Yv,Ho[e.app.options.appId],t,r,n).catch(o=>Ge.error(o))}const ng="@firebase/analytics",og="0.7.10";function gC(){qt(new Nt(os,(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return uC(n,o,r)},"PUBLIC")),qt(new Nt("analytics-internal",e,"PRIVATE")),Ct(ng,og),Ct(ng,og,"esm2017");function e(t){try{const r=t.getProvider(os).getImmediate();return{logEvent:(n,o,i)=>pC(r,n,o,i)}}catch(r){throw it.create("interop-component-reg-failed",{reason:r})}}}gC();function hC(){const t=KE({apiKey:"AIzaSyDWy6KCW2Fl78p8r2K6l_dX9bWfPpaZnGE",authDomain:"clon-razer.firebaseapp.com",projectId:"clon-razer",storageBucket:"clon-razer.appspot.com",messagingSenderId:"486331366759",appId:"1:486331366759:web:6c09d83cfb6bb40a2283c2",measurementId:"G-9Y0LKCPDE3"});fC(t)}async function bC(e,t){await UI(Ev(),e,t)}async function vC(e,t){try{let r=await BI(Ev(),e,t)}catch{return!1}return!0}function yC(){const[e,t]=_.exports.useState(!1),r=a=>{bC(a.correo,a.nombre)},[n,o]=_.exports.useState(!1),i=()=>{o(!0),o(!n)};return y(ki,{children:y(Db,{initialValues:{nombre:"",correo:""},validate:a=>{let s={};return a.nombre?/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/.test(a.nombre)||(s.nombre="La contrase\xF1a debe tener al entre 6 y 16 caracteres, al menos un d\xEDgito, al menos una min\xFAscula y al menos una may\xFAscula."):s.nombre="Por favor ingresa una contrase\xF1a v\xE1lida",a.correo?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(a.correo)||(s.correo="El correo solo puede contener letras, n\xFAmeros, puntos y guiones bajos"):s.correo="Por favor ingresa un correo electr\xF3nico",s},onSubmit:(a,{resetForm:s})=>{r(a),s(),t(!0),window.location.href="/login",setTimeout(()=>t(!1),3e3)},children:({values:a,handleSubmit:s,handleChange:l,handleBlur:c,errors:d,touched:m})=>G("form",{className:"form m-auto p-4 bg-dark ",onSubmit:s,children:[y("div",{className:"text-center mb-4 text-white p-3",children:y("h3",{children:"Reg\xEDstrate"})}),y("div",{children:G("div",{className:"form-floating mb-3",children:[y("input",{type:"text",className:"form-control rounded-0 bg-transparent text-white ",id:"floatingInput",placeholder:"name@example.com"}),y("label",{htmlFor:"floatingInput",className:"text-white",children:"UserName"})]})}),y("div",{children:G("div",{className:"form-floating",children:[y("input",{type:"text",className:"form-control rounded-0  bg-transparent text-white focus-success ",id:"floatingPassword",placeholder:"Password",name:"correo",value:a.correo,onChange:l,onBlur:c}),y("label",{htmlFor:"floatingPassword",className:"text-white ",children:"Direcci\xF3n Email"}),m.correo&&d.correo&&y("div",{className:"text-danger m-3 fs-7",children:d.correo})]})}),y("div",{children:G("div",{className:"form-floating mt-3",children:[y("input",{type:n?"text":"password",className:"form-control rounded-0 bg-transparent text-white",id:"floatingPassword2",placeholder:"Password",name:"nombre",value:a.nombre,onChange:l,onBlur:c}),y("label",{htmlFor:"floatingPassword2",className:"text-white",children:"Password"}),y("div",{className:"position-absolute text-white end-0 my-hover",onClick:i,children:y(ao,{icon:n?rb:nb})}),m.nombre&&d.nombre&&y("div",{className:"text-danger m-3 fs-7",children:d.nombre})]})}),y("button",{type:"submit",className:"btn-dark bg-success text-dark fw-bold rounded w-100 mt-5 p-2 my-hover mb-4 user-select",children:"Registrar"}),e&&y("p",{className:"exito text-success text-center",children:"Te has registrado correctamente!"})]})})})}function wC(){const[e,t]=_.exports.useState(!1),[r,n]=_.exports.useState(!0),o=async l=>{await vC(l.correo,l.nombre)?(window.location.href="/newHome",n(!0)):n(!1)},[i,a]=_.exports.useState(!1),s=()=>{a(!0),a(!i)};return y(ki,{children:y(Db,{initialValues:{nombre:"",correo:""},validate:l=>{let c={};return l.nombre?/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/.test(l.nombre)||(c.nombre="La contrase\xF1a debe tener al entre 6 y 16 caracteres, al menos un d\xEDgito, al menos una min\xFAscula y al menos una may\xFAscula."):c.nombre="Por favor ingresa una contrase\xF1a v\xE1lida",l.correo?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(l.correo)||(c.correo="El correo solo puede contener letras, n\xFAmeros, puntos y guiones bajos"):c.correo="Por favor ingresa un correo electr\xF3nico",c},onSubmit:(l,{resetForm:c})=>{o(l),c(),t(!0),setTimeout(()=>t(!1),3e3)},children:({values:l,handleSubmit:c,handleChange:d,handleBlur:m,errors:u,touched:h})=>G("form",{className:"form m-auto p-4 bg-dark ",onSubmit:c,children:[y("div",{className:"text-center mb-4 text-white p-3",children:y("h3",{children:"Inicia Sesi\xF3n"})}),y("div",{children:G("div",{className:"form-floating",children:[y("input",{type:"text",className:"form-control rounded-0  bg-transparent text-white focus-success ",id:"floatingPassword",placeholder:"Password",name:"correo",value:l.correo,onChange:d,onBlur:m}),y("label",{htmlFor:"floatingPassword",className:"text-white ",children:"Direcci\xF3n Email"}),h.correo&&u.correo&&y("div",{className:"text-danger m-3 fs-7",children:u.correo})]})}),y("div",{children:G("div",{className:"form-floating mt-3",children:[y("input",{type:i?"text":"password",className:"form-control rounded-0 bg-transparent text-white",id:"floatingPassword2",placeholder:"Password",name:"nombre",value:l.nombre,onChange:d,onBlur:m}),y("label",{htmlFor:"floatingPassword2",className:"text-white",children:"Password"}),y("div",{className:"position-absolute text-white end-0 my-hover",onClick:s,children:y(ao,{icon:i?rb:nb})}),h.nombre&&u.nombre&&y("div",{className:"text-danger m-3 fs-7",children:u.nombre})]})}),y("button",{type:"submit",className:"btn-dark bg-success text-dark fw-bold rounded w-100 mt-5 p-2 my-hover mb-4 user-select",children:"Ingresar"}),e&&r&&y("p",{className:"exito text-success text-center",children:"Has ingresado correctamente!"}),e&&!r&&y("p",{className:"exito text-danger text-center",children:"El correo o la contrase\xF1a son incorrectos!"})]})})})}var xC="/assets/logo.768cd2b1.png";function xo(e){return y("li",{className:"nav-item  text-center",children:y(cd,{className:"nav-link active  fs-4 m-1 scale border-my",onClick:e.function,"aria-current":"page",to:e.path,children:e.children})})}function kC(){const[e,t]=_.exports.useState(!1),[r,n]=_.exports.useState(!1),[o,i]=_.exports.useState(!1);window.addEventListener("scroll",function(){document.body.getBoundingClientRect().top<0?t(!0):t(!1)});const a=oo();return _.exports.useEffect(()=>{a.pathname=="/newHome"&&i(!0)},[a]),y("nav",{className:`navbar navbar-expand-lg navbar-dark ${e?"static":"bg-transparent"}`,children:G("div",{className:"container-fluid",children:[y(cd,{to:"/",children:y("img",{src:xC,className:"navbar-brand scale",width:100})}),y("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse",onClick:()=>n(!0),"data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:y("span",{className:"navbar-toggler-icon"})}),y("div",{className:`collapse navbar-collapse justify-content-end ${r?"show":""}`,id:"navbarNav",children:G("ul",{className:"navbar-nav",children:[y(xo,{function:()=>n(!1),path:"/",children:"Home"}),y(xo,{function:()=>n(!1),path:"/services",children:"Services"}),y(xo,{function:()=>n(!1),path:"/register",children:"Register"}),y(xo,{function:()=>n(!1),path:"/login",children:"Login"}),o?y(xo,{function:()=>n(!1),path:"/newFunctions",children:"New Functions"}):null]})})]})})}function _C(){const[e,t]=_.exports.useState(!1),[r,n]=_.exports.useState(!1),[o,i]=_.exports.useState(!1);return G("div",{className:"container text-center text-white mt-4 txt-shadow",children:[y("h2",{children:"Felicidades por loogearte"}),y("h3",{children:"Has desbloqueado las funciones especiales"}),y("p",{className:"bg-dark w-25 m-auto mb-3 mt-3 p-2 rounded",children:"Con este bot\xF3n de abajo puedes eliminar la p\xE1gina"}),y("button",{className:"btn btn-success",onClick:()=>t(!0),children:"Eliminar TODO"}),e&&G("div",{className:"text-center",children:[y("p",{className:"mt-2 text-light",children:"Eh, eh, espera, \xBFen serio quieres eliminarla? \xBFNo te gust\xF3 la p\xE1gina? :("}),y("button",{className:"btn btn-success m-2",onClick:()=>n(!0),children:"No, para nada"}),y("button",{className:"btn btn-success m-2",onClick:()=>{t(!1),window.location.href="/"},children:"S\xED me gust\xF3, perd\xF3n"})]}),r&&G("div",{className:"text-center",children:[y("p",{className:"mt-2 text-light",children:"\xBFCompletamente seguro?"}),y("button",{className:"btn btn-success m-2 w-25",onClick:()=>{i(!0),setTimeout(()=>{window.location.href="/erase"},1e3)},children:"Seguro"})]}),o&&y("div",{className:"text-center",children:y("p",{className:"mt-2 text-light",children:"Ok..."})})]})}function SC(){hC();const[e,t]=_.exports.useState(!0),r=oo();return _.exports.useEffect(()=>{r.pathname=="/erase"&&t(!1)},[r]),e?G("div",{className:"App",children:[y(kC,{}),G(lx,{children:[y(nr,{path:"/",element:y(Sm,{})}),y(nr,{path:"/learnMore",element:y(Ox,{})}),y(nr,{path:"/services",element:y(zx,{})}),y(nr,{path:"/register",element:y(yC,{})}),y(nr,{path:"/login",element:y(wC,{})}),y(nr,{path:"/newHome",element:y(Sm,{})}),y(nr,{path:"/newFunctions",element:y(_C,{})})]})]}):y("div",{className:"container-fluid bg-white h1 text-danger centrar w-100 vh-100 txt-shadow",children:y("h1",{className:"border-bottom",children:"Error 404"})})}Gl.createRoot(document.getElementById("root")).render(y(fg.StrictMode,{children:y(dx,{children:y(SC,{})})}))});export default EC();
