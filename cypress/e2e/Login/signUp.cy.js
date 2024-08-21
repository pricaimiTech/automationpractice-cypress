import signUp_pageObjects from "../../support/pageObjects/signUp_pageObjects";
import header_pageObjects from "../../support/pageObjects/header_pageObjects";
import { accountcreated } from "../../support/elementos/myaccount";


describe('Create a account', () => {
  beforeEach('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
  })

  it('Create a new account', () => {
    header_pageObjects.signIn()
    signUp_pageObjects.createanaccount()
    signUp_pageObjects.formCreateAccount()
    cy.get(accountcreated.mensagem).invoke("text").should("contains","Your account has been created." )
  });
})