// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center at SFO.
let map = L.map('mapid').setView([39.0561, -95.6953], 4);

// Coordinates for each airport to be used in the polyline.
let line = [
    [37.6213, -122.3790], // SFO
    [30.1900, -97.6687],  // AUS
    [39.2980, -94.7170],  // KCI
    [43.6777, -79.6248],  // YYZ
    [40.6413, -73.7781]   // JFK
  ];  

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '4, 10'
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our tile layer to the map.
light.addTo(map);
