
'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

      /**
       * Check multiple elements are on the page, up to second level of nesting
       *
       * @param {object} selectors - given object of CSS|XPath|text locators
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

  });
}
