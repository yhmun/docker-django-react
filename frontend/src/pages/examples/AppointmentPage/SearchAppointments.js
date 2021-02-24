import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: { 

  },
});

class SearchAppointments extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <p>Search Appointments</p>
      </div>
    );
  }
}

export default withStyles(styles)(SearchAppointments);
