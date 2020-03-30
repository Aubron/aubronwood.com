import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { makeStyles } from '@material-ui/core/styles';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Terrain from './three/Terrain';
import { Fog, FogExp2 } from "three";
import ExampleBuilding from './three/ExampleBuilding'

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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Canvas
        camera={{ position: [0, 30, 50] }}
        onCreated={({gl}) => {
          gl.setClearColor("#0c0f13")
        }}
        >
        <CameraController />
        <ambientLight
          intensity={.2}
          />
        <pointLight
          color={0x55b3f9}
          intensity={1}
          decay={2}
          position={[0,40,-140]}
          />
        
        <Suspense fallback={null}>
          <ExampleBuilding />
        </Suspense>
        <Suspense fallback={null}>
          <Terrain width={800} depth={800} divisions={[800,800]} />
        </Suspense>
        <fog attach="fog" args={["#0c0f13", 50, 190]} />
      </Canvas>

    </div>
  );
}

export default App;
