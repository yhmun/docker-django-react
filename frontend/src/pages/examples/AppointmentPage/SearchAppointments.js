import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { OutlinedInput, InputAdornment, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    display: 'flex',
    //border: '1px solid green',
  },
  input: {
    height: 45,
    width: '100%',
  },
  icon: {
    color: theme.palette.list.secondary,
  },
  button: {
    minWidth: 120,
  },
});

class SearchAppointments extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <OutlinedInput
          className={classes.input}
          id="SearchApts"
          onChange={event => this.props.searchApts(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className={classes.icon}/>
            </InputAdornment>
          }
        />
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          endIcon={<ArrowDropDownIcon />}
        >
          Sort by:
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(SearchAppointments);
