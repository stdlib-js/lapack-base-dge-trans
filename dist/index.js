"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var w=l(function(L,E){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(a,r,q,u,v,f,s,e,i,n){var o,g,p,y,j,m,c,x,d,t,b;for(o=k([e,i]),o?(t=a,b=r,g=u,p=v-t*u,y=i,j=e-t*i):(t=r,b=a,g=v,p=u-t*v,y=e,j=i-t*e),m=f,c=n,d=0;d<b;d++){for(x=0;x<t;x++)s[c]=q[m],m+=g,c+=y;m+=p,c+=j}return s}E.exports=z
});var _=l(function(N,S){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),H=require('@stdlib/error-tools-fmtprodmsg/dist'),I=w();function J(a,r,q,u,v,f,s){var e,i,n,o;if(!B(a))throw new TypeError(H('1zLFx',a));return G(a)?(e=1,i=v,n=1,o=s):(e=v,i=1,n=s,o=1),I(r,q,u,e,i,0,f,n,o,0)}S.exports=J
});var C=l(function(D,h){
var K=w();function P(a,r,q,u,v,f,s,e,i,n){return K(a,r,q,u,v,f,s,e,i,n)}h.exports=P
});var T=l(function(A,M){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=_(),U=C();Q(F,"ndarray",U);M.exports=F
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),R,V=X(W(__dirname,"./native.js"));Y(V)?R=Z:R=V;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
