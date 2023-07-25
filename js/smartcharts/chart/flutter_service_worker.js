"use strict";const MANIFEST="flutter-app-manifest",TEMP="flutter-temp-cache",CACHE_NAME="flutter-app-cache",RESOURCES={"version.json":"1756499d77011c0be564a414e567db76","index.html":"31fe549a5b566a40bff63abd9bca0fb9","/":"31fe549a5b566a40bff63abd9bca0fb9","main.dart.js":"54d5c36b2c5bcf70325d0bcf2380f211","flutter.js":"6fef97aeca90b426343ba6c5c9dc5d4a","favicon.png":"5dcef449791fa27946b3d35ad8803796","manifest.json":"a06b13fcde5dfd1e240278072e116d12","assets/AssetManifest.json":"7158d0e2709af4f630669fe508190416","assets/NOTICES":"0949fc855a70cf5cb7721932b8a78465","assets/FontManifest.json":"7b2a36307916a9721811788013e65289","assets/packages/deriv_chart/assets/icons/icon_placeholder.png":"23e9167e0fd2be2b618b589ed8401a1a","assets/packages/deriv_chart/assets/icons/symbols/1hz300v.png":"90527d87c8da43c78bcad66528b09581","assets/packages/deriv_chart/assets/icons/symbols/otc_aex.png":"84ab872d7286a67f2633cbbcff89f0bb","assets/packages/deriv_chart/assets/icons/symbols/frxusdpln.png":"d980230b5ea98c9b5d002a3cb8c84c13","assets/packages/deriv_chart/assets/icons/symbols/frxnzdusd.png":"bc348f3842a0451f56bd8bb3e734204b","assets/packages/deriv_chart/assets/icons/symbols/frxusdmxn.png":"f08040e1eefd9b94d74982301d7e4713","assets/packages/deriv_chart/assets/icons/symbols/frxnzdjpy.png":"f7e9bdd69b05f1e03f0639d159d00a71","assets/packages/deriv_chart/assets/icons/symbols/frxaudchf.png":"774fdfbacb2fb4d90515ce21b60d6df2","assets/packages/deriv_chart/assets/icons/symbols/otc_ftse.png":"03f4252f41ad5a660709d6d43a799379","assets/packages/deriv_chart/assets/icons/symbols/boom1000.png":"275e3affe9199072740e6d1d96d1d7f5","assets/packages/deriv_chart/assets/icons/symbols/frxgbpchf.png":"226b953b636290e10055d14bca9b5bc0","assets/packages/deriv_chart/assets/icons/symbols/frxgbpnok.png":"b8c7d9f5574f84e68351fb8a139408f0","assets/packages/deriv_chart/assets/icons/symbols/r_50.png":"32a462d9ab4f510ba2bb48d23d20348e","assets/packages/deriv_chart/assets/icons/symbols/frxeurnzd.png":"5e6997f168d3f146c492d0eed9503b0b","assets/packages/deriv_chart/assets/icons/symbols/1hz75v.png":"d42630a1e38f8f8c3233b6e85cc38dfa","assets/packages/deriv_chart/assets/icons/symbols/rdbear.png":"b1786f16d6a49e34d5a9cb548dcc0830","assets/packages/deriv_chart/assets/icons/symbols/1hz100v.png":"86c6ae319c2bbac459d52642a42c0d37","assets/packages/deriv_chart/assets/icons/symbols/jd50.png":"9c2ae1a557664cfdb6541275b0b8759c","assets/packages/deriv_chart/assets/icons/symbols/otc_as51.png":"e728bbf9a2dfcd66cd56320857e49b95","assets/packages/deriv_chart/assets/icons/symbols/frxusdcad.png":"e8c3bf13c091879e68111700e9ec74e6","assets/packages/deriv_chart/assets/icons/symbols/crash300n.png":"bc1bd32c4a53b3341ac9bf66f869e463","assets/packages/deriv_chart/assets/icons/symbols/jd150.png":"3e60df618ae2f598dd50e0488b075861","assets/packages/deriv_chart/assets/icons/symbols/crash500.png":"eb715e454caa0be405e64320cbf75a9d","assets/packages/deriv_chart/assets/icons/symbols/crybtcusd.png":"02fb37d758a94ce064225cc50345ea93","assets/packages/deriv_chart/assets/icons/symbols/1hz25v.png":"3009a4c570587e2c3e1dc81759f12f4d","assets/packages/deriv_chart/assets/icons/symbols/otc_hsi.png":"927d54a894ba10b540a9983dff9f1187","assets/packages/deriv_chart/assets/icons/symbols/rdbull.png":"79b731e365d4a780407e9415b811c7aa","assets/packages/deriv_chart/assets/icons/symbols/frxeurcad.png":"dbfeb90340a097fac57fe24e439d57d8","assets/packages/deriv_chart/assets/icons/symbols/btcusd.png":"822ecfb1d3138c3b30c08d8de090c3b5","assets/packages/deriv_chart/assets/icons/symbols/wldusd.png":"00e205727f005f0885e3d896f87e5e7e","assets/packages/deriv_chart/assets/icons/symbols/crybnbusd.png":"372740ee2ae319f26fde7ef7a81ac359","assets/packages/deriv_chart/assets/icons/symbols/jd25.png":"40c3b57cddf1ba75eac5b38c2394bae1","assets/packages/deriv_chart/assets/icons/symbols/frxgbpjpy.png":"42bb921c4580882c07be30471ae97372","assets/packages/deriv_chart/assets/icons/symbols/otc_spc.png":"5a365f15f8180ad73077670be60fbc4c","assets/packages/deriv_chart/assets/icons/symbols/dshusd.png":"d5e83cc9d822d803830d238f28357b9b","assets/packages/deriv_chart/assets/icons/symbols/frxaudjpy.png":"605d3cdb4e33aa0730a52749583e2d62","assets/packages/deriv_chart/assets/icons/symbols/bnbusd.png":"3d5b95e1f0195528fc798ea8be00ca14","assets/packages/deriv_chart/assets/icons/symbols/wldgbp.png":"decd925f9c4071564ae41060de68e8bf","assets/packages/deriv_chart/assets/icons/symbols/otc_ssmi.png":"1561a92a36989a64f85c7221384c4957","assets/packages/deriv_chart/assets/icons/symbols/frxaudusd.png":"028051074b041db767963ab238dc3cd1","assets/packages/deriv_chart/assets/icons/symbols/r_25.png":"afcf1df622b3db9569dea6c4e03bca62","assets/packages/deriv_chart/assets/icons/symbols/frxeuraud.png":"74165ef668f66beabacb69e6e475b43d","assets/packages/deriv_chart/assets/icons/symbols/crydshusd.png":"d1b4a516dbf4bf2a01f781e4bdd340af","assets/packages/deriv_chart/assets/icons/symbols/frxgbpusd.png":"8e568a6f779c412f5cd1baf6c3e3aa5a","assets/packages/deriv_chart/assets/icons/symbols/frxeurjpy.png":"aeb0d0b3064206ade4551fb584fa28aa","assets/packages/deriv_chart/assets/icons/symbols/cryltcusd.png":"d961cacac37de35b0c6f9d4fc55b7a1a","assets/packages/deriv_chart/assets/icons/symbols/stprng.png":"2c1de68d72d7f616c62fdb0c79bed45c","assets/packages/deriv_chart/assets/icons/symbols/wldaud.png":"2fe0b5f56a4b7e10335ab45a05533f26","assets/packages/deriv_chart/assets/icons/symbols/frxeurgbp.png":"64f2f86f9299d5408e355711023eca39","assets/packages/deriv_chart/assets/icons/symbols/wldxau.png":"15d97f02978d830b0d40c5ab885d3539","assets/packages/deriv_chart/assets/icons/symbols/otc_ndx.png":"c1d2bec8ca9dc9ca8aa8205d61f447a8","assets/packages/deriv_chart/assets/icons/symbols/frxusdchf.png":"73c02e4807d10f708314a493f0e68a95","assets/packages/deriv_chart/assets/icons/symbols/ltcusd.png":"49c0bf02c99cc70f164329d4c794b884","assets/packages/deriv_chart/assets/icons/symbols/1hz50v.png":"ca1f2126d70fc86cca2ca808afba73e5","assets/packages/deriv_chart/assets/icons/symbols/frxeurusd.png":"87d65825df117aa6320059e251870c85","assets/packages/deriv_chart/assets/icons/symbols/frxgbpaud.png":"b093bacf9b6b37256cbb7454d5c0c618","assets/packages/deriv_chart/assets/icons/symbols/frxbrousd.png":"db8cdc3fb067e7ede3c34671f4729c06","assets/packages/deriv_chart/assets/icons/symbols/1hz200v.png":"48e2e5414fc64e2b1bdb6e9d4f898d66","assets/packages/deriv_chart/assets/icons/symbols/jd10.png":"476427fae7af1535682199b14a0637e6","assets/packages/deriv_chart/assets/icons/symbols/frxusdnok.png":"d957fdfa55248112e72ee6eb0ad166b7","assets/packages/deriv_chart/assets/icons/symbols/otc_n225.png":"3292d39066ad579b4f98719da4325351","assets/packages/deriv_chart/assets/icons/symbols/xmrusd.png":"ecdce25fe2272992147875c80aa5564c","assets/packages/deriv_chart/assets/icons/symbols/otc_dji.png":"5431f4a3681ef9fbe32421ac87531e0d","assets/packages/deriv_chart/assets/icons/symbols/jd200.png":"71c8b672dafa03ff61e437067bda3145","assets/packages/deriv_chart/assets/icons/symbols/boom500.png":"ec41b2ed3470ea74bf5b4bc0197cee4f","assets/packages/deriv_chart/assets/icons/symbols/1hz10v.png":"9f4582fb123c907533d86092cb1d9baa","assets/packages/deriv_chart/assets/icons/symbols/frxxptusd.png":"6ae6a0220f76917758e82381568a0a9c","assets/packages/deriv_chart/assets/icons/symbols/wldeur.png":"d6cb32cec19edd8f358068a16b86ea56","assets/packages/deriv_chart/assets/icons/symbols/otc_gdaxi.png":"1319d58b3f166cba038ad455902d4649","assets/packages/deriv_chart/assets/icons/symbols/frxgbpcad.png":"be914c3dd3192d404b79e5f7d3f943f9","assets/packages/deriv_chart/assets/icons/symbols/frxxagusd.png":"52726410fea8214c4c94ca6e4b328247","assets/packages/deriv_chart/assets/icons/symbols/r_10.png":"3090d1f1213cf44d4de951ffe72579f6","assets/packages/deriv_chart/assets/icons/symbols/cryxmrusd.png":"272edb110a2628fc60d2fb0bd237cc50","assets/packages/deriv_chart/assets/icons/symbols/frxaudcad.png":"827bb3e47b0e64ddbf1bb5ae61a01033","assets/packages/deriv_chart/assets/icons/symbols/zecusd.png":"0585b34fb4febfffa9d61cb1c95e9f55","assets/packages/deriv_chart/assets/icons/symbols/frxaudnzd.png":"8a0984ff7646f0d9b97496bb4e8099a8","assets/packages/deriv_chart/assets/icons/symbols/crash1000.png":"8a28cf0b6da088f5e7e66cc7ff19b85d","assets/packages/deriv_chart/assets/icons/symbols/jd75.png":"99462c4c4b5032c8af1558c3a639a8b4","assets/packages/deriv_chart/assets/icons/symbols/cryxrpusd.png":"5d0c030de1adb482f7796945ae149117","assets/packages/deriv_chart/assets/icons/symbols/otc_fchi.png":"f9a69497fc71115c37d75216fcc20b6c","assets/packages/deriv_chart/assets/icons/symbols/frxusdsek.png":"de4d5275c29f934ade5b7528186aafa2","assets/packages/deriv_chart/assets/icons/symbols/frxgbpnzd.png":"cb7dd4cdb203d45e80e4faaf5e940217","assets/packages/deriv_chart/assets/icons/symbols/cryeosusd.png":"43ae4baee03d269a0b9fb525781173b9","assets/packages/deriv_chart/assets/icons/symbols/cryzecusd.png":"ea36d64aa57f4e1d44bc9c5ce9284ad9","assets/packages/deriv_chart/assets/icons/symbols/frxxpdusd.png":"3fd9da692e54ba8da043dee61bc62d4c","assets/packages/deriv_chart/assets/icons/symbols/r_75.png":"ac2b6b21fdbd825b23c4905f2b92603d","assets/packages/deriv_chart/assets/icons/symbols/xrpusd.png":"3c1edf55f4b1e20ac79ef9eeb0171545","assets/packages/deriv_chart/assets/icons/symbols/eosusd.png":"c1ab7f666c4bc67dfa6cccf9746165d1","assets/packages/deriv_chart/assets/icons/symbols/crybchusd.png":"e61eedb43a2f79f2c2c8b4c892c5f5fc","assets/packages/deriv_chart/assets/icons/symbols/boom300n.png":"64cbad2add96b626bc2d3d37838755c5","assets/packages/deriv_chart/assets/icons/symbols/jd100.png":"ec8bd86974b154e357650ba5a20916b7","assets/packages/deriv_chart/assets/icons/symbols/cryethusd.png":"d4520def9dba50f3758cbe869db8ce0f","assets/packages/deriv_chart/assets/icons/symbols/r_100.png":"76159a96ba97803b9eb024846f7e4dfe","assets/packages/deriv_chart/assets/icons/symbols/frxxauusd.png":"075478e155c016554bd9ce8c0c78bbb8","assets/packages/deriv_chart/assets/icons/symbols/frxusdjpy.png":"2a27170f100f619036d79e164566e005","assets/packages/deriv_chart/assets/icons/symbols/bchusd.png":"1433535ddc1ae0fec062c6cc8e5840d6","assets/packages/deriv_chart/assets/icons/symbols/ethusd.png":"bcdd0cd2cfcaa223c3d4ccef318fd503","assets/packages/deriv_chart/assets/icons/symbols/otc_sx5e.png":"ea3bd71efec331d541705e2271b3b766","assets/packages/deriv_chart/assets/icons/symbols/frxeurchf.png":"1a66826ef57b967efeb3e67673609eac","assets/shaders/ink_sparkle.frag":"f8b80e740d33eb157090be4e995febdf","assets/AssetManifest.bin":"d40a0ba4affa2e84d6238a4336b547d8","assets/fonts/MaterialIcons-Regular.otf":"b7c7899338ce6057edb5c3ea0b9ab361","canvaskit/skwasm.js":"1df4d741f441fa1a4d10530ced463ef8","canvaskit/skwasm.wasm":"6711032e17bf49924b2b001cef0d3ea3","canvaskit/chromium/canvaskit.js":"8c8392ce4a4364cbb240aa09b5652e05","canvaskit/chromium/canvaskit.wasm":"fc18c3010856029414b70cae1afc5cd9","canvaskit/canvaskit.js":"76f7d822f42397160c5dfc69cbc9b2de","canvaskit/canvaskit.wasm":"f48eaf57cada79163ec6dec7929486ea","canvaskit/skwasm.worker.js":"19659053a277272607529ef87acf9d8a"},CORE=["main.dart.js","index.html","assets/AssetManifest.json","assets/FontManifest.json"];async function downloadOffline(){var s=[],a=await caches.open(CACHE_NAME),e={};for(var c of await a.keys()){var t=c.url.substring(origin.length+1);""==t&&(t="/"),e[t]=!0}for(var d of Object.keys(RESOURCES))e[d]||s.push(d);return a.addAll(s)}function onlineFirst(s){return s.respondWith(fetch(s.request).then((a=>caches.open(CACHE_NAME).then((e=>(e.put(s.request,a.clone()),a))))).catch((a=>caches.open(CACHE_NAME).then((e=>e.match(s.request).then((s=>{if(null!=s)return s;throw a})))))))}self.addEventListener("install",(s=>(self.skipWaiting(),s.waitUntil(caches.open(TEMP).then((s=>s.addAll(CORE.map((s=>new Request(s,{cache:"reload"})))))))))),self.addEventListener("activate",(function(s){return s.waitUntil(async function(){try{var s=await caches.open(CACHE_NAME),a=await caches.open(TEMP),e=await caches.open(MANIFEST),c=await e.match("manifest");if(!c){for(var t of(await caches.delete(CACHE_NAME),s=await caches.open(CACHE_NAME),await a.keys())){var d=await a.match(t);await s.put(t,d)}return await caches.delete(TEMP),await e.put("manifest",new Response(JSON.stringify(RESOURCES))),void self.clients.claim()}var b=await c.json(),r=self.location.origin;for(var t of await s.keys()){var n=t.url.substring(r.length+1);""==n&&(n="/"),RESOURCES[n]&&RESOURCES[n]==b[n]||await s.delete(t)}for(var t of await a.keys())d=await a.match(t),await s.put(t,d);return await caches.delete(TEMP),await e.put("manifest",new Response(JSON.stringify(RESOURCES))),void self.clients.claim()}catch(s){console.error("Failed to upgrade service worker: "+s),await caches.delete(CACHE_NAME),await caches.delete(TEMP),await caches.delete(MANIFEST)}}())})),self.addEventListener("fetch",(s=>{if("GET"===s.request.method){var a=self.location.origin,e=s.request.url.substring(a.length+1);if(-1!=e.indexOf("?v=")&&(e=e.split("?v=")[0]),(s.request.url==a||s.request.url.startsWith(a+"/#")||""==e)&&(e="/"),RESOURCES[e])return"/"==e?onlineFirst(s):void s.respondWith(caches.open(CACHE_NAME).then((a=>a.match(s.request).then((e=>e||fetch(s.request).then((e=>(e&&Boolean(e.ok)&&a.put(s.request,e.clone()),e))))))))}})),self.addEventListener("message",(s=>{"skipWaiting"!==s.data?"downloadOffline"!==s.data||downloadOffline():self.skipWaiting()}));