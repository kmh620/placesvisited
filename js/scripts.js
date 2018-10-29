function PlaceBeen() {
  this.placesbeen = [],
  this.currentId = 0
}

PlaceBeen.prototype.addPlace = function(place){
  place.id = this.assignId();
  this.placesbeen.push(place);
}

PlaceBeen.prototype.assignId =function() {
  this.currentId += 1;
  return this.currentId;
}

function Place(location, landmark, dates, notes) {
  this.location = location,
  this.landmark = landmark,
  this.dates = dates,
  this.notes = notes
}

Place.prototype.displayProperties = function() {
  return ths.location + this.landmark + this.dates + this.notes;
  //console.log(ths.location + this.landmark + this.dates + this.notes);
}

var placeBeen = new PlaceBeen();
var  locationPlace = new Place("PDX", "Bridges", "3-3-2009", "Rained");
placeBeen.addPlace(locationPlace);
//User Interface Logic
$(document).ready(function() {
  $("#results").submit(function(event){
  event.preventDefault();
  var inputtedCity = $("input#city").val();
  var inputtedLandmark = $("input#landmark").val();
  var inputtedDates = $("input#dates").val();
  var inputtedNotes = $("input#notes").val();
  var newPlace = new Place(inputtedCity, inputtedLandmark, inputtedDates, inputtedNotes);
  placeBeen.addPlace(newPlace)
  console.log(placeBeen.placesbeen)

  // var locationPlace2 = new Place("Seattle", "Space Needle", "5-11-2012", "Opened for visitors");


  $("#showResult").text(displayProperties);
  console.log(PlaceBeen.displayProperties);

});

//   $("#seattle").submit(function(){
//   event.preventDefault();
//   return locationPlace2;
// });

});
