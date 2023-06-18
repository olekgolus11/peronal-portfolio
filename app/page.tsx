"use client";

import LandingSection from "./components/LandingSection/LandingSection";
import MyWorkGradientBackground from "./components/MyWorkGradientBackground/MyWorkGradientBackground";
import ProjectPane from "./components/ProjectPane/ProjectPane";
import TextSlider from "./components/TextSlider/TextSlider";

export default function MainPage() {
  return (
    <>
      <LandingSection />
      <div className='sticky top-0'>
        <TextSlider text='MY WORK' />
        <div className='h-screen absolute w-full top-0 -z-10'>
          <MyWorkGradientBackground />
        </div>
      </div>
      <ProjectPane />
    </>
  );
}
