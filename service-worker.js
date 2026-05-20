import { precacheAndRoute } from 'workbox-precaching';

// 🔁 Precache semua file yang dimasukkan Webpack secara otomatis
precacheAndRoute(self.__WB_MANIFEST || []);

// 🔔 Push Notification Handler
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Notification';
  const options = {
    body: data.body || 'You have a new notification.',
    icon: data.icon || '/icons/web-app-manifest-192x192.png',
    badge: data.badge || '/icons/web-app-manifest-192x192.png',
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
