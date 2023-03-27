import { Canvas } from "@react-three/fiber";
import Gradient from "./Gradient";

const HomeGradientBackground = () => {
  return (
    <div className='fixed w-full h-screen -z-10'>
      <Canvas
        camera={{ position: [0, 0, 0] }}
        style={{ backgroundColor: "#0f0f0f" }}
      >
        <Gradient />
      </Canvas>
    </div>
  );
};

export default HomeGradientBackground;
