'use strict';

let moment = require('moment');

module.exports = {

    /**
     * Get 'day' object depending on day shifting parameter
     *
     * @param {number} daysShift
     * @return {{date: string, month: string, year: string}}
     */
    getDayWithShift(daysShift = 0) {
        return {
            date: moment().add(daysShift, 'days').format('D'),
            month: moment().add(daysShift, 'days').format('MMMM'),
            year: moment().add(daysShift, 'days').format('YYYY')
        };
    }
}
