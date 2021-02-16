import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NotFound from './NotFound';
import TodoList from './todo/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">        

      </div>
    );
  }
}

export default App;


/*
        <header className="fixed-top">
          <Container>
            <Row>
              <Col>
              </Col>
            </Row>
          </Container>
        </header>
        <main className="page flex-shrink-0">
          <Container>
            <Row>
              <Col>
                <Router>
                  <Switch>
                    <Route path="/" component={TodoList} exact />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
              </Col>
            </Row>
          </Container>
        </main>
        */