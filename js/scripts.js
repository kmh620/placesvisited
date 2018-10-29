function PlaceBeen() {
  this.placesbeen = []
}

function Place(location, landmark, dates, notes) {
  this.location = location,
  this.landmark = landmark,
  this.dates = dates,
  this.notes = notes;
}

PlaceBeen.prototype.addPlace = function(place) {
  this.placesbeen.push(place);
  return this.location + this.landmark + this.dates + this.notes;
}
//User Interface Logic
var placeList = new PlaceBeen();
$(document).ready(function() {
  $("#add-place").submit(function(event){
  event.preventDefault();
  var inputtedCity = $("input#city").val();
  var inputtedLandmark = $("input#landmark").val();
  var inputtedDates = $("input#dates").val();
  var inputtedNotes = $("input#notes").val();
  var newPlace = new Place(inputtedCity, inputtedLandmark, inputtedDates, inputtedNotes);
  placeList.addPlace(newPlace);

  $("#placeList").append("<li>" + inputtedCity + "</li>");

  $("li").click(function(){
    $("#showresult").slideToggle();
    //$("#showresult").addClass("light");
  });

});
});
