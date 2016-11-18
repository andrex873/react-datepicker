import config from './config';
import moment from 'moment';
import Month from './month';
import React from 'react';

class Calendar extends React.Component {

    static propTypes = {
        date: React.PropTypes.object.isRequired,
        onDateSelected: React.PropTypes.func.isRequired,
        onNextMonth: React.PropTypes.func.isRequired,
        onPreviousMonth: React.PropTypes.func.isRequired
    }

    static defaultProps = {
        isSelected: false
    }

    state = {
        month: new Month(this.props.date.month(), this.props.date.year())
    }

    /*componentWillReceiveProps (newProps) {
        props.date = newProps.date;
    }*/

    render () {
        return (
            <div className="calendar">
                <div className="calendar--year">
                    {this.props.date.format('YYYY')}
                </div>
                <div className="calendar--month">
                    <span>
                        <button onClick={this.setPrevMonth.bind(this)}>prev</button>
                    </span>
                    {this.props.date.format('MMMM')}
                    <span>
                        <button onClick={this.setNextMonth.bind(this)}>next</button>
                    </span>
                </div>
                <div className="calendar--days">
                    {config.DAYS_OF_WEECK.map(this.renderDaysNames, this)}
                    {this.renderEmptySpace()}
                    {this.state.month.getDays().map(this.renderMonthDays, this)}
                </div>
            </div>
        );
    }

    renderDaysNames (value, index) {
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

    renderMonthDays (date, index) {
        return (
            <div key={index} className="calendar--day" onClick={this.props.onDateSelected.bind(null, date)} >
                {date.format('DD')}
            </div>
        );
    }

    setPrevMonth () {
        let prevDate = this.state.month.prevMonth();
        this.props.onPreviousMonth(prevDate);
    }

    setNextMonth () {
        let nextDate = this.state.month.nextMonth();
        this.props.onPreviousMonth(nextDate);
    }

}

module.exports = Calendar;