var keyword, keyword_proper;
var name, imageURL, date, time, city, country, longitude, latitude, venue, purchaseURL, priceMin, priceCurrency;
var resultList = [], selection;

//add firebase and initialize


$("#submitButton").on("click", function(event) {
    event.preventDefault();
    keyword = $("#searchBox").val();
    keyword = keyword.toUpperCase();
    
    keyword_proper = keyword.replace(" ", "+");
    ticketSearch(keyword_proper);
    // postResult();

})

function ticketSearch(keyword_proper) {
    $.ajax({
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=UV7tg3MFc3j8tiYWVw0b5ffsRuC6hGLb&keyword=" + keyword_proper,
        method: "GET"
      }).then(function(response) {

        // console.log(response);

        for(var i = 0; i<response._embedded.events.length; i++ ){
            name = response._embedded.events[i].name;
            imageURL = response._embedded.events[i].images[4].url;
            date = response._embedded.events[i].dates.start.localDate;
            time = response._embedded.events[i].dates.start.localTime;
            city = response._embedded.events[i]._embedded.venues[0].city.name;
            country = response._embedded.events[i]._embedded.venues[0].country.countryCode;
            longitude = response._embedded.events[i]._embedded.venues[0].location.longitude;
            latitude = response._embedded.events[i]._embedded.venues[0].location.latitude;
            venue = response._embedded.events[i]._embedded.venues[0].name;
            purchaseURL = response._embedded.events[i].url;
            priceMin = response._embedded.events[i].priceRanges[0].min;
            priceCurrency = response._embedded.events[i].priceRanges[0].currency;

            resultList[i] = {
                Name: name,
                Image: imageURL,
                Date: date,
                Time: time,
                City: city,
                Country: country,
                Long: longitude,
                Lat: latitude,
                Venue: venue,
                Purchase: purchaseURL,
                PriceMin: priceMin,
                Currency: priceCurrency
            }
        };

        // console.log(resultList);

        localStorage.setItem("resultList", JSON.stringify(resultList));
    });


}


// keyword and resultList[0].Image to firebase
// ppl's recent searches, make them searchable
