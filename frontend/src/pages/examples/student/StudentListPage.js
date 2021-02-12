import React, { Component, Fragment } from 'react';
import StudentList from '../../../components/examples/student/StudentList';
import axios from 'axios';

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
      <Fragment>
        <StudentList 
          students={this.state.students}
          resetState={this.resetState}
        />
      </Fragment>
    );
  }
}

export default StudentListPage;
