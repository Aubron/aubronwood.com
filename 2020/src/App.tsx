import React from 'react';
import Splash from './Splash';
import { makeStyles } from '@material-ui/styles';

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
