let f_header = require("../fragments/header_unauth");

Feature('Test main page');

Scenario('Test correct search', (I) => {
    I.amOnPage("/");

    // I.seeInCurrentUrl("booking.com");
    I.seeElement(f_header.selectors.logo);
    I.seeElement(f_header.selectors.buttonChooseCurrency);
    I.seeElement(f_header.selectors.buttonListProperty);
    // f_header.checkFragmentContent();
});
