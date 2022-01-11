(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(238, 238, 238);\r\n  text-align: center;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.row {\r\n  flex-direction: row;\r\n}\r\n\r\n.click {\r\n  cursor: pointer;\r\n}\r\n\r\n#main {\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#main h1 {\r\n  padding: 30px;\r\n}\r\n\r\n#list-container {\r\n  width: 70%;\r\n  max-width: 500px;\r\n  min-width: 300px;\r\n  background-color: white;\r\n  box-shadow: 0 3px 5px 0 #bfc6be;\r\n}\r\n\r\n#list-container div {\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-info {\r\n  text-align: left;\r\n  flex-grow: 3;\r\n}\r\n\r\n#list-title,\r\n#list-input,\r\n#list-bottom,\r\n.task-container {\r\n  font-size: medium;\r\n  padding: 10px;\r\n  border-bottom: 1px solid lightgray;\r\n}\r\n\r\n#list-title {\r\n  font-size: 16px;\r\n}\r\n\r\n#list-bottom {\r\n  padding: 15px 10px;\r\n  background-color: rgb(241, 241, 241);\r\n}\r\n\r\n.task-container {\r\n  gap: 10px;\r\n  font-size: 15px;\r\n}\r\n\r\n#list-clear:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  font-size: 16px;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},495:(n,e,t)=>{n.exports=t.p+"e3aa4351fde1a2193214.svg"},773:(n,e,t)=>{n.exports=t.p+"f90e86ac36d4f6a3e114.svg"},186:(n,e,t)=>{n.exports=t.p+"43abd16f54731d4913dc.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t(186);var g=t(495),v=t(773);let h=0,x=[];const y=document.getElementById("main"),b=document.createElement("div");b.id="list-container",b.className="d-flex",b.innerHTML=`<div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="${v}" alt="Load Icon" class="click"></div>\n<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..."><img src="${g}" alt="Enter Icon" class="click"></div>\n<ul id="list" class="d-flex"></ul>\n<div id="list-bottom">\n    <p id="list-clear" class="click">Clear all completed</p>\n</div>`,y.appendChild(b),window.addEventListener("load",(()=>{x=localStorage.getItem("taskArr")?JSON.parse(localStorage.getItem("taskArr")):[{description:"Finish the project",completed:!1,index:3},{description:"Buy dinner",completed:!1,index:1},{description:"Walk the dog",completed:!1,index:2},{description:"Help mom with the TV",completed:!1,index:4}],console.log(x),function(){if(localStorage.getItem("taskArr")){let n=JSON.parse(localStorage.getItem("taskArr"));h=n.length,localStorage.setItem("index",h)}else localStorage.setItem("index","1")}(),function(n,e){const t=document.getElementById("list");n.sort(((n,e)=>n.index-e.index));let r=1;n.forEach((n=>{console.log("el index es "+r);const e=document.createElement("li");e.classList.add("task-container","d-flex","row"),e.innerHTML=`<input type="checkbox" class="task-cb">\n    <input id=input-${r} type="text" class="task-info">\n    <img src="${Trash}" alt="Load Icon" class="click">`,t.appendChild(e),document.getElementById(`input-${r}`).value=n.description,r++}))}(x),function(n){localStorage.setItem("taskArr",JSON.stringify(n))}(x)}))})()})();