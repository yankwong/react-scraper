import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './index.css';
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Routes />
  ), document.getElementById('root'));

registerServiceWorker();