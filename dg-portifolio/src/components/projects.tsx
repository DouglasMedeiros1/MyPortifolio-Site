import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import '../styles/projects.css';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';


function Monitor3d(props: any) {
  const { scene } = useGLTF('/assets/3D/Monitor.glb');
  return <primitive object={scene} {...props} />;
}

export default function Projects() {

  return (
    <>
      <div id="modelCanvasDiv-projects">
        <Canvas camera={{ position: [15, 6, 0], fov: 25 }} shadows dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <Monitor3d scale={1.25} position={[-2.5, -0.5, 2]} rotation={[0, 0.5, 0]} />
          <directionalLight
            position={[20, 40, 30]}
            intensity={2.5}
            color={'#fff'}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0005}
          />
          <EffectComposer>
            <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={0.6} />
          </EffectComposer>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
        </Canvas>
      </div>
    </>
  );
}