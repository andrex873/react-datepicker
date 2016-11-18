import moment from 'moment';
import 'moment-range';

export default class Month {

    constructor (month, year) {
        this.startDate = moment([year, month]);
        this.endDate = this.startDate.clone().endOf('month');
    }

    getWeekDay () {
        return this.startDate.weekday();
    }

    getDays () {
        return moment.range(this.startDate, this.endDate).toArray('days');
    }

    prevMonth () {
        return this.startDate.subtract(1, 'month');
    }

    nextMonth () {
        return this.startDate.add(1, 'month');
    }
}

