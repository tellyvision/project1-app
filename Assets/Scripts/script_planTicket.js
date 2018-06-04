var index, savedResult, selectionData;

savedResult = localStorage.getItem("resultList");
index = localStorage.getItem("selectedIndex");
savedResult = JSON.parse(savedResult);

selectionData = savedResult[index];
console.log(selectionData);

$("#selectedDate").text(selectionData.Date);
$("#selectedTime").text(selectionData.Time);
$("#selectedLoc").text(selectionData.City + " " + selectionData.Country);
$("#selectedVen").text(selectionData.Venue);

$("#selectedLink").on("click", function() {
  window.location.href(selectionData.Purchase);
})




