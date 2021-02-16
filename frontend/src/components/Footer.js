import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <a href="https://github.com/mcodegeeks/docker-django-react">
                Source Codes at Github
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
