!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx-react","react","react-dom","react-router","react-router-dom"],r):"object"==typeof exports?exports["@deriv/cashier"]=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/cashier"]=r(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,(function(e,r,t,o,a,n,i,s){return(()=>{"use strict";var d,u,c,l,m={"@deriv/components":r=>{r.exports=e},"@deriv/shared":e=>{e.exports=r},"@deriv/translations":e=>{e.exports=t},"mobx-react":e=>{e.exports=o},react:e=>{e.exports=a},"react-dom":e=>{e.exports=n},"react-router":e=>{e.exports=i},"react-router-dom":e=>{e.exports=s}},p={};function f(e){if(p[e])return p[e].exports;var r=p[e]={id:e,loaded:!1,exports:{}};return m[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=m,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>"cashier/js/cashier."+e+"."+{404:"12823537248103ab5364","vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-1f0af7":"07bc304b8dad9c9d7f41","cashier-app":"19aca85d779fe709aa65"}[e]+".js",f.miniCssF=e=>"cashier/css/"+e+".206eb8b6c85e6b2f666c.css",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),d={},u="@deriv/cashier:",f.l=(e,r,t,o)=>{if(d[e])d[e].push(r);else{var a,n;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var c=i[s];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==u+t){a=c;break}}a||(n=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,f.nc&&a.setAttribute("nonce",f.nc),a.setAttribute("data-webpack",u+t),a.src=e),d[e]=[r];var l=(r,t)=>{a.onerror=a.onload=null,clearTimeout(m);var o=d[e];if(delete d[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),n&&document.head.appendChild(a)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/br_handle_gold_smartfx/",c=e=>new Promise(((r,t)=>{var o=f.miniCssF(e),a=f.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var i;if((a=(i=n[o]).getAttribute("data-href"))===e||a===r)return i}})(o,a))return r();((e,r,t,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,a.parentNode.removeChild(a),o(d)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),l={cashier:0},f.f.miniCss=(e,r)=>{l[e]?r.push(l[e]):0!==l[e]&&{"cashier-app":1}[e]&&r.push(l[e]=c(e).then((()=>{l[e]=0}),(r=>{throw delete l[e],r})))},(()=>{var e={cashier:0};f.f.j=(r,t)=>{var o=f.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,a)=>{o=e[r]=[t,a]}));t.push(o[2]=a);var n=f.p+f.u(r),i=new Error;f.l(n,(t=>{if(f.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var o,a,[n,i,s]=t,d=0,u=[];d<n.length;d++)a=n[d],f.o(e,a)&&e[a]&&u.push(e[a][0]),e[a]=0;for(o in i)f.o(i,o)&&(f.m[o]=i[o]);for(s&&s(f),r&&r(t);u.length;)u.shift()()},t=self.webpackChunk_deriv_cashier=self.webpackChunk_deriv_cashier||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var h={};return(()=>{f.d(h,{default:()=>a});var e=f("react"),r=f.n(e),t=f("@deriv/shared"),o=f("@deriv/components");const a=(0,t.makeLazyLoader)((function(){return Promise.all([f.e("vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-1f0af7"),f.e("cashier-app")]).then(f.bind(f,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),h.default})()}));