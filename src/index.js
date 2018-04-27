/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/critical.css';
// lazy loading
import('./css/rest.css');


ReactDOM.render(<App />, document.getElementById('root'));


if (module.hot) {
  module.hot.accept();
}
