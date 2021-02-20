import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import App from './App';
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
