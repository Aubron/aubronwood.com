import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
import MarkdownElement from '../external/MarkdownElement';
import about from '../markdown/about.md';
import siteDetails from '../markdown/siteDetails.md';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 2,
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  me: {
    marginBottom: theme.spacing.unit * 2,
    flexShrink: 1,
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  stats: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
  }
})

const About = ({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={16}>
      <Grid item xs={12} md={6}>
        <div className={classes.flex}>
          <Paper className={`${classes.paper} ${classes.me}`}>
            <Aubron />
          </Paper>
          <Card className={classes.stats}>
            <CardContent>
              <Typography variant="title" gutterBottom>
                Useless GraphQL Powered Stats Coming Soon™
              </Typography>
              <Typography gutterBottom>
                My intent is to build a little GraphQL api for my own details, and track them over time here.
              </Typography>
              <Typography>
                Weight, location, maybe even games of fortnite played.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component="a" href="https://github.com/Aubron/aubronwood.com/issues/3">Track My Progress</Button>
            </CardActions>
          </Card>
        </div>

      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
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
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <MarkdownElement url={about} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <MarkdownElement url={siteDetails} />
        </Paper>
      </Grid>
    </Grid>




  </div>
)

export default withStyles(styles)(About);
