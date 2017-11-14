'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    locators: {
        self: '//*/body/div[@id="top"]',

        logo: '//*[@id="top"]/div/img',

        buttonChooseCurrency: '//*[@id="user_form"]/ul/li[@data-id="currency_selector"]/a',
        buttonChooseLanguage: '//*[@id="user_form"]/ul/li[2]/a/img',
        buttonListProperty: '//*[@id="user_form"]/ul/li[@id="add_property_topbar"]/a/div',

        buttonRegister: '//*[@id="user_form"]/ul/li[4]/a/div',
        buttonLogin: '//*[@id="user_form"]/ul/li[5]/a/div',
    },

    checkFragmentContent() {
        I.seeManyElements(this.locators);
    }
};