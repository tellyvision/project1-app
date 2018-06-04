var savedResult, savedKeyword, selection;

postResult();

function postResult() {

    savedResult = localStorage.getItem("resultList");
    savedKeyword = localStorage.getItem("keyword");
    savedResult = JSON.parse(savedResult);

    console.log(savedResult);
    console.log(savedKeyword);

    for (var j = 0; j< savedResult.length; j++) {

        // var optionHolder = $("<div>").attr("class", "optionHolder space-marg rounded border border-secondary");
        // optionHolder.attr("id", j);
        // var optionDate = $("<div>").attr("class", "optionDate");
        // optionDate.attr("id", "date"+j);
        // var optionTime = $("<div>").attr("class", "optionTime");
        // optionTime.attr("id", "time"+j);
        // var optionLoc = $("<div>").attr("class", "optionLoc");
        // optionLoc.attr("id", "loc"+j);
        // var optionVen = $("<div>").attr("class", "optionVen");
        // optionVen.attr("id", "ven"+j);
        // var optionLink = $("<button>").attr("class", "optionLink");
        // optionLink.text("click for detail");

        var optionHolder = $("<div>").attr("class", "space-marg rounded border border-secondary optionHolder");
        optionHolder.attr("id", j);
        var inner1_div1 = $("<div>").attr("class", "option-bar-inner1 div1");
        // inner1_div1.attr("id", "div1"+j);
        var inner1_div2 = $("<div>").attr("class", "option-bar-inner1 div2");
        // inner1_div2.attr("id", "div2"+j);
    
        var inner2_div1_1 = $("<div>").attr("class", "option-bar-inner2 div1-1");
        // inner2_div1_1.attr("id", "div1-1"+j);
        var inner2_div1_2 = $("<div>").attr("class", "option-bar-inner2 div1-2");
        // inner2_div1_2.attr("id", "div1-2"+j);
    
        var optionDate = $("<div>").attr("id", "optionDate"+j);
        optionDate.text(savedResult[j].Date);
        var optionTime = $("<div>").attr("id", "optionTime"+j);
        optionTime.text(savedResult[j].Time);
        var optionLoc = $("<div>").attr("id", "optionLoc"+j);
        optionLoc.text(savedResult[j].City + ", " + savedResult[j].Country);
        var optionVen = $("<div>").attr("id", "optionVen"+j);
        optionVen.text(savedResult[j].Venue);
    
        var optionLink = $("<button>").attr("class", "optionLink btn btn-primary");
        optionLink.text("Click For Details")
    
        inner2_div1_1.html(optionDate);
        inner2_div1_1.append(optionTime);
        inner2_div1_2.html(optionLoc);
        inner2_div1_2.append(optionVen);
    
        inner1_div1.html(inner2_div1_1);
        inner1_div1.append(inner2_div1_2);
    
        inner1_div2.html(optionLink);

        optionHolder.html(inner1_div1);
        optionHolder.append(inner1_div2);

        $("#usr-search").text(savedKeyword);
        $("#small-container").append(optionHolder);
        console.log($(this).parent().parent().attr("id"))

    }
}

$(document).on("click",'.optionLink',function(event) {
    event.preventDefault;
    selection = $(this).parent().parent().attr("id");
    selection = parseInt(selection);
    localStorage.setItem("selectedIndex", selection);
    window.location.href = "./plan.html";

})


// function createDiv(j) {
//     var optionHolder = $("<div>").attr("class", "space-marg rounded border border-secondary");
//     optionHolder.attr("id", j);
//     var inner1_div1 = $("<div>").attr("class", "option-bar-inner1");
//     inner1_div1.attr("id", "div1"+j);
//     var inner1_div2 = $("<div>").attr("class", "option-bar-inner1");
//     inner1_div2.attr("id", "div2"+j);

//     var inner2_div1_1 = $("<div>").attr("class", "option-bar-inner2");
//     inner2_div1_1.attr("id", "div1-1"+j);
//     var inner2_div1_2 = $("<div>").attr("class", "option-bar-inner2");
//     inner2_div1_1.attr("id", "div1-2"+j);

//     var optionDate = $("<div>").attr("id", "optionDate"+j);
//     var optionTime = $("<div>").attr("id", "optionTime"+j);
//     var optionLoc = $("<div>").attr("id", "optionLoc"+j);
//     var optionVen = $("<div>").attr("id", "optionVen"+j);

//     var optionDate = $("<div>").attr("class", "optionLink");

//     inner2_div1_1.html(optionDate);
//     inner2_div1_1.append(optionTime);
//     inner2_div1_2.html(optionLoc);
//     inner2_div1_2.append(optionVen);

//     inner1_div1.html(inner2_div1_1);
//     inner1_div1.append(inner2_div1_2);

//     inner1_div2.html(optionLink);
// }