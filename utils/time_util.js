'use strict';

let moment = require('moment');

module.exports = {
    getDay(timeShift = 0) {
        return {
            date: moment().add(timeShift, 'days').format('D'),
            month: moment().add(timeShift, 'd').format('MMMM'),
            year: moment().add(timeShift, 'd').format('YYYY')
        };
    }
}
