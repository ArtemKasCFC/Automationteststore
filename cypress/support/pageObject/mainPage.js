class MainPage {
  addItemByName(...name) {
    let totalQuantity = 0,
        totalPrice = 0;
    cy.get(".dropdown-toggle > .label").then((num) => {  // Check quantity in topCart before adding
      totalQuantity += +num.text();
    });
    cy.get(".cart_total").then((price) => {              // Check price in topCart before adding
      totalPrice = +price.text().slice(1);
    });
    cy.get(".prdocutname").each((product, ind) => {      // Add item to the shopping cart
      if (name.includes(product.text())) {
        cy.get(".pricetag").eq(ind).find(".productcart").click();
        cy.get(".price")
          .eq(ind)
          .then((price) => {
            price = price.text().split("$");
            totalPrice += +price[1];
            totalQuantity += 1;
          });
        cy.get(".added_to_cart")      
          .should("have.css", "color")
          .and("eql", "rgb(60, 118, 61)");
      }
    });
    cy.get(".dropdown-toggle > .label").then((num) => { // Check quantity in topCart after adding
      const quantity = +num.text();
      expect(totalQuantity).eql(quantity);
      expect(totalQuantity).eql(name.length);
    });
    cy.get(".cart_total").then((price) => {             // Check price in topCart after adding
      price = +price.text().slice(1);
      expect(totalPrice).eql(price);
    });
  }
}

export default MainPage;
