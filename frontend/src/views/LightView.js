import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Switch, Route, Link, withRouter } from 'react-router-dom'
import About from '../presentational/About';
import ScoreShots from '../presentational/ScoreShots';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    position: 'relative',
    overflowY: 'auto',
  },
})

class DarkView extends Component {
  constructor(props) {
    super(props);
    let path = this.props.location.pathname
    if (this.props.location.pathname === "/") {
      path = "/about"
    }
    this.state = {
      value: path,
    }
  }
  changeNav = (e,page) => {
    this.setState({
      value: page
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid item md={12} lg={6} className={classes.root} >
        <AppBar position='sticky' color="inherit">
          <Tabs centered value={this.state.value} onChange={this.changeNav}>
            <Tab label="About" component={Link} to="/" value="/about" />
            <Tab label="ScoreShots" component={Link} to="/scoreshots" value="/scoreshots" />
            <Tab label="This Site" component={Link} to="/this_site" value="/this_site" disabled />
            <Tab label="Resume" component={Link} to="/resume" value="/resume" disabled />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/scoreshots" component={ScoreShots}/>
          <Route component={About}/>
        </Switch>
      </Grid>
    )
  }
}


export default withRouter(withStyles(styles)(DarkView))
