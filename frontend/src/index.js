import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <ScrollToTop />
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);
