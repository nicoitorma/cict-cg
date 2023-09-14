'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b559a5ba661dccda2ab9634591b9122d",
".git/config": "2d66d56229b23a9cfa0fc7ffc3ae7fa8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6b70e0642251117ccd657cef95a5cde9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1feb94cf7ac3b68d96a14448d6a99642",
".git/logs/refs/heads/master": "1feb94cf7ac3b68d96a14448d6a99642",
".git/logs/refs/remotes/origin/master": "0607590b1e80bd48dc5df680c2df09cc",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/c948e4bd21c7cb5c6e9de9693dfae7f90d3670": "98d827f17fb06f1524180cb79e6b5625",
".git/objects/09/0d5995f2d740e20b39deb64bb808849f8138ef": "01b0cc04fa739d483770b93ff8b16d19",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/15/fb25d37b0890ab9d9b96dfcff971a1ab24d147": "6384483e3892fff8ec8727c3ff2422d8",
".git/objects/16/ba7c3753a12c0e0b4b2ddebcb6837a942654c8": "51691a37aa70050a9418b07690ab06ec",
".git/objects/18/ad4cdd36790feaf467445ff74afef5e201613c": "1762e47c1357248dfc8763d580a86df3",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/22/0491689d6f564407e4416c0810d15f1d3e76e7": "87dba7fd9d1e133be1f7bf2bfe09e019",
".git/objects/25/8e8b81a4f05d40b29537714a8b8538c563b0ce": "e607d66803870dce85fb1369a5af6973",
".git/objects/2f/0a8fe5cbdcb1838785b0369ba5ef495099d75e": "e64d20c0c19a4ac3466fb4cb142bba25",
".git/objects/33/2fbffad17fbb9a4bf40903382385ed4c6da3a1": "78952f1625a44364c822a1277fe8a318",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/cab7eb8de291b667e1037932c53997bf4f2750": "d17b8ec1e94d7527b169ea249736960a",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/42/48861321ec9e15a5c0552d69e5023e4ac4fc72": "d3dc7f0cfe48a702e28f5398347194e8",
".git/objects/4d/877147db7d6c377f08386d1d92fdc380e3c912": "0defde7fcee9deddf8403f757ac54027",
".git/objects/4e/00ce7905fcafce07ecadcb95e52b38a3b0a450": "cefa811b8c7d004c2ac1121fcaf99780",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/0bea05ae8e2c576040da78638b1a54c9440a7b": "a194dd1852c87315a76fc9dbccad82f5",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6e/c099f1504dc7b49d3ccde1c744095a106ee1e4": "630c70a2a6f09db8bbc4f7b1bae58233",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/7b/3f8eabf2f80cd66dd3aa924f324264da2af96e": "256293c08b58f04bcdb0293ac3586acc",
".git/objects/86/f9f9f49d20500c7a5933a4a9e765e8a3cd2ee6": "dc87387f135fdb927e0248f9c7e25c6e",
".git/objects/8a/0e643e1c35d8b5049ba3c08c6aba894361bb29": "ade18e69500c8546c2b4cfc740b24fbc",
".git/objects/8f/dc6053e0096790560b96a0003d0e508d4c3d07": "91728c308be56844d32f759533eeb3b7",
".git/objects/90/21abb67ff8ac9891f056c38b754dd14f3197b9": "2f09b52d2b3368adb85fec8d5eec4884",
".git/objects/95/0028f6d7c4519f146ef01b67791911a1b68e52": "8346746c6a8a449f4c15e5d55a4b614e",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b5/0c32d0260edec6a2d19bf30e7670c1be666795": "33fa3e3f41a7aced3164115b505d23a3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ca/3bd945d6bac1b73a4e964cfd667e68bf3f36c5": "ff4bb4dc74ed533c755514b1f67fea1d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/de/0bc70b3693c1975c4891e54a146f6f03706ae7": "a682f4d381057b6e926678b7709c526d",
".git/objects/e8/02bd07d2e4355929ac5c31ad053bb34862de37": "d638d0f2cc33888fb0682d2c5fc29ddd",
".git/objects/e8/0838677a12c52a185e3e3d6d446b9bee32313a": "0fa9f3cf235e9e0d2a889df792af0b0e",
".git/objects/f2/0c8d8559b687a3dc42ec7c1f40a3843914e86f": "63a42bb7c4490227671564478067945a",
".git/objects/f6/352cbc1befca50b419a5fa2932b62e6d9d645b": "7be5fcb45cb86b59a4554525c6cc3078",
".git/objects/fa/983c6d855f1cd4035d6f4e40d9709873eb44dd": "26dab6f0d941228a06d4dd5c5df54eb2",
".git/refs/heads/master": "4df034f12f4d19d3df42ff59a35a8a8b",
".git/refs/remotes/origin/master": "4df034f12f4d19d3df42ff59a35a8a8b",
"assets/AssetManifest.bin": "bde3e2a1f38bf369e60891ac80d78ce4",
"assets/AssetManifest.json": "0f26959af7b98cee4f901821be3a24af",
"assets/assets/imgs/bg.png": "90a9792f04253c301ca08911ffab48f1",
"assets/assets/imgs/icon.png": "894ff3f963fd00636347d27255f56bd6",
"assets/assets/imgs/logo.png": "9e6c6acca30523eb1973f4abdbf021a9",
"assets/FontManifest.json": "8ef2e184f19c632e9089292071e62ad7",
"assets/fonts/MaterialIcons-Regular.otf": "5e1102ef477c0c33594e00b07c4b0a29",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "6c0387694f811488b0c292852660ec86",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "146d759fa7e12e7e810edd2b24fe52b9",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "0f2da6cff4252d627071a866b1225631",
"icons/Icon-512.png": "d00fb6cd079b8cd7917957676079978d",
"icons/Icon-maskable-192.png": "0f2da6cff4252d627071a866b1225631",
"icons/Icon-maskable-512.png": "d00fb6cd079b8cd7917957676079978d",
"index.html": "6f9109689509cb075f57ed2a6cffe551",
"/": "6f9109689509cb075f57ed2a6cffe551",
"main.dart.js": "e1ab6255ca32121ad1281ed348035a4c",
"manifest.json": "6890a02cc419fe643d326b3f46548941",
"splash/img/dark-1x.png": "753ac4d2d0e45856c3cc93694568be02",
"splash/img/dark-2x.png": "eae8e2b23e305a0224e8e463cecd7d6c",
"splash/img/dark-3x.png": "fa23d7e6e8de2c5715bc7d77eb50d17a",
"splash/img/dark-4x.png": "53ad7378afb7a7a441d4fe1814e39885",
"splash/img/light-1x.png": "753ac4d2d0e45856c3cc93694568be02",
"splash/img/light-2x.png": "eae8e2b23e305a0224e8e463cecd7d6c",
"splash/img/light-3x.png": "fa23d7e6e8de2c5715bc7d77eb50d17a",
"splash/img/light-4x.png": "53ad7378afb7a7a441d4fe1814e39885",
"version.json": "686c041971e299538276613107e82d64"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
