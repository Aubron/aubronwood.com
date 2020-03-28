import React, { useRef } from 'react';
import { BufferGeometry, PlaneBufferGeometry, BufferAttribute, Float32BufferAttribute, Plane } from 'three';
import {Noise} from 'noisejs';

const TerrainGeometry = ({width, depth, divisions, ...props}) => {
  let [xDivisions, zDivisions] = divisions;
  let geometry = new PlaneBufferGeometry(width, depth, xDivisions, zDivisions);
  let noise = new Noise(Math.random());
  /*
  // initialize terrain mesh
  let vertices = new Float32Array(xDivisions * zDivisions * 3);
  // x and z here refer to the points that we're generating, NOT the array indices (3 point coordinate system)
  for (let x = 0; x <= xDivisions; x += 1) {
    for (let z = 0; z <= zDivisions; z += 1) {
      // x value of point
      vertices[(x * xDivisions + z) * 3] = -(width / 2) + width / xDivisions * x;
      // y value of point
      vertices[(x * xDivisions + z) * 3 + 1] = Math.random();
      // z value of point
      vertices[(x * xDivisions + z) * 3 + 2] = -(depth / 2) + depth / zDivisions * z;
    }
  }
  console.log(vertices);
  */
  let vertices = geometry.getAttribute('position');
  console.log(vertices);
  //randomize height
  for (let i = 0; i < vertices.array.length / 3; i += 1) {
    let localNoise = noise.simplex2(vertices.array[i * 3] / 500,vertices.array[i * 3 + 1] / 500) * 50
    console.log(vertices.array[i * 3] + width / 2);
    vertices.array[i * 3 + 2] = 100 * Math.pow(Math.abs(Math.cos((vertices.array[i * 3] + width / 2) / width)),10);
    console.log(`h=${100}, x=${vertices.array[i * 3] + width / 2} c=${0}  w=${10}`)
    console.log(`${100} * |cos(${vertices.array[i * 3] + width / 2} + 0)|^${10}`)
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
  return (
    <mesh
      position={[0,0,0]}
      rotation={[-Math.PI / 2,0,0]}
      >
      <meshStandardMaterial attach="material" color={'hotpink'} />
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