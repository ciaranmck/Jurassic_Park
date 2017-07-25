var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function() {

  var dinosaur;
  var park;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Velociraptor", 2);
    dinosaur2 = new Dinosaur("Gallimimus", 10);
    dinosaur1 = new Dinosaur("Tyrannosaurus Rex", 1);
    park = new Park("Jurassic Park");
  });

  it("should have a name", function() {
    assert.strictEqual(park.name, "Jurassic Park");
  });

});