import signUp_pageObjects from "../support/pageObjects/signUp_pageObjects";
import header_pageObjects from "../support/pageObjects/header_pageObjects";


describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
  })

  it('Clicar no Sign In', () => {
    header_pageObjects.signIn()
    signUp_pageObjects.createanaccount()
    signUp_pageObjects.formCreateAccount()
    // validar que esta logado
  });
})