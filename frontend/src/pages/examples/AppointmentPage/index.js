import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_APPOINTMENT } from '../../../store/urls';
import { requestReadObjects, requestDeleteObject } from '../../../store/thunks';
import { getObjects, getObjectsReading } from '../../../store/selectors';
import { Page, Progress } from '../../../components';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

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
    const { loadAppointments } = this.props;
    if (loadAppointments)
      loadAppointments();    
  }

  render() {
    const { 
      classes, 
      appointments = [],
      handleDelete,
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
            <AddAppointments />
            <SearchAppointments />
            <ListAppointments 
              appointments={appointments}
              handleDelete={handleDelete}
            />
          </CardContent>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  appointments: getObjects(state),
  isLoading: getObjectsReading(state),  
});

const mapDispatchToProps = (dispatch) => ({
  loadAppointments: () => dispatch(requestReadObjects(API_URL_APPOINTMENT)),
  handleDelete: id => dispatch(requestDeleteObject(API_URL_APPOINTMENT, id)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (AppointmentPage);
