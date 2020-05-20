import React, { Suspense, useState, useRef, useCallback } from 'react';
import { Canvas } from 'react-three-fiber';
import { WebGLRenderer, Color } from 'three';
import { makeStyles } from '@material-ui/styles';
import ParticleSystem from './ParticleSystem'
import Effects from './Effects'
import Image from './Image'
import Text from './Text'

const useStyles = makeStyles({
  canvas: {
    minHeight: '100vh',
    width: '100vw',
  }
})


const getHeightPercentFromPixel = (pixels: number) => {
  return pixels / window.innerHeight * 100
}


const Splash = () => {
  const mouse = useRef([0, 0])
  const classes = useStyles();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const [down, setDown] = useState(false)
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const onCreated = ({gl}: { gl: WebGLRenderer}) => {
    gl.setClearColor('#86b5cf');
  }

  const aspectRatio = window.innerWidth / window.innerHeight
  const widescreen = aspectRatio > 1.3

  let scaleProps: {
    height?: number,
    width?: number
  } = {
    height: 80
  }
  if (!widescreen) {
    scaleProps = {
      width: 40
    }
  }

  return (
    <Canvas
      className={classes.canvas}
      camera={{ fov: 100, position: [0,0,30] }}
      onMouseMove={onMouseMove}
      onMouseUp={() => setDown(false)}
      onMouseDown={() => setDown(true)}
      onCreated={onCreated}
      gl={{
        antialias: false
      }}
      >
      <directionalLight color={new Color('#FFF')} intensity={0.125} position={[0,0,1]} />
      <pointLight color={new Color('#FFF')} intensity={1.5} position={[0,100,90]} />
      <fog attach="fog" args={['white' as any, 250, 1400]} />
      <ParticleSystem mouse={mouse} count={isMobile ? 400 : 600} />
      <Effects down={down} />
      <Suspense fallback={null}>
        <Image url="me.png" left={0} bottom={0} {...scaleProps} />
        { isMobile || !widescreen ? <>
          <Image url="github.png" center={[0.5,0]} left={50} bottom={getHeightPercentFromPixel(105)} width={8} linkUrl="https://github.com/aubron" />
          <Image url="ss.png" center={[0.5,0]} left={50} bottom={getHeightPercentFromPixel(20)} pixelHeight={40} linkUrl="https://medium.com/@aubronw/startup-to-finish-scoreshots-194ba1e8e266" />
          <Image url="bw.png" center={[0.5,0]} left={50} bottom={getHeightPercentFromPixel(60)} pixelHeight={40} linkUrl="https://medium.com/@aubronw/bandwidth-a-story-in-progress-f9970846642c" />
        </> : <>
          <Image url="github.png" center={[0.5,0]} left={50} bottom={getHeightPercentFromPixel(80)} width={3} linkUrl="https://github.com/aubron" />
          <Image url="ss.png" center={[0.5,0]} left={60} bottom={getHeightPercentFromPixel(80)} width={12} linkUrl="https://medium.com/@aubronw/startup-to-finish-scoreshots-194ba1e8e266" />
          <Image url="bw.png" center={[0.5,0]} left={40} bottom={getHeightPercentFromPixel(80)} width={12} linkUrl="https://medium.com/@aubronw/bandwidth-a-story-in-progress-f9970846642c" />
        </>}
        
        <Text
          position={[0,0,3]}
          width={isMobile || !widescreen ? 70 : 40}
        >
          Aubron Wood
        </Text>
        
        <Text
          position={[0,0,3]}
          fontUrl="opl"
          width={isMobile || !widescreen ? 50 : 18}
          bottom={40}
        >
          frontend engineer
        </Text>
        <Text
          position={[0,0,3]}
          fontUrl="opl"
          height={2}
          bottom={20}
        >
          my work:
        </Text>
      </Suspense>
      
    </Canvas>
  )
}

export default Splash;