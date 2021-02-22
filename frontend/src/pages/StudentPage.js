import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { API_URL_STUDENT } from '../constants/apis';
import { getObjects, getObjectsReading } from '../redux/selectors';
import { requestReadObjects } from '../redux/thunks';
import { withStyles } from '@material-ui/core/styles';
import { 
  Box,
} from '@material-ui/core';

const useStyles = (theme) => ({
  root: {
    width: '100%',
  },
});

class StudentPage extends Component {
  state = {

  };

  componentDidMount() {
    const { setTitle, loadStudents } = this.props;
    if (setTitle)
      setTitle('Student List');
    if (loadStudents)
      loadStudents();
  }

  render() {
    const { 
      classes, 
      students = [], 
      isLoading = false 
    } = this.props;

    console.log(students);
    return (
      <Box className={classes.root}>
      </Box>
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
  withStyles(useStyles),
) (StudentPage);
