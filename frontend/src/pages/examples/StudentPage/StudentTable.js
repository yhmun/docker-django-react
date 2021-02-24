import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import DeleteStudentModal from './DeleteStudentModal';

const styles = {
  root: {
    minWidth: 700,    
    // border: '1px solid blue',
  },
};

class StudentTable extends React.Component {
  render() {
    const { classes, students = [] } = this.props;

    return (
      <PerfectScrollbar>
        <Table 
          className={classes.root} 
          aria-label="student table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Registration</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map(student => (
              <TableRow key={student.id}>
                <TableCell component="th" scope="row">
                  {student.name}
                </TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.document}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.registered_on}</TableCell>
                <TableCell align="right">
                  <DeleteStudentModal id={student.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PerfectScrollbar>
    );
  }
}

export default withStyles(styles)(StudentTable);
