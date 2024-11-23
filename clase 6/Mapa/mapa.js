// Coordenadas de la UAM Lerma
const uamLermaCoords = [19.291395, -99.502075];

// Inicializar el mapa centrado en el Estado de México
const map = L.map('map').setView([19.35, -99.6], 10); // Coordenadas y nivel de zoom

// Agregar un tile layer de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: false,
}).addTo(map);

// Agregar un marcador en la UAM Lerma
const marker = L.marker(uamLermaCoords).addTo(map);
marker.bindPopup('<b>UAM Lerma</b><br>Estado de México.').openPopup();
