import { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

class TodoPage extends Component {
  componentDidMount() {
    this.props.setTitle('Todo List');
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h5">
          The page is under construction.
        </Typography>
      </Fragment>
    );
  }
}

export default TodoPage;
