!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/components/src/hooks"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/components/src/hooks","@deriv/shared","@deriv/translations","mobx","mobx-react","react","react-dom","react-router","react-router-dom"],r):"object"==typeof exports?exports["@deriv/cashier"]=r(require("@deriv/components"),require("@deriv/components/src/hooks"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/cashier"]=r(e["@deriv/components"],e["@deriv/components/src/hooks"],e["@deriv/shared"],e["@deriv/translations"],e.mobx,e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,(function(e,r,t,o,n,a,i,s,d,c){return(()=>{"use strict";var u,l,m,p,f={"@deriv/components":r=>{r.exports=e},"@deriv/components/src/hooks":e=>{e.exports=r},"@deriv/shared":e=>{e.exports=t},"@deriv/translations":e=>{e.exports=o},mobx:e=>{e.exports=n},"mobx-react":e=>{e.exports=a},react:e=>{e.exports=i},"react-dom":e=>{e.exports=s},"react-router":e=>{e.exports=d},"react-router-dom":e=>{e.exports=c}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,v),t.loaded=!0,t.exports}v.m=f,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"cashier/js/cashier."+e+"."+{404:"29888f112ca8a6514729","vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08":"e9da5066fdd587b92c1a","cashier-app":"8cb14ecc430550fc3827"}[e]+".js",v.miniCssF=e=>"cashier/css/"+e+".a6475978553fc85dc77b.css",v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),u={},l="@deriv/cashier:",v.l=(e,r,t,o)=>{if(u[e])u[e].push(r);else{var n,a;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var d=i[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==l+t){n=d;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,v.nc&&n.setAttribute("nonce",v.nc),n.setAttribute("data-webpack",l+t),n.src=e),u[e]=[r];var c=(r,t)=>{n.onerror=n.onload=null,clearTimeout(m);var o=u[e];if(delete u[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=c.bind(null,n.onerror),n.onload=c.bind(null,n.onload),a&&document.head.appendChild(n)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),v.p="/br_regression-V20211208/",m=e=>new Promise(((r,t)=>{var o=v.miniCssF(e),n=v.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(n===e||n===r))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var i;if((n=(i=a[o]).getAttribute("data-href"))===e||n===r)return i}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,n.parentNode.removeChild(n),o(d)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),p={cashier:0},v.f.miniCss=(e,r)=>{p[e]?r.push(p[e]):0!==p[e]&&{"cashier-app":1}[e]&&r.push(p[e]=m(e).then((()=>{p[e]=0}),(r=>{throw delete p[e],r})))},(()=>{var e={cashier:0};v.f.j=(r,t)=>{var o=v.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=v.p+v.u(r),i=new Error;v.l(a,(t=>{if(v.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,s]=t,d=0;for(o in i)v.o(i,o)&&(v.m[o]=i[o]);for(s&&s(v),r&&r(t);d<a.length;d++)n=a[d],v.o(e,n)&&e[n]&&e[n][0](),e[a[d]]=0},t=self.webpackChunk_deriv_cashier=self.webpackChunk_deriv_cashier||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var b={};return(()=>{v.d(b,{default:()=>n});var e=v("react"),r=v.n(e),t=v("@deriv/shared"),o=v("@deriv/components");const n=(0,t.makeLazyLoader)((function(){return Promise.all([v.e("vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08"),v.e("cashier-app")]).then(v.bind(v,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),b.default})()}));