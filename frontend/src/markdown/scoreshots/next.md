I spent almost a year working solo, mainly during nights and weekends, to do a total revamp of the ScoreShots platform, with the goal of building a mobile-first, single page experience, and a versatile API to power the underlying product into the future.

Next was launched to all clients at the annual CoSIDA event, with an opt-in flow to pull their old data into the new GraphQL database. Reactions to the new product have been almost exclusively positive, and it has driven sales numbers exponentially higher than ever before in the product's lifetime.

### React and GraphQL

I built Next's frontend on React, and its API on GraphQL, two technologies created and used by Facebook. Combined, they allow for a responsive and lightning fast interface. Scaling from an iPhone X to retina display Macbooks, Next looks and works fantastically. It also let me add my favorite useless feature: Team-Colored UI across the platform.

### AWS Solutions

Next's production infrastructure is *fully AWS driven*. Our GraphQL resolvers run in Lambda, querying a prisma.io layer that is backed by Aurora. The static site is served via S3 and Cloudfront, and various EC2/ECS-based microservices handle things like image resizing and video generation.

### Continuous Deployment

As a solo project, I also fully set up the development environment and continuous deployment pipeline. The master branch is continuously deployed and tested by Codeship. Database migrations, s3 static content updates, ECS cluster and Lambda upgrades, all happen in response to any master branch update, verifying against jest and enzyme tests and the airbnb eslint preset.

Using some customization of create-react-app's serviceWorker implementation, I provided update notifications to users using old builds of the Progressive Web App, and Next fully supports installing the PWA to a phone or tablet's home screen. Just like that, we had an app that would run without browser chrome, and which would allow us offline saving, push notifications, and more. All without the app store.
