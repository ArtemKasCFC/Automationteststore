import Banners from "../support/pageObject/heroImage"


/// <reference types="Cypress" />

describe('Check HeroImage', () => {

    const heroImage = new HeroImage()
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Check that hero image in the main page can be changed automatically', () => {
        heroImage.checkBannersVisibility(9, 10, 17)
        cy.wait(7000)
        heroImage.checkBannersVisibility(10, 9, 17)
        cy.wait(7000)
        heroImage.checkBannersVisibility(17, 9, 10)
    })

    it('Check that hero image in the main page can be changed by arrow button', () => {
        heroImage.checkBannersVisibility(9, 10, 17)
        cy.get('.nextArrow').click({force: true})
        heroImage.checkBannersVisibility(10, 9, 17)
        cy.get('.prevArrow').click({force: true})
        heroImage.checkBannersVisibility(9, 10, 17)
    })

    it('Check that hero image in the main page can be changed by drag and drop', () => {
        heroImage.checkBannersVisibility(9, 10, 17)
        cy.get('[data-banner-id="9"').trigger('mousedown', { which: 1})
                                     .trigger('mousemove', { which: 1, pageX: 100, pageY: 600 })
                                     .trigger('mouseup', {force: true})
        heroImage.checkBannersVisibility(10, 9, 17)
        cy.get('[data-banner-id="10"').trigger('mousedown', { which: 1})
                                      .trigger('mousemove', { which: 1, pageX: 1100, pageY: 600 })
                                      .trigger('mouseup', {force: true})
        heroImage.checkBannersVisibility(9, 10, 17)
    })
  })