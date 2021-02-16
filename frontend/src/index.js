import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <App />
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
