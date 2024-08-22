import { productPage } from "../elementos/product.elements";

class ProductPage {
    visitProductPage() {
        cy.visit('?id_product=4&controller=product&search_query=Printed+evening+dress&results=1');
    }

    validateIsOnDressPage() {
        cy.get("span[id=availability_value]").should('be.visible');
    }

    checkStockAvailability() {
        return cy.get("span[id=availability_value]").invoke("text");
    }

    selectNextAvailableProduct() {
        cy.get(productPage.productColor)
            .find("li[class=selected]")
            .next()
            .click();
    }

    addToCart() {
        cy.get(productPage.addCard)
            .find("button")
            .click();
    }

    validateProductAddedToCart() {
        cy.get(productPage.labelAddSucessfully)
            .invoke('show')
            .find("div div span")
            .first()
            .next()
            .contains('Product successfully added to your shopping cart');
    }
}

export default new ProductPage();