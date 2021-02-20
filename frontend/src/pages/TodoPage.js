import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
});

class TodoPage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('Todo List');
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

export default withStyles(useStyles)(TodoPage);
