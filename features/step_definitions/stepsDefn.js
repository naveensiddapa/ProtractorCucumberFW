//features/step_definitions/my_step_definitions.js
var ebayPage = require('../pageObjects/ebay.js');  
const { Before, Given, When, Then } = require('cucumber')


var chai = require('chai')
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


Given(/^I go to "([^"]*)"$/,{timeout: 2 * 5000}, async function(site) {
  //browser.ignoreSynchronization = true;
  await ebayPage.visit(site);
   expect(ebayPage.ebayPageSelectors.mainSearchBox).to.exist
   expect(ebayPage.ebayPageSelectors.mainSearchLink).to.exist
  
});


When(/^I search for "([^"]*)"$/,  {timeout: 2 * 5000},async function (productName) {
await ebayPage.searchProduct(productName)
  
});

  
  Then(/^I want it be delivered to "([^"]*)" Address$/, async function (suburb) {
   expect(ebayPage.ebayPageSelectors.firstName).to.exist
   expect(ebayPage.ebayPageSelectors.lastName).to.exist
   expect(ebayPage.ebayPageSelectors.city).to.exist
   await ebayPage.addAddressDetails(suburb);
   
  });

  Then(/^I select the "([^"]*)"$/,  {timeout: 2 * 5000},async function (productName) {
   expect(ebayPage.ebayPageSelectors.selectSecondItem).to.exist
   await ebayPage.selectProduct(productName)
    
  });
  Then('I add to my cart to proceed to checkout', {timeout: 2 * 5000}, async function () {
    expect(ebayPage.ebayPageSelectors.buyButton).to.exist
    await  ebayPage.BuyActivity()
  });

  Then(/^I make Payment with my "([^"]*)"$/, async function (paymentType) {
    expect(ebayPage.ebayPageSelectors.creditCardNumber).to.exist
    expect(ebayPage.ebayPageSelectors.securityCode).to.exist
    ebayPage.providePaymentDetails(paymentType)
    
  });
  Then('I Complete my transaction', function () {
    // Write code here that turns the phrase above into concrete actions
    console.log('Needs implimentation');
  });