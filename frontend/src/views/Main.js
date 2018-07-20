import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import red from '@material-ui/core/colors/red';
import DarkView from './DarkView';
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
      main: '#ffffff'
    },
    type: 'light',
    error: red,
  },
});

export default () => (
  <Grid container>
    <CssBaseline />
    <MuiThemeProvider theme={dark}>
      <DarkView />
    </MuiThemeProvider>
    <MuiThemeProvider theme={light}>
      <LightView />
    </MuiThemeProvider>
  </Grid>
)
