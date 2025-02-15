import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function MiniHologram() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SwirlingSpheres count={5} radius={1.5} />
    </Canvas>
  );
}

function SwirlingSpheres({ count = 5, radius = 1.5 }) {
  const groupRef = useRef();
  const sphereRefs = useRef([]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.25;

    sphereRefs.current.forEach((mesh, i) => {
      if (mesh && mesh.material && mesh.material.uniforms) {
        mesh.material.uniforms.u_time.value = time + i * 0.5;

        const scale = 1 + 0.2 * Math.sin(time * 2 + i);
        mesh.scale.set(scale, scale, scale);
      }
    });
  });

  const angleStep = (Math.PI * 2) / count;
  const spheres = Array.from({ length: count }, (_, i) => {
    const angle = i * angleStep;
    const x = radius * Math.cos(angle);
    const z = radius * Math.sin(angle);
    return { position: [x, 0, z], key: i };
  });

  return (
    <group ref={groupRef}>
      {spheres.map(({ position, key }, i) => (
        <mesh
          key={key}
          position={position}
          ref={(el) => (sphereRefs.current[i] = el)}
        >
          <sphereGeometry args={[0.6, 32, 32]} />
          <shaderMaterial
            uniforms={{
              u_time: { value: 0 },
              u_color: { value: new THREE.Color("#00ffff") },
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

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    vUv = uv;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float u_time;
  uniform vec3 u_color;
  varying vec2 vUv;

  void main() {
    // Distance from center of sphere in UV space
    float dist = distance(vUv, vec2(0.5, 0.5));

    // Create a swirl angle offset
    float swirl = sin(u_time + dist * 10.0);

    // Shift color by swirl
    vec3 color = u_color * swirl;

    // Fade out near the edges of the sphere by using 'dist'
    float alpha = 1.0 - smoothstep(0.4, 0.5, dist);

    gl_FragColor = vec4(color, alpha);
  }
`;

export default MiniHologram;
