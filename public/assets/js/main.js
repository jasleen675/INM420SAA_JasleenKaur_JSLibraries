document.addEventListener("DOMContentLoaded", function () {
  // Initialize Glide carousel
  const glide = document.querySelector(".glide");
  if (glide) {
    new Glide(glide, {
      type: "carousel",
      perView: 3,
      gap: 30,
      breakpoints: {
        992: { perView: 2 },
        600: { perView: 1 },
      },
    }).mount();
  }

  // Initialize Leaflet map
  const mapElement = document.getElementById("map");
  if (mapElement) {
    const map = L.map("map").setView([20.0, 0.0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const locations = [
      { name: "Paris", coords: [48.8566, 2.3522] },
      { name: "Bali", coords: [-8.3405, 115.092] },
      { name: "Kyoto", coords: [35.0116, 135.7681] },
      { name: "Banff", coords: [51.1784, -115.5708] },
    ];

    locations.forEach((loc) => {
      L.marker(loc.coords).addTo(map).bindPopup(`<b>${loc.name}</b>`);
    });
    map.invalidateSize();
  }
});

AOS.init({
    duration: 800,
    once: false
  });

  // Format phone input with Cleave.js
  new Cleave('#phone', {
    phone: true,
    phoneRegionCode: 'CA' 
  });

  document.getElementById('bookingForm').addEventListener('submit', function (e) {
    if (!this.checkValidity()) {
      e.preventDefault();
    }
  });