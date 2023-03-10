import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";

const GradientBackground = () => {
  const meshRef = useRef<Mesh>(null!);
  const SEGMENTS = 100;
  const planeGeometry = new THREE.PlaneGeometry(10, 10, SEGMENTS, SEGMENTS);

  useFrame(() => {});

  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-0.0, 0, 0]}
      ref={meshRef}
      geometry={planeGeometry}
      scale={1}
    >
      <shaderMaterial
        wireframe
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};

export default GradientBackground;
