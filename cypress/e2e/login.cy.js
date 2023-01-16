import Registration from "../support/pageObject/registration"
import RandomValue from "../support/pageObject/random"

/// <reference types="Cypress" />

describe("Registration", () => {
    const registration = new Registration(),
          randomValue = new RandomValue();
  
  
    beforeEach(() => {
          randomFirstName = randomValue.field(1, 32, "name"),
          randomLastName = randomValue.field(1, 32, "name"),
          randomEmail = randomValue.email(1, 47, 1, 31, 2, 16),                 
          randomTelephone = randomValue.field(3, 32, "telephone"),
          randomFax = randomValue.field(1, 32, "fax"),
          randomCompany = randomValue.field(1, 64, "company"),
          randomAddressOne = randomValue.field(3, 128, "address"),
          randomAddressTwo = randomValue.field(3, 128, "address"),
          randomCity = randomValue.field(3, 128, "city"),
          randomZip = randomValue.field(3, 10, "zipcode"),
          randomLogin = randomValue.field(5, 64, "login"),
          randomPassword = randomValue.field(4, 20, "password");
          validRandomValues = [
            randomFirstName,
            randomLastName,
            randomEmail,
            randomAddressOne,
            randomAddressTwo,
            randomCity,
            "Belarus",
            "Horad Minsk",
            randomZip,
            randomLogin,
            randomPassword,
            randomPassword,
            randomTelephone,
            randomFax,
            randomCompany,
            true,
            true,
            "success"
          ];
      cy.visit("/" + "index.php?rt=account/create");
  });
  
  it.skip("Check login registrated user", () => {
      registration.fillInForms(validRandomValues);
  });//Will be done tomorrow

});