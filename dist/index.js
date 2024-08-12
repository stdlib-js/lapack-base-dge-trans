"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var w=l(function($,E){
var B=require('@stdlib/ndarray-base-assert-is-row-major/dist');function C(a,r,q,u,v,f,s,e,i,n){var o,g,p,y,j,m,c,x,d,t,b;for(o=B([e,i]),o?(t=a,b=r,g=u,p=v-t*u,y=i,j=e-t*i):(t=r,b=a,g=v,p=u-t*v,y=e,j=i-t*e),m=f,c=n,d=0;d<b;d++){for(x=0;x<t;x++)s[c]=q[m],m+=g,c+=y;m+=p,c+=j}return s}E.exports=C
});var _=l(function(L,S){
var G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/error-tools-fmtprodmsg/dist'),I=w();function J(a,r,q,u,v,f,s){var e,i,n,o;if(!G(a))throw new TypeError(H('nullFx',a));return a==="column-major"?(e=1,i=v,n=1,o=s):(e=v,i=1,n=s,o=1),I(r,q,u,e,i,0,f,n,o,0)}S.exports=J
});var F=l(function(N,h){
var K=w();function M(a,r,q,u,v,f,s,e,i,n){return K(a,r,q,u,v,f,s,e,i,n)}h.exports=M
});var k=l(function(D,V){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=_(),Q=F();P(T,"ndarray",Q);V.exports=T
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),X=require('@stdlib/assert-is-error/dist'),Y=k(),R,z=W(U(__dirname,"./native.js"));X(z)?R=Y:R=z;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
