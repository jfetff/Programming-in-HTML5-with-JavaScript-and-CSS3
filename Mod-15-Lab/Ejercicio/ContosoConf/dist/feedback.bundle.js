!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=2)}([,,function(e,t,n){"use strict";var r=n(3),s=document.getElementById("feedback"),i=s.querySelector("form"),a=document.getElementById("feedback-sent");function o(){s.style.display="none",a.style.display="block"}i.addEventListener("submit",(function(e){e.preventDefault(),i.classList.add("sending")}),!1),i.addEventListener("msAnimationEnd",o,!1),i.addEventListener("webkitAnimationEnd",o,!1),i.addEventListener("animationEnd",o,!1);for(var l=i.querySelectorAll(".feedback-question"),u=0;u<l.length;u++)new r.StarRatingView(l[u])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.StarRatingView=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.inputElement=t.querySelector("input"),this.createUI(),this.listenForStarMouseEvents()}return r(e,[{key:"createUI",value:function(){var e=parseInt(this.inputElement.min,10),t=parseInt(this.inputElement.max,10);this.starElements=[];for(var n=e;n<=t;n++){var r=this.createStarElement(n);this.element.appendChild(r),this.starElements.push(r)}this.inputElement.style.display="none"}},{key:"createStarElement",value:function(e){var t=document.createElement("div");return t.setAttribute("class","star"),t.ratingValue=e,t}},{key:"listenForStarMouseEvents",value:function(){this.element.addEventListener("click",this.starClicked.bind(this),!1),this.element.addEventListener("mouseover",this.starMousedOver.bind(this),!1),this.element.addEventListener("mouseout",this.starMousedOut.bind(this),!1)}},{key:"starClicked",value:function(e){var t=e.srcElement||e.target;t.classList.contains("star")&&this.setRating(t.ratingValue)}},{key:"starMousedOver",value:function(e){var t=e.srcElement||e.target;t.classList.contains("star")&&this.setHoverState(t.ratingValue)}},{key:"starMousedOut",value:function(e){(e.srcElement||e.target).classList.contains("star")&&this.removeHoverStates()}},{key:"setHoverState",value:function(e){for(var t=0;t<e;t++)this.starElements[t].classList.add("hover")}},{key:"removeHoverStates",value:function(){for(var e=0,t=this.starElements.length;e<t;e++)this.starElements[e].classList.remove("hover")}},{key:"setRating",value:function(e){this.inputElement.value=e;var t=void 0,n=this.starElements.length;for(t=0;t<e;t++)this.starElements[t].classList.add("selected");for(t=e;t<n;t++)this.starElements[t].classList.remove("selected")}}]),e}()}]);
//# sourceMappingURL=feedback.bundle.js.map