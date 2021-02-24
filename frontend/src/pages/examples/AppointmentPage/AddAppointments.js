import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { Divider, Typography } from '@material-ui/core';
import { FaPlus } from 'react-icons/fa';

const styles = (theme) => ({
  root: { 

  },
  header: {
    backgroundColor: theme.palette.card.header.background,
    color: theme.palette.card.header.text,
  },
  icon: {

  },
  title: {
    marginLeft: theme.spacing(1),
  },
});

class AddAppointments extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader 
          className={classes.header} 
          title={
            <Typography>
              <span >
                <FaPlus className={classes.icon}/>
              </span>
              <span className={classes.title}>
                Add Appointment
              </span>
            </Typography>
          }
        />
      </Card>
    );
  }
}

export default withStyles(styles)(AddAppointments);

/*
                  <Typography className={classes.primary}>
                    <span className={classes.pet}>
                      {item.petName}
                    </span>
                    <span className={classes.date}>
                      <Moment 
                        date={item.aptDate} 
                        parse="YYYY-MM-DDThh:mm:ssZ" 
                        format="MMM-D h:mma"
                      />
                    </span>
                  </Typography>
                  */