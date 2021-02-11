import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StudentList from '../components/StudentList';
import axios from "axios";

class StudentListPage extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(`${process.env.REACT_APP_HOST}/api/students`)
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  resetState = () => {
    this.getStudents();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <StudentList 
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StudentListPage;
