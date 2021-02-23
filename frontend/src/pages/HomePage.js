import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Box,
  Card, 
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import bg from '../assets/images/bg.png';
import ExampleList from '../components/example/ExampleList';

const useStyles = (theme) => ({
  root: {
    /*border: '1px solid red',*/
    width: '100%',
  },
  media: {
    height: 160,
  },
  margin: {
    marginTop: theme.spacing(2),
  },
});

class HomePage extends Component {
  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('Learning Djano, React, and Material-UI');
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Card>
          <CardMedia 
            className={classes.media}
            title="Coffee and Laptop"
            image={bg}
          />
          <CardContent>
            <Typography variant="h5">
              Home
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The page is under construction
            </Typography>
          </CardContent>
        </Card>        
        <Card className={classes.margin}>
          <CardContent>
            <Typography variant="h5">
              Learning examples:
            </Typography>
            <ExampleList />
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withStyles(useStyles)(HomePage);
