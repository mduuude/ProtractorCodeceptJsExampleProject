'use strict';

class ProtractorHelper extends Helper {
    /**
     * Disable disable waiting for Angular before navigating to the page for non-Angular sites
     * @param url
     */
    goTo(url) {
        let client = this.helpers['Protractor'].browser;

        client.waitForAngularEnabled(false);

        return client.get(url);
    }
}

module.exports = ProtractorHelper;
