import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    height: 64,
    width: 64,
    display: 'inline-block',
    margin: 8,
    [theme.breakpoints.down('md')]: {
      margin: 6
    }
  },
  icon: {
    width: '100%',
    fontSize: 32,
  },
  caption: {
    width: 64,
    textAlign: 'center',
  },
})

const LabeledIcon = ({Icon, title, classes}) => (
  <div className={classes.root}>
    <Icon className={classes.icon} />
    <Typography variant="caption" className={classes.caption}>
      {title}
    </Typography>
  </div>
)

export default withStyles(styles)(LabeledIcon)
