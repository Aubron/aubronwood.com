import React, { useEffect, useState } from 'react';
import { Grid, ListItemSecondaryAction } from '@material-ui/core';
import MediumPost from './MediumPost';
import fetch from 'node-fetch';
import Parser from 'rss-parser';

const Main = () => {
  const [stories,setStories] = useState();
  useEffect(() => {
    const fetchData = async () => {
      let parser = new Parser();
      let storiesRes = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@AubronW');
      setStories(storiesRes)
    }
    fetchData();
  },[setStories])
  console.log(stories);
  return(
    <Grid
      container
      spacing={3}
      >
      <Grid item xs={4}>
        { stories ? stories.items.map((item) => {
          return <MediumPost story={item} />
        }) : null }
      </Grid>
    </Grid>
  )
}

export default Main;