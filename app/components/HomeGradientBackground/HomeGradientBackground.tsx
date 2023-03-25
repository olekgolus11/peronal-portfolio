import { Canvas } from "@react-three/fiber";
import Gradient from "./Gradient";

const HomeGradientBackground = () => {
  return (
    <div className='fixed w-full h-screen -z-10'>
      <Canvas camera={{ position: [0, -8, 3] }}>
        <Gradient />
      </Canvas>
    </div>
  );
};

export default HomeGradientBackground;
