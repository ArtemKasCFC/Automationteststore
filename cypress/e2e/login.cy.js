import LoginPage from "../support/pageObject/loginPage"

/// <reference types="Cypress" />

describe.skip('Authorization', () => {

    let login = new LoginPage()
   
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Check authorization of the existing account', () => {
        login.login('6655321Orange', '1a2s3d4f5g', true)
    })

    it('Check authorization of the non-existent account', () => {
        login.login('Orange6655321', '1a2s3d4f5g', false)
    })

    it('Check authorization of the existing account with incorrect password', () => {
        login.login('6655321Orange', '1a2s3d4f5', false)
    })

    it(`Email isn't sent if database doesn't have user with typed Email and Last Name`, () => {
        login.forgotLogin('DFjdjfdfjd', '6655321real@mail.ru', 'nonexistent')
    })

    it(`Email isn't sent if the Email field of the Forgot Your Login page is left empty`, () => {
        login.forgotLogin('Alex', '{backspace}', 'emptyEmail')
    }) 

    it(`Email isn't sent if the Last Name field of the Forgot Your Login page is left empty`, () => {
        login.forgotLogin('{backspace}', '6655321real@mail.ru', 'emptyLastName')
    }) 

    it(`Email isn't sent if database doesn't have user with typed Email and Login`, () => {
        login.forgotPassword('Orange665532', '6655321real@mail.ru', 'nonexistent')
    }) 

    it(`Email isn't sent if the Email field of the Forgot Your Password page is left empty`, () => {
        login.forgotPassword('Orange6655321', '{backspace}', 'emptyEmail')
    }) 

    it(`Email isn't sent if the Login field of the Forgot Your Password page is left empty`, () => {
        login.forgotPassword('{backspace}', '6655321real@mail.ru', 'emptyLogin')
    }) 
  })