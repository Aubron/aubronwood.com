import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Card, Grid, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '10vw'
  },
  card: {
    width: "10vw",
    height: "10vw",
    margin: 12
  }
})

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      spacing={3}
      >
      <Grid
        item
        xs={12}
        >
        <Card>
          <CardMedia
            src="/img/me.jpg"
            component="img"
            />
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        >
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Aubron Wood
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              28 Years Old
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Raleigh, NC
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        >
        <Card>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              JS dev with strengths in technical communication, team leadership, user experience and frontend development.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Currently managing the frontend, developer experience, and identity infrastructure teams at Bandwidth, delivering CPaaS infrastructure to companies like Google, Microsoft, and Zoom.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Previously CTO and Co-founder of ScoreShots, a web based graphics design program that powers the social media feed of colleges, tournaments, and professional sports teams nationwide.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
