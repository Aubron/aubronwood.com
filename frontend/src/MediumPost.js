import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardActionArea, Button, CardContent, CardMedia, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MediumPost = ({story}) => {
  const classes = useStyles();
  const [ storyDetails, setStoryDetails ] = useState({});
  useEffect(() => {
    let storyDetail = {};
    let regex = /<figure><img .+?src="([^"]+)/gi
    let matches = [ ...story['content:encoded'].matchAll(regex) ]
    if (matches.length > 0) {
      storyDetail.img = matches[matches.length - 1][1]
    }
    storyDetail.title = story.title
    setStoryDetails(storyDetail);
  },[story])

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          height="140"
          image={storyDetails.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap>
            {storyDetails.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}


export default MediumPost;