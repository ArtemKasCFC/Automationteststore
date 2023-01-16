class Search {
 findItemByName(name) {
    cy.get('#filter_keyword').type(name)
    cy.get('[title="Go"]').click()
    cy.get('.bgnone').should('include.text', name)
 }

 findItemByArticle(article) {
    cy.get('#filter_keyword').type(article)
    cy.get('[title="Go"]').click()
    cy.get('#model').check()
    cy.get('#search_button').click()
    cy.get('.productinfo').should('include.text', article)
 }

 findItemByDescription(description) {
    cy.get('#filter_keyword').type(description)
    cy.get('[title="Go"]').click()
    cy.get('#description').check()
    cy.get('#search_button').click()
    cy.get('.tab-content').should('include.text', description)
 }

 findSeveralItems(word){
   let names = [],
       prices = [],
       ratings = [];
   cy.get('#filter_keyword').type(word)
   cy.get('[title="Go"]').click()
   cy.get('#sort').select('Name A - Z')
   cy.get('.grid .prdocutname').each(itemName => {
      itemName = itemName.text().toLowerCase()
      expect(itemName).include(word)
      names.push(itemName)
   })
   cy.wrap(names).should('to.be.ascending')
   cy.get('#sort').select('Name Z - A')
   cy.get('.grid .prdocutname').each((itemName) => {
      itemName = itemName.text().toLowerCase()
      names.shift()
      names.push(itemName)
   })
   cy.wrap(names).should('to.be.descending')
   cy.get('#sort').select('Price Low > High')
   cy.get('.grid .price > :nth-child(1)').each(itemPrice => {
      itemPrice = +(itemPrice.text().slice(1))
      prices.push(itemPrice)
   })
   cy.wrap(prices).should('to.be.ascending')
   cy.get('#sort').select('Price High > Low')
   cy.get('.grid .price > :nth-child(1)').each(itemPrice => {
      itemPrice = +(itemPrice.text().slice(1))
      prices.shift()
      prices.push(itemPrice)
   })
   cy.wrap(prices).should('to.be.descending')
   cy.get('#sort').select('Rating Highest')
   cy.get('.grid .rating').each(rating => {
      cy.wrap(rating).invoke('attr', 'src').then(rating => {
         rating = rating.replace(/\D/g, '')
         ratings.push(rating)
      })
   })
   cy.wrap(ratings).should('to.be.descending')
   cy.get('#sort').select('Rating Lowest')
   cy.get('.grid .rating').each(rating => {
      cy.wrap(rating).invoke('attr', 'src').then(rating => {
         rating = rating.replace(/\D/g, '')
         ratings.shift()
         ratings.push(rating)
      })
   })
   cy.wrap(ratings).should('to.be.ascending')
 }

findItemsByTag(tag){
   cy.get('#filter_keyword').type(tag)
   cy.get('[title="Go"]').click()
   cy.get('#keyword').should('have.value', tag).then(() => {
      cy.get('.grid .prdocutname').each((name, ind) => {
         cy.get('.grid .prdocutname').eq(ind).click()
         cy.get('#myTab').contains('Tags:').click()
         cy.get('#producttag').should('have.class', 'active').and('include.text', 'fashion')
         cy.go('back')
      })
   })
 }
}

export default Search;