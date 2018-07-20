import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MeImage from '../assets/me.jpg';

const styles = theme => ({
  img: {
    height: '100%',
    borderRadius: '50%',
  },
  root: {
    display: 'flex',
    height: 180,
    justifyContent: 'center',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    marginLeft: theme.spacing.unit * 3
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
    const {externalStyles, externalClassName, classes} = this.props;
    let className = `${classes.root} ${externalClassName}`;
    let styles = externalStyles;
    return (
      <div className={className} styles={styles} >
        <img src={MeImage} className={classes.img} />
        <div className={classes.text}>
          <Typography variant="display2">
            Aubron Wood
          </Typography>
          <Typography variant="subheading">
            26{`${this.state.yearFloat}`} years old
          </Typography>
          <Typography>
            Raleigh/Durham NC
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Aubron);
