import Search from "../support/pageObject/search"


/// <reference types="Cypress" />

describe('Check search', () => {

    const search = new Search()
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it.skip('Check search by full name', () => {
        search.findItemByName('Gucci Guilty')
    })

    it.skip('Check search by one word', () => {
        search.findItemByName('Guilty')
    })

    it.skip('Check search by part of one word', () => {
        search.findItemByName('Guil')
    })

    it.skip('Check search by full article', () => {
        search.findItemByArticle('PRF00269')
    })

    it.skip('Check search by part of the article', () => {
        search.findItemByArticle('RF00269')
    })

    it.skip('Check search by description of the item', () => {
        search.findItemByDescription('Notes Consist Of Mandarin')
    })

    it.skip('Check finding several results and their ordering', () => {
        search.findSeveralItems('cream')
    })
  })