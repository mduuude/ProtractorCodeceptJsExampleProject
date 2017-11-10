let f_header = require("../fragments/header_unauth");

Feature('Test main page');

Scenario('Test correct search', (I) => {
    I.goTo("https://www.booking.com");
    f_header.checkFragmentContent();
});
