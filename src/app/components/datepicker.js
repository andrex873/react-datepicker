import Calendar from './calendar'
import moment from 'moment';
import React from 'react';

class Datepicker extends React.Component {

    constructor (props) {
        moment.locale(props.locale || 'es');
        super(props);
    }

    static propTypes = {
        className: React.PropTypes.string,
        format: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        selected: React.PropTypes.string
    }

    static defaultProps = {
        className: '',
        format: 'DD/MM/YYYY',
        selected: ''
    }

    state = {
        value: this.props.selected,
        inputDate: this.getInputDate(this.props.selected)
    }

    render () {
        return (
            <div className="datepicker-component">
                <input {...this.getInputProps()}/>
                <Calendar {...this.getCalendarProps()}/>
            </div>

        );
    }

    getInputDate (stringDate) {
        let parsedDate = moment(stringDate, this.props.format);

        if (!(parsedDate.isValid() && parsedDate.year() > 1899)) {
            parsedDate = moment();
        }

        return parsedDate;
    }

    getInputProps () {
        var props = this.props;
        return {
            className: props.className,
            id: props.name,
            name: props.name,
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
            value: date.format(this.props.format)
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
