'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },
    url: 'searchresults',

    locators: {
        listSearchResults: {
            self: '//*[@id="searchresultsTmpl"]',

            listItemLocationName: '//*[@id="hotellist_inner"]/div[*]/div[2]/div[1]/div[1]/div[2]/a',

            textSearchResultCount: '//*[@id="results_prev_next"]/h4'
        }
    },

    checkFragmentContent(){
        I.seeManyElements(this.locators);
    },
};
