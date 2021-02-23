import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import bg from '../assets/images/bg.png';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    padding: '1em',
  },
  media: {
    height: 160,
  },
});

class AboutPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Card>
          <CardMedia 
            className={classes.media}
            title="Coffee and Laptop"
            image={bg}
          />
          <CardContent>
            <Typography variant="h5">
              About
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The page is under construction
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(AboutPage);
