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

    getItemById(itemId) {
        return cy.get(`#item_${itemId}_title_link`)
    }

    clickItemById(itemId) {
        this.getItemById(itemId).click();
    }

    getItemByName(name) {
        let names = [];
        let itemName = ['Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack', 'Sauce Labs Fleece Jacket']
        cy.get('.inventory_item_name').each(($name) => {
            cy.wrap($name).invoke('text').then((text) => {
                if (text === name) {
                    cy.get(`#item_${itemName.indexOf(text)}_title_link`).find('div').click();
                }
            })
        });
        cy.get('[data-test="inventory-item-name"').invoke('text').should('eq', name);
    }

}

export default new InventoryPage();