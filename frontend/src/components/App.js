import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home';
import NotFound from './NotFound';
import TodoList from './todo/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/todos" component={TodoList} />
                  <Route component={NotFound} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

export default App;


/*

        <main className="page flex-shrink-0">
          <Container>
            <Row>
              <Col>
                <Router>

                </Router>
              </Col>
            </Row>
          </Container>
        </main>
        */