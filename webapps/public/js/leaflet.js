(function () {
    "use strict";

    /* default map */
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    /* maps with markers circles and polygons */
    var shapesmap = L.map('map1').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap'
    }).addTo(shapesmap);
    var marker = L.marker([51.5, -0.09]).addTo(shapesmap);
    var circle = L.circle([51.508, -0.11], {
        color: '#23b7e5',
        fillColor: '#23b7e5',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(shapesmap);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ], {
        color: "#e6533c",
        fillColor: "#e6533c"
    }).addTo(shapesmap);

})();