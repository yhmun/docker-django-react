import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import CreateStudentModal from './CreateStudentModal';
import DeleteStudentModal from './DeleteStudentModal';

const styles = {
  root: {
    minWidth: 760,
    // border: '1px solid blue',
  },
  inline: {
    display: 'inline',
  }
};

class StudentTable extends React.Component {
  render() {
    const { classes, entities } = this.props;

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
            {!entities || entities.length <= 0 ? (              
              <TableRow>
                <TableCell align="center" colSpan={6}>
                  <b>Ops, no one here yet!</b>
                </TableCell>
              </TableRow>
            ): (
              entities.map(entity => (
                <TableRow key={entity.id}>
                  <TableCell component="th" scope="row">
                    {entity.name}
                  </TableCell>
                  <TableCell>{entity.email}</TableCell>
                  <TableCell>{entity.document}</TableCell>
                  <TableCell>{entity.phone}</TableCell>
                  <TableCell>{entity.registered_on}</TableCell>
                  <TableCell align="right">
                    <CreateStudentModal 
                      isCreate={false} 
                      entity={entity} 
                    />
                    <DeleteStudentModal 
                      id={entity.id}
                      type={entity.type}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </PerfectScrollbar>
    );
  }
}

export default withStyles(styles)(StudentTable);
