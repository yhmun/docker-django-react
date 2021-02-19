import { Component, Fragment } from 'react';
import { Typography, Link } from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Typography 
          variant="body2" 
          color="textSecondary" 
          align="center"
        >
          <Link 
            color="inherit" 
            href="https://github.com/mcodegeeks/docker-django-react"
          >
            Source Code in Github
          </Link>
        </Typography>
      </Fragment>
    );
  }
}

export default Footer;
