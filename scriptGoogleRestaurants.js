// place the following code in index.html
// <div id="service-helper"></div>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
// <script async defer
//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2fqdkmA9qUXkDg9zKMF2wmnwN4IkykSg&libraries=places&callback=initialize">
//</script>

//change var down below
function initialize() {
    initMap();
    getRelevantGoogleReviews();
  }
  
  window.getRelevantGoogleReviews = function() {
      var service = new google.maps.places.PlacesService($('#service-helper').get(0));
      var concert = new google.maps.LatLng(-33.8665433,151.1956316);
      var request = {
        location: concert,
        radius: '500',
        type: ['restaurant']
      };
      service.nearbySearch(request, callback);
  }
  
  function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
          console.log(results[i].name)
          var restaurantDiv = $("<div>");
          var restaurantName = $("<div>").text(results[i].name).addClass("restaurantName")
          var restaurantAddress  = $("<div>").text(results[i].vicinity).addClass("restaurantAddress")
          var restaurantRating  = $("<div>").text(results[i].rating).addClass("restaurantRating")
          var lat = results[i].geometry.location.lat();
          var lng = results[i].geometry.location.lat();
          console.log(lat)
  
          restaurantDiv.append(restaurantName)
          restaurantDiv.append(restaurantAddress)
          restaurantDiv.append(restaurantRating)
          $("#restaurantList").append(restaurantDiv)
          }
      }
  }
  
  function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }