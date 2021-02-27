import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectStatus, selectEntities, loadEntities, addEntity, removeEntity } from '../../../store/examples/appointmentsSlice';
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
    const { loadEntities } = this.props;
    loadEntities();
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
    const { classes, status, entities, handleCreate, handleDelete } = this.props;
    const { orderBy, orderDir } = this.state;
    const { changeOrder, searchApts } = this;
    const order = this.state.orderDir === 'asc' ? 1 : -1;
    const filteredEntities = entities.sort((a, b) => {
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
              handleCreate={handleCreate}
            />
            <SearchAppointments 
              orderBy={orderBy}
              orderDir={orderDir}
              changeOrder={changeOrder}
              searchApts={searchApts}
            />
            {status === 'loading' ? (
              <Progress className={classes.content} />
            ) : (
              <ListAppointments 
                entities={filteredEntities}
                handleDelete={handleDelete}
              />
            )}
          </CardContent>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  status: selectStatus(state),
  entities: selectEntities(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadEntities: () => dispatch(loadEntities()),
  handleCreate: data => dispatch(addEntity(data)),
  handleDelete: (id, type) => dispatch(removeEntity(id, type)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (AppointmentPage);
