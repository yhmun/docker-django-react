import { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

class AboutPage extends Component {
  componentDidMount() {
    this.props.setTitle('About');
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

export default AboutPage;
