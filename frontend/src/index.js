import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Provider 
        store={configureStore()}
      >
        <App />
      </Provider>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
