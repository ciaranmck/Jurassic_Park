var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function() {

  var dinosaur;
  var park;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Velociraptor", 2);
    dinosaur2 = new Dinosaur("Gallimimus", 10);
    dinosaur3 = new Dinosaur("Tyrannosaurus Rex", 1);
    dinosaur4 = new Dinosaur("Velociraptor", 1);
    park = new Park("Jurassic Park");
  });

  it("should have a name", function() {
    assert.strictEqual(park.name, "Jurassic Park");
  });

  it("should have an empty enclosure", function() {
    assert.strictEqual(0, park.enclosure.length);
  })

  it("can add dinosaur to enclosure", function() {
    park.addDinosaur(dinosaur1);
    assert.strictEqual(1, park.enclosure.length);
  })

  it("can remove dinosaur's by type", function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur3);
    park.removeDinoByType("Velociraptor");
    assert.strictEqual(2, park.enclosure.length);
  })

});