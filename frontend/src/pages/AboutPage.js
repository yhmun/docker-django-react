import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Card, 
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import bg from '../static/images/bg.png';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: 160,
  },
});

class AboutPage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('About');
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Card>
          <CardActionArea>
            <CardMedia 
              className={classes.media}
              title="Coffee and Laptop"
              image={bg}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                About
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                The page is under construction
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default withStyles(useStyles)(AboutPage);
