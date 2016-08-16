var expect = require('chai').expect;
var should = require("chai").should();
var calculator = require("../calculator/add");

describe("A basic test", function(){

	it("Basic test", function(){
		expect(true).to.be.true;
	});

	it("Add Test using expect", function(){				
		var total = calculator.add(2,3);
		expect(total).to.equal(5);
	})

	it("Add Test using should", function(){				
		var total = calculator.add(2,3);
		total.should.equal(5);
	})
});