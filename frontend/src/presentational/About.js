import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Aubron from '../containers/Aubron';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
})

const About = ({ classes }) => (
  <div className={classes.root}>
    <Aubron />
  </div>
)

export default withStyles(styles)(About);
