import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Splash from './Splash';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    width: '100vw',
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Splash />
    </div>
  );
}

export default App;
