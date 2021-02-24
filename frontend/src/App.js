import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/core';
import { GlobalStyles, renderRoutes, ScrollToTop } from './components';
import { configureStore } from './store/store';
import theme from './theme';
import routes from './routes';

const App = () => {
  return (
    <React.Fragment>
      <Provider store={configureStore()}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {/*<ScrollToTop />*/}
            {renderRoutes(routes)}
          </ThemeProvider>
        </HelmetProvider>
      </Provider>
    </React.Fragment>
  );
};

export default App;
