import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Box, Avatar, Typography } from '@material-ui/core';

const user = {
  name: 'Mun, Younghwan',    
  avatar: '/static/images/avatars/avatar1.png',
  jobTitle: 'Software Developer',
};

const styles = (theme) => ({
  root: {
    // border: '1px solid blue',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }  
});

class User extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Box
        className={classes.root}
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/accounts"
        />
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(User);
