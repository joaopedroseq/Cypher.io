const CACHE_NAME = 'offline-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icons/apple-splash-1125-2436.jpg',
    '/icons/apple-splash-1170-2532.jpg',
    '/icons/apple-splash-1179-2556.jpg',
    '/icons/apple-splash-1206-2622.jpg',
    '/icons/apple-splash-1242-2688.jpg',
    '/icons/apple-splash-1284-2778.jpg',
    '/icons/apple-splash-1290-2796.jpg',
    '/icons/apple-splash-1320-2868.jpg',
    '/icons/apple-splash-1488-2266.jpg',
    '/icons/apple-splash-1536-2048.jpg',
    '/icons/apple-splash-1620-2160.jpg',
    '/icons/apple-splash-1640-2360.jpg',
    '/icons/apple-splash-1668-2224.jpg',
    '/icons/apple-splash-1668-2388.jpg',
    '/icons/apple-splash-1792-828.jpg',
    '/icons/apple-splash-2048-1536.jpg',
    '/icons/apple-splash-2048-2732.jpg',
    '/icons/apple-splash-2160-1620.jpg',
    '/icons/apple-splash-2208-1242.jpg',
    '/icons/apple-splash-2224-1668.jpg',
    '/icons/apple-splash-2266-1488.jpg',
    '/icons/apple-splash-2360-1640.jpg',
    '/icons/apple-splash-2388-1668.jpg',
    '/icons/apple-splash-2436-1125.jpg',
    '/icons/apple-splash-2532-1170.jpg',
    '/icons/apple-splash-2556-1179.jpg',
    '/icons/apple-splash-2622-1206.jpg',
    '/icons/apple-splash-2688-1242.jpg',
    '/icons/apple-splash-2732-2048.jpg',
    '/icons/apple-splash-2778-1284.jpg',
    '/icons/apple-splash-2796-1290.jpg',
    '/icons/apple-splash-2868-1320.jpg',
    '/icons/apple-splash-640-1136.jpg',
    '/icons/apple-splash-750-1334.jpg',
    '/icons/apple-splash-828-1792.jpg'
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
