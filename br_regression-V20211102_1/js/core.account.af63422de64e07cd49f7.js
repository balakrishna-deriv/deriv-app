(self.webpackChunk=self.webpackChunk||[]).push([[1809],{88073:(e,r,t)=>{var o,n,a,d,s,i,u,c,l;self,e.exports=(o=t(65597),n=t(17502),a=t(20374),d=t(59001),s=t(16),i=t(32735),u=t(12788),c=t(13799),l=t(14956),(()=>{"use strict";var e,r,t,p,f={"@deriv/components":e=>{e.exports=o},"@deriv/shared":e=>{e.exports=n},"@deriv/translations":e=>{e.exports=a},mobx:e=>{e.exports=d},"mobx-react":e=>{e.exports=s},react:e=>{e.exports=i},"react-dom":e=>{e.exports=u},"react-router":e=>{e.exports=c},"react-router-dom":e=>{e.exports=l}},m={};function b(e){var r=m[e];if(void 0!==r)return r.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=f,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>"account/js/account."+e+"."+{404:"54dcccd15e9c3898f812","vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-78804b":"639631d7b50150ff3bbf","account-app":"c64329dfe763cb6d67b8"}[e]+".js",b.miniCssF=e=>"account/css/"+e+".2c8f86e75773d32f6bdd.css",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@deriv/account:",b.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var d,s;if(void 0!==n)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var c=i[u];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+n){d=c;break}}d||(s=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,b.nc&&d.setAttribute("nonce",b.nc),d.setAttribute("data-webpack",r+n),d.src=t),e[t]=[o];var l=(r,o)=>{d.onerror=d.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(o))),r)return r(o)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),s&&document.head.appendChild(d)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/",t=e=>new Promise(((r,t)=>{var o=b.miniCssF(e),n=b.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(d=t[o]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===r))return d}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var d;if((n=(d=a[o]).getAttribute("data-href"))===e||n===r)return d}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var d=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=d,i.request=s,n.parentNode.removeChild(n),o(i)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),p={account:0},b.f.miniCss=(e,r)=>{p[e]?r.push(p[e]):0!==p[e]&&{"account-app":1}[e]&&r.push(p[e]=t(e).then((()=>{p[e]=0}),(r=>{throw delete p[e],r})))},(()=>{var e={account:0};b.f.j=(r,t)=>{var o=b.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=b.p+b.u(r),d=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,d,s]=t,i=0;for(o in d)b.o(d,o)&&(b.m[o]=d[o]);for(s&&s(b),r&&r(t);i<a.length;i++)n=a[i],b.o(e,n)&&e[n]&&e[n][0](),e[a[i]]=0},t=self.webpackChunk_deriv_account=self.webpackChunk_deriv_account||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var h={};return(()=>{b.d(h,{default:()=>n});var e=b("react"),r=b.n(e),t=b("@deriv/shared"),o=b("@deriv/components");const n=(0,t.makeLazyLoader)((function(){return Promise.all([b.e("vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-78804b"),b.e("account-app")]).then(b.bind(b,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),h.default})())}}]);