import React from 'react';
import moment from 'moment';
import config from './config';

class Calendar extends React.Component {

    static propTypes = {
        date: React.PropTypes.object.isRequired
    }

    render () {
        return (
            <div className="calendar">
                <div className="calendar--year">
                    {this.props.date.format('YYYY')}
                </div>
                <div className="calendar--month">
                    {this.props.date.format('MMMM')}
                </div>
                <div className="calendar--days">
                    {config.DAYS_OF_WEECK.map(this.renderDaysNames)}
                </div>
            </div>
        );
    }

    renderDaysNames (value, index) {
        return <div className="calendar--day-name" key={index}>{value}</div>;
    }
}

module.exports = Calendar;