import React from 'react';
import Calendar from './calendar'
import moment from 'moment';

class Datepicker extends React.Component {

    static propTypes = {
        value: React.PropTypes.string
    }

    static defaultProps = {
        value: '1/11/2016'
    }

    state = {
        date: moment(this.props.value, "DD/MM/YYYY")
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
            value: this.state.date.format('DD/MM/YYYY'),
            onChange: function () {}
        };
    }

    getCalendarProps () {
        return {
            date: this.state.date,
            isSelected: true,
            onDateSelected: this.handleOnDateSelected.bind(this),
            onNextMonth: this.handleOnNextMonth.bind(this),
            onPreviousMonth: this.handleOnPreviousMonth.bind(this)
        };
    }

    handleOnDateSelected (date) {
        this.setState({
            date: date
        });
    }

    handleOnNextMonth (date) {
        this.setState({
            date: date
        });
    }

    handleOnPreviousMonth (date) {
        this.setState({
            date: date
        });
    }
}

module.exports = Datepicker;
