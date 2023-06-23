import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Gradient from "./Gradient";

const HomeGradientBackground = () => {
  const [eventSource, setEventSource] = useState<HTMLElement | undefined>(
    undefined
  );
  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <div id='home-canvas-container' className='fixed w-full h-screen -z-10'>
      <Canvas
        camera={{ position: [0, 0, 0] }}
        style={{ backgroundColor: "#0f0f0f" }}
        eventSource={eventSource ? eventSource : undefined}
        eventPrefix='client'
      >
        <Gradient />
      </Canvas>
    </div>
  );
};

export default HomeGradientBackground;
