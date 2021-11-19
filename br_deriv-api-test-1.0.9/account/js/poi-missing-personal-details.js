/*! For license information please see poi-missing-personal-details.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,r,o){return(()=>{var n={"./Components/icon-message-content/index.js":(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var o=r("react"),n=r.n(o),s=r("../../../node_modules/prop-types/index.js"),a=r("../../../node_modules/classnames/index.js"),i=r.n(a),c=r("@deriv/components"),p=r("@deriv/shared");function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(e){var t=e.children,r=e.className,o=e.full_width,s=e.icon,a=e.icon_row,d=e.message,u=e.text;return n().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":o}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},n().createElement("div",{className:i()("account-management__message-content",l({},"".concat(r,"__message-content"),r))},s&&n().createElement("div",{className:i()("account-management__message-icon",l({},"".concat(r,"__message-icon"),r))},s),a&&n().createElement("div",null,a),n().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",l({},"".concat(r,"__message"),r))},d),u&&n().createElement("div",{className:"account-management__text-container"},n().createElement(c.Text,{className:i()(l({},"".concat(r,"__text"),r)),as:"p",size:"xs",align:"center"},u)),t))};d.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element])};const u=d},"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)o.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,r)=>{"use strict";var o=r("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,a){if(a!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},"../../../node_modules/prop-types/index.js":(e,t,r)=>{e.exports=r("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=o}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>p});var e=a("react"),t=a.n(e),r=a("@deriv/shared"),o=a("@deriv/components"),n=a("@deriv/translations"),s=a("./Components/icon-message-content/index.js"),c=function(e){var r=e.anchor,s=e.from,a=e.text;return t().createElement(o.ButtonLink,{to:"/account/personal-details".concat(s?"?from=".concat(s):"").concat(r?"#".concat(r):"")},t().createElement(o.Text,{className:"dc-btn__text",weight:"bold",as:"p"},a||(0,n.localize)("Go to personal details")))};const p=function(e){var a=e.has_invalid_postal_code,i=e.from,p=t().useContext(r.PlatformContext).is_dashboard;return a?t().createElement(s.default,{message:(0,n.localize)("Your postal code is invalid"),text:(0,n.localize)("Please check and update your postal code before submitting proof of identity."),icon:t().createElement(o.Icon,{icon:"IcAccountMissingDetails",size:128})},t().createElement(c,{anchor:"address_postcode",from:i,text:(0,n.localize)("Update postal code")})):t().createElement(s.default,{message:(0,n.localize)("Your personal details are missing"),text:(0,n.localize)("Please complete your personal details before you verify your identity."),icon:t().createElement(o.Icon,{icon:p?"IcAccountMissingDetailsDashboard":"IcAccountMissingDetails",size:128})},t().createElement(c,{from:i}))}})(),i.default})()}));