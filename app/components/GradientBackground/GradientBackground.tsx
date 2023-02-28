import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import generatePerlinNoise from "./perlinNoise";
import * as THREE from "three";

const GradientBackground = () => {
  const meshRef = useRef<Mesh>(null!);
  const SEGMENTS = 100;
  const ANIMATION_SPEED = 2;
  const ANIMATION_SCALE = 0.2;
  const ANIMATION_INTENSITY = 3;

  const planeGeometry = new THREE.PlaneGeometry(10, 10, SEGMENTS, SEGMENTS);
  const updateNoise = generatePerlinNoise(
    planeGeometry,
    ANIMATION_SPEED,
    ANIMATION_SCALE,
    ANIMATION_INTENSITY
  );

  useFrame(() => {
    updateNoise();
  });

  return (
    <mesh
      position={[0, 1, -2]}
      rotation={[-0.5, 0, 0]}
      ref={meshRef}
      geometry={planeGeometry}
    >
      <meshStandardMaterial color={"blue"} wireframe />
    </mesh>
  );
};

export default GradientBackground;
