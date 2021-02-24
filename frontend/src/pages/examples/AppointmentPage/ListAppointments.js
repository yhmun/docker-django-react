import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: { 

  },
});

class ListAppointments extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <p>List Appointments</p>
      </div>
    );
  }
}

export default withStyles(styles)(ListAppointments);
