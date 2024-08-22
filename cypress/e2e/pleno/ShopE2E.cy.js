import { email, password } from "../../../environment/stg";
import productPageObjects from "../../support/pageObjects/product.pageObjects";
import shoppingCartPageObject from "../../support/pageObjects/shoppingCart.pageObject";
import signUp_pageObjects from "../../support/pageObjects/signUp_pageObjects";
import yourAdressPageObjects from "../../support/pageObjects/yourAdress.pageObjects";


// let email; // Correção: `let` para declarar a variável corretamente

describe('Shop E2E - Product Page Process', () => {

  before('Given, I Was logged in page', () => {
    cy.visit('');
    // cy.log('Step 1: Creating a new account');
    // email = signUp_pageObjects.createNewAccount();
    // cy.log('Account created with email: ' + email);
    cy.login(email, password)
  });

  context('When the product is in stock', () => {

    it('Then add product in a cart and buy the product', () => {
      cy.log('Step 2: Accessing the product page');

      // Acesse a página do produto
      cy.visit('?id_product=4&controller=product&search_query=Printed+evening+dress&results=1');
      productPageObjects.validateIsOnDressPage();

      cy.log('Step 3: Checking stock availability and adding product to the cart');

      // Verifique se o produto está em estoque e adicione ao carrinho
      const textLabel = "In stock";
      productPageObjects.checkStockAvailability().then((spanText) => {
        productPageObjects.addProductInCart(spanText, textLabel);
      });

      cy.log('Step 4: Validating if the product is in the cart');

      // Valide se o produto está no carrinho
      shoppingCartPageObject.validateProductSummaryList();

      cy.log('Step 5: Proceeding to checkout');

      // Procede para o checkout
      shoppingCartPageObject.addGoCheckoutSymmary();

      cy.log('Step 6: Add Adress');
      // yourAdressPageObjects.addInformation()
      yourAdressPageObjects.btnGoCheckoutAdress()
      cy.get('p[class="checkbox"]')
      .click()
      cy.get("button[name='processCarrier']")
        .click()

    });

  });

});
