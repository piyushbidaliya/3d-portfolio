import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive
      object={earth.scene}
      scale={3}
      position-y={0}
      position-x={0}
    />
  )
}

const EarthCanvas = () => {
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fav:45,
        near:0.1,
        far:200,
        position:[-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minpolarAngle={Math.PI/2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas