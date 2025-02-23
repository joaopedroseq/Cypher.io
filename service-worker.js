const CACHE_NAME = 'offline-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icons/launchericon-48-48.png',
    '/icons/launchericon-72-72.png',
    '/icons/launchericon-96-96.png',
    '/icons/launchericon-144-144.png',
    '/icons/launchericon-192-192.png',
    '/icons/launchericon-512-512.png'
];

// Install the service worker and cache the necessary files
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting(); // Activate the new service worker immediately
});

// Activate the service worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName !== CACHE_NAME;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
    self.clients.claim(); // Take control of all open clients
});

// Fetch the resources from the cache only
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                } else {
                    // If the request is not in the cache, respond with a fallback
                    return caches.match('/');
                }
            })
    );
});
