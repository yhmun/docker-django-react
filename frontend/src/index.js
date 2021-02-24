import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
