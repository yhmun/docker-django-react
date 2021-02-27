import React from 'react';
import Moment from 'react-moment';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { IconButton, Typography, Divider } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const styles = (theme) => ({
  root: { 

  },
  primary: {
    display: 'flex',
    paddingBottom: theme.spacing(0.2),
  },
  secondary: {
    color: theme.palette.list.secondary,
  },
  pet: {
    flexGrow: 1,
    color: theme.palette.list.primary,
    fontWeight: 500,
    fontSize: '1.3em',
  },
  date: {
    color: theme.palette.list.secondary,    
    marginTop: theme.spacing(1),
    maginLeft: 'auto',
    fontStyle: 'italic',
    fontSize: '0.9em',
  },
});

class ListAppointments extends React.Component {
  render() {
    const { classes, entities, handleDelete } = this.props;

    return (
      <List dense className={classes.root}>
        <Divider />
        {entities.map((entity) => (
          <div key={entity.id}>
            <ListItem>
              <ListItemIcon>
                <IconButton 
                  color="secondary" 
                  edge="start"
                  aria-label="delete"
                  onClick={() => handleDelete(entity.id, entity.type)}
                >
                  <HighlightOffIcon />
                </IconButton>
              </ListItemIcon>
              <ListItemText 
                primary={
                  <Typography className={classes.primary}>
                    <span className={classes.pet}>
                      {entity.petName}
                    </span>
                    <span className={classes.date}>
                      <Moment 
                        date={entity.aptDate} 
                        parse="YYYY-MM-DDThh:mm:ssZ" 
                        format="MMM-D h:mma"
                      />
                    </span>
                  </Typography>
                }
                secondary={
                  <Typography
                    className={classes.secondary}
                    variant="body2"
                    color="textPrimary"
                  >
                    OwnerName: {entity.ownerName}
                    <br/>
                    {entity.aptNotes}
                  </Typography>
                }
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    );
  }
}

export default withStyles(styles)(ListAppointments);
