var map, panorama, sv, processSVData, placeLocation;
function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(37.869260, -122.254811),
      zoom: 8
    });
  //create marker for the map
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29),
    animation: google.maps.Animation.DROP,
    draggable: true
  });
  //create panorama
  panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
    position: {lat: 37.869260, lng: -122.254811},
    pov: {heading: 165, pitch: 0},
    motionTrackingControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });

  sv = new google.maps.StreetViewService();

  processSVData = function (data, status) {
    if (status === 'OK') {

      panorama.setPano(data.location.pano);
      panorama.setPov({
        heading: 180,
        pitch: 0
      });
      panorama.setVisible(true);
    } else {
      console.error('Street View data not found for this location.');
    }
  }

  var input = document.getElementById("searchLocation");
  panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var autoComplete = new google.maps.places.Autocomplete(input);
  
  autoComplete.addListener('place_changed', function() {
    var place = autoComplete.getPlace();
    placeLat = place.geometry.location.lat();
    placeLng = place.geometry.location.lng();
    placeLocation = {lat: placeLat, lng: placeLng};

    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
      sv.getPanorama({location: placeLocation, radius: 50}, processSVData);
      map.setCenter(place.geometry.location);
      map.setZoom(15);
    } else {
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  });

  marker.addListener('mouseup', function(event) {
    placeLocation = event.latLng
    sv.getPanorama({location: event.latLng, radius: 50}, processSVData);
  });

  panorama.addListener('pano_changed', function() {
    var newLocation = panorama.getPosition()
    map.setCenter(newLocation);
    marker.setPosition(newLocation);
    placeLocation = newLocation
  });
};
