(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,r){t.exports=r(31)},24:function(t,e,r){},31:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),a=r(12),i=r.n(a),c=(r(24),r(3)),u=(r(7),r(6)),s=r(4),l=r(13),h=r(33);function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function p(){}function v(){}function d(){}var y={};u(y,a,function(){return this});var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==e&&r.call(g,a)&&(y=g);var w=d.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return v.prototype=d,n(w,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:v,configurable:!0}),v.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function p(t){return t.toString().padStart(2,"0")}function v(t){return[p(t.getMonth()+1),p(t.getDate())].join("/")+" "+[p(t.getHours()),p(t.getMinutes()),p(t.getSeconds())].join(":")}function d(t){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(f().mark(function t(e){var r,n;return f().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"gpt-3.5-turbo","https://api.openai.com/v1/chat/completions",t.prev=2,r={"content-type":"application/json",Authorization:"Bearer ".concat(e)},n={messages:[{role:"user",content:"Hello!"}],model:"gpt-3.5-turbo"},t.next=8,h.a.post("https://api.openai.com/v1/chat/completions",n,{headers:r});case 8:return t.sent,t.abrupt("return",!0);case 12:return t.prev=12,t.t0=t.catch(2),console.log(t.t0),t.abrupt("return",!1);case 16:case"end":return t.stop()}},t,null,[[2,12]])}))).apply(this,arguments)}var m=function(){return o.a.createElement("div",{className:"spinner"},o.a.createElement("div",{className:"bounce1"}),o.a.createElement("div",{className:"bounce2"}),o.a.createElement("div",{className:"bounce3"}))},g=function(t){var e=t.audio,r=t.transcription,a=t.translation,i=t.chat,u=Object(n.useState)(""),s=Object(c.a)(u,2),l=(s[0],s[1]),h=Object(n.useState)(""),f=Object(c.a)(h,2),p=f[0],d=f[1],y=Object(n.useState)(""),g=Object(c.a)(y,2),w=g[0],b=g[1];return Object(n.useEffect)(function(){var t=new Date;l(v(t))},[r]),Object(n.useEffect)(function(){var t=new Date;d(v(t))},[a]),Object(n.useEffect)(function(){var t=new Date;b(v(t))},[i]),o.a.createElement("div",{style:{margin:"20px"}},o.a.createElement("div",{className:"msg-page"},o.a.createElement("div",{className:"sent-chats"},o.a.createElement("div",{className:"sent-chats-msg"},null!==e?o.a.createElement("audio",{controls:"True",src:e}):o.a.createElement(m,null),null!==r?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,r),null!==a?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{style:{marginTop:"1px"}},a),o.a.createElement("span",{className:"chat-time"},p)):o.a.createElement(m,null)):null!==e?o.a.createElement(m,null):o.a.createElement(o.a.Fragment,null)),o.a.createElement("div",{className:"sent-chats-img"},o.a.createElement("img",{className:"chats-img",src:"old.png"}))),o.a.createElement("div",{className:"received-chats"},null!==i?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"received-chats-img"},o.a.createElement("img",{className:"chats-img",src:"chatgpt.png"})),o.a.createElement("div",{className:"received-msg"},o.a.createElement("div",{className:"received-msg-inbox"},o.a.createElement("p",null,i),o.a.createElement("span",{className:"chat-time"},w)))):null!==a?o.a.createElement(m,null):o.a.createElement(o.a.Fragment,null))))};function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function p(){}function v(){}var d={};u(d,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(_([])));m&&m!==e&&r.call(m,a)&&(d=m);var g=v.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var b=function(t){var e=t.apiKey,r=Object(n.useState)([]),a=Object(c.a)(r,2),i=a[0],f=a[1],p=Object(n.useState)([]),v=Object(c.a)(p,2),d=v[0],y=v[1],m=Object(n.useState)([]),b=Object(c.a)(m,2),E=b[0],x=b[1],L=Object(n.useState)([]),j=Object(c.a)(L,2),O=j[0],N=j[1],_=Object(n.useState)(!1),k=Object(c.a)(_,2),S=(k[0],k[1],"gpt-3.5-turbo"),F="https://api.openai.com/v1/chat/completions",G=function(){var t=Object(s.a)(w().mark(function t(r){var n,o,a,i;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"multipart/form-data",Authorization:"Bearer ".concat(e)},(o=new FormData).append("file",r,"audio.mp3"),o.append("model","whisper-1"),t.next=7,h.a.post("https://api.openai.com/v1/audio/transcriptions",o,{headers:n});case 7:return a=t.sent,i=a.data.text,t.abrupt("return",i);case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e){return t.apply(this,arguments)}}();function P(t){return T.apply(this,arguments)}function T(){return(T=Object(s.a)(w().mark(function t(r){var n,o,a,i;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"application/json",Authorization:"Bearer ".concat(e)},o={messages:[{role:"system",content:"Translate from English to Traditional Chinese"},{role:"user",content:r}],model:S},t.next=6,h.a.post(F,o,{headers:n});case 6:return a=t.sent,i=a.data.choices[0].message.content,t.abrupt("return",i);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}))).apply(this,arguments)}function A(t){return I.apply(this,arguments)}function I(){return(I=Object(s.a)(w().mark(function t(r){var n,o,a,i,c,u;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(t.prev=0,n={"content-type":"application/json",Authorization:"Bearer ".concat(e)},o=[{role:"system",content:"You are a helpful assistant."}],console.log(E),a=0;a<E.length;a++)o.push({role:"user",content:E[a]}),o.push({role:"assistant",content:O[a]});return o.push({role:"user",content:r}),i={messages:o,model:S},t.next=9,h.a.post(F,i,{headers:n});case 9:return c=t.sent,u=c.data.choices[0].message.content,t.abrupt("return",u);case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}},t,null,[[0,14]])}))).apply(this,arguments)}function C(t,e){return D.apply(this,arguments)}function D(){return(D=Object(s.a)(w().mark(function t(e,r){var n,o,a;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(r);case 2:return n=t.sent,y([].concat(Object(u.a)(d),[n])),t.next=6,P(n);case 6:return o=t.sent,x([].concat(Object(u.a)(E),[o])),t.next=10,A(o);case 10:a=t.sent,N([].concat(Object(u.a)(O),[a]));case 12:case"end":return t.stop()}},t)}))).apply(this,arguments)}var Y=function(){var t=Object(s.a)(w().mark(function t(e){var r;return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=URL.createObjectURL(e),f([].concat(Object(u.a)(i),[r])),y([].concat(Object(u.a)(d),[null])),x([].concat(Object(u.a)(E),[null])),N([].concat(Object(u.a)(O),[null])),t.next=7,C(r,e);case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"App",style:{marginTop:"30px"}},o.a.createElement("div",{className:"msg-container"},i.map(function(t,e){return o.a.createElement(g,{key:e,audio:i[e],transcription:d[e],translation:E[e],chat:O[e]})})),o.a.createElement("div",{className:"bottom-line"}),o.a.createElement("div",{className:"bottom-line-button"},o.a.createElement(l.a,{onRecordingComplete:Y}),o.a.createElement("button",{className:"circle-button",disabled:!1,onClick:function(){f([]),y([]),x([]),N([])}},o.a.createElement("ion-icon",{name:"trash",style:{fontSize:"17px"}}))))};function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new N(o||[]);return n(i,"_invoke",{value:x(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function p(){}function v(){}var d={};u(d,a,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(_([])));m&&m!==e&&r.call(m,a)&&(d=m);var g=v.prototype=f.prototype=Object.create(d);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var x=function(t){var e=t.setApiKey,r=Object(n.useRef)(),a=Object(n.useRef)(),i=function(){var t=Object(s.a)(E().mark(function t(r){var n;return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!==r.key){t.next=13;break}return t.prev=1,n=r.target.value,t.next=5,d(n);case 5:1==t.sent?e(r.target.value):a.current.style.visibility="visible",t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),a.current.style.visibility="visible",console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=Object(s.a)(E().mark(function t(n){var o;return E().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o=r.current.value,t.next=4,d(o);case 4:!0===t.sent?e(r.current.value):a.current.style.visibility="visible",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),a.current.style.visibility="visible",console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[0,8]])}));return function(e){return t.apply(this,arguments)}}();return o.a.createElement("div",{className:"App ask-key-container"},o.a.createElement("h2",null,"Whisper & ChatGPT \u8853\u524d\u554f\u8a3a\u7cfb\u7d71"),o.a.createElement("span",null,"Api Key : ",o.a.createElement("input",{type:"text",onKeyDown:i,ref:r})),o.a.createElement("button",{onClick:c},"\u78ba\u8a8d"),o.a.createElement("div",{className:"error",ref:a,style:{visibility:"hidden"}},o.a.createElement("h3",{style:{color:"red"}},"Error!"),o.a.createElement("p",{style:{color:"red"}},"Please ensure that a correct api key is provided")))},L=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"anonymous";Object(n.useEffect)(function(){var n=document.createElement("script");return n.src=t,n.async=r,e&&(n.integrity=e),n.crossOrigin=o,document.body.appendChild(n),function(){document.body.removeChild(n)}},[t,e,r,o])};var j=function(){L("https://cdn.jsdelivr.net/npm/ionicons/dist/ionicons/ionicons.js");var t=Object(n.useState)(""),e=Object(c.a)(t,2),r=e[0],a=e[1];return o.a.createElement("div",{className:"App",style:{marginTop:"30px"}},r.length?o.a.createElement(b,{apiKey:r}):o.a.createElement(x,{setApiKey:a}))},O=function(t){t&&t instanceof Function&&r.e(1).then(r.bind(null,32)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null))),O()},7:function(t,e,r){}},[[15,3,2]]]);
//# sourceMappingURL=main.ff6c5824.chunk.js.map