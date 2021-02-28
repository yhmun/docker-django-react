import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, CardActions, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectStatus, selectEntities, loadEntities } from '../../../store/examples/studentsSlice';
import { Page, Progress } from '../../../components';
import StudentTable from './StudentTable';
import CreateStudentModal from './CreateStudentModal';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  content: {
    minHeight: 200,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },  
});

class StudentPage extends React.Component {
  componentDidMount() {
    const { loadEntities } = this.props;
    loadEntities();
  }

  render() {
    const { classes, entities, status } = this.props;

    return (
      <Page
        className={classes.root}
        title="Student List"
      >
        <Card>
          <CardHeader title="Students" />
          <Divider />
          <CardContent className={classes.content}>
          {status === 'loading' ? (
            <Progress className={classes.content} />
          ) : (
            <StudentTable entities={entities} />
          )}
          </CardContent>
          <CardActions className={classes.footer}>
            <CreateStudentModal isCreate={true} />
          </CardActions>          
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
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (StudentPage);
