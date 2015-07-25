var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var sinon = require('sinon');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/chirp.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}


var expect = chai.expect;
var should = chai.should();

describe("Main", function() {
  var sandbox;

  beforeEach(function() {
    // create a sandbox
    sandbox = sinon.sandbox.create();

    // stub some console methods
    // sandbox.stub(console, "log");
    // sandbox.stub(console, "error");
  });

  afterEach(function() {
    // restore the environment as it was before
    sandbox.restore();
  });

  describe("#numberOfChirps", function() {
    it("should be a function", function() {
      (typeof GLOBAL.numberOfChirps).should.equal("function");
    });

    it("should output the number of chirps", function() {
      var num = GLOBAL.numberOfChirps(5);
      expect(numberOfChirps(5)).to.be.a("string");
      expect(numberOfChirps(5)).to.equal("chirp chirp chirp chirp chirp");

      num = GLOBAL.numberOfChirps(1);
      expect(numberOfChirps(1)).to.be.a("string");
      expect(numberOfChirps(1)).to.equal("chirp");

      num = GLOBAL.numberOfChirps(3.14159265359);
      expect(numberOfChirps(3.14159265359)).to.be.a("string");
      expect(numberOfChirps(3.14159265359)).to.equal("Please enter positive whole numbers and/or integers ONLY");
    });

    it("should output the number and string", function() {
      GLOBAL.numberOfChirps(3, "keahi");
      expect(numberOfChirps(3, "keahi")).to.be.a("string");
      expect(numberOfChirps(3, "keahi")).to.equal("keahi keahi keahi");

      GLOBAL.numberOfChirps(1, "Paul");
      expect(numberOfChirps(1, "Paul")).to.be.a("string");
      expect(numberOfChirps(1, "Paul")).to.equal("Paul");

      GLOBAL.numberOfChirps(-2, "hey");
      expect(numberOfChirps(-2, "hey")).to.be.a("string");
      expect(numberOfChirps(-2, "hey")).to.equal("Please enter positive whole numbers and/or integers ONLY");
    });
  });

});