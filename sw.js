// Service Worker for 食費節約献立＆買い物リスト作成 (PWA)
const CACHE_NAME = 'frugal-meal-planner-v1';

// オフライン動作用に初期キャッシュする静的アセット
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './recipes.js',
  './app.js',
  './manifest.json',
  './apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

// インストール時: コアアセットをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// アクティベート時: 古いバージョンのキャッシュを自動削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// フェッチ時: 
// 1. 同一オリジンのファイル(HTML, JS, 画像等) -> Network First (最新優先、圏外ならキャッシュ)
// 2. 外部CDN(Tailwind, Lucide, Google Fonts) -> Cache First (高速化)
// 3. 外部API(KVdb同期, GA4) -> Network Only
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // POSTやPUTなどの非GETリクエスト、または外部同期API(kvdb.io)・解析はキャッシュしない
  if (request.method !== 'GET' || url.origin.includes('kvdb.io') || url.origin.includes('google-analytics') || url.origin.includes('googletagmanager')) {
    return;
  }

  // 外部CDN (Tailwind, Lucide, Google Fonts) -> Cache First
  if (url.origin.includes('tailwindcss.com') || url.origin.includes('unpkg.com') || url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
          }
          return networkResponse;
        }).catch(() => cachedResponse);
      })
    );
    return;
  }

  // アプリ本体のファイル (index.html, app.js, recipes.js など) -> Network First (地下スーパーなどで圏外の場合はキャッシュを利用)
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
        }
        return networkResponse;
      })
      .catch(async () => {
        // オフライン・圏外時: キャッシュから返す (クエリ文字列の違いを許容)
        const cachedResponse = await caches.match(request, { ignoreSearch: true });
        if (cachedResponse) {
          return cachedResponse;
        }
        // HTMLリクエストでキャッシュが見つからない場合は index.html を返す
        if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html', { ignoreSearch: true });
        }
      })
  );
});
