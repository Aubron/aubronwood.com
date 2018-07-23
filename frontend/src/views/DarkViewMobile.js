import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import Twitter from 'mdi-material-ui/Twitter';
import Medium from 'mdi-material-ui/Medium';
import formatDistance from 'date-fns/formatDistance'
import Logo from '../presentational/Logo';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: 64,
    width: '100%',
    padding: theme.spacing.unit * 2,
    paddingTop: 0,
    paddingBottom: 0,
  },
  links: {
    fontWeight: 'bold',
    color: 'inherit',
  },
  logos: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
  },
  initials: {
    height: 48,
  },
  name: {
    height: 64,
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
  },
  button: {
    margin: theme.spacing.unit * 2,
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  }
})

const DarkViewMobile = (props) => {
  const { classes } = props;
  let socialIcons = (
    <div>
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
  )
  return (
    <Grid item md={12} lg={6} className={classes.root} >
      <div className={classes.logos}>
        <div>
          <Logo className={classes.initials} logoType="initials" primaryColor="#FFF" secondaryColor="#868686" />
          <Hidden smDown>
            <Logo className={classes.name} logoType="full" primaryColor="#FFF" />
          </Hidden>

        </div>
        <Hidden lgUp>
          {socialIcons}
        </Hidden>
      </div>

      <Hidden mdDown>
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
            <div>
              <Tooltip title="aubron@daemon.group">
                <Button
                  size="large"
                  variant="raised"
                  color="primary"
                  className={classes.button}
                  component="a"
                  href="mailto:aubron@daemon.group"
                >
                  Send Me An Email
                </Button>
              </Tooltip>
            </div>
            {socialIcons}


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
      </Hidden>

    </Grid>
  )
}


export default withStyles(styles)(DarkViewMobile)
