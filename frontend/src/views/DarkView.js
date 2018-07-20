import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import Twitter from 'mdi-material-ui/Twitter';
import Medium from 'mdi-material-ui/Medium';
import formatDistance from 'date-fns/formatDistance'
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
    height: '78vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 28,
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
          {`Co-founder and CTO `}
          <a
            target="_BLANK"
            rel="noopener noreferrer"
            className={classes.links}
            href="https://scoreshots.com"
          >
            @ScoreShots
          </a>
        </Typography>
        <div >
          <Tooltip title="Twitter: @aubron">
            <IconButton
              className={classes.icon}
              component="a"
              href="https://twitter.com/aubron"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              <Twitter fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github: aubron">
            <IconButton
              className={classes.icon}
              component="a"
              href="https://github.com/aubron"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              <GithubCircle fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Medium: @aubron">
            <IconButton
              className={classes.icon}
              component="a"
              href="https://medium.com/@aubron"
              target="_BLANK"
              rel="noopener noreferrer"
            >
              <Medium fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </div>

      </div>
      <a
        target="_BLANK"
        rel="noopener noreferrer"
        className={classes.links}
        href={`https://github.com/Aubron/aubronwood.com/commit/${process.env.REACT_APP_CI_COMMIT_ID}`}
      >
        <Typography variant="caption">
          Last Modified: <Typography>{formatDistance(new Date(),new Date(process.env.REACT_APP_CI_STRING_TIME)) + ' ago'}</Typography>
        </Typography>
        <Typography variant="caption">
          {process.env.REACT_APP_CI_COMMIT_ID ? `"${process.env.REACT_APP_CI_COMMIT_MESSAGE}"` : null}
        </Typography>
      </a>
    </Grid>
  )
}


export default withStyles(styles)(DarkView)
