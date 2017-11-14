'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: '/',

    locators: {
        listSearchResults: {
            self: '//*[@id="basiclayout"]//*[@id="frm"]',

            inputDestination: '//*[@id="frm"]//*[@id="ss"]',

            buttonDateCheckIn: '//*[@id="frm"]/div[3]' +
            '//*[@class="sb-dates__col --checkin-field" and descendant::div[@class="sb-date-field__display"]]',
            buttonDateCheckOut: '//*[@id="frm"]/div[3]' +
            '//*[@class="sb-dates__col --checkout-field" and descendant::div[@class="sb-date-field__display"]]',

            radioForWorkYes: '//*[@id="frm"]//label[1]/input',
            radioForWorkNo: '//*[@id="frm"]//label[2]/input',

            selectorRooms: '//*[@id="frm"]//select[@class="no_rooms "]',
            selectorAdults: '//*[@id="frm"]//select[@class="group_adults "]',
            selectorChildren: '//*[@id="frm"]//select[@class="group_children "]',

            buttonSearch: '//*[@id="frm"]/div[6]/div[2]/button'
        }
    },

    checkFragmentContent(){
        I.seeManyElements(this.locators);
    },

    selectDestination(destinationCityName){
        let locatorListItem = '//*[@id="frm"]//li[*]/b[text()="' + destinationCityName + '"]';

        I.waitForElement(this.locators.listSearchResults.inputDestination);
        I.fillField(this.locators.listSearchResults.inputDestination, destinationCityName);

        I.waitForElement(locatorListItem);
        I.click(locatorListItem);
    },

    selectDayCheckIn(day){

        let locatorDay = '//*[@id="frm"]/div[3]/div/div[1]/div[1]//div[*]/table/thead/tr[1]' +
            '/th[text()[contains(.,"' + day.month + '")] and text()[contains(.,"' + day.year + '")]]/parent::tr' +
            '/parent::thead/parent::table/tbody/tr[*]/td[*]/span[text()[contains(.,"' + day.date + '")]]';

        I.waitForElement(locatorDay);
        I.click(locatorDay);
    },

    selectDayCheckOut(day){
        let locatorDay = '//*[@id="frm"]/div[3]/div/div[1]/div[2]//div[*]/table/thead/tr[1]' +
            '/th[text()[contains(.,"' + day.month + '")] and text()[contains(.,"' + day.year + '")]]/parent::tr' +
            '/parent::thead/parent::table/tbody/tr[*]/td[*]/span[text()[contains(.,"' + day.date + '")]]';

        I.waitForElement(this.locators.listSearchResults.buttonDateCheckOut);
        I.click(this.locators.listSearchResults.buttonDateCheckOut);

        I.waitForElement(locatorDay);
        I.click(locatorDay);
    }
};
