import React, { Component } from 'react';
import { Table } from 'reactstrap';

class StudentList extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th>Registration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>mark@gmail.com</td>
            <td>1111111111</td>
            <td>123) 999-8888</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default StudentList;