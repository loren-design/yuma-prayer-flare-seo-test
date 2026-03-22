self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('pf-v1').then(cache => {
      return cache.addAll(['/', '/index.html', '/resources.html']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});