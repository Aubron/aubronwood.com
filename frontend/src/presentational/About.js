import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Nodejs from 'mdi-material-ui/Nodejs';
import ReactIcon from 'mdi-material-ui/React';
import Graphql from 'mdi-material-ui/Graphql';
import Webpack from 'mdi-material-ui/Webpack';
import MaterialUi from 'mdi-material-ui/MaterialUi';
import LanguageHtml5 from 'mdi-material-ui/LanguageHtml5';
import LanguageCss3 from 'mdi-material-ui/LanguageCss3';
import LanguageJavascript from 'mdi-material-ui/LanguageJavascript';
import LanguagePhp from 'mdi-material-ui/LanguagePhp';
import LanguagePython from 'mdi-material-ui/LanguagePython';
import LabeledIcon from './LabeledIcon';
import Aubron from '../containers/Aubron';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
})

const About = ({ classes }) => (
  <div className={classes.root}>
    <Aubron />
    <Typography variant="title" gutterBottom style={{marginTop: 12}}>
      About Me
    </Typography>
    <Typography gutterBottom>
      {
        `
          I started working in web development in 2010, shortly before graduating high school at the North Carolina School of Science and Math.
          I was a freelancer for 5 years, teaching myself the details of Javascript and php working on projects for small business clients.
        `
      }
    </Typography>
    <Typography gutterBottom>
      {
        `
          In 2015, I began working for Immersion Media, and was promoted to Lead Developer by the end of that year. There I managed a team of 4,
          and developed projects for clients like the US Soccer Foundation, USA Basketball, and the National Wrestling Coaches of America.
        `
      }
    </Typography>
    <Typography gutterBottom>
      {
        `
          I co-founded ScoreShots, a canvas-based social graphic tool for sports teams, in 2016. I launched the original, php-backed version early
          that year as a MVP, then directed a UI/UX overhaul in 2017. Throughout the remainder of that year, I worked single-handedly on ScoreShots
          Next, a complete rewrite of the platform based on React and GraphQL.
        `
      }
    </Typography>
    <Typography gutterBottom>
      {
        `
          ScoreShots Next launched to great praise in June of 2018. It currently powers the social media of hundreds of sports teams across all sports and sizes, ranging from high schools
          to professional teams like the Dallas Mavericks.
        `
      }
    </Typography>
    <Typography gutterBottom>
      <Link to="/scoreshots">More details of my work on ScoreShots is available here</Link>
    </Typography>
    <Typography variant="title" gutterBottom style={{marginTop: 12}}>
      Languages
    </Typography>
    <LabeledIcon title="Javascript" Icon={LanguageJavascript} />
    <LabeledIcon title="HTML5" Icon={LanguageHtml5} />
    <LabeledIcon title="CSS3" Icon={LanguageCss3} />
    <LabeledIcon title="Python" Icon={LanguagePython} />
    <LabeledIcon title="php" Icon={LanguagePhp} />
    <Typography variant="title" gutterBottom style={{marginTop: 12}}>
      Frameworks and Libraries
    </Typography>
    <LabeledIcon title="Node.js" Icon={Nodejs} />
    <LabeledIcon title="React" Icon={ReactIcon} />
    <LabeledIcon title="GraphQL" Icon={Graphql} />
    <LabeledIcon title="Express" Icon={LanguageJavascript} />
    <LabeledIcon title="Prisma" Icon={Graphql} />
    <LabeledIcon title="Webpack" Icon={Webpack} />
    <LabeledIcon title="Apollo 2.1" Icon={LanguageJavascript} />
    <LabeledIcon title="Material UI" Icon={MaterialUi} />
    <LabeledIcon title="jQuery" Icon={LanguageJavascript} />
    <LabeledIcon title="Codeigniter" Icon={LanguagePhp} />
    <LabeledIcon title="fabric.js" Icon={LanguageJavascript} />
  </div>
)

export default withStyles(styles)(About);
