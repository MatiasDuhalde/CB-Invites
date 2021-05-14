import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import theme from './theme';
import reducers from './reducers';
import { SHOW_NOTIFICATION } from './actions/types';

const catchError = store => next => action => {
  if (action.payload && action.payload.error) {
    return store.dispatch({
      type: SHOW_NOTIFICATION,
      payload: {
        type: 'error',
        message: action.payload.error,
      },
    });
  }
  return next(action);
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk), applyMiddleware(catchError)),
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
