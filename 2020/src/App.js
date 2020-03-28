import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { makeStyles } from '@material-ui/core/styles';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Terrain from './three/Terrain';

const useStyles = makeStyles({
  root: {
    height: '100vh'
  },
});

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 500;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Canvas camera={{ position: [0, 40, 50] }}>
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 200, 10]} />
        <Box position={[-1.2, 10, 0]} />
        <Box position={[1.2, 10, 0]} />
        <Terrain width={800} depth={800} divisions={[20,20]} />
        
      </Canvas>

    </div>
  );
}

export default App;
