import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

// Registrar el Service Worker
const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registrado con éxito:", registration);

          // Si hay un service worker en estado 'waiting', forzar la activación
          if (registration.waiting) {
            registration.waiting.postMessage({ action: "skipWaiting" });
          }

          // Detectar cuando un nuevo Service Worker está esperando
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                // Notificar al usuario que hay una nueva versión disponible
                console.log("Nueva versión de la aplicación disponible");
              }
            });
          });
        })
        .catch((error) => {
          console.log("Error al registrar el Service Worker:", error);
        });
    });
  }
};

// Renderizar la aplicación de React
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

registerServiceWorker();
