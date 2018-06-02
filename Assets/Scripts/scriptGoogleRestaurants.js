
var restaurantResultList = [], savedResult, selection;

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
        var restaurantName = results[i].name
        var restaurantAddress  = results[i].vicinity
        var restaurantRating  = results[i].rating
        var lat = results[i].geometry.location.lat();
        var lng = results[i].geometry.location.lng();

        restaurantResultList[i] = {
            name: restaurantName,
            address: restaurantAddress,
            rating: restaurantRating,
            lat: lat,
            lng: lng,
        }
        
        localStorage.setItem("restaurantResultList", JSON.stringify(restaurantResultList));
        savedResult = localStorage.getItem("restaurantResultList");
        savedResult = JSON.parse(savedResult);


        var restaurantDiv = $("<div>");
        var restaurantNameDiv = $("<div>").text(restaurantName).addClass("restaurantName")
        var restaurantAddressDiv  = $("<div>").text(restaurantAddress).addClass("restaurantAddress")
        var restaurantRatingDiv  = $("<div>").text(restaurantRating).addClass("restaurantRating")

        restaurantDiv.append(restaurantNameDiv)
        restaurantDiv.append(restaurantAddressDiv)
        restaurantDiv.append(restaurantRatingDiv)
        $("#restaurantList").append(restaurantDiv)

        
        }
    }
}

console.log(restaurantResultList)

// //NO INFO BOX
// function initMap() {
//   // The location of concert
//   var concert = {lat: -33.8665433, lng: 151.1956316};
//   // The map, centered at concert
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 15 , center: concert});
//   // The marker, positioned at concert

//     var marker1 = new google.maps.Marker({position: concert, map: map, title: 'concert location'
//         });
// }


function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
