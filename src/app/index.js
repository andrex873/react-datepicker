import React from 'react';
import ReactDOM from 'react-dom';
import Datepicker from './components/datepicker.js';

// Style imports
import './components/datepicker.scss';

ReactDOM.render(
    <Datepicker className="date-test"/>,
    document.getElementById('app')
);