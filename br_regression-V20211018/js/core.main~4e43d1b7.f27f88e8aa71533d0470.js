(self.webpackChunk=self.webpackChunk||[]).push([[5433],{58468:(e,t,a)=>{"use strict";a.d(t,{j:()=>l.Z,WS:()=>r.Z,Y:()=>s});var n=a(17502),o=a(16789),i=a.n(o),r=a(16636),s=function(){return r.Z.logout().then(c)};var c=function(e){var t,a;if(1===e.logout)return(0,n.removeCookies)("affiliate_token","affiliate_tracking","onfido_token"),i().clear(),sessionStorage.clear(),null===(t=window.LC_API)||void 0===t||null===(a=t.close_chat)||void 0===a||a.call(t),e},l=a(42669)},28284:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n,o,i=a(59001),r=a(35313),s=a.n(r),c=a(58468);const l=(o=(0,i.action)((function(e,t){n&&n.setNetworkStatus(e,t)})),{init:function(e){s().init(c.j.init(e),o,e.client),n=e.common}})},42669:(e,t,a)=>{"use strict";a.d(t,{Z:()=>O});var n,o,i,r,s,c,l,u,d,_,p,f,m,g,y,h=a(53806),v=a.n(h),w=a(59001),b=a(17502),k=a(20374),z=a(81250),x=a.n(z),S=a(31508),A=a.n(S),P=a(16636),C=(l=function(){o.setIsSocketOpened(!1)},u=function(e){if(e){if(!n.is_valid_login)return void n.logout();P.Z.subscribeWebsiteStatus(E.websiteStatus),x().init((function(){return o.setServerTime(x().get())})),o.setIsSocketOpened(!0)}},d=function(e){switch(m(e),e.msg_type){case"authorize":if(e.error){var t="1"===sessionStorage.getItem("active_tab");"SelfExclusion"===(0,b.getPropertyValue)(e,["error","code"])&&t&&sessionStorage.removeItem("active_tab"),n.logout()}else/authorize/.test(b.State.get("skip_response"))||(e.authorize.loginid===n.loginid||n.is_populating_account_list||n.is_switching?e.authorize.loginid===n.loginid&&y(e):n.logout());break;case"landing_company":break;case"get_self_exclusion":p(e);break;case"get_settings":e.get_settings&&(_(e.get_settings.country_code),n.setEmail(e.get_settings.email),n.setAccountSettings(e.get_settings),i.eventHandler(e.get_settings));break;case"set_account_currency":P.Z.forgetAll("balance").then(g);break;case"get_account_status":n.setAccountStatus(e.get_account_status);break;case"payout_currencies":n.responsePayoutCurrencies(e.payout_currencies);break;case"transaction":i.pushTransactionData(e)}},_=function(e){e&&(n.setResidence(e),P.Z.landingCompany(e))},p=function(e){var t,a=null==e||null===(t=e.get_self_exclusion)||void 0===t?void 0:t.session_duration_limit;if(s=new Date(sessionStorage.getItem("session_start_time")||x().get()),sessionStorage.setItem("session_start_time",s),a&&a!==r){var o=60*a*1e3-(r?x().get()-v()(s):0);clearTimeout(c),c=setTimeout((function(){n.logout(),sessionStorage.removeItem("session_start_time")}),o)}else a||clearTimeout(c);r=a},f=(0,w.flow)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A().wait("website_status");case 2:n.setBalanceActiveAccount(t);case 3:case"end":return e.stop()}}),e)}))),m=function(e){var t=e.msg_type;switch((0,b.getPropertyValue)(e,["error","code"])){case"WrongResponse":"mt5_login_list"===t?P.Z.authorized.mt5LoginList().then((function(e){e.error?n.resetMt5ListPopulatedState():(n.responseMt5LoginList(e),P.Z.balanceAll().then((function(e){e.error||n.setBalanceOtherAccounts(e.balance)})))})):"balance"===t?P.Z.forgetAll("balance").then(g):"get_account_status"===t?P.Z.authorized.getAccountStatus().then((function(e){e.error||n.setAccountStatus(e.get_account_status)})):"landing_company"===t&&n.residence&&P.Z.authorized.landingCompany(n.residence).then((function(e){e.error||n.responseLandingCompany(e)}));break;case"InternalServerError":case"OutputValidationFailed":"mt5_login_list"!==t&&o.setError(!0,{message:e.error.message});break;case"RateLimit":"cashier_password"!==t&&o.setError(!0,{message:(0,k.localize)("You have reached the rate limit of requests per second. Please try later.")});break;case"InvalidAppID":case"DisabledClient":o.setError(!0,{message:e.error.message});break;case"InvalidToken":if(["cashier","paymentagent_withdraw","reset_password","trading_platform_password_reset","trading_platform_investor_password_reset","new_account_virtual","p2p_advertiser_info","portfolio","proposal_open_contract"].includes(t))return;["reset_password"].includes(t)||window.TrackJS&&window.TrackJS.track("Custom InvalidToken error");var a=(0,b.getActivePlatform)(o.app_routing_history);if("DBot"===a)return;n.logout().then((function(){var e=b.routes.trade;"DMT5"===a&&(e=b.routes.mt5),o.routeTo(e)}));break;case"AuthorizationRequired":if("buy"===t)return;n.logout()}},g=function(){P.Z.subscribeBalanceAll(E.balanceOtherAccounts),P.Z.subscribeBalanceActiveAccount(E.balanceActiveAccount,n.loginid)},{init:function(e){return n=e.client,o=e.common,i=e.gtm,{onDisconnect:l,onOpen:u,onMessage:d}},setBalanceActiveAccount:f,setBalanceOtherAccounts:function(e){n.setBalanceOtherAccounts(e)},authorizeAccount:y=function(e){n.responseAuthorize(e),g(),P.Z.storage.getSettings(),P.Z.getAccountStatus(),P.Z.storage.payoutCurrencies(),n.is_virtual||P.Z.getSelfExclusion(),A().sendBuffered(),/bch/i.test(e.authorize.currency)&&n.accounts[n.loginid].accepted_bch}});const O=C;var E={websiteStatus:function(e){if(e.website_status){if(!A().isSiteDown(e.website_status.site_status)&&A().getAvailability().is_down)return void window.location.reload();if(A().isSiteUpdating(e.website_status.site_status)&&!A().getAvailability().is_updating){var t=Math.floor(30*Math.random())+1;window.setTimeout((function(){A().closeAndOpenNewConnection()}),1e3*t)}A().setAvailability(e.website_status.site_status),n.setWebsiteStatus(e)}},balanceActiveAccount:function(e){e.error||C.setBalanceActiveAccount(e.balance)},balanceOtherAccounts:function(e){e.error||C.setBalanceOtherAccounts(e.balance)}}},16636:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(31508),o=a.n(n),i=a(17502),r=o();const s=(0,i.trackJSNetworkMonitor)(r)},57798:(e,t,a)=>{"use strict";a.d(t,{G$:()=>g,rH:()=>h,Pu:()=>v});var n=a(32735),o=a(17502),i=a(77395),r=a(20374),s=a(32577),c=a(58468);function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t,a,n,o,i,r){try{var s=e[i](r),c=s.value}catch(e){return void a(e)}s.done?t(c):Promise.resolve(c).then(n,o)}function _(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function r(e){d(i,n,o,r,s,"next",e)}function s(e){d(i,n,o,r,s,"throw",e)}r(void 0)}))}}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(){var e,t,a,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d={dp2p:{key:"dp2p",header:(0,r.localize)("Payment problems?"),message:(0,r.localize)("There’s an app for that"),primary_btn:{text:(0,r.localize)("Learn more"),onClick:function(){window.open((0,o.getStaticUrl)("/p2p"),"_blank")}},img_src:(0,o.getUrlBase)("/public/images/common/dp2p_banner.png"),img_alt:"DP2P",type:"news"},currency:{action:{text:(0,r.localize)("Set currency"),onClick:function(){l.toggleNotificationsModal(),l.openRealAccountSignup("set_currency")}},key:"currency",header:(0,r.localize)("Set account currency"),message:(0,r.localize)("Please set the currency of your account to enable trading."),type:"danger"},self_exclusion:function(e){var t,a,s;return u.is_uk?(a=(0,r.localize)("You’re taking a break from trading"),t=n.createElement(r.Localize,{i18n_default_text:"You chose to exclude yourself from trading until {{exclusion_end}}. If you want to remove this self-exclusion, you can do so after {{exclusion_end}} by contacting Customer Support at +447723580049.",values:{exclusion_end:(0,o.formatDate)(e,"DD/MM/YYYY"),interpolation:{escapeValue:!1}}})):u.is_eu?(s={onClick:function(){return window.LC_API.open_chat_window()},text:(0,r.localize)("Chat now")},a=(0,r.localize)("You’re taking a break from trading"),t=n.createElement(r.Localize,{i18n_default_text:"You chose to exclude yourself from trading until {{exclusion_end}}. If you want to remove this self-exclusion, you can do so at any time by contacting Customer Support via chat.",values:{exclusion_end:(0,o.formatDate)(e,"DD/MM/YYYY"),interpolation:{escapeValue:!1}}})):(a=(0,r.localize)("Self-exclusion detected"),t=n.createElement(r.Localize,{i18n_default_text:"You have opted to be excluded from {{website_domain}} until {{exclusion_end}}. Please <0>contact us</0> for assistance.",values:{website_domain:o.website_name,exclusion_end:(0,o.formatDate)(e,"DD/MM/YYYY"),interpolation:{escapeValue:!1}},components:[n.createElement(i.StaticUrl,{key:0,className:"link",href:"contact-us"})]})),{key:"self_exclusion",header:a,message:t,action:s,type:"danger"}},authenticate:{action:{route:o.routes.proof_of_identity,text:(0,r.localize)("Authenticate")},key:"authenticate",header:(0,r.localize)("Account authentication"),message:(0,r.localize)("Authenticate your account now to take full advantage of all payment methods available."),type:"info"},cashier_locked:{key:"cashier_locked",header:(0,r.localize)("Cashier disabled"),message:(0,r.localize)("Deposits and withdrawals have been disabled on your account. Please check your email for more details."),type:"warning"},system_maintenance:{key:"system_maintenance",header:(0,r.localize)("System Maintenance"),message:n.createElement(r.Localize,{i18n_default_text:"We’re updating our cashier system and it’ll be back online soon. Please see our <0>status page</0> for updates.",components:[n.createElement("a",{key:0,className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://deriv.statuspage.io/"})]}),type:"warning"},withdrawal_locked_review:{key:"withdrawal_locked_review",header:(0,r.localize)("Withdrawal disabled"),message:(0,r.localize)("Withdrawals have been disabled on your account. Please wait until your uploaded documents are verified."),type:"warning"},withdrawal_locked:{key:"withdrawal_locked",header:(0,r.localize)("Withdrawal disabled"),message:(0,r.localize)("Withdrawals have been disabled on your account. Please check your email for more details."),type:"warning"},mt5_withdrawal_locked:{key:"mt5_withdrawal_locked",header:(0,r.localize)("MT5 withdrawal disabled"),message:(0,r.localize)("MT5 withdrawals have been disabled on your account. Please check your email for more details."),type:"warning"},document_needs_action:{key:"document_needs_action",header:(0,r.localize)("Authentication failed"),message:n.createElement(r.Localize,{i18n_default_text:"<0>Your Proof of Identity or Proof of Address</0> did not meet our requirements. Please check your email for further instructions.",components:[n.createElement(s.CG,{key:0,className:"link",to:o.routes.proof_of_identity})]}),type:"warning"},unwelcome:f(f({},(0,o.isMobile)()&&{action:{text:(0,r.localize)("Contact us"),onClick:function(e){var t=e.is_dashboard;window.open((0,o.getStaticUrl)("contact-us",{is_dashboard:t}))}}}),{},{key:"unwelcome",header:(0,r.localize)("Trading and deposits disabled"),message:(0,o.isMobile)()?n.createElement(r.Localize,{i18n_default_text:"Trading and deposits have been disabled on your account. Kindly contact customer support for assistance."}):n.createElement(r.Localize,{i18n_default_text:"Trading and deposits have been disabled on your account. Kindly contact <0>customer support</0> for assistance.",components:[n.createElement(i.StaticUrl,{key:0,className:"link",href:"contact-us"})]}),type:"danger"}),max_turnover_limit_not_set:{key:"max_turnover_limit_not_set",header:(0,r.localize)("Remove deposit limits"),message:n.createElement(r.Localize,{i18n_default_text:"Please set your <0>30-day turnover limit</0> to remove deposit limits.",components:[n.createElement(s.CG,{key:0,className:"link",to:o.routes.cashier_deposit})]}),type:"danger"},risk:{action:{text:(0,r.localize)("Complete form"),route:o.routes.financial_assessment},key:"risk",header:(0,r.localize)("Withdrawal and trading limits"),message:(0,r.localize)("Please complete the Financial Assessment form to lift your withdrawal and trading limits."),type:"warning"},tax:{action:{route:o.routes.personal_details,text:(0,r.localize)("Complete details")},key:"tax",header:(0,r.localize)("Complete your personal details"),message:(0,r.localize)("Please complete your Personal Details before you proceed."),type:"danger"},tnc:{action:{onClick:(a=_(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.WS.tncApproval();case 2:c.WS.getSettings();case 3:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),text:(0,r.localize)("I accept")},key:"tnc",header:(0,r.localize)("Terms & conditions updated"),message:n.createElement(r.Localize,{i18n_default_text:"Please accept our <0>updated Terms and Conditions</0> to proceed.",components:[n.createElement(i.StaticUrl,{key:0,className:"link",href:"terms-and-conditions"})]}),type:"warning"},required_fields:{action:{route:o.routes.personal_details,text:(0,r.localize)("Complete details")},key:"required_fields",header:(0,r.localize)("Complete your personal details"),message:(0,r.localize)("Please complete your Personal Details before you proceed."),type:"danger"},you_are_offline:{key:"you_are_offline",header:(0,r.localize)("You are offline"),message:n.createElement(r.Localize,{i18n_default_text:"Check your connection."}),type:"danger"},password_changed:{key:"password_changed",header:(0,r.localize)("Password updated."),message:n.createElement(r.Localize,{i18n_default_text:"Please log in with your updated password."}),type:"info"},reset_virtual_balance:{key:"reset_virtual_balance",header:(0,r.localize)("Reset your balance"),message:u.message,type:"info",is_persistent:!0,should_show_again:!0,platform:[o.platform_name.DTrader],is_disposable:!0,action:{text:(0,r.localize)("Reset balance"),onClick:(t=_(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.resetVirtualBalance();case 2:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}},needs_poi:{action:{route:o.routes.proof_of_identity,text:(0,r.localize)("Verify identity")},key:"needs_poi",header:(0,r.localize)("Please verify your proof of identity"),message:(0,r.localize)("To continue trading with us, please confirm who you are."),type:"danger"},needs_poa:{action:{route:o.routes.proof_of_address,text:(0,r.localize)("Verify address")},key:"needs_poa",header:(0,r.localize)("Please verify your proof of address"),message:(0,r.localize)("To continue trading with us, please confirm where you live."),type:"danger"},needs_poi_virtual:{action:{onClick:(e=_(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.switchAccount,a=u.first_switchable_real_loginid,e.next=3,t(a);case 3:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)}),text:(0,r.localize)("Verify identity")},key:"needs_poi_virtual",header:(0,r.localize)("Please Verify your identity"),message:(0,r.localize)("We couldn’t verify your personal details with our records, to enable deposit, withdrawals and trading, you need to upload proof of your identity."),type:"danger"},needs_poa_virtual:{action:{route:o.routes.proof_of_address,text:(0,r.localize)("Verify address")},key:"needs_poa_virtual",header:(0,r.localize)("Please Verify your address"),message:(0,r.localize)("We couldn’t verify your personal details with our records, to enable deposit, withdrawals and trading, you need to upload proof of your address."),type:"danger"},poa_expired:{action:{route:o.routes.proof_of_address,text:(0,r.localize)("Proof of address")},key:"poa_expired",header:(0,r.localize)("Document expired"),message:(0,r.localize)("Your documents for proof of address is expired. Please submit again."),type:"danger"},poa_rejected:{key:"poa_rejected",header:(0,r.localize)("We could not verify your proof of address"),message:n.createElement(r.Localize,{i18n_default_text:"We have disabled trading, deposits and withdrawals for this account."}),type:"danger"},poi_expired:{action:{route:o.routes.proof_of_identity,text:(0,r.localize)("Proof of identity")},key:"poi_expired",header:(0,r.localize)("Proof of identity expired"),message:(0,r.localize)("Your proof of identity document has expired. Please submit a new one."),type:"danger"},new_version_available:{action:{onClick:function(){return window.location.reload()},text:(0,r.localize)("Refresh now")},key:"new_version_available",header:(0,r.localize)("A new version of Deriv is available"),message:(0,r.localize)("This page will automatically refresh in 5 minutes to load the latest version."),type:"warning",should_hide_close_btn:!0,timeout:3e5,timeoutMessage:function(e){return(0,r.localize)("Auto update in {{ remaining }} seconds",{remaining:e})}},install_pwa:{key:"install_pwa",action:{onClick:function(){return l.installWithDeferredPrompt()},text:(0,r.localize)("Install")},header:(0,r.localize)("Install the DTrader web app"),message:(0,r.localize)("Launch DTrader in seconds the next time you want to trade."),type:"announce",should_hide_close_btn:!1},deriv_go:{key:"deriv_go",message:n.createElement(r.Localize,{i18n_default_text:"Get a faster mobile trading experience with the <0>Deriv GO</0> app!",components:[n.createElement(i.StaticUrl,{key:0,className:"link dark",href:"/landing/deriv-go"})]}),cta_btn:{text:(0,r.localize)("Learn more"),onClick:function(){window.open((0,o.getStaticUrl)("/landing/deriv-go"),"_blank")}},img_src:(0,o.getUrlBase)("/public/images/common/derivgo_banner.png"),img_alt:"deriv_go",type:"promotions"}};return d},y=function(e,t,a,n,i,r){if((0,o.isEmptyObject)(e))return{};if(n!==o.LocalStore.get("active_loginid"))return{};var s=e.authentication,c=s.document,l=s.identity,u=s.needs_verification,d=e.prompt_client_to_authenticate,_=e.risk_classification,p=e.status,f=e.cashier_validation,m=p.reduce((function(e,t){return e[t]=!0,e}),{}),y=m.authenticated,h=m.cashier_locked,v=m.withdrawal_locked,w=m.mt5_withdrawal_locked,b=m.document_needs_action,k=m.unwelcome,z=m.max_turnover_limit_not_set,x=m.allow_document_upload,S=(f?f.reduce((function(e,t){return e[t]=!0,e}),{}):{}).system_maintenance;!function(e,t,a){"expired"===e.status&&a(g().poi_expired),"expired"===t.status&&a(g().poa_expired)}(l,c,a);var A="iom"===t.landing_company_shortcode&&z,P=u.length||x,C=i(e),O=P&&u.includes("document")&&("expired"!==(null==c?void 0:c.status)||"pending"!==(null==c?void 0:c.status)),E=P&&u.includes("identity")&&("expired"!==(null==l?void 0:l.status)||"pending"!==(null==l?void 0:l.status));if(O&&"expired"!==c.status&&a(g().needs_poa),E&&"expired"!==l.status&&a(g().needs_poi),S)a(g().system_maintenance);else if(h)a(g().cashier_locked);else if(v){var D="high"===_,T=!y||d,M="pending"===c.status;a(D&&T&&M?g().withdrawal_locked_review:g().withdrawal_locked)}w&&a(g().mt5_withdrawal_locked),b&&a(g().document_needs_action);var L=u.length||/^pending|expired$/.test(c.status)||/^pending|expired$/.test(l.status);return!k||A||L||a(g().unwelcome),C&&a(g().risk),r(e)&&a(g().tax),A&&a(g().max_turnover_limit_not_set),{has_risk_assessment:C}},h=(0,o.isMobile)()?["contract_sold"]:["you_are_offline","password_changed","switch_to_tick_chart","contract_sold","maintenance","bot_switch_account","new_version_available"],v=function(e,t,a,n,i){var r,s,c=e.currency,u=e.excluded_until,d=t.account_settings,_=t.account_status,p=t.getRiskAssessment,f=t.is_eu,m=t.is_logged_in,h=t.is_tnc_needed,v=t.isAccountOfType,w=t.loginid,b=t.shouldCompleteTax,k=a.addNotificationMessage,z=a.removeNotificationMessageByKey,x=n.is_p2p_visible,S=i.current_language,A=i.selected_contract_type;if(w!==o.LocalStore.get("active_loginid"))return{};(c||k(g(a).currency),u&&k(g(a,t).self_exclusion(u)),e&&!e.is_virtual)&&(s=y(_,e,k,w,p,b).has_risk_assessment,x?k(g().dp2p):z({key:g().dp2p.key}),h&&k(g(a).tnc),(r=function(e,t,a){if(!e||(0,o.isEmptyObject)(e))return!1;var n,i,r,s,c=t.is_svg,u=t.landing_company_shortcode;return c?(i=o.State.getResponse("landing_company.financial_company.requirements.withdrawal")||[],r=o.State.getResponse("landing_company.financial_company.requirements.signup"),s=r?r.map((function(e){return"residence"===e?"country":e})):[],n=[].concat(l(i),l(s))):n=function(){if(!a("financial"))return[];var e=["account_opening_reason","address_line_1","address_city","phone","tax_identification_number","tax_residence"];return"gb"!==t.residence&&"iom"!==u||e.push("address_postcode"),[].concat(e)}(),n.some((function(t){return!e[t]}))}(d,e,v))&&k(g(a).required_fields));return!f&&(0,o.isMultiplierContract)(A)&&"EN"===S&&m?k(g().deriv_go):z({key:g().deriv_go.key}),{has_missing_required_field:r,has_risk_assessment:s}}},74751:(e,t,a)=>{"use strict";a.d(t,{ai:()=>i,GH:()=>s});var n,o=a(20374),i=(a(17502),function(e){var t;return/^VR/.test(e)?t="virtual":/^MF/.test(e)?t="financial":/^MLT|MX/.test(e)&&(t="gaming"),t}),r={get:function(){return n||(n={default:(0,o.localize)("Real"),financial:(0,o.localize)("Investment"),gaming:(0,o.localize)("Gaming"),virtual:(0,o.localize)("Virtual")}),n}},s=function(e){var t=r.get();return t[i(e)]||t.default}},36890:(e,t,a)=>{"use strict";a.d(t,{T:()=>o});var n=a(17502),o=function(e,t){var a=function(e){return new n.CookieStorage(e.includes("utm")?"utm_data":e)}(e);return a.get(e)||a.set(e,t),a}},38759:(e,t,a)=>{"use strict";a.d(t,{G:()=>r});var n=a(17502),o=a(20374);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var r=function(e){var t,a=[],r=[];return e.forEach((function(e){var t=(0,n.isCryptocurrency)(e);(t?r:a).push({text:(0,n.getCurrencyDisplayCode)(e),value:e,has_tooltip:t})})),i(t={},(0,o.localize)("Fiat"),a),i(t,(0,o.localize)("Crypto"),r),t}},47997:(e,t,a)=>{"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.d(t,{Z:()=>o});var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root_store=t}var t,a,o;return t=e,(a=[{key:"attachModule",value:function(e,t){this[e]=t}},{key:"detachModule",value:function(e){this[e]={}}}])&&n(t.prototype,a),o&&n(t,o),e}()}}]);