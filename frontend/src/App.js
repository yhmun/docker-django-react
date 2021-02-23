import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';
import { GlobalStyles } from './components';
import { renderRoutes } from './components';
import routes from './routes';

const App = () => {
  return (
    <React.Fragment>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {renderRoutes(routes)}
        </ThemeProvider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default App;
