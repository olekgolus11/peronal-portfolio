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

  const fragmentShader = `
  varying float vZ;
  
  void main() {
    vec3 colorA = vec3(1, 0.7, 0.73);
    vec3 colorB = vec3(0.7, 1, 1);

    vec3 normalizedPixel = gl_FragCoord.xyz/0.05;
    vec3 color = mix(colorA, colorB, vZ);

  gl_FragColor = vec4(color,1.0);
  }`;

  const vertexShader = `
  varying float vZ;

  void main()
  {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    
    vZ = modelPosition.z;

    gl_Position = projectedPosition;
  }  
  `;

  const planeGeometry = new THREE.PlaneGeometry(10, 10, SEGMENTS, SEGMENTS);
  const updateWave = generatePerlinNoise(
    planeGeometry,
    ANIMATION_SPEED,
    ANIMATION_SCALE,
    ANIMATION_INTENSITY
  );

  useFrame(() => {
    updateWave();
  });

  return (
    <mesh
      position={[0, 1, -2]}
      rotation={[-0.0, 0, 0]}
      ref={meshRef}
      geometry={planeGeometry}
    >
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export default GradientBackground;
