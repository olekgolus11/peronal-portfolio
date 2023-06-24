import projectPaneTexts from "@/utils/texts/projectPaneTexts";
import MyWorkGradientBackground from "../MyWorkGradientBackground/MyWorkGradientBackground";
import ProjectPane from "../ProjectPane/ProjectPane";
import TextSlider from "../TextSlider/TextSlider";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const MyProjectsSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100%",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div>
      <div className='sticky top-0'>
        <TextSlider text='MY WORK' />
        <MyWorkGradientBackground />
      </div>
      <section className='overflow-x-hidden h-screen' ref={triggerRef}>
        <div className='flex items-center relative' ref={sectionRef}>
          {projectPaneTexts.map((projectPaneText) => (
            <div className='w-screen flex-none'>
              <ProjectPane {...projectPaneText} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProjectsSection;
