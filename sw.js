const CACHE_NAME = 'kids-coding-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon.jpg',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          event.waitUntil(
            fetch(event.request).then(networkResponse => {
              if (event.request.method === 'GET' && !event.request.url.startsWith('chrome-extension')) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, networkResponse.clone());
                });
              }
            }).catch(() => {})
          );
          return cachedResponse;
        }

        return fetch(event.request).then(networkResponse => {
           if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic' || event.request.method !== 'GET') {
             return networkResponse;
           }
           let responseToCache = networkResponse.clone();
           caches.open(CACHE_NAME).then(cache => {
             cache.put(event.request, responseToCache);
           });
           return networkResponse;
        }).catch(() => {
           if (event.request.mode === 'navigate') {
             return caches.match('./index.html');
           }
        });
      })
  );
});
