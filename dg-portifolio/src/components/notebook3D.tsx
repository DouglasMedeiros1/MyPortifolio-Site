import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import '../styles/notebook3D.css';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { Vector2 } from 'three';

function NotebookModel(props: any) {
  const { scene } = useGLTF('/assets/3D/Notebook.glb');
  return <primitive object={scene} {...props} />;
}

export default function Notebook3D() {
  // Necessário carregar o modelo GLB
  useGLTF.preload('/assets/3D/Notebook.glb');

  return (
    <div className="background3d-container">
      <Canvas camera={{ position: [-42, 25, 90], fov: 30 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[20, 40, 30]}
          intensity={2.5}
          color={'#fff'}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />
        <NotebookModel scale={1.2} position={[-15, 1, 10]} />
        <EffectComposer>
          <Glitch
            delay={new Vector2(4, 4)}
            duration={new Vector2(0.6, 1.0)}
            strength={new Vector2(0.4, 0.4)}
            active
            ratio={0.85}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

