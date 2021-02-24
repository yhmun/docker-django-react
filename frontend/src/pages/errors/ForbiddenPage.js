import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Page } from '../../components';
import err404 from '../../assets/images/err403.gif';

const styles = (theme) => ({
  root: { 
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  media: {
    maxWidth: '100%', 
  }
});

class ForbiddenPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Page className={classes.root} title="Error 403">
        <img 
          className={classes.media}
          src={err404} 
          alt="Error 404" 
        />
      </Page>
    );
  }
}

export default withStyles(styles)(ForbiddenPage);
