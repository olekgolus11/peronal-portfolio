import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Gradient from "./Gradient";

const MyWorkGradientBackground = () => {
  return (
    <div className='h-screen absolute w-full top-0 -z-10'>
      <Canvas
        camera={{ position: [0, 0, 0] }}
        style={{ backgroundColor: "#0f0f0f" }}
      >
        <Gradient />
      </Canvas>
    </div>
  );
};

export default MyWorkGradientBackground;
