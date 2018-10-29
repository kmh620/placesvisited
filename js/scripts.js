function PlaceBeen() {
  this.placesbeen = []
}

PlaceBeen.prototype.addPlace = function(place){
  this.placesbeen.push(place);
}


function Place(location, landmark, dates, notes) {
  this.location = location,
  this.landmark = landmark,
  this.dates = dates,
  this.notes = notes
}

Place.prototype.displayProperties = function() {
  return ths.location + this.landmark + this.dates + this.notes;
}
var placeBeen = new PlaceBeen();
var  locationPlace = new Place("PDX", "Bridges", "3-3-2009", "Rained");
var locationPlace2 = new Place("Seattle", "Space Needle", "5-11-2012", "Opened for visitors");
placeBeen .addPlace(locationPlace);
placeBeen.addPlace(locationPlace2);
