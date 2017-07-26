var Park = function(name) {
  this.name = name
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.enclosure.push(dinosaur)
}

Park.prototype.removeDinoByType = function(dinosaurType) {
    var i = this.enclosure.length;
    while(i--) {
      if (this.enclosure[i].type === dinosaurType) {
        this.enclosure.splice(i,1);
    }
  }
}

Park.prototype.remove

module.exports = Park;