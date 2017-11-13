'use strict';

let config = require('../codecept.json');

class ProtractorHelper extends Helper {
    /**
     * Disable Angular waiting before navigating to the page for non-Angular sites
     *
     * @param {string} specificUrl
     */
    goTo(specificUrl) {
        let client = this.helpers['Protractor'].browser;

        client.waitForAngularEnabled(false);

        return client.get(config.helpers.Protractor.url + specificUrl);
    }

    /**
     * Returns array of elements found by given xPath locator
     *
     * @param {string} locator
     * @return {int}
     */
    grabElementsByLocator(locator) {
        let client = this.helpers['Protractor'].browser;

        return client.element.all(by.xpath(locator)).map((element) => {
            return element.getText();
        });
    }
}

module.exports = ProtractorHelper;
