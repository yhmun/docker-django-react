import React from "react";
import { Box, CircularProgress } from '@material-ui/core';

class Progress extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Box 
        className={className}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <CircularProgress disableShrink />
      </Box>
    );
  }
}

export default Progress;

