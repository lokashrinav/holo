import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

function AboutSection() {
  return (
    <section id="about" className="about-section holo-panel">
      <h2>Who I Am</h2>
      <p>My journey in software engineering and automation.</p>

      
    </section>
  );
}

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

export default AboutSection;
