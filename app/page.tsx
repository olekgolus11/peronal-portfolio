"use client";

import LandingPage from "./components/LandingPage/LandingPage";
import MyWorkGradientBackground from "./components/MyWorkGradientBackground/MyWorkGradientBackground";

export default function MainPage() {
  return (
    <>
      <LandingPage />
      <div className='relative'>
        <p className='text-9xl text-rose-50 text-center font-serif pt-24'>
          MY WORK
        </p>
        <div className='h-screen absolute w-full top-0 -z-10'>
          <MyWorkGradientBackground />
        </div>
      </div>
    </>
  );
}
