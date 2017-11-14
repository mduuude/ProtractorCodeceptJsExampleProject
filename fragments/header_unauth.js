'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        self: '//*[@id="top"]',

        logo: '//*[@id="logo_no_globe_new_logo"]',

        buttonChooseCurrency: '//*[@data-id="currency_selector"]',
        buttonChooseLanguage: '//*[@class="popover_trigger"]/img',
        buttonListProperty: '//*[@id="add_property_topbar"]',

        buttonRegister: '//*[contains(@class,"uc_account-center-item")]/a/div',
        buttonLogin: '//*[contains(@class,"account_register")]/a/div',
    },

    checkFragmentContent() {
        I.seeManyElements(this.locators);
    }
};