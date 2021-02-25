import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_APPOINTMENT } from '../../../store/urls';
import { requestReadObjects, requestDeleteObject, requestCreateObject } from '../../../store/thunks';
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
  state = {
    orderBy: 'petName',
    orderDir: 'asc',
    queryText: '',    
  };

  componentDidMount() {
    const { loadAppointments } = this.props;
    if (loadAppointments)
      loadAppointments();    
  }

  searchApts = (query) => {
    this.setState({
      queryText: query
    });
  };

  changeOrder = (order, dir) => {
    this.setState({
        orderBy: order,
        orderDir: dir
    });
  };

  render() {
    const { classes } = this.props;
    const order = this.state.orderDir === 'asc' ? 1 : -1;
    let filteredApts = this.props.appointments;
    filteredApts = filteredApts.sort((a, b) => {
      if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return (
        eachItem['petName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['ownerName']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase()) ||
        eachItem['aptNotes']
          .toLowerCase()
          .includes(this.state.queryText.toLowerCase())
      );
    });

    return (
      <Page
        className={classes.root}
        title="Widsom Pet Medicine"
      >
        <Card className={classes.root}>
          <CardHeader title={'Wisdom Pet Medicine'} />
          <Divider />
          <CardContent className={classes.content}>
            <AddAppointments 
              handleCreate={this.props.handleCreate}
            />
            <SearchAppointments 
              orderBy={this.state.orderBy}
              orderDir={this.state.orderDir}
              changeOrder={this.changeOrder}
              searchApts={this.searchApts}
            />
            {this.props.isLoading ? (
              <Progress className={classes.content} />
            ) : (
              <ListAppointments 
                appointments={filteredApts}
                handleDelete={this.props.handleDelete}
              />
            )}
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
  loadAppointments: () => dispatch(
    requestReadObjects(API_URL_APPOINTMENT)
  ),
  handleCreate: data => dispatch(
    requestCreateObject(API_URL_APPOINTMENT, data)
  ),
  handleDelete: id => dispatch(
    requestDeleteObject(API_URL_APPOINTMENT, id)
  ),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (AppointmentPage);
