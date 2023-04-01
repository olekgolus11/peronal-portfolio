"use client";

import LandingSection from "./components/LandingSection/LandingSection";
import MyWorkGradientBackground from "./components/MyWorkGradientBackground/MyWorkGradientBackground";

export default function MainPage() {
  return (
    <>
      <LandingSection />
      <div className='relative'>
        <p className='text-7xl sm:text-9xl md:text-[10rem] lg:text-[10rem] xl:text-[12rem] font-serif text-slate-50 text-center pt-12'>
          MY WORK
        </p>
        <div className='h-screen absolute w-full top-0 -z-10'>
          <MyWorkGradientBackground />
        </div>
      </div>
    </>
  );
}
