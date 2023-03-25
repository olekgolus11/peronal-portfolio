import { Canvas } from "@react-three/fiber";
import Gradient from "./Gradient";

const MyWorkGradientBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, -8, 3] }}
      style={{ backgroundColor: "#0f0f0f" }}
    >
      <Gradient />
    </Canvas>
  );
};

export default MyWorkGradientBackground;
