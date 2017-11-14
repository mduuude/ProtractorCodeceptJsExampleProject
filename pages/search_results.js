'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: '/searchresults',

    locators: {
        listSearchResults: {
            self: '//*[@id="searchresultsTmpl"]',

            listItemLocationName: '//a[contains(@id,"show_id")]/following-sibling::a',

            textSearchResultCount: '//*[@id="results_prev_next"]/h4'
        }
    },

    checkFragmentContent(){
        I.seeManyElements(this.locators);
    },
};
