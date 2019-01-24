import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import CSSBaseline from '@material-ui/core/CSSBaseline'
import BezierEasing from 'bezier-easing';
import awlogo from './awlogo';

const styles = (theme) => ({
    canvas: {
        backgroundColor: '#F0F0F0',
        position: 'fixed',
        left: 0,
        top: 0,
    },
    container: {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 10,
        overflowY: 'scroll'
    }
})

const MAX_ACCELERATION = .08;
const AIR_RESISTANCE = .992;
const AIR_RESISTANCE_THRESHOLD = .3;
const ANIMATION_FRAMES = 200;
const ROOT_DISTANCE_THRESHOLD = 4;
const MAX_SPEED = 12;
const SPEED_MOD = .2;

const easing = BezierEasing(0.4, 0.0, 0.2, 1)

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

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
            scrollState: 0
        }
        
    }
    componentDidMount() {
        window.addEventListener("resize", this.resetDims);
        let particles = [];
        for (let i = 0; i < 5000; i+= 1) {
            let x = randomInt(this.refs.canvas.offsetWidth)
            let y = randomInt(this.refs.canvas.offsetHeight)
            particles[i] = {
                x,
                y,
                alpha: .4 + (Math.random() * .6),
                xV: (Math.random() - .5) * 2,
                yV: (Math.random() - .5) * 2,
            }
        }
        this.particles = particles
        this.frame = window.requestAnimationFrame(this.animate);
        //setInterval(this.showLogo, 5000)
        this.refs.container.addEventListener("scroll",this.scrollForce)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resetDims);
        window.cancelAnimationFrame(this.frame);
    }
    scrollForce = (e) => {
        this.unholdParticles();
        setTimeout(this.showLogo,500);
        this.applyForce(this.state.scrollState - e.target.scrollTop)
        this.setState({
            scrollState: e.target.scrollTop
        })
    }
    applyForce = (force) => {
        for(let i = 0; i < this.particles.length; i += 1) {
            let particle = this.particles[i];
            particle.y += force
        }
    }
    resetDims = () => {
        this.setState({
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight
        })
    }
    unholdParticles = () => {
        for (let i = 0; i < this.particles.length; i += 1) {
            this.particles[i].hold = false
        }
    }
    animate = () => {
        const { canvas } = this.refs;
        const { canvasWidth, canvasHeight } = this.state
    
        // latch on to context, clear the canvas;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
    
        for (let i = 0; i < this.particles.length; i += 1) {
            // render each particle.
            let particle = this.particles[i];
            if (particle.animating) {
                ctx.globalAlpha = 1;
                ctx.fillStyle = "#662d91";
            } else {
                ctx.fillStyle = '#000';
                ctx.globalAlpha = particle.alpha;
            }
            ctx.fillRect(particle.x, particle.y, 1, 1);

            

            if (!particle.animating && !particle.hold) {

                // update the particle's location.
                particle.x = particle.x + particle.xV;
                particle.y = particle.y + particle.yV;

                // chaotically nudge the particle.
                let xPush = (Math.random() - .52)
                let yPush = (Math.random() - .52)
                if (particle.xV < 0) {
                    xPush = (Math.random() - .48)
                }
                if (particle.yV < 0) {
                    yPush = (Math.random() - .48)
                }
                particle.xV = particle.xV + .3 * xPush
                particle.yV = particle.yV + .3 * yPush
            } else if (!particle.hold) {
                if (particle.frame < particle.frames) {
                    particle.x = particle.startX + (particle.endX - particle.startX) * easing(particle.frame/particle.frames)
                    particle.y = particle.startY + (particle.endY - particle.startY) * easing(particle.frame/particle.frames)
                    particle.frame += 1;
                } else {
                    particle.animating = false;
                    particle.hold = true;
                }
                
            }
            

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



            // there is air resistance above a certain speed.
            /*
            if (particle.xV > AIR_RESISTANCE_THRESHOLD) {
                particle.xV = particle.xV * AIR_RESISTANCE;
            }
            if (particle.yV > AIR_RESISTANCE_THRESHOLD) {
                particle.yV = particle.yV * AIR_RESISTANCE;
            }
            */
           // there is a dampening force beyond a certain distance from the main point
           /*
            let xDist = Math.abs(particle.x - particle.rootX)
            if (xDist > particle.rdt) {
                if (particle.x > particle.rootX) {
                    particle.xV = Math.max(particle.xV - .001 * particle.stick * (xDist - particle.rdt), MAX_SPEED * -1)
                } else {
                    particle.xV = Math.min(particle.xV + .001 * particle.stick * (xDist - particle.rdt), MAX_SPEED)
                }
            }
            let yDist = Math.abs(particle.y - particle.rootY)
            if (yDist > particle.rdt) {
                if (particle.y > particle.rootY) {
                    particle.yV = Math.max(particle.yV - .001 * particle.stick * (yDist - particle.rdt), MAX_SPEED * -1)
                } else {
                    particle.yV = Math.min(particle.yV + .001 * particle.stick * (yDist - particle.rdt), MAX_SPEED)
                }
            }
            */
        }
    
    
    
        this.frame = window.requestAnimationFrame(this.animate);
    }
    setRootPoints = () => {
        for (let i = 0; i < this.particles.length; i+= 1) {
            let particle = this.particles[i];
            particle.startX = particle.x;
            particle.endX = randomInt(this.refs.canvas.offsetWidth);
            particle.startY = particle.y;
            particle.endY = randomInt(this.refs.canvas.offsetHeight);
            particle.frames = Math.sqrt(Math.pow(particle.startX - particle.endX, 2) + Math.pow(particle.startY - particle.endY,2)) * SPEED_MOD
            particle.frame = 0;
            particle.animating = true;
        }
    }
    showLogo = () => {
        let allPoints = [];
        for(let i = 0; i < awlogo.length; i+=1) {
            let path = awlogo[i];
            if (path.type === "polygon") {
                let points = path.points.split(" ");
                let output = []
                for(let pointCount = 0; pointCount < points.length; pointCount += 2) {
                    output.push({
                        x: points[pointCount] * .5 + (window.innerWidth / 2) - 98,
                        y: points[pointCount + 1] * .5 + 200,
                    });
                }
                allPoints = allPoints.concat(output);
            } else {
                let points = parsePath(path.points).points;
                allPoints = allPoints.concat(points);
            }
        }

        for (let i = 0; i < allPoints.length; i += 1) {
            let particle = this.particles[i];
            let point = allPoints[i];
            particle.startX = particle.x;
            particle.endX = point.x;
            particle.startY = particle.y;
            particle.endY = point.y;
            particle.frames =  Math.sqrt(Math.pow(particle.startX - particle.endX, 2) + Math.pow(particle.startY - particle.endY,2)) * SPEED_MOD;
            particle.frame = 0;
            particle.animating = true;
        }
        console.log(allPoints);
    }
    render() {
        const { classes, children } = this.props
        const { canvasWidth, canvasHeight } = this.state
        return (
            <React.Fragment>
                <CSSBaseline />
                <canvas ref="canvas" width={canvasWidth} height={canvasHeight} className={classes.canvas} />
                <div ref="container" className={classes.container}>
                    {children}
                </div>
            </React.Fragment>
        )
    }
    
}

export default withStyles(styles)(Canvas)