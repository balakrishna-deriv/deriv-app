(self.webpackChunk=self.webpackChunk||[]).push([[2871],{39692:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(32735),a=r(13799),i=r(75672),o=r(77395),l=r(20374),s=r(53289);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){switch(e.header){case"password_changed":return n.createElement(o.Text,{as:"p",weight:"bold",className:"reset-password__heading"},n.createElement(l.Localize,{i18n_default_text:"Your password has been changed"}));default:return""}};const p=(0,i.$j)((function(e){var t=e.client,r=e.ui;return{disableApp:r.disableApp,enableApp:r.enableApp,is_loading:r.is_loading,is_logged_in:t.is_logged_in,logout:t.logout}}))((function(e){var t=e.is_logged_in,r=e.logout,i=e.disableApp,c=e.enableApp,p=e.is_loading,f=u(n.useState(!1),2),g=f[0],b=f[1],h=new URLSearchParams((0,a.useLocation)().search).get("header"),m=function(){b(!0),"true"!==window.localStorage.getItem("is_redirecting")&&(0,s.redirectToLogin)(!1,(0,l.getLanguage)(),!1,3e3)};return n.useEffect((function(){t?r().then((function(){return m()})):m()}),[t,r]),n.createElement(o.Dialog,{is_visible:g,disableApp:i,enableApp:c,is_loading:p},n.createElement("div",{className:"reset-password__password-selection"},n.createElement(d,{header:h}),n.createElement(o.Text,{align:"center",as:"p",size:"xxs",className:"reset-password__subtext"},n.createElement(l.Localize,{i18n_default_text:"We will now redirect you to the login page."}))))}))}}]);