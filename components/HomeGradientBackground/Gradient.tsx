"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useMotionValue, useSpring } from "framer-motion";

const Gradient = () => {
  const meshRef = useRef<Mesh>(null!);
  const SEGMENTS = 500;
  const sphereGeometry = new THREE.SphereGeometry(4, SEGMENTS, SEGMENTS);
  const windowSize = new THREE.Vector2(window.innerWidth, window.innerHeight);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x);
  const springY = useSpring(y);
  const mouseInit = new THREE.Vector2(springX.get(), springY.get());

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_resolution: {
        value: windowSize,
      },
      u_mouse: {
        value: mouseInit,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock, mouse } = state;
    uniforms.u_time.value = 0.4 * clock.getElapsedTime();
    springX.set(mouse.x);
    springY.set(mouse.y);
    uniforms.u_mouse.value.set(springX.get(), springY.get());
  });

  return (
    <mesh
      position={[0, 0, -70]}
      rotation={[0, 0, 0]}
      ref={meshRef}
      geometry={sphereGeometry}
      scale={6}
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
