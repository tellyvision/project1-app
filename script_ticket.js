var keyword;
var name, imageURL, date, time, city, country, longitude, latitude, venue, purchaseURL, priceMin, priceCurrency;
var resultList = [], savedResult, selection;

$("#submitButton").on("click", function(event) {
    event.preventDefault();
    keyword = $("#searchBox").val();
    keyword = keyword.replace(" ", "+");
    ticketSearch(keyword);
    postResult();

})

function ticketSearch(keyword) {
    $.ajax({
        url: "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=UV7tg3MFc3j8tiYWVw0b5ffsRuC6hGLb&keyword=" + keyword,
        method: "GET"
      }).then(function(response) {

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

function postResult() {

    savedResult = localStorage.getItem("resultList");
    savedResult = JSON.parse(savedResult);

    // console.log(savedResult);

    for (var j = 0; j< 5; j++) {

        // console.log(savedResult[j].Date);
        $("#date"+j).text(savedResult[j].Date);
        // console.log(savedResult[j].Time);
        $("#time"+j).text(savedResult[j].Time);
        // console.log(savedResult[j].City + ", " + savedResult[j].Country);
        $("#loc"+j).text(savedResult[j].City + ", " + savedResult[j].Country);
        // console.log(savedResult[j].Venue);
        $("#ven"+j).text(savedResult[j].Venue);

    }
}

$(".link").on("click", function(event) {
    event.preventDefault;
    selection = $(this).parent().attr("id");
    console.log(selection);
    console.log($("#date4").length);
    // window.location = 'https://google.ca';

})