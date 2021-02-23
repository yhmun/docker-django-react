import { withStyles } from '@material-ui/core/styles';

const GlobalStyles = withStyles({
  // @global is handled by jss-plugin-global.
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      width: '100%',
      height: '100%',
    },
    body: {
      //backgroundColor: '#f4f6f8',
      width: '100%',
      height: '100%',
    },
    a: {
      textDecoration: 'none'
    },
    '#root': {
      width: '100%',
      height: '100%',
    }
  },
})(() => null);

export default GlobalStyles;
