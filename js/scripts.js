function PlaceBeen() {
  this.placesbeen = [],
  this.currentId = 0
}

function Place(location, landmark, dates, notes) {
  this.location = location,
  this.landmark = landmark,
  this.dates = dates,
  this.notes = notes;
}

PlaceBeen.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.placesbeen.push(place);
  return this.location + this.landmark + this.dates + this.notes;
}

PlaceBeen.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceBeen.prototype.findPlace = function(id){
  for (var i=0; i< this.placesbeen.length; i++) {
    if (this.placesbeen[i]) {
      if (this.placesbeen[i].id == id) {
        return this.placesbeen[i];
      }
    }
  };

  return false;

}

//User Interface Logic
var placeList = new PlaceBeen();

function displayPlaceDetails(placeListToDisplay){
  var locationsList = $("ul#placeList");
  var htmlForLocationInfo = "";
  placeListToDisplay.placesbeen.forEach(function(place){
    htmlForLocationInfo += "<li id=" + place.id + ">" + place.location + "</li>";
  });
  locationsList.html(htmlForLocationInfo);
};

$(document).ready(function() {
  $("#add-place").submit(function(event){
  event.preventDefault();
  var inputtedCity = $("input#city").val();
  var inputtedLandmark = $("input#landmark").val();
  var inputtedDates = $("input#dates").val();
  var inputtedNotes = $("input#notes").val();
  var newPlace = new Place(inputtedCity, inputtedLandmark, inputtedDates, inputtedNotes);
  placeList.addPlace(newPlace);


  displayPlaceDetails(placeList);

  //$("#placeList").append("<li>" + inputtedCity + "</li>");
  //
  // $("li").click(function() {
  // $("#showresult").slideToggle(function() {
  //
  //   })
    //$("#showresult").addClass("light");
  //  $("#showresult.location").text(inputtedCity);
  });



});
