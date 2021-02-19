import { Component } from 'react';
import { Box, Typography, Link } from '@material-ui/core';

class Footer extends Component {
  render() {
    return (
      <Box
        color="background.paper"
        bgcolor="text.disabled"
        py={1}
      >
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
      </Box>
    );
  }
}

export default Footer;
