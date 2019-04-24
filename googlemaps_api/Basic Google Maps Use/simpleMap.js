// basic tutorial of adding markers,
// but only good for one at a time:

// have to initialize the map

function initMap(){
  // Map options
  const options = {
    zoom: 12,
    center: { lat: 39.768788, lng: -86.158055 }
  };

  // Adding "new" map, actually initializing the map on the screen
  const indianapolisMap = new google.maps.Map(
    document.getElementById('simpleMap'),options);

  // adding markers
  // syntax necessary to show default:

  // new google.maps.Marker({position:{}, map:});

  const zooMarker = new google.maps.Marker({
    position: { lat: 39.767904, lng: -86.179539 },
    map: indianapolisMap,
    icon:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });

  // if you want to add a info window, you have to declair it,
  // and also add a listener

  var zooInfoWindow = new google.maps.InfoWindow({
    content: "<h1>Zoo's cafe!!!</h1>"
  });

  // info window listener
  // adding the info window to the marker you want
  // with the open method, specify the map and marker

  zooMarker.addListener("click", function() {
    zooInfoWindow.open(indianapolisMap, zooMarker);
  });
};
