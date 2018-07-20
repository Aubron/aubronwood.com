import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
        <Tab label="About" />
        <Tab label="ScoreShots" />
        <Tab label="Projects" />
        <Tab label="Blog" />
        <Tab label="Resume" />
      </Tabs>
    </Grid>
  )
}


export default withStyles(styles)(DarkView)
