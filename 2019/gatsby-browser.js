import React from 'react';
import Canvas from './src/components/canvas'

export const wrapRootElement = ({ element }) => {
  return (
    <Canvas>
        {element}
    </Canvas>
  );
}