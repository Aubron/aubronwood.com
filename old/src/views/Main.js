import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import Hidden from '@material-ui/core/Hidden';
import { BrowserRouter as Router } from 'react-router-dom'
import DarkView from './DarkView';
import DarkViewMobile from './DarkViewMobile';
import LightView from './LightView';

const dark = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#000000'
    },
    background: {
      default: '#000000',
    },
    type: 'dark',
    error: red,
  },
});

const light = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#000000'
    },
    type: 'light',
    error: red,
  },
});

export default () => (
  <Router>
    <Grid container style={{height: '100vh', overflow: 'hidden'}}>
      <CssBaseline />
      <MuiThemeProvider theme={dark}>
        <Hidden mdDown>
          <DarkView />
        </Hidden>
        <Hidden lgUp>
          <DarkViewMobile />
        </Hidden>
      </MuiThemeProvider>
      <MuiThemeProvider theme={light}>
        <LightView />
      </MuiThemeProvider>
    </Grid>
  </Router>
)
