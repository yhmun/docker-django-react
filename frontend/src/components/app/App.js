import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Interface from '../examples/interface/Interface';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Interface} exact />
        </div>
      </Router>
    );
  }
}

export default App;
