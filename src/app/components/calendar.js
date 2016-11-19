import config from './config';
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
    }

    state = {
        month: new Month(this.props.date.month(), this.props.date.year())
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            month: new Month(newProps.date.month(), newProps.date.year())
        });
    }

    render () {
        return (
            <div className="calendar">
                <div className="calendar--year">
                    {this.props.date.format('YYYY')}
                </div>
                <div className="calendar--month">
                    <span>
                        <button onClick={this.setPrevMonth}>prev</button>
                    </span>
                    <span className="calendar--month-text">
                        {this.props.date.format('MMMM')}
                    </span>
                    <span>
                        <button onClick={this.setNextMonth}>next</button>
                    </span>
                </div>
                <div className="calendar--day-name">
                    {this.props.date.format('dddd, DD')}
                </div>
                <div className="calendar--days">
                    {config.DAYS_OF_WEECK.map(this.renderDaysNames)}
                    {this.renderEmptySpace()}
                    {this.state.month.getDays().map(this.renderMonthDays)}
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
                {date.format('DD')}
            </div>
        );
    }

    setPrevMonth = () => {
        let prevMonth= this.state.month.prevMonth();
        this.props.onPreviousMonth(prevMonth);
    }

    setNextMonth = () => {
        let nextMonth = this.state.month.nextMonth();
        this.props.onNextMonth(nextMonth);
    }

}

module.exports = Calendar;
