import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Jal_Onuel',
  },
});

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <App />      
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);