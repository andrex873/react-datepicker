import Calendar from './calendar'
import moment from 'moment';
import React from 'react';

class Datepicker extends React.Component {

    constructor (props) {
        moment.locale(props.locale || 'es');
        super(props);
    }

    static propTypes = {
        selected: React.PropTypes.string
    }

    static defaultProps = {
        selected: ''
    }

    state = {
        value: this.props.selected,
        inputDate: this.getInputDate(this.props.selected)
    }

    render () {
        return (
            <div {...this.getContainerProps()}>
                <input {...this.getInputProps()}/>
                <Calendar {...this.getCalendarProps()}/>
            </div>

        );
    }

    getInputDate (stringDate) {
        let parsedDate = moment(stringDate, 'DD/MM/YYYY');

        if (!(parsedDate.isValid() && parsedDate.year() > 1899)) {
            parsedDate = moment();
        }

        return parsedDate;
    }

    getContainerProps () {
        return {
            className: 'datepicker'
        };
    }

    getInputProps () {
        return {
            name: 'datepicker',
            onChange: this.handleOnInputChange,
            value: this.state.value
        };
    }

    getCalendarProps () {
        return {
            inputDate: this.state.inputDate,
            onDateSelected: this.handleOnDateSelected
        };
    }

    handleOnDateSelected = (date) => {
        this.setState({
            inputDate: date,
            value: date.format('DD/MM/YYYY')
        });
    }

    handleOnInputChange = (event) => {
        let newDate = this.getInputDate(event.target.value);

        this.setState({
            inputDate: newDate,
            value: event.target.value
        });
    }
}

module.exports = Datepicker;
