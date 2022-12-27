class Registration {
  fillInForms(
    firstname,
    lastname,
    email,
    addressOne,
    addressTwo,
    city,
    country,
    region,
    zip,
    login,
    password,
    passwordConfirm,
    telephone,
    fax,
    company,
    news,
    privacyPolicy,
    check
  ) {
    cy.get("#AccountFrm_firstname").type(firstname);
    cy.get("#AccountFrm_lastname").type(lastname);
    cy.get("#AccountFrm_email").type(email);
    cy.get("#AccountFrm_address_1").type(addressOne);
    cy.get("#AccountFrm_city").type(city);
    cy.get("#AccountFrm_country_id").select(country);
    cy.get("#AccountFrm_zone_id").select(region);
    cy.get("#AccountFrm_postcode").type(zip);
    cy.get("#AccountFrm_loginname").type(login);
    cy.get("#AccountFrm_password").type(password);
    cy.get("#AccountFrm_confirm").type(passwordConfirm); // --- Required
    cy.get("#AccountFrm_telephone").type(telephone);
    cy.get("#AccountFrm_fax").type(fax);
    cy.get("#AccountFrm_company").type(company);
    cy.get("#AccountFrm_address_2").type(addressTwo);
    if (news) {
      cy.get("#AccountFrm_newsletter0").check();
    }
    if (privacyPolicy) {
      cy.get("#AccountFrm_agree").check();
    }
    cy.get(".col-md-2 > .btn").click();
    if(check === 'success'){
        cy.get('.maintext').then(text => {
            expect(text.text()).include('Your Account Has Been Created!')
        })
        cy.get('.menu_text').then(text => {
            expect(text.text()).include(`Welcome back ${firstname}`)
        })
    } else {
      let name, min, max;
      if(check === 'firstNameLength'){
            name = 'First Name',
            min = '1',
            max = '32'
      } 
      if(check === 'lastNameLength'){
            name = 'Last Name',
            min = '1',
            max = '32'
      } 
      if(check === 'AddressOneLength'){
            name = 'Address 1',
            min = '3',
            max = '128'
      } 
      if(check === 'AddressTwoLength'){
        name = 'Address ',
        min = '3',
        max = '128'
      }
      if(check === 'CityLength'){
        name = 'City',
        min = '3',
        max = '128'
      } 
      if(check === 'ZIPLength'){
        name = 'Zip/postal code',
        min = '3',
        max = '10'
      }
      if(check === 'LoginLength'){
        name = 'Login name',
        min = '5',
        max = '64'
      }
      if(check === 'PasswordLength'){
        name = 'Password',
        min = '4',
        max = '20'
      }
      cy.get('.has-error > .help-block').should('have.text', `${name} must be ${name === 'Login name' ? 'alphanumeric only and ': ''}between ${min} and ${max} characters!`)
      cy.get('.alert').then(alert => {
          expect(alert.text()).include(`${name} must be ${name === 'Login name' ? 'alphanumeric only and ' : ''}between ${min} and ${max} characters!`)
        })
    }
  }
}

export default Registration;
