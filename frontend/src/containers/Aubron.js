import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import MeImage from '../assets/me.jpg';

const styles = theme => ({
  img: {
    borderRadius: '50%',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '10%',
    }
  },
  imgContainer: {
    flexShrink: 1,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      marginBottom: theme.spacing.unit * 2
    }
  },
  root: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    }
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }
})

class Aubron extends Component {
  state = {
    yearFloat: '',
  }
  componentDidMount() {
    //find the date of my most recent birthday.
    //can't do this by finding out number of ms since feb 10 1992,
    //because of wibbly wobly timey wimey details like leap years
    let now = new Date();
    this.now = now.getTime();
    let birthday = new Date();
    birthday.setMonth(1);
    birthday.setDate(10);
    this.birthday = birthday.getTime();
    if (this.birthday > this.now) {
      //birthday hasn't happened yet, rewind one year.
      birthday.setYear(birthday.getFullYear() - 1);
      this.birthday = birthday.getTime();
    }
    this.animation = requestAnimationFrame(this.updateAge);
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.animation);
  }
  updateAge = () => {
    //we calculate the number of ms since my last birthday
    //and get the float of that.
    let now = new Date();
    this.now = now.getTime();
    let msCount = this.now - this.birthday;
    let yearFloat = "" + (msCount / 31536000000);
    yearFloat = yearFloat.substr(1,10);
    this.setState({
      yearFloat,
    })
    this.animation = requestAnimationFrame(this.updateAge);
  }
  render() {
    const {styles, className, classes} = this.props;
    let extendedClassName = `${classes.root} ${className}`;
    let extendedStyles = styles;
    return (
      <div className={extendedClassName} styles={extendedStyles} >
        <div className={classes.imgContainer}>
          <img alt="headshot of Aubron Wood" src={MeImage} className={classes.img} />
        </div>

        <div className={classes.text}>
          <Typography variant="display2">
            Aubron Wood
          </Typography>
          <Hidden lgUp>
            <Typography variant="caption" color="textSecondary">
              Full-Stack Web Developer and Jack-Of-All-Trades
            </Typography>
            <Typography variant="subheading" color="primary">
              {`Co-founder and CTO `}
              <a
                target="_BLANK"
                rel="noopener noreferrer"
                className={classes.links}
                href="https://scoreshots.com"
              >
                @ScoreShots
              </a>
            </Typography>
          </Hidden>
          <Typography>
            Raleigh, North Carolina
          </Typography>
          <Typography variant="subheading">
            26{`${this.state.yearFloat}`} years old
          </Typography>
          <Typography variant="caption">
            <a className={classes.link} href="mailto:aubron@daemon.group">aubron@daemon.group</a>
          </Typography>
          <Typography variant="caption">
            <a className={classes.link} href="tel:1-910-922-5029">910.502.0123</a>
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Aubron);
