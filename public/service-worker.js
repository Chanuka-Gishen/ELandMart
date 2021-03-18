// eslint-disable-next-line no-unused-vars
var doCache = false;
var CACHE_NAME = 'pwa-app-cache';

// eslint-disable-next-line no-restricted-globals
self.addEventListener('active', event => {
    const currentCachelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                // eslint-disable-next-line no-undef
                Promise.all(KeyList.map(key => {
                    if (!currentCachelist.includes(key)) {
                        return caches.delete(key);
                    }
                }))
            )
    );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function (event){
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    fetch('asset-mainfest.json')
                        .then(response => {
                            response.json();
                        })
                        .then(assets => {
                            const urlsToCache = [
                                '/',
                                assets['main.js']
                            ];
                            cache.addAll(urlsToCache);
                        })
                })
        );
    }
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function (event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function (event) {
                // eslint-disable-next-line no-undef
                return response || fetch(event.request);
            })
        );
    }
});
