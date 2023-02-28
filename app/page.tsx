"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import GradientBackground from "./components/GradientBackground/GradientBackground";

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

export default function Home() {
  return (
    <div className='fixed w-full h-full'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
        <GradientBackground />
      </Canvas>
    </div>
  );
}
