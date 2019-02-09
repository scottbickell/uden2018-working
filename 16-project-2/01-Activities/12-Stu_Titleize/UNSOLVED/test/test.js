var expect = require("chai").expect;
var titleize = require("../titleize.js");

describe("titleize", function () {
  it("to capitalize initial letters of each word", function () {
    expect(titleize("scott bickell")).to.equal("Scott Bickell");
  });

  it('to append a period to leading titles', function() {
    expect(titleize("dr doom")).to.equal("Dr. Doom");
  })
});