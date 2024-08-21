import { email, password } from "../../../environment/stg";
import header_pageObjects from "../../support/pageObjects/header_pageObjects";
import signUp_pageObjects from "../../support/pageObjects/signUp_pageObjects";
import yourAdressPageObjects from "../../support/pageObjects/yourAdress.pageObjects";

describe('Sign In', () => {
  beforeEach('passes', () => {
    cy.visit('http://www.automationpractice.pl/index.php')
    header_pageObjects.signIn()
    signUp_pageObjects.loginAccount(email, password)
    cy.visit('http://www.automationpractice.pl/index.php?controller=address&back=order.php%3Fstep%3D1')
  })

  it('Add Adress', () => {
    yourAdressPageObjects.addInformation()
  });
})