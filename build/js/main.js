!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n=document.querySelectorAll('a[href*="#"]'),r=!0,o=!1,l=void 0;try{for(var i,a=function(){var e=i.value;e.addEventListener("click",function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(""+n).scrollIntoView({behavior:"smooth",block:"start"})})},u=n[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)a()}catch(e){o=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw l}}if(document.getElementById("main-nav").querySelectorAll("a").forEach(function(e,t){e.addEventListener("click",function(){var e=document.getElementById("main-nav");e.classList.contains("nav-modal")&&(document.querySelector(".burger").classList.remove("burger-active"),e.classList.toggle("main-nav"),e.classList.toggle("nav-modal"))})}),document.querySelector(".burger-wraper").addEventListener("click",function(){!function(){document.querySelector(".burger").classList.toggle("burger-active");document.getElementById("main-nav");document.getElementById("main-nav").classList.toggle("nav-modal"),document.getElementById("main-nav").classList.toggle("main-nav")}()}),mySlider(".welcome-slider"),mySlider(".testimonials-slider"),mySlider(".slider-blog"),document.querySelector(".posts-list-masonry"))new Masonry(".posts-list-masonry",{itemSelector:".post-masonry",percentPosition:!0,gutter:32})}]);