import 'babel-polyfill';  // for using the promise polyfill
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import routes from './routes';


ReactDOM.render((
    <Router history={browserHistory} routes={routes} />
  ),
  document.getElementById('app')
);
