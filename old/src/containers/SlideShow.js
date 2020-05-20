import React, { Component } from 'react';


//expects images at a 1920x947 resolution, for simplicity. Will work for others, but may clip.
class SlideShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slide: props.photos.length - 1
    }
  }
  componentDidMount() {
    let interval = this.props.speed || 3000;
    this.interval = setInterval(this.cycleSlides,interval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  cycleSlides = () => {
    let { slide } = this.state;
    const { photos } = this.props;
    if (this.state.slide === photos.length - 1) {
      slide = 0;
    } else {
      slide = slide + 1;
    }
    this.setState({
      slide,
    })
  }
  render() {
    const {photos} = this.props;
    const {slide} = this.state;
    let imgStyle = {
      width: '100%',
      transition: '500ms opacity',
      position: 'absolute',
      top: 0,
      left: 0,
    }
    // if we are on the first slide, show the last slide
    // otherwise, just show the previous slide.
    let last = slide === 0 ? photos.length - 1 : slide - 1;
    // if we are on the last slide, show the first slide
    // othewise just show the next slide.
    let next = slide === photos.length - 1 ? 0 : slide + 1;
    let lastImage = (
      <img
        key={photos[last]}
        src={`/img/${photos[last]}`}
        alt=""
        style={imgStyle}
      />
    )
    let currentImage = (
      <img
        key={photos[slide]}
        src={`/img/${photos[slide]}`}
        alt=""
        style={imgStyle}
      />
    )
    let nextImage = (
      <img
        key={photos[next]}
        src={`/img/${photos[next]}`}
        alt=""
        style={{
          opacity: 0,
          ...imgStyle
        }}
      />
    )
    return (
      <div style={{width: '100%', paddingTop: '49.32292%', position: 'relative'}}>
        {lastImage}
        {currentImage}
        {nextImage}
      </div>
    )
  }
}

export default SlideShow
