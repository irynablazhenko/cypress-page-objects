/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class InventoryPage extends BasePage {

    get burgerMenu() {
        return cy.get('[data-test="open-menu"]');
    }

    get shoppingCartIcon() {
        return cy.get('[data-test="shopping-cart-link"]');
    }

    get dropdownItems() {
        return cy.get('[data-test="product-sort-container"]');
    }

    get dropdownItem() {
        return cy.get('[data-test="product-sort-container"] option');
    }

    open() {
        super.open('');
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
        cy.get('.app_logo').should('have.text', 'Swag Labs');
    }

    clickShoppingCartIcon() {
        this.shoppingCartIcon.click();
    }

}

export default new InventoryPage();