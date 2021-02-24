import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_STUDENT } from '../../../store/urls';
import { requestReadObjects } from '../../../store/thunks';
import { getObjects, getObjectsReading } from '../../../store/selectors';
import { Page, Progress } from '../../../components';
import StudentTable from './StudentTable';

const styles = (theme) => ({
  root: {
    padding: '1em',
  },
  content: {
    minHeight: 200,
  },
});

class StudentPage extends React.Component {
  componentDidMount() {
    const { loadStudents } = this.props;
    if (loadStudents)
      loadStudents();
  }

  render() {
    const { 
      classes, 
      students = [], 
      isLoading = false 
    } = this.props;

    return (
      <Page
        className={classes.root}
        title="Student List"
      >
        <Card className={classes.root}>
          <CardHeader title="Students" />
          <Divider />
          <CardContent className={classes.content}>
          {isLoading ? (
            <Progress className={classes.content} />
          ) : (
            <StudentTable students={students} />
          )}
          </CardContent>
        </Card>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  students: getObjects(state),
  isLoading: getObjectsReading(state),  
});

const mapDispatchToProps = (dispatch) => ({
  loadStudents: () => dispatch(requestReadObjects(API_URL_STUDENT)),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles),
) (StudentPage);
