import moment from 'moment';
import 'moment-range';

export default class Month {

    constructor (month, year) {
        this.startDate = moment([year, month]);
        this.endDate = this.startDate.clone().endOf('month');
    }

    getDate () {
        return this.startDate;
    }

    getDaysShortName () {
        // TODO generate these names with moment
        return ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
    }

    getWeekDay () {
        return this.startDate.weekday();
    }

    getDays () {
        return moment.range(this.startDate, this.endDate).toArray('days');
    }

    prevMonth () {
        return this.startDate.subtract(1, 'months');
    }

    nextMonth () {
        return this.startDate.add(1, 'months');
    }
}

