import React, { Component } from 'react';
import { Table } from 'reactstrap';
import CreateStudentModal from './CreateStudentModal';
import DeleteStudentModal from './DeleteStudentModal';

class StudentList extends Component {  
  render() {
    const students = this.props.students;
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Document</th>
            <th>Phone</th>
            <th>Registration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!students || students.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet!</b>
              </td>
            </tr>
          ) : (
            students.map(student => (
              <tr key={student.id}>
                <td className="align-middle">{student.name}</td>
                <td className="align-middle">{student.email}</td>
                <td className="align-middle">{student.document}</td>
                <td className="align-middle">{student.phone}</td>
                <td className="align-middle">{student.registered_on}</td>
                <td align="right">
                  <CreateStudentModal 
                    create={false}
                    student={student}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <DeleteStudentModal
                    id={student.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6" align="right">
              <CreateStudentModal
                create={true}
                resetState={this.props.resetState}
              />
            </td>
          </tr>
        </tfoot>
      </Table>
    );
  }
}

export default StudentList;