import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.footer,
    color: theme.palette.text.footer,
    padding: theme.spacing(0.5),
  },
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography 
          variant="body2" 
          color="inherit"
          align="center"
        >
          <Link 
            color="inherit" 
            href="https://github.com/mcodegeeks/docker-django-react"
            style={{ textDecoration: 'inherit' }}
          >
            Source Code in Github
          </Link>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
