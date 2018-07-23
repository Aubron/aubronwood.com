import React, { Component } from 'react';

const randomInt = (max) => {
  return Math.floor((Math.random() * max) + 1);
}

class IntroCanvas extends Component {
  state = {
    canvasWidth: 100,
    canvasHeight: 100,
  }
  componentDidMount() {
    this.setState({
      canvasWidth: this.refs.canvas.offsetWidth,
      canvasHeight: this.refs.canvas.offsetHeight,
    })
    let particles = [];
    for (let i = 0; i < 1000; i+= 1) {
      particles[i] = {
        x: randomInt(this.refs.canvas.offsetWidth),
        y: randomInt(this.refs.canvas.offsetHeight),
        xV: (Math.random() - .5) * 3,
        yV: (Math.random() - .5) * 3,
      }
    }
    this.particles = particles
    this.frame = window.requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.frame);
  }

  animate = () => {
    const { canvas } = this.refs;
    const { canvasWidth, canvasHeight } = this.state
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    ctx.fillStyle = 'rgb(185,185,185)';
    for (let i = 0; i < this.particles.length; i += 1) {
      let particle = this.particles[i];
      ctx.fillRect(particle.x, particle.y, 1, 1);
      particle.x = particle.x + particle.xV;
      particle.y = particle.y + particle.yV;
      if (particle.x < 0) {
        particle.x = canvasWidth + particle.x;
      } else if (particle.x > canvasWidth) {
        particle.x = particle.x - canvasWidth;
      }

      if (particle.y < 0) {
        particle.y = canvasHeight + particle.y;
      } else if (particle.y > canvasHeight) {
        particle.y = particle.y - canvasHeight;
      }
      particle.xV = particle.xV * .992;
      particle.yV = particle.yV * .992;
    }
    this.frame = window.requestAnimationFrame(this.animate);
  }
  render() {
    const { className } = this.props;
    const { canvasWidth, canvasHeight } = this.state
    return (
      <canvas ref="canvas" width={canvasWidth} height={canvasHeight} className={className} />
    )
  }
}

export default IntroCanvas
