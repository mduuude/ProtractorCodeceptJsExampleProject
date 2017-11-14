'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: '/',

    locators: {
        listSearchResults: {
            self: '//*[@id="frm" and following::div[@class="sb-searchbox__spacing"]]',

            inputDestination: '//*[@id="frm"]/div[2]//*[@id="ss"]',

            buttonDateCheckIn: '//*[@id="frm"]/div[3]//*[@data-mode="checkin"]',
            buttonDateCheckOut: '//*[@id="frm"]/div[3]//*[@data-mode="checkout"]',

            radioForWorkYes: '//*[@type="radio" and @value="business"]',
            radioForWorkNo: '//*[@type="radio" and @value="business"]',

            selectorRooms: '//*[@id="no_rooms"]',
            selectorAdults: '//*[@id="group_adults"]',
            selectorChildren: '//*[@id="group_children"]',

            buttonSearch: '//*[@class="sb-searchbox__button   "]'
        }
    },

    checkFragmentContent(){
        I.seeManyElements(this.locators);
    },

    selectDestination(destinationCityName){
        let locatorListItem = '//*[text()="' + destinationCityName + '"]';

        I.waitForElement(this.locators.listSearchResults.inputDestination);
        I.fillField(this.locators.listSearchResults.inputDestination, destinationCityName);

        I.waitForElement(locatorListItem);
        I.click(locatorListItem);
    },

    selectDayCheckIn(day){
        let locatorDay = '//*[@data-mode="checkin"]//following-sibling::div//*[text()[contains(.,"' + day.month
            + '")] and text()[contains(.,"' + day.year + '")]]/ancestor::table//*[text()[contains(.,"' + day.date + '")]]';

        I.waitForElement(locatorDay);
        I.click(locatorDay);
    },

    selectDayCheckOut(day){
        let locatorDay = '//*[@data-mode="checkout"]//following-sibling::div//*[text()[contains(.,"' + day.month
            + '")] and text()[contains(.,"' + day.year + '")]]/ancestor::table//*[text()[contains(.,"' + day.date + '")]]';

        I.waitForElement(this.locators.listSearchResults.buttonDateCheckOut);
        I.click(this.locators.listSearchResults.buttonDateCheckOut);

        I.waitForElement(locatorDay);
        I.click(locatorDay);
    }
};
