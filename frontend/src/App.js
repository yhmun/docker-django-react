import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Interface from './components/examples/interface/Interface';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="fixed-top">
            <div className="container">
              <NavBar />
            </div>
          </header>
          <main className="page flex-shrink-0">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Route path="/" component={HomePage} exact />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/articles" component={ArticleListPage} />
                  <Route path="/article/:name" component={ArticlePage} />
                  <Route path="/examples/interface" component={Interface} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

/*
        


          <footer>
            <Footer />
          </footer>
*/
