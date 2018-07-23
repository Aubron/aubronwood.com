import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 'calc( 100vh - 210px )',
  }
})

const About = ({ classes }) => (
  <div className={classes.root}>
    <Aubron />
    <div className={classes.flex}>
      <MarkdownElement url={about} />
      <div>
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
    </div>

  </div>
)

export default withStyles(styles)(About);
