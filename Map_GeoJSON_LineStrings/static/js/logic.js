// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let nightNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dayNav = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v2/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  NightNav: nightNav,
  DayNav: dayNav
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [nightNav]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/luke-c-newell/Mapping_Earthquakes/Map_GeoJSON_LineStrings/Map_GeoJSON_LineStrings/torontoRoutes.json";

// Create line style
var myStyle = {
  "color": "lightyellow",
  "weight": 2
};

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  // Add style
  style: myStyle,
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    // console.log(layer);
    layer.bindPopup(`<h2>Airline Code: ${feature.properties.airline}</h2><hr><h3>Destination: ${feature.properties.dst}</h3>`);
  }
  }).addTo(map);
});
