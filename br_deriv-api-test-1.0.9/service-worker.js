if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const b=e=>r(e,c),l={module:{uri:c},exports:d,require:b};i[c]=Promise.all(s.map((e=>l[e]||b(e)))).then((e=>(a(...e),d)))}}define(["./workbox-3ef4a889"],(function(e){"use strict";importScripts("https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/br_deriv-api-test-1.0.9/css/core.5119.fd58fd5cde3777f8ea66.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.chunk.account-signup-modal.329e70dd3554e9f6c89b.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.chunk.complaints-policy.f7da2a996b45a3de793e.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.chunk.set-residence-modal.de8efe679a545c1074fa.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.chunk.trader~bde52cb3.2cc3c23bb16434c2ac95.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~07ff1e00.507e7a118ba7fa0c7b4c.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~182f79bf.606f2071cd82490837d0.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~352d95fa.31d6cfe0d16ae931b73c.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~703a1da7.a718c4d04c21976d41e9.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~7e76c2e1.c627b5ad9f66ee276f98.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~9a8b795a.9603dee1058fe5ae74ad.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/css/core.main~d5ef20ee.69fe2ff389d42d19d422.main.css",revision:null},{url:"/br_deriv-api-test-1.0.9/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/br_deriv-api-test-1.0.9/js/core.16.b6e6ddc0ce8bbec0f11c.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.16.b6e6ddc0ce8bbec0f11c.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/br_deriv-api-test-1.0.9/js/core.1783.e023898d7ba116fa6097.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.204.8b7a19d8f18af4177488.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.204.8b7a19d8f18af4177488.js.LICENSE.txt",revision:"c74e4063dd4a8c60ce82963c023a070e"},{url:"/br_deriv-api-test-1.0.9/js/core.3190.7d76931ac4455b1d416d.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.3806.e4c91008fba2f25d08fd.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.3806.e4c91008fba2f25d08fd.js.LICENSE.txt",revision:"8e7fa176b006150306288bd092a696c0"},{url:"/br_deriv-api-test-1.0.9/js/core.4162.62fc9504d1fe375c0f94.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.4162.62fc9504d1fe375c0f94.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/br_deriv-api-test-1.0.9/js/core.4400.a33b556d1309c92d7009.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.4551.ddb94c0826502ade4da4.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.4551.ddb94c0826502ade4da4.js.LICENSE.txt",revision:"411548f347b07fd9b880024b1215db1d"},{url:"/br_deriv-api-test-1.0.9/js/core.5119.f897f19a8fa5b861a7ff.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.5119.f897f19a8fa5b861a7ff.js.LICENSE.txt",revision:"e3e72c23d71e5ff691d24439a3cf6e69"},{url:"/br_deriv-api-test-1.0.9/js/core.516.314933f9f0a3944d6817.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.516.314933f9f0a3944d6817.js.LICENSE.txt",revision:"caa639c0a9c790606af088aa1f8f5c26"},{url:"/br_deriv-api-test-1.0.9/js/core.5921.77b56833addcbe063cde.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.6054.d6773bc01cc24fc15eb5.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.6054.d6773bc01cc24fc15eb5.js.LICENSE.txt",revision:"05efa0f2ef59b13b6cb1cae8031f1c52"},{url:"/br_deriv-api-test-1.0.9/js/core.6579.139143baac67467419cf.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.7598.ea6b032631522923451a.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.7598.ea6b032631522923451a.js.LICENSE.txt",revision:"9048b1757255eadd33395e6e79746ece"},{url:"/br_deriv-api-test-1.0.9/js/core.8605.3cd0d4bb6c265d54c667.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.8605.3cd0d4bb6c265d54c667.js.LICENSE.txt",revision:"52d07faf3fab71c4ad7e9f1a3a00aa4f"},{url:"/br_deriv-api-test-1.0.9/js/core.9268.37bae2bbe31b0362d475.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.9273.159039eb75886abb5e6b.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.9346.fc3ee9104bd4478c3446.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.9346.fc3ee9104bd4478c3446.js.LICENSE.txt",revision:"e81688a9cf3aa8a7481b976f81916512"},{url:"/br_deriv-api-test-1.0.9/js/core.9554.8fc8f50edc8ccc223519.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.9554.8fc8f50edc8ccc223519.js.LICENSE.txt",revision:"a16bc6da978d0d0e93239b2ef9f7d540"},{url:"/br_deriv-api-test-1.0.9/js/core.9956.48f3d59e4c9d89b6e113.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.9956.48f3d59e4c9d89b6e113.js.LICENSE.txt",revision:"c47fb89f944fc413937f1d857df6495a"},{url:"/br_deriv-api-test-1.0.9/js/core.account-info.c158695ade6910b6d5a0.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.account-signup-modal.d69836367271120ef3da.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.account.e731b88924f1bc4e308c.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.bot.20f00b7572ad3cff90d9.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.cashier.1fa050a73a304c011f60.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.close-mx-account-modal.28a98b67d228506c2ff6.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.complaints-policy.4a4ece4feaedd49451b9.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.dashboard~18520c0a.3947aee3e7419121ab60.js.LICENSE.txt",revision:"58b030facc5f39500ce525eca1e3017e"},{url:"/br_deriv-api-test-1.0.9/js/core.dashboard~52bcb5ca.844bb439f3edc2aae1fc.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~07ff1e00.b88da5ba688b2c156756.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~182f79bf.80491eb462fed897c3f8.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~1a408eaf.731ab6ead500a69d2416.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~28ed2440.7079a42e00654c8c952a.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~352d95fa.5e3f51e22806f6e82a09.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~4e43d1b7.0477a47188fec19bf5b9.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~6b4cb1b5.11956ee762192a2cc3d2.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~703a1da7.145d74dc4310f637da70.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~7e76c2e1.158d7b3cca3293fafdc9.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~85fa0c87.eecc1ddcc999436773b6.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~9a79028c.70b585fae2a021dfdb54.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~9a8b795a.7606adb165e1fbb12a75.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~a8149675.f738c408ea64a3270c31.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~c3144fc0.29bcf3df52e132b73a80.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~cb888b8a.29a086ddde0980b48225.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~cf448228.01fb743d4357fd4530b4.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.main~fc854bfa.59d7e7bfd01de4c1f042.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.reality-check-modal.de35a0958b7d6f033923.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.reset-or-unlink-password-modal.14e8e0c10bd9a66a8076.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.reset-password-modal.5a494e2d2e968a15e266.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.set-residence-modal.17b904eb87f9c24bd36e.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.settings-language.6632ff381008bed6f547.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.settings-theme.4ec0a2cc07883be2f537.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.trader~3b8e11e6.d5bfdaa970cb16098d08.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.trader~bde52cb3.f1ba7d5c4e12e6cd8b29.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~5c04ba06.19589ad0b79d3d979fdc.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~734a261b.824cc57c0c4168729249.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~7a15df7a.c40bc1311cb5254aae48.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~9624755f.26d85097d4c391fd8b6c.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~b407d6a8.0677a31b0e6d1aac87c5.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~e0489f8e.39f2c0e6a5bb1aa4f27e.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~f0b1ccd8.2f152b8e32a33280f330.js",revision:null},{url:"/br_deriv-api-test-1.0.9/js/core.welcome-modal~f53eb8c1.f62edb30c147d90b4663.js",revision:null},{url:"/br_deriv-api-test-1.0.9/public/images/app/header/dbot-logo.svg",revision:"74dd603772623201c277552d07db9dea"},{url:"/br_deriv-api-test-1.0.9/public/images/app/header/dmt5-logo.svg",revision:"bb9d72a69387257a410f35d42763287d"},{url:"/br_deriv-api-test-1.0.9/public/images/app/header/dtrader-logo.svg",revision:"e0d36a7365f13540be65f2ba83781f83"},{url:"/br_deriv-api-test-1.0.9/public/images/common/404.png",revision:"b2fd89fd64d75b5b75bb7e75f2bb9029"},{url:"/br_deriv-api-test-1.0.9/public/images/common/close_account_banner.png",revision:"47457964f57828ac882a49dcd4009a1d"},{url:"/br_deriv-api-test-1.0.9/public/images/common/derivgo_banner.png",revision:"cfa6bac9d229ecf1a60adcf0f9c283f9"},{url:"/br_deriv-api-test-1.0.9/public/images/common/dp2p_banner.png",revision:"efbd723ab548be783bb6411d18cf168a"},{url:"/br_deriv-api-test-1.0.9/public/images/common/ke_alien_card.png",revision:"8fc3d3345db92d1333e59a72ba5be769"},{url:"/br_deriv-api-test-1.0.9/public/images/common/ke_national_identity_card.png",revision:"3d54bcbb6a019c272e28b15601774a2a"},{url:"/br_deriv-api-test-1.0.9/public/images/common/ke_passport.png",revision:"d111da0604e97583feb278a206c8c5c3"},{url:"/br_deriv-api-test-1.0.9/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",revision:"8b90a2d122bd63b19b2987d8fca2c75d"},{url:"/br_deriv-api-test-1.0.9/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",revision:"cc6cdd9391b053108005c72f5dcc3a57"},{url:"/br_deriv-api-test-1.0.9/public/images/common/ng_drivers_license.png",revision:"ad0c31da5da08e640308d2ea3447b681"},{url:"/br_deriv-api-test-1.0.9/public/images/common/ng_nin_slip.png",revision:"d743586bddc5ddd91e0bb820f0718597"},{url:"/br_deriv-api-test-1.0.9/public/images/common/ng_voter_id.png",revision:"47f0de9fd4bf1da1b9bda784889d7fd0"},{url:"/br_deriv-api-test-1.0.9/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",revision:null},{url:"/br_deriv-api-test-1.0.9/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",revision:null},{url:"/br_deriv-api-test-1.0.9/public/images/common/za_national_identity_card.png",revision:"48c0447163401fe1d2705072a7f1c9e8"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-114.png",revision:"effff3cb7c7aa7890a0f613252d40b8c"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-120.png",revision:"30ea8aae4db71e707571a615a1207462"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-144.png",revision:"1fbf7ddfba9aa060af026c6856ffec44"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-152.png",revision:"816388a881453a30d4c2b2711fa05e64"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-180.png",revision:"a8db9d4eb2e09a4357ecd6a87a1dd6d9"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-57.png",revision:"535f09e679b29d21c3c5b9d6447d2585"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-60.png",revision:"56a21b5a2b088cbcf26912c17061b612"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-72.png",revision:"6786ed4ef1e2e96e3d4edebc3be12fd5"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/apple-touch-icon-76.png",revision:"796a1bbc9a1a6ebdf0a002af495f9233"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/favicon-16.png",revision:"8cf977893d6011fc63021bb7ce461544"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/favicon-160.png",revision:"45fe97d84d1923f3e05626ea79971262"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/favicon-192.png",revision:"3975b58ec899147249328917c81a90f4"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/favicon-32.png",revision:"5bf792f88750e72e5e5ed56fc96c6efb"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/favicon-96.png",revision:"bbaa020b9ae1944f52a684c311edda66"},{url:"/br_deriv-api-test-1.0.9/public/images/favicons/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/br_deriv-api-test-1.0.9/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",revision:"20ad1e2992e66ccbba6c61f2e9079be0"},{url:"/br_deriv-api-test-1.0.9/public/sprites/cashier.fc27bfcd5a3e8e0a2d2ffe74ae797e0d.svg",revision:"e511f5dcb9dca4f2cef7659855a3888a"},{url:"/br_deriv-api-test-1.0.9/public/sprites/common.00fd6367b4c3950bd4c31ccd68f82612.svg",revision:"5bf540b50a8bfb7ab22ab823b895bf79"},{url:"/br_deriv-api-test-1.0.9/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",revision:"b505df6ba2e73a30257f3ccb7e1af7e1"},{url:"/br_deriv-api-test-1.0.9/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",revision:"3955f98d0403f371acffa892627a39c6"},{url:"/br_deriv-api-test-1.0.9/public/sprites/dashboard.1416f37be58e2bd4617691820715c53b.svg",revision:"05ff54d36b55c456f529b2edaf1fd83f"},{url:"/br_deriv-api-test-1.0.9/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",revision:"177fb07c55e16c9e2f392e73fca70a89"},{url:"/br_deriv-api-test-1.0.9/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",revision:"0b6be63adf18362585e1f439d7d20bae"},{url:"/br_deriv-api-test-1.0.9/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",revision:"c7c45ecc8d96bafbcd71b31389e3d078"},{url:"/br_deriv-api-test-1.0.9/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",revision:"be90e5e9d25a16c5ebabf8c6b698dd57"},{url:"/br_deriv-api-test-1.0.9/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",revision:"d8505022d6f871323ddb92c18208246a"},{url:"/br_deriv-api-test-1.0.9/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",revision:"04d969ea5b62d0ad45915b5ace954021"},{url:"/br_deriv-api-test-1.0.9/public/sprites/underlying.2c20ddec26f1393de401939ec8967e1c.svg",revision:"5d71ad1dad2983330f5f2e0202f27c14"},{url:"/br_deriv-api-test-1.0.9/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",revision:"a385d07b496daa519f7d61ca8cda77df"}],{}),e.cleanupOutdatedCaches()}));
