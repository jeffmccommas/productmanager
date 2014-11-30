/**
 * @license AngularJS v1.3.4
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
!function(n,t,e){"use strict";t.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){var n="$$ngAnimateChildren";return function(e,a,i){var r=i.ngAnimateChildren;t.isString(r)&&0===r.length?a.data(n,!0):e.$watch(r,function(t){a.data(n,!!t)})}}).factory("$$animateReflow",["$$rAF","$document",function(n,t){var e=t[0].body;return function(t){return n(function(){var n=e.offsetWidth+1;t()})}}]).config(["$provide","$animateProvider",function(a,i){function r(n){for(var t=0;t<n.length;t++){var e=n[t];if(e.nodeType==p)return e}}function s(n){return n&&t.element(n)}function o(n){return t.element(r(n))}function u(n,t){return r(n)==r(t)}var l=t.noop,c=t.forEach,f=i.$$selectors,v=t.isArray,d=t.isString,m=t.isObject,p=1,g="$$ngAnimateState",C="$$ngAnimateChildren",h="ng-animate",b={running:!0};a.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest",function(n,e,a,p,y,D,A,w,k){function x(n,t){var e=n.data(g)||{};return t&&(e.running=!0,e.structural=!0,n.data(g,e)),e.disabled||e.running&&e.structural}function S(n){var t,a=e.defer();return a.promise.$$cancelFn=function(){t&&t()},A.$$postDigest(function(){t=n(function(){a.resolve()})}),a.promise}function B(n){return m(n)?(n.tempClasses&&d(n.tempClasses)&&(n.tempClasses=n.tempClasses.split(/\s+/)),n):void 0}function F(n,t,e){e=e||{};var a={};c(e,function(n,t){c(t.split(" "),function(t){a[t]=n})});var i=Object.create(null);c((n.attr("class")||"").split(/\s+/),function(n){i[n]=!0});var r=[],s=[];return c(t&&t.classes||[],function(n,t){var e=i[t],o=a[t]||{};n===!1?(e||"addClass"==o.event)&&s.push(t):n===!0&&(e&&"removeClass"!=o.event||r.push(t))}),r.length+s.length>0&&[r.join(" "),s.join(" ")]}function M(n){if(n){var t=[],e={},i=n.substr(1).split(".");(p.transitions||p.animations)&&t.push(a.get(f[""]));for(var r=0;r<i.length;r++){var s=i[r],o=f[s];o&&!e[s]&&(t.push(a.get(o)),e[s]=!0)}return t}}function E(n,e,a,i){function r(n,t){var e=n[t],a=n["before"+t.charAt(0).toUpperCase()+t.substr(1)];return e||a?("leave"==t&&(a=e,e=null),A.push({event:t,fn:e}),b.push({event:t,fn:a}),!0):void 0}function s(t,e,r){function s(n){if(e){if((e[n]||l)(),++v<o.length)return;e=null}r()}var o=[];c(t,function(n){n.fn&&o.push(n)});var v=0;c(o,function(t,r){var o=function(){s(r)};switch(t.event){case"setClass":e.push(t.fn(n,u,f,o,i));break;case"animate":e.push(t.fn(n,a,i.from,i.to,o));break;case"addClass":e.push(t.fn(n,u||a,o,i));break;case"removeClass":e.push(t.fn(n,f||a,o,i));break;default:e.push(t.fn(n,o,i))}}),e&&0===e.length&&r()}var o=n[0];if(o){i&&(i.to=i.to||{},i.from=i.from||{});var u,f;v(a)&&(u=a[0],f=a[1],u?f?a=u+" "+f:(a=u,e="addClass"):(a=f,e="removeClass"));var d="setClass"==e,m=d||"addClass"==e||"removeClass"==e||"animate"==e,p=n.attr("class"),g=p+" "+a;if(q(g)){var C=l,h=[],b=[],y=l,D=[],A=[],w=(" "+g).replace(/\s+/g,".");return c(M(w),function(n){var t=r(n,e);!t&&d&&(r(n,"addClass"),r(n,"removeClass"))}),{node:o,event:e,className:a,isClassBased:m,isSetClassOperation:d,applyStyles:function(){i&&n.css(t.extend(i.from||{},i.to||{}))},before:function(n){C=n,s(b,h,function(){C=l,n()})},after:function(n){y=n,s(A,D,function(){y=l,n()})},cancel:function(){h&&(c(h,function(n){(n||l)(!0)}),C(!0)),D&&(c(D,function(n){(n||l)(!0)}),y(!0))}}}}}function R(n,e,a,i,r,s,o,u){function f(t){var i="$animate:"+t;A&&A[i]&&A[i].length>0&&D(function(){a.triggerHandler(i,{event:n,className:e})})}function v(){f("before")}function d(){f("after")}function m(){f("close"),u()}function p(){p.hasBeenRun||(p.hasBeenRun=!0,s())}function C(){if(!C.hasBeenRun){y&&y.applyStyles(),C.hasBeenRun=!0,o&&o.tempClasses&&c(o.tempClasses,function(n){a.removeClass(n)});var t=a.data(g);t&&(y&&y.isClassBased?O(a,e):(D(function(){var t=a.data(g)||{};N==t.index&&O(a,e,n)}),a.data(g,t))),m()}}var b=l,y=E(a,n,e,o);if(!y)return p(),v(),d(),C(),b;n=y.event,e=y.className;var A=t.element._data(y.node);if(A=A&&A.events,i||(i=r?r.parent():a.parent()),T(a,i))return p(),v(),d(),C(),b;var w=a.data(g)||{},k=w.active||{},x=w.totalActive||0,S=w.last,B=!1;if(x>0){var F=[];if(y.isClassBased){if("setClass"==S.event)F.push(S),O(a,e);else if(k[e]){var M=k[e];M.event==n?B=!0:(F.push(M),O(a,e))}}else if("leave"==n&&k["ng-leave"])B=!0;else{for(var R in k)F.push(k[R]);w={},O(a,!0)}F.length>0&&c(F,function(n){n.cancel()})}if(!y.isClassBased||y.isSetClassOperation||"animate"==n||B||(B="addClass"==n==a.hasClass(e)),B)return p(),v(),d(),m(),b;k=w.active||{},x=w.totalActive||0,"leave"==n&&a.one("$destroy",function(n){var e=t.element(this),a=e.data(g);if(a){var i=a.active["ng-leave"];i&&(i.cancel(),O(e,"ng-leave"))}}),a.addClass(h),o&&o.tempClasses&&c(o.tempClasses,function(n){a.addClass(n)});var N=P++;return x++,k[e]=y,a.data(g,{last:y,active:k,index:N,totalActive:x}),v(),y.before(function(t){var i=a.data(g);t=t||!i||!i.active[e]||y.isClassBased&&i.active[e].event!=n,p(),t===!0?C():(d(),y.after(C))}),y.cancel}function N(n){var e=r(n);if(e){var a=t.isFunction(e.getElementsByClassName)?e.getElementsByClassName(h):e.querySelectorAll("."+h);c(a,function(n){n=t.element(n);var e=n.data(g);e&&e.active&&c(e.active,function(n){n.cancel()})})}}function O(n,t){if(u(n,y))b.disabled||(b.running=!1,b.structural=!1);else if(t){var e=n.data(g)||{},a=t===!0;!a&&e.active&&e.active[t]&&(e.totalActive--,delete e.active[t]),(a||!e.totalActive)&&(n.removeClass(h),n.removeData(g))}}function T(n,e){if(b.disabled)return!0;if(u(n,y))return b.running;var a,i,r;do{if(0===e.length)break;var s=u(e,y),o=s?b:e.data(g)||{};if(o.disabled)return!0;if(s&&(r=!0),a!==!1){var l=e.data(C);t.isDefined(l)&&(a=l)}i=i||o.running||o.last&&!o.last.isClassBased}while(e=e.parent());return!r||!a&&i}y.data(g,b);var I=A.$watch(function(){return k.totalPendingRequests},function(n,t){0===n&&(I(),A.$$postDigest(function(){A.$$postDigest(function(){b.running=!1})}))}),P=0,j=i.classNameFilter(),q=j?function(n){return j.test(n)}:function(){return!0};return{animate:function(n,t,e,a,i){return a=a||"ng-inline-animate",i=B(i)||{},i.from=e?t:null,i.to=e?e:t,S(function(t){return R("animate",a,o(n),null,null,l,i,t)})},enter:function(e,a,i,r){return r=B(r),e=t.element(e),a=s(a),i=s(i),x(e,!0),n.enter(e,a,i),S(function(n){return R("enter","ng-enter",o(e),a,i,l,r,n)})},leave:function(e,a){return a=B(a),e=t.element(e),N(e),x(e,!0),S(function(t){return R("leave","ng-leave",o(e),null,null,function(){n.leave(e)},a,t)})},move:function(e,a,i,r){return r=B(r),e=t.element(e),a=s(a),i=s(i),N(e),x(e,!0),n.move(e,a,i),S(function(n){return R("move","ng-move",o(e),a,i,l,r,n)})},addClass:function(n,t,e){return this.setClass(n,t,[],e)},removeClass:function(n,t,e){return this.setClass(n,[],t,e)},setClass:function(e,a,i,s){s=B(s);var u="$$animateClasses";if(e=t.element(e),e=o(e),x(e))return n.$$setClassImmediately(e,a,i,s);var l,f=e.data(u),d=!!f;return f||(f={},f.classes={}),l=f.classes,a=v(a)?a:a.split(" "),c(a,function(n){n&&n.length&&(l[n]=!0)}),i=v(i)?i:i.split(" "),c(i,function(n){n&&n.length&&(l[n]=!1)}),d?(s&&f.options&&(f.options=t.extend(f.options||{},s)),f.promise):(e.data(u,f={classes:l,options:s}),f.promise=S(function(t){var a=e.parent(),i=r(e),s=i.parentNode;if(!s||s.$$NG_REMOVED||i.$$NG_REMOVED)return void t();var o=e.data(u);e.removeData(u);var l=e.data(g)||{},c=F(e,o,l.active);return c?R("setClass",c,e,a,null,function(){c[0]&&n.$$addClassImmediately(e,c[0]),c[1]&&n.$$removeClassImmediately(e,c[1])},o.options,t):t()}))},cancel:function(n){n.$$cancelFn()},enabled:function(n,t){switch(arguments.length){case 2:if(n)O(t);else{var e=t.data(g)||{};e.disabled=!0,t.data(g,e)}break;case 1:b.disabled=!n;break;default:n=!b.disabled}return!!n}}}]),i.register("",["$window","$sniffer","$timeout","$$animateReflow",function(a,i,s,o){function u(){J||(J=o(function(){z=[],J=null,H={}}))}function f(n,t){J&&J(),z.push(t),J=o(function(){c(z,function(n){n()}),z=[],J=null,H={}})}function m(n,e){var a=r(n);n=t.element(a),X.push(n);var i=Date.now()+e;Q>=i||(s.cancel(L),Q=i,L=s(function(){g(X),X=[]},e,!1))}function g(n){c(n,function(n){var t=n.data(W);t&&c(t.closeAnimationFns,function(n){n()})})}function C(n,t){var e=t?H[t]:null;if(!e){var i=0,r=0,s=0,o=0;c(n,function(n){if(n.nodeType==p){var t=a.getComputedStyle(n)||{},e=t[E+T];i=Math.max(h(e),i);var u=t[E+P];r=Math.max(h(u),r);var l=t[N+P];o=Math.max(h(t[N+P]),o);var c=h(t[N+T]);c>0&&(c*=parseInt(t[N+j],10)||1),s=Math.max(c,s)}}),e={total:0,transitionDelay:r,transitionDuration:i,animationDelay:o,animationDuration:s},t&&(H[t]=e)}return e}function h(n){var t=0,e=d(n)?n.split(/\s*,\s*/):[];return c(e,function(n){t=Math.max(parseFloat(n)||0,t)}),t}function b(n){var t=n.parent(),e=t.data(K);return e||(t.data(K,++U),e=U),e+"-"+r(n).getAttribute("class")}function y(n,t,e,a){var i=["ng-enter","ng-leave","ng-move"].indexOf(e)>=0,s=b(t),o=s+" "+e,u=H[o]?++H[o].total:0,l={};if(u>0){var c=e+"-stagger",f=s+" "+c,v=!H[f];v&&t.addClass(c),l=C(t,f),v&&t.removeClass(c)}t.addClass(e);var d=t.data(W)||{},m=C(t,o),p=m.transitionDuration,g=m.animationDuration;if(i&&0===p&&0===g)return t.removeClass(e),!1;var h=a||i&&p>0,y=g>0&&l.animationDelay>0&&0===l.animationDuration,D=d.closeAnimationFns||[];t.data(W,{stagger:l,cacheKey:o,running:d.running||0,itemIndex:u,blockTransition:h,closeAnimationFns:D});var k=r(t);return h&&(A(k,!0),a&&t.css(a)),y&&w(k,!0),!0}function D(n,t,e,a,i){function o(){t.off(P,u),t.removeClass(v),t.removeClass(d),K&&s.cancel(K),B(t,e);var n=r(t);for(var a in g)n.style.removeProperty(g[a])}function u(n){n.stopPropagation();var t=n.originalEvent||n,e=t.$manualTimeStamp||t.timeStamp||Date.now(),i=parseFloat(t.elapsedTime.toFixed(_));Math.max(e-I,0)>=N&&i>=F&&a()}var l=r(t),f=t.data(W);if(-1==l.getAttribute("class").indexOf(e)||!f)return void a();var v="",d="";c(e.split(" "),function(n,t){var e=(t>0?" ":"")+n;v+=e+"-active",d+=e+"-pending"});var p="",g=[],h=f.itemIndex,b=f.stagger,y=0;if(h>0){var D=0;b.transitionDelay>0&&0===b.transitionDuration&&(D=b.transitionDelay*h);var k=0;b.animationDelay>0&&0===b.animationDuration&&(k=b.animationDelay*h,g.push(M+"animation-play-state")),y=Math.round(100*Math.max(D,k))/100}y||(t.addClass(v),f.blockTransition&&A(l,!1));var x=f.cacheKey+" "+v,S=C(t,x),F=Math.max(S.transitionDuration,S.animationDuration);if(0===F)return t.removeClass(v),B(t,e),void a();!y&&i&&(S.transitionDuration||(t.css("transition",S.animationDuration+"s linear all"),g.push("transition")),t.css(i));var E=Math.max(S.transitionDelay,S.animationDelay),N=E*V;if(g.length>0){var T=l.getAttribute("style")||"";";"!==T.charAt(T.length-1)&&(T+=";"),l.setAttribute("style",T+" "+p)}var I=Date.now(),P=O+" "+R,j=(E+F)*G,q=(y+j)*V,K;return y>0&&(t.addClass(d),K=s(function(){K=null,S.transitionDuration>0&&A(l,!1),S.animationDuration>0&&w(l,!1),t.addClass(v),t.removeClass(d),i&&(0===S.transitionDuration&&t.css("transition",S.animationDuration+"s linear all"),t.css(i),g.push("transition"))},y*V,!1)),t.on(P,u),f.closeAnimationFns.push(function(){o(),a()}),f.running++,m(t,q),o}function A(n,t){n.style[E+I]=t?"none":""}function w(n,t){n.style[N+q]=t?"paused":""}function k(n,t,e,a){return y(n,t,e,a)?function(n){n&&B(t,e)}:void 0}function x(n,t,e,a,i){return t.data(W)?D(n,t,e,a,i):(B(t,e),void a())}function S(n,t,e,a,i){var r=k(n,t,e,i.from);if(!r)return u(),void a();var s=r;return f(t,function(){s=x(n,t,e,a,i.to)}),function(n){(s||l)(n)}}function B(n,t){n.removeClass(t);var e=n.data(W);e&&(e.running&&e.running--,e.running&&0!==e.running||n.removeData(W))}function F(n,t){var e="";return n=v(n)?n:n.split(/\s+/),c(n,function(n,a){n&&n.length>0&&(e+=(a>0?" ":"")+n+t)}),e}var M="",E,R,N,O;n.ontransitionend===e&&n.onwebkittransitionend!==e?(M="-webkit-",E="WebkitTransition",R="webkitTransitionEnd transitionend"):(E="transition",R="transitionend"),n.onanimationend===e&&n.onwebkitanimationend!==e?(M="-webkit-",N="WebkitAnimation",O="webkitAnimationEnd animationend"):(N="animation",O="animationend");var T="Duration",I="Property",P="Delay",j="IterationCount",q="PlayState",K="$$ngAnimateKey",W="$$ngAnimateCSS3Data",_=3,G=1.5,V=1e3,H={},U=0,z=[],J,L=null,Q=0,X=[];return{animate:function(n,t,e,a,i,r){return r=r||{},r.from=e,r.to=a,S("animate",n,t,i,r)},enter:function(n,t,e){return e=e||{},S("enter",n,"ng-enter",t,e)},leave:function(n,t,e){return e=e||{},S("leave",n,"ng-leave",t,e)},move:function(n,t,e){return e=e||{},S("move",n,"ng-move",t,e)},beforeSetClass:function(n,t,e,a,i){i=i||{};var r=F(e,"-remove")+" "+F(t,"-add"),s=k("setClass",n,r,i.from);return s?(f(n,a),s):(u(),void a())},beforeAddClass:function(n,t,e,a){a=a||{};var i=k("addClass",n,F(t,"-add"),a.from);return i?(f(n,e),i):(u(),void e())},beforeRemoveClass:function(n,t,e,a){a=a||{};var i=k("removeClass",n,F(t,"-remove"),a.from);return i?(f(n,e),i):(u(),void e())},setClass:function(n,t,e,a,i){i=i||{},e=F(e,"-remove"),t=F(t,"-add");var r=e+" "+t;return x("setClass",n,r,a,i.to)},addClass:function(n,t,e,a){return a=a||{},x("addClass",n,F(t,"-add"),e,a.to)},removeClass:function(n,t,e,a){return a=a||{},x("removeClass",n,F(t,"-remove"),e,a.to)}}}])}])}(window,window.angular);