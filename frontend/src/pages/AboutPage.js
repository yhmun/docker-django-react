import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    border: '1px solid red',
    width: '100%',
  },
});

class AboutPage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('About');
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h5">
          The page is under construction. 
        </Typography>
      </div>
    );
  }
}

export default withStyles(useStyles)(AboutPage);
