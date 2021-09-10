const APP_PREFIX = 'BudgetTracker-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE = [
    // relative paths 
    "/",
    "./index.html",  
    "./js/index.js",
    "./js/idb.js",
    "./manifest.json",
    "./css/styles.css",
    "./icons/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./icons/icon-128x128.png",
    "/icons/icon-144x144.png",
    "./icons/icon-152x152.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png"
];

// install service worker 
self.addEventListener('install', function (e) {
    // tell the broswer to wait until all files have been cached
    e.waitUntil(
        // find a specific CACHE_NAME and install 
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
  })

  // activate the service worker 
  self.addEventListener('activate', function (e) {
    e.waitUntil(
     //returns an array of all cache names that is in the keyList 
        caches.keys().then(function (keyList) {
        //  filter the cache  that have the app refix and  save in catchkeepList
        let cacheKeeplist = keyList.filter(function (key) {
          return key.indexOf(APP_PREFIX);
        })
        // add the current cache to the keeplist
        cacheKeeplist.push(CACHE_NAME);
        // a promise that resolves after deleting older versions 
        return Promise.all(keyList.map(function (key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i] );
              // delete old version of cache 
              return caches.delete(keyList[i]);
            }
          }));
        })
        );
      });

      //retreive information from cache 
      self.addEventListener('fetch', function (e) {
        console.log('fetch request : ' + e.request.url)
        // interecept fetch request 
        e.respondWith(
            // check if data is already in the cache 
            caches.match(e.request).then(function (request) {
                if (request) {
                // deliver it from the cache 
                  console.log('responding with cache : ' + e.request.url)
                  return request
                } 
                else {
                    console.log('file is not cached, fetching : ' + e.request.url)
                    return fetch(e.request)
                }
              })
      
        )
      })