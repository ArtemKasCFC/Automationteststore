import MainPage from "../support/pageObject/mainPage"
import ProductPage from "../support/pageObject/productPage"

describe('Adding an item to the shopping cart', () => {

  const mainPage = new MainPage(),
        productPage = new ProductPage()
 
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('Add an item to the shopping cart from main page', () => {
    mainPage.addItemByName('Skinsheen Bronzer Stick', 'Brunette expressions Conditioner')
  })

  it('Add an item to the shopping cart from product page', () => {
    productPage.addItem('Brunette expressions Conditioner')
  })
})