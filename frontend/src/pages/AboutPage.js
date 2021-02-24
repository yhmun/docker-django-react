import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Page } from '../components';
import bg from '../assets/images/bg.png';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  media: {
    height: 160,
  },
});

class AboutPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Page className={classes.root} title="About">
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
      </Page>
    );
  }
}

export default withStyles(styles)(AboutPage);
