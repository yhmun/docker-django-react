import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import err404 from '../static/images/err404.gif';

const useStyles = (theme) => ({
  root: { 
    width: '100%',
  },
  media: {
    maxWidth: '100%', 
  }
});

class NotFoundPage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('Error 404');
    if (this.props.setContentFlex)
      this.props.setContentFlex(true);
  }

  render() {
    const { classes } = this.props;

    return (
      <Box 
        className={classes.root}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pl={3}
        pb={3}
      >
        <img 
          className={classes.media}
          src={err404} 
          alt="Error 404" 
        />
      </Box>
    );
  }
}

export default withStyles(useStyles)(NotFoundPage);
