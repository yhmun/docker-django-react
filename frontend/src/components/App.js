import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';
import TodoPage from './todo/TodoPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Container>
            <Row>
              <Col>
                <Switch>
                  <Route path="/" component={HomePage} exact />
                  <Route path="/todos" component={TodoPage} />
                  <Route component={NotFoundPage} />
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
