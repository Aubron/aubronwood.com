import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../presentational/Logo';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    padding: theme.spacing.unit * 4,
  },
  links: {
    fontWeight: 'bold',
    color: 'inherit',
  },
  logos: {
    display: 'flex',
    flexWrap: 'no-wrap',
  },
  initials: {
    height: '10vh',
  },
  name: {
    height: '10vh',
    padding: 12,
  },
  text: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
})

const DarkView = (props) => {
  const { classes } = props;
  return (
    <Grid item xs={12} md={6} className={classes.root} >
      <div className={classes.logos}>
        <Logo className={classes.initials} logoType="initials" primaryColor="#FFF" secondaryColor="#868686" />
        <Logo className={classes.name} logoType="full" primaryColor="#FFF" />
      </div>
      <div className={classes.text}>
        <Typography variant="title" color="textSecondary">
          Full-Stack Web Developer and Jack-Of-All-Trades
        </Typography>
        <Typography variant="display3" color="primary">
          {`Co-founder and CTO of `}
          <a
            target="_BLANK"
            rel="noopener noreferrer"
            className={classes.links}
            href="https://scoreshots.com"
          >
            ScoreShots
          </a>
        </Typography>
      </div>
    </Grid>
  )
}


export default withStyles(styles)(DarkView)
