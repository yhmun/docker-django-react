import { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper, 
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

class StudentTable extends Component {
  render() {
    const { classes, students = [] } = this.props;

    return (
      <Paper 
        className={classes.root} 
      >
        <Table
          className={classes.table}
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(StudentTable);
