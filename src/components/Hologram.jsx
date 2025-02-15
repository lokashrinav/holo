import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Animated Hologram Effect
function AnimatedHologram() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.6; // Slow rotation
    meshRef.current.material.uniforms.time.value = time; // Pass time to shader
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <shaderMaterial
        attach="material"
        uniforms={{
          time: { value: 0 },
          color: { value: new THREE.Color("#00ffff") },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Vertex Shader (Controls Shape)
const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment Shader (Glowing Effect)
const fragmentShader = `
  uniform float time;
  uniform vec3 color;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    float pulse = sin(time * 3.0) * 0.5 + 0.5;
    vec3 glow = color * pulse;
    gl_FragColor = vec4(glow, 1.0);
  }
`;

function Hologram() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Animated Pulsing Hologram */}
      <AnimatedHologram />

      {/* Bloom Effect for Glow */}
      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
      </EffectComposer>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Hologram;
