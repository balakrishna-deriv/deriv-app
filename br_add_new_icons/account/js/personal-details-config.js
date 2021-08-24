!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=t(e["@deriv/shared"],e["@deriv/translations"])}(self,(function(e,t){return(()=>{"use strict";var r={"@deriv/shared":t=>{t.exports=e},"@deriv/translations":e=>{e.exports=t}},a={};function i(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return r[e](t,t.exports,i),t.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};return(()=>{i.d(n,{default:()=>c});var e=i("@deriv/shared"),t=i("@deriv/translations");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,i=!1,n=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(i)throw n}}return r}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var s=function(r){var i,n,o,l,s,u,c,d,f,m=r.residence_list,v=r.account_settings,_=r.is_dashboard;if(!m||!v)return{};var p=a(Object.keys(v).filter((function(e){return"account_opening_reason"!==e&&!!e}))),b={account_opening_reason:{supported_in:["iom","malta","maltainvest"],default_value:null!==(i=v.account_opening_reason)&&void 0!==i?i:"",rules:[["req",(0,t.localize)("Account opening reason is required")]]},salutation:{supported_in:["iom","malta","maltainvest"],default_value:null!==(n=v.salutation)&&void 0!==n?n:"",rules:[["req",(0,t.localize)("Salutation is required")]]},first_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(o=v.first_name)&&void 0!==o?o:"",rules:[["req",(0,t.localize)("First name is required")],["length",(0,t.localize)("First name should be between 2 and 50 characters."),{min:2,max:50}],["regular",(0,t.localize)("Letters, spaces, periods, hyphens, apostrophes only"),{regex:/^[a-zA-Z\s'.-]{2,50}$/}],["letter_symbol",(0,e.getErrorMessages)().letter_symbol()]]},last_name:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(l=v.last_name)&&void 0!==l?l:"",rules:[["req",(0,t.localize)("Last name is required")],["length",(0,t.localize)("Last name should be between 2 and 50 characters."),{min:2,max:50}],["regular",(0,t.localize)("Letters, spaces, periods, hyphens, apostrophes only"),{regex:/^[a-zA-Z\s'.-]{2,50}$/}],["letter_symbol",(0,e.getErrorMessages)().letter_symbol()]]},date_of_birth:{supported_in:["svg","iom","malta","maltainvest"],default_value:v.date_of_birth?(0,e.toMoment)(v.date_of_birth).format("YYYY-MM-DD"):"",rules:[["req",(0,t.localize)("Date of birth is required")],[function(t){return(0,e.toMoment)(t).isValid()&&(0,e.toMoment)(t).isBefore((0,e.toMoment)().subtract(18,"years"))},(0,t.localize)("You must be 18 years old and above.")]]},place_of_birth:{supported_in:["maltainvest","iom","malta"],default_value:v.place_of_birth?null===(s=m.find((function(e){return e.value===v.place_of_birth})))||void 0===s?void 0:s.text:"",rules:[["req",(0,t.localize)("Place of birth is required")]]},citizen:{supported_in:["iom","malta","maltainvest"],default_value:v.citizen?null===(u=m.find((function(e){return e.value===v.citizen})))||void 0===u?void 0:u.text:"",rules:[["req",(0,t.localize)("Citizenship is required")]]},phone:{supported_in:["svg","iom","malta","maltainvest"],default_value:null!==(c=v.phone)&&void 0!==c?c:"",rules:[["req",(0,t.localize)("Phone is required")],["phone",(0,t.localize)("Phone is not in a proper format.")],[function(t){var r=t.replace(/\D/g,"");return(0,e.validLength)(r,{min:9,max:35})},(0,t.localize)("You should enter {{min}}-{{max}} numbers.",{min:9,max:35})]]},tax_residence:{default_value:v.tax_residence?null===(d=m.find((function(e){return e.value===v.tax_residence})))||void 0===d?void 0:d.text:"",supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Tax residence is required")]]},tax_identification_number:{default_value:null!==(f=v.tax_identification_number)&&void 0!==f?f:"",supported_in:["maltainvest"],rules:[["req",(0,t.localize)("Tax Identification Number is required")],[function(e,t,r){return!!r.tax_residence},(0,t.localize)("Please fill in Tax residence")],[function(e,t,r){var a,i,n=r.tax_residence,o=null===(a=m.filter((function(e){return e.text===n&&e.tin_format}))[0])||void 0===a||null===(i=a.tin_format)||void 0===i?void 0:i[0];return!o||new RegExp(o).test(e)},["warn",(0,t.localize)("This Tax Identification Number (TIN) is invalid. You may continue with account creation, but to facilitate future payment processes, valid tax information will be required.")]]]},tax_identification_confirm:{default_value:!1,supported_in:["maltainvest"],rules:[["confirm",(0,t.localize)("Please confirm your tax information")]]}};return[function(){if(_){var e=["first_name","last_name","date_of_birth","phone"];return Object.keys(b).reduce((function(t,r){return e.includes(r)&&(t[r]=b[r]),t}),{})}return b}(),p]},u=function(e,t){var r=t.real_account_signup_target;return["malta","iom"].includes(r)&&e.tax_residence&&e.tax_residence.rules.shift(),e};const c=function(a,i){var n=a.upgrade_info,o=a.real_account_signup_target,l=a.residence_list,c=a.account_settings,d=arguments.length>2&&void 0!==arguments[2]&&arguments[2],f=s({residence_list:l,account_settings:c,is_dashboard:d}),m=r(f,2),v=m[0],_=m[1];return{header:{active_title:d?(0,t.localize)("A few personal details"):(0,t.localize)("Complete your personal details"),title:d?(0,t.localize)("PERSONAL"):(0,t.localize)("Personal details")},body:i,form_value:(0,e.getDefaultFields)(o,v),props:{validate:(0,e.generateValidationFunction)(o,u(v,{real_account_signup_target:o})),is_svg:"svg"===(null==n?void 0:n.can_upgrade_to),account_opening_reason_list:[{text:(0,t.localize)("Hedging"),value:"Hedging"},{text:(0,t.localize)("Income Earning"),value:"Income Earning"},{text:(0,t.localize)("Speculative"),value:"Speculative"}],salutation_list:[{label:(0,t.localize)("Mr"),value:"Mr"},{label:(0,t.localize)("Ms"),value:"Ms"}],disabled_items:_},passthrough:["residence_list","is_fully_authenticated"],icon:"IcDashboardPersonalDetails"}}})(),n.default})()}));