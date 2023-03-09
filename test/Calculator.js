//load chai assertion library
const chai = require("chai");
const expect = chai.expect;

const asserttype = require('chai-asserttype');
chai.use(asserttype);


//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("Adds 1 and 2",function(){
	expect(calc.add(1,2)).to.be.equal(3);
  });

    it("multiply 5 x 2",function(){
	   expect (calc.multiply(5,2)).to.be.equal(10);
  });

   it("Add allows one parameter",function(){
	   expect (calc.subtract(3)).to.be.equal(3);
  });

   it("Add allows no parameters",function(){
	   expect (calc.add()).to.be.equal(0);
  });

   it("Add turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });

  
    it("Multiply 5 x 2",function(){
	 expect(calc.multiply(5,2)).to.be.equal(10)
  });

     it("Divided by 3",function(){
	 expect(calc.divide(6,3)).to.be.equal(2)
  });

});