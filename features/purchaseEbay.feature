Feature: Running Cucumber with Protractor
    As a customer 
    I should be able to search for an item,
    add to cart, 
    proceed to checkout
    and provide my personal
    and dummy payment details to purchase an item.
    Scenario: Buying a product on Amazon.com.au
        Given I go to "https://www.ebay.com.au/"
        When I search for "Toy Story 4 [2 Disc] (Blu-ray)"
        Then I select the "Toy Story 4 [2 Disc] (Blu-ray)"
        And  I add to my cart to proceed to checkout
        Then I want it be delivered to "Melbourne" Address
        And I make Payment with my "Credit Card"
        And I Complete my transaction

