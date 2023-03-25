"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

const Gradient = () => {
  const meshRef = useRef<Mesh>(null!);
  const SEGMENTS = 1000;
  const planeGeometry = new THREE.PlaneGeometry(20, 20, SEGMENTS, SEGMENTS);
  const windowSize = new THREE.Vector2(window.innerWidth, window.innerHeight);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_resolution: {
        value: windowSize,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;
    uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    uniforms;
  });

  return (
    <mesh
      position={[0, 0, 1]}
      rotation={[0.75, 0, 0]}
      ref={meshRef}
      geometry={planeGeometry}
      scale={4}
    >
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Gradient;
