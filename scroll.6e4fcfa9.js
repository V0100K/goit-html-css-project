parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"N8YO":[function(require,module,exports) {
$(document).ready(function(){$("#hero-buttons").on("click","a",function(o){o.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},1500)})}),$(document).ready(function(){$("#header-links").on("click","a",function(o){o.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},1500)})}),$(function(){$(".scroll-up").click(function(){$("html, body").animate({scrollTop:0},1e3)})}),$(window).scroll(function(){$(this).scrollTop()>200?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()});
},{}]},{},["N8YO"], null)
//# sourceMappingURL=/goit-html-css-project/scroll.6e4fcfa9.js.map