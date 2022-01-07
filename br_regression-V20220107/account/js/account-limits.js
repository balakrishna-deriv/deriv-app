/*! For license information please see account-limits.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx-react","react","react-dom"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx-react"),require("react"),require("react-dom")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e["mobx-react"],e.react,e["react-dom"])}(self,(function(e,t,n,r,a,o){return(()=>{var l={"./Components/demo-message/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>h});var r=n("react"),a=n.n(r),o=n("../../../node_modules/prop-types/index.js"),l=n.n(o),i=n("@deriv/translations"),c=n("../../../node_modules/classnames/index.js"),s=n.n(c),u=n("@deriv/components"),m=n("@deriv/shared"),p=n("./Stores/connect.js"),d=function(e){var t=e.has_button,n=e.has_real_account,a=e.icon,o=e.message,l=e.toggleAccountsDialog,c=e.toggleShouldShowRealAccountsList,p=r.useContext(m.PlatformContext).is_dashboard;return r.createElement("div",{className:s()("da-icon-with-message",{"da-icon-with-message-full-width":p})},r.createElement(u.Icon,{icon:a,size:128}),r.createElement(u.Text,{className:"da-icon-with-message__text",as:"p",color:"general",size:m.isMobile?"xs":"s",line_height:"m",weight:"bold"},o),t&&r.createElement(u.Button,{primary:!0,onClick:function(){c(!0),l()},className:"account__demo-message-button"},n?(0,i.localize)("Switch to real account"):(0,i.localize)("Add a real account")))};d.propTypes={icon:l().string.isRequired,has_button:l().bool,message:l().string.isRequired,toggleAccountsDialog:l().func};const f=(0,p.$j)((function(e){var t=e.client,n=e.ui;return{has_real_account:t.has_any_real_account,toggleAccountsDialog:n.toggleAccountsDialog,toggleShouldShowRealAccountsList:n.toggleShouldShowRealAccountsList}}))(d);var _=function(e){var t=e.has_demo_icon,n=e.has_button;return a().createElement(f,{icon:t?"IcPoaLockDemo":"IcPoaLock",message:(0,i.localize)("This feature is not available for demo accounts."),has_button:n})};_.propTypes={has_demo_icon:l().bool,full_width:l().bool};const h=_},"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>p});var r=n("react"),a=n.n(r),o=n("../../../node_modules/prop-types/index.js"),l=n("../../../node_modules/classnames/index.js"),i=n.n(l),c=n("@deriv/components"),s=n("@deriv/shared");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){var t=e.children,n=e.className,r=e.full_width,o=e.icon,l=e.icon_row,m=e.message,p=e.text;return a().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":r}),is_disabled:(0,s.isDesktop)(),height_offset:"110px"},a().createElement("div",{className:i()("account-management__message-content",u({},"".concat(n,"__message-content"),n))},o&&a().createElement("div",{className:i()("account-management__message-icon",u({},"".concat(n,"__message-icon"),n))},o),l&&a().createElement("div",null,l),a().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",u({},"".concat(n,"__message"),n))},m),p&&a().createElement("div",{className:"account-management__text-container"},a().createElement(c.Text,{className:i()(u({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},p)),t))};m.propTypes={children:o.PropTypes.oneOfType([o.PropTypes.object,o.PropTypes.array]),className:o.PropTypes.string,full_width:o.PropTypes.bool,icon:o.PropTypes.object,message:o.PropTypes.oneOfType([o.PropTypes.node,o.PropTypes.string,o.PropTypes.object]),text:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.element])};const p=m},"./Components/load-error-message/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var r=n("react"),a=n.n(r),o=n("@deriv/components"),l=n("./Components/icon-message-content/index.js");const i=function(e){var t=e.error_message;return a().createElement(l.default,{message:t,icon:a().createElement(o.Icon,{icon:"IcPoaLock",size:128})})}},"./Stores/connect.js":(e,t,n)=>{"use strict";n.d(t,{$j:()=>u});var r=n("mobx-react"),a=n("react"),o=n.n(a);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=o().createContext(null),u=function(e){return function(t){return function(e,t){var n=function(n){var a=o().useContext(s),l=t;return function(e){return!("function"!=typeof e||!e.prototype||!e.prototype.isReactComponent)}(t)&&(l=function(e){return o().createElement(t,e)}),(0,r.useObserver)((function(){return l(i(i({},n),e(a,n)))}))};return n.displayName=t.name,n}(e,t)}}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var r=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},"mobx-react":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=a},"react-dom":e=>{"use strict";e.exports=o}},i={};function c(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return l[e](n,n.exports,c),n.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{"use strict";c.d(s,{default:()=>I});var e=c("../../../node_modules/prop-types/index.js"),t=c.n(e),n=c("react"),r=c("../../../node_modules/classnames/index.js"),a=c.n(r),o=c("@deriv/components"),l=c("@deriv/shared"),i=c("@deriv/translations"),u=c("./Components/load-error-message/index.js"),m=c("./Components/demo-message/index.js"),p=function(e){var t=e.title,r=e.descriptions,a=e.onClickLearnMore,l=(null==r?void 0:r.length)>0,c=1===(null==r?void 0:r.length);return n.createElement("article",{className:"da-article"},n.createElement(o.Text,{as:"h4",color:"prominent",line_height:"m",size:"xs",weight:"bold",className:"da-article__header"},t),l&&n.createElement(n.Fragment,null,c?n.createElement(o.Text,{as:"p",size:"xxs",line_height:"m"},r[0]):n.createElement("ul",{className:"da-article__list"},r.map((function(e,t){return n.createElement("li",{key:t},n.createElement(o.Text,{size:"xxs",line_height:"xs"},e.component||e))})))),a&&n.createElement("div",{className:"da-article__learn-more",onClick:a},n.createElement(o.Text,{size:"xxs",color:"loss-danger",line_height:"s"},n.createElement(i.Localize,{i18n_default_text:"Learn more"})),n.createElement(o.Icon,{icon:"IcChevronRight",className:"da-article__learn-more-icon",color:"red"})))};p.propTypes={descriptions:t().array.isRequired,onClickLearnMore:t().func,title:t().string.isRequired};const d=p,f=function(){return n.createElement(d,{title:(0,i.localize)("Account limits"),descriptions:[n.createElement(i.Localize,{key:0,i18n_default_text:"These are default limits that we apply to your accounts."}),n.createElement(i.Localize,{key:1,i18n_default_text:"To learn more about trading limits and how they apply, please go to the <0>Help Centre.</0>",components:[n.createElement(o.StaticUrl,{key:0,className:"link",href:"/help-centre"})]})]})},_=n.createContext();var h=["message"];function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=function(e){var t=e.message,r=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,h);return(0,l.isMobile)()?n.createElement(o.Text,{color:"less-prominent",line_height:"s",size:"xxxs"},t):n.createElement(o.Popover,g({alignment:"right",className:"da-account-limits__popover",icon:"info",is_bubble_hover_enabled:!0,message:t,zIndex:9999},r))};y.propTypes={message:t().string.isRequired};const b=y;var x=c("react-dom");const E=function(){var e=n.useContext(_),t=e.footer_ref,r=e.toggleOverlay;return(0,x.createPortal)(n.createElement(o.AppSettings.Footer,null,n.createElement(o.AppSettings.Footer.Left,null,n.createElement("a",{className:"link link--prominent",onClick:r},n.createElement(o.Text,{size:"xxs",line_height:"m",weight:"bold"},n.createElement(i.Localize,{i18n_default_text:"Learn more about account limits"}))))),t)},v=function(){var e=n.useContext(_),t=e.overlay_ref,r=e.toggleOverlay;return n.createElement(o.Popup.Overlay,{descriptions:[{key:"account_limits_desc_1",component:n.createElement(i.Localize,{i18n_default_text:"These are default limits that we apply to your accounts."})},{key:"account_limits_desc_2",component:n.createElement(i.Localize,{i18n_default_text:"To learn more about account limits and how they apply, please go to the <0>Help Centre</0>.",components:[n.createElement(o.StaticUrl,{key:0,className:"link",href:"/help-centre"})]})}],done_text:(0,i.localize)("Done"),overlay_ref:t,title:(0,i.localize)("Account limits"),toggleOverlay:r})};var w=function(e){var t=e.align,r=e.children,l=e.is_hint,i=e.renderExtraInfo,c=l?"xxxs":"xxs";return n.createElement(n.Fragment,null,n.createElement("td",{className:a()("da-account-limits__table-cell",{"da-account-limits__table-cell--left":"right"!==t,"da-account-limits__table-cell--right":"right"===t})},r&&n.createElement(o.Text,{align:t,as:"p",color:"prominent",size:c,line_height:"m"},r),i&&i()))};w.propTypes={align:t().oneOf(["right","left"]),children:t().any,is_hint:t().bool,renderExtraInfo:t().func};const O=w;var j=function(e){var t=e.align,r=e.children,l=e.renderExtraInfo;return n.createElement("th",{className:a()("da-account-limits__table-header",{"da-account-limits__table-header--left":"right"!==t,"da-account-limits__table-header--right":"right"===t})},r&&n.createElement(o.Text,{align:t,as:"p",color:"prominent",size:"xxs",line_height:"m",weight:"bold"},r),l&&l())};j.propTypes={align:t().oneOf(["right","left"]),children:t().any};const T=j;var P=function(e){var t=e.collection,r=e.title,a=n.useContext(_).currency;return null!=t&&t.length?t.map((function(e){return n.createElement("tr",{key:e.name},n.createElement(O,null,r&&"".concat(r," - "),e.name),n.createElement(O,{align:"right"},(0,l.formatMoney)(a,e.turnover_limit,!0)))})):null};P.propTypes={collection:t().arrayOf(t().any),title:t().any};const z=P;function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(e){var t=e.account_limits,r=e.currency,c=e.footer_ref,s=e.getLimits,p=e.is_app_settings,d=e.is_fully_authenticated,h=e.is_switching,g=e.is_virtual,y=e.overlay_ref,x=e.setIsOverlayShown,w=e.should_bypass_scrollbars,j=e.should_show_article,P=(0,l.useIsMounted)(),k=N(n.useState(!1),2),C=k[0],I=k[1],R=N(n.useState(!1),2),q=R[0],M=R[1],A=n.useContext(l.PlatformContext).is_dashboard;if(n.useEffect((function(){g?I(!1):s().then((function(){P()&&I(!1)}))}),[]),n.useEffect((function(){!g&&t&&C&&I(!1)}),[t,g,C]),n.useEffect((function(){"function"==typeof x&&x(q)}),[q,x]),h)return n.createElement(o.Loading,{is_fullscreen:!1});if(g)return n.createElement("div",{className:a()("account__demo-message-wrapper",{"account__demo-message-wrapper-dashboard":A})},n.createElement(m.default,{has_demo_icon:A,has_button:A}),";");var D=t.api_initial_load_error,F=t.open_positions,W=t.account_balance,U=t.payout,B=t.market_specific,H=t.num_of_days_limit,Y=t.remainder,$=t.withdrawal_since_inception_monetary;if(D)return n.createElement(u.default,{error_message:D});if(h||C)return n.createElement(o.Loading,{is_fullscreen:!1});var V=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},B),G=V.commodities,J=V.forex,K=V.indices,Q=V.synthetic_index,X=null==J?void 0:J.slice().sort((function(e,t){return e.name<t.name?1:-1}));X&&X.push&&X.push(X.shift());var Z={currency:r,footer_ref:c,overlay_ref:y,toggleOverlay:function(){return M(!q)}};return n.createElement(_.Provider,{value:Z},n.createElement("section",{className:"da-account-limits__wrapper"},n.createElement("div",{className:a()("da-account-limits",{"da-account-limits--app-settings":p})},j&&(0,l.isMobile)()&&n.createElement(f,null),n.createElement("div",{className:"da-account-limits__table-wrapper"},n.createElement(o.ThemedScrollbars,{is_bypassed:w||(0,l.isMobile)()},n.createElement("table",{className:"da-account-limits__table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement(T,null,n.createElement(i.Localize,{i18n_default_text:"Trading limits - Item"})),n.createElement(T,{align:"right"},n.createElement(i.Localize,{i18n_default_text:"Limit"})))),n.createElement("tbody",null,n.createElement("tr",null,n.createElement(O,{renderExtraInfo:function(){return n.createElement(b,{message:(0,i.localize)("Represents the maximum number of outstanding contracts in your portfolio. Each line in your portfolio counts for one open position. Once the maximum is reached, you will not be able to open new positions without closing an existing position first.")})}},n.createElement(i.Localize,{i18n_default_text:"*Maximum number of open positions"})),n.createElement(O,{align:"right"},F)),n.createElement("tr",null,n.createElement(O,{renderExtraInfo:function(){return n.createElement(b,{message:(0,i.localize)("Represents the maximum amount of cash that you may hold in your account.  If the maximum is reached, you will be asked to withdraw funds.")})}},n.createElement(i.Localize,{i18n_default_text:"*Maximum account cash balance"})),n.createElement(O,{align:"right"},(0,l.formatMoney)(r,W,!0))),n.createElement("tr",null,n.createElement(O,{renderExtraInfo:function(){return n.createElement(b,{message:(0,i.localize)("Represents the maximum aggregate payouts on outstanding contracts in your portfolio. If the maximum is attained, you may not purchase additional contracts without first closing out existing positions.")})}},n.createElement(i.Localize,{i18n_default_text:"Maximum aggregate payouts on open positions"})),n.createElement(O,{align:"right"},(0,l.formatMoney)(r,U,!0))),n.createElement("tr",null,n.createElement(O,{is_hint:!0},n.createElement(i.Localize,{i18n_default_text:"*Any limits in your Self-exclusion settings will override these default limits."})),n.createElement(O,null)))),n.createElement("table",{className:"da-account-limits__table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement(T,{renderExtraInfo:function(){return n.createElement(b,{message:(0,i.localize)("Represents the maximum volume of contracts that you may purchase in any given trading day.")})}},n.createElement(i.Localize,{i18n_default_text:"Trading limits - Maximum daily turnover"})),n.createElement(T,{align:"right"},n.createElement(i.Localize,{i18n_default_text:"Limit"})))),n.createElement("tbody",null,n.createElement(z,{collection:G}),n.createElement(z,{collection:X,title:(0,i.localize)("Forex")}),n.createElement(z,{collection:K}),n.createElement(z,{collection:Q}))),!p&&n.createElement(n.Fragment,null,n.createElement("table",{className:"da-account-limits__table"},n.createElement("thead",null,n.createElement("tr",null,n.createElement(T,null,n.createElement(i.Localize,{i18n_default_text:"Withdrawal limits"})),d&&n.createElement(T,{align:"right"},n.createElement(i.Localize,{i18n_default_text:"Limit"})))),n.createElement("tbody",null,d?n.createElement("tr",null,n.createElement(O,null,n.createElement(n.Fragment,null,n.createElement(o.Text,{size:"xxs",color:"prominent"},(0,i.localize)("Your account is fully authenticated and your withdrawal limits have been lifted.")))),n.createElement(O,null)):n.createElement(n.Fragment,null,n.createElement("tr",null,n.createElement(O,null,n.createElement(i.Localize,{i18n_default_text:A?"Total withdrawal limit":"Total withdrawal allowed"}),A&&!d&&n.createElement(n.Fragment,null,n.createElement(o.Text,{size:(0,l.isMobile)()?"xxxs":"xxs",className:"account-management-table__verify",color:"less-prominent",line_height:"xs"},(0,i.localize)("To increase limit please verify your identity")),n.createElement(o.ButtonLink,{to:"/account/proof-of-identity",size:"small",className:"account-management-table__verify-button"},n.createElement(o.Text,{weight:"bold",color:"colored-background",size:(0,l.isMobile)()?"xxxs":"xxs"},(0,i.localize)("Verify"))))),n.createElement(O,{align:"right"},(0,l.formatMoney)(r,H,!0))),n.createElement("tr",null,n.createElement(O,null,n.createElement(i.Localize,{i18n_default_text:"Total withdrawn"})),n.createElement(O,{align:"right"},(0,l.formatMoney)(r,$,!0))),n.createElement("tr",null,n.createElement(O,null,n.createElement(i.Localize,{i18n_default_text:"Maximum withdrawal remaining"})),n.createElement(O,{align:"right"},(0,l.formatMoney)(r,Y,!0)))))),!A||(0,l.isMobile)()&&n.createElement("div",{className:"da-account-limits__text-container"},n.createElement(o.Text,{as:"p",size:"xxs",color:"less-prominent",line_height:"xs"},d?n.createElement(i.Localize,{i18n_default_text:"Your account is fully authenticated and your withdrawal limits have been lifted."}):n.createElement(i.Localize,{i18n_default_text:"Stated limits are subject to change without prior notice."})))))),j&&(0,l.isDesktop)()&&n.createElement(f,null),c&&n.createElement(E,null),q&&y&&n.createElement(v,null))))};C.propTypes={account_limits:t().object,currency:t().string.isRequired,footer_ref:t().shape({current:t().any}),is_app_settings:t().bool,getLimits:t().func.isRequired,is_fully_authenticated:t().bool.isRequired,is_switching:t().bool.isRequired,is_virtual:t().bool.isRequired,overlay_ref:t().shape({current:t().any}),setIsPopupOverlayShown:t().func,should_bypass_scrollbars:t().bool,should_show_article:t().bool};const I=C})(),s.default})()}));