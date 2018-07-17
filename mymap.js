var myKey = config.MY_KEY;
var mymap = L.map('mapid').setView([52.95, -1.15], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: myKey
}).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
    // popup
    //     .setLatLng(e.latlng)
    //     .setContent("You clicked the map at " + e.latlng.toString())
    //     .openOn(mymap);

    var latlongFormatted = e.latlng.lat.toFixed(4) + "," + e.latlng.lng.toFixed(4);
    document.querySelector("#selectedLonglat").value = latlongFormatted;
}

mymap.on('click', onMapClick);
