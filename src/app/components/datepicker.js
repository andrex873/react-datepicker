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

    getContainerProps () {
        return {
            className: 'datepicker'
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
            inputDate: this.state.inputDate,
            onDateSelected: this.handleOnDateSelected
        };
    }

    handleOnDateSelected = (date) => {
        this.setState({
            inputDate: date
        });
    }

    handleOnInputChange = (event) => {
        // TODO update the input field
        console.log(event.target.value)
    }
}

module.exports = Datepicker;
