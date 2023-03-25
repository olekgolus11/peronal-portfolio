import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Gradient from "./Gradient";

const MyWorkGradientBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 0] }}
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <Gradient />
    </Canvas>
  );
};

export default MyWorkGradientBackground;
