function initMap() {
  // Map options
  var options = {
    zoom: 12,
    center: { lat: 39.768788, lng: -86.158055 }
  };
  // Adding "new" map, actually initializing the map on the screen
  var indianapolisMap = new google.maps.Map(document.getElementById("moreComplexMap"), options);




  // Add marker function, takes in coordinates, icons, and animations
  // if the marker doesn't have an icon, default is used

  function addMarker(props){
          var marker = new google.maps.Marker({
            position:props.coordinates,
            map:indianapolisMap,
          });

          // Check for customization, if not, returns default:
          // special icons
          if(props.iconImg){
            // Set icon image
            marker.setIcon(props.iconImg);
          }

          // animations?
          if(props.animating){
            // Set icon image
            marker.setAnimation(props.animating);
          }

          // draggable?
          if(props.canBeDragged){
            // Set icon image
            marker.setDraggable(props.canBeDragged);
          }

          // special popup content
          if(props.popUpWindow){
            var infoWindow = new google.maps.InfoWindow({
              content:props.popUpWindow
            });
            // remember to add a listener for when the item gets clicked on
            marker.addListener('click', function(){
              infoWindow.open(indianapolisMap, marker);
            });
          }
        }

  /* adding coordinates and icon with the variables,
  this way you can grab what is needed through the property*/
  const indianapolis = {
    coordinates:{lat: 39.7684, lng: -86.1581},
    iconImg:'https://maps.google.com/mapfiles/kml/pal5/icon5.png',
    popUpWindow:'<h1>Drop on the cirlce!</h1>',
    animating: google.maps.Animation.DROP
  }

  const zoo = {
    coordinates:{lat: 39.768209, lng: -86.181320},
    iconImg:'https://maps.google.com/mapfiles/kml/pal5/icon14.png',
    popUpWindow:'<h1>Bounce to the Zoo!</h1>',
    animating: google.maps.Animation.BOUNCE
  }


  const fogoDeChao = {
    coordinates:{lat:39.767273, lng:-86.155523},
    iconImg:'https://maps.google.com/mapfiles/kml/pal3/icon32.png',
    popUpWindow:'<h3>Fogo de Chao</h3>'
  }

  const draggableMarker = {
    coordinates:{lat:39.780528, lng: -86.179599},
    iconImg:'https://maps.google.com/mapfiles/kml/pal5/icon6s.png',
    popUpWindow:'<h3>I\'m draggable!</h3>',
    canBeDragged: true,
  }

	// adding the markers
  addMarker(indianapolis);
  addMarker(zoo);
  addMarker(fogoDeChao);
  addMarker(draggableMarker);

}
