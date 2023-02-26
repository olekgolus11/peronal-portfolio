"use client";

import { use, useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferAttribute, Mesh, PlaneGeometry } from "three";
import * as THREE from "three";
import perlinNoise from "./components/GradientBackground/perlinNoise";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  const meshRef = useRef<Mesh>(null!);
  useFrame(() => {
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.001;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

const BackgroundPlane = () => {
  const SEGMENTS = 100;
  const meshRef = useRef<Mesh>(null!);
  const geometry = new THREE.PlaneGeometry(10, 10, SEGMENTS, SEGMENTS);
  const positionAttribute = geometry.getAttribute("position");
  let time = 0;

  useFrame(() => {
    time += 0.005;
    for (let vertexId = 0; vertexId < positionAttribute.count; vertexId++) {
      const positionX = (positionAttribute as BufferAttribute).getX(vertexId);
      const positionY = (positionAttribute as BufferAttribute).getY(vertexId);
      (positionAttribute as BufferAttribute).setZ(
        vertexId,
        perlinNoise(positionX, positionY, time)
      );
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <mesh
      position={[0, 1, -2]}
      rotation={[-0.5, 0, 0]}
      ref={meshRef}
      geometry={geometry}
    >
      <meshStandardMaterial color={"blue"} wireframe />
    </mesh>
  );
};

export default function Home() {
  return (
    <div className='fixed w-full h-full'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
        <BackgroundPlane />
      </Canvas>
    </div>
  );
}
