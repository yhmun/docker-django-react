import { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

class NotFoundPage extends Component {
  componentDidMount() {
    this.props.setTitle('Error 404');
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h5">
          Page Not Found
        </Typography>
      </Fragment>
    );
  }
}

export default NotFoundPage;
