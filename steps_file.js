'use strict';
let assert = require('assert');

module.exports = function () {
    return actor({

        /**
         * Check multiple elements are on the page, up to second level of nesting
         *
         * @param {object|string} selectors - given object of CSS|XPath|text locators
         */
        seeManyElements(selectors) {
            Object.keys(selectors).forEach((selectorKey) => {
                let selector = selectors[selectorKey];

                if (selector.hasOwnProperty('self')) {
                    Object.keys(selectors[selectorKey]).forEach((nestedKey) => {
                        if (Object.getPrototypeOf(selector[nestedKey]) !== Object.prototype) {
                            this.seeElement(selector[nestedKey]);
                        }
                    });
                } else if (Object.getPrototypeOf(selector) !== Object.prototype) {
                    this.seeElement(selector);
                }
            });
        },

        /**
         * Custom assertion that each item of array includes needle string
         *
         * @param {array|string} arrayOfStrings
         * @param {string} needleString
         */
        checkArrayOfStringsIncludesNeedleString(arrayOfStrings, needleString){
            Object.keys(arrayOfStrings).forEach((key) => {
                if (arrayOfStrings[key])
                    assert.equal((arrayOfStrings[key].includes(needleString)), true, 'Assertion error, '
                        + arrayOfStrings[key] + ' does not include needle word - ' + needleString);
            });
        },

        /**
         * Custom assertion for comparing given numbers
         *
         * @param {number} needleValue
         * @param {number} expectedValue
         */
        checkGreaterThan(needleValue, expectedValue){
            assert(needleValue > expectedValue, 'Assertion Error: Search result count is less than 1.');
        }
    });
}
