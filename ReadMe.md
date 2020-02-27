# Protractor Cucumber Framework 

This framework uses, protractor cucumber framework with Chai assertion library.


## Pre-requisite

- Download and install Node.js (https://nodejs.org/en/download/)
> npm install 
- Download and install JDK
- Navigate to folder where package.json file is stored.
- To download all dependencies required run:
> npm install
> 

## Running End to End tests

The end to end tests are stored in the e2e folder. To download all modules required run:
> npm install

- install protractor reference https://www.protractortest.org/#/

>npm install -g protractor

- Update webdriver manager 
>webdriver-manager update

- Start the webdriver manager 
> webdriver-manager start


- To run the end to end test in chrome
> protractor conf.js

# Project structure
## features 
- Features define the Gherkin feature file for this framework

## step Definitions
- These define the Cucumber feature definitions.
- Each test case or test step is defined here along with the assestions on the result

## PageOjects 
- Store the locators and functions associated with the locators 
- eg. ebay.js will store all the locators and functions which act on the locators
- Page objects are great design ways to encapsulate the information and impliment funcations. 
- Essestially we should have page objects need to be created for the scope the web page. or One per webpage. 
- Easy to maintain as changes to any identification and functionality would be managed at one place.
- This article reference gives us more detailed insights https://semaphoreci.com/community/tutorials/using-page-objects-with-protractor-and-cucumber-in-angular-applications






