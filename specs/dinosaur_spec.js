var assert = require("assert");
var Dinosaur = require("../dinosaur");

describe("Dinosaur", function() {

  var dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur("Velociraptor", 2);
  });

  it("should have a type", function() {
    assert.strictEqual(dinosaur.type, "Velociraptor");
  });

  it("should have offspring", function() {
    assert.strictEqual(dinosaur.offspring, 2);
  });

});