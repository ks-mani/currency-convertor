import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './utils/reducers/mainReducer'


const customTheme = createMuiTheme({
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
  },
  palette: {
    primary: {
      light: '#29b6f6',
      main: '#03a9f4',
      dark: '#039be5',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffee58',
      main: '#ffeb3b',
      dark: '#fdd835',
      contrastText: grey[700]
    }
  }
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
