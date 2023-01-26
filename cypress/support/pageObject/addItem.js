class AddItem {
  addItem(name, quantity) {
    let totalQuantity = 0,
        totalPrice = 0,
        itemPrice = 0,
        itemQuantity = 0,
        itemModel;


    cy.get(".dropdown-toggle > .label").then((quantity) => {
      totalQuantity += +quantity.text();
    });
    cy.get(".cart_total").then((price) => {
      totalPrice = +price.text().slice(1);
    });


    cy.url().then((url) => {
      if (url.includes("product_id")) {
        cy.get("#product_quantity").type(`{backspace}${quantity}`);
        cy.get(".productpageprice").then((price) => {
            price = +price.text().replace("$", "");
            itemPrice += price;
            totalPrice += price * quantity;
            itemQuantity += quantity;
            totalQuantity += quantity;
        });
        cy.get(".productinfo > :nth-child(2)").then((model) => {
          itemModel = model.text().slice(6);
        });
        cy.get(".cart").click();
      } else {
        cy.get(".grid .prdocutname").each((itemName, ind) => {
          if (itemName.text().includes(name)) {
            cy.get(".grid .pricetag").eq(ind).find(".price")
              .then((price) => {
                price = +price.text().replace("$", "");
                itemPrice += price;
                totalPrice += price * quantity;
                itemQuantity += quantity;
                totalQuantity += quantity;
              });
            cy.get(".grid .pricetag").eq(ind).find(".productcart").click();
            cy.get(".grid .pricetag").eq(ind).should("have.css", "color").and("eql", "rgb(60, 118, 61)");
          }
        });
        cy.get('[data-id="menu_cart"]').first().click()
      }
    });


    cy.get(".dropdown-toggle > .label").then((quantity) => {
      quantity = +quantity.text();
      expect(totalQuantity).eql(quantity);
    });
    cy.get(".cart_total").then((price) => {
      price = +price.text().replace(/[^0-9.]/g, "")
      expect(totalPrice).eql(price);
    });

    
    if (quantity > 0) {
      cy.get(".name").then((el) => {
        expect(el.text()).include(name);
      });
      cy.get("tbody > :nth-child(2) > :nth-child(4)").then((price) => {
        price = +price.text().replace(/[^0-9.]/g, "");
        expect(price.toFixed(2)).eql(itemPrice.toFixed(2));
      });
      cy.get("[id^='cart_quantity']")
        .invoke("val")
        .then((value) => {
          expect(+value).eql(itemQuantity);
        });
      if(itemModel){
        cy.get("tbody > :nth-child(2) > :nth-child(3)").then((model) => {
            expect(itemModel).include(model.text());
          });
      }  
      cy.get("tbody > :nth-child(2) > :nth-child(6)").then((total) => {
        total = +total.text().replace(/[^0-9.]/g, "");
        expect(total.toFixed(2)).eql((itemPrice * itemQuantity).toFixed(2));
      });
    }
  }
}

export default AddItem;