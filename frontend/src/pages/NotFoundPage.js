import { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

class NotFoundPage extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h4">
          404: Page Not Found
        </Typography>
      </Fragment>
    );
  }
}

export default NotFoundPage;
