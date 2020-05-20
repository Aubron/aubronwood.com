import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import SlideShow from '../containers/SlideShow';
import history from '../dict/scoreshotsHistory';
import MarkdownElement from '../external/MarkdownElement';

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    }
  },
  root: {
    borderLeft: '1px dashed rgba(0, 0, 0, 0.87)',
    width: '90%',
    margin: 'auto',
    paddingTop: 1,
    [theme.breakpoints.down('md')]: {
      borderLeft: 0,
      width: '95%',
    }
  }
})

const ScoreShotsTimeline = ({classes}) => (
  <div className={classes.root}>
    {history.map((event) => (
      <Card className={classes.card} key={event.date}>
        <CardHeader
          title={event.title}
          subheader={event.date}
        />
        {
          event.photos ?
            <SlideShow photos={event.photos} /> :
          null
        }
        {
          event.video ?
            <div style={{textAlign: 'center'}}>
              <video style={{maxWidth: '100%'}} src={event.video} autoPlay loop muted />
            </div> :
          null
        }
        <CardContent>
          {event.components ?
            event.components.map((component) => (
              component
            )) :
          null}
          {event.markdown ?
            <MarkdownElement url={event.markdown} /> :
          null}
        </CardContent>
      </Card>
    ))}
  </div>
)

export default withStyles(styles)(ScoreShotsTimeline)
