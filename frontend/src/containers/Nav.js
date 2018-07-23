import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
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
    return (
      <AppBar position='sticky' color="inherit" style={this.props.style}>
        <Tabs centered value={this.state.value} onChange={this.changeNav}>
          <Tab label="About" component={Link} to="/" value="/about" />
          <Tab label="ScoreShots" component={Link} to="/scoreshots" value="/scoreshots" />
        </Tabs>
      </AppBar>
    )

  }
}

export default withRouter(Nav);
