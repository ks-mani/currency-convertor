import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const customTheme = createMuiTheme({
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
  },
  palette: {
    primary: {
      light:'#29b6f6',
      main: '#03a9f4',
      dark:'#039be5',
      contrastText: '#fff'
    },
    secondary: {
      light:'#ffee58',
      main: '#ffeb3b',
      dark:'#fdd835',
      contrastText: '#000'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
