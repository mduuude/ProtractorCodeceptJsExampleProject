'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    selectors: {
        self: '//*body/div[@id="top"]',

        logo: '//*[@id="top"]/div/img',

        buttonChooseCurrency: '//*[@id="user_form"]/ul/li[1]/a',
        buttonChooseLanguage: '//*[@id="user_form"]/ul/li[2]/a/img',
        buttonReferFriend: '//*[@id="user_form"]/ul/li[3]/a',
        buttonListProperty: '//*[@id="user_form"]/ul/li[3]/a/div/span',

        buttonRegister: '//*[@id="user_form"]/ul/li[4]/a/div[@class="sign_in_wrapper"]/span',
        buttonLogin: '//*[@id="user_form"]/ul/li[5]/a/div[@class="sign_in_wrapper"]/span',
    },

    checkFragmentContent(){
        I.seeManyElements(this.selectors);
    }
};
