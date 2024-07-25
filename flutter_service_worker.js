'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "88db3b4e0dd78eeaefec87830f21371a",
".git/config": "66badafa0db2ded8ae2281d799ec5952",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "46b775fe6b4eee41d4a971d2f7a3f245",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "306fc5dd5b254150a4e60a3c7896dd1b",
".git/logs/refs/heads/main": "306fc5dd5b254150a4e60a3c7896dd1b",
".git/logs/refs/remotes/origin/gh-pages": "7462b6539b4a39b52e21e27805355e72",
".git/logs/refs/remotes/origin/HEAD": "1ff57b74908dd4a188d77210913617d7",
".git/objects/09/7b1ad0c5349aa823405553f92233444a75034b": "dd396e0b7dde0b60aa71176d3e8de829",
".git/objects/09/f451b018e4ad87881b91c28637697e9e3c622a": "823b7bec498ed4e17f8de4958c033315",
".git/objects/2c/4ee58c62d1ef9093fae8636893e3dc0a827d66": "59bf37e9d4ce2aeb1f355038a5b3afcb",
".git/objects/2f/629e5689a6a0ba9a3426514552a83dcfc374c8": "8f37f3b62ae282e8b7f7a2343c8cb938",
".git/objects/31/ae4e3666faf1b57d779f55bcf07577f23d7a8e": "e5eb00bb16e329abafd33d6518912475",
".git/objects/33/bdc405fd685f77f6ed6b6cdc25512b9be75fd5": "5c88cd55a20d27c3492dab283b87b5df",
".git/objects/39/09250aa91aa0618d23d8d89f8430df8acf1390": "44b4a4d26dac7f92d86d08176a8aca7f",
".git/objects/40/f4509d94db81ef2daf59e51dad2af22a2769d6": "30743362712b60699f1d50f4a56e4dba",
".git/objects/41/ee8cd79b4c0eb52079cd7c2950a5edfcff2e2c": "977e6afcd4ff4dc31e41e06c3ba81814",
".git/objects/42/db105eba7cf72b29a00a4f9a1b979a220a4767": "57dfde6259dc7151b5aef7b1cad82354",
".git/objects/7e/076c67795a1facc5a4dad1578ad73b3ef55a32": "c7f8c680f998fc66e167efbeb48cb8a9",
".git/objects/83/3d7ff891e5819da74a08a6d5658504df6a64d9": "682734a9c8a3dbb79b82303364dbf4cd",
".git/objects/8c/1790977315e40b57d5cb7d1bd27a4fb7a12178": "fb2b046360c03b20c5b75dd69ef121a6",
".git/objects/94/76cc3b607e6fb6275ccf2a5ed2396979eb09de": "6293e66d8a6845a46b10f2a4855ffed2",
".git/objects/a1/a5cdca8d847de384caa0bf632d820d91c9f662": "3e83429270aeaf29d75d84e99c12882c",
".git/objects/a3/64b72680a21847eb3cce830f266748ab3c1b1d": "80f491294d551d2119c9a3bdd69ce606",
".git/objects/b1/8a8c1945f11d32e1c8b49e1def76cc1efbf064": "bda6668b5e4015c1a024d0f1254c2fcf",
".git/objects/c1/25abde2c41ecc3603d7f15fad81ac3b21a8ac5": "76aa3e592536575d5cd8b2abf8e5df8e",
".git/objects/c7/62de37e8704e404709457af24f284c603ab915": "193de5e2500269ac4b57b9d358766e12",
".git/objects/ca/37f09d86661b0ef67f5e297a8babe5dbe9c66d": "2dbc1f1f49d7a6400927079b0b5ec033",
".git/objects/ce/30e106b67f4ec4599e3071f71c51510ede3947": "1e20eab2033c73775edaf0f593242d85",
".git/objects/d8/fe6a8ae354c88da86172726623279d5fc20e44": "e1e343d41164904332e4810b698bf9d3",
".git/objects/pack/pack-041f7e8be93a22d91e7b62ce314ba0091278766e.idx": "ef6bbd347f3c572d5aadb656ba157c0c",
".git/objects/pack/pack-041f7e8be93a22d91e7b62ce314ba0091278766e.pack": "ddb9ea88d6b4d5b3e0bb330278e682de",
".git/packed-refs": "2eb32ab04fc450f0f55453b0ca66c4ea",
".git/refs/heads/main": "c1945e5ccaa87e62fb31b454f8b74899",
".git/refs/remotes/origin/gh-pages": "c1945e5ccaa87e62fb31b454f8b74899",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "ba6aedbb522e9e963c730a4624312316",
"assets/AssetManifest.bin.json": "d6beeaa69e37382ec7c53e6e873033c7",
"assets/AssetManifest.json": "177e12621911977bffde61beb7ee0a82",
"assets/assets/flutter_i18n/en.json": "82828ca29594e7a2d8a0a922be192677",
"assets/assets/flutter_i18n/vi.json": "f25102fffb4626ad79f4d90e11e5e35d",
"assets/assets/fonts/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/images/avatar.png": "36390e0fce91ea81c20a43776ea9c322",
"assets/assets/svg/activity.svg": "94faadb484d36211802d98f417725252",
"assets/assets/svg/airdrop.svg": "75a6e80348f9f3435c44e913cd151279",
"assets/assets/svg/Frame%25201.svg": "9f0dc99eff853e6b6b00ecb5b5c66dfb",
"assets/assets/svg/ic_avatar.svg": "8867b3540cc0e0bca35ea6b486f951d8",
"assets/assets/svg/ic_comment.svg": "14604c19dc394b9a593b448a29bb0f31",
"assets/assets/svg/ic_like.svg": "7d293d2a881ad698a9767cbd90153ce8",
"assets/assets/svg/ic_share.svg": "ed8b7744c93b94aab19a712708210c64",
"assets/assets/svg/ic_show_more.svg": "d9c343de9e3e8c6663540e4d1ec68799",
"assets/assets/svg/notification.svg": "0bf40b0202f86b0d8057cf67d7f01604",
"assets/assets/svg/setting-2.svg": "5c00212eb3565d84e001863d142e340e",
"assets/assets/svg/sidebar-right.svg": "abed88544e3185d5eb8d166b9aae96f0",
"assets/FontManifest.json": "782e09635b9ad228283eb8accbacde77",
"assets/fonts/MaterialIcons-Regular.otf": "18de5770180e6f8343173deb4ee39605",
"assets/NOTICES": "e43c2fc292266614d392330821b0d977",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ed4453c278688f2f3ccc54ef6d3dffd8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7760c6a2eed53b2867e6d78d69a64565",
"/": "7760c6a2eed53b2867e6d78d69a64565",
"main.dart.js": "9651195f8585e81bec92911ba52306bc",
"manifest.json": "432c5e773774e8acd9dae3f72790cda8",
"version.json": "a3322b2f035e5345663b567001345585"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
