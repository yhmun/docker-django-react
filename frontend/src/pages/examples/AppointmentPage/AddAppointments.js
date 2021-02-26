import clsx from 'clsx';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Button, TextField, Icon } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const styles = (theme) => ({
  root: { 

  },
  header: {
    backgroundColor: theme.palette.card.header.background,
    color: theme.palette.card.header.text,
    padding: theme.spacing(0.5),
  },
  form: {

  },
  content: {

  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  headerButton: {
    width: '100%',
    height: '100%',
  },
  footerButton: {
    marginRight: theme.spacing(1.5),
    marginBottom: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  margin: {
    marginTop: theme.spacing(3),
  },
});

class AddAppointments extends React.Component {
  state = {
    formOpen: false,
    petName: '',
    ownerName: '',
    aptDate: '',
    aptTime: '',
    aptNotes: '',
  };

  reset = () => {
    this.setState({
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: ''
    });
  };

  handleFormToggle = (event) => {
    this.setState(previous => ({
      formOpen: !previous.formOpen
    }));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleAdd = (event) => {
    event.preventDefault();
    let data = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptDate: this.state.aptDate + ' ' + this.state.aptTime,
      aptNotes: this.state.aptNotes
    };
    this.props.handleCreate(data);
    this.reset();
    this.handleFormToggle();
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader 
          className={classes.header} 
          title={
            <Button
              className={classes.headerButton}
              color='inherit'
              startIcon={<Icon className="fas fa-plus" />}
              onClick={this.handleFormToggle}
            >
            Add Appointment
          </Button>
          }
        />
        <form 
          className={clsx(classes.form, {
            [classes.hide]: !this.state.formOpen,
          })}
        >
          <CardContent
            className={clsx(classes.content, {
              [classes.hide]: !this.state.formOpen,
            })}
          >
            <TextField 
              fullWidth
              id="petName" 
              label="Pet Name" 
              placeholder="Pet's Name"
              variant="outlined" 
              type="text"
              className={classes.margin} 
              value={this.state.petName}
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true, }}
            />
            <TextField 
              fullWidth
              id="ownerName" 
              label="Pet Owner" 
              placeholder="Owner's Name"
              type="text"
              variant="outlined" 
              className={classes.margin} 
              value={this.state.ownerName}
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true, }}
            />
            <TextField 
              fullWidth
              id="aptDate" 
              label="Date"
              type="date"
              variant="outlined" 
              className={classes.margin} 
              value={this.state.aptDate}
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true, }}
            />
            <TextField 
              fullWidth
              id="aptTime" 
              label="Time"
              type="time"
              variant="outlined" 
              className={classes.margin} 
              value={this.state.aptTime}
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true, }}
            />
            <TextField 
              fullWidth
              id="aptNotes" 
              label="Apt. Notes" 
              placeholder="Appointment Notes"
              type="text"
              variant="outlined" 
              multiline
              rows={4}
              className={classes.margin} 
              value={this.state.aptNotes}
              onChange={this.handleChange}
              InputLabelProps={{ shrink: true, }}
            />
          </CardContent>
          <CardActions className={classes.footer}>
            <Button
              className={classes.footerButton}
              variant="outlined"
              color="primary"
              startIcon={<PlaylistAddIcon />}
              onClick={this.handleAdd}
            >
              Add Appointment
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(AddAppointments);
