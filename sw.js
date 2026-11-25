// Service worker Amajing Converter — supaya bisa di-instal & tetap terbuka saat offline.
// Strategi "jaringan dulu": selalu ambil versi terbaru dari internet; cache hanya cadangan saat offline.
// Library besar (PDF, video, HEIC) ikut tersimpan setelah pertama kali dipakai.
const CACHE = 'amajing-converter-v3';
const CORE = ['./', './index.html', './manifest.webmanifest', './brand/ikon.svg', './brand/logo.svg',
  './brand/logo-gelap.svg', './brand/app/ikon-192.png', './brand/app/maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return; // Google Form dll. lewat langsung
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true })
      .then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
