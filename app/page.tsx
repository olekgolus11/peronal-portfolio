"use client";

import projectPaneTexts from "@/utils/texts/projectPaneTexts";
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
        <MyWorkGradientBackground />
      </div>
      <div className='flex gap-4'>
        <p>Elo</p>
      </div>
      <ProjectPane {...projectPaneTexts[0]} />
    </>
  );
}
