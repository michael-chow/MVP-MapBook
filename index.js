var map, marker, panorama, sv, processSVData;
var placeLocation = {test: 'test'};
var collection = [];
var initPos = {lat: 37.4220917, lng: -122.082843};
var pov = {heading: 250, pitch: 5}
function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    streetViewControl: false,
    mapTypeId: 'terrain'
  });
  map.setCenter(initPos);
  //create marker for the map
  marker = new google.maps.Marker({
    map: map,
    position: initPos,
    anchorPoint: new google.maps.Point(0, -29),
    animation: google.maps.Animation.DROP,
    draggable: true
  });
  //create panorama
  panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
    position: initPos,
    pov: pov,
    linksControl: false,
    motionTracking: false,
    motionTrackingControl: false
  });

  google.maps.StreetViewSource = 'outdoor';

  sv = new google.maps.StreetViewService();

  processSVData = function (data, status) {
    if (status === 'OK') {

      panorama.setPano(data.location.pano);
      panorama.setPov(pov);

      panorama.setVisible(true);
      var lat = data.location.latLng.lat();
      var lng = data.location.latLng.lng();
      var des = data.location.description
      placeLocation = {lat: lat, lng: lng, des: des};
      console.log(placeLocation);
      map.setCenter(placeLocation);
      map.setZoom(15);
      marker.setPosition(placeLocation);
      marker.setVisible(true);
    } else {
      console.error('Street View data not found for this location.');
    }
  }

  var input = document.getElementById("searchLocation");
  // panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var autoComplete = new google.maps.places.Autocomplete(input);
  
  autoComplete.addListener('place_changed', function() {
    var place = autoComplete.getPlace();
    placeLat = place.geometry.location.lat();
    placeLng = place.geometry.location.lng();
    placeLocation = {lat: placeLat, lng: placeLng};
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    } else {
      sv.getPanorama({location: placeLocation, radius: 50}, processSVData);
    }
  });

  marker.addListener('mouseup', function(event) {
    sv.getPanorama({location: event.latLng, radius: 50}, processSVData);
  });

};

function loadMap (obj) {
  var map_load = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    streetViewControl: false,
    mapTypeId: 'terrain'
  });
  map_load.setCenter(obj);
  //create marker for the map
  var marker_load = new google.maps.Marker({
    map: map_load,
    position: obj,
    anchorPoint: new google.maps.Point(0, -29),
    animation: google.maps.Animation.DROP,
    draggable: true
  });
  //create panorama
  panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
    position: obj,
    pov: pov,
    linksControl: false,
    motionTracking: false,
    motionTrackingControl: false
  });
}
