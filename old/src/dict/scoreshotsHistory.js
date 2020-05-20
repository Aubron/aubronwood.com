import marketing from '../markdown/scoreshots/marketing.md'
import next from '../markdown/scoreshots/next.md'
import branding from '../markdown/scoreshots/branding.md'
import mvp from '../markdown/scoreshots/mvp.md'
import start from '../markdown/scoreshots/start.md'
import uiOverhaul from '../markdown/scoreshots/uiOverhaul.md'
import video from '../markdown/scoreshots/video.md'
import departure from '../markdown/scoreshots/departure.md'


export default [
  {
    date: 'August 2018',
    title: 'Departure',
    markdown: departure
  },
  {
    date: 'July 2018',
    title: 'Marketing and Billing Revamp',
    markdown: marketing,
  },
  {
    date: 'June 2018',
    title: 'ScoreShots Next 🎉',
    photos: [
      'next1.jpg',
      'next2.png',
      'next3.png',
      'next4.png',
    ],
    markdown: next,
  },
  {
    date: 'January 2018',
    title: 'Rebranding',
    video: '/img/nextbranding.mp4',
    markdown: branding,
  },
  {
    date: 'May 2017',
    title: 'ScoreShots Video',
    video: '/img/homepage1.mp4',
    markdown: video,
  },
  {
    date: 'September 2016',
    title: 'UI/UX Overhaul',
    photos: [
      'legacy1.jpg',
      'legacy2.png',
      'legacy3.png',
      'legacy4.png',
    ],
    markdown: uiOverhaul,
  },
  {
    date: 'February 2016',
    title: 'MVP Release',
    photos: [
      'mvp1.jpg',
      'mvp2.jpg',
      'mvp4.jpg',
      'mvp5.jpg',
    ],
    markdown: mvp,
  },
  {
    date: 'October 2015',
    title: 'Project Start',
    markdown: start,
  },
]
