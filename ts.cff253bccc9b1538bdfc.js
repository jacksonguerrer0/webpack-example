(()=>{"use strict";var t={587:(t,e,r)=>{var n=r(941);const c=JSON.parse('{"O":[["Hi Vanillajs","index.html"],["Hi Reactjs","react.html"],["Hi TypeScript","ts.html"]]}');var i=function(){function t(t){this.name=t}return t.prototype.greet=function(){return"¡Hello World with ".concat(this.name)},t}(),o=document.createElement("nav"),a=document.querySelector("h1"),s=new i("TypeScript :)");c.O.forEach((function(t){o.innerHTML+="<a href=".concat(t[1],">").concat(t[0],"</a>\n    ")})),a.textContent=s.greet(),a.appendChild(o),document.getElementById("div-img").innerHTML="<img src=".concat(n,' alt="Cascada">')},941:(t,e,r)=>{t.exports=r.p+"assets/cascada.jpg"}},e={};function r(n){var c=e[n];if(void 0!==c)return c.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),r(587)})();