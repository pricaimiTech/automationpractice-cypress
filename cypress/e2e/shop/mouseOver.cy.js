import { email, password } from "../../../environment/stg";
import header_pageObjects from "../../support/pageObjects/header_pageObjects";
import signUp_pageObjects from "../../support/pageObjects/signUp_pageObjects";

describe('Sign In', () => {
  before('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    header_pageObjects.signIn()
    signUp_pageObjects.loginAccount(email, password)
    cy.visit('http://www.automationpractice.pl/index.php')
  })
  
  it('Search for a dress', () => {
    cy.get('div[id=block_top_menu] ul li a[title=Dresses]')
    .trigger('mouseover')
    .click()
  });
})