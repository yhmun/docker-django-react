import React, { Component, Fragment } from 'react';
import ExampleList from '../components/ExampleList';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h3>Hello, welcome to my website!</h3>
        <hr/>
        <p>
          I'm currently learning about Docker, Django, and React.
        </p>
        <br/><br/>
        <hr/>
        <h5>Learning Examples:</h5>
        <ExampleList />
      </Fragment>
    );
  }
}

export default HomePage;
