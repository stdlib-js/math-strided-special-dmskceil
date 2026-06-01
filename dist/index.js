"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(C,c){
var x=require('@stdlib/strided-base-dmskmap/dist'),R=require('@stdlib/math-base-special-ceil/dist');function _(e,r,i,a,s,t,u){return x(e,r,i,a,s,t,u,R)}c.exports=_
});var m=n(function(D,d){
var E=require('@stdlib/strided-base-dmskmap/dist').ndarray,O=require('@stdlib/math-base-special-ceil/dist');function b(e,r,i,a,s,t,u,y,f,j){return E(e,r,i,a,s,t,u,y,f,j,O)}d.exports=b
});var l=n(function(F,p){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=q(),h=m();g(o,"ndarray",h);p.exports=o
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=l(),v,k=z(w(__dirname,"./native.js"));k instanceof Error?v=A:v=k;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
