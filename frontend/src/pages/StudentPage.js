import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
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
    const { setTitle } = this.props;
    if (setTitle)
      setTitle('Student List');
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.root}>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles),
) (StudentPage);
