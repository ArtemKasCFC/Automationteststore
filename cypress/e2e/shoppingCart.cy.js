import MainPage from "../support/pageObject/mainPage"
import ProductPage from "../support/pageObject/productPage"
import AddItem from "../support/pageObject/addItem"

/// <reference types="Cypress" />

describe('Adding an item to the shopping cart', () => {

  const mainPage = new MainPage(),
        productPage = new ProductPage(),
        addItem = new AddItem()
  
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('Add an item to the shopping cart from main page', () => {
    mainPage.addItemByName('Skinsheen Bronzer Stick', 'Brunette expressions Conditioner', 'Total Moisture Facial Cream')
  })

  it.skip('Add an item to the shopping cart from product page', () => {
    productPage.addItem('Brunette expressions Conditioner', 1)
  })

  it("Add an item to the shopping cart from the search results page", () => {
    // cy.get(`[href*="category&path=${/\d{2}/}"]`).contains('Men').click()
    // cy.get('.categorymenu').contains('Makeup').siblings('.subcategories').contains('Eyes').click({force : true})
    // cy.get('#brandcarousal [alt="Benefit"]').click()
    cy.visit('/index.php?rt=product/product&path=58&product_id=77')
    addItem.addItem('Men+Care Active Clean Shower Tool', 2)

  });

  it.skip('Remove an item from the shopping cart by changing quantity', () => {
    productPage.addItem('Brunette expressions Conditioner')
    cy.get('#cart_quantity72').clear()
    cy.get('#cart_update').click()
    cy.get('.contentpanel').then(text => {
      expect(text.text()).include('Your shopping cart is empty!')
    })
  })

  it.skip('Remove an item from the shopping cart by remove button', () => {
    productPage.addItem('Brunette expressions Conditioner')
    cy.get(':nth-child(7) > .btn').click()
    cy.get('.contentpanel').then(text => {
      expect(text.text()).include('Your shopping cart is empty!')
    })
  })
})