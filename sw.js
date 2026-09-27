const CACHE_NAME = 'kids-coding-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon.jpg',
  'https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&display=swap',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
