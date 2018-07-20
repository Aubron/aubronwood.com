import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import history from '../dict/scoreshotsHistory';

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2
  }
})

const ScoreShotsTimeline = ({classes}) => (
  <div style={{
    borderLeft: '1px dashed rgba(0, 0, 0, 0.87)',
    width: '80%',
    margin: 'auto',
  }}>
    {history.map((event) => (
      <Card className={classes.card} key={event.date}>
        <CardHeader
          title={event.title}
          subheader={event.date}
        />
      </Card>
    ))}
  </div>
)

export default withStyles(styles)(ScoreShotsTimeline)
