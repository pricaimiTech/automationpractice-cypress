import { email, password } from "../../../environment/stg";
import { header } from "../../support/elementos/header.elements";
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
    cy.get(header.search).type("Printed evening dress").type('{ENTER}')
    cy.get("div[id=center_column]  ul[class='product_list grid row']")
    .find("li div[class=product-image-container]")
    .click()
  });

  it.skip('Visit dress page', () => {
    cy.visit('http://www.automationpractice.pl/index.php?id_product=4&controller=product&search_query=Printed+evening+dress&results=1')
  });
})