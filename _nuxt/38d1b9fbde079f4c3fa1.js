(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},{$vue:null,id:null,router:null,fields:{},customIdFields:{},ignoreRoutes:[],linkers:[],commands:{},disabled:!1,customResourceURL:null,set:[],require:[],ecommerce:{enabled:!1,options:null,enhanced:!1},autoTracking:{screenview:!1,shouldRouterUpdate:null,skipSamePath:!1,exception:!1,exceptionLogs:!0,page:!0,transformQueryString:!0,pageviewOnLoad:!0,pageviewTemplate:null,untracked:!0,prependBase:!0},debug:{enabled:!1,trace:!1,sendHitTask:!0},batch:{enabled:!1,delay:500,amount:2},checkDuplicatedScript:!1,disableScriptLoader:!1,beforeFirstHit:s,ready:s,untracked:[]});function u(e){!function e(t,n){return Object.keys(n).forEach((function(r){var o=t[r]&&Object.prototype.toString.call(t[r]);"[object Object]"!==o&&"[object Array]"!==o?t[r]=n[r]:e(t[r],n[r])})),t}(a,e)}function o(){return a.id?[].concat(a.id):[]}var c=a;function s(){}var p=function(e){console.warn("[vue-analytics] ".concat(e))};function l(e,t){return new Promise((function(n,r){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");if(i.async=!0,i.src=e,i.charset="utf-8",t){var c=document.createElement("link");c.href=t,c.rel="preconnect",o.appendChild(c)}o.appendChild(i),i.onload=n,i.onerror=r}))}function f(e){return e.name||e.replace(/-/gi,"")}function b(e,t){if(o().length>1){var n=f(t);return"".concat(n,".").concat(e)}return e}var d,y=function(e){if(e.then)return e;if("function"==typeof e){var t=e();return t.then?t:Promise.resolve(t)}return Promise.resolve(e)};function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=[];function v(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];"undefined"!=typeof window&&o().forEach((function(t){var r,o={m:b(e,t),a:n};window.ga?c.batch.enabled?(m.push(o),d||(d=setInterval((function(){m.length?m.splice(0,c.batch.amount).forEach((function(e){var t;(t=window).ga.apply(t,[e.m].concat(g(e.a)))})):(clearInterval(d),d=null)}),c.batch.delay))):(r=window).ga.apply(r,[b(e,t)].concat(n)):c.untracked.push(o)}))}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"object"!==h(t[0])||t[0].constructor!==Object?v("set",t[0],t[1]):v("set",t[0])}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){2!=arguments.length?v("require",arguments.length<=0?void 0:arguments[0]):v("require",arguments.length<=0?void 0:arguments[0],arguments.length<=1?void 0:arguments[1])};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0];if(1===t.length&&"string"==typeof r)return v("send","screenview",{screenName:r});v.apply(void 0,["send","screenview"].concat(t))}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;t.length&&!t[0]||(t.length&&t[0].currentRoute&&(r=t[0].currentRoute),t.length&&function(e){return e.query&&e.params}(t[0])&&(r=t[0]),r?E(r):(w("page","object"===x(t[0])?t[0].page:t[0]),v.apply(void 0,["send","pageview"].concat(t))))}function E(e){if(![(t=e).name,t.path].filter(Boolean).find((function(e){return-1!==c.ignoreRoutes.indexOf(e)}))){var t,n=c.autoTracking,r=e.meta.analytics,o=(void 0===r?{}:r).pageviewTemplate||n.pageviewTemplate;if(n.screenview&&!e.name)throw new Error("[vue-analytics] Route name is mandatory when using screenview.");if(n.screenview)S(e.name);else if(o)q(o(e));else{var i=c.router,l=c.autoTracking,a=l.transformQueryString,u=l.prependBase,f=function(e){var t=Object.keys(e).reduce((function(t,n,r,o){var i=r===o.length-1,c=e[n];return null==c?t:t+="".concat(n,"=").concat(c).concat(i?"":"&")}),"");return""!==t?"?".concat(t):""}(e.query),s=i&&i.options.base,p=u&&s,d=e.path+(a?f:"");q(d=p?function(e,t){var n=t.split("/"),r=e.split("/");return""===n[0]&&"/"===e[e.length-1]&&n.shift(),r.join("/")+n.join("/")}(s,d):d)}}}var A=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];"undefined"!=typeof window&&o().forEach((function(t){window["ga-disable-".concat(t)]=e}))},T=function(){if("undefined"!=typeof document&&"undefined"!=typeof window){if(c.id){var e,t,n=[y(c.id),y(c.disabled)];if(e=c.checkDuplicatedScript,t=c.disableScriptLoader,[Boolean(window&&window.ga),e&&!(Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function(e){return-1!==e.src.indexOf("analytics")||-1!==e.src.indexOf("gtag")})).length>0),!t].some(Boolean)){var r="https://www.google-analytics.com",d=c.debug.enabled?"analytics_debug":"analytics",i=c.customResourceURL?l(c.customResourceURL):l("".concat(r,"/").concat(d,".js"),r);n.push(i.catch((function(){p("An error occured! Please check your connection or disable your AD blocker")})))}return Promise.all(n).then((function(e){var t,n,r;u({id:e[0],disabled:e[1]}),A(c.disabled),function(){if(window.ga||!c.debug.enabled){if(window.ga){var e=o();c.debug.enabled&&(window.ga_debug={trace:c.debug.trace}),e.forEach((function(t){var n=f(t),r=c.customIdFields[t]||{},o=e.length>1?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},c.fields,{},r,{name:n}):c.fields;window.ga("create",t.id||t,"auto",o)})),c.beforeFirstHit();var t=c.ecommerce;if(t.enabled){var n=t.enhanced?"ec":"ecommerce";t.options?v("require",n,t.options):v("require",n)}c.linkers.length>0&&(v("require","linker"),v("linker:autoLink",c.linkers)),c.debug.sendHitTask||w("sendHitTask",null)}}else p("Google Analytics has probably been blocked.")}(),function(){var e;c.set.forEach((function(e){var t=e.field,n=e.value;if(void 0===t||void 0===n)throw new Error('[vue-analytics] Wrong configuration in the plugin options.\nThe "set" array requires each item to have a "field" and a "value" property.');w(t,n)})),e=["ec","ecommerce"],c.require.forEach((function(t){if(-1!==e.indexOf(t)||-1!==e.indexOf(t.name))throw new Error("[vue-analytics] The ecommerce features are built-in in the plugin. \nFollow the ecommerce instructions available in the documentation.");if("string"!=typeof t&&"object"!==P(t))throw new Error('[vue-analytics] Wrong configuration in the plugin options. \nThe "require" array requires each item to be a string or to have a "name" and an "options" property.');var n=t.name||t;t.options?k(n,t.options):k(n)}))}(),c.untracked.forEach((function(e){v.apply(void 0,[e.m].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e.a)))})),t=c.router,n=c.autoTracking,r=c.$vue,n.page&&t&&t.onReady((function(){n.pageviewOnLoad&&t.history.ready&&E(t.currentRoute),t.afterEach((function(e,o){var i=n.skipSamePath,c=n.shouldRouterUpdate;i&&e.path===o.path||("function"!=typeof c||c(e,o))&&r.nextTick().then((function(){E(t.currentRoute)}))}))})),c.ready()})).catch((function(e){c.debug.enabled&&p(e.message)}))}p('Missing the "id" parameter. Add at least one tracking domain ID')}},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];v("send","exception",{exDescription:e,exFatal:t})},_=function(e){if(c.autoTracking.exception){window.addEventListener("error",(function(e){D(e.message)}));var t=e.config.errorHandler;e.config.errorHandler=function(e,n,r){D(e.message),c.autoTracking.exceptionLogs&&console.error(e),"function"==typeof t&&t.call(void 0,e,n,r)}}},R=D;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I=function(e){return"".concat(c.ecommerce.enhanced?"ec":"ecommerce",":").concat(e)},H=["addItem","addTransaction","addProduct","addImpression","setAction","addPromo","send"].reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,M({},t,(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];v.apply(void 0,[I(t)].concat(n))})))}),{}),B={event:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v.apply(void 0,["send","event"].concat(t))},exception:R,page:q,query:v,require:k,set:w,social:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v.apply(void 0,["send","social"].concat(t))},time:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v.apply(void 0,["send","timing"].concat(t))},screenview:S,ecommerce:H,disable:function(){return A(!0)},enable:function(){return A(!1)},commands:c.commands},$={inserted:function(e,t,n){var r=Object.keys(t.modifiers);0===r.length&&r.push("click"),r.forEach((function(r){e.addEventListener(r,(function(){var e="string"==typeof t.value?c.commands[t.value]:t.value;if(!e)throw new Error("[vue-analytics] The value passed to v-ga is not defined in the commands list.");e.apply(n.context)}))}))}};function z(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e){u(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{$vue:e})),e.directive("ga",$),e.prototype.$ga=e.$ga=B,_(e),T()}n.d(t,"default",(function(){return U})),n.d(t,"analyticsMiddleware",(function(){return N})),n.d(t,"onAnalyticsReady",(function(){return Q})),n.d(t,"event",(function(){return W})),n.d(t,"ecommerce",(function(){return J})),n.d(t,"set",(function(){return Z})),n.d(t,"page",(function(){return G})),n.d(t,"query",(function(){return X})),n.d(t,"screenview",(function(){return K})),n.d(t,"time",(function(){return V})),n.d(t,"require",(function(){return Y})),n.d(t,"exception",(function(){return ee})),n.d(t,"social",(function(){return te}));var N=function(e){e.subscribe((function(e){var t=e.payload;if(t&&t.meta&&t.meta.analytics){var n=t.meta.analytics;if(!Array.isArray(n))throw new Error('The "analytics" property needs to be an array');n.forEach((function(e){var t,n,r=e.shift(),o=e;if(r.includes(":")){var i=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.split(":"),2);r=i[0],t=i[1]}if(!(r in B))throw new Error('[vue-analytics:vuex] The type "'.concat(r,"\" doesn't exist."));if(t&&!(t in B[r]))throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" has not method "').concat(t,'".'));if("ecommerce"===r&&!t)throw new Error('[vue-analytics:vuex] The type "'.concat(r,'" needs to call a method. Check documentation.'));t?(n=B[r])[t].apply(n,z(o)):B[r].apply(B,z(o))}))}}))},Q=function(){return new Promise((function(e,t){var n=setInterval((function(){"undefined"!=typeof window&&window.ga&&(e(),clearInterval(n))}),10)}))},W=B.event,J=B.ecommerce,Z=B.set,G=B.page,X=B.query,K=B.screenview,V=B.time,Y=B.require,ee=B.exception,te=B.social}])},149:function(e,t,n){var content=n(152);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("e46b6ba2",content,!0,{sourceMap:!1})},150:function(e,t,n){var content=n(154);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("6759f5ab",content,!0,{sourceMap:!1})},151:function(e,t,n){"use strict";var r=n(149);n.n(r).a},152:function(e,t,n){(t=n(53)(!1)).push([e.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),e.exports=t},153:function(e,t,n){"use strict";var r=n(150);n.n(r).a},154:function(e,t,n){(t=n(53)(!1)).push([e.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),e.exports=t},155:function(e,t,n){"use strict";n.r(t);var r=n(1),o=(n(151),n(15)),c=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),t("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),t("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!1,null,null,null).exports,l=n(148),f=n.n(l);r.a.use(f.a,{id:"UA-143978554-5",debug:{enabled:!0}});var d={components:{Logo:c},data:function(){return{title:"RS | Home"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Home page description RS"},{hid:"google-site-verification",name:"google-site-verification",content:"QnhHoIeOMUcB_9Zgt-2nwzAObX_a1jaZQi1MCeklD0M"}],link:[{rel:"canonical",href:"https://shivank-dev.github.io/test-app/"}]}},methods:{},mounted:function(){this.$ga.page("/")}},y=(n(153),Object(o.a)(d,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h1",[this._v("Hello World")]),this._v(" "),t("a",{attrs:{href:"/test-app/users/"}},[this._v("Click here to go user page")])])}],!1,null,null,null));t.default=y.exports}}]);