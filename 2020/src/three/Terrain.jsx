import React, { useRef, Suspense } from 'react';
import { BufferGeometry, PlaneBufferGeometry, BufferAttribute, Float32BufferAttribute, Plane, TextureLoader, RepeatWrapping } from 'three';
import { useLoader } from 'react-three-fiber'
import {Noise} from 'noisejs';

const TerrainGeometry = ({width, depth, divisions, ...props}) => {
  let [xDivisions, zDivisions] = divisions;
  let geometry = new PlaneBufferGeometry(width, depth, xDivisions, zDivisions);
  let noise = new Noise(Math.random());
  let vertices = geometry.getAttribute('position');
  console.log(vertices);
  //randomize height
  for (let i = 0; i < vertices.array.length / 3; i += 1) {
    let localNoise = (noise.simplex2(vertices.array[i * 3] / 32,vertices.array[i * 3 + 1] / 70) + 1) * 50
    let multiplier = Math.cos(((vertices.array[i * 3] + (width / 2)) / width) * 2 * Math.PI) + 1
    vertices.array[i * 3 + 2] = localNoise * multiplier;
  }
  console.log(vertices.array);
  geometry.setAttribute('position', new Float32BufferAttribute(vertices.array, 3));
  console.log(geometry);
  //geometry.setAttribute('position',new Float32BufferAttribute(vertices, 3));
  //console.log(geometry);
  return (
    <primitive
      {...props}
      object={geometry}
      />
  )
}

const Terrain = ({width, depth, divisions}) => {
  const [
    aoMap,
    roughnessMap,
    normalMap,
    displacementMap,
    map
  ] = useLoader(
    TextureLoader,
    [
      '/img/Rock035_4K_AmbientOcclusion.jpg',
      '/img/Rock035_4K_Roughness.jpg',
      '/img/Rock035_4K_Normal.jpg',
      '/img/Rock035_4K_Displacement.jpg',
      '/img/Rock035_4K_Color.jpg'
    ]
  )
  let repeat = width / 200
  map.wrapS=RepeatWrapping
  map.wrapT=RepeatWrapping
  map.repeat.set(repeat,repeat);
  displacementMap.wrapS=RepeatWrapping
  displacementMap.wrapT=RepeatWrapping
  displacementMap.repeat.set(repeat,repeat)
  aoMap.wrapS=RepeatWrapping
  aoMap.wrapT=RepeatWrapping
  aoMap.repeat.set(repeat,repeat)
  roughnessMap.wrapS=RepeatWrapping
  roughnessMap.wrapT=RepeatWrapping
  roughnessMap.repeat.set(repeat,repeat)
  normalMap.wrapS=RepeatWrapping
  normalMap.wrapT=RepeatWrapping
  normalMap.repeat.set(repeat,repeat)
  return (
    <mesh
    position={[0,0,0]}
    rotation={[-Math.PI / 2,0,0]}
    >
      <meshStandardMaterial
        attach="material"
        map={map}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        />
      <TerrainGeometry
        attach="geometry"
        width={width}
        depth={depth}
        divisions={divisions}
        />
    </mesh>
    
  )
}

export default Terrain