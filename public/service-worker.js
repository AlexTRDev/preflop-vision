const CACHE_NAME = "preflop-vision-v1.1"; // Cambia la versión cada vez que actualices el caché
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon-32x32.png",
  // Otras rutas que quieras cachear
];

// Evento de instalación: Cacha los archivos especificados
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache abierto");
      return cache.addAll(urlsToCache);
    })
  );
  // Forzar la activación del nuevo Service Worker sin esperar
  self.skipWaiting();
});

// Evento de activación: Limpia cachés viejos
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log(`Borrando caché antigua: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Toma el control de las páginas inmediatamente después de activar
  return self.clients.claim();
});

// Evento de fetch: Responde con recursos del caché o realiza una solicitud de red
self.addEventListener("fetch", (event) => {
  // Ignorar peticiones que no son GET (como POST)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Devuelve respuesta desde el caché si existe, si no, hace fetch de la red
      return (
        response ||
        fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Guarda la respuesta en el caché para futuras solicitudes
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
      );
    })
  );
});

// Escucha el mensaje para realizar un skipWaiting manualmente
self.addEventListener("message", (event) => {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
