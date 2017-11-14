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
        buttonChooseLanguage: '//*[@id="user_form"]/ul/li[2]/a/img',
        buttonListProperty: '//*[@id="add_property_topbar"]',

        buttonRegister: '//*[@id="user_form"]/ul/li[4]/a/div',
        buttonLogin: '//*[@id="user_form"]/ul/li[5]/a/div',
    },

    checkFragmentContent() {
        I.seeManyElements(this.locators);
    }
};