class CheckoutUR {
    fillInForms(arr) {
      let [
        firstname,
        lastname,
        email,
        addressOne,
        addressTwo,
        city,
        country,
        region,
        zip,
        telephone,
        fax,
        company,
        separateAddress,
        check
      ] = arr;
  
      cy.get('#guestFrm_firstname').type(firstname);
      cy.get('#guestFrm_lastname').type(lastname);
      cy.get('#guestFrm_email').type(email);
      cy.get('#guestFrm_address_1').type(addressOne);
      cy.get('#guestFrm_city').type(city);
      cy.get('#guestFrm_country_id').select(country);
      cy.get('#guestFrm_zone_id').select(region);
      cy.get('#guestFrm_postcode').type(zip);
      cy.get('#guestFrm_telephone').type(telephone);
      cy.get('#guestFrm_fax').type(fax);
      cy.get('#guestFrm_company').type(company);
      cy.get('#guestFrm_address_2').type(addressTwo);
      if(separateAddress){
        cy.get('#guestFrm_shipping_indicator').check()
      }
      cy.get('.col-md-12 > .btn-orange').click();
  
    //   if (check === "success") {
    //     cy.get(".maintext").then((text) => {
    //       expect(text.text()).include("Your Account Has Been Created!");
    //     });
    //     cy.get(".menu_text").then((text) => {
    //       expect(text.text()).include(`Welcome back ${firstname}`);
    //     });
    //   } else if (
    //     check === "emailLength" ||
    //     check === "CountryReq" ||
    //     check === "RegionReq" ||
    //     check === "ConfirmPassword"
    //   ) {
        
    //     let emailAlert = `Email Address does not appear to be valid!`,
    //         countryAlert = `Please select a country!`,
    //         regionAlert = `Please select a region / state!`,
    //         confirmPasswordAlert = `Password confirmation does not match password!`,
    //         alertText;
  
    //     if (check === "emailLength") {
    //       alertText = emailAlert;
    //     } else if (check === "CountryReq") {
    //       alertText = countryAlert;
    //     } else if (check === "RegionReq") {
    //       alertText = regionAlert;
    //     } else {
    //       alertText = confirmPasswordAlert;
    //     }
    //     cy.get(".has-error > .help-block").should("have.text", alertText);
    //     cy.get(".alert").then((alert) => {
    //       expect(alert.text()).include(alertText);
    //     });
    //   } else if (
    //     check === "PPReq" ||
    //     check === "registeredEmail" ||
    //     check === "registerdLogin"
    //   ) {
    //     if (check === "PPReq") {
    //       alertText = `You must agree to the Privacy Policy!`;
    //     }
    //     if (check === "registeredEmail") {
    //       alertText = `E-Mail Address is already registered!`;
    //     }
    //     if (check === "registerdLogin") {
    //       alertText = `This login name is not available. Try different login name!`;
    //     }
    //     cy.get(".alert").then((alert) => {
    //       expect(alert.text()).include(alertText);
    //     });
    //   } else {
    //     let name, min, max;
    //     if (check === "firstNameLength") {
    //       (name = "First Name"), (min = "1"), (max = "32");
    //     }
    //     if (check === "lastNameLength") {
    //       (name = "Last Name"), (min = "1"), (max = "32");
    //     }
    //     if (check === "AddressOneLength") {
    //       (name = "Address 1"), (min = "3"), (max = "128");
    //     }
    //     if (check === "AddressTwoLength") {
    //       (name = "Address 2"), (min = "3"), (max = "128");
    //     }
    //     if (check === "CityLength") {
    //       (name = "City"), (min = "3"), (max = "128");
    //     }
    //     if (check === "ZIPLength") {
    //       (name = "Zip/postal code"), (min = "3"), (max = "10");
    //     }
    //     if (check === "LoginLength") {
    //       (name = "Login name"), (min = "5"), (max = "64");
    //     }
    //     if (check === "PasswordLength") {
    //       (name = "Password"), (min = "4"), (max = "20");
    //     }
    //     if (check === "TelephoneLength") {
    //       (name = "Telephone"), (min = "3"), (max = "32");
    //     }
    //     cy.get(".has-error > .help-block").should(
    //       "have.text",
    //       `${name} must be ${name === "Login name" ? "alphanumeric only and " : ""}between ${min} and ${max} characters!`
    //     );
    //     cy.get(".alert").then((alert) => {
    //       expect(alert.text()).include(
    //         `${name} must be ${name === "Login name" ? "alphanumeric only and " : ""}between ${min} and ${max} characters!`
    //       );
    //     });
    //   }
    }
  }
  
  export default CheckoutUR;