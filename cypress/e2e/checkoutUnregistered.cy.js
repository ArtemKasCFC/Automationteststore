import AddItem from "../support/pageObject/addItem"
import CheckoutUR from "../support/pageObject/checkutUnregistered"
import RandomValue from "../support/pageObject/random"


/// <reference types="Cypress" />

describe('Checkout (Unregistered user)', () => {

    let addItem = new AddItem(),
        checkoutUR = new CheckoutUR(),
        randomValue = new RandomValue();

    let randomFirstName,
        randomLastName,
        randomEmail,
        randomTelephone,
        randomFax,
        randomCompany,
        randomAddressOne,
        randomAddressTwo,
        randomCity,
        randomZip,
        validRandomValues = [];
   
    beforeEach(() => {
        randomFirstName = randomValue.field(1, 32, "name"),
        randomLastName = randomValue.field(1, 32, "name"),
        randomEmail = randomValue.email(1, 47, 1, 31, 2, 16),                 
        randomTelephone = randomValue.field(3, 32, "telephone"),
        randomFax = randomValue.field(1, 32, "fax"),
        randomCompany = randomValue.field(1, 64, "company"),
        randomAddressOne = randomValue.field(3, 128, "address"),
        randomAddressTwo = randomValue.field(3, 128, "address"),
        randomCity = randomValue.field(3, 128, "city"),
        randomZip = randomValue.field(3, 10, "zipcode");
        validRandomValues = [
          randomFirstName,
          randomLastName,
          randomEmail,
          randomAddressOne,
          randomAddressTwo,
          randomCity,
          "Belarus",
          "Horad Minsk",
          randomZip,
          randomTelephone,
          randomFax,
          randomCompany,
          false
        ];
      cy.visit('/')
    })
    
    it('Confirm the order and check that the order appears in Order history page', () => {
        let sumOfOrder = []
        addItem.addItem('Skinsheen Bronzer Stick', 1)
        cy.get('#totals_table span').not('.extra').each(number => {
            number = +number.text().replace(/[^0-9.]/g, "")
            number = number.toFixed(2)
            sumOfOrder.push(number)
        })
        cy.get('#cart_checkout1').click()
        cy.get('#accountFrm_accountguest').check()
        cy.get('#accountFrm > fieldset > .btn').click()
        checkoutUR.fillInForms(validRandomValues)
        cy.get('.cart-info span').not('.extra').each((number, ind) => {
            console.log(number, +number.text().replace(/[^0-9.]/g, ""))
            number = +number.text().replace(/[^0-9.]/g, "")
            number = number.toFixed(2)
            expect(number).eql(sumOfOrder[ind])
        })
        cy.get('.confirm_shippment_options tr > *')
          .first()
          .should('include.text', validRandomValues[0])
          .and('include.text', validRandomValues[1])
          .and('include.text', validRandomValues[9])
        cy.get('.confirm_shippment_options address')
          .should('include.text', validRandomValues[3])
          .and('include.text', validRandomValues[4])
          .and('include.text', validRandomValues[5])
          .and('include.text', validRandomValues[6])
          .and('include.text', validRandomValues[7])
        cy.get('.confirm_payment_options tr > *')
          .first()
          .should('include.text', validRandomValues[0])
          .and('include.text', validRandomValues[1])
          .and('include.text', validRandomValues[9])
        cy.get('.confirm_payment_options address')
          .should('include.text', validRandomValues[3])
          .and('include.text', validRandomValues[4])
          .and('include.text', validRandomValues[5])
          .and('include.text', validRandomValues[6])
          .and('include.text', validRandomValues[7])
        cy.get('#checkout_btn').click()
        cy.get('.maintext').should('include.text', 'Your Order Has Been Processed!')
        //check order details will be added later
        // cy.get('.contentpanel a').contains('invoice page').click()
        // cy.get('.table-responsive td').contains('Order ID')
        //                               .should('include.text', validRandomValues[2])
        //                               .and('include.text', validRandomValues[9])
        //                               .and('include.text', validRandomValues[10])
        // cy.get('.table-responsive td').contains('Shipping Address')
        // .should('include.text', validRandomValues[2])
        // .and('include.text', validRandomValues[9])
        // .and('include.text', validRandomValues[10])
        // cy.get('.table-responsive td')
    })
  })