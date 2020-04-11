import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar'
import Main from './Main'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#282c34',
    height: '100vh',
    width: '100vw',
    position: 'relative',
  },
  container: {
    maxWidth: "80vw",
    margin: 'auto',
    marginTop: 12
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
