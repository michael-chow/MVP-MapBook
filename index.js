function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      zoom: 8
    });
  var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
  	position: {lat: 37.869260, lng: -122.254811},
  	pov: {heading: 165, pitch: 0},
  	motionTrackingControlOptions: {
    	position: google.maps.ControlPosition.LEFT_BOTTOM
  	}
  });
};