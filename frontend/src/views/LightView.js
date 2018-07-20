import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Switch, Route, Link } from 'react-router-dom'
import About from '../presentational/About';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    position: 'relative',
  },
})

const DarkView = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12} md={6} className={classes.root} >
      <AppBar position='static' color="secondary">
        <Tabs centered value={0}>
          <Tab label="About" component={Link} to="/" />
          <Tab label="ScoreShots" component={Link} to="/scoreshots" disabled />
          <Tab label="This Site" component={Link} to="/this_site" disabled />
          <Tab label="Blog" component={Link} to="/blog" disabled />
          <Tab label="Resume" component={Link} to="/resume" disabled />
        </Tabs>
      </AppBar>
      <Switch>
        <Route component={About}/>
      </Switch>
    </Grid>
  )
}


export default withStyles(styles)(DarkView)
