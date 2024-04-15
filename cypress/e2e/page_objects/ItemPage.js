/// <reference types="cypress" />
import LoginPage from "./LoginPage";
import BasePage from "./BasePage";

import userData from '../../fixtures/userData.json'

class ItemPage extends BasePage {

    get itemImage() {
        return cy.get('.inventory_details_img_container');
    }

    get itemDescription() {
        return cy.get('[data-test="inventory-item-desc"]');
    }

    get itemName() {
        return cy.get('[data-test="inventory-item-name"]');
    }

    get itemPrice() {
        return cy.get('[data-test="inventory-item-price"]');
    }

    get addToCartButton() {
        return cy.get('[data-test="add-to-cart"]');
    }

    get removeFromCartButton() {
        return cy.get('[data-test="remove"]');
    }

    open() {
        super.open('');
        LoginPage.login(userData.userNames.correctUser, userData.passwords.correctPassword);
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('#item_4_img_link').click();
    }

    clickAddToCartButton() {
        this.addToCartButton.click();
    }

    clickRemoveFromCartButton() {
        this.removeFromCartButton.click();
    }

    addItemToCart() {
        this.clickAddToCartButton();
        this.removeFromCartButton.should('be.visible');
    }

}

export default new ItemPage();