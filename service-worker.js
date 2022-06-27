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
define(['./workbox-461a00f8'], (function (workbox) { 'use strict';

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
    "url": "/appstore/js/appstore.appstore.651b7b47e33523736637.js",
    "revision": "cf235809dd7d2b06e462065e8d3eec95"
  }, {
    "url": "/appstore/js/appstore.vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-9a2d27.6471bb0a1f7d6a37d7d9.js",
    "revision": "bacfb981b02dcc41b09aae2e529720d4"
  }, {
    "url": "/appstore/js/index.js",
    "revision": "5770732d6aab12dbb9c9c16c740f366d"
  }, {
    "url": "/cfd/css/cfd.cfd-app.8c3af5a8e2a08b17ee93.css",
    "revision": "609d0bd771388c68c4b266e55812f00d"
  }, {
    "url": "/cfd/js/cfd.404.bedbbbd32e89c9ef566d.js",
    "revision": "6815aaaea3cb9b179173f0b7959080fe"
  }, {
    "url": "/cfd/js/cfd.cfd-app.b9ceee9a88ca1970583c.js",
    "revision": "39bfaaac344c5b78161545365db7b821"
  }, {
    "url": "/cfd/js/cfd.js",
    "revision": "11009f9eb95afe9816741484f5ffdfd5"
  }, {
    "url": "/cfd/js/cfd.vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-611d03.4d87207c4cf8909cc15c.js",
    "revision": "4d34c6d23d1e6ea5117e1b7bd2a7a110"
  }, {
    "url": "/css/core.chunk.account-signup-modal.ad24b7330307616a6ae8.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.cfd~account_dist_account_css_reset-trading-password-modal_css_e0dafe2b.6f4eaff62bb21641f116.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.close-mx-mlt-account-modal.ae97e8b0c2586db536b8.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.complaints-policy.53d18a47133c1c361e4b.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.set-residence-modal.afdf6e9925f0446996ba.css",
    "revision": null
  }, {
    "url": "/css/core.main~A.fa9e3b7aac358ae84c15.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~c.c3519cd7ec97e2cd7f42.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_a.edb07228a13a4183eca1.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_c.3778d047f8cc939874a5.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_l.d1d916615d00462c0092.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~s.0ce3d9ebeb0a830f58fc.main.css",
    "revision": null
  }, {
    "url": "/css/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-a0d54e.e3d77da6e7a574e0c178.main.css",
    "revision": null
  }, {
    "url": "/js/core.account-info.d1914d7c2a0417dc8865.js",
    "revision": null
  }, {
    "url": "/js/core.account-signup-modal.90db4cf85d33ab53d4b0.js",
    "revision": null
  }, {
    "url": "/js/core.account.0d3d8253c24f7884fe2c.js",
    "revision": null
  }, {
    "url": "/js/core.appstore.0900e30d0db5a8944ea4.js",
    "revision": null
  }, {
    "url": "/js/core.bot.86d345f17958e32c4423.js",
    "revision": null
  }, {
    "url": "/js/core.cashier.03a66da1b53fbf8eb3e2.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~a.5b5526fed7f6cb8065cf.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~account_dist_account_c.b96418d358b6cd26f6e6.js",
    "revision": null
  }, {
    "url": "/js/core.cfd~account_dist_account_js_reset-trading-password-modal_js_ff517517.80dc337ca01b76288ca3.js",
    "revision": null
  }, {
    "url": "/js/core.close-mx-mlt-account-modal.02c058476877b48bca55.js",
    "revision": null
  }, {
    "url": "/js/core.complaints-policy.4ae3b419552723b68fb7.js",
    "revision": null
  }, {
    "url": "/js/core.default-account_dist_account_js_sent-email-modal_js.6b011f312ed49b5b54a4.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_C.0e9f638994f65af636e5.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Components_E.ff3da70ad86506d16cad.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Cons.26a5120a156c925ee966.js",
    "revision": null
  }, {
    "url": "/js/core.main~As.5984564e01b2c1a9bbbc.js",
    "revision": null
  }, {
    "url": "/js/core.main~Se.cc498c9dd505e07582dd.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_c.a8b4a4c6ae2f65ef19fa.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_m.ea7f31a3a58ac35a58f0.js",
    "revision": null
  }, {
    "url": "/js/core.main~U.faeb24555f4765891ebf.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_a.fc8712a99dfa6dfc5148.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_account-limits_js_501e634c.8ee9801b95b6eab35347.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_address-details_js_0928415f.c2cc11dbfeff12e33393.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_api-token_js_a71678f7.feda82a338084a1ce5d0.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_currency-selector_js_f2f9c8d9.fa5808991706f92dc850.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_financial-details_js_0e7eaa58.86c3528909ae85a19208.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_personal-details_js_21b2d6f5.8dccf2a331e288661dca.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_self-exclusion_js_6be4b9cc.985ec187cbeb89768297.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_terms-of-use_js_d9e09153.5b646d210590b58419fa.js",
    "revision": null
  }, {
    "url": "/js/core.main~c.b8b77bd855c9dff9801b.js",
    "revision": null
  }, {
    "url": "/js/core.main~cashier_dist_cashier_js_cashier-store_js_77e8332f.254f7a7322d5961132c6.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_a.78a4642b66e47718eaac.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_c.3330bdde3f6074823b33.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_l.c8889c17cfd65af809d8.js",
    "revision": null
  }, {
    "url": "/js/core.main~s.0397fbf1bbeae0aaf81f.js",
    "revision": null
  }, {
    "url": "/js/core.reality-check-modal.8653653dca30db66fb82.js",
    "revision": null
  }, {
    "url": "/js/core.reset-email-modal.1fde5adfa031e0323ef3.js",
    "revision": null
  }, {
    "url": "/js/core.reset-or-unlink-password-modal.c5b915c94f8fcdc679a2.js",
    "revision": null
  }, {
    "url": "/js/core.reset-password-modal.2a6309f0468add36b5c7.js",
    "revision": null
  }, {
    "url": "/js/core.set-residence-modal.47454436f6c778264b8c.js",
    "revision": null
  }, {
    "url": "/js/core.settings-language.eaad1ce1f5636118c194.js",
    "revision": null
  }, {
    "url": "/js/core.settings-theme.1b2700241032096e1e53.js",
    "revision": null
  }, {
    "url": "/js/core.trader.5191c5b850b1f31cfce8.js",
    "revision": null
  }, {
    "url": "/js/core.update-email-modal.ae6d8cf1cf76f15995d9.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_attr-accept_dist_es_index_js-node_modules_babel-polyfill_lib_index_js-no-0a26ff.c8bdca68a696c1b8181f.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_frequency_lists_js.6314af75fb93509061cc.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_main_js.3a05d03cce725e083ad0.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_core-js_fn_regexp_escape_js-node_modules_core-js_shim_js-node_modules_cr-1e24ef.e6086a3f68d1a56cfe96.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-a0d54e.17a353c561689b993c10.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_emotion_hash_dist_hash_esm_js-node_modules_emotion_is-prop-valid_dist_is-36ab0b.9db7fe3442fb21f67ba2.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_file-selector_dist_es5_index_js-node_modules_focus-lock_dist_es2015_inde-6f23a7.18eceb8c4a77b8362ca8.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_html-escaper_esm_index_js-node_modules_html-parse-stringify_dist_html-pa-7ef592.df302d1760063ebd31c7.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_is-callable_index_js-node_modules_is-date-object_index_js-node_modules_i-2fb22e.2033b97765beec6a9cdb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_mobx-react_dist_mobxreact_esm_js.7f175c41e30414e662d4.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_moment_moment_js.aef452b86ea61092e2b4.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_object-assign_index_js-node_modules_object-inspect_index_js-node_modules-a2e9f6.61adc0a8458097336b95.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_promise-polyfill_src_index_js-node_modules_prop-types_index_js.b836b0dc31f0b5406149.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_raf_index_js-node_modules_react-content-loader_dist_react-content-loader-0730e5.f5b51b1450b41a42d492.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-lifecycles-compat_react-lifecycles-compat_es_js-node_modules_react-4a5024.23da4274723ca1a007eb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-router-dom_esm_react-router-dom_js-node_modules_react-swipeable_es-5aae27.16487dd47e04c523fb74.js",
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
    "url": "/js/core.vendors-node_modules_scroll-smooth_dist_index_js-node_modules_scrollparent_scrollparent_js-no-e650d6.c4d38903e5ce6119de7d.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_web-push-notifications_lib_index_js.12b265546434f781700d.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Ap.507b4a51f1d18bbeae17.js",
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
    "url": "/public/images/common/trustpilot_banner.png",
    "revision": "1561d90dfa4e20595ff9a3c4b3b8e239"
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
    "url": "/public/sprites/brand.56ec21e4fcb0a8bca6e62e47f572a733.svg",
    "revision": "0f6041a91b6ea16d17432bd464dd7992"
  }, {
    "url": "/public/sprites/cashier.a3d892c305d8e20905303cecd5fb2a1d.svg",
    "revision": "29854ac7a9e353f64c9c0d98df6b030b"
  }, {
    "url": "/public/sprites/common.d459a80078042e3ed2a2f2578c998305.svg",
    "revision": "5673249638a298826457f4abe4ae30d7"
  }, {
    "url": "/public/sprites/contract.614047cd51e852022a73b7f0c046e18c.svg",
    "revision": "223a5b27d5ba72945b133452e94ba8b1"
  }, {
    "url": "/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",
    "revision": "3955f98d0403f371acffa892627a39c6"
  }, {
    "url": "/public/sprites/dxtrade.d9814f9b5065ec92724af3b5a7dc1d66.svg",
    "revision": "ecfe7295e475d906786335746cc8a790"
  }, {
    "url": "/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",
    "revision": "0b6be63adf18362585e1f439d7d20bae"
  }, {
    "url": "/public/sprites/mt5.e21b32c9673248bdcd3a92c6849e7d6b.svg",
    "revision": "7c1b377d0db98a8b159c05f2e5549f8b"
  }, {
    "url": "/public/sprites/option.007808af06aed63888e0255c02b8d914.svg",
    "revision": "618bf860321a39216b254ac838676259"
  }, {
    "url": "/public/sprites/stock.73b654850474ad787a20d6770b5a69fa.svg",
    "revision": "dac92a9001f18f2ea8f23a25d6c254e9"
  }, {
    "url": "/public/sprites/tradetype.bb5fa27f165da22ad14daffcea6213e0.svg",
    "revision": "bfb97a8a82e35396e8220c2a1cd39ac9"
  }, {
    "url": "/public/sprites/underlying.637e9d34f377ca84f61655c57d00d64e.svg",
    "revision": "b4a9480b8babe6a68ce25dc4fed50f72"
  }, {
    "url": "/public/sprites/wallet.8a3b0289e2927d3f8824c107c248a919.svg",
    "revision": "3ffdd324b42bbe3b1257d575c38d6e31"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
