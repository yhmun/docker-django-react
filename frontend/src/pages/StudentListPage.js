import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StudentList from '../components/StudentList';

class StudentListPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <StudentList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentListPage;
