import React from 'react';
import Calendar from './calendar'
import moment from 'moment';

class Datepicker extends React.Component {

    static propTypes = {
        value: React.PropTypes.string
    }

    static defaultProps = {
        value: '1/12/2016'
    }

    state = {
        date: moment(this.props.value, "MM/DD/YYYY")
    };

    render () {
        return (
            <div {...this.getContainerProps()}>
                <input {...this.getInputProps()}/>
                <Calendar {...this.getCalendarProps()}/>
            </div>

        );
    }


    getContainerProps () {
        return {
            className: 'datepicker-container'
        };
    }

    getInputProps () {
        return {
            name: 'datepicker',
            value: this.props.value,
            onChange: function () {}
        };
    }

    getCalendarProps () {
        return {
            date: this.state.date
        };
    }
}

module.exports = Datepicker;
