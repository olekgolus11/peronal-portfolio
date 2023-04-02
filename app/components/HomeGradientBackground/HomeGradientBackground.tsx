import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import Gradient from "./Gradient";

const HomeGradientBackground = () => {
  return (
    <div id='home-canvas-container' className='fixed w-full h-screen -z-10'>
      <Canvas
        camera={{ position: [0, 0, 0] }}
        style={{ backgroundColor: "#0f0f0f" }}
        eventSource={document.body}
        eventPrefix='client'
      >
        <Gradient />
      </Canvas>
    </div>
  );
};

export default HomeGradientBackground;
