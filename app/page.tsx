"use client";

import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import MyProjectsSection from "@/components/MyProjectsSection/MyProjectsSection";
import LandingSection from "../components/LandingSection/LandingSection";

export default function MainPage() {
  return (
    <>
      <LandingSection />
      <MyProjectsSection />
      <AboutMeSection />
      <LandingSection />
      <LandingSection />
    </>
  );
}
