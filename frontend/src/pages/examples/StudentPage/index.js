import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Page } from '../../../components';
import StudentTable from './StudentTable';

const styles = (theme) => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)    
    // border: '1px solid blue',
  },
});

class Student extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Page
        className={classes.root}
        title="Student List"
      >
        <StudentTable />
      </Page>
    );
  }
}

export default withStyles(styles)(Student);
