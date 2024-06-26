'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9ccb8a05d08be23e67b34458880c105f",
".git/config": "56aac0bf0a6883f4406d5a92a51a9d77",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "ca5ec4d304cfed4470e284f22854ae29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f898fc6391293fa63f8c57fd1a04356d",
".git/logs/refs/heads/master": "f898fc6391293fa63f8c57fd1a04356d",
".git/logs/refs/remotes/origin/gh-pages": "a46b82e148d7f4280c15cb3485db775c",
".git/objects/01/c33be21958ddb05a1cc3b1d31ac2b40f176824": "f8e833b6e745c30c304c9fb9c4aac2d0",
".git/objects/02/0994cec0e55cfdcd860d07e3c7f81c6fb64dd5": "4cc14b6e3bf4b6ff1d6804e567618131",
".git/objects/03/d2ee5a4c9e17c59d85756f08cb0d73cbf9a551": "b1ee12e8b581ed0b08692e2d228ddc2d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/02c10ed271fae6a985f21326e1057ca31116c5": "d5c05e4b888431832b36b0b4ab1c0d93",
".git/objects/0e/24bdaaba731ab87d8b3c64040b99f2441928a9": "93feab5675980246e238bccd5982a64a",
".git/objects/14/e680265811691c72fb9b0c3992cb67dcbf7348": "dd00bc49c9ec41fa5c5f54a4cf775bea",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/342ae79748f8cde7cbdd1930297349cf630960": "1ece525b9286d1137f2662af07b08d22",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/a7023d221c000e7e4c96d169c45e5607ada55b": "cdff0cd10f3af0429a55a3cef86afa14",
".git/objects/2a/cbfb09430275985449296aec5b2e08dc06958c": "f79019e0a0a8c4004e7351679f8b5433",
".git/objects/31/1c7257dcfe1e8ccd8d30dcc961fa5cbd479014": "8f75c167a54944a63b8a4a2a0364e90b",
".git/objects/32/a139d94e1df5aa979d895555a2ffc5f5a80b6f": "e49b9c8c4728825f3169c647c8ca248a",
".git/objects/45/6e7ef274048acb75c068b60a5a8d4751bc5604": "85c92c15d64c03152bd864e46e72a29b",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4c/4973999a72d25f6bc783813f5c19d4252c9986": "5b56fe04928c1c60befa4f480d6a5857",
".git/objects/4d/5b5c977673c9183168a17069adfd243cea66ec": "aa3d916fb8f2b3ff3b0750865160f3e9",
".git/objects/51/b7d3e01cdb978c94d79bfe0ff0f1e51887a21a": "c6451b2714db1cdb9df356e100ee93b2",
".git/objects/52/dffef902dd3c1fcd5b1880f868556e4d217d73": "e3a93b66cf175309b3876e20a45c7238",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/bece4aa2e35507f1ecb4d7fa71d56c467dd5a8": "1a74c2c85d5dfd48971f098fe1ff66ad",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/53ab1bb3690a0bb94858a8eaf262a8c0a3a86e": "3b0d0640f8d5e0e00af51cd4a30f7e15",
".git/objects/7d/fa8f346ed004e803d349b523abd147a6c061a3": "ad90c9fded9d1a5114be59186368e848",
".git/objects/7e/30f82e077e421003087c886e5eb908145d0522": "d0d4e75a69bf22215bf297ff8659cc21",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d0118483468f6c4fef0a9571ac40337e64ab00": "4f8f7ed655f1528f5e8d6a7e5dbea677",
".git/objects/87/7caac22f005207286c728827610d4e009bfac8": "c7508427d50b2137d2f2d3d89a9c07ad",
".git/objects/87/d3984a4ecd792e25126a1d824b8a641e5319bb": "90fb14ce2e6c362852478032f4b5dd86",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a2/9a149b5ec019951ff447aa713091c2410b45de": "45b456d2043115d1e9b9bc277044715f",
".git/objects/a6/ad17e2af9a145b65fc63cd9f708feb956e9c39": "09e752eafee296bf2a09df583cc8bc7a",
".git/objects/a6/b9b28929ee7343f9207ec985f9faf8645238a5": "f911908b03aa1b4a50dcb0037dd1ad3b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/8c0f107e6871f8b0ea5f634253b3967dd5614d": "9ccd91e1bb39e732a92783360f4790d0",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f1dfd9ba8722ea1b57be8e6d4648a3996a223f": "011124b2b6921439f79361ad567cdaf3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/5ff6159942dee97fe0a76584e4b5c9407bf703": "0b1aff7f966039689e50dbdcbdc0331f",
".git/objects/bb/4e8c26519ada985f429c5c4934d4f68d80383d": "ac5846ad3e0d4f4fbc5cac4026df1f65",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/333b790ee4187621267cfd950ee49d4b703e2c": "75c218e376e48c871beb20fd0de0a779",
".git/objects/ca/eb7ac32f88ea40cb8c45253a97db92d83e03b8": "665fe65f0a7cdca72200b2becbd73796",
".git/objects/ce/5f10591ab384ba7c31fc89872e770bb81c70f6": "3e6a51dc382f6060b9dcbcdb81da433c",
".git/objects/cf/0e9799f7f59c718e1d4475479f709dcd9be2ea": "e50c2f7536c49abc66e0fa314a69cdcf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4248ed106af3688ac9eae31578e0493c73b069": "3971708253af4d1f3e2e7741a7a800b9",
".git/objects/e0/eb4001871e16a48afee826e38d8058aecb4c28": "ee1d56288c80edc7ff3b96655d6a790e",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/0da2c9aeb4e7f410e8ce22aa9507ee3fa33537": "5e333ec09ddee0ce494e1073d4177d92",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/936f1b6418c0b8cd7c35560ddfb2da54b77834": "5bc0b33b9a1b2ab0988fad3bf290bbab",
".git/objects/fa/4cff505eb671d6258554f5d71e873f686a6098": "35a07c049c2e378a6b66a63bd0b61194",
".git/objects/fb/1c7fe4ca80b2784310d3ba76d1b51e45565967": "d63859276431bef33c36b06a5fb0ed4e",
".git/objects/fc/508a1a6e498f2505c98844d8d9498b0e144e13": "23e31a89d069145d9cef1ada3ed60265",
".git/objects/ff/23e59ee0361e775ec3e883b83287e17d301c27": "8baceb2f6901ff1da339a471d002deeb",
".git/refs/heads/master": "e6d568445c8c9ba717f88b4d93ea9264",
".git/refs/remotes/origin/gh-pages": "e6d568445c8c9ba717f88b4d93ea9264",
"assets/AssetManifest.bin": "3a4543b3ed858c00c09b188f9e7b5f09",
"assets/AssetManifest.bin.json": "72c2ce1405b33f8f1ccdc7403e8b6abf",
"assets/AssetManifest.json": "7325c1d565ae0e86ce75f6d5cb282c30",
"assets/assets/flutter_i18n/en.json": "0b65a9a4c753509735681e9b4f939b80",
"assets/assets/flutter_i18n/vi.json": "47b0614bfbc89d61017ba842d1d881a5",
"assets/assets/fonts/NotoSans-Bold.ttf": "ef4b39fb4d49db8beed2966debc0f477",
"assets/assets/fonts/NotoSans-Regular.ttf": "c8e58befd2433eb89589dd1d23225c4e",
"assets/assets/svg/activity.svg": "94faadb484d36211802d98f417725252",
"assets/assets/svg/airdrop.svg": "75a6e80348f9f3435c44e913cd151279",
"assets/assets/svg/Frame%25201.svg": "9f0dc99eff853e6b6b00ecb5b5c66dfb",
"assets/assets/svg/notification.svg": "0bf40b0202f86b0d8057cf67d7f01604",
"assets/assets/svg/send-2.svg": "ed8b7744c93b94aab19a712708210c64",
"assets/assets/svg/setting-2.svg": "5c00212eb3565d84e001863d142e340e",
"assets/assets/svg/sidebar-right.svg": "abed88544e3185d5eb8d166b9aae96f0",
"assets/FontManifest.json": "782e09635b9ad228283eb8accbacde77",
"assets/fonts/MaterialIcons-Regular.otf": "687593d999b0eaf5cdd4c1c36075c190",
"assets/NOTICES": "c516726604691125ff3a570e4ca2d08a",
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
"flutter_bootstrap.js": "7fdfd91af83467e1d4f4b064affba3a0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6df78e9b814a295218e230bfcc8ed03f",
"/": "6df78e9b814a295218e230bfcc8ed03f",
"main.dart.js": "ab67792a8474b65bd6cf67de177376d2",
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
