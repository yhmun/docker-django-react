import { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
  Box,
  Card, 
  CardContent,
  
  CardHeader,
  CardActionArea,
  CardActions,
  CardMedia,

  Tabs,
  Tab,
  Typography,
  Button,
} from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
});

class TodoPage extends Component {
  state = {
    tab: 0
  };

  componentDidMount() {
    if (this.props.setTitle)
      this.props.setTitle('Todo List');
  }

  handleTabChange = (event, value) => {
    this.setState({
      tab: value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
        <Card>
          <Tabs
              value={this.state.tab}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="todo list tabs"
            >
              <Tab label="Completed" />
              <Tab label="Incomplete" />
          </Tabs>
          <CardContent>
            <Box display="flex">
              <Box width="100%">
                Item 1
              </Box>
              <Box flexShrink={0}>
                Item 3
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Box 
              width="100%"
              display="flex" 
              justifyContent="flex-end"
            >
              <Button 
                variant="contained" 
                color="primary">
                Create
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

export default withStyles(useStyles)(TodoPage);

/*
        <Paper>

        </Paper>
        */