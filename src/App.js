/* eslint-disable consistent-return */
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import SnackBar from 'components/SnackBar';

import './config/ReactotronConfig';

import theme from './helpers/theme';
import Routes from './routes/index';
import history from './services/history';
import { store, persistor } from './store/index';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Router history={history}>
            <SnackBar />
            <Routes />
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
