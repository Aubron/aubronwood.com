import React, { Component } from 'react';
import wave from '../assets/wave';

const MAX_ACCELERATION = .08;
const AIR_RESISTANCE = .992;
const AIR_RESISTANCE_THRESHOLD = .2;
const ANIMATION_FRAMES = 200;

const randomInt = (max) => {
  return Math.floor((Math.random() * max) + 1);
}


// takes in a path object, returns an object with an array of points and a
// closePath boolean (indicating if the path is circular)
const parsePath = (path) => {
  const regex = /([a-zA-Z])(-?[^-,a-zA-z]*),?(-?[^,a-zA-z]*)/gm;
  let points = [];

  let match;
  let closePath = false;
  while ((match = regex.exec(path)) !== null) {
    switch (match[1]) {
      case 'M':
      case 'L':
        points.push({
          x: parseFloat(match[2]),
          y: parseFloat(match[3])
        })
        break;
      case 'l':
        let lastPoint = points[points.length - 1];
        points.push({
          x: lastPoint.x + parseFloat(match[2]),
          y: lastPoint.y + parseFloat(match[3]),
        })
        break;
      case 'z':
      closePath = true;
        break;
      default:
        console.log('unhandled command type: ', match[1]);
        break;
    }
  }
  return {
    points,
    closePath,
  };
}

class IntroCanvas extends Component {
  state = {
    canvasWidth: 100,
    canvasHeight: 100,
  }
  componentDidMount() {
    // use the ref to set the size of the canvas
    this.setState({
      canvasWidth: this.refs.canvas.offsetWidth,
      canvasHeight: this.refs.canvas.offsetHeight,
    })

    // generate 1000 particles
    // TODO: See if there's a way to make this performance dependent.
    let particles = [];
    for (let i = 0; i < 1000; i+= 1) {
      particles[i] = {
        x: randomInt(this.refs.canvas.offsetWidth),
        y: randomInt(this.refs.canvas.offsetHeight),
        xV: (Math.random() - .5) * 3,
        yV: (Math.random() - .5) * 3,
      }
    }

    // begin the animation loop, and start the Waaaaave
    this.particles = particles
    this.frame = window.requestAnimationFrame(this.animate);
    setTimeout(this.wave, 200);
    this.interval = setInterval(this.wave,7000);
  }


  // clean up our interval and animation loop.
  componentWillUnmount() {
    clearInterval(this.interval);
    window.cancelAnimationFrame(this.frame);
  }

  // triggers the wave emoji on the canvas.
  // TODO: Support multiple emoji?
  wave = () => {
    // i tracks the current point in the global array.
    let i = 0;

    // these make sure the wave is well placed on the canvas.
    let pathMultiplier = (this.state.canvasWidth * .8) / wave.viewBox
    let pathOffsetX = this.state.canvasWidth * .1;
    let pathOffsetY = (this.state.canvasHeight - (this.state.canvasWidth * .8)) / 2;

    // this is going to be an array of path arrays for drawing points between them.
    let paths = [];

    wave.paths.forEach((path) => {
      // parse the SVG into an object.
      let parsedPath = parsePath(path.points);

      let pathTracker = {
        points: [],
        stroke: path.stroke,
        closePath: parsedPath.closePath,
      };

      // cache the start point to connect the path.
      let pathStart = i;


      for (let j = 0; j < parsedPath.points.length; j += 1) {

        // point is the parsed SVG point, particle is that point's new corresponding particle
        let point = parsedPath.points[j];
        let particle = this.particles[i];

        // we set the goal coordinates to tell the particle where to go.
        particle.goalX = (point.x * pathMultiplier) + pathOffsetX;
        particle.goalY = (point.y * pathMultiplier) + pathOffsetY;

        // the color is used to control the line color.
        particle.color = path.stroke;
        particle.framesTilGoal = ANIMATION_FRAMES;

        //add the particle's global index to the pathTracker.
        pathTracker.points.push(i);

        i += 1;
      }
      paths.push(pathTracker);
    });

    this.paths = paths;
  }

  animate = () => {
    const { canvas } = this.refs;
    const { canvasWidth, canvasHeight } = this.state

    // latch on to context, clear the canvas;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvasWidth,canvasHeight);

    for (let i = 0; i < this.particles.length; i += 1) {




      // render each particle.
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#AAAAAA';
      let particle = this.particles[i];
      ctx.fillRect(particle.x, particle.y, 1, 1);

      // update the particle's location.
      particle.x = particle.x + particle.xV;
      particle.y = particle.y + particle.yV;

      // loop the particles off the edge of the screen when necessary.
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

      // if a frame goal is set, we change velocity to intercept.
      if (particle.goalX && particle.goalY) {
        if (particle.framesTilGoal !== 0) {

          //how fast do we need to be going to get to the goal in the frames until goal.
          let xDifference = particle.goalX - particle.x;
          let yDifference = particle.goalY - particle.y;

          let targetVelocityX = xDifference / particle.framesTilGoal;
          let targetVelocityY = yDifference / particle.framesTilGoal;

          let velocityDifferenceX = Math.abs(particle.xV - targetVelocityX);
          let velocityDifferenceY = Math.abs(particle.yV - targetVelocityY);

          // we impose a max velocity change to prevent jerky linear changes in motion;
          // concerned that on large screens the points will never reach their goal.

          if (velocityDifferenceX > MAX_ACCELERATION) {
            if (targetVelocityX > particle.xV) {
              particle.xV = particle.xV + MAX_ACCELERATION;
            } else {
              particle.xV = particle.xV - MAX_ACCELERATION;
            }
          } else {
            particle.xV = targetVelocityX;
          }

          if (velocityDifferenceY > MAX_ACCELERATION) {
            if (targetVelocityY > particle.yV) {
              particle.yV = particle.yV + MAX_ACCELERATION;
            } else {
              particle.yV = particle.yV - MAX_ACCELERATION;
            }
          } else {
            particle.yV = targetVelocityY;
          }

        }
      } else {

        //for particles not involved in the wave, there is air resistance above a certain speed.
        if (particle.xV > AIR_RESISTANCE_THRESHOLD) {
          particle.xV = particle.xV * AIR_RESISTANCE;
        }
        if (particle.yV > AIR_RESISTANCE_THRESHOLD) {
          particle.yV = particle.yV * AIR_RESISTANCE;
        }
      }

      //update frames til goal, clearing the goal if it is reached.
      if (particle.framesTilGoal >= 1) {
        particle.framesTilGoal = particle.framesTilGoal -= 1;
      } else if (particle.framesTilGoal === 0) {
        delete particle.framesTilGoal;
        delete particle.goalX;
        delete particle.goalY;
        particle.framesAfterGoal = 1;
      }

      if (particle.framesAfterGoal) {
        particle.framesAfterGoal = particle.framesAfterGoal + 1;
      }
    }

    //Draw our strokes through connected points.
    if (this.paths) {
      // createCircle only gets set on the final run, to create the circular wave.
      let createCircle = false;

      // for each path in the SVG,
      this.paths.forEach((path) => {
        let firstParticle = this.particles[path.points[0]]

        // set particle alpha based on distance to goal.
        if (firstParticle.framesTilGoal && firstParticle.framesTilGoal < 20) {
          ctx.globalAlpha = ((20 - firstParticle.framesTilGoal) / 20) * .5
        } else if (firstParticle.framesAfterGoal < 20) {
          ctx.globalAlpha = ((20 - firstParticle.framesAfterGoal) / 20) * .5
        } else {
          ctx.globalAlpha = 0;
        }

        //draw the line between the points.
        ctx.strokeStyle = path.stroke;
        ctx.beginPath();
        ctx.moveTo(firstParticle.x,firstParticle.y);
        for (let i = 1; i < path.points.length - 1; i += 1) {
          let currentPoint = this.particles[path.points[i]];
          ctx.lineTo(currentPoint.x,currentPoint.y);
        }
        ctx.stroke();


        // deploy circle, if this is the last round.
        if (firstParticle.framesTilGoal === 0) {
          createCircle = true;
        }
      })

      //create the circle on the final frame.
      if (createCircle) {
        this.circle = 1;
      }

    }


    // draw the circular wave.
    if (this.circle && this.circle < this.state.canvasHeight / 2) {
      ctx.strokeStyle = '#FFFFFF';
      let alpha = .3 - (this.circle * .001);
      for (let i = this.circle; i > 0 && alpha > 0; i -= 1) {
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(this.state.canvasWidth / 2, this.state.canvasHeight / 2,i, 0, 2*Math.PI);
        ctx.stroke();
        alpha = alpha - .05;
      }

      this.circle = this.circle + 1;
    } else {
      this.circle = null;
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
