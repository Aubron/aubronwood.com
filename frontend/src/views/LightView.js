import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Switch, Route } from 'react-router-dom'
import About from '../presentational/About';
import ScoreShots from '../presentational/ScoreShots';
import Nav from '../containers/Nav';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    position: 'relative',
    overflowY: 'auto',
    [theme.breakpoints.down('md')]: {
      height: 'calc( 100vh - 64px )',
    }
  },
  appBar: {
  },
})

const DarkView = ({classes}) => (
  <Grid item md={12} lg={6} className={classes.root} >
    <Nav />
    <Switch>
      <Route exact path="/scoreshots" component={ScoreShots}/>
      <Route component={About}/>
    </Switch>
  </Grid>
)


export default withStyles(styles)(DarkView)
