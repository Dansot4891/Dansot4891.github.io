'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7499d1e89325e50178aed6a8734b0c05",
"assets/AssetManifest.bin.json": "81ba593e36c0ab2a08cf51c317cc0609",
"assets/AssetManifest.json": "a0ac7e49edce78bbc93965977e3fa14a",
"assets/assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/assets/fonts/NotoSansKR-Black.ttf": "15e2e9d1b8e380eafc51a606a7e671d6",
"assets/assets/fonts/NotoSansKR-Bold.ttf": "671db5f821991c90d7f8499bcf9fed7e",
"assets/assets/fonts/NotoSansKR-ExtraBold.ttf": "db13746e4342665b3fb5571c353f8c46",
"assets/assets/fonts/NotoSansKR-ExtraLight.ttf": "33e4ba0602de9a23075c13d344127395",
"assets/assets/fonts/NotoSansKR-Light.ttf": "e61301e66b058697c6031c39edb7c0d2",
"assets/assets/fonts/NotoSansKR-Medium.ttf": "4dee649c78a37741c4f5d9fdb69ea434",
"assets/assets/fonts/NotoSansKR-Regular.ttf": "e910afbd441c5247227fb4a731d65799",
"assets/assets/fonts/NotoSansKR-SemiBold.ttf": "90c2026b48704ad2560e68249b15b7f5",
"assets/assets/fonts/NotoSansKR-Thin.ttf": "b59719d81a60f284b7c372c7891689fd",
"assets/assets/fonts/Pretendard-Black.ttf": "51c73880d5964b36e6373b3fe31f3058",
"assets/assets/fonts/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "332e9b673b0c1709e93fee01e4543f1d",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "2f39a307ce00aa5e734137d4cee3b5c1",
"assets/assets/fonts/Pretendard-Light.ttf": "77ecd2ca94928e38ff7c68bb255324f7",
"assets/assets/fonts/Pretendard-Medium.ttf": "7305f90c923d4409825ec2f4380b63d6",
"assets/assets/fonts/Pretendard-Regular.ttf": "d6e0de06bff8b7fda2db4682168e3ddf",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "459eff7ba5380583ccd6eda49c846c85",
"assets/assets/fonts/Pretendard-Thin.ttf": "8b65a9299b173e635e6acac200e80257",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "3b728ae11012ff63ca5acab31c856db4",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "1b58321c1049a42ef9e08dff33d3c272",
"assets/assets/icon/animal.png": "ee193a2fe247ba41249a07e6c2b936cb",
"assets/assets/icon/art.png": "925af585e2b8eabe291b2e56cc1df3e6",
"assets/assets/icon/baby_care.png": "ce762add21816b1d4274cee84e321d9f",
"assets/assets/icon/beauty.png": "6987ada9f19dd6cd22319df3e555e947",
"assets/assets/icon/bell.png": "e7b8fa034dfbc5e4cadfb6cce6c179b1",
"assets/assets/icon/bid.png": "54419f63bafb5a458d7c8bc02d8d0078",
"assets/assets/icon/bid_mypage.png": "ea7418d893de671526127b288a8b3760",
"assets/assets/icon/block.png": "11cd1256774f53ad3b774db4cc5d23b6",
"assets/assets/icon/book.png": "e56c36c467be67e1b20aa2df8dd82944",
"assets/assets/icon/buy.png": "3257662f54f6ccb3f672ecde47f342f0",
"assets/assets/icon/camping.png": "99031a30907781481546287f6cab636a",
"assets/assets/icon/car.png": "caa540b0c9d099a03dfc3897f107f0ee",
"assets/assets/icon/card.png": "b71d95ea1c4e2fddb1837fc10eb38b3d",
"assets/assets/icon/chatting.ttf": "3b27e0af3fe63bb82696bc947393203a",
"assets/assets/icon/cloth.png": "a18b58bd026d9732575015c33668a74a",
"assets/assets/icon/collection.png": "e5888eb8a9fcb0a64d49ede5b7fb0f5f",
"assets/assets/icon/furniture.png": "7d7486fc45ed2c3e8e7c4107cb362c1b",
"assets/assets/icon/hobby.png": "519b943eb71f7f397ab87c4334776e4b",
"assets/assets/icon/it_digital.png": "5e615ffd0d4f24584d7060facbe7cbdc",
"assets/assets/icon/jewellery.png": "b8fc0b369cf8029431cb7867db4c957c",
"assets/assets/icon/kitchen.png": "1d4c506e8ca9746c7922893ac7ceea01",
"assets/assets/icon/notice.png": "87ca156402d7df229165daf9c8d16ebb",
"assets/assets/icon/Q&A.png": "504b2afdfedd0724df88a3d3dd7420ef",
"assets/assets/icon/sell.png": "a9f6aba429609bdd3f6451e7da2d7a90",
"assets/assets/icon/ship.png": "c59686c98f460dca59496572e633b3c6",
"assets/assets/icon/sports.png": "a9b66617bcc4c21a044c92787000ccfa",
"assets/assets/icon/ticket.png": "3b7146fc2807f50e0c1d8b1bbdea51c8",
"assets/assets/icon/time_limit.png": "8ea5f2afd6cd6e85d6c2997c8fc5608f",
"assets/assets/img/chatting.png": "efb1626d281394af0aa1f00ed6368b33",
"assets/assets/img/down_bid.png": "8941557e61b611af729b602aac52707b",
"assets/assets/img/limit_clock.png": "f9a5887a508753c988f86ca56c4ae728",
"assets/assets/img/limit_hammer.png": "048b7fb36d75bf3d118f78237edc8db4",
"assets/assets/img/new_bid.png": "fe41431ac43ddba9990186dfc7c60beb",
"assets/assets/img/up_bid.png": "18f60988d993cd967e0934a98907dd4e",
"assets/assets/logo/google_logo.png": "dc639a43591394d95e4bdf7521a839c0",
"assets/assets/logo/kakao_logo.png": "6811d940856692219238aa9da1fe5cf0",
"assets/assets/logo/main_logo.png": "5e75500142145bbf65d9d3ce0b5122c9",
"assets/assets/logo/main_logo_white.png": "8a275516903826fecae2be50ef1753ab",
"assets/assets/logo/naver_logo.png": "21d76ee17c3256d5ff3328d97025249e",
"assets/assets/selected_icon/selected_animal.png": "73aea8d262c19c74b63447d9a6184117",
"assets/assets/selected_icon/selected_art.png": "43f3b4d8d717f8764f677467c97b169c",
"assets/assets/selected_icon/selected_baby.png": "62d65aa505e63e9dfd025c3de99d130f",
"assets/assets/selected_icon/selected_beauty.png": "43a45d058bdb7c39e602af8bac9b22ca",
"assets/assets/selected_icon/selected_book.png": "37a6f9782f299e01ed2c643f7a58d1c2",
"assets/assets/selected_icon/selected_camp.png": "b5143db83082461fdd86a3eba1d879a8",
"assets/assets/selected_icon/selected_car.png": "d6dd464625a23eba54c9e3d2d0585306",
"assets/assets/selected_icon/selected_cloth.png": "578ca1366ba173142abc2bb734de0ecf",
"assets/assets/selected_icon/selected_collection.png": "deb2f4a42b3f20cc78bbf7f0b2a966ee",
"assets/assets/selected_icon/selected_furniture.png": "09e197201419c9c81c90819a82c955c0",
"assets/assets/selected_icon/selected_hobby.png": "b18231944af88066fce343ec9fee35be",
"assets/assets/selected_icon/selected_it.png": "ecf0a0f44dcd16ddcf8f2c75277038f8",
"assets/assets/selected_icon/selected_jewellery.png": "427fa89c117e6d6cf2e674b8d08f8d98",
"assets/assets/selected_icon/selected_kitchen.png": "042a672d0e516364b81d618be38bdb8e",
"assets/assets/selected_icon/selected_sport.png": "f58f7930873e3da5eb20a832af11105e",
"assets/assets/selected_icon/selected_ticket.png": "070d9f1133980d21a010615982180a19",
"assets/assets/unselected_icon/unselected_animal.png": "85910cd4204f94fc5a43869022fa70bf",
"assets/assets/unselected_icon/unselected_art.png": "3ea40b3f5264ce4c6eee08bd7b7da220",
"assets/assets/unselected_icon/unselected_baby.png": "d0b71e51229a6966de34946ab499d6e0",
"assets/assets/unselected_icon/unselected_beauty.png": "e0c94d943c7f33bab0f63c950cac4c1e",
"assets/assets/unselected_icon/unselected_book.png": "e12fefc3dfa5032ee4aa511cc94afba9",
"assets/assets/unselected_icon/unselected_camp.png": "c953148119d890f1cc9808ecd465f2e7",
"assets/assets/unselected_icon/unselected_car.png": "467fc3f67d0b629f1c235f3843106734",
"assets/assets/unselected_icon/unselected_cloth.png": "3de33c1ce843a29470de34e3a6b96a8a",
"assets/assets/unselected_icon/unselected_collection.png": "6b7b99b20ba88964f98483340c9726c5",
"assets/assets/unselected_icon/unselected_furniture.png": "80f17bf714fd06464625c0c71a6b7222",
"assets/assets/unselected_icon/unselected_hobby.png": "b337c61e827eac6181a1b55f843b8ded",
"assets/assets/unselected_icon/unselected_it.png": "58f7c12cccd8072a0ea62c386caa602d",
"assets/assets/unselected_icon/unselected_jewellery.png": "528514137b5a0f25db0837b6448c3b49",
"assets/assets/unselected_icon/unselected_kitchen.png": "d87d980dfa86550ef5f530a07fbdf253",
"assets/assets/unselected_icon/unselected_sport.png": "414d38e43bf90f4ab4390f6f3ecb1afd",
"assets/assets/unselected_icon/unselected_ticket.png": "28f05ce4808dc0b4ceaf6329c2d1a124",
"assets/FontManifest.json": "7899bf3e037938075da481dc960d339e",
"assets/fonts/MaterialIcons-Regular.otf": "43c9f1568d60a71efda8ba20705024c6",
"assets/NOTICES": "c6dd6472f0806c81548a34f9c103d889",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/kpostal/assets/kakao_postcode_localhost.html": "27eb159f48fb5b0af42e06afe3998688",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47fb9e37af6604792a2fcd3a7b834135",
"/": "47fb9e37af6604792a2fcd3a7b834135",
"main.dart.js": "22010de99479587434a9c83332b4516a",
"manifest.json": "66c3172ade3714ab3143d9a3873660db",
"version.json": "17dd3ba715270b9696643b3faebdb0b9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
