import React from 'react'
import { Link } from 'gatsby'

//import Layout from '../components/layout'
//import Image from '../components/image'
//import SEO from '../components/seo'
import Canvas from '../components/canvas'
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from 'mdi-material-ui/Email';
import GithubIcon from 'mdi-material-ui/GithubCircle';
import TwitterIcon from 'mdi-material-ui/Twitter';
import Split from '../templates/split';
import Blog from '../components/blog';
import About from '../components/About';

const styles = (theme) => ({
    taglines: {
        margin: 'auto',
        textAlign: 'center'
    },
    heading: {
        fontSize: 30,
        color: "#662D91",
        [theme.breakpoints.down('sm')]: {
            fontSize: 22,
        },
    },
    name: {
      marginTop: 0,
      marginBottom: 0
    },
    title: {
        marginTop: 0,
        fontWeight: 400,
        marginBottom: theme.spacing.unit
    },
    former: {
        marginTop: 0,
        fontWeight: 200,
    },
    container: {
      paddingLeft: theme.spacing.unit * 6,
      paddingRight: theme.spacing.unit * 6
    }
})

const IndexPage = ({classes, data: { allMarkdownRemark: { edges }}}) => (
  <React.Fragment>
    <AppBar color="inherit" style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <h4 style={{flexGrow: 1}}>Testing</h4>
        <div>
          <Tooltip title="@aubron">
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Tooltip>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <GithubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
    <div className={classes.taglines}>
        <div className={classes.heading}>
            <h1 className={classes.name}><span style={{fontWeight: 900}}>AUBRON</span> <span style={{fontWeight: 200}}>WOOD</span></h1>
        </div>
        <h2 className={classes.title}>Developer Experience Team Lead @Bandwidth</h2>
        <h3 className={classes.former}>Formerly Cofounder @ScoreShots</h3>
    </div>
    <div className={classes.container}>
      <Split left={<About edges={edges}/>} right={<Blog edges={edges}/>} />
    </div>
    
  </React.Fragment>
)


/*
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
*/

export default withStyles(styles)(IndexPage)

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            featuredImage {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`