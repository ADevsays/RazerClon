var ay=Object.defineProperty,iy=Object.defineProperties;var sy=Object.getOwnPropertyDescriptors;var rf=Object.getOwnPropertySymbols;var ly=Object.prototype.hasOwnProperty,cy=Object.prototype.propertyIsEnumerable;var nf=(e,t,r)=>t in e?ay(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,of=(e,t)=>{for(var r in t||(t={}))ly.call(t,r)&&nf(e,r,t[r]);if(rf)for(var r of rf(t))cy.call(t,r)&&nf(e,r,t[r]);return e},af=(e,t)=>iy(e,sy(t));var dy=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var SC=dy((Be,Ve)=>{const uy=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};uy();var _={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ga=Symbol.for("react.element"),fy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),hy=Symbol.for("react.provider"),by=Symbol.for("react.context"),vy=Symbol.for("react.forward_ref"),yy=Symbol.for("react.suspense"),wy=Symbol.for("react.memo"),xy=Symbol.for("react.lazy"),sf=Symbol.iterator;function ky(e){return e===null||typeof e!="object"?null:(e=sf&&e[sf]||e["@@iterator"],typeof e=="function"?e:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,sg={};function eo(e,t,r){this.props=e,this.context=t,this.refs=sg,this.updater=r||ag}eo.prototype.isReactComponent={};eo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};eo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lg(){}lg.prototype=eo.prototype;function md(e,t,r){this.props=e,this.context=t,this.refs=sg,this.updater=r||ag}var gd=md.prototype=new lg;gd.constructor=md;ig(gd,eo.prototype);gd.isPureReactComponent=!0;var lf=Array.isArray,cg=Object.prototype.hasOwnProperty,hd={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function ug(e,t,r){var n,o={},a=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)cg.call(t,n)&&!dg.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];o.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:ga,type:e,key:a,ref:i,props:o,_owner:hd.current}}function _y(e,t){return{$$typeof:ga,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bd(e){return typeof e=="object"&&e!==null&&e.$$typeof===ga}function Sy(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var cf=/\/+/g;function Zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sy(""+e.key):t.toString(36)}function ti(e,t,r,n,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ga:case fy:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+Zs(i,0):n,lf(o)?(r="",e!=null&&(r=e.replace(cf,"$&/")+"/"),ti(o,t,r,"",function(c){return c})):o!=null&&(bd(o)&&(o=_y(o,r+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(cf,"$&/")+"/")+e)),t.push(o)),1;if(i=0,n=n===""?".":n+":",lf(e))for(var s=0;s<e.length;s++){a=e[s];var l=n+Zs(a,s);i+=ti(a,t,r,l,o)}else if(l=ky(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=n+Zs(a,s++),i+=ti(a,t,r,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Na(e,t,r){if(e==null)return e;var n=[],o=0;return ti(e,n,"","",function(a){return t.call(r,a,o++)}),n}function Ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Re={current:null},ri={transition:null},Iy={ReactCurrentDispatcher:Re,ReactCurrentBatchConfig:ri,ReactCurrentOwner:hd};V.Children={map:Na,forEach:function(e,t,r){Na(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Na(e,function(){t++}),t},toArray:function(e){return Na(e,function(t){return t})||[]},only:function(e){if(!bd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=eo;V.Fragment=py;V.Profiler=gy;V.PureComponent=md;V.StrictMode=my;V.Suspense=yy;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;V.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ig({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=hd.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)cg.call(t,l)&&!dg.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:ga,type:e.type,key:o,ref:a,props:n,_owner:i}};V.createContext=function(e){return e={$$typeof:by,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hy,_context:e},e.Consumer=e};V.createElement=ug;V.createFactory=function(e){var t=ug.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:vy,render:e}};V.isValidElement=bd;V.lazy=function(e){return{$$typeof:xy,_payload:{_status:-1,_result:e},_init:Ey}};V.memo=function(e,t){return{$$typeof:wy,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=ri.transition;ri.transition={};try{e()}finally{ri.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return Re.current.useCallback(e,t)};V.useContext=function(e){return Re.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Re.current.useDeferredValue(e)};V.useEffect=function(e,t){return Re.current.useEffect(e,t)};V.useId=function(){return Re.current.useId()};V.useImperativeHandle=function(e,t,r){return Re.current.useImperativeHandle(e,t,r)};V.useInsertionEffect=function(e,t){return Re.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Re.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Re.current.useMemo(e,t)};V.useReducer=function(e,t,r){return Re.current.useReducer(e,t,r)};V.useRef=function(e){return Re.current.useRef(e)};V.useState=function(e){return Re.current.useState(e)};V.useSyncExternalStore=function(e,t,r){return Re.current.useSyncExternalStore(e,t,r)};V.useTransition=function(){return Re.current.useTransition()};V.version="18.1.0";_.exports=V;var fg=_.exports,Wl={},pg={exports:{}},Ke={},mg={exports:{}},gg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,j){var F=A.length;A.push(j);e:for(;0<F;){var ne=F-1>>>1,le=A[ne];if(0<o(le,j))A[ne]=j,A[F]=le,F=ne;else break e}}function r(A){return A.length===0?null:A[0]}function n(A){if(A.length===0)return null;var j=A[0],F=A.pop();if(F!==j){A[0]=F;e:for(var ne=0,le=A.length,st=le>>>1;ne<st;){var bt=2*(ne+1)-1,zr=A[bt],vt=bt+1,Mr=A[vt];if(0>o(zr,F))vt<le&&0>o(Mr,zr)?(A[ne]=Mr,A[vt]=F,ne=vt):(A[ne]=zr,A[bt]=F,ne=bt);else if(vt<le&&0>o(Mr,F))A[ne]=Mr,A[vt]=F,ne=vt;else break e}}return j}function o(A,j){var F=A.sortIndex-j.sortIndex;return F!==0?F:A.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],c=[],u=1,p=null,d=3,h=!1,w=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var j=r(c);j!==null;){if(j.callback===null)n(c);else if(j.startTime<=A)n(c),j.sortIndex=j.expirationTime,t(l,j);else break;j=r(c)}}function b(A){if(E=!1,g(A),!w)if(r(l)!==null)w=!0,vn(x);else{var j=r(c);j!==null&&yn(b,j.startTime-A)}}function x(A,j){w=!1,E&&(E=!1,m(I),I=-1),h=!0;var F=d;try{for(g(j),p=r(l);p!==null&&(!(p.expirationTime>j)||A&&!H());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,d=p.priorityLevel;var le=ne(p.expirationTime<=j);j=e.unstable_now(),typeof le=="function"?p.callback=le:p===r(l)&&n(l),g(j)}else n(l);p=r(l)}if(p!==null)var st=!0;else{var bt=r(c);bt!==null&&yn(b,bt.startTime-j),st=!1}return st}finally{p=null,d=F,h=!1}}var T=!1,k=null,I=-1,L=5,D=-1;function H(){return!(e.unstable_now()-D<L)}function he(){if(k!==null){var A=e.unstable_now();D=A;var j=!0;try{j=k(!0,A)}finally{j?Xe():(T=!1,k=null)}}else T=!1}var Xe;if(typeof f=="function")Xe=function(){f(he)};else if(typeof MessageChannel!="undefined"){var Rt=new MessageChannel,Ra=Rt.port2;Rt.port1.onmessage=he,Xe=function(){Ra.postMessage(null)}}else Xe=function(){C(he,0)};function vn(A){k=A,T||(T=!0,Xe())}function yn(A,j){I=C(function(){A(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){w||h||(w=!0,vn(x))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(A){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var F=d;d=j;try{return A()}finally{d=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,j){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=d;d=A;try{return j()}finally{d=F}},e.unstable_scheduleCallback=function(A,j,F){var ne=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ne+F:ne):F=ne,A){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=F+le,A={id:u++,callback:j,priorityLevel:A,startTime:F,expirationTime:le,sortIndex:-1},F>ne?(A.sortIndex=F,t(c,A),r(l)===null&&A===r(c)&&(E?(m(I),I=-1):E=!0,yn(b,F-ne))):(A.sortIndex=le,t(l,A),w||h||(w=!0,vn(x))),A},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(A){var j=d;return function(){var F=d;d=j;try{return A.apply(this,arguments)}finally{d=F}}}})(gg);mg.exports=gg;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=_.exports,Ge=mg.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bg=new Set,Vo={};function cn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Vo[e]=t,e=0;e<t.length;e++)bg.add(t[e])}var Bt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Gl=Object.prototype.hasOwnProperty,Ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,df={},uf={};function Cy(e){return Gl.call(uf,e)?!0:Gl.call(df,e)?!1:Ty.test(e)?uf[e]=!0:(df[e]=!0,!1)}function Ay(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Py(e,t,r,n){if(t===null||typeof t=="undefined"||Ay(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,r,n,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var vd=/[\-:]([a-z])/g;function yd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vd,yd);Se[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vd,yd);Se[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vd,yd);Se[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function wd(e,t,r,n){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Py(t,r,o,n)&&(r=null),n||o===null?Cy(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Qt=hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),xn=Symbol.for("react.portal"),kn=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),vg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),ff=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=ff&&e[ff]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,el;function xo(e){if(el===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);el=t&&t[1]||""}return`
`+el+e}var tl=!1;function rl(e,t){if(!e||tl)return"";tl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),a=n.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{tl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?xo(e):""}function Oy(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kn:return"Fragment";case xn:return"Portal";case Kl:return"Profiler";case xd:return"StrictMode";case Yl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yg:return(e.displayName||"Context")+".Consumer";case vg:return(e._context.displayName||"Context")+".Provider";case kd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _d:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case nr:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function Ry(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function _r(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ny(e){var t=xg(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){n=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ma(e){e._valueTracker||(e._valueTracker=Ny(e))}function kg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=xg(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xl(e,t){var r=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function pf(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=_r(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _g(e,t){t=t.checked,t!=null&&wd(e,"checked",t,!1)}function Jl(e,t){_g(e,t);var r=_r(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,_r(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zl(e,t,r){(t!=="number"||yi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ko=Array.isArray;function Dn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+_r(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ec(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(S(92));if(ko(r)){if(1<r.length)throw Error(S(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:_r(r)}}function Sg(e,t){var r=_r(t.value),n=_r(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function hf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Eg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Eg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var La,Ig=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(La=La||document.createElement("div"),La.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=La.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ho(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zy=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){zy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function Tg(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function Cg(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=Tg(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var My=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rc(e,t){if(t){if(My[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function nc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oc=null;function Sd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ac=null,jn=null,Fn=null;function bf(e){if(e=va(e)){if(typeof ac!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ls(t),ac(e.stateNode,e.type,t))}}function Ag(e){jn?Fn?Fn.push(e):Fn=[e]:jn=e}function Pg(){if(jn){var e=jn,t=Fn;if(Fn=jn=null,bf(e),t)for(e=0;e<t.length;e++)bf(t[e])}}function Og(e,t){return e(t)}function Rg(){}var nl=!1;function Ng(e,t,r){if(nl)return e(t,r);nl=!0;try{return Og(e,t,r)}finally{nl=!1,(jn!==null||Fn!==null)&&(Rg(),Pg())}}function Wo(e,t){var r=e.stateNode;if(r===null)return null;var n=ls(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(S(231,t,typeof r));return r}var ic=!1;if(Bt)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){ic=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{ic=!1}function Ly(e,t,r,n,o,a,i,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Ao=!1,wi=null,xi=!1,sc=null,Dy={onError:function(e){Ao=!0,wi=e}};function jy(e,t,r,n,o,a,i,s,l){Ao=!1,wi=null,Ly.apply(Dy,arguments)}function Fy(e,t,r,n,o,a,i,s,l){if(jy.apply(this,arguments),Ao){if(Ao){var c=wi;Ao=!1,wi=null}else throw Error(S(198));xi||(xi=!0,sc=c)}}function dn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function zg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vf(e){if(dn(e)!==e)throw Error(S(188))}function $y(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var a=o.alternate;if(a===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===r)return vf(o),e;if(a===n)return vf(o),t;a=a.sibling}throw Error(S(188))}if(r.return!==n.return)r=o,n=a;else{for(var i=!1,s=o.child;s;){if(s===r){i=!0,r=o,n=a;break}if(s===n){i=!0,n=o,r=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===r){i=!0,r=a,n=o;break}if(s===n){i=!0,n=a,r=o;break}s=s.sibling}if(!i)throw Error(S(189))}}if(r.alternate!==n)throw Error(S(190))}if(r.tag!==3)throw Error(S(188));return r.stateNode.current===r?e:t}function Mg(e){return e=$y(e),e!==null?Lg(e):null}function Lg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lg(e);if(t!==null)return t;e=e.sibling}return null}var Dg=Ge.unstable_scheduleCallback,yf=Ge.unstable_cancelCallback,Uy=Ge.unstable_shouldYield,By=Ge.unstable_requestPaint,de=Ge.unstable_now,Vy=Ge.unstable_getCurrentPriorityLevel,Ed=Ge.unstable_ImmediatePriority,jg=Ge.unstable_UserBlockingPriority,ki=Ge.unstable_NormalPriority,Hy=Ge.unstable_LowPriority,Fg=Ge.unstable_IdlePriority,os=null,_t=null;function Wy(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(os,e,void 0,(e.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:Yy,Gy=Math.log,Ky=Math.LN2;function Yy(e){return e>>>=0,e===0?32:31-(Gy(e)/Ky|0)|0}var Da=64,ja=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,a=e.pingedLanes,i=r&268435455;if(i!==0){var s=i&~o;s!==0?n=_o(s):(a&=i,a!==0&&(n=_o(a)))}else i=r&~o,i!==0?n=_o(i):a!==0&&(n=_o(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&o)===0&&(o=n&-n,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-mt(t),o=1<<r,n|=e[r],t&=~o;return n}function qy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qy(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-mt(a),s=1<<i,l=o[i];l===-1?((s&r)===0||(s&n)!==0)&&(o[i]=qy(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $g(){var e=Da;return Da<<=1,(Da&4194240)===0&&(Da=64),e}function ol(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ha(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-mt(t),e[t]=r}function Xy(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-mt(r),a=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~a}}function Id(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-mt(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Y=0;function Ug(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bg,Td,Vg,Hg,Wg,cc=!1,Fa=[],gr=null,hr=null,br=null,Go=new Map,Ko=new Map,ir=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(e,t){switch(e){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function fo(e,t,r,n,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[o]},t!==null&&(t=va(t),t!==null&&Td(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zy(e,t,r,n,o){switch(t){case"focusin":return gr=fo(gr,e,t,r,n,o),!0;case"dragenter":return hr=fo(hr,e,t,r,n,o),!0;case"mouseover":return br=fo(br,e,t,r,n,o),!0;case"pointerover":var a=o.pointerId;return Go.set(a,fo(Go.get(a)||null,e,t,r,n,o)),!0;case"gotpointercapture":return a=o.pointerId,Ko.set(a,fo(Ko.get(a)||null,e,t,r,n,o)),!0}return!1}function Gg(e){var t=Ur(e.target);if(t!==null){var r=dn(t);if(r!==null){if(t=r.tag,t===13){if(t=zg(r),t!==null){e.blockedOn=t,Wg(e.priority,function(){Vg(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ni(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=dc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);oc=n,r.target.dispatchEvent(n),oc=null}else return t=va(r),t!==null&&Td(t),e.blockedOn=r,!1;t.shift()}return!0}function xf(e,t,r){ni(e)&&r.delete(t)}function e1(){cc=!1,gr!==null&&ni(gr)&&(gr=null),hr!==null&&ni(hr)&&(hr=null),br!==null&&ni(br)&&(br=null),Go.forEach(xf),Ko.forEach(xf)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,cc||(cc=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,e1)))}function Yo(e){function t(o){return po(o,e)}if(0<Fa.length){po(Fa[0],e);for(var r=1;r<Fa.length;r++){var n=Fa[r];n.blockedOn===e&&(n.blockedOn=null)}}for(gr!==null&&po(gr,e),hr!==null&&po(hr,e),br!==null&&po(br,e),Go.forEach(t),Ko.forEach(t),r=0;r<ir.length;r++)n=ir[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ir.length&&(r=ir[0],r.blockedOn===null);)Gg(r),r.blockedOn===null&&ir.shift()}var $n=Qt.ReactCurrentBatchConfig,Si=!0;function t1(e,t,r,n){var o=Y,a=$n.transition;$n.transition=null;try{Y=1,Cd(e,t,r,n)}finally{Y=o,$n.transition=a}}function r1(e,t,r,n){var o=Y,a=$n.transition;$n.transition=null;try{Y=4,Cd(e,t,r,n)}finally{Y=o,$n.transition=a}}function Cd(e,t,r,n){if(Si){var o=dc(e,t,r,n);if(o===null)ml(e,t,n,Ei,r),wf(e,n);else if(Zy(o,e,t,r,n))n.stopPropagation();else if(wf(e,n),t&4&&-1<Jy.indexOf(e)){for(;o!==null;){var a=va(o);if(a!==null&&Bg(a),a=dc(e,t,r,n),a===null&&ml(e,t,n,Ei,r),a===o)break;o=a}o!==null&&n.stopPropagation()}else ml(e,t,n,null,r)}}var Ei=null;function dc(e,t,r,n){if(Ei=null,e=Sd(n),e=Ur(e),e!==null)if(t=dn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=zg(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ei=e,null}function Kg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vy()){case Ed:return 1;case jg:return 4;case ki:case Hy:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var fr=null,Ad=null,oi=null;function Yg(){if(oi)return oi;var e,t=Ad,r=t.length,n,o="value"in fr?fr.value:fr.textContent,a=o.length;for(e=0;e<r&&t[e]===o[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===o[a-n];n++);return oi=o.slice(e,1<n?1-n:void 0)}function ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $a(){return!0}function kf(){return!1}function Ye(e){function t(r,n,o,a,i){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$a:kf,this.isPropagationStopped=kf,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),t}var to={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Ye(to),ba=se({},to,{view:0,detail:0}),n1=Ye(ba),al,il,mo,as=se({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Od,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(al=e.screenX-mo.screenX,il=e.screenY-mo.screenY):il=al=0,mo=e),al)},movementY:function(e){return"movementY"in e?e.movementY:il}}),_f=Ye(as),o1=se({},as,{dataTransfer:0}),a1=Ye(o1),i1=se({},ba,{relatedTarget:0}),sl=Ye(i1),s1=se({},to,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=Ye(s1),c1=se({},to,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),d1=Ye(c1),u1=se({},to,{data:0}),Sf=Ye(u1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m1[e])?!!t[e]:!1}function Od(){return g1}var h1=se({},ba,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Od,charCode:function(e){return e.type==="keypress"?ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b1=Ye(h1),v1=se({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=Ye(v1),y1=se({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Od}),w1=Ye(y1),x1=se({},to,{propertyName:0,elapsedTime:0,pseudoElement:0}),k1=Ye(x1),_1=se({},as,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),S1=Ye(_1),E1=[9,13,27,32],Rd=Bt&&"CompositionEvent"in window,Po=null;Bt&&"documentMode"in document&&(Po=document.documentMode);var I1=Bt&&"TextEvent"in window&&!Po,qg=Bt&&(!Rd||Po&&8<Po&&11>=Po),If=String.fromCharCode(32),Tf=!1;function Qg(e,t){switch(e){case"keyup":return E1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function T1(e,t){switch(e){case"compositionend":return Xg(t);case"keypress":return t.which!==32?null:(Tf=!0,If);case"textInput":return e=t.data,e===If&&Tf?null:e;default:return null}}function C1(e,t){if(_n)return e==="compositionend"||!Rd&&Qg(e,t)?(e=Yg(),oi=Ad=fr=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qg&&t.locale!=="ko"?null:t.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A1[e.type]:t==="textarea"}function Jg(e,t,r,n){Ag(n),t=Ii(t,"onChange"),0<t.length&&(r=new Pd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Oo=null,qo=null;function P1(e){ch(e,0)}function is(e){var t=In(e);if(kg(t))return e}function O1(e,t){if(e==="change")return t}var Zg=!1;if(Bt){var ll;if(Bt){var cl="oninput"in document;if(!cl){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),cl=typeof Af.oninput=="function"}ll=cl}else ll=!1;Zg=ll&&(!document.documentMode||9<document.documentMode)}function Pf(){Oo&&(Oo.detachEvent("onpropertychange",eh),qo=Oo=null)}function eh(e){if(e.propertyName==="value"&&is(qo)){var t=[];Jg(t,qo,e,Sd(e)),Ng(P1,t)}}function R1(e,t,r){e==="focusin"?(Pf(),Oo=t,qo=r,Oo.attachEvent("onpropertychange",eh)):e==="focusout"&&Pf()}function N1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(qo)}function z1(e,t){if(e==="click")return is(t)}function M1(e,t){if(e==="input"||e==="change")return is(t)}function L1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:L1;function Qo(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Gl.call(t,o)||!gt(e[o],t[o]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rf(e,t){var r=Of(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Of(r)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rh(){for(var e=window,t=yi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=yi(e.document)}return t}function Nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D1(e){var t=rh(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&th(r.ownerDocument.documentElement,r)){if(n!==null&&Nd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,a=Math.min(n.start,o);n=n.end===void 0?a:Math.min(n.end,o),!e.extend&&a>n&&(o=n,n=a,a=o),o=Rf(r,a);var i=Rf(r,n);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j1=Bt&&"documentMode"in document&&11>=document.documentMode,Sn=null,uc=null,Ro=null,fc=!1;function Nf(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fc||Sn==null||Sn!==yi(n)||(n=Sn,"selectionStart"in n&&Nd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ro&&Qo(Ro,n)||(Ro=n,n=Ii(uc,"onSelect"),0<n.length&&(t=new Pd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Sn)))}function Ua(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var En={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},dl={},nh={};Bt&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ss(e){if(dl[e])return dl[e];if(!En[e])return e;var t=En[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in nh)return dl[e]=t[r];return e}var oh=ss("animationend"),ah=ss("animationiteration"),ih=ss("animationstart"),sh=ss("transitionend"),lh=new Map,zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){lh.set(e,t),cn(t,[e])}for(var ul=0;ul<zf.length;ul++){var fl=zf[ul],F1=fl.toLowerCase(),$1=fl[0].toUpperCase()+fl.slice(1);Ar(F1,"on"+$1)}Ar(oh,"onAnimationEnd");Ar(ah,"onAnimationIteration");Ar(ih,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(sh,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U1=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Mf(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Fy(n,t,void 0,e),e.currentTarget=null}function ch(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;Mf(o,s,c),a=l}else for(i=0;i<n.length;i++){if(s=n[i],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;Mf(o,s,c),a=l}}}if(xi)throw e=sc,xi=!1,sc=null,e}function Z(e,t){var r=t[bc];r===void 0&&(r=t[bc]=new Set);var n=e+"__bubble";r.has(n)||(dh(t,e,2,!1),r.add(n))}function pl(e,t,r){var n=0;t&&(n|=4),dh(r,e,n,t)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[Ba]){e[Ba]=!0,bg.forEach(function(r){r!=="selectionchange"&&(U1.has(r)||pl(r,!1,e),pl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ba]||(t[Ba]=!0,pl("selectionchange",!1,t))}}function dh(e,t,r,n){switch(Kg(t)){case 1:var o=t1;break;case 4:o=r1;break;default:o=Cd}r=o.bind(null,t,r,e),o=void 0,!ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function ml(e,t,r,n,o){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=n.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Ur(s),i===null)return;if(l=i.tag,l===5||l===6){n=a=i;continue e}s=s.parentNode}}n=n.return}Ng(function(){var c=a,u=Sd(r),p=[];e:{var d=lh.get(e);if(d!==void 0){var h=Pd,w=e;switch(e){case"keypress":if(ai(r)===0)break e;case"keydown":case"keyup":h=b1;break;case"focusin":w="focus",h=sl;break;case"focusout":w="blur",h=sl;break;case"beforeblur":case"afterblur":h=sl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=w1;break;case oh:case ah:case ih:h=l1;break;case sh:h=k1;break;case"scroll":h=n1;break;case"wheel":h=S1;break;case"copy":case"cut":case"paste":h=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Ef}var E=(t&4)!==0,C=!E&&e==="scroll",m=E?d!==null?d+"Capture":null:d;E=[];for(var f=c,g;f!==null;){g=f;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,m!==null&&(b=Wo(f,m),b!=null&&E.push(Jo(f,b,g)))),C)break;f=f.return}0<E.length&&(d=new h(d,w,null,r,u),p.push({event:d,listeners:E}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&r!==oc&&(w=r.relatedTarget||r.fromElement)&&(Ur(w)||w[Vt]))break e;if((h||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,h?(w=r.relatedTarget||r.toElement,h=c,w=w?Ur(w):null,w!==null&&(C=dn(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(h=null,w=c),h!==w)){if(E=_f,b="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ef,b="onPointerLeave",m="onPointerEnter",f="pointer"),C=h==null?d:In(h),g=w==null?d:In(w),d=new E(b,f+"leave",h,r,u),d.target=C,d.relatedTarget=g,b=null,Ur(u)===c&&(E=new E(m,f+"enter",w,r,u),E.target=g,E.relatedTarget=C,b=E),C=b,h&&w)t:{for(E=h,m=w,f=0,g=E;g;g=wn(g))f++;for(g=0,b=m;b;b=wn(b))g++;for(;0<f-g;)E=wn(E),f--;for(;0<g-f;)m=wn(m),g--;for(;f--;){if(E===m||m!==null&&E===m.alternate)break t;E=wn(E),m=wn(m)}E=null}else E=null;h!==null&&Lf(p,d,h,E,!1),w!==null&&C!==null&&Lf(p,C,w,E,!0)}}e:{if(d=c?In(c):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var x=O1;else if(Cf(d))if(Zg)x=M1;else{x=N1;var T=R1}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=z1);if(x&&(x=x(e,c))){Jg(p,x,r,u);break e}T&&T(e,d,c),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Zl(d,"number",d.value)}switch(T=c?In(c):window,e){case"focusin":(Cf(T)||T.contentEditable==="true")&&(Sn=T,uc=c,Ro=null);break;case"focusout":Ro=uc=Sn=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Nf(p,r,u);break;case"selectionchange":if(j1)break;case"keydown":case"keyup":Nf(p,r,u)}var k;if(Rd)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else _n?Qg(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(qg&&r.locale!=="ko"&&(_n||I!=="onCompositionStart"?I==="onCompositionEnd"&&_n&&(k=Yg()):(fr=u,Ad="value"in fr?fr.value:fr.textContent,_n=!0)),T=Ii(c,I),0<T.length&&(I=new Sf(I,e,null,r,u),p.push({event:I,listeners:T}),k?I.data=k:(k=Xg(r),k!==null&&(I.data=k)))),(k=I1?T1(e,r):C1(e,r))&&(c=Ii(c,"onBeforeInput"),0<c.length&&(u=new Sf("onBeforeInput","beforeinput",null,r,u),p.push({event:u,listeners:c}),u.data=k))}ch(p,t)})}function Jo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ii(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Wo(e,r),a!=null&&n.unshift(Jo(e,a,o)),a=Wo(e,t),a!=null&&n.push(Jo(e,a,o))),e=e.return}return n}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lf(e,t,r,n,o){for(var a=t._reactName,i=[];r!==null&&r!==n;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&c!==null&&(s=c,o?(l=Wo(r,a),l!=null&&i.unshift(Jo(r,l,s))):o||(l=Wo(r,a),l!=null&&i.push(Jo(r,l,s)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var B1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function Df(e){return(typeof e=="string"?e:""+e).replace(B1,`
`).replace(V1,"")}function Va(e,t,r){if(t=Df(t),Df(e)!==t&&r)throw Error(S(425))}function Ti(){}var pc=null,mc=null;function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hc=typeof setTimeout=="function"?setTimeout:void 0,H1=typeof clearTimeout=="function"?clearTimeout:void 0,jf=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof jf!="undefined"?function(e){return jf.resolve(null).then(e).catch(G1)}:hc;function G1(e){setTimeout(function(){throw e})}function gl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Yo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Yo(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ff(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var ro=Math.random().toString(36).slice(2),xt="__reactFiber$"+ro,Zo="__reactProps$"+ro,Vt="__reactContainer$"+ro,bc="__reactEvents$"+ro,K1="__reactListeners$"+ro,Y1="__reactHandles$"+ro;function Ur(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Vt]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Ff(e);e!==null;){if(r=e[xt])return r;e=Ff(e)}return t}e=r,r=e.parentNode}return null}function va(e){return e=e[xt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ls(e){return e[Zo]||null}var vc=[],Tn=-1;function Pr(e){return{current:e}}function te(e){0>Tn||(e.current=vc[Tn],vc[Tn]=null,Tn--)}function J(e,t){Tn++,vc[Tn]=e.current,e.current=t}var Sr={},Ce=Pr(Sr),De=Pr(!1),qr=Sr;function Kn(e,t){var r=e.type.contextTypes;if(!r)return Sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in r)o[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function Ci(){te(De),te(Ce)}function $f(e,t,r){if(Ce.current!==Sr)throw Error(S(168));J(Ce,t),J(De,r)}function uh(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(S(108,Ry(e)||"Unknown",o));return se({},r,n)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,qr=Ce.current,J(Ce,e),J(De,De.current),!0}function Uf(e,t,r){var n=e.stateNode;if(!n)throw Error(S(169));r?(e=uh(e,t,qr),n.__reactInternalMemoizedMergedChildContext=e,te(De),te(Ce),J(Ce,e)):te(De),J(De,r)}var Mt=null,cs=!1,hl=!1;function fh(e){Mt===null?Mt=[e]:Mt.push(e)}function q1(e){cs=!0,fh(e)}function Or(){if(!hl&&Mt!==null){hl=!0;var e=0,t=Y;try{var r=Mt;for(Y=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Mt=null,cs=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),Dg(Ed,Or),o}finally{Y=t,hl=!1}}return null}var Q1=Qt.ReactCurrentBatchConfig;function ct(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Pi=Pr(null),Oi=null,Cn=null,zd=null;function Md(){zd=Cn=Oi=null}function Ld(e){var t=Pi.current;te(Pi),e._currentValue=t}function yc(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Un(e,t){Oi=e,zd=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Le=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(zd!==e)if(e={context:e,memoizedValue:t,next:null},Cn===null){if(Oi===null)throw Error(S(308));Cn=e,Oi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return t}var ft=null,or=!1;function Dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ph(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vr(e,t){var r=e.updateQueue;r!==null&&(r=r.shared,rb(e)?(e=r.interleaved,e===null?(t.next=t,ft===null?ft=[r]:ft.push(r)):(t.next=e.next,e.next=t),r.interleaved=t):(e=r.pending,e===null?t.next=t:(t.next=e.next,e.next=t),r.pending=t))}function ii(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Id(e,r)}}function Bf(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?o=a=i:a=a.next=i,r=r.next}while(r!==null);a===null?o=a=t:a=a.next=t}else o=a=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ri(e,t,r,n){var o=e.updateQueue;or=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,c=l.next;l.next=null,i===null?a=c:i.next=c,i=l;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==i&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var p=o.baseState;i=0,u=c=l=null,s=a;do{var d=s.lane,h=s.eventTime;if((n&d)===d){u!==null&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,E=s;switch(d=t,h=r,E.tag){case 1:if(w=E.payload,typeof w=="function"){p=w.call(h,p,d);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=E.payload,d=typeof w=="function"?w.call(h,p,d):w,d==null)break e;p=se({},p,d);break e;case 2:or=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[s]:d.push(s))}else h={eventTime:h,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=h,l=p):u=u.next=h,i|=d;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;d=s,s=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(1);if(u===null&&(l=p),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Jr|=i,e.lanes=i,e.memoizedState=p}}function Vf(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(S(191,o));o.call(n)}}}var mh=new hg.Component().refs;function wc(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ds={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Oe(),o=wr(e),a=Ut(n,o);a.payload=t,r!=null&&(a.callback=r),vr(e,a),t=nt(e,o,n),t!==null&&ii(t,e,o)},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Oe(),o=wr(e),a=Ut(n,o);a.tag=1,a.payload=t,r!=null&&(a.callback=r),vr(e,a),t=nt(e,o,n),t!==null&&ii(t,e,o)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Oe(),n=wr(e),o=Ut(r,n);o.tag=2,t!=null&&(o.callback=t),vr(e,o),t=nt(e,n,r),t!==null&&ii(t,e,n)}};function Hf(e,t,r,n,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,i):t.prototype&&t.prototype.isPureReactComponent?!Qo(r,n)||!Qo(o,a):!0}function gh(e,t,r){var n=!1,o=Sr,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(o=je(t)?qr:Ce.current,n=t.contextTypes,a=(n=n!=null)?Kn(e,o):Sr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ds,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Wf(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ds.enqueueReplaceState(t,t.state,null)}function xc(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=mh,Dd(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=at(a):(a=je(t)?qr:Ce.current,o.context=Kn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(wc(e,t,a,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ds.enqueueReplaceState(o,o.state,null),Ri(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}var An=[],Pn=0,Ni=null,zi=0,Ze=[],et=0,Qr=null,Dt=1,jt="";function Dr(e,t){An[Pn++]=zi,An[Pn++]=Ni,Ni=e,zi=t}function hh(e,t,r){Ze[et++]=Dt,Ze[et++]=jt,Ze[et++]=Qr,Qr=e;var n=Dt;e=jt;var o=32-mt(n)-1;n&=~(1<<o),r+=1;var a=32-mt(t)+o;if(30<a){var i=o-o%5;a=(n&(1<<i)-1).toString(32),n>>=i,o-=i,Dt=1<<32-mt(t)+o|r<<o|n,jt=a+e}else Dt=1<<a|r<<o|n,jt=e}function jd(e){e.return!==null&&(Dr(e,1),hh(e,1,0))}function Fd(e){for(;e===Ni;)Ni=An[--Pn],An[Pn]=null,zi=An[--Pn],An[Pn]=null;for(;e===Qr;)Qr=Ze[--et],Ze[et]=null,jt=Ze[--et],Ze[et]=null,Dt=Ze[--et],Ze[et]=null}var He=null,Me=null,oe=!1,ut=null;function bh(e,t){var r=tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Gf(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Me=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Qr!==null?{id:Dt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,He=e,Me=null,!0):!1;default:return!1}}function kc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _c(e){if(oe){var t=Me;if(t){var r=t;if(!Gf(e,t)){if(kc(e))throw Error(S(418));t=Lt(r.nextSibling);var n=He;t&&Gf(e,t)?bh(n,r):(e.flags=e.flags&-4097|2,oe=!1,He=e)}}else{if(kc(e))throw Error(S(418));e.flags=e.flags&-4097|2,oe=!1,He=e}}}function Kf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function go(e){if(e!==He)return!1;if(!oe)return Kf(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gc(e.type,e.memoizedProps)),t&&(t=Me)){if(kc(e)){for(e=Me;e;)e=Lt(e.nextSibling);throw Error(S(418))}for(;t;)bh(e,t),t=Lt(t.nextSibling)}if(Kf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Me=Lt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=He?Lt(e.stateNode.nextSibling):null;return!0}function Yn(){Me=He=null,oe=!1}function $d(e){ut===null?ut=[e]:ut.push(e)}function ho(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(S(309));var n=r.stateNode}if(!n)throw Error(S(147,e));var o=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===mh&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!r._owner)throw Error(S(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yf(e){var t=e._init;return t(e._payload)}function vh(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function r(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function n(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=Er(m,f),m.index=0,m.sibling=null,m}function a(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function i(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,f,g,b){return f===null||f.tag!==6?(f=kl(g,m.mode,b),f.return=m,f):(f=o(f,g),f.return=m,f)}function l(m,f,g,b){var x=g.type;return x===kn?u(m,f,g.props.children,b,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nr&&Yf(x)===f.type)?(b=o(f,g.props),b.ref=ho(m,f,g),b.return=m,b):(b=ui(g.type,g.key,g.props,null,m.mode,b),b.ref=ho(m,f,g),b.return=m,b)}function c(m,f,g,b){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=_l(g,m.mode,b),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function u(m,f,g,b,x){return f===null||f.tag!==7?(f=Kr(g,m.mode,b,x),f.return=m,f):(f=o(f,g),f.return=m,f)}function p(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=kl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case za:return g=ui(f.type,f.key,f.props,null,m.mode,g),g.ref=ho(m,null,f),g.return=m,g;case xn:return f=_l(f,m.mode,g),f.return=m,f;case nr:var b=f._init;return p(m,b(f._payload),g)}if(ko(f)||co(f))return f=Kr(f,m.mode,g,null),f.return=m,f;Ha(m,f)}return null}function d(m,f,g,b){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:s(m,f,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case za:return g.key===x?l(m,f,g,b):null;case xn:return g.key===x?c(m,f,g,b):null;case nr:return x=g._init,d(m,f,x(g._payload),b)}if(ko(g)||co(g))return x!==null?null:u(m,f,g,b,null);Ha(m,g)}return null}function h(m,f,g,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(g)||null,s(f,m,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case za:return m=m.get(b.key===null?g:b.key)||null,l(f,m,b,x);case xn:return m=m.get(b.key===null?g:b.key)||null,c(f,m,b,x);case nr:var T=b._init;return h(m,f,g,T(b._payload),x)}if(ko(b)||co(b))return m=m.get(g)||null,u(f,m,b,x,null);Ha(f,b)}return null}function w(m,f,g,b){for(var x=null,T=null,k=f,I=f=0,L=null;k!==null&&I<g.length;I++){k.index>I?(L=k,k=null):L=k.sibling;var D=d(m,k,g[I],b);if(D===null){k===null&&(k=L);break}e&&k&&D.alternate===null&&t(m,k),f=a(D,f,I),T===null?x=D:T.sibling=D,T=D,k=L}if(I===g.length)return r(m,k),oe&&Dr(m,I),x;if(k===null){for(;I<g.length;I++)k=p(m,g[I],b),k!==null&&(f=a(k,f,I),T===null?x=k:T.sibling=k,T=k);return oe&&Dr(m,I),x}for(k=n(m,k);I<g.length;I++)L=h(k,m,I,g[I],b),L!==null&&(e&&L.alternate!==null&&k.delete(L.key===null?I:L.key),f=a(L,f,I),T===null?x=L:T.sibling=L,T=L);return e&&k.forEach(function(H){return t(m,H)}),oe&&Dr(m,I),x}function E(m,f,g,b){var x=co(g);if(typeof x!="function")throw Error(S(150));if(g=x.call(g),g==null)throw Error(S(151));for(var T=x=null,k=f,I=f=0,L=null,D=g.next();k!==null&&!D.done;I++,D=g.next()){k.index>I?(L=k,k=null):L=k.sibling;var H=d(m,k,D.value,b);if(H===null){k===null&&(k=L);break}e&&k&&H.alternate===null&&t(m,k),f=a(H,f,I),T===null?x=H:T.sibling=H,T=H,k=L}if(D.done)return r(m,k),oe&&Dr(m,I),x;if(k===null){for(;!D.done;I++,D=g.next())D=p(m,D.value,b),D!==null&&(f=a(D,f,I),T===null?x=D:T.sibling=D,T=D);return oe&&Dr(m,I),x}for(k=n(m,k);!D.done;I++,D=g.next())D=h(k,m,I,D.value,b),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?I:D.key),f=a(D,f,I),T===null?x=D:T.sibling=D,T=D);return e&&k.forEach(function(he){return t(m,he)}),oe&&Dr(m,I),x}function C(m,f,g,b){if(typeof g=="object"&&g!==null&&g.type===kn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case za:e:{for(var x=g.key,T=f;T!==null;){if(T.key===x){if(x=g.type,x===kn){if(T.tag===7){r(m,T.sibling),f=o(T,g.props.children),f.return=m,m=f;break e}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===nr&&Yf(x)===T.type){r(m,T.sibling),f=o(T,g.props),f.ref=ho(m,T,g),f.return=m,m=f;break e}r(m,T);break}else t(m,T);T=T.sibling}g.type===kn?(f=Kr(g.props.children,m.mode,b,g.key),f.return=m,m=f):(b=ui(g.type,g.key,g.props,null,m.mode,b),b.ref=ho(m,f,g),b.return=m,m=b)}return i(m);case xn:e:{for(T=g.key;f!==null;){if(f.key===T)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){r(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{r(m,f);break}else t(m,f);f=f.sibling}f=_l(g,m.mode,b),f.return=m,m=f}return i(m);case nr:return T=g._init,C(m,f,T(g._payload),b)}if(ko(g))return w(m,f,g,b);if(co(g))return E(m,f,g,b);Ha(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(r(m,f.sibling),f=o(f,g),f.return=m,m=f):(r(m,f),f=kl(g,m.mode,b),f.return=m,m=f),i(m)):r(m,f)}return C}var qn=vh(!0),yh=vh(!1),ya={},St=Pr(ya),ea=Pr(ya),ta=Pr(ya);function Br(e){if(e===ya)throw Error(S(174));return e}function Ud(e,t){switch(J(ta,t),J(ea,e),J(St,ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:tc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=tc(t,e)}te(St),J(St,t)}function Qn(){te(St),te(ea),te(ta)}function wh(e){Br(ta.current);var t=Br(St.current),r=tc(t,e.type);t!==r&&(J(ea,e),J(St,r))}function Bd(e){ea.current===e&&(te(St),te(ea))}var ae=Pr(0);function Mi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bl=[];function Vd(){for(var e=0;e<bl.length;e++)bl[e]._workInProgressVersionPrimary=null;bl.length=0}var si=Qt.ReactCurrentDispatcher,vl=Qt.ReactCurrentBatchConfig,Xr=0,ie=null,pe=null,ve=null,Li=!1,No=!1,ra=0,X1=0;function Ee(){throw Error(S(321))}function Hd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!gt(e[r],t[r]))return!1;return!0}function Wd(e,t,r,n,o,a){if(Xr=a,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,si.current=e===null||e.memoizedState===null?tw:rw,e=r(n,o),No){a=0;do{if(No=!1,ra=0,25<=a)throw Error(S(301));a+=1,ve=pe=null,t.updateQueue=null,si.current=nw,e=r(n,o)}while(No)}if(si.current=Di,t=pe!==null&&pe.next!==null,Xr=0,ve=pe=ie=null,Li=!1,t)throw Error(S(300));return e}function Gd(){var e=ra!==0;return ra=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function it(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function na(e,t){return typeof t=="function"?t(e):t}function yl(e){var t=it(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=pe,o=n.baseQueue,a=r.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}n.baseQueue=o=a,r.pending=null}if(o!==null){a=o.next,n=n.baseState;var s=i=null,l=null,c=a;do{var u=c.lane;if((Xr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var p={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,i=n):l=l.next=p,ie.lanes|=u,Jr|=u}c=c.next}while(c!==null&&c!==a);l===null?i=n:l.next=s,gt(n,t.memoizedState)||(Le=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do a=o.lane,ie.lanes|=a,Jr|=a,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function wl(e){var t=it(),r=t.queue;if(r===null)throw Error(S(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,a=t.memoizedState;if(o!==null){r.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);gt(a,t.memoizedState)||(Le=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function xh(){}function kh(e,t){var r=ie,n=it(),o=t(),a=!gt(n.memoizedState,o);if(a&&(n.memoizedState=o,Le=!0),n=n.queue,Kd(Eh.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ve!==null&&ve.memoizedState.tag&1){if(r.flags|=2048,oa(9,Sh.bind(null,r,n,o,t),void 0,null),ge===null)throw Error(S(349));(Xr&30)!==0||_h(r,t,o)}return o}function _h(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Sh(e,t,r,n){t.value=r,t.getSnapshot=n,Ih(t)&&nt(e,1,-1)}function Eh(e,t,r){return r(function(){Ih(t)&&nt(e,1,-1)})}function Ih(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!gt(e,r)}catch{return!0}}function qf(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},t.queue=e,e=e.dispatch=ew.bind(null,ie,e),[t.memoizedState,e]}function oa(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Th(){return it().memoizedState}function li(e,t,r,n){var o=wt();ie.flags|=e,o.memoizedState=oa(1|t,r,void 0,n===void 0?null:n)}function us(e,t,r,n){var o=it();n=n===void 0?null:n;var a=void 0;if(pe!==null){var i=pe.memoizedState;if(a=i.destroy,n!==null&&Hd(n,i.deps)){o.memoizedState=oa(t,r,a,n);return}}ie.flags|=e,o.memoizedState=oa(1|t,r,a,n)}function Qf(e,t){return li(8390656,8,e,t)}function Kd(e,t){return us(2048,8,e,t)}function Ch(e,t){return us(4,2,e,t)}function Ah(e,t){return us(4,4,e,t)}function Ph(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oh(e,t,r){return r=r!=null?r.concat([e]):null,us(4,4,Ph.bind(null,t,e),r)}function Yd(){}function Rh(e,t){var r=it();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Nh(e,t){var r=it();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Hd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function zh(e,t,r){return(Xr&21)===0?(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=r):(gt(r,t)||(r=$g(),ie.lanes|=r,Jr|=r,e.baseState=!0),t)}function J1(e,t){var r=Y;Y=r!==0&&4>r?r:4,e(!0);var n=vl.transition;vl.transition={};try{e(!1),t()}finally{Y=r,vl.transition=n}}function Mh(){return it().memoizedState}function Z1(e,t,r){var n=wr(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Lh(e)?Dh(t,r):(jh(e,t,r),r=Oe(),e=nt(e,n,r),e!==null&&Fh(e,t,n))}function ew(e,t,r){var n=wr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lh(e))Dh(t,o);else{jh(e,t,o);var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,r);if(o.hasEagerState=!0,o.eagerState=s,gt(s,i))return}catch{}finally{}r=Oe(),e=nt(e,n,r),e!==null&&Fh(e,t,n)}}function Lh(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function Dh(e,t){No=Li=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function jh(e,t,r){rb(e)?(e=t.interleaved,e===null?(r.next=r,ft===null?ft=[t]:ft.push(t)):(r.next=e.next,e.next=r),t.interleaved=r):(e=t.pending,e===null?r.next=r:(r.next=e.next,e.next=r),t.pending=r)}function Fh(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Id(e,r)}}var Di={readContext:at,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},tw={readContext:at,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Qf,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,li(4194308,4,Ph.bind(null,t,e),r)},useLayoutEffect:function(e,t){return li(4194308,4,e,t)},useInsertionEffect:function(e,t){return li(4,2,e,t)},useMemo:function(e,t){var r=wt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=wt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Z1.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:qf,useDebugValue:Yd,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=qf(!1),t=e[0];return e=J1.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ie,o=wt();if(oe){if(r===void 0)throw Error(S(407));r=r()}else{if(r=t(),ge===null)throw Error(S(349));(Xr&30)!==0||_h(n,t,r)}o.memoizedState=r;var a={value:r,getSnapshot:t};return o.queue=a,Qf(Eh.bind(null,n,a,e),[e]),n.flags|=2048,oa(9,Sh.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=wt(),t=ge.identifierPrefix;if(oe){var r=jt,n=Dt;r=(n&~(1<<32-mt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ra++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=X1++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rw={readContext:at,useCallback:Rh,useContext:at,useEffect:Kd,useImperativeHandle:Oh,useInsertionEffect:Ch,useLayoutEffect:Ah,useMemo:Nh,useReducer:yl,useRef:Th,useState:function(){return yl(na)},useDebugValue:Yd,useDeferredValue:function(e){var t=it();return zh(t,pe.memoizedState,e)},useTransition:function(){var e=yl(na)[0],t=it().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:kh,useId:Mh,unstable_isNewReconciler:!1},nw={readContext:at,useCallback:Rh,useContext:at,useEffect:Kd,useImperativeHandle:Oh,useInsertionEffect:Ch,useLayoutEffect:Ah,useMemo:Nh,useReducer:wl,useRef:Th,useState:function(){return wl(na)},useDebugValue:Yd,useDeferredValue:function(e){var t=it();return pe===null?t.memoizedState=e:zh(t,pe.memoizedState,e)},useTransition:function(){var e=wl(na)[0],t=it().memoizedState;return[e,t]},useMutableSource:xh,useSyncExternalStore:kh,useId:Mh,unstable_isNewReconciler:!1};function qd(e,t){try{var r="",n=t;do r+=Oy(n),n=n.return;while(n);var o=r}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o}}function Sc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var ow=typeof WeakMap=="function"?WeakMap:Map;function $h(e,t,r){r=Ut(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Fi||(Fi=!0,Nc=n),Sc(e,t)},r}function Uh(e,t,r){r=Ut(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){Sc(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Sc(e,t),typeof n!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function Xf(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new ow;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=bw.bind(null,e,t,r),t.then(e,e))}function Jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zf(e,t,r,n,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Ut(-1,1),t.tag=2,vr(r,t))),r.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Bh,Ec,Vh,Hh;Bh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Ec=function(){};Vh=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Br(St.current);var a=null;switch(r){case"input":o=Xl(e,o),n=Xl(e,n),a=[];break;case"select":o=se({},o,{value:void 0}),n=se({},n,{value:void 0}),a=[];break;case"textarea":o=ec(e,o),n=ec(e,n),a=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Ti)}rc(r,n);var i;r=null;for(c in o)if(!n.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vo.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var l=n[c];if(s=o!=null?o[c]:void 0,n.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(r||(r={}),r[i]=l[i])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",e),a||s===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Hh=function(e,t,r,n){r!==n&&(t.flags|=4)};function bo(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function aw(e,t,r){var n=t.pendingProps;switch(Fd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return je(t.type)&&Ci(),Ie(t),null;case 3:return n=t.stateNode,Qn(),te(De),te(Ce),Vd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ut!==null&&(Lc(ut),ut=null))),Ec(e,t),Ie(t),null;case 5:Bd(t);var o=Br(ta.current);if(r=t.type,e!==null&&t.stateNode!=null)Vh(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(S(166));return Ie(t),null}if(e=Br(St.current),go(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[xt]=t,n[Zo]=a,e=(t.mode&1)!==0,r){case"dialog":Z("cancel",n),Z("close",n);break;case"iframe":case"object":case"embed":Z("load",n);break;case"video":case"audio":for(o=0;o<So.length;o++)Z(So[o],n);break;case"source":Z("error",n);break;case"img":case"image":case"link":Z("error",n),Z("load",n);break;case"details":Z("toggle",n);break;case"input":pf(n,a),Z("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Z("invalid",n);break;case"textarea":gf(n,a),Z("invalid",n)}rc(r,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Va(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Va(n.textContent,s,e),o=["children",""+s]):Vo.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Z("scroll",n)}switch(r){case"input":Ma(n),mf(n,a,!0);break;case"textarea":Ma(n),hf(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Ti)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Eg(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[xt]=t,e[Zo]=n,Bh(e,t,!1,!1),t.stateNode=e;e:{switch(i=nc(r,n),r){case"dialog":Z("cancel",e),Z("close",e),o=n;break;case"iframe":case"object":case"embed":Z("load",e),o=n;break;case"video":case"audio":for(o=0;o<So.length;o++)Z(So[o],e);o=n;break;case"source":Z("error",e),o=n;break;case"img":case"image":case"link":Z("error",e),Z("load",e),o=n;break;case"details":Z("toggle",e),o=n;break;case"input":pf(e,n),o=Xl(e,n),Z("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=se({},n,{value:void 0}),Z("invalid",e);break;case"textarea":gf(e,n),o=ec(e,n),Z("invalid",e);break;default:o=n}rc(r,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Cg(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ig(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ho(e,l):typeof l=="number"&&Ho(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Vo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Z("scroll",e):l!=null&&wd(e,a,l,i))}switch(r){case"input":Ma(e),mf(e,n,!1);break;case"textarea":Ma(e),hf(e);break;case"option":n.value!=null&&e.setAttribute("value",""+_r(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Dn(e,!!n.multiple,a,!1):n.defaultValue!=null&&Dn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ti)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)Hh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(S(166));if(r=Br(ta.current),Br(St.current),go(t)){if(n=t.stateNode,r=t.memoizedProps,n[xt]=t,(a=n.nodeValue!==r)&&(e=He,e!==null))switch(e.tag){case 3:Va(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Va(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[xt]=t,t.stateNode=n}return Ie(t),null;case 13:if(te(ae),n=t.memoizedState,oe&&Me!==null&&(t.mode&1)!==0&&(t.flags&128)===0){for(n=Me;n;)n=Lt(n.nextSibling);return Yn(),t.flags|=98560,t}if(n!==null&&n.dehydrated!==null){if(n=go(t),e===null){if(!n)throw Error(S(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(S(317));n[xt]=t}else Yn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;return Ie(t),null}return ut!==null&&(Lc(ut),ut=null),(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,r=!1,e===null?go(t):r=e.memoizedState!==null,n!==r&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ae.current&1)!==0?me===0&&(me=3):tu())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Qn(),Ec(e,t),e===null&&Xo(t.stateNode.containerInfo),Ie(t),null;case 10:return Ld(t.type._context),Ie(t),null;case 17:return je(t.type)&&Ci(),Ie(t),null;case 19:if(te(ae),a=t.memoizedState,a===null)return Ie(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)bo(a,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Mi(e),i!==null){for(t.flags|=128,bo(a,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return J(ae,ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>Xn&&(t.flags|=128,n=!0,bo(a,!1),t.lanes=4194304)}else{if(!n)if(e=Mi(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),bo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!oe)return Ie(t),null}else 2*de()-a.renderingStartTime>Xn&&r!==1073741824&&(t.flags|=128,n=!0,bo(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(r=a.last,r!==null?r.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,r=ae.current,J(ae,n?r&1|2:r&1),t):(Ie(t),null);case 22:case 23:return eu(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Ue&1073741824)!==0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}var iw=Qt.ReactCurrentOwner,Le=!1;function Pe(e,t,r,n){t.child=e===null?yh(t,null,r,n):qn(t,e.child,r,n)}function ep(e,t,r,n,o){r=r.render;var a=t.ref;return Un(t,o),n=Wd(e,t,r,n,a,o),r=Gd(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(oe&&r&&jd(t),t.flags|=1,Pe(e,t,n,o),t.child)}function tp(e,t,r,n,o){if(e===null){var a=r.type;return typeof a=="function"&&!ru(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Wh(e,t,a,n,o)):(e=ui(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(r=r.compare,r=r!==null?r:Qo,r(i,n)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=Er(a,n),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,r,n,o){if(e!==null){var a=e.memoizedProps;if(Qo(a,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return Ic(e,t,r,n,o)}function Gh(e,t,r){var n=t.pendingProps,o=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Rn,Ue),Ue|=r;else if((r&1073741824)!==0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,J(Rn,Ue),Ue|=n;else return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,J(Rn,Ue),Ue|=e,null;else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,J(Rn,Ue),Ue|=n;return Pe(e,t,o,r),t.child}function Kh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ic(e,t,r,n,o){var a=je(r)?qr:Ce.current;return a=Kn(t,a),Un(t,o),r=Wd(e,t,r,n,a,o),n=Gd(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(oe&&n&&jd(t),t.flags|=1,Pe(e,t,r,o),t.child)}function rp(e,t,r,n,o){if(je(r)){var a=!0;Ai(t)}else a=!1;if(Un(t,o),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),gh(t,r,n),xc(t,r,n,o),n=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,c=r.contextType;typeof c=="object"&&c!==null?c=at(c):(c=je(r)?qr:Ce.current,c=Kn(t,c));var u=r.getDerivedStateFromProps,p=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||l!==c)&&Wf(t,i,n,c),or=!1;var d=t.memoizedState;i.state=d,Ri(t,n,i,o),l=t.memoizedState,s!==n||d!==l||De.current||or?(typeof u=="function"&&(wc(t,r,u,n),l=t.memoizedState),(s=or||Hf(t,r,s,n,d,l,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),i.props=n,i.state=l,i.context=c,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,ph(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ct(t.type,s),i.props=c,p=t.pendingProps,d=i.context,l=r.contextType,typeof l=="object"&&l!==null?l=at(l):(l=je(r)?qr:Ce.current,l=Kn(t,l));var h=r.getDerivedStateFromProps;(u=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==p||d!==l)&&Wf(t,i,n,l),or=!1,d=t.memoizedState,i.state=d,Ri(t,n,i,o);var w=t.memoizedState;s!==p||d!==w||De.current||or?(typeof h=="function"&&(wc(t,r,h,n),w=t.memoizedState),(c=or||Hf(t,r,c,n,d,w,l)||!1)?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,w,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,w,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),i.props=n,i.state=w,i.context=l,n=c):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),n=!1)}return Tc(e,t,r,n,a,o)}function Tc(e,t,r,n,o,a){Kh(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return o&&Uf(t,r,!1),Ht(e,t,a);n=t.stateNode,iw.current=t;var s=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=qn(t,e.child,null,a),t.child=qn(t,null,s,a)):Pe(e,t,s,a),t.memoizedState=n.state,o&&Uf(t,r,!0),t.child}function Yh(e){var t=e.stateNode;t.pendingContext?$f(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$f(e,t.context,!1),Ud(e,t.containerInfo)}function np(e,t,r,n,o){return Yn(),$d(o),t.flags|=256,Pe(e,t,r,n),t.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Ga(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t){return{baseLanes:e.baseLanes|t,cachePool:null,transitions:e.transitions}}function qh(e,t,r){var n=t.pendingProps,o=ae.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),J(ae,o&1),e===null)return _c(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=n.children,e=n.fallback,a?(n=t.mode,a=t.child,o={mode:"hidden",children:o},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Bi(o,n,0,null),e=Kr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ga(r),t.memoizedState=Wa,e):Cc(t,o));if(o=e.memoizedState,o!==null){if(s=o.dehydrated,s!==null){if(i)return t.flags&256?(t.flags&=-257,Ka(e,t,r,Error(S(422)))):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,o=t.mode,n=Bi({mode:"visible",children:n.children},o,0,null),a=Kr(a,o,r,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&qn(t,e.child,null,r),t.child.memoizedState=Ga(r),t.memoizedState=Wa,a);if((t.mode&1)===0)t=Ka(e,t,r,null);else if(s.data==="$!")t=Ka(e,t,r,Error(S(419)));else if(n=(r&e.childLanes)!==0,Le||n){if(n=ge,n!==null){switch(r&-r){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}n=(a&(n.suspendedLanes|r))!==0?0:a,n!==0&&n!==o.retryLane&&(o.retryLane=n,nt(e,n,-1))}tu(),t=Ka(e,t,r,Error(S(421)))}else s.data==="$?"?(t.flags|=128,t.child=e.child,t=vw.bind(null,e),s._reactRetry=t,t=null):(r=o.treeContext,Me=Lt(s.nextSibling),He=t,oe=!0,ut=null,r!==null&&(Ze[et++]=Dt,Ze[et++]=jt,Ze[et++]=Qr,Dt=r.id,jt=r.overflow,Qr=t),t=Cc(t,t.pendingProps.children),t.flags|=4096);return t}return a?(n=ip(e,t,n.children,n.fallback,r),a=t.child,o=e.child.memoizedState,a.memoizedState=o===null?Ga(r):op(o,r),a.childLanes=e.childLanes&~r,t.memoizedState=Wa,n):(r=ap(e,t,n.children,r),t.memoizedState=null,r)}return a?(n=ip(e,t,n.children,n.fallback,r),a=t.child,o=e.child.memoizedState,a.memoizedState=o===null?Ga(r):op(o,r),a.childLanes=e.childLanes&~r,t.memoizedState=Wa,n):(r=ap(e,t,n.children,r),t.memoizedState=null,r)}function Cc(e,t){return t=Bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ap(e,t,r,n){var o=e.child;return e=o.sibling,r=Er(o,{mode:"visible",children:r}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r}function ip(e,t,r,n,o){var a=t.mode;e=e.child;var i=e.sibling,s={mode:"hidden",children:r};return(a&1)===0&&t.child!==e?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Er(e,s),r.subtreeFlags=e.subtreeFlags&14680064),i!==null?n=Er(i,n):(n=Kr(n,a,o,null),n.flags|=2),n.return=t,r.return=t,r.sibling=n,t.child=r,n}function Ka(e,t,r,n){return n!==null&&$d(n),qn(t,e.child,null,r),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),yc(e.return,t,r)}function xl(e,t,r,n,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=o)}function Qh(e,t,r){var n=t.pendingProps,o=n.revealOrder,a=n.tail;if(Pe(e,t,n.children,r),n=ae.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sp(e,r,t);else if(e.tag===19)sp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(J(ae,n),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Mi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),xl(t,!1,o,r,a);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Mi(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}xl(t,!0,r,null,a);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ht(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,r=Er(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Er(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function sw(e,t,r){switch(t.tag){case 3:Yh(t),Yn();break;case 5:wh(t);break;case 1:je(t.type)&&Ai(t);break;case 4:Ud(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;J(Pi,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(J(ae,ae.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?qh(e,t,r):(J(ae,ae.current&1),e=Ht(e,t,r),e!==null?e.sibling:null);J(ae,ae.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Qh(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),J(ae,ae.current),n)break;return null;case 22:case 23:return t.lanes=0,Gh(e,t,r)}return Ht(e,t,r)}function lw(e,t){switch(Fd(t),t.tag){case 1:return je(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),te(De),te(Ce),Vd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Bd(t),null;case 13:if(te(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Yn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ae),null;case 4:return Qn(),null;case 10:return Ld(t.type._context),null;case 22:case 23:return eu(),null;case 24:return null;default:return null}}var Ya=!1,Te=!1,cw=typeof WeakSet=="function"?WeakSet:Set,O=null;function On(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ce(e,t,n)}else r.current=null}function Ac(e,t,r){try{r()}catch(n){ce(e,t,n)}}var lp=!1;function dw(e,t){if(pc=Si,e=rh(),Nd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var i=0,s=-1,l=-1,c=0,u=0,p=e,d=null;t:for(;;){for(var h;p!==r||o!==0&&p.nodeType!==3||(s=i+o),p!==a||n!==0&&p.nodeType!==3||(l=i+n),p.nodeType===3&&(i+=p.nodeValue.length),(h=p.firstChild)!==null;)d=p,p=h;for(;;){if(p===e)break t;if(d===r&&++c===o&&(s=i),d===a&&++u===n&&(l=i),(h=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=h}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(mc={focusedElem:e,selectionRange:r},Si=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var w=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var E=w.memoizedProps,C=w.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?E:ct(t.type,E),C);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;if(g.nodeType===1)g.textContent="";else if(g.nodeType===9){var b=g.body;b!=null&&(b.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){ce(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return w=lp,lp=!1,w}function zo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Ac(t,r,a)}o=o.next}while(o!==n)}}function fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Pc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Xh(e){var t=e.alternate;t!==null&&(e.alternate=null,Xh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Zo],delete t[bc],delete t[K1],delete t[Y1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jh(e){return e.tag===5||e.tag===3||e.tag===4}function cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ti));else if(n!==4&&(e=e.child,e!==null))for(Oc(e,t,r),e=e.sibling;e!==null;)Oc(e,t,r),e=e.sibling}function Rc(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Rc(e,t,r),e=e.sibling;e!==null;)Rc(e,t,r),e=e.sibling}var we=null,dt=!1;function Zt(e,t,r){for(r=r.child;r!==null;)Zh(e,t,r),r=r.sibling}function Zh(e,t,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(os,r)}catch{}switch(r.tag){case 5:Te||On(r,t);case 6:var n=we,o=dt;we=null,Zt(e,t,r),we=n,dt=o,we!==null&&(dt?(e=we,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):we.removeChild(r.stateNode));break;case 18:we!==null&&(dt?(e=we,r=r.stateNode,e.nodeType===8?gl(e.parentNode,r):e.nodeType===1&&gl(e,r),Yo(e)):gl(we,r.stateNode));break;case 4:n=we,o=dt,we=r.stateNode.containerInfo,dt=!0,Zt(e,t,r),we=n,dt=o;break;case 0:case 11:case 14:case 15:if(!Te&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Ac(r,t,i),o=o.next}while(o!==n)}Zt(e,t,r);break;case 1:if(!Te&&(On(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ce(r,t,s)}Zt(e,t,r);break;case 21:Zt(e,t,r);break;case 22:r.mode&1?(Te=(n=Te)||r.memoizedState!==null,Zt(e,t,r),Te=n):Zt(e,t,r);break;default:Zt(e,t,r)}}function dp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new cw),t.forEach(function(n){var o=yw.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function lt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,dt=!1;break e;case 3:we=s.stateNode.containerInfo,dt=!0;break e;case 4:we=s.stateNode.containerInfo,dt=!0;break e}s=s.return}if(we===null)throw Error(S(160));Zh(a,i,o),we=null,dt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(c){ce(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eb(t,e),t=t.sibling}function eb(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),yt(e),n&4){try{zo(3,e,e.return),fs(3,e)}catch(w){ce(e,e.return,w)}try{zo(5,e,e.return)}catch(w){ce(e,e.return,w)}}break;case 1:lt(t,e),yt(e),n&512&&r!==null&&On(r,r.return);break;case 5:if(lt(t,e),yt(e),n&512&&r!==null&&On(r,r.return),e.flags&32){var o=e.stateNode;try{Ho(o,"")}catch(w){ce(e,e.return,w)}}if(n&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=r!==null?r.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&_g(o,a),nc(s,i);var c=nc(s,a);for(i=0;i<l.length;i+=2){var u=l[i],p=l[i+1];u==="style"?Cg(o,p):u==="dangerouslySetInnerHTML"?Ig(o,p):u==="children"?Ho(o,p):wd(o,u,p,c)}switch(s){case"input":Jl(o,a);break;case"textarea":Sg(o,a);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var h=a.value;h!=null?Dn(o,!!a.multiple,h,!1):d!==!!a.multiple&&(a.defaultValue!=null?Dn(o,!!a.multiple,a.defaultValue,!0):Dn(o,!!a.multiple,a.multiple?[]:"",!1))}o[Zo]=a}catch(w){ce(e,e.return,w)}}break;case 6:if(lt(t,e),yt(e),n&4){if(e.stateNode===null)throw Error(S(162));c=e.stateNode,u=e.memoizedProps;try{c.nodeValue=u}catch(w){ce(e,e.return,w)}}break;case 3:if(lt(t,e),yt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(w){ce(e,e.return,w)}break;case 4:lt(t,e),yt(e);break;case 13:lt(t,e),yt(e),c=e.child,c.flags&8192&&c.memoizedState!==null&&(c.alternate===null||c.alternate.memoizedState===null)&&(Jd=de()),n&4&&dp(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,lt(t,e),Te=u):lt(t,e),yt(e),n&8192){u=e.memoizedState!==null;e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Tg("display",i))}catch(w){ce(e,e.return,w)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ce(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}if(u&&!c&&(e.mode&1)!==0)for(O=e,e=e.child;e!==null;){for(c=O=e;O!==null;){switch(u=O,p=u.child,u.tag){case 0:case 11:case 14:case 15:zo(4,u,u.return);break;case 1:if(On(u,u.return),a=u.stateNode,typeof a.componentWillUnmount=="function"){d=u,h=u.return;try{o=d,a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(w){ce(d,h,w)}}break;case 5:On(u,u.return);break;case 22:if(u.memoizedState!==null){fp(c);continue}}p!==null?(p.return=u,O=p):fp(c)}e=e.sibling}}break;case 19:lt(t,e),yt(e),n&4&&dp(e);break;case 21:break;default:lt(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Jh(r)){var n=r;break e}r=r.return}throw Error(S(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Ho(o,""),n.flags&=-33);var a=cp(e);Rc(e,a,o);break;case 3:case 4:var i=n.stateNode.containerInfo,s=cp(e);Oc(e,s,i);break;default:throw Error(S(161))}}catch(l){ce(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uw(e,t,r){O=e,tb(e)}function tb(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var o=O,a=o.child;if(o.tag===22&&n){var i=o.memoizedState!==null||Ya;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Te;s=Ya;var c=Te;if(Ya=i,(Te=l)&&!c)for(O=o;O!==null;)i=O,l=i.child,i.tag===22&&i.memoizedState!==null?pp(o):l!==null?(l.return=i,O=l):pp(o);for(;a!==null;)O=a,tb(a),a=a.sibling;O=o,Ya=s,Te=c}up(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,O=a):up(e)}}function up(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||fs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Te)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:ct(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Vf(t,a,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Vf(t,i,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Yo(p)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(S(163))}Te||t.flags&512&&Pc(t)}catch(d){ce(t,t.return,d)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function fp(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function pp(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{fs(4,t)}catch(l){ce(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(l){ce(t,o,l)}}var a=t.return;try{Pc(t)}catch(l){ce(t,a,l)}break;case 5:var i=t.return;try{Pc(t)}catch(l){ce(t,i,l)}}}catch(l){ce(t,t.return,l)}if(t===e){O=null;break}var s=t.sibling;if(s!==null){s.return=t.return,O=s;break}O=t.return}}var fw=Math.ceil,ji=Qt.ReactCurrentDispatcher,Qd=Qt.ReactCurrentOwner,rt=Qt.ReactCurrentBatchConfig,W=0,ge=null,fe=null,_e=0,Ue=0,Rn=Pr(0),me=0,aa=null,Jr=0,ps=0,Xd=0,Mo=null,ze=null,Jd=0,Xn=1/0,zt=null,Fi=!1,Nc=null,yr=null,qa=!1,pr=null,$i=0,Lo=0,zc=null,ci=-1,di=0;function Oe(){return(W&6)!==0?de():ci!==-1?ci:ci=de()}function wr(e){return(e.mode&1)===0?1:(W&2)!==0&&_e!==0?_e&-_e:Q1.transition!==null?(di===0&&(di=$g()),di):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Kg(e.type)),e)}function nt(e,t,r){if(50<Lo)throw Lo=0,zc=null,Error(S(185));var n=ms(e,t);return n===null?null:(ha(n,t,r),((W&2)===0||n!==ge)&&(n===ge&&((W&2)===0&&(ps|=t),me===4&&sr(n,_e)),Fe(n,r),t===1&&W===0&&(e.mode&1)===0&&(Xn=de()+500,cs&&Or())),n)}function ms(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}function rb(e){return(ge!==null||ft!==null)&&(e.mode&1)!==0&&(W&2)===0}function Fe(e,t){var r=e.callbackNode;Qy(e,t);var n=_i(e,e===ge?_e:0);if(n===0)r!==null&&yf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&yf(r),t===1)e.tag===0?q1(mp.bind(null,e)):fh(mp.bind(null,e)),W1(function(){W===0&&Or()}),r=null;else{switch(Ug(n)){case 1:r=Ed;break;case 4:r=jg;break;case 16:r=ki;break;case 536870912:r=Fg;break;default:r=ki}r=db(r,nb.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function nb(e,t){if(ci=-1,di=0,(W&6)!==0)throw Error(S(327));var r=e.callbackNode;if(Bn()&&e.callbackNode!==r)return null;var n=_i(e,e===ge?_e:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Ui(e,n);else{t=n;var o=W;W|=2;var a=ab();(ge!==e||_e!==t)&&(zt=null,Xn=de()+500,Gr(e,t));do try{gw();break}catch(s){ob(e,s)}while(1);Md(),ji.current=a,W=o,fe!==null?t=0:(ge=null,_e=0,t=me)}if(t!==0){if(t===2&&(o=lc(e),o!==0&&(n=o,t=Mc(e,o))),t===1)throw r=aa,Gr(e,0),sr(e,n),Fe(e,de()),r;if(t===6)sr(e,n);else{if(o=e.current.alternate,(n&30)===0&&!pw(o)&&(t=Ui(e,n),t===2&&(a=lc(e),a!==0&&(n=a,t=Mc(e,a))),t===1))throw r=aa,Gr(e,0),sr(e,n),Fe(e,de()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(S(345));case 2:jr(e,ze,zt);break;case 3:if(sr(e,n),(n&130023424)===n&&(t=Jd+500-de(),10<t)){if(_i(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Oe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hc(jr.bind(null,e,ze,zt),t);break}jr(e,ze,zt);break;case 4:if(sr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var i=31-mt(n);a=1<<i,i=t[i],i>o&&(o=i),n&=~a}if(n=o,n=de()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*fw(n/1960))-n,10<n){e.timeoutHandle=hc(jr.bind(null,e,ze,zt),n);break}jr(e,ze,zt);break;case 5:jr(e,ze,zt);break;default:throw Error(S(329))}}}return Fe(e,de()),e.callbackNode===r?nb.bind(null,e):null}function Mc(e,t){var r=Mo;return e.current.memoizedState.isDehydrated&&(Gr(e,t).flags|=256),e=Ui(e,t),e!==2&&(t=ze,ze=r,t!==null&&Lc(t)),e}function Lc(e){ze===null?ze=e:ze.push.apply(ze,e)}function pw(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],a=o.getSnapshot;o=o.value;try{if(!gt(a(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sr(e,t){for(t&=~Xd,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-mt(t),n=1<<r;e[r]=-1,t&=~n}}function mp(e){if((W&6)!==0)throw Error(S(327));Bn();var t=_i(e,0);if((t&1)===0)return Fe(e,de()),null;var r=Ui(e,t);if(e.tag!==0&&r===2){var n=lc(e);n!==0&&(t=n,r=Mc(e,n))}if(r===1)throw r=aa,Gr(e,0),sr(e,t),Fe(e,de()),r;if(r===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jr(e,ze,zt),Fe(e,de()),null}function Zd(e,t){var r=W;W|=1;try{return e(t)}finally{W=r,W===0&&(Xn=de()+500,cs&&Or())}}function Zr(e){pr!==null&&pr.tag===0&&(W&6)===0&&Bn();var t=W;W|=1;var r=rt.transition,n=Y;try{if(rt.transition=null,Y=1,e)return e()}finally{Y=n,rt.transition=r,W=t,(W&6)===0&&Or()}}function eu(){Ue=Rn.current,te(Rn)}function Gr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,H1(r)),fe!==null)for(r=fe.return;r!==null;){var n=r;switch(Fd(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ci();break;case 3:Qn(),te(De),te(Ce),Vd();break;case 5:Bd(n);break;case 4:Qn();break;case 13:te(ae);break;case 19:te(ae);break;case 10:Ld(n.type._context);break;case 22:case 23:eu()}r=r.return}if(ge=e,fe=e=Er(e.current,null),_e=Ue=t,me=0,aa=null,Xd=ps=Jr=0,ze=Mo=null,ft!==null){for(t=0;t<ft.length;t++)if(r=ft[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,a=r.pending;if(a!==null){var i=a.next;a.next=o,n.next=i}r.pending=n}ft=null}return e}function ob(e,t){do{var r=fe;try{if(Md(),si.current=Di,Li){for(var n=ie.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Li=!1}if(Xr=0,ve=pe=ie=null,No=!1,ra=0,Qd.current=null,r===null||r.return===null){me=1,aa=t,fe=null;break}e:{var a=e,i=r.return,s=r,l=t;if(t=_e,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,p=u.tag;if((u.mode&1)===0&&(p===0||p===11||p===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=Jf(i);if(h!==null){h.flags&=-257,Zf(h,i,s,a,t),h.mode&1&&Xf(a,c,t),t=h,l=c;var w=t.updateQueue;if(w===null){var E=new Set;E.add(l),t.updateQueue=E}else w.add(l);break e}else{if((t&1)===0){Xf(a,c,t),tu();break e}l=Error(S(426))}}else if(oe&&s.mode&1){var C=Jf(i);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),Zf(C,i,s,a,t),$d(l);break e}}a=l,me!==4&&(me=2),Mo===null?Mo=[a]:Mo.push(a),l=qd(l,s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=$h(s,l,t);Bf(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(yr===null||!yr.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=Uh(s,a,t);Bf(s,b);break e}}s=s.return}while(s!==null)}sb(r)}catch(x){t=x,fe===r&&r!==null&&(fe=r=r.return);continue}break}while(1)}function ab(){var e=ji.current;return ji.current=Di,e===null?Di:e}function tu(){(me===0||me===3||me===2)&&(me=4),ge===null||(Jr&268435455)===0&&(ps&268435455)===0||sr(ge,_e)}function Ui(e,t){var r=W;W|=2;var n=ab();(ge!==e||_e!==t)&&(zt=null,Gr(e,t));do try{mw();break}catch(o){ob(e,o)}while(1);if(Md(),W=r,ji.current=n,fe!==null)throw Error(S(261));return ge=null,_e=0,me}function mw(){for(;fe!==null;)ib(fe)}function gw(){for(;fe!==null&&!Uy();)ib(fe)}function ib(e){var t=cb(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?sb(e):fe=t,Qd.current=null}function sb(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=aw(r,t,Ue),r!==null){fe=r;return}}else{if(r=lw(r,t),r!==null){r.flags&=32767,fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,fe=null;return}}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);me===0&&(me=5)}function jr(e,t,r){var n=Y,o=rt.transition;try{rt.transition=null,Y=1,hw(e,t,r,n)}finally{rt.transition=o,Y=n}return null}function hw(e,t,r,n){do Bn();while(pr!==null);if((W&6)!==0)throw Error(S(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Xy(e,a),e===ge&&(fe=ge=null,_e=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||qa||(qa=!0,db(ki,function(){return Bn(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=rt.transition,rt.transition=null;var i=Y;Y=1;var s=W;W|=4,Qd.current=null,dw(e,r),eb(r,e),D1(mc),Si=!!pc,mc=pc=null,e.current=r,uw(r),By(),W=s,Y=i,rt.transition=a}else e.current=r;if(qa&&(qa=!1,pr=e,$i=o),a=e.pendingLanes,a===0&&(yr=null),Wy(r.stateNode),Fe(e,de()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)n(t[r]);if(Fi)throw Fi=!1,e=Nc,Nc=null,e;return($i&1)!==0&&e.tag!==0&&Bn(),a=e.pendingLanes,(a&1)!==0?e===zc?Lo++:(Lo=0,zc=e):Lo=0,Or(),null}function Bn(){if(pr!==null){var e=Ug($i),t=rt.transition,r=Y;try{if(rt.transition=null,Y=16>e?16:e,pr===null)var n=!1;else{if(e=pr,pr=null,$i=0,(W&6)!==0)throw Error(S(331));var o=W;for(W|=4,O=e.current;O!==null;){var a=O,i=a.child;if((O.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(O=c;O!==null;){var u=O;switch(u.tag){case 0:case 11:case 15:zo(8,u,a)}var p=u.child;if(p!==null)p.return=u,O=p;else for(;O!==null;){u=O;var d=u.sibling,h=u.return;if(Xh(u),u===c){O=null;break}if(d!==null){d.return=h,O=d;break}O=h}}}var w=a.alternate;if(w!==null){var E=w.child;if(E!==null){w.child=null;do{var C=E.sibling;E.sibling=null,E=C}while(E!==null)}}O=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,O=i;else e:for(;O!==null;){if(a=O,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:zo(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,O=m;break e}O=a.return}}var f=e.current;for(O=f;O!==null;){i=O;var g=i.child;if((i.subtreeFlags&2064)!==0&&g!==null)g.return=i,O=g;else e:for(i=f;O!==null;){if(s=O,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:fs(9,s)}}catch(x){ce(s,s.return,x)}if(s===i){O=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,O=b;break e}O=s.return}}if(W=o,Or(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(os,e)}catch{}n=!0}return n}finally{Y=r,rt.transition=t}}return!1}function gp(e,t,r){t=qd(r,t),t=$h(e,t,1),vr(e,t),t=Oe(),e=ms(e,1),e!==null&&(ha(e,1,t),Fe(e,t))}function ce(e,t,r){if(e.tag===3)gp(e,e,r);else for(;t!==null;){if(t.tag===3){gp(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(yr===null||!yr.has(n))){e=qd(r,e),e=Uh(t,e,1),vr(t,e),e=Oe(),t=ms(t,1),t!==null&&(ha(t,1,e),Fe(t,e));break}}t=t.return}}function bw(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Oe(),e.pingedLanes|=e.suspendedLanes&r,ge===e&&(_e&r)===r&&(me===4||me===3&&(_e&130023424)===_e&&500>de()-Jd?Gr(e,0):Xd|=r),Fe(e,t)}function lb(e,t){t===0&&((e.mode&1)===0?t=1:(t=ja,ja<<=1,(ja&130023424)===0&&(ja=4194304)));var r=Oe();e=ms(e,t),e!==null&&(ha(e,t,r),Fe(e,r))}function vw(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lb(e,r)}function yw(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(S(314))}n!==null&&n.delete(t),lb(e,r)}var cb;cb=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Le=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Le=!1,sw(e,t,r);Le=(e.flags&131072)!==0}else Le=!1,oe&&(t.flags&1048576)!==0&&hh(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps;var o=Kn(t,Ce.current);Un(t,r),o=Wd(null,t,n,e,o,r);var a=Gd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(n)?(a=!0,Ai(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Dd(t),o.updater=ds,t.stateNode=o,o._reactInternals=t,xc(t,n,e,r),t=Tc(null,t,n,!0,a,r)):(t.tag=0,oe&&a&&jd(t),Pe(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=xw(n),e=ct(n,e),o){case 0:t=Ic(null,t,n,e,r);break e;case 1:t=rp(null,t,n,e,r);break e;case 11:t=ep(null,t,n,e,r);break e;case 14:t=tp(null,t,n,ct(n.type,e),r);break e}throw Error(S(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ct(n,o),Ic(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ct(n,o),rp(e,t,n,o,r);case 3:e:{if(Yh(t),e===null)throw Error(S(387));n=t.pendingProps,a=t.memoizedState,o=a.element,ph(e,t),Ri(t,n,null,r);var i=t.memoizedState;if(n=i.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Error(S(423)),t=np(e,t,n,r,o);break e}else if(n!==o){o=Error(S(424)),t=np(e,t,n,r,o);break e}else for(Me=Lt(t.stateNode.containerInfo.firstChild),He=t,oe=!0,ut=null,r=yh(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Yn(),n===o){t=Ht(e,t,r);break e}Pe(e,t,n,r)}t=t.child}return t;case 5:return wh(t),e===null&&_c(t),n=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,gc(n,o)?i=null:a!==null&&gc(n,a)&&(t.flags|=32),Kh(e,t),Pe(e,t,i,r),t.child;case 6:return e===null&&_c(t),null;case 13:return qh(e,t,r);case 4:return Ud(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qn(t,null,n,r):Pe(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ct(n,o),ep(e,t,n,o,r);case 7:return Pe(e,t,t.pendingProps,r),t.child;case 8:return Pe(e,t,t.pendingProps.children,r),t.child;case 12:return Pe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,J(Pi,n._currentValue),n._currentValue=i,a!==null)if(gt(a.value,i)){if(a.children===o.children&&!De.current){t=Ht(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=Ut(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),yc(a.return,r,t),s.lanes|=r;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(S(341));i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),yc(i,r,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Pe(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Un(t,r),o=at(o),n=n(o),t.flags|=1,Pe(e,t,n,r),t.child;case 14:return n=t.type,o=ct(n,t.pendingProps),o=ct(n.type,o),tp(e,t,n,o,r);case 15:return Wh(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:ct(n,o),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,je(n)?(e=!0,Ai(t)):e=!1,Un(t,r),gh(t,n,o),xc(t,n,o,r),Tc(null,t,n,!0,e,r);case 19:return Qh(e,t,r);case 22:return Gh(e,t,r)}throw Error(S(156,t.tag))};function db(e,t){return Dg(e,t)}function ww(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,r,n){return new ww(e,t,r,n)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xw(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kd)return 11;if(e===_d)return 14}return 2}function Er(e,t){var r=e.alternate;return r===null?(r=tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ui(e,t,r,n,o,a){var i=2;if(n=e,typeof e=="function")ru(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case kn:return Kr(r.children,o,a,t);case xd:i=8,o|=8;break;case Kl:return e=tt(12,r,t,o|2),e.elementType=Kl,e.lanes=a,e;case Yl:return e=tt(13,r,t,o),e.elementType=Yl,e.lanes=a,e;case ql:return e=tt(19,r,t,o),e.elementType=ql,e.lanes=a,e;case wg:return Bi(r,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vg:i=10;break e;case yg:i=9;break e;case kd:i=11;break e;case _d:i=14;break e;case nr:i=16,n=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=tt(i,r,t,o),t.elementType=e,t.type=n,t.lanes=a,t}function Kr(e,t,r,n){return e=tt(7,e,n,t),e.lanes=r,e}function Bi(e,t,r,n){return e=tt(22,e,n,t),e.elementType=wg,e.lanes=r,e.stateNode={},e}function kl(e,t,r){return e=tt(6,e,null,t),e.lanes=r,e}function _l(e,t,r){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kw(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nu(e,t,r,n,o,a,i,s,l){return e=new kw(e,t,r,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dd(a),e}function _w(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ub(e){if(!e)return Sr;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var r=e.type;if(je(r))return uh(e,r,t)}return t}function fb(e,t,r,n,o,a,i,s,l){return e=nu(r,n,!0,e,o,a,i,s,l),e.context=ub(null),r=e.current,n=Oe(),o=wr(r),a=Ut(n,o),a.callback=t!=null?t:null,vr(r,a),e.current.lanes=o,ha(e,o,n),Fe(e,n),e}function gs(e,t,r,n){var o=t.current,a=Oe(),i=wr(o);return r=ub(r),t.context===null?t.context=r:t.pendingContext=r,t=Ut(a,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),vr(o,t),e=nt(o,i,a),e!==null&&ii(e,o,i),i}function Vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ou(e,t){hp(e,t),(e=e.alternate)&&hp(e,t)}function Sw(){return null}var pb=typeof reportError=="function"?reportError:function(e){console.error(e)};function au(e){this._internalRoot=e}hs.prototype.render=au.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));gs(e,t,null,null)};hs.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zr(function(){gs(null,e,null,null)}),t[Vt]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hg();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ir.length&&t!==0&&t<ir[r].priority;r++);ir.splice(r,0,e),r===0&&Gg(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bp(){}function Ew(e,t,r,n,o){if(o){if(typeof n=="function"){var a=n;n=function(){var c=Vi(i);a.call(c)}}var i=fb(t,n,e,0,null,!1,!1,"",bp);return e._reactRootContainer=i,e[Vt]=i.current,Xo(e.nodeType===8?e.parentNode:e),Zr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var c=Vi(l);s.call(c)}}var l=nu(e,0,!1,null,null,!1,!1,"",bp);return e._reactRootContainer=l,e[Vt]=l.current,Xo(e.nodeType===8?e.parentNode:e),Zr(function(){gs(t,l,r,n)}),l}function vs(e,t,r,n,o){var a=r._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=Vi(i);s.call(l)}}gs(t,i,e,o)}else i=Ew(r,t,e,o,n);return Vi(i)}Bg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=_o(t.pendingLanes);r!==0&&(Id(t,r|1),Fe(t,de()),(W&6)===0&&(Xn=de()+500,Or()))}break;case 13:var n=Oe();Zr(function(){return nt(e,1,n)}),ou(e,1)}};Td=function(e){if(e.tag===13){var t=Oe();nt(e,134217728,t),ou(e,134217728)}};Vg=function(e){if(e.tag===13){var t=Oe(),r=wr(e);nt(e,r,t),ou(e,r)}};Hg=function(){return Y};Wg=function(e,t){var r=Y;try{return Y=e,t()}finally{Y=r}};ac=function(e,t,r){switch(t){case"input":if(Jl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ls(n);if(!o)throw Error(S(90));kg(n),Jl(n,o)}}}break;case"textarea":Sg(e,r);break;case"select":t=r.value,t!=null&&Dn(e,!!r.multiple,t,!1)}};Og=Zd;Rg=Zr;var Iw={usingClientEntryPoint:!1,Events:[va,In,ls,Ag,Pg,Zd]},vo={findFiberByHostInstance:Ur,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},Tw={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mg(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Sw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{os=Qa.inject(Tw),_t=Qa}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw;Ke.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(S(200));return _w(e,t,null,r)};Ke.createRoot=function(e,t){if(!iu(e))throw Error(S(299));var r=!1,n="",o=pb;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nu(e,1,!1,null,null,r,!1,n,o),e[Vt]=t.current,Xo(e.nodeType===8?e.parentNode:e),new au(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Mg(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Zr(e)};Ke.hydrate=function(e,t,r){if(!bs(t))throw Error(S(200));return vs(null,e,t,!0,r)};Ke.hydrateRoot=function(e,t,r){if(!iu(e))throw Error(S(405));var n=r!=null&&r.hydratedSources||null,o=!1,a="",i=pb;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=fb(t,null,e,1,r!=null?r:null,o,!1,a,i),e[Vt]=t.current,Xo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new hs(t)};Ke.render=function(e,t,r){if(!bs(t))throw Error(S(200));return vs(null,e,t,!1,r)};Ke.unmountComponentAtNode=function(e){if(!bs(e))throw Error(S(40));return e._reactRootContainer?(Zr(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Zd;Ke.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!bs(r))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return vs(e,t,r,!1,n)};Ke.version="18.1.0-next-22edb9f77-20220426";function mb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mb)}catch(e){console.error(e)}}mb(),pg.exports=Ke;var vp=pg.exports;Wl.createRoot=vp.createRoot,Wl.hydrateRoot=vp.hydrateRoot;var ys={exports:{}},ws={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw=_.exports,Aw=Symbol.for("react.element"),Pw=Symbol.for("react.fragment"),Ow=Object.prototype.hasOwnProperty,Rw=Cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nw={key:!0,ref:!0,__self:!0,__source:!0};function gb(e,t,r){var n,o={},a=null,i=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)Ow.call(t,n)&&!Nw.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Aw,type:e,key:a,ref:i,props:o,_owner:Rw.current}}ws.Fragment=Pw;ws.jsx=gb;ws.jsxs=gb;ys.exports=ws;const y=ys.exports.jsx,G=ys.exports.jsxs,wa=ys.exports.Fragment;function Xa(e){return y("div",{className:"col-12 col-lg-3 col-md-6 m-0 p-2",children:G("div",{className:"card card-style bg-dark shadow text-light",children:[y("img",{src:e.img,className:"card-img-top scale",alt:"...","data-bs-toggle":"modal","data-bs-target":e.modal}),G("div",{className:"card-body",children:[y("h5",{className:"card-title",children:e.title}),y("p",{className:"card-text",children:e.text}),y("button",{className:"btn btn-dark","data-bs-toggle":"modal","data-bs-target":e.modal,children:"Learn More"})]})]})})}function Hi(){return Hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hi.apply(this,arguments)}var Vr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vr||(Vr={}));var yp=function(e){return e},wp="beforeunload",zw="popstate";function Mw(e){e===void 0&&(e={});var t=e,r=t.window,n=r===void 0?document.defaultView:r,o=n.history;function a(){var k=n.location,I=k.pathname,L=k.search,D=k.hash,H=o.state||{};return[H.idx,yp({pathname:I,search:L,hash:D,state:H.usr||null,key:H.key||"default"})]}var i=null;function s(){if(i)h.call(i),i=null;else{var k=Vr.Pop,I=a(),L=I[0],D=I[1];if(h.length){if(L!=null){var H=u-L;H&&(i={action:k,location:D,retry:function(){x(H*-1)}},x(H))}}else f(k)}}n.addEventListener(zw,s);var l=Vr.Pop,c=a(),u=c[0],p=c[1],d=kp(),h=kp();u==null&&(u=0,o.replaceState(Hi({},o.state,{idx:u}),""));function w(k){return typeof k=="string"?k:Dc(k)}function E(k,I){return I===void 0&&(I=null),yp(Hi({pathname:p.pathname,hash:"",search:""},typeof k=="string"?un(k):k,{state:I,key:Lw()}))}function C(k,I){return[{usr:k.state,key:k.key,idx:I},w(k)]}function m(k,I,L){return!h.length||(h.call({action:k,location:I,retry:L}),!1)}function f(k){l=k;var I=a();u=I[0],p=I[1],d.call({action:l,location:p})}function g(k,I){var L=Vr.Push,D=E(k,I);function H(){g(k,I)}if(m(L,D,H)){var he=C(D,u+1),Xe=he[0],Rt=he[1];try{o.pushState(Xe,"",Rt)}catch{n.location.assign(Rt)}f(L)}}function b(k,I){var L=Vr.Replace,D=E(k,I);function H(){b(k,I)}if(m(L,D,H)){var he=C(D,u),Xe=he[0],Rt=he[1];o.replaceState(Xe,"",Rt),f(L)}}function x(k){o.go(k)}var T={get action(){return l},get location(){return p},createHref:w,push:g,replace:b,go:x,back:function(){x(-1)},forward:function(){x(1)},listen:function(I){return d.push(I)},block:function(I){var L=h.push(I);return h.length===1&&n.addEventListener(wp,xp),function(){L(),h.length||n.removeEventListener(wp,xp)}}};return T}function xp(e){e.preventDefault(),e.returnValue=""}function kp(){var e=[];return{get length(){return e.length},push:function(r){return e.push(r),function(){e=e.filter(function(n){return n!==r})}},call:function(r){e.forEach(function(n){return n&&n(r)})}}}function Lw(){return Math.random().toString(36).substr(2,8)}function Dc(e){var t=e.pathname,r=t===void 0?"/":t,n=e.search,o=n===void 0?"":n,a=e.hash,i=a===void 0?"":a;return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function un(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const su=_.exports.createContext(null),lu=_.exports.createContext(null),xs=_.exports.createContext({outlet:null,matches:[]});function At(e,t){if(!e)throw new Error(t)}function Dw(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?un(t):t,o=vb(n.pathname||"/",r);if(o==null)return null;let a=hb(e);jw(a);let i=null;for(let s=0;i==null&&s<a.length;++s)i=Kw(a[s],o);return i}function hb(e,t,r,n){return t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n=""),e.forEach((o,a)=>{let i={relativePath:o.path||"",caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(n)||At(!1),i.relativePath=i.relativePath.slice(n.length));let s=xr([n,i.relativePath]),l=r.concat(i);o.children&&o.children.length>0&&(o.index===!0&&At(!1),hb(o.children,t,l,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:Ww(s,o.index),routesMeta:l})}),t}function jw(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Gw(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Fw=/^:\w+$/,$w=3,Uw=2,Bw=1,Vw=10,Hw=-2,_p=e=>e==="*";function Ww(e,t){let r=e.split("/"),n=r.length;return r.some(_p)&&(n+=Hw),t&&(n+=Uw),r.filter(o=>!_p(o)).reduce((o,a)=>o+(Fw.test(a)?$w:a===""?Bw:Vw),n)}function Gw(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Kw(e,t){let{routesMeta:r}=e,n={},o="/",a=[];for(let i=0;i<r.length;++i){let s=r[i],l=i===r.length-1,c=o==="/"?t:t.slice(o.length)||"/",u=Yw({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!u)return null;Object.assign(n,u.params);let p=s.route;a.push({params:n,pathname:xr([o,u.pathname]),pathnameBase:yb(xr([o,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(o=xr([o,u.pathnameBase]))}return a}function Yw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=qw(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((c,u,p)=>{if(u==="*"){let d=s[p]||"";i=a.slice(0,a.length-d.length).replace(/(.)\/+$/,"$1")}return c[u]=Qw(s[p]||""),c},{}),pathname:a,pathnameBase:i,pattern:e}}function qw(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0);let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(i,s)=>(n.push(s),"([^\\/]+)"));return e.endsWith("*")?(n.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o+=r?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(o,t?void 0:"i"),n]}function Qw(e,t){try{return decodeURIComponent(e)}catch{return e}}function Xw(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?un(e):e;return{pathname:r?r.startsWith("/")?r:Jw(r,t):t,search:ex(n),hash:tx(o)}}function Jw(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function bb(e,t,r){let n=typeof e=="string"?un(e):e,o=e===""||n.pathname===""?"/":n.pathname,a;if(o==null)a=r;else{let s=t.length-1;if(o.startsWith("..")){let l=o.split("/");for(;l[0]==="..";)l.shift(),s-=1;n.pathname=l.join("/")}a=s>=0?t[s]:"/"}let i=Xw(n,a);return o&&o!=="/"&&o.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}function Zw(e){return e===""||e.pathname===""?"/":typeof e=="string"?un(e).pathname:e.pathname}function vb(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=e.charAt(t.length);return r&&r!=="/"?null:e.slice(t.length)||"/"}const xr=e=>e.join("/").replace(/\/\/+/g,"/"),yb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ex=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function rx(e){xa()||At(!1);let{basename:t,navigator:r}=_.exports.useContext(su),{hash:n,pathname:o,search:a}=wb(e),i=o;if(t!=="/"){let s=Zw(e),l=s!=null&&s.endsWith("/");i=o==="/"?t+(l?"/":""):xr([t,o])}return r.createHref({pathname:i,search:a,hash:n})}function xa(){return _.exports.useContext(lu)!=null}function no(){return xa()||At(!1),_.exports.useContext(lu).location}function nx(){xa()||At(!1);let{basename:e,navigator:t}=_.exports.useContext(su),{matches:r}=_.exports.useContext(xs),{pathname:n}=no(),o=JSON.stringify(r.map(s=>s.pathnameBase)),a=_.exports.useRef(!1);return _.exports.useEffect(()=>{a.current=!0}),_.exports.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let c=bb(s,JSON.parse(o),n);e!=="/"&&(c.pathname=xr([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state)},[e,t,o,n])}function wb(e){let{matches:t}=_.exports.useContext(xs),{pathname:r}=no(),n=JSON.stringify(t.map(o=>o.pathnameBase));return _.exports.useMemo(()=>bb(e,JSON.parse(n),r),[e,n,r])}function ox(e,t){xa()||At(!1);let{matches:r}=_.exports.useContext(xs),n=r[r.length-1],o=n?n.params:{};n&&n.pathname;let a=n?n.pathnameBase:"/";n&&n.route;let i=no(),s;if(t){var l;let d=typeof t=="string"?un(t):t;a==="/"||((l=d.pathname)==null?void 0:l.startsWith(a))||At(!1),s=d}else s=i;let c=s.pathname||"/",u=a==="/"?c:c.slice(a.length)||"/",p=Dw(e,{pathname:u});return ax(p&&p.map(d=>Object.assign({},d,{params:Object.assign({},o,d.params),pathname:xr([a,d.pathname]),pathnameBase:d.pathnameBase==="/"?a:xr([a,d.pathnameBase])})),r)}function ax(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((r,n,o)=>_.exports.createElement(xs.Provider,{children:n.route.element!==void 0?n.route.element:r,value:{outlet:r,matches:t.concat(e.slice(0,o+1))}}),null)}function rr(e){At(!1)}function ix(e){let{basename:t="/",children:r=null,location:n,navigationType:o=Vr.Pop,navigator:a,static:i=!1}=e;xa()&&At(!1);let s=yb(t),l=_.exports.useMemo(()=>({basename:s,navigator:a,static:i}),[s,a,i]);typeof n=="string"&&(n=un(n));let{pathname:c="/",search:u="",hash:p="",state:d=null,key:h="default"}=n,w=_.exports.useMemo(()=>{let E=vb(c,s);return E==null?null:{pathname:E,search:u,hash:p,state:d,key:h}},[s,c,u,p,d,h]);return w==null?null:_.exports.createElement(su.Provider,{value:l},_.exports.createElement(lu.Provider,{children:r,value:{location:w,navigationType:o}}))}function sx(e){let{children:t,location:r}=e;return ox(jc(t),r)}function jc(e){let t=[];return _.exports.Children.forEach(e,r=>{if(!_.exports.isValidElement(r))return;if(r.type===_.exports.Fragment){t.push.apply(t,jc(r.props.children));return}r.type!==rr&&At(!1);let n={caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path};r.props.children&&(n.children=jc(r.props.children)),t.push(n)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fc(){return Fc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fc.apply(this,arguments)}function lx(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const cx=["onClick","reloadDocument","replace","state","target","to"];function dx(e){let{basename:t,children:r,window:n}=e,o=_.exports.useRef();o.current==null&&(o.current=Mw({window:n}));let a=o.current,[i,s]=_.exports.useState({action:a.action,location:a.location});return _.exports.useLayoutEffect(()=>a.listen(s),[a]),_.exports.createElement(ix,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:a})}function ux(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const cu=_.exports.forwardRef(function(t,r){let{onClick:n,reloadDocument:o,replace:a=!1,state:i,target:s,to:l}=t,c=lx(t,cx),u=rx(l),p=fx(l,{replace:a,state:i,target:s});function d(h){n&&n(h),!h.defaultPrevented&&!o&&p(h)}return _.exports.createElement("a",Fc({},c,{href:u,onClick:d,ref:r,target:s}))});function fx(e,t){let{target:r,replace:n,state:o}=t===void 0?{}:t,a=nx(),i=no(),s=wb(e);return _.exports.useCallback(l=>{if(l.button===0&&(!r||r==="_self")&&!ux(l)){l.preventDefault();let c=!!n||Dc(i)===Dc(s);a(e,{replace:c,state:o})}},[i,a,s,n,o,r,e])}function px(){return y("main",{className:"bg-img",children:G("h3",{className:"h1 txt-shadow",children:["Razer Ergonomic Wrist ",y("br",{})," Rest for Mini Keyboards",y(cu,{to:"learnMore",children:y("button",{className:"fs-2 p-2 bg-transparent shadow scale",children:"Learn More"})})]})})}var mx="/assets/teclado.b18b27e9.png",gx="/assets/teclado2.885aa50d.png",hx="/assets/mouse.70250104.png",bx="/assets/mouse2.fe397d3f.png",vx="/assets/more1.a0d3c294.jpg",yx="/assets/more2.ddf099a4.jpg",wx="/assets/more3.ef9d117d.jpg",xx="/assets/services.3e34e44c.jpg",kx="/assets/services1.6bb30319.jpg",_x="/assets/services3.21965402.jpg",Sx="/assets/serviceItem1.95cfd165.jpg",Ex="/assets/serviceItem2.f451d3a4.jpg",Ix="/assets/serviceItem3.cdb680ef.jpg",ke={img1:mx,img2:gx,img3:hx,img4:bx,more1:vx,more2:yx,more3:wx,service1:xx,service2:kx,service3:_x,item1:Sx,item2:Ex,item3:Ix};function Tx(e){return y("div",{className:"col-12  m-0 p-2",children:G("div",{className:"card card-style bg-dark text-light p-2",children:[y("img",{src:e.img,className:"card-img-top ",alt:"..."}),G("div",{className:"card-body",children:[y("h5",{className:"card-title",children:e.title}),y("p",{className:"card-text",children:e.text}),y("a",{href:"#",className:"btn btn-dark"})]})]})})}function Cx(e){return y(wa,{children:y("div",{className:"modal fade ",id:e.id,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:y("div",{className:"modal-dialog ",children:G("div",{className:"modal-content bg-transparent",children:[G("div",{className:"modal-header border-0",children:[y("h5",{className:"modal-title text-white",id:"staticBackdropLabel",children:e.title}),y("button",{type:"button",className:"btn-close ","data-bs-dismiss":"modal","aria-label":"Close",children:"X"})]}),y("div",{className:"modal-body",children:y(Tx,{title:e.titleCard,text:e.textCard,img:e.imgCard})}),y("div",{className:"modal-footer border-0",children:y("button",{type:"button",className:"btn btn-success ps-5 pe-5 w-75 m-auto text-black fw-bold ","data-bs-dismiss":"modal",children:"Close"})})]})})})})}var Ax=[{title:"Mouse Razer",titleCard:"Razer Viper V2 Pro Hyperspeed Rat\xF3n inal\xE1mbrico para videojuegos",textCard:"Dise\xF1o ultraligero de 2.08 oz: uno de los ratones electr\xF3nicos m\xE1s ligeros jam\xE1s creados y ofrece un nivel de velocidad y control favorecido por los mejores profesionales de deportes electr\xF3nicos del mundo Sensor \xF3ptico Focus Pro 30K: la mejor precisi\xF3n de su clase a trav\xE9s de un rendimiento de seguimiento impecable en una variedad m\xE1s amplia de superficies, incluido el vidrio Interruptores de rat\xF3n \xF3pticos Gen-3: ciclo de vida mejorado de 90 millones de clics con cero problemas de doble clic y accionamiento de 0,2 ms que proporciona fiabilidad y velocidad creadas para deportes electr\xF3nicos",id:"modal1"},{title:"Teclado Gamer RGB",titleCard:"Teclado gamer Razer BlackWidow V3 QWERTY Green ingl\xE9s US color negro con luz RGB",textCard:"Lo que tienes que saber de este producto: Ergon\xF3mico y apto para diversos usos. Tiene reposa mu\xF1eca. Contiene teclado num\xE9rico. Funci\xF3n antighosting incorporada. Tipo de teclado: mec\xE1nico. Tecla cil\xEDndrica. Con conector USB 2.0. Indispensable para tus actividades. Las im\xE1genes pueden ser ilustrativa",id:"modal2"},{title:"Teclado Razer",titleCard:"Teclado gamer Razer Huntsman Mini QWERTY Razer Purple ingl\xE9s US color negro con luz RGB",textCard:"Lo que tienes que saber de este producto: Resiste a salpicaduras. Funci\xF3n antighosting incorporada. Tipo de teclado: opto-mec\xE1nico. Tecla cil\xEDndrica. Con conector USB-C. Con cable removible. Indispensable para tus actividades. Las im\xE1genes pueden ser ilustrativas",id:"modal3"},{title:"Mouse Razer",titleCard:"Mouse de juego Razer DeathAdder V2",textCard:"Lo que tienes que saber de este producto: Utiliza cable. Posee rueda de desplazamiento. Cuenta con 6 botones para un mayor control. Con luces para mejorar la experiencia de uso. Con sensor \xF3ptico. Resoluci\xF3n de 8500dpi. Creado para llevar a todas partes. Control inteligente y navegaci\xF3n f\xE1cil.",id:"modal4"}];function Sp(){const e=[ke.img3,ke.img2,ke.img1,ke.img4];return G(wa,{children:[Ax.map(function(t,r){return y(Cx,{title:t.title,titleCard:t.titleCard,textCard:t.textCard,imgCard:e[r],id:t.id})}),y(px,{}),G("div",{className:"lista-card row container-fluid",children:[y(Xa,{title:"El mejor mouse ",text:"Razer Viper V2 Pro Hyperspeed",img:ke.img3,modal:"#modal1"}),y(Xa,{title:"El mejor teclado ",text:"BlackWidow V3 QWERTY",img:ke.img2,modal:"#modal2"}),y(Xa,{title:"El mejor teclado ",text:"Razer Huntsman Mini QWERTY Razer",img:ke.img1,modal:"#modal3"}),y(Xa,{title:"El mejor mouse ",text:"Razer DeathAdder V2",img:ke.img4,modal:"#modal4"})]})]})}function Sl(e){return y(wa,{children:G("div",{className:" text-center centrar",children:[y("h1",{className:"text-success fw-bold txt-shadow my-p",children:e.title}),y("p",{className:"text-white txt-shadow fs-6 w-50",children:e.text}),y("div",{className:"container-fluid container-img rounded",children:y("img",{src:e.img,className:"rounded"})})]})})}function Px(){return G("div",{children:[y(Sl,{title:"LA MEJOR EXPERIENCIA DE JUEGO EN EL MERCADO",text:"The Razer Kishi V2 is designed to meet the standards of competitive console controllers with cutting edge microswitch buttons, analog triggers, and programmable macros.",img:ke.more1}),y(Sl,{title:"PERIF\xC9RICOS DE LA M\xC1S ALTA CALIDAD",text:"Rethink everything you knew about mobile gaming. Razer Kishi V2 is a universal mobile gaming controller that brings a console-class gameplay experience to your smartphone. Play the best AAA games, on your mobile phone, exactly as you\u2019d expect to play them on a game console \u2013 zero compromises.",img:ke.more2}),y(Sl,{title:"PRECIOS POR LA MEJOR CALIDAD",text:"Go beyond mobile gaming - use Kishi to play full PC and console games directly on your phone, with support for the biggest game streaming apps. Stream from your own device, or play from the cloud. ",img:ke.more3}),y("footer",{})]})}function Ox(e){return y("div",{children:G("div",{className:"card bg-dark text-white",children:[y("img",{src:e.imgBg,className:"card-img vh-80",alt:"..."}),G("div",{className:"card-img-overlay transparentize-img text-center",children:[y("h5",{className:"card-title h3 text-success",children:e.title}),y("p",{className:"card-text w-75 m-auto",children:e.text}),y("div",{className:"container-fluid container-img rounded mt-5",children:y("img",{src:e.imgItem,className:"rounded"})})]})]})})}var Rx=[{title:"PREMIUN SERVICE",text:"Razer Gold is the unified virtual credits for gamers worldwide, available in over 42,000 games and entertainment titles. Use Razer Gold to buy games and in-game content to get more bang for your buck\u2014including getting rewarded with Razer Silver and exclusive game deals  Get started by reloading your Razer Gold account online, or at any of our 5.6 million touchpoints around the world"},{title:"SILVER SERVICE",text:"Razer Silver is the only loyalty rewards program for gamers. Earn Razer Silver simply by using Razer Gold to make your game purchases or participating in our software and services. Utilize your Razer Silver in exclusive events or use them to redeem exciting rewards\u2014from Razer hardware to digital rewards and discounts."},{title:"GOLD SERVICE",text:"Gold PINs are a digital code used to reload Razer Gold wallets or top up participating game credits. Gold PINs can be purchased at over 5.6 million touchpoints globally, including convenience stores, consumer electronics chains, and department stores."}];function Nx(){const e=[ke.service1,ke.service2,ke.service3],t=[ke.item1,ke.item2,ke.item3];return G("div",{children:[G("div",{className:"card m-0 text-center rounded-0 bg-transparent ",children:[y("div",{className:"card-header bg-secondary text-white rounded-0 txt-shadow ",children:"Recuerda que puedes tener un descuento adicional si te unes ahora."}),G("div",{className:"card-body text-light transparentize",children:[y("h5",{className:"card-title h3 text-success",children:"NUESTROS SERVICIOS"}),G("p",{className:"card-text w-50 m-auto lh-lg",children:[y("p",{className:"mt-3",children:"Join over millions of users who enjoy using Razer Services to enrich their gaming experience. "}),y("br",{}),G("p",{children:["Razer Gold and Silver offers users the competitive advantage in any battlefield. Use Gold PINs to purchase from our ever-expanding list of games in the Gold Webshop. Protect your gear with RazerCare and use Razer ID to access all the best services Razer has to offer. ",y("br",{})," ",y("br",{})]}),y("p",{children:"Unlock your ultimate gaming potential with Razer Services now."})]})]})]}),Rx.map(function(r,n){return y(Ox,{imgBg:e[n],imgItem:t[n],title:r.title,text:r.text})})]})}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ep(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ep(Object(r),!0).forEach(function(n){Lx(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ep(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Wi(e){return Wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wi(e)}function zx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ip(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Mx(e,t,r){return t&&Ip(e.prototype,t),r&&Ip(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Lx(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function du(e,t){return jx(e)||$x(e,t)||xb(e,t)||Bx()}function ks(e){return Dx(e)||Fx(e)||xb(e)||Ux()}function Dx(e){if(Array.isArray(e))return $c(e)}function jx(e){if(Array.isArray(e))return e}function Fx(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $x(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,a=!1,i,s;try{for(r=r.call(e);!(o=(i=r.next()).done)&&(n.push(i.value),!(t&&n.length===t));o=!0);}catch(l){a=!0,s=l}finally{try{!o&&r.return!=null&&r.return()}finally{if(a)throw s}}return n}}function xb(e,t){if(!!e){if(typeof e=="string")return $c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $c(e,t)}}function $c(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ux(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tp=function(){},uu={},kb={},_b=null,Sb={mark:Tp,measure:Tp};try{typeof window!="undefined"&&(uu=window),typeof document!="undefined"&&(kb=document),typeof MutationObserver!="undefined"&&(_b=MutationObserver),typeof performance!="undefined"&&(Sb=performance)}catch{}var Vx=uu.navigator||{},Cp=Vx.userAgent,Ap=Cp===void 0?"":Cp,Ir=uu,re=kb,Pp=_b,Ja=Sb;Ir.document;var Xt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Eb=~Ap.indexOf("MSIE")||~Ap.indexOf("Trident/"),Wt="___FONT_AWESOME___",Uc=16,Ib="fa",Tb="svg-inline--fa",en="data-fa-i2svg",Bc="data-fa-pseudo-element",Hx="data-fa-pseudo-element-pending",fu="data-prefix",pu="data-icon",Op="fontawesome-i2svg",Wx="async",Gx=["HTML","HEAD","STYLE","SCRIPT"],Cb=function(){try{return!0}catch{return!1}}(),mu={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Gi={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Ab={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Kx={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Yx=/fa[srltdbk\-\ ]/,Pb="fa-layers-text",qx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Qx={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Ob=[1,2,3,4,5,6,7,8,9,10],Xx=Ob.concat([11,12,13,14,15,16,17,18,19,20]),Jx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Zx=[].concat(ks(Object.keys(Gi)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hr.GROUP,Hr.SWAP_OPACITY,Hr.PRIMARY,Hr.SECONDARY]).concat(Ob.map(function(e){return"".concat(e,"x")})).concat(Xx.map(function(e){return"w-".concat(e)})),Rb=Ir.FontAwesomeConfig||{};function e5(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function t5(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var r5=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];r5.forEach(function(e){var t=du(e,2),r=t[0],n=t[1],o=t5(e5(r));o!=null&&(Rb[n]=o)})}var n5={familyPrefix:Ib,styleDefault:"solid",replacementClass:Tb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Do=P(P({},n5),Rb);Do.autoReplaceSvg||(Do.observeMutations=!1);var z={};Object.keys(Do).forEach(function(e){Object.defineProperty(z,e,{enumerable:!0,set:function(r){Do[e]=r,fi.forEach(function(n){return n(z)})},get:function(){return Do[e]}})});Ir.FontAwesomeConfig=z;var fi=[];function o5(e){return fi.push(e),function(){fi.splice(fi.indexOf(e),1)}}var er=Uc,kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function a5(e){if(!(!e||!Xt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var r=re.head.childNodes,n=null,o=r.length-1;o>-1;o--){var a=r[o],i=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(n=a)}return re.head.insertBefore(t,n),e}}var i5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ia(){for(var e=12,t="";e-- >0;)t+=i5[Math.random()*62|0];return t}function oo(e){for(var t=[],r=(e||[]).length>>>0;r--;)t[r]=e[r];return t}function gu(e){return e.classList?oo(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Nb(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s5(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,'="').concat(Nb(e[r]),'" ')},"").trim()}function _s(e){return Object.keys(e||{}).reduce(function(t,r){return t+"".concat(r,": ").concat(e[r].trim(),";")},"")}function hu(e){return e.size!==kt.size||e.x!==kt.x||e.y!==kt.y||e.rotate!==kt.rotate||e.flipX||e.flipY}function l5(e){var t=e.transform,r=e.containerWidth,n=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(a," ").concat(i," ").concat(s)},c={transform:"translate(".concat(n/2*-1," -256)")};return{outer:o,inner:l,path:c}}function c5(e){var t=e.transform,r=e.width,n=r===void 0?Uc:r,o=e.height,a=o===void 0?Uc:o,i=e.startCentered,s=i===void 0?!1:i,l="";return s&&Eb?l+="translate(".concat(t.x/er-n/2,"em, ").concat(t.y/er-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/er,"em), calc(-50% + ").concat(t.y/er,"em)) "):l+="translate(".concat(t.x/er,"em, ").concat(t.y/er,"em) "),l+="scale(".concat(t.size/er*(t.flipX?-1:1),", ").concat(t.size/er*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var d5=`:root, :host {
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
}`;function zb(){var e=Ib,t=Tb,r=z.familyPrefix,n=z.replacementClass,o=d5;if(r!==e||n!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");o=o.replace(a,".".concat(r,"-")).replace(i,"--".concat(r,"-")).replace(s,".".concat(n))}return o}var Rp=!1;function El(){z.autoAddCss&&!Rp&&(a5(zb()),Rp=!0)}var u5={mixout:function(){return{dom:{css:zb,insertCss:El}}},hooks:function(){return{beforeDOMElementCreation:function(){El()},beforeI2svg:function(){El()}}}},Gt=Ir||{};Gt[Wt]||(Gt[Wt]={});Gt[Wt].styles||(Gt[Wt].styles={});Gt[Wt].hooks||(Gt[Wt].hooks={});Gt[Wt].shims||(Gt[Wt].shims=[]);var pt=Gt[Wt],Mb=[],f5=function e(){re.removeEventListener("DOMContentLoaded",e),Ki=1,Mb.map(function(t){return t()})},Ki=!1;Xt&&(Ki=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),Ki||re.addEventListener("DOMContentLoaded",f5));function p5(e){!Xt||(Ki?setTimeout(e,0):Mb.push(e))}function ka(e){var t=e.tag,r=e.attributes,n=r===void 0?{}:r,o=e.children,a=o===void 0?[]:o;return typeof e=="string"?Nb(e):"<".concat(t," ").concat(s5(n),">").concat(a.map(ka).join(""),"</").concat(t,">")}function Np(e,t,r){if(e&&e[t]&&e[t][r])return{prefix:t,iconName:r,icon:e[t][r]}}var m5=function(t,r){return function(n,o,a,i){return t.call(r,n,o,a,i)}},Il=function(t,r,n,o){var a=Object.keys(t),i=a.length,s=o!==void 0?m5(r,o):r,l,c,u;for(n===void 0?(l=1,u=t[a[0]]):(l=0,u=n);l<i;l++)c=a[l],u=s(u,t[c],c,t);return u};function g5(e){for(var t=[],r=0,n=e.length;r<n;){var o=e.charCodeAt(r++);if(o>=55296&&o<=56319&&r<n){var a=e.charCodeAt(r++);(a&64512)==56320?t.push(((o&1023)<<10)+(a&1023)+65536):(t.push(o),r--)}else t.push(o)}return t}function Vc(e){var t=g5(e);return t.length===1?t[0].toString(16):null}function h5(e,t){var r=e.length,n=e.charCodeAt(t),o;return n>=55296&&n<=56319&&r>t+1&&(o=e.charCodeAt(t+1),o>=56320&&o<=57343)?(n-55296)*1024+o-56320+65536:n}function zp(e){return Object.keys(e).reduce(function(t,r){var n=e[r],o=!!n.icon;return o?t[n.iconName]=n.icon:t[r]=n,t},{})}function Hc(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,o=n===void 0?!1:n,a=zp(t);typeof pt.hooks.addPack=="function"&&!o?pt.hooks.addPack(e,zp(t)):pt.styles[e]=P(P({},pt.styles[e]||{}),a),e==="fas"&&Hc("fa",t)}var jo=pt.styles,b5=pt.shims,v5=Object.values(Ab),bu=null,Lb={},Db={},jb={},Fb={},$b={},y5=Object.keys(mu);function w5(e){return~Zx.indexOf(e)}function x5(e,t){var r=t.split("-"),n=r[0],o=r.slice(1).join("-");return n===e&&o!==""&&!w5(o)?o:null}var Ub=function(){var t=function(a){return Il(jo,function(i,s,l){return i[l]=Il(s,a,{}),i},{})};Lb=t(function(o,a,i){if(a[3]&&(o[a[3]]=i),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){o[l.toString(16)]=i})}return o}),Db=t(function(o,a,i){if(o[i]=i,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){o[l]=i})}return o}),$b=t(function(o,a,i){var s=a[2];return o[i]=i,s.forEach(function(l){o[l]=i}),o});var r="far"in jo||z.autoFetchSvg,n=Il(b5,function(o,a){var i=a[0],s=a[1],l=a[2];return s==="far"&&!r&&(s="fas"),typeof i=="string"&&(o.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(o.unicodes[i.toString(16)]={prefix:s,iconName:l}),o},{names:{},unicodes:{}});jb=n.names,Fb=n.unicodes,bu=Ss(z.styleDefault)};o5(function(e){bu=Ss(e.styleDefault)});Ub();function vu(e,t){return(Lb[e]||{})[t]}function k5(e,t){return(Db[e]||{})[t]}function Nn(e,t){return($b[e]||{})[t]}function Bb(e){return jb[e]||{prefix:null,iconName:null}}function _5(e){var t=Fb[e],r=vu("fas",e);return t||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Tr(){return bu}var yu=function(){return{prefix:null,iconName:null,rest:[]}};function Ss(e){var t=mu[e],r=Gi[e]||Gi[t],n=e in pt.styles?e:null;return r||n||null}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.skipLookups,n=r===void 0?!1:r,o=null,a=e.reduce(function(i,s){var l=x5(z.familyPrefix,s);if(jo[s]?(s=v5.includes(s)?Kx[s]:s,o=s,i.prefix=s):y5.indexOf(s)>-1?(o=s,i.prefix=Ss(s)):l?i.iconName=l:s!==z.replacementClass&&i.rest.push(s),!n&&i.prefix&&i.iconName){var c=o==="fa"?Bb(i.iconName):{},u=Nn(i.prefix,i.iconName);c.prefix&&(o=null),i.iconName=c.iconName||u||i.iconName,i.prefix=c.prefix||i.prefix,i.prefix==="far"&&!jo.far&&jo.fas&&!z.autoFetchSvg&&(i.prefix="fas")}return i},yu());return(a.prefix==="fa"||o==="fa")&&(a.prefix=Tr()||"fas"),a}var S5=function(){function e(){zx(this,e),this.definitions={}}return Mx(e,[{key:"add",value:function(){for(var r=this,n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];var i=o.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){r.definitions[s]=P(P({},r.definitions[s]||{}),i[s]),Hc(s,i[s]);var l=Ab[s];l&&Hc(l,i[s]),Ub()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var o=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(o).map(function(a){var i=o[a],s=i.prefix,l=i.iconName,c=i.icon,u=c[2];r[s]||(r[s]={}),u.length>0&&u.forEach(function(p){typeof p=="string"&&(r[s][p]=c)}),r[s][l]=c}),r}}]),e}(),Mp=[],zn={},Vn={},E5=Object.keys(Vn);function I5(e,t){var r=t.mixoutsTo;return Mp=e,zn={},Object.keys(Vn).forEach(function(n){E5.indexOf(n)===-1&&delete Vn[n]}),Mp.forEach(function(n){var o=n.mixout?n.mixout():{};if(Object.keys(o).forEach(function(i){typeof o[i]=="function"&&(r[i]=o[i]),Wi(o[i])==="object"&&Object.keys(o[i]).forEach(function(s){r[i]||(r[i]={}),r[i][s]=o[i][s]})}),n.hooks){var a=n.hooks();Object.keys(a).forEach(function(i){zn[i]||(zn[i]=[]),zn[i].push(a[i])})}n.provides&&n.provides(Vn)}),r}function Wc(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];var a=zn[e]||[];return a.forEach(function(i){t=i.apply(null,[t].concat(n))}),t}function tn(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=zn[e]||[];o.forEach(function(a){a.apply(null,r)})}function Kt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vn[e]?Vn[e].apply(null,t):void 0}function Gc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,r=e.prefix||Tr();if(!!t)return t=Nn(r,t)||t,Np(Vb.definitions,r,t)||Np(pt.styles,r,t)}var Vb=new S5,T5=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,tn("noAuto")},C5={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xt?(tn("beforeI2svg",t),Kt("pseudoElements2svg",t),Kt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,p5(function(){P5({autoReplaceSvgRoot:r}),tn("watch",t)})}},A5={icon:function(t){if(t===null)return null;if(Wi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Nn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ss(t[0]);return{prefix:n,iconName:Nn(n,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(z.familyPrefix,"-"))>-1||t.match(Yx))){var o=Es(t.split(" "),{skipLookups:!0});return{prefix:o.prefix||Tr(),iconName:Nn(o.prefix,o.iconName)||o.iconName}}if(typeof t=="string"){var a=Tr();return{prefix:a,iconName:Nn(a,t)||t}}}},qe={noAuto:T5,config:z,dom:C5,parse:A5,library:Vb,findIconDefinition:Gc,toHtml:ka},P5=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.autoReplaceSvgRoot,n=r===void 0?re:r;(Object.keys(pt.styles).length>0||z.autoFetchSvg)&&Xt&&z.autoReplaceSvg&&qe.dom.i2svg({node:n})};function Is(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(n){return ka(n)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Xt){var n=re.createElement("div");return n.innerHTML=e.html,n.children}}}),e}function O5(e){var t=e.children,r=e.main,n=e.mask,o=e.attributes,a=e.styles,i=e.transform;if(hu(i)&&r.found&&!n.found){var s=r.width,l=r.height,c={x:s/l/2,y:.5};o.style=_s(P(P({},a),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function R5(e){var t=e.prefix,r=e.iconName,n=e.children,o=e.attributes,a=e.symbol,i=a===!0?"".concat(t,"-").concat(z.familyPrefix,"-").concat(r):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},o),{},{id:i}),children:n}]}]}function wu(e){var t=e.icons,r=t.main,n=t.mask,o=e.prefix,a=e.iconName,i=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,p=e.extra,d=e.watchable,h=d===void 0?!1:d,w=n.found?n:r,E=w.width,C=w.height,m=o==="fak",f=[z.replacementClass,a?"".concat(z.familyPrefix,"-").concat(a):""].filter(function(L){return p.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(p.classes).join(" "),g={children:[],attributes:P(P({},p.attributes),{},{"data-prefix":o,"data-icon":a,class:f,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(C)})},b=m&&!~p.classes.indexOf("fa-fw")?{width:"".concat(E/C*16*.0625,"em")}:{};h&&(g.attributes[en]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(u||ia())},children:[l]}),delete g.attributes.title);var x=P(P({},g),{},{prefix:o,iconName:a,main:r,mask:n,maskId:c,transform:i,symbol:s,styles:P(P({},b),p.styles)}),T=n.found&&r.found?Kt("generateAbstractMask",x)||{children:[],attributes:{}}:Kt("generateAbstractIcon",x)||{children:[],attributes:{}},k=T.children,I=T.attributes;return x.children=k,x.attributes=I,s?R5(x):O5(x)}function Lp(e){var t=e.content,r=e.width,n=e.height,o=e.transform,a=e.title,i=e.extra,s=e.watchable,l=s===void 0?!1:s,c=P(P(P({},i.attributes),a?{title:a}:{}),{},{class:i.classes.join(" ")});l&&(c[en]="");var u=P({},i.styles);hu(o)&&(u.transform=c5({transform:o,startCentered:!0,width:r,height:n}),u["-webkit-transform"]=u.transform);var p=_s(u);p.length>0&&(c.style=p);var d=[];return d.push({tag:"span",attributes:c,children:[t]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function N5(e){var t=e.content,r=e.title,n=e.extra,o=P(P(P({},n.attributes),r?{title:r}:{}),{},{class:n.classes.join(" ")}),a=_s(n.styles);a.length>0&&(o.style=a);var i=[];return i.push({tag:"span",attributes:o,children:[t]}),r&&i.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),i}var Tl=pt.styles;function Kc(e){var t=e[0],r=e[1],n=e.slice(4),o=du(n,1),a=o[0],i=null;return Array.isArray(a)?i={tag:"g",attributes:{class:"".concat(z.familyPrefix,"-").concat(Hr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(Hr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(z.familyPrefix,"-").concat(Hr.PRIMARY),fill:"currentColor",d:a[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:r,icon:i}}var z5={found:!1,width:512,height:512};function M5(e,t){!Cb&&!z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Yc(e,t){var r=t;return t==="fa"&&z.styleDefault!==null&&(t=Tr()),new Promise(function(n,o){if(Kt("missingIconAbstract"),r==="fa"){var a=Bb(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Tl[t]&&Tl[t][e]){var i=Tl[t][e];return n(Kc(i))}M5(e,t),n(P(P({},z5),{},{icon:z.showMissingIcons&&e?Kt("missingIconAbstract")||{}:{}}))})}var Dp=function(){},qc=z.measurePerformance&&Ja&&Ja.mark&&Ja.measure?Ja:{mark:Dp,measure:Dp},Eo='FA "6.1.1"',L5=function(t){return qc.mark("".concat(Eo," ").concat(t," begins")),function(){return Hb(t)}},Hb=function(t){qc.mark("".concat(Eo," ").concat(t," ends")),qc.measure("".concat(Eo," ").concat(t),"".concat(Eo," ").concat(t," begins"),"".concat(Eo," ").concat(t," ends"))},xu={begin:L5,end:Hb},pi=function(){};function jp(e){var t=e.getAttribute?e.getAttribute(en):null;return typeof t=="string"}function D5(e){var t=e.getAttribute?e.getAttribute(fu):null,r=e.getAttribute?e.getAttribute(pu):null;return t&&r}function j5(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(z.replacementClass)}function F5(){if(z.autoReplaceSvg===!0)return mi.replace;var e=mi[z.autoReplaceSvg];return e||mi.replace}function $5(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function U5(e){return re.createElement(e)}function Wb(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.ceFn,n=r===void 0?e.tag==="svg"?$5:U5:r;if(typeof e=="string")return re.createTextNode(e);var o=n(e.tag);Object.keys(e.attributes||[]).forEach(function(i){o.setAttribute(i,e.attributes[i])});var a=e.children||[];return a.forEach(function(i){o.appendChild(Wb(i,{ceFn:n}))}),o}function B5(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mi={replace:function(t){var r=t[0];if(r.parentNode)if(t[1].forEach(function(o){r.parentNode.insertBefore(Wb(o),r)}),r.getAttribute(en)===null&&z.keepOriginalSource){var n=re.createComment(B5(r));r.parentNode.replaceChild(n,r)}else r.remove()},nest:function(t){var r=t[0],n=t[1];if(~gu(r).indexOf(z.replacementClass))return mi.replace(t);var o=new RegExp("".concat(z.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(s,l){return l===z.replacementClass||l.match(o)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(s){return ka(s)}).join(`
`);r.setAttribute(en,""),r.innerHTML=i}};function Fp(e){e()}function Gb(e,t){var r=typeof t=="function"?t:pi;if(e.length===0)r();else{var n=Fp;z.mutateApproach===Wx&&(n=Ir.requestAnimationFrame||Fp),n(function(){var o=F5(),a=xu.begin("mutate");e.map(o),a(),r()})}}var ku=!1;function Kb(){ku=!0}function Qc(){ku=!1}var Yi=null;function $p(e){if(!!Pp&&!!z.observeMutations){var t=e.treeCallback,r=t===void 0?pi:t,n=e.nodeCallback,o=n===void 0?pi:n,a=e.pseudoElementsCallback,i=a===void 0?pi:a,s=e.observeMutationsRoot,l=s===void 0?re:s;Yi=new Pp(function(c){if(!ku){var u=Tr();oo(c).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!jp(p.addedNodes[0])&&(z.searchPseudoElements&&i(p.target),r(p.target)),p.type==="attributes"&&p.target.parentNode&&z.searchPseudoElements&&i(p.target.parentNode),p.type==="attributes"&&jp(p.target)&&~Jx.indexOf(p.attributeName))if(p.attributeName==="class"&&D5(p.target)){var d=Es(gu(p.target)),h=d.prefix,w=d.iconName;p.target.setAttribute(fu,h||u),w&&p.target.setAttribute(pu,w)}else j5(p.target)&&o(p.target)})}}),Xt&&Yi.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function V5(){!Yi||Yi.disconnect()}function H5(e){var t=e.getAttribute("style"),r=[];return t&&(r=t.split(";").reduce(function(n,o){var a=o.split(":"),i=a[0],s=a.slice(1);return i&&s.length>0&&(n[i]=s.join(":").trim()),n},{})),r}function W5(e){var t=e.getAttribute("data-prefix"),r=e.getAttribute("data-icon"),n=e.innerText!==void 0?e.innerText.trim():"",o=Es(gu(e));return o.prefix||(o.prefix=Tr()),t&&r&&(o.prefix=t,o.iconName=r),o.iconName&&o.prefix||o.prefix&&n.length>0&&(o.iconName=k5(o.prefix,e.innerText)||vu(o.prefix,Vc(e.innerText))),o}function G5(e){var t=oo(e.attributes).reduce(function(o,a){return o.name!=="class"&&o.name!=="style"&&(o[a.name]=a.value),o},{}),r=e.getAttribute("title"),n=e.getAttribute("data-fa-title-id");return z.autoA11y&&(r?t["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(n||ia()):(t["aria-hidden"]="true",t.focusable="false")),t}function K5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Up(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=W5(e),n=r.iconName,o=r.prefix,a=r.rest,i=G5(e),s=Wc("parseNodeAttributes",{},e),l=t.styleParser?H5(e):[];return P({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:o,transform:kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:i}},s)}var Y5=pt.styles;function Yb(e){var t=z.autoReplaceSvg==="nest"?Up(e,{styleParser:!1}):Up(e);return~t.extra.classes.indexOf(Pb)?Kt("generateLayersText",e,t):Kt("generateSvgReplacementMutation",e,t)}function Bp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xt)return Promise.resolve();var r=re.documentElement.classList,n=function(p){return r.add("".concat(Op,"-").concat(p))},o=function(p){return r.remove("".concat(Op,"-").concat(p))},a=z.autoFetchSvg?Object.keys(mu):Object.keys(Y5),i=[".".concat(Pb,":not([").concat(en,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(en,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=oo(e.querySelectorAll(i))}catch{}if(s.length>0)n("pending"),o("complete");else return Promise.resolve();var l=xu.begin("onTree"),c=s.reduce(function(u,p){try{var d=Yb(p);d&&u.push(d)}catch(h){Cb||h.name==="MissingIcon"&&console.error(h)}return u},[]);return new Promise(function(u,p){Promise.all(c).then(function(d){Gb(d,function(){n("active"),n("complete"),o("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(d){l(),p(d)})})}function q5(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yb(e).then(function(r){r&&Gb([r],t)})}function Q5(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(t||{}).icon?t:Gc(t||{}),o=r.mask;return o&&(o=(o||{}).icon?o:Gc(o||{})),e(n,P(P({},r),{},{mask:o}))}}var X5=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?kt:n,a=r.symbol,i=a===void 0?!1:a,s=r.mask,l=s===void 0?null:s,c=r.maskId,u=c===void 0?null:c,p=r.title,d=p===void 0?null:p,h=r.titleId,w=h===void 0?null:h,E=r.classes,C=E===void 0?[]:E,m=r.attributes,f=m===void 0?{}:m,g=r.styles,b=g===void 0?{}:g;if(!!t){var x=t.prefix,T=t.iconName,k=t.icon;return Is(P({type:"icon"},t),function(){return tn("beforeDOMElementCreation",{iconDefinition:t,params:r}),z.autoA11y&&(d?f["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(w||ia()):(f["aria-hidden"]="true",f.focusable="false")),wu({icons:{main:Kc(k),mask:l?Kc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:T,transform:P(P({},kt),o),symbol:i,title:d,maskId:u,titleId:w,extra:{attributes:f,styles:b,classes:C}})})}},J5={mixout:function(){return{icon:Q5(X5)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=Bp,r.nodeCallback=q5,r}}},provides:function(t){t.i2svg=function(r){var n=r.node,o=n===void 0?re:n,a=r.callback,i=a===void 0?function(){}:a;return Bp(o,i)},t.generateSvgReplacementMutation=function(r,n){var o=n.iconName,a=n.title,i=n.titleId,s=n.prefix,l=n.transform,c=n.symbol,u=n.mask,p=n.maskId,d=n.extra;return new Promise(function(h,w){Promise.all([Yc(o,s),u.iconName?Yc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var C=du(E,2),m=C[0],f=C[1];h([r,wu({icons:{main:m,mask:f},prefix:s,iconName:o,transform:l,symbol:c,maskId:p,title:a,titleId:i,extra:d,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(r){var n=r.children,o=r.attributes,a=r.main,i=r.transform,s=r.styles,l=_s(s);l.length>0&&(o.style=l);var c;return hu(i)&&(c=Kt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:o}}}},Z5={mixout:function(){return{layer:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.classes,a=o===void 0?[]:o;return Is({type:"layer"},function(){tn("beforeDOMElementCreation",{assembler:r,params:n});var i=[];return r(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(z.familyPrefix,"-layers")].concat(ks(a)).join(" ")},children:i}]})}}}},e2={mixout:function(){return{counter:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.title,a=o===void 0?null:o,i=n.classes,s=i===void 0?[]:i,l=n.attributes,c=l===void 0?{}:l,u=n.styles,p=u===void 0?{}:u;return Is({type:"counter",content:r},function(){return tn("beforeDOMElementCreation",{content:r,params:n}),N5({content:r.toString(),title:a,extra:{attributes:c,styles:p,classes:["".concat(z.familyPrefix,"-layers-counter")].concat(ks(s))}})})}}}},t2={mixout:function(){return{text:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=n.transform,a=o===void 0?kt:o,i=n.title,s=i===void 0?null:i,l=n.classes,c=l===void 0?[]:l,u=n.attributes,p=u===void 0?{}:u,d=n.styles,h=d===void 0?{}:d;return Is({type:"text",content:r},function(){return tn("beforeDOMElementCreation",{content:r,params:n}),Lp({content:r,transform:P(P({},kt),a),title:s,extra:{attributes:p,styles:h,classes:["".concat(z.familyPrefix,"-layers-text")].concat(ks(c))}})})}}},provides:function(t){t.generateLayersText=function(r,n){var o=n.title,a=n.transform,i=n.extra,s=null,l=null;if(Eb){var c=parseInt(getComputedStyle(r).fontSize,10),u=r.getBoundingClientRect();s=u.width/c,l=u.height/c}return z.autoA11y&&!o&&(i.attributes["aria-hidden"]="true"),Promise.resolve([r,Lp({content:r.innerHTML,width:s,height:l,transform:a,title:o,extra:i,watchable:!0})])}}},r2=new RegExp('"',"ug"),Vp=[1105920,1112319];function n2(e){var t=e.replace(r2,""),r=h5(t,0),n=r>=Vp[0]&&r<=Vp[1],o=t.length===2?t[0]===t[1]:!1;return{value:Vc(o?t[0]:t),isSecondary:n||o}}function Hp(e,t){var r="".concat(Hx).concat(t.replace(":","-"));return new Promise(function(n,o){if(e.getAttribute(r)!==null)return n();var a=oo(e.children),i=a.filter(function(T){return T.getAttribute(Bc)===t})[0],s=Ir.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qx),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(i&&!l)return e.removeChild(i),n();if(l&&u!=="none"&&u!==""){var p=s.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Gi[l[2].toLowerCase()]:Qx[c],h=n2(p),w=h.value,E=h.isSecondary,C=l[0].startsWith("FontAwesome"),m=vu(d,w),f=m;if(C){var g=_5(w);g.iconName&&g.prefix&&(m=g.iconName,d=g.prefix)}if(m&&!E&&(!i||i.getAttribute(fu)!==d||i.getAttribute(pu)!==f)){e.setAttribute(r,f),i&&e.removeChild(i);var b=K5(),x=b.extra;x.attributes[Bc]=t,Yc(m,d).then(function(T){var k=wu(P(P({},b),{},{icons:{main:T,mask:yu()},prefix:d,iconName:f,extra:x,watchable:!0})),I=re.createElement("svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=k.map(function(L){return ka(L)}).join(`
`),e.removeAttribute(r),n()}).catch(o)}else n()}else n()})}function o2(e){return Promise.all([Hp(e,"::before"),Hp(e,"::after")])}function a2(e){return e.parentNode!==document.head&&!~Gx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Bc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wp(e){if(!!Xt)return new Promise(function(t,r){var n=oo(e.querySelectorAll("*")).filter(a2).map(o2),o=xu.begin("searchPseudoElements");Kb(),Promise.all(n).then(function(){o(),Qc(),t()}).catch(function(){o(),Qc(),r()})})}var i2={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=Wp,r}}},provides:function(t){t.pseudoElements2svg=function(r){var n=r.node,o=n===void 0?re:n;z.searchPseudoElements&&Wp(o)}}},Gp=!1,s2={mixout:function(){return{dom:{unwatch:function(){Kb(),Gp=!0}}}},hooks:function(){return{bootstrap:function(){$p(Wc("mutationObserverCallbacks",{}))},noAuto:function(){V5()},watch:function(r){var n=r.observeMutationsRoot;Gp?Qc():$p(Wc("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}},Kp=function(t){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,o){var a=o.toLowerCase().split("-"),i=a[0],s=a.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},r)},l2={mixout:function(){return{parse:{transform:function(r){return Kp(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-transform");return o&&(r.transform=Kp(o)),r}}},provides:function(t){t.generateAbstractTransformGrouping=function(r){var n=r.main,o=r.transform,a=r.containerWidth,i=r.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(o.x*32,", ").concat(o.y*32,") "),c="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),u="rotate(".concat(o.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},h={outer:s,inner:p,path:d};return{tag:"g",attributes:P({},h.outer),children:[{tag:"g",attributes:P({},h.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:P(P({},n.icon.attributes),h.path)}]}]}}}},Cl={x:0,y:0,width:"100%",height:"100%"};function Yp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function c2(e){return e.tag==="g"?e.children:[e]}var d2={hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-mask"),a=o?Es(o.split(" ").map(function(i){return i.trim()})):yu();return a.prefix||(a.prefix=Tr()),r.mask=a,r.maskId=n.getAttribute("data-fa-mask-id"),r}}},provides:function(t){t.generateAbstractMask=function(r){var n=r.children,o=r.attributes,a=r.main,i=r.mask,s=r.maskId,l=r.transform,c=a.width,u=a.icon,p=i.width,d=i.icon,h=l5({transform:l,containerWidth:p,iconWidth:c}),w={tag:"rect",attributes:P(P({},Cl),{},{fill:"white"})},E=u.children?{children:u.children.map(Yp)}:{},C={tag:"g",attributes:P({},h.inner),children:[Yp(P({tag:u.tag,attributes:P(P({},u.attributes),h.path)},E))]},m={tag:"g",attributes:P({},h.outer),children:[C]},f="mask-".concat(s||ia()),g="clip-".concat(s||ia()),b={tag:"mask",attributes:P(P({},Cl),{},{id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,m]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:c2(d)},b]};return n.push(x,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(f,")")},Cl)}),{children:n,attributes:o}}}},u2={provides:function(t){var r=!1;Ir.matchMedia&&(r=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],o={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:P(P({},o),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=P(P({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},o),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||s.children.push({tag:"animate",attributes:P(P({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:P(P({},o),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:P(P({},i),{},{values:"1;0;0;0;0;1;"})}]}),r||n.push({tag:"path",attributes:P(P({},o),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},f2={hooks:function(){return{parseNodeAttributes:function(r,n){var o=n.getAttribute("data-fa-symbol"),a=o===null?!1:o===""?!0:o;return r.symbol=a,r}}}},p2=[u5,J5,Z5,e2,t2,i2,s2,l2,d2,u2,f2];I5(p2,{mixoutsTo:qe});qe.noAuto;qe.config;qe.library;qe.dom;var Xc=qe.parse;qe.findIconDefinition;qe.toHtml;var m2=qe.icon;qe.layer;qe.text;qe.counter;var qb={exports:{}},g2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h2=g2,b2=h2;function Qb(){}function Xb(){}Xb.resetWarningCache=Qb;var v2=function(){function e(n,o,a,i,s,l){if(l!==b2){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Xb,resetWarningCache:Qb};return r.PropTypes=r,r};qb.exports=v2();var B=qb.exports;function qp(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function mr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qp(Object(r),!0).forEach(function(n){Mn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qp(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function qi(e){return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qi(e)}function Mn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y2(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Jb(e,t){if(e==null)return{};var r=y2(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Jc(e){return w2(e)||x2(e)||k2(e)||_2()}function w2(e){if(Array.isArray(e))return Zc(e)}function x2(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function k2(e,t){if(!!e){if(typeof e=="string")return Zc(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Zc(e,t)}}function Zc(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S2(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,s=e.flash,l=e.spin,c=e.spinPulse,u=e.spinReverse,p=e.pulse,d=e.fixedWidth,h=e.inverse,w=e.border,E=e.listItem,C=e.flip,m=e.size,f=e.rotation,g=e.pull,b=(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":d,"fa-inverse":h,"fa-border":w,"fa-li":E,"fa-flip-horizontal":C==="horizontal"||C==="both","fa-flip-vertical":C==="vertical"||C==="both"},Mn(t,"fa-".concat(m),typeof m!="undefined"&&m!==null),Mn(t,"fa-rotate-".concat(f),typeof f!="undefined"&&f!==null&&f!==0),Mn(t,"fa-pull-".concat(g),typeof g!="undefined"&&g!==null),Mn(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map(function(x){return b[x]?x:null}).filter(function(x){return x})}function E2(e){return e=e-0,e===e}function Zb(e){return E2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,r){return r?r.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var I2=["style"];function T2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function C2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,r){var n=r.indexOf(":"),o=Zb(r.slice(0,n)),a=r.slice(n+1).trim();return o.startsWith("webkit")?t[T2(o)]=a:t[o]=a,t},{})}function ev(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(l){return ev(e,l)}),o=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=C2(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Zb(c)]=u}return l},{attrs:{}}),a=r.style,i=a===void 0?{}:a,s=Jb(r,I2);return o.attrs.style=mr(mr({},o.attrs.style),i),e.apply(void 0,[t.tag,mr(mr({},o.attrs),s)].concat(Jc(n)))}var tv=!1;try{tv=!0}catch{}function A2(){if(!tv&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Qp(e){if(e&&qi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xc.icon)return Xc.icon(e);if(e===null)return null;if(e&&qi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Al(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Mn({},e,t):{}}var P2=["forwardedRef"];function ao(e){var t=e.forwardedRef,r=Jb(e,P2),n=r.icon,o=r.mask,a=r.symbol,i=r.className,s=r.title,l=r.titleId,c=r.maskId,u=Qp(n),p=Al("classes",[].concat(Jc(S2(r)),Jc(i.split(" ")))),d=Al("transform",typeof r.transform=="string"?Xc.transform(r.transform):r.transform),h=Al("mask",Qp(o)),w=m2(u,mr(mr(mr(mr({},p),d),h),{},{symbol:a,title:s,titleId:l,maskId:c}));if(!w)return A2("Could not find icon",u),null;var E=w.abstract,C={ref:t};return Object.keys(r).forEach(function(m){ao.defaultProps.hasOwnProperty(m)||(C[m]=r[m])}),O2(E[0],C)}ao.displayName="FontAwesomeIcon";ao.propTypes={beat:B.bool,border:B.bool,bounce:B.bool,className:B.string,fade:B.bool,flash:B.bool,mask:B.oneOfType([B.object,B.array,B.string]),maskId:B.string,fixedWidth:B.bool,inverse:B.bool,flip:B.oneOf(["horizontal","vertical","both"]),icon:B.oneOfType([B.object,B.array,B.string]),listItem:B.bool,pull:B.oneOf(["right","left"]),pulse:B.bool,rotation:B.oneOf([0,90,180,270]),shake:B.bool,size:B.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B.bool,spinPulse:B.bool,spinReverse:B.bool,symbol:B.oneOfType([B.bool,B.string]),title:B.string,titleId:B.string,transform:B.oneOfType([B.string,B.object]),swapOpacity:B.bool};ao.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var O2=ev.bind(null,fg.createElement);/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var rv={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"]},nv={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z"]},Xp=Array.isArray,Jp=Object.keys,R2=Object.prototype.hasOwnProperty,N2=typeof Element!="undefined";function ed(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var r=Xp(e),n=Xp(t),o,a,i;if(r&&n){if(a=e.length,a!=t.length)return!1;for(o=a;o--!==0;)if(!ed(e[o],t[o]))return!1;return!0}if(r!=n)return!1;var s=e instanceof Date,l=t instanceof Date;if(s!=l)return!1;if(s&&l)return e.getTime()==t.getTime();var c=e instanceof RegExp,u=t instanceof RegExp;if(c!=u)return!1;if(c&&u)return e.toString()==t.toString();var p=Jp(e);if(a=p.length,a!==Jp(t).length)return!1;for(o=a;o--!==0;)if(!R2.call(t,p[o]))return!1;if(N2&&e instanceof Element&&t instanceof Element)return e===t;for(o=a;o--!==0;)if(i=p[o],!(i==="_owner"&&e.$$typeof)&&!ed(e[i],t[i]))return!1;return!0}return e!==e&&t!==t}var ar=function(t,r){try{return ed(t,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}},z2=function(t){return M2(t)&&!L2(t)};function M2(e){return!!e&&typeof e=="object"}function L2(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||F2(e)}var D2=typeof Symbol=="function"&&Symbol.for,j2=D2?Symbol.for("react.element"):60103;function F2(e){return e.$$typeof===j2}function $2(e){return Array.isArray(e)?[]:{}}function Qi(e,t){return t.clone!==!1&&t.isMergeableObject(e)?sa($2(e),e,t):e}function U2(e,t,r){return e.concat(t).map(function(n){return Qi(n,r)})}function B2(e,t,r){var n={};return r.isMergeableObject(e)&&Object.keys(e).forEach(function(o){n[o]=Qi(e[o],r)}),Object.keys(t).forEach(function(o){!r.isMergeableObject(t[o])||!e[o]?n[o]=Qi(t[o],r):n[o]=sa(e[o],t[o],r)}),n}function sa(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||U2,r.isMergeableObject=r.isMergeableObject||z2;var n=Array.isArray(t),o=Array.isArray(e),a=n===o;return a?n?r.arrayMerge(e,t,r):B2(e,t,r):Qi(t,r)}sa.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,o){return sa(n,o,r)},{})};var td=sa,V2=typeof global=="object"&&global&&global.Object===Object&&global,ov=V2,H2=typeof self=="object"&&self&&self.Object===Object&&self,W2=ov||H2||Function("return this")(),Ot=W2,G2=Ot.Symbol,Cr=G2,av=Object.prototype,K2=av.hasOwnProperty,Y2=av.toString,yo=Cr?Cr.toStringTag:void 0;function q2(e){var t=K2.call(e,yo),r=e[yo];try{e[yo]=void 0;var n=!0}catch{}var o=Y2.call(e);return n&&(t?e[yo]=r:delete e[yo]),o}var Q2=Object.prototype,X2=Q2.toString;function J2(e){return X2.call(e)}var Z2="[object Null]",ek="[object Undefined]",Zp=Cr?Cr.toStringTag:void 0;function fn(e){return e==null?e===void 0?ek:Z2:Zp&&Zp in Object(e)?q2(e):J2(e)}function iv(e,t){return function(r){return e(t(r))}}var tk=iv(Object.getPrototypeOf,Object),_u=tk;function pn(e){return e!=null&&typeof e=="object"}var rk="[object Object]",nk=Function.prototype,ok=Object.prototype,sv=nk.toString,ak=ok.hasOwnProperty,ik=sv.call(Object);function em(e){if(!pn(e)||fn(e)!=rk)return!1;var t=_u(e);if(t===null)return!0;var r=ak.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&sv.call(r)==ik}function sk(){this.__data__=[],this.size=0}function lv(e,t){return e===t||e!==e&&t!==t}function Ts(e,t){for(var r=e.length;r--;)if(lv(e[r][0],t))return r;return-1}var lk=Array.prototype,ck=lk.splice;function dk(e){var t=this.__data__,r=Ts(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():ck.call(t,r,1),--this.size,!0}function uk(e){var t=this.__data__,r=Ts(t,e);return r<0?void 0:t[r][1]}function fk(e){return Ts(this.__data__,e)>-1}function pk(e,t){var r=this.__data__,n=Ts(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Jt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Jt.prototype.clear=sk;Jt.prototype.delete=dk;Jt.prototype.get=uk;Jt.prototype.has=fk;Jt.prototype.set=pk;function mk(){this.__data__=new Jt,this.size=0}function gk(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function hk(e){return this.__data__.get(e)}function bk(e){return this.__data__.has(e)}function _a(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var vk="[object AsyncFunction]",yk="[object Function]",wk="[object GeneratorFunction]",xk="[object Proxy]";function cv(e){if(!_a(e))return!1;var t=fn(e);return t==yk||t==wk||t==vk||t==xk}var kk=Ot["__core-js_shared__"],Pl=kk,tm=function(){var e=/[^.]+$/.exec(Pl&&Pl.keys&&Pl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _k(e){return!!tm&&tm in e}var Sk=Function.prototype,Ek=Sk.toString;function mn(e){if(e!=null){try{return Ek.call(e)}catch{}try{return e+""}catch{}}return""}var Ik=/[\\^$.*+?()[\]{}|]/g,Tk=/^\[object .+?Constructor\]$/,Ck=Function.prototype,Ak=Object.prototype,Pk=Ck.toString,Ok=Ak.hasOwnProperty,Rk=RegExp("^"+Pk.call(Ok).replace(Ik,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Nk(e){if(!_a(e)||_k(e))return!1;var t=cv(e)?Rk:Tk;return t.test(mn(e))}function zk(e,t){return e==null?void 0:e[t]}function gn(e,t){var r=zk(e,t);return Nk(r)?r:void 0}var Mk=gn(Ot,"Map"),la=Mk,Lk=gn(Object,"create"),ca=Lk;function Dk(){this.__data__=ca?ca(null):{},this.size=0}function jk(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Fk="__lodash_hash_undefined__",$k=Object.prototype,Uk=$k.hasOwnProperty;function Bk(e){var t=this.__data__;if(ca){var r=t[e];return r===Fk?void 0:r}return Uk.call(t,e)?t[e]:void 0}var Vk=Object.prototype,Hk=Vk.hasOwnProperty;function Wk(e){var t=this.__data__;return ca?t[e]!==void 0:Hk.call(t,e)}var Gk="__lodash_hash_undefined__";function Kk(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=ca&&t===void 0?Gk:t,this}function rn(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}rn.prototype.clear=Dk;rn.prototype.delete=jk;rn.prototype.get=Bk;rn.prototype.has=Wk;rn.prototype.set=Kk;function Yk(){this.size=0,this.__data__={hash:new rn,map:new(la||Jt),string:new rn}}function qk(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Cs(e,t){var r=e.__data__;return qk(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Qk(e){var t=Cs(this,e).delete(e);return this.size-=t?1:0,t}function Xk(e){return Cs(this,e).get(e)}function Jk(e){return Cs(this,e).has(e)}function Zk(e,t){var r=Cs(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Rr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Rr.prototype.clear=Yk;Rr.prototype.delete=Qk;Rr.prototype.get=Xk;Rr.prototype.has=Jk;Rr.prototype.set=Zk;var e3=200;function t3(e,t){var r=this.__data__;if(r instanceof Jt){var n=r.__data__;if(!la||n.length<e3-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Rr(n)}return r.set(e,t),this.size=r.size,this}function io(e){var t=this.__data__=new Jt(e);this.size=t.size}io.prototype.clear=mk;io.prototype.delete=gk;io.prototype.get=hk;io.prototype.has=bk;io.prototype.set=t3;function r3(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var n3=function(){try{var e=gn(Object,"defineProperty");return e({},"",{}),e}catch{}}(),rm=n3;function dv(e,t,r){t=="__proto__"&&rm?rm(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var o3=Object.prototype,a3=o3.hasOwnProperty;function uv(e,t,r){var n=e[t];(!(a3.call(e,t)&&lv(n,r))||r===void 0&&!(t in e))&&dv(e,t,r)}function As(e,t,r,n){var o=!r;r||(r={});for(var a=-1,i=t.length;++a<i;){var s=t[a],l=n?n(r[s],e[s],s,r,e):void 0;l===void 0&&(l=e[s]),o?dv(r,s,l):uv(r,s,l)}return r}function i3(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var s3="[object Arguments]";function nm(e){return pn(e)&&fn(e)==s3}var fv=Object.prototype,l3=fv.hasOwnProperty,c3=fv.propertyIsEnumerable,d3=nm(function(){return arguments}())?nm:function(e){return pn(e)&&l3.call(e,"callee")&&!c3.call(e,"callee")},u3=d3,f3=Array.isArray,Sa=f3;function p3(){return!1}var pv=typeof Be=="object"&&Be&&!Be.nodeType&&Be,om=pv&&typeof Ve=="object"&&Ve&&!Ve.nodeType&&Ve,m3=om&&om.exports===pv,am=m3?Ot.Buffer:void 0,g3=am?am.isBuffer:void 0,h3=g3||p3,mv=h3,b3=9007199254740991,v3=/^(?:0|[1-9]\d*)$/;function y3(e,t){var r=typeof e;return t=t==null?b3:t,!!t&&(r=="number"||r!="symbol"&&v3.test(e))&&e>-1&&e%1==0&&e<t}var w3=9007199254740991;function gv(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=w3}var x3="[object Arguments]",k3="[object Array]",_3="[object Boolean]",S3="[object Date]",E3="[object Error]",I3="[object Function]",T3="[object Map]",C3="[object Number]",A3="[object Object]",P3="[object RegExp]",O3="[object Set]",R3="[object String]",N3="[object WeakMap]",z3="[object ArrayBuffer]",M3="[object DataView]",L3="[object Float32Array]",D3="[object Float64Array]",j3="[object Int8Array]",F3="[object Int16Array]",$3="[object Int32Array]",U3="[object Uint8Array]",B3="[object Uint8ClampedArray]",V3="[object Uint16Array]",H3="[object Uint32Array]",ee={};ee[L3]=ee[D3]=ee[j3]=ee[F3]=ee[$3]=ee[U3]=ee[B3]=ee[V3]=ee[H3]=!0;ee[x3]=ee[k3]=ee[z3]=ee[_3]=ee[M3]=ee[S3]=ee[E3]=ee[I3]=ee[T3]=ee[C3]=ee[A3]=ee[P3]=ee[O3]=ee[R3]=ee[N3]=!1;function W3(e){return pn(e)&&gv(e.length)&&!!ee[fn(e)]}function Su(e){return function(t){return e(t)}}var hv=typeof Be=="object"&&Be&&!Be.nodeType&&Be,Fo=hv&&typeof Ve=="object"&&Ve&&!Ve.nodeType&&Ve,G3=Fo&&Fo.exports===hv,Ol=G3&&ov.process,K3=function(){try{var e=Fo&&Fo.require&&Fo.require("util").types;return e||Ol&&Ol.binding&&Ol.binding("util")}catch{}}(),Jn=K3,im=Jn&&Jn.isTypedArray,Y3=im?Su(im):W3,q3=Y3,Q3=Object.prototype,X3=Q3.hasOwnProperty;function bv(e,t){var r=Sa(e),n=!r&&u3(e),o=!r&&!n&&mv(e),a=!r&&!n&&!o&&q3(e),i=r||n||o||a,s=i?i3(e.length,String):[],l=s.length;for(var c in e)(t||X3.call(e,c))&&!(i&&(c=="length"||o&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||y3(c,l)))&&s.push(c);return s}var J3=Object.prototype;function Eu(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||J3;return e===r}var Z3=iv(Object.keys,Object),e_=Z3,t_=Object.prototype,r_=t_.hasOwnProperty;function n_(e){if(!Eu(e))return e_(e);var t=[];for(var r in Object(e))r_.call(e,r)&&r!="constructor"&&t.push(r);return t}function vv(e){return e!=null&&gv(e.length)&&!cv(e)}function Iu(e){return vv(e)?bv(e):n_(e)}function o_(e,t){return e&&As(t,Iu(t),e)}function a_(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var i_=Object.prototype,s_=i_.hasOwnProperty;function l_(e){if(!_a(e))return a_(e);var t=Eu(e),r=[];for(var n in e)n=="constructor"&&(t||!s_.call(e,n))||r.push(n);return r}function Tu(e){return vv(e)?bv(e,!0):l_(e)}function c_(e,t){return e&&As(t,Tu(t),e)}var yv=typeof Be=="object"&&Be&&!Be.nodeType&&Be,sm=yv&&typeof Ve=="object"&&Ve&&!Ve.nodeType&&Ve,d_=sm&&sm.exports===yv,lm=d_?Ot.Buffer:void 0,cm=lm?lm.allocUnsafe:void 0;function u_(e,t){if(t)return e.slice();var r=e.length,n=cm?cm(r):new e.constructor(r);return e.copy(n),n}function wv(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function f_(e,t){for(var r=-1,n=e==null?0:e.length,o=0,a=[];++r<n;){var i=e[r];t(i,r,e)&&(a[o++]=i)}return a}function xv(){return[]}var p_=Object.prototype,m_=p_.propertyIsEnumerable,dm=Object.getOwnPropertySymbols,g_=dm?function(e){return e==null?[]:(e=Object(e),f_(dm(e),function(t){return m_.call(e,t)}))}:xv,Cu=g_;function h_(e,t){return As(e,Cu(e),t)}function kv(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var b_=Object.getOwnPropertySymbols,v_=b_?function(e){for(var t=[];e;)kv(t,Cu(e)),e=_u(e);return t}:xv,_v=v_;function y_(e,t){return As(e,_v(e),t)}function Sv(e,t,r){var n=t(e);return Sa(e)?n:kv(n,r(e))}function w_(e){return Sv(e,Iu,Cu)}function x_(e){return Sv(e,Tu,_v)}var k_=gn(Ot,"DataView"),rd=k_,__=gn(Ot,"Promise"),nd=__,S_=gn(Ot,"Set"),od=S_,E_=gn(Ot,"WeakMap"),ad=E_,um="[object Map]",I_="[object Object]",fm="[object Promise]",pm="[object Set]",mm="[object WeakMap]",gm="[object DataView]",T_=mn(rd),C_=mn(la),A_=mn(nd),P_=mn(od),O_=mn(ad),Fr=fn;(rd&&Fr(new rd(new ArrayBuffer(1)))!=gm||la&&Fr(new la)!=um||nd&&Fr(nd.resolve())!=fm||od&&Fr(new od)!=pm||ad&&Fr(new ad)!=mm)&&(Fr=function(e){var t=fn(e),r=t==I_?e.constructor:void 0,n=r?mn(r):"";if(n)switch(n){case T_:return gm;case C_:return um;case A_:return fm;case P_:return pm;case O_:return mm}return t});var Au=Fr,R_=Object.prototype,N_=R_.hasOwnProperty;function z_(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&N_.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var M_=Ot.Uint8Array,hm=M_;function Pu(e){var t=new e.constructor(e.byteLength);return new hm(t).set(new hm(e)),t}function L_(e,t){var r=t?Pu(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var D_=/\w*$/;function j_(e){var t=new e.constructor(e.source,D_.exec(e));return t.lastIndex=e.lastIndex,t}var bm=Cr?Cr.prototype:void 0,vm=bm?bm.valueOf:void 0;function F_(e){return vm?Object(vm.call(e)):{}}function $_(e,t){var r=t?Pu(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var U_="[object Boolean]",B_="[object Date]",V_="[object Map]",H_="[object Number]",W_="[object RegExp]",G_="[object Set]",K_="[object String]",Y_="[object Symbol]",q_="[object ArrayBuffer]",Q_="[object DataView]",X_="[object Float32Array]",J_="[object Float64Array]",Z_="[object Int8Array]",eS="[object Int16Array]",tS="[object Int32Array]",rS="[object Uint8Array]",nS="[object Uint8ClampedArray]",oS="[object Uint16Array]",aS="[object Uint32Array]";function iS(e,t,r){var n=e.constructor;switch(t){case q_:return Pu(e);case U_:case B_:return new n(+e);case Q_:return L_(e,r);case X_:case J_:case Z_:case eS:case tS:case rS:case nS:case oS:case aS:return $_(e,r);case V_:return new n;case H_:case K_:return new n(e);case W_:return j_(e);case G_:return new n;case Y_:return F_(e)}}var ym=Object.create,sS=function(){function e(){}return function(t){if(!_a(t))return{};if(ym)return ym(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),lS=sS;function cS(e){return typeof e.constructor=="function"&&!Eu(e)?lS(_u(e)):{}}var dS="[object Map]";function uS(e){return pn(e)&&Au(e)==dS}var wm=Jn&&Jn.isMap,fS=wm?Su(wm):uS,pS=fS,mS="[object Set]";function gS(e){return pn(e)&&Au(e)==mS}var xm=Jn&&Jn.isSet,hS=xm?Su(xm):gS,bS=hS,vS=1,yS=2,wS=4,Ev="[object Arguments]",xS="[object Array]",kS="[object Boolean]",_S="[object Date]",SS="[object Error]",Iv="[object Function]",ES="[object GeneratorFunction]",IS="[object Map]",TS="[object Number]",Tv="[object Object]",CS="[object RegExp]",AS="[object Set]",PS="[object String]",OS="[object Symbol]",RS="[object WeakMap]",NS="[object ArrayBuffer]",zS="[object DataView]",MS="[object Float32Array]",LS="[object Float64Array]",DS="[object Int8Array]",jS="[object Int16Array]",FS="[object Int32Array]",$S="[object Uint8Array]",US="[object Uint8ClampedArray]",BS="[object Uint16Array]",VS="[object Uint32Array]",Q={};Q[Ev]=Q[xS]=Q[NS]=Q[zS]=Q[kS]=Q[_S]=Q[MS]=Q[LS]=Q[DS]=Q[jS]=Q[FS]=Q[IS]=Q[TS]=Q[Tv]=Q[CS]=Q[AS]=Q[PS]=Q[OS]=Q[$S]=Q[US]=Q[BS]=Q[VS]=!0;Q[SS]=Q[Iv]=Q[RS]=!1;function $o(e,t,r,n,o,a){var i,s=t&vS,l=t&yS,c=t&wS;if(r&&(i=o?r(e,n,o,a):r(e)),i!==void 0)return i;if(!_a(e))return e;var u=Sa(e);if(u){if(i=z_(e),!s)return wv(e,i)}else{var p=Au(e),d=p==Iv||p==ES;if(mv(e))return u_(e,s);if(p==Tv||p==Ev||d&&!o){if(i=l||d?{}:cS(e),!s)return l?y_(e,c_(i,e)):h_(e,o_(i,e))}else{if(!Q[p])return o?e:{};i=iS(e,p,s)}}a||(a=new io);var h=a.get(e);if(h)return h;a.set(e,i),bS(e)?e.forEach(function(C){i.add($o(C,t,r,C,e,a))}):pS(e)&&e.forEach(function(C,m){i.set(m,$o(C,t,r,m,e,a))});var w=c?l?x_:w_:l?Tu:Iu,E=u?void 0:w(e);return r3(E||e,function(C,m){E&&(m=C,C=e[m]),uv(i,m,$o(C,t,r,m,e,a))}),i}var HS=4;function km(e){return $o(e,HS)}function Cv(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var WS="[object Symbol]";function Ou(e){return typeof e=="symbol"||pn(e)&&fn(e)==WS}var GS="Expected a function";function Ru(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(GS);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=e.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(Ru.Cache||Rr),r}Ru.Cache=Rr;var KS=500;function YS(e){var t=Ru(e,function(n){return r.size===KS&&r.clear(),n}),r=t.cache;return t}var qS=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,QS=/\\(\\)?/g,XS=YS(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(qS,function(r,n,o,a){t.push(o?a.replace(QS,"$1"):n||r)}),t}),JS=XS,ZS=1/0;function eE(e){if(typeof e=="string"||Ou(e))return e;var t=e+"";return t=="0"&&1/e==-ZS?"-0":t}var tE=1/0,_m=Cr?Cr.prototype:void 0,Sm=_m?_m.toString:void 0;function Av(e){if(typeof e=="string")return e;if(Sa(e))return Cv(e,Av)+"";if(Ou(e))return Sm?Sm.call(e):"";var t=e+"";return t=="0"&&1/e==-tE?"-0":t}function rE(e){return e==null?"":Av(e)}function Pv(e){return Sa(e)?Cv(e,eE):Ou(e)?[e]:wv(JS(rE(e)))}var nE=!0;function oE(e,t){if(!nE){if(e)return;var r="Warning: "+t;typeof console!="undefined"&&console.warn(r);try{throw Error(r)}catch{}}}var Ov={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,Nu=ye?Symbol.for("react.element"):60103,zu=ye?Symbol.for("react.portal"):60106,Ps=ye?Symbol.for("react.fragment"):60107,Os=ye?Symbol.for("react.strict_mode"):60108,Rs=ye?Symbol.for("react.profiler"):60114,Ns=ye?Symbol.for("react.provider"):60109,zs=ye?Symbol.for("react.context"):60110,Mu=ye?Symbol.for("react.async_mode"):60111,Ms=ye?Symbol.for("react.concurrent_mode"):60111,Ls=ye?Symbol.for("react.forward_ref"):60112,Ds=ye?Symbol.for("react.suspense"):60113,aE=ye?Symbol.for("react.suspense_list"):60120,js=ye?Symbol.for("react.memo"):60115,Fs=ye?Symbol.for("react.lazy"):60116,iE=ye?Symbol.for("react.block"):60121,sE=ye?Symbol.for("react.fundamental"):60117,lE=ye?Symbol.for("react.responder"):60118,cE=ye?Symbol.for("react.scope"):60119;function Qe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Nu:switch(e=e.type,e){case Mu:case Ms:case Ps:case Rs:case Os:case Ds:return e;default:switch(e=e&&e.$$typeof,e){case zs:case Ls:case Fs:case js:case Ns:return e;default:return t}}case zu:return t}}}function Rv(e){return Qe(e)===Ms}q.AsyncMode=Mu;q.ConcurrentMode=Ms;q.ContextConsumer=zs;q.ContextProvider=Ns;q.Element=Nu;q.ForwardRef=Ls;q.Fragment=Ps;q.Lazy=Fs;q.Memo=js;q.Portal=zu;q.Profiler=Rs;q.StrictMode=Os;q.Suspense=Ds;q.isAsyncMode=function(e){return Rv(e)||Qe(e)===Mu};q.isConcurrentMode=Rv;q.isContextConsumer=function(e){return Qe(e)===zs};q.isContextProvider=function(e){return Qe(e)===Ns};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Nu};q.isForwardRef=function(e){return Qe(e)===Ls};q.isFragment=function(e){return Qe(e)===Ps};q.isLazy=function(e){return Qe(e)===Fs};q.isMemo=function(e){return Qe(e)===js};q.isPortal=function(e){return Qe(e)===zu};q.isProfiler=function(e){return Qe(e)===Rs};q.isStrictMode=function(e){return Qe(e)===Os};q.isSuspense=function(e){return Qe(e)===Ds};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ps||e===Ms||e===Rs||e===Os||e===Ds||e===aE||typeof e=="object"&&e!==null&&(e.$$typeof===Fs||e.$$typeof===js||e.$$typeof===Ns||e.$$typeof===zs||e.$$typeof===Ls||e.$$typeof===sE||e.$$typeof===lE||e.$$typeof===cE||e.$$typeof===iE)};q.typeOf=Qe;Ov.exports=q;var Nv=Ov.exports,dE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zv={};zv[Nv.ForwardRef]=dE;zv[Nv.Memo]=uE;var fE=1,pE=4;function mE(e){return $o(e,fE|pE)}function ue(){return ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue.apply(this,arguments)}function gE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Lu(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Em(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Im=function(t){return Array.isArray(t)&&t.length===0},$e=function(t){return typeof t=="function"},$s=function(t){return t!==null&&typeof t=="object"},hE=function(t){return String(Math.floor(Number(t)))===t},Rl=function(t){return Object.prototype.toString.call(t)==="[object String]"},Mv=function(t){return _.exports.Children.count(t)===0},Nl=function(t){return $s(t)&&$e(t.then)};function xe(e,t,r,n){n===void 0&&(n=0);for(var o=Pv(t);e&&n<o.length;)e=e[o[n++]];return e===void 0?r:e}function Et(e,t,r){for(var n=km(e),o=n,a=0,i=Pv(t);a<i.length-1;a++){var s=i[a],l=xe(e,i.slice(0,a+1));if(l&&($s(l)||Array.isArray(l)))o=o[s]=km(l);else{var c=i[a+1];o=o[s]=hE(c)&&Number(c)>=0?[]:{}}}return(a===0?e:o)[i[a]]===r?e:(r===void 0?delete o[i[a]]:o[i[a]]=r,a===0&&r===void 0&&delete n[i[a]],n)}function Lv(e,t,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var o=0,a=Object.keys(e);o<a.length;o++){var i=a[o],s=e[i];$s(s)?r.get(s)||(r.set(s,!0),n[i]=Array.isArray(s)?[]:{},Lv(s,t,r,n[i])):n[i]=t}return n}var Us=_.exports.createContext(void 0);Us.displayName="FormikContext";var bE=Us.Provider;Us.Consumer;function vE(){var e=_.exports.useContext(Us);return e||oE(!1),e}function yE(e,t){switch(t.type){case"SET_VALUES":return ue({},e,{values:t.payload});case"SET_TOUCHED":return ue({},e,{touched:t.payload});case"SET_ERRORS":return ar(e.errors,t.payload)?e:ue({},e,{errors:t.payload});case"SET_STATUS":return ue({},e,{status:t.payload});case"SET_ISSUBMITTING":return ue({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return ue({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return ue({},e,{values:Et(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return ue({},e,{touched:Et(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return ue({},e,{errors:Et(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return ue({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return ue({},e,{touched:Lv(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return ue({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return ue({},e,{isSubmitting:!1});default:return e}}var Lr={},Za={};function wE(e){var t=e.validateOnChange,r=t===void 0?!0:t,n=e.validateOnBlur,o=n===void 0?!0:n,a=e.validateOnMount,i=a===void 0?!1:a,s=e.isInitialValid,l=e.enableReinitialize,c=l===void 0?!1:l,u=e.onSubmit,p=Lu(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=ue({validateOnChange:r,validateOnBlur:o,validateOnMount:i,onSubmit:u},p),h=_.exports.useRef(d.initialValues),w=_.exports.useRef(d.initialErrors||Lr),E=_.exports.useRef(d.initialTouched||Za),C=_.exports.useRef(d.initialStatus),m=_.exports.useRef(!1),f=_.exports.useRef({});_.exports.useEffect(function(){return m.current=!0,function(){m.current=!1}},[]);var g=_.exports.useReducer(yE,{values:d.initialValues,errors:d.initialErrors||Lr,touched:d.initialTouched||Za,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),b=g[0],x=g[1],T=_.exports.useCallback(function(v,R){return new Promise(function(N,M){var U=d.validate(v,R);U==null?N(Lr):Nl(U)?U.then(function(K){N(K||Lr)},function(K){M(K)}):N(U)})},[d.validate]),k=_.exports.useCallback(function(v,R){var N=d.validationSchema,M=$e(N)?N(R):N,U=R&&M.validateAt?M.validateAt(R,v):kE(v,M);return new Promise(function(K,be){U.then(function(){K(Lr)},function(Nt){Nt.name==="ValidationError"?K(xE(Nt)):be(Nt)})})},[d.validationSchema]),I=_.exports.useCallback(function(v,R){return new Promise(function(N){return N(f.current[v].validate(R))})},[]),L=_.exports.useCallback(function(v){var R=Object.keys(f.current).filter(function(M){return $e(f.current[M].validate)}),N=R.length>0?R.map(function(M){return I(M,xe(v,M))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(N).then(function(M){return M.reduce(function(U,K,be){return K==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||K&&(U=Et(U,R[be],K)),U},{})})},[I]),D=_.exports.useCallback(function(v){return Promise.all([L(v),d.validationSchema?k(v):{},d.validate?T(v):{}]).then(function(R){var N=R[0],M=R[1],U=R[2],K=td.all([N,M,U],{arrayMerge:_E});return K})},[d.validate,d.validationSchema,L,T,k]),H=Je(function(v){return v===void 0&&(v=b.values),x({type:"SET_ISVALIDATING",payload:!0}),D(v).then(function(R){return m.current&&(x({type:"SET_ISVALIDATING",payload:!1}),x({type:"SET_ERRORS",payload:R})),R})});_.exports.useEffect(function(){i&&m.current===!0&&ar(h.current,d.initialValues)&&H(h.current)},[i,H]);var he=_.exports.useCallback(function(v){var R=v&&v.values?v.values:h.current,N=v&&v.errors?v.errors:w.current?w.current:d.initialErrors||{},M=v&&v.touched?v.touched:E.current?E.current:d.initialTouched||{},U=v&&v.status?v.status:C.current?C.current:d.initialStatus;h.current=R,w.current=N,E.current=M,C.current=U;var K=function(){x({type:"RESET_FORM",payload:{isSubmitting:!!v&&!!v.isSubmitting,errors:N,touched:M,status:U,values:R,isValidating:!!v&&!!v.isValidating,submitCount:!!v&&!!v.submitCount&&typeof v.submitCount=="number"?v.submitCount:0}})};if(d.onReset){var be=d.onReset(b.values,ef);Nl(be)?be.then(K):K()}else K()},[d.initialErrors,d.initialStatus,d.initialTouched]);_.exports.useEffect(function(){m.current===!0&&!ar(h.current,d.initialValues)&&(c&&(h.current=d.initialValues,he()),i&&H(h.current))},[c,d.initialValues,he,i,H]),_.exports.useEffect(function(){c&&m.current===!0&&!ar(w.current,d.initialErrors)&&(w.current=d.initialErrors||Lr,x({type:"SET_ERRORS",payload:d.initialErrors||Lr}))},[c,d.initialErrors]),_.exports.useEffect(function(){c&&m.current===!0&&!ar(E.current,d.initialTouched)&&(E.current=d.initialTouched||Za,x({type:"SET_TOUCHED",payload:d.initialTouched||Za}))},[c,d.initialTouched]),_.exports.useEffect(function(){c&&m.current===!0&&!ar(C.current,d.initialStatus)&&(C.current=d.initialStatus,x({type:"SET_STATUS",payload:d.initialStatus}))},[c,d.initialStatus,d.initialTouched]);var Xe=Je(function(v){if(f.current[v]&&$e(f.current[v].validate)){var R=xe(b.values,v),N=f.current[v].validate(R);return Nl(N)?(x({type:"SET_ISVALIDATING",payload:!0}),N.then(function(M){return M}).then(function(M){x({type:"SET_FIELD_ERROR",payload:{field:v,value:M}}),x({type:"SET_ISVALIDATING",payload:!1})})):(x({type:"SET_FIELD_ERROR",payload:{field:v,value:N}}),Promise.resolve(N))}else if(d.validationSchema)return x({type:"SET_ISVALIDATING",payload:!0}),k(b.values,v).then(function(M){return M}).then(function(M){x({type:"SET_FIELD_ERROR",payload:{field:v,value:M[v]}}),x({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Rt=_.exports.useCallback(function(v,R){var N=R.validate;f.current[v]={validate:N}},[]),Ra=_.exports.useCallback(function(v){delete f.current[v]},[]),vn=Je(function(v,R){x({type:"SET_TOUCHED",payload:v});var N=R===void 0?o:R;return N?H(b.values):Promise.resolve()}),yn=_.exports.useCallback(function(v){x({type:"SET_ERRORS",payload:v})},[]),A=Je(function(v,R){var N=$e(v)?v(b.values):v;x({type:"SET_VALUES",payload:N});var M=R===void 0?r:R;return M?H(N):Promise.resolve()}),j=_.exports.useCallback(function(v,R){x({type:"SET_FIELD_ERROR",payload:{field:v,value:R}})},[]),F=Je(function(v,R,N){x({type:"SET_FIELD_VALUE",payload:{field:v,value:R}});var M=N===void 0?r:N;return M?H(Et(b.values,v,R)):Promise.resolve()}),ne=_.exports.useCallback(function(v,R){var N=R,M=v,U;if(!Rl(v)){v.persist&&v.persist();var K=v.target?v.target:v.currentTarget,be=K.type,Nt=K.name,Xs=K.id,Js=K.value,ny=K.checked,EC=K.outerHTML,tf=K.options,oy=K.multiple;N=R||Nt||Xs,M=/number|range/.test(be)?(U=parseFloat(Js),isNaN(U)?"":U):/checkbox/.test(be)?EE(xe(b.values,N),ny,Js):tf&&oy?SE(tf):Js}N&&F(N,M)},[F,b.values]),le=Je(function(v){if(Rl(v))return function(R){return ne(R,v)};ne(v)}),st=Je(function(v,R,N){R===void 0&&(R=!0),x({type:"SET_FIELD_TOUCHED",payload:{field:v,value:R}});var M=N===void 0?o:N;return M?H(b.values):Promise.resolve()}),bt=_.exports.useCallback(function(v,R){v.persist&&v.persist();var N=v.target,M=N.name,U=N.id,K=N.outerHTML,be=R||M||U;st(be,!0)},[st]),zr=Je(function(v){if(Rl(v))return function(R){return bt(R,v)};bt(v)}),vt=_.exports.useCallback(function(v){$e(v)?x({type:"SET_FORMIK_STATE",payload:v}):x({type:"SET_FORMIK_STATE",payload:function(){return v}})},[]),Mr=_.exports.useCallback(function(v){x({type:"SET_STATUS",payload:v})},[]),Zu=_.exports.useCallback(function(v){x({type:"SET_ISSUBMITTING",payload:v})},[]),qs=Je(function(){return x({type:"SUBMIT_ATTEMPT"}),H().then(function(v){var R=v instanceof Error,N=!R&&Object.keys(v).length===0;if(N){var M;try{if(M=Q0(),M===void 0)return}catch(U){throw U}return Promise.resolve(M).then(function(U){return m.current&&x({type:"SUBMIT_SUCCESS"}),U}).catch(function(U){if(m.current)throw x({type:"SUBMIT_FAILURE"}),U})}else if(m.current&&(x({type:"SUBMIT_FAILURE"}),R))throw v})}),q0=Je(function(v){v&&v.preventDefault&&$e(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&$e(v.stopPropagation)&&v.stopPropagation(),qs().catch(function(R){console.warn("Warning: An unhandled error was caught from submitForm()",R)})}),ef={resetForm:he,validateForm:H,validateField:Xe,setErrors:yn,setFieldError:j,setFieldTouched:st,setFieldValue:F,setStatus:Mr,setSubmitting:Zu,setTouched:vn,setValues:A,setFormikState:vt,submitForm:qs},Q0=Je(function(){return u(b.values,ef)}),X0=Je(function(v){v&&v.preventDefault&&$e(v.preventDefault)&&v.preventDefault(),v&&v.stopPropagation&&$e(v.stopPropagation)&&v.stopPropagation(),he()}),J0=_.exports.useCallback(function(v){return{value:xe(b.values,v),error:xe(b.errors,v),touched:!!xe(b.touched,v),initialValue:xe(h.current,v),initialTouched:!!xe(E.current,v),initialError:xe(w.current,v)}},[b.errors,b.touched,b.values]),Z0=_.exports.useCallback(function(v){return{setValue:function(N,M){return F(v,N,M)},setTouched:function(N,M){return st(v,N,M)},setError:function(N){return j(v,N)}}},[F,st,j]),ey=_.exports.useCallback(function(v){var R=$s(v),N=R?v.name:v,M=xe(b.values,N),U={name:N,value:M,onChange:le,onBlur:zr};if(R){var K=v.type,be=v.value,Nt=v.as,Xs=v.multiple;K==="checkbox"?be===void 0?U.checked=!!M:(U.checked=!!(Array.isArray(M)&&~M.indexOf(be)),U.value=be):K==="radio"?(U.checked=M===be,U.value=be):Nt==="select"&&Xs&&(U.value=U.value||[],U.multiple=!0)}return U},[zr,le,b.values]),Qs=_.exports.useMemo(function(){return!ar(h.current,b.values)},[h.current,b.values]),ty=_.exports.useMemo(function(){return typeof s!="undefined"?Qs?b.errors&&Object.keys(b.errors).length===0:s!==!1&&$e(s)?s(d):s:b.errors&&Object.keys(b.errors).length===0},[s,Qs,b.errors,d]),ry=ue({},b,{initialValues:h.current,initialErrors:w.current,initialTouched:E.current,initialStatus:C.current,handleBlur:zr,handleChange:le,handleReset:X0,handleSubmit:q0,resetForm:he,setErrors:yn,setFormikState:vt,setFieldTouched:st,setFieldValue:F,setFieldError:j,setStatus:Mr,setSubmitting:Zu,setTouched:vn,setValues:A,submitForm:qs,validateForm:H,validateField:Xe,isValid:ty,dirty:Qs,unregisterField:Ra,registerField:Rt,getFieldProps:ey,getFieldMeta:J0,getFieldHelpers:Z0,validateOnBlur:o,validateOnChange:r,validateOnMount:i});return ry}function Dv(e){var t=wE(e),r=e.component,n=e.children,o=e.render,a=e.innerRef;return _.exports.useImperativeHandle(a,function(){return t}),_.exports.createElement(bE,{value:t},r?_.exports.createElement(r,t):o?o(t):n?$e(n)?n(t):Mv(n)?null:_.exports.Children.only(n):null)}function xE(e){var t={};if(e.inner){if(e.inner.length===0)return Et(t,e.path,e.message);for(var o=e.inner,r=Array.isArray(o),n=0,o=r?o:o[Symbol.iterator]();;){var a;if(r){if(n>=o.length)break;a=o[n++]}else{if(n=o.next(),n.done)break;a=n.value}var i=a;xe(t,i.path)||(t=Et(t,i.path,i.message))}}return t}function kE(e,t,r,n){r===void 0&&(r=!1),n===void 0&&(n={});var o=id(e);return t[r?"validateSync":"validate"](o,{abortEarly:!1,context:n})}function id(e){var t=Array.isArray(e)?[]:{};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=String(r);Array.isArray(e[n])===!0?t[n]=e[n].map(function(o){return Array.isArray(o)===!0||em(o)?id(o):o!==""?o:void 0}):em(e[n])?t[n]=id(e[n]):t[n]=e[n]!==""?e[n]:void 0}return t}function _E(e,t,r){var n=e.slice();return t.forEach(function(a,i){if(typeof n[i]=="undefined"){var s=r.clone!==!1,l=s&&r.isMergeableObject(a);n[i]=l?td(Array.isArray(a)?[]:{},a,r):a}else r.isMergeableObject(a)?n[i]=td(e[i],a,r):e.indexOf(a)===-1&&n.push(a)}),n}function SE(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function EE(e,t,r){if(typeof e=="boolean")return Boolean(t);var n=[],o=!1,a=-1;if(Array.isArray(e))n=e,a=e.indexOf(r),o=a>=0;else if(!r||r=="true"||r=="false")return Boolean(t);return t&&r&&!o?n.concat(r):o?n.slice(0,a).concat(n.slice(a+1)):n}var IE=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?_.exports.useLayoutEffect:_.exports.useEffect;function Je(e){var t=_.exports.useRef(e);return IE(function(){t.current=e}),_.exports.useCallback(function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.current.apply(void 0,n)},[])}var TE=_.exports.forwardRef(function(e,t){var r=e.action,n=Lu(e,["action"]),o=r!=null?r:"#",a=vE(),i=a.handleReset,s=a.handleSubmit;return _.exports.createElement("form",Object.assign({onSubmit:s,ref:t,onReset:i,action:o},n))});TE.displayName="Form";var CE=function(t,r,n){var o=Zn(t),a=o[r];return o.splice(r,1),o.splice(n,0,a),o},AE=function(t,r,n){var o=Zn(t),a=o[r];return o[r]=o[n],o[n]=a,o},zl=function(t,r,n){var o=Zn(t);return o.splice(r,0,n),o},PE=function(t,r,n){var o=Zn(t);return o[r]=n,o},Zn=function(t){if(t){if(Array.isArray(t))return[].concat(t);var r=Object.keys(t).map(function(n){return parseInt(n)}).reduce(function(n,o){return o>n?o:n},0);return Array.from(ue({},t,{length:r+1}))}else return[]},OE=function(e){gE(t,e);function t(n){var o;return o=e.call(this,n)||this,o.updateArrayField=function(a,i,s){var l=o.props,c=l.name,u=l.formik.setFormikState;u(function(p){var d=typeof s=="function"?s:a,h=typeof i=="function"?i:a,w=Et(p.values,c,a(xe(p.values,c))),E=s?d(xe(p.errors,c)):void 0,C=i?h(xe(p.touched,c)):void 0;return Im(E)&&(E=void 0),Im(C)&&(C=void 0),ue({},p,{values:w,errors:s?Et(p.errors,c,E):p.errors,touched:i?Et(p.touched,c,C):p.touched})})},o.push=function(a){return o.updateArrayField(function(i){return[].concat(Zn(i),[mE(a)])},!1,!1)},o.handlePush=function(a){return function(){return o.push(a)}},o.swap=function(a,i){return o.updateArrayField(function(s){return AE(s,a,i)},!0,!0)},o.handleSwap=function(a,i){return function(){return o.swap(a,i)}},o.move=function(a,i){return o.updateArrayField(function(s){return CE(s,a,i)},!0,!0)},o.handleMove=function(a,i){return function(){return o.move(a,i)}},o.insert=function(a,i){return o.updateArrayField(function(s){return zl(s,a,i)},function(s){return zl(s,a,null)},function(s){return zl(s,a,null)})},o.handleInsert=function(a,i){return function(){return o.insert(a,i)}},o.replace=function(a,i){return o.updateArrayField(function(s){return PE(s,a,i)},!1,!1)},o.handleReplace=function(a,i){return function(){return o.replace(a,i)}},o.unshift=function(a){var i=-1;return o.updateArrayField(function(s){var l=s?[a].concat(s):[a];return i<0&&(i=l.length),l},function(s){var l=s?[null].concat(s):[null];return i<0&&(i=l.length),l},function(s){var l=s?[null].concat(s):[null];return i<0&&(i=l.length),l}),i},o.handleUnshift=function(a){return function(){return o.unshift(a)}},o.handleRemove=function(a){return function(){return o.remove(a)}},o.handlePop=function(){return function(){return o.pop()}},o.remove=o.remove.bind(Em(o)),o.pop=o.pop.bind(Em(o)),o}var r=t.prototype;return r.componentDidUpdate=function(o){this.props.validateOnChange&&this.props.formik.validateOnChange&&!ar(xe(o.formik.values,o.name),xe(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},r.remove=function(o){var a;return this.updateArrayField(function(i){var s=i?Zn(i):[];return a||(a=s[o]),$e(s.splice)&&s.splice(o,1),s},!0,!0),a},r.pop=function(){var o;return this.updateArrayField(function(a){var i=a;return o||(o=i&&i.pop&&i.pop()),i},!0,!0),o},r.render=function(){var o={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},a=this.props,i=a.component,s=a.render,l=a.children,c=a.name,u=a.formik,p=Lu(u,["validate","validationSchema"]),d=ue({},o,{form:p,name:c});return i?_.exports.createElement(i,d):s?s(d):l?typeof l=="function"?l(d):Mv(l)?null:_.exports.Children.only(l):null},t}(_.exports.Component);OE.defaultProps={validateOnChange:!0};/**
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
 */const jv=function(e){const t=[];let r=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=o&63|128):(o&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=o&63|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=o&63|128)}return t},RE=function(e){const t=[];let r=0,n=0;for(;r<e.length;){const o=e[r++];if(o<128)t[n++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[r++];t[n++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[r++],i=e[r++],s=e[r++],l=((o&7)<<18|(a&63)<<12|(i&63)<<6|s&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const a=e[r++],i=e[r++];t[n++]=String.fromCharCode((o&15)<<12|(a&63)<<6|i&63)}}return t.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let o=0;o<e.length;o+=3){const a=e[o],i=o+1<e.length,s=i?e[o+1]:0,l=o+2<e.length,c=l?e[o+2]:0,u=a>>2,p=(a&3)<<4|s>>4;let d=(s&15)<<2|c>>6,h=c&63;l||(h=64,i||(d=64)),n.push(r[u],r[p],r[d],r[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):RE(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let o=0;o<e.length;){const a=r[e.charAt(o++)],s=o<e.length?r[e.charAt(o)]:0;++o;const c=o<e.length?r[e.charAt(o)]:64;++o;const p=o<e.length?r[e.charAt(o)]:64;if(++o,a==null||s==null||c==null||p==null)throw Error();const d=a<<2|s>>4;if(n.push(d),c!==64){const h=s<<4&240|c>>2;if(n.push(h),p!==64){const w=c<<6&192|p;n.push(w)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},NE=function(e){const t=jv(e);return Fv.encodeByteArray(t,!0)},$v=function(e){return NE(e).replace(/\./g,"")},zE=function(e){try{return Fv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class ME{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}}/**
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
 */function Ae(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LE(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Uv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function DE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jE(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Bv(){return typeof indexedDB=="object"}function Vv(){return new Promise((e,t)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){t(r)}})}function FE(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const $E="FirebaseError";class Nr extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=$E,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hn.prototype.create)}}class hn{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){const n=r[0]||{},o=`${this.service}/${t}`,a=this.errors[t],i=a?UE(a,n):"Error",s=`${this.serviceName}: ${i} (${o}).`;return new Nr(o,s,n)}}function UE(e,t){return e.replace(BE,(r,n)=>{const o=t[n];return o!=null?String(o):`<${n}?>`})}const BE=/\{\$([^}]+)}/g;function VE(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function da(e,t){if(e===t)return!0;const r=Object.keys(e),n=Object.keys(t);for(const o of r){if(!n.includes(o))return!1;const a=e[o],i=t[o];if(Tm(a)&&Tm(i)){if(!da(a,i))return!1}else if(a!==i)return!1}for(const o of n)if(!r.includes(o))return!1;return!0}function Tm(e){return e!==null&&typeof e=="object"}/**
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
 */function Ea(e){const t=[];for(const[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(o=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Io(e){const t={};return e.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[o,a]=n.split("=");t[decodeURIComponent(o)]=decodeURIComponent(a)}}),t}function To(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function HE(e,t){const r=new WE(e,t);return r.subscribe.bind(r)}class WE{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(n=>{this.error(n)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,n){let o;if(t===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");GE(t,["next","error","complete"])?o=t:o={next:t,error:r,complete:n},o.next===void 0&&(o.next=Ml),o.error===void 0&&(o.error=Ml),o.complete===void 0&&(o.complete=Ml);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(n){typeof console!="undefined"&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GE(e,t){if(typeof e!="object"||e===null)return!1;for(const r of t)if(r in e&&typeof e[r]=="function")return!0;return!1}function Ml(){}/**
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
 */const KE=1e3,YE=2,qE=4*60*60*1e3,QE=.5;function Cm(e,t=KE,r=YE){const n=t*Math.pow(r,e),o=Math.round(QE*n*(Math.random()-.5)*2);return Math.min(qE,n+o)}/**
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
 */function bn(e){return e&&e._delegate?e._delegate:e}class Pt{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $r="[DEFAULT]";/**
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
 */class XE{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const n=new ME;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:r});o&&n.resolve(o)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(r=t==null?void 0:t.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ZE(t))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:o});n.resolve(a)}catch{}}}}clearInstance(t=$r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$r){return this.instances.has(t)}getOptions(t=$r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);n===s&&i.resolve(o)}return o}onInit(t,r){var n;const o=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(o))!==null&&n!==void 0?n:new Set;a.add(t),this.onInitCallbacks.set(o,a);const i=this.instances.get(o);return i&&t(i,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,r){const n=this.onInitCallbacks.get(r);if(!!n)for(const o of n)try{o(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:JE(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=$r){return this.component?this.component.multipleInstances?t:$r:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JE(e){return e===$r?void 0:e}function ZE(e){return e.instantiationMode==="EAGER"}/**
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
 */class eI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new XE(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(X||(X={}));const tI={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},rI=X.INFO,nI={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},oI=(e,t,...r)=>{if(t<e.logLevel)return;const n=new Date().toISOString(),o=nI[t];if(o)console[o](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Du{constructor(t){this.name=t,this._logLevel=rI,this._logHandler=oI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const aI=(e,t)=>t.some(r=>e instanceof r);let Am,Pm;function iI(){return Am||(Am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sI(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hv=new WeakMap,sd=new WeakMap,Wv=new WeakMap,Ll=new WeakMap,ju=new WeakMap;function lI(e){const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{r(kr(e.result)),o()},i=()=>{n(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(r=>{r instanceof IDBCursor&&Hv.set(r,e)}).catch(()=>{}),ju.set(t,e),t}function cI(e){if(sd.has(e))return;const t=new Promise((r,n)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{r(),o()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});sd.set(e,t)}let ld={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return sd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wv.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return kr(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dI(e){ld=e(ld)}function uI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const n=e.call(Dl(this),t,...r);return Wv.set(n,t.sort?t.sort():[t]),kr(n)}:sI().includes(e)?function(...t){return e.apply(Dl(this),t),kr(Hv.get(this))}:function(...t){return kr(e.apply(Dl(this),t))}}function fI(e){return typeof e=="function"?uI(e):(e instanceof IDBTransaction&&cI(e),aI(e,iI())?new Proxy(e,ld):e)}function kr(e){if(e instanceof IDBRequest)return lI(e);if(Ll.has(e))return Ll.get(e);const t=fI(e);return t!==e&&(Ll.set(e,t),ju.set(t,e)),t}const Dl=e=>ju.get(e);function Gv(e,t,{blocked:r,upgrade:n,blocking:o,terminated:a}={}){const i=indexedDB.open(e,t),s=kr(i);return n&&i.addEventListener("upgradeneeded",l=>{n(kr(i.result),l.oldVersion,l.newVersion,kr(i.transaction))}),r&&i.addEventListener("blocked",()=>r()),s.then(l=>{a&&l.addEventListener("close",()=>a()),o&&l.addEventListener("versionchange",()=>o())}).catch(()=>{}),s}const pI=["get","getKey","getAll","getAllKeys","count"],mI=["put","add","delete","clear"],jl=new Map;function Om(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(jl.get(t))return jl.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=mI.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(o||pI.includes(r)))return;const a=async function(i,...s){const l=this.transaction(i,o?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(s.shift())),(await Promise.all([c[r](...s),o&&l.done]))[0]};return jl.set(t,a),a}dI(e=>af(of({},e),{get:(t,r,n)=>Om(t,r)||e.get(t,r,n),has:(t,r)=>!!Om(t,r)||e.has(t,r)}));/**
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
 */class gI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(hI(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function hI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const cd="@firebase/app",Rm="0.7.26";/**
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
 */const Fu=new Du("@firebase/app"),bI="@firebase/app-compat",vI="@firebase/analytics-compat",yI="@firebase/analytics",wI="@firebase/app-check-compat",xI="@firebase/app-check",kI="@firebase/auth",_I="@firebase/auth-compat",SI="@firebase/database",EI="@firebase/database-compat",II="@firebase/functions",TI="@firebase/functions-compat",CI="@firebase/installations",AI="@firebase/installations-compat",PI="@firebase/messaging",OI="@firebase/messaging-compat",RI="@firebase/performance",NI="@firebase/performance-compat",zI="@firebase/remote-config",MI="@firebase/remote-config-compat",LI="@firebase/storage",DI="@firebase/storage-compat",jI="@firebase/firestore",FI="@firebase/firestore-compat",$I="firebase",UI="9.8.3";/**
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
 */const Kv="[DEFAULT]",BI={[cd]:"fire-core",[bI]:"fire-core-compat",[yI]:"fire-analytics",[vI]:"fire-analytics-compat",[xI]:"fire-app-check",[wI]:"fire-app-check-compat",[kI]:"fire-auth",[_I]:"fire-auth-compat",[SI]:"fire-rtdb",[EI]:"fire-rtdb-compat",[II]:"fire-fn",[TI]:"fire-fn-compat",[CI]:"fire-iid",[AI]:"fire-iid-compat",[PI]:"fire-fcm",[OI]:"fire-fcm-compat",[RI]:"fire-perf",[NI]:"fire-perf-compat",[zI]:"fire-rc",[MI]:"fire-rc-compat",[LI]:"fire-gcs",[DI]:"fire-gcs-compat",[jI]:"fire-fst",[FI]:"fire-fst-compat","fire-js":"fire-js",[$I]:"fire-js-all"};/**
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
 */const Xi=new Map,dd=new Map;function VI(e,t){try{e.container.addComponent(t)}catch(r){Fu.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Yt(e){const t=e.name;if(dd.has(t))return Fu.debug(`There were multiple attempts to register component ${t}.`),!1;dd.set(t,e);for(const r of Xi.values())VI(r,e);return!0}function so(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const HI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},nn=new hn("app","Firebase",HI);/**
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
 */class WI{constructor(t,r,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
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
 */const Bs=UI;function GI(e,t={}){typeof t!="object"&&(t={name:t});const r=Object.assign({name:Kv,automaticDataCollectionEnabled:!1},t),n=r.name;if(typeof n!="string"||!n)throw nn.create("bad-app-name",{appName:String(n)});const o=Xi.get(n);if(o){if(da(e,o.options)&&da(r,o.config))return o;throw nn.create("duplicate-app",{appName:n})}const a=new eI(n);for(const s of dd.values())a.addComponent(s);const i=new WI(e,r,a);return Xi.set(n,i),i}function Yv(e=Kv){const t=Xi.get(e);if(!t)throw nn.create("no-app",{appName:e});return t}function It(e,t,r){var n;let o=(n=BI[e])!==null&&n!==void 0?n:e;r&&(o+=`-${r}`);const a=o.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const s=[`Unable to register library "${o}" with version "${t}":`];a&&s.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&i&&s.push("and"),i&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fu.warn(s.join(" "));return}Yt(new Pt(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const KI="firebase-heartbeat-database",YI=1,ua="firebase-heartbeat-store";let Fl=null;function qv(){return Fl||(Fl=Gv(KI,YI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ua)}}}).catch(e=>{throw nn.create("storage-open",{originalErrorMessage:e.message})})),Fl}async function qI(e){var t;try{return(await qv()).transaction(ua).objectStore(ua).get(Qv(e))}catch(r){throw nn.create("storage-get",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message})}}async function Nm(e,t){var r;try{const o=(await qv()).transaction(ua,"readwrite");return await o.objectStore(ua).put(t,Qv(e)),o.done}catch(n){throw nn.create("storage-set",{originalErrorMessage:(r=n)===null||r===void 0?void 0:r.message})}}function Qv(e){return`${e.name}!${e.options.appId}`}/**
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
 */const QI=1024,XI=30*24*60*60*1e3;class JI{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new eT(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=zm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(o=>o.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=XI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zm(),{heartbeatsToSend:r,unsentEntries:n}=ZI(this._heartbeatsCache.heartbeats),o=$v(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function zm(){return new Date().toISOString().substring(0,10)}function ZI(e,t=QI){const r=[];let n=e.slice();for(const o of e){const a=r.find(i=>i.agent===o.agent);if(a){if(a.dates.push(o.date),Mm(r)>t){a.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),Mm(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class eT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bv()?Vv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const o=await this.read();return Nm(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Mm(e){return $v(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function tT(e){Yt(new Pt("platform-logger",t=>new gI(t),"PRIVATE")),Yt(new Pt("heartbeat",t=>new JI(t),"PRIVATE")),It(cd,Rm,e),It(cd,Rm,"esm2017"),It("fire-js","")}tT("");var rT="firebase",nT="9.8.3";/**
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
 */It(rT,nT,"app");function $u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function Xv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oT=Xv,Jv=new hn("auth","Firebase",Xv());/**
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
 */const Lm=new Du("@firebase/auth");function gi(e,...t){Lm.logLevel<=X.ERROR&&Lm.error(`Auth (${Bs}): ${e}`,...t)}/**
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
 */function ht(e,...t){throw Uu(e,...t)}function Tt(e,...t){return Uu(e,...t)}function aT(e,t,r){const n=Object.assign(Object.assign({},oT()),{[t]:r});return new hn("auth","Firebase",n).create(t,{appName:e.name})}function Uu(e,...t){if(typeof e!="string"){const r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return Jv.create(e,...t)}function $(e,t,...r){if(!e)throw Uu(t,...r)}function Ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw gi(t),new Error(t)}function qt(e,t){e||Ft(t)}/**
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
 */const Dm=new Map;function $t(e){qt(e instanceof Function,"Expected a class definition");let t=Dm.get(e);return t?(qt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dm.set(e,t),t)}/**
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
 */function iT(e,t){const r=so(e,"auth");if(r.isInitialized()){const o=r.getImmediate(),a=r.getOptions();if(da(a,t!=null?t:{}))return o;ht(o,"already-initialized")}return r.initialize({options:t})}function sT(e,t){const r=(t==null?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map($t);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function ud(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function lT(){return jm()==="http:"||jm()==="https:"}function jm(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function cT(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lT()||Uv()||"connection"in navigator)?navigator.onLine:!0}function dT(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ia{constructor(t,r){this.shortDelay=t,this.longDelay=r,qt(r>t,"Short delay should be less than long delay!"),this.isMobile=LE()||DE()}get(){return cT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bu(e,t){qt(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */class Zv{static initialize(t,r,n){this.fetchImpl=t,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const fT=new Ia(3e4,6e4);function Ta(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ca(e,t,r,n,o={}){return e0(e,o,async()=>{let a={},i={};n&&(t==="GET"?i=n:a={body:JSON.stringify(n)});const s=Ea(Object.assign({key:e.config.apiKey},i)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Zv.fetch()(t0(e,e.config.apiHost,r,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},a))})}async function e0(e,t,r){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},uT),t);try{const o=new pT(e),a=await Promise.race([r(),o.promise]);o.clearNetworkTimeout();const i=await a.json();if("needConfirmation"in i)throw ei(e,"account-exists-with-different-credential",i);if(a.ok&&!("errorMessage"in i))return i;{const s=a.ok?i.errorMessage:i.error.message,[l,c]=s.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(e,"credential-already-in-use",i);if(l==="EMAIL_EXISTS")throw ei(e,"email-already-in-use",i);if(l==="USER_DISABLED")throw ei(e,"user-disabled",i);const u=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw aT(e,u,c);ht(e,u)}}catch(o){if(o instanceof Nr)throw o;ht(e,"network-request-failed")}}async function Aa(e,t,r,n,o={}){const a=await Ca(e,t,r,n,o);return"mfaPendingCredential"in a&&ht(e,"multi-factor-auth-required",{_serverResponse:a}),a}function t0(e,t,r,n){const o=`${t}${r}?${n}`;return e.config.emulator?Bu(e.config,o):`${e.config.apiScheme}://${o}`}class pT{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Tt(this.auth,"network-request-failed")),fT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ei(e,t,r){const n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const o=Tt(e,t,n);return o.customData._tokenResponse=r,o}/**
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
 */async function mT(e,t){return Ca(e,"POST","/v1/accounts:delete",t)}async function gT(e,t){return Ca(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Uo(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function hT(e,t=!1){const r=bn(e),n=await r.getIdToken(t),o=Vu(n);$(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,i=a==null?void 0:a.sign_in_provider;return{claims:o,token:n,authTime:Uo($l(o.auth_time)),issuedAtTime:Uo($l(o.iat)),expirationTime:Uo($l(o.exp)),signInProvider:i||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function $l(e){return Number(e)*1e3}function Vu(e){const[t,r,n]=e.split(".");if(t===void 0||r===void 0||n===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const o=zE(r);return o?JSON.parse(o):(gi("Failed to decode base64 JWT payload"),null)}catch(o){return gi("Caught error parsing JWT payload as JSON",o),null}}function bT(e){const t=Vu(e);return $(t,"internal-error"),$(typeof t.exp!="undefined","internal-error"),$(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function fa(e,t,r=!1){if(r)return t;try{return await t}catch(n){throw n instanceof Nr&&vT(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}function vT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class yT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const o=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class r0{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uo(this.lastLoginAt),this.creationTime=Uo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(e){var t;const r=e.auth,n=await e.getIdToken(),o=await fa(e,gT(r,{idToken:n}));$(o==null?void 0:o.users.length,r,"internal-error");const a=o.users[0];e._notifyReloadListener(a);const i=!((t=a.providerUserInfo)===null||t===void 0)&&t.length?kT(a.providerUserInfo):[],s=xT(e.providerData,i),l=e.isAnonymous,c=!(e.email&&a.passwordHash)&&!(s!=null&&s.length),u=l?c:!1,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:s,metadata:new r0(a.createdAt,a.lastLoginAt),isAnonymous:u};Object.assign(e,p)}async function wT(e){const t=bn(e);await Ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function xT(e,t){return[...e.filter(n=>!t.some(o=>o.providerId===n.providerId)),...t]}function kT(e){return e.map(t=>{var{providerId:r}=t,n=$u(t,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function _T(e,t){const r=await e0(e,{},async()=>{const n=Ea({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:a}=e.config,i=t0(e,o,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Zv.fetch()(i,{method:"POST",headers:s,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken!="undefined","internal-error"),$(typeof t.refreshToken!="undefined","internal-error");const r="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):bT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}async getToken(t,r=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:n,refreshToken:o,expiresIn:a}=await _T(t,r);this.updateTokensAndExpiration(n,o,Number(a))}updateTokensAndExpiration(t,r,n){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(t,r){const{refreshToken:n,accessToken:o,expirationTime:a}=r,i=new pa;return n&&($(typeof n=="string","internal-error",{appName:t}),i.refreshToken=n),o&&($(typeof o=="string","internal-error",{appName:t}),i.accessToken=o),a&&($(typeof a=="number","internal-error",{appName:t}),i.expirationTime=a),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pa,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
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
 */function tr(e,t){$(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class Yr{constructor(t){var{uid:r,auth:n,stsTokenManager:o}=t,a=$u(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new r0(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const r=await fa(this,this.stsTokenManager.getToken(this.auth,t));return $(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return hT(this,t)}reload(){return wT(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Yr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),r&&await Ji(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await fa(this,mT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var n,o,a,i,s,l,c,u;const p=(n=r.displayName)!==null&&n!==void 0?n:void 0,d=(o=r.email)!==null&&o!==void 0?o:void 0,h=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,w=(i=r.photoURL)!==null&&i!==void 0?i:void 0,E=(s=r.tenantId)!==null&&s!==void 0?s:void 0,C=(l=r._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=r.createdAt)!==null&&c!==void 0?c:void 0,f=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:b,isAnonymous:x,providerData:T,stsTokenManager:k}=r;$(g&&k,t,"internal-error");const I=pa.fromJSON(this.name,k);$(typeof g=="string",t,"internal-error"),tr(p,t.name),tr(d,t.name),$(typeof b=="boolean",t,"internal-error"),$(typeof x=="boolean",t,"internal-error"),tr(h,t.name),tr(w,t.name),tr(E,t.name),tr(C,t.name),tr(m,t.name),tr(f,t.name);const L=new Yr({uid:g,auth:t,email:d,emailVerified:b,displayName:p,isAnonymous:x,photoURL:w,phoneNumber:h,tenantId:E,stsTokenManager:I,createdAt:m,lastLoginAt:f});return T&&Array.isArray(T)&&(L.providerData=T.map(D=>Object.assign({},D))),C&&(L._redirectEventId=C),L}static async _fromIdTokenResponse(t,r,n=!1){const o=new pa;o.updateFromServerResponse(r);const a=new Yr({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:n});return await Ji(a),a}}/**
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
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}n0.type="NONE";const Fm=n0;/**
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
 */function hi(e,t,r){return`firebase:${e}:${t}:${r}`}class Hn{constructor(t,r,n){this.persistence=t,this.auth=r,this.userKey=n;const{config:o,name:a}=this.auth;this.fullUserKey=hi(this.userKey,o.apiKey,a),this.fullPersistenceKey=hi("persistence",o.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Yr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,n="authUser"){if(!r.length)return new Hn($t(Fm),t,n);const o=(await Promise.all(r.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let a=o[0]||$t(Fm);const i=hi(n,t.config.apiKey,t.name);let s=null;for(const c of r)try{const u=await c._get(i);if(u){const p=Yr._fromJSON(t,u);c!==a&&(s=p),a=c;break}}catch{}const l=o.filter(c=>c._shouldAllowMigration);return!a._shouldAllowMigration||!l.length?new Hn(a,t,n):(a=l[0],s&&await a._set(i,s.toJSON()),await Promise.all(r.map(async c=>{if(c!==a)try{await c._remove(i)}catch{}})),new Hn(a,t,n))}}/**
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
 */function $m(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(i0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(o0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(l0(t))return"Blackberry";if(c0(t))return"Webos";if(Hu(t))return"Safari";if((t.includes("chrome/")||a0(t))&&!t.includes("edge/"))return"Chrome";if(s0(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function o0(e=Ae()){return/firefox\//i.test(e)}function Hu(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function a0(e=Ae()){return/crios\//i.test(e)}function i0(e=Ae()){return/iemobile/i.test(e)}function s0(e=Ae()){return/android/i.test(e)}function l0(e=Ae()){return/blackberry/i.test(e)}function c0(e=Ae()){return/webos/i.test(e)}function Vs(e=Ae()){return/iphone|ipad|ipod/i.test(e)}function ST(e=Ae()){var t;return Vs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ET(){return jE()&&document.documentMode===10}function d0(e=Ae()){return Vs(e)||s0(e)||c0(e)||l0(e)||/windows phone/i.test(e)||i0(e)}function IT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function u0(e,t=[]){let r;switch(e){case"Browser":r=$m(Ae());break;case"Worker":r=`${$m(Ae())}-${e}`;break;default:r=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Bs}/${n}`}/**
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
 */class TT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const n=a=>new Promise((i,s)=>{try{const l=t(a);i(l)}catch(l){s(l)}});n.onAbort=r,this.queue.push(n);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){var r;if(this.auth.currentUser===t)return;const n=[];try{for(const o of this.queue)await o(t),o.onAbort&&n.push(o.onAbort)}catch(o){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(r=o)===null||r===void 0?void 0:r.message})}}}/**
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
 */class CT{constructor(t,r,n){this.app=t,this.heartbeatServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Um(this),this.idTokenSubscription=new Um(this),this.beforeStateQueue=new TT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jv,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=$t(r)),this._initializationPromise=this.queue(async()=>{var n,o;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,t),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var r;const n=await this.assertedPersistence.getCurrentUser();let o=n,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,s=o==null?void 0:o._redirectEventId,l=await this.tryRedirectSignIn(t);(!i||i===s)&&(l==null?void 0:l.user)&&(o=l.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(i){o=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ji(t)}catch(r){if(r.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=dT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const r=t?bn(t):null;return r&&$(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence($t(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new hn("auth","Firebase",t())}onAuthStateChanged(t,r,n){return this.registerStateListener(this.authStateSubscription,t,r,n)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,n){return this.registerStateListener(this.idTokenSubscription,t,r,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const n=await this.getOrInitRedirectPersistenceManager(r);return t===null?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&$t(t)||this._popupRedirectResolver;$(r,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[$t(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,n,o){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r),i=this._isInitialized?Promise.resolve():this._initializationPromise;return $(i,this,"internal-error"),i.then(()=>a(this.currentUser)),typeof r=="function"?t.addObserver(r,n,o):t.addObserver(r)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return n&&(r["X-Firebase-Client"]=n),r}}function Hs(e){return bn(e)}class Um{constructor(t){this.auth=t,this.observer=null,this.addObserver=HE(r=>this.observer=r)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class Wu{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return Ft("not implemented")}_getIdTokenResponse(t){return Ft("not implemented")}_linkToIdToken(t,r){return Ft("not implemented")}_getReauthenticationResolver(t){return Ft("not implemented")}}async function AT(e,t){return Ca(e,"POST","/v1/accounts:update",t)}/**
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
 */async function PT(e,t){return Aa(e,"POST","/v1/accounts:signInWithPassword",Ta(e,t))}/**
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
 */async function OT(e,t){return Aa(e,"POST","/v1/accounts:signInWithEmailLink",Ta(e,t))}async function RT(e,t){return Aa(e,"POST","/v1/accounts:signInWithEmailLink",Ta(e,t))}/**
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
 */class ma extends Wu{constructor(t,r,n,o=null){super("password",n),this._email=t,this._password=r,this._tenantId=o}static _fromEmailAndPassword(t,r){return new ma(t,r,"password")}static _fromEmailAndCode(t,r,n=null){return new ma(t,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if((r==null?void 0:r.email)&&(r==null?void 0:r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return PT(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OT(t,{email:this._email,oobCode:this._password});default:ht(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":return AT(t,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RT(t,{idToken:r,email:this._email,oobCode:this._password});default:ht(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Wn(e,t){return Aa(e,"POST","/v1/accounts:signInWithIdp",Ta(e,t))}/**
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
 */const NT="http://localhost";class on extends Wu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):ht("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:n,signInMethod:o}=r,a=$u(r,["providerId","signInMethod"]);if(!n||!o)return null;const i=new on(n,o);return i.idToken=a.idToken||void 0,i.accessToken=a.accessToken||void 0,i.secret=a.secret,i.nonce=a.nonce,i.pendingToken=a.pendingToken||null,i}_getIdTokenResponse(t){const r=this.buildRequest();return Wn(t,r)}_linkToIdToken(t,r){const n=this.buildRequest();return n.idToken=r,Wn(t,n)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,Wn(t,r)}buildRequest(){const t={requestUri:NT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Ea(r)}return t}}/**
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
 */function zT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MT(e){const t=Io(To(e)).link,r=t?Io(To(t)).deep_link_id:null,n=Io(To(e)).deep_link_id;return(n?Io(To(n)).link:null)||n||r||t||e}class Gu{constructor(t){var r,n,o,a,i,s;const l=Io(To(t)),c=(r=l.apiKey)!==null&&r!==void 0?r:null,u=(n=l.oobCode)!==null&&n!==void 0?n:null,p=zT((o=l.mode)!==null&&o!==void 0?o:null);$(c&&u&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=u,this.continueUrl=(a=l.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(i=l.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(s=l.tenantId)!==null&&s!==void 0?s:null}static parseLink(t){const r=MT(t);try{return new Gu(r)}catch{return null}}}/**
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
 */class lo{constructor(){this.providerId=lo.PROVIDER_ID}static credential(t,r){return ma._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const n=Gu.parseLink(r);return $(n,"argument-error"),ma._fromEmailAndCode(t,n.code,n.tenantId)}}lo.PROVIDER_ID="password";lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class f0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pa extends f0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends Pa{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return lr.credentialFromTaggedObject(t)}static credentialFromError(t){return lr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return lr.credential(t.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class cr extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return on._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return cr.credentialFromTaggedObject(t)}static credentialFromError(t){return cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:n}=t;if(!r&&!n)return null;try{return cr.credential(r,n)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class dr extends Pa{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return dr.credentialFromTaggedObject(t)}static credentialFromError(t){return dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return dr.credential(t.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
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
 */class ur extends Pa{constructor(){super("twitter.com")}static credential(t,r){return on._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return ur.credentialFromTaggedObject(t)}static credentialFromError(t){return ur.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=t;if(!r||!n)return null;try{return ur.credential(r,n)}catch{return null}}}ur.TWITTER_SIGN_IN_METHOD="twitter.com";ur.PROVIDER_ID="twitter.com";/**
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
 */async function LT(e,t){return Aa(e,"POST","/v1/accounts:signUp",Ta(e,t))}/**
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
 */class an{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,n,o=!1){const a=await Yr._fromIdTokenResponse(t,n,o),i=Bm(n);return new an({user:a,providerId:i,_tokenResponse:n,operationType:r})}static async _forOperation(t,r,n){await t._updateTokensIfNecessary(n,!0);const o=Bm(n);return new an({user:t,providerId:o,_tokenResponse:n,operationType:r})}}function Bm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Zi extends Nr{constructor(t,r,n,o){var a;super(r.code,r.message),this.operationType=n,this.user=o,Object.setPrototypeOf(this,Zi.prototype),this.customData={appName:t.name,tenantId:(a=t.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,r,n,o){return new Zi(t,r,n,o)}}function p0(e,t,r,n){return(t==="reauthenticate"?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Zi._fromErrorAndOperation(e,a,t,n):a})}async function DT(e,t,r=!1){const n=await fa(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return an._forOperation(e,"link",n)}/**
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
 */async function jT(e,t,r=!1){const{auth:n}=e,o="reauthenticate";try{const a=await fa(e,p0(n,o,t,e),r);$(a.idToken,n,"internal-error");const i=Vu(a.idToken);$(i,n,"internal-error");const{sub:s}=i;return $(e.uid===s,n,"user-mismatch"),an._forOperation(e,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&ht(n,"user-mismatch"),a}}/**
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
 */async function m0(e,t,r=!1){const n="signIn",o=await p0(e,n,t),a=await an._fromIdTokenResponse(e,n,o);return r||await e._updateCurrentUser(a.user),a}async function FT(e,t){return m0(Hs(e),t)}async function $T(e,t,r){const n=Hs(e),o=await LT(n,{returnSecureToken:!0,email:t,password:r}),a=await an._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function UT(e,t,r){return FT(bn(e),lo.credential(t,r))}const es="__sak";/**
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
 */class g0{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(es,"1"),this.storage.removeItem(es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function BT(){const e=Ae();return Hu(e)||Vs(e)}const VT=1e3,HT=10;class h0 extends g0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BT()&&IT(),this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),o=this.localCache[r];n!==o&&t(r,o,n)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((i,s,l)=>{this.notifyListeners(i,l)});return}const n=t.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)t.newValue!==null?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!r)return}const o=()=>{const i=this.storage.getItem(n);!r&&this.localCache[n]===i||this.notifyListeners(n,i)},a=this.storage.getItem(n);ET()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,HT):o()}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const o of Array.from(n))o(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)})},VT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}h0.type="LOCAL";const WT=h0;/**
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
 */class b0 extends g0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}b0.type="SESSION";const v0=b0;/**
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
 */function GT(e){return Promise.all(e.map(async t=>{try{const r=await t;return{fulfilled:!0,value:r}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class Ws{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(o=>o.isListeningto(t));if(r)return r;const n=new Ws(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:n,eventType:o,data:a}=r.data,i=this.handlersMap[o];if(!(i!=null&&i.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:o});const s=Array.from(i).map(async c=>c(r.origin,a)),l=await GT(s);r.ports[0].postMessage({status:"done",eventId:n,eventType:o,response:l})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ws.receivers=[];/**
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
 */function Ku(e="",t=10){let r="";for(let n=0;n<t;n++)r+=Math.floor(Math.random()*10);return e+r}/**
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
 */class KT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,n=50){const o=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,i;return new Promise((s,l)=>{const c=Ku("",20);o.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},n);i={messageChannel:o,onMessage(p){const d=p;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),a=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),s(d.data.response);break;default:clearTimeout(u),clearTimeout(a),l(new Error("invalid_response"));break}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:t,eventId:c,data:r},[o.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
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
 */function Ct(){return window}function YT(e){Ct().location.href=e}/**
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
 */function y0(){return typeof Ct().WorkerGlobalScope!="undefined"&&typeof Ct().importScripts=="function"}async function qT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function XT(){return y0()?self:null}/**
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
 */const w0="firebaseLocalStorageDb",JT=1,ts="firebaseLocalStorage",x0="fbase_key";class Oa{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Gs(e,t){return e.transaction([ts],t?"readwrite":"readonly").objectStore(ts)}function ZT(){const e=indexedDB.deleteDatabase(w0);return new Oa(e).toPromise()}function fd(){const e=indexedDB.open(w0,JT);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{const n=e.result;try{n.createObjectStore(ts,{keyPath:x0})}catch(o){r(o)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(ts)?t(n):(n.close(),await ZT(),t(await fd()))})})}async function Vm(e,t,r){const n=Gs(e,!0).put({[x0]:t,value:r});return new Oa(n).toPromise()}async function e6(e,t){const r=Gs(e,!1).get(t),n=await new Oa(r).toPromise();return n===void 0?null:n.value}function Hm(e,t){const r=Gs(e,!0).delete(t);return new Oa(r).toPromise()}const t6=800,r6=3;class k0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(t){let r=0;for(;;)try{const n=await this._openDb();return await t(n)}catch(n){if(r++>r6)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return y0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ws._getInstance(XT()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await qT(),!this.activeServiceWorker)return;this.sender=new KT(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);!n||((t=n[0])===null||t===void 0?void 0:t.fulfilled)&&((r=n[0])===null||r===void 0?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||QT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fd();return await Vm(t,es,"1"),await Hm(t,es),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vm(n,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(n=>e6(n,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hm(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const a=Gs(o,!1).getAll();return new Oa(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:o,value:a}of t)n.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),r.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!n.has(o)&&(this.notifyListeners(o,null),r.push(o));return r}notifyListeners(t,r){this.localCache[t]=r;const n=this.listeners[t];if(n)for(const o of Array.from(n))o(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k0.type="LOCAL";const n6=k0;/**
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
 */function o6(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function a6(e){return new Promise((t,r)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=o=>{const a=Tt("internal-error");a.customData=o,r(a)},n.type="text/javascript",n.charset="UTF-8",o6().appendChild(n)})}function i6(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Ia(3e4,6e4);/**
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
 */function s6(e,t){return t?$t(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Yu extends Wu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Wn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return Wn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return Wn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function l6(e){return m0(e.auth,new Yu(e),e.bypassAuthState)}function c6(e){const{auth:t,user:r}=e;return $(r,t,"internal-error"),jT(r,new Yu(e),e.bypassAuthState)}async function d6(e){const{auth:t,user:r}=e;return $(r,t,"internal-error"),DT(r,new Yu(e),e.bypassAuthState)}/**
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
 */class _0{constructor(t,r,n,o,a=!1){this.auth=t,this.resolver=n,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:n,postBody:o,tenantId:a,error:i,type:s}=t;if(i){this.reject(i);return}const l={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return l6;case"linkViaPopup":case"linkViaRedirect":return d6;case"reauthViaPopup":case"reauthViaRedirect":return c6;default:ht(this.auth,"internal-error")}}resolve(t){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const u6=new Ia(2e3,1e4);class Ln extends _0{constructor(t,r,n,o,a){super(t,r,o,a),this.provider=n,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const t=Ku();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,u6.get())};t()}}Ln.currentPopupAction=null;/**
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
 */const f6="pendingRedirect",bi=new Map;class p6 extends _0{constructor(t,r,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let t=bi.get(this.auth._key());if(!t){try{const n=await m6(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(r){t=()=>Promise.reject(r)}bi.set(this.auth._key(),t)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m6(e,t){const r=b6(t),n=h6(e);if(!await n._isAvailable())return!1;const o=await n._get(r)==="true";return await n._remove(r),o}function g6(e,t){bi.set(e._key(),t)}function h6(e){return $t(e._redirectPersistence)}function b6(e){return hi(f6,e.config.apiKey,e.name)}async function v6(e,t,r=!1){const n=Hs(e),o=s6(n,t),i=await new p6(n,o,r).execute();return i&&!r&&(delete i.user._redirectEventId,await n._persistUserIfCurrent(i.user),await n._setRedirectUser(null,t)),i}/**
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
 */const y6=10*60*1e3;class w6{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(r=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!x6(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var n;if(t.error&&!S0(t)){const o=((n=t.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Tt(this.auth,o))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const n=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=y6&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wm(t))}saveEventToCache(t){this.cachedEventUids.add(Wm(t)),this.lastProcessedEventTime=Date.now()}}function Wm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function S0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function x6(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return S0(e);default:return!1}}/**
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
 */async function k6(e,t={}){return Ca(e,"GET","/v1/projects",t)}/**
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
 */const _6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,S6=/^https?/;async function E6(e){if(e.config.emulator)return;const{authorizedDomains:t}=await k6(e);for(const r of t)try{if(I6(r))return}catch{}ht(e,"unauthorized-domain")}function I6(e){const t=ud(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&n===""?r==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&i.hostname===n}if(!S6.test(r))return!1;if(_6.test(e))return n===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(n)}/**
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
 */const T6=new Ia(3e4,6e4);function Gm(){const e=Ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let r=0;r<e.CP.length;r++)e.CP[r]=null}}function C6(e){return new Promise((t,r)=>{var n,o,a;function i(){Gm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gm(),r(Tt(e,"network-request-failed"))},timeout:T6.get()})}if(!((o=(n=Ct().gapi)===null||n===void 0?void 0:n.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((a=Ct().gapi)===null||a===void 0)&&a.load)i();else{const s=i6("iframefcb");return Ct()[s]=()=>{gapi.load?i():r(Tt(e,"network-request-failed"))},a6(`https://apis.google.com/js/api.js?onload=${s}`).catch(l=>r(l))}}).catch(t=>{throw vi=null,t})}let vi=null;function A6(e){return vi=vi||C6(e),vi}/**
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
 */const P6=new Ia(5e3,15e3),O6="__/auth/iframe",R6="emulator/auth/iframe",N6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},z6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M6(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?Bu(t,R6):`https://${e.config.authDomain}/${O6}`,n={apiKey:t.apiKey,appName:e.name,v:Bs},o=z6.get(e.config.apiHost);o&&(n.eid=o);const a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${Ea(n).slice(1)}`}async function L6(e){const t=await A6(e),r=Ct().gapi;return $(r,e,"internal-error"),t.open({where:document.body,url:M6(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:N6,dontclear:!0},n=>new Promise(async(o,a)=>{await n.restyle({setHideOnLeave:!1});const i=Tt(e,"network-request-failed"),s=Ct().setTimeout(()=>{a(i)},P6.get());function l(){Ct().clearTimeout(s),o(n)}n.ping(l).then(l,()=>{a(i)})}))}/**
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
 */const D6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j6=500,F6=600,$6="_blank",U6="http://localhost";class Km{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B6(e,t,r,n=j6,o=F6){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),i=Math.max((window.screen.availWidth-n)/2,0).toString();let s="";const l=Object.assign(Object.assign({},D6),{width:n.toString(),height:o.toString(),top:a,left:i}),c=Ae().toLowerCase();r&&(s=a0(c)?$6:r),o0(c)&&(t=t||U6,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[h,w])=>`${d}${h}=${w},`,"");if(ST(c)&&s!=="_self")return V6(t||"",s),new Km(null);const p=window.open(t||"",s,u);$(p,e,"popup-blocked");try{p.focus()}catch{}return new Km(p)}function V6(e,t){const r=document.createElement("a");r.href=e,r.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const H6="__/auth/handler",W6="emulator/auth/handler";function Ym(e,t,r,n,o,a){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:Bs,eventId:o};if(t instanceof f0){t.setDefaultLanguage(e.languageCode),i.providerId=t.providerId||"",VE(t.getCustomParameters())||(i.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,c]of Object.entries(a||{}))i[l]=c}if(t instanceof Pa){const l=t.getScopes().filter(c=>c!=="");l.length>0&&(i.scopes=l.join(","))}e.tenantId&&(i.tid=e.tenantId);const s=i;for(const l of Object.keys(s))s[l]===void 0&&delete s[l];return`${G6(e)}?${Ea(s).slice(1)}`}function G6({config:e}){return e.emulator?Bu(e,W6):`https://${e.authDomain}/${H6}`}/**
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
 */const Ul="webStorageSupport";class K6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=v6,this._overrideRedirectResult=g6}async _openPopup(t,r,n,o){var a;qt((a=this.eventManagers[t._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const i=Ym(t,r,n,ud(),o);return B6(t,i,Ku())}async _openRedirect(t,r,n,o){return await this._originValidation(t),YT(Ym(t,r,n,ud(),o)),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:o,promise:a}=this.eventManagers[r];return o?Promise.resolve(o):(qt(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(t);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(t){const r=await L6(t),n=new w6(t);return r.register("authEvent",o=>($(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:n.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=r,n}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Ul,{type:Ul},o=>{var a;const i=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[Ul];i!==void 0&&r(!!i),ht(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=E6(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return d0()||Hu()||Vs()}}const Y6=K6;var qm="@firebase/auth",Qm="0.20.3";/**
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
 */class q6{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(n=>{var o;t(((o=n)===null||o===void 0?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);!r||(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Q6(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function X6(e){Yt(new Pt("auth",(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),{apiKey:a,authDomain:i}=n.options;return((s,l)=>{$(a&&!a.includes(":"),"invalid-api-key",{appName:s.name}),$(!(i!=null&&i.includes(":")),"argument-error",{appName:s.name});const c={apiKey:a,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(e)},u=new CT(s,l,c);return sT(u,r),u})(n,o)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,n)=>{t.getProvider("auth-internal").initialize()})),Yt(new Pt("auth-internal",t=>{const r=Hs(t.getProvider("auth").getImmediate());return(n=>new q6(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(qm,Qm,Q6(e)),It(qm,Qm,"esm2017")}/**
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
 */function E0(e=Yv()){const t=so(e,"auth");return t.isInitialized()?t.getImmediate():iT(e,{popupRedirectResolver:Y6,persistence:[n6,WT,v0]})}X6("Browser");const I0="@firebase/installations",qu="0.5.10";/**
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
 */const T0=1e4,C0=`w:${qu}`,A0="FIS_v2",J6="https://firebaseinstallations.googleapis.com/v1",Z6=60*60*1e3,e4="installations",t4="Installations";/**
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
 */const r4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},sn=new hn(e4,t4,r4);function P0(e){return e instanceof Nr&&e.code.includes("request-failed")}/**
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
 */function O0({projectId:e}){return`${J6}/projects/${e}/installations`}function R0(e){return{token:e.token,requestStatus:2,expiresIn:o4(e.expiresIn),creationTime:Date.now()}}async function N0(e,t){const n=(await t.json()).error;return sn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function z0({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function n4(e,{refreshToken:t}){const r=z0(e);return r.append("Authorization",a4(t)),r}async function M0(e){const t=await e();return t.status>=500&&t.status<600?e():t}function o4(e){return Number(e.replace("s","000"))}function a4(e){return`${A0} ${e}`}/**
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
 */async function i4({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const n=O0(e),o=z0(e),a=t.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const i={fid:r,authVersion:A0,appId:e.appId,sdkVersion:C0},s={method:"POST",headers:o,body:JSON.stringify(i)},l=await M0(()=>fetch(n,s));if(l.ok){const c=await l.json();return{fid:c.fid||r,registrationStatus:2,refreshToken:c.refreshToken,authToken:R0(c.authToken)}}else throw await N0("Create Installation",l)}/**
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
 */function L0(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function s4(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const l4=/^[cdef][\w-]{21}$/,pd="";function c4(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const r=d4(e);return l4.test(r)?r:pd}catch{return pd}}function d4(e){return s4(e).substr(0,22)}/**
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
 */function Ks(e){return`${e.appName}!${e.appId}`}/**
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
 */const D0=new Map;function j0(e,t){const r=Ks(e);F0(r,t),u4(r,t)}function F0(e,t){const r=D0.get(e);if(!!r)for(const n of r)n(t)}function u4(e,t){const r=f4();r&&r.postMessage({key:e,fid:t}),p4()}let Wr=null;function f4(){return!Wr&&"BroadcastChannel"in self&&(Wr=new BroadcastChannel("[Firebase] FID Change"),Wr.onmessage=e=>{F0(e.data.key,e.data.fid)}),Wr}function p4(){D0.size===0&&Wr&&(Wr.close(),Wr=null)}/**
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
 */const m4="firebase-installations-database",g4=1,ln="firebase-installations-store";let Bl=null;function Qu(){return Bl||(Bl=Gv(m4,g4,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ln)}}})),Bl}async function rs(e,t){const r=Ks(e),o=(await Qu()).transaction(ln,"readwrite"),a=o.objectStore(ln),i=await a.get(r);return await a.put(t,r),await o.done,(!i||i.fid!==t.fid)&&j0(e,t.fid),t}async function $0(e){const t=Ks(e),n=(await Qu()).transaction(ln,"readwrite");await n.objectStore(ln).delete(t),await n.done}async function Ys(e,t){const r=Ks(e),o=(await Qu()).transaction(ln,"readwrite"),a=o.objectStore(ln),i=await a.get(r),s=t(i);return s===void 0?await a.delete(r):await a.put(s,r),await o.done,s&&(!i||i.fid!==s.fid)&&j0(e,s.fid),s}/**
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
 */async function Xu(e){let t;const r=await Ys(e.appConfig,n=>{const o=h4(n),a=b4(e,o);return t=a.registrationPromise,a.installationEntry});return r.fid===pd?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function h4(e){const t=e||{fid:c4(),registrationStatus:0};return U0(t)}function b4(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(sn.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=v4(e,r);return{installationEntry:r,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:y4(e)}:{installationEntry:t}}async function v4(e,t){try{const r=await i4(e,t);return rs(e.appConfig,r)}catch(r){throw P0(r)&&r.customData.serverCode===409?await $0(e.appConfig):await rs(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function y4(e){let t=await Xm(e.appConfig);for(;t.registrationStatus===1;)await L0(100),t=await Xm(e.appConfig);if(t.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await Xu(e);return n||r}return t}function Xm(e){return Ys(e,t=>{if(!t)throw sn.create("installation-not-found");return U0(t)})}function U0(e){return w4(e)?{fid:e.fid,registrationStatus:0}:e}function w4(e){return e.registrationStatus===1&&e.registrationTime+T0<Date.now()}/**
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
 */async function x4({appConfig:e,heartbeatServiceProvider:t},r){const n=k4(e,r),o=n4(e,r),a=t.getImmediate({optional:!0});if(a){const c=await a.getHeartbeatsHeader();c&&o.append("x-firebase-client",c)}const i={installation:{sdkVersion:C0,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(i)},l=await M0(()=>fetch(n,s));if(l.ok){const c=await l.json();return R0(c)}else throw await N0("Generate Auth Token",l)}function k4(e,{fid:t}){return`${O0(e)}/${t}/authTokens:generate`}/**
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
 */async function Ju(e,t=!1){let r;const n=await Ys(e.appConfig,a=>{if(!B0(a))throw sn.create("not-registered");const i=a.authToken;if(!t&&E4(i))return a;if(i.requestStatus===1)return r=_4(e,t),a;{if(!navigator.onLine)throw sn.create("app-offline");const s=T4(a);return r=S4(e,s),s}});return r?await r:n.authToken}async function _4(e,t){let r=await Jm(e.appConfig);for(;r.authToken.requestStatus===1;)await L0(100),r=await Jm(e.appConfig);const n=r.authToken;return n.requestStatus===0?Ju(e,t):n}function Jm(e){return Ys(e,t=>{if(!B0(t))throw sn.create("not-registered");const r=t.authToken;return C4(r)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function S4(e,t){try{const r=await x4(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await rs(e.appConfig,n),r}catch(r){if(P0(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await $0(e.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rs(e.appConfig,n)}throw r}}function B0(e){return e!==void 0&&e.registrationStatus===2}function E4(e){return e.requestStatus===2&&!I4(e)}function I4(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Z6}function T4(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function C4(e){return e.requestStatus===1&&e.requestTime+T0<Date.now()}/**
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
 */async function A4(e){const t=e,{installationEntry:r,registrationPromise:n}=await Xu(t);return n?n.catch(console.error):Ju(t).catch(console.error),r.fid}/**
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
 */async function P4(e,t=!1){const r=e;return await O4(r),(await Ju(r,t)).token}async function O4(e){const{registrationPromise:t}=await Xu(e);t&&await t}/**
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
 */function R4(e){if(!e||!e.options)throw Vl("App Configuration");if(!e.name)throw Vl("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw Vl(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Vl(e){return sn.create("missing-app-config-values",{valueName:e})}/**
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
 */const V0="installations",N4="installations-internal",z4=e=>{const t=e.getProvider("app").getImmediate(),r=R4(t),n=so(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},M4=e=>{const t=e.getProvider("app").getImmediate(),r=so(t,V0).getImmediate();return{getId:()=>A4(r),getToken:o=>P4(r,o)}};function L4(){Yt(new Pt(V0,z4,"PUBLIC")),Yt(new Pt(N4,M4,"PRIVATE"))}L4();It(I0,qu);It(I0,qu,"esm2017");/**
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
 */const ns="analytics",D4="firebase_id",j4="origin",F4=60*1e3,$4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",H0="https://www.googletagmanager.com/gtag/js";/**
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
 */const We=new Du("@firebase/analytics");/**
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
 */function W0(e){return Promise.all(e.map(t=>t.catch(r=>r)))}function U4(e,t){const r=document.createElement("script");r.src=`${H0}?l=${e}&id=${t}`,r.async=!0,document.head.appendChild(r)}function B4(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function V4(e,t,r,n,o,a){const i=n[o];try{if(i)await t[i];else{const l=(await W0(r)).find(c=>c.measurementId===o);l&&await t[l.appId]}}catch(s){We.error(s)}e("config",o,a)}async function H4(e,t,r,n,o){try{let a=[];if(o&&o.send_to){let i=o.send_to;Array.isArray(i)||(i=[i]);const s=await W0(r);for(const l of i){const c=s.find(p=>p.measurementId===l),u=c&&t[c.appId];if(u)a.push(u);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",n,o||{})}catch(a){We.error(a)}}function W4(e,t,r,n){async function o(a,i,s){try{a==="event"?await H4(e,t,r,i,s):a==="config"?await V4(e,t,r,n,i,s):e("set",i)}catch(l){We.error(l)}}return o}function G4(e,t,r,n,o){let a=function(...i){window[n].push(arguments)};return window[o]&&typeof window[o]=="function"&&(a=window[o]),window[o]=W4(a,e,t,r),{gtagCore:a,wrappedGtag:window[o]}}function K4(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(H0))return t;return null}/**
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
 */const Y4={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},ot=new hn("analytics","Analytics",Y4);/**
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
 */const q4=30,Q4=1e3;class X4{constructor(t={},r=Q4){this.throttleMetadata=t,this.intervalMillis=r}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,r){this.throttleMetadata[t]=r}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const G0=new X4;function J4(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Z4(e){var t;const{appId:r,apiKey:n}=e,o={method:"GET",headers:J4(n)},a=$4.replace("{app-id}",r),i=await fetch(a,o);if(i.status!==200&&i.status!==304){let s="";try{const l=await i.json();!((t=l.error)===null||t===void 0)&&t.message&&(s=l.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:i.status,responseMessage:s})}return i.json()}async function eC(e,t=G0,r){const{appId:n,apiKey:o,measurementId:a}=e.options;if(!n)throw ot.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:n};throw ot.create("no-api-key")}const i=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new nC;return setTimeout(async()=>{s.abort()},r!==void 0?r:F4),K0({appId:n,apiKey:o,measurementId:a},i,s,t)}async function K0(e,{throttleEndTimeMillis:t,backoffCount:r},n,o=G0){const{appId:a,measurementId:i}=e;try{await tC(n,t)}catch(s){if(i)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:a,measurementId:i};throw s}try{const s=await Z4(e);return o.deleteThrottleMetadata(a),s}catch(s){if(!rC(s)){if(o.deleteThrottleMetadata(a),i)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${i} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:a,measurementId:i};throw s}const l=Number(s.customData.httpStatus)===503?Cm(r,o.intervalMillis,q4):Cm(r,o.intervalMillis),c={throttleEndTimeMillis:Date.now()+l,backoffCount:r+1};return o.setThrottleMetadata(a,c),We.debug(`Calling attemptFetch again in ${l} millis`),K0(e,c,n,o)}}function tC(e,t){return new Promise((r,n)=>{const o=Math.max(t-Date.now(),0),a=setTimeout(r,o);e.addEventListener(()=>{clearTimeout(a),n(ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function rC(e){if(!(e instanceof Nr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class nC{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
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
 */async function oC(){if(Bv())try{await Vv()}catch(e){return We.warn(ot.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return We.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function aC(e,t,r,n,o,a,i){var s;const l=eC(e);l.then(h=>{r[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>We.error(h)),t.push(l);const c=oC().then(h=>{if(h)return n.getId()}),[u,p]=await Promise.all([l,c]);K4()||U4(a,u.measurementId),o("js",new Date);const d=(s=i==null?void 0:i.config)!==null&&s!==void 0?s:{};return d[j4]="firebase",d.update=!0,p!=null&&(d[D4]=p),o("config",u.measurementId,d),u.measurementId}/**
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
 */class iC{constructor(t){this.app=t}_delete(){return delete Bo[this.app.options.appId],Promise.resolve()}}let Bo={},Zm=[];const eg={};let Hl="dataLayer",sC="gtag",tg,Y0,rg=!1;function lC(){const e=[];if(Uv()&&e.push("This is a browser extension environment."),FE()||e.push("Cookies are not available."),e.length>0){const t=e.map((n,o)=>`(${o+1}) ${n}`).join(" "),r=ot.create("invalid-analytics-context",{errorInfo:t});We.warn(r.message)}}function cC(e,t,r){lC();const n=e.options.appId;if(!n)throw ot.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(Bo[n]!=null)throw ot.create("already-exists",{id:n});if(!rg){B4(Hl);const{wrappedGtag:a,gtagCore:i}=G4(Bo,Zm,eg,Hl,sC);Y0=a,tg=i,rg=!0}return Bo[n]=aC(e,Zm,eg,t,tg,Hl,r),new iC(e)}/**
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
 */async function dC(e,t,r,n,o){if(o&&o.global){e("event",r,n);return}else{const a=await t,i=Object.assign(Object.assign({},n),{send_to:a});e("event",r,i)}}function uC(e=Yv()){e=bn(e);const t=so(e,ns);return t.isInitialized()?t.getImmediate():fC(e)}function fC(e,t={}){const r=so(e,ns);if(r.isInitialized()){const o=r.getImmediate();if(da(t,r.getOptions()))return o;throw ot.create("already-initialized")}return r.initialize({options:t})}function pC(e,t,r,n){e=bn(e),dC(Y0,Bo[e.app.options.appId],t,r,n).catch(o=>We.error(o))}const ng="@firebase/analytics",og="0.7.10";function mC(){Yt(new Pt(ns,(t,{options:r})=>{const n=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return cC(n,o,r)},"PUBLIC")),Yt(new Pt("analytics-internal",e,"PRIVATE")),It(ng,og),It(ng,og,"esm2017");function e(t){try{const r=t.getProvider(ns).getImmediate();return{logEvent:(n,o,a)=>pC(r,n,o,a)}}catch(r){throw ot.create("interop-component-reg-failed",{reason:r})}}}mC();function gC(){const t=GI({apiKey:"AIzaSyDWy6KCW2Fl78p8r2K6l_dX9bWfPpaZnGE",authDomain:"clon-razer.firebaseapp.com",projectId:"clon-razer",storageBucket:"clon-razer.appspot.com",messagingSenderId:"486331366759",appId:"1:486331366759:web:6c09d83cfb6bb40a2283c2",measurementId:"G-9Y0LKCPDE3"});uC(t)}async function hC(e,t){await $T(E0(),e,t)}async function bC(e,t){try{let r=await UT(E0(),e,t)}catch{return!1}return!0}function vC(){const[e,t]=_.exports.useState(!1),r=i=>{hC(i.correo,i.nombre)},[n,o]=_.exports.useState(!1),a=()=>{o(!0),o(!n)};return y(wa,{children:y(Dv,{initialValues:{nombre:"",correo:""},validate:i=>{let s={};return i.nombre?/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/.test(i.nombre)||(s.nombre="La contrase\xF1a debe tener al entre 6 y 16 caracteres, al menos un d\xEDgito, al menos una min\xFAscula y al menos una may\xFAscula."):s.nombre="Por favor ingresa una contrase\xF1a v\xE1lida",i.correo?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(i.correo)||(s.correo="El correo solo puede contener letras, n\xFAmeros, puntos y guiones bajos"):s.correo="Por favor ingresa un correo electr\xF3nico",s},onSubmit:(i,{resetForm:s})=>{r(i),s(),t(!0),window.location.href="/login",setTimeout(()=>t(!1),3e3)},children:({values:i,handleSubmit:s,handleChange:l,handleBlur:c,errors:u,touched:p})=>G("form",{className:"form m-auto p-4 bg-dark ",onSubmit:s,children:[y("div",{className:"text-center mb-4 text-white p-3",children:y("h3",{children:"Reg\xEDstrate"})}),y("div",{children:G("div",{className:"form-floating mb-3",children:[y("input",{type:"text",className:"form-control rounded-0 bg-transparent text-white ",id:"floatingInput",placeholder:"name@example.com"}),y("label",{htmlFor:"floatingInput",className:"text-white",children:"UserName"})]})}),y("div",{children:G("div",{className:"form-floating",children:[y("input",{type:"text",className:"form-control rounded-0  bg-transparent text-white focus-success ",id:"floatingPassword",placeholder:"Password",name:"correo",value:i.correo,onChange:l,onBlur:c}),y("label",{htmlFor:"floatingPassword",className:"text-white ",children:"Direcci\xF3n Email"}),p.correo&&u.correo&&y("div",{className:"text-danger m-3 fs-7",children:u.correo})]})}),y("div",{children:G("div",{className:"form-floating mt-3",children:[y("input",{type:n?"text":"password",className:"form-control rounded-0 bg-transparent text-white",id:"floatingPassword2",placeholder:"Password",name:"nombre",value:i.nombre,onChange:l,onBlur:c}),y("label",{htmlFor:"floatingPassword2",className:"text-white",children:"Password"}),y("div",{className:"position-absolute text-white end-0 my-hover",onClick:a,children:y(ao,{icon:n?rv:nv})}),p.nombre&&u.nombre&&y("div",{className:"text-danger m-3 fs-7",children:u.nombre})]})}),y("button",{type:"submit",className:"btn-dark bg-success text-dark fw-bold rounded w-100 mt-5 p-2 my-hover mb-4 user-select",children:"Registrar"}),e&&y("p",{className:"exito text-success text-center",children:"Te has registrado correctamente!"})]})})})}function yC(){const[e,t]=_.exports.useState(!1),[r,n]=_.exports.useState(!0),o=async l=>{await bC(l.correo,l.nombre)?(window.location.href="/newHome",n(!0)):n(!1)},[a,i]=_.exports.useState(!1),s=()=>{i(!0),i(!a)};return y(wa,{children:y(Dv,{initialValues:{nombre:"",correo:""},validate:l=>{let c={};return l.nombre?/(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/.test(l.nombre)||(c.nombre="La contrase\xF1a debe tener al entre 6 y 16 caracteres, al menos un d\xEDgito, al menos una min\xFAscula y al menos una may\xFAscula."):c.nombre="Por favor ingresa una contrase\xF1a v\xE1lida",l.correo?/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(l.correo)||(c.correo="El correo solo puede contener letras, n\xFAmeros, puntos y guiones bajos"):c.correo="Por favor ingresa un correo electr\xF3nico",c},onSubmit:(l,{resetForm:c})=>{o(l),c(),t(!0),setTimeout(()=>t(!1),3e3)},children:({values:l,handleSubmit:c,handleChange:u,handleBlur:p,errors:d,touched:h})=>G("form",{className:"form m-auto p-4 bg-dark ",onSubmit:c,children:[y("div",{className:"text-center mb-4 text-white p-3",children:y("h3",{children:"Inicia Sesi\xF3n"})}),y("div",{children:G("div",{className:"form-floating",children:[y("input",{type:"text",className:"form-control rounded-0  bg-transparent text-white focus-success ",id:"floatingPassword",placeholder:"Password",name:"correo",value:l.correo,onChange:u,onBlur:p}),y("label",{htmlFor:"floatingPassword",className:"text-white ",children:"Direcci\xF3n Email"}),h.correo&&d.correo&&y("div",{className:"text-danger m-3 fs-7",children:d.correo})]})}),y("div",{children:G("div",{className:"form-floating mt-3",children:[y("input",{type:a?"text":"password",className:"form-control rounded-0 bg-transparent text-white",id:"floatingPassword2",placeholder:"Password",name:"nombre",value:l.nombre,onChange:u,onBlur:p}),y("label",{htmlFor:"floatingPassword2",className:"text-white",children:"Password"}),y("div",{className:"position-absolute text-white end-0 my-hover",onClick:s,children:y(ao,{icon:a?rv:nv})}),h.nombre&&d.nombre&&y("div",{className:"text-danger m-3 fs-7",children:d.nombre})]})}),y("button",{type:"submit",className:"btn-dark bg-success text-dark fw-bold rounded w-100 mt-5 p-2 my-hover mb-4 user-select",children:"Ingresar"}),e&&r&&y("p",{className:"exito text-success text-center",children:"Has ingresado correctamente!"}),e&&!r&&y("p",{className:"exito text-danger text-center",children:"El correo o la contrase\xF1a son incorrectos!"})]})})})}var wC="/assets/logo.768cd2b1.png";function wo(e){return y("li",{className:"nav-item  text-center",children:y(cu,{className:"nav-link active  fs-4 m-1 scale border-my",onClick:e.function,"aria-current":"page",to:e.path,children:e.children})})}function xC(){const[e,t]=_.exports.useState(!1),[r,n]=_.exports.useState(!1),[o,a]=_.exports.useState(!1);window.addEventListener("scroll",function(){document.body.getBoundingClientRect().top<0?t(!0):t(!1)});const i=no();return _.exports.useEffect(()=>{i.pathname=="/newHome"&&a(!0)},[i]),y("nav",{className:`navbar navbar-expand-lg navbar-dark ${e?"static":"bg-transparent"}`,children:G("div",{className:"container-fluid",children:[y(cu,{to:"/",children:y("img",{src:wC,className:"navbar-brand scale",width:100})}),y("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse",onClick:()=>n(!0),"data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:y("span",{className:"navbar-toggler-icon"})}),y("div",{className:`collapse navbar-collapse justify-content-end ${r?"show":""}`,id:"navbarNav",children:G("ul",{className:"navbar-nav",children:[y(wo,{function:()=>n(!1),path:"/",children:"Home"}),y(wo,{function:()=>n(!1),path:"/services",children:"Services"}),y(wo,{function:()=>n(!1),path:"/register",children:"Register"}),y(wo,{function:()=>n(!1),path:"/login",children:"Login"}),o?y(wo,{function:()=>n(!1),path:"/newFunctions",children:"New Functions"}):null]})})]})})}function kC(){const[e,t]=_.exports.useState(!1),[r,n]=_.exports.useState(!1),[o,a]=_.exports.useState(!1);return G("div",{className:"container text-center text-white mt-4 txt-shadow",children:[y("h2",{children:"Felicidades por loogearte"}),y("h3",{children:"Has desbloqueado las funciones especiales"}),y("p",{className:"bg-dark w-25 m-auto mb-3 mt-3 p-2 rounded",children:"Con este bot\xF3n de abajo puedes eliminar la p\xE1gina"}),y("button",{className:"btn btn-success",onClick:()=>t(!0),children:"Eliminar TODO"}),e&&G("div",{className:"text-center",children:[y("p",{className:"mt-2 text-light",children:"Eh, eh, espera, \xBFen serio quieres eliminarla? \xBFNo te gust\xF3 la p\xE1gina? :("}),y("button",{className:"btn btn-success m-2",onClick:()=>n(!0),children:"No, para nada"}),y("button",{className:"btn btn-success m-2",onClick:()=>{t(!1),window.location.href="/"},children:"S\xED me gust\xF3, perd\xF3n"})]}),r&&G("div",{className:"text-center",children:[y("p",{className:"mt-2 text-light",children:"\xBFCompletamente seguro?"}),y("button",{className:"btn btn-success m-2 w-25",onClick:()=>{a(!0),setTimeout(()=>{window.location.href="/erase"},1e3)},children:"Seguro"})]}),o&&y("div",{className:"text-center",children:y("p",{className:"mt-2 text-light",children:"Ok..."})})]})}function _C(){gC();const[e,t]=_.exports.useState(!0),r=no();return _.exports.useEffect(()=>{r.pathname=="/erase"&&t(!1)},[r]),e?G("div",{className:"App",children:[y(xC,{}),G(sx,{children:[y(rr,{path:"/",element:y(Sp,{})}),y(rr,{path:"/learnMore",element:y(Px,{})}),y(rr,{path:"/services",element:y(Nx,{})}),y(rr,{path:"/register",element:y(vC,{})}),y(rr,{path:"/login",element:y(yC,{})}),y(rr,{path:"/newHome",element:y(Sp,{})}),y(rr,{path:"/newFunctions",element:y(kC,{})})]})]}):y("div",{className:"container-fluid bg-white h1 text-danger centrar w-100 vh-100 txt-shadow",children:y("h1",{className:"border-bottom",children:"Error 404"})})}Wl.createRoot(document.getElementById("root")).render(y(fg.StrictMode,{children:y(dx,{children:y(_C,{})})}))});export default SC();
