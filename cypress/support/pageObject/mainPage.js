class MainPage {
  constructor(){
    this.totalPrice = 0,
    this.totalQuantity = 0
  }
  topCartBefore(){
    cy.get(".dropdown-toggle > .label").then((num) => {  // Check quantity in topCart before adding
      this.totalQuantity += +num.text();
    });
    cy.get(".cart_total").then((price) => {              // Check price in topCart before adding
      this.totalPrice = +price.text().slice(1);
    });
  }
  topCartAfter(){
    cy.get(".dropdown-toggle > .label").then((num) => { // Check quantity in topCart after adding
      const quantity = +num.text();
      expect(this.totalQuantity).eql(quantity);
    });
    cy.get(".cart_total").then((price) => {             // Check price in topCart after adding
      price = +price.text().slice(1);
      expect(this.totalPrice).eql(price);
      this.totalPrice = 0;
      this.totalQuantity = 0;
    });
  }
  addItemByName(...items) {
    this.topCartBefore()
    cy.get(".prdocutname").each((product, ind) => {      // Add item or items to the shopping cart
      if (items.includes(product.text())) {
        cy.get(".pricetag").eq(ind).find(".productcart").click();
        cy.get(".price")
          .eq(ind)
          .then((price) => {
            price = price.text().split("$");
            this.totalPrice += +price[1];
            this.totalQuantity += 1;
          });
        cy.get(".added_to_cart")      
          .should("have.css", "color")
          .and("eql", "rgb(60, 118, 61)");
      }
    });
    this.topCartAfter(items)
  }
}

export default MainPage;
