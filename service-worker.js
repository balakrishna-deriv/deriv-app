/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-6ad7267b'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/css/core.chunk.account-signup-modal.020c6fc85db4621428a2.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.complaints-policy.910e70714d90c104b90f.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.set-residence-modal.3878c29db0c68440cf97.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.trader~account_dist_account_css_reset-trading-password-modal_css_e0dafe2b.15d2a40d139e511a9b36.css",
    "revision": null
  }, {
    "url": "/css/core.main~A.61dbe0f5bd7996ac4100.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~c.c7074606c3c2e9081d54.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_a.f8763fb68c31b823f1c8.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_c.853d4b0b2afbe79e0c69.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_l.81b89ed12ea0c6661027.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~s.6222db0df985512aa301.main.css",
    "revision": null
  }, {
    "url": "/css/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-113c25.505d413c34558ce88a17.main.css",
    "revision": null
  }, {
    "url": "/favicon.ico",
    "revision": "0cb8c9c65c9adde7eec4f6f79e2f4076"
  }, {
    "url": "/js/core.account-info.5497513e673b6b8806b1.js",
    "revision": null
  }, {
    "url": "/js/core.account-signup-modal.fa1ba949b9954be502cf.js",
    "revision": null
  }, {
    "url": "/js/core.account.41bfeab25aa3e304501a.js",
    "revision": null
  }, {
    "url": "/js/core.bot.35137b5022e8f1891212.js",
    "revision": null
  }, {
    "url": "/js/core.cashier.f0500ba6516e71a4b534.js",
    "revision": null
  }, {
    "url": "/js/core.close-mx-mlt-account-modal.2ef0f326eaab056bf53d.js",
    "revision": null
  }, {
    "url": "/js/core.complaints-policy.abfdb9f5be30c477c424.js",
    "revision": null
  }, {
    "url": "/js/core.dashboard~Modules_Dashboard_d.965f0ff3ce80953c6ada.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_C.5a11b4577bc80be15a44.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Components_E.031b04670bfb0c645d68.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Cons.5417860658daea9b1361.js",
    "revision": null
  }, {
    "url": "/js/core.main~As.efa259e92298f5d609e9.js",
    "revision": null
  }, {
    "url": "/js/core.main~Se.530f45267dac6bee160f.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_b.ba262a17a37235b0ade3.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_m.a56161c0597c05d830fb.js",
    "revision": null
  }, {
    "url": "/js/core.main~U.7a7f6df40d60c19390b8.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_a.961f7d6345c2a03ff8f6.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_account-limits_js_501e634c.f7ab2243fb8b0c983aec.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_address-details_js_0928415f.7774805fb915afc668ce.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_api-token_js_a71678f7.2102090f62c1cc82366b.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_currency-selector_js_f2f9c8d9.c591c0465a3abc7678bd.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_financial-details_js_0e7eaa58.84df9374b7546bf089c7.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_personal-details_js_21b2d6f5.39434393ad50299a2661.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_self-exclusion_js_6be4b9cc.7317a49762c27051709a.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_terms-of-use_js_d9e09153.6d888fb3ab6cda470943.js",
    "revision": null
  }, {
    "url": "/js/core.main~c.26e1e2019d3698b8619b.js",
    "revision": null
  }, {
    "url": "/js/core.main~cashier_dist_cashier_js_cashier-store_js_77e8332f.b06ec704e6d6ce643b4a.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_a.ccae061a9751a2f93e26.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_c.c1902b49b4744038bb2e.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_l.9ff2e14958c9e4c07cbf.js",
    "revision": null
  }, {
    "url": "/js/core.main~s.6ac8d6fda24e0bab5ba1.js",
    "revision": null
  }, {
    "url": "/js/core.reality-check-modal.3c50c58f21062ceb5632.js",
    "revision": null
  }, {
    "url": "/js/core.reset-or-unlink-password-modal.19ac700c70ebfb539d7c.js",
    "revision": null
  }, {
    "url": "/js/core.reset-password-modal.f5045e192a490c4999f6.js",
    "revision": null
  }, {
    "url": "/js/core.set-residence-modal.617730b294d0aeaefad3.js",
    "revision": null
  }, {
    "url": "/js/core.settings-language.f8be34a0159beb8d1e84.js",
    "revision": null
  }, {
    "url": "/js/core.settings-theme.7294ffb7af89dd38ade5.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_c.f51b4163643201099a8a.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_js_p.982fa0053070e6b384a4.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_js_reset-trading-password-modal_js_ff517517.7ecbdd4d6ee0d8059f28.js",
    "revision": null
  }, {
    "url": "/js/core.trader~trader_dist_trader_js_trader_js_4e59f282.d8d029f0f64c4f79dadb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_attr-accept_dist_es_index_js-node_modules_babel-polyfill_lib_index_js-no-f681a3.08cd2e02c4c583323fed.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_frequency_lists_js.6314af75fb93509061cc.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_main_js.3a05d03cce725e083ad0.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_core-js_fn_regexp_escape_js-node_modules_core-js_shim_js-node_modules_cr-1e24ef.c0b0d14f0ba91e1df616.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-113c25.f1949b5de0a6dde08a80.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_event-source-polyfill_src_eventsource_js-node_modules_extend_index_js-no-fba8d5.af2e65a6ae5e05c13067.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_file-selector_dist_es5_index_js-node_modules_focus-lock_dist_es2015_inde-232aed.54fc4e0ee74af0cfeb2b.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_html-escaper_esm_index_js-node_modules_html-parse-stringify_dist_html-pa-7ef592.df302d1760063ebd31c7.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_is-callable_index_js-node_modules_is-date-object_index_js-node_modules_i-ae07a7.9ffd65670d4b7b7d4b38.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_mobx-react_dist_mobxreact_esm_js.7f175c41e30414e662d4.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_moment_moment_js.76690f1c1a7ac8f7cb6f.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_object-assign_index_js-node_modules_object-inspect_index_js-node_modules-a2e9f6.61adc0a8458097336b95.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_promise-polyfill_src_index_js-node_modules_prop-types_index_js.5c4dd3223275beba1ee9.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_raf_index_js-node_modules_react-content-loader_dist_react-content-loader-574c93.17c2e0830fd83b81935c.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-lifecycles-compat_react-lifecycles-compat_es_js-node_modules_react-4a5024.23da4274723ca1a007eb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-router-dom_esm_react-router-dom_js-node_modules_react-swipeable_es-5aae27.278de9f78dde828beaae.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_CSSTransition_js-node_modules_react-transitio-85c8d7.259be7f9880d6fe824bd.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_index_js.c82e77b566ed04920c9a.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react_index_js.b704f78ef2abc20ca4ea.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_rooks_use-mutation-observer_lib_index_esm_js-node_modules_scheduler_inde-a1a9fe.f95c2826c9ad889be437.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_scroll-smooth_dist_index_js-node_modules_scrollparent_scrollparent_js-no-7b71e5.882481a3bdd928f24856.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_web-push-notifications_lib_index_js.0b27a6a46326bdb2fa4f.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Ap.87c62d67809833175203.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_cfds_svg_af25ac66.1a71e744aad539675cd1.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options-mobile_svg_a765406b.746837f1f5e1f09b43e3.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options_svg_6a6a8cad.807227e37900ca345fbf.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers-mobile_svg_48db1f53.9b6d542e4b970ac5a38c.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers_svg_67df4c4b.0424adfe4efa50488187.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure-mobile_svg_9ad91f0b.b53d581de5280e10de8e.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure_svg_a469acfa.2e56a368d9cc878795a8.js",
    "revision": null
  }, {
    "url": "/public/images/app/header/dbot-logo.svg",
    "revision": "74dd603772623201c277552d07db9dea"
  }, {
    "url": "/public/images/app/header/dmt5-logo.svg",
    "revision": "bb9d72a69387257a410f35d42763287d"
  }, {
    "url": "/public/images/app/header/dtrader-logo.svg",
    "revision": "e0d36a7365f13540be65f2ba83781f83"
  }, {
    "url": "/public/images/common/404.png",
    "revision": "b2fd89fd64d75b5b75bb7e75f2bb9029"
  }, {
    "url": "/public/images/common/close_account_banner.png",
    "revision": "47457964f57828ac882a49dcd4009a1d"
  }, {
    "url": "/public/images/common/derivgo_banner.png",
    "revision": "cfa6bac9d229ecf1a60adcf0f9c283f9"
  }, {
    "url": "/public/images/common/dp2p_banner.png",
    "revision": "efbd723ab548be783bb6411d18cf168a"
  }, {
    "url": "/public/images/common/ke_alien_card.png",
    "revision": "8fc3d3345db92d1333e59a72ba5be769"
  }, {
    "url": "/public/images/common/ke_national_identity_card.png",
    "revision": "3d54bcbb6a019c272e28b15601774a2a"
  }, {
    "url": "/public/images/common/ke_passport.png",
    "revision": "d111da0604e97583feb278a206c8c5c3"
  }, {
    "url": "/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",
    "revision": "8b90a2d122bd63b19b2987d8fca2c75d"
  }, {
    "url": "/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",
    "revision": "cc6cdd9391b053108005c72f5dcc3a57"
  }, {
    "url": "/public/images/common/ng_drivers_license.png",
    "revision": "ad0c31da5da08e640308d2ea3447b681"
  }, {
    "url": "/public/images/common/ng_nin_slip.png",
    "revision": "d743586bddc5ddd91e0bb820f0718597"
  }, {
    "url": "/public/images/common/ng_voter_id.png",
    "revision": "47f0de9fd4bf1da1b9bda784889d7fd0"
  }, {
    "url": "/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",
    "revision": "d3de1dd75990ffc283952ec5e747d03c"
  }, {
    "url": "/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",
    "revision": "f4e868a5a4c6bdab25fab2aaa04dbac5"
  }, {
    "url": "/public/images/common/za_national_identity_card.png",
    "revision": "48c0447163401fe1d2705072a7f1c9e8"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-114.png",
    "revision": "effff3cb7c7aa7890a0f613252d40b8c"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-120.png",
    "revision": "30ea8aae4db71e707571a615a1207462"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-144.png",
    "revision": "1fbf7ddfba9aa060af026c6856ffec44"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-152.png",
    "revision": "816388a881453a30d4c2b2711fa05e64"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-180.png",
    "revision": "a8db9d4eb2e09a4357ecd6a87a1dd6d9"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-57.png",
    "revision": "535f09e679b29d21c3c5b9d6447d2585"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-60.png",
    "revision": "56a21b5a2b088cbcf26912c17061b612"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-72.png",
    "revision": "6786ed4ef1e2e96e3d4edebc3be12fd5"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-76.png",
    "revision": "796a1bbc9a1a6ebdf0a002af495f9233"
  }, {
    "url": "/public/images/favicons/favicon-16.png",
    "revision": "8cf977893d6011fc63021bb7ce461544"
  }, {
    "url": "/public/images/favicons/favicon-160.png",
    "revision": "45fe97d84d1923f3e05626ea79971262"
  }, {
    "url": "/public/images/favicons/favicon-192.png",
    "revision": "3975b58ec899147249328917c81a90f4"
  }, {
    "url": "/public/images/favicons/favicon-32.png",
    "revision": "5bf792f88750e72e5e5ed56fc96c6efb"
  }, {
    "url": "/public/images/favicons/favicon-96.png",
    "revision": "bbaa020b9ae1944f52a684c311edda66"
  }, {
    "url": "/public/images/favicons/favicon.ico",
    "revision": "0cb8c9c65c9adde7eec4f6f79e2f4076"
  }, {
    "url": "/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",
    "revision": "20ad1e2992e66ccbba6c61f2e9079be0"
  }, {
    "url": "/public/sprites/cashier.fc27bfcd5a3e8e0a2d2ffe74ae797e0d.svg",
    "revision": "e511f5dcb9dca4f2cef7659855a3888a"
  }, {
    "url": "/public/sprites/common.d434b547b146671b277028915f2c63ae.svg",
    "revision": "6b0a02b60cbe2767c47170bf9d1de237"
  }, {
    "url": "/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",
    "revision": "b505df6ba2e73a30257f3ccb7e1af7e1"
  }, {
    "url": "/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",
    "revision": "3955f98d0403f371acffa892627a39c6"
  }, {
    "url": "/public/sprites/dashboard.1416f37be58e2bd4617691820715c53b.svg",
    "revision": "05ff54d36b55c456f529b2edaf1fd83f"
  }, {
    "url": "/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",
    "revision": "177fb07c55e16c9e2f392e73fca70a89"
  }, {
    "url": "/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",
    "revision": "0b6be63adf18362585e1f439d7d20bae"
  }, {
    "url": "/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",
    "revision": "c7c45ecc8d96bafbcd71b31389e3d078"
  }, {
    "url": "/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",
    "revision": "be90e5e9d25a16c5ebabf8c6b698dd57"
  }, {
    "url": "/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",
    "revision": "d8505022d6f871323ddb92c18208246a"
  }, {
    "url": "/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",
    "revision": "04d969ea5b62d0ad45915b5ace954021"
  }, {
    "url": "/public/sprites/underlying.2c20ddec26f1393de401939ec8967e1c.svg",
    "revision": "5d71ad1dad2983330f5f2e0202f27c14"
  }, {
    "url": "/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",
    "revision": "a385d07b496daa519f7d61ca8cda77df"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
