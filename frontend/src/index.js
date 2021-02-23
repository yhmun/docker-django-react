import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { configureStore } from 'src/store/store';
//import ScrollToTop from './components/ScrollToTop';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
//<ScrollToTop />
<Provider store={configureStore()}>
<App />
</Provider>
*/
