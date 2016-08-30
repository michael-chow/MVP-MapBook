angular.module('search', [])
  .controller('searchCtrl', function($scope, $window) {
    $window.initMap();
    $scope.loc = $window.placeLocation;
    $scope.listen = function() {
      $scope.loc = $window.placeLocation;
    };
    $scope.save = function() {
      $window.collection.push($window.placeLocation);
      console.log($window.collection);
    }
  });

// var map, marker, panorama, sv, processSVData, placeLocation;
// var initPos = {lat: 37.869260, lng: -122.254811};
// var initMap = function() {
//   // Create a map object and specify the DOM element for display.
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: new google.maps.LatLng(37.869260, -122.254811),
//     zoom: 16
//   });
//   //create marker for the map
//   marker = new google.maps.Marker({
//     map: map,
//     position: initPos,
//     anchorPoint: new google.maps.Point(0, -29),
//     animation: google.maps.Animation.DROP,
//     draggable: true
//   });
//   //create panorama
//   panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), {
//     position: initPos,
//     pov: {heading: 165, pitch: 0},
//     linksControl: false,
//     motionTracking: false,
//     motionTrackingControl: false
//   });

//   sv = new google.maps.StreetViewService();

//   processSVData = function (data, status) {
//     if (status === 'OK') {

//       panorama.setPano(data.location.pano);
//       panorama.setPov({
//         heading: 180,
//         pitch: 0
//       });
      
//       panorama.setVisible(true);
//       var lat = data.location.latLng.lat();
//       var lng = data.location.latLng.lng();
//       placeLocation = {lat: lat, lng: lng};
//       console.log(placeLocation);
//       map.setCenter(placeLocation);
//       map.setZoom(16);
//       marker.setPosition(placeLocation);
//       marker.setVisible(true);
//     } else {
//       console.error('Street View data not found for this location.');
//     }
//   }

//   var input = document.getElementById("searchLocation");
//   var autoComplete = new google.maps.places.Autocomplete(input);
  
//   autoComplete.addListener('place_changed', function() {
//     var place = autoComplete.getPlace();
//     placeLat = place.geometry.location.lat();
//     placeLng = place.geometry.location.lng();
//     placeLocation = {lat: placeLat, lng: placeLng};
//     if (!place.geometry) {
//       window.alert("Autocomplete's returned place contains no geometry");
//       return;
//     } else {
//       sv.getPanorama({location: placeLocation, radius: 50}, processSVData);
//     }
//   });

//   marker.addListener('mouseup', function(event) {
//     sv.getPanorama({location: event.latLng, radius: 50}, processSVData);
//   });

// };


