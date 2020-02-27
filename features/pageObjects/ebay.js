'use strict';  
  
module.exports = {  
        
    ebayPageSelectors: {
        mainSearchBox:element(by.id('gh-ac')),
        mainSearchLink: element(by.id('gh-btn')),
        selectSecondItem: element(by.id('srp-river-results-listing2')),
        creditCardNumber:element(by.id('cardNumber')),
        cardExpiryDate: element(by.id('cardExpiryDate')),
        securityCode:element(by.id('securityCode')),
        doneButton: element(by.buttonText('Done')),
        firstName:element(by.id('firstName')),
        lastName:element(by.id('lastName')),
        addressLine1:element(by.id('addressLine1')),
        city:element(by.id('city')),
        buyButton:element(by.id('binBtn_btn')),
        checkOutPopUpButton:element(by.buttonText('Check out as a guest'))



      },
    

    visit: async function(site) {  
    await     browser.get(site); 
       // browser.waitForAngular();  
    },  
    searchProduct: async function(productName) {  
       await this.ebayPageSelectors.mainSearchBox.sendKeys(productName);
      await  this.ebayPageSelectors.mainSearchLink.click()
       
  
    },  
    selectProduct: async function(productName) {  
        await element(by.linkText(productName)).click();
        await this.ebayPageSelectors.selectSecondItem.click();
        
  
    },
      
    providePaymentDetails: async function(paymentType) {  
        if(paymentType=='Credit Card'){
            elementId='srs2'
          } 
          await element(by.id(elementId)).click();
          await this.ebayPageSelectors.creditCardNumber.sendKeys('5505226233051614');
          await this.ebayPageSelectors.cardExpiryDate.sendKeys('08/20');
          await this.ebayPageSelectors.securityCode.sendKeys('545')
          await this.ebayPageSelectors.doneButton.click(); 
    },


    addAddressDetails: async function(suburb) { 
        await this.ebayPageSelectors.firstName.sendKeys('Naveen');
        await this.ebayPageSelectors.lastName.sendKeys('Siddapa');
        await this.ebayPageSelectors.addressLine1.sendKeys('300 La Trobe St');
        await this.ebayPageSelectors.addressLine1.sendKeys(suburb);
        await element(by.cssContainingText('option', 'Victoria')).click();
        await element(by.id('email')).sendKeys('testing@test.com');
        await element(by.id('emailConfirm')).sendKeys('testing@test.com');
        await element(by.id('phoneNumber')).sendKeys('0499096333');
        await this.ebayPageSelectors.doneButton.click(); 

     },
     BuyActivity:async function(){
         
    await this.ebayPageSelectors.buyButton.click();
    
    await this.ebayPageSelectors.checkOutPopUpButton.click();
    
     }

};