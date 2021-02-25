import clsx from 'clsx';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Divider, Typography, Button } from '@material-ui/core';
import { FaPlus } from 'react-icons/fa';

const styles = (theme) => ({
  root: { 

  },
  header: {
    backgroundColor: theme.palette.card.header.background,
    color: theme.palette.card.header.text,
    padding: theme.spacing(0.5),
  },
  content: {

  },
  button: {
    width: '100%',
    height: '100%',
  },
  hide: {
    display: 'none',
  },
});

class AddAppointments extends React.Component {
  state = {
    formOpen: false,
  };

  handleFormToggle = (event) => {
    this.setState(previous => ({
      formOpen: !previous.formOpen
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader 
          className={classes.header} 
          title={
            <Button
              className={classes.button}
              color='inherit'
              startIcon={<FaPlus />}
              onClick={this.handleFormToggle}
            >
            Add Appointment
          </Button>
          }          
        />
        <CardContent
          className={clsx(classes.content, {
            [classes.hide]: !this.state.formOpen,
          })}
        >
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(AddAppointments);
