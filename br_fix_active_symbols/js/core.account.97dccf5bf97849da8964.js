(self.webpackChunk=self.webpackChunk||[]).push([[1809],{88073:(e,t,r)=>{var o,n,a,s,d,i,u,c,l;self,e.exports=(o=r(77395),n=r(53289),a=r(20374),s=r(59001),d=r(16),i=r(32735),u=r(12788),c=r(13799),l=r(14956),(()=>{"use strict";var e,t,r,p,f={"@deriv/components":e=>{e.exports=o},"@deriv/shared":e=>{e.exports=n},"@deriv/translations":e=>{e.exports=a},mobx:e=>{e.exports=s},"mobx-react":e=>{e.exports=d},react:e=>{e.exports=i},"react-dom":e=>{e.exports=u},"react-router":e=>{e.exports=c},"react-router-dom":e=>{e.exports=l}},m={};function b(e){if(m[e])return m[e].exports;var t=m[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,b),t.loaded=!0,t.exports}b.m=f,b.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return b.d(t,{a:t}),t},b.d=(e,t)=>{for(var r in t)b.o(t,r)&&!b.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((t,r)=>(b.f[r](e,t),t)),[])),b.u=e=>"account/js/account."+e+"."+{404:"6ed0f72fce9cb3218833","vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-cf1b83":"396b8aee60e1740484a2","account-app":"7ae2057bdd628688a5e8"}[e]+".js",b.miniCssF=e=>"account/css/"+e+".b0c733c08763f3bcac4d.css",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),b.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@deriv/account:",b.l=(r,o,n,a)=>{if(e[r])e[r].push(o);else{var s,d;if(void 0!==n)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var c=i[u];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+n){s=c;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,b.nc&&s.setAttribute("nonce",b.nc),s.setAttribute("data-webpack",t+n),s.src=r),e[r]=[o];var l=(t,o)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),d&&document.head.appendChild(s)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/br_fix_active_symbols/",r=e=>new Promise(((t,r)=>{var o=b.miniCssF(e),n=b.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=(s=r[o]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(n===e||n===t))return s}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var s;if((n=(s=a[o]).getAttribute("data-href"))===e||n===t)return s}})(o,n))return t();((e,t,r,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)r();else{var s=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=s,i.request=d,n.parentNode.removeChild(n),o(i)}},n.href=t,document.head.appendChild(n)})(e,n,t,r)})),p={account:0},b.f.miniCss=(e,t)=>{p[e]?t.push(p[e]):0!==p[e]&&{"account-app":1}[e]&&t.push(p[e]=r(e).then((()=>{p[e]=0}),(t=>{throw delete p[e],t})))},(()=>{var e={account:0};b.f.j=(t,r)=>{var o=b.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>{o=e[t]=[r,n]}));r.push(o[2]=n);var a=b.p+b.u(t),s=new Error;b.l(a,(r=>{if(b.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{for(var o,n,[a,s,d]=r,i=0,u=[];i<a.length;i++)n=a[i],b.o(e,n)&&e[n]&&u.push(e[n][0]),e[n]=0;for(o in s)b.o(s,o)&&(b.m[o]=s[o]);for(d&&d(b),t&&t(r);u.length;)u.shift()()},r=self.webpackChunk_deriv_account=self.webpackChunk_deriv_account||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var h={};return(()=>{b.d(h,{default:()=>n});var e=b("react"),t=b.n(e),r=b("@deriv/shared"),o=b("@deriv/components");const n=(0,r.makeLazyLoader)((function(){return Promise.all([b.e("vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-cf1b83"),b.e("account-app")]).then(b.bind(b,"./App.jsx"))}),(function(){return t().createElement(o.Loading,null)}))()})(),h.default})())}}]);