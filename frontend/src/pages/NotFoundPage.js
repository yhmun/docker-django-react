import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
});

class NotFoundPage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('Error 404');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h5">
          Page Not Found
        </Typography>
      </div>
    );
  }
}

export default withStyles(useStyles)(NotFoundPage);
