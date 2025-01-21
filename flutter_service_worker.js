'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "79cbb7a32346edcb1133dbca4fc4135a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "9ec5d2be98b6e9bdb36f18ceb9763f8d",
"assets/AssetManifest.bin.json": "ccea18ee94456a55495f1c478a730786",
"assets/AssetManifest.json": "f83c25c4aca422a0bbd34f9fad84d23d",
"assets/assets/book.png": "fefb25312bac8f08e116baebc1248766",
"assets/assets/emoji/Airplane.png": "1483f1f11b0100978d3188ca43a1f82b",
"assets/assets/emoji/Book.png": "37f0d3a87be8cf4dbbd5faa3fc024269",
"assets/assets/emoji/Brain.png": "1df42512fa24d0f4036d7da4d5854526",
"assets/assets/emoji/Gym.png": "5a150ea0e29632878858ca969c4ce743",
"assets/assets/emoji/Magnifier.png": "0121dbce702fcfbf52c2bc97d8e6babd",
"assets/assets/emoji/Moon.png": "c0b629faae5bdead6af320a76cbe5763",
"assets/assets/i.png": "601d3b98cc215a7de02f1be949c08d38",
"assets/assets/pfp2.png": "21dd919b44595bdbd3e771ca7eb0e8d4",
"assets/assets/ss/appleMusic.jpg": "3bfb535561d59f426bcc4d0d8ca9b84e",
"assets/assets/ss/calc.jpg": "a5a99b612e58d79fa07bf9f498cc1586",
"assets/assets/ss/findx.jpg": "10596dbdfd897bb4e9b19e6c72ae7fce",
"assets/assets/ss/portWeb.jpg": "b1d0c1d916aed055dcd46117da4d3aca",
"assets/assets/ss/qrcode.jpg": "27605b7b4d2bdb35f7d700b60c44704c",
"assets/assets/ss/stopWatch.jpg": "d406b4c29098b040d43684bac289277e",
"assets/assets/ss/ticTac.jpg": "541131c236f6721adebf387335a44131",
"assets/assets/ss/toDo.jpg": "d8527ddfa7fb97df091be377aa6eb95c",
"assets/assets/ss/weather.jpg": "a576d932733fc3068ee5c8fa11e63bc0",
"assets/assets/svg/404.svg": "a1c36d16b80c7ecbb9b36868e664644a",
"assets/assets/svg/blender.svg": "453a6aeb819125a1346f73a69cb28b41",
"assets/assets/svg/cpp.svg": "e5b135b00998f9cd69a38eed9b1eee81",
"assets/assets/svg/css.svg": "a55118403c13e2719d453b74dffa80f8",
"assets/assets/svg/dart.svg": "11b770f163584b0e8cbba1f7bc626f55",
"assets/assets/svg/email.svg": "99c14f8ef3bf527047167e56e5021217",
"assets/assets/svg/figma.svg": "c7ef676648d0a63907b26420105ed20d",
"assets/assets/svg/flutter.svg": "5ff1722cbed36fdb869cba0c95788d42",
"assets/assets/svg/framer.svg": "5d0f449e36a5402b819312beea001086",
"assets/assets/svg/github.svg": "4b8a4845e3c03b05cc92e2b3199889d5",
"assets/assets/svg/google.svg": "8cddc97baf8329135ae55c6672fc5d63",
"assets/assets/svg/hackerrank.svg": "0b190df020a48e0e8e84f8df5f7a8335",
"assets/assets/svg/html.svg": "16d07e8682a531f3bc1e9fb01bd59740",
"assets/assets/svg/instagram.svg": "abc08e76d2b0256d0a0c1815fc091be7",
"assets/assets/svg/java.svg": "459bbae2e96a2410c5b429eb941a4c11",
"assets/assets/svg/javascript.svg": "0c1f700da144243c526f252e59362138",
"assets/assets/svg/linkedin.svg": "15b4281ebd93cc246c81200bc3c1fd94",
"assets/assets/svg/mysql.svg": "9a87849cee36242dc6ab7399078e0869",
"assets/assets/svg/python.svg": "71374043d9b3d9ea7fa09976a747d475",
"assets/assets/svg/x.svg": "602958e0674315e1cd989b3ac5f74567",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "b2cc1cef75f8df7f5b597a03c252cc06",
"assets/NOTICES": "73b8df3dd38df16b6fba1add247f4cb4",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e9a942e97f590b86ad272037c0aed5d9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "28508b7a69dbff3dcc582841dd414873",
"icons/Icon-192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"icons/Icon-512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"icons/Icon-maskable-192.png": "b7dc3b5320ecd9f61049d2a5cff1b360",
"icons/Icon-maskable-512.png": "983e7bb4010cd46225086d2a07ae7f1a",
"index.html": "c17bbbcbddc8c8286ff26ccee9d530a7",
"/": "c17bbbcbddc8c8286ff26ccee9d530a7",
"main.dart.js": "7c3dc5517a5d3cecdb825eeedfc6372d",
"manifest.json": "bdd1c3b02fe3b18f35d9a884c9234568",
"version.json": "2fe5b0c7d5b3d8d633d91faefe6d5092"};
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
