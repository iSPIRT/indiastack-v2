/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.1.2
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,(function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",o=n;try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(e){}var i=null,r=["input","select","textarea"],s=[],u=[16,17,18,91,93],a=[],d={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},c=!1,w=!1,f={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},l=!1;try{var m=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,m)}catch(e){}var h=function(e){if(!c){var t=e.which,i=d[e.type];"pointer"===i&&(i=x(e));var s=!a.length&&-1===u.indexOf(t),w=a.length&&-1!==a.indexOf(t),f="keyboard"===i&&t&&(s||w)||"mouse"===i||"touch"===i;if(n!==i&&f){n=i;try{window.sessionStorage.setItem("what-input",n)}catch(e){}v("input")}if(o!==i&&f){var p=document.activeElement;if(p&&p.nodeName&&-1===r.indexOf(p.nodeName.toLowerCase())){o=i;try{window.sessionStorage.setItem("what-intent",o)}catch(e){}v("intent")}}}},v=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),b(t)},y=function(e){if(I(e),!c&&!w){var t=d[e.type];if("pointer"===t&&(t=x(e)),o!==t){o=t;try{window.sessionStorage.setItem("what-intent",o)}catch(e){}v("intent")}}},g=function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):E()},E=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},L=function(e){h(e),window.clearTimeout(i),c=!0,i=window.setTimeout((function(){c=!1}),100)},x=function(e){return"number"==typeof e.pointerType?p[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},S=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},b=function(e){for(var t=0,i=s.length;t<i;t++)s[t].type===e&&s[t].fn.call(void 0,"input"===e?n:o)},I=function(e){f.x!==e.screenX||f.y!==e.screenY?(w=!1,f.x=e.screenX,f.y=e.screenY):w=!0};return"addEventListener"in window&&Array.prototype.indexOf&&(d[S()]="mouse",function(){var e=!!l&&{passive:!0};window.PointerEvent?(window.addEventListener("pointerdown",h),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",h),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",h),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",L,e),window.addEventListener("touchend",h))),window.addEventListener(S(),y,e),window.addEventListener("keydown",L),window.addEventListener("keyup",L),window.addEventListener("focusin",g),window.addEventListener("focusout",E)}(),v("input"),v("intent")),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){u=e},specificKeys:function(e){a=e},registerOnChange:function(e,t){s.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=s.length;t<n;t++)if(s[t].fn===e)return t}(e);(t||0===t)&&s.splice(t,1)}}}()}])}));