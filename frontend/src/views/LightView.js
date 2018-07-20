import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Switch, Route, Link } from 'react-router-dom'
import About from '../presentational/About';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
})

const DarkView = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12} md={6} className={classes.root} >
      <Tabs centered>
        <Tab label="About" component={Link} to="/" />
        <Tab label="ScoreShots" component={Link} to="/scoreshots" />
        <Tab label="This Site" component={Link} to="/this_site" />
        <Tab label="Blog" component={Link} to="/blog" />
        <Tab label="Resume" component={Link} to="/resume" />
      </Tabs>
      <Switch>
        <Route component={About}/>
      </Switch>
    </Grid>
  )
}


export default withStyles(styles)(DarkView)
