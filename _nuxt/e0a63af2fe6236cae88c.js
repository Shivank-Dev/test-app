(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,n,t){"undefined"!=typeof self&&self,e.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n);var a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(t,!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},{$vue:null,id:null,router:null,fields:{},customIdFields:{},ignoreRoutes:[],linkers:[],commands:{},disabled:!1,customResourceURL:null,set:[],require:[],ecommerce:{enabled:!1,options:null,enhanced:!1},autoTracking:{screenview:!1,shouldRouterUpdate:null,skipSamePath:!1,exception:!1,exceptionLogs:!0,page:!0,transformQueryString:!0,pageviewOnLoad:!0,pageviewTemplate:null,untracked:!0,prependBase:!0},debug:{enabled:!1,trace:!1,sendHitTask:!0},batch:{enabled:!1,delay:500,amount:2},checkDuplicatedScript:!1,disableScriptLoader:!1,beforeFirstHit:s,ready:s,untracked:[]});function u(e){!function e(n,t){return Object.keys(t).forEach((function(r){var o=n[r]&&Object.prototype.toString.call(n[r]);"[object Object]"!==o&&"[object Array]"!==o?n[r]=t[r]:e(n[r],t[r])})),n}(a,e)}function o(){return a.id?[].concat(a.id):[]}var c=a;function s(){}var p=function(e){console.warn("[vue-analytics] ".concat(e))};function l(e,n){return new Promise((function(t,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=e,i.charset="utf-8",n){var c=document.createElement("link");c.href=n,c.rel="preconnect",o.appendChild(c)}o.appendChild(i),i.onload=t,i.onerror=r}))}function f(e){return e.name||e.replace(/-/gi,"")}function b(e,n){if(o().length>1){var t=f(n);return"".concat(t,".").concat(e)}return e}var d,y=function(e){if(e.then)return e;if("function"==typeof e){var n=e();return n.then?n:Promise.resolve(n)}return Promise.resolve(e)};function g(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=[];function v(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];"undefined"!=typeof window&&o().forEach((function(n){var r,o={m:b(e,n),a:t};window.ga?c.batch.enabled?(m.push(o),d||(d=setInterval((function(){m.length?m.splice(0,c.batch.amount).forEach((function(e){var n;(n=window).ga.apply(n,[e.m].concat(g(e.a)))})):(clearInterval(d),d=null)}),c.batch.delay))):(r=window).ga.apply(r,[b(e,n)].concat(t)):c.untracked.push(o)}))}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"object"!==h(n[0])||n[0].constructor!==Object?v("set",n[0],n[1]):v("set",n[0])}function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var P=function(){2!=arguments.length?v("require",arguments.length<=0?void 0:arguments[0]):v("require",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])};function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0];if(1===n.length&&"string"==typeof r)return v("send","screenview",{screenName:r});v.apply(void 0,["send","screenview"].concat(n))}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r;n.length&&!n[0]||(n.length&&n[0].currentRoute&&(r=n[0].currentRoute),n.length&&function(e){return e.query&&e.params}(n[0])&&(r=n[0]),r?A(r):(w("page","object"===E(n[0])?n[0].page:n[0]),v.apply(void 0,["send","pageview"].concat(n))))}function A(e){if(![(n=e).name,n.path].filter(Boolean).find((function(e){return-1!==c.ignoreRoutes.indexOf(e)}))){var n,t=c.autoTracking,r=e.meta.analytics,o=(void 0===r?{}:r).pageviewTemplate||t.pageviewTemplate;if(t.screenview&&!e.name)throw new Error("[vue-analytics] Route name is mandatory when using screenview.");if(t.screenview)k(e.name);else if(o)q(o(e));else{var i=c.router,l=c.autoTracking,a=l.transformQueryString,u=l.prependBase,f=function(e){var n=Object.keys(e).reduce((function(n,t,r,o){var i=r===o.length-1,c=e[t];return null==c?n:n+="".concat(t,"=").concat(c).concat(i?"":"&")}),"");return""!==n?"?".concat(n):""}(e.query),s=i&&i.options.base,p=u&&s,d=e.path+(a?f:"");q(d=p?function(e,n){var t=n.split("/"),r=e.split("/");return""===t[0]&&"/"===e[e.length-1]&&t.shift(),r.join("/")+t.join("/")}(s,d):d)}}}var T=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];"undefined"!=typeof window&&o().forEach((function(n){window["ga-disable-".concat(n)]=e}))},x=function(){if("undefined"!=typeof document&&"undefined"!=typeof window){if(c.id){var e,n,t=[y(c.id),y(c.disabled)];if(e=c.checkDuplicatedScript,n=c.disableScriptLoader,[Boolean(window&&window.ga),e&&!(Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function(e){return-1!==e.src.indexOf("analytics")||-1!==e.src.indexOf("gtag")})).length>0),!n].some(Boolean)){var r="https://www.google-analytics.com",d=c.debug.enabled?"analytics_debug":"analytics",i=c.customResourceURL?l(c.customResourceURL):l("".concat(r,"/").concat(d,".js"),r);t.push(i.catch((function(){p("An error occured! Please check your connection or disable your AD blocker")})))}return Promise.all(t).then((function(e){var n,t,r;u({id:e[0],disabled:e[1]}),T(c.disabled),function(){if(window.ga||!c.debug.enabled){if(window.ga){var e=o();c.debug.enabled&&(window.ga_debug={trace:c.debug.trace}),e.forEach((function(n){var t=f(n),r=c.customIdFields[n]||{},o=e.length>1?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c.fields,{},r,{name:t}):c.fields;window.ga("create",n.id||n,"auto",o)})),c.beforeFirstHit();var n=c.ecommerce;if(n.enabled){var t=n.enhanced?"ec":"ecommerce";n.options?v("require",t,n.options):v("require",t)}c.linkers.length>0&&(v("require","linker"),v("linker:autoLink",c.linkers)),c.debug.sendHitTask||w("sendHitTask",null)}}else p("Google Analytics has probably been blocked.")}(),function(){var e;c.set.forEach((function(e){var n=e.field,t=e.value;if(void 0===n||void 0===t)throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');w(n,t)})),e=["ec","ecommerce"],c.require.forEach((function(n){if(-1!==e.indexOf(n)||-1!==e.indexOf(n.name))throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");if("string"!=typeof n&&"object"!==S(n))throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');var t=n.name||n;n.options?P(t,n.options):P(t)}))}(),c.untracked.forEach((function(e){v.apply(void 0,[e.m].concat(function(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e.a)))})),n=c.router,t=c.autoTracking,r=c.$vue,t.page&&n&&n.onReady((function(){t.pageviewOnLoad&&n.history.ready&&A(n.currentRoute),n.afterEach((function(e,o){var i=t.skipSamePath,c=t.shouldRouterUpdate;i&&e.path===o.path||("function"!=typeof c||c(e,o))&&r.nextTick().then((function(){A(n.currentRoute)}))}))})),c.ready()})).catch((function(e){c.debug.enabled&&p(e.message)}))}p('Missing the "id" parameter. Add at least one tracking domain ID')}},D=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];v("send","exception",{exDescription:e,exFatal:n})},R=function(e){if(c.autoTracking.exception){window.addEventListener("error",(function(e){D(e.message)}));var n=e.config.errorHandler;e.config.errorHandler=function(e,t,r){D(e.message),c.autoTracking.exceptionLogs&&console.error(e),"function"==typeof n&&n.call(void 0,e,t,r)}}},I=D;function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var U=function(e){return"".concat(c.ecommerce.enhanced?"ec":"ecommerce",":").concat(e)},B=["addItem","addTransaction","addProduct","addImpression","setAction","addPromo","send"].reduce((function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(t,!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,_({},n,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];v.apply(void 0,[U(n)].concat(t))})))}),{}),H={event:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];v.apply(void 0,["send","event"].concat(n))},exception:I,page:q,query:v,require:P,set:w,social:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];v.apply(void 0,["send","social"].concat(n))},time:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];v.apply(void 0,["send","timing"].concat(n))},screenview:k,ecommerce:B,disable:function(){return T(!0)},enable:function(){return T(!1)},commands:c.commands},$={inserted:function(e,n,t){var r=Object.keys(n.modifiers);0===r.length&&r.push("click"),r.forEach((function(r){e.addEventListener(r,(function(){var e="string"==typeof n.value?c.commands[n.value]:n.value;if(!e)throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");e.apply(t.context)}))}))}};function F(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){u(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(t,!0).forEach((function(n){C(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{$vue:e})),e.directive("ga",$),e.prototype.$ga=e.$ga=H,R(e),x()}t.d(n,"default",(function(){return N})),t.d(n,"analyticsMiddleware",(function(){return J})),t.d(n,"onAnalyticsReady",(function(){return Q})),t.d(n,"event",(function(){return W})),t.d(n,"ecommerce",(function(){return G})),t.d(n,"set",(function(){return z})),t.d(n,"page",(function(){return K})),t.d(n,"query",(function(){return V})),t.d(n,"screenview",(function(){return X})),t.d(n,"time",(function(){return Y})),t.d(n,"require",(function(){return Z})),t.d(n,"exception",(function(){return ee})),t.d(n,"social",(function(){return ne}));var J=function(e){e.subscribe((function(e){var n=e.payload;if(n&&n.meta&&n.meta.analytics){var t=n.meta.analytics;if(!Array.isArray(t))throw new Error('The "analytics" property needs to be an array');t.forEach((function(e){var n,t,r=e.shift(),o=e;if(r.includes(":")){var i=function(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return t}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.split(":"),2);r=i[0],n=i[1]}if(!(r in H))throw new Error('[vue-analytics:vuex] The type "'.concat(r,"\" doesn't exist."));if(n&&!(n in H[r]))throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" has not method "').concat(n,'".'));if("ecommerce"===r&&!n)throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" needs to call a method. Check documentation.'));n?(t=H[r])[n].apply(t,F(o)):H[r].apply(H,F(o))}))}}))},Q=function(){return new Promise((function(e,n){var t=setInterval((function(){"undefined"!=typeof window&&window.ga&&(e(),clearInterval(t))}),10)}))},W=H.event,G=H.ecommerce,z=H.set,K=H.page,V=H.query,X=H.screenview,Y=H.time,Z=H.require,ee=H.exception,ne=H.social}])},156:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(148),c=t.n(o);r.a.use(c.a,{id:"UA-143978554-5",debug:{enabled:!0}});var l={layout:"users",data:function(){return{title:"RS | Users"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Users page description RS"}],link:[{rel:"canonical",href:"https://shivank-dev.github.io/test-app/"}]}},methods:{},mounted:function(){this.$ga.page("/users")}},f=t(15),component=Object(f.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("h1",[this._v("This is users page")])}),[],!1,null,null,null);n.default=component.exports}}]);