class ProductPage {
  addItem(name) {
    let totalQuantity = 0,
        totalPrice = 0;
    cy.get(".dropdown-toggle > .label").then((num) => {
      totalQuantity += +num.text();
    });
    cy.get(".cart_total").then((price) => {
      totalPrice = +price.text().slice(1);
    });
    cy.get(".prdocutname").contains(name).click()
    cy.get('.productpageprice').then(price => {
        price = price.text().split("$")
        totalPrice += +price[1]
        totalQuantity += 1
        cy.log(totalPrice)
    })
    cy.get('.cart').click()
    cy.get(".dropdown-toggle > .label").then((num) => {
      const quantity = +num.text();
      expect(totalQuantity).eql(quantity);
    });
    cy.get(".cart_total").then((price) => {
        price = +price.text().slice(1, 5);
      expect(totalPrice).eql(price);
    });
  }
}

export default ProductPage;
