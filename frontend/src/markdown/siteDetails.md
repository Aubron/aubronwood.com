# About This Site

I've set this site up to replicate a lot of the infrastructure and skills used in ScoreShots. Unlike ScoreShots, however, this site is [fully open source,](https://github.com/Aubron/aubronwood.com) so you can get an idea of my process, code, and preferred stack. I've highlighted the important parts here.


* **Continuously Deployed**: I'm a firm believer in CI/CD, and this site is no exception. It is tested, built, and deployed automatically in response to changes to the master branch. I use Jest and Enzyme for testing, and codecov to track test coverage. Codeship does the heavy lifting here, running the scripts in the cloud and eventually deploying new versions of the site to S3.
* **AWS Backed**: This site is hosted in a S3 bucket, and distributed via Cloudfront. Shortly I'll be adding an ECS cluster to handle a few microservices I have planned.
* **Practically Designed**: Text (like this) is written in markdown, for ease of updates. [You can see the source for this page here.](https://github.com/Aubron/aubronwood.com/issues)
* **Mobile Responsive**: Using a flex based grid system, this layout should work on any sized screen.
* **Leveraging a UI Framework**: This site uses [material-ui](https://material-ui.com/) to bootstrap a consistent look and feel throughout.
* **Constantly Improving**: I'm keeping a backlog of features I want to add in the [Github Issues for the site.](https://github.com/Aubron/aubronwood.com/issues)
