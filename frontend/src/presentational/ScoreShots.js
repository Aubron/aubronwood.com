import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ScoreShotsLogo from './ScoreShotsLogo';
import ScoreShotsTimeline from './ScoreShotsTimeline';
import MarkdownElement from '../external/MarkdownElement';
import scoreshots from '../markdown/scoreshots.md';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  logo: {
    fill: '#6B2587',
    height: 140,
    width: '100%',
  },
  caption: {
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2
  }
})

const ScoreShots = ({classes}) => (
  <div className={classes.root}>
    <Paper className={classes.paper}>
      <ScoreShotsLogo className={classes.logo} />
      <Typography className={classes.caption}>
        CTO and Co-founder
      </Typography>
      <Typography className={classes.caption}>
        February 2016 - Present
      </Typography>
      <MarkdownElement url={scoreshots}/>
    </Paper>
    <ScoreShotsTimeline />
  </div>
)

export default withStyles(styles)(ScoreShots);
