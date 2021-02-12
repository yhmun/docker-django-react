import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Interface from './components/examples/interface/Interface';

import HomePage from './pages/HomePage';
import ArticleListPage from './pages/blog/ArticleListPage';
import ArticlePage from './pages/blog/ArticlePage';
import StudentListPage from './pages/examples/student/StudentListPage';
import AboutPage from './pages/AboutPage';

import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="fixed-top">
            <Container>
              <Row>
                <Col>
                  <NavBar />
                </Col>
              </Row>
            </Container>
          </header>
          <main className="page flex-shrink-0">
            <Container>
              <Row>
                <Col>
                  <Switch>
                    <Route path="/" component={HomePage} exact />
                    <Route path="/blog/articles/:id" component={ArticlePage} />
                    <Route path="/blog/articles" component={ArticleListPage} />
                    <Route path="/examples/students" component={StudentListPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/examples/interface" component={Interface} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </Col>
              </Row>
            </Container>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
