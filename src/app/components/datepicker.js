import Calendar from './calendar'
import moment from 'moment';
import React from 'react';

class Datepicker extends React.Component {

    constructor (props) {
        moment.locale('es');
        super(props);
    }

    static propTypes = {
        value: React.PropTypes.string
    }

    static defaultProps = {
        value: '1/11/2016'
    }

    state = {
        calendarDate: this.getCalendarDate(),
        inputDate: this.getInputDate()
    }

    render () {
        return (
            <div {...this.getContainerProps()}>
                <input {...this.getInputProps()}/>
                <Calendar {...this.getCalendarProps()}/>
            </div>

        );
    }

    getInputDate () {
        // TODO validate this string value
        return moment(this.props.value, "DD/MM/YYYY");
    }

    getCalendarDate () {
        // TODO if inputDate is valid then return it otherwise return the current date
        return moment(this.props.value, "DD/MM/YYYY");
    }

    getContainerProps () {
        return {
            className: 'datepicker-container'
        };
    }

    getInputProps () {
        return {
            name: 'datepicker',
            onChange: this.handleOnInputChange,
            value: this.state.inputDate.format('DD/MM/YYYY')
        };
    }

    getCalendarProps () {
        return {
            date: this.state.calendarDate,
            onDateSelected: this.handleOnDateSelected,
            onNextMonth: this.handleOnNextMonth,
            onPreviousMonth: this.handleOnPreviousMonth
        };
    }

    handleOnDateSelected = (date) => {
        this.setState({
            calendarDate: date,
            inputDate: date
        });
    }

    handleOnNextMonth = (date) => {
        this.setState({
            calendarDate: date
        });
    }

    handleOnPreviousMonth = (date) => {
        this.setState({
            calendarDate: date
        });
    }

    handleOnInputChange = () => {
        // TODO update the input field
    }
}

module.exports = Datepicker;
