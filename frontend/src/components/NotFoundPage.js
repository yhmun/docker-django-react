import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>404: Page Not Found</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFoundPage;
