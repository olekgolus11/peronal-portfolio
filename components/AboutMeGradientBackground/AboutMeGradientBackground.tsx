import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Gradient from "./Gradient";

const AboutMeGradientBackground = () => {
  const [eventSource, setEventSource] = useState<HTMLElement | undefined>(
    undefined
  );
  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <div className="h-screen absolute w-full top-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 0] }}
        style={{ backgroundColor: "#0f0f0f" }}
        eventSource={eventSource ? eventSource : undefined}
        eventPrefix="client"
      >
        <Gradient positionX={40} positionY={-10} />
      </Canvas>
    </div>
  );
};

export default AboutMeGradientBackground;
