import React from 'react'
import Typography from '@material-ui/core/Typography'

const COMPONENT_SPACING = 12;

export default [
  {
    date: 'July 2018',
    title: 'Marketing and Billing Revamp',
    components: [
      <Typography key="intro" gutterBottom>
        {`
          Following the overwhelmingly positive response to Next at CoSIDA, I revamped our
          marketing efforts to allow us to do more with a small staff. I integrated us
          deeply with Intercom for communication and Stripe for payment processing,
          using Stripe for all of our invoicing and allowing customer service reps
          to see Stripe subscription information.
        `}
      </Typography>,
      <Typography key="automation" gutterBottom style={{marginTop: COMPONENT_SPACING}}>
        {`
          I automated customer check-ins and renewal emails through Intercom, freeing up a
          huge amount of time in our marketing department to handle the influx of new leads
          and clients.
        `}
      </Typography>,
    ]
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
    components: [
      <Typography key="intro" gutterBottom style={{marginTop: COMPONENT_SPACING}}>
        {`
          I spent almost a year working solo, mostly during nights and weekends, to do a final
          revamp of the platform. At the annual CoSIDA event, I deployed ScoreShots Next to our clients
          via a custom opt-in system, pulling their old data into a new GraphQL database. Reactions have
          been overwhelmingly positive, and it has driven sales numbers higher than ever before in the
          product's lifetime.
        `}
      </Typography>,
      <div key="react/graphql" style={{marginTop: COMPONENT_SPACING}}>
        <Typography variant="title" gutterBottom>
          React and GraphQL
        </Typography>
        <Typography gutterBottom>
          {`
            I built Next on a React and GraphQL technology stack that allows for a responsive,
            lightning fast interface. Scaling from iPhone X to Retina display Macbooks, Next looks
            and works fantastically regardless of the size of your screen.
          `}
        </Typography>
      </div>,
      <div key="administration" style={{marginTop: COMPONENT_SPACING}}>
        <Typography variant="title" gutterBottom>
          AWS Solutions
        </Typography>
        <Typography gutterBottom>
          {`
            Next's production infrastructure is fully AWS driven. Our GraphQL resolvers run on
            lambda, querying a prisma.io layer that is backed by Aurora. The static site content is
            served via S3 and a Cloudfront distribution, and various EC2/ECS-based microservices
            handle things like image resizing and video generation.
          `}
        </Typography>
      </div>,
      <div key="ci/cd" style={{marginTop: COMPONENT_SPACING}}>
        <Typography variant="title" gutterBottom>
          Continuous Deployment
        </Typography>
        <Typography gutterBottom>
          {`
            The master branch is continuously deployed and tested by Codeship. Everything from
            database migrations to s3 static content updating to ECS cluster updates happens via a
            master branch commit, verifying against jest tests and the airbnb eslint preset.
          `}
        </Typography>
        <Typography gutterBottom>
          {`
            Using some customization of create-react-app's serviceWorker implementation, we also
            provide update notifications to users using old builds of the Progressive Web App, and
            fully support installing the PWA to a phone or tablet's home screen
          `}
        </Typography>
      </div>
    ]
  },
  {
    date: 'January 2018',
    title: 'Rebranding',
    video: '/img/nextbranding.mp4',
    components: [
      <Typography key="intro" gutterBottom>
        {`
          To prepare for Next, I coordinated a ScoreShots rebranding, throwing off the tired color
          scheme, slogan and logo for a modern, creative look.
        `}
      </Typography>,
      <Typography key="slogan" gutterBottom style={{marginTop: COMPONENT_SPACING}}>
        {`
          Meet your new MVP.
        `}
      </Typography>
    ]
  },
  {
    date: 'May 2017',
    title: 'ScoreShots Video',
    video: '/img/homepage1.mp4',
    components: [
      <Typography key="intro" gutterBottom>
        {`
          I designed and implemented an automated video rendering pipeline running in AWS Lambda, which
          used fabric.js to allow the client to add, scale, and position assets, and then fed those assets
          into ffmpeg, which created both graphics with video backgrounds, and allowed for motion effects like
          panzooms and fades on image content.
        `}
      </Typography>,
      <Typography key="effects" gutterBottom style={{marginTop: COMPONENT_SPACING}}>
        {`
          I would later update this to add video overlay effects like smoke, embers and sparks.
        `}
      </Typography>,
      <Typography key="popularity" gutterBottom style={{marginTop: COMPONENT_SPACING}}>
        {`
          These features were hugely popular, and I eventually had to move this stack to EC2/ECS hardware to allow
          for larger files and faster renders.
        `}
      </Typography>
    ],
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
    components: [
      <Typography key="intro" gutterBottom>
        {`
          With the MVP in the hands of a few early clients, I was able to overhaul the software's (at this point abysmal) UI.
          I adopted the brand-new Material Design standards from Google, and customized them to create a unique feel for
          our final launch product.
        `}
      </Typography>,
      <Typography key="final" gutterBottom>
        {`
          This platform overhaul would form the foundation of the product until mid-2018, and was transformative to its look and feel.
        `}
      </Typography>
    ],
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
    components: [
      <Typography key="intro" gutterBottom style={{marginTop: COMPONENT_SPACING}}>
        {`
          Despite my many protests on design and layout, I created the MVP to spec, changing only that which was truly egregious.
          It is shown above, for the purpose of showing the scale of my later contributions in modernizing the product.
        `}
      </Typography>,

    ],
  },
  {
    date: 'October 2015',
    title: 'Project Start',
    components: [
      <Typography key="intro" gutterBottom>
        {`
          I began working on the ScoreShots product after the departure of the previous Lead Developer. I was handed the product spec and told
          it was already a month behind, and got to work. I would eventually end up restructuring the development team and mostly starting over with the
          Codeigniter MVC framework, due to systemic and architectural issues.
        `}
      </Typography>,

    ],
  },
]
