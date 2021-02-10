import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Interface from './components/examples/interface/Interface';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/article-list" component={ArticleListPage} />
          <Route path="/article" component={ArticlePage} />
          <Route path="/examples/interface" component={Interface} />
        </div>
      </Router>
    );
  }
}

export default App;
