let fragHeader = require("../fragments/header_unauth"),
    pageMain = require("../pages/main_page"),
    pageSearchResults = require("../pages/search_results_page"),
    utilTime = require("../utils/time_util");

const baseUrl = 'https://www.booking.com';

Feature('Test main page');

Scenario('Test correct search by analyzing result set', function*(I) {
    let testCityName = 'New York';
    let testNumOfSearchResultsToCompare = 1;

    I.goTo(baseUrl);
    fragHeader.checkFragmentContent();
    pageMain.checkFragmentContent();
    pageMain.selectDestination(testCityName);
    pageMain.selectDayCheckIn(utilTime.getDay());
    pageMain.selectDayCheckOut(utilTime.getDay(7));
    I.click(pageMain.locators.listSearchResults.buttonSearch);

    I.waitForElement(pageSearchResults.locators.listSearchResults.textSearchResultCount, 5);
    pageSearchResults.checkFragmentContent();

    let searchResultItemsTexts = yield I.grabElementsByLocator(pageSearchResults.locators.listSearchResults.listItemLocationName);
    I.checkGreaterThan(searchResultItemsTexts.length, testNumOfSearchResultsToCompare);
    I.checkArrayOfStringsIncludesNeedleString(searchResultItemsTexts, testCityName);
});
