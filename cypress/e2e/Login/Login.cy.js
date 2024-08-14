import { email, password } from "../../../environment/stg";
import header_pageObjects from "../../support/pageObjects/header_pageObjects";
import signUp_pageObjects from "../../support/pageObjects/signUp_pageObjects";

describe('Sign In', () => {
  beforeEach('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    header_pageObjects.signIn()
  })

  it('Login in Account', () => {
    signUp_pageObjects.loginAccount(email, password)
  });
})