import MainPage from "../support/pageObject/mainPage"
import ProductPage from "../support/pageObject/productPage"

/// <reference types="Cypress" />

describe('Adding an item to the shopping cart', () => {

  const mainPage = new MainPage(),
        productPage = new ProductPage()
  
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('Add an item to the shopping cart from main page', () => {
    mainPage.addItemByName('Skinsheen Bronzer Stick', 'Brunette expressions Conditioner', 'Total Moisture Facial Cream')
  })

  it.skip('Add an item to the shopping cart from product page', () => {
    productPage.addItem('Brunette expressions Conditioner', 32)
  })

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