//@ts-nocheck
// react-three-fiber does not play well with typescript

import React, { useState, useEffect } from 'react'
import { TextureLoader, NearestFilter } from 'three';
import { useThree, useLoader } from 'react-three-fiber'

interface ImageProps {
  url: string

  width?: number
  height?: number
  pixelWidth?: number
  pixelHeight?: number

  center?: number[]

  left?: number
  right?: number
  top?: number
  bottom?: number

  linkUrl?: string
}

const getExtends = function(camera, distance){
  const y = Math.tan(camera.fov * Math.PI / 180 * 0.5) * distance * 2;
  const x = y * camera.aspect;
  return [x,y];
}

export const Image: React.FC<ImageProps> = ({ url, center = [0,0], left, right, top, bottom, width, height, pixelWidth, pixelHeight, linkUrl, ...props}) => {
  let [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered && linkUrl
      ? 'pointer'
      : 'auto'
  }, [hovered, linkUrl])


  const texture = useLoader(TextureLoader, url)
  texture.magFilter = NearestFilter
  const three = useThree();

  // determine visible area at depth (assuming 30 for simplicity)
  let [xFrustum, yFrustum] = getExtends(three.camera, 30)

  // expect that user has specified either height or width as a vw or vh style attribute
  if (pixelHeight || pixelWidth) {
    // target a pixel resolution on the user's screen.
    if (pixelWidth) {
      width = pixelWidth / (window.innerWidth / 100)
    } else {
      height = pixelHeight / (window.innerHeight / 100)
    }
  }
  if (width) {
    width = width / 100 * xFrustum;
    height = width / texture.image.width * texture.image.height;
  } else if (height) {
    height = height / 100 * yFrustum;
    width = height / texture.image.height * texture.image.width;
  } else {
    width = 20
    height = width / texture.image.width * texture.image.height;
  }
  

  // position is also expected as left or right, top or bottom, as a 100,100 coordinate grid.
  let xOffset = 0;
  let yOffset = 0;
  if (left !== undefined) {
    left = left / 100;
    xOffset = (-xFrustum / 2) + (xFrustum * left);
  } else if (right !== undefined) {
    right = right / 100;
    xOffset = (xFrustum / 2) - (xFrustum * right);
  }

  if (bottom !== undefined) {
    bottom = bottom / 100;
    yOffset = (-yFrustum / 2) + (yFrustum * bottom);
  } else if (top !== undefined) {
    top = top / 100;
    yOffset = (yFrustum / 2) - (yFrustum * top);
  }

  return (
    <sprite
      {...props}
      center={center}
      position={[xOffset,yOffset,0]}
      scale={[width, height, 0]}
      onClick={() => {
        if (linkUrl) {
          window.location.href = linkUrl;
        }
      }}
      onPointerOver={(e) => setHovered(true)}
      onPointerOut={(e) => setHovered(false)}>
    >
      <spriteMaterial attach="material" map={texture} />
    </sprite>
  )
}

export default Image;