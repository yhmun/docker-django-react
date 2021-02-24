import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_APPOINTMENT } from '../../../store/urls';
import { requestReadObjects } from '../../../store/thunks';
import { getObjects, getObjectsReading } from '../../../store/selectors';
import { Page, Progress } from '../../../components';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    minHeight: 200,
  },
});

class AppointmentPage extends React.Component {
  componentDidMount() {
    const { } = this.props;
  }

  render() {
    const { 
      classes, 
    } = this.props;

    return (
      <Page
        className={classes.root}
        title="Widsom Pet Medicine"
      >
        <Card className={classes.root}>
          <CardHeader title="Wisdom Pet Medicine" />
          <Divider />
          <CardContent className={classes.content}>
          </CardContent>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({

});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (AppointmentPage);
