import Search from "../support/pageObject/search"


/// <reference types="Cypress" />

describe('Check search', () => {

    const search = new Search()
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Check search by full name of the item', () => {
        search.findItemByName('Gucci Guilty')
    })

    it('Check search by one word', () => {
        search.findItemByName('Guilty')
    })

    it('Check search by part of one word', () => {
        search.findItemByName('Guil')
    })

    it('Check that searching is register insensitive', () => {
        search.findItemByName('GUCCI GUILTY')
    }) 

    it('Check search by full article', () => {
        search.findItemByArticle('PRF00269')
    })

    it('Check search by part of the article', () => {
        search.findItemByArticle('RF00269')
    })

    it('Check search by description of the item', () => {
        search.findItemByDescription('Notes Consist Of Mandarin')
    })

    it('Check search by the tag', () => {
        search.findItemsByTag('fashion')
    })

    it('Check the ordering of the finding items(by alphabet, price, rating)', () => {
        search.findSeveralItems('eye')
    })

    it("Check that the item from different categories doesn't double", () => {
        search.findItemByName('LANCOME HYPNOSE DOLL')
    })
  })