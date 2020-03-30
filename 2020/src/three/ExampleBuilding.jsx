import React from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

const ExampleBuilding = () => {
  const [
    metalnessMap,
    roughnessMap,
    normalMap,
    displacementMap,
    map
  ] = useLoader(
    TextureLoader,
    [
      '/img/Metal029_2K_Metalness.jpg',
      '/img/Metal029_2K_Roughness.jpg',
      '/img/Metal029_2K_Normal.jpg',
      '/img/Metal029_2K_Displacement.jpg',
      '/img/Metal029_2K_Color.jpg'
    ]
  )
  return (
    <group>
      <mesh
      position={[0,0,0]}
      rotation={[0,0,0]}
      >
        <meshStandardMaterial
          attach="material"
          map={map}
          metalnessMap={metalnessMap}
          roughnessMap={roughnessMap}
          bumpMap={displacementMap}
          normalMap={normalMap}
          />
        <cylinderBufferGeometry
          attach="geometry"
          args={[10,10,14,32]}
          />
      </mesh>
    </group>
    
  )
}

export default ExampleBuilding;