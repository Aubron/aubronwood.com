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
    <Typography variant="display1" gutterBottom style={{marginTop: 12}}>
      Strengths
    </Typography>
    <LabeledIcon title="Node.js" Icon={Nodejs} />
    <LabeledIcon title="React" Icon={ReactIcon} />
    <LabeledIcon title="GraphQL" Icon={Graphql} />
    <LabeledIcon title="Webpack" Icon={Webpack} />
    <LabeledIcon title="Material UI" Icon={MaterialUi} />
    <LabeledIcon title="HTML5" Icon={LanguageHtml5} />
    <LabeledIcon title="CSS3" Icon={LanguageCss3} />
    <LabeledIcon title="Python" Icon={LanguagePython} />
  </div>
)

export default withStyles(styles)(About);
