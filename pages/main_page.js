'use strict';

let I;

module.exports = {

    _init() {
        I = require('../steps_file.js')();
    },

    url: '/',

    locators: {
        listSearchResults: {
            self: '//*[@id="basiclayout"]/div[1]/div[1]/div[1]/form[@id="frm"]',

            inputDestination: '//*[@id="frm"]/div[2]/div/div[1]/input[@id="ss"]',

            buttonDateCheckIn: '//*[@id="frm"]/div[3]/div/div[1]/div[1]/div/div/div[1]/div/div[2]',
            buttonDateCheckOut: '//*[@id="frm"]/div[3]/div/div[1]/div[2]/div/div/div[1]/div/div[2]',

            radioForWorkYes: '//*[@id="frm"]/div[4]/div/div/fieldset/label[1]/input',
            radioForWorkNo: '//*[@id="frm"]/div[4]/div/div/fieldset/label[2]/input',

            selectorRooms: '//*[@id="frm"]/div[5]/div/div/div[1]/select',
            selectorAdults: '//*[@id="frm"]/div[5]/div/div/div[2]/select',
            selectorChildren: '//*[@id="frm"]/div[5]/div/div/div[3]/select',

            buttonSearch: '//*[@id="frm"]/div[6]/div[2]/button'
        }
    },

    checkFragmentContent(){
        I.seeManyElements(this.locators);
    },

    selectDestination(destinationCityName){
        let locatorListItem = '//*[@id="frm"]/div[2]/div/div[1]/ul[1]/li[*]/b[text()="' + destinationCityName + '"]';

        I.waitForElement(this.locators.listSearchResults.inputDestination, 3);
        I.fillField(this.locators.listSearchResults.inputDestination, destinationCityName);

        I.waitForElement(locatorListItem, 3);
        I.click(locatorListItem);
    },

    selectDayCheckIn(day){

        let locatorDay = '//*[@id="frm"]/div[3]/div/div[1]/div[1]/div/div/div[2]/div[2]/div[3]/div/div/div[*]' +
            '/table/thead/tr[1]/th[text()[contains(.,"' + day.month + '")] and text()[contains(.,"' + day.year + '")]]/' +
            'parent::tr/parent::thead/parent::table/tbody/tr[*]/td[*]/span[text()[contains(.,"' + day.date + '")]]';

        I.waitForElement(locatorDay, 3);
        I.click(locatorDay);
    },

    selectDayCheckOut(day){
        let locatorDay = '//*[@id="frm"]/div[3]/div/div[1]/div[2]/div/div/div[2]/div[2]/div[3]/div/div/div[*]' +
            '/table/thead/tr[1]/th[text()[contains(.,"' + day.month + '")] and text()[contains(.,"' + day.year + '")]]' +
            '/parent::tr/parent::thead/parent::table/tbody/tr[*]/td[*]/span[text()[contains(.,"' + day.date + '")]]';

        I.waitForElement(this.locators.listSearchResults.buttonDateCheckOut, 3);
        I.click(this.locators.listSearchResults.buttonDateCheckOut);

        I.waitForElement(locatorDay, 3);
        I.click(locatorDay);
    }
};
