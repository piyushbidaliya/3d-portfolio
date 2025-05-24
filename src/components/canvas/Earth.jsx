import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = ({isMobile}) => {
  const earth = useGLTF('./planet/scene.glb')
  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 3 : 5}
      position-y={0}
      position-x={0}
    />
  )
}

const EarthCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width: 500px)')
      setIsMobile(mediaQuery.matches)
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches)
      }
  
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      
      return ()=>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }, [])
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
        <Earth isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas