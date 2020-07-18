const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const Calculator = require('../../public/js/calculator');
const { element } = require('protractor');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

   it('should update the display when a numner is pressed', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number1')).click();
     element(by.css('#number2')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('12')
   })


});
