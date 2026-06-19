"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var w=l(function(L,E){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(a,r,u,s,v,f,n,e,i,t){var q,g,p,y,j,m,c,x,d,o,b;for(q=k([e,i]),q?(o=a,b=r,g=s,p=v-o*s,y=i,j=e-o*i):(o=r,b=a,g=v,p=s-o*v,y=e,j=i-o*e),m=f,c=t,d=0;d<b;d++){for(x=0;x<o;x++)n[c]=u[m],m+=g,c+=y;m+=p,c+=j}return n}E.exports=z
});var _=l(function(N,S){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),H=require('@stdlib/error-tools-fmtprodmsg/dist'),I=w();function J(a,r,u,s,v,f,n){var e,i,t,q;if(!B(a))throw new TypeError(H('1zLFx',a));return G(a)?(e=1,i=v,t=1,q=n):(e=v,i=1,t=n,q=1),I(r,u,s,e,i,0,f,t,q,0)}S.exports=J
});var C=l(function(D,h){
var K=w();function P(a,r,u,s,v,f,n,e,i,t){return K(a,r,u,s,v,f,n,e,i,t)}h.exports=P
});var T=l(function(A,M){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=_(),U=C();Q(F,"ndarray",U);M.exports=F
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),R,V=X(W(__dirname,"./native.js"));Y(V)?R=Z:R=V;module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
