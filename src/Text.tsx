// @ts-nocheck
// react-three-fiber does not play well with typescript

import * as THREE from 'three'
import React, { forwardRef, useMemo } from 'react'
import { useLoader, useUpdate, useThree } from 'react-three-fiber'

interface TextProps {
  children: string
  position?: int[]
  fontUrl?: string

  left?: number
  right?: number
  top?: number
  bottom?: number

  width?: number
  height?: number

  hAlign?: string
  vAlign?: string
}

const getExtends = function(camera, distance){
  const y = Math.tan(camera.fov * Math.PI / 180 * 0.5) * distance * 2;
  const x = y * camera.aspect;
  return [x,y];
}

const Text = forwardRef(({ children, vAlign = 'center', hAlign = 'center', color = '#000000', fontUrl='op', left, right, top, bottom, width, height, ...props }: TextProps, ref) => {
  const font = useLoader(THREE.FontLoader, `/${fontUrl}.blob`)
  const config = useMemo(() => ({ font, size: 70, height: 0, curveSegments: 4, bevelEnabled: false, bevelThickness: 2, bevelSize: 1.5, bevelOffset: 0}), [font])
  const three = useThree();


  

  // now, use these values to position and otherwise scale the content
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)

      // determine visible area at depth (assuming 27 for simplicity)
      const [xFrustum, yFrustum] = getExtends(three.camera, 27)

      if (width) {
        width = width / 100 * xFrustum;
      } else if (height) {
        height = height / 100 * yFrustum;
      } else {
        height = 20
      }
      

      // position is also expected as left or right, top or bottom, as a 100,100 coordinate grid.
      let xOffset = 0;
      let yOffset = 0;
      if (left !== undefined) {
        left /= 100;
        xOffset = (-xFrustum / 2) + (xFrustum * left);
      } else if (right !== undefined) {
        right /= 100;
        xOffset = (xFrustum / 2) - (xFrustum * right);
      }

      if (bottom !== undefined) {
        bottom /= 100;
        yOffset = (-yFrustum / 2) + (yFrustum * bottom);
      } else if (top !== undefined) {
        top /= 100;
        yOffset = (yFrustum / 2) - (yFrustum * top);
      }

      // scale the text to reach the desired size
      if (width) {
        self.scale.set(width / size.x, width / size.x, 1)
      } else if (height) {
        self.scale.set(height / size.y, height / size.y, 1)
      }

      self.position.x = hAlign === 'center' ? -size.x * self.scale.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y * self.scale.y / 2 : vAlign === 'top' ? 0 : -size.y

      self.position.x = self.position.x + xOffset;
      self.position.y = self.position.y + yOffset;

    },
    [children]
  )




  return (
    <group ref={ref} {...props} scale={[1,1,1]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshPhongMaterial color="#FFF" flatShading attach="material" />
        <meshPhongMaterial color="#FFF" attach="material" />
      </mesh>
    </group>
  )
})

export default Text
