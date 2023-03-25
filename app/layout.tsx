"use client";

import "./globals.css";
import HomeGradientBackground from "./components/HomeGradientBackground/HomeGradientBackground";
import MyWorkGradientBackground from "./components/MyWorkGradientBackground/MyWorkGradientBackground";
import { Canvas } from "@react-three/fiber";
import { Libre_Caslon_Display } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const libre_caslon_display = Libre_Caslon_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-caslon-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={libre_caslon_display.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='absolute w-full h-screen -z-10'>
          <Canvas camera={{ position: [0, -8, 3] }}>
            <HomeGradientBackground />
          </Canvas>
          <Canvas
            camera={{ position: [0, -8, 3] }}
            style={{ backgroundColor: "#0f0f0f" }}
          >
            <MyWorkGradientBackground />
          </Canvas>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
