import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { OutlinedInput, InputAdornment } from '@material-ui/core';
import { Button, Menu, MenuItem, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const orderBys = [
  {
    title: 'Pet Name',
    value: 'petName'
  },
  {
    title: 'Date',
    value: 'aptDate',
  },
  {
    title: 'Owner',
    value: 'ownerName',
  },
];

const orderDirs = [
  {
    title: 'Asc',
    value: 'asc'
  },
  {
    title: 'Desc',
    value: 'desc',
  },
]; 

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
  menu: {

  },
  menuItem: {
    minWidth: 120,
    justifyContent: 'flex-end',
    '&.Mui-selected': {
      color: 'rgb(138, 75, 175)',
    },
  },
});

const StyledMenu = withStyles ({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

class SearchAppointments extends React.Component {
  state = {
    sortbyAnchor: null
  };

  handleClick = (event) => {
    this.setState({
      sortbyAnchor: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      sortbyAnchor: null
    });    
  }

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
          aria-controls="sortbyMenu" 
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Sort by:
        </Button>
        <StyledMenu
          className={classes.menu}
          id="sortbyMenu"
          anchorEl={this.state.sortbyAnchor}
          keepMounted
          open={Boolean(this.state.sortbyAnchor)}
          onClose={this.handleClose}
        >
          {orderBys.map((item, idx) => (
            <MenuItem 
              className={classes.menuItem}
              key={idx}
              onClick={this.handleClose}
              selected={this.props.orderBy === item.value}
            >
              {item.title}
            </MenuItem>
          ))}
          <Divider />
          {orderDirs.map((item, idx) => (
            <MenuItem 
              className={classes.menuItem}
              key={idx}
              onClick={this.handleClose}
              selected={this.props.orderDir === item.value}
            >
              {item.title}
            </MenuItem>
          ))}
        </StyledMenu>
      </div>
    );
  }
}

export default withStyles(styles)(SearchAppointments);
