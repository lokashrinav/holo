import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import NeonButton from "../components/NeonButton"; 
import "./HeroSection.css"; 

const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 color;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    // Create a pulsing value between 0 and 1
    float pulse = sin(time * 3.0) * 0.5 + 0.5;
    vec3 glow = color * pulse;
    gl_FragColor = vec4(glow, 1.0);
  }
`;

function OrbitingHolograms() {
  const groupRef = useRef();
  const meshRefs = useRef([]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.3;

    meshRefs.current.forEach((mesh) => {
      if (mesh) {
        mesh.material.uniforms.time.value = time;
      }
    });
  });

  const count = 8;
  const radius = 3;

  const positions = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return [x, 0, z];
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => (meshRefs.current[i] = el)}
        >
          <sphereGeometry args={[0.6, 64, 64]} />
          <shaderMaterial
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
      ))}
    </group>
  );
}

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="glitch-text">Welcome to My Portfolio</h1>

        <div style={ {
            width: "300px",
            height: "300px",
            margin: "0 auto",
            marginTop: "-100px", 
          }}>
          <Canvas camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <OrbitingHolograms />

            <EffectComposer>
              <Bloom
                intensity={1.5}
                luminanceThreshold={0.1}
                luminanceSmoothing={0.9}
              />
            </EffectComposer>
          </Canvas>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
