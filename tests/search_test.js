let utilTime = require("../utils/time_util");

Feature('Test main page');

Scenario('Test correct search by analyzing result set', function*(I, mainPage, headerFragment, searchResultPage) {

    let testCityName = 'New York';
    let testNumOfSearchResultsToCompare = 1;

    I.goTo(mainPage.url);
    headerFragment.checkFragmentContent();
    mainPage.checkFragmentContent();
    mainPage.selectDestination(testCityName);
    mainPage.selectDayCheckIn(utilTime.getDayWithShift());
    mainPage.selectDayCheckOut(utilTime.getDayWithShift(7));
    I.click(mainPage.locators.listSearchResults.buttonSearch);

    I.seeInCurrentUrl(searchResultPage.url);
    I.waitForElement(searchResultPage.locators.listSearchResults.textSearchResultCount);
    searchResultPage.checkFragmentContent();

    let searchResultItemsTexts = yield I.grabElementsByLocator(searchResultPage.locators.listSearchResults.listItemLocationName);
    I.checkGreaterThan(searchResultItemsTexts.length, testNumOfSearchResultsToCompare);
    I.checkArrayOfStringsIncludesNeedleString(searchResultItemsTexts, testCityName);
});
