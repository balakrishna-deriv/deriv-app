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
    "url": "/css/core.chunk.trader~account_dist_account_css_reset-trading-password-modal_css_cd20b9c8.15d2a40d139e511a9b36.css",
    "revision": null
  }, {
    "url": "/css/core.main~A.6cf44e0241fe256d342f.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~c.309bcf57cd9452f54911.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_a.306581bd6495bda215c2.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_c.0fa47b6eb7d428d2abc8.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_l.e50d52f35da4a19c251b.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~s.0160a22f007793aa96da.main.css",
    "revision": null
  }, {
    "url": "/css/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_define-properties_ind-32e1f0.53d59d3e22b9f9bccdca.main.css",
    "revision": null
  }, {
    "url": "/favicon.ico",
    "revision": "0cb8c9c65c9adde7eec4f6f79e2f4076"
  }, {
    "url": "/js/core.account-info.74803efc64f14c18bf64.js",
    "revision": null
  }, {
    "url": "/js/core.account-signup-modal.0bf20dd54373172ae1a1.js",
    "revision": null
  }, {
    "url": "/js/core.account.fdcebcb3f570d79e9c1f.js",
    "revision": null
  }, {
    "url": "/js/core.bot.327b2bed2c068d2a00a4.js",
    "revision": null
  }, {
    "url": "/js/core.cashier.4538ead4163bca3c8efd.js",
    "revision": null
  }, {
    "url": "/js/core.close-mx-mlt-account-modal.0cd318d88ca63b88f9b8.js",
    "revision": null
  }, {
    "url": "/js/core.complaints-policy.f8d60d14ccb2661c7478.js",
    "revision": null
  }, {
    "url": "/js/core.dashboard~Modules_Dashboard_d.161a32cb8a2071684301.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_C.b3a65377c876002d7ab7.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Components_E.5c2694beb46a263b6cf1.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Cons.2dbdc9bdec7e9b579a06.js",
    "revision": null
  }, {
    "url": "/js/core.main~As.46d95bc6db18bfc88e6e.js",
    "revision": null
  }, {
    "url": "/js/core.main~Se.0b71fa7636dd50f80bc8.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_b.567490c58c1795eecd9a.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_m.a14ce3ca7e8f94ff1d9d.js",
    "revision": null
  }, {
    "url": "/js/core.main~U.bcda53e1a89139b3ac68.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_a.b38bf0997e36a20bbebd.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_account-limits_js_501e634c.f263ee1a50c8db323b17.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_address-details_js_0928415f.f30f1e6232349f1f7fe0.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_api-token_js_a71678f7.38f1d80a4dbadeb8f6ac.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_currency-selector_js_f2f9c8d9.0bd47ab30d7ee4227478.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_financial-details_js_0e7eaa58.78882f2944efa79f0a57.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_personal-details_js_21b2d6f5.58ab14b93daaa4e40bc3.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_self-exclusion_js_6be4b9cc.c7559ff19877ca0222ac.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_terms-of-use_js_d9e09153.ee71893178d513acdc4a.js",
    "revision": null
  }, {
    "url": "/js/core.main~c.9e374296db0cd573fd4a.js",
    "revision": null
  }, {
    "url": "/js/core.main~cashier_dist_cashier_js_cashier-store_js_77e8332f.5b350564d12ec3484117.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_a.ead1b1996c32e484f247.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_c.b6efeb3cf62a076e9814.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_l.9f974592483428a1aeac.js",
    "revision": null
  }, {
    "url": "/js/core.main~s.af4c64b3aa48ad068bf0.js",
    "revision": null
  }, {
    "url": "/js/core.reality-check-modal.8044bad13a05cbf9cb7e.js",
    "revision": null
  }, {
    "url": "/js/core.reset-or-unlink-password-modal.b29d650211b82d36880c.js",
    "revision": null
  }, {
    "url": "/js/core.reset-password-modal.80ddfad053201bf18fd3.js",
    "revision": null
  }, {
    "url": "/js/core.set-residence-modal.36f0ad598fafa6b0ee65.js",
    "revision": null
  }, {
    "url": "/js/core.settings-language.af91c97382edffc8bc09.js",
    "revision": null
  }, {
    "url": "/js/core.settings-theme.e819158d8444add02ba5.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_c.79aaab072cb44a1952bd.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_js_p.e520e49a505903cf5121.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_js_reset-trading-password-modal_js_ff517517.6bdf0d2c235919fccf4d.js",
    "revision": null
  }, {
    "url": "/js/core.trader~trader_dist_trader_js_trader_js_4e59f282.be7790f84690ba2f268e.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_babel_runtime_helpers_esm_classCallCheck_js-components_node_m-223415.f63c6c9fb43348e9f4db.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_contentpass_zxcvbn_lib_frequency_lists_js.8af9dd145de02a7ca24e.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_contentpass_zxcvbn_lib_main_js.42e8b4eafbb8838f9be9.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_performance-now_lib_performance-now_js-components_node_module-97859d.aad13ce78e8faf5bc5b2.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_raf_index_js-components_node_modules_react-content-loader_dis-579ba7.252b7ee8d6bf50d58687.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_react-lifecycles-compat_react-lifecycles-compat_es_js-compone-d9fb73.a1988d03ab56c16a3afc.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_rooks_use-mutation-observer_lib_index_esm_js-components_node_-5c4937.e242aa5d14adf8f979da.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-components_node_modules_styled-components_dist_styled-components_browser_esm_js-compo-4875f3.da9098e2be7cdca62cbb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_babel_runtime_helpers_esm_classCallCheck_js-node_modules_babel_runtime_h-14e375.d7bbccb6a005e98813e6.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_classnames_index_js-node_modules_core-js_fn_regexp_escape_js-node_module-d0a25b.0a938eebc4a668a3193f.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_define-properties_ind-32e1f0.bb3e5c130d28ca91b2c4.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-charts_dist_smartcharts_js.3cb09f0bbfc49bf16822.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_extend_index_js-node_modules_formik_dist_formik_esm_js-node_modules_get--9b0fd1.144f929c44c0bad486a7.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_hoist-non-react-statics_dist_hoist-non-react-statics_cjs_js-node_modules-6325e9.76b6764d3fca951437f5.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_is-callable_index_js-node_modules_is-date-object_index_js-node_modules_i-a65692.180871c0dce827e322c8.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_mobx-react_dist_mobxreact_esm_js.87b4d875089a458dda75.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_moment_moment_js.2b343aa5843cc44c1241.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_object-inspect_index_js-node_modules_object-keys_index_js-node_modules_o-3f8420.12aa39a5cf70042fb16a.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-fast-compare_index_js-node_modules_react-i18next_dist_es_Trans_js--e56855.c5c9f6dcf673e8130e8e.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_index_js.d54ad15d43b684d1aa4f.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react_index_js.3601c738eaa45b80a31c.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_scheduler_index_js-node_modules_scheduler_tracing_js-node_modules_tiny-i-d74c07.9178beb0b6c81d1860d0.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_web-push-notifications_lib_index_js.b23f2bd61f1ceec18cef.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Ap.355265752ccad2f571d9.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_cfds_svg_af25ac66.f5ae4bce4b6e7a30efdb.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options-mobile_svg_a765406b.183a67b6aa6cec801c56.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options_svg_6a6a8cad.c437c56a6f6ff6d841bb.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers-mobile_svg_48db1f53.41820f31f50e1ccc7849.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers_svg_67df4c4b.848e7fa7dee65b5616b1.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure-mobile_svg_9ad91f0b.bfdf67f10283b2247a6a.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure_svg_a469acfa.cca5f05f9b84f7bbef0a.js",
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
