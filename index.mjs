// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.2-esm/index.mjs";function o(r){if(r.__esModule)return r;var t=r.default;if("function"==typeof t){var e=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function u(r,t){for(var e=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,l=function(r){return a.exec(r).slice(1)};function f(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=u(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function c(r){var t=m(r),e="/"===y(r,-1);return(r=u(g(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function m(r){return"/"===r.charAt(0)}function p(){return c(g(Array.prototype.slice.call(arguments,0),(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function d(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=f(r).substr(1),t=f(t).substr(1);for(var n=e(r.split("/")),s=e(t.split("/")),i=Math.min(n.length,s.length),o=i,u=0;u<i;u++)if(n[u]!==s[u]){o=u;break}var a=[];for(u=o;u<n.length;u++)a.push("..");return(a=a.concat(s.slice(o))).join("/")}function v(r){var t=l(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function h(r,t){var e=l(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function b(r){return l(r)[3]}var j={extname:b,basename:h,dirname:v,sep:"/",delimiter:":",relative:d,join:p,isAbsolute:m,normalize:c,resolve:f};function g(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var y="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},x=o(Object.freeze({__proto__:null,basename:h,default:j,delimiter:":",dirname:v,extname:b,isAbsolute:m,join:p,normalize:c,relative:d,resolve:f,sep:"/"}));function w(r,t,e,n,s,o,u,a,l,f){var c,m,p,d,v,h,b,j,g,y;for(i([a,l])?(y=t,c=n,m=s-(g=r)*n,p=l,d=a-g*l):(y=r,c=s,m=n-(g=t)*s,p=a,d=l-g*a),v=o,h=f,j=0;j<y;j++){for(b=0;b<g;b++)u[h]=e[v],v+=c,h+=p;v+=m,h+=d}return u}function _(r,t,e,i,o,u,a){var l,f,c,m;if(!n(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));return"column-major"===r?(l=1,f=o,c=1,m=a):(l=o,f=1,c=a,m=1),w(t,e,i,l,f,0,u,c,m,0)}e(_,"ndarray",(function(r,t,e,n,s,i,o,u,a,l){return w(r,t,e,n,s,i,o,u,a,l)}));var A=r((0,x.join)("/home/runner/work/lapack-base-dge-trans/lapack-base-dge-trans/lib","./native.js")),O=t(A)?_:A;export{O as default};
//# sourceMappingURL=index.mjs.map