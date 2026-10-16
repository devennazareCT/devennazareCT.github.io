// Standalone test service worker (scope /push-test/) — does not touch the CleverTap worker on scope "/"
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch (_) { data = { title: 'Push', message: e.data && e.data.text() }; }
  const { title = 'Test push', message = '', url = '/' } = data;
  e.waitUntil(self.registration.showNotification(title, {
    body: message,
    icon: '/icon-192.png',
    data: { url }
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil(clients.openWindow(url));
});
