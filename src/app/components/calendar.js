import Month from './month';
import React from 'react';

class Calendar extends React.Component {

    static propTypes = {
        inputDate: React.PropTypes.object.isRequired,
        onDateSelected: React.PropTypes.func.isRequired
    }

    static defaultProps = {
    }

    state = {
        date: this.props.inputDate,
        month: new Month(this.props.inputDate.month(), this.props.inputDate.year())
    }

    componentWillReceiveProps (nextProps) {
        let inputDate = nextProps.inputDate;

        this.setState({
            date: inputDate,
            month: new Month(inputDate.month(), inputDate.year())
        });
    }

    render () {
        let month = this.state.month;
        let date = month.getDate();

        return (
            <div className="calendar">
                <div className="calendar--year">
                    {date.format('YYYY')}
                </div>
                <div className="calendar--month">
                    <div className="calendar--month-action">
                        <button onClick={this.setPrevMonth}>&lt;</button>
                    </div>
                    <div className="calendar--month-text">
                        {date.format('MMMM')}
                    </div>
                    <div className="calendar--month-action">
                        <button onClick={this.setNextMonth}>&gt;</button>
                    </div>
                </div>
                <div className="calendar--days">
                    <div className="calendar--days-title">
                        {month.getDaysShortName().map(this.renderDaysNames)}
                    </div>
                    {this.renderEmptySpace()}
                    {month.getDays().map(this.renderMonthDays)}
                </div>
            </div>
        );
    }

    renderDaysNames = (value, index) => {
        return <div className="calendar--day" key={index}>{value}</div>;
    }

    renderEmptySpace () {
        let content;
        let weekDay = this.state.month.getWeekDay();

        if (weekDay > 0) {
            let props = {
                className: 'calendar--day empty-' + weekDay
            };

            content = <div {...props}>&nbsp;</div>;
        }
        return content;
    }

    renderMonthDays = (date, index) => {
        return (
            <div key={index} className="calendar--day" onClick={() => this.props.onDateSelected(date)}>
                <div {...this.getMonthDaysValueClass(date)}>{date.format('DD')}</div>
            </div>
        );
    }

    getMonthDaysValueClass = (date) => {
        let active = (date.isSame(this.state.date, 'day')) ? 'active' : '';

        return {
            className: 'calendar--day-value ' + active
        };
    }

    setPrevMonth = () => {
        let prevDate = this.state.month.prevMonth();

        this.setState({
            month: new Month(prevDate.month(), prevDate.year())
        });
    }

    setNextMonth = () => {
        let nextDate = this.state.month.nextMonth();

        this.setState({
            month: new Month(nextDate.month(), nextDate.year())
        });
    }
}

module.exports = Calendar;
