'use strict';

class ProtractorHelper extends Helper {
    /**
     * Disable disable waiting for Angular before navigating to the page for non-Angular sites
     *
     * @param url
     */
    goTo(url) {
        let client = this.helpers['Protractor'].browser;

        client.waitForAngularEnabled(false);

        return client.get(url);
    }

    /**
     * Returns array of elements found by given xPath locator
     *
     * @param locator
     * @return int
     */
    grabElementsByLocator(locator) {
        let client = this.helpers['Protractor'].browser;

        return client.element.all(by.xpath(locator)).map((elm) => {
            return elm.getText();
        });
    }
}

module.exports = ProtractorHelper;
