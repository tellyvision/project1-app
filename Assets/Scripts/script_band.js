var savedResult, savedKeyword, selection;

postResult();

function postResult() {

    savedResult = localStorage.getItem("resultList");
    savedKeyword = localStorage.getItem("keyword");
    savedResult = JSON.parse(savedResult);

    console.log(savedResult);
    console.log(savedKeyword);

    for (var j = 0; j< savedResult.length; j++) {

        var optionHolder = $("<div>").attr("class", "optionHolder space-marg rounded border border-secondary");
        optionHolder.attr("id", j);
        var optionDate = $("<div>").attr("class", "optionDate");
        optionDate.attr("id", "date"+j);
        var optionTime = $("<div>").attr("class", "optionTime");
        optionTime.attr("id", "time"+j);
        var optionLoc = $("<div>").attr("class", "optionLoc");
        optionLoc.attr("id", "loc"+j);
        var optionVen = $("<div>").attr("class", "optionVen");
        optionVen.attr("id", "ven"+j);
        var optionLink = $("<button>").attr("class", "optionLink");
        optionLink.text("click for detail");


        console.log(savedResult[j].Date);
        optionDate.text(savedResult[j].Date);
        // console.log(savedResult[j].Time);
        optionTime.text(savedResult[j].Time);
        // console.log(savedResult[j].City + ", " + savedResult[j].Country);
        optionLoc.text(savedResult[j].City + ", " + savedResult[j].Country);
        // console.log(savedResult[j].Venue);
        optionVen.text(savedResult[j].Venue);

        optionHolder.html(optionDate);
        optionHolder.append(optionTime);
        optionHolder.append(optionLoc);
        optionHolder.append(optionVen);
        optionHolder.append(optionLink);

        $("#usr-search").text(savedKeyword);
        $("#small-container").append(optionHolder);


    }
}

$(document).on("click",'.optionLink',function(event) {
    event.preventDefault;
    selection = $(this).parent().attr("id");
    selection = parseInt(selection);
    localStorage.setItem("selectedIndex", selection);
    window.location.href = "./plan.html";

})
